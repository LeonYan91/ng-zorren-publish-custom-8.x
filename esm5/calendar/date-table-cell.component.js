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
var DateTableCellComponent = /** @class */ (function () {
    function DateTableCellComponent() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
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
    return DateTableCellComponent;
}());
export { DateTableCellComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJkYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JFO0lBQUE7UUFRRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUl0QyxDQUFDOztnQkFiQSxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixxOUNBQStDO2lCQUVoRDs7OzRCQUtFLEtBQUs7dUJBQ0wsS0FBSzs7SUFDUiw2QkFBQztDQUFBLEFBYkQsSUFhQztTQU5ZLHNCQUFzQjs7O0lBQ2pDLCtDQUE4Qjs7SUFDOUIsa0RBQW9DOztJQUVwQywyQ0FBd0Q7O0lBQ3hELHNDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IERhdGVDZWxsIH0gZnJvbSAnLi9kYXRlLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tkYXRlLXRhYmxlLWNlbGxdJyxcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGVDZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtdGFibGUtY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlQ2VsbENvbXBvbmVudCB7XG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcblxuICBASW5wdXQoKSBwcmVmaXhDbHM6ICdhbnQtY2FsZW5kYXInIHwgJ2FudC1mdWxsY2FsZW5kYXInO1xuICBASW5wdXQoKSBjZWxsOiBEYXRlQ2VsbDtcbn1cbiJdfQ==