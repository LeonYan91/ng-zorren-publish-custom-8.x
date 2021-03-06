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
 * @type {?}
 */
var scrollbarVerticalSize;
/** @type {?} */
var scrollbarHorizontalSize;
// Measure scrollbar width for padding body during modal show/hide
/** @type {?} */
var scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px'
};
/**
 * @param {?=} direction
 * @param {?=} prefix
 * @return {?}
 */
export function measureScrollbar(direction, prefix) {
    if (direction === void 0) { direction = 'vertical'; }
    if (prefix === void 0) { prefix = 'ant'; }
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    /** @type {?} */
    var isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
        return scrollbarVerticalSize;
    }
    else if (!isVertical && scrollbarHorizontalSize) {
        return scrollbarHorizontalSize;
    }
    /** @type {?} */
    var scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach((/**
     * @param {?} scrollProp
     * @return {?}
     */
    function (scrollProp) {
        // @ts-ignore
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }));
    // apply hide scrollbar className ahead
    scrollDiv.className = prefix + "-hide-scrollbar scroll-div-append-to-body";
    // Append related overflow style
    if (isVertical) {
        scrollDiv.style.overflowY = 'scroll';
    }
    else {
        scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    /** @type {?} */
    var size = 0;
    if (isVertical) {
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        scrollbarVerticalSize = size;
    }
    else {
        size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        scrollbarHorizontalSize = size;
    }
    document.body.removeChild(scrollDiv);
    return size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS1zY3JvbGxiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL21lYXN1cmUtc2Nyb2xsYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9JLHFCQUE2Qjs7SUFDN0IsdUJBQStCOzs7SUFHN0IsZ0JBQWdCLEdBQUc7SUFDdkIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsR0FBRyxFQUFFLFNBQVM7SUFDZCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxTQUFpRCxFQUFFLE1BQXNCO0lBQXpFLDBCQUFBLEVBQUEsc0JBQWlEO0lBQUUsdUJBQUEsRUFBQSxjQUFzQjtJQUN4RyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDcEUsT0FBTyxDQUFDLENBQUM7S0FDVjs7UUFDSyxVQUFVLEdBQUcsU0FBUyxLQUFLLFVBQVU7SUFDM0MsSUFBSSxVQUFVLElBQUkscUJBQXFCLEVBQUU7UUFDdkMsT0FBTyxxQkFBcUIsQ0FBQztLQUM5QjtTQUFNLElBQUksQ0FBQyxVQUFVLElBQUksdUJBQXVCLEVBQUU7UUFDakQsT0FBTyx1QkFBdUIsQ0FBQztLQUNoQzs7UUFDSyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLFVBQVU7UUFDOUMsYUFBYTtRQUNiLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQyxFQUFDLENBQUM7SUFDSCx1Q0FBdUM7SUFDdkMsU0FBUyxDQUFDLFNBQVMsR0FBTSxNQUFNLDhDQUEyQyxDQUFDO0lBQzNFLGdDQUFnQztJQUNoQyxJQUFJLFVBQVUsRUFBRTtRQUNkLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUN0QztTQUFNO1FBQ0wsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQ3RDO0lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBQ2pDLElBQUksR0FBRyxDQUFDO0lBQ1osSUFBSSxVQUFVLEVBQUU7UUFDZCxJQUFJLEdBQUcsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQ3JELHFCQUFxQixHQUFHLElBQUksQ0FBQztLQUM5QjtTQUFNO1FBQ0wsSUFBSSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUN2RCx1QkFBdUIsR0FBRyxJQUFJLENBQUM7S0FDaEM7SUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmxldCBzY3JvbGxiYXJWZXJ0aWNhbFNpemU6IG51bWJlcjtcbmxldCBzY3JvbGxiYXJIb3Jpem9udGFsU2l6ZTogbnVtYmVyO1xuXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbmNvbnN0IHNjcm9sbGJhck1lYXN1cmUgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICctOTk5OXB4JyxcbiAgd2lkdGg6ICc1MHB4JyxcbiAgaGVpZ2h0OiAnNTBweCdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICd2ZXJ0aWNhbCcsIHByZWZpeDogc3RyaW5nID0gJ2FudCcpOiBudW1iZXIge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IGlzVmVydGljYWwgPSBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XG4gIGlmIChpc1ZlcnRpY2FsICYmIHNjcm9sbGJhclZlcnRpY2FsU2l6ZSkge1xuICAgIHJldHVybiBzY3JvbGxiYXJWZXJ0aWNhbFNpemU7XG4gIH0gZWxzZSBpZiAoIWlzVmVydGljYWwgJiYgc2Nyb2xsYmFySG9yaXpvbnRhbFNpemUpIHtcbiAgICByZXR1cm4gc2Nyb2xsYmFySG9yaXpvbnRhbFNpemU7XG4gIH1cbiAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIE9iamVjdC5rZXlzKHNjcm9sbGJhck1lYXN1cmUpLmZvckVhY2goc2Nyb2xsUHJvcCA9PiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHNjcm9sbERpdi5zdHlsZVtzY3JvbGxQcm9wXSA9IHNjcm9sbGJhck1lYXN1cmVbc2Nyb2xsUHJvcF07XG4gIH0pO1xuICAvLyBhcHBseSBoaWRlIHNjcm9sbGJhciBjbGFzc05hbWUgYWhlYWRcbiAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IGAke3ByZWZpeH0taGlkZS1zY3JvbGxiYXIgc2Nyb2xsLWRpdi1hcHBlbmQtdG8tYm9keWA7XG4gIC8vIEFwcGVuZCByZWxhdGVkIG92ZXJmbG93IHN0eWxlXG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICB9IGVsc2Uge1xuICAgIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvd1ggPSAnc2Nyb2xsJztcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIGxldCBzaXplID0gMDtcbiAgaWYgKGlzVmVydGljYWwpIHtcbiAgICBzaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIHNjcm9sbGJhclZlcnRpY2FsU2l6ZSA9IHNpemU7XG4gIH0gZWxzZSB7XG4gICAgc2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEaXYuY2xpZW50SGVpZ2h0O1xuICAgIHNjcm9sbGJhckhvcml6b250YWxTaXplID0gc2l6ZTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNpemU7XG59XG4iXX0=