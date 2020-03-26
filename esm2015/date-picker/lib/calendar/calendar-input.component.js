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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
export class CalendarInputComponent {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoFocus) {
            setTimeout((/**
             * @return {?}
             */
            () => this.inputRef.nativeElement.focus()));
        }
    }
    /**
     * @param {?} event
     * @param {?=} isEnter
     * @return {?}
     */
    onInputKeyup(event, isEnter = false) {
        /** @type {?} */
        const date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        this.value = date;
        this.valueChange.emit({ date, isEnter });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toReadableInput(value) {
        return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    checkValidInputDate(event) {
        /** @type {?} */
        const input = ((/** @type {?} */ (event.target))).value;
        /** @type {?} */
        const date = new CandyDate(input);
        this.invalidInputClass = '';
        if (!date.isValid() || input !== this.toReadableInput(date)) {
            // Should also match the input format exactly
            this.invalidInputClass = `${this.prefixCls}-input-invalid`;
            return null;
        }
        return date;
    }
}
CalendarInputComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-input',
                exportAs: 'calendarInput',
                template: "<div class=\"{{ prefixCls }}-input-wrap\">\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\n    <input\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\n      value=\"{{ toReadableInput(value) }}\"\n      (input)=\"onInputKeyup($event)\"\n      (keyup.enter)=\"onInputKeyup($event, true)\"\n      #inputElement\n    />\n  </div>\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\"></a>\n</div>\n"
            }] }
];
/** @nocollapse */
CalendarInputComponent.ctorParameters = () => [
    { type: DateHelperService }
];
CalendarInputComponent.propDecorators = {
    locale: [{ type: Input }],
    format: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabledDate: [{ type: Input }],
    value: [{ type: Input }],
    autoFocus: [{ type: Input }],
    inputRef: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    valueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CalendarInputComponent.prototype.locale;
    /** @type {?} */
    CalendarInputComponent.prototype.format;
    /** @type {?} */
    CalendarInputComponent.prototype.placeholder;
    /** @type {?} */
    CalendarInputComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarInputComponent.prototype.value;
    /** @type {?} */
    CalendarInputComponent.prototype.autoFocus;
    /** @type {?} */
    CalendarInputComponent.prototype.inputRef;
    /** @type {?} */
    CalendarInputComponent.prototype.valueChange;
    /** @type {?} */
    CalendarInputComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarInputComponent.prototype.invalidInputClass;
    /**
     * @type {?}
     * @private
     */
    CalendarInputComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixNQUFNLG9CQUFvQixDQUFDO0FBVWhGLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFlakMsWUFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFMOUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBeUMsQ0FBQztRQUUzRixjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztJQUVxQixDQUFDOzs7O0lBRXJELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsVUFBVTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxLQUFvQixFQUFFLFVBQW1CLEtBQUs7O2NBQ25ELElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBRTVDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDdEUsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFnQjtRQUM5QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxLQUFZOztjQUNoQyxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFvQixDQUFDLENBQUMsS0FBSzs7Y0FDaEQsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztRQUVqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0QsNkNBQTZDO1lBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLGdCQUFnQixDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTFERixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztnQkFFL0MsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHlnQkFBNEM7YUFDN0M7Ozs7WUFUUSxpQkFBaUI7OztxQkFXdkIsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSztvQkFFTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBRTFDLE1BQU07Ozs7SUFUUCx3Q0FBeUM7O0lBQ3pDLHdDQUF3Qjs7SUFDeEIsNkNBQTZCOztJQUM3Qiw4Q0FBNEM7O0lBRTVDLHVDQUEwQjs7SUFDMUIsMkNBQTRCOztJQUM1QiwwQ0FBa0U7O0lBRWxFLDZDQUEyRjs7SUFFM0YsMkNBQW1DOztJQUNuQyxtREFBK0I7Ozs7O0lBRW5CLDRDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWlucHV0JyxcbiAgZXhwb3J0QXM6ICdjYWxlbmRhcklucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1pbnB1dC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGU6IENhbmR5RGF0ZTsgaXNFbnRlcjogYm9vbGVhbiB9PigpO1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG4gIGludmFsaWRJbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dEtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpc0VudGVyOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5jaGVja1ZhbGlkSW5wdXREYXRlKGV2ZW50KTtcblxuICAgIGlmICghZGF0ZSB8fCAodGhpcy5kaXNhYmxlZERhdGUgJiYgdGhpcy5kaXNhYmxlZERhdGUoZGF0ZS5uYXRpdmVEYXRlKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gZGF0ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoeyBkYXRlLCBpc0VudGVyIH0pO1xuICB9XG5cbiAgdG9SZWFkYWJsZUlucHV0KHZhbHVlOiBDYW5keURhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZSA/IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodmFsdWUubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrVmFsaWRJbnB1dERhdGUoZXZlbnQ6IEV2ZW50KTogQ2FuZHlEYXRlIHwgbnVsbCB7XG4gICAgY29uc3QgaW5wdXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgQ2FuZHlEYXRlKGlucHV0KTtcblxuICAgIHRoaXMuaW52YWxpZElucHV0Q2xhc3MgPSAnJztcbiAgICBpZiAoIWRhdGUuaXNWYWxpZCgpIHx8IGlucHV0ICE9PSB0aGlzLnRvUmVhZGFibGVJbnB1dChkYXRlKSkge1xuICAgICAgLy8gU2hvdWxkIGFsc28gbWF0Y2ggdGhlIGlucHV0IGZvcm1hdCBleGFjdGx5XG4gICAgICB0aGlzLmludmFsaWRJbnB1dENsYXNzID0gYCR7dGhpcy5wcmVmaXhDbHN9LWlucHV0LWludmFsaWRgO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbiJdfQ==