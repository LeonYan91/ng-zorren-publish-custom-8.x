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
var NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    function NzAnchorComponent(nzConfigService, scrollSrv, doc, cdr, platform) {
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
    Object.defineProperty(NzAnchorComponent.prototype, "nzOffsetTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offsetTop = toNumber(value, 0);
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this._offsetTop + "px)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.getTarget = /**
     * @private
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
        this.removeListen();
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.registerScrollEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.removeListen = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    NzAnchorComponent.prototype.getOffsetTop = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        if (rect.width || rect.height) {
            if (this.getTarget() === window) {
                return rect.top - (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement)).clientTop;
            }
            return rect.top - ((/** @type {?} */ (this.getTarget()))).getBoundingClientRect().top;
        }
        return rect.top;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof document === 'undefined' || this.destroyed || this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                var top_1 = _this.getOffsetTop(target);
                if (top_1 < scope) {
                    sections.push({
                        top: top_1,
                        comp: comp
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
            var maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            function (prev, curr) { return (curr.top > prev.top ? curr : prev); }));
            this.handleActive(maxSection.comp);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.clearActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            i.active = false;
            i.markForCheck();
        }));
    };
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleActive = /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        var linkNode = (/** @type {?} */ (((/** @type {?} */ (comp.elementRef.nativeElement))).querySelector('.ant-anchor-link-title')));
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.visible = true;
        this.cdr.detectChanges();
        this.nzScroll.emit(comp);
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        var elOffsetTop = this.getOffsetTop(el);
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    };
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
    NzAnchorComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
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
    return NzAnchorComponent;
}());
export { NzAnchorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsWUFBWSxFQUNaLFdBQVcsRUFFWCxlQUFlLEVBQ2YsZUFBZSxFQUNmLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDOzs7O0FBSTVCLHNCQUdDOzs7SUFGQyx1QkFBNEI7O0lBQzVCLHNCQUFZOzs7SUFHUix3QkFBd0IsR0FBRyxRQUFROztJQUNuQyxnQkFBZ0IsR0FBRyxXQUFXO0FBRXBDO0lBd0RFLDJCQUNTLGVBQWdDLEVBQy9CLFNBQTBCLEVBRVIsR0FBUSxFQUMxQixHQUFzQixFQUN0QixRQUFrQjtRQUxuQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFFUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFuREgsWUFBTyxHQUFHLElBQUksQ0FBQztRQWlDckIs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Q0FBZ0I7O0lBQ2hCLHlDQUEyRDs7Ozs7SUFFM0Qsa0NBQTRDOzs7OztJQUM1QyxzQ0FBMEI7Ozs7O0lBQzFCLG1DQUFzQzs7Ozs7SUFDdEMsb0NBQTRDOzs7OztJQUM1QyxzQ0FBMEI7O0lBR3hCLDRDQUF1Qzs7Ozs7SUFDdkMsc0NBQWtDOzs7OztJQUVsQyxnQ0FBa0M7Ozs7O0lBQ2xDLGdDQUE4Qjs7Ozs7SUFDOUIscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIHRvTnVtYmVyLFxuICBJbnB1dEJvb2xlYW4sXG4gIElucHV0TnVtYmVyLFxuICBOZ1N0eWxlSW50ZXJmYWNlLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56U2Nyb2xsU2VydmljZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekFuY2hvckxpbmtDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci1saW5rLmNvbXBvbmVudCc7XG5cbmludGVyZmFjZSBTZWN0aW9uIHtcbiAgY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50O1xuICB0b3A6IG51bWJlcjtcbn1cblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2FuY2hvcic7XG5jb25zdCBzaGFycE1hdGNoZXJSZWd4ID0gLyMoW14jXSspJC87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWFuY2hvcicsXG4gIGV4cG9ydEFzOiAnbnpBbmNob3InLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFuY2hvci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56QW5jaG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnaW5rJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgaW5rOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFmZml4ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKVxuICBASW5wdXRCb29sZWFuKClcbiAgbnpTaG93SW5rSW5GaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDUpXG4gIEBJbnB1dE51bWJlcigpXG4gIG56Qm91bmRzOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgQFdpdGhDb25maWc8bnVtYmVyPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gIHNldCBuek9mZnNldFRvcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICAgIHRoaXMud3JhcHBlclN0eWxlID0ge1xuICAgICAgJ21heC1oZWlnaHQnOiBgY2FsYygxMDB2aCAtICR7dGhpcy5fb2Zmc2V0VG9wfXB4KWBcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldFRvcDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRhcmdldChlbDogc3RyaW5nIHwgRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPE56QW5jaG9yTGlua0NvbXBvbmVudD4oKTtcblxuICB2aXNpYmxlID0gZmFsc2U7XG4gIHdyYXBwZXJTdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHsgJ21heC1oZWlnaHQnOiAnMTAwdmgnIH07XG5cbiAgcHJpdmF0ZSBsaW5rczogTnpBbmNob3JMaW5rQ29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBhbmltYXRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0YXJnZXQ6IEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSxcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIHJlZ2lzdGVyTGluayhsaW5rOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLnB1c2gobGluayk7XG4gIH1cblxuICB1bnJlZ2lzdGVyTGluayhsaW5rOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLnNwbGljZSh0aGlzLmxpbmtzLmluZGV4T2YobGluayksIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXQoKTogRWxlbWVudCB8IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0IHx8IHdpbmRvdztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclNjcm9sbEV2ZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDUwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcbiAgICAvLyBCcm93c2VyIHdvdWxkIG1haW50YWluIHRoZSBzY3JvbGxpbmcgcG9zaXRpb24gd2hlbiByZWZyZXNoaW5nLlxuICAgIC8vIFNvIHdlIGhhdmUgdG8gZGVsYXkgY2FsY3VsYXRpb24gaW4gYXZvaWQgb2YgZ2V0dGluZyBhIGluY29ycmVjdCByZXN1bHQuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbCQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0T2Zmc2V0VG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAocmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCkge1xuICAgICAgaWYgKHRoaXMuZ2V0VGFyZ2V0KCkgPT09IHdpbmRvdykge1xuICAgICAgICByZXR1cm4gcmVjdC50b3AgLSBlbGVtZW50Lm93bmVyRG9jdW1lbnQhLmRvY3VtZW50RWxlbWVudCEuY2xpZW50VG9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlY3QudG9wIC0gKHRoaXMuZ2V0VGFyZ2V0KCkgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB9XG4gICAgcmV0dXJuIHJlY3QudG9wO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuZGVzdHJveWVkIHx8IHRoaXMuYW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjdGlvbnM6IFNlY3Rpb25bXSA9IFtdO1xuICAgIGNvbnN0IHNjb3BlID0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCkgKyB0aGlzLm56Qm91bmRzO1xuICAgIHRoaXMubGlua3MuZm9yRWFjaChjb21wID0+IHtcbiAgICAgIGNvbnN0IHNoYXJwTGlua01hdGNoID0gc2hhcnBNYXRjaGVyUmVneC5leGVjKGNvbXAubnpIcmVmLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKCFzaGFycExpbmtNYXRjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChzaGFycExpbmtNYXRjaFsxXSk7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0T2Zmc2V0VG9wKHRhcmdldCk7XG4gICAgICAgIGlmICh0b3AgPCBzY29wZSkge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgY29tcFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpc2libGUgPSAhIXNlY3Rpb25zLmxlbmd0aDtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXhTZWN0aW9uID0gc2VjdGlvbnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiAoY3Vyci50b3AgPiBwcmV2LnRvcCA/IGN1cnIgOiBwcmV2KSk7XG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShtYXhTZWN0aW9uLmNvbXApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGkubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGl2ZShjb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XG5cbiAgICBjb21wLmFjdGl2ZSA9IHRydWU7XG4gICAgY29tcC5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGNvbnN0IGxpbmtOb2RlID0gKGNvbXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5hbnQtYW5jaG9yLWxpbmstdGl0bGUnXG4gICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmluay5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IGAke2xpbmtOb2RlLm9mZnNldFRvcCArIGxpbmtOb2RlLmNsaWVudEhlaWdodCAvIDIgLSA0LjV9cHhgO1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgdGhpcy5uelNjcm9sbC5lbWl0KGNvbXApO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsVG8obGlua0NvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihsaW5rQ29tcC5uekhyZWYpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XG4gICAgY29uc3QgY29udGFpbmVyU2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRoaXMuZ2V0VGFyZ2V0KCkpO1xuICAgIGNvbnN0IGVsT2Zmc2V0VG9wID0gdGhpcy5nZXRPZmZzZXRUb3AoZWwpO1xuICAgIGNvbnN0IHRhcmdldFNjcm9sbFRvcCA9IGNvbnRhaW5lclNjcm9sbFRvcCArIGVsT2Zmc2V0VG9wIC0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCk7XG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgdGFyZ2V0U2Nyb2xsVG9wLCB1bmRlZmluZWQsICgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShsaW5rQ29tcCk7XG4gICAgfSk7XG4gICAgdGhpcy5uekNsaWNrLmVtaXQobGlua0NvbXAubnpIcmVmKTtcbiAgfVxufVxuIl19