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
let scrollbarVerticalSize;
/** @type {?} */
let scrollbarHorizontalSize;
// Measure scrollbar width for padding body during modal show/hide
/** @type {?} */
const scrollbarMeasure = {
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
export function measureScrollbar(direction = 'vertical', prefix = 'ant') {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    /** @type {?} */
    const isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
        return scrollbarVerticalSize;
    }
    else if (!isVertical && scrollbarHorizontalSize) {
        return scrollbarHorizontalSize;
    }
    /** @type {?} */
    const scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach((/**
     * @param {?} scrollProp
     * @return {?}
     */
    scrollProp => {
        // @ts-ignore
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }));
    // apply hide scrollbar className ahead
    scrollDiv.className = `${prefix}-hide-scrollbar scroll-div-append-to-body`;
    // Append related overflow style
    if (isVertical) {
        scrollDiv.style.overflowY = 'scroll';
    }
    else {
        scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    /** @type {?} */
    let size = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS1zY3JvbGxiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL21lYXN1cmUtc2Nyb2xsYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9JLHFCQUE2Qjs7SUFDN0IsdUJBQStCOzs7TUFHN0IsZ0JBQWdCLEdBQUc7SUFDdkIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsR0FBRyxFQUFFLFNBQVM7SUFDZCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxZQUF1QyxVQUFVLEVBQUUsU0FBaUIsS0FBSztJQUN4RyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDcEUsT0FBTyxDQUFDLENBQUM7S0FDVjs7VUFDSyxVQUFVLEdBQUcsU0FBUyxLQUFLLFVBQVU7SUFDM0MsSUFBSSxVQUFVLElBQUkscUJBQXFCLEVBQUU7UUFDdkMsT0FBTyxxQkFBcUIsQ0FBQztLQUM5QjtTQUFNLElBQUksQ0FBQyxVQUFVLElBQUksdUJBQXVCLEVBQUU7UUFDakQsT0FBTyx1QkFBdUIsQ0FBQztLQUNoQzs7VUFDSyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFVLENBQUMsRUFBRTtRQUNqRCxhQUFhO1FBQ2IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDLEVBQUMsQ0FBQztJQUNILHVDQUF1QztJQUN2QyxTQUFTLENBQUMsU0FBUyxHQUFHLEdBQUcsTUFBTSwyQ0FBMkMsQ0FBQztJQUMzRSxnQ0FBZ0M7SUFDaEMsSUFBSSxVQUFVLEVBQUU7UUFDZCxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7S0FDdEM7U0FBTTtRQUNMLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUN0QztJQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUNqQyxJQUFJLEdBQUcsQ0FBQztJQUNaLElBQUksVUFBVSxFQUFFO1FBQ2QsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNyRCxxQkFBcUIsR0FBRyxJQUFJLENBQUM7S0FDOUI7U0FBTTtRQUNMLElBQUksR0FBRyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDdkQsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0tBQ2hDO0lBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5sZXQgc2Nyb2xsYmFyVmVydGljYWxTaXplOiBudW1iZXI7XG5sZXQgc2Nyb2xsYmFySG9yaXpvbnRhbFNpemU6IG51bWJlcjtcblxuLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGggZm9yIHBhZGRpbmcgYm9keSBkdXJpbmcgbW9kYWwgc2hvdy9oaWRlXG5jb25zdCBzY3JvbGxiYXJNZWFzdXJlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnLTk5OTlweCcsXG4gIHdpZHRoOiAnNTBweCcsXG4gIGhlaWdodDogJzUwcHgnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcihkaXJlY3Rpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgPSAndmVydGljYWwnLCBwcmVmaXg6IHN0cmluZyA9ICdhbnQnKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICBpZiAoaXNWZXJ0aWNhbCAmJiBzY3JvbGxiYXJWZXJ0aWNhbFNpemUpIHtcbiAgICByZXR1cm4gc2Nyb2xsYmFyVmVydGljYWxTaXplO1xuICB9IGVsc2UgaWYgKCFpc1ZlcnRpY2FsICYmIHNjcm9sbGJhckhvcml6b250YWxTaXplKSB7XG4gICAgcmV0dXJuIHNjcm9sbGJhckhvcml6b250YWxTaXplO1xuICB9XG4gIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBPYmplY3Qua2V5cyhzY3JvbGxiYXJNZWFzdXJlKS5mb3JFYWNoKHNjcm9sbFByb3AgPT4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBzY3JvbGxEaXYuc3R5bGVbc2Nyb2xsUHJvcF0gPSBzY3JvbGxiYXJNZWFzdXJlW3Njcm9sbFByb3BdO1xuICB9KTtcbiAgLy8gYXBwbHkgaGlkZSBzY3JvbGxiYXIgY2xhc3NOYW1lIGFoZWFkXG4gIHNjcm9sbERpdi5jbGFzc05hbWUgPSBgJHtwcmVmaXh9LWhpZGUtc2Nyb2xsYmFyIHNjcm9sbC1kaXYtYXBwZW5kLXRvLWJvZHlgO1xuICAvLyBBcHBlbmQgcmVsYXRlZCBvdmVyZmxvdyBzdHlsZVxuICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcbiAgfSBlbHNlIHtcbiAgICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3dYID0gJ3Njcm9sbCc7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICBsZXQgc2l6ZSA9IDA7XG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgc2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICBzY3JvbGxiYXJWZXJ0aWNhbFNpemUgPSBzaXplO1xuICB9IGVsc2Uge1xuICAgIHNpemUgPSBzY3JvbGxEaXYub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRGl2LmNsaWVudEhlaWdodDtcbiAgICBzY3JvbGxiYXJIb3Jpem9udGFsU2l6ZSA9IHNpemU7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzaXplO1xufVxuIl19