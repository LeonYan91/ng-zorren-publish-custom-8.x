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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DebugElement, ElementRef, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, reqAnimFrame, InputBoolean, NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
import { TimeHolder } from './time-holder';
/**
 * @param {?} length
 * @param {?=} step
 * @param {?=} start
 * @return {?}
 */
function makeRange(length, step = 1, start = 0) {
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    (_, i) => (i + start) * step));
}
export class NzTimePickerPanelComponent {
    /**
     * @param {?} element
     * @param {?} updateCls
     * @param {?} cdr
     */
    constructor(element, updateCls, cdr) {
        this.element = element;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._allowEmpty = true;
        this.prefixCls = 'ant-time-picker-panel';
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
        this.opened = false;
        this.nzDefaultOpenValue = new Date();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowEmpty(value) {
        if (isNotNil(value)) {
            this._allowEmpty = value;
        }
    }
    /**
     * @return {?}
     */
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (this._disabledHours) {
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledHours() {
        return this._disabledHours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledMinutes(value) {
        if (isNotNil(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledSeconds(value) {
        if (isNotNil(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set format(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.enabledColumns = 0;
            /** @type {?} */
            const charSet = new Set(value);
            this.hourEnabled = charSet.has('H') || charSet.has('h');
            this.minuteEnabled = charSet.has('m');
            this.secondEnabled = charSet.has('s');
            if (this.hourEnabled) {
                this.enabledColumns++;
            }
            if (this.minuteEnabled) {
                this.enabledColumns++;
            }
            if (this.secondEnabled) {
                this.enabledColumns++;
            }
            if (this.nzUse12Hours) {
                this.build12Hours();
            }
        }
    }
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHourStep(value) {
        if (isNotNil(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzHourStep() {
        return this._nzHourStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMinuteStep(value) {
        if (isNotNil(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSecondStep(value) {
        if (isNotNil(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    /**
     * @return {?}
     */
    selectInputRange() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.nzTimeValueAccessorDirective) {
                this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    }
    /**
     * @return {?}
     */
    buildHours() {
        /** @type {?} */
        let hourRanges = 24;
        /** @type {?} */
        let disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        /** @type {?} */
        let startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => i >= 12)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i > 12 ? i - 12 : i)));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => i < 12 || i === 24)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i === 24 || i === 0 ? 12 : i)));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            const temp = [...this.hourRange];
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    }
    /**
     * @return {?}
     */
    buildMinutes() {
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    buildSeconds() {
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    build12Hours() {
        /** @type {?} */
        const isUpperForamt = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperForamt ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperForamt ? 'PM' : 'pm'
            }
        ];
    }
    /**
     * @return {?}
     */
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    selectHour(hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} second
     * @return {?}
     */
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select12Hours(value) {
        this.time.selected12Hours = value.value;
        if (this._disabledHours) {
            this.buildHours();
        }
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
        this.scrollToSelected(this.use12HoursListElement.nativeElement, value.index, 120, '12-hour');
    }
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    scrollToSelected(instance, index, duration = 0, unit) {
        /** @type {?} */
        const transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        const currentOption = (/** @type {?} */ ((instance.children[0].children[transIndex] ||
            instance.children[0].children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    translateIndex(index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            const disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            const disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours)));
            return this.calcIndex(disabledMinutes, this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            /** @type {?} */
            const disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes)));
            return this.calcIndex(disabledSeconds, this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        const difference = to - element.scrollTop;
        /** @type {?} */
        const perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        () => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        }));
    }
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    calcIndex(array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                (pre, value) => {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    changed() {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-column-${this.enabledColumns}`]: this.nzInDatePicker ? false : true,
            [`${this.prefixCls}-narrow`]: this.enabledColumns < 3,
            [`${this.prefixCls}-placement-bottomLeft`]: this.nzInDatePicker ? false : true
        });
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    isSelectedHour(hour) {
        return (hour.index === this.time.viewHours ||
            (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours));
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    isSelectedMinute(minute) {
        return (minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes));
    }
    /**
     * @param {?} second
     * @return {?}
     */
    isSelectedSecond(second) {
        return (second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isSelected12Hours(value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    }
    /**
     * @return {?}
     */
    initPosition() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.hourEnabled && this.hourListElement) {
                if (isNotNil(this.time.viewHours)) {
                    this.scrollToSelected(this.hourListElement.nativeElement, (/** @type {?} */ (this.time.viewHours)), 0, 'hour');
                }
                else {
                    this.scrollToSelected(this.hourListElement.nativeElement, this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (this.minuteEnabled && this.minuteListElement) {
                if (isNotNil(this.time.minutes)) {
                    this.scrollToSelected(this.minuteListElement.nativeElement, (/** @type {?} */ (this.time.minutes)), 0, 'minute');
                }
                else {
                    this.scrollToSelected(this.minuteListElement.nativeElement, this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (this.secondEnabled && this.secondListElement) {
                if (isNotNil(this.time.seconds)) {
                    this.scrollToSelected(this.secondListElement.nativeElement, (/** @type {?} */ (this.time.seconds)), 0, 'second');
                }
                else {
                    this.scrollToSelected(this.secondListElement.nativeElement, this.time.defaultSeconds, 0, 'second');
                }
            }
            if (this.nzUse12Hours && this.use12HoursListElement) {
                /** @type {?} */
                const selectedHours = isNotNil(this.time.selected12Hours)
                    ? this.time.selected12Hours
                    : this.time.default12Hours;
                /** @type {?} */
                const index = selectedHours === 'AM' ? 0 : 1;
                this.scrollToSelected(this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.changed();
            this.touched();
        }));
        this.buildTimes();
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzUse12Hours, opened, nzDefaultOpenValue } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (opened && opened.currentValue) {
            this.initPosition();
            this.selectInputRange();
        }
        if (nzDefaultOpenValue) {
            /** @type {?} */
            const value = nzDefaultOpenValue.currentValue;
            if (isNotNil(value)) {
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
}
NzTimePickerPanelComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker-panel',
                exportAs: 'nzTimePickerPanel',
                template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }}\">\n  <div\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\n    <div class=\"{{ prefixCls }}-input-wrap\">\n      <input\n        type=\"text\"\n        class=\"{{ prefixCls }}-input\"\n        [placeholder]=\"nzPlaceHolder\"\n        [nzTime]=\"format\"\n        [(ngModel)]=\"time.value\"\n        (blur)=\"time.changed()\">\n    </div>\n    <div class=\"{{ prefixCls }}-combobox\">\n      <div\n        *ngIf=\"hourEnabled\"\n        #hourListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let hour of hourRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\n              (click)=\"selectHour(hour)\"\n              class=\"\n                {{ isSelectedHour(hour) ? prefixCls + '-select-option-selected' : '' }}\n                {{ hour.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ hour.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n      <div\n        *ngIf=\"minuteEnabled\"\n        #minuteListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let minute of minuteRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\n              (click)=\"selectMinute(minute)\"\n              class=\"\n                {{ isSelectedMinute(minute) ? prefixCls + '-select-option-selected' : '' }}\n                {{ minute.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ minute.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n      <div\n        *ngIf=\"secondEnabled\"\n        #secondListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let second of secondRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\n              (click)=\"selectSecond(second)\"\n              class=\"\n                {{ isSelectedSecond(second) ? prefixCls + '-select-option-selected' : '' }}\n                {{ second.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ second.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n      <div\n        *ngIf=\"nzUse12Hours\"\n        #use12HoursListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let range of use12HoursRange \">\n            <li\n              *ngIf=\"!nzHideDisabledOptions\"\n              (click)=\"select12Hours(range)\"\n              class=\"\n                {{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\n              \"\n            >\n              {{ range.value }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\n    </div>\n  </div>\n</div>",
                providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
            }] }
];
/** @nocollapse */
NzTimePickerPanelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: UpdateCls },
    { type: ChangeDetectorRef }
];
NzTimePickerPanelComponent.propDecorators = {
    nzTimeValueAccessorDirective: [{ type: ViewChild, args: [NzTimeValueAccessorDirective, { static: false },] }],
    hourListElement: [{ type: ViewChild, args: ['hourListElement', { static: false },] }],
    minuteListElement: [{ type: ViewChild, args: ['minuteListElement', { static: false },] }],
    secondListElement: [{ type: ViewChild, args: ['secondListElement', { static: false },] }],
    use12HoursListElement: [{ type: ViewChild, args: ['use12HoursListElement', { static: false },] }],
    nzInDatePicker: [{ type: Input }],
    nzAddOn: [{ type: Input }],
    nzHideDisabledOptions: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzUse12Hours: [{ type: Input }],
    opened: [{ type: Input }],
    nzDefaultOpenValue: [{ type: Input }],
    nzAllowEmpty: [{ type: Input }],
    nzDisabledHours: [{ type: Input }],
    nzDisabledMinutes: [{ type: Input }],
    nzDisabledSeconds: [{ type: Input }],
    format: [{ type: Input }],
    nzHourStep: [{ type: Input }],
    nzMinuteStep: [{ type: Input }],
    nzSecondStep: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzHourStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzMinuteStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzSecondStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._format;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledHours;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledMinutes;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledSeconds;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.prefixCls;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.time;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.enabledColumns;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzTimeValueAccessorDirective;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzInDatePicker;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzUse12Hours;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.opened;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzDefaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.updateCls;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBS0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSx3QkFBd0IsSUFBSSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRTNDLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxPQUFlLENBQUMsRUFBRSxRQUFnQixDQUFDO0lBQ3BFLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBQyxDQUFDO0FBQ3ZGLENBQUM7QUFZRCxNQUFNLE9BQU8s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REFBdUM7Ozs7O0lBQ3ZDLHNEQUFxRDs7Ozs7SUFDckQsc0RBQXFFOzs7OztJQUNyRSxpREFBMkI7O0lBQzNCLCtDQUE0Qzs7SUFDNUMsMENBQXdCOztJQUN4QixpREFBbUI7O0lBQ25CLG1EQUFxQjs7SUFDckIsbURBQXFCOztJQUNyQixvREFBbUI7O0lBQ25CLCtDQUErRDs7SUFDL0QsaURBQWlFOztJQUNqRSxpREFBaUU7O0lBQ2pFLHFEQUFpRTs7SUFFakUsa0VBQzJEOztJQUMzRCxxREFDOEI7O0lBQzlCLHVEQUFtRjs7SUFDbkYsdURBQW1GOztJQUNuRiwyREFBMkY7O0lBRTNGLG9EQUF5Qzs7SUFDekMsNkNBQW9DOztJQUNwQywyREFBdUM7O0lBQ3ZDLGlEQUE2Qjs7SUFDN0IsbURBQStCOztJQUMvQixrREFBOEM7O0lBQzlDLDRDQUF3Qjs7SUFDeEIsd0RBQXlDOzs7OztJQW1YN0IsNkNBQTJCOzs7OztJQUFFLCtDQUE0Qjs7Ozs7SUFBRSx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERlYnVnRWxlbWVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzTm90TmlsLCByZXFBbmltRnJhbWUsIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuL256LXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRpbWVIb2xkZXIgfSBmcm9tICcuL3RpbWUtaG9sZGVyJztcblxuZnVuY3Rpb24gbWFrZVJhbmdlKGxlbmd0aDogbnVtYmVyLCBzdGVwOiBudW1iZXIgPSAxLCBzdGFydDogbnVtYmVyID0gMCk6IG51bWJlcltdIHtcbiAgcmV0dXJuIG5ldyBBcnJheShNYXRoLmNlaWwobGVuZ3RoIC8gc3RlcCkpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoaSArIHN0YXJ0KSAqIHN0ZXApO1xufVxuXG5leHBvcnQgdHlwZSBOelRpbWVQaWNrZXJVbml0ID0gJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJyB8ICcxMi1ob3VyJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LXRpbWUtcGlja2VyLXBhbmVsJyxcbiAgZXhwb3J0QXM6ICduelRpbWVQaWNrZXJQYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1VwZGF0ZUNscywgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfbnpIb3VyU3RlcCA9IDE7XG4gIHByaXZhdGUgX256TWludXRlU3RlcCA9IDE7XG4gIHByaXZhdGUgX256U2Vjb25kU3RlcCA9IDE7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIG9uVG91Y2g6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2Zvcm1hdCA9ICdISDptbTpzcyc7XG4gIHByaXZhdGUgX2Rpc2FibGVkSG91cnM6ICgpID0+IG51bWJlcltdO1xuICBwcml2YXRlIF9kaXNhYmxlZE1pbnV0ZXM6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xuICBwcml2YXRlIF9kaXNhYmxlZFNlY29uZHM6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgcHJpdmF0ZSBfYWxsb3dFbXB0eSA9IHRydWU7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC10aW1lLXBpY2tlci1wYW5lbCc7XG4gIHRpbWUgPSBuZXcgVGltZUhvbGRlcigpO1xuICBob3VyRW5hYmxlZCA9IHRydWU7XG4gIG1pbnV0ZUVuYWJsZWQgPSB0cnVlO1xuICBzZWNvbmRFbmFibGVkID0gdHJ1ZTtcbiAgZW5hYmxlZENvbHVtbnMgPSAzO1xuICBob3VyUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcbiAgbWludXRlUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcbiAgc2Vjb25kUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcbiAgdXNlMTJIb3Vyc1JhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9PjtcblxuICBAVmlld0NoaWxkKE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBuelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlOiBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlO1xuICBAVmlld0NoaWxkKCdob3VyTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgaG91ckxpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ21pbnV0ZUxpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1pbnV0ZUxpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3NlY29uZExpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlY29uZExpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3VzZTEySG91cnNMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSB1c2UxMkhvdXJzTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcblxuICBASW5wdXQoKSBuekluRGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyBJZiBpbnNpZGUgYSBkYXRlLXBpY2tlciwgbW9yZSBkaWZmIHdvcmtzIG5lZWQgdG8gYmUgZG9uZVxuICBASW5wdXQoKSBuekFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpIaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2xlYXJUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VXNlMTJIb3VycyA9IGZhbHNlO1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEZWZhdWx0T3BlblZhbHVlID0gbmV3IERhdGUoKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0VtcHR5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fYWxsb3dFbXB0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekFsbG93RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RW1wdHk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZEhvdXJzKHZhbHVlOiAoKSA9PiBudW1iZXJbXSkge1xuICAgIHRoaXMuX2Rpc2FibGVkSG91cnMgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRIb3Vycykge1xuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWRIb3VycygpOiAoKSA9PiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkSG91cnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZE1pbnV0ZXModmFsdWU6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWRNaW51dGVzID0gdmFsdWU7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkTWludXRlcygpOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkTWludXRlcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkU2Vjb25kcyh2YWx1ZTogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWRTZWNvbmRzID0gdmFsdWU7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkU2Vjb25kcygpOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZFNlY29uZHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMgPSAwO1xuICAgICAgY29uc3QgY2hhclNldCA9IG5ldyBTZXQodmFsdWUpO1xuICAgICAgdGhpcy5ob3VyRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdIJykgfHwgY2hhclNldC5oYXMoJ2gnKTtcbiAgICAgIHRoaXMubWludXRlRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdtJyk7XG4gICAgICB0aGlzLnNlY29uZEVuYWJsZWQgPSBjaGFyU2V0LmhhcygncycpO1xuICAgICAgaWYgKHRoaXMuaG91ckVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWludXRlRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xuICAgICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SG91clN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256SG91clN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekhvdXJTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256SG91clN0ZXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpNaW51dGVTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uek1pbnV0ZVN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56TWludXRlU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uek1pbnV0ZVN0ZXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWNvbmRTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uelNlY29uZFN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2Vjb25kU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uelNlY29uZFN0ZXA7XG4gIH1cblxuICBzZWxlY3RJbnB1dFJhbmdlKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUuc2V0UmFuZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkSG91cnMoKTogdm9pZCB7XG4gICAgbGV0IGhvdXJSYW5nZXMgPSAyNDtcbiAgICBsZXQgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIHRoaXMubnpEaXNhYmxlZEhvdXJzKCk7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xuICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xuICAgICAgaG91clJhbmdlcyA9IDEyO1xuICAgICAgaWYgKGRpc2FibGVkSG91cnMpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgPT09ICdQTScpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaWx0ZXIgYW5kIHRyYW5zZm9ybSBob3VycyB3aGljaCBncmVhdGVyIG9yIGVxdWFsIHRvIDEyXG4gICAgICAgICAgICogWzAsIDEsIDIsIC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLiwgMjNdID0+IFsxMiwgMSwgMiwgMywgLi4uLCAxMV1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRIb3Vycy5maWx0ZXIoaSA9PiBpID49IDEyKS5tYXAoaSA9PiAoaSA+IDEyID8gaSAtIDEyIDogaSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZpbHRlciBhbmQgdHJhbnNmb3JtIGhvdXJzIHdoaWNoIGxlc3MgdGhhbiAxMlxuICAgICAgICAgICAqIFswLCAxLCAyLC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLjIzXSA9PiBbMTIsIDEsIDIsIDMsIC4uLiwgMTFdXG4gICAgICAgICAgICovXG4gICAgICAgICAgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkSG91cnMuZmlsdGVyKGkgPT4gaSA8IDEyIHx8IGkgPT09IDI0KS5tYXAoaSA9PiAoaSA9PT0gMjQgfHwgaSA9PT0gMCA/IDEyIDogaSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdGFydEluZGV4ID0gMTtcbiAgICB9XG4gICAgdGhpcy5ob3VyUmFuZ2UgPSBtYWtlUmFuZ2UoaG91clJhbmdlcywgdGhpcy5uekhvdXJTdGVwLCBzdGFydEluZGV4KS5tYXAociA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogcixcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIGRpc2FibGVkSG91cnMuaW5kZXhPZihyKSAhPT0gLTFcbiAgICAgIH07XG4gICAgfSk7XG4gICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzICYmIHRoaXMuaG91clJhbmdlW3RoaXMuaG91clJhbmdlLmxlbmd0aCAtIDFdLmluZGV4ID09PSAxMikge1xuICAgICAgY29uc3QgdGVtcCA9IFsuLi50aGlzLmhvdXJSYW5nZV07XG4gICAgICB0ZW1wLnVuc2hpZnQodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcbiAgICAgIHRlbXAuc3BsaWNlKHRlbXAubGVuZ3RoIC0gMSwgMSk7XG4gICAgICB0aGlzLmhvdXJSYW5nZSA9IHRlbXA7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRNaW51dGVzKCk6IHZvaWQge1xuICAgIHRoaXMubWludXRlUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpNaW51dGVTdGVwKS5tYXAociA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogcixcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMhKS5pbmRleE9mKHIpICE9PSAtMVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkU2Vjb25kcygpOiB2b2lkIHtcbiAgICB0aGlzLnNlY29uZFJhbmdlID0gbWFrZVJhbmdlKDYwLCB0aGlzLm56U2Vjb25kU3RlcCkubWFwKHIgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IHIsXG4gICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgIHRoaXMubnpEaXNhYmxlZFNlY29uZHMgJiYgdGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMhLCB0aGlzLnRpbWUubWludXRlcyEpLmluZGV4T2YocikgIT09IC0xXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGQxMkhvdXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzVXBwZXJGb3JhbXQgPSB0aGlzLl9mb3JtYXQuaW5jbHVkZXMoJ0EnKTtcbiAgICB0aGlzLnVzZTEySG91cnNSYW5nZSA9IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9yYW10ID8gJ0FNJyA6ICdhbSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICB2YWx1ZTogaXNVcHBlckZvcmFtdCA/ICdQTScgOiAncG0nXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGJ1aWxkVGltZXMoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XG4gIH1cblxuICBzZWxlY3RIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRIb3Vycyhob3VyLmluZGV4LCBob3VyLmRpc2FibGVkKTtcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgaG91ci5pbmRleCwgMTIwLCAnaG91cicpO1xuXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcyB8fCB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldE1pbnV0ZXMobWludXRlLmluZGV4LCBtaW51dGUuZGlzYWJsZWQpO1xuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG1pbnV0ZS5pbmRleCwgMTIwLCAnbWludXRlJyk7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0U2Vjb25kcyhzZWNvbmQuaW5kZXgsIHNlY29uZC5kaXNhYmxlZCk7XG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgc2Vjb25kLmluZGV4LCAxMjAsICdzZWNvbmQnKTtcbiAgfVxuXG4gIHNlbGVjdDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycyA9IHZhbHVlLnZhbHVlO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHZhbHVlLmluZGV4LCAxMjAsICcxMi1ob3VyJyk7XG4gIH1cblxuICBzY3JvbGxUb1NlbGVjdGVkKGluc3RhbmNlOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDAsIHVuaXQ6IE56VGltZVBpY2tlclVuaXQpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc0luZGV4ID0gdGhpcy50cmFuc2xhdGVJbmRleChpbmRleCwgdW5pdCk7XG4gICAgY29uc3QgY3VycmVudE9wdGlvbiA9IChpbnN0YW5jZS5jaGlsZHJlblswXS5jaGlsZHJlblt0cmFuc0luZGV4XSB8fFxuICAgICAgaW5zdGFuY2UuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0pIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuc2Nyb2xsVG8oaW5zdGFuY2UsIGN1cnJlbnRPcHRpb24ub2Zmc2V0VG9wLCBkdXJhdGlvbik7XG4gIH1cblxuICB0cmFuc2xhdGVJbmRleChpbmRleDogbnVtYmVyLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogbnVtYmVyIHtcbiAgICBpZiAodW5pdCA9PT0gJ2hvdXInKSB7XG4gICAgICBjb25zdCBkaXNhYmxlZEhvdXJzID0gdGhpcy5uekRpc2FibGVkSG91cnMgJiYgdGhpcy5uekRpc2FibGVkSG91cnMoKTtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZEhvdXJzLCB0aGlzLmhvdXJSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnbWludXRlJykge1xuICAgICAgY29uc3QgZGlzYWJsZWRNaW51dGVzID0gdGhpcy5uekRpc2FibGVkTWludXRlcyAmJiB0aGlzLm56RGlzYWJsZWRNaW51dGVzKHRoaXMudGltZS5ob3VycyEpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkTWludXRlcywgdGhpcy5taW51dGVSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgICAgLy8gc2Vjb25kXG4gICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSB0aGlzLm56RGlzYWJsZWRTZWNvbmRzICYmIHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKTtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZFNlY29uZHMsIHRoaXMuc2Vjb25kUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAxMi1ob3VyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoW10sIHRoaXMudXNlMTJIb3Vyc1JhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICBjb25zdCBwZXJUaWNrID0gKGRpZmZlcmVuY2UgLyBkdXJhdGlvbikgKiAxMDtcblxuICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjSW5kZXgoYXJyYXk6IG51bWJlcltdLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoICYmIHRoaXMubnpIaWRlRGlzYWJsZWRPcHRpb25zKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpbmRleCAtXG4gICAgICAgIGFycmF5LnJlZHVjZSgocHJlLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmUgKyAodmFsdWUgPCBpbmRleCA/IDEgOiAwKTtcbiAgICAgICAgfSwgMClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hhbmdlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnRpbWUudmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdG91Y2hlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vblRvdWNoKSB7XG4gICAgICB0aGlzLm9uVG91Y2goKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jb2x1bW4tJHt0aGlzLmVuYWJsZWRDb2x1bW5zfWBdOiB0aGlzLm56SW5EYXRlUGlja2VyID8gZmFsc2UgOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uYXJyb3dgXTogdGhpcy5lbmFibGVkQ29sdW1ucyA8IDMsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXBsYWNlbWVudC1ib3R0b21MZWZ0YF06IHRoaXMubnpJbkRhdGVQaWNrZXIgPyBmYWxzZSA6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBob3VyLmluZGV4ID09PSB0aGlzLnRpbWUudmlld0hvdXJzIHx8XG4gICAgICAoIWlzTm90TmlsKHRoaXMudGltZS52aWV3SG91cnMpICYmIGhvdXIuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0Vmlld0hvdXJzKVxuICAgICk7XG4gIH1cblxuICBpc1NlbGVjdGVkTWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLm1pbnV0ZXMgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykgJiYgbWludXRlLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMpXG4gICAgKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuc2Vjb25kcyB8fCAoIWlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSAmJiBzZWNvbmQuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcylcbiAgICApO1xuICB9XG5cbiAgaXNTZWxlY3RlZDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHZhbHVlLnZhbHVlLnRvVXBwZXJDYXNlKCkgPT09IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgfHxcbiAgICAgICghaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycykgJiYgdmFsdWUudmFsdWUudG9VcHBlckNhc2UoKSA9PT0gdGhpcy50aW1lLmRlZmF1bHQxMkhvdXJzKVxuICAgICk7XG4gIH1cblxuICBpbml0UG9zaXRpb24oKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCAmJiB0aGlzLmhvdXJMaXN0RWxlbWVudCkge1xuICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy50aW1lLnZpZXdIb3VycykpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnZpZXdIb3VycyEsIDAsICdob3VyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0Vmlld0hvdXJzLCAwLCAnaG91cicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5taW51dGVFbmFibGVkICYmIHRoaXMubWludXRlTGlzdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5taW51dGVzKSkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5taW51dGVzISwgMCwgJ21pbnV0ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0TWludXRlcywgMCwgJ21pbnV0ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkICYmIHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5zZWNvbmRzISwgMCwgJ3NlY29uZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcywgMCwgJ3NlY29uZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRIb3VycyA9IGlzTm90TmlsKHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMpXG4gICAgICAgICAgPyB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzXG4gICAgICAgICAgOiB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnM7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRIb3VycyA9PT0gJ0FNJyA/IDAgOiAxO1xuICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgaW5kZXgsIDAsICcxMi1ob3VyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlQ2xzOiBVcGRhdGVDbHMsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekluRGF0ZVBpY2tlcikge1xuICAgICAgdGhpcy5wcmVmaXhDbHMgPSAnYW50LWNhbGVuZGFyLXRpbWUtcGlja2VyJztcbiAgICB9XG5cbiAgICB0aGlzLnRpbWUuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZWQoKTtcbiAgICAgIHRoaXMudG91Y2hlZCgpO1xuICAgIH0pO1xuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpVc2UxMkhvdXJzLCBvcGVuZWQsIG56RGVmYXVsdE9wZW5WYWx1ZSB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpVc2UxMkhvdXJzICYmICFuelVzZTEySG91cnMucHJldmlvdXNWYWx1ZSAmJiBuelVzZTEySG91cnMuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgIH1cbiAgICBpZiAob3BlbmVkICYmIG9wZW5lZC5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnNlbGVjdElucHV0UmFuZ2UoKTtcbiAgICB9XG4gICAgaWYgKG56RGVmYXVsdE9wZW5WYWx1ZSkge1xuICAgICAgY29uc3QgdmFsdWU6IERhdGUgPSBuekRlZmF1bHRPcGVuVmFsdWUuY3VycmVudFZhbHVlO1xuICAgICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgICB0aGlzLnRpbWUuc2V0RGVmYXVsdE9wZW5WYWx1ZSh0aGlzLm56RGVmYXVsdE9wZW5WYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRWYWx1ZSh2YWx1ZSwgdGhpcy5uelVzZTEySG91cnMpO1xuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xuXG4gICAgLy8gTWFyayB0aGlzIGNvbXBvbmVudCB0byBiZSBjaGVja2VkIG1hbnVhbGx5IHdpdGggaW50ZXJuYWwgcHJvcGVydGllcyBjaGFuZ2luZyAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDgxNilcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cbn1cbiJdfQ==