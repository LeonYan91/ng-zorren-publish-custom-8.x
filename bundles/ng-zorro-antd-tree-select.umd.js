(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/tree'), require('@angular/common'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree-select', ['exports', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/tree', '@angular/common', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['tree-select'] = {}), global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].tree, global.ng.common, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon));
}(this, (function (exports, keycodes, overlay, core, forms, rxjs, operators, core$1, tree, common, empty, icon) { 'use strict';

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
    var NzTreeSelectService = /** @class */ (function (_super) {
        __extends(NzTreeSelectService, _super);
        function NzTreeSelectService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NzTreeSelectService.decorators = [
            { type: core.Injectable }
        ];
        return NzTreeSelectService;
    }(core$1.NzTreeBaseService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function higherOrderServiceFactory(injector) {
        return injector.get(NzTreeSelectService);
    }
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
    var NzTreeSelectComponent = /** @class */ (function (_super) {
        __extends(NzTreeSelectComponent, _super);
        function NzTreeSelectComponent(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
            var _this = _super.call(this, nzTreeService) || this;
            _this.nzConfigService = nzConfigService;
            _this.renderer = renderer;
            _this.cdr = cdr;
            _this.elementRef = elementRef;
            _this.noAnimation = noAnimation;
            _this.nzAllowClear = true;
            _this.nzShowExpand = true;
            _this.nzShowLine = false;
            _this.nzCheckable = false;
            _this.nzShowSearch = false;
            _this.nzDisabled = false;
            _this.nzAsyncData = false;
            _this.nzMultiple = false;
            _this.nzDefaultExpandAll = false;
            _this.nzCheckStrictly = false;
            _this.nzNodes = [];
            _this.nzOpen = false;
            _this.nzPlaceHolder = '';
            _this.nzDisplayWith = (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.title; });
            _this.nzOpenChange = new core.EventEmitter();
            _this.nzCleared = new core.EventEmitter();
            _this.nzRemoved = new core.EventEmitter();
            _this.nzExpandChange = new core.EventEmitter();
            _this.nzTreeClick = new core.EventEmitter();
            _this.nzTreeCheckBoxChange = new core.EventEmitter();
            _this.isComposing = false;
            _this.isDestroy = true;
            _this.isNotFound = false;
            _this.inputValue = '';
            _this.dropDownPosition = 'bottom';
            _this.selectedNodes = [];
            _this.expandedKeys = [];
            _this.value = [];
            _this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
            return _this;
        }
        Object.defineProperty(NzTreeSelectComponent.prototype, "nzDefaultExpandedKeys", {
            get: /**
             * @return {?}
             */
            function () {
                return this.expandedKeys;
            },
            /**
             * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
             */
            set: /**
             * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
                this.expandedKeys = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "nzExpandedKeys", {
            get: /**
             * @return {?}
             */
            function () {
                return this.expandedKeys;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.expandedKeys = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "treeTemplate", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzTreeTemplate || this.nzTreeTemplateChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
            get: /**
             * @return {?}
             */
            function () {
                return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "searchDisplay", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzOpen ? 'block' : 'none';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzMultiple || this.nzCheckable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "selectedValueDisplay", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var showSelectedValue = false;
                /** @type {?} */
                var opacity = 1;
                if (!this.nzShowSearch) {
                    showSelectedValue = true;
                }
                else {
                    if (this.nzOpen) {
                        showSelectedValue = !(this.inputValue || this.isComposing);
                        if (showSelectedValue) {
                            opacity = 0.4;
                        }
                    }
                    else {
                        showSelectedValue = true;
                    }
                }
                return {
                    display: showSelectedValue ? 'block' : 'none',
                    opacity: "" + opacity
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isDestroy = false;
            this.selectionChangeSubscription = this.subscribeSelectionChange();
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.isDestroy = true;
            this.closeDropDown();
            this.selectionChangeSubscription.unsubscribe();
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.closeDropDown();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.hasOwnProperty('nzNodes')) {
                this.updateSelectedNodes(true);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (core$1.isNotNil(value)) {
                if (this.isMultiple && Array.isArray(value)) {
                    this.value = value;
                }
                else {
                    this.value = [(/** @type {?} */ (value))];
                }
                this.updateSelectedNodes(true);
            }
            else {
                this.value = [];
                this.selectedNodes.forEach((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    _this.removeSelected(node, false);
                }));
                this.selectedNodes = [];
            }
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzTreeSelectComponent.prototype.registerOnChange = /**
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
        NzTreeSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.trigger = /**
         * @return {?}
         */
        function () {
            if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
                this.closeDropDown();
            }
            else {
                this.openDropdown();
                if (this.nzShowSearch || this.isMultiple) {
                    this.focusOnInput();
                }
            }
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.openDropdown = /**
         * @return {?}
         */
        function () {
            if (!this.nzDisabled) {
                this.nzOpen = true;
                this.nzOpenChange.emit(this.nzOpen);
                this.updateCdkConnectedOverlayStatus();
                this.updatePosition();
            }
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.closeDropDown = /**
         * @return {?}
         */
        function () {
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
            this.cdr.markForCheck();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onKeyDownInput = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var keyCode = e.keyCode;
            /** @type {?} */
            var eventTarget = (/** @type {?} */ (e.target));
            if (this.isMultiple && !eventTarget.value && keyCode === keycodes.BACKSPACE) {
                e.preventDefault();
                if (this.selectedNodes.length) {
                    /** @type {?} */
                    var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                    this.removeSelected(removeNode);
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next({
                        eventName: 'removeSelect',
                        node: removeNode
                    });
                }
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onExpandedKeysChange = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzExpandChange.emit(value);
            this.expandedKeys = __spread((/** @type {?} */ (value.keys)));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setInputValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.inputValue = value;
            this.updateInputWidth();
            this.updatePosition();
        };
        /**
         * @param {?} node
         * @param {?=} emit
         * @param {?=} event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.removeSelected = /**
         * @param {?} node
         * @param {?=} emit
         * @param {?=} event
         * @return {?}
         */
        function (node, emit, event) {
            if (emit === void 0) { emit = true; }
            node.isSelected = false;
            node.isChecked = false;
            if (this.nzCheckable) {
                this.nzTreeService.conduct(node);
            }
            else {
                this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
            }
            if (emit) {
                this.nzRemoved.emit(node);
            }
            // Do not trigger the popup
            if (event && event.stopPropagation) {
                event.stopPropagation();
            }
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.focusOnInput = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.inputElement) {
                    _this.inputElement.nativeElement.focus();
                }
            }));
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.subscribeSelectionChange = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return rxjs.merge(this.nzTreeClick.pipe(operators.tap((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var node = (/** @type {?} */ (event.node));
                if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                    node.isChecked = !node.isChecked;
                    node.isHalfChecked = false;
                    if (!_this.nzCheckStrictly) {
                        _this.nzTreeService.conduct(node);
                    }
                }
                if (_this.nzCheckable) {
                    node.isSelected = false;
                }
            })), operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var node = (/** @type {?} */ (event.node));
                return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
            }))), this.nzCheckable ? this.nzTreeCheckBoxChange : rxjs.of(), this.nzCleared, this.nzRemoved).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateSelectedNodes();
                /** @type {?} */
                var value = _this.selectedNodes.map((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return (/** @type {?} */ (node.key)); }));
                _this.value = __spread(value);
                if (_this.nzShowSearch || _this.isMultiple) {
                    _this.inputValue = '';
                    _this.isNotFound = false;
                }
                if (_this.isMultiple) {
                    _this.onChange(value);
                    _this.focusOnInput();
                    _this.updatePosition();
                }
                else {
                    _this.closeDropDown();
                    _this.onChange(value.length ? value[0] : null);
                }
            }));
        };
        /**
         * @param {?=} init
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateSelectedNodes = /**
         * @param {?=} init
         * @return {?}
         */
        function (init) {
            if (init === void 0) { init = false; }
            if (init) {
                /** @type {?} */
                var nodes = this.coerceTreeNodes(this.nzNodes);
                this.nzTreeService.isMultiple = this.isMultiple;
                this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
                this.nzTreeService.initTree(nodes);
                if (this.nzCheckable) {
                    this.nzTreeService.calcCheckedKeys(this.value, nodes, this.nzCheckStrictly);
                }
                else {
                    this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
                }
            }
            this.selectedNodes = __spread((this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updatePosition = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            }));
        };
        /**
         * @param {?} position
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateInputWidth = /**
         * @return {?}
         */
        function () {
            if (this.isMultiple && this.inputElement) {
                if (this.inputValue || this.isComposing) {
                    this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
                }
                else {
                    this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
                }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onClearSelection = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            $event.stopPropagation();
            $event.preventDefault();
            this.selectedNodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this.removeSelected(node, false);
            }));
            this.nzCleared.emit();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setSearchValues = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && (/** @type {?} */ ($event.matchedKeys)).length === 0;
            }));
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
         * @return {?}
         */
        function () {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        };
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzTreeSelectComponent.prototype.trackValue = /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return (/** @type {?} */ (option.key));
        };
        NzTreeSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-tree-select',
                        exportAs: 'nzTreeSelect',
                        animations: [core$1.slideMotion, core$1.zoomMotion],
                        template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"off\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzDisabled\">\n</ng-template>\n\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown\"\n    [@slideMotion]=\"nzOpen ? dropDownPosition : 'void'\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [class.ant-select-dropdown--single]=\"!nzMultiple\"\n    [class.ant-select-dropdown--multiple]=\"nzMultiple\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [ngStyle]=\"nzDropdownStyle\">\n    <nz-tree\n      #treeRef\n      [hidden]=\"isNotFound\"\n      nzNoAnimation\n      nzSelectMode\n      [nzData]=\"nzNodes\"\n      [nzMultiple]=\"nzMultiple\"\n      [nzSearchValue]=\"inputValue\"\n      [nzHideUnMatched]=\"nzHideUnMatched\"\n      [nzShowIcon]=\"nzShowIcon\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzExpandAll]=\"nzDefaultExpandAll\"\n      [nzExpandedKeys]=\"expandedKeys\"\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\n      [nzTreeTemplate]=\"treeTemplate\"\n      [nzCheckStrictly]=\"nzCheckStrictly\"\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\n      (nzClick)=\"nzTreeClick.emit($event)\"\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\"\n      (nzSearchValueChange)=\"setSearchValues($event)\">\n    </nz-tree>\n    <span *ngIf=\"nzNodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n    </span>\n  </div>\n</ng-template>\n\n<div\n  cdkOverlayOrigin\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"!isMultiple\"\n  [class.ant-select-selection--multiple]=\"isMultiple\"\n  tabindex=\"0\">\n  <ng-container *ngIf=\"!isMultiple\">\n    <div class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n\n      <div\n        *ngIf=\"selectedNodes.length === 1\"\n        class=\"ant-select-selection-selected-value\"\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\n        [ngStyle]=\"selectedValueDisplay\">\n        {{ nzDisplayWith(selectedNodes[0]) }}\n      </div>\n\n      <div\n        *ngIf=\"nzShowSearch\"\n        [style.display]=\"searchDisplay\"\n        class=\"ant-select-search ant-select-search--inline\">\n        <div class=\"ant-select-search__field__wrap\">\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isMultiple\">\n    <ul class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : nzMaxTagCount; trackBy:trackValue\">\n        <li\n          [@zoomMotion]\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [attr.title]=\"nzDisplayWith(node)\"\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\n          class=\"ant-select-selection__choice\">\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\n                 (mousedown)=\"$event.preventDefault()\"\n                 (click)=\"removeSelected(node, true, $event)\">\n                 <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\"></i>\n               </span>\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\n        </li>\n      </ng-container>\n      <li [@zoomMotion]\n        *ngIf=\"selectedNodes.length > nzMaxTagCount\"\n        class=\"ant-select-selection__choice\">\n        <div class=\"ant-select-selection__choice__content\">\n          <ng-container *ngIf=\"nzMaxTagPlaceholder\">\n            <ng-template\n              [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: nzMaxTagCount}\">\n            </ng-template>\n          </ng-container>\n          <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\n            + {{ selectedNodes.length - nzMaxTagCount }} ...\n          </ng-container>\n        </div>\n      </li>\n      <li class=\"ant-select-search ant-select-search--inline\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </li>\n    </ul>\n  </ng-container>\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\"\n    (mousedown)=\"$event.preventDefault()\"\n    (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" class=\"ant-select-clear-icon\" nzTheme=\"fill\"></i>\n  </span>\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\"></i>\n  </span>\n</div>",
                        providers: [
                            NzTreeSelectService,
                            {
                                provide: core$1.NzTreeHigherOrderServiceToken,
                                useFactory: higherOrderServiceFactory,
                                deps: [[new core.Self(), core.Injector]]
                            },
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzTreeSelectComponent; })),
                                multi: true
                            }
                        ],
                        host: {
                            '[class.ant-select-lg]': 'nzSize==="large"',
                            '[class.ant-select-sm]': 'nzSize==="small"',
                            '[class.ant-select-enabled]': '!nzDisabled',
                            '[class.ant-select-disabled]': 'nzDisabled',
                            '[class.ant-select-allow-clear]': 'nzAllowClear',
                            '[class.ant-select-open]': 'nzOpen',
                            '(click)': 'trigger()'
                        },
                        styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzTreeSelectComponent.ctorParameters = function () { return [
            { type: NzTreeSelectService },
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzTreeSelectComponent.propDecorators = {
            nzAllowClear: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzShowLine: [{ type: core.Input }],
            nzDropdownMatchSelectWidth: [{ type: core.Input }],
            nzCheckable: [{ type: core.Input }],
            nzHideUnMatched: [{ type: core.Input }],
            nzShowIcon: [{ type: core.Input }],
            nzShowSearch: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzAsyncData: [{ type: core.Input }],
            nzMultiple: [{ type: core.Input }],
            nzDefaultExpandAll: [{ type: core.Input }],
            nzCheckStrictly: [{ type: core.Input }],
            nzExpandedIcon: [{ type: core.Input }],
            nzNotFoundContent: [{ type: core.Input }],
            nzNodes: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzDropdownStyle: [{ type: core.Input }],
            nzDefaultExpandedKeys: [{ type: core.Input }],
            nzExpandedKeys: [{ type: core.Input }],
            nzDisplayWith: [{ type: core.Input }],
            nzMaxTagCount: [{ type: core.Input }],
            nzMaxTagPlaceholder: [{ type: core.Input }],
            nzOpenChange: [{ type: core.Output }],
            nzCleared: [{ type: core.Output }],
            nzRemoved: [{ type: core.Output }],
            nzExpandChange: [{ type: core.Output }],
            nzTreeClick: [{ type: core.Output }],
            nzTreeCheckBoxChange: [{ type: core.Output }],
            inputElement: [{ type: core.ViewChild, args: ['inputElement', { static: false },] }],
            treeRef: [{ type: core.ViewChild, args: ['treeRef', { static: false },] }],
            cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin, { static: true },] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
            nzTreeTemplate: [{ type: core.Input }],
            nzTreeTemplateChild: [{ type: core.ContentChild, args: ['nzTreeTemplate', { static: true },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzTreeSelectComponent.prototype, "nzSize", void 0);
        return NzTreeSelectComponent;
    }(core$1.NzTreeBase));
    if (false) {
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzAllowClear;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzShowExpand;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzShowLine;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDropdownMatchSelectWidth;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzCheckable;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzHideUnMatched;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzShowIcon;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzShowSearch;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDisabled;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzAsyncData;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzMultiple;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDefaultExpandAll;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzCheckStrictly;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzExpandedIcon;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzNotFoundContent;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzNodes;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzOpen;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzSize;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDropdownStyle;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDisplayWith;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzMaxTagCount;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzMaxTagPlaceholder;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzOpenChange;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzCleared;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzRemoved;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzExpandChange;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzTreeClick;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzTreeCheckBoxChange;
        /** @type {?} */
        NzTreeSelectComponent.prototype.inputElement;
        /** @type {?} */
        NzTreeSelectComponent.prototype.treeRef;
        /** @type {?} */
        NzTreeSelectComponent.prototype.cdkOverlayOrigin;
        /** @type {?} */
        NzTreeSelectComponent.prototype.cdkConnectedOverlay;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzTreeTemplate;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzTreeTemplateChild;
        /** @type {?} */
        NzTreeSelectComponent.prototype.triggerWidth;
        /** @type {?} */
        NzTreeSelectComponent.prototype.isComposing;
        /** @type {?} */
        NzTreeSelectComponent.prototype.isDestroy;
        /** @type {?} */
        NzTreeSelectComponent.prototype.isNotFound;
        /** @type {?} */
        NzTreeSelectComponent.prototype.inputValue;
        /** @type {?} */
        NzTreeSelectComponent.prototype.dropDownPosition;
        /** @type {?} */
        NzTreeSelectComponent.prototype.selectionChangeSubscription;
        /** @type {?} */
        NzTreeSelectComponent.prototype.selectedNodes;
        /** @type {?} */
        NzTreeSelectComponent.prototype.expandedKeys;
        /** @type {?} */
        NzTreeSelectComponent.prototype.value;
        /** @type {?} */
        NzTreeSelectComponent.prototype.onChange;
        /** @type {?} */
        NzTreeSelectComponent.prototype.onTouched;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzTreeSelectComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTreeSelectComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTreeSelectComponent.prototype.elementRef;
        /** @type {?} */
        NzTreeSelectComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeSelectModule = /** @class */ (function () {
        function NzTreeSelectModule() {
        }
        NzTreeSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            overlay.OverlayModule,
                            forms.FormsModule,
                            tree.NzTreeModule,
                            icon.NzIconModule,
                            empty.NzEmptyModule,
                            core$1.NzOverlayModule,
                            core$1.NzNoAnimationModule
                        ],
                        declarations: [NzTreeSelectComponent],
                        exports: [NzTreeSelectComponent]
                    },] }
        ];
        return NzTreeSelectModule;
    }());

    exports.NzTreeSelectComponent = NzTreeSelectComponent;
    exports.NzTreeSelectModule = NzTreeSelectModule;
    exports.NzTreeSelectService = NzTreeSelectService;
    exports.higherOrderServiceFactory = higherOrderServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tree-select.umd.js.map
