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
import { TemplateRef, Type } from '@angular/core';
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function isNotNil(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
/**
 * Examine if two objects are shallowly equaled.
 * @param {?=} objA
 * @param {?=} objB
 * @return {?}
 */
export function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    /** @type {?} */
    const keysA = Object.keys(objA);
    /** @type {?} */
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    /** @type {?} */
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (let idx = 0; idx < keysA.length; idx++) {
        /** @type {?} */
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * @param {?} element
 * @return {?}
 */
export function isEmpty(element) {
    /** @type {?} */
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        if (filterNotEmptyNode(nodes.item(i))) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} node
 * @return {?}
 */
export function filterNotEmptyNode(node) {
    if (node) {
        if (node.nodeType === 1 && ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            // ELEMENT_NODE
            return node;
        }
        else if (node.nodeType === 3 && (/** @type {?} */ (node.textContent)).toString().trim().length !== 0) {
            // TEXT_NODE
            return node;
        }
        return null;
    }
    return null;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isNonEmptyString(value) {
    return typeof value === 'string' && value !== '';
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isTemplateRef(value) {
    return value instanceof TemplateRef;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isComponent(value) {
    return value instanceof Type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL2NoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUlsRCxNQUFNLFVBQVUsUUFBUSxDQUFJLEtBQVE7SUFDbEMsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztBQUN4RCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYztJQUNsQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3hELENBQUM7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQXNCLEVBQUUsSUFBc0I7SUFDekUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDMUUsT0FBTyxLQUFLLENBQUM7S0FDZDs7VUFFSyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1VBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUUvQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNqQyxPQUFPLEtBQUssQ0FBQztLQUNkOztVQUVLLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRWxFLHlDQUF5QztJQUN6QyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTs7Y0FDckMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXNCO0lBQzlDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQztBQUNyRixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsT0FBb0I7O1VBQ3BDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVTtJQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVU7SUFDM0MsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6RixlQUFlO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEYsWUFBWTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBVTtJQUN6QyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO0FBQ25ELENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBVTtJQUN0QyxPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFVO0lBQ3BDLE9BQU8sS0FBSyxZQUFZLElBQUksQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzL2luZGV4YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vdE5pbDxUPih2YWx1ZTogVCk6IHZhbHVlIGlzIE5vbk51bGxhYmxlPFQ+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05pbCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIG51bGwgfCB1bmRlZmluZWQge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbDtcbn1cblxuLyoqXG4gKiBFeGFtaW5lIGlmIHR3byBvYmplY3RzIGFyZSBzaGFsbG93bHkgZXF1YWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBPzogSW5kZXhhYmxlT2JqZWN0LCBvYmpCPzogSW5kZXhhYmxlT2JqZWN0KTogYm9vbGVhbiB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzQVtpZHhdO1xuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICBjb25zdCBub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZXMuaXRlbShpKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZTogTm9kZSk6IE5vZGUgfCBudWxsIHtcbiAgaWYgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAobm9kZSBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgLy8gRUxFTUVOVF9OT0RFXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgJiYgbm9kZS50ZXh0Q29udGVudCEudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBURVhUX05PREVcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBpc1RlbXBsYXRlUmVmKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFR5cGU7XG59XG4iXX0=