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
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { isTouchEvent } from 'ng-zorro-antd/core';
export class NzResizableService {
    // tslint:disable-next-line:no-any
    /**
     * @param {?} ngZone
     * @param {?} document
     */
    constructor(ngZone, document) {
        this.ngZone = ngZone;
        this.listeners = new Map();
        this.handleMouseDown$ = new Subject();
        this.documentMouseUp$ = new Subject();
        this.documentMouseMove$ = new Subject();
        this.mouseEntered$ = new Subject();
        this.document = document;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    startResizing(event) {
        /** @type {?} */
        const _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        /** @type {?} */
        const moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        /** @type {?} */
        const upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        /** @type {?} */
        const moveEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.documentMouseMove$.next(e);
        });
        /** @type {?} */
        const upEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.documentMouseUp$.next(e);
            this.clearListeners();
        });
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.listeners.forEach((/**
             * @param {?} handler
             * @param {?} name
             * @return {?}
             */
            (handler, name) => {
                this.document.addEventListener(name, (/** @type {?} */ (handler)));
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearListeners() {
        this.listeners.forEach((/**
         * @param {?} handler
         * @param {?} name
         * @return {?}
         */
        (handler, name) => {
            this.document.removeEventListener(name, (/** @type {?} */ (handler)));
        }));
        this.listeners.clear();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    }
}
NzResizableService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzResizableService.ctorParameters = () => [
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.listeners;
    /** @type {?} */
    NzResizableService.prototype.handleMouseDown$;
    /** @type {?} */
    NzResizableService.prototype.documentMouseUp$;
    /** @type {?} */
    NzResizableService.prototype.documentMouseMove$;
    /** @type {?} */
    NzResizableService.prototype.mouseEntered$;
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlsRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFVN0IsWUFBb0IsTUFBYyxFQUFvQixRQUFhO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSMUIsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFvRCxDQUFDO1FBRWhGLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFnQyxDQUFDO1FBQy9ELHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUEyQixDQUFDO1FBQzFELHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUEyQixDQUFDO1FBQzVELGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUlyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUE4Qjs7Y0FDcEMsYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOztjQUNoQixTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVc7O2NBQ3JELE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Y0FDaEQsZ0JBQWdCOzs7O1FBQUcsQ0FBQyxDQUEwQixFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUE7O2NBQ0ssY0FBYzs7OztRQUFHLENBQUMsQ0FBMEIsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsbUJBQUEsT0FBTyxFQUFpQixDQUFDLENBQUM7WUFDakUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsbUJBQUEsT0FBTyxFQUFpQixDQUFDLENBQUM7UUFDcEUsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBbkRGLFVBQVU7Ozs7WUFQa0IsTUFBTTs0Q0FrQkksTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7SUFUcEQsc0NBQTJCOzs7OztJQUMzQix1Q0FBZ0Y7O0lBRWhGLDhDQUErRDs7SUFDL0QsOENBQTBEOztJQUMxRCxnREFBNEQ7O0lBQzVELDJDQUF1Qzs7Ozs7SUFHM0Isb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBpc1RvdWNoRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpSZXNpemFibGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIHByaXZhdGUgbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ+KCk7XG5cbiAgaGFuZGxlTW91c2VEb3duJCA9IG5ldyBTdWJqZWN0PE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQ+KCk7XG4gIGRvY3VtZW50TW91c2VVcCQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcbiAgZG9jdW1lbnRNb3VzZU1vdmUkID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KCk7XG4gIG1vdXNlRW50ZXJlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIHN0YXJ0UmVzaXppbmcoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgX2lzVG91Y2hFdmVudCA9IGlzVG91Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIGNvbnN0IG1vdmVFdmVudCA9IF9pc1RvdWNoRXZlbnQgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xuICAgIGNvbnN0IHVwRXZlbnQgPSBfaXNUb3VjaEV2ZW50ID8gJ3RvdWNoZW5kJyA6ICdtb3VzZXVwJztcbiAgICBjb25zdCBtb3ZlRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRvY3VtZW50TW91c2VNb3ZlJC5uZXh0KGUpO1xuICAgIH07XG4gICAgY29uc3QgdXBFdmVudEhhbmRsZXIgPSAoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KGUpO1xuICAgICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIH07XG5cbiAgICB0aGlzLmxpc3RlbmVycy5zZXQobW92ZUV2ZW50LCBtb3ZlRXZlbnRIYW5kbGVyKTtcbiAgICB0aGlzLmxpc3RlbmVycy5zZXQodXBFdmVudCwgdXBFdmVudEhhbmRsZXIpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgoaGFuZGxlciwgbmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChoYW5kbGVyLCBuYW1lKSA9PiB7XG4gICAgICB0aGlzLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24kLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kb2N1bWVudE1vdXNlVXAkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLm1vdXNlRW50ZXJlZCQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XG4gIH1cbn1cbiJdfQ==