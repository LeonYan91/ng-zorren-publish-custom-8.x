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
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { warnDeprecation, InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
var iconTypeRE = /^anticon\-\w/;
/** @type {?} */
var getIconTypeClass = (/**
 * @param {?} className
 * @return {?}
 */
function (className) {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        var classArr = className.split(/\s/);
        /** @type {?} */
        var index = classArr.findIndex((/**
         * @param {?} cls
         * @return {?}
         */
        function (cls) { return cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE); }));
        return index === -1 ? undefined : { name: classArr[index], index: index };
    }
});
var ɵ0 = getIconTypeClass;
/** @type {?} */
var normalizeType = (/**
 * @param {?} rawType
 * @return {?}
 */
function (rawType) {
    /** @type {?} */
    var ret = { type: rawType, crossError: false, verticalError: false };
    ret.type = rawType ? rawType.replace('anticon-', '') : '';
    if (ret.type.includes('verticle')) {
        ret.type = 'up';
        ret.verticalError = true;
    }
    if (ret.type.startsWith('cross')) {
        ret.type = 'close';
        ret.crossError = true;
    }
    return ret;
});
var ɵ1 = normalizeType;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * \@break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
var NzIconDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconDirective, _super);
    function NzIconDirective(iconService, elementRef, renderer, platform) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.platform = platform;
        _this.nzRotate = 0;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         */
        _this.spin = false;
        _this.el = _this.elementRef.nativeElement;
        _this.destroy$ = new Subject();
        return _this;
    }
    Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.spin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.twoToneColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconfont = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.startsWith('anticon')) {
                /** @type {?} */
                var rawClass = getIconTypeClass(value);
                /** @type {?} */
                var type = rawClass ? normalizeType(rawClass.name).type : '';
                if (type && this.type !== type) {
                    this._type = type;
                }
            }
            else {
                this._type = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param oldAPI
     */
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    NzIconDirective.prototype.changeIcon2 = /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    function (oldAPI) {
        var _this = this;
        if (oldAPI === void 0) { oldAPI = false; }
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then((/**
         * @param {?} svg
         * @return {?}
         */
        function (svg) {
            _this.setSVGData(svg);
            if (!oldAPI && svg) {
                _this.handleSpin(svg);
                _this.handleRotate(svg);
            }
        }));
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    NzIconDirective.prototype.classChangeHandler = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        /** @type {?} */
        var ret = getIconTypeClass(className);
        if (ret) {
            var _a = normalizeType(ret.name), type = _a.type, crossError = _a.crossError, verticalError = _a.verticalError;
            if (crossError) {
                this.iconService.warnAPI('cross');
            }
            if (verticalError) {
                this.iconService.warnAPI('vertical');
            }
            if (this.type !== type) {
                this._type = type;
                this.changeIcon2(true);
            }
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleSpin = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleRotate = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzIconDirective.prototype.setClassName = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.type === 'string') {
            /** @type {?} */
            var iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            var ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, "anticon-" + this.type);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, "anticon-" + this.type);
            }
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.setSVGData = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (typeof this.type === 'string' && svg) {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzIconDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var type = changes.type, nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, twoToneColor = changes.twoToneColor, spin = changes.spin, nzSpin = changes.nzSpin, theme = changes.theme, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
        if (type && !nzType) {
            warnDeprecation("APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '" + type.currentValue + "'.");
        }
        if (type || nzType || nzTwotoneColor || twoToneColor || spin || nzSpin || theme || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
        if (type && !nzType) {
            warnDeprecation("APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '" + this.type + "'.");
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
        if (!this.type && this.el.classList.contains('anticon')) {
            this.iconService.warnAPI('old');
            // Get `type` from `className`. If not, initial rendering would be missed.
            this.classChangeHandler(this.el.className);
            if (this.platform.isBrowser) {
                // Add `class` mutation observer.
                this.classNameObserver = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                function (mutations) {
                    mutations
                        .filter((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    function (mutation) { return mutation.attributeName === 'class'; }))
                        .forEach((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    function (mutation) { return _this.classChangeHandler(((/** @type {?} */ (mutation.target))).className); }));
                }));
                this.classNameObserver.observe(this.el, { attributes: true });
            }
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
        }
        this.iconService.configUpdated$
            .asObservable()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.type) {
                _this.changeIcon2();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    NzIconDirective.prototype.ngAfterContentChecked = /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var children = this.el.children;
        /** @type {?} */
        var length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                var child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                }
            }
        }
    };
    NzIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'i.anticon, [nz-icon]',
                    exportAs: 'nzIcon'
                },] }
    ];
    /** @nocollapse */
    NzIconDirective.ctorParameters = function () { return [
        { type: NzIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: Platform }
    ]; };
    NzIconDirective.propDecorators = {
        nzSpin: [{ type: Input }],
        nzRotate: [{ type: Input }],
        nzType: [{ type: Input }],
        nzTheme: [{ type: Input }],
        nzTwotoneColor: [{ type: Input }],
        nzIconfont: [{ type: Input }],
        spin: [{ type: Input }],
        iconfont: [{ type: Input }],
        type: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], NzIconDirective.prototype, "nzSpin", null);
    return NzIconDirective;
}(IconDirective));
export { NzIconDirective };
if (false) {
    /** @type {?} */
    NzIconDirective.prototype.nzRotate;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.spin;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.iconfont;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.classNameObserver;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype._type;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.elementRef;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.platform;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBRTVDLFVBQVUsR0FBRyxjQUFjOztJQUUzQixnQkFBZ0I7Ozs7QUFBRyxVQUFDLFNBQWlCO0lBQ3pDLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNOztZQUNDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs7WUFDaEMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxjQUFjLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQXRFLENBQXNFLEVBQUM7UUFDL0csT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUss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RTs7b0JBQ1QsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsbUJBQUEsS0FBSyxFQUFjLENBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBdE5GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsUUFBUTtpQkFDbkI7Ozs7Z0JBM0NRLGFBQWE7Z0JBWnBCLFVBQVU7Z0JBS1YsU0FBUztnQkFURixRQUFROzs7eUJBNkRkLEtBQUs7MkJBTUwsS0FBSzt5QkFFTCxLQUFLOzBCQUlMLEtBQUs7aUNBSUwsS0FBSzs2QkFJTCxLQUFLO3VCQUtMLEtBQUs7MkJBR0wsS0FBSzt1QkFFTCxLQUFLOztJQTVCTjtRQURDLFlBQVksRUFBRTs7O2lEQUdkO0lBOE1ILHNCQUFDO0NBQUEsQUF2TkQsQ0FJcUMsYUFBYSxHQW1OakQ7U0FuTlksZUFBZTs7O0lBTzFCLG1DQUE4Qjs7Ozs7SUFtQjlCLCtCQUFzQjs7Ozs7SUFHdEIsbUNBQTBCOzs7OztJQW1CMUIsNENBQTRDOzs7OztJQUM1Qyw2QkFBMkM7Ozs7O0lBQzNDLG1DQUF1Qzs7Ozs7SUFDdkMsZ0NBQXNCOztJQXlFcEIsc0NBQWlDOztJQUNqQyxxQ0FBNkI7O0lBQzdCLG1DQUEwQjs7Ozs7SUFDMUIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25EaXJlY3RpdmUsIFRoZW1lVHlwZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJy4vbnotaWNvbi5zZXJ2aWNlJztcblxuY29uc3QgaWNvblR5cGVSRSA9IC9eYW50aWNvblxcLVxcdy87XG5cbmNvbnN0IGdldEljb25UeXBlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcpOiB7IG5hbWU6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9IHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNsYXNzQXJyID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcbiAgICBjb25zdCBpbmRleCA9IGNsYXNzQXJyLmZpbmRJbmRleChjbHMgPT4gY2xzICE9PSAnYW50aWNvbicgJiYgY2xzICE9PSAnYW50aWNvbi1zcGluJyAmJiAhIWNscy5tYXRjaChpY29uVHlwZVJFKSk7XG4gICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IHVuZGVmaW5lZCA6IHsgbmFtZTogY2xhc3NBcnJbaW5kZXhdLCBpbmRleCB9O1xuICB9XG59O1xuXG5jb25zdCBub3JtYWxpemVUeXBlID0gKHJhd1R5cGU6IHN0cmluZyk6IHsgdHlwZTogc3RyaW5nOyBjcm9zc0Vycm9yOiBib29sZWFuOyB2ZXJ0aWNhbEVycm9yOiBib29sZWFuIH0gPT4ge1xuICBjb25zdCByZXQgPSB7IHR5cGU6IHJhd1R5cGUsIGNyb3NzRXJyb3I6IGZhbHNlLCB2ZXJ0aWNhbEVycm9yOiBmYWxzZSB9O1xuICByZXQudHlwZSA9IHJhd1R5cGUgPyByYXdUeXBlLnJlcGxhY2UoJ2FudGljb24tJywgJycpIDogJyc7XG4gIGlmIChyZXQudHlwZS5pbmNsdWRlcygndmVydGljbGUnKSkge1xuICAgIHJldC50eXBlID0gJ3VwJztcbiAgICByZXQudmVydGljYWxFcnJvciA9IHRydWU7XG4gIH1cbiAgaWYgKHJldC50eXBlLnN0YXJ0c1dpdGgoJ2Nyb3NzJykpIHtcbiAgICByZXQudHlwZSA9ICdjbG9zZSc7XG4gICAgcmV0LmNyb3NzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSB0byBwcm92aWRlOlxuICpcbiAqIC0gSWNvbkZvbnQgc3VwcG9ydFxuICogLSBzcGlubmluZ1xuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHlcbiAqXG4gKiBAYnJlYWstY2hhbmdlc1xuICpcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5LCBpY29uIGNsYXNzIG5hbWVzIHdvdWxkIG5vdCBiZSBzdXBwb3J0ZWQuXG4gKiAtIHByb3BlcnRpZXMgdGhhdCBub3Qgc3RhcnRlZCB3aXRoIGBuemAuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2kuYW50aWNvbiwgW256LWljb25dJyxcbiAgZXhwb3J0QXM6ICduekljb24nXG59KVxuZXhwb3J0IGNsYXNzIE56SWNvbkRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHNldCBuelNwaW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNwaW4gPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIG56Um90YXRlOiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpIHNldCBuelR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudHlwZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IG56VGhlbWUodmFsdWU6IFRoZW1lVHlwZSkge1xuICAgIHRoaXMudGhlbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBuelR3b3RvbmVDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBuekljb25mb250KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25mb250ID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgOC4wLjAgYXZvaWQgZXhwb3NpbmcgbG93IGxheWVyIEFQSS4gKi9cbiAgQElucHV0KCkgc3BpbiA9IGZhbHNlO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xuICBASW5wdXQoKSBpY29uZm9udDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuc3RhcnRzV2l0aCgnYW50aWNvbicpKSB7XG4gICAgICBjb25zdCByYXdDbGFzcyA9IGdldEljb25UeXBlQ2xhc3ModmFsdWUpO1xuICAgICAgY29uc3QgdHlwZSA9IHJhd0NsYXNzID8gbm9ybWFsaXplVHlwZShyYXdDbGFzcy5uYW1lKS50eXBlIDogJyc7XG4gICAgICBpZiAodHlwZSAmJiB0aGlzLnR5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGFzc05hbWVPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlbWVudCBvZiBgY2hhbmdlSWNvbmAgZm9yIG1vcmUgbW9kaWZpY2F0aW9ucy5cbiAgICogQHBhcmFtIG9sZEFQSVxuICAgKi9cbiAgcHJpdmF0ZSBjaGFuZ2VJY29uMihvbGRBUEk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICghb2xkQVBJKSB7XG4gICAgICB0aGlzLnNldENsYXNzTmFtZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VJY29uKCkudGhlbihzdmcgPT4ge1xuICAgICAgdGhpcy5zZXRTVkdEYXRhKHN2Zyk7XG4gICAgICBpZiAoIW9sZEFQSSAmJiBzdmcpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTcGluKHN2Zyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKHN2Zyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsYXNzQ2hhbmdlSGFuZGxlcihjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJldCA9IGdldEljb25UeXBlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBjb25zdCB7IHR5cGUsIGNyb3NzRXJyb3IsIHZlcnRpY2FsRXJyb3IgfSA9IG5vcm1hbGl6ZVR5cGUocmV0Lm5hbWUpO1xuICAgICAgaWYgKGNyb3NzRXJyb3IpIHtcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdjcm9zcycpO1xuICAgICAgfVxuICAgICAgaWYgKHZlcnRpY2FsRXJyb3IpIHtcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCd2ZXJ0aWNhbCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudHlwZSAhPT0gdHlwZSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJY29uMih0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLnNwaW4gfHwgdGhpcy50eXBlID09PSAnbG9hZGluZycpICYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24tc3BpbicpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUm90YXRlKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56Um90YXRlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdzdHlsZScsIGB0cmFuc2Zvcm06IHJvdGF0ZSgke3RoaXMubnpSb3RhdGV9ZGVnKWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShzdmcsICdzdHlsZScpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NOYW1lKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgaWNvbkNsYXNzTmFtZUFyciA9IHRoaXMuZWwuY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcbiAgICAgIGNvbnN0IHJldCA9IGdldEljb25UeXBlQ2xhc3ModGhpcy5lbC5jbGFzc05hbWUpO1xuICAgICAgaWYgKHJldCkge1xuICAgICAgICBpY29uQ2xhc3NOYW1lQXJyLnNwbGljZShyZXQuaW5kZXgsIDEsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBpY29uQ2xhc3NOYW1lQXJyLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U1ZHRGF0YShzdmc6IFNWR0VsZW1lbnQgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnICYmIHN2Zykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZGF0YS1pY29uJywgdGhpcy50eXBlKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWNvblNlcnZpY2U6IE56SWNvblNlcnZpY2UsXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7XG4gICAgc3VwZXIoaWNvblNlcnZpY2UsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHR5cGUsIG56VHlwZSwgbnpUd290b25lQ29sb3IsIHR3b1RvbmVDb2xvciwgc3BpbiwgbnpTcGluLCB0aGVtZSwgbnpUaGVtZSwgbnpSb3RhdGUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAodHlwZSAmJiAhbnpUeXBlKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGBBUElzIGZvciBJY29uIHdpdGhvdXQgJ256JyBwcmVmaXggYXJlIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMCEgUGxlYXNlIGNoZWNrIGljb25zIHdpdGggdGhpcyB0eXBlOiAnJHt0eXBlLmN1cnJlbnRWYWx1ZX0nLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgfHwgbnpUeXBlIHx8IG56VHdvdG9uZUNvbG9yIHx8IHR3b1RvbmVDb2xvciB8fCBzcGluIHx8IG56U3BpbiB8fCB0aGVtZSB8fCBuelRoZW1lKSB7XG4gICAgICB0aGlzLmNoYW5nZUljb24yKCk7XG4gICAgfSBlbHNlIGlmIChuelJvdGF0ZSkge1xuICAgICAgdGhpcy5oYW5kbGVSb3RhdGUodGhpcy5lbC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLmljb25TZXJ2aWNlLmNyZWF0ZUljb25mb250SWNvbihgIyR7dGhpcy5pY29uZm9udH1gKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgJiYgIW56VHlwZSkge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgICBgQVBJcyBmb3IgSWNvbiB3aXRob3V0ICdueicgcHJlZml4IGFyZSBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAhIFBsZWFzZSBjaGVjayBpY29ucyB3aXRoIHRoaXMgdHlwZTogJyR7dGhpcy50eXBlfScuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJZiBgdGhpcy50eXBlYCBpcyBub3Qgc3BlY2lmaWVkIGFuZCBgY2xhc3NMaXN0YCBjb250YWlucyBgYW50aWNvbmAsIGl0IHNob3VsZCBiZSBhbiBpY29uIHVzaW5nIG9sZCBBUEkuXG4gICAgaWYgKCF0aGlzLnR5cGUgJiYgdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24nKSkge1xuICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdvbGQnKTtcbiAgICAgIC8vIEdldCBgdHlwZWAgZnJvbSBgY2xhc3NOYW1lYC4gSWYgbm90LCBpbml0aWFsIHJlbmRlcmluZyB3b3VsZCBiZSBtaXNzZWQuXG4gICAgICB0aGlzLmNsYXNzQ2hhbmdlSGFuZGxlcih0aGlzLmVsLmNsYXNzTmFtZSk7XG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgLy8gQWRkIGBjbGFzc2AgbXV0YXRpb24gb2JzZXJ2ZXIuXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICAgICAgbXV0YXRpb25zXG4gICAgICAgICAgICAuZmlsdGVyKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpXG4gICAgICAgICAgICAuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB0aGlzLmNsYXNzQ2hhbmdlSGFuZGxlcigobXV0YXRpb24udGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIGBjbGFzc0xpc3RgIGRvZXMgbm90IGNvbnRhaW4gYGFudGljb25gLCBhZGQgaXQgYmVmb3JlIG90aGVyIGNsYXNzIG5hbWVzLlxuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24nKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgYGFudGljb24gJHt0aGlzLmVsLmNsYXNzTmFtZX1gLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgdGhpcy5pY29uU2VydmljZS5jb25maWdVcGRhdGVkJFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSkge1xuICAgICAgICAgIHRoaXMuY2hhbmdlSWNvbjIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGFzc05hbWVPYnNlcnZlcikge1xuICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGN1c3RvbSBjb250ZW50IGlzIHByb3ZpZGVkLCB0cnkgdG8gbm9ybWFsaXplIFNWRyBlbGVtZW50cy5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAoIXRoaXMudHlwZSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2xlbmd0aF07XG4gICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgICAgdGhpcy5pY29uU2VydmljZS5ub3JtYWxpemVTdmdFbGVtZW50KGNoaWxkIGFzIFNWR0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=