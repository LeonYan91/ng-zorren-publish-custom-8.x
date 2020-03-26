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
import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { NZ_CONFIG } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./config";
/** @type {?} */
const isDefined = (/**
 * @param {?=} value
 * @return {?}
 */
function (value) {
    return value !== undefined;
});
const ɵ0 = isDefined;
export class NzConfigService {
    /**
     * @param {?=} defaultConfig
     */
    constructor(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    /**
     * @template T
     * @param {?} componentName
     * @return {?}
     */
    getConfigForComponent(componentName) {
        return this.config[componentName];
    }
    /**
     * @param {?} componentName
     * @return {?}
     */
    getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter((/**
         * @param {?} n
         * @return {?}
         */
        n => n === componentName)), mapTo(undefined));
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    set(componentName, value) {
        this.config[componentName] = Object.assign({}, this.config[componentName], value);
        this.configUpdated$.next(componentName);
    }
}
NzConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CONFIG,] }] }
];
/** @nocollapse */ NzConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzConfigService_Factory() { return new NzConfigService(i0.ɵɵinject(i1.NZ_CONFIG, 8)); }, token: NzConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzConfigService.prototype.configUpdated$;
    /**
     * Global config holding property.
     * @type {?}
     * @private
     */
    NzConfigService.prototype.config;
}
// tslint:disable:no-invalid-this
// tslint:disable:no-any
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 * @template T
 * @param {?} componentName
 * @param {?=} innerDefaultValue
 * @return {?}
 */
// tslint:disable-next-line:typedef
export function WithConfig(componentName, innerDefaultValue) {
    return (/**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function ConfigDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        const privatePropName = `$$__assignedValue__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be override by ${componentName} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            /**
             * @return {?}
             */
            get() {
                /** @type {?} */
                const originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                /** @type {?} */
                const componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                /** @type {?} */
                const configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            /**
             * @param {?=} value
             * @return {?}
             */
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    });
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztNQUV0RCxTQUFTOzs7O0FBQUcsVUFBUyxLQUFXO0lBQ3BDLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUM3QixDQUFDLENBQUE7O0FBS0QsTUFBTSxPQUFPLGVBQWU7Ozs7SUFNMUIsWUFBMkMsYUFBd0I7UUFMM0QsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBa0IsQ0FBQztRQU1yRCxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRUQscUJBQXFCLENBQXdCLGFBQWdCO1FBQzNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGdDQUFnQyxDQUFDLGFBQTBCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzdCLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxhQUFhLEVBQUMsRUFDaEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUNqQixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVELEdBQUcsQ0FBd0IsYUFBZ0IsRUFBRSxLQUFrQjtRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxxQkFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFLLEtBQUssQ0FBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQTNCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBT2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxTQUFTOzs7Ozs7OztJQUx6Qyx5Q0FBdUQ7Ozs7OztJQUd2RCxpQ0FBeUI7Ozs7Ozs7Ozs7Ozs7QUErQjNCLE1BQU0sVUFBVSxVQUFVLENBQUksYUFBMEIsRUFBRSxpQkFBcUI7SUFDN0U7Ozs7OztJQUFPLFNBQVMsZUFBZSxDQUFDLE1BQVcsRUFBRSxRQUFhLEVBQUUsa0JBQStDOztjQUNuRyxlQUFlLEdBQUcsc0JBQXNCLFFBQVEsRUFBRTtRQUV4RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FDVixhQUFhLGVBQWUsOENBQThDLGFBQWEsYUFBYSxDQUNyRyxDQUFDO1NBQ0g7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7UUFFSCxPQUFPOzs7O1lBQ0wsR0FBRzs7c0JBQ0ssYUFBYSxHQUNqQixrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFFNUcsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzVCLE9BQU8sYUFBYSxDQUFDO2lCQUN0Qjs7c0JBRUssZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTs7c0JBQ2pGLFdBQVcsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO2dCQUU3QyxPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRSxDQUFDOzs7OztZQUNELEdBQUcsQ0FBQyxLQUFTO2dCQUNYLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFO29CQUNoRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUMvQjtZQUNILENBQUM7WUFDRCxZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekNvbmZpZywgTnpDb25maWdLZXksIE5aX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnJztcblxuY29uc3QgaXNEZWZpbmVkID0gZnVuY3Rpb24odmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekNvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZ1VwZGF0ZWQkID0gbmV3IFN1YmplY3Q8a2V5b2YgTnpDb25maWc+KCk7XG5cbiAgLyoqIEdsb2JhbCBjb25maWcgaG9sZGluZyBwcm9wZXJ0eS4gKi9cbiAgcHJpdmF0ZSBjb25maWc6IE56Q29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTlpfQ09ORklHKSBkZWZhdWx0Q29uZmlnPzogTnpDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWcgfHwge307XG4gIH1cblxuICBnZXRDb25maWdGb3JDb21wb25lbnQ8VCBleHRlbmRzIE56Q29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBUKTogTnpDb25maWdbVF0ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXTtcbiAgfVxuXG4gIGdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnVXBkYXRlZCQucGlwZShcbiAgICAgIGZpbHRlcihuID0+IG4gPT09IGNvbXBvbmVudE5hbWUpLFxuICAgICAgbWFwVG8odW5kZWZpbmVkKVxuICAgICk7XG4gIH1cblxuICBzZXQ8VCBleHRlbmRzIE56Q29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogTnpDb25maWdbVF0pOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XG4gICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KGNvbXBvbmVudE5hbWUpO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpc1xuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhpcyBkZWNvcmF0b3IgaXMgdXNlZCB0byBkZWNvcmF0ZSBwcm9wZXJ0aWVzLiBJZiBhIHByb3BlcnR5IGlzIGRlY29yYXRlZCwgaXQgd291bGQgdHJ5IHRvIGxvYWQgZGVmYXVsdCB2YWx1ZSBmcm9tXG4gKiBjb25maWcuXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXG5leHBvcnQgZnVuY3Rpb24gV2l0aENvbmZpZzxUPihjb21wb25lbnROYW1lOiBOekNvbmZpZ0tleSwgaW5uZXJEZWZhdWx0VmFsdWU/OiBUKSB7XG4gIHJldHVybiBmdW5jdGlvbiBDb25maWdEZWNvcmF0b3IodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBhbnksIG9yaWdpbmFsRGVzY3JpcHRvcj86IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPFQ+KTogYW55IHtcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfX2Fzc2lnbmVkVmFsdWVfXyR7cHJvcE5hbWV9YDtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGUgYnkgJHtjb21wb25lbnROYW1lfSBkZWNvcmF0b3IuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBnZXQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPVxuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0ID8gb3JpZ2luYWxEZXNjcmlwdG9yLmdldC5iaW5kKHRoaXMpKCkgOiB0aGlzW3ByaXZhdGVQcm9wTmFtZV07XG5cbiAgICAgICAgaWYgKGlzRGVmaW5lZChvcmlnaW5hbFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpIHx8IHt9O1xuICAgICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbXBvbmVudENvbmZpZ1twcm9wTmFtZV07XG5cbiAgICAgICAgcmV0dXJuIGlzRGVmaW5lZChjb25maWdWYWx1ZSkgPyBjb25maWdWYWx1ZSA6IGlubmVyRGVmYXVsdFZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZT86IFQpOiB2b2lkIHtcbiAgICAgICAgaWYgKG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgICAgb3JpZ2luYWxEZXNjcmlwdG9yLnNldC5iaW5kKHRoaXMpKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW3ByaXZhdGVQcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9O1xuICB9O1xufVxuIl19