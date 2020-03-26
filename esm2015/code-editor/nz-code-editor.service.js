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
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { of as observableOf, BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { warn, warnDeprecation, NzConfigService, PREFIX } from 'ng-zorro-antd/core';
import { NzCodeEditorLoadingStatus, NZ_CODE_EDITOR_CONFIG } from './nz-code-editor.definitions';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "./nz-code-editor.definitions";
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
// tslint:disable no-any
/**
 * @param {?=} fn
 * @return {?}
 */
function tryTriggerFunc(fn) {
    return (/**
     * @param {...?} args
     * @return {?}
     */
    (...args) => {
        if (fn) {
            fn(...args);
        }
    });
}
// tslint:enable no-any
export class NzCodeEditorService {
    /**
     * @param {?} nzConfigService
     * @param {?} _document
     * @param {?=} config
     */
    constructor(nzConfigService, _document, // tslint:disable-line no-any
    config) {
        this.nzConfigService = nzConfigService;
        this.firstEditorInitialized = false;
        this.loaded$ = new Subject();
        this.loadingStatus = NzCodeEditorLoadingStatus.UNLOAD;
        this.option$ = new BehaviorSubject(this.option);
        /** @type {?} */
        const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation(`'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.`);
        }
        this.document = _document;
        this.config = Object.assign({}, config, globalConfig);
        this.option = this.config.defaultEditorOption || {};
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const newGlobalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (newGlobalConfig) {
                this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
            }
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    updateDefaultOption(option) {
        warnDeprecation(`'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.`);
        this._updateDefaultOption(option);
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    _updateDefaultOption(option) {
        this.option = Object.assign({}, this.option, option);
        this.option$.next(this.option);
        if (option.theme) {
            monaco.editor.setTheme(option.theme);
        }
    }
    /**
     * @return {?}
     */
    requestToInit() {
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADED) {
            this.onInit();
            return observableOf(this.getLatestOption());
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.UNLOAD) {
            if (this.config.useStaticLoading && typeof monaco === 'undefined') {
                warn('You choose to use static loading but it seems that you forget ' +
                    'to config webpack plugin correctly. Please refer to our official website' +
                    'for more details about static loading.');
            }
            else {
                this.loadMonacoScript();
            }
        }
        return this.loaded$.asObservable().pipe(tap((/**
         * @return {?}
         */
        () => this.onInit())), map((/**
         * @return {?}
         */
        () => this.getLatestOption())));
    }
    /**
     * @private
     * @return {?}
     */
    loadMonacoScript() {
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
        /** @type {?} */
        const assetsRoot = this.config.assetsRoot;
        /** @type {?} */
        const vs = assetsRoot ? `${assetsRoot}/vs` : 'assets/vs';
        /** @type {?} */
        const windowAsAny = (/** @type {?} */ (window));
        // tslint:disable-line no-any
        /** @type {?} */
        const loadScript = this.document.createElement('script');
        loadScript.type = 'text/javascript';
        loadScript.src = `${vs}/loader.js`;
        loadScript.onload = (/**
         * @return {?}
         */
        () => {
            windowAsAny.require.config({
                paths: { vs }
            });
            windowAsAny.require(['vs/editor/editor.main'], (/**
             * @return {?}
             */
            () => {
                this.onLoad();
            }));
        });
        loadScript.onerror = (/**
         * @return {?}
         */
        () => {
            throw new Error(`${PREFIX} cannot load assets of monaco editor from source "${vs}".`);
        });
        this.document.documentElement.appendChild(loadScript);
    }
    /**
     * @private
     * @return {?}
     */
    onLoad() {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        tryTriggerFunc(this.config.onLoad)();
    }
    /**
     * @private
     * @return {?}
     */
    onInit() {
        if (!this.firstEditorInitialized) {
            this.firstEditorInitialized = true;
            tryTriggerFunc(this.config.onFirstEditorInit)();
        }
        tryTriggerFunc(this.config.onInit)();
    }
    /**
     * @private
     * @return {?}
     */
    getLatestOption() {
        return Object.assign({}, this.option);
    }
}
NzCodeEditorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzCodeEditorService.ctorParameters = () => [
    { type: NzConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NZ_CODE_EDITOR_CONFIG,] }, { type: Optional }] }
];
/** @nocollapse */ NzCodeEditorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCodeEditorService_Factory() { return new NzCodeEditorService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i3.NZ_CODE_EDITOR_CONFIG, 8)); }, token: NzCodeEditorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.firstEditorInitialized;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.loaded$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.loadingStatus;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.option;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.config;
    /** @type {?} */
    NzCodeEditorService.prototype.option$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJuei1jb2RlLWVkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFHTCx5QkFBeUIsRUFDekIscUJBQXFCLEVBQ3RCLE1BQU0sOEJBQThCLENBQUM7Ozs7OztNQUtoQyx3QkFBd0IsR0FBRyxZQUFZOzs7Ozs7QUFHN0MsU0FBUyxjQUFjLENBQUMsRUFBNEI7SUFDbEQ7Ozs7SUFBTyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNiO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFNRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFVOUIsWUFDbUIsZUFBZ0MsRUFDL0IsU0FBYyxFQUFFLDZCQUE2QjtJQUNwQixNQUEyQjtRQUZyRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFUM0MsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2pDLGtCQUFhLEdB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QyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7U0FDakQ7UUFFRCxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNyQix5QkFBWSxJQUFJLENBQUMsTUFBTSxFQUFHO0lBQzVCLENBQUM7OztZQXBJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF6QitCLGVBQWU7NENBc0MxQyxNQUFNLFNBQUMsUUFBUTs0Q0FDZixNQUFNLFNBQUMscUJBQXFCLGNBQUcsUUFBUTs7Ozs7Ozs7SUFaMUMsdUNBQTJCOzs7OztJQUMzQixxREFBdUM7Ozs7O0lBQ3ZDLHNDQUF5Qzs7Ozs7SUFDekMsNENBQXlEOzs7OztJQUN6RCxxQ0FBb0M7Ozs7O0lBQ3BDLHFDQUFtQzs7SUFFbkMsc0NBQWdFOzs7OztJQUc5RCw4Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB3YXJuLCB3YXJuRGVwcmVjYXRpb24sIE56Q29uZmlnU2VydmljZSwgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7XG4gIEpvaW5lZEVkaXRvck9wdGlvbnMsXG4gIE56Q29kZUVkaXRvckNvbmZpZyxcbiAgTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cyxcbiAgTlpfQ09ERV9FRElUT1JfQ09ORklHXG59IGZyb20gJy4vbnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG5kZWNsYXJlIGNvbnN0IG1vbmFjbzogYW55O1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY29kZUVkaXRvcic7XG5cbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxuZnVuY3Rpb24gdHJ5VHJpZ2dlckZ1bmMoZm4/OiAoLi4uYXJnczogYW55W10pID0+IGFueSk6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQge1xuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKGZuKSB7XG4gICAgICBmbiguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4vLyB0c2xpbnQ6ZW5hYmxlIG5vLWFueVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekNvZGVFZGl0b3JTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIHByaXZhdGUgZmlyc3RFZGl0b3JJbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGxvYWRlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIGxvYWRpbmdTdGF0dXMgPSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLlVOTE9BRDtcbiAgcHJpdmF0ZSBvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnM7XG4gIHByaXZhdGUgY29uZmlnOiBOekNvZGVFZGl0b3JDb25maWc7XG5cbiAgb3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Sm9pbmVkRWRpdG9yT3B0aW9ucz4odGhpcy5vcHRpb24pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XG4gICAgQEluamVjdChOWl9DT0RFX0VESVRPUl9DT05GSUcpIEBPcHRpb25hbCgpIGNvbmZpZz86IE56Q29kZUVkaXRvckNvbmZpZ1xuICApIHtcbiAgICBjb25zdCBnbG9iYWxDb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKTtcblxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYCdOWl9DT0RFX0VESVRPUl9DT05GSUcnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1pbm9yIHZlcnNpb24uIFBsZWFzZSB1c2UgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLmNvbmZpZywgLi4uZ2xvYmFsQ29uZmlnIH07XG4gICAgdGhpcy5vcHRpb24gPSB0aGlzLmNvbmZpZy5kZWZhdWx0RWRpdG9yT3B0aW9uIHx8IHt9O1xuXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgbmV3R2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XG4gICAgICBpZiAobmV3R2xvYmFsQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZURlZmF1bHRPcHRpb24obmV3R2xvYmFsQ29uZmlnLmRlZmF1bHRFZGl0b3JPcHRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRGVmYXVsdE9wdGlvbihvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnMpOiB2b2lkIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICBgJ3VwZGF0ZURlZmF1bHRPcHRpb24nIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1pbm9yIHZlcnNpb24uIFBsZWFzZSB1c2UgJ3NldCcgb2YgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXG4gICAgKTtcblxuICAgIHRoaXMuX3VwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb24gPSB7IC4uLnRoaXMub3B0aW9uLCAuLi5vcHRpb24gfTtcbiAgICB0aGlzLm9wdGlvbiQubmV4dCh0aGlzLm9wdGlvbik7XG5cbiAgICBpZiAob3B0aW9uLnRoZW1lKSB7XG4gICAgICBtb25hY28uZWRpdG9yLnNldFRoZW1lKG9wdGlvbi50aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdFRvSW5pdCgpOiBPYnNlcnZhYmxlPEpvaW5lZEVkaXRvck9wdGlvbnM+IHtcbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdHVzID09PSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURFRCkge1xuICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5nZXRMYXRlc3RPcHRpb24oKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5VTkxPQUQpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy51c2VTdGF0aWNMb2FkaW5nICYmIHR5cGVvZiBtb25hY28gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBjaG9vc2UgdG8gdXNlIHN0YXRpYyBsb2FkaW5nIGJ1dCBpdCBzZWVtcyB0aGF0IHlvdSBmb3JnZXQgJyArXG4gICAgICAgICAgICAndG8gY29uZmlnIHdlYnBhY2sgcGx1Z2luIGNvcnJlY3RseS4gUGxlYXNlIHJlZmVyIHRvIG91ciBvZmZpY2lhbCB3ZWJzaXRlJyArXG4gICAgICAgICAgICAnZm9yIG1vcmUgZGV0YWlscyBhYm91dCBzdGF0aWMgbG9hZGluZy4nXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvYWRNb25hY29TY3JpcHQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkZWQkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5vbkluaXQoKSksXG4gICAgICBtYXAoKCkgPT4gdGhpcy5nZXRMYXRlc3RPcHRpb24oKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTW9uYWNvU2NyaXB0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy51c2VTdGF0aWNMb2FkaW5nKSB7XG4gICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BRElORykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9hZGluZ1N0YXR1cyA9IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BRElORztcblxuICAgIGNvbnN0IGFzc2V0c1Jvb3QgPSB0aGlzLmNvbmZpZy5hc3NldHNSb290O1xuICAgIGNvbnN0IHZzID0gYXNzZXRzUm9vdCA/IGAke2Fzc2V0c1Jvb3R9L3ZzYCA6ICdhc3NldHMvdnMnO1xuICAgIGNvbnN0IHdpbmRvd0FzQW55ID0gd2luZG93IGFzIGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1hbnlcbiAgICBjb25zdCBsb2FkU2NyaXB0ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgIGxvYWRTY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGxvYWRTY3JpcHQuc3JjID0gYCR7dnN9L2xvYWRlci5qc2A7XG4gICAgbG9hZFNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB3aW5kb3dBc0FueS5yZXF1aXJlLmNvbmZpZyh7XG4gICAgICAgIHBhdGhzOiB7IHZzIH1cbiAgICAgIH0pO1xuICAgICAgd2luZG93QXNBbnkucmVxdWlyZShbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLCAoKSA9PiB7XG4gICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGxvYWRTY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtQUkVGSVh9IGNhbm5vdCBsb2FkIGFzc2V0cyBvZiBtb25hY28gZWRpdG9yIGZyb20gc291cmNlIFwiJHt2c31cIi5gKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZFNjcmlwdCk7XG4gIH1cblxuICBwcml2YXRlIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdTdGF0dXMgPSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURFRDtcbiAgICB0aGlzLmxvYWRlZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmxvYWRlZCQuY29tcGxldGUoKTtcblxuICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uTG9hZCkoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5maXJzdEVkaXRvckluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmZpcnN0RWRpdG9ySW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdHJ5VHJpZ2dlckZ1bmModGhpcy5jb25maWcub25GaXJzdEVkaXRvckluaXQpKCk7XG4gICAgfVxuXG4gICAgdHJ5VHJpZ2dlckZ1bmModGhpcy5jb25maWcub25Jbml0KSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYXRlc3RPcHRpb24oKTogSm9pbmVkRWRpdG9yT3B0aW9ucyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5vcHRpb24gfTtcbiAgfVxufVxuIl19