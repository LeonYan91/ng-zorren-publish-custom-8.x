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
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { warnDeprecation, InputBoolean, InputNumber, NzConfigService, NzDomEventService, NzDragService, WithConfig } from 'ng-zorro-antd/core';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
import { NZ_CAROUSEL_CUSTOM_STRATEGIES } from './nz-carousel-definitions';
import { NzCarouselOpacityStrategy } from './strategies/opacity-strategy';
import { NzCarouselTransformStrategy } from './strategies/transform-strategy';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'carousel';
var NzCarouselComponent = /** @class */ (function () {
    function NzCarouselComponent(elementRef, nzConfigService, renderer, cdr, platform, nzDomEventService, nzDragService, customStrategies) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzDragService = nzDragService;
        this.customStrategies = customStrategies;
        this.nzTransitionSpeed = 500;
        this.nzBeforeChange = new EventEmitter();
        this.nzAfterChange = new EventEmitter();
        this.activeIndex = 0;
        this.vertical = false;
        this.destroy$ = new Subject();
        this.gestureRect = null;
        this.pointerDelta = null;
        this.isTransiting = false;
        this.isDragging = false;
        /**
         * Drag carousel.
         * @param event
         */
        this.pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.isDragging && !_this.isTransiting && _this.nzEnableSwipe) {
                _this.clearScheduledTransition();
                _this.gestureRect = _this.slickListEl.getBoundingClientRect();
                _this.nzDragService.requestDraggingSequence(event).subscribe((/**
                 * @param {?} delta
                 * @return {?}
                 */
                function (delta) {
                    _this.pointerDelta = delta;
                    _this.isDragging = true;
                    _this.strategy.dragging(_this.pointerDelta);
                }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () {
                    if (_this.nzEnableSwipe && _this.isDragging) {
                        /** @type {?} */
                        var xDelta = _this.pointerDelta ? _this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > (/** @type {?} */ (_this.gestureRect)).width / 3) {
                            _this.goTo(xDelta > 0 ? _this.activeIndex - 1 : _this.activeIndex + 1);
                        }
                        else {
                            _this.goTo(_this.activeIndex);
                        }
                        _this.gestureRect = null;
                        _this.pointerDelta = null;
                    }
                    _this.isDragging = false;
                }));
            }
        });
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NzCarouselComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this.vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzVertical' is deprecated and will be removed in 9.0.0. Please use 'nzDotPosition' instead.");
            this.vertical = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzDotPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dotPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dotPosition = value;
            if (value === 'left' || value === 'right') {
                this.vertical = true;
            }
            else {
                this.vertical = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.markContentActive(0);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.slickListEl = this.slickList.nativeElement;
        this.slickTrackEl = this.slickTrack.nativeElement;
        this.carouselContents.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.markContentActive(0);
            _this.syncStrategy();
        }));
        this.nzDomEventService
            .registerResizeListener()
            .pipe(takeUntil(this.destroy$), finalize((/**
         * @return {?}
         */
        function () { return _this.nzDomEventService.unregisterResizeListener(); })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.syncStrategy();
        }));
        this.switchStrategy();
        this.markContentActive(0);
        this.syncStrategy();
        // If embedded in an entry component, it may do initial render at a inappropriate time.
        // ngZone.onStable won't do this trick
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.syncStrategy();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzEffect = changes.nzEffect, nzDotPosition = changes.nzDotPosition;
        if (nzEffect && !nzEffect.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (nzDotPosition && !nzDotPosition.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
            this.clearScheduledTransition();
        }
        else {
            this.scheduleNextTransition();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === LEFT_ARROW) {
            e.preventDefault();
            this.pre();
        }
        else if (e.keyCode === RIGHT_ARROW) {
            this.next();
            e.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.goTo(this.activeIndex + 1);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.pre = /**
     * @return {?}
     */
    function () {
        this.goTo(this.activeIndex - 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.goTo = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            /** @type {?} */
            var length_1 = this.carouselContents.length;
            /** @type {?} */
            var from = this.activeIndex;
            /** @type {?} */
            var to = (index + length_1) % length_1;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from: from, to: to });
            this.strategy.switch(this.activeIndex, index).subscribe((/**
             * @return {?}
             */
            function () {
                _this.scheduleNextTransition();
                _this.nzAfterChange.emit(index);
                _this.isTransiting = false;
            }));
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.switchStrategy = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        /** @type {?} */
        var customStrategy = this.customStrategies ? this.customStrategies.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.name === _this.nzEffect; })) : null;
        if (customStrategy) {
            // tslint:disable-next-line:no-any
            this.strategy = new ((/** @type {?} */ (customStrategy.strategy)))(this, this.cdr, this.renderer);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.scheduleNextTransition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.goTo(_this.activeIndex + 1);
            }), this.nzAutoPlaySpeed);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.clearScheduledTransition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.markContentActive = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach((/**
             * @param {?} slide
             * @param {?} i
             * @return {?}
             */
            function (slide, i) {
                slide.isActive = index === i;
            }));
        }
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.syncStrategy = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    };
    NzCarouselComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-carousel',
                    exportAs: 'nzCarousel',
                    preserveWhitespaces: false,
                    template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\n  <div\n    #slickList\n    class=\"slick-list\"\n    tabindex=\"-1\"\n    (keydown)=\"onKeyDown($event)\"\n    (mousedown)=\"pointerDown($event)\"\n    (touchstart)=\"pointerDown($event)\"\n  >\n    <!-- Render carousel items. -->\n    <div class=\"slick-track\" #slickTrack>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <!-- Render dots. -->\n  <ul\n    class=\"slick-dots\"\n    *ngIf=\"nzDots\"\n    [class.slick-dots-top]=\"nzDotPosition === 'top'\"\n    [class.slick-dots-bottom]=\"nzDotPosition === 'bottom'\"\n    [class.slick-dots-left]=\"nzDotPosition === 'left'\"\n    [class.slick-dots-right]=\"nzDotPosition === 'right'\"\n  >\n    <li\n      *ngFor=\"let content of carouselContents; let i = index\"\n      [class.slick-active]=\"content.isActive\"\n      (click)=\"goTo(i)\"\n    >\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\">\n      </ng-template>\n    </li>\n  </ul>\n</div>\n\n<ng-template #renderDotTemplate let-index>\n  <button>{{ index + 1 }}</button>\n</ng-template>\n",
                    host: {
                        '[class.ant-carousel-vertical]': 'vertical'
                    },
                    styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: NzDomEventService },
        { type: NzDragService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
    ]; };
    NzCarouselComponent.propDecorators = {
        carouselContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
        slickList: [{ type: ViewChild, args: ['slickList', { static: false },] }],
        slickTrack: [{ type: ViewChild, args: ['slickTrack', { static: false },] }],
        nzDotRender: [{ type: Input }],
        nzEffect: [{ type: Input }],
        nzEnableSwipe: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzAutoPlay: [{ type: Input }],
        nzAutoPlaySpeed: [{ type: Input }],
        nzTransitionSpeed: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzDotPosition: [{ type: Input }],
        nzBeforeChange: [{ type: Output }],
        nzAfterChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'scrollx'),
        tslib_1.__metadata("design:type", String)
    ], NzCarouselComponent.prototype, "nzEffect", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzDots", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 3000), InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], NzCarouselComponent.prototype, "nzVertical", null);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'bottom'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], NzCarouselComponent.prototype, "nzDotPosition", null);
    return NzCarouselComponent;
}());
export { NzCarouselComponent };
if (false) {
    /** @type {?} */
    NzCarouselComponent.prototype.carouselContents;
    /** @type {?} */
    NzCarouselComponent.prototype.slickList;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDotRender;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEffect;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDots;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlay;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.prototype.nzTransitionSpeed;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype._dotPosition;
    /** @type {?} */
    NzCarouselComponent.prototype.nzBeforeChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAfterChange;
    /** @type {?} */
    NzCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    NzCarouselComponent.prototype.el;
    /** @type {?} */
    NzCarouselComponent.prototype.slickListEl;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrackEl;
    /** @type {?} */
    NzCarouselComponent.prototype.strategy;
    /** @type {?} */
    NzCarouselComponent.prototype.vertical;
    /** @type {?} */
    NzCarouselComponent.prototype.transitionInProgress;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.gestureRect;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.pointerDelta;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.isTransiting;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.isDragging;
    /**
     * Drag carousel.
     * \@param event
     * @type {?}
     */
    NzCarouselComponent.prototype.pointerDown;
    /** @type {?} */
    NzCarouselComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.nzDomEventService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.nzDragService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.customStrategies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFdBQVcsRUFDWCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBS0wsNkJBQTZCLEVBRTlCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBRXhFLHdCQUF3QixHQUFHLFVBQVU7QUFFM0M7SUF5RkUsNkJBQ0UsVUFBc0IsRUFDTixlQUFnQyxFQUMvQixRQUFt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LDBDQUE4Qzs7Ozs7SUFDOUMsMkNBQWtEOzs7OztJQUNsRCwyQ0FBNkI7Ozs7O0lBQzdCLHlDQUEyQjs7Ozs7O0lBMkszQiwwQ0ErQkU7O0lBdE1BLDhDQUFnRDs7Ozs7SUFDaEQsdUNBQW9DOzs7OztJQUNwQyxrQ0FBdUM7Ozs7O0lBQ3ZDLHVDQUFtQzs7Ozs7SUFDbkMsZ0RBQXFEOzs7OztJQUNyRCw0Q0FBNkM7Ozs7O0lBQzdDLCtDQUE2RyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICB3YXJuRGVwcmVjYXRpb24sXG4gIElucHV0Qm9vbGVhbixcbiAgSW5wdXROdW1iZXIsXG4gIE56Q29uZmlnU2VydmljZSxcbiAgTnpEb21FdmVudFNlcnZpY2UsXG4gIE56RHJhZ1NlcnZpY2UsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIEZyb21Ub0ludGVyZmFjZSxcbiAgTnpDYXJvdXNlbERvdFBvc2l0aW9uLFxuICBOekNhcm91c2VsRWZmZWN0cyxcbiAgTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtLFxuICBOWl9DQVJPVVNFTF9DVVNUT01fU1RSQVRFR0lFUyxcbiAgUG9pbnRlclZlY3RvclxufSBmcm9tICcuL256LWNhcm91c2VsLWRlZmluaXRpb25zJztcbmltcG9ydCB7IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvYmFzZS1zdHJhdGVneSc7XG5pbXBvcnQgeyBOekNhcm91c2VsT3BhY2l0eVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL29wYWNpdHktc3RyYXRlZ3knO1xuaW1wb3J0IHsgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL3RyYW5zZm9ybS1zdHJhdGVneSc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjYXJvdXNlbCc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1jYXJvdXNlbCcsXG4gIGV4cG9ydEFzOiAnbnpDYXJvdXNlbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY2Fyb3VzZWwtdmVydGljYWxdJzogJ3ZlcnRpY2FsJ1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1jYXJvdXNlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5zbGljay1kb3RzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5zbGljay10cmFjayB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpIGNhcm91c2VsQ29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT47XG5cbiAgQFZpZXdDaGlsZCgnc2xpY2tMaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNsaWNrTGlzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2xpY2tUcmFjaycsIHsgc3RhdGljOiBmYWxzZSB9KSBzbGlja1RyYWNrOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG56RG90UmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyIH0+O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdzY3JvbGx4JykgbnpFZmZlY3Q6IE56Q2Fyb3VzZWxFZmZlY3RzO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekVuYWJsZVN3aXBlOiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekRvdHM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9QbGF5OiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDMwMDApIEBJbnB1dE51bWJlcigpIG56QXV0b1BsYXlTcGVlZDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelRyYW5zaXRpb25TcGVlZCA9IDUwMDtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZ2V0IG56VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWw7XG4gIH1cblxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ256VmVydGljYWwnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpEb3RQb3NpdGlvbicgaW5zdGVhZC5gKTtcbiAgICB0aGlzLnZlcnRpY2FsID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdib3R0b20nKVxuICBzZXQgbnpEb3RQb3NpdGlvbih2YWx1ZTogTnpDYXJvdXNlbERvdFBvc2l0aW9uKSB7XG4gICAgdGhpcy5fZG90UG9zaXRpb24gPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09ICdsZWZ0JyB8fCB2YWx1ZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy52ZXJ0aWNhbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEb3RQb3NpdGlvbigpOiBOekNhcm91c2VsRG90UG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl9kb3RQb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2RvdFBvc2l0aW9uOiBOekNhcm91c2VsRG90UG9zaXRpb247XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QmVmb3JlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGcm9tVG9JbnRlcmZhY2U+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgYWN0aXZlSW5kZXggPSAwO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIHNsaWNrTGlzdEVsOiBIVE1MRWxlbWVudDtcbiAgc2xpY2tUcmFja0VsOiBIVE1MRWxlbWVudDtcbiAgc3RyYXRlZ3k6IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3k7XG4gIHZlcnRpY2FsID0gZmFsc2U7XG4gIHRyYW5zaXRpb25JblByb2dyZXNzOiBudW1iZXIgfCBudWxsO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGdlc3R1cmVSZWN0OiBDbGllbnRSZWN0IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcG9pbnRlckRlbHRhOiBQb2ludGVyVmVjdG9yIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgaXNUcmFuc2l0aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSByZWFkb25seSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBuekRyYWdTZXJ2aWNlOiBOekRyYWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfQ0FST1VTRUxfQ1VTVE9NX1NUUkFURUdJRVMpIHByaXZhdGUgY3VzdG9tU3RyYXRlZ2llczogTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtW11cbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2Fyb3VzZWwnKTtcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNsaWNrTGlzdEVsID0gdGhpcy5zbGlja0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnNsaWNrVHJhY2tFbCA9IHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnRzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcbiAgICB9KTtcblxuICAgIHRoaXMubnpEb21FdmVudFNlcnZpY2VcbiAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XG4gICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcblxuICAgIC8vIElmIGVtYmVkZGVkIGluIGFuIGVudHJ5IGNvbXBvbmVudCwgaXQgbWF5IGRvIGluaXRpYWwgcmVuZGVyIGF0IGEgaW5hcHByb3ByaWF0ZSB0aW1lLlxuICAgIC8vIG5nWm9uZS5vblN0YWJsZSB3b24ndCBkbyB0aGlzIHRyaWNrXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpFZmZlY3QsIG56RG90UG9zaXRpb24gfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpFZmZlY3QgJiYgIW56RWZmZWN0LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcbiAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XG4gICAgfVxuXG4gICAgaWYgKG56RG90UG9zaXRpb24gJiYgIW56RG90UG9zaXRpb24uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubnpBdXRvUGxheSB8fCAhdGhpcy5uekF1dG9QbGF5U3BlZWQpIHtcbiAgICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuc3RyYXRlZ3kuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcmUoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXggKyAxKTtcbiAgfVxuXG4gIHByZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCAtIDEpO1xuICB9XG5cbiAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50cyAmJiB0aGlzLmNhcm91c2VsQ29udGVudHMubGVuZ3RoICYmICF0aGlzLmlzVHJhbnNpdGluZykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jYXJvdXNlbENvbnRlbnRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmFjdGl2ZUluZGV4O1xuICAgICAgY29uc3QgdG8gPSAoaW5kZXggKyBsZW5ndGgpICUgbGVuZ3RoO1xuICAgICAgdGhpcy5pc1RyYW5zaXRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5uekJlZm9yZUNoYW5nZS5lbWl0KHsgZnJvbSwgdG8gfSk7XG4gICAgICB0aGlzLnN0cmF0ZWd5LnN3aXRjaCh0aGlzLmFjdGl2ZUluZGV4LCBpbmRleCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMubnpBZnRlckNoYW5nZS5lbWl0KGluZGV4KTtcbiAgICAgICAgdGhpcy5pc1RyYW5zaXRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSh0byk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN3aXRjaFN0cmF0ZWd5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLnN0cmF0ZWd5LmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIGN1c3RvbSBzdHJhdGVnaWVzIGZpcnN0LlxuICAgIGNvbnN0IGN1c3RvbVN0cmF0ZWd5ID0gdGhpcy5jdXN0b21TdHJhdGVnaWVzID8gdGhpcy5jdXN0b21TdHJhdGVnaWVzLmZpbmQocyA9PiBzLm5hbWUgPT09IHRoaXMubnpFZmZlY3QpIDogbnVsbDtcbiAgICBpZiAoY3VzdG9tU3RyYXRlZ3kpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIHRoaXMuc3RyYXRlZ3kgPSBuZXcgKGN1c3RvbVN0cmF0ZWd5LnN0cmF0ZWd5IGFzIGFueSkodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RyYXRlZ3kgPVxuICAgICAgdGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnXG4gICAgICAgID8gbmV3IE56Q2Fyb3VzZWxUcmFuc2Zvcm1TdHJhdGVneSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlcilcbiAgICAgICAgOiBuZXcgTnpDYXJvdXNlbE9wYWNpdHlTdHJhdGVneSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlTmV4dFRyYW5zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcbiAgICBpZiAodGhpcy5uekF1dG9QbGF5ICYmIHRoaXMubnpBdXRvUGxheVNwZWVkID4gMCAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCArIDEpO1xuICAgICAgfSwgdGhpcy5uekF1dG9QbGF5U3BlZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyk7XG4gICAgICB0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1hcmtDb250ZW50QWN0aXZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG5cbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnRzKSB7XG4gICAgICB0aGlzLmNhcm91c2VsQ29udGVudHMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbiAgICAgICAgc2xpZGUuaXNBY3RpdmUgPSBpbmRleCA9PT0gaTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgY2Fyb3VzZWwuXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgcG9pbnRlckRvd24gPSAoZXZlbnQ6IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgIXRoaXMuaXNUcmFuc2l0aW5nICYmIHRoaXMubnpFbmFibGVTd2lwZSkge1xuICAgICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcbiAgICAgIHRoaXMuZ2VzdHVyZVJlY3QgPSB0aGlzLnNsaWNrTGlzdEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB0aGlzLm56RHJhZ1NlcnZpY2UucmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQpLnN1YnNjcmliZShcbiAgICAgICAgZGVsdGEgPT4ge1xuICAgICAgICAgIHRoaXMucG9pbnRlckRlbHRhID0gZGVsdGE7XG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0cmF0ZWd5LmRyYWdnaW5nKHRoaXMucG9pbnRlckRlbHRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge30sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5uekVuYWJsZVN3aXBlICYmIHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgY29uc3QgeERlbHRhID0gdGhpcy5wb2ludGVyRGVsdGEgPyB0aGlzLnBvaW50ZXJEZWx0YS54IDogMDtcblxuICAgICAgICAgICAgLy8gU3dpdGNoIHRvIGFub3RoZXIgc2xpZGUgaWYgZGVsdGEgaXMgYmlnZ2VyIHRoYW4gdGhpcmQgb2YgdGhlIHdpZHRoLlxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHhEZWx0YSkgPiB0aGlzLmdlc3R1cmVSZWN0IS53aWR0aCAvIDMpIHtcbiAgICAgICAgICAgICAgdGhpcy5nb1RvKHhEZWx0YSA+IDAgPyB0aGlzLmFjdGl2ZUluZGV4IC0gMSA6IHRoaXMuYWN0aXZlSW5kZXggKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nZXN0dXJlUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJEZWx0YSA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgc3luY1N0cmF0ZWd5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLnN0cmF0ZWd5LndpdGhDYXJvdXNlbENvbnRlbnRzKHRoaXMuY2Fyb3VzZWxDb250ZW50cyk7XG4gICAgfVxuICB9XG59XG4iXX0=