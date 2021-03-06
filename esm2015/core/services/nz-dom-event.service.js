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
import { Injectable, NgZone, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
function Listener() { }
if (false) {
    /** @type {?} */
    Listener.prototype.countOfListeners;
    /**
     * @param {?} e
     * @return {?}
     */
    Listener.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    Listener.prototype.unsubscribe = function () { };
}
export class NzDomEventService {
    /**
     * @param {?} ngZone
     * @param {?} rendererFactory2
     */
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    registerResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: (/**
                 * @return {?}
                 */
                () => {
                    this.resizeSource.next();
                }),
                countOfListeners: 0
            });
        }
        /** @type {?} */
        const listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    }
    /**
     * @return {?}
     */
    unregisterResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        /** @type {?} */
        const listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStopListener(listener);
    }
    /**
     * @private
     * @param {?} l
     * @param {?} name
     * @return {?}
     */
    tryToStartListener(l, name) {
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (l.countOfListeners === 1) {
                l.unsubscribe = this.renderer.listen('window', name, l.handler);
            }
        }));
    }
    /**
     * @private
     * @param {?} l
     * @return {?}
     */
    tryToStopListener(l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            (/** @type {?} */ (l.unsubscribe))();
            l.unsubscribe = undefined;
        }
    }
}
NzDomEventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzDomEventService.ctorParameters = () => [
    { type: NgZone },
    { type: RendererFactory2 }
];
/** @nocollapse */ NzDomEventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDomEventService_Factory() { return new NzDomEventService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDomEventService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.resizeSource;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.domEventListeners;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.rendererFactory2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1kb20tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUUzQyx1QkFJQzs7O0lBREMsb0NBQXlCOzs7OztJQUZ6Qiw4Q0FBd0I7Ozs7SUFDeEIsaURBQXFCOztBQU92QixNQUFNLE9BQU8saUJBQWlCOzs7OztJQUs1QixZQUFvQixNQUFjLEVBQVUsZ0JBQWtDO1FBQTFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjdELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUkvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25DLE9BQU87OztnQkFBRSxHQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUMsQ0FBQTtnQkFDRCxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3BCLENBQUMsQ0FBQztTQUNKOztjQUVLLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLE9BQU87U0FDUjs7Y0FFSyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQztRQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLENBQVcsRUFBRSxJQUFZO1FBQ2xELENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakU7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLENBQVc7UUFDbkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDNUIsbUJBQUEsQ0FBQyxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUFwREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWm9CLE1BQU07WUFBYSxnQkFBZ0I7Ozs7Ozs7O0lBY3RELHlDQUFvRDs7Ozs7SUFDcEQsOENBQWlFOzs7OztJQUNqRSxxQ0FBNEI7Ozs7O0lBRWhCLG1DQUFzQjs7Ozs7SUFBRSw2Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIExpc3RlbmVyIHtcbiAgaGFuZGxlcihlOiBFdmVudCk6IHZvaWQ7XG4gIHVuc3Vic2NyaWJlPygpOiB2b2lkO1xuICBjb3VudE9mTGlzdGVuZXJzOiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56RG9tRXZlbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSByZXNpemVTb3VyY2UgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvbUV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIExpc3RlbmVyPigpO1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmhhcygncmVzaXplJykpIHtcbiAgICAgIHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuc2V0KCdyZXNpemUnLCB7XG4gICAgICAgIGhhbmRsZXI6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLnJlc2l6ZVNvdXJjZS5uZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50T2ZMaXN0ZW5lcnM6IDBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5kb21FdmVudExpc3RlbmVycy5nZXQoJ3Jlc2l6ZScpITtcbiAgICB0aGlzLnRyeVRvU3RhcnRMaXN0ZW5lcihsaXN0ZW5lciwgJ3Jlc2l6ZScpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzaXplU291cmNlLnBpcGUoYXVkaXRUaW1lKDE2KSk7XG4gIH1cblxuICB1bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmhhcygncmVzaXplJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuZ2V0KCdyZXNpemUnKSE7XG4gICAgdGhpcy50cnlUb1N0b3BMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIH1cblxuICBwcml2YXRlIHRyeVRvU3RhcnRMaXN0ZW5lcihsOiBMaXN0ZW5lciwgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbC5jb3VudE9mTGlzdGVuZXJzICs9IDE7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKGwuY291bnRPZkxpc3RlbmVycyA9PT0gMSkge1xuICAgICAgICBsLnVuc3Vic2NyaWJlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsIG5hbWUsIGwuaGFuZGxlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHRyeVRvU3RvcExpc3RlbmVyKGw6IExpc3RlbmVyKTogdm9pZCB7XG4gICAgbC5jb3VudE9mTGlzdGVuZXJzIC09IDE7XG4gICAgaWYgKGwuY291bnRPZkxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgbC51bnN1YnNjcmliZSEoKTtcbiAgICAgIGwudW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=