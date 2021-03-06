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
import { Component, Input } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
export class DateTableCellComponent {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
}
DateTableCellComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: '[date-table-cell]',
                exportAs: 'dateTableCell',
                template: "<ng-container [ngSwitch]=\"prefixCls\">\n  <ng-container *ngSwitchCase=\"'ant-calendar'\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(cell.dateCellRender)\">\n        <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: { $implicit: cell.value }\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(cell.dateCellRender)\">\n        <span [innerHTML]=\"cell.dateCellRender\"></span>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <div class=\"{{ prefixCls }}-date\" [attr.aria-selected]=\"cell.isSelected\" [attr.aria-disabled]=\"cell.isDisabled\">\n          {{ cell.content }}\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\n    <div class=\"ant-fullcalendar-date\">\n      <ng-container *ngIf=\"cell.dateFullCellRender else defaultCell\">\n        <ng-container *ngTemplateOutlet=\"cell.dateFullCellRender; context: {$implicit: cell.value}\"></ng-container>\n      </ng-container>\n      <ng-template #defaultCell>\n        <div class=\"{{ prefixCls }}-value\">{{ cell.content }}</div>\n        <div *ngIf=\"cell.dateCellRender\" class=\"{{ prefixCls }}-content\">\n          <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: {$implicit: cell.value}\"></ng-container>\n        </div>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>"
            }] }
];
DateTableCellComponent.propDecorators = {
    prefixCls: [{ type: Input }],
    cell: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DateTableCellComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableCellComponent.prototype.isNonEmptyString;
    /** @type {?} */
    DateTableCellComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableCellComponent.prototype.cell;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJkYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVXJFLE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUl0QyxDQUFDOzs7WUFiQSxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixxOUNBQStDO2FBRWhEOzs7d0JBS0UsS0FBSzttQkFDTCxLQUFLOzs7O0lBSk4sK0NBQThCOztJQUM5QixrREFBb0M7O0lBRXBDLDJDQUF3RDs7SUFDeEQsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUNlbGwgfSBmcm9tICcuL2RhdGUtdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2RhdGUtdGFibGUtY2VsbF0nLFxuICBleHBvcnRBczogJ2RhdGVUYWJsZUNlbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDZWxsQ29tcG9uZW50IHtcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xuXG4gIEBJbnB1dCgpIHByZWZpeENsczogJ2FudC1jYWxlbmRhcicgfCAnYW50LWZ1bGxjYWxlbmRhcic7XG4gIEBJbnB1dCgpIGNlbGw6IERhdGVDZWxsO1xufVxuIl19