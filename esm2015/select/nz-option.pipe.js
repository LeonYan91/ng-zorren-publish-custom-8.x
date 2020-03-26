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
import { Pipe } from '@angular/core';
export class NzFilterOptionPipe {
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return (/** @type {?} */ (options));
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            o => filterOption(searchValue, o)));
        }
    }
}
NzFilterOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterOption' },] }
];
export class NzFilterGroupOptionPipe {
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            g => {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => filterOption(searchValue, o)));
            }));
        }
    }
}
NzFilterGroupOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterGroupOption' },] }
];
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFPL0QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFDN0IsU0FBUyxDQUNQLE9BQTJELEVBQzNELFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sbUJBQUEsT0FBTyxFQUF1QixDQUFDO1NBQ3ZDO2FBQU07WUFDTCxPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUF1QixDQUFDLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQ25GO0lBQ0gsQ0FBQzs7O1lBYkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztBQWlCaEMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7SUFDbEMsU0FBUyxDQUNQLE1BQWdDLEVBQ2hDLFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sQ0FBQyxtQkFBQSxNQUFNLEVBQTRCLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDM0UsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQWZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7Ozs7OztBQWtCckMsTUFBTSxVQUFVLG1CQUFtQixDQUFDLFdBQW1CLEVBQUUsTUFBeUI7SUFDaEYsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzdFO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBURmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpID0+IGJvb2xlYW47XG5cbkBQaXBlKHsgbmFtZTogJ256RmlsdGVyT3B0aW9uJyB9KVxuZXhwb3J0IGNsYXNzIE56RmlsdGVyT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgb3B0aW9uczogTnpPcHRpb25Db21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD4sXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXG4gICk6IE56T3B0aW9uQ29tcG9uZW50W10ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIXNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucyBhcyBOek9wdGlvbkNvbXBvbmVudFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9wdGlvbnMgYXMgTnpPcHRpb25Db21wb25lbnRbXSkuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XG4gICAgfVxuICB9XG59XG5cbkBQaXBlKHsgbmFtZTogJ256RmlsdGVyR3JvdXBPcHRpb24nIH0pXG5leHBvcnQgY2xhc3MgTnpGaWx0ZXJHcm91cE9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIGdyb3VwczogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdLFxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXG4gICAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLFxuICAgIHNlcnZlclNlYXJjaDogYm9vbGVhblxuICApOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIXNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGdyb3VwcyBhcyBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10pLmZpbHRlcihnID0+IHtcbiAgICAgICAgcmV0dXJuIGcubGlzdE9mTnpPcHRpb25Db21wb25lbnQuc29tZShvID0+IGZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZSwgbykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlOiBzdHJpbmcsIG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiBib29sZWFuIHtcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24ubnpMYWJlbCkge1xuICAgIHJldHVybiBvcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==