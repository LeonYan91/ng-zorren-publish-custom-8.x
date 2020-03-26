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
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderFooterDirective } from './nz-page-header-cells';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
export class NzPageHeaderComponent {
    /**
     * @param {?} location
     * @param {?} nzConfigService
     */
    constructor(location, nzConfigService) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.isTemplateRefBackIcon = false;
        this.isStringBackIcon = false;
        this.nzBackIcon = null;
        this.nzBack = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    }
    /**
     * @return {?}
     */
    onBack() {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    }
}
NzPageHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                template: "<ng-content select=\"nz-breadcrumb[nz-page-header-breadcrumb]\"></ng-content>\n\n<div class=\"ant-page-header-heading\">\n  <!--back-->\n  <div *ngIf=\"nzBackIcon !== null\" (click)=\"onBack()\" class=\"ant-page-header-back\">\n    <div role=\"button\" tabindex=\"0\" class=\"ant-page-header-back-button\">\n      <i *ngIf=\"isStringBackIcon\" nz-icon [nzType]=\"nzBackIcon ? nzBackIcon : 'arrow-left'\" nzTheme=\"outline\"></i>\n      <ng-container *ngIf=\"isTemplateRefBackIcon\" [ngTemplateOutlet]=\"nzBackIcon\"></ng-container>\n    </div>\n  </div>\n  <!--avatar-->\n  <ng-content select=\"nz-avatar[nz-page-header-avatar]\"></ng-content>\n  <!--title-->\n  <span class=\"ant-page-header-heading-title\" *ngIf=\"nzTitle\">\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n  </span>\n  <ng-content *ngIf=\"!nzTitle\" select=\"nz-page-header-title, [nz-page-header-title]\"></ng-content>\n  <!--subtitle-->\n  <span class=\"ant-page-header-heading-sub-title\" *ngIf=\"nzSubtitle\">\n    <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\n  </span>\n  <ng-content *ngIf=\"!nzSubtitle\" select=\"nz-page-header-subtitle, [nz-page-header-subtitle]\"></ng-content>\n  <ng-content select=\"nz-page-header-tags, [nz-page-header-tags]\"></ng-content>\n  <ng-content select=\"nz-page-header-extra, [nz-page-header-extra]\"></ng-content>\n</div>\n\n<ng-content select=\"nz-page-header-content, [nz-page-header-content]\"></ng-content>\n<ng-content select=\"nz-page-header-footer, [nz-page-header-footer]\"></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb'
                },
                styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", `
      .ant-page-header-back-button {
        border: 0px;
        background: transparent;
        padding: 0px;
        line-height: inherit;
        display: inline-block;
      }
    `]
            }] }
];
/** @nocollapse */
NzPageHeaderComponent.ctorParameters = () => [
    { type: Location },
    { type: NzConfigService }
];
NzPageHeaderComponent.propDecorators = {
    nzBackIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzSubtitle: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzBack: [{ type: Output }],
    nzPageHeaderFooter: [{ type: ContentChild, args: [NzPageHeaderFooterDirective, { static: false },] }],
    nzPageHeaderBreadcrumb: [{ type: ContentChild, args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    tslib_1.__metadata("design:type", Boolean)
], NzPageHeaderComponent.prototype, "nzGhost", void 0);
if (false) {
    /** @type {?} */
    NzPageHeaderComponent.prototype.isTemplateRefBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.isStringBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzTitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzSubtitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzGhost;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBack;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderFooter;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderBreadcrumb;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.location;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLCtCQUErQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O01BRWhHLHdCQUF3QixHQUFHLFlBQVk7QUEyQjdDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBa0JoQyxZQUFvQixRQUFrQixFQUFTLGVBQWdDO1FBQTNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFqQi9FLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFaEIsZUFBVSxHQUFzQyxJQUFJLENBQUM7UUFJM0MsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFVNkIsQ0FBQzs7Ozs7SUFFbkYsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLFlBQVksV0FBVyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQztTQUM3RTtJQUNILENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7OztZQTFERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDhqREFBOEM7Z0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLG9CQUFvQixFQUFFLG9CQUFvQjtvQkFDMUMsK0JBQStCLEVBQUUsU0FBUztvQkFDMUMsd0JBQXdCLEVBQUUsd0JBQXdCO2lCQUNuRDt1R0FFQzs7Ozs7Ozs7S0FRQzthQUVKOzs7O1lBOUJRLFFBQVE7WUFDUixlQUFlOzs7eUJBa0NyQixLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLE1BQU07aUNBRU4sWUFBWSxTQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtxQ0FJM0QsWUFBWSxTQUFDLCtCQUErQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7QUFQWDtJQUEzQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDOztzREFBa0I7OztJQU50RSxzREFBOEI7O0lBQzlCLGlEQUF5Qjs7SUFFekIsMkNBQThEOztJQUM5RCx3Q0FBNkM7O0lBQzdDLDJDQUFnRDs7SUFDaEQsd0NBQXNFOztJQUN0RSx1Q0FBcUQ7O0lBRXJELG1EQUVFOztJQUVGLHVEQUVFOzs7OztJQUVVLHlDQUEwQjs7SUFBRSxnREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSwgTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1wYWdlLWhlYWRlci1jZWxscyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdwYWdlSGVhZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcGFnZS1oZWFkZXInLFxuICBleHBvcnRBczogJ256UGFnZUhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtcGFnZS1oZWFkZXInLFxuICAgICdbY2xhc3MuaGFzLWZvb3Rlcl0nOiAnbnpQYWdlSGVhZGVyRm9vdGVyJyxcbiAgICAnW2NsYXNzLmFudC1wYWdlLWhlYWRlci1naG9zdF0nOiAnbnpHaG9zdCcsXG4gICAgJ1tjbGFzcy5oYXMtYnJlYWRjcnVtYl0nOiAnbnpQYWdlSGVhZGVyQnJlYWRjcnVtYidcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmFudC1wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelBhZ2VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBpc1RlbXBsYXRlUmVmQmFja0ljb24gPSBmYWxzZTtcbiAgaXNTdHJpbmdCYWNrSWNvbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG56QmFja0ljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelN1YnRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuekdob3N0OiBib29sZWFuO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCYWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBDb250ZW50Q2hpbGQoTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpQYWdlSGVhZGVyRm9vdGVyOiBFbGVtZW50UmVmPFxuICAgIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZVxuICA+O1xuXG4gIEBDb250ZW50Q2hpbGQoTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56UGFnZUhlYWRlckJyZWFkY3J1bWI6IEVsZW1lbnRSZWY8XG4gICAgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZVxuICA+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekJhY2tJY29uJykpIHtcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZVJlZkJhY2tJY29uID0gY2hhbmdlcy5uekJhY2tJY29uLmN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgICAgdGhpcy5pc1N0cmluZ0JhY2tJY29uID0gdHlwZW9mIGNoYW5nZXMubnpCYWNrSWNvbi5jdXJyZW50VmFsdWUgPT09ICdzdHJpbmcnO1xuICAgIH1cbiAgfVxuXG4gIG9uQmFjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5uekJhY2suZW1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==