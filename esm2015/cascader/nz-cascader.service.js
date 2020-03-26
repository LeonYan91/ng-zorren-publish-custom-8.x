/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { arraysEqual, isNotNil } from 'ng-zorro-antd/core';
import { isShowSearchObject } from './nz-cascader-definitions';
import { isChildOption, isParentOption } from './nz-cascader-utils';
/**
 * All data is stored and parsed in NzCascaderService.
 */
export class NzCascaderService {
    constructor() {
        /**
         * Activated options in each column.
         */
        this.activatedOptions = [];
        /**
         * An array to store cascader items arranged in different layers.
         */
        this.columns = [[]];
        /**
         * If user has entered searching mode.
         */
        this.inSearchingMode = false;
        /**
         * Selected options would be output to user.
         */
        this.selectedOptions = [];
        this.values = []; // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.$loading = new BehaviorSubject(false);
        /**
         * Emit an event to notify cascader it needs to redraw because activated or
         * selected options are changed.
         */
        this.$redraw = new Subject();
        /**
         * Emit an event when an option gets selected.
         * Emit true if a leaf options is selected.
         */
        this.$optionSelected = new Subject();
        /**
         * Emit an event to notify cascader it needs to quit searching mode.
         * Only emit when user do select a searching option.
         */
        this.$quitSearching = new Subject();
        /**
         * To hold columns before entering searching mode.
         */
        this.columnsSnapshot = [[]];
        /**
         * To hold activated options before entering searching mode.
         */
        this.activatedOptionsSnapshot = [];
    }
    /**
     * Return cascader options in the first layer.
     * @return {?}
     */
    get nzOptions() {
        return this.columns[0];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    }
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    syncOptions(first = false) {
        /** @type {?} */
        const values = this.values;
        /** @type {?} */
        const hasValue = values && values.length;
        /** @type {?} */
        const lastColumnIndex = values.length - 1;
        /** @type {?} */
        const initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        (columnIndex) => {
            /** @type {?} */
            const activatedOptionSetter = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    this.$redraw.next();
                    return;
                }
                /** @type {?} */
                const option = this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : {
                            [`${this.cascaderComponent.nzValueProperty}`]: currentValue,
                            [`${this.cascaderComponent.nzLabelProperty}`]: currentValue
                        });
                this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    this.dropBehindColumns(columnIndex);
                    this.selectedOptions = [...this.activatedOptions];
                    this.$redraw.next();
                }
            });
            if (this.isLoaded(columnIndex) || !this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                const option = this.activatedOptions[columnIndex - 1] || {};
                this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
            }
        });
        this.activatedOptions = [];
        this.selectedOptions = [];
        if (first && this.cascaderComponent.nzLoadData && !hasValue) {
            // Should also notify the component that value changes. Fix #3480.
            this.$redraw.next();
            return;
        }
        else {
            initColumnWithIndex(0);
        }
    }
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    withComponent(cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    }
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    withOptions(options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    }
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    setOptionActivated(option, columnIndex, performSelect = false, loadingChildren = true) {
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        const isParent = isParentOption(option);
        if (isParent) {
            // Parent option that has children.
            this.setColumnData((/** @type {?} */ (option.children)), columnIndex + 1, option);
        }
        else if (!option.isLeaf && loadingChildren) {
            // Parent option that should try to load children asynchronously.
            this.loadChildren(option, columnIndex);
        }
        else if (option.isLeaf) {
            // Leaf option.
            this.dropBehindColumns(columnIndex);
        }
        // Actually perform selection to make an options not only activated but also selected.
        if (performSelect) {
            this.setOptionSelected(option, columnIndex);
        }
        this.$redraw.next();
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    setOptionSelected(option, index) {
        /** @type {?} */
        const changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        const shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        (o, i) => {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = [...this.activatedOptions];
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option, index });
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    setOptionDeactivatedSinceColumn(column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    }
    /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    setSearchOptionSelected(option) {
        this.activatedOptions = [option];
        this.selectedOptions = [...option.path];
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        () => {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            this.$quitSearching.next();
            this.$redraw.next();
            this.inSearchingMode = false;
            this.columns = [...this.columnsSnapshot];
            this.activatedOptions = [...this.selectedOptions];
        }), 200);
    }
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    prepareSearchOptions(searchValue) {
        /** @type {?} */
        const results = [];
        // Search results only have one layer.
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        (i, p) => {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            o => {
                /** @type {?} */
                const label = this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        const showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        const filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        const sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        const loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                /** @type {?} */
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.cascaderComponent.nzLabelProperty]: cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    p => this.getOptionLabel(p))).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        const loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            sNode => {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            }));
            path.pop();
        });
        if (!this.columnsSnapshot.length) {
            this.columns = [[]];
            return;
        }
        this.columnsSnapshot[0].forEach((/**
         * @param {?} o
         * @return {?}
         */
        o => (isChildOption(o) ? loopChild(o) : loopParent(o))));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => sorter(a.path, b.path, searchValue)));
        }
        this.columns = [results];
    }
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    toggleSearchingMode(toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = [...this.activatedOptions];
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = [...this.activatedOptionsSnapshot];
            this.selectedOptions = [...this.activatedOptions];
            this.columns = [...this.columnsSnapshot];
            this.syncOptions();
            this.$redraw.next();
        }
    }
    /**
     * Clear selected options.
     * @return {?}
     */
    clear() {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionLabel(o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionValue(o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    }
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    setColumnData(options, columnIndex, parent) {
        /** @type {?} */
        const existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            o => (o.parent = parent)));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    }
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    trackAncestorActivatedOptions(startIndex) {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindActivatedOptions(lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindColumns(lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    }
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildren(option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        /** @type {?} */
        const loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            () => {
                option.loading = false;
                if (option.children) {
                    this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                this.$loading.next(false);
                this.$redraw.next();
            }), (/**
             * @return {?}
             */
            () => {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                this.$redraw.next();
            }));
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.columns[index] && this.columns[index].length > 0;
    }
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    findOptionWithValue(columnIndex, value // tslint:disable-line:no-any
    ) {
        /** @type {?} */
        const targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            const v = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            o => v === this.getOptionValue(o)))));
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    prepareEmitValue() {
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.getOptionValue(o)));
    }
}
NzCascaderService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Activated options in each column.
     * @type {?}
     */
    NzCascaderService.prototype.activatedOptions;
    /**
     * An array to store cascader items arranged in different layers.
     * @type {?}
     */
    NzCascaderService.prototype.columns;
    /**
     * If user has entered searching mode.
     * @type {?}
     */
    NzCascaderService.prototype.inSearchingMode;
    /**
     * Selected options would be output to user.
     * @type {?}
     */
    NzCascaderService.prototype.selectedOptions;
    /** @type {?} */
    NzCascaderService.prototype.values;
    /** @type {?} */
    NzCascaderService.prototype.$loading;
    /**
     * Emit an event to notify cascader it needs to redraw because activated or
     * selected options are changed.
     * @type {?}
     */
    NzCascaderService.prototype.$redraw;
    /**
     * Emit an event when an option gets selected.
     * Emit true if a leaf options is selected.
     * @type {?}
     */
    NzCascaderService.prototype.$optionSelected;
    /**
     * Emit an event to notify cascader it needs to quit searching mode.
     * Only emit when user do select a searching option.
     * @type {?}
     */
    NzCascaderService.prototype.$quitSearching;
    /**
     * To hold columns before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.columnsSnapshot;
    /**
     * To hold activated options before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.activatedOptionsSnapshot;
    /**
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.cascaderComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFDTCxrQkFBa0IsRUFLbkIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBTXBFLE1BQU0sT0FBTyxpQkFBaUI7SUFEOUI7Ozs7UUFHRSxxQkFBZ0IsR0FBdUIsRUFBRSxDQUFDOzs7O1FBRzFDLFlBQU8sR0FBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OztRQUdyQyxvQkFBZSxHQUFHLEtBQUssQ0FBQzs7OztRQUd4QixvQkFBZSxHQUF1QixFQUFFLENBQUM7UUFFekMsV0FBTSxHQUFVLEVBQUUsQ0FBQyxDQUFDLDZCQUE2Qjs7UUFFeEMsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDOzs7OztRQU0vQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7Ozs7UUFNOUIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFHM0IsQ0FBQzs7Ozs7UUFNSCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7UUFHdEMsb0JBQWUsR0FBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OztRQUc3Qyw2QkFBd0IsR0FBdUIsRUFBRSxDQUFDO0lBNlg1RCxDQUFDOzs7OztJQXhYQyxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxP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WUFBWSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQztTQUM5RDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUF2YUYsVUFBVTs7Ozs7OztJQUdULDZDQUEwQzs7Ozs7SUFHMUMsb0NBQXFDOzs7OztJQUdyQyw0Q0FBd0I7Ozs7O0lBR3hCLDRDQUF5Qzs7SUFFekMsbUNBQW1COztJQUVuQixxQ0FBd0Q7Ozs7OztJQU14RCxvQ0FBdUM7Ozs7OztJQU12Qyw0Q0FHWTs7Ozs7O0lBTVosMkNBQThDOzs7Ozs7SUFHOUMsNENBQXFEOzs7Ozs7SUFHckQscURBQTBEOzs7OztJQUUxRCw4Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgYXJyYXlzRXF1YWwsIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHtcbiAgaXNTaG93U2VhcmNoT2JqZWN0LFxuICBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UsXG4gIE56Q2FzY2FkZXJGaWx0ZXIsXG4gIE56Q2FzY2FkZXJPcHRpb24sXG4gIE56Q2FzY2FkZXJTZWFyY2hPcHRpb25cbn0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XG5pbXBvcnQgeyBpc0NoaWxkT3B0aW9uLCBpc1BhcmVudE9wdGlvbiB9IGZyb20gJy4vbnotY2FzY2FkZXItdXRpbHMnO1xuXG4vKipcbiAqIEFsbCBkYXRhIGlzIHN0b3JlZCBhbmQgcGFyc2VkIGluIE56Q2FzY2FkZXJTZXJ2aWNlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlclNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQWN0aXZhdGVkIG9wdGlvbnMgaW4gZWFjaCBjb2x1bW4uICovXG4gIGFjdGl2YXRlZE9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuXG4gIC8qKiBBbiBhcnJheSB0byBzdG9yZSBjYXNjYWRlciBpdGVtcyBhcnJhbmdlZCBpbiBkaWZmZXJlbnQgbGF5ZXJzLiAqL1xuICBjb2x1bW5zOiBOekNhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XG5cbiAgLyoqIElmIHVzZXIgaGFzIGVudGVyZWQgc2VhcmNoaW5nIG1vZGUuICovXG4gIGluU2VhcmNoaW5nTW9kZSA9IGZhbHNlO1xuXG4gIC8qKiBTZWxlY3RlZCBvcHRpb25zIHdvdWxkIGJlIG91dHB1dCB0byB1c2VyLiAqL1xuICBzZWxlY3RlZE9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuXG4gIHZhbHVlczogYW55W10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcblxuICByZWFkb25seSAkbG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IHRvIG5vdGlmeSBjYXNjYWRlciBpdCBuZWVkcyB0byByZWRyYXcgYmVjYXVzZSBhY3RpdmF0ZWQgb3JcbiAgICogc2VsZWN0ZWQgb3B0aW9ucyBhcmUgY2hhbmdlZC5cbiAgICovXG4gIHJlYWRvbmx5ICRyZWRyYXcgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IHdoZW4gYW4gb3B0aW9uIGdldHMgc2VsZWN0ZWQuXG4gICAqIEVtaXQgdHJ1ZSBpZiBhIGxlYWYgb3B0aW9ucyBpcyBzZWxlY3RlZC5cbiAgICovXG4gIHJlYWRvbmx5ICRvcHRpb25TZWxlY3RlZCA9IG5ldyBTdWJqZWN0PHtcbiAgICBvcHRpb246IE56Q2FzY2FkZXJPcHRpb247XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgfSB8IG51bGw+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHF1aXQgc2VhcmNoaW5nIG1vZGUuXG4gICAqIE9ubHkgZW1pdCB3aGVuIHVzZXIgZG8gc2VsZWN0IGEgc2VhcmNoaW5nIG9wdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5ICRxdWl0U2VhcmNoaW5nID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogVG8gaG9sZCBjb2x1bW5zIGJlZm9yZSBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZS4gKi9cbiAgcHJpdmF0ZSBjb2x1bW5zU25hcHNob3Q6IE56Q2FzY2FkZXJPcHRpb25bXVtdID0gW1tdXTtcblxuICAvKiogVG8gaG9sZCBhY3RpdmF0ZWQgb3B0aW9ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXG4gIHByaXZhdGUgYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90OiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIGNhc2NhZGVyQ29tcG9uZW50OiBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2U7XG5cbiAgLyoqIFJldHVybiBjYXNjYWRlciBvcHRpb25zIGluIHRoZSBmaXJzdCBsYXllci4gKi9cbiAgZ2V0IG56T3B0aW9ucygpOiBOekNhc2NhZGVyT3B0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbMF07XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLiRyZWRyYXcuY29tcGxldGUoKTtcbiAgICB0aGlzLiRxdWl0U2VhcmNoaW5nLmNvbXBsZXRlKCk7XG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLiRsb2FkaW5nLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoYXQgdmFsdWUgbWF0Y2hlcyB3aGF0IGlzIGRpc3BsYXllZCBpbiB0aGUgZHJvcGRvd24uXG4gICAqL1xuICBzeW5jT3B0aW9ucyhmaXJzdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgY29uc3QgaGFzVmFsdWUgPSB2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aDtcbiAgICBjb25zdCBsYXN0Q29sdW1uSW5kZXggPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBpbml0Q29sdW1uV2l0aEluZGV4ID0gKGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2YXRlZE9wdGlvblNldHRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdmFsdWVzW2NvbHVtbkluZGV4XTtcblxuICAgICAgICBpZiAoIWlzTm90TmlsKGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9XG4gICAgICAgICAgdGhpcy5maW5kT3B0aW9uV2l0aFZhbHVlKGNvbHVtbkluZGV4LCB2YWx1ZXNbY29sdW1uSW5kZXhdKSB8fFxuICAgICAgICAgICh0eXBlb2YgY3VycmVudFZhbHVlID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgPyBjdXJyZW50VmFsdWVcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56VmFsdWVQcm9wZXJ0eX1gXTogY3VycmVudFZhbHVlLFxuICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eX1gXTogY3VycmVudFZhbHVlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgbGFzdENvbHVtbkluZGV4KSB7XG4gICAgICAgICAgaW5pdENvbHVtbldpdGhJbmRleChjb2x1bW5JbmRleCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuaXNMb2FkZWQoY29sdW1uSW5kZXgpIHx8ICF0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGEpIHtcbiAgICAgICAgYWN0aXZhdGVkT3B0aW9uU2V0dGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXggLSAxXSB8fCB7fTtcbiAgICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBjb2x1bW5JbmRleCAtIDEsIGFjdGl2YXRlZE9wdGlvblNldHRlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG5cbiAgICBpZiAoZmlyc3QgJiYgdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhICYmICFoYXNWYWx1ZSkge1xuICAgICAgLy8gU2hvdWxkIGFsc28gbm90aWZ5IHRoZSBjb21wb25lbnQgdGhhdCB2YWx1ZSBjaGFuZ2VzLiBGaXggIzM0ODAuXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0Q29sdW1uV2l0aEluZGV4KDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGNhc2NhZGVyIGNvbXBvbmVudCBzbyB0aGlzIHNlcnZpY2UgY291bGQgdXNlIGlucHV0cy5cbiAgICovXG4gIHdpdGhDb21wb25lbnQoY2FzY2FkZXJDb21wb25lbnQ6IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSk6IHZvaWQge1xuICAgIHRoaXMuY2FzY2FkZXJDb21wb25lbnQgPSBjYXNjYWRlckNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBhbGwgb3B0aW9ucy4gUmVidWlsZCBzZWFyY2hpbmcgb3B0aW9ucyBpZiBpbiBzZWFyY2hpbmcgbW9kZS5cbiAgICovXG4gIHdpdGhPcHRpb25zKG9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbnNTbmFwc2hvdCA9IHRoaXMuY29sdW1ucyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPyBbb3B0aW9uc10gOiBbXTtcblxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSkge1xuICAgICAgdGhpcy5wcmVwYXJlU2VhcmNoT3B0aW9ucyh0aGlzLmNhc2NhZGVyQ29tcG9uZW50LmlucHV0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zeW5jT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gc2V0IGEgb3B0aW9uIGFzIGFjdGl2YXRlZC5cbiAgICogQHBhcmFtIG9wdGlvbiBDYXNjYWRlciBvcHRpb25cbiAgICogQHBhcmFtIGNvbHVtbkluZGV4IE9mIHdoaWNoIGNvbHVtbiB0aGlzIG9wdGlvbiBpcyBpblxuICAgKiBAcGFyYW0gcGVyZm9ybVNlbGVjdCBTZWxlY3RcbiAgICogQHBhcmFtIGxvYWRpbmdDaGlsZHJlbiBUcnkgdG8gbG9hZCBjaGlsZHJlbiBhc3luY2hyb25vdXNseS5cbiAgICovXG4gIHNldE9wdGlvbkFjdGl2YXRlZChcbiAgICBvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sXG4gICAgY29sdW1uSW5kZXg6IG51bWJlcixcbiAgICBwZXJmb3JtU2VsZWN0OiBib29sZWFuID0gZmFsc2UsXG4gICAgbG9hZGluZ0NoaWxkcmVuOiBib29sZWFuID0gdHJ1ZVxuICApOiB2b2lkIHtcbiAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4XSA9IG9wdGlvbjtcbiAgICB0aGlzLnRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbkluZGV4KTtcbiAgICB0aGlzLmRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbkluZGV4KTtcblxuICAgIGNvbnN0IGlzUGFyZW50ID0gaXNQYXJlbnRPcHRpb24ob3B0aW9uKTtcblxuICAgIGlmIChpc1BhcmVudCkge1xuICAgICAgLy8gUGFyZW50IG9wdGlvbiB0aGF0IGhhcyBjaGlsZHJlbi5cbiAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4hLCBjb2x1bW5JbmRleCArIDEsIG9wdGlvbik7XG4gICAgfSBlbHNlIGlmICghb3B0aW9uLmlzTGVhZiAmJiBsb2FkaW5nQ2hpbGRyZW4pIHtcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBzaG91bGQgdHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGNvbHVtbkluZGV4KTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIC8vIExlYWYgb3B0aW9uLlxuICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgLy8gQWN0dWFsbHkgcGVyZm9ybSBzZWxlY3Rpb24gdG8gbWFrZSBhbiBvcHRpb25zIG5vdCBvbmx5IGFjdGl2YXRlZCBidXQgYWxzbyBzZWxlY3RlZC5cbiAgICBpZiAocGVyZm9ybVNlbGVjdCkge1xuICAgICAgdGhpcy5zZXRPcHRpb25TZWxlY3RlZChvcHRpb24sIGNvbHVtbkluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICB9XG5cbiAgc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY2hhbmdlT24gPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56Q2hhbmdlT247XG4gICAgY29uc3Qgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbiA9IChvOiBOekNhc2NhZGVyT3B0aW9uLCBpOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgY2hhbmdlT24gPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VPbihvLCBpKSA6IGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9uLmlzTGVhZiB8fCB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56Q2hhbmdlT25TZWxlY3QgfHwgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbihvcHRpb24sIGluZGV4KSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcbiAgICAgIHRoaXMucHJlcGFyZUVtaXRWYWx1ZSgpO1xuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLm5leHQoeyBvcHRpb24sIGluZGV4IH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbkRlYWN0aXZhdGVkU2luY2VDb2x1bW4oY29sdW1uOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbiAtIDEpO1xuICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uKTtcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNlYXJjaGluZyBvcHRpb24gYXMgc2VsZWN0ZWQsIGZpbmlzaGluZyB1cCB0aGluZ3MuXG4gICAqIEBwYXJhbSBvcHRpb25cbiAgICovXG4gIHNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbjogTnpDYXNjYWRlclNlYXJjaE9wdGlvbik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtvcHRpb25dO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLm9wdGlvbi5wYXRoXTtcbiAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLm5leHQoeyBvcHRpb24sIGluZGV4OiAwIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBkYXRhIGFuZCB0ZWxsIFVJIG9ubHkgdG8gcmVtb3ZlIGlucHV0IGFuZCByZXNldCBkcm9wZG93biB3aWR0aCBzdHlsZS5cbiAgICAgIHRoaXMuJHF1aXRTZWFyY2hpbmcubmV4dCgpO1xuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zU25hcHNob3RdO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWy4uLnRoaXMuc2VsZWN0ZWRPcHRpb25zXTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBjYXNjYWRlciBvcHRpb25zIHRvIHJlc2V0IGBjb2x1bW5zYC5cbiAgICogQHBhcmFtIHNlYXJjaFZhbHVlIFRoZSBzdHJpbmcgdXNlciB3YW50cyB0byBzZWFyY2guXG4gICAqL1xuICBwcmVwYXJlU2VhcmNoT3B0aW9ucyhzZWFyY2hWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVzdWx0czogTnpDYXNjYWRlck9wdGlvbltdID0gW107IC8vIFNlYXJjaCByZXN1bHRzIG9ubHkgaGF2ZSBvbmUgbGF5ZXIuXG4gICAgY29uc3QgcGF0aDogTnpDYXNjYWRlck9wdGlvbltdID0gW107XG4gICAgY29uc3QgZGVmYXVsdEZpbHRlcjogTnpDYXNjYWRlckZpbHRlciA9IChpLCBwKSA9PiB7XG4gICAgICByZXR1cm4gcC5zb21lKG8gPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwobyk7XG4gICAgICAgIHJldHVybiAhIWxhYmVsICYmIGxhYmVsLmluZGV4T2YoaSkgIT09IC0xO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93U2VhcmNoID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelNob3dTZWFyY2g7XG4gICAgY29uc3QgZmlsdGVyID0gaXNTaG93U2VhcmNoT2JqZWN0KHNob3dTZWFyY2gpICYmIHNob3dTZWFyY2guZmlsdGVyID8gc2hvd1NlYXJjaC5maWx0ZXIgOiBkZWZhdWx0RmlsdGVyO1xuICAgIGNvbnN0IHNvcnRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLnNvcnRlciA/IHNob3dTZWFyY2guc29ydGVyIDogbnVsbDtcbiAgICBjb25zdCBsb29wQ2hpbGQgPSAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBwYXRoLnB1c2gobm9kZSk7XG4gICAgICBjb25zdCBjUGF0aCA9IEFycmF5LmZyb20ocGF0aCk7XG4gICAgICBpZiAoZmlsdGVyKHNlYXJjaFZhbHVlLCBjUGF0aCkpIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbjogTnpDYXNjYWRlclNlYXJjaE9wdGlvbiA9IHtcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICBpc0xlYWY6IHRydWUsXG4gICAgICAgICAgcGF0aDogY1BhdGgsXG4gICAgICAgICAgW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5XTogY1BhdGgubWFwKHAgPT4gdGhpcy5nZXRPcHRpb25MYWJlbChwKSkuam9pbignIC8gJylcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKG9wdGlvbik7XG4gICAgICB9XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG4gICAgY29uc3QgbG9vcFBhcmVudCA9IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5jaGlsZHJlbiEuZm9yRWFjaChzTm9kZSA9PiB7XG4gICAgICAgIGlmICghc05vZGUucGFyZW50KSB7XG4gICAgICAgICAgc05vZGUucGFyZW50ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNOb2RlLmlzTGVhZikge1xuICAgICAgICAgIGxvb3BQYXJlbnQoc05vZGUsIGRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc05vZGUuaXNMZWFmIHx8ICFzTm9kZS5jaGlsZHJlbiB8fCAhc05vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgbG9vcENoaWxkKHNOb2RlLCBkaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcGF0aC5wb3AoKTtcbiAgICB9O1xuXG4gICAgaWYgKCF0aGlzLmNvbHVtbnNTbmFwc2hvdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29sdW1ucyA9IFtbXV07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3RbMF0uZm9yRWFjaChvID0+IChpc0NoaWxkT3B0aW9uKG8pID8gbG9vcENoaWxkKG8pIDogbG9vcFBhcmVudChvKSkpO1xuXG4gICAgaWYgKHNvcnRlcikge1xuICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBzb3J0ZXIoYS5wYXRoLCBiLnBhdGgsIHNlYXJjaFZhbHVlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb2x1bW5zID0gW3Jlc3VsdHNdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBzZWFyY2hpbmcgbW9kZSBieSBVSS4gSXQgZGVhbHMgd2l0aCB0aGluZ3Mgbm90IGRpcmVjdGx5IHJlbGF0ZWQgdG8gVUkuXG4gICAqIEBwYXJhbSB0b1NlYXJjaGluZyBJZiB0aGlzIGNhc2NhZGVyIGlzIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlXG4gICAqL1xuICB0b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pblNlYXJjaGluZ01vZGUgPSB0b1NlYXJjaGluZztcblxuICAgIGlmICh0b1NlYXJjaGluZykge1xuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zU25hcHNob3QgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZXIgcXVpdCBzZWFyY2hpbmcgbW9kZSB3aXRob3V0IHNlbGVjdGluZyBhbiBvcHRpb24uXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zU25hcHNob3RdO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcbiAgICAgIHRoaXMuY29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNTbmFwc2hvdF07XG4gICAgICB0aGlzLnN5bmNPcHRpb25zKCk7XG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBzZWxlY3RlZCBvcHRpb25zLlxuICAgKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoMCk7XG4gICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KG51bGwpO1xuICB9XG5cbiAgZ2V0T3B0aW9uTGFiZWwobzogTnpDYXNjYWRlck9wdGlvbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJ10gYXMgc3RyaW5nO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRPcHRpb25WYWx1ZShvOiBOekNhc2NhZGVyT3B0aW9uKTogYW55IHtcbiAgICByZXR1cm4gb1t0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56VmFsdWVQcm9wZXJ0eSB8fCAndmFsdWUnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gaW5zZXJ0IG9wdGlvbnMgaW50byBhIGNvbHVtbi5cbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBpbnNlcnRcbiAgICogQHBhcmFtIGNvbHVtbkluZGV4IFBvc2l0aW9uXG4gICAqL1xuICBwcml2YXRlIHNldENvbHVtbkRhdGEob3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdLCBjb2x1bW5JbmRleDogbnVtYmVyLCBwYXJlbnQ6IE56Q2FzY2FkZXJPcHRpb24pOiB2b2lkIHtcbiAgICBjb25zdCBleGlzdGluZ09wdGlvbnMgPSB0aGlzLmNvbHVtbnNbY29sdW1uSW5kZXhdO1xuICAgIGlmICghYXJyYXlzRXF1YWwoZXhpc3RpbmdPcHRpb25zLCBvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gKG8ucGFyZW50ID0gcGFyZW50KSk7XG4gICAgICB0aGlzLmNvbHVtbnNbY29sdW1uSW5kZXhdID0gb3B0aW9ucztcbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYWxsIGFuY2VzdG9yIG9wdGlvbnMgYXMgYWN0aXZhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSB0cmFja0FuY2VzdG9yQWN0aXZhdGVkT3B0aW9ucyhzdGFydEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbaV0gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbaSArIDFdLnBhcmVudCE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMuc3BsaWNlKDAsIGxhc3RSZXNlcnZlSW5kZXggKyAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJvcEJlaGluZENvbHVtbnMobGFzdFJlc2VydmVJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGxhc3RSZXNlcnZlSW5kZXggPCB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLnNsaWNlKDAsIGxhc3RSZXNlcnZlSW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBjaGlsZHJlbiBvZiBhbiBvcHRpb24gYXN5bmNocm9ub3VzbHkuXG4gICAqL1xuICBsb2FkQ2hpbGRyZW4oXG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uIHwgYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXG4gICAgc3VjY2Vzcz86IFZvaWRGdW5jdGlvbixcbiAgICBmYWlsdXJlPzogVm9pZEZ1bmN0aW9uXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGxvYWRGbiA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YTtcblxuICAgIGlmIChsb2FkRm4pIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzbid0IGFueSBvcHRpb24gaW4gY29sdW1ucy5cbiAgICAgIHRoaXMuJGxvYWRpbmcubmV4dChjb2x1bW5JbmRleCA8IDApO1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBsb2FkRm4ob3B0aW9uLCBjb2x1bW5JbmRleCkudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9wdGlvbi5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgY29sdW1uSW5kZXggKyAxLCBvcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRsb2FkaW5nLm5leHQoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBvcHRpb24ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbi5pc0xlYWYgPSB0cnVlO1xuICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICBmYWlsdXJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0xvYWRlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1tpbmRleF0gJiYgdGhpcy5jb2x1bW5zW2luZGV4XS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYSBvcHRpb24gdGhhdCBoYXMgYSBnaXZlbiB2YWx1ZSBpbiBhIGdpdmVuIGNvbHVtbi5cbiAgICovXG4gIHByaXZhdGUgZmluZE9wdGlvbldpdGhWYWx1ZShcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxuICAgIHZhbHVlOiBOekNhc2NhZGVyT3B0aW9uIHwgYW55IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICk6IE56Q2FzY2FkZXJPcHRpb24gfCBudWxsIHtcbiAgICBjb25zdCB0YXJnZXRDb2x1bW4gPSB0aGlzLmNvbHVtbnNbY29sdW1uSW5kZXhdO1xuICAgIGlmICh0YXJnZXRDb2x1bW4pIHtcbiAgICAgIGNvbnN0IHYgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdGhpcy5nZXRPcHRpb25WYWx1ZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgIHJldHVybiB0YXJnZXRDb2x1bW4uZmluZChvID0+IHYgPT09IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpITtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVFbWl0VmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmdldE9wdGlvblZhbHVlKG8pKTtcbiAgfVxufVxuIl19