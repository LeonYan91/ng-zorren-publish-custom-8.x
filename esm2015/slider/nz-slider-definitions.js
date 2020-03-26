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
 * @record
 */
export function MarkObj() { }
if (false) {
    /** @type {?|undefined} */
    MarkObj.prototype.style;
    /** @type {?} */
    MarkObj.prototype.label;
}
export class Marks {
}
/**
 * Processed steps that would be passed to sub components.
 * @record
 */
export function ExtendedMark() { }
if (false) {
    /** @type {?} */
    ExtendedMark.prototype.value;
    /** @type {?} */
    ExtendedMark.prototype.offset;
    /** @type {?} */
    ExtendedMark.prototype.config;
}
/**
 * Marks that would be rendered.
 * @record
 */
export function DisplayedMark() { }
if (false) {
    /** @type {?} */
    DisplayedMark.prototype.active;
    /** @type {?} */
    DisplayedMark.prototype.label;
    /** @type {?|undefined} */
    DisplayedMark.prototype.style;
}
/**
 * Steps that would be rendered.
 * @record
 */
export function DisplayedStep() { }
if (false) {
    /** @type {?} */
    DisplayedStep.prototype.active;
    /** @type {?|undefined} */
    DisplayedStep.prototype.style;
}
/**
 * @record
 */
export function SliderHandler() { }
if (false) {
    /** @type {?} */
    SliderHandler.prototype.offset;
    /** @type {?} */
    SliderHandler.prototype.value;
    /** @type {?} */
    SliderHandler.prototype.active;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isValueARange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
export function isConfigAObject(config) {
    return config instanceof Object;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVQSw2QkFHQzs7O0lBRkMsd0JBQWU7O0lBQ2Ysd0JBQWM7O0FBS2hCLE1BQU0sT0FBTyxLQUFLO0NBRWpCOzs7OztBQUtELGtDQUlDOzs7SUFIQyw2QkFBYzs7SUFDZCw4QkFBZTs7SUFDZiw4QkFBYTs7Ozs7O0FBTWYsbUNBSUM7OztJQUhDLCtCQUFnQjs7SUFDaEIsOEJBQWM7O0lBQ2QsOEJBQWU7Ozs7OztBQU1qQixtQ0FHQzs7O0lBRkMsK0JBQWdCOztJQUNoQiw4QkFBZTs7Ozs7QUFPakIsbUNBSUM7OztJQUhDLCtCQUFzQjs7SUFDdEIsOEJBQXFCOztJQUNyQiwrQkFBZ0I7Ozs7OztBQUdsQixNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWtCO0lBQzlDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0tBQzNCO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQVk7SUFDMUMsT0FBTyxNQUFNLFlBQVksTUFBTSxDQUFDO0FBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuZXhwb3J0IHR5cGUgTWFyayA9IHN0cmluZyB8IE1hcmtPYmo7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya09iaiB7XG4gIHN0eWxlPzogb2JqZWN0O1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBOek1hcmtzID0gTWFya3M7XG5cbmV4cG9ydCBjbGFzcyBNYXJrcyB7XG4gIFtrZXk6IG51bWJlcl06IE1hcms7XG59XG5cbi8qKlxuICogUHJvY2Vzc2VkIHN0ZXBzIHRoYXQgd291bGQgYmUgcGFzc2VkIHRvIHN1YiBjb21wb25lbnRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkTWFyayB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xuICBjb25maWc6IE1hcms7XG59XG5cbi8qKlxuICogTWFya3MgdGhhdCB3b3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRNYXJrIGV4dGVuZHMgRXh0ZW5kZWRNYXJrIHtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xuICBzdHlsZT86IG9iamVjdDtcbn1cblxuLyoqXG4gKiBTdGVwcyB0aGF0IHdvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZFN0ZXAgZXh0ZW5kcyBFeHRlbmRlZE1hcmsge1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIHN0eWxlPzogb2JqZWN0O1xufVxuXG5leHBvcnQgdHlwZSBTbGlkZXJTaG93VG9vbHRpcCA9ICdhbHdheXMnIHwgJ25ldmVyJyB8ICdkZWZhdWx0JztcblxuZXhwb3J0IHR5cGUgU2xpZGVyVmFsdWUgPSBudW1iZXJbXSB8IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJIYW5kbGVyIHtcbiAgb2Zmc2V0OiBudW1iZXIgfCBudWxsO1xuICB2YWx1ZTogbnVtYmVyIHwgbnVsbDtcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZUFSYW5nZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiB2YWx1ZSBpcyBudW1iZXJbXSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29uZmlnQU9iamVjdChjb25maWc6IE1hcmspOiBjb25maWcgaXMgTWFya09iaiB7XG4gIHJldHVybiBjb25maWcgaW5zdGFuY2VvZiBPYmplY3Q7XG59XG4iXX0=