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
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2 } from '@angular/core';
import { ensureInBounds, InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getEventWithPoint } from './nz-resizable-utils';
import { NzResizableService } from './nz-resizable.service';
/**
 * @record
 */
export function NzResizeEvent() { }
if (false) {
    /** @type {?|undefined} */
    NzResizeEvent.prototype.width;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.height;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.col;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.mouseEvent;
}
var NzResizableDirective = /** @class */ (function () {
    function NzResizableDirective(elementRef, renderer, nzResizableService, platform, ngZone) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzResizableService = nzResizableService;
        this.platform = platform;
        this.ngZone = ngZone;
        this.nzBounds = 'parent';
        this.nzMinHeight = 40;
        this.nzMinWidth = 40;
        this.nzGridColumnCount = -1;
        this.nzMaxColumn = -1;
        this.nzMinColumn = -1;
        this.nzLockAspectRatio = false;
        this.nzPreview = false;
        this.nzResize = new EventEmitter();
        this.nzResizeEnd = new EventEmitter();
        this.nzResizeStart = new EventEmitter();
        this.resizing = false;
        this.destroy$ = new Subject();
        this.nzResizableService.handleMouseDown$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.resizing = true;
            _this.nzResizableService.startResizing(event.mouseEvent);
            _this.currentHandleEvent = event;
            _this.setCursor();
            _this.nzResizeStart.emit({
                mouseEvent: event.mouseEvent
            });
            _this.elRect = _this.el.getBoundingClientRect();
        }));
        this.nzResizableService.documentMouseUp$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.resizing) {
                _this.resizing = false;
                _this.nzResizableService.documentMouseUp$.next();
                _this.endResize(event);
            }
        }));
        this.nzResizableService.documentMouseMove$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.resizing) {
                _this.resize(event);
            }
        }));
    }
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.onMouseenter = /**
     * @return {?}
     */
    function () {
        this.nzResizableService.mouseEntered$.next(true);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.onMouseleave = /**
     * @return {?}
     */
    function () {
        this.nzResizableService.mouseEntered$.next(false);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.setPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = getComputedStyle(this.el).position;
        if (position === 'static' || !position) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
    };
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} ratio
     * @return {?}
     */
    NzResizableDirective.prototype.calcSize = /**
     * @param {?} width
     * @param {?} height
     * @param {?} ratio
     * @return {?}
     */
    function (width, height, ratio) {
        /** @type {?} */
        var newWidth;
        /** @type {?} */
        var newHeight;
        /** @type {?} */
        var maxWidth;
        /** @type {?} */
        var maxHeight;
        /** @type {?} */
        var col = 0;
        /** @type {?} */
        var spanWidth = 0;
        /** @type {?} */
        var minWidth = this.nzMinWidth;
        /** @type {?} */
        var boundWidth = Infinity;
        /** @type {?} */
        var boundHeight = Infinity;
        if (this.nzBounds === 'parent') {
            /** @type {?} */
            var parent_1 = this.renderer.parentNode(this.el);
            if (parent_1 instanceof HTMLElement) {
                /** @type {?} */
                var parentRect = parent_1.getBoundingClientRect();
                boundWidth = parentRect.width;
                boundHeight = parentRect.height;
            }
        }
        else if (this.nzBounds === 'window') {
            if (typeof window !== 'undefined') {
                boundWidth = window.innerWidth;
                boundHeight = window.innerHeight;
            }
        }
        else if (this.nzBounds && this.nzBounds.nativeElement && this.nzBounds.nativeElement instanceof HTMLElement) {
            /** @type {?} */
            var boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
            boundWidth = boundsRect.width;
            boundHeight = boundsRect.height;
        }
        maxWidth = ensureInBounds(this.nzMaxWidth, boundWidth);
        maxHeight = ensureInBounds(this.nzMaxHeight, boundHeight);
        if (this.nzGridColumnCount !== -1) {
            spanWidth = maxWidth / this.nzGridColumnCount;
            minWidth = this.nzMinColumn !== -1 ? spanWidth * this.nzMinColumn : minWidth;
            maxWidth = this.nzMaxColumn !== -1 ? spanWidth * this.nzMaxColumn : maxWidth;
        }
        if (ratio !== -1) {
            if (/(left|right)/i.test((/** @type {?} */ (this.currentHandleEvent)).direction)) {
                newWidth = Math.min(Math.max(width, minWidth), maxWidth);
                newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                if (newHeight >= maxHeight || newHeight <= this.nzMinHeight) {
                    newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                }
            }
            else {
                newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
                newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                if (newWidth >= maxWidth || newWidth <= minWidth) {
                    newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                }
            }
        }
        else {
            newWidth = Math.min(Math.max(width, minWidth), maxWidth);
            newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
        }
        if (this.nzGridColumnCount !== -1) {
            col = Math.round(newWidth / spanWidth);
            newWidth = col * spanWidth;
        }
        return {
            col: col,
            width: newWidth,
            height: newHeight
        };
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.setCursor = /**
     * @return {?}
     */
    function () {
        switch ((/** @type {?} */ (this.currentHandleEvent)).direction) {
            case 'left':
            case 'right':
                this.renderer.setStyle(document.body, 'cursor', 'col-resize');
                break;
            case 'top':
            case 'bottom':
                this.renderer.setStyle(document.body, 'cursor', 'row-resize');
                break;
            case 'topLeft':
            case 'bottomRight':
                this.renderer.setStyle(document.body, 'cursor', 'nwse-resize');
                break;
            case 'topRight':
            case 'bottomLeft':
                this.renderer.setStyle(document.body, 'cursor', 'nesw-resize');
                break;
        }
        this.renderer.setStyle(document.body, 'user-select', 'none');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizableDirective.prototype.resize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var elRect = this.elRect;
        /** @type {?} */
        var resizeEvent = getEventWithPoint(event);
        /** @type {?} */
        var handleEvent = getEventWithPoint((/** @type {?} */ (this.currentHandleEvent)).mouseEvent);
        /** @type {?} */
        var width = elRect.width;
        /** @type {?} */
        var height = elRect.height;
        /** @type {?} */
        var ratio = this.nzLockAspectRatio ? width / height : -1;
        switch ((/** @type {?} */ (this.currentHandleEvent)).direction) {
            case 'bottomRight':
                width = resizeEvent.clientX - elRect.left;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'bottomLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'topRight':
                width = resizeEvent.clientX - elRect.left;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'topLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'top':
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'right':
                width = resizeEvent.clientX - elRect.left;
                break;
            case 'bottom':
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'left':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
        }
        /** @type {?} */
        var size = this.calcSize(width, height, ratio);
        this.sizeCache = tslib_1.__assign({}, size);
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.nzResize.emit(tslib_1.__assign({}, size, { mouseEvent: event }));
        }));
        if (this.nzPreview) {
            this.previewResize(size);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizableDirective.prototype.endResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(document.body, 'user-select', '');
        this.removeGhostElement();
        /** @type {?} */
        var size = this.sizeCache
            ? tslib_1.__assign({}, this.sizeCache) : {
            width: this.elRect.width,
            height: this.elRect.height
        };
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.nzResizeEnd.emit(tslib_1.__assign({}, size, { mouseEvent: event }));
        }));
        this.sizeCache = null;
        this.currentHandleEvent = null;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NzResizableDirective.prototype.previewResize = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var width = _a.width, height = _a.height;
        this.createGhostElement();
        this.renderer.setStyle(this.ghostElement, 'width', width + "px");
        this.renderer.setStyle(this.ghostElement, 'height', height + "px");
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.createGhostElement = /**
     * @return {?}
     */
    function () {
        if (!this.ghostElement) {
            this.ghostElement = this.renderer.createElement('div');
            this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
        }
        this.renderer.appendChild(this.el, this.ghostElement);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.removeGhostElement = /**
     * @return {?}
     */
    function () {
        if (this.ghostElement) {
            this.renderer.removeChild(this.el, this.ghostElement);
        }
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            this.el = this.elementRef.nativeElement;
            this.setPosition();
        }
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzResizableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-resizable]',
                    exportAs: 'nzResizable',
                    providers: [NzResizableService],
                    host: {
                        '[class.nz-resizable]': 'true',
                        '[class.nz-resizable-resizing]': 'resizing',
                        '(mouseenter)': 'onMouseenter()',
                        '(mouseleave)': 'onMouseleave()'
                    }
                },] }
    ];
    /** @nocollapse */
    NzResizableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzResizableService },
        { type: Platform },
        { type: NgZone }
    ]; };
    NzResizableDirective.propDecorators = {
        nzBounds: [{ type: Input }],
        nzMaxHeight: [{ type: Input }],
        nzMaxWidth: [{ type: Input }],
        nzMinHeight: [{ type: Input }],
        nzMinWidth: [{ type: Input }],
        nzGridColumnCount: [{ type: Input }],
        nzMaxColumn: [{ type: Input }],
        nzMinColumn: [{ type: Input }],
        nzLockAspectRatio: [{ type: Input }],
        nzPreview: [{ type: Input }],
        nzResize: [{ type: Output }],
        nzResizeEnd: [{ type: Output }],
        nzResizeStart: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzResizableDirective.prototype, "nzPreview", void 0);
    return NzResizableDirective;
}());
export { NzResizableDirective };
if (false) {
    /** @type {?} */
    NzResizableDirective.prototype.nzBounds;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxHeight;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxWidth;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinHeight;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinWidth;
    /** @type {?} */
    NzResizableDirective.prototype.nzGridColumnCount;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxColumn;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinColumn;
    /** @type {?} */
    NzResizableDirective.prototype.nzLockAspectRatio;
    /** @type {?} */
    NzResizableDirective.prototype.nzPreview;
    /** @type {?} */
    NzResizableDirective.prototype.nzResize;
    /** @type {?} */
    NzResizableDirective.prototype.nzResizeEnd;
    /** @type {?} */
    NzResizableDirective.prototype.nzResizeStart;
    /** @type {?} */
    NzResizableDirective.prototype.resizing;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.elRect;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.currentHandleEvent;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.ghostElement;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.sizeCache;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.nzResizableService;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzaXphYmxlLyIsInNvdXJjZXMiOlsibnotcmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRzVELG1DQUtDOzs7SUFKQyw4QkFBZTs7SUFDZiwrQkFBZ0I7O0lBQ2hCLDRCQUFhOztJQUNiLG1DQUFxQzs7QUFHdkM7SUFrQ0UsOEJBQ1UsVUFBbUMsRUFDbkMsUUFBbUIsRUFDbkIsa0JBQXNDLEVBQ3RDLFFBQWtCLEVBQ2xCLE1BQWM7UUFMeEIsaUJBK0JDO1FBOUJTLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7UUEzQmYsYUFBUSxHQUFrRCxRQUFRLENBQUM7UUFHbkUsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFXLEVB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QUFmLFlBQVksRUFBRTs7MkRBQTRCO0lBNlB0RCwyQkFBQztDQUFBLEFBbFJELElBa1JDO1NBdlFZLG9CQUFvQjs7O0lBQy9CLHdDQUE0RTs7SUFDNUUsMkNBQTZCOztJQUM3QiwwQ0FBNEI7O0lBQzVCLDJDQUFrQzs7SUFDbEMsMENBQWlDOztJQUNqQyxpREFBd0M7O0lBQ3hDLDJDQUFrQzs7SUFDbEMsMkNBQWtDOztJQUNsQyxpREFBNEQ7O0lBQzVELHlDQUFvRDs7SUFDcEQsd0NBQWdFOztJQUNoRSwyQ0FBbUU7O0lBQ25FLDZDQUFxRTs7SUFFckUsd0NBQWlCOzs7OztJQUNqQixzQ0FBcUM7Ozs7O0lBQ3JDLGtEQUFnRTs7Ozs7SUFDaEUsNENBQTRDOzs7OztJQUM1QyxrQ0FBd0I7Ozs7O0lBQ3hCLHlDQUF3Qzs7Ozs7SUFDeEMsd0NBQXVDOzs7OztJQUdyQywwQ0FBMkM7Ozs7O0lBQzNDLHdDQUEyQjs7Ozs7SUFDM0Isa0RBQThDOzs7OztJQUM5Qyx3Q0FBMEI7Ozs7O0lBQzFCLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZW5zdXJlSW5Cb3VuZHMsIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGdldEV2ZW50V2l0aFBvaW50IH0gZnJvbSAnLi9uei1yZXNpemFibGUtdXRpbHMnO1xuaW1wb3J0IHsgTnpSZXNpemFibGVTZXJ2aWNlIH0gZnJvbSAnLi9uei1yZXNpemFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50IH0gZnJvbSAnLi9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpSZXNpemVFdmVudCB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbD86IG51bWJlcjtcbiAgbW91c2VFdmVudD86IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotcmVzaXphYmxlXScsXG4gIGV4cG9ydEFzOiAnbnpSZXNpemFibGUnLFxuICBwcm92aWRlcnM6IFtOelJlc2l6YWJsZVNlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLXJlc2l6aW5nXSc6ICdyZXNpemluZycsXG4gICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlZW50ZXIoKScsXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlbGVhdmUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc2l6YWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56Qm91bmRzOiAnd2luZG93JyB8ICdwYXJlbnQnIHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gPSAncGFyZW50JztcbiAgQElucHV0KCkgbnpNYXhIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpNYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBuek1pbkhlaWdodDogbnVtYmVyID0gNDA7XG4gIEBJbnB1dCgpIG56TWluV2lkdGg6IG51bWJlciA9IDQwO1xuICBASW5wdXQoKSBuekdyaWRDb2x1bW5Db3VudDogbnVtYmVyID0gLTE7XG4gIEBJbnB1dCgpIG56TWF4Q29sdW1uOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgbnpNaW5Db2x1bW46IG51bWJlciA9IC0xO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2NrQXNwZWN0UmF0aW86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UHJldmlldzogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPE56UmVzaXplRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlc2l6ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpSZXNpemVFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVzaXplU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE56UmVzaXplRXZlbnQ+KCk7XG5cbiAgcmVzaXppbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbFJlY3Q6IENsaWVudFJlY3QgfCBET01SZWN0O1xuICBwcml2YXRlIGN1cnJlbnRIYW5kbGVFdmVudDogTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB8IG51bGw7XG4gIHByaXZhdGUgZ2hvc3RFbGVtZW50OiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHNpemVDYWNoZTogTnpSZXNpemVFdmVudCB8IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5oYW5kbGVNb3VzZURvd24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5yZXNpemluZyA9IHRydWU7XG4gICAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5zdGFydFJlc2l6aW5nKGV2ZW50Lm1vdXNlRXZlbnQpO1xuICAgICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBldmVudDtcbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgICB0aGlzLm56UmVzaXplU3RhcnQuZW1pdCh7XG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50Lm1vdXNlRXZlbnRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KCk7XG4gICAgICAgIHRoaXMuZW5kUmVzaXplKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmRvY3VtZW50TW91c2VNb3ZlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXplKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VlbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLm5leHQodHJ1ZSk7XG4gIH1cblxuICBvbk1vdXNlbGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UubW91c2VFbnRlcmVkJC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5wb3NpdGlvbjtcbiAgICBpZiAocG9zaXRpb24gPT09ICdzdGF0aWMnIHx8ICFwb3NpdGlvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICB9XG4gIH1cblxuICBjYWxjU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcik6IE56UmVzaXplRXZlbnQge1xuICAgIGxldCBuZXdXaWR0aDogbnVtYmVyO1xuICAgIGxldCBuZXdIZWlnaHQ6IG51bWJlcjtcbiAgICBsZXQgbWF4V2lkdGg6IG51bWJlcjtcbiAgICBsZXQgbWF4SGVpZ2h0OiBudW1iZXI7XG4gICAgbGV0IGNvbCA9IDA7XG4gICAgbGV0IHNwYW5XaWR0aCA9IDA7XG4gICAgbGV0IG1pbldpZHRoID0gdGhpcy5uek1pbldpZHRoO1xuICAgIGxldCBib3VuZFdpZHRoID0gSW5maW5pdHk7XG4gICAgbGV0IGJvdW5kSGVpZ2h0ID0gSW5maW5pdHk7XG4gICAgaWYgKHRoaXMubnpCb3VuZHMgPT09ICdwYXJlbnQnKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbCk7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgYm91bmRXaWR0aCA9IHBhcmVudFJlY3Qud2lkdGg7XG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gcGFyZW50UmVjdC5oZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm56Qm91bmRzID09PSAnd2luZG93Jykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGJvdW5kV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgYm91bmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm56Qm91bmRzICYmIHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm56Qm91bmRzLm5hdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgYm91bmRzUmVjdCA9IHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGJvdW5kV2lkdGggPSBib3VuZHNSZWN0LndpZHRoO1xuICAgICAgYm91bmRIZWlnaHQgPSBib3VuZHNSZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICBtYXhXaWR0aCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhXaWR0aCwgYm91bmRXaWR0aCk7XG4gICAgbWF4SGVpZ2h0ID0gZW5zdXJlSW5Cb3VuZHModGhpcy5uek1heEhlaWdodCwgYm91bmRIZWlnaHQpO1xuXG4gICAgaWYgKHRoaXMubnpHcmlkQ29sdW1uQ291bnQgIT09IC0xKSB7XG4gICAgICBzcGFuV2lkdGggPSBtYXhXaWR0aCAvIHRoaXMubnpHcmlkQ29sdW1uQ291bnQ7XG4gICAgICBtaW5XaWR0aCA9IHRoaXMubnpNaW5Db2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1pbkNvbHVtbiA6IG1pbldpZHRoO1xuICAgICAgbWF4V2lkdGggPSB0aGlzLm56TWF4Q29sdW1uICE9PSAtMSA/IHNwYW5XaWR0aCAqIHRoaXMubnpNYXhDb2x1bW4gOiBtYXhXaWR0aDtcbiAgICB9XG5cbiAgICBpZiAocmF0aW8gIT09IC0xKSB7XG4gICAgICBpZiAoLyhsZWZ0fHJpZ2h0KS9pLnRlc3QodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikpIHtcbiAgICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCk7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KG5ld1dpZHRoIC8gcmF0aW8sIHRoaXMubnpNaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xuICAgICAgICBpZiAobmV3SGVpZ2h0ID49IG1heEhlaWdodCB8fCBuZXdIZWlnaHQgPD0gdGhpcy5uek1pbkhlaWdodCkge1xuICAgICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIHRoaXMubnpNaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KG5ld0hlaWdodCAqIHJhdGlvLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcbiAgICAgICAgaWYgKG5ld1dpZHRoID49IG1heFdpZHRoIHx8IG5ld1dpZHRoIDw9IG1pbldpZHRoKSB7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCk7XG4gICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIHRoaXMubnpNaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm56R3JpZENvbHVtbkNvdW50ICE9PSAtMSkge1xuICAgICAgY29sID0gTWF0aC5yb3VuZChuZXdXaWR0aCAvIHNwYW5XaWR0aCk7XG4gICAgICBuZXdXaWR0aCA9IGNvbCAqIHNwYW5XaWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29sLFxuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgc2V0Q3Vyc29yKCk6IHZvaWQge1xuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICdjb2wtcmVzaXplJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICdyb3ctcmVzaXplJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICdud3NlLXJlc2l6ZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbmVzdy1yZXNpemUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgfVxuXG4gIHJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbFJlY3QgPSB0aGlzLmVsUmVjdDtcbiAgICBjb25zdCByZXNpemVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KGV2ZW50KTtcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5tb3VzZUV2ZW50KTtcbiAgICBsZXQgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLm56TG9ja0FzcGVjdFJhdGlvID8gd2lkdGggLyBoZWlnaHQgOiAtMTtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgd2lkdGggPSByZXNpemVFdmVudC5jbGllbnRYIC0gZWxSZWN0LmxlZnQ7XG4gICAgICAgIGhlaWdodCA9IHJlc2l6ZUV2ZW50LmNsaWVudFkgLSBlbFJlY3QudG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aCArIGhhbmRsZUV2ZW50LmNsaWVudFggLSByZXNpemVFdmVudC5jbGllbnRYO1xuICAgICAgICBoZWlnaHQgPSByZXNpemVFdmVudC5jbGllbnRZIC0gZWxSZWN0LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICAgIHdpZHRoID0gcmVzaXplRXZlbnQuY2xpZW50WCAtIGVsUmVjdC5sZWZ0O1xuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XG4gICAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQgKyBoYW5kbGVFdmVudC5jbGllbnRZIC0gcmVzaXplRXZlbnQuY2xpZW50WTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB3aWR0aCA9IHJlc2l6ZUV2ZW50LmNsaWVudFggLSBlbFJlY3QubGVmdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBoZWlnaHQgPSByZXNpemVFdmVudC5jbGllbnRZIC0gZWxSZWN0LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgd2lkdGggPSBlbFJlY3Qud2lkdGggKyBoYW5kbGVFdmVudC5jbGllbnRYIC0gcmVzaXplRXZlbnQuY2xpZW50WDtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuY2FsY1NpemUod2lkdGgsIGhlaWdodCwgcmF0aW8pO1xuICAgIHRoaXMuc2l6ZUNhY2hlID0geyAuLi5zaXplIH07XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubnpSZXNpemUuZW1pdCh7XG4gICAgICAgIC4uLnNpemUsXG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5uelByZXZpZXcpIHtcbiAgICAgIHRoaXMucHJldmlld1Jlc2l6ZShzaXplKTtcbiAgICB9XG4gIH1cblxuICBlbmRSZXNpemUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xuICAgIHRoaXMucmVtb3ZlR2hvc3RFbGVtZW50KCk7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZUNhY2hlXG4gICAgICA/IHsgLi4udGhpcy5zaXplQ2FjaGUgfVxuICAgICAgOiB7XG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxSZWN0LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbFJlY3QuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubnpSZXNpemVFbmQuZW1pdCh7XG4gICAgICAgIC4uLnNpemUsXG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNpemVDYWNoZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBudWxsO1xuICB9XG5cbiAgcHJldmlld1Jlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfTogTnpSZXNpemVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlR2hvc3RFbGVtZW50KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdob3N0RWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2hvc3RFbGVtZW50LCAnaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XG4gIH1cblxuICBjcmVhdGVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmdob3N0RWxlbWVudCkge1xuICAgICAgdGhpcy5naG9zdEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5naG9zdEVsZW1lbnQsICdjbGFzcycsICduei1yZXNpemFibGUtcHJldmlldycpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwsIHRoaXMuZ2hvc3RFbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZUdob3N0RWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5naG9zdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbCwgdGhpcy5naG9zdEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmdob3N0RWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5zaXplQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19