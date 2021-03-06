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
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseDirective } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
var NzPopconfirmDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmDirective, _super);
    function NzPopconfirmDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        _this.nzTrigger = 'click';
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        _this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition',
            'nzIcon'
        ];
        return _this;
    }
    /**
     * @override
     */
    /**
     * @override
     * @protected
     * @return {?}
     */
    NzPopconfirmDirective.prototype.createDynamicTooltipComponent = /**
     * @override
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.createDynamicTooltipComponent.call(this);
        ((/** @type {?} */ (this.tooltip))).nzOnCancel.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzOnCancel.emit();
        }));
        ((/** @type {?} */ (this.tooltip))).nzOnConfirm.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzOnConfirm.emit();
        }));
    };
    NzPopconfirmDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popconfirm]',
                    exportAs: 'nzPopconfirm',
                    host: {
                        '[class.ant-popover-open]': 'isTooltipComponentVisible'
                    }
                },] }
    ];
    /** @nocollapse */
    NzPopconfirmDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopconfirmComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopconfirmDirective.propDecorators = {
        specificTitle: [{ type: Input, args: ['nzPopconfirmTitle',] }],
        directiveNameTitle: [{ type: Input, args: ['nz-popconfirm',] }],
        specificTrigger: [{ type: Input, args: ['nzPopconfirmTrigger',] }],
        specificPlacement: [{ type: Input, args: ['nzPopconfirmPlacement',] }],
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzPopconfirmDirective.prototype, "nzCondition", void 0);
    return NzPopconfirmDirective;
}(NzTooltipBaseDirective));
export { NzPopconfirmDirective };
if (false) {
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCondition;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzPopconfirmDirective.prototype.nzTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzPopconfirmDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFvQixNQUFNLHVCQUF1QixDQUFDO0FBRWpGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFO0lBTzJDLGlEQUFzQjtJQXFDL0QsK0JBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUE4QixFQUNmLFdBQW9DO1FBTmpFLFlBUUUsa0JBQU0sVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsU0FDdEU7UUFINEIsaUJBQVcsR0FBWCxXQUFXLENBQXlCOzs7OztRQTVCeEQsZUFBUyxHQUFxQixPQUFPLENBQUM7UUFFNUIsZ0JBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RDLGlCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUxRCxzQkFBZ0IsR0FBNEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDL0YscUJBQXFCLENBQ3RCLENBQUM7UUFFUSx5QkFBbUIsR0FBRztZQUM5QixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFVBQVU7WUFDVixVQUFVO1lBQ1YsY0FBYztZQUNkLGFBQWE7WUFDYixRQUFRO1NBQ1QsQ0FBQzs7SUFXRixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNPLDZEQUE2Qjs7Ozs7SUFBdkM7UUFBQSxpQkFTQztRQVJDLGlCQUFNLDZCQUE2QixXQUFFLENBQUM7UUFFdEMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUF5QixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDMUYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztRQUNILENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBeUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQzNGLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixJQUFJLEVBQUU7d0JBQ0osMEJBQTBCLEVBQUUsMkJBQTJCO3FCQUN4RDtpQkFDRjs7OztnQkF6QkMsVUFBVTtnQkFTVixnQkFBZ0I7Z0JBWGhCLHdCQUF3QjtnQkFTeEIsU0FBUztnQkFVRixxQkFBcUIsdUJBbUR6QixRQUFRO2dCQXREVSxzQkFBc0IsdUJBdUR4QyxJQUFJLFlBQUksUUFBUTs7O2dDQTFDbEIsS0FBSyxTQUFDLG1CQUFtQjtxQ0FDekIsS0FBSyxTQUFDLGVBQWU7a0NBQ3JCLEtBQUssU0FBQyxxQkFBcUI7b0NBQzNCLEtBQUssU0FBQyx1QkFBdUI7MkJBQzdCLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFNTCxLQUFLOzZCQUVMLE1BQU07OEJBQ04sTUFBTTs7SUFUa0I7UUFBZixZQUFZLEVBQUU7OzhEQUFzQjtJQW9EaEQsNEJBQUM7Q0FBQSxBQXBFRCxDQU8yQyxzQkFBc0IsR0E2RGhFO1NBN0RZLHFCQUFxQjs7O0lBQ2hDLDhDQUFvRDs7SUFDcEQsbURBQTREOztJQUM1RCxnREFBZ0U7O0lBQ2hFLGtEQUEwRDs7SUFDMUQseUNBQTBCOztJQUMxQix5Q0FBMEI7O0lBQzFCLDZDQUE4Qjs7SUFDOUIsdUNBQTRDOztJQUM1Qyw0Q0FBOEM7Ozs7OztJQU05QywwQ0FBK0M7O0lBRS9DLDJDQUF5RDs7SUFDekQsNENBQTBEOztJQUUxRCxpREFFRTs7Ozs7SUFFRixvREFXRTs7SUFRQSw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsIE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBOelBvcGNvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL256LXBvcGNvbmZpcm0uY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXBvcGNvbmZpcm1dJyxcbiAgZXhwb3J0QXM6ICduelBvcGNvbmZpcm0nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcG9wb3Zlci1vcGVuXSc6ICdpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UG9wY29uZmlybURpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ256UG9wY29uZmlybVRpdGxlJykgc3BlY2lmaWNUaXRsZTogTnpUU1R5cGU7XG4gIEBJbnB1dCgnbnotcG9wY29uZmlybScpIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xuICBASW5wdXQoJ256UG9wY29uZmlybVRyaWdnZXInKSBzcGVjaWZpY1RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtUGxhY2VtZW50Jykgc3BlY2lmaWNQbGFjZW1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpPa1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpPa1R5cGU6IHN0cmluZztcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbmRpdGlvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBUcmlnZ2VyYC5cbiAgICovXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdjbGljayc7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wY29uZmlybUNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgIE56UG9wY29uZmlybUNvbXBvbmVudFxuICApO1xuXG4gIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzID0gW1xuICAgICduek92ZXJsYXlDbGFzc05hbWUnLFxuICAgICduek92ZXJsYXlTdHlsZScsXG4gICAgJ256TW91c2VFbnRlckRlbGF5JyxcbiAgICAnbnpNb3VzZUxlYXZlRGVsYXknLFxuICAgICduelZpc2libGUnLFxuICAgICduek9rVGV4dCcsXG4gICAgJ256T2tUeXBlJyxcbiAgICAnbnpDYW5jZWxUZXh0JyxcbiAgICAnbnpDb25kaXRpb24nLFxuICAgICduekljb24nXG4gIF07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgdG9vbHRpcDogTnpQb3Bjb25maXJtQ29tcG9uZW50LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0b29sdGlwLCBub0FuaW1hdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlRHluYW1pY1Rvb2x0aXBDb21wb25lbnQoKTogdm9pZCB7XG4gICAgc3VwZXIuY3JlYXRlRHluYW1pY1Rvb2x0aXBDb21wb25lbnQoKTtcblxuICAgICh0aGlzLnRvb2x0aXAgYXMgTnpQb3Bjb25maXJtQ29tcG9uZW50KS5uek9uQ2FuY2VsLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uek9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9KTtcbiAgICAodGhpcy50b29sdGlwIGFzIE56UG9wY29uZmlybUNvbXBvbmVudCkubnpPbkNvbmZpcm0ucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm56T25Db25maXJtLmVtaXQoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19