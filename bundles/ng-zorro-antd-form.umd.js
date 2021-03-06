(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/form', ['exports', '@angular/cdk/layout', '@angular/cdk/platform', '@angular/common', '@angular/core', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/core', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].form = {}), global.ng.cdk.layout, global.ng.cdk.platform, global.ng.common, global.ng.core, global['ng-zorro-antd'].grid, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core, global.ng.forms, global.rxjs, global.rxjs.operators));
}(this, (function (exports, layout, platform, common, core, grid, icon, core$1, forms, rxjs, operators) { 'use strict';

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
    var NzFormExplainComponent = /** @class */ (function () {
        function NzFormExplainComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
            core$1.warnDeprecation("'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
        }
        NzFormExplainComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-form-explain',
                        exportAs: 'nzFormExplain',
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        animations: [core$1.helpMotion],
                        template: "<div [@helpMotion]>\n  <ng-content></ng-content>\n</div>",
                        styles: ["\n      nz-form-explain {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzFormExplainComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzFormExplainComponent;
    }());
    if (false) {
        /** @type {?} */
        NzFormExplainComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzFormExplainComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
     */
    var NzFormItemComponent = /** @class */ (function (_super) {
        __extends(NzFormItemComponent, _super);
        function NzFormItemComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
            var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) || this;
            _this.cdr = cdr;
            _this.nzFlex = false;
            _this.withHelpClass = false;
            _this.tipsMode = false;
            renderer.addClass(elementRef.nativeElement, 'ant-form-item');
            return _this;
        }
        /**
         * @return {?}
         */
        NzFormItemComponent.prototype.updateFlexStyle = /**
         * @return {?}
         */
        function () {
            if (this.nzFlex) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
            }
            else {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzFormItemComponent.prototype.setWithHelpViaTips = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.tipsMode = true;
            this.withHelpClass = value;
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzFormItemComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.tipsMode) {
                this.listOfNzFormExplainComponent.changes
                    .pipe(operators.startWith(true), operators.takeUntil(this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.withHelpClass = _this.listOfNzFormExplainComponent && _this.listOfNzFormExplainComponent.length > 0;
                    _this.cdr.markForCheck();
                }));
            }
        };
        /**
         * @return {?}
         */
        NzFormItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
            this.updateFlexStyle();
        };
        /**
         * @return {?}
         */
        NzFormItemComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzFormItemComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.hasOwnProperty('nzFlex')) {
                this.updateFlexStyle();
            }
        };
        NzFormItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-form-item',
                        exportAs: 'nzFormItem',
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [core$1.NzUpdateHostClassService],
                        template: "<ng-content></ng-content>",
                        host: {
                            '[class.ant-form-item-with-help]': 'withHelpClass'
                        },
                        styles: ["\n      nz-form-item {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzFormItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core$1.NzUpdateHostClassService },
            { type: layout.MediaMatcher },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: core$1.NzDomEventService },
            { type: core.ChangeDetectorRef }
        ]; };
        NzFormItemComponent.propDecorators = {
            nzFlex: [{ type: core.Input }],
            listOfNzFormExplainComponent: [{ type: core.ContentChildren, args: [NzFormExplainComponent, { descendants: true },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzFormItemComponent.prototype, "nzFlex", void 0);
        return NzFormItemComponent;
    }(grid.NzRowDirective));
    if (false) {
        /** @type {?} */
        NzFormItemComponent.prototype.nzFlex;
        /** @type {?} */
        NzFormItemComponent.prototype.listOfNzFormExplainComponent;
        /** @type {?} */
        NzFormItemComponent.prototype.withHelpClass;
        /** @type {?} */
        NzFormItemComponent.prototype.tipsMode;
        /**
         * @type {?}
         * @private
         */
        NzFormItemComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFormControlComponent = /** @class */ (function (_super) {
        __extends(NzFormControlComponent, _super);
        function NzFormControlComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
            var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
            _this.nzFormItemComponent = nzFormItemComponent;
            _this.cdr = cdr;
            _this._hasFeedback = false;
            _this.validateChanges = rxjs.Subscription.EMPTY;
            _this.status = null;
            _this.controlClassMap = {};
            renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
            return _this;
        }
        Object.defineProperty(NzFormControlComponent.prototype, "nzHasFeedback", {
            get: /**
             * @return {?}
             */
            function () {
                return this._hasFeedback;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._hasFeedback = core$1.toBoolean(value);
                this.setControlClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "nzValidateStatus", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value instanceof forms.FormControl || value instanceof forms.NgModel) {
                    this.validateControl = value;
                    this.validateString = null;
                    this.watchControl();
                }
                else if (value instanceof forms.FormControlName) {
                    this.validateControl = value.control;
                    this.validateString = null;
                    this.watchControl();
                }
                else {
                    this.validateString = value;
                    this.validateControl = null;
                    this.setControlClassMap();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzFormControlComponent.prototype.removeSubscribe = /**
         * @return {?}
         */
        function () {
            this.validateChanges.unsubscribe();
        };
        /**
         * @return {?}
         */
        NzFormControlComponent.prototype.watchControl = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.removeSubscribe();
            /** miss detect https://github.com/angular/angular/issues/10887 **/
            if (this.validateControl && this.validateControl.statusChanges) {
                this.validateChanges = this.validateControl.statusChanges.pipe(operators.startWith(null)).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.setControlClassMap();
                    _this.cdr.markForCheck();
                }));
            }
        };
        /**
         * @param {?} status
         * @return {?}
         */
        NzFormControlComponent.prototype.validateControlStatus = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            return (/** @type {?} */ ((!!this.validateControl &&
                (this.validateControl.dirty || this.validateControl.touched) &&
                this.validateControl.status === status)));
        };
        /**
         * @return {?}
         */
        NzFormControlComponent.prototype.setControlClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            if (this.validateString === 'warning') {
                this.status = 'warning';
                this.iconType = 'exclamation-circle-fill';
            }
            else if (this.validateString === 'validating' ||
                this.validateString === 'pending' ||
                this.validateControlStatus('PENDING')) {
                this.status = 'validating';
                this.iconType = 'loading';
            }
            else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
                this.status = 'error';
                this.iconType = 'close-circle-fill';
            }
            else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
                this.status = 'success';
                this.iconType = 'check-circle-fill';
            }
            else {
                this.status = null;
                this.iconType = '';
            }
            if (this.hasTips) {
                this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
            }
            this.controlClassMap = (_a = {},
                _a["has-warning"] = this.status === 'warning',
                _a["is-validating"] = this.status === 'validating',
                _a["has-error"] = this.status === 'error',
                _a["has-success"] = this.status === 'success',
                _a["has-feedback"] = this.nzHasFeedback && this.status,
                _a);
        };
        Object.defineProperty(NzFormControlComponent.prototype, "hasTips", {
            get: /**
             * @return {?}
             */
            function () {
                return !!(this.nzSuccessTip || this.nzWarningTip || this.nzErrorTip || this.nzValidatingTip);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showSuccessTip", {
            get: /**
             * @return {?}
             */
            function () {
                return this.status === 'success' && !!this.nzSuccessTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showWarningTip", {
            get: /**
             * @return {?}
             */
            function () {
                return this.status === 'warning' && !!this.nzWarningTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showErrorTip", {
            get: /**
             * @return {?}
             */
            function () {
                return this.status === 'error' && !!this.nzErrorTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showValidatingTip", {
            get: /**
             * @return {?}
             */
            function () {
                return this.status === 'validating' && !!this.nzValidatingTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showInnerTip", {
            get: /**
             * @return {?}
             */
            function () {
                return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzFormControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
            this.setControlClassMap();
        };
        /**
         * @return {?}
         */
        NzFormControlComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.removeSubscribe();
            _super.prototype.ngOnDestroy.call(this);
        };
        /**
         * @return {?}
         */
        NzFormControlComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (!this.validateControl && !this.validateString) {
                if (this.defaultValidateControl instanceof forms.FormControlDirective) {
                    this.nzValidateStatus = this.defaultValidateControl.control;
                }
                else {
                    this.nzValidateStatus = this.defaultValidateControl;
                }
            }
        };
        /**
         * @return {?}
         */
        NzFormControlComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        NzFormControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-form-control',
                        exportAs: 'nzFormControl',
                        preserveWhitespaces: false,
                        animations: [core$1.helpMotion],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [core$1.NzUpdateHostClassService],
                        template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\n  <span class=\"ant-form-item-children\">\n    <ng-content></ng-content>\n    <span class=\"ant-form-item-children-icon\">\n      <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\n    </span>\n  </span>\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\n    <div @helpMotion>\n      <ng-container *ngIf=\"showSuccessTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuccessTip;context:{$implicit:validateControl};\">{{ nzSuccessTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showWarningTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzWarningTip;context:{$implicit:validateControl};\">{{ nzWarningTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showErrorTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzErrorTip;context:{$implicit:validateControl};\">{{ nzErrorTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showValidatingTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzValidatingTip;context:{$implicit:validateControl};\">{{ nzValidatingTip }}</ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content *ngIf=\"!hasTips\" select=\"nz-form-explain\"></ng-content>\n  <ng-content *ngIf=\"!nzExtra\" select=\"nz-form-extra\"></ng-content>\n  <div class=\"ant-form-extra\" *ngIf=\"nzExtra\">\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n  </div>\n</div>",
                        styles: ["\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzFormControlComponent.ctorParameters = function () { return [
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef },
            { type: NzFormItemComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: grid.NzRowDirective, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        NzFormControlComponent.propDecorators = {
            defaultValidateControl: [{ type: core.ContentChild, args: [forms.NgControl, { static: false },] }],
            nzSuccessTip: [{ type: core.Input }],
            nzWarningTip: [{ type: core.Input }],
            nzErrorTip: [{ type: core.Input }],
            nzValidatingTip: [{ type: core.Input }],
            nzExtra: [{ type: core.Input }],
            nzHasFeedback: [{ type: core.Input }],
            nzValidateStatus: [{ type: core.Input }]
        };
        return NzFormControlComponent;
    }(grid.NzColDirective));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzFormControlComponent.prototype._hasFeedback;
        /**
         * @type {?}
         * @private
         */
        NzFormControlComponent.prototype.validateChanges;
        /**
         * @type {?}
         * @private
         */
        NzFormControlComponent.prototype.validateString;
        /** @type {?} */
        NzFormControlComponent.prototype.validateControl;
        /** @type {?} */
        NzFormControlComponent.prototype.status;
        /** @type {?} */
        NzFormControlComponent.prototype.controlClassMap;
        /** @type {?} */
        NzFormControlComponent.prototype.iconType;
        /** @type {?} */
        NzFormControlComponent.prototype.defaultValidateControl;
        /** @type {?} */
        NzFormControlComponent.prototype.nzSuccessTip;
        /** @type {?} */
        NzFormControlComponent.prototype.nzWarningTip;
        /** @type {?} */
        NzFormControlComponent.prototype.nzErrorTip;
        /** @type {?} */
        NzFormControlComponent.prototype.nzValidatingTip;
        /** @type {?} */
        NzFormControlComponent.prototype.nzExtra;
        /**
         * @type {?}
         * @private
         */
        NzFormControlComponent.prototype.nzFormItemComponent;
        /**
         * @type {?}
         * @private
         */
        NzFormControlComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFormExtraComponent = /** @class */ (function () {
        function NzFormExtraComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
            core$1.warnDeprecation("'nz-form-extra' is going to be removed in 9.0.0. Use [nzExtra] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
        }
        NzFormExtraComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-form-extra',
                        exportAs: 'nzFormExtra',
                        template: "<ng-content></ng-content>",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      nz-form-extra {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzFormExtraComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzFormExtraComponent;
    }());
    if (false) {
        /** @type {?} */
        NzFormExtraComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzFormExtraComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFormLabelComponent = /** @class */ (function (_super) {
        __extends(NzFormLabelComponent, _super);
        function NzFormLabelComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
            var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
            _this.cdr = cdr;
            _this.nzRequired = false;
            _this.defaultNoColon = false;
            _this.noColon = 'default';
            renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
            return _this;
        }
        Object.defineProperty(NzFormLabelComponent.prototype, "nzNoColon", {
            get: /**
             * @return {?}
             */
            function () {
                return !!this.noColon;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.noColon = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        NzFormLabelComponent.prototype.setDefaultNoColon = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.defaultNoColon = core$1.toBoolean(value);
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzFormLabelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        /**
         * @return {?}
         */
        NzFormLabelComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        NzFormLabelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-form-label',
                        exportAs: 'nzFormLabel',
                        providers: [core$1.NzUpdateHostClassService],
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<label [attr.for]=\"nzFor\"\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : nzNoColon\"\n  [class.ant-form-item-required]=\"nzRequired\">\n  <ng-content></ng-content>\n</label>"
                    }] }
        ];
        /** @nocollapse */
        NzFormLabelComponent.ctorParameters = function () { return [
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef },
            { type: NzFormItemComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: grid.NzRowDirective, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        NzFormLabelComponent.propDecorators = {
            nzFor: [{ type: core.Input }],
            nzRequired: [{ type: core.Input }],
            nzNoColon: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzFormLabelComponent.prototype, "nzRequired", void 0);
        return NzFormLabelComponent;
    }(grid.NzColDirective));
    if (false) {
        /** @type {?} */
        NzFormLabelComponent.prototype.nzFor;
        /** @type {?} */
        NzFormLabelComponent.prototype.nzRequired;
        /** @type {?} */
        NzFormLabelComponent.prototype.defaultNoColon;
        /** @type {?} */
        NzFormLabelComponent.prototype.noColon;
        /**
         * @type {?}
         * @private
         */
        NzFormLabelComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFormSplitComponent = /** @class */ (function () {
        function NzFormSplitComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
        }
        NzFormSplitComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-form-split',
                        exportAs: 'nzFormSplit',
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        NzFormSplitComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzFormSplitComponent;
    }());
    if (false) {
        /** @type {?} */
        NzFormSplitComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzFormSplitComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFormTextComponent = /** @class */ (function () {
        function NzFormTextComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
        }
        NzFormTextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-form-text',
                        exportAs: 'nzFormText',
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        NzFormTextComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzFormTextComponent;
    }());
    if (false) {
        /** @type {?} */
        NzFormTextComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzFormTextComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'form';
    var NzFormDirective = /** @class */ (function () {
        function NzFormDirective(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
            this.nzConfigService = nzConfigService;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.nzLayout = 'horizontal';
            this.destroy$ = new rxjs.Subject();
            this.renderer.addClass(elementRef.nativeElement, 'ant-form');
        }
        /**
         * @return {?}
         */
        NzFormDirective.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["ant-form-" + this.nzLayout] = this.nzLayout,
                _a));
        };
        /**
         * @return {?}
         */
        NzFormDirective.prototype.updateItemsDefaultColon = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.nzFormLabelComponent) {
                this.nzFormLabelComponent.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.setDefaultNoColon(_this.nzNoColon); }));
            }
        };
        /**
         * @return {?}
         */
        NzFormDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzFormDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.setClassMap();
            if (changes.hasOwnProperty('nzNoColon')) {
                this.updateItemsDefaultColon();
            }
        };
        /**
         * @return {?}
         */
        NzFormDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.nzFormLabelComponent.changes
                .pipe(operators.startWith(null), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateItemsDefaultColon();
            }));
        };
        /**
         * @return {?}
         */
        NzFormDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzFormDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-form]',
                        exportAs: 'nzForm',
                        providers: [core$1.NzUpdateHostClassService]
                    },] }
        ];
        /** @nocollapse */
        NzFormDirective.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        NzFormDirective.propDecorators = {
            nzLayout: [{ type: core.Input }],
            nzNoColon: [{ type: core.Input }],
            nzFormLabelComponent: [{ type: core.ContentChildren, args: [NzFormLabelComponent, { descendants: true },] }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzFormDirective.prototype, "nzNoColon", void 0);
        return NzFormDirective;
    }());
    if (false) {
        /** @type {?} */
        NzFormDirective.prototype.nzLayout;
        /** @type {?} */
        NzFormDirective.prototype.nzNoColon;
        /** @type {?} */
        NzFormDirective.prototype.nzFormLabelComponent;
        /** @type {?} */
        NzFormDirective.prototype.destroy$;
        /** @type {?} */
        NzFormDirective.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzFormDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzFormDirective.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzFormDirective.prototype.nzUpdateHostClassService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFormModule = /** @class */ (function () {
        function NzFormModule() {
        }
        NzFormModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NzFormExtraComponent,
                            NzFormLabelComponent,
                            NzFormDirective,
                            NzFormItemComponent,
                            NzFormControlComponent,
                            NzFormExplainComponent,
                            NzFormTextComponent,
                            NzFormSplitComponent
                        ],
                        exports: [
                            NzFormExtraComponent,
                            NzFormLabelComponent,
                            NzFormDirective,
                            NzFormItemComponent,
                            NzFormControlComponent,
                            NzFormExplainComponent,
                            NzFormTextComponent,
                            NzFormSplitComponent
                        ],
                        imports: [common.CommonModule, grid.NzGridModule, icon.NzIconModule, layout.LayoutModule, platform.PlatformModule, core$1.NzAddOnModule]
                    },] }
        ];
        return NzFormModule;
    }());

    exports.NzFormControlComponent = NzFormControlComponent;
    exports.NzFormDirective = NzFormDirective;
    exports.NzFormExplainComponent = NzFormExplainComponent;
    exports.NzFormExtraComponent = NzFormExtraComponent;
    exports.NzFormItemComponent = NzFormItemComponent;
    exports.NzFormLabelComponent = NzFormLabelComponent;
    exports.NzFormModule = NzFormModule;
    exports.NzFormSplitComponent = NzFormSplitComponent;
    exports.NzFormTextComponent = NzFormTextComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-form.umd.js.map
