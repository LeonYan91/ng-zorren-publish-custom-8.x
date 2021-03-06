(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/layout', ['exports', '@angular/core', '@angular/cdk/layout', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].layout = {}), global.ng.core, global.ng.cdk.layout, global.ng.cdk.platform, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, layout, platform, rxjs, operators, core$1, common, icon) { 'use strict';

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
    var NzContentComponent = /** @class */ (function () {
        function NzContentComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-content');
        }
        NzContentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-content',
                        exportAs: 'nzContent',
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<ng-content></ng-content>",
                        styles: ["\n      nz-content {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzContentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzContentComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzContentComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzContentComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFooterComponent = /** @class */ (function () {
        function NzFooterComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-footer');
        }
        NzFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-footer',
                        exportAs: 'nzFooter',
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>",
                        styles: ["\n      nz-footer {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzFooterComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzFooterComponent;
    }());
    if (false) {
        /** @type {?} */
        NzFooterComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzFooterComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzHeaderComponent = /** @class */ (function () {
        function NzHeaderComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-header');
        }
        NzHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-header',
                        exportAs: 'nzHeader',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        template: "<ng-content></ng-content>",
                        styles: ["\n      nz-header {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzHeaderComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        NzHeaderComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzHeaderComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzLayoutComponent = /** @class */ (function () {
        function NzLayoutComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            renderer.addClass(elementRef.nativeElement, 'ant-layout');
        }
        /**
         * @return {?}
         */
        NzLayoutComponent.prototype.destroySider = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-layout-has-sider');
        };
        /**
         * @return {?}
         */
        NzLayoutComponent.prototype.initSider = /**
         * @return {?}
         */
        function () {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-has-sider');
        };
        NzLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-layout',
                        exportAs: 'nzLayout',
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        NzLayoutComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzLayoutComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzLayoutComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzLayoutComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSiderComponent = /** @class */ (function () {
        function NzSiderComponent(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
            this.nzLayoutComponent = nzLayoutComponent;
            this.mediaMatcher = mediaMatcher;
            this.ngZone = ngZone;
            this.platform = platform;
            this.cdr = cdr;
            this.nzDomEventService = nzDomEventService;
            this.below = false;
            this.destroy$ = new rxjs.Subject();
            this.dimensionMap = {
                xs: '480px',
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                xxl: '1600px'
            };
            this.nzCollapsedChange = new core.EventEmitter();
            this.nzWidth = 200;
            this.nzTheme = 'dark';
            this.nzCollapsedWidth = 80;
            this.nzReverseArrow = false;
            this.nzCollapsible = false;
            this.nzCollapsed = false;
            renderer.addClass(elementRef.nativeElement, 'ant-layout-sider');
        }
        Object.defineProperty(NzSiderComponent.prototype, "trigger", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSiderComponent.prototype, "flexSetting", {
            get: /**
             * @return {?}
             */
            function () {
                return "0 0 " + this.widthSetting;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSiderComponent.prototype, "widthSetting", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.nzCollapsed) {
                    return this.nzCollapsedWidth + "px";
                }
                else {
                    return core$1.toCssPixel(this.nzWidth);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.watchMatchMedia = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.nzBreakpoint) {
                /** @type {?} */
                var matchBelow = this.mediaMatcher.matchMedia("(max-width: " + this.dimensionMap[this.nzBreakpoint] + ")").matches;
                this.below = matchBelow;
                this.nzCollapsed = matchBelow;
                this.nzCollapsedChange.emit(matchBelow);
                this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.cdr.markForCheck();
                }));
            }
        };
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.toggleCollapse = /**
         * @return {?}
         */
        function () {
            this.nzCollapsed = !this.nzCollapsed;
            this.nzCollapsedChange.emit(this.nzCollapsed);
        };
        Object.defineProperty(NzSiderComponent.prototype, "isZeroTrigger", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.nzCollapsible &&
                    this.trigger &&
                    this.nzCollapsedWidth === 0 &&
                    ((this.nzBreakpoint && this.below) || !this.nzBreakpoint));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSiderComponent.prototype, "isSiderTrigger", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.nzLayoutComponent) {
                this.nzLayoutComponent.initSider();
            }
        };
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.platform.isBrowser) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.watchMatchMedia(); }));
                this.nzDomEventService
                    .registerResizeListener()
                    .pipe(operators.takeUntil(this.destroy$), operators.finalize((/**
                 * @return {?}
                 */
                function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.watchMatchMedia(); }));
            }
        };
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            if (this.nzLayoutComponent) {
                this.nzLayoutComponent.destroySider();
            }
        };
        NzSiderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-sider',
                        exportAs: 'nzSider',
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<div class=\"ant-layout-sider-children\">\n  <ng-content></ng-content>\n</div>\n<span class=\"ant-layout-sider-zero-width-trigger\" *ngIf=\"isZeroTrigger\" (click)=\"toggleCollapse()\">\n  <ng-template [ngTemplateOutlet]=\"nzZeroTrigger || zeroTrigger\"></ng-template>\n</span>\n<div class=\"ant-layout-sider-trigger\"\n  *ngIf=\"isSiderTrigger\"\n  (click)=\"toggleCollapse()\"\n  [style.width]=\"widthSetting\">\n  <ng-template [ngTemplateOutlet]=\"trigger\"></ng-template>\n</div>\n<ng-template #defaultTrigger>\n  <i nz-icon [nzType]=\"nzCollapsed ? 'right' : 'left'\" *ngIf=\"!nzReverseArrow\"></i>\n  <i nz-icon [nzType]=\"nzCollapsed ? 'left' : 'right'\" *ngIf=\"nzReverseArrow\"></i>\n</ng-template>\n<ng-template #zeroTrigger>\n  <i nz-icon nzType=\"bars\"></i>\n</ng-template>",
                        host: {
                            '[class.ant-layout-sider-zero-width]': 'nzCollapsed && nzCollapsedWidth === 0',
                            '[class.ant-layout-sider-light]': "nzTheme === 'light'",
                            '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                            '[style.flex]': 'flexSetting',
                            '[style.max-width]': 'widthSetting',
                            '[style.min-width]': 'widthSetting',
                            '[style.width]': 'widthSetting'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzSiderComponent.ctorParameters = function () { return [
            { type: NzLayoutComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: layout.MediaMatcher },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzDomEventService },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        NzSiderComponent.propDecorators = {
            nzCollapsedChange: [{ type: core.Output }],
            nzWidth: [{ type: core.Input }],
            nzTheme: [{ type: core.Input }],
            nzCollapsedWidth: [{ type: core.Input }],
            nzBreakpoint: [{ type: core.Input }],
            nzZeroTrigger: [{ type: core.Input }],
            nzReverseArrow: [{ type: core.Input }],
            nzCollapsible: [{ type: core.Input }],
            nzCollapsed: [{ type: core.Input }],
            nzTrigger: [{ type: core.Input }],
            defaultTrigger: [{ type: core.ViewChild, args: ['defaultTrigger', { static: true },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSiderComponent.prototype, "nzReverseArrow", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSiderComponent.prototype, "nzCollapsible", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSiderComponent.prototype, "nzCollapsed", void 0);
        return NzSiderComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.below;
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.dimensionMap;
        /** @type {?} */
        NzSiderComponent.prototype.nzCollapsedChange;
        /** @type {?} */
        NzSiderComponent.prototype.nzWidth;
        /** @type {?} */
        NzSiderComponent.prototype.nzTheme;
        /** @type {?} */
        NzSiderComponent.prototype.nzCollapsedWidth;
        /** @type {?} */
        NzSiderComponent.prototype.nzBreakpoint;
        /** @type {?} */
        NzSiderComponent.prototype.nzZeroTrigger;
        /** @type {?} */
        NzSiderComponent.prototype.nzReverseArrow;
        /** @type {?} */
        NzSiderComponent.prototype.nzCollapsible;
        /** @type {?} */
        NzSiderComponent.prototype.nzCollapsed;
        /** @type {?} */
        NzSiderComponent.prototype.nzTrigger;
        /** @type {?} */
        NzSiderComponent.prototype.defaultTrigger;
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.nzLayoutComponent;
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.mediaMatcher;
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzSiderComponent.prototype.nzDomEventService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzLayoutModule = /** @class */ (function () {
        function NzLayoutModule() {
        }
        NzLayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                        exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                        imports: [common.CommonModule, icon.NzIconModule, layout.LayoutModule, platform.PlatformModule]
                    },] }
        ];
        return NzLayoutModule;
    }());

    exports.NzContentComponent = NzContentComponent;
    exports.NzFooterComponent = NzFooterComponent;
    exports.NzHeaderComponent = NzHeaderComponent;
    exports.NzLayoutComponent = NzLayoutComponent;
    exports.NzLayoutModule = NzLayoutModule;
    exports.NzSiderComponent = NzSiderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-layout.umd.js.map
