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
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardTabComponent } from './nz-card-tab.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'card';
export class NzCardComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(nzConfigService, renderer, elementRef) {
        this.nzConfigService = nzConfigService;
        this.nzLoading = false;
        this.nzActions = [];
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
}
NzCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-card',
                exportAs: 'nzCard',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || tab\">\n  <div class=\"ant-card-head-wrapper\">\n    <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n    </div>\n    <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n      <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n    </div>\n  </div>\n  <ng-container *ngIf=\"tab\">\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\n  </ng-container>\n</div>\n<div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n  <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n</div>\n<div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n  <ng-container *ngIf=\"!nzLoading\">\n    <ng-content></ng-content>\n  </ng-container>\n  <nz-card-loading *ngIf=\"nzLoading\"></nz-card-loading>\n</div>\n<ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n  <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n  </li>\n</ul>",
                host: {
                    '[class.ant-card-loading]': 'nzLoading',
                    '[class.ant-card-bordered]': 'nzBordered',
                    '[class.ant-card-hoverable]': 'nzHoverable',
                    '[class.ant-card-small]': 'nzSize === "small"',
                    '[class.ant-card-contain-grid]': 'grids && grids.length',
                    '[class.ant-card-type-inner]': 'nzType === "inner"',
                    '[class.ant-card-contain-tabs]': '!!tab'
                },
                styles: [`
      nz-card {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCardComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ElementRef }
];
NzCardComponent.propDecorators = {
    nzBordered: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzHoverable: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzCover: [{ type: Input }],
    nzActions: [{ type: Input }],
    nzType: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzExtra: [{ type: Input }],
    tab: [{ type: ContentChild, args: [NzCardTabComponent, { static: false },] }],
    grids: [{ type: ContentChildren, args: [NzCardGridDirective,] }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCardComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCardComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCardComponent.prototype, "nzHoverable", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzCardComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzCardComponent.prototype.nzBordered;
    /** @type {?} */
    NzCardComponent.prototype.nzLoading;
    /** @type {?} */
    NzCardComponent.prototype.nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzCardComponent.prototype.nzCover;
    /** @type {?} */
    NzCardComponent.prototype.nzActions;
    /** @type {?} */
    NzCardComponent.prototype.nzType;
    /** @type {?} */
    NzCardComponent.prototype.nzSize;
    /** @type {?} */
    NzCardComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardComponent.prototype.nzExtra;
    /** @type {?} */
    NzCardComponent.prototype.tab;
    /** @type {?} */
    NzCardComponent.prototype.grids;
    /** @type {?} */
    NzCardComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhcmQvIiwic291cmNlcyI6WyJuei1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFnQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7TUFFdkQsd0JBQXdCLEdBQUcsTUFBTTtBQTBCdkMsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQWMxQixZQUFtQixlQUFnQyxFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBN0Usb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBWjFCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJbEMsY0FBUyxHQUE2QixFQUFFLENBQUM7UUFTaEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGduQ0FBdUM7Z0JBUXZDLElBQUksRUFBRTtvQkFDSiwwQkFBMEIsRUFBRSxXQUFXO29CQUN2QywyQkFBMkIsRUFBRSxZQUFZO29CQUN6Qyw0QkFBNEIsRUFBRSxhQUFhO29CQUMzQyx3QkFBd0IsRUFBRSxvQkFBb0I7b0JBQzlDLCtCQUErQixFQUFFLHVCQUF1QjtvQkFDeEQsNkJBQTZCLEVBQUUsb0JBQW9CO29CQUNuRCwrQkFBK0IsRUFBRSxPQUFPO2lCQUN6Qzt5QkFkQzs7OztLQUlDO2FBV0o7Ozs7WUE3QnNCLGVBQWU7WUFKcEMsU0FBUztZQUhULFVBQVU7Ozt5QkFzQ1QsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztrQkFDTCxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUNsRCxlQUFlLFNBQUMsbUJBQW1COztBQVhpQztJQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzttREFBcUI7QUFDaEU7SUFBZixZQUFZLEVBQUU7O2tEQUFtQjtBQUMyQjtJQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOztvREFBc0I7QUFLakM7SUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7K0NBQXNCOzs7SUFQL0UscUNBQXlGOztJQUN6RixvQ0FBMkM7O0lBQzNDLHNDQUEyRjs7SUFDM0Ysc0NBQWdEOztJQUNoRCxrQ0FBb0M7O0lBQ3BDLG9DQUFrRDs7SUFDbEQsaUNBQXdCOztJQUN4QixpQ0FBK0U7O0lBQy9FLGtDQUE2Qzs7SUFDN0Msa0NBQTZDOztJQUM3Qyw4QkFBNkU7O0lBQzdFLGdDQUE0RTs7SUFFaEUsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBOelNpemVEU1R5cGUsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpDYXJkR3JpZERpcmVjdGl2ZSB9IGZyb20gJy4vbnotY2FyZC1ncmlkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekNhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL256LWNhcmQtdGFiLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY2FyZCcsXG4gIGV4cG9ydEFzOiAnbnpDYXJkJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWNhcmQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJzogJ256TG9hZGluZycsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ib3JkZXJlZF0nOiAnbnpCb3JkZXJlZCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogJ256SG92ZXJhYmxlJyxcbiAgICAnW2NsYXNzLmFudC1jYXJkLXNtYWxsXSc6ICduelNpemUgPT09IFwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLWdyaWRdJzogJ2dyaWRzICYmIGdyaWRzLmxlbmd0aCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC10eXBlLWlubmVyXSc6ICduelR5cGUgPT09IFwiaW5uZXJcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLXRhYnNdJzogJyEhdGFiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56SG92ZXJhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBuekJvZHlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgbnpDb3ZlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XG4gIEBJbnB1dCgpIG56VHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOelNpemVEU1R5cGU7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQENvbnRlbnRDaGlsZChOekNhcmRUYWJDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0YWI6IE56Q2FyZFRhYkNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZHJlbihOekNhcmRHcmlkRGlyZWN0aXZlKSBncmlkczogUXVlcnlMaXN0PE56Q2FyZEdyaWREaXJlY3RpdmU+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkJyk7XG4gIH1cbn1cbiJdfQ==