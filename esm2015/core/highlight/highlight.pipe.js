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
// Regular Expressions for parsing tags and attributes
/** @type {?} */
const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
/** @type {?} */
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    (match) => {
        /** @type {?} */
        const hi = match.charCodeAt(0);
        /** @type {?} */
        const low = match.charCodeAt(1);
        return `&#${(hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000};`;
    }))
        .replace(NON_ALPHANUMERIC_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    (match) => `&#${match.charCodeAt(0)};`))
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
export class NzHighlightPipe {
    constructor() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    /**
     * @param {?} value
     * @param {?} highlightValue
     * @param {?=} flags
     * @param {?=} klass
     * @return {?}
     */
    transform(value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        /** @type {?} */
        const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        /** @type {?} */
        const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? `<span class="${klass}">` : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    }
}
NzHighlightPipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzHighlight',
                pure: true
            },] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzHighlightPipe.prototype.UNIQUE_WRAPPERS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJoaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O01BRzlDLHFCQUFxQixHQUFHLGlDQUFpQzs7O01BRXpELHVCQUF1QixHQUFHLGVBQWU7Ozs7Ozs7O0FBTy9DLFNBQVMsY0FBYyxDQUFDLEtBQWE7SUFDbkMsT0FBTyxLQUFLO1NBQ1QsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7U0FDdEIsT0FBTyxDQUFDLHFCQUFxQjs7OztJQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7O2NBQzFDLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7Y0FDeEIsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sS0FBSyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUM7SUFDbEUsQ0FBQyxFQUFDO1NBQ0QsT0FBTyxDQUFDLHVCQUF1Qjs7OztJQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQztTQUNoRixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztTQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFNRCxNQUFNLE9BQU8sZUFBZTtJQUo1QjtRQUtVLG9CQUFlLEdBQXFCLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQWM1RixDQUFDOzs7Ozs7OztJQVpDLFNBQVMsQ0FBQyxLQUFhLEVBQUUsY0FBc0IsRUFBRSxLQUFjLEVBQUUsS0FBYztRQUM3RSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7OztjQUdLLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQzs7Y0FDN0YsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEcsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQzdCLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFDL0YsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7O1lBbEJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7YUFDWDs7Ozs7OztJQUVDLDBDQUEwRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIFJlZ3VsYXIgRXhwcmVzc2lvbnMgZm9yIHBhcnNpbmcgdGFncyBhbmQgYXR0cmlidXRlc1xuY29uc3QgU1VSUk9HQVRFX1BBSVJfUkVHRVhQID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZztcbi8vICEgdG8gfiBpcyB0aGUgQVNDSUkgcmFuZ2UuXG5jb25zdCBOT05fQUxQSEFOVU1FUklDX1JFR0VYUCA9IC8oW15cXCMtfiB8IV0pL2c7XG5cbi8qKlxuICogRXNjYXBlcyBhbGwgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGNoYXJhY3RlcnMsIHNvIHRoYXQgdGhlXG4gKiByZXN1bHRpbmcgc3RyaW5nIGNhbiBiZSBzYWZlbHkgaW5zZXJ0ZWQgaW50byBhdHRyaWJ1dGUgb3JcbiAqIGVsZW1lbnQgdGV4dC5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlRW50aXRpZXModmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoU1VSUk9HQVRFX1BBSVJfUkVHRVhQLCAobWF0Y2g6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgaGkgPSBtYXRjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgY29uc3QgbG93ID0gbWF0Y2guY2hhckNvZGVBdCgxKTtcbiAgICAgIHJldHVybiBgJiMkeyhoaSAtIDB4RDgwMCkgKiAweDQwMCArIChsb3cgLSAweERDMDApICsgMHgxMDAwMH07YDtcbiAgICB9KVxuICAgIC5yZXBsYWNlKE5PTl9BTFBIQU5VTUVSSUNfUkVHRVhQLCAobWF0Y2g6IHN0cmluZykgPT4gYCYjJHttYXRjaC5jaGFyQ29kZUF0KDApfTtgKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICduekhpZ2hsaWdodCcsXG4gIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTnpIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgVU5JUVVFX1dSQVBQRVJTOiBbc3RyaW5nLCBzdHJpbmddID0gWycjIz09LW9wZW5fdGFnLT09IyMnLCAnIyM9PS1jbG9zZV90YWctPT0jIyddO1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBoaWdobGlnaHRWYWx1ZTogc3RyaW5nLCBmbGFncz86IHN0cmluZywga2xhc3M/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAoIWhpZ2hsaWdodFZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gRXNjYXBlcyByZWdleCBrZXl3b3JkIHRvIGludGVycHJldCB0aGVzZSBjaGFyYWN0ZXJzIGxpdGVyYWxseVxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gbmV3IFJlZ0V4cChoaWdobGlnaHRWYWx1ZS5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQmJyksIGZsYWdzKTtcbiAgICBjb25zdCB3cmFwVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHNlYXJjaFZhbHVlLCBgJHt0aGlzLlVOSVFVRV9XUkFQUEVSU1swXX0kJiR7dGhpcy5VTklRVUVfV1JBUFBFUlNbMV19YCk7XG4gICAgcmV0dXJuIGVuY29kZUVudGl0aWVzKHdyYXBWYWx1ZSlcbiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5VTklRVUVfV1JBUFBFUlNbMF0sICdnJyksIGtsYXNzID8gYDxzcGFuIGNsYXNzPVwiJHtrbGFzc31cIj5gIDogJzxzcGFuPicpXG4gICAgICAucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuVU5JUVVFX1dSQVBQRVJTWzFdLCAnZycpLCAnPC9zcGFuPicpO1xuICB9XG59XG4iXX0=