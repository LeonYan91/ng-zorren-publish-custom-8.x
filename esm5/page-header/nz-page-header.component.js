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
var NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
var NzPageHeaderComponent = /** @class */ (function () {
    function NzPageHeaderComponent(location, nzConfigService) {
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
    NzPageHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    };
    /**
     * @return {?}
     */
    NzPageHeaderComponent.prototype.onBack = /**
     * @return {?}
     */
    function () {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    };
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
                    styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzPageHeaderComponent.ctorParameters = function () { return [
        { type: Location },
        { type: NzConfigService }
    ]; };
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
    return NzPageHeaderComponent;
}());
export { NzPageHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLCtCQUErQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBRWhHLHdCQUF3QixHQUFHLFlBQVk7QUFFN0M7SUEyQ0UsK0JBQW9CLFFBQWtCLEVBQVMsZUFBZ0M7UUFBM0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWpCL0UsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVoQixlQUFVLEdBQXNDLElBQUksQ0FBQztRQUkzQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVU2QixDQUFDOzs7OztJQUVuRiwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksWUFBWSxXQUFXLENBQUM7WUFDcEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOztnQkExREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw4akRBQThDO29CQUU5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixvQkFBb0IsRUFBRSxvQkFBb0I7d0JBQzFDLCtCQUErQixFQUFFLFNBQVM7d0JBQzFDLHdCQUF3QixFQUFFLHdCQUF3QjtxQkFDbkQ7MkdBRUMscU1BUUM7aUJBRUo7Ozs7Z0JBOUJRLFFBQVE7Z0JBQ1IsZUFBZTs7OzZCQWtDckIsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxNQUFNO3FDQUVOLFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUNBSTNELFlBQVksU0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBUFg7UUFBM0MsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQzs7MERBQWtCO0lBMkJ4RSw0QkFBQztDQUFBLEFBM0RELElBMkRDO1NBbENZLHFCQUFxQjs7O0lBQ2hDLHNEQUE4Qjs7SUFDOUIsaURBQXlCOztJQUV6QiwyQ0FBOEQ7O0lBQzlELHdDQUE2Qzs7SUFDN0MsMkNBQWdEOztJQUNoRCx3Q0FBc0U7O0lBQ3RFLHVDQUFxRDs7SUFFckQsbURBRUU7O0lBRUYsdURBRUU7Ozs7O0lBRVUseUNBQTBCOztJQUFFLGdEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LXBhZ2UtaGVhZGVyLWNlbGxzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3BhZ2VIZWFkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1wYWdlLWhlYWRlcicsXG4gIGV4cG9ydEFzOiAnbnpQYWdlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbnotcGFnZS1oZWFkZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1wYWdlLWhlYWRlcicsXG4gICAgJ1tjbGFzcy5oYXMtZm9vdGVyXSc6ICduelBhZ2VIZWFkZXJGb290ZXInLFxuICAgICdbY2xhc3MuYW50LXBhZ2UtaGVhZGVyLWdob3N0XSc6ICduekdob3N0JyxcbiAgICAnW2NsYXNzLmhhcy1icmVhZGNydW1iXSc6ICduelBhZ2VIZWFkZXJCcmVhZGNydW1iJ1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuYW50LXBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56UGFnZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGlzVGVtcGxhdGVSZWZCYWNrSWNvbiA9IGZhbHNlO1xuICBpc1N0cmluZ0JhY2tJY29uID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpCYWNrSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56U3VidGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56R2hvc3Q6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQENvbnRlbnRDaGlsZChOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelBhZ2VIZWFkZXJGb290ZXI6IEVsZW1lbnRSZWY8XG4gICAgTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlXG4gID47XG5cbiAgQENvbnRlbnRDaGlsZChOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpQYWdlSGVhZGVyQnJlYWRjcnVtYjogRWxlbWVudFJlZjxcbiAgICBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlXG4gID47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256QmFja0ljb24nKSkge1xuICAgICAgdGhpcy5pc1RlbXBsYXRlUmVmQmFja0ljb24gPSBjaGFuZ2VzLm56QmFja0ljb24uY3VycmVudFZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gICAgICB0aGlzLmlzU3RyaW5nQmFja0ljb24gPSB0eXBlb2YgY2hhbmdlcy5uekJhY2tJY29uLmN1cnJlbnRWYWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgfVxuICB9XG5cbiAgb25CYWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm56QmFjay5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cbiAgfVxufVxuIl19