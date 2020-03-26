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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
export class NzCascaderOptionComponent {
    /**
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    /**
     * @return {?}
     */
    get optionLabel() {
        return this.option[this.nzLabelProperty];
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
}
NzCascaderOptionComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-cascader-option]',
                exportAs: 'nzCascaderOption',
                template: "<ng-container *ngIf=\"optionTemplate; else defaultOptionTemplate\">\n  <ng-template [ngTemplateOutlet]=\"optionTemplate\"\n               [ngTemplateOutletContext]=\"{ $implicit: option, index: columnIndex }\"></ng-template>\n</ng-container>\n<ng-template #defaultOptionTemplate>\n  <span [innerHTML]=\"optionLabel | nzHighlight: highlightText: 'g': 'ant-cascader-menu-item-keyword'\"></span>\n</ng-template>\n<span *ngIf=\"!option.isLeaf || option.children?.length || option.loading\"\n      class=\"ant-cascader-menu-item-expand-icon\">\n  <i nz-icon\n     [nzType]=\"option.loading ? 'loading' : 'right'\"></i>\n</span>\n",
                host: {
                    '[attr.title]': 'option.title || optionLabel',
                    '[class.ant-cascader-menu-item-active]': 'activated',
                    '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                    '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                }
            }] }
];
/** @nocollapse */
NzCascaderOptionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
NzCascaderOptionComponent.propDecorators = {
    optionTemplate: [{ type: Input }],
    option: [{ type: Input }],
    activated: [{ type: Input }],
    highlightText: [{ type: Input }],
    nzLabelProperty: [{ type: Input }],
    columnIndex: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzCascaderOptionComponent.prototype.optionTemplate;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.option;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.activated;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.highlightText;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.columnIndex;
    /**
     * @type {?}
     * @private
     */
    NzCascaderOptionComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFpQnZCLE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQVFwQyxZQUFvQixHQUFzQixFQUFFLFVBQXNCLEVBQUUsUUFBbUI7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQakMsbUJBQWMsR0FBeUMsSUFBSSxDQUFDO1FBRTVELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFJakMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw0bkJBQThDO2dCQUM5QyxJQUFJLEVBQUU7b0JBQ0osY0FBYyxFQUFFLDZCQUE2QjtvQkFDN0MsdUNBQXVDLEVBQUUsV0FBVztvQkFDcEQsdUNBQXVDLEVBQUUsZ0JBQWdCO29CQUN6RCx5Q0FBeUMsRUFBRSxpQkFBaUI7aUJBQzdEO2FBQ0Y7Ozs7WUF2QkMsaUJBQWlCO1lBRWpCLFVBQVU7WUFFVixTQUFTOzs7NkJBcUJSLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBTE4sbURBQXFFOztJQUNyRSwyQ0FBa0M7O0lBQ2xDLDhDQUEyQjs7SUFDM0Isa0RBQStCOztJQUMvQixvREFBbUM7O0lBQ25DLGdEQUE2Qjs7Ozs7SUFFakIsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q2FzY2FkZXJPcHRpb24gfSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ1tuei1jYXNjYWRlci1vcHRpb25dJyxcbiAgZXhwb3J0QXM6ICduekNhc2NhZGVyT3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50aXRsZV0nOiAnb3B0aW9uLnRpdGxlIHx8IG9wdGlvbkxhYmVsJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tYWN0aXZlXSc6ICdhY3RpdmF0ZWQnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1leHBhbmRdJzogJyFvcHRpb24uaXNMZWFmJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ29wdGlvbi5kaXNhYmxlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56Q2FzY2FkZXJPcHRpb24+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbjtcbiAgQElucHV0KCkgYWN0aXZhdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcbiAgQElucHV0KCkgY29sdW1uSW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXItbWVudS1pdGVtJyk7XG4gIH1cblxuICBnZXQgb3B0aW9uTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25bdGhpcy5uekxhYmVsUHJvcGVydHldO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=