/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} button
 * @return {?}
 */
export function createMouseEvent(type, x = 0, y = 0, button = 0) {
    /** @type {?} */
    const event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: (/**
         * @return {?}
         */
        () => 1) });
    return event;
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @param {?} type
 * @param {?=} pageX
 * @param {?=} pageY
 * @return {?}
 */
export function createTouchEvent(type, pageX = 0, pageY = 0) {
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    /** @type {?} */
    const event = document.createEvent('UIEvent');
    /** @type {?} */
    const touchDetails = { pageX, pageY, clientX: pageX, clientY: pageY };
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
        targetTouches: { value: [touchDetails] },
        changedTouches: { value: [touchDetails] }
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @param {?=} key
 * @return {?}
 */
export function createKeyboardEvent(type, keyCode, target, key) {
    // tslint:disable-next-line:no-any
    /** @type {?} */
    const event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
    /** @type {?} */
    const originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    }
    else {
        event.initKeyboardEvent(type, true, true, window, 0, key, 0, '', false);
    }
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: (/**
             * @return {?}
             */
            () => keyCode) },
        key: { get: (/**
             * @return {?}
             */
            () => key) },
        target: { get: (/**
             * @return {?}
             */
            () => target) }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    // tslint:disable-next-line:typedef
    event.preventDefault = (/**
     * @return {?}
     */
    function () {
        Object.defineProperty(event, 'defaultPrevented', { get: (/**
             * @return {?}
             */
            () => true) });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    });
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @param {?} type
 * @param {?=} canBubble
 * @param {?=} cancelable
 * @return {?}
 */
export function createFakeEvent(type, canBubble = true, cancelable = true) {
    /** @type {?} */
    const event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRlc3RpbmcvZXZlbnQtb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUMsRUFBRSxTQUFpQixDQUFDOztVQUN2RixLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFFaEQsS0FBSyxDQUFDLGNBQWMsQ0FDbEIsSUFBSSxFQUNKLElBQUksQ0FBQyxlQUFlLEVBQ3BCLEtBQUssQ0FBQyxnQkFBZ0IsRUFDdEIsTUFBTSxDQUFDLFVBQVUsRUFDakIsQ0FBQyxDQUFDLFlBQVksRUFDZCxDQUFDLENBQUMsYUFBYSxFQUNmLENBQUMsQ0FBQyxhQUFhLEVBQ2YsQ0FBQyxDQUFDLGFBQWEsRUFDZixDQUFDLENBQUMsYUFBYSxFQUNmLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLEVBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLE1BQU0sQ0FBQyxZQUFZLEVBQ25CLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztJQUVGLDhEQUE4RDtJQUM5RCxrREFBa0Q7SUFDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRzs7O1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQyxDQUFDO0lBRTFELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLFFBQWdCLENBQUMsRUFBRSxRQUFnQixDQUFDOzs7O1VBRzNFLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQzs7VUFDdkMsWUFBWSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7SUFDckUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0MsdUZBQXVGO0lBQ3ZGLHFCQUFxQjtJQUNyQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1FBQzdCLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ2xDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3hDLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO0tBQzFDLENBQUMsQ0FBQztJQUVILE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLG1CQUFtQixDQUFDLElBQVksRUFBRSxPQUFlLEVBQUUsTUFBZ0IsRUFBRSxHQUFZOzs7VUFFekYsS0FBSyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQU87O1VBQ3BELHNCQUFzQixHQUFHLEtBQUssQ0FBQyxjQUFjO0lBRW5ELDZFQUE2RTtJQUM3RSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7UUFDdEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN0RTtTQUFNO1FBQ0wsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekU7SUFFRCx3RUFBd0U7SUFDeEUsZ0VBQWdFO0lBQ2hFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7UUFDN0IsT0FBTyxFQUFFLEVBQUUsR0FBRzs7O1lBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFBLEVBQUU7UUFDL0IsR0FBRyxFQUFFLEVBQUUsR0FBRzs7O1lBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFBLEVBQUU7UUFDdkIsTUFBTSxFQUFFLEVBQUUsR0FBRzs7O1lBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFBLEVBQUU7S0FDOUIsQ0FBQyxDQUFDO0lBRUgsb0ZBQW9GO0lBQ3BGLG1DQUFtQztJQUNuQyxLQUFLLENBQUMsY0FBYzs7O0lBQUc7UUFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxHQUFHOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUEsRUFBRSxDQUFDLENBQUM7UUFDdEUsMkNBQTJDO1FBQzNDLE9BQU8sc0JBQXNCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUEsQ0FBQztJQUVGLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVksRUFBRSxZQUFxQixJQUFJLEVBQUUsYUFBc0IsSUFBSTs7VUFDM0YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQzNDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqIENyZWF0ZXMgYSBicm93c2VyIE1vdXNlRXZlbnQgd2l0aCB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW91c2VFdmVudCh0eXBlOiBzdHJpbmcsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGJ1dHRvbjogbnVtYmVyID0gMCk6IE1vdXNlRXZlbnQge1xuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XG5cbiAgZXZlbnQuaW5pdE1vdXNlRXZlbnQoXG4gICAgdHlwZSxcbiAgICB0cnVlIC8qIGNhbkJ1YmJsZSAqLyxcbiAgICBmYWxzZSAvKiBjYW5jZWxhYmxlICovLFxuICAgIHdpbmRvdyAvKiB2aWV3ICovLFxuICAgIDAgLyogZGV0YWlsICovLFxuICAgIHggLyogc2NyZWVuWCAqLyxcbiAgICB5IC8qIHNjcmVlblkgKi8sXG4gICAgeCAvKiBjbGllbnRYICovLFxuICAgIHkgLyogY2xpZW50WSAqLyxcbiAgICBmYWxzZSAvKiBjdHJsS2V5ICovLFxuICAgIGZhbHNlIC8qIGFsdEtleSAqLyxcbiAgICBmYWxzZSAvKiBzaGlmdEtleSAqLyxcbiAgICBmYWxzZSAvKiBtZXRhS2V5ICovLFxuICAgIGJ1dHRvbiAvKiBidXR0b24gKi8sXG4gICAgbnVsbCAvKiByZWxhdGVkVGFyZ2V0ICovXG4gICk7XG5cbiAgLy8gYGluaXRNb3VzZUV2ZW50YCBkb2Vzbid0IGFsbG93IHVzIHRvIHBhc3MgdGhlIGBidXR0b25zYCBhbmRcbiAgLy8gZGVmYXVsdHMgaXQgdG8gMCB3aGljaCBsb29rcyBsaWtlIGEgZmFrZSBldmVudC5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnYnV0dG9ucycsIHsgZ2V0OiAoKSA9PiAxIH0pO1xuXG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqIENyZWF0ZXMgYSBicm93c2VyIFRvdWNoRXZlbnQgd2l0aCB0aGUgc3BlY2lmaWVkIHBvaW50ZXIgY29vcmRpbmF0ZXMuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG91Y2hFdmVudCh0eXBlOiBzdHJpbmcsIHBhZ2VYOiBudW1iZXIgPSAwLCBwYWdlWTogbnVtYmVyID0gMCk6IFVJRXZlbnQge1xuICAvLyBJbiBmYXZvciBvZiBjcmVhdGluZyBldmVudHMgdGhhdCB3b3JrIGZvciBtb3N0IG9mIHRoZSBicm93c2VycywgdGhlIGV2ZW50IGlzIGNyZWF0ZWRcbiAgLy8gYXMgYSBiYXNpYyBVSSBFdmVudC4gVGhlIG5lY2Vzc2FyeSBkZXRhaWxzIGZvciB0aGUgZXZlbnQgd2lsbCBiZSBzZXQgbWFudWFsbHkuXG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1VJRXZlbnQnKTtcbiAgY29uc3QgdG91Y2hEZXRhaWxzID0geyBwYWdlWCwgcGFnZVksIGNsaWVudFg6IHBhZ2VYLCBjbGllbnRZOiBwYWdlWSB9O1xuICBldmVudC5pbml0VUlFdmVudCh0eXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDApO1xuXG4gIC8vIE1vc3Qgb2YgdGhlIGJyb3dzZXJzIGRvbid0IGhhdmUgYSBcImluaXRUb3VjaEV2ZW50XCIgbWV0aG9kIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGVmaW5lXG4gIC8vIHRoZSB0b3VjaCBkZXRhaWxzLlxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhldmVudCwge1xuICAgIHRvdWNoZXM6IHsgdmFsdWU6IFt0b3VjaERldGFpbHNdIH0sXG4gICAgdGFyZ2V0VG91Y2hlczogeyB2YWx1ZTogW3RvdWNoRGV0YWlsc10gfSxcbiAgICBjaGFuZ2VkVG91Y2hlczogeyB2YWx1ZTogW3RvdWNoRGV0YWlsc10gfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnQ7XG59XG5cbi8qKiBEaXNwYXRjaGVzIGEga2V5ZG93biBldmVudCBmcm9tIGFuIGVsZW1lbnQuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2V5Ym9hcmRFdmVudCh0eXBlOiBzdHJpbmcsIGtleUNvZGU6IG51bWJlciwgdGFyZ2V0PzogRWxlbWVudCwga2V5Pzogc3RyaW5nKTogS2V5Ym9hcmRFdmVudCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnS2V5Ym9hcmRFdmVudCcpIGFzIGFueTtcbiAgY29uc3Qgb3JpZ2luYWxQcmV2ZW50RGVmYXVsdCA9IGV2ZW50LnByZXZlbnREZWZhdWx0O1xuXG4gIC8vIEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCBgaW5pdEtleWJvYXJkRXZlbnRgLCBidXQgc3VwcG9ydHMgYGluaXRLZXlFdmVudGAuXG4gIGlmIChldmVudC5pbml0S2V5RXZlbnQpIHtcbiAgICBldmVudC5pbml0S2V5RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBrZXlDb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudC5pbml0S2V5Ym9hcmRFdmVudCh0eXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIGtleSwgMCwgJycsIGZhbHNlKTtcbiAgfVxuXG4gIC8vIFdlYmtpdCBCcm93c2VycyBkb24ndCBzZXQgdGhlIGtleUNvZGUgd2hlbiBjYWxsaW5nIHRoZSBpbml0IGZ1bmN0aW9uLlxuICAvLyBTZWUgcmVsYXRlZCBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE2NzM1XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XG4gICAga2V5Q29kZTogeyBnZXQ6ICgpID0+IGtleUNvZGUgfSxcbiAgICBrZXk6IHsgZ2V0OiAoKSA9PiBrZXkgfSxcbiAgICB0YXJnZXQ6IHsgZ2V0OiAoKSA9PiB0YXJnZXQgfVxuICB9KTtcblxuICAvLyBJRSB3b24ndCBzZXQgYGRlZmF1bHRQcmV2ZW50ZWRgIG9uIHN5bnRoZXRpYyBldmVudHMgc28gd2UgbmVlZCB0byBkbyBpdCBtYW51YWxseS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcbiAgZXZlbnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICdkZWZhdWx0UHJldmVudGVkJywgeyBnZXQ6ICgpID0+IHRydWUgfSk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWludmFsaWQtdGhpc1xuICAgIHJldHVybiBvcmlnaW5hbFByZXZlbnREZWZhdWx0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKiogQ3JlYXRlcyBhIGZha2UgZXZlbnQgb2JqZWN0IHdpdGggYW55IGRlc2lyZWQgZXZlbnQgdHlwZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGYWtlRXZlbnQodHlwZTogc3RyaW5nLCBjYW5CdWJibGU6IGJvb2xlYW4gPSB0cnVlLCBjYW5jZWxhYmxlOiBib29sZWFuID0gdHJ1ZSk6IEV2ZW50IHtcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGNhbkJ1YmJsZSwgY2FuY2VsYWJsZSk7XG4gIHJldHVybiBldmVudDtcbn1cbiJdfQ==