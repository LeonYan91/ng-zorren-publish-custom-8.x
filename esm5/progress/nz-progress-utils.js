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
/**
 * @param {?} percent
 * @return {?}
 */
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
/** @type {?} */
export var sortGradient = (/**
 * @param {?} gradients
 * @return {?}
 */
function (gradients) {
    /** @type {?} */
    var tempArr = [];
    Object.keys(gradients).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = gradients[key];
        /** @type {?} */
        var formatKey = stripPercentToNumber(key);
        if (isNaN(formatKey)) {
            return {};
        }
        tempArr.push({
            key: formatKey,
            value: value
        });
    }));
    tempArr = tempArr.sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.key - b.key; }));
    return tempArr;
});
/** @type {?} */
export var handleCircleGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    return sortGradient(strokeColor).map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key, value = _a.value;
        return ({ offset: key + "%", color: value });
    }));
});
/** @type {?} */
export var handleLinearGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    var _a = strokeColor.from, from = _a === void 0 ? '#1890ff' : _a, _b = strokeColor.to, to = _b === void 0 ? '#1890ff' : _b, _c = strokeColor.direction, direction = _c === void 0 ? 'to right' : _c, rest = tslib_1.__rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        /** @type {?} */
        var sortedGradients = sortGradient((/** @type {?} */ (rest)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            return value + " " + key + "%";
        }))
            .join(', ');
        return "linear-gradient(" + direction + ", " + sortedGradients + ")";
    }
    return "linear-gradient(" + direction + ", " + from + ", " + to + ")";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibnotcHJvZ3Jlc3MtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFNBQVMsb0JBQW9CLENBQUMsT0FBZTtJQUMzQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWTs7OztBQUFHLFVBQUMsU0FBcUM7O1FBQzVELE9BQU8sR0FBMEMsRUFBRTtJQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLEdBQUc7O1lBQzFCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDOztZQUN0QixTQUFTLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDO1FBQzNDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ1gsR0FBRyxFQUFFLFNBQVM7WUFDZCxLQUFLLE9BQUE7U0FDTixDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSTs7Ozs7SUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDaEQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxvQkFBb0I7Ozs7QUFBRyxVQUNsQyxXQUF1QztJQUV2QyxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQyxFQUFjO1lBQVosWUFBRyxFQUFFLGdCQUFLO1FBQU8sT0FBQSxDQUFDLEVBQUUsTUFBTSxFQUFLLEdBQUcsTUFBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUFyQyxDQUFxQyxFQUFDLENBQUM7QUFDbEcsQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxvQkFBb0I7Ozs7QUFBRyxVQUFDLFdBQW9DO0lBQy9ELElBQUEscUJBQWdCLEVBQWhCLHFDQUFnQixFQUFFLG1CQUFjLEVBQWQsbUNBQWMsRUFBRSwwQkFBc0IsRUFBdEIsMkNBQXNCLEVBQUUsK0RBQU87SUFDekUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O1lBQzVCLGVBQWUsR0FBRyxZQUFZLENBQUMsbUJBQUEsSUFBSSxFQUE4QixDQUFDO2FBQ3JFLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQWM7Z0JBQVosWUFBRyxFQUFFLGdCQUFLO1lBQU8sT0FBRyxLQUFLLFNBQUksR0FBRyxNQUFHO1FBQWxCLENBQWtCLEVBQUM7YUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNiLE9BQU8scUJBQW1CLFNBQVMsVUFBSyxlQUFlLE1BQUcsQ0FBQztLQUM1RDtJQUNELE9BQU8scUJBQW1CLFNBQVMsVUFBSyxJQUFJLFVBQUssRUFBRSxNQUFHLENBQUM7QUFDekQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50LCBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyB9IGZyb20gJy4vbnotcHJvZ3Jlc3MuZGVmaW5pdGlvbnMnO1xuXG5mdW5jdGlvbiBzdHJpcFBlcmNlbnRUb051bWJlcihwZXJjZW50OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gK3BlcmNlbnQucmVwbGFjZSgnJScsICcnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRHcmFkaWVudCA9IChncmFkaWVudHM6IE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKSA9PiB7XG4gIGxldCB0ZW1wQXJyOiBBcnJheTx7IGtleTogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+ID0gW107XG5cbiAgT2JqZWN0LmtleXMoZ3JhZGllbnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBncmFkaWVudHNba2V5XTtcbiAgICBjb25zdCBmb3JtYXRLZXkgPSBzdHJpcFBlcmNlbnRUb051bWJlcihrZXkpO1xuICAgIGlmIChpc05hTihmb3JtYXRLZXkpKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHRlbXBBcnIucHVzaCh7XG4gICAgICBrZXk6IGZvcm1hdEtleSxcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH0pO1xuXG4gIHRlbXBBcnIgPSB0ZW1wQXJyLnNvcnQoKGEsIGIpID0+IGEua2V5IC0gYi5rZXkpO1xuICByZXR1cm4gdGVtcEFycjtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDaXJjbGVHcmFkaWVudCA9IChcbiAgc3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzXG4pOiBBcnJheTx7IG9mZnNldDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+ID0+IHtcbiAgcmV0dXJuIHNvcnRHcmFkaWVudChzdHJva2VDb2xvcikubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHsgb2Zmc2V0OiBgJHtrZXl9JWAsIGNvbG9yOiB2YWx1ZSB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTGluZWFyR3JhZGllbnQgPSAoc3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KSA9PiB7XG4gIGNvbnN0IHsgZnJvbSA9ICcjMTg5MGZmJywgdG8gPSAnIzE4OTBmZicsIGRpcmVjdGlvbiA9ICd0byByaWdodCcsIC4uLnJlc3QgfSA9IHN0cm9rZUNvbG9yO1xuICBpZiAoT2JqZWN0LmtleXMocmVzdCkubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3Qgc29ydGVkR3JhZGllbnRzID0gc29ydEdyYWRpZW50KHJlc3QgYXMgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7dmFsdWV9ICR7a2V5fSVgKVxuICAgICAgLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb259LCAke3NvcnRlZEdyYWRpZW50c30pYDtcbiAgfVxuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke2RpcmVjdGlvbn0sICR7ZnJvbX0sICR7dG99KWA7XG59O1xuIl19