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
 * This module provides utility functions to query DOM information or
 * set properties.
 */
import { filterNotEmptyNode } from './check';
/**
 * Silent an event by stopping and preventing it.
 * @param {?} e
 * @return {?}
 */
export function silentEvent(e) {
    e.stopPropagation();
    e.preventDefault();
}
/**
 * @param {?} elem
 * @return {?}
 */
export function getElementOffset(elem) {
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    /** @type {?} */
    const rect = elem.getBoundingClientRect();
    /** @type {?} */
    const win = (/** @type {?} */ (elem.ownerDocument)).defaultView;
    return {
        top: rect.top + (/** @type {?} */ (win)).pageYOffset,
        left: rect.left + (/** @type {?} */ (win)).pageXOffset
    };
}
/**
 * @param {?} element
 * @return {?}
 */
export function findFirstNotEmptyNode(element) {
    /** @type {?} */
    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
        /** @type {?} */
        const node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
/**
 * @param {?} element
 * @return {?}
 */
export function findLastNotEmptyNode(element) {
    /** @type {?} */
    const children = element.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
        /** @type {?} */
        const node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
/**
 * @param {?} parent
 * @return {?}
 */
export function reverseChildNodes(parent) {
    /** @type {?} */
    const children = parent.childNodes;
    /** @type {?} */
    let length = children.length;
    if (length) {
        /** @type {?} */
        const nodes = [];
        children.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (node, i) => (nodes[i] = node)));
        while (length--) {
            parent.appendChild(nodes[length]);
        }
    }
}
/**
 * Investigate if an event is a `TouchEvent`.
 * @param {?} event
 * @return {?}
 */
export function isTouchEvent(event) {
    return event.type.startsWith('touch');
}
/**
 * @param {?} event
 * @return {?}
 */
export function getEventPosition(event) {
    return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}
/**
 * @record
 */
export function MouseTouchObserverConfig() { }
if (false) {
    /** @type {?} */
    MouseTouchObserverConfig.prototype.end;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.move;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.pluckKey;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.start;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.end$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.moveResolved$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.startPlucked$;
    /**
     * @param {?} e
     * @return {?}
     */
    MouseTouchObserverConfig.prototype.filter = function (e) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFLN0MsTUFBTSxVQUFVLFdBQVcsQ0FBQyxDQUFRO0lBQ2xDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBaUI7SUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQzVCOztVQUVLLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7O1VBQ25DLEdBQUcsR0FBRyxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsV0FBVztJQUMzQyxPQUFPO1FBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQUEsR0FBRyxFQUFDLENBQUMsV0FBVztRQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBQSxHQUFHLEVBQUMsQ0FBQyxXQUFXO0tBQ25DLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUFvQjs7VUFDbEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUNsQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE9BQW9COztVQUNqRCxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVU7SUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUN2QyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1COztVQUM3QyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVU7O1FBQzlCLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtJQUM1QixJQUFJLE1BQU0sRUFBRTs7Y0FDSixLQUFLLEdBQVcsRUFBRTtRQUN4QixRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUM7UUFDakQsT0FBTyxNQUFNLEVBQUUsRUFBRTtZQUNmLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkM7S0FDRjtBQUNILENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBOEI7SUFDekQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUE4QjtJQUM3RCxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDbkYsQ0FBQzs7OztBQUVELDhDQVdDOzs7SUFWQyx1Q0FBWTs7SUFDWix3Q0FBYTs7SUFDYiw0Q0FBbUI7O0lBQ25CLHlDQUFjOztJQUVkLHdDQUF5Qjs7SUFDekIsaURBQW1DOztJQUNuQyxpREFBbUM7Ozs7O0lBRW5DLDZEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHV0aWxpdHkgZnVuY3Rpb25zIHRvIHF1ZXJ5IERPTSBpbmZvcm1hdGlvbiBvclxuICogc2V0IHByb3BlcnRpZXMuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmaWx0ZXJOb3RFbXB0eU5vZGUgfSBmcm9tICcuL2NoZWNrJztcblxuLyoqXG4gKiBTaWxlbnQgYW4gZXZlbnQgYnkgc3RvcHBpbmcgYW5kIHByZXZlbnRpbmcgaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWxlbnRFdmVudChlOiBFdmVudCk6IHZvaWQge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50T2Zmc2V0KGVsZW06IEhUTUxFbGVtZW50KTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICBpZiAoIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQhLmRlZmF1bHRWaWV3O1xuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyB3aW4hLnBhZ2VZT2Zmc2V0LFxuICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbiEucGFnZVhPZmZzZXRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdE5vdEVtcHR5Tm9kZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IE5vZGUgfCBudWxsIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkTm9kZXM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gY2hpbGRyZW4uaXRlbShpKTtcbiAgICBpZiAoZmlsdGVyTm90RW1wdHlOb2RlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdE5vdEVtcHR5Tm9kZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IE5vZGUgfCBudWxsIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkTm9kZXM7XG4gIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgIGlmIChmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VDaGlsZE5vZGVzKHBhcmVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGROb2RlcztcbiAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgaWYgKGxlbmd0aCkge1xuICAgIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbXTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChub2RlLCBpKSA9PiAobm9kZXNbaV0gPSBub2RlKSk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZXNbbGVuZ3RoXSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW52ZXN0aWdhdGUgaWYgYW4gZXZlbnQgaXMgYSBgVG91Y2hFdmVudGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvdWNoRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogZXZlbnQgaXMgVG91Y2hFdmVudCB7XG4gIHJldHVybiBldmVudC50eXBlLnN0YXJ0c1dpdGgoJ3RvdWNoJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IE1vdXNlRXZlbnQgfCBUb3VjaCB7XG4gIHJldHVybiBpc1RvdWNoRXZlbnQoZXZlbnQpID8gZXZlbnQudG91Y2hlc1swXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyB7XG4gIGVuZDogc3RyaW5nO1xuICBtb3ZlOiBzdHJpbmc7XG4gIHBsdWNrS2V5OiBzdHJpbmdbXTtcbiAgc3RhcnQ6IHN0cmluZztcblxuICBlbmQkPzogT2JzZXJ2YWJsZTxFdmVudD47XG4gIG1vdmVSZXNvbHZlZCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHN0YXJ0UGx1Y2tlZCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgZmlsdGVyPyhlOiBFdmVudCk6IGJvb2xlYW47XG59XG4iXX0=