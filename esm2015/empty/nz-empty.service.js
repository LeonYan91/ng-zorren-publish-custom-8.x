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
// tslint:disable-next-line:no-any
export class NzEmptyService {
    /**
     * @param {?} nzConfigService
     * @param {?} legacyDefaultEmptyContent
     */
    constructor(nzConfigService, legacyDefaultEmptyContent) {
        this.nzConfigService = nzConfigService;
        this.legacyDefaultEmptyContent = legacyDefaultEmptyContent;
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (legacyDefaultEmptyContent) {
            warnDeprecation(`'NZ_DEFAULT_EMPTY_CONTENT' is deprecated and would be removed in 9.0.0. Please migrate to 'NZ_CONFIG'.`);
        }
        /** @type {?} */
        const userDefaultEmptyContent = this.getUserDefaultEmptyContent();
        if (userDefaultEmptyContent) {
            this.userDefaultContent$.next(userDefaultEmptyContent);
        }
        this.nzConfigService.getConfigChangeEventForComponent('empty').subscribe((/**
         * @return {?}
         */
        () => {
            this.userDefaultContent$.next(this.getUserDefaultEmptyContent());
        }));
    }
    /**
     * @param {?=} content
     * @return {?}
     */
    setDefaultContent(content) {
        warnDeprecation(`'setDefaultContent' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService'.`);
        if (typeof content === 'string' ||
            content === undefined ||
            content === null ||
            content instanceof TemplateRef ||
            content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw new Error(`${PREFIX} 'useDefaultContent' expect 'string', 'templateRef' or 'component' but get ${content}.`);
        }
    }
    /**
     * @return {?}
     */
    resetDefault() {
        warnDeprecation(`'resetDefault' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService' and provide an 'undefined'.`);
        this.userDefaultContent$.next(undefined);
    }
    /**
     * @private
     * @return {?}
     */
    getUserDefaultEmptyContent() {
        return ((this.nzConfigService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent ||
            this.legacyDefaultEmptyContent);
    }
}
NzEmptyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzEmptyService.ctorParameters = () => [
    { type: NzConfigService },
    { type: Type, decorators: [{ type: Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: Optional }] }
];
/** @nocollapse */ NzEmptyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzEmptyService_Factory() { return new NzEmptyService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: NzEmptyService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZW1wdHkvIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQXdCLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7QUFLbkYsa0NBQWtDO0FBQ2xDLE1BQU0sT0FBTyxjQUFjOzs7OztJQUd6QixZQUNVLGVBQWdDLEVBQ2MseUJBQWtDO1FBRGhGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNjLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBUztRQUoxRix3QkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBbUMsU0FBUyxDQUFDLENBQUM7UUFNckYsSUFBSSx5QkFBeUIsRUFBRTtZQUM3QixlQUFlLENBQ2Isd0dBQXdHLENBQ3pHLENBQUM7U0FDSDs7Y0FFSyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7UUFFakUsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUM1RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQThCO1FBQzlDLGVBQWUsQ0FDYix1R0FBdUcsQ0FDeEcsQ0FBQztRQUVGLElBQ0UsT0FBTyxPQUFPLEtBQUssUUFBUTtZQUMzQixPQUFPLEtBQUssU0FBUztZQUNyQixPQUFPLEtBQUssSUFBSTtZQUNoQixPQUFPLFlBQVksV0FBVztZQUM5QixPQUFPLFlBQVksSUFBSSxFQUN2QjtZQUNBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQ2IsR0FBRyxNQUFNLDhFQUE4RSxPQUFPLEdBQUcsQ0FDbEcsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixlQUFlLENBQ2IsNkhBQTZILENBQzlILENBQUM7UUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU8sMEJBQTBCO1FBQ2hDLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMscUJBQXFCO1lBQ2pGLElBQUksQ0FBQyx5QkFBeUIsQ0FDL0IsQ0FBQztJQUNKLENBQUM7OztZQTVERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOeUIsZUFBZTtZQUhXLElBQUksdUJBZ0JuRCxNQUFNLFNBQUMsd0JBQXdCLGNBQUcsUUFBUTs7Ozs7SUFKN0MsNkNBQXVGOzs7OztJQUdyRix5Q0FBd0M7Ozs7O0lBQ3hDLG1EQUF3RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiwgTnpDb25maWdTZXJ2aWNlLCBQUkVGSVggfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekVtcHR5Q3VzdG9tQ29udGVudCwgTlpfREVGQVVMVF9FTVBUWV9DT05URU5UIH0gZnJvbSAnLi9uei1lbXB0eS1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjbGFzcyBOekVtcHR5U2VydmljZTxUID0gYW55PiB7XG4gIHVzZXJEZWZhdWx0Q29udGVudCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56RW1wdHlDdXN0b21Db250ZW50IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQEluamVjdChOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQpIEBPcHRpb25hbCgpIHByaXZhdGUgbGVnYWN5RGVmYXVsdEVtcHR5Q29udGVudDogVHlwZTxUPlxuICApIHtcbiAgICBpZiAobGVnYWN5RGVmYXVsdEVtcHR5Q29udGVudCkge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgICBgJ05aX0RFRkFVTFRfRU1QVFlfQ09OVEVOVCcgaXMgZGVwcmVjYXRlZCBhbmQgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIG1pZ3JhdGUgdG8gJ05aX0NPTkZJRycuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyRGVmYXVsdEVtcHR5Q29udGVudCA9IHRoaXMuZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKTtcblxuICAgIGlmICh1c2VyRGVmYXVsdEVtcHR5Q29udGVudCkge1xuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodXNlckRlZmF1bHRFbXB0eUNvbnRlbnQpO1xuICAgIH1cblxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KCdlbXB0eScpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh0aGlzLmdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCkpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RGVmYXVsdENvbnRlbnQoY29udGVudD86IE56RW1wdHlDdXN0b21Db250ZW50KTogdm9pZCB7XG4gICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgYCdzZXREZWZhdWx0Q29udGVudCcgaXMgZGVwcmVjYXRlZCBhbmQgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIG1pZ3JhdGUgdG8gJ056Q29uZmlnU2VydmljZScuYFxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycgfHxcbiAgICAgIGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgY29udGVudCA9PT0gbnVsbCB8fFxuICAgICAgY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmIHx8XG4gICAgICBjb250ZW50IGluc3RhbmNlb2YgVHlwZVxuICAgICkge1xuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQoY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7UFJFRklYfSAndXNlRGVmYXVsdENvbnRlbnQnIGV4cGVjdCAnc3RyaW5nJywgJ3RlbXBsYXRlUmVmJyBvciAnY29tcG9uZW50JyBidXQgZ2V0ICR7Y29udGVudH0uYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXNldERlZmF1bHQoKTogdm9pZCB7XG4gICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgYCdyZXNldERlZmF1bHQnIGlzIGRlcHJlY2F0ZWQgYW5kIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSBtaWdyYXRlIHRvICdOekNvbmZpZ1NlcnZpY2UnIGFuZCBwcm92aWRlIGFuICd1bmRlZmluZWQnLmBcbiAgICApO1xuICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBwcml2YXRlIGdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCk6IFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxzdHJpbmc+IHwgc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudCgnZW1wdHknKSB8fCB7fSkubnpEZWZhdWx0RW1wdHlDb250ZW50IHx8XG4gICAgICB0aGlzLmxlZ2FjeURlZmF1bHRFbXB0eUNvbnRlbnRcbiAgICApO1xuICB9XG59XG4iXX0=