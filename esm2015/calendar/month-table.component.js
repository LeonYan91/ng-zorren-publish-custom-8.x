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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
/** @type {?} */
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class MonthTableComponent {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.value = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.valueChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    /**
     * @param {?} _index
     * @return {?}
     */
    trackYear(_index) {
        return this.value ? this.value.getYear() : _index;
    }
    /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    trackPanelMonth(_index, monthData) {
        return monthData.content;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    }
    /**
     * @private
     * @return {?}
     */
    makePanelMonths() {
        /** @type {?} */
        const months = [];
        /** @type {?} */
        const currentMonth = this.value.getMonth();
        /** @type {?} */
        const today = new CandyDate();
        /** @type {?} */
        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const month = this.value.setMonth(monthValue);
                /** @type {?} */
                const disabled = this.disabledDate ? this.disabledDate(this.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                const content = this.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                const cell = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled,
                    content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.chooseMonth(cell.month)) // don't use monthValue here
                });
                cell.classMap = {
                    [`${this.prefixCls}-month-panel-cell`]: true,
                    [`${this.prefixCls}-month-panel-cell-disabled`]: disabled,
                    [`${this.prefixCls}-month-panel-selected-cell`]: monthValue === currentMonth,
                    [`${this.prefixCls}-month-panel-current-cell`]: today.getYear() === this.value.getYear() && monthValue === today.getMonth()
                };
                monthValue++;
            }
        }
        return months;
    }
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    chooseMonth(month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    }
}
MonthTableComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                template: "<table class=\"{{ prefixCls }}-month-panel-table\" cellSpacing=\"0\" role=\"grid\">\n  <tbody class=\"{{ prefixCls }}-month-panel-tbody\">\n    <tr *ngFor=\"let row of panelMonths; trackBy: trackYear\" role=\"row\">\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\" role=\"gridcell\" title=\"{{ monthCell.title }}\"\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\" [ngClass]=\"monthCell.classMap\">\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\n            <div class=\"{{ prefixCls }}-month\">\n              <ng-container *ngIf=\"monthFullCellRender else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"monthFullCellRender; context: { $implicit: monthCell.value }\">\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{prefixCls}}-value\">{{ monthCell.content }}</div>\n                <div *ngIf=\"monthCellRender\" class=\"{{prefixCls}}-content\">\n                  <ng-container *ngTemplateOutlet=\"monthCellRender; context: { $implicit: monthCell.value }\">\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-calendar'\">\n            <a class=\"{{ prefixCls }}-month-panel-month\">{{ monthCell.content }}</a>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>"
            }] }
];
/** @nocollapse */
MonthTableComponent.ctorParameters = () => [
    { type: DateHelperService }
];
MonthTableComponent.propDecorators = {
    value: [{ type: Input }],
    prefixCls: [{ type: Input }],
    monthCellRender: [{ type: Input }],
    monthFullCellRender: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabledDate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MonthTableComponent.prototype.value;
    /** @type {?} */
    MonthTableComponent.prototype.prefixCls;
    /** @type {?} */
    MonthTableComponent.prototype.monthCellRender;
    /** @type {?} */
    MonthTableComponent.prototype.monthFullCellRender;
    /** @type {?} */
    MonthTableComponent.prototype.valueChange;
    /** @type {?} */
    MonthTableComponent.prototype.disabledDate;
    /** @type {?} */
    MonthTableComponent.prototype.panelMonths;
    /**
     * @type {?}
     * @private
     */
    MonthTableComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function PanelMonthData() { }
if (false) {
    /** @type {?} */
    PanelMonthData.prototype.disabled;
    /** @type {?} */
    PanelMonthData.prototype.content;
    /** @type {?} */
    PanelMonthData.prototype.month;
    /** @type {?} */
    PanelMonthData.prototype.title;
    /** @type {?} */
    PanelMonthData.prototype.classMap;
    /** @type {?} */
    PanelMonthData.prototype.onClick;
    /** @type {?} */
    PanelMonthData.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUVqRCxPQUFPLEdBQUcsQ0FBQzs7TUFDWCxPQUFPLEdBQUcsQ0FBQztBQVVqQixNQUFNLE9BQU8sbUJBQW1COzs7O0lBVzlCLFlBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBVnhDLFVBQUssR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ25DLGNBQVMsR0FBVyxrQkFBa0IsQ0FBQztRQUc3QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFNWCxDQUFDOzs7OztJQUVyRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxNQUFjLEVBQUUsU0FBeUI7UUFDdkQsT0FBTyxTQUFTLENBQUMsT0FBTyxD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d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLEtBQUs7MEJBQ0wsTUFBTTsyQkFFTixLQUFLOzs7O0lBTk4sb0NBQTRDOztJQUM1Qyx3Q0FBZ0Q7O0lBQ2hELDhDQUEyRDs7SUFDM0Qsa0RBQStEOztJQUMvRCwwQ0FBK0Q7O0lBRS9ELDJDQUErQzs7SUFFL0MsMENBQWdDOzs7OztJQUVwQix5Q0FBcUM7Ozs7O0FBa0VuRCxvQ0FRQzs7O0lBUEMsa0NBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLCtCQUFjOztJQUNkLCtCQUFjOztJQUNkLGtDQUF3Qjs7SUFDeEIsaUNBQTZCOztJQUM3QiwrQkFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5jb25zdCBNQVhfUk9XID0gNDtcbmNvbnN0IE1BWF9DT0wgPSAzO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtb250aC10YWJsZScsXG4gIGV4cG9ydEFzOiAnbW9udGhUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnbW9udGgtdGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuICBASW5wdXQoKSBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtZnVsbGNhbGVuZGFyJztcbiAgQElucHV0KCkgbW9udGhDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcbiAgQElucHV0KCkgbW9udGhGdWxsQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT47XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XG5cbiAgcGFuZWxNb250aHM6IFBhbmVsTW9udGhEYXRhW11bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja1llYXIoX2luZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5nZXRZZWFyKCkgOiBfaW5kZXg7XG4gIH1cblxuICB0cmFja1BhbmVsTW9udGgoX2luZGV4OiBudW1iZXIsIG1vbnRoRGF0YTogUGFuZWxNb250aERhdGEpOiBzdHJpbmcge1xuICAgIHJldHVybiBtb250aERhdGEuY29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnBhbmVsTW9udGhzID0gdGhpcy5tYWtlUGFuZWxNb250aHMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYW5lbE1vbnRocygpOiBQYW5lbE1vbnRoRGF0YVtdW10ge1xuICAgIGNvbnN0IG1vbnRoczogUGFuZWxNb250aERhdGFbXVtdID0gW107XG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gdGhpcy52YWx1ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IENhbmR5RGF0ZSgpO1xuXG4gICAgbGV0IG1vbnRoVmFsdWUgPSAwO1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XG4gICAgICBtb250aHNbcm93SW5kZXhdID0gW107XG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xuICAgICAgICBjb25zdCBtb250aCA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGhWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZERhdGUgPyB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoVmFsdWUpLm5hdGl2ZURhdGUpIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KG1vbnRoLm5hdGl2ZURhdGUsICdNTU0nKTtcblxuICAgICAgICBjb25zdCBjZWxsOiBQYW5lbE1vbnRoRGF0YSA9IChtb250aHNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHtcbiAgICAgICAgICB2YWx1ZTogbW9udGgubmF0aXZlRGF0ZSxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIG1vbnRoOiBtb250aFZhbHVlLFxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxuICAgICAgICAgIGNsYXNzTWFwOiBudWxsLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hvb3NlTW9udGgoY2VsbC5tb250aCkgLy8gZG9uJ3QgdXNlIG1vbnRoVmFsdWUgaGVyZVxuICAgICAgICB9KTtcblxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY2VsbGBdOiB0cnVlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY2VsbC1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLXNlbGVjdGVkLWNlbGxgXTogbW9udGhWYWx1ZSA9PT0gY3VycmVudE1vbnRoLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY3VycmVudC1jZWxsYF06XG4gICAgICAgICAgICB0b2RheS5nZXRZZWFyKCkgPT09IHRoaXMudmFsdWUuZ2V0WWVhcigpICYmIG1vbnRoVmFsdWUgPT09IHRvZGF5LmdldE1vbnRoKClcbiAgICAgICAgfTtcblxuICAgICAgICBtb250aFZhbHVlKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb250aHM7XG4gIH1cblxuICBwcml2YXRlIGNob29zZU1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRNb250aChtb250aCk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbE1vbnRoRGF0YSB7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIG1vbnRoOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xuICBvbkNsaWNrOiBWb2lkRnVuY3Rpb24gfCBudWxsO1xuICB2YWx1ZTogRGF0ZTtcbn1cbiJdfQ==