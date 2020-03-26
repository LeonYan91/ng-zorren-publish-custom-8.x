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
import { Injectable, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';
import { getEventPosition, isTouchEvent } from '../../util/dom';
import * as i0 from "@angular/core";
/**
 * @record
 */
function Point() { }
if (false) {
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
/**
 * @record
 */
function HandlerItem() { }
if (false) {
    /**
     * @param {?} e
     * @return {?}
     */
    HandlerItem.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    HandlerItem.prototype.teardown = function () { };
}
/**
 * @param {?} event
 * @return {?}
 */
function getPagePosition(event) {
    /** @type {?} */
    var e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
var NzDragService = /** @class */ (function () {
    function NzDragService(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NzDragService.prototype.requestDraggingSequence = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(isTouchEvent(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return {
                x: e.pageX - (/** @type {?} */ (_this.currentStartingPoint)).x,
                y: e.pageY - (/** @type {?} */ (_this.currentStartingPoint)).y
            };
        })), filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return Math.abs(e.x) > _this.draggingThreshold || Math.abs(e.y) > _this.draggingThreshold; })), finalize((/**
         * @return {?}
         */
        function () { return _this.teardownDraggingSequence(); })));
    };
    /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    NzDragService.prototype.registerDraggingHandler = /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    function (isTouch) {
        var _this = this;
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', (/**
                 * @return {?}
                 */
                function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', (/**
                 * @return {?}
                 */
                function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDragService.prototype.teardownDraggingSequence = /**
     * @private
     * @return {?}
     */
    function () {
        this.currentDraggingSequence = null;
    };
    NzDragService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDragService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzDragService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDragService_Factory() { return new NzDragService(i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDragService, providedIn: "root" });
    return NzDragService;
}());
export { NzDragService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.draggingThreshold;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentDraggingSequence;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentStartingPoint;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.handleRegistry;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZHJhZy9uei1kcmFnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUVoRSxvQkFHQzs7O0lBRkMsa0JBQVU7O0lBQ1Ysa0JBQVU7Ozs7O0FBS1osMEJBSUM7Ozs7OztJQUhDLGlEQUF5Qjs7OztJQUV6QixpREFBaUI7Ozs7OztBQUduQixTQUFTLGVBQWUsQ0FBQyxLQUE4Qjs7UUFDL0MsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNqQyxPQUFPO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ1YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO0tBQ1gsQ0FBQztBQUNKLENBQUM7Ozs7QUFLRDtJQVVFLHVCQUFZLGdCQUFrQztRQU50QyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsNEJBQXVCLEdBQXVDLElBQUksQ0FBQztRQUNuRSx5QkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUk5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCwrQ0FBdUI7Ozs7SUFBdkIsVUFBd0IsS0FBOEI7UUFBdEQs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QUksS0FBSSxDQUFDLHVCQUF1QixFQUFFO3dCQUNoQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3pDO2dCQUNILENBQUMsRUFBQzthQUNILENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxnREFBd0I7Ozs7SUFBaEM7UUFDRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7O2dCQTNFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWhDK0IsZ0JBQWdCOzs7d0JBUmhEO0NBa0hDLEFBNUVELElBNEVDO1NBekVZLGFBQWE7Ozs7OztJQUN4QiwwQ0FBOEI7Ozs7O0lBQzlCLGdEQUEyRTs7Ozs7SUFDM0UsNkNBQWtEOzs7OztJQUNsRCx1Q0FBZ0Q7Ozs7O0lBQ2hELGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmluYWxpemUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZ2V0RXZlbnRQb3NpdGlvbiwgaXNUb3VjaEV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbC9kb20nO1xuXG5pbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxudHlwZSBEZWx0YSA9IFBvaW50O1xuXG5pbnRlcmZhY2UgSGFuZGxlckl0ZW0ge1xuICBoYW5kbGVyPyhlOiBFdmVudCk6IHZvaWQ7XG5cbiAgdGVhcmRvd24oKTogdm9pZDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFnZVBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IFBvaW50IHtcbiAgY29uc3QgZSA9IGdldEV2ZW50UG9zaXRpb24oZXZlbnQpO1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGUgYSBnbG9iYWwgZHJhZ2dpbmcgc2VydmljZSB0byBvdGhlciBjb21wb25lbnRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekRyYWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkcmFnZ2luZ1RocmVzaG9sZCA9IDU7XG4gIHByaXZhdGUgY3VycmVudERyYWdnaW5nU2VxdWVuY2U6IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGN1cnJlbnRTdGFydGluZ1BvaW50OiBQb2ludCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGhhbmRsZVJlZ2lzdHJ5ID0gbmV3IFNldDxIYW5kbGVySXRlbT4oKTtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHJlcXVlc3REcmFnZ2luZ1NlcXVlbmNlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IE9ic2VydmFibGU8RGVsdGE+IHtcbiAgICBpZiAoIXRoaXMuaGFuZGxlUmVnaXN0cnkuc2l6ZSkge1xuICAgICAgdGhpcy5yZWdpc3RlckRyYWdnaW5nSGFuZGxlcihpc1RvdWNoRXZlbnQoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvLyBDb21wbGV0ZSBsYXN0IGRyYWdnaW5nIHNlcXVlbmNlIGlmIGEgbmV3IHRhcmdldCBpcyBkcmFnZ2VkLlxuICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XG4gICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U3RhcnRpbmdQb2ludCA9IGdldFBhZ2VQb3NpdGlvbihldmVudCk7XG4gICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaD4oKTtcblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLnBpcGUoXG4gICAgICBtYXAoKGU6IE1vdXNlRXZlbnQgfCBUb3VjaCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGUucGFnZVggLSB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50IS54LFxuICAgICAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50IS55XG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoZTogRGVsdGEpID0+IE1hdGguYWJzKGUueCkgPiB0aGlzLmRyYWdnaW5nVGhyZXNob2xkIHx8IE1hdGguYWJzKGUueSkgPiB0aGlzLmRyYWdnaW5nVGhyZXNob2xkKSxcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMudGVhcmRvd25EcmFnZ2luZ1NlcXVlbmNlKCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJEcmFnZ2luZ0hhbmRsZXIoaXNUb3VjaDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc1RvdWNoKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XG4gICAgICAgIHRlYXJkb3duOiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2htb3ZlJywgKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5uZXh0KGUudG91Y2hlc1swXSB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XG4gICAgICAgIHRlYXJkb3duOiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UubmV4dChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0ZWFyZG93bkRyYWdnaW5nU2VxdWVuY2UoKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==