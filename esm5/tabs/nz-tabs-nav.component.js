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
/** code from https://github.com/angular/material2 */
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { pxToNumber, InputBoolean, NzDomEventService } from 'ng-zorro-antd/core';
import { merge, of as observableOf, Subject } from 'rxjs';
import { finalize, startWith, takeUntil } from 'rxjs/operators';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
/** @type {?} */
var EXAGGERATED_OVERSCROLL = 64;
var NzTabsNavComponent = /** @class */ (function () {
    function NzTabsNavComponent(elementRef, ngZone, renderer, cdr, platform, nzDomEventService, dir) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.dir = dir;
        this._tabPositionMode = 'horizontal';
        this._scrollDistance = 0;
        this._selectedIndex = 0;
        this.destroy$ = new Subject();
        this.showPaginationControls = false;
        this.disableScrollAfter = true;
        this.disableScrollBefore = true;
        this.selectedIndexChanged = false;
        this.realignInkBar = null;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzAnimated = true;
        this.nzHideBar = false;
        this.nzShowPagination = true;
        this.nzType = 'line';
    }
    Object.defineProperty(NzTabsNavComponent.prototype, "nzPositionMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tabPositionMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._tabPositionMode = value;
            this.alignInkBarToSelectedTab();
            if (this.nzShowPagination) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.updatePagination();
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "selectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.selectedIndexChanged = this._selectedIndex !== value;
            this._selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.onContentChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var textContent = this.elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this.currentTextContent) {
            this.currentTextContent = textContent;
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                if (_this.nzShowPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @param {?} scrollDir
     * @return {?}
     */
    NzTabsNavComponent.prototype.scrollHeader = /**
     * @param {?} scrollDir
     * @return {?}
     */
    function (scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.nzOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.nzOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
            if (this.nzShowPagination) {
                this.updatePagination();
            }
            this.tabLabelCount = this.listOfNzTabLabelDirective.length;
            this.cdr.markForCheck();
        }
        if (this.selectedIndexChanged) {
            this.scrollToLabel(this._selectedIndex);
            if (this.nzShowPagination) {
                this.checkScrollingControls();
            }
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
        if (this.scrollDistanceChanged) {
            if (this.nzShowPagination) {
                this.updateTabScrollPosition();
            }
            this.scrollDistanceChanged = false;
            this.cdr.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.realignInkBar = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var dirChange = _this.dir ? _this.dir.change : observableOf(null);
            /** @type {?} */
            var resize = typeof window !== 'undefined'
                ? _this.nzDomEventService.registerResizeListener().pipe(takeUntil(_this.destroy$), finalize((/**
                 * @return {?}
                 */
                function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                : observableOf(null);
            return merge(dirChange, resize)
                .pipe(startWith(null))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.nzShowPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
            }));
        }));
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.realignInkBar) {
            this.realignInkBar.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.updateTabScrollPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDistance = this.scrollDistance;
        if (this.nzPositionMode === 'horizontal') {
            /** @type {?} */
            var translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
        }
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.updatePagination = /**
     * @return {?}
     */
    function () {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.checkPaginationEnabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this.showPaginationControls) {
            this.cdr.markForCheck();
        }
        this.showPaginationControls = isEnabled;
    };
    /**
     * @param {?} labelIndex
     * @return {?}
     */
    NzTabsNavComponent.prototype.scrollToLabel = /**
     * @param {?} labelIndex
     * @return {?}
     */
    function (labelIndex) {
        /** @type {?} */
        var selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
        if (selectedLabel) {
            // The view length is the visible width of the tab labels.
            /** @type {?} */
            var labelBeforePos = void 0;
            /** @type {?} */
            var labelAfterPos = void 0;
            if (this.nzPositionMode === 'horizontal') {
                if (this.getLayoutDirection() === 'ltr') {
                    labelBeforePos = selectedLabel.getOffsetLeft();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                }
                else {
                    labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                    labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                }
            }
            else {
                labelBeforePos = selectedLabel.getOffsetTop();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
            }
            /** @type {?} */
            var beforeVisiblePos = this.scrollDistance;
            /** @type {?} */
            var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.checkScrollingControls = /**
     * @return {?}
     */
    function () {
        // Check if the pagination arrows should be activated.
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
        this.cdr.markForCheck();
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    NzTabsNavComponent.prototype.getMaxScrollDistance = /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    function () {
        return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
    };
    Object.defineProperty(NzTabsNavComponent.prototype, "scrollDistance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollDistance;
        },
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        set: /**
         * Sets the distance in pixels that the tab header should be transformed in the X-axis.
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this.scrollDistanceChanged = true;
            this.checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "viewWidthHeightPix", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var PAGINATION_PIX = 0;
            if (this.showPaginationControls) {
                PAGINATION_PIX = this.navContainerScrollPaddingPix;
            }
            if (this.nzPositionMode === 'horizontal') {
                return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
            }
            else {
                return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "navContainerScrollPaddingPix", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.platform.isBrowser) {
                /** @type {?} */
                var navContainer = this.navContainerElement.nativeElement;
                // tslint:disable: no-any
                /** @type {?} */
                var originStyle = window.getComputedStyle
                    ? window.getComputedStyle(navContainer)
                    : ((/** @type {?} */ (navContainer))).currentStyle;
                if (this.nzPositionMode === 'horizontal') {
                    return pxToNumber(originStyle.paddingLeft) + pxToNumber(originStyle.paddingRight);
                }
                else {
                    return pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom);
                }
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "tabListScrollWidthHeightPix", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzPositionMode === 'horizontal') {
                return this.navListElement.nativeElement.scrollWidth;
            }
            else {
                return this.navListElement.nativeElement.scrollHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabsNavComponent.prototype, "tabListScrollOffSetWidthHeight", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzPositionMode === 'horizontal') {
                return this.scrollListElement.nativeElement.offsetWidth;
            }
            else {
                return this.elementRef.nativeElement.offsetHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.getLayoutDirection = /**
     * @return {?}
     */
    function () {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /**
     * @return {?}
     */
    NzTabsNavComponent.prototype.alignInkBarToSelectedTab = /**
     * @return {?}
     */
    function () {
        if (this.nzType === 'line') {
            /** @type {?} */
            var selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.nzTabsInkBarDirective) {
                this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    };
    NzTabsNavComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-tabs-nav]',
                    exportAs: 'nzTabsNav',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div style=\"float:right;\" *ngIf=\"nzTabBarExtraContent\" class=\"ant-tabs-extra-content\">\n  <ng-template [ngTemplateOutlet]=\"nzTabBarExtraContent\"></ng-template>\n</div>\n<div class=\"ant-tabs-nav-container\"\n  [class.ant-tabs-nav-container-scrolling]=\"showPaginationControls\"\n  #navContainerElement>\n  <span class=\"ant-tabs-tab-prev\"\n    (click)=\"scrollHeader('before')\"\n    [class.ant-tabs-tab-btn-disabled]=\"disableScrollBefore\"\n    [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\n    <span class=\"ant-tabs-tab-prev-icon\">\n      <i nz-icon [nzType]=\"nzPositionMode === 'horizontal' ? 'left' : 'up'\" class=\"ant-tabs-tab-prev-icon-target\"></i>\n    </span>\n  </span>\n  <span class=\"ant-tabs-tab-next\"\n    (click)=\"scrollHeader('after')\"\n    [class.ant-tabs-tab-btn-disabled]=\"disableScrollAfter\"\n    [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\n    <span class=\"ant-tabs-tab-next-icon\">\n      <i nz-icon [nzType]=\"nzPositionMode === 'horizontal' ? 'right' : 'down'\" class=\"ant-tabs-tab-next-icon-target\"></i>\n    </span>\n  </span>\n  <div class=\"ant-tabs-nav-wrap\">\n    <div class=\"ant-tabs-nav-scroll\" #scrollListElement>\n      <div class=\"ant-tabs-nav\"\n        [class.ant-tabs-nav-animated]=\"nzAnimated\"\n        #navListElement\n        (cdkObserveContent)=\"onContentChanges()\">\n        <div>\n          <ng-content></ng-content>\n        </div>\n        <div nz-tabs-ink-bar [hidden]=\"nzHideBar\" [nzAnimated]=\"nzAnimated\" [nzPositionMode]=\"nzPositionMode\" style=\"display: block;\"></div>\n      </div>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzTabsNavComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: NzDomEventService },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    NzTabsNavComponent.propDecorators = {
        listOfNzTabLabelDirective: [{ type: ContentChildren, args: [NzTabLabelDirective,] }],
        nzTabsInkBarDirective: [{ type: ViewChild, args: [NzTabsInkBarDirective, { static: true },] }],
        navContainerElement: [{ type: ViewChild, args: ['navContainerElement', { static: true },] }],
        navListElement: [{ type: ViewChild, args: ['navListElement', { static: true },] }],
        scrollListElement: [{ type: ViewChild, args: ['scrollListElement', { static: true },] }],
        nzOnNextClick: [{ type: Output }],
        nzOnPrevClick: [{ type: Output }],
        nzTabBarExtraContent: [{ type: Input }],
        nzAnimated: [{ type: Input }],
        nzHideBar: [{ type: Input }],
        nzShowPagination: [{ type: Input }],
        nzType: [{ type: Input }],
        nzPositionMode: [{ type: Input }],
        selectedIndex: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzAnimated", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzHideBar", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabsNavComponent.prototype, "nzShowPagination", void 0);
    return NzTabsNavComponent;
}());
export { NzTabsNavComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._tabPositionMode;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._scrollDistance;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._selectedIndex;
    /**
     * Cached text content of the header.
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.currentTextContent;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.destroy$;
    /** @type {?} */
    NzTabsNavComponent.prototype.showPaginationControls;
    /** @type {?} */
    NzTabsNavComponent.prototype.disableScrollAfter;
    /** @type {?} */
    NzTabsNavComponent.prototype.disableScrollBefore;
    /** @type {?} */
    NzTabsNavComponent.prototype.selectedIndexChanged;
    /** @type {?} */
    NzTabsNavComponent.prototype.realignInkBar;
    /** @type {?} */
    NzTabsNavComponent.prototype.tabLabelCount;
    /** @type {?} */
    NzTabsNavComponent.prototype.scrollDistanceChanged;
    /** @type {?} */
    NzTabsNavComponent.prototype.listOfNzTabLabelDirective;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabsInkBarDirective;
    /** @type {?} */
    NzTabsNavComponent.prototype.navContainerElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.navListElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.scrollListElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzAnimated;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzHideBar;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzType;
    /** @type {?} */
    NzTabsNavComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.nzDomEventService;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.dir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFicy1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQUc5RCxzQkFBc0IsR0FBRyxFQUFFO0FBR2pDO0lBNERFLDRCQUNTLFVBQXNCLEVBQ3JCLE1BQWMsRUFDZCxRQUFtQixFQUNuQixHQUFzQixFQUN0QixRQUFrQixFQUNsQixpQkFBb0MsRUFDeEIsR0FBbUI7UUFOaEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FB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N0Isb0NBQXNCOzs7OztJQUN0QixzQ0FBMkI7Ozs7O0lBQzNCLGlDQUE4Qjs7Ozs7SUFDOUIsc0NBQTBCOzs7OztJQUMxQiwrQ0FBNEM7Ozs7O0lBQzVDLGlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vKiogY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBweFRvTnVtYmVyLCBJbnB1dEJvb2xlYW4sIE56RG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelRhYkxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10YWItbGFiZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56VGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRhYlBvc2l0aW9uTW9kZSB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XG5cbmNvbnN0IEVYQUdHRVJBVEVEX09WRVJTQ1JPTEwgPSA2NDtcbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXRhYnMtbmF2XScsXG4gIGV4cG9ydEFzOiAnbnpUYWJzTmF2JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFicy1uYXYuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGFic05hdkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3RhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlID0gMDtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIC8qKiBDYWNoZWQgdGV4dCBjb250ZW50IG9mIHRoZSBoZWFkZXIuICovXG4gIHByaXZhdGUgY3VycmVudFRleHRDb250ZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBzaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gZmFsc2U7XG4gIGRpc2FibGVTY3JvbGxBZnRlciA9IHRydWU7XG4gIGRpc2FibGVTY3JvbGxCZWZvcmUgPSB0cnVlO1xuICBzZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xuICByZWFsaWduSW5rQmFyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgdGFiTGFiZWxDb3VudDogbnVtYmVyO1xuICBzY3JvbGxEaXN0YW5jZUNoYW5nZWQ6IGJvb2xlYW47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUYWJMYWJlbERpcmVjdGl2ZSkgbGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZTogUXVlcnlMaXN0PE56VGFiTGFiZWxEaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkKE56VGFic0lua0JhckRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpUYWJzSW5rQmFyRGlyZWN0aXZlOiBOelRhYnNJbmtCYXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoJ25hdkNvbnRhaW5lckVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZDb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnbmF2TGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZMaXN0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbExpc3RFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgc2Nyb2xsTGlzdEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIG56VGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QW5pbWF0ZWQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlQmFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpUeXBlID0gJ2xpbmUnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBvc2l0aW9uTW9kZSh2YWx1ZTogTnpUYWJQb3NpdGlvbk1vZGUpIHtcbiAgICB0aGlzLl90YWJQb3NpdGlvbk1vZGUgPSB2YWx1ZTtcbiAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xuICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBvc2l0aW9uTW9kZSgpOiBOelRhYlBvc2l0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYlBvc2l0aW9uTW9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gdGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdmFsdWU7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcjogRGlyZWN0aW9uYWxpdHlcbiAgKSB7fVxuXG4gIG9uQ29udGVudENoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAvLyBXZSBuZWVkIHRvIGRpZmYgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaGVhZGVyLCBiZWNhdXNlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGNhbGxiYWNrXG4gICAgLy8gd2lsbCBmaXJlIGV2ZW4gaWYgdGhlIHRleHQgY29udGVudCBkaWRuJ3QgY2hhbmdlIHdoaWNoIGlzIGluZWZmaWNpZW50IGFuZCBpcyBwcm9uZVxuICAgIC8vIHRvIGluZmluaXRlIGxvb3BzIGlmIGEgcG9vcmx5IGNvbnN0cnVjdGVkIGV4cHJlc3Npb24gaXMgcGFzc2VkIGluIChzZWUgIzE0MjQ5KS5cbiAgICBpZiAodGV4dENvbnRlbnQgIT09IHRoaXMuY3VycmVudFRleHRDb250ZW50KSB7XG4gICAgICB0aGlzLmN1cnJlbnRUZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGVhZGVyKHNjcm9sbERpcjogU2Nyb2xsRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgaWYgKHNjcm9sbERpciA9PT0gJ2JlZm9yZScgJiYgIXRoaXMuZGlzYWJsZVNjcm9sbEJlZm9yZSkge1xuICAgICAgdGhpcy5uek9uUHJldkNsaWNrLmVtaXQoKTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ2FmdGVyJyAmJiAhdGhpcy5kaXNhYmxlU2Nyb2xsQWZ0ZXIpIHtcbiAgICAgIHRoaXMubnpPbk5leHRDbGljay5lbWl0KCk7XG4gICAgfVxuICAgIC8vIE1vdmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBvbmUtdGhpcmQgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3QncyB2aWV3cG9ydC5cbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9ICgoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyA/IC0xIDogMSkgKiB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeCkgLyAzO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYkxhYmVsQ291bnQgIT09IHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnRhYkxhYmVsQ291bnQgPSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvTGFiZWwodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICAgICAgfVxuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQpIHtcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlYWxpZ25JbmtCYXIgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCBkaXJDaGFuZ2UgPSB0aGlzLmRpciA/IHRoaXMuZGlyLmNoYW5nZSA6IG9ic2VydmFibGVPZihudWxsKTtcbiAgICAgIGNvbnN0IHJlc2l6ZSA9XG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgPyB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKS5waXBlKFxuICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgICByZXR1cm4gbWVyZ2UoZGlyQ2hhbmdlLCByZXNpemUpXG4gICAgICAgIC5waXBlKHN0YXJ0V2l0aChudWxsKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKHRoaXMucmVhbGlnbklua0Jhcikge1xuICAgICAgdGhpcy5yZWFsaWduSW5rQmFyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTogdm9pZCB7XG4gICAgY29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVggPSB0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJyA/IC1zY3JvbGxEaXN0YW5jZSA6IHNjcm9sbERpc3RhbmNlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGVYfXB4LCAwLCAwKWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCR7LXNjcm9sbERpc3RhbmNlfXB4LCAwKWApO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja1BhZ2luYXRpb25FbmFibGVkKCk7XG4gICAgdGhpcy5jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gICAgdGhpcy51cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpO1xuICB9XG5cbiAgY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0VuYWJsZWQgPSB0aGlzLnRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCA+IHRoaXMudGFiTGlzdFNjcm9sbE9mZlNldFdpZHRoSGVpZ2h0O1xuICAgIGlmICghaXNFbmFibGVkKSB7XG4gICAgICB0aGlzLnNjcm9sbERpc3RhbmNlID0gMDtcbiAgICB9XG4gICAgaWYgKGlzRW5hYmxlZCAhPT0gdGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gaXNFbmFibGVkO1xuICB9XG5cbiAgc2Nyb2xsVG9MYWJlbChsYWJlbEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZExhYmVsID0gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlID8gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLnRvQXJyYXkoKVtsYWJlbEluZGV4XSA6IG51bGw7XG5cbiAgICBpZiAoc2VsZWN0ZWRMYWJlbCkge1xuICAgICAgLy8gVGhlIHZpZXcgbGVuZ3RoIGlzIHRoZSB2aXNpYmxlIHdpZHRoIG9mIHRoZSB0YWIgbGFiZWxzLlxuXG4gICAgICBsZXQgbGFiZWxCZWZvcmVQb3M6IG51bWJlcjtcbiAgICAgIGxldCBsYWJlbEFmdGVyUG9zOiBudW1iZXI7XG4gICAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGlmICh0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJykge1xuICAgICAgICAgIGxhYmVsQmVmb3JlUG9zID0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRMZWZ0KCk7XG4gICAgICAgICAgbGFiZWxBZnRlclBvcyA9IGxhYmVsQmVmb3JlUG9zICsgc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSB0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSBzZWxlY3RlZExhYmVsLmdldE9mZnNldExlZnQoKTtcbiAgICAgICAgICBsYWJlbEJlZm9yZVBvcyA9IGxhYmVsQWZ0ZXJQb3MgLSBzZWxlY3RlZExhYmVsLmdldE9mZnNldFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsQmVmb3JlUG9zID0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRUb3AoKTtcbiAgICAgICAgbGFiZWxBZnRlclBvcyA9IGxhYmVsQmVmb3JlUG9zICsgc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRIZWlnaHQoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJlZm9yZVZpc2libGVQb3MgPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgICAgY29uc3QgYWZ0ZXJWaXNpYmxlUG9zID0gdGhpcy5zY3JvbGxEaXN0YW5jZSArIHRoaXMudmlld1dpZHRoSGVpZ2h0UGl4O1xuXG4gICAgICBpZiAobGFiZWxCZWZvcmVQb3MgPCBiZWZvcmVWaXNpYmxlUG9zKSB7XG4gICAgICAgIC8vIFNjcm9sbCBoZWFkZXIgdG8gbW92ZSBsYWJlbCB0byB0aGUgYmVmb3JlIGRpcmVjdGlvblxuICAgICAgICB0aGlzLnNjcm9sbERpc3RhbmNlIC09IGJlZm9yZVZpc2libGVQb3MgLSBsYWJlbEJlZm9yZVBvcyArIEVYQUdHRVJBVEVEX09WRVJTQ1JPTEw7XG4gICAgICB9IGVsc2UgaWYgKGxhYmVsQWZ0ZXJQb3MgPiBhZnRlclZpc2libGVQb3MpIHtcbiAgICAgICAgLy8gU2Nyb2xsIGhlYWRlciB0byBtb3ZlIGxhYmVsIHRvIHRoZSBhZnRlciBkaXJlY3Rpb25cbiAgICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSBsYWJlbEFmdGVyUG9zIC0gYWZ0ZXJWaXNpYmxlUG9zICsgRVhBR0dFUkFURURfT1ZFUlNDUk9MTDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk6IHZvaWQge1xuICAgIC8vIENoZWNrIGlmIHRoZSBwYWdpbmF0aW9uIGFycm93cyBzaG91bGQgYmUgYWN0aXZhdGVkLlxuICAgIHRoaXMuZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgPT09IDA7XG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsQWZ0ZXIgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSB0aGlzLmdldE1heFNjcm9sbERpc3RhbmNlKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGF0IGlzIHRoZSBtYXhpbXVtIGxlbmd0aCBpbiBwaXhlbHMgdGhhdCBjYW4gYmUgc2V0IGZvciB0aGUgc2Nyb2xsIGRpc3RhbmNlLiBUaGlzXG4gICAqIGlzIGVxdWFsIHRvIHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGhlIHRhYiBsaXN0IGNvbnRhaW5lciBhbmQgdGFiIGhlYWRlciBjb250YWluZXIuXG4gICAqXG4gICAqIFRoaXMgaXMgYW4gZXhwZW5zaXZlIGNhbGwgdGhhdCBmb3JjZXMgYSBsYXlvdXQgcmVmbG93IHRvIGNvbXB1dGUgYm94IGFuZCBzY3JvbGwgbWV0cmljcyBhbmRcbiAgICogc2hvdWxkIGJlIGNhbGxlZCBzcGFyaW5nbHkuXG4gICAqL1xuICBnZXRNYXhTY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCAtIHRoaXMudmlld1dpZHRoSGVpZ2h0UGl4IHx8IDA7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoYXQgdGhlIHRhYiBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXG4gIHNldCBzY3JvbGxEaXN0YW5jZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKSwgdikpO1xuXG4gICAgLy8gTWFyayB0aGF0IHRoZSBzY3JvbGwgZGlzdGFuY2UgaGFzIGNoYW5nZWQgc28gdGhhdCBhZnRlciB0aGUgdmlldyBpcyBjaGVja2VkLCB0aGUgQ1NTXG4gICAgLy8gdHJhbnNmb3JtYXRpb24gY2FuIG1vdmUgdGhlIGhlYWRlci5cbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlQ2hhbmdlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgfVxuXG4gIGdldCBzY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxEaXN0YW5jZTtcbiAgfVxuXG4gIGdldCB2aWV3V2lkdGhIZWlnaHRQaXgoKTogbnVtYmVyIHtcbiAgICBsZXQgUEFHSU5BVElPTl9QSVggPSAwO1xuICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcbiAgICAgIFBBR0lOQVRJT05fUElYID0gdGhpcy5uYXZDb250YWluZXJTY3JvbGxQYWRkaW5nUGl4O1xuICAgIH1cbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSBQQUdJTkFUSU9OX1BJWDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF2Q29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAtIFBBR0lOQVRJT05fUElYO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuYXZDb250YWluZXJTY3JvbGxQYWRkaW5nUGl4KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBuYXZDb250YWluZXIgPSB0aGlzLm5hdkNvbnRhaW5lckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlOiBuby1hbnlcbiAgICAgIGNvbnN0IG9yaWdpblN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGVcbiAgICAgICAgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShuYXZDb250YWluZXIpXG4gICAgICAgIDogKG5hdkNvbnRhaW5lciBhcyBhbnkpLmN1cnJlbnRTdHlsZTsgLy8gY3VycmVudFN0eWxlIGZvciBJRSA8IDlcbiAgICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ0xlZnQpICsgcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nUmlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ1RvcCkgKyBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICBnZXQgdGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhYkxpc3RTY3JvbGxPZmZTZXRXaWR0aEhlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09PSAncnRsJyA/ICdydGwnIDogJ2x0cic7XG4gIH1cblxuICBhbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpUeXBlID09PSAnbGluZScpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxXcmFwcGVyID1cbiAgICAgICAgdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlICYmIHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS5sZW5ndGhcbiAgICAgICAgICA/IHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS50b0FycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4XS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICA6IG51bGw7XG4gICAgICBpZiAodGhpcy5uelRhYnNJbmtCYXJEaXJlY3RpdmUpIHtcbiAgICAgICAgdGhpcy5uelRhYnNJbmtCYXJEaXJlY3RpdmUuYWxpZ25Ub0VsZW1lbnQoc2VsZWN0ZWRMYWJlbFdyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19