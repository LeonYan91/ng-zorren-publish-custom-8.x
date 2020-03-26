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
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean, warnDeprecation, CandyDate, InputBoolean } from 'ng-zorro-antd/core';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './nz-calendar-cells';
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { });
        this.onTouchFn = (/**
         * @return {?}
         */
        function () { });
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.updateDate(new CandyDate(value), false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzDateCell || this.nzDateCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzDateFullCell || this.nzDateFullCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMonthCell || this.nzMonthCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMonthFullCell || this.nzMonthFullCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzCard", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzFullscreen;
        },
        /**
         * @deprecated use `[nzFullscreen]` instead.
         */
        set: /**
         * @deprecated use `[nzFullscreen]` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzCard' is going to be removed in 9.0.0. Please use 'nzFullscreen' instead.");
            this.nzFullscreen = !toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} mode
     * @return {?}
     */
    NzCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = this.activeDate.setYear(year);
        this.updateDate(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    NzCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = this.activeDate.setMonth(month);
        this.updateDate(date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NzCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(new CandyDate((/** @type {?} */ (value))), false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    NzCalendarComponent.prototype.updateDate = /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    };
    NzCalendarComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar',
                    exportAs: 'nzCalendar',
                    template: "<nz-calendar-header [fullscreen]=\"nzFullscreen\" [activeDate]=\"activeDate\" [(mode)]=\"nzMode\"\n  (modeChange)=\"onModeChange($event)\" (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\n</nz-calendar-header>\n\n<div class=\"{{prefixCls}} {{prefixCls}}-full\" [class.ant-fullcalendar-fullscreen]=\"nzFullscreen\">\n  <div class=\"{{prefixCls}}-calendar-body\">\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\n  </div>\n</div>\n\n<ng-template #monthModeTable>\n  <date-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [dateCellRender]=\"dateCell\"\n    [dateFullCellRender]=\"dateFullCell\" (valueChange)=\"onDateSelect($event)\"></date-table>\n</ng-template>\n\n<ng-template #yearModeTable>\n  <month-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [monthCellRender]=\"monthCell\"\n    [monthFullCellRender]=\"monthFullCell\" (valueChange)=\"onDateSelect($event)\"></month-table>\n</ng-template>",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCalendarComponent; })), multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzCalendarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzCalendarComponent.propDecorators = {
        nzMode: [{ type: Input }],
        nzModeChange: [{ type: Output }],
        nzPanelChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }],
        nzValue: [{ type: Input }],
        nzValueChange: [{ type: Output }],
        nzDateCell: [{ type: Input }],
        nzDateCellChild: [{ type: ContentChild, args: [DateCell, { static: false, read: TemplateRef },] }],
        nzDateFullCell: [{ type: Input }],
        nzDateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { static: false, read: TemplateRef },] }],
        nzMonthCell: [{ type: Input }],
        nzMonthCellChild: [{ type: ContentChild, args: [MonthCell, { static: false, read: TemplateRef },] }],
        nzMonthFullCell: [{ type: Input }],
        nzMonthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { static: false, read: TemplateRef },] }],
        nzFullscreen: [{ type: Input }, { type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }],
        nzCard: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
    return NzCalendarComponent;
}());
export { NzCalendarComponent };
if (false) {
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzPanelChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /**
     * Cannot use \@Input and \@ContentChild on one variable
     * because { static: false } will make \@Input property get delayed
     *
     * @type {?}
     */
    NzCalendarComponent.prototype.nzDateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzFullscreen;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFDTCxtQkFBbUIsSUFBSSxRQUFRLEVBQy9CLHVCQUF1QixJQUFJLFlBQVksRUFDdkMsb0JBQW9CLElBQUksU0FBUyxFQUNqQyx3QkFBd0IsSUFBSSxhQUFhLEVBQzFDLE1BQU0scUJBQXFCLENBQUM7QUFLN0I7SUF1RUUsNkJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBOUQxQyxlQUFVLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN4QyxjQUFTLEdBQVcsa0JBQWtCLENBQUM7UUFFL0IsZUFBVTs7O1FBQXlCLGNBQU8sQ0FBQyxFQUFDO1FBQzVDLGNBQVM7OztRQUFlLGNBQU8sQ0FBQyxFQUFDO1FBRWhDLFdBQU0sR0FBYSxPQUFPLENBQUM7UUFFakIsaUJBQVksR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxrQkFBYSxHQUFpRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pGLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLeEQsa0JBQWEsR0FBdUIs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WSxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTsrQkFLaEUsS0FBSyxZQUVMLFdBQVcsU0FBQyxvQ0FBb0M7eUJBTWhELEtBQUs7O0lBTE47UUFGQyxZQUFZLEVBQUU7OzZEQUVjO0lBNEQvQiwwQkFBQztDQUFBLEFBckhELElBcUhDO1NBN0dZLG1CQUFtQjs7O0lBQzlCLHlDQUF3Qzs7SUFDeEMsd0NBQXVDOzs7OztJQUV2Qyx5Q0FBb0Q7Ozs7O0lBQ3BELHdDQUF5Qzs7SUFFekMscUNBQW9DOztJQUVwQywyQ0FBNkU7O0lBQzdFLDRDQUFvRzs7SUFDcEcsNkNBQTJFOztJQUszRSw0Q0FBMEU7Ozs7Ozs7SUFNMUUseUNBQWtDOztJQUNsQyw4Q0FBNEY7O0lBSzVGLDZDQUFzQzs7SUFDdEMsa0RBQW9HOztJQUtwRywwQ0FBbUM7O0lBQ25DLCtDQUE4Rjs7SUFLOUYsOENBQXVDOztJQUN2QyxtREFBc0c7O0lBS3RHLDJDQUc2Qjs7Ozs7SUFjakIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuLCB3YXJuRGVwcmVjYXRpb24sIENhbmR5RGF0ZSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7XG4gIE56RGF0ZUNlbGxEaXJlY3RpdmUgYXMgRGF0ZUNlbGwsXG4gIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlIGFzIERhdGVGdWxsQ2VsbCxcbiAgTnpNb250aENlbGxEaXJlY3RpdmUgYXMgTW9udGhDZWxsLFxuICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUgYXMgTW9udGhGdWxsQ2VsbFxufSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcblxuZXhwb3J0IHR5cGUgTW9kZVR5cGUgPSAnbW9udGgnIHwgJ3llYXInO1xuZXhwb3J0IHR5cGUgRGF0ZVRlbXBsYXRlID0gVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT47XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhcicsXG4gIGV4cG9ydEFzOiAnbnpDYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2FsZW5kYXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBhY3RpdmVEYXRlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1mdWxsY2FsZW5kYXInO1xuXG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKGRhdGU6IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoRm46ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBASW5wdXQoKSBuek1vZGU6IE1vZGVUeXBlID0gJ21vbnRoJztcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW9kZVR5cGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZTsgbW9kZTogTW9kZVR5cGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHNldCBuelZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy51cGRhdGVEYXRlKG5ldyBDYW5keURhdGUodmFsdWUpLCBmYWxzZSk7XG4gIH1cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ2Fubm90IHVzZSBASW5wdXQgYW5kIEBDb250ZW50Q2hpbGQgb24gb25lIHZhcmlhYmxlXG4gICAqIGJlY2F1c2UgeyBzdGF0aWM6IGZhbHNlIH0gd2lsbCBtYWtlIEBJbnB1dCBwcm9wZXJ0eSBnZXQgZGVsYXllZFxuICAgKiovXG4gIEBJbnB1dCgpIG56RGF0ZUNlbGw6IERhdGVUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuekRhdGVDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcbiAgZ2V0IGRhdGVDZWxsKCk6IERhdGVUZW1wbGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMubnpEYXRlQ2VsbCB8fCB0aGlzLm56RGF0ZUNlbGxDaGlsZDtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RGF0ZUZ1bGxDZWxsOiBEYXRlVGVtcGxhdGU7XG4gIEBDb250ZW50Q2hpbGQoRGF0ZUZ1bGxDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56RGF0ZUZ1bGxDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcbiAgZ2V0IGRhdGVGdWxsQ2VsbCgpOiBEYXRlVGVtcGxhdGUge1xuICAgIHJldHVybiB0aGlzLm56RGF0ZUZ1bGxDZWxsIHx8IHRoaXMubnpEYXRlRnVsbENlbGxDaGlsZDtcbiAgfVxuXG4gIEBJbnB1dCgpIG56TW9udGhDZWxsOiBEYXRlVGVtcGxhdGU7XG4gIEBDb250ZW50Q2hpbGQoTW9udGhDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56TW9udGhDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcbiAgZ2V0IG1vbnRoQ2VsbCgpOiBEYXRlVGVtcGxhdGUge1xuICAgIHJldHVybiB0aGlzLm56TW9udGhDZWxsIHx8IHRoaXMubnpNb250aENlbGxDaGlsZDtcbiAgfVxuXG4gIEBJbnB1dCgpIG56TW9udGhGdWxsQ2VsbDogRGF0ZVRlbXBsYXRlO1xuICBAQ29udGVudENoaWxkKE1vbnRoRnVsbENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpNb250aEZ1bGxDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcbiAgZ2V0IG1vbnRoRnVsbENlbGwoKTogRGF0ZVRlbXBsYXRlIHtcbiAgICByZXR1cm4gdGhpcy5uek1vbnRoRnVsbENlbGwgfHwgdGhpcy5uek1vbnRoRnVsbENlbGxDaGlsZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mdWxsY2FsZW5kYXItLWZ1bGxzY3JlZW4nKVxuICBuekZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYFtuekZ1bGxzY3JlZW5dYCBpbnN0ZWFkLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56Q2FyZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ256Q2FyZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpGdWxsc2NyZWVuJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMubnpGdWxsc2NyZWVuID0gIXRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IG56Q2FyZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMubnpGdWxsc2NyZWVuO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG9uTW9kZUNoYW5nZShtb2RlOiBNb2RlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMubnpNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XG4gICAgdGhpcy5uelBhbmVsQ2hhbmdlLmVtaXQoeyBkYXRlOiB0aGlzLmFjdGl2ZURhdGUubmF0aXZlRGF0ZSwgbW9kZSB9KTtcbiAgfVxuXG4gIG9uWWVhclNlbGVjdCh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIoeWVhcik7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgb25Nb250aFNlbGVjdChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aChtb250aCk7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgb25EYXRlU2VsZWN0KGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIC8vIE9ubHkgYWN0aXZlRGF0ZSBpcyBlbm91Z2ggaW4gY2FsZW5kYXJcbiAgICAvLyB0aGlzLnZhbHVlID0gZGF0ZTtcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRGF0ZShuZXcgQ2FuZHlEYXRlKHZhbHVlIGFzIERhdGUpLCBmYWxzZSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEYXRlKGRhdGU6IENhbmR5RGF0ZSwgdG91Y2hlZDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xuXG4gICAgaWYgKHRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VGbihkYXRlLm5hdGl2ZURhdGUpO1xuICAgICAgdGhpcy5vblRvdWNoRm4oKTtcbiAgICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdChkYXRlLm5hdGl2ZURhdGUpO1xuICAgICAgdGhpcy5uelZhbHVlQ2hhbmdlLmVtaXQoZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==