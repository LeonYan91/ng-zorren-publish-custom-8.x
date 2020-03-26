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
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { getStyleAsText, shallowEqual, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
import { isTargetWindow } from './utils';
/**
 * @record
 */
function SimpleRect() { }
if (false) {
    /** @type {?} */
    SimpleRect.prototype.top;
    /** @type {?} */
    SimpleRect.prototype.left;
    /** @type {?|undefined} */
    SimpleRect.prototype.width;
    /** @type {?|undefined} */
    SimpleRect.prototype.height;
    /** @type {?|undefined} */
    SimpleRect.prototype.bottom;
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'affix';
/** @type {?} */
var NZ_AFFIX_CLS_PREFIX = 'ant-affix';
/** @type {?} */
var NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
/** @type {?} */
var NZ_AFFIX_RESPOND_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
var NzAffixComponent = /** @class */ (function () {
    function NzAffixComponent(el, doc, // tslint:disable-line no-any
    nzConfigService, scrollSrv, ngZone, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzChange = new EventEmitter();
        this.scroll$ = Subscription.EMPTY;
        // The wrapper would stay at the original position as a placeholder.
        this.placeholderNode = el.nativeElement;
        this.document = doc;
    }
    Object.defineProperty(NzAffixComponent.prototype, "target", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = this.nzTarget;
            return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOffsetBottom = changes.nzOffsetBottom, nzOffsetTop = changes.nzOffsetTop, nzTarget = changes.nzTarget;
        if (nzOffsetBottom || nzOffsetTop) {
            this.updatePosition((/** @type {?} */ ({})));
        }
        if (nzTarget) {
            this.registerListeners();
        }
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerListeners();
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListeners();
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.registerListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListeners();
        this.scroll$ = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread(NZ_AFFIX_RESPOND_EVENTS.map((/**
             * @param {?} evName
             * @return {?}
             */
            function (evName) { return fromEvent(_this.target, evName); })))).pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.updatePosition(e); }));
        }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () { return _this.updatePosition((/** @type {?} */ ({}))); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.removeListeners = /**
     * @private
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
        this.scroll$.unsubscribe();
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getOffset = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elemRect = element.getBoundingClientRect();
        /** @type {?} */
        var targetRect = this.getTargetRect((/** @type {?} */ (target)));
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        var docElem = this.document.body;
        /** @type {?} */
        var clientTop = docElem.clientTop || 0;
        /** @type {?} */
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getTargetRect = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return !isTargetWindow(target)
            ? target.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: 0
            };
    };
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setAffixStyle = /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    function (e, affixStyle) {
        /** @type {?} */
        var originalAffixStyle = this.affixStyle;
        /** @type {?} */
        var isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        var fixed = !!affixStyle;
        /** @type {?} */
        var wrapEl = this.fixedEl.nativeElement;
        wrapEl.style.cssText = getStyleAsText(affixStyle);
        this.affixStyle = affixStyle;
        if (fixed) {
            wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
        }
        else {
            wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    };
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setPlaceholderStyle = /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    function (placeholderStyle) {
        /** @type {?} */
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = getStyleAsText(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.syncPlaceholderStyle = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        /** @type {?} */
        var styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, styleObj));
        this.setPlaceholderStyle(styleObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.updatePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var targetNode = this.target;
        /** @type {?} */
        var offsetTop = this.nzOffsetTop;
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        var elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        var fixedNode = this.fixedEl.nativeElement;
        /** @type {?} */
        var elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        var offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this.nzOffsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this.nzOffsetBottom === 'number';
        }
        /** @type {?} */
        var targetRect = this.getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        var targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            var width = elemOffset.width;
            /** @type {?} */
            var top_1 = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top: top_1,
                left: targetRect.left + elemOffset.left,
                maxHeight: "calc(100vh - " + top_1 + "px)",
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this.nzOffsetBottom))) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - (/** @type {?} */ (targetRect.bottom));
            /** @type {?} */
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + ((/** @type {?} */ (this.nzOffsetBottom))),
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    };
    NzAffixComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-affix',
                    exportAs: 'nzAffix',
                    template: "<div #fixedEl>\n  <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      nz-affix {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAffixComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NzConfigService },
        { type: NzScrollService },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzAffixComponent.propDecorators = {
        fixedEl: [{ type: ViewChild, args: ['fixedEl', { static: true },] }],
        nzTarget: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzOffsetBottom: [{ type: Input }],
        nzChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 0),
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzAffixComponent.prototype, "nzOffsetTop", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, null),
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
    return NzAffixComponent;
}());
export { NzAffixComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.fixedEl;
    /** @type {?} */
    NzAffixComponent.prototype.nzTarget;
    /** @type {?} */
    NzAffixComponent.prototype.nzOffsetTop;
    /** @type {?} */
    NzAffixComponent.prototype.nzOffsetBottom;
    /** @type {?} */
    NzAffixComponent.prototype.nzChange;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderNode;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.affixStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.timeout;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.document;
    /** @type {?} */
    NzAffixComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFlBQVksRUFDWixXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBRXpDLHlCQU1DOzs7SUFMQyx5QkFBWTs7SUFDWiwwQkFBYTs7SUFDYiwyQkFBZTs7SUFDZiw0QkFBZ0I7O0lBQ2hCLDRCQUFnQjs7O0lBR1osd0JBQXdCLEdBQUcsT0FBTzs7SUFDbEMsbUJBQW1CLEdBQUcsV0FBVzs7SUFDakMsNEJBQTRCLEdBQUcsRUFBRTs7SUFDakMsdUJBQXVCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7QUFFL0c7SUE0Q0UsMEJBQ0UsRUFBYyxFQUNJLEdBQVEsRUFBRSw2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QVM7b0JBQ25CLGlFQUF3QztvQkFDeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBUS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzZCQU5uQyw0REFJQztpQkFHSjs7OztnQkFwREMsVUFBVTtnREFxRlAsTUFBTSxTQUFDLFFBQVE7Z0JBakVsQixlQUFlO2dCQUNmLGVBQWU7Z0JBakJmLE1BQU07Z0JBVkMsUUFBUTs7OzBCQTREZCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFckMsS0FBSzs4QkFFTCxLQUFLO2lDQUtMLEtBQUs7MkJBS0wsTUFBTTs7SUFQUDtRQUZDLFVBQVUsQ0FBZ0Isd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsRUFBRTs7eURBQ2E7SUFLM0I7UUFGQyxVQUFVLENBQWdCLHdCQUF3QixFQUFFLElBQUksQ0FBQztRQUN6RCxXQUFXLEVBQUU7OzREQUNnQjtJQStOaEMsdUJBQUM7Q0FBQSxBQTFQRCxJQTBQQztTQTVPWSxnQkFBZ0I7Ozs7OztJQUMzQixtQ0FBb0Y7O0lBRXBGLG9DQUE2Qzs7SUFFN0MsdUNBRzJCOztJQUUzQiwwQ0FHOEI7O0lBRTlCLG9DQUEwRDs7Ozs7SUFFMUQsMkNBQThDOzs7OztJQUU5QyxzQ0FBc0M7Ozs7O0lBQ3RDLDRDQUE0Qzs7Ozs7SUFDNUMsbUNBQW1EOzs7OztJQUNuRCxtQ0FBeUI7Ozs7O0lBQ3pCLG9DQUEyQjs7SUFVekIsMkNBQXVDOzs7OztJQUN2QyxxQ0FBa0M7Ozs7O0lBQ2xDLGtDQUFzQjs7Ozs7SUFDdEIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIGdldFN0eWxlQXNUZXh0LFxuICBzaGFsbG93RXF1YWwsXG4gIElucHV0TnVtYmVyLFxuICBOZ1N0eWxlSW50ZXJmYWNlLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56U2Nyb2xsU2VydmljZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgaXNUYXJnZXRXaW5kb3cgfSBmcm9tICcuL3V0aWxzJztcblxuaW50ZXJmYWNlIFNpbXBsZVJlY3Qge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBib3R0b20/OiBudW1iZXI7XG59XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhZmZpeCc7XG5jb25zdCBOWl9BRkZJWF9DTFNfUFJFRklYID0gJ2FudC1hZmZpeCc7XG5jb25zdCBOWl9BRkZJWF9ERUZBVUxUX1NDUk9MTF9USU1FID0gMjA7XG5jb25zdCBOWl9BRkZJWF9SRVNQT05EX0VWRU5UUyA9IFsncmVzaXplJywgJ3Njcm9sbCcsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICdwYWdlc2hvdycsICdsb2FkJ107XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWFmZml4JyxcbiAgZXhwb3J0QXM6ICduekFmZml4JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFmZml4LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWFmZml4IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ZpeGVkRWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGZpeGVkRWw6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIG56VGFyZ2V0OiBzdHJpbmcgfCBFbGVtZW50IHwgV2luZG93O1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMClcbiAgQElucHV0TnVtYmVyKClcbiAgbnpPZmZzZXRUb3A6IG51bGwgfCBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgQFdpdGhDb25maWc8bnVtYmVyIHwgbnVsbD4oTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBudWxsKVxuICBASW5wdXROdW1iZXIoKVxuICBuek9mZnNldEJvdHRvbTogbnVsbCB8IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBwbGFjZWhvbGRlck5vZGU6IEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgYWZmaXhTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIHByaXZhdGUgcGxhY2Vob2xkZXJTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIHRpbWVvdXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIHByaXZhdGUgZ2V0IHRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcbiAgICBjb25zdCBlbCA9IHRoaXMubnpUYXJnZXQ7XG4gICAgcmV0dXJuICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsKSB8fCB3aW5kb3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1hbnlcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge1xuICAgIC8vIFRoZSB3cmFwcGVyIHdvdWxkIHN0YXkgYXQgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGFzIGEgcGxhY2Vob2xkZXIuXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2M7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek9mZnNldEJvdHRvbSwgbnpPZmZzZXRUb3AsIG56VGFyZ2V0IH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG56T2Zmc2V0Qm90dG9tIHx8IG56T2Zmc2V0VG9wKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KTtcbiAgICB9XG4gICAgaWYgKG56VGFyZ2V0KSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zY3JvbGwkID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIG1lcmdlKC4uLk5aX0FGRklYX1JFU1BPTkRfRVZFTlRTLm1hcChldk5hbWUgPT4gZnJvbUV2ZW50KHRoaXMudGFyZ2V0LCBldk5hbWUpKSlcbiAgICAgICAgLnBpcGUoYXVkaXRUaW1lKE5aX0FGRklYX0RFRkFVTFRfU0NST0xMX1RJTUUpKVxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy51cGRhdGVQb3NpdGlvbihlKSk7XG4gICAgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldE9mZnNldChlbGVtZW50OiBFbGVtZW50LCB0YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgfCB1bmRlZmluZWQpOiBTaW1wbGVSZWN0IHtcbiAgICBjb25zdCBlbGVtUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXQhKTtcblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIHRydWUpO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XG5cbiAgICBjb25zdCBkb2NFbGVtID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsZW0uY2xpZW50VG9wIHx8IDA7XG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbVJlY3QudG9wIC0gdGFyZ2V0UmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0OiBlbGVtUmVjdC5sZWZ0IC0gdGFyZ2V0UmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgICB3aWR0aDogZWxlbVJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1SZWN0LmhlaWdodFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93KTogU2ltcGxlUmVjdCB7XG4gICAgcmV0dXJuICFpc1RhcmdldFdpbmRvdyh0YXJnZXQpXG4gICAgICA/IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYm90dG9tOiAwXG4gICAgICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNldEFmZml4U3R5bGUoZTogRXZlbnQsIGFmZml4U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZ2luYWxBZmZpeFN0eWxlID0gdGhpcy5hZmZpeFN0eWxlO1xuICAgIGNvbnN0IGlzV2luZG93ID0gdGhpcy50YXJnZXQgPT09IHdpbmRvdztcbiAgICBpZiAoZS50eXBlID09PSAnc2Nyb2xsJyAmJiBvcmlnaW5hbEFmZml4U3R5bGUgJiYgYWZmaXhTdHlsZSAmJiBpc1dpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2hhbGxvd0VxdWFsKG9yaWdpbmFsQWZmaXhTdHlsZSwgYWZmaXhTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXhlZCA9ICEhYWZmaXhTdHlsZTtcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcbiAgICB3cmFwRWwuc3R5bGUuY3NzVGV4dCA9IGdldFN0eWxlQXNUZXh0KGFmZml4U3R5bGUpO1xuICAgIHRoaXMuYWZmaXhTdHlsZSA9IGFmZml4U3R5bGU7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChOWl9BRkZJWF9DTFNfUFJFRklYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoTlpfQUZGSVhfQ0xTX1BSRUZJWCk7XG4gICAgfVxuXG4gICAgaWYgKChhZmZpeFN0eWxlICYmICFvcmlnaW5hbEFmZml4U3R5bGUpIHx8ICghYWZmaXhTdHlsZSAmJiBvcmlnaW5hbEFmZml4U3R5bGUpKSB7XG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoZml4ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlPzogTmdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMucGxhY2Vob2xkZXJTdHlsZTtcbiAgICBpZiAoc2hhbGxvd0VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9IGdldFN0eWxlQXNUZXh0KHBsYWNlaG9sZGVyU3R5bGUpO1xuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHBsYWNlaG9sZGVyU3R5bGU7XG4gIH1cblxuICBwcml2YXRlIHN5bmNQbGFjZWhvbGRlclN0eWxlKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFmZml4U3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdHlsZU9iaiA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgLi4udGhpcy5hZmZpeFN0eWxlLFxuICAgICAgLi4uc3R5bGVPYmpcbiAgICB9KTtcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoc3R5bGVPYmopO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMudGFyZ2V0O1xuICAgIGxldCBvZmZzZXRUb3AgPSB0aGlzLm56T2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXROb2RlLCB0cnVlKTtcbiAgICBjb25zdCBlbGVtT2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQodGhpcy5wbGFjZWhvbGRlck5vZGUsIHRhcmdldE5vZGUhKTtcbiAgICBjb25zdCBmaXhlZE5vZGUgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBlbGVtU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiBmaXhlZE5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpeGVkTm9kZS5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IG9mZnNldE1vZGUgPSB7XG4gICAgICB0b3A6IGZhbHNlLFxuICAgICAgYm90dG9tOiBmYWxzZVxuICAgIH07XG4gICAgLy8gRGVmYXVsdCB0byBgb2Zmc2V0VG9wPTBgLlxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0VG9wICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcy5uek9mZnNldEJvdHRvbSAhPT0gJ251bWJlcicpIHtcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHJ1ZTtcbiAgICAgIG9mZnNldFRvcCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHlwZW9mIG9mZnNldFRvcCA9PT0gJ251bWJlcic7XG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbSA9IHR5cGVvZiB0aGlzLm56T2Zmc2V0Qm90dG9tID09PSAnbnVtYmVyJztcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXROb2RlIGFzIFdpbmRvdyk7XG4gICAgY29uc3QgdGFyZ2V0SW5uZXJIZWlnaHQgPSAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKHNjcm9sbFRvcCA+PSBlbGVtT2Zmc2V0LnRvcCAtIChvZmZzZXRUb3AgYXMgbnVtYmVyKSAmJiBvZmZzZXRNb2RlLnRvcCkge1xuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xuICAgICAgY29uc3QgdG9wID0gdGFyZ2V0UmVjdC50b3AgKyAob2Zmc2V0VG9wIGFzIG51bWJlcik7XG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wLFxuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXG4gICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcH1weClgLFxuICAgICAgICB3aWR0aFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBlbGVtU2l6ZS5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBzY3JvbGxUb3AgPD0gZWxlbU9mZnNldC50b3AgKyBlbGVtU2l6ZS5oZWlnaHQgKyAodGhpcy5uek9mZnNldEJvdHRvbSBhcyBudW1iZXIpIC0gdGFyZ2V0SW5uZXJIZWlnaHQgJiZcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tXG4gICAgKSB7XG4gICAgICBjb25zdCB0YXJnZXRCb3R0b21PZmZldCA9IHRhcmdldE5vZGUgPT09IHdpbmRvdyA/IDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YXJnZXRSZWN0LmJvdHRvbSE7XG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgYm90dG9tOiB0YXJnZXRCb3R0b21PZmZldCArICh0aGlzLm56T2Zmc2V0Qm90dG9tIGFzIG51bWJlciksXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbU9mZnNldC5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudHlwZSA9PT0gJ3Jlc2l6ZScgJiZcbiAgICAgICAgdGhpcy5hZmZpeFN0eWxlICYmXG4gICAgICAgIHRoaXMuYWZmaXhTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJlxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XG4gICAgICAgICAgLi4udGhpcy5hZmZpeFN0eWxlLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSgpO1xuICAgIH1cblxuICAgIGlmIChlLnR5cGUgPT09ICdyZXNpemUnKSB7XG4gICAgICB0aGlzLnN5bmNQbGFjZWhvbGRlclN0eWxlKGUpO1xuICAgIH1cbiAgfVxufVxuIl19