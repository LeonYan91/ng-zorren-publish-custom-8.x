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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { collapseMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzCollapseComponent } from './nz-collapse.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'collapsePanel';
export class NzCollapsePanelComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} nzCollapseComponent
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    /**
     * @return {?}
     */
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzCollapseComponent.removePanel(this);
    }
}
NzCollapsePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                template: "<div role=\"tab\" [attr.aria-expanded]=\"nzActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\n  <ng-container *ngIf=\"nzShowArrow\">\n    <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon\">\n      <i nz-icon [nzType]=\"nzExpandedIcon || 'right'\" class=\"ant-collapse-arrow\" [nzRotate]=\"nzActive ? 90 : 0\"></i>\n    </ng-container>\n  </ng-container>\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\n  <div class=\"ant-collapse-extra\" *ngIf=\"nzExtra\">\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n  </div>\n</div>\n<div class=\"ant-collapse-content\"\n  [class.ant-collapse-content-active]=\"nzActive\"\n  [@collapseMotion]=\"nzActive ? 'expanded' : 'hidden' \">\n  <div class=\"ant-collapse-content-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [collapseMotion],
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                },
                styles: [`
      nz-collapse-panel {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCollapsePanelComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzCollapseComponent, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: Renderer2 }
];
NzCollapsePanelComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzActiveChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzActive", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
if (false) {
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActive;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExtra;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeader;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActiveChange;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.nzCollapseComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7TUFFeEQsd0JBQXdCLEdBQUcsZUFBZTtBQXNCaEQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7SUFtQm5DLFlBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDZCxtQkFBd0MsRUFDeEQsVUFBc0IsRUFDdEIsUUFBbUI7UUFKWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBckJqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFLekIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBbUI5RCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBbEJELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFZRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix5MkJBQWlEO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFRNUIsSUFBSSxFQUFFO29CQUNKLCtCQUErQixFQUFFLGNBQWM7b0JBQy9DLGtDQUFrQyxFQUFFLFVBQVU7b0JBQzlDLG9DQUFvQyxFQUFFLFlBQVk7aUJBQ25EO3lCQVZDOzs7O0tBSUM7YUFPSjs7OztZQXpCc0MsZUFBZTtZQWRwRCxpQkFBaUI7WUFnQlYsbUJBQW1CLHVCQThDdkIsSUFBSTtZQTVEUCxVQUFVO1lBT1YsU0FBUzs7O3VCQWdDUixLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxNQUFNOztBQU5rQjtJQUFmLFlBQVksRUFBRTs7MERBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzs0REFBb0I7QUFDeUI7SUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRTs7NkRBQXNCOzs7SUFGMUYsNENBQTBDOztJQUMxQyw4Q0FBNEM7O0lBQzVDLCtDQUEwRjs7SUFDMUYsMkNBQTZDOztJQUM3Qyw0Q0FBOEM7O0lBQzlDLGtEQUFvRDs7SUFDcEQsa0RBQWdFOztJQWE5RCxtREFBdUM7Ozs7O0lBQ3ZDLHVDQUE4Qjs7Ozs7SUFDOUIsdURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29sbGFwc2VNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvbGxhcHNlUGFuZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1jb2xsYXBzZS1wYW5lbCcsXG4gIGV4cG9ydEFzOiAnbnpDb2xsYXBzZVBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbl0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWNvbGxhcHNlLXBhbmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2Utbm8tYXJyb3ddJzogJyFuelNob3dBcnJvdycsXG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1hY3RpdmVdJzogJ256QWN0aXZlJyxcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd0Fycm93OiBib29sZWFuO1xuICBASW5wdXQoKSBuekV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjbGlja0hlYWRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LmNsaWNrKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIG56Q29sbGFwc2VDb21wb25lbnQ6IE56Q29sbGFwc2VDb21wb25lbnQsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jb2xsYXBzZS1pdGVtJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQuYWRkUGFuZWwodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQucmVtb3ZlUGFuZWwodGhpcyk7XG4gIH1cbn1cbiJdfQ==