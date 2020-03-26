/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var NzCascaderService = /** @class */ (function () {
    function NzCascaderService() {
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
    Object.defineProperty(NzCascaderService.prototype, "nzOptions", {
        /** Return cascader options in the first layer. */
        get: /**
         * Return cascader options in the first layer.
         * @return {?}
         */
        function () {
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    };
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    NzCascaderService.prototype.syncOptions = /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        /** @type {?} */
        var values = this.values;
        /** @type {?} */
        var hasValue = values && values.length;
        /** @type {?} */
        var lastColumnIndex = values.length - 1;
        /** @type {?} */
        var initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        function (columnIndex) {
            /** @type {?} */
            var activatedOptionSetter = (/**
             * @return {?}
             */
            function () {
                var _a;
                /** @type {?} */
                var currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    _this.$redraw.next();
                    return;
                }
                /** @type {?} */
                var option = _this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : (_a = {},
                            _a["" + _this.cascaderComponent.nzValueProperty] = currentValue,
                            _a["" + _this.cascaderComponent.nzLabelProperty] = currentValue,
                            _a));
                _this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    _this.dropBehindColumns(columnIndex);
                    _this.selectedOptions = tslib_1.__spread(_this.activatedOptions);
                    _this.$redraw.next();
                }
            });
            if (_this.isLoaded(columnIndex) || !_this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                var option = _this.activatedOptions[columnIndex - 1] || {};
                _this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
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
    };
    /**
     * Bind cascader component so this service could use inputs.
     */
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    NzCascaderService.prototype.withComponent = /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    function (cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    };
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     */
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    NzCascaderService.prototype.withOptions = /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    };
    /**
     * Try to set a option as activated.
     * @param option Cascader option
     * @param columnIndex Of which column this option is in
     * @param performSelect Select
     * @param loadingChildren Try to load children asynchronously.
     */
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    NzCascaderService.prototype.setOptionActivated = /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    function (option, columnIndex, performSelect, loadingChildren) {
        if (performSelect === void 0) { performSelect = false; }
        if (loadingChildren === void 0) { loadingChildren = true; }
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        var isParent = isParentOption(option);
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
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.setOptionSelected = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        var shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        function (o, i) {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = tslib_1.__spread(this.activatedOptions);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option: option, index: index });
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    NzCascaderService.prototype.setOptionDeactivatedSinceColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    };
    /**
     * Set a searching option as selected, finishing up things.
     * @param option
     */
    /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    NzCascaderService.prototype.setSearchOptionSelected = /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        this.activatedOptions = [option];
        this.selectedOptions = tslib_1.__spread(option.path);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option: option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            _this.$quitSearching.next();
            _this.$redraw.next();
            _this.inSearchingMode = false;
            _this.columns = tslib_1.__spread(_this.columnsSnapshot);
            _this.activatedOptions = tslib_1.__spread(_this.selectedOptions);
        }), 200);
    };
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    NzCascaderService.prototype.prepareSearchOptions = /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    function (searchValue) {
        var _this = this;
        /** @type {?} */
        var results = [];
        // Search results only have one layer.
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        function (i, p) {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                /** @type {?} */
                var label = _this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        var showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        var filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        var sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        var loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            var _a;
            if (forceDisabled === void 0) { forceDisabled = false; }
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.cascaderComponent.nzLabelProperty] = cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return _this.getOptionLabel(p); })).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        var loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            function (sNode) {
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
        function (o) { return (isChildOption(o) ? loopChild(o) : loopParent(o)); }));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return sorter(a.path, b.path, searchValue); }));
        }
        this.columns = [results];
    };
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
     */
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    NzCascaderService.prototype.toggleSearchingMode = /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    function (toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = tslib_1.__spread(this.activatedOptions);
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = tslib_1.__spread(this.activatedOptionsSnapshot);
            this.selectedOptions = tslib_1.__spread(this.activatedOptions);
            this.columns = tslib_1.__spread(this.columnsSnapshot);
            this.syncOptions();
            this.$redraw.next();
        }
    };
    /**
     * Clear selected options.
     */
    /**
     * Clear selected options.
     * @return {?}
     */
    NzCascaderService.prototype.clear = /**
     * Clear selected options.
     * @return {?}
     */
    function () {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    };
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionLabel = /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    };
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    NzCascaderService.prototype.setColumnData = /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    function (options, columnIndex, parent) {
        /** @type {?} */
        var existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return (o.parent = parent); }));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    };
    /**
     * Set all ancestor options as activated.
     */
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    NzCascaderService.prototype.trackAncestorActivatedOptions = /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    function (startIndex) {
        for (var i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindActivatedOptions = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindColumns = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    };
    /**
     * Load children of an option asynchronously.
     */
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderService.prototype.loadChildren = /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        var _this = this;
        /** @type {?} */
        var loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            function () {
                option.loading = false;
                if (option.children) {
                    _this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                _this.$loading.next(false);
                _this.$redraw.next();
            }), (/**
             * @return {?}
             */
            function () {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                _this.$redraw.next();
            }));
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.isLoaded = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * Find a option that has a given value in a given column.
     */
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    NzCascaderService.prototype.findOptionWithValue = /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    function (columnIndex, value // tslint:disable-line:no-any
    ) {
        var _this = this;
        /** @type {?} */
        var targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            var v_1 = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return v_1 === _this.getOptionValue(o); }))));
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderService.prototype.prepareEmitValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.getOptionValue(o); }));
    };
    NzCascaderService.decorators = [
        { type: Injectable }
    ];
    return NzCascaderService;
}());
export { NzCascaderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQ0wsa0JBQWtCLEVBS25CLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUtwRTtJQUFBOzs7O1FBR0UscUJBQWdCLEdBQXVCLEVBQUUsQ0FBQzs7OztRQUcxQyxZQUFPLEdBQXlCLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7UUFHckMsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFHeEIsb0JBQWUsR0FBdUIsRUFBRSxDQUFDO1FBRXpDLFdBQU0sR0FBVSxFQUFFLENBQUMsQ0FBQyw2QkFBNkI7O1FBRXhDLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQzs7Ozs7UUFNL0MsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7O1FBTTlCLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBRzNCLENBQUM7Ozs7O1FBTUgsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7O1FBR3RDLG9CQUFlLEdBQXlCLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7UUFHN0MsNkJBQXdCLEdBQXVCLEVBQUUsQ0FBQztJQTZYNUQsQ0FBQztJQXhYQyxzQkFBSSx3Q0FBUztRQURiLGtEQUFrRDs7Ozs7UUFDbEQ7WUFDRSxPQUFPLElBQUksQ0FB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QUE4Qzs7Ozs7O0lBRzlDLDRDQUFxRDs7Ozs7O0lBR3JELHFEQUEwRDs7Ozs7SUFFMUQsOENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGFycmF5c0VxdWFsLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7XG4gIGlzU2hvd1NlYXJjaE9iamVjdCxcbiAgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLFxuICBOekNhc2NhZGVyRmlsdGVyLFxuICBOekNhc2NhZGVyT3B0aW9uLFxuICBOekNhc2NhZGVyU2VhcmNoT3B0aW9uXG59IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgaXNDaGlsZE9wdGlvbiwgaXNQYXJlbnRPcHRpb24gfSBmcm9tICcuL256LWNhc2NhZGVyLXV0aWxzJztcblxuLyoqXG4gKiBBbGwgZGF0YSBpcyBzdG9yZWQgYW5kIHBhcnNlZCBpbiBOekNhc2NhZGVyU2VydmljZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEFjdGl2YXRlZCBvcHRpb25zIGluIGVhY2ggY29sdW1uLiAqL1xuICBhY3RpdmF0ZWRPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcblxuICAvKiogQW4gYXJyYXkgdG8gc3RvcmUgY2FzY2FkZXIgaXRlbXMgYXJyYW5nZWQgaW4gZGlmZmVyZW50IGxheWVycy4gKi9cbiAgY29sdW1uczogTnpDYXNjYWRlck9wdGlvbltdW10gPSBbW11dO1xuXG4gIC8qKiBJZiB1c2VyIGhhcyBlbnRlcmVkIHNlYXJjaGluZyBtb2RlLiAqL1xuICBpblNlYXJjaGluZ01vZGUgPSBmYWxzZTtcblxuICAvKiogU2VsZWN0ZWQgb3B0aW9ucyB3b3VsZCBiZSBvdXRwdXQgdG8gdXNlci4gKi9cbiAgc2VsZWN0ZWRPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcblxuICB2YWx1ZXM6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbiAgcmVhZG9ubHkgJGxvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCB0byBub3RpZnkgY2FzY2FkZXIgaXQgbmVlZHMgdG8gcmVkcmF3IGJlY2F1c2UgYWN0aXZhdGVkIG9yXG4gICAqIHNlbGVjdGVkIG9wdGlvbnMgYXJlIGNoYW5nZWQuXG4gICAqL1xuICByZWFkb25seSAkcmVkcmF3ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCB3aGVuIGFuIG9wdGlvbiBnZXRzIHNlbGVjdGVkLlxuICAgKiBFbWl0IHRydWUgaWYgYSBsZWFmIG9wdGlvbnMgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICByZWFkb25seSAkb3B0aW9uU2VsZWN0ZWQgPSBuZXcgU3ViamVjdDx7XG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uO1xuICAgIGluZGV4OiBudW1iZXI7XG4gIH0gfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IHRvIG5vdGlmeSBjYXNjYWRlciBpdCBuZWVkcyB0byBxdWl0IHNlYXJjaGluZyBtb2RlLlxuICAgKiBPbmx5IGVtaXQgd2hlbiB1c2VyIGRvIHNlbGVjdCBhIHNlYXJjaGluZyBvcHRpb24uXG4gICAqL1xuICByZWFkb25seSAkcXVpdFNlYXJjaGluZyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFRvIGhvbGQgY29sdW1ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXG4gIHByaXZhdGUgY29sdW1uc1NuYXBzaG90OiBOekNhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XG5cbiAgLyoqIFRvIGhvbGQgYWN0aXZhdGVkIG9wdGlvbnMgYmVmb3JlIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlLiAqL1xuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogTnpDYXNjYWRlck9wdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBjYXNjYWRlckNvbXBvbmVudDogTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlO1xuXG4gIC8qKiBSZXR1cm4gY2FzY2FkZXIgb3B0aW9ucyBpbiB0aGUgZmlyc3QgbGF5ZXIuICovXG4gIGdldCBuek9wdGlvbnMoKTogTnpDYXNjYWRlck9wdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zWzBdO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kcmVkcmF3LmNvbXBsZXRlKCk7XG4gICAgdGhpcy4kcXVpdFNlYXJjaGluZy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy4kbG9hZGluZy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSB0aGF0IHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgKi9cbiAgc3luY09wdGlvbnMoZmlyc3Q6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gdmFsdWVzICYmIHZhbHVlcy5sZW5ndGg7XG4gICAgY29uc3QgbGFzdENvbHVtbkluZGV4ID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgaW5pdENvbHVtbldpdGhJbmRleCA9IChjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHZhbHVlc1tjb2x1bW5JbmRleF07XG5cbiAgICAgICAgaWYgKCFpc05vdE5pbChjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb24gPVxuICAgICAgICAgIHRoaXMuZmluZE9wdGlvbldpdGhWYWx1ZShjb2x1bW5JbmRleCwgdmFsdWVzW2NvbHVtbkluZGV4XSkgfHxcbiAgICAgICAgICAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgID8gY3VycmVudFZhbHVlXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBbYCR7dGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHl9YF06IGN1cnJlbnRWYWx1ZSxcbiAgICAgICAgICAgICAgICBbYCR7dGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHl9YF06IGN1cnJlbnRWYWx1ZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA8IGxhc3RDb2x1bW5JbmRleCkge1xuICAgICAgICAgIGluaXRDb2x1bW5XaXRoSW5kZXgoY29sdW1uSW5kZXggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmlzTG9hZGVkKGNvbHVtbkluZGV4KSB8fCAhdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhKSB7XG4gICAgICAgIGFjdGl2YXRlZE9wdGlvblNldHRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4IC0gMV0gfHwge307XG4gICAgICAgIHRoaXMubG9hZENoaWxkcmVuKG9wdGlvbiwgY29sdW1uSW5kZXggLSAxLCBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuXG4gICAgaWYgKGZpcnN0ICYmIHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YSAmJiAhaGFzVmFsdWUpIHtcbiAgICAgIC8vIFNob3VsZCBhbHNvIG5vdGlmeSB0aGUgY29tcG9uZW50IHRoYXQgdmFsdWUgY2hhbmdlcy4gRml4ICMzNDgwLlxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdENvbHVtbldpdGhJbmRleCgwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZCBjYXNjYWRlciBjb21wb25lbnQgc28gdGhpcyBzZXJ2aWNlIGNvdWxkIHVzZSBpbnB1dHMuXG4gICAqL1xuICB3aXRoQ29tcG9uZW50KGNhc2NhZGVyQ29tcG9uZW50OiBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UpOiB2b2lkIHtcbiAgICB0aGlzLmNhc2NhZGVyQ29tcG9uZW50ID0gY2FzY2FkZXJDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgYWxsIG9wdGlvbnMuIFJlYnVpbGQgc2VhcmNoaW5nIG9wdGlvbnMgaWYgaW4gc2VhcmNoaW5nIG1vZGUuXG4gICAqL1xuICB3aXRoT3B0aW9ucyhvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3QgPSB0aGlzLmNvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gW29wdGlvbnNdIDogW107XG5cbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUpIHtcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaE9wdGlvbnModGhpcy5jYXNjYWRlckNvbXBvbmVudC5pbnB1dFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3luY09wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIHNldCBhIG9wdGlvbiBhcyBhY3RpdmF0ZWQuXG4gICAqIEBwYXJhbSBvcHRpb24gQ2FzY2FkZXIgb3B0aW9uXG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBPZiB3aGljaCBjb2x1bW4gdGhpcyBvcHRpb24gaXMgaW5cbiAgICogQHBhcmFtIHBlcmZvcm1TZWxlY3QgU2VsZWN0XG4gICAqIEBwYXJhbSBsb2FkaW5nQ2hpbGRyZW4gVHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXG4gICAqL1xuICBzZXRPcHRpb25BY3RpdmF0ZWQoXG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLFxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXG4gICAgcGVyZm9ybVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIGxvYWRpbmdDaGlsZHJlbjogYm9vbGVhbiA9IHRydWVcbiAgKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF0gPSBvcHRpb247XG4gICAgdGhpcy50cmFja0FuY2VzdG9yQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XG5cbiAgICBjb25zdCBpc1BhcmVudCA9IGlzUGFyZW50T3B0aW9uKG9wdGlvbik7XG5cbiAgICBpZiAoaXNQYXJlbnQpIHtcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBoYXMgY2hpbGRyZW4uXG4gICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuISwgY29sdW1uSW5kZXggKyAxLCBvcHRpb24pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZGluZ0NoaWxkcmVuKSB7XG4gICAgICAvLyBQYXJlbnQgb3B0aW9uIHRoYXQgc2hvdWxkIHRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfSBlbHNlIGlmIChvcHRpb24uaXNMZWFmKSB7XG4gICAgICAvLyBMZWFmIG9wdGlvbi5cbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xuICAgIH1cblxuICAgIC8vIEFjdHVhbGx5IHBlcmZvcm0gc2VsZWN0aW9uIHRvIG1ha2UgYW4gb3B0aW9ucyBub3Qgb25seSBhY3RpdmF0ZWQgYnV0IGFsc28gc2VsZWN0ZWQuXG4gICAgaWYgKHBlcmZvcm1TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgfVxuXG4gIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNoYW5nZU9uID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uO1xuICAgIGNvbnN0IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24gPSAobzogTnpDYXNjYWRlck9wdGlvbiwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIGNoYW5nZU9uID09PSAnZnVuY3Rpb24nID8gY2hhbmdlT24obywgaSkgOiBmYWxzZTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uU2VsZWN0IHx8IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24ob3B0aW9uLCBpbmRleCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb25EZWFjdGl2YXRlZFNpbmNlQ29sdW1uKGNvbHVtbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW4gLSAxKTtcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbik7XG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzZWFyY2hpbmcgb3B0aW9uIGFzIHNlbGVjdGVkLCBmaW5pc2hpbmcgdXAgdGhpbmdzLlxuICAgKiBAcGFyYW0gb3B0aW9uXG4gICAqL1xuICBzZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbb3B0aW9uXTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi5vcHRpb24ucGF0aF07XG4gICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleDogMCB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgdGVsbCBVSSBvbmx5IHRvIHJlbW92ZSBpbnB1dCBhbmQgcmVzZXQgZHJvcGRvd24gd2lkdGggc3R5bGUuXG4gICAgICB0aGlzLiRxdWl0U2VhcmNoaW5nLm5leHQoKTtcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc1NuYXBzaG90XTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsuLi50aGlzLnNlbGVjdGVkT3B0aW9uc107XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgY2FzY2FkZXIgb3B0aW9ucyB0byByZXNldCBgY29sdW1uc2AuXG4gICAqIEBwYXJhbSBzZWFyY2hWYWx1ZSBUaGUgc3RyaW5nIHVzZXIgd2FudHMgdG8gc2VhcmNoLlxuICAgKi9cbiAgcHJlcGFyZVNlYXJjaE9wdGlvbnMoc2VhcmNoVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdHM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdOyAvLyBTZWFyY2ggcmVzdWx0cyBvbmx5IGhhdmUgb25lIGxheWVyLlxuICAgIGNvbnN0IHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXI6IE56Q2FzY2FkZXJGaWx0ZXIgPSAoaSwgcCkgPT4ge1xuICAgICAgcmV0dXJuIHAuc29tZShvID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldE9wdGlvbkxhYmVsKG8pO1xuICAgICAgICByZXR1cm4gISFsYWJlbCAmJiBsYWJlbC5pbmRleE9mKGkpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2hvd1NlYXJjaCA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpTaG93U2VhcmNoO1xuICAgIGNvbnN0IGZpbHRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLmZpbHRlciA/IHNob3dTZWFyY2guZmlsdGVyIDogZGVmYXVsdEZpbHRlcjtcbiAgICBjb25zdCBzb3J0ZXIgPSBpc1Nob3dTZWFyY2hPYmplY3Qoc2hvd1NlYXJjaCkgJiYgc2hvd1NlYXJjaC5zb3J0ZXIgPyBzaG93U2VhcmNoLnNvcnRlciA6IG51bGw7XG4gICAgY29uc3QgbG9vcENoaWxkID0gKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xuICAgICAgaWYgKGZpbHRlcihzZWFyY2hWYWx1ZSwgY1BhdGgpKSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgICBjb25zdCBvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24gPSB7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgaXNMZWFmOiB0cnVlLFxuICAgICAgICAgIHBhdGg6IGNQYXRoLFxuICAgICAgICAgIFt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eV06IGNQYXRoLm1hcChwID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwocCkpLmpvaW4oJyAvICcpXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdHMucHVzaChvcHRpb24pO1xuICAgICAgfVxuICAgICAgcGF0aC5wb3AoKTtcbiAgICB9O1xuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcbiAgICAgIHBhdGgucHVzaChub2RlKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4hLmZvckVhY2goc05vZGUgPT4ge1xuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkge1xuICAgICAgICAgIHNOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgICBsb29wUGFyZW50KHNOb2RlLCBkaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGxvb3BDaGlsZChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcblxuICAgIGlmICghdGhpcy5jb2x1bW5zU25hcHNob3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBbW11dO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90WzBdLmZvckVhY2gobyA9PiAoaXNDaGlsZE9wdGlvbihvKSA/IGxvb3BDaGlsZChvKSA6IGxvb3BQYXJlbnQobykpKTtcblxuICAgIGlmIChzb3J0ZXIpIHtcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCBzZWFyY2hWYWx1ZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1ucyA9IFtyZXN1bHRzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgc2VhcmNoaW5nIG1vZGUgYnkgVUkuIEl0IGRlYWxzIHdpdGggdGhpbmdzIG5vdCBkaXJlY3RseSByZWxhdGVkIHRvIFVJLlxuICAgKiBAcGFyYW0gdG9TZWFyY2hpbmcgSWYgdGhpcyBjYXNjYWRlciBpcyBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZVxuICAgKi9cbiAgdG9nZ2xlU2VhcmNoaW5nTW9kZSh0b1NlYXJjaGluZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlID0gdG9TZWFyY2hpbmc7XG5cbiAgICBpZiAodG9TZWFyY2hpbmcpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90ID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2VyIHF1aXQgc2VhcmNoaW5nIG1vZGUgd2l0aG91dCBzZWxlY3RpbmcgYW4gb3B0aW9uLlxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90XTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zU25hcHNob3RdO1xuICAgICAgdGhpcy5zeW5jT3B0aW9ucygpO1xuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc2VsZWN0ZWQgb3B0aW9ucy5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKDApO1xuICAgIHRoaXMucHJlcGFyZUVtaXRWYWx1ZSgpO1xuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dChudWxsKTtcbiAgfVxuXG4gIGdldE9wdGlvbkxhYmVsKG86IE56Q2FzY2FkZXJPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5IHx8ICdsYWJlbCddIGFzIHN0cmluZztcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0T3B0aW9uVmFsdWUobzogTnpDYXNjYWRlck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJ107XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIGluc2VydCBvcHRpb25zIGludG8gYSBjb2x1bW4uXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gaW5zZXJ0XG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBQb3NpdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBzZXRDb2x1bW5EYXRhKG9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSwgY29sdW1uSW5kZXg6IG51bWJlciwgcGFyZW50OiBOekNhc2NhZGVyT3B0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgZXhpc3RpbmdPcHRpb25zID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICBpZiAoIWFycmF5c0VxdWFsKGV4aXN0aW5nT3B0aW9ucywgb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IChvLnBhcmVudCA9IHBhcmVudCkpO1xuICAgICAgdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XSA9IG9wdGlvbnM7XG4gICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGFsbCBhbmNlc3RvciBvcHRpb25zIGFzIGFjdGl2YXRlZC5cbiAgICovXG4gIHByaXZhdGUgdHJhY2tBbmNlc3RvckFjdGl2YXRlZE9wdGlvbnMoc3RhcnRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2YXRlZE9wdGlvbnNbaV0pIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2ldID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2kgKyAxXS5wYXJlbnQhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMobGFzdFJlc2VydmVJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zLnNwbGljZSgwLCBsYXN0UmVzZXJ2ZUluZGV4ICsgMSk7XG4gIH1cblxuICBwcml2YXRlIGRyb3BCZWhpbmRDb2x1bW5zKGxhc3RSZXNlcnZlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChsYXN0UmVzZXJ2ZUluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5zbGljZSgwLCBsYXN0UmVzZXJ2ZUluZGV4ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgY2hpbGRyZW4gb2YgYW4gb3B0aW9uIGFzeW5jaHJvbm91c2x5LlxuICAgKi9cbiAgbG9hZENoaWxkcmVuKFxuICAgIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiB8IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxuICAgIHN1Y2Nlc3M/OiBWb2lkRnVuY3Rpb24sXG4gICAgZmFpbHVyZT86IFZvaWRGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkRm4gPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGE7XG5cbiAgICBpZiAobG9hZEZuKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhbnkgb3B0aW9uIGluIGNvbHVtbnMuXG4gICAgICB0aGlzLiRsb2FkaW5nLm5leHQoY29sdW1uSW5kZXggPCAwKTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbG9hZEZuKG9wdGlvbiwgY29sdW1uSW5kZXgpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBvcHRpb24ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBvcHRpb24uaXNMZWFmID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgZmFpbHVyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNMb2FkZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbaW5kZXhdICYmIHRoaXMuY29sdW1uc1tpbmRleF0ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgb3B0aW9uIHRoYXQgaGFzIGEgZ2l2ZW4gdmFsdWUgaW4gYSBnaXZlbiBjb2x1bW4uXG4gICAqL1xuICBwcml2YXRlIGZpbmRPcHRpb25XaXRoVmFsdWUoXG4gICAgY29sdW1uSW5kZXg6IG51bWJlcixcbiAgICB2YWx1ZTogTnpDYXNjYWRlck9wdGlvbiB8IGFueSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICApOiBOekNhc2NhZGVyT3B0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgdGFyZ2V0Q29sdW1uID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICBpZiAodGFyZ2V0Q29sdW1uKSB7XG4gICAgICBjb25zdCB2ID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUodmFsdWUpIDogdmFsdWU7XG4gICAgICByZXR1cm4gdGFyZ2V0Q29sdW1uLmZpbmQobyA9PiB2ID09PSB0aGlzLmdldE9wdGlvblZhbHVlKG8pKSE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlRW1pdFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVzID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSk7XG4gIH1cbn1cbiJdfQ==