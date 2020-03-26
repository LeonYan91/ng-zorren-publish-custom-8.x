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
import { InjectionToken } from '@angular/core';
/** @enum {string} */
const NzCodeEditorLoadingStatus = {
    UNLOAD: 'unload',
    LOADING: 'loading',
    LOADED: 'LOADED',
};
export { NzCodeEditorLoadingStatus };
/**
 * @record
 */
export function NzCodeEditorConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.assetsRoot;
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.defaultEditorOption;
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.useStaticLoading;
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onLoad = function () { };
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onFirstEditorInit = function () { };
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onInit = function () { };
}
/** @type {?} */
export const NZ_CODE_EDITOR_CONFIG = new InjectionToken('nz-code-editor-config', {
    providedIn: 'root',
    factory: NZ_CODE_EDITOR_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_CODE_EDITOR_CONFIG_FACTORY() {
    return {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvZGUtZWRpdG9yLyIsInNvdXJjZXMiOlsibnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFhN0MsUUFBUyxRQUFRO0lBQ2pCLFNBQVUsU0FBUztJQUNuQixRQUFTLFFBQVE7Ozs7OztBQUduQix3Q0FRQzs7O0lBUEMsd0NBQThCOztJQUM5QixpREFBMEM7O0lBQzFDLDhDQUEyQjs7OztJQUUzQixzREFBZ0I7Ozs7SUFDaEIsaUVBQTJCOzs7O0lBQzNCLHNEQUFnQjs7O0FBR2xCLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUIsdUJBQXVCLEVBQUU7SUFDbkcsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLDZCQUE2QjtDQUN2QyxDQUFDOzs7O0FBRUYsTUFBTSxVQUFVLDZCQUE2QjtJQUMzQyxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGVkaXRvciB9IGZyb20gJ21vbmFjby1lZGl0b3InO1xuaW1wb3J0IElFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zID0gZWRpdG9yLklFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xuaW1wb3J0IElEaWZmRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyA9IGVkaXRvci5JRGlmZkVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG5cbmV4cG9ydCB0eXBlIEVkaXRvck9wdGlvbnMgPSBJRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcbmV4cG9ydCB0eXBlIERpZmZFZGl0b3JPcHRpb25zID0gSURpZmZFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xuZXhwb3J0IHR5cGUgSm9pbmVkRWRpdG9yT3B0aW9ucyA9IEVkaXRvck9wdGlvbnMgfCBEaWZmRWRpdG9yT3B0aW9ucztcblxuZXhwb3J0IHR5cGUgTnpFZGl0b3JNb2RlID0gJ25vcm1hbCcgfCAnZGlmZic7XG5cbmV4cG9ydCBlbnVtIE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMge1xuICBVTkxPQUQgPSAndW5sb2FkJyxcbiAgTE9BRElORyA9ICdsb2FkaW5nJyxcbiAgTE9BREVEID0gJ0xPQURFRCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOekNvZGVFZGl0b3JDb25maWcge1xuICBhc3NldHNSb290Pzogc3RyaW5nIHwgU2FmZVVybDtcbiAgZGVmYXVsdEVkaXRvck9wdGlvbj86IEpvaW5lZEVkaXRvck9wdGlvbnM7XG4gIHVzZVN0YXRpY0xvYWRpbmc/OiBib29sZWFuO1xuXG4gIG9uTG9hZD8oKTogdm9pZDtcbiAgb25GaXJzdEVkaXRvckluaXQ/KCk6IHZvaWQ7XG4gIG9uSW5pdD8oKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5aX0NPREVfRURJVE9SX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOekNvZGVFZGl0b3JDb25maWc+KCduei1jb2RlLWVkaXRvci1jb25maWcnLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogTlpfQ09ERV9FRElUT1JfQ09ORklHX0ZBQ1RPUllcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gTlpfQ09ERV9FRElUT1JfQ09ORklHX0ZBQ1RPUlkoKTogTnpDb2RlRWRpdG9yQ29uZmlnIHtcbiAgcmV0dXJuIHt9O1xufVxuIl19