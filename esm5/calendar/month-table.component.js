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
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var MonthTableComponent = /** @class */ (function () {
    function MonthTableComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.value = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.valueChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    };
    /**
     * @param {?} _index
     * @return {?}
     */
    MonthTableComponent.prototype.trackYear = /**
     * @param {?} _index
     * @return {?}
     */
    function (_index) {
        return this.value ? this.value.getYear() : _index;
    };
    /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    MonthTableComponent.prototype.trackPanelMonth = /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    function (_index, monthData) {
        return monthData.content;
    };
    /**
     * @private
     * @return {?}
     */
    MonthTableComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MonthTableComponent.prototype.makePanelMonths = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var months = [];
        /** @type {?} */
        var currentMonth = this.value.getMonth();
        /** @type {?} */
        var today = new CandyDate();
        /** @type {?} */
        var monthValue = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var month = this_1.value.setMonth(monthValue);
                /** @type {?} */
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                var cell = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled: disabled,
                    content: content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.chooseMonth(cell.month); }) // don't use monthValue here
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-month-panel-cell"] = true,
                    _a[this_1.prefixCls + "-month-panel-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-month-panel-selected-cell"] = monthValue === currentMonth,
                    _a[this_1.prefixCls + "-month-panel-current-cell"] = today.getYear() === this_1.value.getYear() && monthValue === today.getMonth(),
                    _a);
                monthValue++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return months;
    };
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    MonthTableComponent.prototype.chooseMonth = /**
     * @private
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    };
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
    MonthTableComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    MonthTableComponent.propDecorators = {
        value: [{ type: Input }],
        prefixCls: [{ type: Input }],
        monthCellRender: [{ type: Input }],
        monthFullCellRender: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }]
    };
    return MonthTableComponent;
}());
export { MonthTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUVqRCxPQUFPLEdBQUcsQ0FBQzs7SUFDWCxPQUFPLEdBQUcsQ0FBQztBQUVqQjtJQW1CRSw2QkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFWeEMsVUFBSyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFXLGtCQUFrQixDQUFDO1FBRzdCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQU1YLENBQUM7Ozs7O0lBRXJELHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRUQsNkNBQWU7Ozs7O0lBQWYsVUFBZ0IsTUFBYyxFQUFFLFNBQXlCO1FBQ3ZELE9BQU8sU0FBUyxD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NEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3NDQUNMLEtBQUs7OEJBQ0wsTUFBTTsrQkFFTixLQUFLOztJQW9FUiwwQkFBQztDQUFBLEFBbkZELElBbUZDO1NBM0VZLG1CQUFtQjs7O0lBQzlCLG9DQUE0Qzs7SUFDNUMsd0NBQWdEOztJQUNoRCw4Q0FBMkQ7O0lBQzNELGtEQUErRDs7SUFDL0QsMENBQStEOztJQUUvRCwyQ0FBK0M7O0lBRS9DLDBDQUFnQzs7Ozs7SUFFcEIseUNBQXFDOzs7OztBQWtFbkQsb0NBUUM7OztJQVBDLGtDQUFrQjs7SUFDbEIsaUNBQWdCOztJQUNoQiwrQkFBYzs7SUFDZCwrQkFBYzs7SUFDZCxrQ0FBd0I7O0lBQ3hCLGlDQUE2Qjs7SUFDN0IsK0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuY29uc3QgTUFYX1JPVyA9IDQ7XG5jb25zdCBNQVhfQ09MID0gMztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbW9udGgtdGFibGUnLFxuICBleHBvcnRBczogJ21vbnRoVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNb250aFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcbiAgQElucHV0KCkgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWZ1bGxjYWxlbmRhcic7XG4gIEBJbnB1dCgpIG1vbnRoQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT47XG4gIEBJbnB1dCgpIG1vbnRoRnVsbENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIHBhbmVsTW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tZZWFyKF9pbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZ2V0WWVhcigpIDogX2luZGV4O1xuICB9XG5cbiAgdHJhY2tQYW5lbE1vbnRoKF9pbmRleDogbnVtYmVyLCBtb250aERhdGE6IFBhbmVsTW9udGhEYXRhKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9udGhEYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5wYW5lbE1vbnRocyA9IHRoaXMubWFrZVBhbmVsTW9udGhzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlUGFuZWxNb250aHMoKTogUGFuZWxNb250aERhdGFbXVtdIHtcbiAgICBjb25zdCBtb250aHM6IFBhbmVsTW9udGhEYXRhW11bXSA9IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IHRoaXMudmFsdWUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBDYW5keURhdGUoKTtcblxuICAgIGxldCBtb250aFZhbHVlID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXgrKykge1xuICAgICAgbW9udGhzW3Jvd0luZGV4XSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoVmFsdWUpO1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlID8gdGhpcy5kaXNhYmxlZERhdGUodGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKS5uYXRpdmVEYXRlKSA6IGZhbHNlO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChtb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XG5cbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxNb250aERhdGEgPSAobW9udGhzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XG4gICAgICAgICAgdmFsdWU6IG1vbnRoLm5hdGl2ZURhdGUsXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwubW9udGgpIC8vIGRvbid0IHVzZSBtb250aFZhbHVlIGhlcmVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWNlbGwtZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1zZWxlY3RlZC1jZWxsYF06IG1vbnRoVmFsdWUgPT09IGN1cnJlbnRNb250aCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWN1cnJlbnQtY2VsbGBdOlxuICAgICAgICAgICAgdG9kYXkuZ2V0WWVhcigpID09PSB0aGlzLnZhbHVlLmdldFllYXIoKSAmJiBtb250aFZhbHVlID09PSB0b2RheS5nZXRNb250aCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9udGhWYWx1ZSsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9udGhzO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGgpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxNb250aERhdGEge1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgY29udGVudDogc3RyaW5nO1xuICBtb250aDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBjbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcbiAgdmFsdWU6IERhdGU7XG59XG4iXX0=