(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/back-top', ['exports', '@angular/cdk/platform', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['back-top'] = {}), global.ng.cdk.platform, global.ng.common, global.ng.core, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, platform, common, core, core$1, rxjs, operators) { 'use strict';

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
    var NZ_CONFIG_COMPONENT_NAME = 'backTop';
    var NzBackTopComponent = /** @class */ (function () {
        function NzBackTopComponent(nzConfigService, scrollSrv, doc, platform, cd) {
            this.nzConfigService = nzConfigService;
            this.scrollSrv = scrollSrv;
            this.doc = doc;
            this.platform = platform;
            this.cd = cd;
            this.scroll$ = null;
            this.target = null;
            this.visible = false;
            this.nzClick = new core.EventEmitter();
        }
        Object.defineProperty(NzBackTopComponent.prototype, "nzTarget", {
            set: /**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
                this.registerScrollEvent();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzBackTopComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.scroll$) {
                this.registerScrollEvent();
            }
        };
        /**
         * @return {?}
         */
        NzBackTopComponent.prototype.clickBackTop = /**
         * @return {?}
         */
        function () {
            this.scrollSrv.scrollTo(this.getTarget(), 0);
            this.nzClick.emit(true);
        };
        /**
         * @private
         * @return {?}
         */
        NzBackTopComponent.prototype.getTarget = /**
         * @private
         * @return {?}
         */
        function () {
            return this.target || window;
        };
        /**
         * @private
         * @return {?}
         */
        NzBackTopComponent.prototype.handleScroll = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
                return;
            }
            this.visible = !this.visible;
            this.cd.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        NzBackTopComponent.prototype.removeListen = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.scroll$) {
                this.scroll$.unsubscribe();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzBackTopComponent.prototype.registerScrollEvent = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            this.removeListen();
            this.handleScroll();
            this.scroll$ = rxjs.fromEvent(this.getTarget(), 'scroll')
                .pipe(operators.throttleTime(50), operators.distinctUntilChanged())
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.handleScroll(); }));
        };
        /**
         * @return {?}
         */
        NzBackTopComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.removeListen();
        };
        NzBackTopComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-back-top',
                        exportAs: 'nzBackTop',
                        animations: [core$1.fadeMotion],
                        template: "<div class=\"ant-back-top\" (click)=\"clickBackTop()\" @fadeMotion *ngIf=\"visible\">\n  <ng-template #defaultContent>\n    <div class=\"ant-back-top-content\">\n      <div class=\"ant-back-top-icon\"></div>\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"nzTemplate || defaultContent\"></ng-template>\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        NzBackTopComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core$1.NzScrollService },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: platform.Platform },
            { type: core.ChangeDetectorRef }
        ]; };
        NzBackTopComponent.propDecorators = {
            nzTemplate: [{ type: core.Input }],
            nzVisibilityHeight: [{ type: core.Input }],
            nzTarget: [{ type: core.Input }],
            nzClick: [{ type: core.Output }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 400), core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
        return NzBackTopComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzBackTopComponent.prototype.scroll$;
        /**
         * @type {?}
         * @private
         */
        NzBackTopComponent.prototype.target;
        /** @type {?} */
        NzBackTopComponent.prototype.visible;
        /** @type {?} */
        NzBackTopComponent.prototype.nzTemplate;
        /** @type {?} */
        NzBackTopComponent.prototype.nzVisibilityHeight;
        /** @type {?} */
        NzBackTopComponent.prototype.nzClick;
        /** @type {?} */
        NzBackTopComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzBackTopComponent.prototype.scrollSrv;
        /**
         * @type {?}
         * @private
         */
        NzBackTopComponent.prototype.doc;
        /**
         * @type {?}
         * @private
         */
        NzBackTopComponent.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        NzBackTopComponent.prototype.cd;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzBackTopModule = /** @class */ (function () {
        function NzBackTopModule() {
        }
        NzBackTopModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzBackTopComponent],
                        exports: [NzBackTopComponent],
                        imports: [common.CommonModule, platform.PlatformModule],
                        providers: [core$1.SCROLL_SERVICE_PROVIDER]
                    },] }
        ];
        return NzBackTopModule;
    }());

    exports.NzBackTopComponent = NzBackTopComponent;
    exports.NzBackTopModule = NzBackTopModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-back-top.umd.js.map
