(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@ant-design/icons-angular'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/common/http'), require('@angular/platform-browser'), require('@ant-design/icons-angular/icons')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/icon', ['exports', '@angular/cdk/platform', '@angular/core', '@ant-design/icons-angular', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/common/http', '@angular/platform-browser', '@ant-design/icons-angular/icons'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].icon = {}), global.ng.cdk.platform, global.ng.core, global.iconsAngular, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.common.http, global.ng.platformBrowser, global.icons));
}(this, (function (exports, platform, core, iconsAngular, core$1, rxjs, operators, common, http, platformBrowser, icons) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NzIconfontOption() { }
    if (false) {
        /** @type {?} */
        NzIconfontOption.prototype.scriptUrl;
    }
    /** @type {?} */
    var NZ_ICONS = new core.InjectionToken('nz_icons');
    /** @type {?} */
    var NZ_ICON_DEFAULT_TWOTONE_COLOR = new core.InjectionToken('nz_icon_default_twotone_color');
    /** @type {?} */
    var DEFAULT_TWOTONE_COLOR = '#1890ff';
    /** @type {?} */
    var NZ_ICONS_USED_BY_ZORRO = [
        icons.BarsOutline,
        icons.CalendarOutline,
        icons.CaretUpFill,
        icons.CaretUpOutline,
        icons.CaretDownFill,
        icons.CaretDownOutline,
        icons.CheckCircleFill,
        icons.CheckCircleOutline,
        icons.CheckOutline,
        icons.ClockCircleOutline,
        icons.CloseCircleOutline,
        icons.CloseCircleFill,
        icons.CloseOutline,
        icons.CopyOutline,
        icons.DoubleLeftOutline,
        icons.DoubleRightOutline,
        icons.DownOutline,
        icons.EditOutline,
        icons.EllipsisOutline,
        icons.ExclamationCircleFill,
        icons.ExclamationCircleOutline,
        icons.EyeOutline,
        icons.FileFill,
        icons.FileOutline,
        icons.FilterFill,
        icons.InfoCircleFill,
        icons.InfoCircleOutline,
        icons.LeftOutline,
        icons.LoadingOutline,
        icons.PaperClipOutline,
        icons.QuestionCircleOutline,
        icons.RightOutline,
        icons.StarFill,
        icons.SearchOutline,
        icons.StarFill,
        icons.UploadOutline,
        icons.UpOutline
    ];
    /**
     * It should be a global singleton, otherwise registered icons could not be found.
     */
    var NzIconService = /** @class */ (function (_super) {
        __extends(NzIconService, _super);
        function NzIconService(rendererFactory, sanitizer, nzConfigService, handler, 
        // tslint:disable-next-line:no-any
        _document, icons, legacyDefaultTwotoneColor) {
            var _this = _super.call(this, rendererFactory, handler, _document, sanitizer) || this;
            _this.nzConfigService = nzConfigService;
            _this.legacyDefaultTwotoneColor = legacyDefaultTwotoneColor;
            _this.configUpdated$ = new rxjs.Subject();
            _this.iconfontCache = new Set();
            _this.onConfigChange();
            _this.addIcon.apply(_this, __spread(NZ_ICONS_USED_BY_ZORRO, (icons || [])));
            if (legacyDefaultTwotoneColor) {
                core$1.warnDeprecation("'NZ_ICON_DEFAULT_TWOTONE_COLOR' is deprecated and will be removed in 9.0.0. Please use 'NZ_CONFIG' instead!");
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
                core$1.warnDeprecation("'<i class=\"anticon\"></i>' would be deprecated in 9.0.0. Please use '<i nz-icon nzType=\"\"></i>' API. Please refer https://ng.ant.design/components/icon/en.");
            }
            if (type === 'cross') {
                core$1.warnDeprecation("'cross' icon is replaced by 'close' icon. This auto correction would be removed in 9.0.0.");
            }
            if (type === 'vertical') {
                core$1.warnDeprecation("'verticle' is misspelled. Please use 'vertical'. This misspell would be fixed in 9.0.0.");
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
                    core$1.warn('Twotone color must be a hex color!');
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NzIconService.ctorParameters = function () { return [
            { type: core.RendererFactory2 },
            { type: platformBrowser.DomSanitizer },
            { type: core$1.NzConfigService },
            { type: http.HttpBackend, decorators: [{ type: core.Optional }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NZ_ICONS,] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
        ]; };
        /** @nocollapse */ NzIconService.ngInjectableDef = core["ɵɵdefineInjectable"]({ factory: function NzIconService_Factory() { return new NzIconService(core["ɵɵinject"](core.RendererFactory2), core["ɵɵinject"](platformBrowser.DomSanitizer), core["ɵɵinject"](core$1.NzConfigService), core["ɵɵinject"](http.HttpBackend, 8), core["ɵɵinject"](common.DOCUMENT, 8), core["ɵɵinject"](NZ_ICONS, 8), core["ɵɵinject"](NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: NzIconService, providedIn: "root" });
        return NzIconService;
    }(iconsAngular.IconService));
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var iconTypeRE = /^anticon\-\w/;
    /** @type {?} */
    var getIconTypeClass = (/**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        if (!className) {
            return undefined;
        }
        else {
            /** @type {?} */
            var classArr = className.split(/\s/);
            /** @type {?} */
            var index = classArr.findIndex((/**
             * @param {?} cls
             * @return {?}
             */
            function (cls) { return cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE); }));
            return index === -1 ? undefined : { name: classArr[index], index: index };
        }
    });
    var ɵ0 = getIconTypeClass;
    /** @type {?} */
    var normalizeType = (/**
     * @param {?} rawType
     * @return {?}
     */
    function (rawType) {
        /** @type {?} */
        var ret = { type: rawType, crossError: false, verticalError: false };
        ret.type = rawType ? rawType.replace('anticon-', '') : '';
        if (ret.type.includes('verticle')) {
            ret.type = 'up';
            ret.verticalError = true;
        }
        if (ret.type.startsWith('cross')) {
            ret.type = 'close';
            ret.crossError = true;
        }
        return ret;
    });
    var ɵ1 = normalizeType;
    /**
     * This directive extends IconDirective to provide:
     *
     * - IconFont support
     * - spinning
     * - old API compatibility
     *
     * \@break-changes
     *
     * - old API compatibility, icon class names would not be supported.
     * - properties that not started with `nz`.
     */
    var NzIconDirective = /** @class */ (function (_super) {
        __extends(NzIconDirective, _super);
        function NzIconDirective(iconService, elementRef, renderer, platform) {
            var _this = _super.call(this, iconService, elementRef, renderer) || this;
            _this.iconService = iconService;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            _this.platform = platform;
            _this.nzRotate = 0;
            /**
             * @deprecated 8.0.0 avoid exposing low layer API.
             */
            _this.spin = false;
            _this.el = _this.elementRef.nativeElement;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.spin = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzIconDirective.prototype, "nzType", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.type = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.theme = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.twoToneColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.iconfont = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzIconDirective.prototype, "type", {
            get: /**
             * @return {?}
             */
            function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value && value.startsWith('anticon')) {
                    /** @type {?} */
                    var rawClass = getIconTypeClass(value);
                    /** @type {?} */
                    var type = rawClass ? normalizeType(rawClass.name).type : '';
                    if (type && this.type !== type) {
                        this._type = type;
                    }
                }
                else {
                    this._type = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Replacement of `changeIcon` for more modifications.
         * @param oldAPI
         */
        /**
         * Replacement of `changeIcon` for more modifications.
         * @private
         * @param {?=} oldAPI
         * @return {?}
         */
        NzIconDirective.prototype.changeIcon2 = /**
         * Replacement of `changeIcon` for more modifications.
         * @private
         * @param {?=} oldAPI
         * @return {?}
         */
        function (oldAPI) {
            var _this = this;
            if (oldAPI === void 0) { oldAPI = false; }
            if (!oldAPI) {
                this.setClassName();
            }
            this._changeIcon().then((/**
             * @param {?} svg
             * @return {?}
             */
            function (svg) {
                _this.setSVGData(svg);
                if (!oldAPI && svg) {
                    _this.handleSpin(svg);
                    _this.handleRotate(svg);
                }
            }));
        };
        /**
         * @private
         * @param {?} className
         * @return {?}
         */
        NzIconDirective.prototype.classChangeHandler = /**
         * @private
         * @param {?} className
         * @return {?}
         */
        function (className) {
            /** @type {?} */
            var ret = getIconTypeClass(className);
            if (ret) {
                var _a = normalizeType(ret.name), type = _a.type, crossError = _a.crossError, verticalError = _a.verticalError;
                if (crossError) {
                    this.iconService.warnAPI('cross');
                }
                if (verticalError) {
                    this.iconService.warnAPI('vertical');
                }
                if (this.type !== type) {
                    this._type = type;
                    this.changeIcon2(true);
                }
            }
        };
        /**
         * @private
         * @param {?} svg
         * @return {?}
         */
        NzIconDirective.prototype.handleSpin = /**
         * @private
         * @param {?} svg
         * @return {?}
         */
        function (svg) {
            if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
                this.renderer.addClass(svg, 'anticon-spin');
            }
            else {
                this.renderer.removeClass(svg, 'anticon-spin');
            }
        };
        /**
         * @private
         * @param {?} svg
         * @return {?}
         */
        NzIconDirective.prototype.handleRotate = /**
         * @private
         * @param {?} svg
         * @return {?}
         */
        function (svg) {
            if (this.nzRotate) {
                this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
            }
            else {
                this.renderer.removeAttribute(svg, 'style');
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzIconDirective.prototype.setClassName = /**
         * @private
         * @return {?}
         */
        function () {
            if (typeof this.type === 'string') {
                /** @type {?} */
                var iconClassNameArr = this.el.className.split(/\s/);
                /** @type {?} */
                var ret = getIconTypeClass(this.el.className);
                if (ret) {
                    iconClassNameArr.splice(ret.index, 1, "anticon-" + this.type);
                    this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
                }
                else {
                    this.renderer.addClass(this.el, "anticon-" + this.type);
                }
            }
        };
        /**
         * @private
         * @param {?} svg
         * @return {?}
         */
        NzIconDirective.prototype.setSVGData = /**
         * @private
         * @param {?} svg
         * @return {?}
         */
        function (svg) {
            if (typeof this.type === 'string' && svg) {
                this.renderer.setAttribute(svg, 'data-icon', this.type);
                this.renderer.setAttribute(svg, 'aria-hidden', 'true');
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzIconDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var type = changes.type, nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, twoToneColor = changes.twoToneColor, spin = changes.spin, nzSpin = changes.nzSpin, theme = changes.theme, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
            if (type && !nzType) {
                core$1.warnDeprecation("APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '" + type.currentValue + "'.");
            }
            if (type || nzType || nzTwotoneColor || twoToneColor || spin || nzSpin || theme || nzTheme) {
                this.changeIcon2();
            }
            else if (nzRotate) {
                this.handleRotate(this.el.firstChild);
            }
            else {
                this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
            }
            if (type && !nzType) {
                core$1.warnDeprecation("APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '" + this.type + "'.");
            }
        };
        /**
         * @return {?}
         */
        NzIconDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
            if (!this.type && this.el.classList.contains('anticon')) {
                this.iconService.warnAPI('old');
                // Get `type` from `className`. If not, initial rendering would be missed.
                this.classChangeHandler(this.el.className);
                if (this.platform.isBrowser) {
                    // Add `class` mutation observer.
                    this.classNameObserver = new MutationObserver((/**
                     * @param {?} mutations
                     * @return {?}
                     */
                    function (mutations) {
                        mutations
                            .filter((/**
                         * @param {?} mutation
                         * @return {?}
                         */
                        function (mutation) { return mutation.attributeName === 'class'; }))
                            .forEach((/**
                         * @param {?} mutation
                         * @return {?}
                         */
                        function (mutation) { return _this.classChangeHandler(((/** @type {?} */ (mutation.target))).className); }));
                    }));
                    this.classNameObserver.observe(this.el, { attributes: true });
                }
            }
            // If `classList` does not contain `anticon`, add it before other class names.
            if (!this.el.classList.contains('anticon')) {
                this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
            }
            this.iconService.configUpdated$
                .asObservable()
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.type) {
                    _this.changeIcon2();
                }
            }));
        };
        /**
         * @return {?}
         */
        NzIconDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.classNameObserver) {
                this.classNameObserver.disconnect();
            }
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * If custom content is provided, try to normalize SVG elements.
         */
        /**
         * If custom content is provided, try to normalize SVG elements.
         * @return {?}
         */
        NzIconDirective.prototype.ngAfterContentChecked = /**
         * If custom content is provided, try to normalize SVG elements.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var children = this.el.children;
            /** @type {?} */
            var length = children.length;
            if (!this.type && children.length) {
                while (length--) {
                    /** @type {?} */
                    var child = children[length];
                    if (child.tagName.toLowerCase() === 'svg') {
                        this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                    }
                }
            }
        };
        NzIconDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'i.anticon, [nz-icon]',
                        exportAs: 'nzIcon'
                    },] }
        ];
        /** @nocollapse */
        NzIconDirective.ctorParameters = function () { return [
            { type: NzIconService },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: platform.Platform }
        ]; };
        NzIconDirective.propDecorators = {
            nzSpin: [{ type: core.Input }],
            nzRotate: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzTheme: [{ type: core.Input }],
            nzTwotoneColor: [{ type: core.Input }],
            nzIconfont: [{ type: core.Input }],
            spin: [{ type: core.Input }],
            iconfont: [{ type: core.Input }],
            type: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], NzIconDirective.prototype, "nzSpin", null);
        return NzIconDirective;
    }(iconsAngular.IconDirective));
    if (false) {
        /** @type {?} */
        NzIconDirective.prototype.nzRotate;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         * @type {?}
         */
        NzIconDirective.prototype.spin;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         * @type {?}
         */
        NzIconDirective.prototype.iconfont;
        /**
         * @type {?}
         * @private
         */
        NzIconDirective.prototype.classNameObserver;
        /**
         * @type {?}
         * @private
         */
        NzIconDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzIconDirective.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzIconDirective.prototype._type;
        /** @type {?} */
        NzIconDirective.prototype.iconService;
        /** @type {?} */
        NzIconDirective.prototype.elementRef;
        /** @type {?} */
        NzIconDirective.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzIconDirective.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzIconModule = /** @class */ (function () {
        function NzIconModule() {
        }
        NzIconModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [NzIconDirective],
                        declarations: [NzIconDirective],
                        imports: [platform.PlatformModule]
                    },] }
        ];
        return NzIconModule;
    }());

    exports.DEFAULT_TWOTONE_COLOR = DEFAULT_TWOTONE_COLOR;
    exports.NZ_ICONS = NZ_ICONS;
    exports.NZ_ICONS_USED_BY_ZORRO = NZ_ICONS_USED_BY_ZORRO;
    exports.NZ_ICON_DEFAULT_TWOTONE_COLOR = NZ_ICON_DEFAULT_TWOTONE_COLOR;
    exports.NzIconDirective = NzIconDirective;
    exports.NzIconModule = NzIconModule;
    exports.NzIconService = NzIconService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-icon.umd.js.map
