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
// tslint:disable:no-any
import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';
/** @type {?} */
var record = {};
/** @type {?} */
export var PREFIX = '[NG-ZORRO]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    /** @type {?} */
    var asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    function (acc, c) { return acc + c.toString(); }), '');
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
function consoleCommonBehavior(consoleFunc) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (environment.isTestMode || (isDevMode() && notRecorded.apply(void 0, tslib_1.__spread(args)))) {
        consoleFunc.apply(void 0, tslib_1.__spread(args));
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
export var warn = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return consoleCommonBehavior.apply(void 0, tslib_1.__spread([(/**
         * @param {...?} arg
         * @return {?}
         */
        function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return console.warn.apply(console, tslib_1.__spread([PREFIX], arg));
        })], args));
});
/** @type {?} */
export var warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!environment.isTestMode) {
        /** @type {?} */
        var stack_1 = new Error().stack;
        return consoleCommonBehavior.apply(void 0, tslib_1.__spread([(/**
             * @param {...?} arg
             * @return {?}
             */
            function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                return console.warn.apply(console, tslib_1.__spread([PREFIX, 'deprecated:'], arg, [stack_1]));
            })], args));
    }
    else {
        return (/**
         * @return {?}
         */
        function () { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
export var log = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isDevMode()) {
        console.log.apply(console, tslib_1.__spread([PREFIX], args));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsibG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0lBRXBELE1BQU0sR0FBNEIsRUFBRTs7QUFFMUMsTUFBTSxLQUFPLE1BQU0sR0FBRyxhQUFhOzs7OztBQUVuQyxTQUFTLFdBQVc7SUFBQyxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLHlCQUFjOzs7UUFDM0IsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsSUFBSyxPQUFBLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQWxCLENBQWtCLEdBQUUsRUFBRSxDQUFDO0lBRWhFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMscUJBQXFCLENBQUMsV0FBbUM7SUFBRSxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLDZCQUFjOztJQUNoRixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxXQUFXLGdDQUFJLElBQUksRUFBQyxDQUFDLEVBQUU7UUFDbkUsV0FBVyxnQ0FBSSxJQUFJLEdBQUU7S0FDdEI7QUFDSCxDQUFDOzs7QUFHRCxNQUFNLEtBQU8sSUFBSTs7OztBQUFHO0lBQUMsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCx5QkFBYzs7SUFBSyxPQUFBLHFCQUFxQjs7OztRQUFDO1lBQUMsYUFBYTtpQkFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO2dCQUFiLHdCQUFhOztZQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG9CQUFNLE1BQU0sR0FBSyxHQUFHO1FBQTNCLENBQTRCLElBQUssSUFBSTtBQUE5RSxDQUErRSxDQUFBOztBQUV2SCxNQUFNLEtBQU8sZUFBZTs7OztBQUFHO0lBQUMsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCx5QkFBYzs7SUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7O1lBQ3JCLE9BQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLEtBQUs7UUFDL0IsT0FBTyxxQkFBcUI7Ozs7WUFBQztnQkFBQyxhQUFhO3FCQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7b0JBQWIsd0JBQWE7O2dCQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG9CQUFNLE1BQU0sRUFBRSxhQUFhLEdBQUssR0FBRyxHQUFFLE9BQUs7WUFBakQsQ0FBa0QsSUFBSyxJQUFJLEdBQUU7S0FDOUc7U0FBTTtRQUNMOzs7UUFBTyxjQUFPLENBQUMsRUFBQztLQUNqQjtBQUNILENBQUMsQ0FBQTs7O0FBR0QsTUFBTSxLQUFPLEdBQUc7Ozs7QUFBRztJQUFDLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQseUJBQWM7O0lBQ2hDLElBQUksU0FBUyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sb0JBQUssTUFBTSxHQUFLLElBQUksR0FBRTtLQUM5QjtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcblxuZXhwb3J0IGNvbnN0IFBSRUZJWCA9ICdbTkctWk9SUk9dOic7XG5cbmZ1bmN0aW9uIG5vdFJlY29yZGVkKC4uLmFyZ3M6IGFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGFzUmVjb3JkID0gYXJncy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICsgYy50b1N0cmluZygpLCAnJyk7XG5cbiAgaWYgKHJlY29yZFthc1JlY29yZF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmVjb3JkW2FzUmVjb3JkXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc29sZUNvbW1vbkJlaGF2aW9yKGNvbnNvbGVGdW5jOiAoLi4uYXJnczogYW55KSA9PiB2b2lkLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICBpZiAoZW52aXJvbm1lbnQuaXNUZXN0TW9kZSB8fCAoaXNEZXZNb2RlKCkgJiYgbm90UmVjb3JkZWQoLi4uYXJncykpKSB7XG4gICAgY29uc29sZUZ1bmMoLi4uYXJncyk7XG4gIH1cbn1cblxuLy8gV2FybmluZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlIGFuZCBvbmx5IG9uY2UuXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IGFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAuLi5hcmcpLCAuLi5hcmdzKTtcblxuZXhwb3J0IGNvbnN0IHdhcm5EZXByZWNhdGlvbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICBpZiAoIWVudmlyb25tZW50LmlzVGVzdE1vZGUpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIHJldHVybiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogYW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsICdkZXByZWNhdGVkOicsIC4uLmFyZywgc3RhY2spLCAuLi5hcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH1cbn07XG5cbi8vIExvZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlLlxuZXhwb3J0IGNvbnN0IGxvZyA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhQUkVGSVgsIC4uLmFyZ3MpO1xuICB9XG59O1xuIl19