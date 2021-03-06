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
export class DrawerBuilderForService {
    /**
     * @param {?} overlay
     * @param {?} options
     */
    constructor(overlay, options) {
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        /**
         * pick {\@link NzDrawerOptions.nzOnCancel} and omit this option
         */
        const _a = this.options, { nzOnCancel } = _a, componentOption = tslib_1.__rest(_a, ["nzOnCancel"]);
        this.createDrawer();
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        (/** @type {?} */ (this.drawerRef)).instance.savePreviouslyFocusedElement();
        (/** @type {?} */ (this.drawerRef)).instance.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this.drawerRef)).instance.open();
        }));
        (/** @type {?} */ (this.drawerRef)).instance.nzOnClose.subscribe((/**
         * @return {?}
         */
        () => {
            if (nzOnCancel) {
                nzOnCancel().then((/**
                 * @param {?} canClose
                 * @return {?}
                 */
                canClose => {
                    if (canClose !== false) {
                        (/** @type {?} */ (this.drawerRef)).instance.close();
                    }
                }));
            }
            else {
                (/** @type {?} */ (this.drawerRef)).instance.close();
            }
        }));
        (/** @type {?} */ (this.drawerRef)).instance.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.overlayRef.dispose();
            this.drawerRef = null;
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        }));
    }
    /**
     * @return {?}
     */
    getInstance() {
        return (/** @type {?} */ (this.drawerRef)) && (/** @type {?} */ (this.drawerRef)).instance;
    }
    /**
     * @return {?}
     */
    createDrawer() {
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    updateOptions(options) {
        Object.assign((/** @type {?} */ (this.drawerRef)).instance, options);
    }
}
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
export class NzDrawerService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
    }
    // tslint:disable-next-line:no-any
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    create(options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    }
}
NzDrawerService.decorators = [
    { type: Injectable, args: [{ providedIn: NzDrawerServiceModule },] }
];
/** @nocollapse */
NzDrawerService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ NzDrawerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDrawerService_Factory() { return new NzDrawerService(i0.ɵɵinject(i1.Overlay)); }, token: NzDrawerService, providedIn: i2.NzDrawerServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDrawerService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RyYXdlci8iLCJzb3VyY2VzIjpbIm56LWRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFFbkUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFLbEMsWUFBb0IsT0FBZ0IsRUFBVSxPQUF3QjtRQUFsRCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFGOUQsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7O2NBSW5DLGlCQUFpRCxFQUFqRCxFQUFFLFVBQVUsT0FBcUMsRUFBbkMsb0RBQWtCO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BDLHlEQUF5RDtRQUN6RCxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDeEQsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDdEYsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztRQUNILG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNoRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLEVBQUUsQ0FBQyxJQUFJOzs7O2dCQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMzQixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7d0JBQ3RCLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ2xDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNsQztRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBbUM7UUFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjs7Ozs7O0lBOUNDLDRDQUEwRDs7Ozs7SUFDMUQsNkNBQStCOzs7OztJQUMvQiwrQ0FBMkM7Ozs7O0lBRS9CLDBDQUF3Qjs7Ozs7SUFBRSwwQ0FBZ0M7O0FBNkN4RSxNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQzs7Ozs7OztJQUd4QyxNQUFNLENBQTRCLE9BQThCO1FBQzlELE9BQU8sSUFBSSx1QkFBdUIsQ0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdFLENBQUM7OztZQVBGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRTs7OztZQTNEeEMsT0FBTzs7Ozs7Ozs7SUE2REYsa0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zLCBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJhd2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJSZWYgfSBmcm9tICcuL256LWRyYXdlci1yZWYnO1xuaW1wb3J0IHsgTnpEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL256LWRyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEcmF3ZXJTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1kcmF3ZXIuc2VydmljZS5tb2R1bGUnO1xuXG5leHBvcnQgY2xhc3MgRHJhd2VyQnVpbGRlckZvclNlcnZpY2U8Uj4ge1xuICBwcml2YXRlIGRyYXdlclJlZjogQ29tcG9uZW50UmVmPE56RHJhd2VyQ29tcG9uZW50PiB8IG51bGw7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBvcHRpb25zOiBOekRyYXdlck9wdGlvbnMpIHtcbiAgICAvKiogcGljayB7QGxpbmsgTnpEcmF3ZXJPcHRpb25zLm56T25DYW5jZWx9IGFuZCBvbWl0IHRoaXMgb3B0aW9uICovXG4gICAgY29uc3QgeyBuek9uQ2FuY2VsLCAuLi5jb21wb25lbnRPcHRpb24gfSA9IHRoaXMub3B0aW9ucztcbiAgICB0aGlzLmNyZWF0ZURyYXdlcigpO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucyhjb21wb25lbnRPcHRpb24pO1xuICAgIC8vIFByZXZlbnQgcmVwZWF0ZWRseSBvcGVuIGRyYXdlciB3aGVuIHRhcCBmb2N1cyBlbGVtZW50LlxuICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XG4gICAgdGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlLm56T25WaWV3SW5pdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2Uub3BlbigpO1xuICAgIH0pO1xuICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5uek9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmIChuek9uQ2FuY2VsKSB7XG4gICAgICAgIG56T25DYW5jZWwoKS50aGVuKGNhbkNsb3NlID0+IHtcbiAgICAgICAgICBpZiAoY2FuQ2xvc2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UuYWZ0ZXJDbG9zZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5kcmF3ZXJSZWYgPSBudWxsO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEluc3RhbmNlKCk6IE56RHJhd2VyUmVmPFI+IHtcbiAgICByZXR1cm4gdGhpcy5kcmF3ZXJSZWYhICYmIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZTtcbiAgfVxuXG4gIGNyZWF0ZURyYXdlcigpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XG4gICAgdGhpcy5kcmF3ZXJSZWYgPSB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTnpEcmF3ZXJDb21wb25lbnQpKTtcbiAgfVxuXG4gIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogTnpEcmF3ZXJPcHRpb25zT2ZDb21wb25lbnQpOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZSwgb3B0aW9ucyk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiBOekRyYXdlclNlcnZpY2VNb2R1bGUgfSlcbmV4cG9ydCBjbGFzcyBOekRyYXdlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjcmVhdGU8VCA9IGFueSwgRCA9IGFueSwgUiA9IGFueT4ob3B0aW9uczogTnpEcmF3ZXJPcHRpb25zPFQsIEQ+KTogTnpEcmF3ZXJSZWY8Uj4ge1xuICAgIHJldHVybiBuZXcgRHJhd2VyQnVpbGRlckZvclNlcnZpY2U8Uj4odGhpcy5vdmVybGF5LCBvcHRpb25zKS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=