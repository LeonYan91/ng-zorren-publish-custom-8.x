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
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
/** @type {?} */
var IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
/** @type {?} */
var ExceptionStatus = ['404', '500', '403'];
var NzResultComponent = /** @class */ (function () {
    function NzResultComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzStatus = 'info';
        this.isException = false;
    }
    /**
     * @return {?}
     */
    NzResultComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setStatusIcon();
        this.setClassMap();
    };
    /**
     * @private
     * @return {?}
     */
    NzResultComponent.prototype.setStatusIcon = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[(/** @type {?} */ (icon))] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[(/** @type {?} */ (this.nzStatus))];
    };
    /**
     * @private
     * @return {?}
     */
    NzResultComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefix = 'ant-result';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a[prefix] = true,
            _a[prefix + "-" + this.nzStatus] = true,
            _a));
    };
    NzResultComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-result',
                    exportAs: 'nzResult',
                    template: "<!-- Icon -->\n<div class=\"ant-result-icon\">\n  <ng-container *ngIf=\"!isException; else exceptionTpl\">\n    <ng-container *ngIf=\"icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"icon\" nzTheme=\"fill\"></i>\n      </ng-container>\n    </ng-container>\n    <ng-content *ngIf=\"!icon\" select=\"[nz-result-icon]\"></ng-content>\n  </ng-container>\n\n  <ng-template #exceptionTpl>\n    <ng-container [ngSwitch]=\"nzStatus\">\n      <nz-result-not-found *ngSwitchCase=\"'404'\"></nz-result-not-found>\n      <nz-result-server-error *ngSwitchCase=\"'500'\"></nz-result-server-error>\n      <nz-result-unauthorized *ngSwitchCase=\"'403'\"></nz-result-unauthorized>\n    </ng-container>\n  </ng-template>\n</div>\n\n<!-- Title and subTitle -->\n<ng-container *ngIf=\"nzTitle\">\n  <div class=\"ant-result-title\" *nzStringTemplateOutlet=\"nzTitle\">\n    {{ nzTitle }}\n  </div>\n</ng-container>\n<ng-content *ngIf=\"!nzTitle\" select=\"div[nz-result-title]\"></ng-content>\n\n<ng-container *ngIf=\"nzSubTitle\">\n  <div class=\"ant-result-subtitle\" *nzStringTemplateOutlet=\"nzSubTitle\">\n    {{ nzSubTitle }}\n  </div>\n</ng-container>\n<ng-content *ngIf=\"!nzSubTitle\" select=\"div[nz-result-subtitle]\"></ng-content>\n\n<!-- Content -->\n<ng-content select=\"nz-result-content, [nz-result-content]\"></ng-content>\n\n<!-- Extra -->\n<div class=\"ant-result-extra\" *ngIf=\"nzExtra\">\n  <ng-container *nzStringTemplateOutlet=\"nzExtra\">\n    {{ nzExtra }}\n  </ng-container>\n</div>\n<ng-content *ngIf=\"!nzExtra\" select=\"div[nz-result-extra]\"></ng-content>\n",
                    providers: [NzUpdateHostClassService],
                    styles: ["\n      nz-result {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzResultComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef }
    ]; };
    NzResultComponent.propDecorators = {
        nzIcon: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzSubTitle: [{ type: Input }],
        nzExtra: [{ type: Input }]
    };
    return NzResultComponent;
}());
export { NzResultComponent };
if (false) {
    /** @type {?} */
    NzResultComponent.prototype.nzIcon;
    /** @type {?} */
    NzResultComponent.prototype.nzTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzStatus;
    /** @type {?} */
    NzResultComponent.prototype.nzSubTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzExtra;
    /** @type {?} */
    NzResultComponent.prototype.icon;
    /** @type {?} */
    NzResultComponent.prototype.isException;
    /**
     * @type {?}
     * @private
     */
    NzResultComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzResultComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQU14RCxPQUFPLEdBQUc7SUFDZCxPQUFPLEVBQUUsY0FBYztJQUN2QixLQUFLLEVBQUUsY0FBYztJQUNyQixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLE9BQU8sRUFBRSxTQUFTO0NBQ25COztJQUNLLGVBQWUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0FBRTdDO0lBeUJFLDJCQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVA3RixhQUFRLEdBQXVCLE1BQU0sQ0FBQztRQUsvQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVxRixDQUFDOzs7O0lBRTFHLHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyx5Q0FBYTs7OztJQUFyQjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFFeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7WUFDZCxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUTtnQkFDeEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW9CLENBQUMsSUFBSSxJQUFJO2dCQUMzQyxDQUFDLENBQUMsSUFBSTtZQUNSLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxDQUFDLFNBQVM7Z0JBQ1gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFvQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTyx1Q0FBVzs7OztJQUFuQjs7O1lBQ1EsTUFBTSxHQUFHLFlBQVk7UUFFM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDekUsR0FBQyxNQUFNLElBQUcsSUFBSTtZQUNkLEdBQUksTUFBTSxTQUFJLElBQUksQ0FBQyxRQUFVLElBQUcsSUFBSTtnQkFDcEMsQ0FBQztJQUNMLENBQUM7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHlsREFBeUM7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDOzZCQUVuQyw2REFJQztpQkFFSjs7OztnQkE1QlEsd0JBQXdCO2dCQU4vQixVQUFVOzs7eUJBb0NULEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFpQ1Isd0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXRDWSxpQkFBaUI7OztJQUM1QixtQ0FBNkM7O0lBQzdDLG9DQUE2Qzs7SUFDN0MscUNBQStDOztJQUMvQyx1Q0FBaUQ7O0lBQ2pELG9DQUE4Qzs7SUFFOUMsaUNBQWtDOztJQUNsQyx3Q0FBb0I7Ozs7O0lBRVIscURBQTBEOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBOelJlc3VsdEljb25UeXBlID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICdpbmZvJyB8ICd3YXJuaW5nJztcbmV4cG9ydCB0eXBlIE56RXhjZXB0aW9uU3RhdHVzVHlwZSA9ICc0MDQnIHwgJzUwMCcgfCAnNDAzJztcbmV4cG9ydCB0eXBlIE56UmVzdWx0U3RhdHVzVHlwZSA9IE56RXhjZXB0aW9uU3RhdHVzVHlwZSB8IE56UmVzdWx0SWNvblR5cGU7XG5cbmNvbnN0IEljb25NYXAgPSB7XG4gIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUnLFxuICBlcnJvcjogJ2Nsb3NlLWNpcmNsZScsXG4gIGluZm86ICdleGNsYW1hdGlvbi1jaXJjbGUnLFxuICB3YXJuaW5nOiAnd2FybmluZydcbn07XG5jb25zdCBFeGNlcHRpb25TdGF0dXMgPSBbJzQwNCcsICc1MDAnLCAnNDAzJ107XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1yZXN1bHQnLFxuICBleHBvcnRBczogJ256UmVzdWx0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LXJlc3VsdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56SWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56UmVzdWx0U3RhdHVzVHlwZSA9ICdpbmZvJztcbiAgQElucHV0KCkgbnpTdWJUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekV4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgaWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBpc0V4Y2VwdGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXR1c0ljb24oKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0YXR1c0ljb24oKTogdm9pZCB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMubnpJY29uO1xuXG4gICAgdGhpcy5pc0V4Y2VwdGlvbiA9IEV4Y2VwdGlvblN0YXR1cy5pbmRleE9mKHRoaXMubnpTdGF0dXMpICE9PSAtMTtcbiAgICB0aGlzLmljb24gPSBpY29uXG4gICAgICA/IHR5cGVvZiBpY29uID09PSAnc3RyaW5nJ1xuICAgICAgICA/IEljb25NYXBbaWNvbiBhcyBOelJlc3VsdEljb25UeXBlXSB8fCBpY29uXG4gICAgICAgIDogaWNvblxuICAgICAgOiB0aGlzLmlzRXhjZXB0aW9uXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBJY29uTWFwW3RoaXMubnpTdGF0dXMgYXMgTnpSZXN1bHRJY29uVHlwZV07XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtcmVzdWx0JztcblxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgW3ByZWZpeF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4fS0ke3RoaXMubnpTdGF0dXN9YF06IHRydWVcbiAgICB9KTtcbiAgfVxufVxuIl19