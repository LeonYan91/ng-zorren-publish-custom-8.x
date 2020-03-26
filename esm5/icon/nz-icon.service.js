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
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from '@ant-design/icons-angular';
import { BarsOutline, CalendarOutline, CaretDownFill, CaretDownOutline, CaretUpFill, CaretUpOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleFill, CloseCircleOutline, CloseOutline, CopyOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EditOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, SearchOutline, StarFill, UploadOutline, UpOutline } from '@ant-design/icons-angular/icons';
import { warn, warnDeprecation, NzConfigService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
/**
 * @record
 */
export function NzIconfontOption() { }
if (false) {
    /** @type {?} */
    NzIconfontOption.prototype.scriptUrl;
}
/** @type {?} */
export var NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export var DEFAULT_TWOTONE_COLOR = '#1890ff';
/** @type {?} */
export var NZ_ICONS_USED_BY_ZORRO = [
    BarsOutline,
    CalendarOutline,
    CaretUpFill,
    CaretUpOutline,
    CaretDownFill,
    CaretDownOutline,
    CheckCircleFill,
    CheckCircleOutline,
    CheckOutline,
    ClockCircleOutline,
    CloseCircleOutline,
    CloseCircleFill,
    CloseOutline,
    CopyOutline,
    DoubleLeftOutline,
    DoubleRightOutline,
    DownOutline,
    EditOutline,
    EllipsisOutline,
    ExclamationCircleFill,
    ExclamationCircleOutline,
    EyeOutline,
    FileFill,
    FileOutline,
    FilterFill,
    InfoCircleFill,
    InfoCircleOutline,
    LeftOutline,
    LoadingOutline,
    PaperClipOutline,
    QuestionCircleOutline,
    RightOutline,
    StarFill,
    SearchOutline,
    StarFill,
    UploadOutline,
    UpOutline
];
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
var NzIconService = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconService, _super);
    function NzIconService(rendererFactory, sanitizer, nzConfigService, handler, 
    // tslint:disable-next-line:no-any
    _document, icons, legacyDefaultTwotoneColor) {
        var _this = _super.call(this, rendererFactory, handler, _document, sanitizer) || this;
        _this.nzConfigService = nzConfigService;
        _this.legacyDefaultTwotoneColor = legacyDefaultTwotoneColor;
        _this.configUpdated$ = new Subject();
        _this.iconfontCache = new Set();
        _this.onConfigChange();
        _this.addIcon.apply(_this, tslib_1.__spread(NZ_ICONS_USED_BY_ZORRO, (icons || [])));
        if (legacyDefaultTwotoneColor) {
            warnDeprecation("'NZ_ICON_DEFAULT_TWOTONE_COLOR' is deprecated and will be removed in 9.0.0. Please use 'NZ_CONFIG' instead!");
        }
        _this.configDefaultTwotoneColor();
        _this.configDefaultTheme();
        return _this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.warnAPI = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type === 'old') {
            warnDeprecation("'<i class=\"anticon\"></i>' would be deprecated in 9.0.0. Please use '<i nz-icon nzType=\"\"></i>' API. Please refer https://ng.ant.design/components/icon/en.");
        }
        if (type === 'cross') {
            warnDeprecation("'cross' icon is replaced by 'close' icon. This auto correction would be removed in 9.0.0.");
        }
        if (type === 'vertical') {
            warnDeprecation("'verticle' is misspelled. Please use 'vertical'. This misspell would be fixed in 9.0.0.");
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconService.prototype.normalizeSvgElement = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NzIconService.prototype.fetchFromIconfont = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        var scriptUrl = opt.scriptUrl;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            var script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.createIconfontIcon = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._createSVGElementFromString("<svg><use xlink:href=\"" + type + "\"></svg>");
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.onConfigChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        function () {
            _this.configDefaultTwotoneColor();
            _this.configDefaultTheme();
            _this.configUpdated$.next();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTheme = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTwotoneColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        /** @type {?} */
        var defaultTwotoneColor = iconConfig.nzTwotoneColor || this.legacyDefaultTwotoneColor;
        /** @type {?} */
        var primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor: primaryColor };
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    };
    NzIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzIconService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: DomSanitizer },
        { type: NzConfigService },
        { type: HttpBackend, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
    ]; };
    /** @nocollapse */ NzIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(i4.DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8), i0.ɵɵinject(NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: NzIconService, providedIn: "root" });
    return NzIconService;
}(IconService));
export { NzIconService };
if (false) {
    /** @type {?} */
    NzIconService.prototype.configUpdated$;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.iconfontCache;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.nzConfigService;
    /**
     * @deprecated
     * \@inner
     * @type {?}
     * @private
     */
    NzIconService.prototype.legacyDefaultTwotoneColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IsUUFBUSxFQUNSLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBYyxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RixP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QUFDLFFBQVE7NENBQzNCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs2Q0FLM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyw2QkFBNkI7Ozt3QkF0S3JEO0NBeU5DLEFBakhELENBR21DLFdBQVcsR0E4RzdDO1NBOUdZLGFBQWE7OztJQUN4Qix1Q0FBcUM7Ozs7O0lBRXJDLHNDQUEwQzs7Ozs7SUErQ3hDLHdDQUEwQzs7Ozs7OztJQVMxQyxrREFBNkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgSWNvblNlcnZpY2UgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcbmltcG9ydCB7XG4gIEJhcnNPdXRsaW5lLFxuICBDYWxlbmRhck91dGxpbmUsXG4gIENhcmV0RG93bkZpbGwsXG4gIENhcmV0RG93bk91dGxpbmUsXG4gIENhcmV0VXBGaWxsLFxuICBDYXJldFVwT3V0bGluZSxcbiAgQ2hlY2tDaXJjbGVGaWxsLFxuICBDaGVja0NpcmNsZU91dGxpbmUsXG4gIENoZWNrT3V0bGluZSxcbiAgQ2xvY2tDaXJjbGVPdXRsaW5lLFxuICBDbG9zZUNpcmNsZUZpbGwsXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcbiAgQ2xvc2VPdXRsaW5lLFxuICBDb3B5T3V0bGluZSxcbiAgRG91YmxlTGVmdE91dGxpbmUsXG4gIERvdWJsZVJpZ2h0T3V0bGluZSxcbiAgRG93bk91dGxpbmUsXG4gIEVkaXRPdXRsaW5lLFxuICBFbGxpcHNpc091dGxpbmUsXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lLFxuICBFeWVPdXRsaW5lLFxuICBGaWxlRmlsbCxcbiAgRmlsZU91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIEluZm9DaXJjbGVGaWxsLFxuICBJbmZvQ2lyY2xlT3V0bGluZSxcbiAgTGVmdE91dGxpbmUsXG4gIExvYWRpbmdPdXRsaW5lLFxuICBQYXBlckNsaXBPdXRsaW5lLFxuICBRdWVzdGlvbkNpcmNsZU91dGxpbmUsXG4gIFJpZ2h0T3V0bGluZSxcbiAgU2VhcmNoT3V0bGluZSxcbiAgU3RhckZpbGwsXG4gIFVwbG9hZE91dGxpbmUsXG4gIFVwT3V0bGluZVxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcbmltcG9ydCB7IHdhcm4sIHdhcm5EZXByZWNhdGlvbiwgSWNvbkNvbmZpZywgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBOekljb25mb250T3B0aW9uIHtcbiAgc2NyaXB0VXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOWl9JQ09OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnMnKTtcbmV4cG9ydCBjb25zdCBOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbl9kZWZhdWx0X3R3b3RvbmVfY29sb3InKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSAnIzE4OTBmZic7XG5leHBvcnQgY29uc3QgTlpfSUNPTlNfVVNFRF9CWV9aT1JSTzogSWNvbkRlZmluaXRpb25bXSA9IFtcbiAgQmFyc091dGxpbmUsXG4gIENhbGVuZGFyT3V0bGluZSxcbiAgQ2FyZXRVcEZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25GaWxsLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBDaGVja0NpcmNsZUZpbGwsXG4gIENoZWNrQ2lyY2xlT3V0bGluZSxcbiAgQ2hlY2tPdXRsaW5lLFxuICBDbG9ja0NpcmNsZU91dGxpbmUsXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcbiAgQ2xvc2VDaXJjbGVGaWxsLFxuICBDbG9zZU91dGxpbmUsXG4gIENvcHlPdXRsaW5lLFxuICBEb3VibGVMZWZ0T3V0bGluZSxcbiAgRG91YmxlUmlnaHRPdXRsaW5lLFxuICBEb3duT3V0bGluZSxcbiAgRWRpdE91dGxpbmUsXG4gIEVsbGlwc2lzT3V0bGluZSxcbiAgRXhjbGFtYXRpb25DaXJjbGVGaWxsLFxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsXG4gIEV5ZU91dGxpbmUsXG4gIEZpbGVGaWxsLFxuICBGaWxlT3V0bGluZSxcbiAgRmlsdGVyRmlsbCxcbiAgSW5mb0NpcmNsZUZpbGwsXG4gIEluZm9DaXJjbGVPdXRsaW5lLFxuICBMZWZ0T3V0bGluZSxcbiAgTG9hZGluZ091dGxpbmUsXG4gIFBhcGVyQ2xpcE91dGxpbmUsXG4gIFF1ZXN0aW9uQ2lyY2xlT3V0bGluZSxcbiAgUmlnaHRPdXRsaW5lLFxuICBTdGFyRmlsbCxcbiAgU2VhcmNoT3V0bGluZSxcbiAgU3RhckZpbGwsXG4gIFVwbG9hZE91dGxpbmUsXG4gIFVwT3V0bGluZVxuXTtcblxuLyoqXG4gKiBJdCBzaG91bGQgYmUgYSBnbG9iYWwgc2luZ2xldG9uLCBvdGhlcndpc2UgcmVnaXN0ZXJlZCBpY29ucyBjb3VsZCBub3QgYmUgZm91bmQuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56SWNvblNlcnZpY2UgZXh0ZW5kcyBJY29uU2VydmljZSB7XG4gIGNvbmZpZ1VwZGF0ZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIGljb25mb250Q2FjaGUgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICB3YXJuQVBJKHR5cGU6ICdvbGQnIHwgJ2Nyb3NzJyB8ICd2ZXJ0aWNhbCcpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ29sZCcpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYCc8aSBjbGFzcz1cImFudGljb25cIj48L2k+JyB3b3VsZCBiZSBkZXByZWNhdGVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICc8aSBuei1pY29uIG56VHlwZT1cIlwiPjwvaT4nIEFQSS4gUGxlYXNlIHJlZmVyIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb24vZW4uYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgJ2Nyb3NzJyBpY29uIGlzIHJlcGxhY2VkIGJ5ICdjbG9zZScgaWNvbi4gVGhpcyBhdXRvIGNvcnJlY3Rpb24gd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC5gKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgJ3ZlcnRpY2xlJyBpcyBtaXNzcGVsbGVkLiBQbGVhc2UgdXNlICd2ZXJ0aWNhbCcuIFRoaXMgbWlzc3BlbGwgd291bGQgYmUgZml4ZWQgaW4gOS4wLjAuYCk7XG4gICAgfVxuICB9XG5cbiAgbm9ybWFsaXplU3ZnRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3ZpZXdCb3gnLCAnMCAwIDEwMjQgMTAyNCcpO1xuICAgIH1cbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykgfHwgIXN2Zy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnd2lkdGgnLCAnMWVtJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnaGVpZ2h0JywgJzFlbScpO1xuICAgIH1cbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2ZpbGwnLCAnY3VycmVudENvbG9yJyk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hGcm9tSWNvbmZvbnQob3B0OiBOekljb25mb250T3B0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY3JpcHRVcmwgfSA9IG9wdDtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQgJiYgIXRoaXMuaWNvbmZvbnRDYWNoZS5oYXMoc2NyaXB0VXJsKSkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnc3JjJywgc2NyaXB0VXJsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdkYXRhLW5hbWVzcGFjZScsIHNjcmlwdFVybC5yZXBsYWNlKC9eKGh0dHBzP3xodHRwKTovZywgJycpKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgICB0aGlzLmljb25mb250Q2FjaGUuYWRkKHNjcmlwdFVybCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSWNvbmZvbnRJY29uKHR5cGU6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3R5cGV9XCI+PC9zdmc+YCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIGhhbmRsZXI6IEh0dHBCYWNrZW5kLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05TKSBpY29ucz86IEljb25EZWZpbml0aW9uW10sXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SKSBwcml2YXRlIGxlZ2FjeURlZmF1bHRUd290b25lQ29sb3I/OiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIocmVuZGVyZXJGYWN0b3J5LCBoYW5kbGVyLCBfZG9jdW1lbnQsIHNhbml0aXplcik7XG5cbiAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKCk7XG5cbiAgICB0aGlzLmFkZEljb24oLi4uTlpfSUNPTlNfVVNFRF9CWV9aT1JSTywgLi4uKGljb25zIHx8IFtdKSk7XG5cbiAgICBpZiAobGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcikge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgICBgJ05aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ05aX0NPTkZJRycgaW5zdGVhZCFgXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTtcblxuICAgIHRoaXMuY29uZmlnRGVmYXVsdFRoZW1lKCk7XG4gIH1cblxuICBwcml2YXRlIG9uQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KCdpY29uJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpO1xuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcbiAgICAgIHRoaXMuY29uZmlnVXBkYXRlZCQubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWdEZWZhdWx0VGhlbWUoKTogdm9pZCB7XG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy5kZWZhdWx0VGhlbWUgPSBpY29uQ29uZmlnLm56VGhlbWUgfHwgJ291dGxpbmUnO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk6IHZvaWQge1xuICAgIGNvbnN0IGljb25Db25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIGNvbnN0IGRlZmF1bHRUd290b25lQ29sb3IgPSBpY29uQ29uZmlnLm56VHdvdG9uZUNvbG9yIHx8IHRoaXMubGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcjtcblxuICAgIGxldCBwcmltYXJ5Q29sb3IgPSBERUZBVUxUX1RXT1RPTkVfQ09MT1I7XG5cbiAgICBpZiAoZGVmYXVsdFR3b3RvbmVDb2xvcikge1xuICAgICAgaWYgKGRlZmF1bHRUd290b25lQ29sb3Iuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIHByaW1hcnlDb2xvciA9IGRlZmF1bHRUd290b25lQ29sb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdUd290b25lIGNvbG9yIG11c3QgYmUgYSBoZXggY29sb3IhJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB7IHByaW1hcnlDb2xvciB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25maWcoKTogSWNvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudCgnaWNvbicpIHx8IHt9O1xuICB9XG59XG4iXX0=