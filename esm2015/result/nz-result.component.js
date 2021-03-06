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
const IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
/** @type {?} */
const ExceptionStatus = ['404', '500', '403'];
export class NzResultComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     */
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzStatus = 'info';
        this.isException = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setStatusIcon();
        this.setClassMap();
    }
    /**
     * @private
     * @return {?}
     */
    setStatusIcon() {
        /** @type {?} */
        const icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[(/** @type {?} */ (icon))] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[(/** @type {?} */ (this.nzStatus))];
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefix = 'ant-result';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [prefix]: true,
            [`${prefix}-${this.nzStatus}`]: true
        });
    }
}
NzResultComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                template: "<!-- Icon -->\n<div class=\"ant-result-icon\">\n  <ng-container *ngIf=\"!isException; else exceptionTpl\">\n    <ng-container *ngIf=\"icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"icon\" nzTheme=\"fill\"></i>\n      </ng-container>\n    </ng-container>\n    <ng-content *ngIf=\"!icon\" select=\"[nz-result-icon]\"></ng-content>\n  </ng-container>\n\n  <ng-template #exceptionTpl>\n    <ng-container [ngSwitch]=\"nzStatus\">\n      <nz-result-not-found *ngSwitchCase=\"'404'\"></nz-result-not-found>\n      <nz-result-server-error *ngSwitchCase=\"'500'\"></nz-result-server-error>\n      <nz-result-unauthorized *ngSwitchCase=\"'403'\"></nz-result-unauthorized>\n    </ng-container>\n  </ng-template>\n</div>\n\n<!-- Title and subTitle -->\n<ng-container *ngIf=\"nzTitle\">\n  <div class=\"ant-result-title\" *nzStringTemplateOutlet=\"nzTitle\">\n    {{ nzTitle }}\n  </div>\n</ng-container>\n<ng-content *ngIf=\"!nzTitle\" select=\"div[nz-result-title]\"></ng-content>\n\n<ng-container *ngIf=\"nzSubTitle\">\n  <div class=\"ant-result-subtitle\" *nzStringTemplateOutlet=\"nzSubTitle\">\n    {{ nzSubTitle }}\n  </div>\n</ng-container>\n<ng-content *ngIf=\"!nzSubTitle\" select=\"div[nz-result-subtitle]\"></ng-content>\n\n<!-- Content -->\n<ng-content select=\"nz-result-content, [nz-result-content]\"></ng-content>\n\n<!-- Extra -->\n<div class=\"ant-result-extra\" *ngIf=\"nzExtra\">\n  <ng-container *nzStringTemplateOutlet=\"nzExtra\">\n    {{ nzExtra }}\n  </ng-container>\n</div>\n<ng-content *ngIf=\"!nzExtra\" select=\"div[nz-result-extra]\"></ng-content>\n",
                providers: [NzUpdateHostClassService],
                styles: [`
      nz-result {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzResultComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef }
];
NzResultComponent.propDecorators = {
    nzIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzSubTitle: [{ type: Input }],
    nzExtra: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQU14RCxPQUFPLEdBQUc7SUFDZCxPQUFPLEVBQUUsY0FBYztJQUN2QixLQUFLLEVBQUUsY0FBYztJQUNyQixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLE9BQU8sRUFBRSxTQUFTO0NBQ25COztNQUNLLGVBQWUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0FBaUI3QyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQVU1QixZQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVA3RixhQUFRLEdBQXVCLE1BQU0sQ0FBQztRQUsvQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVxRixDQUFDOzs7O0lBRTFHLFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sYUFBYTs7Y0FDYixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFFeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7WUFDZCxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUTtnQkFDeEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW9CLENBQUMsSUFBSSxJQUFJO2dCQUMzQyxDQUFDLENBQUMsSUFBSTtZQUNSLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxDQUFDLFNBQVM7Z0JBQ1gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFvQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTyxXQUFXOztjQUNYLE1BQU0sR0FBRyxZQUFZO1FBRTNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDM0UsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJO1lBQ2QsQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHlsREFBeUM7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO3lCQUVuQzs7OztLQUlDO2FBRUo7Ozs7WUE1QlEsd0JBQXdCO1lBTi9CLFVBQVU7OztxQkFvQ1QsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBSk4sbUNBQTZDOztJQUM3QyxvQ0FBNkM7O0lBQzdDLHFDQUErQzs7SUFDL0MsdUNBQWlEOztJQUNqRCxvQ0FBOEM7O0lBRTlDLGlDQUFrQzs7SUFDbEMsd0NBQW9COzs7OztJQUVSLHFEQUEwRDs7Ozs7SUFBRSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuZXhwb3J0IHR5cGUgTnpSZXN1bHRJY29uVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnaW5mbycgfCAnd2FybmluZyc7XG5leHBvcnQgdHlwZSBOekV4Y2VwdGlvblN0YXR1c1R5cGUgPSAnNDA0JyB8ICc1MDAnIHwgJzQwMyc7XG5leHBvcnQgdHlwZSBOelJlc3VsdFN0YXR1c1R5cGUgPSBOekV4Y2VwdGlvblN0YXR1c1R5cGUgfCBOelJlc3VsdEljb25UeXBlO1xuXG5jb25zdCBJY29uTWFwID0ge1xuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcbiAgZXJyb3I6ICdjbG9zZS1jaXJjbGUnLFxuICBpbmZvOiAnZXhjbGFtYXRpb24tY2lyY2xlJyxcbiAgd2FybmluZzogJ3dhcm5pbmcnXG59O1xuY29uc3QgRXhjZXB0aW9uU3RhdHVzID0gWyc0MDQnLCAnNTAwJywgJzQwMyddO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotcmVzdWx0JyxcbiAgZXhwb3J0QXM6ICduelJlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1yZXN1bHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuekljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelJlc3VsdFN0YXR1c1R5cGUgPSAnaW5mbyc7XG4gIEBJbnB1dCgpIG56U3ViVGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpFeHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgaXNFeGNlcHRpb24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0dXNJY29uKCk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdGF0dXNJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLm56SWNvbjtcblxuICAgIHRoaXMuaXNFeGNlcHRpb24gPSBFeGNlcHRpb25TdGF0dXMuaW5kZXhPZih0aGlzLm56U3RhdHVzKSAhPT0gLTE7XG4gICAgdGhpcy5pY29uID0gaWNvblxuICAgICAgPyB0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBJY29uTWFwW2ljb24gYXMgTnpSZXN1bHRJY29uVHlwZV0gfHwgaWNvblxuICAgICAgICA6IGljb25cbiAgICAgIDogdGhpcy5pc0V4Y2VwdGlvblxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogSWNvbk1hcFt0aGlzLm56U3RhdHVzIGFzIE56UmVzdWx0SWNvblR5cGVdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVmaXggPSAnYW50LXJlc3VsdCc7XG5cbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFtwcmVmaXhdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeH0tJHt0aGlzLm56U3RhdHVzfWBdOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==