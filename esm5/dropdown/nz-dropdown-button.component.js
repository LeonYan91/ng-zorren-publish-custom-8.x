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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { slideMotion, warnDeprecation, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { menuServiceFactory, NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
var ɵ0 = menuServiceFactory;
var NzDropDownButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzDropDownButtonComponent, _super);
    function NzDropDownButtonComponent(cdr, nzMenuDropdownService, noAnimation) {
        var _this = _super.call(this, cdr, nzMenuDropdownService, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzSize = 'default';
        _this.nzType = 'default';
        _this.nzIcon = 'ellipsis';
        _this.nzClick = new EventEmitter();
        warnDeprecation("'nz-dropdown-button' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en");
        return _this;
    }
    /** rewrite afterViewInit hook */
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    NzDropDownButtonComponent.prototype.ngAfterContentInit = /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    function () {
        this.startSubscribe(this.visible$);
    };
    NzDropDownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown-button',
                    exportAs: 'nzDropdownButton',
                    preserveWhitespaces: false,
                    animations: [slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        NzMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: ɵ0,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    template: "<div class=\"ant-btn-group ant-dropdown-button\" nz-dropdown>\n  <button nz-button\n    type=\"button\"\n    [disabled]=\"nzDisabled\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    (click)=\"nzClick.emit($event)\">\n    <span><ng-content></ng-content></span>\n  </button>\n  <button nz-button\n    type=\"button\"\n    class=\"ant-dropdown-trigger\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    [disabled]=\"nzDisabled\"\n    (click)=\"setVisibleStateWhen(true,'click')\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <ng-container *nzStringTemplateOutlet=\"nzIcon\"><i nz-icon [nzType]=\"nzIcon\"></i></ng-container>\n  </button>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\n  (backdropClick)=\"setVisibleStateWhen(false)\"\n  (detach)=\"setVisibleStateWhen(false)\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@slideMotion]=\"dropDownPosition\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <ng-content select=\"[nz-menu]\"></ng-content>\n  </div>\n</ng-template>",
                    styles: ["\n      nz-dropdown-button {\n        position: relative;\n        display: inline-block;\n      }\n\n      :root .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropDownButtonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropDownButtonComponent.propDecorators = {
        nzSize: [{ type: Input }],
        nzType: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzDropDownDirective: [{ type: ViewChild, args: [NzDropDownDirective, { static: true },] }]
    };
    return NzDropDownButtonComponent;
}(NzDropDownComponent));
export { NzDropDownButtonComponent };
if (false) {
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzType;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzIcon;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzClick;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzDropDownDirective;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.noAnimation;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJvcGRvd24vIiwic291cmNlcyI6WyJuei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGVBQWUsRUFDZixpQ0FBaUMsRUFDakMsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7U0FhakQsa0JBQWtCO0FBWHBDO0lBcUMrQyxxREFBbUI7SUFPaEUsbUNBQ0UsR0FBc0IsRUFDdEIscUJBQTRDLEVBQ2pCLFdBQW9DO1FBSGpFLFlBS0Usa0JBQU0sR0FBRyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxTQUkvQztRQU40QixpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFUeEQsWUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixZQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ25CLFlBQU0sR0FBK0IsVUFBVSxDQUFDO1FBQ3RDLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBUzFELGVBQWUsQ0FDYiwwSkFBMEosQ0FDM0osQ0FBQzs7SUFDSixDQUFDO0lBRUQsaUNBQWlDOzs7OztJQUNqQyxzREFBa0I7Ozs7SUFBbEI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkExREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDekIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1QscUJBQXFCO3dCQUNyQjs0QkFDRSxPQUFPLEVBQUUsaUNBQWlDOzRCQUMxQyxVQUFVLElBQW9COzRCQUM5QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7eUJBQy9CO3FCQUNGO29CQUNELG1uREFBa0Q7NkJBRWhELGtTQWNDO2lCQUVKOzs7O2dCQTVEQyxpQkFBaUI7Z0JBeUJWLHFCQUFxQjtnQkFMNUIsc0JBQXNCLHVCQXNEbkIsSUFBSSxZQUFJLFFBQVE7Ozt5QkFUbEIsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsTUFBTTtzQ0FDTixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQWlCbEQsZ0NBQUM7Q0FBQSxBQTNERCxDQXFDK0MsbUJBQW1CLEdBc0JqRTtTQXRCWSx5QkFBeUI7OztJQUNwQywyQ0FBNEI7O0lBQzVCLDJDQUE0Qjs7SUFDNUIsMkNBQXlEOztJQUN6RCw0Q0FBNEQ7O0lBQzVELHdEQUEyRjs7SUFLekYsZ0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBzbGlkZU1vdGlvbixcbiAgd2FybkRlcHJlY2F0aW9uLFxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgbWVudVNlcnZpY2VGYWN0b3J5LCBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24uZGlyZWN0aXZlJztcbmltcG9ydCB7IE56TWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZHJvcGRvd24tYnV0dG9uJyxcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duQnV0dG9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBOek1lbnVEcm9wZG93blNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXG4gICAgfVxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotZHJvcGRvd24tYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpyb290IC5hbnQtZHJvcGRvd24ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBOekRyb3Bkb3duRGlyZWN0aXZlYCBpbnN0ZWFkLCB3aWxsIHJlbW92ZSBpbiA5LjAuMC5cbiAqL1xuZXhwb3J0IGNsYXNzIE56RHJvcERvd25CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOekRyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuelNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICdlbGxpcHNpcyc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAVmlld0NoaWxkKE56RHJvcERvd25EaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIG56RHJvcERvd25EaXJlY3RpdmU6IE56RHJvcERvd25EaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBuek1lbnVEcm9wZG93blNlcnZpY2U6IE56TWVudURyb3Bkb3duU2VydmljZSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoY2RyLCBuek1lbnVEcm9wZG93blNlcnZpY2UsIG5vQW5pbWF0aW9uKTtcbiAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICBgJ256LWRyb3Bkb3duLWJ1dHRvbicgQ29tcG9uZW50IGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256LWRyb3Bkb3duLW1lbnUnIGluc3RlYWQuIFJlYWQgaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJvcGRvd24vZW5gXG4gICAgKTtcbiAgfVxuXG4gIC8qKiByZXdyaXRlIGFmdGVyVmlld0luaXQgaG9vayAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydFN1YnNjcmliZSh0aGlzLnZpc2libGUkKTtcbiAgfVxufVxuIl19