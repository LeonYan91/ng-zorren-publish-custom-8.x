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
 * @param {?} o
 * @return {?}
 */
export function isChildOption(o) {
    return o.isLeaf || !o.children || !o.children.length;
}
/**
 * @param {?} o
 * @return {?}
 */
export function isParentOption(o) {
    return !!o.children && !!o.children.length && !o.isLeaf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsTUFBTSxVQUFVLGFBQWEsQ0FBQyxDQUFtQjtJQUMvQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDdkQsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLENBQW1CO0lBQ2hELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMxRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE56Q2FzY2FkZXJPcHRpb24gfSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hpbGRPcHRpb24obzogTnpDYXNjYWRlck9wdGlvbik6IGJvb2xlYW4ge1xuICByZXR1cm4gby5pc0xlYWYgfHwgIW8uY2hpbGRyZW4gfHwgIW8uY2hpbGRyZW4ubGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJlbnRPcHRpb24obzogTnpDYXNjYWRlck9wdGlvbik6IGJvb2xlYW4ge1xuICByZXR1cm4gISFvLmNoaWxkcmVuICYmICEhby5jaGlsZHJlbi5sZW5ndGggJiYgIW8uaXNMZWFmO1xufVxuIl19