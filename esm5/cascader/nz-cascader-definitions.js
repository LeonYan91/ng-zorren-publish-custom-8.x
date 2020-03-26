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
 * @deprecated Use the prefixed version.
 * @record
 */
export function CascaderOption() { }
if (false) {
    /** @type {?|undefined} */
    CascaderOption.prototype.value;
    /** @type {?|undefined} */
    CascaderOption.prototype.label;
    /** @type {?|undefined} */
    CascaderOption.prototype.title;
    /** @type {?|undefined} */
    CascaderOption.prototype.disabled;
    /** @type {?|undefined} */
    CascaderOption.prototype.loading;
    /** @type {?|undefined} */
    CascaderOption.prototype.isLeaf;
    /** @type {?|undefined} */
    CascaderOption.prototype.parent;
    /** @type {?|undefined} */
    CascaderOption.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @deprecated Use the prefixed version.
 * @record
 */
export function CascaderSearchOption() { }
if (false) {
    /** @type {?} */
    CascaderSearchOption.prototype.path;
}
/**
 * @record
 */
export function NzShowSearchOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.filter;
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.sorter;
}
/**
 * @param {?} options
 * @return {?}
 */
export function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}
/**
 * To avoid circular dependency, provide an interface of `NzCascaderComponent`
 * for `NzCascaderService`.
 * @record
 */
export function NzCascaderComponentAsSource() { }
if (false) {
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.inputValue;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzChangeOnSelect;
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzChangeOn = function (option, level) { };
    /**
     * @param {?} node
     * @param {?=} index
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzLoadData = function (node, index) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLG9DQVdDOzs7SUFWQywrQkFBWTs7SUFDWiwrQkFBZTs7SUFDZiwrQkFBZTs7SUFDZixrQ0FBbUI7O0lBQ25CLGlDQUFrQjs7SUFDbEIsZ0NBQWlCOztJQUNqQixnQ0FBMEI7O0lBQzFCLGtDQUE4Qjs7Ozs7OztBQVVoQywwQ0FFQzs7O0lBREMsb0NBQXlCOzs7OztBQUszQix5Q0FHQzs7O0lBRkMscUNBQTBCOztJQUMxQixxQ0FBMEI7Ozs7OztBQUc1QixNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBc0M7SUFDdkUsT0FBTyxPQUFPLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBTUQsaURBV0M7OztJQVZDLGlEQUFtQjs7SUFDbkIsbURBQTRDOztJQUM1QyxzREFBd0I7O0lBQ3hCLHNEQUF3Qjs7SUFDeEIsdURBQTBCOzs7Ozs7SUFFMUIsZ0ZBQThEOzs7Ozs7SUFHOUQsOEVBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJyB8ICdob3Zlcic7XG5leHBvcnQgdHlwZSBOekNhc2NhZGVyVHJpZ2dlclR5cGUgPSAnY2xpY2snIHwgJ2hvdmVyJztcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XG5cbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJGaWx0ZXIgPSAoc2VhcmNoVmFsdWU6IHN0cmluZywgcGF0aDogTnpDYXNjYWRlck9wdGlvbltdKSA9PiBib29sZWFuO1xuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNvcnRlciA9IChhOiBOekNhc2NhZGVyT3B0aW9uW10sIGI6IE56Q2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiBudW1iZXI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyT3B0aW9uIHtcbiAgdmFsdWU/OiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgaXNMZWFmPzogYm9vbGVhbjtcbiAgcGFyZW50PzogTnpDYXNjYWRlck9wdGlvbjtcbiAgY2hpbGRyZW4/OiBOekNhc2NhZGVyT3B0aW9uW107XG5cbiAgW2tleTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxufVxuXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyT3B0aW9uID0gQ2FzY2FkZXJPcHRpb247XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyU2VhcmNoT3B0aW9uIGV4dGVuZHMgTnpDYXNjYWRlck9wdGlvbiB7XG4gIHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXTtcbn1cblxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNlYXJjaE9wdGlvbiA9IENhc2NhZGVyU2VhcmNoT3B0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56U2hvd1NlYXJjaE9wdGlvbnMge1xuICBmaWx0ZXI/OiBOekNhc2NhZGVyRmlsdGVyO1xuICBzb3J0ZXI/OiBOekNhc2NhZGVyU29ydGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaG93U2VhcmNoT2JqZWN0KG9wdGlvbnM6IE56U2hvd1NlYXJjaE9wdGlvbnMgfCBib29sZWFuKTogb3B0aW9ucyBpcyBOelNob3dTZWFyY2hPcHRpb25zIHtcbiAgcmV0dXJuIHR5cGVvZiBvcHRpb25zICE9PSAnYm9vbGVhbic7XG59XG5cbi8qKlxuICogVG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeSwgcHJvdmlkZSBhbiBpbnRlcmZhY2Ugb2YgYE56Q2FzY2FkZXJDb21wb25lbnRgXG4gKiBmb3IgYE56Q2FzY2FkZXJTZXJ2aWNlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2Uge1xuICBpbnB1dFZhbHVlOiBzdHJpbmc7XG4gIG56U2hvd1NlYXJjaDogTnpTaG93U2VhcmNoT3B0aW9ucyB8IGJvb2xlYW47XG4gIG56TGFiZWxQcm9wZXJ0eTogc3RyaW5nO1xuICBuelZhbHVlUHJvcGVydHk6IHN0cmluZztcbiAgbnpDaGFuZ2VPblNlbGVjdDogYm9vbGVhbjtcblxuICBuekNoYW5nZU9uPyhvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpOiBib29sZWFuO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbnpMb2FkRGF0YT8obm9kZTogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg/OiBudW1iZXIpOiBQcm9taXNlTGlrZTxhbnk+O1xufVxuIl19