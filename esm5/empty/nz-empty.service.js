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
import { Inject, Injectable, Optional, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { warnDeprecation, NzConfigService, PREFIX } from 'ng-zorro-antd/core';
import { NZ_DEFAULT_EMPTY_CONTENT } from './nz-empty-config';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-empty-config";
/**
 * @template T
 */
var NzEmptyService = /** @class */ (function () {
    function NzEmptyService(nzConfigService, legacyDefaultEmptyContent) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.legacyDefaultEmptyContent = legacyDefaultEmptyContent;
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (legacyDefaultEmptyContent) {
            warnDeprecation("'NZ_DEFAULT_EMPTY_CONTENT' is deprecated and would be removed in 9.0.0. Please migrate to 'NZ_CONFIG'.");
        }
        /** @type {?} */
        var userDefaultEmptyContent = this.getUserDefaultEmptyContent();
        if (userDefaultEmptyContent) {
            this.userDefaultContent$.next(userDefaultEmptyContent);
        }
        this.nzConfigService.getConfigChangeEventForComponent('empty').subscribe((/**
         * @return {?}
         */
        function () {
            _this.userDefaultContent$.next(_this.getUserDefaultEmptyContent());
        }));
    }
    /**
     * @param {?=} content
     * @return {?}
     */
    NzEmptyService.prototype.setDefaultContent = /**
     * @param {?=} content
     * @return {?}
     */
    function (content) {
        warnDeprecation("'setDefaultContent' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService'.");
        if (typeof content === 'string' ||
            content === undefined ||
            content === null ||
            content instanceof TemplateRef ||
            content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw new Error(PREFIX + " 'useDefaultContent' expect 'string', 'templateRef' or 'component' but get " + content + ".");
        }
    };
    /**
     * @return {?}
     */
    NzEmptyService.prototype.resetDefault = /**
     * @return {?}
     */
    function () {
        warnDeprecation("'resetDefault' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService' and provide an 'undefined'.");
        this.userDefaultContent$.next(undefined);
    };
    /**
     * @private
     * @return {?}
     */
    NzEmptyService.prototype.getUserDefaultEmptyContent = /**
     * @private
     * @return {?}
     */
    function () {
        return ((this.nzConfigService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent ||
            this.legacyDefaultEmptyContent);
    };
    NzEmptyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzEmptyService.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Type, decorators: [{ type: Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: Optional }] }
    ]; };
    /** @nocollapse */ NzEmptyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzEmptyService_Factory() { return new NzEmptyService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: NzEmptyService, providedIn: "root" });
    return NzEmptyService;
}());
export { NzEmptyService };
if (false) {
    /** @type {?} */
    NzEmptyService.prototype.userDefaultContent$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.legacyDefaultEmptyContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZW1wdHkvIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQXdCLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7QUFFbkY7SUFPRSx3QkFDVSxlQUFnQyxFQUNjLHlCQUFrQztRQUYxRixpQkFtQkM7UUFsQlMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2MsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFTO1FBSjFGLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQU1yRixJQUFJLHlCQUF5QixFQUFFO1lBQzdCLGVBQWUsQ0FDYix3R0FBd0csQ0FDekcsQ0FBQztTQUNIOztZQUVLLHVCQUF1QixHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRTtRQUVqRSxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDdkUsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwwQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBOEI7UUFDOUMsZUFBZSxDQUNiLHVHQUF1RyxDQUN4RyxDQUFDO1FBRUYsSUFDRSxPQUFPLE9BQU8sS0FBSyxRQUFRO1lBQzNCLE9BQU8sS0FBSyxTQUFTO1lBQ3JCLE9BQU8sS0FBSyxJQUFJO1lBQ2hCLE9BQU8sWUFBWSxXQUFXO1lBQzlCLE9BQU8sWUFBWSxJQUFJLEVBQ3ZCO1lBQ0EsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FDVixNQUFNLG1GQUE4RSxPQUFPLE1BQUcsQ0FDbEcsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELHFDQUFZOzs7SUFBWjtRQUNFLGVBQWUsQ0FDYiw2SEFBNkgsQ0FDOUgsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFTyxtREFBMEI7Ozs7SUFBbEM7UUFDRSxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtZQUNqRixJQUFJLENBQUMseUJBQXlCLENBQy9CLENBQUM7SUFDSixDQUFDOztnQkE1REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOeUIsZUFBZTtnQkFIVyxJQUFJLHVCQWdCbkQsTUFBTSxTQUFDLHdCQUF3QixjQUFHLFFBQVE7Ozt5QkF4Qi9DO0NBNEVDLEFBN0RELElBNkRDO1NBekRZLGNBQWM7OztJQUN6Qiw2Q0FBdUY7Ozs7O0lBR3JGLHlDQUF3Qzs7Ozs7SUFDeEMsbURBQXdGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBOekNvbmZpZ1NlcnZpY2UsIFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56RW1wdHlDdXN0b21Db250ZW50LCBOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQgfSBmcm9tICcuL256LWVtcHR5LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNsYXNzIE56RW1wdHlTZXJ2aWNlPFQgPSBhbnk+IHtcbiAgdXNlckRlZmF1bHRDb250ZW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpFbXB0eUN1c3RvbUNvbnRlbnQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBASW5qZWN0KE5aX0RFRkFVTFRfRU1QVFlfQ09OVEVOVCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBsZWdhY3lEZWZhdWx0RW1wdHlDb250ZW50OiBUeXBlPFQ+XG4gICkge1xuICAgIGlmIChsZWdhY3lEZWZhdWx0RW1wdHlDb250ZW50KSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGAnTlpfREVGQVVMVF9FTVBUWV9DT05URU5UJyBpcyBkZXByZWNhdGVkIGFuZCB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgbWlncmF0ZSB0byAnTlpfQ09ORklHJy5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJEZWZhdWx0RW1wdHlDb250ZW50ID0gdGhpcy5nZXRVc2VyRGVmYXVsdEVtcHR5Q29udGVudCgpO1xuXG4gICAgaWYgKHVzZXJEZWZhdWx0RW1wdHlDb250ZW50KSB7XG4gICAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh1c2VyRGVmYXVsdEVtcHR5Q29udGVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2VtcHR5Jykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHRoaXMuZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREZWZhdWx0Q29udGVudChjb250ZW50PzogTnpFbXB0eUN1c3RvbUNvbnRlbnQpOiB2b2lkIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICBgJ3NldERlZmF1bHRDb250ZW50JyBpcyBkZXByZWNhdGVkIGFuZCB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgbWlncmF0ZSB0byAnTnpDb25maWdTZXJ2aWNlJy5gXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyB8fFxuICAgICAgY29udGVudCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICBjb250ZW50ID09PSBudWxsIHx8XG4gICAgICBjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgfHxcbiAgICAgIGNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlXG4gICAgKSB7XG4gICAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dChjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJHtQUkVGSVh9ICd1c2VEZWZhdWx0Q29udGVudCcgZXhwZWN0ICdzdHJpbmcnLCAndGVtcGxhdGVSZWYnIG9yICdjb21wb25lbnQnIGJ1dCBnZXQgJHtjb250ZW50fS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RGVmYXVsdCgpOiB2b2lkIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICBgJ3Jlc2V0RGVmYXVsdCcgaXMgZGVwcmVjYXRlZCBhbmQgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIG1pZ3JhdGUgdG8gJ056Q29uZmlnU2VydmljZScgYW5kIHByb3ZpZGUgYW4gJ3VuZGVmaW5lZCcuYFxuICAgICk7XG4gICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKTogVHlwZTxUPiB8IFRlbXBsYXRlUmVmPHN0cmluZz4gfCBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdlbXB0eScpIHx8IHt9KS5uekRlZmF1bHRFbXB0eUNvbnRlbnQgfHxcbiAgICAgIHRoaXMubGVnYWN5RGVmYXVsdEVtcHR5Q29udGVudFxuICAgICk7XG4gIH1cbn1cbiJdfQ==