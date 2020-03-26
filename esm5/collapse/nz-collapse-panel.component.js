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
var NZ_CONFIG_COMPONENT_NAME = 'collapsePanel';
var NzCollapsePanelComponent = /** @class */ (function () {
    function NzCollapsePanelComponent(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
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
    NzCollapsePanelComponent.prototype.clickHeader = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.addPanel(this);
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.removePanel(this);
    };
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
                    styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCollapsePanelComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: NzCollapseComponent, decorators: [{ type: Host }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return NzCollapsePanelComponent;
}());
export { NzCollapsePanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFFeEQsd0JBQXdCLEdBQUcsZUFBZTtBQUVoRDtJQXVDRSxrQ0FDUyxlQUFnQyxFQUMvQixHQUFzQixFQUNkLG1CQUF3QyxFQUN4RCxVQUFzQixFQUN0QixRQUFtQjtRQUpaLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNkLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFyQmpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUt6QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFtQjlELFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFsQkQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7SUFFRCwrQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFZRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IseTJCQUFpRDtvQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBUTVCLElBQUksRUFBRTt3QkFDSiwrQkFBK0IsRUFBRSxjQUFjO3dCQUMvQyxrQ0FBa0MsRUFBRSxVQUFVO3dCQUM5QyxvQ0FBb0MsRUFBRSxZQUFZO3FCQUNuRDs2QkFWQyxxRUFJQztpQkFPSjs7OztnQkF6QnNDLGVBQWU7Z0JBZHBELGlCQUFpQjtnQkFnQlYsbUJBQW1CLHVCQThDdkIsSUFBSTtnQkE1RFAsVUFBVTtnQkFPVixTQUFTOzs7MkJBZ0NSLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLE1BQU07O0lBTmtCO1FBQWYsWUFBWSxFQUFFOzs4REFBa0I7SUFDakI7UUFBZixZQUFZLEVBQUU7O2dFQUFvQjtJQUN5QjtRQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOztpRUFBc0I7SUFpQzVGLCtCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FwQ1ksd0JBQXdCOzs7SUFDbkMsNENBQTBDOztJQUMxQyw4Q0FBNEM7O0lBQzVDLCtDQUEwRjs7SUFDMUYsMkNBQTZDOztJQUM3Qyw0Q0FBOEM7O0lBQzlDLGtEQUFvRDs7SUFDcEQsa0RBQWdFOztJQWE5RCxtREFBdUM7Ozs7O0lBQ3ZDLHVDQUE4Qjs7Ozs7SUFDOUIsdURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29sbGFwc2VNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvbGxhcHNlUGFuZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1jb2xsYXBzZS1wYW5lbCcsXG4gIGV4cG9ydEFzOiAnbnpDb2xsYXBzZVBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbl0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWNvbGxhcHNlLXBhbmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2Utbm8tYXJyb3ddJzogJyFuelNob3dBcnJvdycsXG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1hY3RpdmVdJzogJ256QWN0aXZlJyxcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd0Fycm93OiBib29sZWFuO1xuICBASW5wdXQoKSBuekV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjbGlja0hlYWRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LmNsaWNrKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIG56Q29sbGFwc2VDb21wb25lbnQ6IE56Q29sbGFwc2VDb21wb25lbnQsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jb2xsYXBzZS1pdGVtJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQuYWRkUGFuZWwodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQucmVtb3ZlUGFuZWwodGhpcyk7XG4gIH1cbn1cbiJdfQ==