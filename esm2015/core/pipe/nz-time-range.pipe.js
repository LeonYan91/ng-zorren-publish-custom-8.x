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
import { timeUnits } from '../time';
import { padStart } from '../util';
export class NzTimeRangePipe {
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    transform(value, format = 'HH:mm:ss') {
        /** @type {?} */
        let duration = Number(value || 0);
        return timeUnits.reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        (current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                const v = Math.floor(duration / unit);
                duration -= v * unit;
                return current.replace(new RegExp(`${name}+`, 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                (match) => {
                    return padStart(v.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    }
}
NzTimeRangePipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzTimeRange',
                pure: true
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFNbkMsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixTQUFTLENBQUMsS0FBc0IsRUFBRSxTQUFpQixVQUFVOztZQUN2RCxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFFakMsT0FBTyxTQUFTLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7c0JBQzFCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7Ozs7Z0JBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtvQkFDcEUsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEdBQUUsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDOzs7WUFsQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsSUFBSTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpbWVVbml0cyB9IGZyb20gJy4uL3RpbWUnO1xuaW1wb3J0IHsgcGFkU3RhcnQgfSBmcm9tICcuLi91dGlsJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbnpUaW1lUmFuZ2UnLFxuICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZVJhbmdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IG51bWJlciwgZm9ybWF0OiBzdHJpbmcgPSAnSEg6bW06c3MnKTogc3RyaW5nIHtcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIodmFsdWUgfHwgMCk7XG5cbiAgICByZXR1cm4gdGltZVVuaXRzLnJlZHVjZSgoY3VycmVudCwgW25hbWUsIHVuaXRdKSA9PiB7XG4gICAgICBpZiAoY3VycmVudC5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBjb25zdCB2ID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIHVuaXQpO1xuICAgICAgICBkdXJhdGlvbiAtPSB2ICogdW5pdDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQucmVwbGFjZShuZXcgUmVnRXhwKGAke25hbWV9K2AsICdnJyksIChtYXRjaDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBhZFN0YXJ0KHYudG9TdHJpbmcoKSwgbWF0Y2gubGVuZ3RoLCAnMCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH0sIGZvcm1hdCk7XG4gIH1cbn1cbiJdfQ==