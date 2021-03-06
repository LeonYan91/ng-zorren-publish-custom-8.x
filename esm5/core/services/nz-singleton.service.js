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
// tslint:disable no-any
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as i0 from "@angular/core";
/**
 * @record
 */
function SingletonRegistryItem() { }
if (false) {
    /** @type {?} */
    SingletonRegistryItem.prototype.target;
}
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 * @type {?}
 */
var testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
var NzSingletonService = /** @class */ (function () {
    function NzSingletonService() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    Object.defineProperty(NzSingletonService.prototype, "singletonRegistry", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    NzSingletonService.prototype.registerSingletonWithKey = /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    function (key, target) {
        /** @type {?} */
        var alreadyHave = this.singletonRegistry.has(key);
        /** @type {?} */
        var item = alreadyHave ? (/** @type {?} */ (this.singletonRegistry.get(key))) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    NzSingletonService.prototype.getSingletonWithKey = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.singletonRegistry.has(key) ? ((/** @type {?} */ ((/** @type {?} */ (this.singletonRegistry.get(key))).target))) : null;
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    NzSingletonService.prototype.withNewTarget = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return {
            target: target
        };
    };
    NzSingletonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NzSingletonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
    return NzSingletonService;
}());
export { NzSingletonService };
if (false) {
    /**
     * This registry is used to register singleton in dev mode.
     * So that singletons get destroyed when hot module reload happens.
     *
     * This works in prod mode too but with no specific effect.
     * @type {?}
     * @private
     */
    NzSingletonService.prototype._singletonRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1zaW5nbGV0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFFMUQsb0NBRUM7OztJQURDLHVDQUFZOzs7Ozs7O0lBT1Isa0JBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDOzs7OztBQU1uRTtJQUFBOzs7Ozs7O1FBY1UsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDLENBQUM7S0FvQnZFO0lBOUJDLHNCQUFZLGlEQUFpQjs7Ozs7UUFBN0I7WUFDRSxPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDL0UsQ0FBQzs7O09BQUE7Ozs7OztJQVVELHFEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsR0FBVyxFQUFFLE1BQVc7O1lBQ3pDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7WUFDN0MsSUFBSSxHQUEwQixXQUFXLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFFL0csSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7OztJQUVELGdEQUFtQjs7Ozs7SUFBbkIsVUFBdUIsR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE1BQU0sRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRyxDQUFDOzs7Ozs7SUFFTywwQ0FBYTs7Ozs7SUFBckIsVUFBc0IsTUFBVztRQUMvQixPQUFPO1lBQ0wsTUFBTSxRQUFBO1NBQ1AsQ0FBQztJQUNKLENBQUM7O2dCQWpDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NkJBOUJEO0NBOERDLEFBbENELElBa0NDO1NBL0JZLGtCQUFrQjs7Ozs7Ozs7OztJQVc3QixnREFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGUgbm8tYW55XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5pbnRlcmZhY2UgU2luZ2xldG9uUmVnaXN0cnlJdGVtIHtcbiAgdGFyZ2V0OiBhbnk7XG59XG5cbi8qKlxuICogV2hlbiBydW5uaW5nIGluIHRlc3QsIHNpbmdsZXRvbnMgc2hvdWxkIG5vdCBiZSBkZXN0cm95ZWQuIFNvIHdlIGtlZXAgcmVmZXJlbmNlcyBvZiBzaW5nbGV0b25zXG4gKiBpbiB0aGlzIGdsb2JhbCB2YXJpYWJsZS5cbiAqL1xuY29uc3QgdGVzdFNpbmdsZVJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4oKTtcblxuLyoqXG4gKiBTb21lIHNpbmdsZXRvbnMgc2hvdWxkIGhhdmUgbGlmZSBjeWNsZSB0aGF0IGlzIHNhbWUgdG8gQW5ndWxhcidzLiBUaGlzIHNlcnZpY2UgbWFrZSBzdXJlIHRoYXRcbiAqIHRob3NlIHNpbmdsZXRvbnMgZ2V0IGRlc3Ryb3llZCBpbiBITVIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56U2luZ2xldG9uU2VydmljZSB7XG4gIHByaXZhdGUgZ2V0IHNpbmdsZXRvblJlZ2lzdHJ5KCk6IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4ge1xuICAgIHJldHVybiBlbnZpcm9ubWVudC5pc1Rlc3RNb2RlID8gdGVzdFNpbmdsZVJlZ2lzdHJ5IDogdGhpcy5fc2luZ2xldG9uUmVnaXN0cnk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyByZWdpc3RyeSBpcyB1c2VkIHRvIHJlZ2lzdGVyIHNpbmdsZXRvbiBpbiBkZXYgbW9kZS5cbiAgICogU28gdGhhdCBzaW5nbGV0b25zIGdldCBkZXN0cm95ZWQgd2hlbiBob3QgbW9kdWxlIHJlbG9hZCBoYXBwZW5zLlxuICAgKlxuICAgKiBUaGlzIHdvcmtzIGluIHByb2QgbW9kZSB0b28gYnV0IHdpdGggbm8gc3BlY2lmaWMgZWZmZWN0LlxuICAgKi9cbiAgcHJpdmF0ZSBfc2luZ2xldG9uUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPigpO1xuXG4gIHJlZ2lzdGVyU2luZ2xldG9uV2l0aEtleShrZXk6IHN0cmluZywgdGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBhbHJlYWR5SGF2ZSA9IHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuaGFzKGtleSk7XG4gICAgY29uc3QgaXRlbTogU2luZ2xldG9uUmVnaXN0cnlJdGVtID0gYWxyZWFkeUhhdmUgPyB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmdldChrZXkpISA6IHRoaXMud2l0aE5ld1RhcmdldCh0YXJnZXQpO1xuXG4gICAgaWYgKCFhbHJlYWR5SGF2ZSkge1xuICAgICAgdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5zZXQoa2V5LCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICBnZXRTaW5nbGV0b25XaXRoS2V5PFQ+KGtleTogc3RyaW5nKTogVCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmhhcyhrZXkpID8gKHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuZ2V0KGtleSkhLnRhcmdldCBhcyBUKSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHdpdGhOZXdUYXJnZXQodGFyZ2V0OiBhbnkpOiBTaW5nbGV0b25SZWdpc3RyeUl0ZW0ge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXRcbiAgICB9O1xuICB9XG59XG4iXX0=