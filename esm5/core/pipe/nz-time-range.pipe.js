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
import { Pipe } from '@angular/core';
import { timeUnits } from '../time';
import { padStart } from '../util';
var NzTimeRangePipe = /** @class */ (function () {
    function NzTimeRangePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    NzTimeRangePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    function (value, format) {
        if (format === void 0) { format = 'HH:mm:ss'; }
        /** @type {?} */
        var duration = Number(value || 0);
        return timeUnits.reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        function (current, _a) {
            var _b = tslib_1.__read(_a, 2), name = _b[0], unit = _b[1];
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                var v_1 = Math.floor(duration / unit);
                duration -= v_1 * unit;
                return current.replace(new RegExp(name + "+", 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) {
                    return padStart(v_1.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    };
    NzTimeRangePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzTimeRange',
                    pure: true
                },] }
    ];
    return NzTimeRangePipe;
}());
export { NzTimeRangePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRW5DO0lBQUE7SUFtQkEsQ0FBQzs7Ozs7O0lBZEMsbUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFzQixFQUFFLE1BQTJCO1FBQTNCLHVCQUFBLEVBQUEsbUJBQTJCOztZQUN2RCxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFFakMsT0FBTyxTQUFTLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLE9BQU8sRUFBRSxFQUFZO2dCQUFaLDBCQUFZLEVBQVgsWUFBSSxFQUFFLFlBQUk7WUFDM0MsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztvQkFDMUIsR0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckMsUUFBUSxJQUFJLEdBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBSSxJQUFJLE1BQUcsRUFBRSxHQUFHLENBQUM7Ozs7Z0JBQUUsVUFBQyxLQUFhO29CQUNoRSxPQUFPLFFBQVEsQ0FBQyxHQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsR0FBRSxNQUFNLENBQUMsQ0FBQztJQUNiLENBQUM7O2dCQWxCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxJQUFJO2lCQUNYOztJQWdCRCxzQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aW1lVW5pdHMgfSBmcm9tICcuLi90aW1lJztcbmltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSAnLi4vdXRpbCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ256VGltZVJhbmdlJyxcbiAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVSYW5nZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJyk6IHN0cmluZyB7XG4gICAgbGV0IGR1cmF0aW9uID0gTnVtYmVyKHZhbHVlIHx8IDApO1xuXG4gICAgcmV0dXJuIHRpbWVVbml0cy5yZWR1Y2UoKGN1cnJlbnQsIFtuYW1lLCB1bml0XSkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdiA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyB1bml0KTtcbiAgICAgICAgZHVyYXRpb24gLT0gdiAqIHVuaXQ7XG4gICAgICAgIHJldHVybiBjdXJyZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJHtuYW1lfStgLCAnZycpLCAobWF0Y2g6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHJldHVybiBwYWRTdGFydCh2LnRvU3RyaW5nKCksIG1hdGNoLmxlbmd0aCwgJzAnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9LCBmb3JtYXQpO1xuICB9XG59XG4iXX0=