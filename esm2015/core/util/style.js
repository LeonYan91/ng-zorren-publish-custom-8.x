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
/**
 * @param {?} styleName
 * @return {?}
 */
export function isStyleSupport(styleName) {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        /** @type {?} */
        const styleNameList = Array.isArray(styleName) ? styleName : [styleName];
        const { documentElement } = window.document;
        return styleNameList.some((/**
         * @param {?} name
         * @return {?}
         */
        name => name in documentElement.style));
    }
    return false;
}
/**
 * @param {?=} styles
 * @return {?}
 */
export function getStyleAsText(styles) {
    if (!styles) {
        return '';
    }
    return Object.keys(styles)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const val = styles[key];
        return `${key}:${typeof val === 'string' ? val : val + 'px'}`;
    }))
        .join(';');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3N0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE1BQU0sVUFBVSxjQUFjLENBQUMsU0FBNEI7SUFDekQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTs7Y0FDakYsYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Y0FDbEUsRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUTtRQUUzQyxPQUFPLGFBQWEsQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLEtBQUssRUFBQyxDQUFDO0tBQ2xFO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBeUI7SUFDdEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3ZCLEdBQUc7Ozs7SUFBQyxHQUFHLENBQUMsRUFBRTs7Y0FDSCxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN2QixPQUFPLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDaEUsQ0FBQyxFQUFDO1NBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHlsZVN1cHBvcnQoc3R5bGVOYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBzdHlsZU5hbWVMaXN0ID0gQXJyYXkuaXNBcnJheShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogW3N0eWxlTmFtZV07XG4gICAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IHdpbmRvdy5kb2N1bWVudDtcblxuICAgIHJldHVybiBzdHlsZU5hbWVMaXN0LnNvbWUobmFtZSA9PiBuYW1lIGluIGRvY3VtZW50RWxlbWVudC5zdHlsZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVBc1RleHQoc3R5bGVzPzogTmdTdHlsZUludGVyZmFjZSk6IHN0cmluZyB7XG4gIGlmICghc3R5bGVzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlcylcbiAgICAubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5XTtcbiAgICAgIHJldHVybiBgJHtrZXl9OiR7dHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwgOiB2YWwgKyAncHgnfWA7XG4gICAgfSlcbiAgICAuam9pbignOycpO1xufVxuIl19