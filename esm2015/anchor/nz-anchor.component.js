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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { toNumber, InputBoolean, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
/**
 * @record
 */
function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
const sharpMatcherRegx = /#([^#]+)$/;
export class NzAnchorComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(nzConfigService, scrollSrv, doc, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cdr = cdr;
        this.platform = platform;
        this.nzAffix = true;
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.destroyed = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetTop(value) {
        this._offsetTop = toNumber(value, 0);
        this.wrapperStyle = {
            'max-height': `calc(100vh - ${this._offsetTop}px)`
        };
    }
    /**
     * @return {?}
     */
    get nzOffsetTop() {
        return this._offsetTop;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set nzTarget(el) {
        this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
        this.registerScrollEvent();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    registerLink(link) {
        this.links.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    /**
     * @private
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
        this.removeListen();
    }
    /**
     * @private
     * @return {?}
     */
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        () => this.handleScroll()));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        setTimeout((/**
         * @return {?}
         */
        () => this.handleScroll()));
    }
    /**
     * @private
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    getOffsetTop(element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        if (rect.width || rect.height) {
            if (this.getTarget() === window) {
                return rect.top - (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement)).clientTop;
            }
            return rect.top - ((/** @type {?} */ (this.getTarget()))).getBoundingClientRect().top;
        }
        return rect.top;
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (typeof document === 'undefined' || this.destroyed || this.animating) {
            return;
        }
        /** @type {?} */
        const sections = [];
        /** @type {?} */
        const scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        comp => {
            /** @type {?} */
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                const top = this.getOffsetTop(target);
                if (top < scope) {
                    sections.push({
                        top,
                        comp
                    });
                }
            }
        }));
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            /** @type {?} */
            const maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            (prev, curr) => (curr.top > prev.top ? curr : prev)));
            this.handleActive(maxSection.comp);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearActive() {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i.active = false;
            i.markForCheck();
        }));
    }
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    handleActive(comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        const linkNode = (/** @type {?} */ (((/** @type {?} */ (comp.elementRef.nativeElement))).querySelector('.ant-anchor-link-title')));
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.visible = true;
        this.cdr.detectChanges();
        this.nzScroll.emit(comp);
    }
    /**
     * @param {?} linkComp
     * @return {?}
     */
    handleScrollTo(linkComp) {
        /** @type {?} */
        const el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        const containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        const elOffsetTop = this.getOffsetTop(el);
        /** @type {?} */
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        () => {
            this.animating = false;
            this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    }
}
NzAnchorComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</nz-affix>\n<ng-template #content>\n  <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\n      <div class=\"ant-anchor-ink\">\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzAnchorComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: NzScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzAnchorComponent.propDecorators = {
    ink: [{ type: ViewChild, args: ['ink', { static: false },] }],
    nzAffix: [{ type: Input }],
    nzShowInkInFixed: [{ type: Input }],
    nzBounds: [{ type: Input }],
    nzOffsetTop: [{ type: Input }],
    nzTarget: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzScroll: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAnchorComponent.prototype, "nzAffix", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 5),
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzAnchorComponent.prototype, "nzBounds", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], NzAnchorComponent.prototype, "nzOffsetTop", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype.nzAffix;
    /** @type {?} */
    NzAnchorComponent.prototype.nzShowInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzBounds;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype._offsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.links;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.animating;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.destroyed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsWUFBWSxFQUNaLFdBQVcsRUFFWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDOzs7O0FBSTVCLHNCQUdDOzs7SUFGQyx1QkFBNEI7O0lBQzVCLHNCQUFZOzs7TUFHUix3QkFBd0IsR0FBRyxRQUFROztNQUNuQyxnQkFBZ0IsR0FBRyxXQUFXO0FBVXBDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBZ0Q1QixZQUNTLGVBQWdDLEVBQy9CLFNBQTBCLEVBRVIsR0FBUSxFQUMxQixHQUFzQixFQUN0QixRQUFrQjtRQUxuQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFFUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFuREgsWUFB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ZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICB0b051bWJlcixcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbiAgTmdTdHlsZUludGVyZmFjZSxcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOelNjcm9sbFNlcnZpY2UsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQnO1xuXG5pbnRlcmZhY2UgU2VjdGlvbiB7XG4gIGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudDtcbiAgdG9wOiBudW1iZXI7XG59XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhbmNob3InO1xuY29uc3Qgc2hhcnBNYXRjaGVyUmVneCA9IC8jKFteI10rKSQvO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hbmNob3InLFxuICBleHBvcnRBczogJ256QW5jaG9yJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hbmNob3IuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekFuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2luaycsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGluazogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBZmZpeCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSlcbiAgQElucHV0Qm9vbGVhbigpXG4gIG56U2hvd0lua0luRml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCA1KVxuICBASW5wdXROdW1iZXIoKVxuICBuekJvdW5kczogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPG51bWJlcj4oTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcbiAgICB0aGlzLndyYXBwZXJTdHlsZSA9IHtcbiAgICAgICdtYXgtaGVpZ2h0JzogYGNhbGMoMTAwdmggLSAke3RoaXMuX29mZnNldFRvcH1weClgXG4gICAgfTtcbiAgfVxuXG4gIGdldCBuek9mZnNldFRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUb3A7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXRUb3A6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUYXJnZXQoZWw6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxOekFuY2hvckxpbmtDb21wb25lbnQ+KCk7XG5cbiAgdmlzaWJsZSA9IGZhbHNlO1xuICB3cmFwcGVyU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7ICdtYXgtaGVpZ2h0JzogJzEwMHZoJyB9O1xuXG4gIHByaXZhdGUgbGlua3M6IE56QW5jaG9yTGlua0NvbXBvbmVudFtdID0gW107XG4gIHByaXZhdGUgYW5pbWF0aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgdGFyZ2V0OiBFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICByZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5wdXNoKGxpbmspO1xuICB9XG5cbiAgdW5yZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5zcGxpY2UodGhpcy5saW5rcy5pbmRleE9mKGxpbmspLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGFyZ2V0KCk6IEVsZW1lbnQgfCBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHRoaXMuZ2V0VGFyZ2V0KCksICdzY3JvbGwnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSg1MCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gICAgLy8gQnJvd3NlciB3b3VsZCBtYWludGFpbiB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIHdoZW4gcmVmcmVzaGluZy5cbiAgICAvLyBTbyB3ZSBoYXZlIHRvIGRlbGF5IGNhbGN1bGF0aW9uIGluIGF2b2lkIG9mIGdldHRpbmcgYSBpbmNvcnJlY3QgcmVzdWx0LlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB7XG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE9mZnNldFRvcChlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcbiAgICAgIGlmICh0aGlzLmdldFRhcmdldCgpID09PSB3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wIC0gZWxlbWVudC5vd25lckRvY3VtZW50IS5kb2N1bWVudEVsZW1lbnQhLmNsaWVudFRvcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWN0LnRvcCAtICh0aGlzLmdldFRhcmdldCgpIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgfVxuICAgIHJldHVybiByZWN0LnRvcDtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLmRlc3Ryb3llZCB8fCB0aGlzLmFuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25zOiBTZWN0aW9uW10gPSBbXTtcbiAgICBjb25zdCBzY29wZSA9ICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApICsgdGhpcy5uekJvdW5kcztcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICBjb25zdCBzaGFycExpbmtNYXRjaCA9IHNoYXJwTWF0Y2hlclJlZ3guZXhlYyhjb21wLm56SHJlZi50b1N0cmluZygpKTtcbiAgICAgIGlmICghc2hhcnBMaW5rTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoc2hhcnBMaW5rTWF0Y2hbMV0pO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpO1xuICAgICAgICBpZiAodG9wIDwgc2NvcGUpIHtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGNvbXBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52aXNpYmxlID0gISFzZWN0aW9ucy5sZW5ndGg7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWF4U2VjdGlvbiA9IHNlY3Rpb25zLnJlZHVjZSgocHJldiwgY3VycikgPT4gKGN1cnIudG9wID4gcHJldi50b3AgPyBjdXJyIDogcHJldikpO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobWF4U2VjdGlvbi5jb21wKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICBpLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmUoY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xuXG4gICAgY29tcC5hY3RpdmUgPSB0cnVlO1xuICAgIGNvbXAubWFya0ZvckNoZWNrKCk7XG5cbiAgICBjb25zdCBsaW5rTm9kZSA9IChjb21wLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCkucXVlcnlTZWxlY3RvcihcbiAgICAgICcuYW50LWFuY2hvci1saW5rLXRpdGxlJ1xuICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5pbmsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtsaW5rTm9kZS5vZmZzZXRUb3AgKyBsaW5rTm9kZS5jbGllbnRIZWlnaHQgLyAyIC0gNC41fXB4YDtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgIHRoaXMubnpTY3JvbGwuZW1pdChjb21wKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbFRvKGxpbmtDb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IobGlua0NvbXAubnpIcmVmKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGNvbnRhaW5lclNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0aGlzLmdldFRhcmdldCgpKTtcbiAgICBjb25zdCBlbE9mZnNldFRvcCA9IHRoaXMuZ2V0T2Zmc2V0VG9wKGVsKTtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApO1xuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIHRhcmdldFNjcm9sbFRvcCwgdW5kZWZpbmVkLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobGlua0NvbXApO1xuICAgIH0pO1xuICAgIHRoaXMubnpDbGljay5lbWl0KGxpbmtDb21wLm56SHJlZik7XG4gIH1cbn1cbiJdfQ==