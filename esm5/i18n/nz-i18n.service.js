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
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { warn } from 'ng-zorro-antd/core';
import zh_CN from './languages/zh_CN';
import { NZ_DATE_LOCALE, NZ_I18N } from './nz-i18n.token';
import * as i0 from "@angular/core";
import * as i1 from "./nz-i18n.token";
var NzI18nService = /** @class */ (function () {
    function NzI18nService(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    Object.defineProperty(NzI18nService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    NzI18nService.prototype.translate = 
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    function (path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        /** @type {?} */
        var content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (content = content.replace(new RegExp("%" + key + "%", 'g'), data[key])); }));
            }
            return content;
        }
        return path;
    };
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param locale The translating letters
     */
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    NzI18nService.prototype.setLocale = /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    function (locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocale = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocaleId = /**
     * @return {?}
     */
    function () {
        return this._locale ? this._locale.locale : '';
    };
    /**
     * @param {?} dateLocale
     * @return {?}
     */
    NzI18nService.prototype.setDateLocale = /**
     * @param {?} dateLocale
     * @return {?}
     */
    function (dateLocale) {
        this.dateLocale = dateLocale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getDateLocale = /**
     * @return {?}
     */
    function () {
        return this.dateLocale;
    };
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    // tslint:disable-next-line:no-any
    /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzI18nService.prototype.getLocaleData = /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (path, defaultValue) {
        /** @type {?} */
        var result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn("Missing translations for \"" + path + "\" in language \"" + this._locale.locale + "\".\nYou can use \"NzI18nService.setLocale\" as a temporary fix.\nWelcome to submit a pull request to help us optimize the translations!\nhttps://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md");
        }
        return result || defaultValue || {};
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    NzI18nService.prototype._getObjectPath = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    function (obj, path) {
        /** @type {?} */
        var res = obj;
        /** @type {?} */
        var paths = path.split('.');
        /** @type {?} */
        var depth = paths.length;
        /** @type {?} */
        var index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    };
    NzI18nService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzI18nService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
    ]; };
    /** @nocollapse */ NzI18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(i0.ɵɵinject(i1.NZ_I18N, 8), i0.ɵɵinject(i1.NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
    return NzI18nService;
}());
export { NzI18nService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._change;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype.dateLocale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLElBQUksRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEtBQUssTUFBTSxtQkFBbUIsQ0FBQztBQUV0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFMUQ7SUFZRSx1QkFDK0IsTUFBdUIsRUFDaEIsVUFBc0I7UUFUcEQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFXbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQVZELHNCQUFJLHVDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBVUQsOEVBQThFO0lBQzlFLGdEQUFnRDtJQUNoRCxxQ0FBcUM7Ozs7Ozs7OztJQUNyQyxpQ0FBUzs7Ozs7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsSUFBVTs7O1lBRTVCLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQVU7UUFDL0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxJQUFJLEVB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Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB3YXJuLCBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgemhfQ04gZnJvbSAnLi9sYW5ndWFnZXMvemhfQ04nO1xuaW1wb3J0IHsgRGF0ZUxvY2FsZSwgTnpJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOWl9EQVRFX0xPQ0FMRSwgTlpfSTE4TiB9IGZyb20gJy4vbnotaTE4bi50b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56STE4blNlcnZpY2Uge1xuICBwcml2YXRlIF9sb2NhbGU6IE56STE4bkludGVyZmFjZTtcbiAgcHJpdmF0ZSBfY2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekkxOG5JbnRlcmZhY2U+KHRoaXMuX2xvY2FsZSk7XG4gIHByaXZhdGUgZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZTtcblxuICBnZXQgbG9jYWxlQ2hhbmdlKCk6IE9ic2VydmFibGU8TnpJMThuSW50ZXJmYWNlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSTE4TikgbG9jYWxlOiBOekkxOG5JbnRlcmZhY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0xPQ0FMRSkgZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZVxuICApIHtcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhfQ04pO1xuICAgIHRoaXMuc2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlIHx8IG51bGwpO1xuICB9XG5cbiAgLy8gW05PVEVdIFBlcmZvcm1hbmNlIGlzc3VlOiB0aGlzIG1ldGhvZCBtYXkgY2FsbGVkIGJ5IGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb25zXG4gIC8vIFRPRE86IGNhY2hlIG1vcmUgZGVlcGx5IHBhdGhzIGZvciBwZXJmb3JtYW5jZVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHRyYW5zbGF0ZShwYXRoOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgW056STE4blNlcnZpY2VdIFRyYW5zbGF0aW5nKCR7dGhpcy5fbG9jYWxlLmxvY2FsZX0pOiAke3BhdGh9YCk7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgYXMgc3RyaW5nO1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IChjb250ZW50ID0gY29udGVudC5yZXBsYWNlKG5ldyBSZWdFeHAoYCUke2tleX0lYCwgJ2cnKSwgZGF0YVtrZXldKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldC9DaGFuZ2UgY3VycmVudCBsb2NhbGUgZ2xvYmFsbHkgdGhyb3VnaG91dCB0aGUgV0hPTEUgYXBwbGljYXRpb25cbiAgICogTk9URTogSWYgY2FsbGVkIGF0IHJ1bnRpbWUsIHJlbmRlcmVkIGludGVyZmFjZSBtYXkgbm90IGNoYW5nZSBhbG9uZyB3aXRoIHRoZSBsb2NhbGUgY2hhbmdlLFxuICAgKiBiZWNhdXNlIHRoaXMgZG8gbm90IHRyaWdnZXIgYW5vdGhlciByZW5kZXIgc2NoZWR1bGUuXG4gICAqXG4gICAqIEBwYXJhbSBsb2NhbGUgVGhlIHRyYW5zbGF0aW5nIGxldHRlcnNcbiAgICovXG4gIHNldExvY2FsZShsb2NhbGU6IE56STE4bkludGVyZmFjZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLmxvY2FsZSA9PT0gbG9jYWxlLmxvY2FsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5fY2hhbmdlLm5leHQobG9jYWxlKTtcbiAgfVxuXG4gIGdldExvY2FsZSgpOiBOekkxOG5JbnRlcmZhY2Uge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXRMb2NhbGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGUgPyB0aGlzLl9sb2NhbGUubG9jYWxlIDogJyc7XG4gIH1cblxuICBzZXREYXRlTG9jYWxlKGRhdGVMb2NhbGU6IERhdGVMb2NhbGUpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVMb2NhbGUgPSBkYXRlTG9jYWxlO1xuICB9XG5cbiAgZ2V0RGF0ZUxvY2FsZSgpOiBEYXRlTG9jYWxlIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlTG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsb2NhbGUgZGF0YVxuICAgKiBAcGFyYW0gcGF0aCBkb3QgcGF0aHMgZm9yIGZpbmRpbmcgZXhpc3QgdmFsdWUgZnJvbSBsb2NhbGUgZGF0YSwgZWcuIFwiYS5iLmNcIlxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHJlc3VsdCBpcyBub3QgXCJ0cnV0aHlcIlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRMb2NhbGVEYXRhKHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcbiAgICBjb25zdCByZXN1bHQgPSBwYXRoID8gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIDogdGhpcy5fbG9jYWxlO1xuXG4gICAgaWYgKCFyZXN1bHQgJiYgIWRlZmF1bHRWYWx1ZSkge1xuICAgICAgd2FybihgTWlzc2luZyB0cmFuc2xhdGlvbnMgZm9yIFwiJHtwYXRofVwiIGluIGxhbmd1YWdlIFwiJHt0aGlzLl9sb2NhbGUubG9jYWxlfVwiLlxuWW91IGNhbiB1c2UgXCJOekkxOG5TZXJ2aWNlLnNldExvY2FsZVwiIGFzIGEgdGVtcG9yYXJ5IGZpeC5cbldlbGNvbWUgdG8gc3VibWl0IGEgcHVsbCByZXF1ZXN0IHRvIGhlbHAgdXMgb3B0aW1pemUgdGhlIHRyYW5zbGF0aW9ucyFcbmh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0NPTlRSSUJVVElORy5tZGApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQgfHwgZGVmYXVsdFZhbHVlIHx8IHt9O1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIF9nZXRPYmplY3RQYXRoKG9iajogSW5kZXhhYmxlT2JqZWN0LCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBvYmplY3QgfCBhbnkge1xuICAgIGxldCByZXMgPSBvYmo7XG4gICAgY29uc3QgcGF0aHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgZGVwdGggPSBwYXRocy5sZW5ndGg7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAocmVzICYmIGluZGV4IDwgZGVwdGgpIHtcbiAgICAgIHJlcyA9IHJlc1twYXRoc1tpbmRleCsrXV07XG4gICAgfVxuICAgIHJldHVybiBpbmRleCA9PT0gZGVwdGggPyByZXMgOiBudWxsO1xuICB9XG59XG4iXX0=