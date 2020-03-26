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
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from 'ng-zorro-antd/core';
import { NzOptionComponent } from './nz-option.component';
import { defaultFilterOption, NzFilterOptionPipe } from './nz-option.pipe';
export class NzSelectService {
    constructor() {
        /**
         * Input params *
         */
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        /**
         * selectedValueChanged should emit ngModelChange or not *
         */
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        /**
         * ContentChildren Change *
         */
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        /**
         * searchValue Change *
         */
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        /**
         * animation event *
         */
        this.animationEvent$ = new Subject();
        /**
         * open event *
         */
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.value)));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.emit)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const selectedList = data.value;
            /** @type {?} */
            let modelValue = null;
            if (this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0]);
            }
            this.updateListOfFilteredOption();
        })));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        /**
         * flat ViewChildren *
         */
        this.listOfTemplateOption = [];
        /**
         * tag option *
         */
        this.listOfTagOption = [];
        /**
         * tag option concat template option *
         */
        this.listOfTagAndTemplateOption = [];
        /**
         * ViewChildren *
         */
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        /**
         * display in top control *
         */
        this.listOfCachedSelectedOption = [];
        /**
         * selected value or ViewChildren change *
         */
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            const [listOfSelectedValue, mapOfTemplateOption] = data;
            this.listOfSelectedValue = listOfSelectedValue;
            this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            this.listOfTemplateOption = this.listOfNzOptionComponent.concat(this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            (pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()]), (/** @type {?} */ ([]))));
            this.updateListOfTagOption();
            this.updateListOfFilteredOption();
            this.resetActivatedOptionIfNeeded();
            this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clickOption(option) {
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            let listOfSelectedValue = [...this.listOfSelectedValue];
            if (this.isMultipleOrTags) {
                /** @type {?} */
                const targetValue = listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o, option.nzValue)));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    /**
     * @return {?}
     */
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            /** @type {?} */
            const selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, this.listOfSelectedValue[0])));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            const listOfCachedSelectedOption = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                /** @type {?} */
                const listOfMixedOption = [...this.listOfTagAndTemplateOption, ...this.listOfCachedSelectedOption];
                /** @type {?} */
                const option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o.nzValue, v)));
                if (option) {
                    listOfCachedSelectedOption.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption;
        }
    }
    /**
     * @return {?}
     */
    updateListOfTagOption() {
        if (this.isTagsMode) {
            /** @type {?} */
            const listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            value => !this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value)))));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                /** @type {?} */
                const cachedOption = this.listOfCachedSelectedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o.nzValue, value)));
                if (cachedOption) {
                    return cachedOption;
                }
                else {
                    /** @type {?} */
                    const nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    return nzOptionComponent;
                }
            }));
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption.concat(this.listOfTagOption)];
        }
        else {
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption];
        }
    }
    /**
     * @return {?}
     */
    updateAddTagOption() {
        /** @type {?} */
        const isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzLabel === this.searchValue));
        if (this.isTagsMode && this.searchValue && !isMatch) {
            /** @type {?} */
            const option = new NzOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilteredOption() {
        this.updateAddTagOption();
        /** @type {?} */
        const listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? [this.addedTagOption, ...listOfFilteredOption]
            : [...listOfFilteredOption];
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.clearInput$.next();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
    }
    /**
     * @param {?} option
     * @return {?}
     */
    updateActivatedOption(option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    }
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    tokenSeparate(inputValue, tokenSeparators) {
        /** auto tokenSeparators **/
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            const listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    splitBySeparators(str, separators) {
        /** @type {?} */
        const reg = new RegExp(`[${separators.join()}]`);
        /** @type {?} */
        const array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        token => token));
        return Array.from(new Set(array));
    }
    /**
     * @return {?}
     */
    resetActivatedOptionIfNeeded() {
        /** @type {?} */
        const resetActivatedOption = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const activatedOption = this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.listOfSelectedValue[0])));
            this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, (/** @type {?} */ (this.activatedOption)).nzValue))) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.compareWith(item, (/** @type {?} */ (this.activatedOption)).nzValue)))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    updateTemplateOption(listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent, listOfNzOptionGroupComponent });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    updateSelectedValueByLabelList(listOfLabel) {
        /** @type {?} */
        const listOfSelectedValue = [...this.listOfSelectedValue];
        /** @type {?} */
        const listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => listOfLabel.indexOf(item.nzLabel) !== -1))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !isNotNil(this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        v => this.compareWith(v, item))))));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue], true);
        }
        else {
            /** @type {?} */
            const listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            label => this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel)).indexOf(label) === -1));
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue, ...listOfUnMatchOptionValue], true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        const listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzDisabled && !item.nzHide));
        /** @type {?} */
        const activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item === this.activatedOption));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                const nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    removeValueFormSelected(option) {
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        const listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !this.compareWith(item, option.nzValue)));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        this.openRaw$.next(value);
        this.open = value;
    }
    /**
     * @return {?}
     */
    check() {
        this.checkRaw$.next();
    }
    /**
     * @return {?}
     */
    get isSingleMode() {
        return this.mode === 'default';
    }
    /**
     * @return {?}
     */
    get isTagsMode() {
        return this.mode === 'tags';
    }
    /**
     * @return {?}
     */
    get isMultipleMode() {
        return this.mode === 'multiple';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.mode === 'tags' || this.mode === 'multiple';
    }
}
NzSelectService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Input params *
     * @type {?}
     */
    NzSelectService.prototype.autoClearSearchValue;
    /** @type {?} */
    NzSelectService.prototype.serverSearch;
    /** @type {?} */
    NzSelectService.prototype.filterOption;
    /** @type {?} */
    NzSelectService.prototype.mode;
    /** @type {?} */
    NzSelectService.prototype.maxMultipleCount;
    /** @type {?} */
    NzSelectService.prototype.disabled;
    /** @type {?} */
    NzSelectService.prototype.compareWith;
    /**
     * selectedValueChanged should emit ngModelChange or not *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfSelectedValueWithEmit$;
    /**
     * ContentChildren Change *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.mapOfTemplateOption$;
    /**
     * searchValue Change *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.searchValueRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfFilteredOption;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.openRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.checkRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.open;
    /** @type {?} */
    NzSelectService.prototype.clearInput$;
    /** @type {?} */
    NzSelectService.prototype.searchValue;
    /** @type {?} */
    NzSelectService.prototype.isShowNotFound;
    /**
     * animation event *
     * @type {?}
     */
    NzSelectService.prototype.animationEvent$;
    /**
     * open event *
     * @type {?}
     */
    NzSelectService.prototype.open$;
    /** @type {?} */
    NzSelectService.prototype.activatedOption;
    /** @type {?} */
    NzSelectService.prototype.activatedOption$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue$;
    /** @type {?} */
    NzSelectService.prototype.modelChange$;
    /** @type {?} */
    NzSelectService.prototype.searchValue$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue;
    /**
     * flat ViewChildren *
     * @type {?}
     */
    NzSelectService.prototype.listOfTemplateOption;
    /**
     * tag option *
     * @type {?}
     */
    NzSelectService.prototype.listOfTagOption;
    /**
     * tag option concat template option *
     * @type {?}
     */
    NzSelectService.prototype.listOfTagAndTemplateOption;
    /**
     * ViewChildren *
     * @type {?}
     */
    NzSelectService.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectService.prototype.listOfNzOptionGroupComponent;
    /**
     * click or enter add tag option *
     * @type {?}
     */
    NzSelectService.prototype.addedTagOption;
    /**
     * display in top control *
     * @type {?}
     */
    NzSelectService.prototype.listOfCachedSelectedOption;
    /**
     * selected value or ViewChildren change *
     * @type {?}
     */
    NzSelectService.prototype.valueOrOption$;
    /** @type {?} */
    NzSelectService.prototype.check$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LXNlbGVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBRzFGLE1BQU0sT0FBTyxlQUFlO0lBRDVCOzs7O1FBR0UseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQWtCLG1CQUFtQixDQUFDO1FBQ2xELFNBQUksR0FBb0MsU0FBUyxDQUFDO1FBQ2xELHFCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDOztRQUVqQixnQkFBVzs7Ozs7UUFBRyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUM7Ozs7O1FBR3RD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O0lBQzVCLG1DQUFpQjs7SUFFakIsc0NBQThDOzs7Ozs7SUFHOUMsdURBR0c7Ozs7OztJQUVILCtDQU1HOzs7Ozs7SUFFSCwwQ0FBMEQ7Ozs7O0lBQzFELCtDQUF1RDs7Ozs7SUFDdkQsbUNBQTBDOzs7OztJQUMxQyxvQ0FBa0M7Ozs7O0lBQ2xDLCtCQUFxQjs7SUFDckIsc0NBQXFDOztJQUNyQyxzQ0FBaUI7O0lBQ2pCLHlDQUF1Qjs7Ozs7SUFFdkIsMENBQWdDOzs7OztJQUVoQyxnQ0FBbUQ7O0lBQ25ELDBDQUEwQzs7SUFDMUMsMkNBQWtFOztJQUNsRSwrQ0FBdUY7O0lBQ3ZGLHVDQWNFOztJQUNGLHVDQVdFOztJQUVGLDhDQUFnQzs7Ozs7SUFFaEMsK0NBQStDOzs7OztJQUUvQywwQ0FBMEM7Ozs7O0lBRTFDLHFEQUFxRDs7Ozs7SUFFckQsa0RBQWtEOztJQUNsRCx1REFBNEQ7Ozs7O0lBRTVELHlDQUF5Qzs7Ozs7SUFFekMscURBQXFEOzs7OztJQUVyRCx5Q0FrQkU7O0lBQ0YsaUNBT2dCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIFNQQUNFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBCZWhhdmlvclN1YmplY3QsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc2hhcmUsIHNraXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNOaWwsIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0RmlsdGVyT3B0aW9uLCBOekZpbHRlck9wdGlvblBpcGUsIFRGaWx0ZXJPcHRpb24gfSBmcm9tICcuL256LW9wdGlvbi5waXBlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0U2VydmljZSB7XG4gIC8qKiBJbnB1dCBwYXJhbXMgKiovXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlID0gdHJ1ZTtcbiAgc2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIG1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgPSAnZGVmYXVsdCc7XG4gIG1heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG4gIC8qKiBzZWxlY3RlZFZhbHVlQ2hhbmdlZCBzaG91bGQgZW1pdCBuZ01vZGVsQ2hhbmdlIG9yIG5vdCAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgdmFsdWU6IGFueVtdOyBlbWl0OiBib29sZWFuIH0+KHtcbiAgICB2YWx1ZTogW10sXG4gICAgZW1pdDogZmFsc2VcbiAgfSk7XG4gIC8qKiBDb250ZW50Q2hpbGRyZW4gQ2hhbmdlICoqL1xuICBwcml2YXRlIG1hcE9mVGVtcGxhdGVPcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7XG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IE56T3B0aW9uQ29tcG9uZW50W107XG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdO1xuICB9Pih7XG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFtdLFxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFtdXG4gIH0pO1xuICAvKiogc2VhcmNoVmFsdWUgQ2hhbmdlICoqL1xuICBwcml2YXRlIHNlYXJjaFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIHByaXZhdGUgbGlzdE9mRmlsdGVyZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBvcGVuUmF3JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgY2hlY2tSYXckID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBvcGVuID0gZmFsc2U7XG4gIGNsZWFySW5wdXQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgc2VhcmNoVmFsdWUgPSAnJztcbiAgaXNTaG93Tm90Rm91bmQgPSBmYWxzZTtcbiAgLyoqIGFuaW1hdGlvbiBldmVudCAqKi9cbiAgYW5pbWF0aW9uRXZlbnQkID0gbmV3IFN1YmplY3QoKTtcbiAgLyoqIG9wZW4gZXZlbnQgKiovXG4gIG9wZW4kID0gdGhpcy5vcGVuUmF3JC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICBhY3RpdmF0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcbiAgYWN0aXZhdGVkT3B0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbD4oMSk7XG4gIGxpc3RPZlNlbGVjdGVkVmFsdWUkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS52YWx1ZSkpO1xuICBtb2RlbENoYW5nZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShcbiAgICBmaWx0ZXIoaXRlbSA9PiBpdGVtLmVtaXQpLFxuICAgIG1hcChkYXRhID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGRhdGEudmFsdWU7XG4gICAgICBsZXQgbW9kZWxWYWx1ZTogYW55W10gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3RbMF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgICB9KVxuICApO1xuICBzZWFyY2hWYWx1ZSQgPSB0aGlzLnNlYXJjaFZhbHVlUmF3JC5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgc2tpcCgxKSxcbiAgICBzaGFyZSgpLFxuICAgIHRhcCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvblswXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk7XG4gICAgfSlcbiAgKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXSA9IFtdO1xuICAvKiogZmxhdCBWaWV3Q2hpbGRyZW4gKiovXG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIC8qKiB0YWcgb3B0aW9uICoqL1xuICBsaXN0T2ZUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgLyoqIHRhZyBvcHRpb24gY29uY2F0IHRlbXBsYXRlIG9wdGlvbiAqKi9cbiAgbGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgLyoqIFZpZXdDaGlsZHJlbiAqKi9cbiAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdID0gW107XG4gIC8qKiBjbGljayBvciBlbnRlciBhZGQgdGFnIG9wdGlvbiAqKi9cbiAgYWRkZWRUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcbiAgLyoqIGRpc3BsYXkgaW4gdG9wIGNvbnRyb2wgKiovXG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIC8qKiBzZWxlY3RlZCB2YWx1ZSBvciBWaWV3Q2hpbGRyZW4gY2hhbmdlICoqL1xuICB2YWx1ZU9yT3B0aW9uJCA9IGNvbWJpbmVMYXRlc3QoW3RoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSQsIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiRdKS5waXBlKFxuICAgIHRhcChkYXRhID0+IHtcbiAgICAgIGNvbnN0IFtsaXN0T2ZTZWxlY3RlZFZhbHVlLCBtYXBPZlRlbXBsYXRlT3B0aW9uXSA9IGRhdGE7XG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlO1xuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCA9IG1hcE9mVGVtcGxhdGVPcHRpb24ubGlzdE9mTnpPcHRpb25Db21wb25lbnQ7XG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgPSBtYXBPZlRlbXBsYXRlT3B0aW9uLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ7XG4gICAgICB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jb25jYXQoXG4gICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5yZWR1Y2UoXG4gICAgICAgICAgKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSxcbiAgICAgICAgICBbXSBhcyBOek9wdGlvbkNvbXBvbmVudFtdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlRhZ09wdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpO1xuICAgIH0pLFxuICAgIHNoYXJlKClcbiAgKTtcbiAgY2hlY2skID0gbWVyZ2UoXG4gICAgdGhpcy5jaGVja1JhdyQsXG4gICAgdGhpcy52YWx1ZU9yT3B0aW9uJCxcbiAgICB0aGlzLnNlYXJjaFZhbHVlJCxcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiQsXG4gICAgdGhpcy5vcGVuJCxcbiAgICB0aGlzLm1vZGVsQ2hhbmdlJFxuICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIC8qKiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gbmV4dCBsaXN0T2ZTZWxlY3RlZFZhbHVlJCAqKi9cbiAgICBpZiAoIW9wdGlvbi5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5uelZhbHVlKSk7XG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm1heE11bHRpcGxlQ291bnQpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghdGhpcy5jb21wYXJlV2l0aChsaXN0T2ZTZWxlY3RlZFZhbHVlWzBdLCBvcHRpb24ubnpWYWx1ZSkpIHtcbiAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtvcHRpb24ubnpWYWx1ZV07XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PlxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKVxuICAgICAgKTtcbiAgICAgIGlmICghaXNOaWwoc2VsZWN0ZWRPcHRpb24pKSB7XG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBbc2VsZWN0ZWRPcHRpb25dO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZvckVhY2godiA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RPZk1peGVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sIC4uLnRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25dO1xuICAgICAgICBjb25zdCBvcHRpb24gPSBsaXN0T2ZNaXhlZE9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHYpKTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb247XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgIGNvbnN0IGxpc3RPZk1pc3NWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoXG4gICAgICAgIHZhbHVlID0+ICF0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdmFsdWUpKVxuICAgICAgKTtcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mTWlzc1ZhbHVlLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGNhY2hlZE9wdGlvbiA9IHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2YWx1ZSkpO1xuICAgICAgICBpZiAoY2FjaGVkT3B0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGNhY2hlZE9wdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuek9wdGlvbkNvbXBvbmVudCA9IG5ldyBOek9wdGlvbkNvbXBvbmVudCgpO1xuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uekxhYmVsID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIG56T3B0aW9uQ29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uXTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBZGRUYWdPcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24uZmluZChpdGVtID0+IGl0ZW0ubnpMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSAmJiB0aGlzLnNlYXJjaFZhbHVlICYmICFpc01hdGNoKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBuZXcgTnpPcHRpb25Db21wb25lbnQoKTtcbiAgICAgIG9wdGlvbi5uelZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcbiAgICAgIG9wdGlvbi5uekxhYmVsID0gdGhpcy5zZWFyY2hWYWx1ZTtcbiAgICAgIHRoaXMuYWRkZWRUYWdPcHRpb24gPSBvcHRpb247XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZGVkVGFnT3B0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbigpO1xuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uID0gbmV3IE56RmlsdGVyT3B0aW9uUGlwZSgpLnRyYW5zZm9ybShcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlLFxuICAgICAgdGhpcy5maWx0ZXJPcHRpb24sXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaFxuICAgICk7XG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IHRoaXMuYWRkZWRUYWdPcHRpb25cbiAgICAgID8gW3RoaXMuYWRkZWRUYWdPcHRpb24sIC4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXVxuICAgICAgOiBbLi4ubGlzdE9mRmlsdGVyZWRPcHRpb25dO1xuICAgIHRoaXMuaXNTaG93Tm90Rm91bmQgPSAhdGhpcy5pc1RhZ3NNb2RlICYmICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmxlbmd0aDtcbiAgfVxuXG4gIGNsZWFySW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcklucHV0JC5uZXh0KCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLm5leHQoeyB2YWx1ZSwgZW1pdCB9KTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24gPSBvcHRpb247XG4gIH1cblxuICB0b2tlblNlcGFyYXRlKGlucHV0VmFsdWU6IHN0cmluZywgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIC8qKiBhdXRvIHRva2VuU2VwYXJhdG9ycyAqKi9cbiAgICBpZiAoXG4gICAgICBpbnB1dFZhbHVlICYmXG4gICAgICBpbnB1dFZhbHVlLmxlbmd0aCAmJlxuICAgICAgdG9rZW5TZXBhcmF0b3JzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5pc011bHRpcGxlT3JUYWdzICYmXG4gICAgICB0aGlzLmluY2x1ZGVzU2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpXG4gICAgKSB7XG4gICAgICBjb25zdCBsaXN0T2ZMYWJlbCA9IHRoaXMuc3BsaXRCeVNlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKTtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZUJ5TGFiZWxMaXN0KGxpc3RPZkxhYmVsKTtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3BsaXRCeVNlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgWyR7c2VwYXJhdG9ycy5qb2luKCl9XWApO1xuICAgIGNvbnN0IGFycmF5ID0gKHN0ciBhcyBzdHJpbmcpLnNwbGl0KHJlZykuZmlsdGVyKHRva2VuID0+IHRva2VuKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5KSk7XG4gIH1cblxuICByZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc2V0QWN0aXZhdGVkT3B0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZhdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT5cbiAgICAgICAgdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSlcbiAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihhY3RpdmF0ZWRPcHRpb24gfHwgbnVsbCk7XG4gICAgfTtcbiAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24pIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLmFjdGl2YXRlZE9wdGlvbiEubnpWYWx1ZSkpIHx8XG4gICAgICAgICF0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKVxuICAgICAgKSB7XG4gICAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGVtcGxhdGVPcHRpb24oXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IE56T3B0aW9uQ29tcG9uZW50W10sXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdXG4gICk6IHZvaWQge1xuICAgIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiQubmV4dCh7IGxpc3RPZk56T3B0aW9uQ29tcG9uZW50LCBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0pO1xuICB9XG5cbiAgdXBkYXRlU2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoVmFsdWVSYXckLm5leHQodmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWRWYWx1ZUJ5TGFiZWxMaXN0KGxpc3RPZkxhYmVsOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcbiAgICBjb25zdCBsaXN0T2ZNYXRjaE9wdGlvblZhbHVlID0gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvblxuICAgICAgLmZpbHRlcihpdGVtID0+IGxpc3RPZkxhYmVsLmluZGV4T2YoaXRlbS5uekxhYmVsKSAhPT0gLTEpXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKVxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpc05vdE5pbCh0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgaXRlbSkpKSk7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZU1vZGUpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZV0sIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0T2ZVbk1hdGNoT3B0aW9uVmFsdWUgPSBsaXN0T2ZMYWJlbC5maWx0ZXIoXG4gICAgICAgIGxhYmVsID0+IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24ubWFwKGl0ZW0gPT4gaXRlbS5uekxhYmVsKS5pbmRleE9mKGxhYmVsKSA9PT0gLTFcbiAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoXG4gICAgICAgIFsuLi5saXN0T2ZTZWxlY3RlZFZhbHVlLCAuLi5saXN0T2ZNYXRjaE9wdGlvblZhbHVlLCAuLi5saXN0T2ZVbk1hdGNoT3B0aW9uVmFsdWVdLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmlsdGVyKFxuICAgICAgaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkICYmICFpdGVtLm56SGlkZVxuICAgICk7XG4gICAgY29uc3QgYWN0aXZhdGVkSW5kZXggPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZE9ySGlkZGVuLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPVxuICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID4gMCA/IGFjdGl2YXRlZEluZGV4IC0gMSA6IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbltwcmVJbmRleF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPVxuICAgICAgICAgIGFjdGl2YXRlZEluZGV4IDwgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbi5sZW5ndGggLSAxID8gYWN0aXZhdGVkSW5kZXggKyAxIDogMDtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbltuZXh0SW5kZXhdKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRlZE9wdGlvbiAmJiAhdGhpcy5hY3RpdmF0ZWRPcHRpb24ubnpEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCQUNLU1BBQ0U6XG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvblt0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgb3B0aW9uLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiAhdGhpcy5jb21wYXJlV2l0aChpdGVtLCBvcHRpb24ubnpWYWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgfVxuXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlblJhdyQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5vcGVuID0gdmFsdWU7XG4gIH1cblxuICBjaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrUmF3JC5uZXh0KCk7XG4gIH1cblxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZWZhdWx0JztcbiAgfVxuXG4gIGdldCBpc1RhZ3NNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxufVxuIl19