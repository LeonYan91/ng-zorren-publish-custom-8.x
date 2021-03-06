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
export { NzAddOnModule, NzClassListAddDirective, NzStringTemplateOutletDirective } from './addon/public-api';
export { AnimationDuration, AnimationCurves, collapseMotion, treeCollapseMotion, fadeMotion, helpMotion, moveUpMotion, notificationMotion, slideMotion, slideAlertMotion, zoomMotion, zoomBigMotion, zoomBadgeMotion } from './animation/public-api';
export { NzNoAnimationModule, NzNoAnimationDirective } from './no-animation/public-api';
export { NzConnectedOverlayDirective, NzOverlayModule, getPlacementName, POSITION_MAP, DEFAULT_TOOLTIP_POSITIONS, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_SUBMENU_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, DEFAULT_MENTION_BOTTOM_POSITIONS } from './overlay/public-api';
export { sortRangeValue, CandyDate, timeUnits } from './time/public-api';
export { cancelRequestAnimationFrame, reqAnimFrame } from './polyfill/public-api';
export { SCROLL_SERVICE_PROVIDER_FACTORY, NzScrollService, SCROLL_SERVICE_PROVIDER } from './scroll/public-api';
export { NzUpdateHostClassService, NzCopyToClipboardService, NzCopyToClipboardServiceModule, NzDomEventService, NzSingletonService, NzDragService } from './services/public-api';
export { dispatchEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, dispatchTouchEvent, createMouseEvent, createTouchEvent, createKeyboardEvent, createFakeEvent, typeInElement, wrappedErrorMessage, FakeViewportRuler, MockNgZone } from './testing/public-api';
export { NzTreeNode, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeBase } from './tree/public-api';
export {} from './types/public-api';
export { toArray, arraysEqual, shallowCopyArray, isNotNil, isNil, shallowEqual, isInteger, isEmpty, filterNotEmptyNode, isNonEmptyString, isTemplateRef, isComponent, toBoolean, toNumber, toCssPixel, valueFunctionProp, InputBoolean, InputCssPixel, InputNumber, silentEvent, getElementOffset, findFirstNotEmptyNode, findLastNotEmptyNode, reverseChildNodes, isTouchEvent, getEventPosition, getRegExp, getMentions, padStart, padEnd, getRepeatedElement, isPromise, getPercent, getPrecision, ensureNumberInRange, scrollIntoView, getCaretCoordinates, createDebugEle, properties, isStyleSupport, getStyleAsText, pxToNumber, measure, measureScrollbar, ensureInBounds, inNextTick } from './util/public-api';
export { NzWaveRenderer, NZ_WAVE_GLOBAL_CONFIG_FACTORY, NZ_WAVE_GLOBAL_DEFAULT_CONFIG, NZ_WAVE_GLOBAL_CONFIG, NzWaveDirective, NzWaveModule } from './wave/public-api';
export { NzMenuBaseService, NzDropdownHigherOrderServiceToken } from './dropdown/public-api';
export { PREFIX, warn, warnDeprecation, log } from './logger/public-api';
export { NzBreakpoint, responsiveMap } from './responsive/public-api';
export { NzTransButtonModule, NzTransButtonDirective } from './trans-button/public-api';
export { NzHighlightPipe, NzHighlightModule } from './highlight/public-api';
export { WithConfig, NzConfigService, NZ_CONFIG } from './config/public-api';
export { NzPipesModule, NzTimeRangePipe, NzToCssUnitPipe } from './pipe/public-api';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInB1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSx3RkFBYyxvQkFBb0IsQ0FBQztBQUNuQyw0TkFBYyx3QkFBd0IsQ0FBQztBQUN2Qyw0REFBYywyQkFBMkIsQ0FBQztBQUMxQyxnUEFBYyxzQkFBc0IsQ0FBQztBQUNyQyxxREFBYyxtQkFBbUIsQ0FBQztBQUNsQywwREFBYyx1QkFBdUIsQ0FBQztBQUN0QywwRkFBYyxxQkFBcUIsQ0FBQztBQUNwQyx5SkFBYyx1QkFBdUIsQ0FBQztBQUN0Qyw2UEFBYyxzQkFBc0IsQ0FBQztBQUNyQyx5RkFBYyxtQkFBbUIsQ0FBQztBQUNsQyxlQUFjLG9CQUFvQixDQUFDO0FBQ25DLHFxQkFBYyxtQkFBbUIsQ0FBQztBQUNsQyxtSkFBYyxtQkFBbUIsQ0FBQztBQUNsQyxxRUFBYyx1QkFBdUIsQ0FBQztBQUN0QyxtREFBYyxxQkFBcUIsQ0FBQztBQUNwQyw0Q0FBYyx5QkFBeUIsQ0FBQztBQUN4Qyw0REFBYywyQkFBMkIsQ0FBQztBQUMxQyxtREFBYyx3QkFBd0IsQ0FBQztBQUN2Qyx1REFBYyxxQkFBcUIsQ0FBQztBQUNwQyxnRUFBYyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2FkZG9uL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb24vcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL25vLWFuaW1hdGlvbi9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vb3ZlcmxheS9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vdGltZS9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vcG9seWZpbGwvcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3Njcm9sbC9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3Rlc3RpbmcvcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3RyZWUvcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi93YXZlL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9kcm9wZG93bi9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vbG9nZ2VyL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9yZXNwb25zaXZlL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90cmFucy1idXR0b24vcHVibGljLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL2hpZ2hsaWdodC9wdWJsaWMtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnL3B1YmxpYy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9waXBlL3B1YmxpYy1hcGknO1xuIl19