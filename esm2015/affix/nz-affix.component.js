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
const NZ_CONFIG_COMPONENT_NAME = 'affix';
/** @type {?} */
const NZ_AFFIX_CLS_PREFIX = 'ant-affix';
/** @type {?} */
const NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
/** @type {?} */
const NZ_AFFIX_RESPOND_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
export class NzAffixComponent {
    /**
     * @param {?} el
     * @param {?} doc
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(el, doc, // tslint:disable-line no-any
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
    /**
     * @private
     * @return {?}
     */
    get target() {
        /** @type {?} */
        const el = this.nzTarget;
        return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOffsetBottom, nzOffsetTop, nzTarget } = changes;
        if (nzOffsetBottom || nzOffsetTop) {
            this.updatePosition((/** @type {?} */ ({})));
        }
        if (nzTarget) {
            this.registerListeners();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerListeners();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListeners();
    }
    /**
     * @private
     * @return {?}
     */
    registerListeners() {
        this.removeListeners();
        this.scroll$ = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return merge(...NZ_AFFIX_RESPOND_EVENTS.map((/**
             * @param {?} evName
             * @return {?}
             */
            evName => fromEvent(this.target, evName))))
                .pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            e => this.updatePosition(e)));
        }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => this.updatePosition((/** @type {?} */ ({})))));
    }
    /**
     * @private
     * @return {?}
     */
    removeListeners() {
        clearTimeout(this.timeout);
        this.scroll$.unsubscribe();
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    getOffset(element, target) {
        /** @type {?} */
        const elemRect = element.getBoundingClientRect();
        /** @type {?} */
        const targetRect = this.getTargetRect((/** @type {?} */ (target)));
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        const docElem = this.document.body;
        /** @type {?} */
        const clientTop = docElem.clientTop || 0;
        /** @type {?} */
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    getTargetRect(target) {
        return !isTargetWindow(target)
            ? target.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: 0
            };
    }
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    setAffixStyle(e, affixStyle) {
        /** @type {?} */
        const originalAffixStyle = this.affixStyle;
        /** @type {?} */
        const isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        const fixed = !!affixStyle;
        /** @type {?} */
        const wrapEl = this.fixedEl.nativeElement;
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
    }
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    setPlaceholderStyle(placeholderStyle) {
        /** @type {?} */
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = getStyleAsText(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    syncPlaceholderStyle(e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        /** @type {?} */
        const styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, Object.assign({}, this.affixStyle, styleObj));
        this.setPlaceholderStyle(styleObj);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    updatePosition(e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const targetNode = this.target;
        /** @type {?} */
        let offsetTop = this.nzOffsetTop;
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        const elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        const fixedNode = this.fixedEl.nativeElement;
        /** @type {?} */
        const elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        const offsetMode = {
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
        const targetRect = this.getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        const targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            const width = elemOffset.width;
            /** @type {?} */
            const top = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                maxHeight: `calc(100vh - ${top}px)`,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this.nzOffsetBottom))) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            const targetBottomOffet = targetNode === window ? 0 : window.innerHeight - (/** @type {?} */ (targetRect.bottom));
            /** @type {?} */
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + ((/** @type {?} */ (this.nzOffsetBottom))),
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign({}, this.affixStyle, { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    }
}
NzAffixComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-affix',
                exportAs: 'nzAffix',
                template: "<div #fixedEl>\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      nz-affix {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzAffixComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: NzScrollService },
    { type: NgZone },
    { type: Platform }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFlBQVksRUFDWixXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBRXpDLHlCQU1DOzs7SUFMQyx5QkFBWTs7SUFDWiwwQkFBYTs7SUFDYiwyQkFBZTs7SUFDZiw0QkFBZ0I7O0lBQ2hCLDRCQUFnQjs7O01BR1osd0JBQXdCLEdBQUcsT0FBTzs7TUFDbEMsbUJBQW1CLEdBQUcsV0FBVzs7TUFDakMsNEJBQTRCLEdBQUcsRUFBRTs7TUFDakMsdUJBQXVCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7QUFnQi9HLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7OztJQThCM0Is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QUMsUUFBUTtZQWpFbEIsZUFBZTtZQUNmLGVBQWU7WUFqQmYsTUFBTTtZQVZDLFFBQVE7OztzQkE0RGQsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBRXJDLEtBQUs7MEJBRUwsS0FBSzs2QkFLTCxLQUFLO3VCQUtMLE1BQU07O0FBUFA7SUFGQyxVQUFVLENBQWdCLHdCQUF3QixFQUFFLENBQUMsQ0FBQztJQUN0RCxXQUFXLEVBQUU7O3FEQUNhO0FBSzNCO0lBRkMsVUFBVSxDQUFnQix3QkFBd0IsRUFBRSxJQUFJLENBQUM7SUFDekQsV0FBVyxFQUFFOzt3REFDZ0I7Ozs7OztJQVo5QixtQ0FBb0Y7O0lBRXBGLG9DQUE2Qzs7SUFFN0MsdUNBRzJCOztJQUUzQiwwQ0FHOEI7O0lBRTlCLG9DQUEwRDs7Ozs7SUFFMUQsMkNBQThDOzs7OztJQUU5QyxzQ0FBc0M7Ozs7O0lBQ3RDLDRDQUE0Qzs7Ozs7SUFDNUMsbUNBQW1EOzs7OztJQUNuRCxtQ0FBeUI7Ozs7O0lBQ3pCLG9DQUEyQjs7SUFVekIsMkNBQXVDOzs7OztJQUN2QyxxQ0FBa0M7Ozs7O0lBQ2xDLGtDQUFzQjs7Ozs7SUFDdEIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIGdldFN0eWxlQXNUZXh0LFxuICBzaGFsbG93RXF1YWwsXG4gIElucHV0TnVtYmVyLFxuICBOZ1N0eWxlSW50ZXJmYWNlLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56U2Nyb2xsU2VydmljZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgaXNUYXJnZXRXaW5kb3cgfSBmcm9tICcuL3V0aWxzJztcblxuaW50ZXJmYWNlIFNpbXBsZVJlY3Qge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBib3R0b20/OiBudW1iZXI7XG59XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhZmZpeCc7XG5jb25zdCBOWl9BRkZJWF9DTFNfUFJFRklYID0gJ2FudC1hZmZpeCc7XG5jb25zdCBOWl9BRkZJWF9ERUZBVUxUX1NDUk9MTF9USU1FID0gMjA7XG5jb25zdCBOWl9BRkZJWF9SRVNQT05EX0VWRU5UUyA9IFsncmVzaXplJywgJ3Njcm9sbCcsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICdwYWdlc2hvdycsICdsb2FkJ107XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWFmZml4JyxcbiAgZXhwb3J0QXM6ICduekFmZml4JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFmZml4LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWFmZml4IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ZpeGVkRWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGZpeGVkRWw6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIG56VGFyZ2V0OiBzdHJpbmcgfCBFbGVtZW50IHwgV2luZG93O1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMClcbiAgQElucHV0TnVtYmVyKClcbiAgbnpPZmZzZXRUb3A6IG51bGwgfCBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgQFdpdGhDb25maWc8bnVtYmVyIHwgbnVsbD4oTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBudWxsKVxuICBASW5wdXROdW1iZXIoKVxuICBuek9mZnNldEJvdHRvbTogbnVsbCB8IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBwbGFjZWhvbGRlck5vZGU6IEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgYWZmaXhTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIHByaXZhdGUgcGxhY2Vob2xkZXJTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIHRpbWVvdXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIHByaXZhdGUgZ2V0IHRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcbiAgICBjb25zdCBlbCA9IHRoaXMubnpUYXJnZXQ7XG4gICAgcmV0dXJuICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsKSB8fCB3aW5kb3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1hbnlcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge1xuICAgIC8vIFRoZSB3cmFwcGVyIHdvdWxkIHN0YXkgYXQgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGFzIGEgcGxhY2Vob2xkZXIuXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2M7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek9mZnNldEJvdHRvbSwgbnpPZmZzZXRUb3AsIG56VGFyZ2V0IH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG56T2Zmc2V0Qm90dG9tIHx8IG56T2Zmc2V0VG9wKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KTtcbiAgICB9XG4gICAgaWYgKG56VGFyZ2V0KSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zY3JvbGwkID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIG1lcmdlKC4uLk5aX0FGRklYX1JFU1BPTkRfRVZFTlRTLm1hcChldk5hbWUgPT4gZnJvbUV2ZW50KHRoaXMudGFyZ2V0LCBldk5hbWUpKSlcbiAgICAgICAgLnBpcGUoYXVkaXRUaW1lKE5aX0FGRklYX0RFRkFVTFRfU0NST0xMX1RJTUUpKVxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy51cGRhdGVQb3NpdGlvbihlKSk7XG4gICAgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldE9mZnNldChlbGVtZW50OiBFbGVtZW50LCB0YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgfCB1bmRlZmluZWQpOiBTaW1wbGVSZWN0IHtcbiAgICBjb25zdCBlbGVtUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXQhKTtcblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIHRydWUpO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XG5cbiAgICBjb25zdCBkb2NFbGVtID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsZW0uY2xpZW50VG9wIHx8IDA7XG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbVJlY3QudG9wIC0gdGFyZ2V0UmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0OiBlbGVtUmVjdC5sZWZ0IC0gdGFyZ2V0UmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgICB3aWR0aDogZWxlbVJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1SZWN0LmhlaWdodFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93KTogU2ltcGxlUmVjdCB7XG4gICAgcmV0dXJuICFpc1RhcmdldFdpbmRvdyh0YXJnZXQpXG4gICAgICA/IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYm90dG9tOiAwXG4gICAgICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNldEFmZml4U3R5bGUoZTogRXZlbnQsIGFmZml4U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZ2luYWxBZmZpeFN0eWxlID0gdGhpcy5hZmZpeFN0eWxlO1xuICAgIGNvbnN0IGlzV2luZG93ID0gdGhpcy50YXJnZXQgPT09IHdpbmRvdztcbiAgICBpZiAoZS50eXBlID09PSAnc2Nyb2xsJyAmJiBvcmlnaW5hbEFmZml4U3R5bGUgJiYgYWZmaXhTdHlsZSAmJiBpc1dpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2hhbGxvd0VxdWFsKG9yaWdpbmFsQWZmaXhTdHlsZSwgYWZmaXhTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXhlZCA9ICEhYWZmaXhTdHlsZTtcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcbiAgICB3cmFwRWwuc3R5bGUuY3NzVGV4dCA9IGdldFN0eWxlQXNUZXh0KGFmZml4U3R5bGUpO1xuICAgIHRoaXMuYWZmaXhTdHlsZSA9IGFmZml4U3R5bGU7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChOWl9BRkZJWF9DTFNfUFJFRklYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoTlpfQUZGSVhfQ0xTX1BSRUZJWCk7XG4gICAgfVxuXG4gICAgaWYgKChhZmZpeFN0eWxlICYmICFvcmlnaW5hbEFmZml4U3R5bGUpIHx8ICghYWZmaXhTdHlsZSAmJiBvcmlnaW5hbEFmZml4U3R5bGUpKSB7XG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoZml4ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlPzogTmdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMucGxhY2Vob2xkZXJTdHlsZTtcbiAgICBpZiAoc2hhbGxvd0VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9IGdldFN0eWxlQXNUZXh0KHBsYWNlaG9sZGVyU3R5bGUpO1xuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHBsYWNlaG9sZGVyU3R5bGU7XG4gIH1cblxuICBwcml2YXRlIHN5bmNQbGFjZWhvbGRlclN0eWxlKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFmZml4U3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdHlsZU9iaiA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgLi4udGhpcy5hZmZpeFN0eWxlLFxuICAgICAgLi4uc3R5bGVPYmpcbiAgICB9KTtcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoc3R5bGVPYmopO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMudGFyZ2V0O1xuICAgIGxldCBvZmZzZXRUb3AgPSB0aGlzLm56T2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXROb2RlLCB0cnVlKTtcbiAgICBjb25zdCBlbGVtT2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQodGhpcy5wbGFjZWhvbGRlck5vZGUsIHRhcmdldE5vZGUhKTtcbiAgICBjb25zdCBmaXhlZE5vZGUgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBlbGVtU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiBmaXhlZE5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpeGVkTm9kZS5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IG9mZnNldE1vZGUgPSB7XG4gICAgICB0b3A6IGZhbHNlLFxuICAgICAgYm90dG9tOiBmYWxzZVxuICAgIH07XG4gICAgLy8gRGVmYXVsdCB0byBgb2Zmc2V0VG9wPTBgLlxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0VG9wICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcy5uek9mZnNldEJvdHRvbSAhPT0gJ251bWJlcicpIHtcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHJ1ZTtcbiAgICAgIG9mZnNldFRvcCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHlwZW9mIG9mZnNldFRvcCA9PT0gJ251bWJlcic7XG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbSA9IHR5cGVvZiB0aGlzLm56T2Zmc2V0Qm90dG9tID09PSAnbnVtYmVyJztcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXROb2RlIGFzIFdpbmRvdyk7XG4gICAgY29uc3QgdGFyZ2V0SW5uZXJIZWlnaHQgPSAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKHNjcm9sbFRvcCA+PSBlbGVtT2Zmc2V0LnRvcCAtIChvZmZzZXRUb3AgYXMgbnVtYmVyKSAmJiBvZmZzZXRNb2RlLnRvcCkge1xuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xuICAgICAgY29uc3QgdG9wID0gdGFyZ2V0UmVjdC50b3AgKyAob2Zmc2V0VG9wIGFzIG51bWJlcik7XG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wLFxuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXG4gICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcH1weClgLFxuICAgICAgICB3aWR0aFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBlbGVtU2l6ZS5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBzY3JvbGxUb3AgPD0gZWxlbU9mZnNldC50b3AgKyBlbGVtU2l6ZS5oZWlnaHQgKyAodGhpcy5uek9mZnNldEJvdHRvbSBhcyBudW1iZXIpIC0gdGFyZ2V0SW5uZXJIZWlnaHQgJiZcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tXG4gICAgKSB7XG4gICAgICBjb25zdCB0YXJnZXRCb3R0b21PZmZldCA9IHRhcmdldE5vZGUgPT09IHdpbmRvdyA/IDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YXJnZXRSZWN0LmJvdHRvbSE7XG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgYm90dG9tOiB0YXJnZXRCb3R0b21PZmZldCArICh0aGlzLm56T2Zmc2V0Qm90dG9tIGFzIG51bWJlciksXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbU9mZnNldC5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudHlwZSA9PT0gJ3Jlc2l6ZScgJiZcbiAgICAgICAgdGhpcy5hZmZpeFN0eWxlICYmXG4gICAgICAgIHRoaXMuYWZmaXhTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJlxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XG4gICAgICAgICAgLi4udGhpcy5hZmZpeFN0eWxlLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSgpO1xuICAgIH1cblxuICAgIGlmIChlLnR5cGUgPT09ICdyZXNpemUnKSB7XG4gICAgICB0aGlzLnN5bmNQbGFjZWhvbGRlclN0eWxlKGUpO1xuICAgIH1cbiAgfVxufVxuIl19