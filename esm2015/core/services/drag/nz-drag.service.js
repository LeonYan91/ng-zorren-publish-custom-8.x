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
    const e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
export class NzDragService {
    /**
     * @param {?} rendererFactory2
     */
    constructor(rendererFactory2) {
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
    requestDraggingSequence(event) {
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
        (e) => {
            return {
                x: e.pageX - (/** @type {?} */ (this.currentStartingPoint)).x,
                y: e.pageY - (/** @type {?} */ (this.currentStartingPoint)).y
            };
        })), filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => Math.abs(e.x) > this.draggingThreshold || Math.abs(e.y) > this.draggingThreshold)), finalize((/**
         * @return {?}
         */
        () => this.teardownDraggingSequence())));
    }
    /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    registerDraggingHandler(isTouch) {
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', (/**
                 * @return {?}
                 */
                () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
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
                e => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', (/**
                 * @return {?}
                 */
                () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    teardownDraggingSequence() {
        this.currentDraggingSequence = null;
    }
}
NzDragService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzDragService.ctorParameters = () => [
    { type: RendererFactory2 }
];
/** @nocollapse */ NzDragService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDragService_Factory() { return new NzDragService(i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDragService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZHJhZy9uei1kcmFnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUVoRSxvQkFHQzs7O0lBRkMsa0JBQVU7O0lBQ1Ysa0JBQVU7Ozs7O0FBS1osMEJBSUM7Ozs7OztJQUhDLGlEQUF5Qjs7OztJQUV6QixpREFBaUI7Ozs7OztBQUduQixTQUFTLGVBQWUsQ0FBQyxLQUE4Qjs7VUFDL0MsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNqQyxPQUFPO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ1YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO0tBQ1gsQ0FBQztBQUNKLENBQUM7Ozs7QUFRRCxNQUFNLE9BQU8sYUFBYTs7OztJQU94QixZQUFZLGdCQUFrQztRQU50QyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsNEJBQXVCLEdBQXVDLElBQUksQ0FBQztRQUNuRSx5QkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUk5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxLQUE4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SUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDekM7Z0JBQ0gsQ0FBQyxFQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVPLHdCQUF3QjtRQUM5QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7OztZQTNFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFoQytCLGdCQUFnQjs7Ozs7Ozs7SUFrQzlDLDBDQUE4Qjs7Ozs7SUFDOUIsZ0RBQTJFOzs7OztJQUMzRSw2Q0FBa0Q7Ozs7O0lBQ2xELHVDQUFnRDs7Ozs7SUFDaEQsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaW5hbGl6ZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBnZXRFdmVudFBvc2l0aW9uLCBpc1RvdWNoRXZlbnQgfSBmcm9tICcuLi8uLi91dGlsL2RvbSc7XG5cbmludGVyZmFjZSBQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG50eXBlIERlbHRhID0gUG9pbnQ7XG5cbmludGVyZmFjZSBIYW5kbGVySXRlbSB7XG4gIGhhbmRsZXI/KGU6IEV2ZW50KTogdm9pZDtcblxuICB0ZWFyZG93bigpOiB2b2lkO1xufVxuXG5mdW5jdGlvbiBnZXRQYWdlUG9zaXRpb24oZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogUG9pbnQge1xuICBjb25zdCBlID0gZ2V0RXZlbnRQb3NpdGlvbihldmVudCk7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZSBhIGdsb2JhbCBkcmFnZ2luZyBzZXJ2aWNlIHRvIG90aGVyIGNvbXBvbmVudHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56RHJhZ1NlcnZpY2Uge1xuICBwcml2YXRlIGRyYWdnaW5nVGhyZXNob2xkID0gNTtcbiAgcHJpdmF0ZSBjdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZTogU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2g+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY3VycmVudFN0YXJ0aW5nUG9pbnQ6IFBvaW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgaGFuZGxlUmVnaXN0cnkgPSBuZXcgU2V0PEhhbmRsZXJJdGVtPigpO1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgcmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogT2JzZXJ2YWJsZTxEZWx0YT4ge1xuICAgIGlmICghdGhpcy5oYW5kbGVSZWdpc3RyeS5zaXplKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyRHJhZ2dpbmdIYW5kbGVyKGlzVG91Y2hFdmVudChldmVudCkpO1xuICAgIH1cblxuICAgIC8vIENvbXBsZXRlIGxhc3QgZHJhZ2dpbmcgc2VxdWVuY2UgaWYgYSBuZXcgdGFyZ2V0IGlzIGRyYWdnZWQuXG4gICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcbiAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50ID0gZ2V0UGFnZVBvc2l0aW9uKGV2ZW50KTtcbiAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoPigpO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UucGlwZShcbiAgICAgIG1hcCgoZTogTW91c2VFdmVudCB8IFRvdWNoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogZS5wYWdlWCAtIHRoaXMuY3VycmVudFN0YXJ0aW5nUG9pbnQhLngsXG4gICAgICAgICAgeTogZS5wYWdlWSAtIHRoaXMuY3VycmVudFN0YXJ0aW5nUG9pbnQhLnlcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChlOiBEZWx0YSkgPT4gTWF0aC5hYnMoZS54KSA+IHRoaXMuZHJhZ2dpbmdUaHJlc2hvbGQgfHwgTWF0aC5hYnMoZS55KSA+IHRoaXMuZHJhZ2dpbmdUaHJlc2hvbGQpLFxuICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy50ZWFyZG93bkRyYWdnaW5nU2VxdWVuY2UoKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlckRyYWdnaW5nSGFuZGxlcihpc1RvdWNoOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaG1vdmUnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLm5leHQoZS50b3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYW5kbGVSZWdpc3RyeS5hZGQoe1xuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5uZXh0KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYW5kbGVSZWdpc3RyeS5hZGQoe1xuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRlYXJkb3duRHJhZ2dpbmdTZXF1ZW5jZSgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlID0gbnVsbDtcbiAgfVxufVxuIl19