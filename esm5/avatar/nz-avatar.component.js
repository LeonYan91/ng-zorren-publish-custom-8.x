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
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, NzUpdateHostClassService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'avatar';
var NzAvatarComponent = /** @class */ (function () {
    function NzAvatarComponent(nzConfigService, elementRef, cd, updateHostClassService, renderer, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.renderer = renderer;
        this.platform = platform;
        this.nzError = new EventEmitter();
        this.oldAPIIcon = true; // Make the user defined icon compatible to old API. Should be removed in 2.0.
        // Make the user defined icon compatible to old API. Should be removed in 2.0.
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    NzAvatarComponent.prototype.setClass = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[(/** @type {?} */ (this)).prefixCls] = true,
            _a[(/** @type {?} */ (this)).prefixCls + "-" + (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize]] = (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize],
            _a[(/** @type {?} */ (this)).prefixCls + "-" + (/** @type {?} */ (this)).nzShape] = (/** @type {?} */ (this)).nzShape,
            _a[(/** @type {?} */ (this)).prefixCls + "-icon"] = (/** @type {?} */ (this)).nzIcon,
            _a[(/** @type {?} */ (this)).prefixCls + "-image"] = (/** @type {?} */ (this)).hasSrc // downgrade after image error
        ,
            _a);
        (/** @type {?} */ (this)).updateHostClassService.updateHostClass((/** @type {?} */ (this)).el, classMap);
        (/** @type {?} */ (this)).cd.detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzAvatarComponent.prototype.imgError = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.setClass().notifyCalc();
            this.setSizeStyle();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAvatarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzIcon') && changes.nzIcon.currentValue) {
            this.oldAPIIcon = changes.nzIcon.currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.calcStringSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        var avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: "scale(" + scale + ") translateX(-50%)"
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: this.nzSize + "px"
            });
        }
        this.cd.detectChanges();
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    NzAvatarComponent.prototype.notifyCalc = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        if ((/** @type {?} */ (this)).platform.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                (/** @type {?} */ (_this)).calcStringSize();
            }));
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.setSizeStyle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var size = typeof this.nzSize === 'string' ? this.nzSize : this.nzSize + "px";
        this.renderer.setStyle(this.el, 'width', size);
        this.renderer.setStyle(this.el, 'height', size);
        this.renderer.setStyle(this.el, 'line-height', size);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', "calc(" + size + " / 2)");
        }
    };
    NzAvatarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-avatar',
                    exportAs: 'nzAvatar',
                    template: "<i nz-icon *ngIf=\"nzIcon && hasIcon\" [nzType]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n<img *ngIf=\"nzSrc && hasSrc\" [src]=\"nzSrc\" [attr.srcset]=\"nzSrcSet\" [attr.alt]=\"nzAlt\" (error)=\"imgError($event)\"/>\n<span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>\n",
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzAvatarComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService },
        { type: Renderer2 },
        { type: Platform }
    ]; };
    NzAvatarComponent.propDecorators = {
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzText: [{ type: Input }],
        nzSrc: [{ type: Input }],
        nzSrcSet: [{ type: Input }],
        nzAlt: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzError: [{ type: Output }],
        textEl: [{ type: ViewChild, args: ['textEl', { static: false },] }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'circle'),
        tslib_1.__metadata("design:type", String)
    ], NzAvatarComponent.prototype, "nzShape", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", Object)
    ], NzAvatarComponent.prototype, "nzSize", void 0);
    return NzAvatarComponent;
}());
export { NzAvatarComponent };
if (false) {
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrcSet;
    /** @type {?} */
    NzAvatarComponent.prototype.nzAlt;
    /** @type {?} */
    NzAvatarComponent.prototype.nzIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.nzError;
    /** @type {?} */
    NzAvatarComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.sizeMap;
    /** @type {?} */
    NzAvatarComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsibnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsZUFBZSxFQUlmLHdCQUF3QixFQUN4QixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFdEIsd0JBQXdCLEdBQUcsUUFBUTtBQUV6QztJQStCRSwyQkFDUyxlQUFnQyxFQUMvQixVQUFzQixFQUN0QixFQUFxQixFQUNyQixzQkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsUUFBa0I7UUFMbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFwQlQsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFFdkQsZUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLDhFQUE4RTs7UUFDakcsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFLakIsT0FBRSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLFlBQU8sR0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0lBU3ZELENBQUM7Ozs7OztJQUVKLG9DQUFROzs7OztJQUFSOzs7WUFDUSxRQUFRO1lBQ1osR0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLElBQUcsSUFBSTtZQUN0QixHQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLFNBQVMsU0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxDQUFHLElBQUcsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBQSxDQUFDLE1BQU0sQ0FBQztZQUM3RSxHQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLFNBQVMsU0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFTLElBQUcsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTztZQUNuRCxHQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLFNBQVMsVUFBTyxJQUFHLG1CQUFBLElBQUksRUFBQSxDQUFDLE1BQU07WUFDdkMsR0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLFdBQVEsSUFBRyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLENBQUMsOEJBQThCOztlQUN4RTtRQUNELG1CQUFBLElBQUksRUFBQSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELG9DQUFROzs7O0lBQVIsVUFBUyxNQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ25FLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sMENBQWM7Ozs7SUFBdEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPO1NBQ1I7O1lBRUssYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVc7O1lBQ3JELFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSzs7WUFDbkQsS0FBSyxHQUFHLFdBQVcsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixTQUFTLEVBQUUsV0FBUyxLQUFLLHVCQUFvQjtTQUM5QyxDQUFDO1FBQ0YsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDN0IsVUFBVSxFQUFLLElBQUksQ0FBQyxNQUFNLE9BQUk7YUFDL0IsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7SUFFTyxzQ0FBVTs7Ozs7O0lBQWxCO1FBQUEsaUJBUUM7UUFQQyx3RUFBd0U7UUFDeEUsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLFVBQVU7OztZQUFDO2dCQUNULG1CQUFBLEtBQUksRUFBQSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTyx3Q0FBWTs7OztJQUFwQjs7WUFDUSxJQUFJLEdBQUcsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUksSUFBSSxDQUFDLE1BQU0sT0FBSTtRQUMvRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsVUFBUSxJQUFJLFVBQU8sQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7Z0JBdEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGtYQUF5QztvQkFDekMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBbEJDLGVBQWU7Z0JBWmYsVUFBVTtnQkFGVixpQkFBaUI7Z0JBa0JqQix3QkFBd0I7Z0JBWHhCLFNBQVM7Z0JBVkYsUUFBUTs7OzBCQXFDZCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLE1BQU07eUJBUU4sU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBZm1CO1FBQS9DLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUM7O3NEQUF3QjtJQUN0QjtRQUFoRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDOztxREFBZ0M7SUE0RzNGLHdCQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0E5R1ksaUJBQWlCOzs7SUFDNUIsb0NBQWdGOztJQUNoRixtQ0FBeUY7O0lBQ3pGLG1DQUF3Qjs7SUFDeEIsa0NBQXVCOztJQUN2QixxQ0FBMEI7O0lBQzFCLGtDQUF1Qjs7SUFDdkIsbUNBQXdCOztJQUN4QixvQ0FBdUQ7O0lBRXZELHVDQUFrQjs7SUFDbEIsb0NBQXlCOztJQUN6QixtQ0FBdUI7O0lBQ3ZCLG9DQUF5Qjs7SUFDekIsdUNBQWU7O0lBRWYsbUNBQTJEOzs7OztJQUUzRCwrQkFBd0Q7Ozs7O0lBQ3hELHNDQUFpQzs7Ozs7SUFDakMsb0NBQTBEOztJQUd4RCw0Q0FBdUM7Ozs7O0lBQ3ZDLHVDQUE4Qjs7Ozs7SUFDOUIsK0JBQTZCOzs7OztJQUM3QixtREFBd0Q7Ozs7O0lBQ3hELHFDQUEyQjs7Ozs7SUFDM0IscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56U2hhcGVTQ1R5cGUsXG4gIE56U2l6ZUxEU1R5cGUsXG4gIE56U2l6ZU1hcCxcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhdmF0YXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hdmF0YXInLFxuICBleHBvcnRBczogJ256QXZhdGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWF2YXRhci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOekF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2NpcmNsZScpIG56U2hhcGU6IE56U2hhcGVTQ1R5cGU7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgfCBudW1iZXI7XG4gIEBJbnB1dCgpIG56VGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBuelNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBuelNyY1NldDogc3RyaW5nO1xuICBASW5wdXQoKSBuekFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBuekljb246IHN0cmluZztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gIG9sZEFQSUljb24gPSB0cnVlOyAvLyBNYWtlIHRoZSB1c2VyIGRlZmluZWQgaWNvbiBjb21wYXRpYmxlIHRvIG9sZCBBUEkuIFNob3VsZCBiZSByZW1vdmVkIGluIDIuMC5cbiAgaGFzVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBoYXNTcmM6IGJvb2xlYW4gPSB0cnVlO1xuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIHRleHRTdHlsZXM6IHt9O1xuXG4gIEBWaWV3Q2hpbGQoJ3RleHRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0RWw6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWF2YXRhcic7XG4gIHByaXZhdGUgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgc2V0Q2xhc3MoKTogdGhpcyB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuc2l6ZU1hcFt0aGlzLm56U2l6ZV19YF06IHRoaXMuc2l6ZU1hcFt0aGlzLm56U2l6ZV0sXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNoYXBlfWBdOiB0aGlzLm56U2hhcGUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25gXTogdGhpcy5uekljb24sXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWltYWdlYF06IHRoaXMuaGFzU3JjIC8vIGRvd25ncmFkZSBhZnRlciBpbWFnZSBlcnJvclxuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbWdFcnJvcigkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uekVycm9yLmVtaXQoJGV2ZW50KTtcbiAgICBpZiAoISRldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICB0aGlzLmhhc1NyYyA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNJY29uID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc1RleHQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm56SWNvbikge1xuICAgICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm56VGV4dCkge1xuICAgICAgICB0aGlzLmhhc1RleHQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcbiAgICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekljb24nKSAmJiBjaGFuZ2VzLm56SWNvbi5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IGNoYW5nZXMubnpJY29uLmN1cnJlbnRWYWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPiAtMTtcbiAgICB9XG4gICAgdGhpcy5oYXNUZXh0ID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56VGV4dDtcbiAgICB0aGlzLmhhc0ljb24gPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpJY29uO1xuICAgIHRoaXMuaGFzU3JjID0gISF0aGlzLm56U3JjO1xuXG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcbiAgICB0aGlzLnNldFNpemVTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjU3RyaW5nU2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzVGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuV2lkdGggPSB0aGlzLnRleHRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGF2YXRhcldpZHRoID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBzY2FsZSA9IGF2YXRhcldpZHRoIC0gOCA8IGNoaWxkcmVuV2lkdGggPyAoYXZhdGFyV2lkdGggLSA4KSAvIGNoaWxkcmVuV2lkdGggOiAxO1xuICAgIHRoaXMudGV4dFN0eWxlcyA9IHtcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGV9KSB0cmFuc2xhdGVYKC01MCUpYFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy50ZXh0U3R5bGVzLCB7XG4gICAgICAgIGxpbmVIZWlnaHQ6IGAke3RoaXMubnpTaXplfXB4YFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlDYWxjKCk6IHRoaXMge1xuICAgIC8vIElmIHVzZSBuZ0FmdGVyVmlld0NoZWNrZWQsIGFsd2F5cyBkZW1hbmRzIG1vcmUgY29tcHV0YXRpb25zLCBzby4uLi4uLlxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FsY1N0cmluZ1NpemUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2l6ZVN0eWxlKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpemUgPSB0eXBlb2YgdGhpcy5uelNpemUgPT09ICdzdHJpbmcnID8gdGhpcy5uelNpemUgOiBgJHt0aGlzLm56U2l6ZX1weGA7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCBzaXplKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdoZWlnaHQnLCBzaXplKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsaW5lLWhlaWdodCcsIHNpemUpO1xuICAgIGlmICh0aGlzLmhhc0ljb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2ZvbnQtc2l6ZScsIGBjYWxjKCR7c2l6ZX0gLyAyKWApO1xuICAgIH1cbiAgfVxufVxuIl19