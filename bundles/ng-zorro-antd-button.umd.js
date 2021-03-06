(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/observers'), require('@angular/core'), require('@angular/platform-browser/animations'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/button', ['exports', '@angular/cdk/observers', '@angular/core', '@angular/platform-browser/animations', 'ng-zorro-antd/core', 'ng-zorro-antd/icon', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].button = {}), global.ng.cdk.observers, global.ng.core, global.ng.platformBrowser.animations, global['ng-zorro-antd'].core, global['ng-zorro-antd'].icon, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, observers, core, animations, core$1, icon, rxjs, operators, common) { 'use strict';

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
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'button';
    var NzButtonComponent = /** @class */ (function () {
        function NzButtonComponent(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
            var _this = this;
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.renderer = renderer;
            this.contentObserver = contentObserver;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.ngZone = ngZone;
            this.nzConfigService = nzConfigService;
            this.waveConfig = waveConfig;
            this.animationType = animationType;
            this.nzWave = new core$1.NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
            this.nzBlock = false;
            this.nzGhost = false;
            this.nzSearch = false;
            this.nzLoading = false;
            this.nzType = 'default';
            this.nzShape = null;
            this.el = this.elementRef.nativeElement;
            this.isInDropdown = false;
            this.iconOnly = false;
            this.destroy$ = new rxjs.Subject();
            this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.setClassMap();
                _this.cdr.markForCheck();
            }));
        }
        /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
        /**
         * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
         * @return {?}
         */
        NzButtonComponent.prototype.setClassMap = /**
         * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var prefixCls = 'ant-btn';
            /** @type {?} */
            var sizeMap = { large: 'lg', small: 'sm' };
            this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
                _a[prefixCls + "-" + this.nzType] = this.nzType,
                _a[prefixCls + "-" + this.nzShape] = this.nzShape,
                _a[prefixCls + "-" + sizeMap[this.nzSize]] = sizeMap[this.nzSize],
                _a[prefixCls + "-loading"] = this.nzLoading,
                _a[prefixCls + "-icon-only"] = this.iconOnly && !this.nzSearch && !this.isInDropdown,
                _a[prefixCls + "-background-ghost"] = this.nzGhost,
                _a[prefixCls + "-block"] = this.nzBlock,
                _a["ant-input-search-button"] = this.nzSearch,
                _a));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzButtonComponent.prototype.updateIconDisplay = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.iconElement) {
                this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
            }
        };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.checkContent = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
            if (hasIcon) {
                this.moveIcon();
            }
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            /** https://github.com/angular/angular/issues/12530 **/
            if (core$1.isEmpty(this.contentElement.nativeElement)) {
                this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
                this.iconOnly = !!hasIcon;
            }
            else {
                this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
                this.iconOnly = false;
            }
            this.setClassMap();
            this.updateIconDisplay(this.nzLoading);
            if (!((/** @type {?} */ (this.cdr))).destroyed) {
                this.cdr.detectChanges();
            }
        };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.moveIcon = /**
         * @return {?}
         */
        function () {
            if (this.listOfIconElement && this.listOfIconElement.length) {
                /** @type {?} */
                var firstChildElement = core$1.findFirstNotEmptyNode(this.contentElement.nativeElement);
                /** @type {?} */
                var lastChildElement = core$1.findLastNotEmptyNode(this.contentElement.nativeElement);
                if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                    this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                    this.iconElement = (/** @type {?} */ (firstChildElement));
                }
                else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                    this.renderer.appendChild(this.el, lastChildElement);
                }
            }
        };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.contentObserver
                .observe(this.contentElement)
                .pipe(operators.startWith(true), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.checkContent(); }));
            }));
        };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
            this.nzWave.ngOnInit();
        };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.nzWave.ngOnDestroy();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzBlock ||
                changes.nzGhost ||
                changes.nzSearch ||
                changes.nzType ||
                changes.nzShape ||
                changes.nzSize ||
                changes.nzLoading) {
                this.setClassMap();
            }
            if (changes.nzLoading) {
                this.updateIconDisplay(this.nzLoading);
            }
            if (changes.nzType && changes.nzType.currentValue === 'link') {
                this.nzWave.disable();
            }
            else {
                this.nzWave.enable();
            }
        };
        NzButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[nz-button]',
                        exportAs: 'nzButton',
                        providers: [core$1.NzUpdateHostClassService],
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<i nz-icon nzType=\"loading\" *ngIf=\"nzLoading\"></i>\n<span #contentElement><ng-content></ng-content></span>"
                    }] }
        ];
        /** @nocollapse */
        NzButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: observers.ContentObserver },
            { type: core$1.NzUpdateHostClassService },
            { type: core.NgZone },
            { type: core$1.NzConfigService },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.NZ_WAVE_GLOBAL_CONFIG,] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        NzButtonComponent.propDecorators = {
            contentElement: [{ type: core.ViewChild, args: ['contentElement', { static: true },] }],
            listOfIconElement: [{ type: core.ContentChildren, args: [icon.NzIconDirective, { read: core.ElementRef },] }],
            nzWave: [{ type: core.HostBinding, args: ['attr.nz-wave',] }],
            nzBlock: [{ type: core.Input }],
            nzGhost: [{ type: core.Input }],
            nzSearch: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzShape: [{ type: core.Input }],
            nzSize: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzButtonComponent.prototype, "nzBlock", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzButtonComponent.prototype, "nzGhost", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzButtonComponent.prototype, "nzSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzButtonComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzButtonComponent.prototype, "nzSize", void 0);
        return NzButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        NzButtonComponent.prototype.contentElement;
        /** @type {?} */
        NzButtonComponent.prototype.listOfIconElement;
        /** @type {?} */
        NzButtonComponent.prototype.nzWave;
        /** @type {?} */
        NzButtonComponent.prototype.nzBlock;
        /** @type {?} */
        NzButtonComponent.prototype.nzGhost;
        /** @type {?} */
        NzButtonComponent.prototype.nzSearch;
        /** @type {?} */
        NzButtonComponent.prototype.nzLoading;
        /** @type {?} */
        NzButtonComponent.prototype.nzType;
        /** @type {?} */
        NzButtonComponent.prototype.nzShape;
        /** @type {?} */
        NzButtonComponent.prototype.nzSize;
        /** @type {?} */
        NzButtonComponent.prototype.el;
        /** @type {?} */
        NzButtonComponent.prototype.isInDropdown;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.iconElement;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.iconOnly;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.contentObserver;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.nzUpdateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.ngZone;
        /** @type {?} */
        NzButtonComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.waveConfig;
        /**
         * @type {?}
         * @private
         */
        NzButtonComponent.prototype.animationType;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzButtonGroupComponent = /** @class */ (function () {
        function NzButtonGroupComponent(nzUpdateHostClassService, elementRef) {
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.elementRef = elementRef;
            this.isInDropdown = false;
        }
        Object.defineProperty(NzButtonGroupComponent.prototype, "nzSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this._size;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._size = value;
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzButtonGroupComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var prefixCls = 'ant-btn-group';
            /** @type {?} */
            var classMap = (_a = {},
                _a[prefixCls] = true,
                _a["ant-dropdown-button"] = this.isInDropdown,
                _a[prefixCls + "-lg"] = this.nzSize === 'large',
                _a[prefixCls + "-sm"] = this.nzSize === 'small',
                _a);
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
        };
        /**
         * @return {?}
         */
        NzButtonGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
        };
        NzButtonGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-button-group',
                        exportAs: 'nzButtonGroup',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        providers: [core$1.NzUpdateHostClassService],
                        template: "<ng-content></ng-content>\n"
                    }] }
        ];
        /** @nocollapse */
        NzButtonGroupComponent.ctorParameters = function () { return [
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef }
        ]; };
        NzButtonGroupComponent.propDecorators = {
            nzSize: [{ type: core.Input }]
        };
        return NzButtonGroupComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzButtonGroupComponent.prototype._size;
        /** @type {?} */
        NzButtonGroupComponent.prototype.isInDropdown;
        /**
         * @type {?}
         * @private
         */
        NzButtonGroupComponent.prototype.nzUpdateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzButtonGroupComponent.prototype.elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzButtonModule = /** @class */ (function () {
        function NzButtonModule() {
        }
        NzButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzButtonComponent, NzButtonGroupComponent],
                        exports: [NzButtonComponent, NzButtonGroupComponent],
                        imports: [common.CommonModule, observers.ObserversModule, core$1.NzWaveModule, icon.NzIconModule]
                    },] }
        ];
        return NzButtonModule;
    }());

    exports.NzButtonComponent = NzButtonComponent;
    exports.NzButtonGroupComponent = NzButtonGroupComponent;
    exports.NzButtonModule = NzButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-button.umd.js.map
