import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Inject, NgZone, ViewChild, Input, Output, NgModule } from '@angular/core';
import { Subscription, merge, fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { shallowEqual, getStyleAsText, NzConfigService, NzScrollService, WithConfig, InputNumber, SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} target
 * @return {?}
 */
function isTargetWindow(target) {
    return typeof window !== 'undefined' && target === window;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class NzAffixComponent {
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
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 0),
    InputNumber(),
    __metadata("design:type", Object)
], NzAffixComponent.prototype, "nzOffsetTop", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, null),
    InputNumber(),
    __metadata("design:type", Object)
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzAffixModule {
}
NzAffixModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzAffixComponent],
                exports: [NzAffixComponent],
                imports: [CommonModule, PlatformModule],
                providers: [SCROLL_SERVICE_PROVIDER]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAffixComponent, NzAffixModule };
//# sourceMappingURL=ng-zorro-antd-affix.js.map
