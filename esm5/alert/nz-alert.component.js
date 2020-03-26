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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { slideAlertMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'alert';
var NzAlertComponent = /** @class */ (function () {
    function NzAlertComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzType = 'info';
        this.nzBanner = false;
        this.nzOnClose = new EventEmitter();
        this.destroy = false;
        this.iconTheme = 'fill';
        this.isIconTypeObject = false;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.inferredIconType = 'info-circle';
    }
    Object.defineProperty(NzAlertComponent.prototype, "iconType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzIconType || this.inferredIconType;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.destroy = true;
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.destroy) {
            this.nzOnClose.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.updateIconClassMap = /**
     * @return {?}
     */
    function () {
        switch (this.nzType) {
            case 'error':
                this.inferredIconType = 'close-circle';
                break;
            case 'success':
                this.inferredIconType = 'check-circle';
                break;
            case 'info':
                this.inferredIconType = 'info-circle';
                break;
            case 'warning':
                this.inferredIconType = 'exclamation-circle';
                break;
        }
        this.iconTheme = this.nzDescription ? 'outline' : 'fill';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner, nzIconType = changes.nzIconType;
        if (nzShowIcon) {
            this.isShowIconSet = true;
        }
        if (nzDescription || nzType) {
            this.updateIconClassMap();
        }
        if (nzType) {
            this.isTypeSet = true;
        }
        if (nzBanner) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
        if (nzIconType) {
            this.isIconTypeObject = typeof nzIconType.currentValue === 'object';
        }
    };
    NzAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-alert',
                    exportAs: 'nzAlert',
                    animations: [slideAlertMotion],
                    template: "<div *ngIf=\"!destroy\"\n  class=\"ant-alert\"\n  [class.ant-alert-success]=\"nzType === 'success'\"\n  [class.ant-alert-info]=\"nzType === 'info'\"\n  [class.ant-alert-warning]=\"nzType === 'warning'\"\n  [class.ant-alert-error]=\"nzType === 'error'\"\n  [class.ant-alert-no-icon]=\"!nzShowIcon\"\n  [class.ant-alert-banner]=\"nzBanner\"\n  [class.ant-alert-closable]=\"nzCloseable\"\n  [class.ant-alert-with-description]=\"!!nzDescription\"\n  [@slideAlertMotion]\n  (@slideAlertMotion.done)=\"onFadeAnimationDone()\">\n  <ng-container *ngIf=\"nzShowIcon\">\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"isIconTypeObject; else iconTemplate\"></i>\n    <ng-template #iconTemplate>\n      <i nz-icon class=\"ant-alert-icon\" [nzType]=\"iconType\" [nzTheme]=\"iconTheme\"></i>\n    </ng-template>\n  </ng-container>\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n    <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\n  </span>\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </span>\n  <a *ngIf=\"nzCloseable || nzCloseText\"\n    class=\"ant-alert-close-icon\"\n    (click)=\"closeAlert()\">\n    <ng-template #closeDefaultTemplate>\n      <i nz-icon nzType=\"close\"></i>\n    </ng-template>\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n      <ng-container *nzStringTemplateOutlet=\"nzCloseText\">{{ nzCloseText }}</ng-container>\n    </ng-container>\n  </a>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: ["\n      nz-alert {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAlertComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    NzAlertComponent.propDecorators = {
        nzCloseText: [{ type: Input }],
        nzIconType: [{ type: Input }],
        nzMessage: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzType: [{ type: Input }],
        nzCloseable: [{ type: Input }],
        nzShowIcon: [{ type: Input }],
        nzBanner: [{ type: Input }],
        nzOnClose: [{ type: Output }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzCloseable", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzBanner", void 0);
    return NzAlertComponent;
}());
export { NzAlertComponent };
if (false) {
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseText;
    /** @type {?} */
    NzAlertComponent.prototype.nzIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzMessage;
    /** @type {?} */
    NzAlertComponent.prototype.nzDescription;
    /** @type {?} */
    NzAlertComponent.prototype.nzType;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseable;
    /** @type {?} */
    NzAlertComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzAlertComponent.prototype.nzBanner;
    /** @type {?} */
    NzAlertComponent.prototype.nzOnClose;
    /** @type {?} */
    NzAlertComponent.prototype.destroy;
    /** @type {?} */
    NzAlertComponent.prototype.iconTheme;
    /** @type {?} */
    NzAlertComponent.prototype.isIconTypeObject;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isTypeSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isShowIconSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.inferredIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbGVydC8iLCJzb3VyY2VzIjpbIm56LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBRXhHLHdCQUF3QixHQUFHLE9BQU87QUFFeEM7SUF1Q0UsMEJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWxCMUMsV0FBTSxHQUE2QyxNQUFNLENBQUM7UUFHMUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQU0zRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIscUJBQWdCLEdBQVcsYUFBYSxDQUFDO0lBRUssQ0FBQztJQVp2RCxzQkFBSSxzQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTs7OztJQVlELHFDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw4Q0FBbUI7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsU0FB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QUVyQywyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNsaWRlQWxlcnRNb3Rpb24sIElucHV0Qm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhbGVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWFsZXJ0JyxcbiAgZXhwb3J0QXM6ICduekFsZXJ0JyxcbiAgYW5pbWF0aW9uczogW3NsaWRlQWxlcnRNb3Rpb25dLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWFsZXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuekNsb3NlVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56SWNvblR5cGU6IE5nQ2xhc3NUeXBlO1xuICBASW5wdXQoKSBuek1lc3NhZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpUeXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InID0gJ2luZm8nO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zZWFibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJY29uOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCYW5uZXIgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBnZXQgaWNvblR5cGUoKTogTmdDbGFzc1R5cGUge1xuICAgIHJldHVybiB0aGlzLm56SWNvblR5cGUgfHwgdGhpcy5pbmZlcnJlZEljb25UeXBlO1xuICB9XG5cbiAgZGVzdHJveSA9IGZhbHNlO1xuICBpY29uVGhlbWUgPSAnZmlsbCc7XG4gIGlzSWNvblR5cGVPYmplY3QgPSBmYWxzZTtcblxuICBwcml2YXRlIGlzVHlwZVNldCA9IGZhbHNlO1xuICBwcml2YXRlIGlzU2hvd0ljb25TZXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbmZlcnJlZEljb25UeXBlOiBzdHJpbmcgPSAnaW5mby1jaXJjbGUnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cblxuICBjbG9zZUFsZXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XG4gIH1cblxuICBvbkZhZGVBbmltYXRpb25Eb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlc3Ryb3kpIHtcbiAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSWNvbkNsYXNzTWFwKCk6IHZvaWQge1xuICAgIHN3aXRjaCAodGhpcy5uelR5cGUpIHtcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2Nsb3NlLWNpcmNsZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdjaGVjay1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnaW5mby1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnZXhjbGFtYXRpb24tY2lyY2xlJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuaWNvblRoZW1lID0gdGhpcy5uekRlc2NyaXB0aW9uID8gJ291dGxpbmUnIDogJ2ZpbGwnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpTaG93SWNvbiwgbnpEZXNjcmlwdGlvbiwgbnpUeXBlLCBuekJhbm5lciwgbnpJY29uVHlwZSB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuelNob3dJY29uKSB7XG4gICAgICB0aGlzLmlzU2hvd0ljb25TZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuekRlc2NyaXB0aW9uIHx8IG56VHlwZSkge1xuICAgICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgICB9XG5cbiAgICBpZiAobnpUeXBlKSB7XG4gICAgICB0aGlzLmlzVHlwZVNldCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG56QmFubmVyKSB7XG4gICAgICBpZiAoIXRoaXMuaXNUeXBlU2V0KSB7XG4gICAgICAgIHRoaXMubnpUeXBlID0gJ3dhcm5pbmcnO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmlzU2hvd0ljb25TZXQpIHtcbiAgICAgICAgdGhpcy5uelNob3dJY29uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobnpJY29uVHlwZSkge1xuICAgICAgdGhpcy5pc0ljb25UeXBlT2JqZWN0ID0gdHlwZW9mIG56SWNvblR5cGUuY3VycmVudFZhbHVlID09PSAnb2JqZWN0JztcbiAgICB9XG4gIH1cbn1cbiJdfQ==