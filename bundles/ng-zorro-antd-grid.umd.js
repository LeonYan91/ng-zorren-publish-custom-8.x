(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/grid', ['exports', '@angular/core', '@angular/cdk/layout', '@angular/cdk/platform', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].grid = {}), global.ng.core, global.ng.cdk.layout, global.ng.cdk.platform, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, layout, platform, core$1, rxjs, operators, common) { 'use strict';

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
    var NzRowDirective = /** @class */ (function () {
        function NzRowDirective(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.mediaMatcher = mediaMatcher;
            this.ngZone = ngZone;
            this.platform = platform;
            this.nzDomEventService = nzDomEventService;
            this.nzAlign = 'top';
            this.nzJustify = 'start';
            this.el = this.elementRef.nativeElement;
            this.prefixCls = 'ant-row';
            this.actualGutter$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        NzRowDirective.prototype.calculateGutter = /**
         * @return {?}
         */
        function () {
            if (typeof this.nzGutter !== 'object') {
                return this.nzGutter;
            }
            else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
                return this.nzGutter[this.breakPoint];
            }
            else {
                return 0;
            }
        };
        /**
         * @return {?}
         */
        NzRowDirective.prototype.updateGutter = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var actualGutter = this.calculateGutter();
            if (this.actualGutter !== actualGutter) {
                this.actualGutter = actualGutter;
                this.actualGutter$.next(this.actualGutter);
                this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
                this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
            }
        };
        /**
         * @return {?}
         */
        NzRowDirective.prototype.watchMedia = /**
         * @return {?}
         */
        function () {
            var _this = this;
            Object.keys(core$1.responsiveMap).map((/**
             * @param {?} screen
             * @return {?}
             */
            function (screen) {
                /** @type {?} */
                var castBP = (/** @type {?} */ (screen));
                /** @type {?} */
                var matchBelow = _this.mediaMatcher.matchMedia(core$1.responsiveMap[castBP]).matches;
                if (matchBelow) {
                    _this.breakPoint = castBP;
                }
            }));
            this.updateGutter();
        };
        /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
        /**
         * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
         * @return {?}
         */
        NzRowDirective.prototype.setClassMap = /**
         * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var classMap = (_a = {},
                _a["" + this.prefixCls] = !this.nzType,
                _a[this.prefixCls + "-" + this.nzType] = this.nzType,
                _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
                _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
                _a);
            this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
        };
        /**
         * @return {?}
         */
        NzRowDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
            this.watchMedia();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzRowDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzType || changes.nzAlign || changes.nzJustify) {
                this.setClassMap();
            }
            if (changes.nzGutter) {
                this.updateGutter();
            }
        };
        /**
         * @return {?}
         */
        NzRowDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.platform.isBrowser) {
                this.nzDomEventService
                    .registerResizeListener()
                    .pipe(operators.takeUntil(this.destroy$), operators.finalize((/**
                 * @return {?}
                 */
                function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.watchMedia(); }));
            }
        };
        /**
         * @return {?}
         */
        NzRowDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzRowDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-row],nz-row',
                        exportAs: 'nzRow',
                        providers: [core$1.NzUpdateHostClassService]
                    },] }
        ];
        /** @nocollapse */
        NzRowDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core$1.NzUpdateHostClassService },
            { type: layout.MediaMatcher },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: core$1.NzDomEventService }
        ]; };
        NzRowDirective.propDecorators = {
            nzType: [{ type: core.Input }],
            nzAlign: [{ type: core.Input }],
            nzJustify: [{ type: core.Input }],
            nzGutter: [{ type: core.Input }]
        };
        return NzRowDirective;
    }());
    if (false) {
        /** @type {?} */
        NzRowDirective.prototype.nzType;
        /** @type {?} */
        NzRowDirective.prototype.nzAlign;
        /** @type {?} */
        NzRowDirective.prototype.nzJustify;
        /** @type {?} */
        NzRowDirective.prototype.nzGutter;
        /**
         * @type {?}
         * @private
         */
        NzRowDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzRowDirective.prototype.prefixCls;
        /**
         * @type {?}
         * @private
         */
        NzRowDirective.prototype.breakPoint;
        /** @type {?} */
        NzRowDirective.prototype.actualGutter;
        /** @type {?} */
        NzRowDirective.prototype.actualGutter$;
        /** @type {?} */
        NzRowDirective.prototype.destroy$;
        /** @type {?} */
        NzRowDirective.prototype.elementRef;
        /** @type {?} */
        NzRowDirective.prototype.renderer;
        /** @type {?} */
        NzRowDirective.prototype.nzUpdateHostClassService;
        /** @type {?} */
        NzRowDirective.prototype.mediaMatcher;
        /** @type {?} */
        NzRowDirective.prototype.ngZone;
        /** @type {?} */
        NzRowDirective.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        NzRowDirective.prototype.nzDomEventService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function EmbeddedProperty() { }
    if (false) {
        /** @type {?|undefined} */
        EmbeddedProperty.prototype.span;
        /** @type {?|undefined} */
        EmbeddedProperty.prototype.pull;
        /** @type {?|undefined} */
        EmbeddedProperty.prototype.push;
        /** @type {?|undefined} */
        EmbeddedProperty.prototype.offset;
        /** @type {?|undefined} */
        EmbeddedProperty.prototype.order;
    }
    var NzColDirective = /** @class */ (function () {
        function NzColDirective(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.elementRef = elementRef;
            this.nzRowDirective = nzRowDirective;
            this.renderer = renderer;
            this.el = this.elementRef.nativeElement;
            this.prefixCls = 'ant-col';
            this.destroy$ = new rxjs.Subject();
        }
        /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
        /**
         * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
         * @return {?}
         */
        NzColDirective.prototype.setClassMap = /**
         * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var classMap = __assign((_a = {}, _a["" + this.prefixCls] = true, _a[this.prefixCls + "-" + this.nzSpan] = core$1.isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = core$1.isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = core$1.isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = core$1.isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = core$1.isNotNil(this.nzPush), _a), this.generateClass());
            this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
        };
        /**
         * @return {?}
         */
        NzColDirective.prototype.generateClass = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
            /** @type {?} */
            var listClassMap = {};
            listOfSizeInputName.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                /** @type {?} */
                var sizeName = name.replace('nz', '').toLowerCase();
                if (core$1.isNotNil(_this[name])) {
                    if (typeof _this[name] === 'number' || typeof _this[name] === 'string') {
                        listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                    }
                    else {
                        /** @type {?} */
                        var embedded_1 = (/** @type {?} */ (_this[name]));
                        /** @type {?} */
                        var prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                        prefixArray.forEach((/**
                         * @param {?} prefix
                         * @return {?}
                         */
                        function (prefix) {
                            /** @type {?} */
                            var prefixClass = prefix === 'span' ? '-' : "-" + prefix + "-";
                            listClassMap[_this.prefixCls + "-" + sizeName + prefixClass + embedded_1[prefix]] =
                                embedded_1 && core$1.isNotNil(embedded_1[prefix]);
                        }));
                    }
                }
            }));
            return listClassMap;
        };
        /**
         * @return {?}
         */
        NzColDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
        };
        /**
         * @return {?}
         */
        NzColDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.nzRowDirective) {
                this.nzRowDirective.actualGutter$
                    .pipe(operators.startWith(this.nzRowDirective.actualGutter), operators.takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} actualGutter
                 * @return {?}
                 */
                function (actualGutter) {
                    _this.renderer.setStyle(_this.el, 'padding-left', actualGutter / 2 + "px");
                    _this.renderer.setStyle(_this.el, 'padding-right', actualGutter / 2 + "px");
                }));
            }
        };
        /**
         * @return {?}
         */
        NzColDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
        };
        /**
         * @return {?}
         */
        NzColDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzColDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-col],nz-col',
                        exportAs: 'nzCol',
                        providers: [core$1.NzUpdateHostClassService]
                    },] }
        ];
        /** @nocollapse */
        NzColDirective.ctorParameters = function () { return [
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef },
            { type: NzRowDirective, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: core.Renderer2 }
        ]; };
        NzColDirective.propDecorators = {
            nzSpan: [{ type: core.Input }],
            nzOrder: [{ type: core.Input }],
            nzOffset: [{ type: core.Input }],
            nzPush: [{ type: core.Input }],
            nzPull: [{ type: core.Input }],
            nzXs: [{ type: core.Input }],
            nzSm: [{ type: core.Input }],
            nzMd: [{ type: core.Input }],
            nzLg: [{ type: core.Input }],
            nzXl: [{ type: core.Input }],
            nzXXl: [{ type: core.Input }]
        };
        return NzColDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzColDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzColDirective.prototype.prefixCls;
        /**
         * @type {?}
         * @protected
         */
        NzColDirective.prototype.destroy$;
        /** @type {?} */
        NzColDirective.prototype.nzSpan;
        /** @type {?} */
        NzColDirective.prototype.nzOrder;
        /** @type {?} */
        NzColDirective.prototype.nzOffset;
        /** @type {?} */
        NzColDirective.prototype.nzPush;
        /** @type {?} */
        NzColDirective.prototype.nzPull;
        /** @type {?} */
        NzColDirective.prototype.nzXs;
        /** @type {?} */
        NzColDirective.prototype.nzSm;
        /** @type {?} */
        NzColDirective.prototype.nzMd;
        /** @type {?} */
        NzColDirective.prototype.nzLg;
        /** @type {?} */
        NzColDirective.prototype.nzXl;
        /** @type {?} */
        NzColDirective.prototype.nzXXl;
        /**
         * @type {?}
         * @private
         */
        NzColDirective.prototype.nzUpdateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzColDirective.prototype.elementRef;
        /** @type {?} */
        NzColDirective.prototype.nzRowDirective;
        /** @type {?} */
        NzColDirective.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzGridModule = /** @class */ (function () {
        function NzGridModule() {
        }
        NzGridModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzColDirective, NzRowDirective],
                        exports: [NzColDirective, NzRowDirective],
                        imports: [common.CommonModule, layout.LayoutModule, platform.PlatformModule]
                    },] }
        ];
        return NzGridModule;
    }());

    exports.NzColDirective = NzColDirective;
    exports.NzGridModule = NzGridModule;
    exports.NzRowDirective = NzRowDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-grid.umd.js.map
