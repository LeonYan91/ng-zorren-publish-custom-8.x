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
// tslint:disable:no-any
import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';
/** @type {?} */
const record = {};
/** @type {?} */
export const PREFIX = '[NG-ZORRO]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded(...args) {
    /** @type {?} */
    const asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    (acc, c) => acc + c.toString()), '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
/**
 * @param {?} consoleFunc
 * @param {...?} args
 * @return {?}
 */
function consoleCommonBehavior(consoleFunc, ...args) {
    if (environment.isTestMode || (isDevMode() && notRecorded(...args))) {
        consoleFunc(...args);
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
export const warn = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => consoleCommonBehavior((/**
 * @param {...?} arg
 * @return {?}
 */
(...arg) => console.warn(PREFIX, ...arg)), ...args));
/** @type {?} */
export const warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    if (!environment.isTestMode) {
        /** @type {?} */
        const stack = new Error().stack;
        return consoleCommonBehavior((/**
         * @param {...?} arg
         * @return {?}
         */
        (...arg) => console.warn(PREFIX, 'deprecated:', ...arg, stack)), ...args);
    }
    else {
        return (/**
         * @return {?}
         */
        () => { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
export const log = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    if (isDevMode()) {
        console.log(PREFIX, ...args);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsibG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7TUFFcEQsTUFBTSxHQUE0QixFQUFFOztBQUUxQyxNQUFNLE9BQU8sTUFBTSxHQUFHLGFBQWE7Ozs7O0FBRW5DLFNBQVMsV0FBVyxDQUFDLEdBQUcsSUFBVzs7VUFDM0IsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRSxFQUFFLENBQUM7SUFFaEUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxXQUFtQyxFQUFFLEdBQUcsSUFBVztJQUNoRixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ25FLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQzs7O0FBR0QsTUFBTSxPQUFPLElBQUk7Ozs7QUFBRyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUI7Ozs7QUFBQyxDQUFDLEdBQUcsR0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7O0FBRXZILE1BQU0sT0FBTyxlQUFlOzs7O0FBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO0lBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFOztjQUNyQixLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQy9CLE9BQU8scUJBQXFCOzs7O1FBQUMsQ0FBQyxHQUFHLEdBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDOUc7U0FBTTtRQUNMOzs7UUFBTyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7S0FDakI7QUFDSCxDQUFDLENBQUE7OztBQUdELE1BQU0sT0FBTyxHQUFHOzs7O0FBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO0lBQ3BDLElBQUksU0FBUyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQzlCO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuXG5leHBvcnQgY29uc3QgUFJFRklYID0gJ1tORy1aT1JST106JztcblxuZnVuY3Rpb24gbm90UmVjb3JkZWQoLi4uYXJnczogYW55W10pOiBib29sZWFuIHtcbiAgY29uc3QgYXNSZWNvcmQgPSBhcmdzLnJlZHVjZSgoYWNjLCBjKSA9PiBhY2MgKyBjLnRvU3RyaW5nKCksICcnKTtcblxuICBpZiAocmVjb3JkW2FzUmVjb3JkXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZWNvcmRbYXNSZWNvcmRdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoY29uc29sZUZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gIGlmIChlbnZpcm9ubWVudC5pc1Rlc3RNb2RlIHx8IChpc0Rldk1vZGUoKSAmJiBub3RSZWNvcmRlZCguLi5hcmdzKSkpIHtcbiAgICBjb25zb2xlRnVuYyguLi5hcmdzKTtcbiAgfVxufVxuXG4vLyBXYXJuaW5nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUgYW5kIG9ubHkgb25jZS5cbmV4cG9ydCBjb25zdCB3YXJuID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogYW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsIC4uLmFyZyksIC4uLmFyZ3MpO1xuXG5leHBvcnQgY29uc3Qgd2FybkRlcHJlY2F0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIGlmICghZW52aXJvbm1lbnQuaXNUZXN0TW9kZSkge1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgcmV0dXJuIGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBhbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgJ2RlcHJlY2F0ZWQ6JywgLi4uYXJnLCBzdGFjayksIC4uLmFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfVxufTtcblxuLy8gTG9nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUuXG5leHBvcnQgY29uc3QgbG9nID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIGlmIChpc0Rldk1vZGUoKSkge1xuICAgIGNvbnNvbGUubG9nKFBSRUZJWCwgLi4uYXJncyk7XG4gIH1cbn07XG4iXX0=