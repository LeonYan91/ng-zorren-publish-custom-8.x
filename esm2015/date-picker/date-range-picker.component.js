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
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
export class DateRangePickerComponent extends AbstractPickerComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     * @param {?=} noAnimation
     */
    constructor(i18n, cdr, dateHelper, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.showWeek = false; // Should show as week picker
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnCalendarChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get nzShowTime() {
        return this._showTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowTime(value) {
        this._showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    /**
     * @return {?}
     */
    get realShowToday() {
        // Range not support nzShowToday currently
        return !this.isRange && this.nzShowToday;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        // Default format when it's empty
        if (!this.nzFormat) {
            if (this.showWeek) {
                this.nzFormat = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
            }
            else {
                if (this.dateHelper.relyOnDatePipe) {
                    this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                }
                else {
                    this.nzFormat = this.nzShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                }
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.nzShowTime || changes.nzStyle) {
            this.setFixedPickerStyle();
        }
    }
    /**
     * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
     * @param {?} value
     * @param {?=} isEnter
     * @return {?}
     */
    onValueChange(value, isEnter = false) {
        super.onValueChange(value);
        if (!this.nzShowTime || isEnter) {
            this.closeOverlay();
        }
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    onCalendarChange(value) {
        if (this.isRange) {
            /** @type {?} */
            const rangeValue = value.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.nativeDate));
            this.nzOnCalendarChange.emit(rangeValue);
        }
    }
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    onResultOk() {
        if (this.isRange) {
            /** @type {?} */
            const value = (/** @type {?} */ (this.nzValue));
            if (value.length) {
                this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit(((/** @type {?} */ (this.nzValue))).nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    setFixedPickerStyle() {
        /** @type {?} */
        const showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = Object.assign({}, showTimeFixes, this.nzStyle);
    }
}
DateRangePickerComponent.decorators = [
    { type: Component, args: [{
                template: `` // Just for rollup
            }] }
];
/** @nocollapse */
DateRangePickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: NzNoAnimationDirective }
];
DateRangePickerComponent.propDecorators = {
    nzDateRender: [{ type: Input }],
    nzDisabledTime: [{ type: Input }],
    nzRenderExtraFooter: [{ type: Input }],
    nzShowToday: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzRanges: [{ type: Input }],
    nzOnPanelChange: [{ type: Output }],
    nzOnCalendarChange: [{ type: Output }],
    nzShowTime: [{ type: Input }],
    nzOnOk: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DateRangePickerComponent.prototype, "nzShowToday", void 0);
if (false) {
    /** @type {?} */
    DateRangePickerComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzMode;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRanges;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnCalendarChange;
    /**
     * @type {?}
     * @private
     */
    DateRangePickerComponent.prototype._showTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnOk;
    /** @type {?} */
    DateRangePickerComponent.prototype.pickerStyle;
    /** @type {?} */
    DateRangePickerComponent.prototype.extraFooter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUdqQixZQUFZLEVBQ1osc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTXRFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSx1QkFBdUI7Ozs7Ozs7SUE4Qm5FLFlBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsV0FBb0M7UUFFcEMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBbkM1QyxhQUFRLEdBQVksS0FBSyxDQUFDLENBQUMsNkJBQTZCO1FBSy9CLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBR2xDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFDOUQsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQVVoRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7SUFpQnRFLENBQUM7Ozs7SUF4QkQsSUFBYSxVQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQUksVUFBVSxDQUFDLEtBQXVCO1FBQ3BDLElBQUksQ0FBQyxTQUFT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ZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICB0b0Jvb2xlYW4sXG4gIHZhbHVlRnVuY3Rpb25Qcm9wLFxuICBDYW5keURhdGUsXG4gIEZ1bmN0aW9uUHJvcCxcbiAgSW5wdXRCb29sZWFuLFxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhdGlibGVEYXRlLCBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgYCAvLyBKdXN0IGZvciByb2xsdXBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHNob3dXZWVrOiBib29sZWFuID0gZmFsc2U7IC8vIFNob3VsZCBzaG93IGFzIHdlZWsgcGlja2VyXG5cbiAgQElucHV0KCkgbnpEYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBuekRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm47XG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56TW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XG4gIEBJbnB1dCgpIG56UmFuZ2VzOiBQcmVzZXRSYW5nZXM7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XG5cbiAgcHJpdmF0ZSBfc2hvd1RpbWU6IG9iamVjdCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGdldCBuelNob3dUaW1lKCk6IG9iamVjdCB8IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93VGltZTtcbiAgfVxuICBzZXQgbnpTaG93VGltZSh2YWx1ZTogb2JqZWN0IHwgYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dUaW1lID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDogdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVEYXRlIHwgbnVsbD4oKTtcblxuICBnZXQgcmVhbFNob3dUb2RheSgpOiBib29sZWFuIHtcbiAgICAvLyBSYW5nZSBub3Qgc3VwcG9ydCBuelNob3dUb2RheSBjdXJyZW50bHlcbiAgICByZXR1cm4gIXRoaXMuaXNSYW5nZSAmJiB0aGlzLm56U2hvd1RvZGF5O1xuICB9XG5cbiAgcGlja2VyU3R5bGU6IG9iamVjdDsgLy8gRmluYWwgcGlja2VyIHN0eWxlIHRoYXQgY29udGFpbnMgd2lkdGggZml4IGNvcnJlY3Rpb25zIGV0Yy5cbiAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGkxOG46IE56STE4blNlcnZpY2UsXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcbiAgICBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgLy8gRGVmYXVsdCBmb3JtYXQgd2hlbiBpdCdzIGVtcHR5XG4gICAgaWYgKCF0aGlzLm56Rm9ybWF0KSB7XG4gICAgICBpZiAodGhpcy5zaG93V2Vlaykge1xuICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ3l5eXktd3cnIDogJ1lZWVktV1cnOyAvLyBGb3JtYXQgZm9yIHdlZWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcbiAgICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5uelNob3dUaW1lID8gJ3l5eXktTU0tZGQgSEg6bW06c3MnIDogJ3l5eXktTU0tZGQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubnpGb3JtYXQgPSB0aGlzLm56U2hvd1RpbWUgPyAnWVlZWS1NTS1ERCBISDptbTpzcycgOiAnWVlZWS1NTS1ERCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICBpZiAoY2hhbmdlcy5uelJlbmRlckV4dHJhRm9vdGVyKSB7XG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5uelNob3dUaW1lIHx8IGNoYW5nZXMubnpTdHlsZSkge1xuICAgICAgdGhpcy5zZXRGaXhlZFBpY2tlclN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIElmIHVzZXIgcHJlc3MgJ0VudGVyJyBpbiBpbnB1dCBib3ggb3IgYG56U2hvd1RpbWVgIGlzIGZhbHNlLCBvdmVybGF5IHdpbGwgY2xvc2UuXG4gICAqL1xuICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBDYW5keURhdGUsIGlzRW50ZXI6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xuXG4gICAgaWYgKCF0aGlzLm56U2hvd1RpbWUgfHwgaXNFbnRlcikge1xuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbWl0IG56T25DYWxlbmRhckNoYW5nZSB3aGVuIHNlbGVjdCBkYXRlIGJ5IG56LXJhbmdlLXBpY2tlclxuICBvbkNhbGVuZGFyQ2hhbmdlKHZhbHVlOiBDYW5keURhdGVbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB2YWx1ZS5tYXAoeCA9PiB4Lm5hdGl2ZURhdGUpO1xuICAgICAgdGhpcy5uek9uQ2FsZW5kYXJDaGFuZ2UuZW1pdChyYW5nZVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXG4gIG9uUmVzdWx0T2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLm56VmFsdWUgYXMgQ2FuZHlEYXRlW107XG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoW3ZhbHVlWzBdLm5hdGl2ZURhdGUsIHZhbHVlWzFdLm5hdGl2ZURhdGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoW10pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5uelZhbHVlKSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoKHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgfVxuXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xuICB9XG5cbiAgLy8gU2V0dXAgZml4ZWQgc3R5bGUgZm9yIHBpY2tlclxuICBwcml2YXRlIHNldEZpeGVkUGlja2VyU3R5bGUoKTogdm9pZCB7XG4gICAgY29uc3Qgc2hvd1RpbWVGaXhlczogeyB3aWR0aD86IHN0cmluZyB9ID0ge307XG4gICAgaWYgKHRoaXMubnpTaG93VGltZSkge1xuICAgICAgc2hvd1RpbWVGaXhlcy53aWR0aCA9IHRoaXMuaXNSYW5nZSA/ICczNTBweCcgOiAnMTk1cHgnO1xuICAgIH1cblxuICAgIHRoaXMucGlja2VyU3R5bGUgPSB7IC4uLnNob3dUaW1lRml4ZXMsIC4uLnRoaXMubnpTdHlsZSB9O1xuICB9XG59XG4iXX0=