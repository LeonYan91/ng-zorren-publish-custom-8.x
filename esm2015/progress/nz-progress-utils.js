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
/**
 * @param {?} percent
 * @return {?}
 */
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
/** @type {?} */
export const sortGradient = (/**
 * @param {?} gradients
 * @return {?}
 */
(gradients) => {
    /** @type {?} */
    let tempArr = [];
    Object.keys(gradients).forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const value = gradients[key];
        /** @type {?} */
        const formatKey = stripPercentToNumber(key);
        if (isNaN(formatKey)) {
            return {};
        }
        tempArr.push({
            key: formatKey,
            value
        });
    }));
    tempArr = tempArr.sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => a.key - b.key));
    return tempArr;
});
/** @type {?} */
export const handleCircleGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
(strokeColor) => {
    return sortGradient(strokeColor).map((/**
     * @param {?} __0
     * @return {?}
     */
    ({ key, value }) => ({ offset: `${key}%`, color: value })));
});
/** @type {?} */
export const handleLinearGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
(strokeColor) => {
    const { from = '#1890ff', to = '#1890ff', direction = 'to right' } = strokeColor, rest = tslib_1.__rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        /** @type {?} */
        const sortedGradients = sortGradient((/** @type {?} */ (rest)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, value }) => `${value} ${key}%`))
            .join(', ');
        return `linear-gradient(${direction}, ${sortedGradients})`;
    }
    return `linear-gradient(${direction}, ${from}, ${to})`;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibnotcHJvZ3Jlc3MtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFNBQVMsb0JBQW9CLENBQUMsT0FBZTtJQUMzQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWTs7OztBQUFHLENBQUMsU0FBcUMsRUFBRSxFQUFFOztRQUNoRSxPQUFPLEdBQTBDLEVBQUU7SUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUU7O2NBQzdCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDOztjQUN0QixTQUFTLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDO1FBQzNDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ1gsR0FBRyxFQUFFLFNBQVM7WUFDZCxLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUk7Ozs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQztJQUNoRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQjs7OztBQUFHLENBQ2xDLFdBQXVDLEVBQ0csRUFBRTtJQUM1QyxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFDbEcsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxvQkFBb0I7Ozs7QUFBRyxDQUFDLFdBQW9DLEVBQUUsRUFBRTtVQUNyRSxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxTQUFTLEdBQUcsVUFBVSxLQUFjLFdBQVcsRUFBdkIsK0RBQU87SUFDekUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O2NBQzVCLGVBQWUsR0FBRyxZQUFZLENBQUMsbUJBQUEsSUFBSSxFQUE4QixDQUFDO2FBQ3JFLEdBQUc7Ozs7UUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLEdBQUcsRUFBQzthQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2IsT0FBTyxtQkFBbUIsU0FBUyxLQUFLLGVBQWUsR0FBRyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxtQkFBbUIsU0FBUyxLQUFLLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQztBQUN6RCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQsIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzIH0gZnJvbSAnLi9uei1wcm9ncmVzcy5kZWZpbml0aW9ucyc7XG5cbmZ1bmN0aW9uIHN0cmlwUGVyY2VudFRvTnVtYmVyKHBlcmNlbnQ6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiArcGVyY2VudC5yZXBsYWNlKCclJywgJycpO1xufVxuXG5leHBvcnQgY29uc3Qgc29ydEdyYWRpZW50ID0gKGdyYWRpZW50czogTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpID0+IHtcbiAgbGV0IHRlbXBBcnI6IEFycmF5PHsga2V5OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfT4gPSBbXTtcblxuICBPYmplY3Qua2V5cyhncmFkaWVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGdyYWRpZW50c1trZXldO1xuICAgIGNvbnN0IGZvcm1hdEtleSA9IHN0cmlwUGVyY2VudFRvTnVtYmVyKGtleSk7XG4gICAgaWYgKGlzTmFOKGZvcm1hdEtleSkpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgdGVtcEFyci5wdXNoKHtcbiAgICAgIGtleTogZm9ybWF0S2V5LFxuICAgICAgdmFsdWVcbiAgICB9KTtcbiAgfSk7XG5cbiAgdGVtcEFyciA9IHRlbXBBcnIuc29ydCgoYSwgYikgPT4gYS5rZXkgLSBiLmtleSk7XG4gIHJldHVybiB0ZW1wQXJyO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNpcmNsZUdyYWRpZW50ID0gKFxuICBzdHJva2VDb2xvcjogTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3Ncbik6IEFycmF5PHsgb2Zmc2V0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4gPT4ge1xuICByZXR1cm4gc29ydEdyYWRpZW50KHN0cm9rZUNvbG9yKS5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiAoeyBvZmZzZXQ6IGAke2tleX0lYCwgY29sb3I6IHZhbHVlIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVMaW5lYXJHcmFkaWVudCA9IChzdHJva2VDb2xvcjogTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQpID0+IHtcbiAgY29uc3QgeyBmcm9tID0gJyMxODkwZmYnLCB0byA9ICcjMTg5MGZmJywgZGlyZWN0aW9uID0gJ3RvIHJpZ2h0JywgLi4ucmVzdCB9ID0gc3Ryb2tlQ29sb3I7XG4gIGlmIChPYmplY3Qua2V5cyhyZXN0KS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBzb3J0ZWRHcmFkaWVudHMgPSBzb3J0R3JhZGllbnQocmVzdCBhcyBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcylcbiAgICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gJHtrZXl9JWApXG4gICAgICAuam9pbignLCAnKTtcbiAgICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke2RpcmVjdGlvbn0sICR7c29ydGVkR3JhZGllbnRzfSlgO1xuICB9XG4gIHJldHVybiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHtmcm9tfSwgJHt0b30pYDtcbn07XG4iXX0=