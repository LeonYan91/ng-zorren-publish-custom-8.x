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
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerComponent } from './nz-drawer.component';
import { NzDrawerServiceModule } from './nz-drawer.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-drawer.service.module";
/**
 * @template R
 */
var /**
 * @template R
 */
DrawerBuilderForService = /** @class */ (function () {
    function DrawerBuilderForService(overlay, options) {
        var _this = this;
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        /**
         * pick {\@link NzDrawerOptions.nzOnCancel} and omit this option
         */
        var _a = this.options, nzOnCancel = _a.nzOnCancel, componentOption = tslib_1.__rest(_a, ["nzOnCancel"]);
        this.createDrawer();
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        (/** @type {?} */ (this.drawerRef)).instance.savePreviouslyFocusedElement();
        (/** @type {?} */ (this.drawerRef)).instance.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            (/** @type {?} */ (_this.drawerRef)).instance.open();
        }));
        (/** @type {?} */ (this.drawerRef)).instance.nzOnClose.subscribe((/**
         * @return {?}
         */
        function () {
            if (nzOnCancel) {
                nzOnCancel().then((/**
                 * @param {?} canClose
                 * @return {?}
                 */
                function (canClose) {
                    if (canClose !== false) {
                        (/** @type {?} */ (_this.drawerRef)).instance.close();
                    }
                }));
            }
            else {
                (/** @type {?} */ (_this.drawerRef)).instance.close();
            }
        }));
        (/** @type {?} */ (this.drawerRef)).instance.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.overlayRef.dispose();
            _this.drawerRef = null;
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        }));
    }
    /**
     * @return {?}
     */
    DrawerBuilderForService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.drawerRef)) && (/** @type {?} */ (this.drawerRef)).instance;
    };
    /**
     * @return {?}
     */
    DrawerBuilderForService.prototype.createDrawer = /**
     * @return {?}
     */
    function () {
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    DrawerBuilderForService.prototype.updateOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        Object.assign((/** @type {?} */ (this.drawerRef)).instance, options);
    };
    return DrawerBuilderForService;
}());
/**
 * @template R
 */
export { DrawerBuilderForService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.drawerRef;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.options;
}
var NzDrawerService = /** @class */ (function () {
    function NzDrawerService(overlay) {
        this.overlay = overlay;
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    NzDrawerService.prototype.create = 
    // tslint:disable-next-line:no-any
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    };
    NzDrawerService.decorators = [
        { type: Injectable, args: [{ providedIn: NzDrawerServiceModule },] }
    ];
    /** @nocollapse */
    NzDrawerService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzDrawerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDrawerService_Factory() { return new NzDrawerService(i0.ɵɵinject(i1.Overlay)); }, token: NzDrawerService, providedIn: i2.NzDrawerServiceModule });
    return NzDrawerService;
}());
export { NzDrawerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDrawerService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RyYXdlci8iLCJzb3VyY2VzIjpbIm56LWRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFFbkU7Ozs7SUFLRSxpQ0FBb0IsT0FBZ0IsRUFBVSxPQUF3QjtRQUF0RSxpQkE0QkM7UUE1Qm1CLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUY5RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7WUFJbkMsaUJBQWlELEVBQS9DLDBCQUFVLEVBQUUsb0RBQWtCO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BDLHlEQUF5RDtRQUN6RCxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDeEQsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUNqRixtQkFBQSxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO1FBQ0gsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUzs7O1FBQUM7WUFDM0MsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsVUFBVSxFQUFFLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLFFBQVE7b0JBQ3hCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTt3QkFDdEIsbUJBQUEsS0FBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDbEM7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxtQkFBQSxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQy9FLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDZDQUFXOzs7SUFBWDtRQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELDhDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxPQUFtQztRQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQzs7Ozs7Ozs7OztJQTlDQyw0Q0FBMEQ7Ozs7O0lBQzFELDZDQUErQjs7Ozs7SUFDL0IsK0NBQTJDOzs7OztJQUUvQiwwQ0FBd0I7Ozs7O0lBQUUsMENBQWdDOztBQTRDeEU7SUFFRSx5QkFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFHLENBQUM7SUFFeEMsa0NBQWtDOzs7Ozs7O0lBQ2xDLGdDQUFNOzs7Ozs7O0lBQU4sVUFBa0MsT0FBOEI7UUFDOUQsT0FBTyxJQUFJLHVCQUF1QixDQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0UsQ0FBQzs7Z0JBUEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFOzs7O2dCQTNEeEMsT0FBTzs7OzBCQVJoQjtDQTJFQyxBQVJELElBUUM7U0FQWSxlQUFlOzs7Ozs7SUFDZCxrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMsIE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcmF3ZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBOekRyYXdlclJlZiB9IGZyb20gJy4vbnotZHJhd2VyLXJlZic7XG5pbXBvcnQgeyBOekRyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRyYXdlclNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LWRyYXdlci5zZXJ2aWNlLm1vZHVsZSc7XG5cbmV4cG9ydCBjbGFzcyBEcmF3ZXJCdWlsZGVyRm9yU2VydmljZTxSPiB7XG4gIHByaXZhdGUgZHJhd2VyUmVmOiBDb21wb25lbnRSZWY8TnpEcmF3ZXJDb21wb25lbnQ+IHwgbnVsbDtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIG9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucykge1xuICAgIC8qKiBwaWNrIHtAbGluayBOekRyYXdlck9wdGlvbnMubnpPbkNhbmNlbH0gYW5kIG9taXQgdGhpcyBvcHRpb24gKi9cbiAgICBjb25zdCB7IG56T25DYW5jZWwsIC4uLmNvbXBvbmVudE9wdGlvbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHRoaXMuY3JlYXRlRHJhd2VyKCk7XG4gICAgdGhpcy51cGRhdGVPcHRpb25zKGNvbXBvbmVudE9wdGlvbik7XG4gICAgLy8gUHJldmVudCByZXBlYXRlZGx5IG9wZW4gZHJhd2VyIHdoZW4gdGFwIGZvY3VzIGVsZW1lbnQuXG4gICAgdGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UubnpPblZpZXdJbml0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5vcGVuKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlLm56T25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKG56T25DYW5jZWwpIHtcbiAgICAgICAgbnpPbkNhbmNlbCgpLnRoZW4oY2FuQ2xvc2UgPT4ge1xuICAgICAgICAgIGlmIChjYW5DbG9zZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5hZnRlckNsb3NlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmRyYXdlclJlZiA9IG51bGw7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogTnpEcmF3ZXJSZWY8Uj4ge1xuICAgIHJldHVybiB0aGlzLmRyYXdlclJlZiEgJiYgdGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlO1xuICB9XG5cbiAgY3JlYXRlRHJhd2VyKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcbiAgICB0aGlzLmRyYXdlclJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChOekRyYXdlckNvbXBvbmVudCkpO1xuICB9XG5cbiAgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlLCBvcHRpb25zKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46IE56RHJhd2VyU2VydmljZU1vZHVsZSB9KVxuZXhwb3J0IGNsYXNzIE56RHJhd2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNyZWF0ZTxUID0gYW55LCBEID0gYW55LCBSID0gYW55PihvcHRpb25zOiBOekRyYXdlck9wdGlvbnM8VCwgRD4pOiBOekRyYXdlclJlZjxSPiB7XG4gICAgcmV0dXJuIG5ldyBEcmF3ZXJCdWlsZGVyRm9yU2VydmljZTxSPih0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==