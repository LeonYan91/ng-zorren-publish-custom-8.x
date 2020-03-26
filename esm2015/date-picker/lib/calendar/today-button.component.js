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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
export class TodayButtonComponent {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.hasTimePicker = false;
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isDisabled = false;
        this.now = new CandyDate();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.disabledDate) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            let dateFormat = this.locale.dateFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
            }
            this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    }
    /**
     * @return {?}
     */
    onClickToday() {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
TodayButtonComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'today-button',
                exportAs: 'todayButton',
                template: "<a\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\n  role=\"button\"\n  (click)=\"isDisabled ? null : onClickToday()\"\n  title=\"{{ title }}\"\n>\n  {{ hasTimePicker ? locale.now : locale.today }}\n</a>"
            }] }
];
/** @nocollapse */
TodayButtonComponent.ctorParameters = () => [
    { type: DateHelperService }
];
TodayButtonComponent.propDecorators = {
    locale: [{ type: Input }],
    hasTimePicker: [{ type: Input }],
    disabledDate: [{ type: Input }],
    clickToday: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TodayButtonComponent.prototype.locale;
    /** @type {?} */
    TodayButtonComponent.prototype.hasTimePicker;
    /** @type {?} */
    TodayButtonComponent.prototype.disabledDate;
    /** @type {?} */
    TodayButtonComponent.prototype.clickToday;
    /** @type {?} */
    TodayButtonComponent.prototype.prefixCls;
    /** @type {?} */
    TodayButtonComponent.prototype.isDisabled;
    /** @type {?} */
    TodayButtonComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    TodayButtonComponent.prototype.now;
    /**
     * @type {?}
     * @private
     */
    TodayButtonComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvdG9kYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUF3QixpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQVV0RyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBYS9CLFlBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBWHhDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBR3JCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTlELGNBQVMsR0FBVyxjQUFjLENBQUM7UUFDbkMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUdwQixRQUFHLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUVXLENBQUM7Ozs7O0lBRXJELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvRTtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTs7O2dCQUVkLFVBQVUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDL0MsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDbEMsVUFBVSxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLFVBQVUsRUFBd0IsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3RGO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUVBQWlFO0lBQzNHLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztnQkFFL0MsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix5UUFBMEM7YUFDM0M7Ozs7WUFUOEIsaUJBQWlCOzs7cUJBVzdDLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUVMLE1BQU07Ozs7SUFKUCxzQ0FBeUM7O0lBQ3pDLDZDQUF3Qzs7SUFDeEMsNENBQTRDOztJQUU1QywwQ0FBOEQ7O0lBRTlELHlDQUFtQzs7SUFDbkMsMENBQTRCOztJQUM1QixxQ0FBYzs7Ozs7SUFFZCxtQ0FBeUM7Ozs7O0lBRTdCLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBEYXRlSGVscGVyQnlEYXRlUGlwZSwgRGF0ZUhlbHBlclNlcnZpY2UsIE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndG9kYXktYnV0dG9uJyxcbiAgZXhwb3J0QXM6ICd0b2RheUJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAndG9kYXktYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2RheUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGhhc1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tUb2RheSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGl0bGU6IHN0cmluZztcblxuICBwcml2YXRlIG5vdzogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xuICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdGhpcy5kaXNhYmxlZERhdGUgJiYgdGhpcy5kaXNhYmxlZERhdGUodGhpcy5ub3cubmF0aXZlRGF0ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxvY2FsZSkge1xuICAgICAgLy8gTk9URTogQ29tcGF0IGZvciBEYXRlUGlwZSBmb3JtYXR0aW5nIHJ1bGVzXG4gICAgICBsZXQgZGF0ZUZvcm1hdDogc3RyaW5nID0gdGhpcy5sb2NhbGUuZGF0ZUZvcm1hdDtcbiAgICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcbiAgICAgICAgZGF0ZUZvcm1hdCA9ICh0aGlzLmRhdGVIZWxwZXIgYXMgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUpLnRyYW5zQ29tcGF0Rm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgfVxuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodGhpcy5ub3cubmF0aXZlRGF0ZSwgZGF0ZUZvcm1hdCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1RvZGF5KCk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2tUb2RheS5lbWl0KHRoaXMubm93LmNsb25lKCkpOyAvLyBUbyBwcmV2ZW50IHRoZSBcIm5vd1wiIGJlaW5nIG1vZGlmaWVkIGZyb20gb3V0c2lkZSwgd2UgdXNlIGNsb25lXG4gIH1cbn1cbiJdfQ==