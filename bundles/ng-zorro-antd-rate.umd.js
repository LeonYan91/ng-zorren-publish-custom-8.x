(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/rate', ['exports', '@angular/cdk/keycodes', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].rate = {}), global.ng.cdk.keycodes, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].tooltip));
}(this, (function (exports, keycodes, core, forms, rxjs, operators, core$1, common, icon, tooltip) { 'use strict';

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
    var NZ_CONFIG_COMPONENT_NAME = 'rate';
    var NzRateComponent = /** @class */ (function () {
        function NzRateComponent(nzConfigService, renderer, cdr) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.cdr = cdr;
            this.nzDisabled = false;
            this.nzAutoFocus = false;
            this.nzTooltips = [];
            this.nzOnBlur = new core.EventEmitter();
            this.nzOnFocus = new core.EventEmitter();
            this.nzOnHoverChange = new core.EventEmitter();
            this.nzOnKeyDown = new core.EventEmitter();
            this.hasHalf = false;
            this.hoverValue = 0;
            this.prefixCls = 'ant-rate';
            this.innerPrefixCls = this.prefixCls + "-star";
            this.isFocused = false;
            this.isInit = false;
            this.starArray = [];
            this.destroy$ = new rxjs.Subject();
            this._count = 5;
            this._value = 0;
            this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
        }
        Object.defineProperty(NzRateComponent.prototype, "nzCount", {
            get: /**
             * @return {?}
             */
            function () {
                return this._count;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this._count === value) {
                    return;
                }
                this._count = value;
                this.updateStarArray();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzRateComponent.prototype, "nzValue", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: /**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                if (this._value === input) {
                    return;
                }
                this._value = input;
                this.hasHalf = !Number.isInteger(input);
                this.hoverValue = Math.ceil(input);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NzRateComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzAutoFocus && !changes.nzAutoFocus.isFirstChange()) {
                if (this.nzAutoFocus && !this.nzDisabled) {
                    this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
                }
                else {
                    this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
                }
            }
        };
        /**
         * @return {?}
         */
        NzRateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.updateStarArray();
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.cdr.markForCheck(); }));
        };
        /**
         * @return {?}
         */
        NzRateComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * @return {?}
         */
        NzRateComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.isInit = true;
        };
        /**
         * @param {?} index
         * @param {?} isHalf
         * @return {?}
         */
        NzRateComponent.prototype.onItemClick = /**
         * @param {?} index
         * @param {?} isHalf
         * @return {?}
         */
        function (index, isHalf) {
            if (this.nzDisabled) {
                return;
            }
            this.hoverValue = index + 1;
            /** @type {?} */
            var actualValue = isHalf ? index + 0.5 : index + 1;
            if (this.nzValue === actualValue) {
                if (this.nzAllowClear) {
                    this.nzValue = 0;
                    this.onChange(this.nzValue);
                }
            }
            else {
                this.nzValue = actualValue;
                this.onChange(this.nzValue);
            }
        };
        /**
         * @param {?} index
         * @param {?} isHalf
         * @return {?}
         */
        NzRateComponent.prototype.onItemHover = /**
         * @param {?} index
         * @param {?} isHalf
         * @return {?}
         */
        function (index, isHalf) {
            if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
                return;
            }
            this.hoverValue = index + 1;
            this.hasHalf = isHalf;
            this.nzOnHoverChange.emit(this.hoverValue);
        };
        /**
         * @return {?}
         */
        NzRateComponent.prototype.onRateLeave = /**
         * @return {?}
         */
        function () {
            this.hasHalf = !Number.isInteger(this.nzValue);
            this.hoverValue = Math.ceil(this.nzValue);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzRateComponent.prototype.onFocus = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.isFocused = true;
            this.nzOnFocus.emit(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzRateComponent.prototype.onBlur = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.isFocused = false;
            this.nzOnBlur.emit(e);
        };
        /**
         * @return {?}
         */
        NzRateComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            this.ulElement.nativeElement.focus();
        };
        /**
         * @return {?}
         */
        NzRateComponent.prototype.blur = /**
         * @return {?}
         */
        function () {
            this.ulElement.nativeElement.blur();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzRateComponent.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var oldVal = this.nzValue;
            if (e.keyCode === keycodes.RIGHT_ARROW && this.nzValue < this.nzCount) {
                this.nzValue += this.nzAllowHalf ? 0.5 : 1;
            }
            else if (e.keyCode === keycodes.LEFT_ARROW && this.nzValue > 0) {
                this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
            }
            if (oldVal !== this.nzValue) {
                this.onChange(this.nzValue);
                this.nzOnKeyDown.emit(e);
                this.cdr.markForCheck();
            }
        };
        /**
         * @param {?} i
         * @return {?}
         */
        NzRateComponent.prototype.setClasses = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            var _a;
            return _a = {},
                _a[this.innerPrefixCls + "-full"] = i + 1 < this.hoverValue || (!this.hasHalf && i + 1 === this.hoverValue),
                _a[this.innerPrefixCls + "-half"] = this.hasHalf && i + 1 === this.hoverValue,
                _a[this.innerPrefixCls + "-active"] = this.hasHalf && i + 1 === this.hoverValue,
                _a[this.innerPrefixCls + "-zero"] = i + 1 > this.hoverValue,
                _a[this.innerPrefixCls + "-focused"] = this.hasHalf && i + 1 === this.hoverValue && this.isFocused,
                _a;
        };
        /**
         * @private
         * @return {?}
         */
        NzRateComponent.prototype.updateStarArray = /**
         * @private
         * @return {?}
         */
        function () {
            this.starArray = Array(this.nzCount)
                .fill(0)
                .map((/**
             * @param {?} _
             * @param {?} i
             * @return {?}
             */
            function (_, i) { return i; }));
        };
        // #region Implement `ControlValueAccessor`
        // #region Implement `ControlValueAccessor`
        /**
         * @param {?} value
         * @return {?}
         */
        NzRateComponent.prototype.writeValue = 
        // #region Implement `ControlValueAccessor`
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzValue = value || 0;
            this.cdr.markForCheck();
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzRateComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.nzDisabled = isDisabled;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzRateComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzRateComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        NzRateComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-rate',
                        exportAs: 'nzRate',
                        preserveWhitespaces: false,
                        template: "<ul #ulElement\n  class=\"ant-rate\"\n  [class.ant-rate-disabled]=\"nzDisabled\"\n  [ngClass]=\"classMap\"\n  (blur)=\"onBlur($event)\"\n  (focus)=\"onFocus($event)\"\n  (keydown)=\"onKeyDown($event); $event.preventDefault();\"\n  (mouseleave)=\"onRateLeave(); $event.stopPropagation();\"\n  [tabindex]=\"nzDisabled ? -1 : 1\">\n  <li *ngFor=\"let star of starArray; let i = index\"\n    class=\"ant-rate-star\"\n    [ngClass]=\"setClasses(star)\"\n    nz-tooltip\n    [nzTitle]=\"nzTooltips[ i ]\">\n    <div nz-rate-item\n      [allowHalf]=\"nzAllowHalf\"\n      [character]=\"nzCharacter\"\n      (itemHover)=\"onItemHover(i, $event)\"\n      (itemClick)=\"onItemClick(i, $event)\">\n    </div>\n  </li>\n</ul>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzRateComponent; })),
                                multi: true
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzRateComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        NzRateComponent.propDecorators = {
            ulElement: [{ type: core.ViewChild, args: ['ulElement', { static: false },] }],
            nzAllowClear: [{ type: core.Input }],
            nzAllowHalf: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzAutoFocus: [{ type: core.Input }],
            nzCharacter: [{ type: core.Input }],
            nzTooltips: [{ type: core.Input }],
            nzOnBlur: [{ type: core.Output }],
            nzOnFocus: [{ type: core.Output }],
            nzOnHoverChange: [{ type: core.Output }],
            nzOnKeyDown: [{ type: core.Output }],
            nzCount: [{ type: core.Input }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateComponent.prototype, "nzAllowHalf", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateComponent.prototype, "nzAutoFocus", void 0);
        return NzRateComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzRateComponent.prototype.ulElement;
        /** @type {?} */
        NzRateComponent.prototype.nzAllowClear;
        /** @type {?} */
        NzRateComponent.prototype.nzAllowHalf;
        /** @type {?} */
        NzRateComponent.prototype.nzDisabled;
        /** @type {?} */
        NzRateComponent.prototype.nzAutoFocus;
        /** @type {?} */
        NzRateComponent.prototype.nzCharacter;
        /** @type {?} */
        NzRateComponent.prototype.nzTooltips;
        /** @type {?} */
        NzRateComponent.prototype.nzOnBlur;
        /** @type {?} */
        NzRateComponent.prototype.nzOnFocus;
        /** @type {?} */
        NzRateComponent.prototype.nzOnHoverChange;
        /** @type {?} */
        NzRateComponent.prototype.nzOnKeyDown;
        /** @type {?} */
        NzRateComponent.prototype.classMap;
        /** @type {?} */
        NzRateComponent.prototype.hasHalf;
        /** @type {?} */
        NzRateComponent.prototype.hoverValue;
        /** @type {?} */
        NzRateComponent.prototype.prefixCls;
        /** @type {?} */
        NzRateComponent.prototype.innerPrefixCls;
        /** @type {?} */
        NzRateComponent.prototype.isFocused;
        /** @type {?} */
        NzRateComponent.prototype.isInit;
        /** @type {?} */
        NzRateComponent.prototype.starArray;
        /**
         * @type {?}
         * @private
         */
        NzRateComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzRateComponent.prototype._count;
        /**
         * @type {?}
         * @private
         */
        NzRateComponent.prototype._value;
        /** @type {?} */
        NzRateComponent.prototype.onChange;
        /** @type {?} */
        NzRateComponent.prototype.onTouched;
        /** @type {?} */
        NzRateComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzRateComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzRateComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzRateItemComponent = /** @class */ (function () {
        function NzRateItemComponent() {
            this.allowHalf = false;
            this.itemHover = new core.EventEmitter();
            this.itemClick = new core.EventEmitter();
        }
        /**
         * @param {?} isHalf
         * @return {?}
         */
        NzRateItemComponent.prototype.hoverRate = /**
         * @param {?} isHalf
         * @return {?}
         */
        function (isHalf) {
            this.itemHover.next(isHalf && this.allowHalf);
        };
        /**
         * @param {?} isHalf
         * @return {?}
         */
        NzRateItemComponent.prototype.clickRate = /**
         * @param {?} isHalf
         * @return {?}
         */
        function (isHalf) {
            this.itemClick.next(isHalf && this.allowHalf);
        };
        NzRateItemComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: '[nz-rate-item]',
                        exportAs: 'nzRateItem',
                        template: "<div class=\"ant-rate-star-second\"\n  (mouseover)=\"hoverRate(false); $event.stopPropagation();\"\n  (click)=\"clickRate(false);\">\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\n</div>\n<div class=\"ant-rate-star-first\"\n  (mouseover)=\"hoverRate(true); $event.stopPropagation();\"\n  (click)=\"clickRate(true);\">\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\n</div>\n\n<ng-template #defaultCharacter>\n  <i nz-icon\n    nzType=\"star\"\n    nzTheme=\"fill\"></i>\n</ng-template>\n"
                    }] }
        ];
        NzRateItemComponent.propDecorators = {
            character: [{ type: core.Input }],
            allowHalf: [{ type: core.Input }],
            itemHover: [{ type: core.Output }],
            itemClick: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateItemComponent.prototype, "allowHalf", void 0);
        return NzRateItemComponent;
    }());
    if (false) {
        /** @type {?} */
        NzRateItemComponent.prototype.character;
        /** @type {?} */
        NzRateItemComponent.prototype.allowHalf;
        /** @type {?} */
        NzRateItemComponent.prototype.itemHover;
        /** @type {?} */
        NzRateItemComponent.prototype.itemClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzRateModule = /** @class */ (function () {
        function NzRateModule() {
        }
        NzRateModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [NzRateComponent],
                        declarations: [NzRateComponent, NzRateItemComponent],
                        imports: [common.CommonModule, icon.NzIconModule, tooltip.NzToolTipModule]
                    },] }
        ];
        return NzRateModule;
    }());

    exports.NzRateComponent = NzRateComponent;
    exports.NzRateItemComponent = NzRateItemComponent;
    exports.NzRateModule = NzRateModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-rate.umd.js.map
