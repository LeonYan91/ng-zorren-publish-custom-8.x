(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/forms'), require('@angular/common'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/select', ['exports', '@angular/core', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/forms', '@angular/common', 'ng-zorro-antd/empty', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].select = {}), global.ng.core, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.forms, global.ng.common, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, core$1, rxjs, operators, keycodes, overlay, platform, forms, common, empty, i18n, icon) { 'use strict';

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
    var NzOptionComponent = /** @class */ (function () {
        function NzOptionComponent() {
            this.changes = new rxjs.Subject();
            this.nzDisabled = false;
            this.nzHide = false;
            this.nzCustomContent = false;
        }
        /**
         * @return {?}
         */
        NzOptionComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.changes.next();
        };
        NzOptionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-option',
                        exportAs: 'nzOption',
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
                    }] }
        ];
        NzOptionComponent.propDecorators = {
            template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: false },] }],
            nzLabel: [{ type: core.Input }],
            nzValue: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzHide: [{ type: core.Input }],
            nzCustomContent: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzOptionComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzOptionComponent.prototype, "nzHide", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzOptionComponent.prototype, "nzCustomContent", void 0);
        return NzOptionComponent;
    }());
    if (false) {
        /** @type {?} */
        NzOptionComponent.prototype.changes;
        /** @type {?} */
        NzOptionComponent.prototype.template;
        /** @type {?} */
        NzOptionComponent.prototype.nzLabel;
        /** @type {?} */
        NzOptionComponent.prototype.nzValue;
        /** @type {?} */
        NzOptionComponent.prototype.nzDisabled;
        /** @type {?} */
        NzOptionComponent.prototype.nzHide;
        /** @type {?} */
        NzOptionComponent.prototype.nzCustomContent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionGroupComponent = /** @class */ (function () {
        function NzOptionGroupComponent() {
            this.isLabelString = false;
        }
        Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
            get: /**
             * @return {?}
             */
            function () {
                return this.label;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.label = value;
                this.isLabelString = !(this.nzLabel instanceof core.TemplateRef);
            },
            enumerable: true,
            configurable: true
        });
        NzOptionGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-option-group',
                        exportAs: 'nzOptionGroup',
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        NzOptionGroupComponent.propDecorators = {
            listOfNzOptionComponent: [{ type: core.ContentChildren, args: [NzOptionComponent,] }],
            nzLabel: [{ type: core.Input }]
        };
        return NzOptionGroupComponent;
    }());
    if (false) {
        /** @type {?} */
        NzOptionGroupComponent.prototype.isLabelString;
        /** @type {?} */
        NzOptionGroupComponent.prototype.label;
        /** @type {?} */
        NzOptionGroupComponent.prototype.listOfNzOptionComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFilterOptionPipe = /** @class */ (function () {
        function NzFilterOptionPipe() {
        }
        /**
         * @param {?} options
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        NzFilterOptionPipe.prototype.transform = /**
         * @param {?} options
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        function (options, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return (/** @type {?} */ (options));
            }
            else {
                return ((/** @type {?} */ (options))).filter((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return filterOption(searchValue, o); }));
            }
        };
        NzFilterOptionPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'nzFilterOption' },] }
        ];
        return NzFilterOptionPipe;
    }());
    var NzFilterGroupOptionPipe = /** @class */ (function () {
        function NzFilterGroupOptionPipe() {
        }
        /**
         * @param {?} groups
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        NzFilterGroupOptionPipe.prototype.transform = /**
         * @param {?} groups
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        function (groups, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return groups;
            }
            else {
                return ((/** @type {?} */ (groups))).filter((/**
                 * @param {?} g
                 * @return {?}
                 */
                function (g) {
                    return g.listOfNzOptionComponent.some((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) { return filterOption(searchValue, o); }));
                }));
            }
        };
        NzFilterGroupOptionPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'nzFilterGroupOption' },] }
        ];
        return NzFilterGroupOptionPipe;
    }());
    /**
     * @param {?} searchValue
     * @param {?} option
     * @return {?}
     */
    function defaultFilterOption(searchValue, option) {
        if (option && option.nzLabel) {
            return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectService = /** @class */ (function () {
        function NzSelectService() {
            var _this = this;
            /**
             * Input params *
             */
            this.autoClearSearchValue = true;
            this.serverSearch = false;
            this.filterOption = defaultFilterOption;
            this.mode = 'default';
            this.maxMultipleCount = Infinity;
            this.disabled = false;
            // tslint:disable-next-line:no-any
            this.compareWith = (/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            function (o1, o2) { return o1 === o2; });
            /**
             * selectedValueChanged should emit ngModelChange or not *
             */
            // tslint:disable-next-line:no-any
            this.listOfSelectedValueWithEmit$ = new rxjs.BehaviorSubject({
                value: [],
                emit: false
            });
            /**
             * ContentChildren Change *
             */
            this.mapOfTemplateOption$ = new rxjs.BehaviorSubject({
                listOfNzOptionComponent: [],
                listOfNzOptionGroupComponent: []
            });
            /**
             * searchValue Change *
             */
            this.searchValueRaw$ = new rxjs.BehaviorSubject('');
            this.listOfFilteredOption = [];
            this.openRaw$ = new rxjs.Subject();
            this.checkRaw$ = new rxjs.Subject();
            this.open = false;
            this.clearInput$ = new rxjs.Subject();
            this.searchValue = '';
            this.isShowNotFound = false;
            /**
             * animation event *
             */
            this.animationEvent$ = new rxjs.Subject();
            /**
             * open event *
             */
            this.open$ = this.openRaw$.pipe(operators.distinctUntilChanged());
            this.activatedOption$ = new rxjs.ReplaySubject(1);
            this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.value; })));
            this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(operators.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.emit; })), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var selectedList = data.value;
                /** @type {?} */
                var modelValue = null;
                if (_this.isSingleMode) {
                    if (selectedList.length) {
                        modelValue = selectedList[0];
                    }
                }
                else {
                    modelValue = selectedList;
                }
                return modelValue;
            })));
            this.searchValue$ = this.searchValueRaw$.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.share(), operators.tap((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.searchValue = value;
                if (value) {
                    _this.updateActivatedOption(_this.listOfFilteredOption[0]);
                }
                _this.updateListOfFilteredOption();
            })));
            // tslint:disable-next-line:no-any
            this.listOfSelectedValue = [];
            /**
             * flat ViewChildren *
             */
            this.listOfTemplateOption = [];
            /**
             * tag option *
             */
            this.listOfTagOption = [];
            /**
             * tag option concat template option *
             */
            this.listOfTagAndTemplateOption = [];
            /**
             * ViewChildren *
             */
            this.listOfNzOptionComponent = [];
            this.listOfNzOptionGroupComponent = [];
            /**
             * display in top control *
             */
            this.listOfCachedSelectedOption = [];
            /**
             * selected value or ViewChildren change *
             */
            this.valueOrOption$ = rxjs.combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(operators.tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                var _a = __read(data, 2), listOfSelectedValue = _a[0], mapOfTemplateOption = _a[1];
                _this.listOfSelectedValue = listOfSelectedValue;
                _this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
                _this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
                _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce((/**
                 * @param {?} pre
                 * @param {?} cur
                 * @return {?}
                 */
                function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }), (/** @type {?} */ ([]))));
                _this.updateListOfTagOption();
                _this.updateListOfFilteredOption();
                _this.resetActivatedOptionIfNeeded();
                _this.updateListOfCachedOption();
            })), operators.share());
            this.check$ = rxjs.merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(operators.share());
        }
        /**
         * @param {?} option
         * @return {?}
         */
        NzSelectService.prototype.clickOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            var _this = this;
            /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
            if (!option.nzDisabled) {
                this.updateActivatedOption(option);
                /** @type {?} */
                var listOfSelectedValue = __spread(this.listOfSelectedValue);
                if (this.isMultipleOrTags) {
                    /** @type {?} */
                    var targetValue = listOfSelectedValue.find((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) { return _this.compareWith(o, option.nzValue); }));
                    if (core$1.isNotNil(targetValue)) {
                        listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                        this.updateListOfSelectedValue(listOfSelectedValue, true);
                    }
                    else if (listOfSelectedValue.length < this.maxMultipleCount) {
                        listOfSelectedValue.push(option.nzValue);
                        this.updateListOfSelectedValue(listOfSelectedValue, true);
                    }
                }
                else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                    listOfSelectedValue = [option.nzValue];
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                if (this.isSingleMode) {
                    this.setOpenState(false);
                }
                else if (this.autoClearSearchValue) {
                    this.clearInput();
                }
            }
        };
        /**
         * @return {?}
         */
        NzSelectService.prototype.updateListOfCachedOption = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.isSingleMode) {
                /** @type {?} */
                var selectedOption = this.listOfTemplateOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) {
                    return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]);
                }));
                if (!core$1.isNil(selectedOption)) {
                    this.listOfCachedSelectedOption = [selectedOption];
                }
            }
            else {
                /** @type {?} */
                var listOfCachedSelectedOption_1 = [];
                this.listOfSelectedValue.forEach((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
                    /** @type {?} */
                    var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                    /** @type {?} */
                    var option = listOfMixedOption.find((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) { return _this.compareWith(o.nzValue, v); }));
                    if (option) {
                        listOfCachedSelectedOption_1.push(option);
                    }
                }));
                this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
            }
        };
        /**
         * @return {?}
         */
        NzSelectService.prototype.updateListOfTagOption = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.isTagsMode) {
                /** @type {?} */
                var listOfMissValue = this.listOfSelectedValue.filter((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return !_this.listOfTemplateOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.nzValue, value); })); }));
                this.listOfTagOption = listOfMissValue.map((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    /** @type {?} */
                    var cachedOption = _this.listOfCachedSelectedOption.find((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) { return _this.compareWith(o.nzValue, value); }));
                    if (cachedOption) {
                        return cachedOption;
                    }
                    else {
                        /** @type {?} */
                        var nzOptionComponent = new NzOptionComponent();
                        nzOptionComponent.nzValue = value;
                        nzOptionComponent.nzLabel = value;
                        return nzOptionComponent;
                    }
                }));
                this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
            }
            else {
                this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
            }
        };
        /**
         * @return {?}
         */
        NzSelectService.prototype.updateAddTagOption = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var isMatch = this.listOfTagAndTemplateOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzLabel === _this.searchValue; }));
            if (this.isTagsMode && this.searchValue && !isMatch) {
                /** @type {?} */
                var option = new NzOptionComponent();
                option.nzValue = this.searchValue;
                option.nzLabel = this.searchValue;
                this.addedTagOption = option;
                this.updateActivatedOption(option);
            }
            else {
                this.addedTagOption = null;
            }
        };
        /**
         * @return {?}
         */
        NzSelectService.prototype.updateListOfFilteredOption = /**
         * @return {?}
         */
        function () {
            this.updateAddTagOption();
            /** @type {?} */
            var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
            this.listOfFilteredOption = this.addedTagOption
                ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
            this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
        };
        /**
         * @return {?}
         */
        NzSelectService.prototype.clearInput = /**
         * @return {?}
         */
        function () {
            this.clearInput$.next();
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        NzSelectService.prototype.updateListOfSelectedValue = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        function (value, emit) {
            this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
        };
        /**
         * @param {?} option
         * @return {?}
         */
        NzSelectService.prototype.updateActivatedOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            this.activatedOption$.next(option);
            this.activatedOption = option;
        };
        /**
         * @param {?} inputValue
         * @param {?} tokenSeparators
         * @return {?}
         */
        NzSelectService.prototype.tokenSeparate = /**
         * @param {?} inputValue
         * @param {?} tokenSeparators
         * @return {?}
         */
        function (inputValue, tokenSeparators) {
            /** auto tokenSeparators **/
            if (inputValue &&
                inputValue.length &&
                tokenSeparators.length &&
                this.isMultipleOrTags &&
                this.includesSeparators(inputValue, tokenSeparators)) {
                /** @type {?} */
                var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
                this.updateSelectedValueByLabelList(listOfLabel);
                this.clearInput();
            }
        };
        /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        NzSelectService.prototype.includesSeparators = /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        function (str, separators) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        NzSelectService.prototype.splitBySeparators = /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        function (str, separators) {
            /** @type {?} */
            var reg = new RegExp("[" + separators.join() + "]");
            /** @type {?} */
            var array = ((/** @type {?} */ (str))).split(reg).filter((/**
             * @param {?} token
             * @return {?}
             */
            function (token) { return token; }));
            return Array.from(new Set(array));
        };
        /**
         * @return {?}
         */
        NzSelectService.prototype.resetActivatedOptionIfNeeded = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var resetActivatedOption = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var activatedOption = _this.listOfFilteredOption.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]);
                }));
                _this.updateActivatedOption(activatedOption || null);
            });
            if (this.activatedOption) {
                if (!this.listOfFilteredOption.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item.nzValue, (/** @type {?} */ (_this.activatedOption)).nzValue); })) ||
                    !this.listOfSelectedValue.find((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.activatedOption)).nzValue); }))) {
                    resetActivatedOption();
                }
            }
            else {
                resetActivatedOption();
            }
        };
        /**
         * @param {?} listOfNzOptionComponent
         * @param {?} listOfNzOptionGroupComponent
         * @return {?}
         */
        NzSelectService.prototype.updateTemplateOption = /**
         * @param {?} listOfNzOptionComponent
         * @param {?} listOfNzOptionGroupComponent
         * @return {?}
         */
        function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
            this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSelectService.prototype.updateSearchValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.searchValueRaw$.next(value);
        };
        /**
         * @param {?} listOfLabel
         * @return {?}
         */
        NzSelectService.prototype.updateSelectedValueByLabelList = /**
         * @param {?} listOfLabel
         * @return {?}
         */
        function (listOfLabel) {
            var _this = this;
            /** @type {?} */
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            /** @type {?} */
            var listOfMatchOptionValue = this.listOfTagAndTemplateOption
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; }))
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzValue; }))
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !core$1.isNotNil(_this.listOfSelectedValue.find((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return _this.compareWith(v, item); }))); }));
            if (this.isMultipleMode) {
                this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
            }
            else {
                /** @type {?} */
                var listOfUnMatchOptionValue = listOfLabel.filter((/**
                 * @param {?} label
                 * @return {?}
                 */
                function (label) { return _this.listOfTagAndTemplateOption.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.nzLabel; })).indexOf(label) === -1; }));
                this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzSelectService.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            if (this.disabled) {
                return;
            }
            /** @type {?} */
            var keyCode = e.keyCode;
            /** @type {?} */
            var eventTarget = (/** @type {?} */ (e.target));
            /** @type {?} */
            var listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !item.nzDisabled && !item.nzHide; }));
            /** @type {?} */
            var activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item === _this.activatedOption; }));
            switch (keyCode) {
                case keycodes.UP_ARROW:
                    e.preventDefault();
                    /** @type {?} */
                    var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                    break;
                case keycodes.DOWN_ARROW:
                    e.preventDefault();
                    /** @type {?} */
                    var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.ENTER:
                    e.preventDefault();
                    if (this.open) {
                        if (this.activatedOption && !this.activatedOption.nzDisabled) {
                            this.clickOption(this.activatedOption);
                        }
                    }
                    else {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.BACKSPACE:
                    if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                        e.preventDefault();
                        this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                    }
                    break;
                case keycodes.SPACE:
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                        e.preventDefault();
                    }
                    break;
                case keycodes.TAB:
                    this.setOpenState(false);
                    break;
            }
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} option
         * @return {?}
         */
        NzSelectService.prototype.removeValueFormSelected = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            var _this = this;
            if (this.disabled || option.nzDisabled) {
                return;
            }
            /** @type {?} */
            var listOfSelectedValue = this.listOfSelectedValue.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !_this.compareWith(item, option.nzValue); }));
            this.updateListOfSelectedValue(listOfSelectedValue, true);
            this.clearInput();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSelectService.prototype.setOpenState = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.openRaw$.next(value);
            this.open = value;
        };
        /**
         * @return {?}
         */
        NzSelectService.prototype.check = /**
         * @return {?}
         */
        function () {
            this.checkRaw$.next();
        };
        Object.defineProperty(NzSelectService.prototype, "isSingleMode", {
            get: /**
             * @return {?}
             */
            function () {
                return this.mode === 'default';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isTagsMode", {
            get: /**
             * @return {?}
             */
            function () {
                return this.mode === 'tags';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isMultipleMode", {
            get: /**
             * @return {?}
             */
            function () {
                return this.mode === 'multiple';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isMultipleOrTags", {
            get: /**
             * @return {?}
             */
            function () {
                return this.mode === 'tags' || this.mode === 'multiple';
            },
            enumerable: true,
            configurable: true
        });
        NzSelectService.decorators = [
            { type: core.Injectable }
        ];
        return NzSelectService;
    }());
    if (false) {
        /**
         * Input params *
         * @type {?}
         */
        NzSelectService.prototype.autoClearSearchValue;
        /** @type {?} */
        NzSelectService.prototype.serverSearch;
        /** @type {?} */
        NzSelectService.prototype.filterOption;
        /** @type {?} */
        NzSelectService.prototype.mode;
        /** @type {?} */
        NzSelectService.prototype.maxMultipleCount;
        /** @type {?} */
        NzSelectService.prototype.disabled;
        /** @type {?} */
        NzSelectService.prototype.compareWith;
        /**
         * selectedValueChanged should emit ngModelChange or not *
         * @type {?}
         * @private
         */
        NzSelectService.prototype.listOfSelectedValueWithEmit$;
        /**
         * ContentChildren Change *
         * @type {?}
         * @private
         */
        NzSelectService.prototype.mapOfTemplateOption$;
        /**
         * searchValue Change *
         * @type {?}
         * @private
         */
        NzSelectService.prototype.searchValueRaw$;
        /**
         * @type {?}
         * @private
         */
        NzSelectService.prototype.listOfFilteredOption;
        /**
         * @type {?}
         * @private
         */
        NzSelectService.prototype.openRaw$;
        /**
         * @type {?}
         * @private
         */
        NzSelectService.prototype.checkRaw$;
        /**
         * @type {?}
         * @private
         */
        NzSelectService.prototype.open;
        /** @type {?} */
        NzSelectService.prototype.clearInput$;
        /** @type {?} */
        NzSelectService.prototype.searchValue;
        /** @type {?} */
        NzSelectService.prototype.isShowNotFound;
        /**
         * animation event *
         * @type {?}
         */
        NzSelectService.prototype.animationEvent$;
        /**
         * open event *
         * @type {?}
         */
        NzSelectService.prototype.open$;
        /** @type {?} */
        NzSelectService.prototype.activatedOption;
        /** @type {?} */
        NzSelectService.prototype.activatedOption$;
        /** @type {?} */
        NzSelectService.prototype.listOfSelectedValue$;
        /** @type {?} */
        NzSelectService.prototype.modelChange$;
        /** @type {?} */
        NzSelectService.prototype.searchValue$;
        /** @type {?} */
        NzSelectService.prototype.listOfSelectedValue;
        /**
         * flat ViewChildren *
         * @type {?}
         */
        NzSelectService.prototype.listOfTemplateOption;
        /**
         * tag option *
         * @type {?}
         */
        NzSelectService.prototype.listOfTagOption;
        /**
         * tag option concat template option *
         * @type {?}
         */
        NzSelectService.prototype.listOfTagAndTemplateOption;
        /**
         * ViewChildren *
         * @type {?}
         */
        NzSelectService.prototype.listOfNzOptionComponent;
        /** @type {?} */
        NzSelectService.prototype.listOfNzOptionGroupComponent;
        /**
         * click or enter add tag option *
         * @type {?}
         */
        NzSelectService.prototype.addedTagOption;
        /**
         * display in top control *
         * @type {?}
         */
        NzSelectService.prototype.listOfCachedSelectedOption;
        /**
         * selected value or ViewChildren change *
         * @type {?}
         */
        NzSelectService.prototype.valueOrOption$;
        /** @type {?} */
        NzSelectService.prototype.check$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionLiComponent = /** @class */ (function () {
        function NzOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
            this.elementRef = elementRef;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.el = this.elementRef.nativeElement;
            this.selected = false;
            this.active = false;
            this.destroy$ = new rxjs.Subject();
            renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
        }
        /**
         * @return {?}
         */
        NzOptionLiComponent.prototype.clickOption = /**
         * @return {?}
         */
        function () {
            this.nzSelectService.clickOption(this.nzOption);
        };
        /**
         * @return {?}
         */
        NzOptionLiComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.nzSelectService.listOfSelectedValue$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.selected = core$1.isNotNil(list.find((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) { return _this.nzSelectService.compareWith(v, _this.nzOption.nzValue); })));
                _this.cdr.markForCheck();
            }));
            this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (option) {
                    _this.active = _this.nzSelectService.compareWith(option.nzValue, _this.nzOption.nzValue);
                }
                else {
                    _this.active = false;
                }
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzOptionLiComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzOptionLiComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[nz-option-li]',
                        exportAs: 'nzOptionLi',
                        template: "<ng-container *ngIf=\"!nzOption.nzCustomContent; else nzOption.template\">\n  {{nzOption.nzLabel}}\n</ng-container>\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\n  <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!nzMenuItemSelectedIcon; else nzMenuItemSelectedIcon\"></i>\n</ng-container>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                            '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                            '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                            '[attr.unselectable]': '"unselectable"',
                            '[style.user-select]': '"none"',
                            '(click)': 'clickOption()',
                            '(mousedown)': '$event.preventDefault()'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzOptionLiComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: NzSelectService },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        NzOptionLiComponent.propDecorators = {
            nzOption: [{ type: core.Input }],
            nzMenuItemSelectedIcon: [{ type: core.Input }]
        };
        return NzOptionLiComponent;
    }());
    if (false) {
        /** @type {?} */
        NzOptionLiComponent.prototype.el;
        /** @type {?} */
        NzOptionLiComponent.prototype.selected;
        /** @type {?} */
        NzOptionLiComponent.prototype.active;
        /** @type {?} */
        NzOptionLiComponent.prototype.destroy$;
        /** @type {?} */
        NzOptionLiComponent.prototype.nzOption;
        /** @type {?} */
        NzOptionLiComponent.prototype.nzMenuItemSelectedIcon;
        /**
         * @type {?}
         * @private
         */
        NzOptionLiComponent.prototype.elementRef;
        /** @type {?} */
        NzOptionLiComponent.prototype.nzSelectService;
        /**
         * @type {?}
         * @private
         */
        NzOptionLiComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionContainerComponent = /** @class */ (function () {
        function NzOptionContainerComponent(nzSelectService, cdr, ngZone) {
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.destroy$ = new rxjs.Subject();
            this.lastScrollTop = 0;
            this.nzScrollToBottom = new core.EventEmitter();
        }
        /**
         * @param {?} option
         * @return {?}
         */
        NzOptionContainerComponent.prototype.scrollIntoViewIfNeeded = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            var _this = this;
            // delay after open
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                    /** @type {?} */
                    var targetOption = _this.listOfNzOptionLiComponent.find((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) {
                        return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue);
                    }));
                    // tslint:disable:no-any
                    if (targetOption && targetOption.el && ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded) {
                        ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded(false);
                    }
                }
            }));
        };
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzOptionContainerComponent.prototype.trackLabel = /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return option.nzLabel;
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzOptionContainerComponent.prototype.trackValue = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return option.nzValue;
        };
        /**
         * @return {?}
         */
        NzOptionContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                _this.scrollIntoViewIfNeeded((/** @type {?} */ (option)));
            }));
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var ul = _this.dropdownUl.nativeElement;
                rxjs.fromEvent(ul, 'scroll')
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                        _this.lastScrollTop = ul.scrollTop;
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.nzScrollToBottom.emit();
                        }));
                    }
                }));
            }));
        };
        /**
         * @return {?}
         */
        NzOptionContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.listOfNzOptionLiComponent.changes
                .pipe(operators.map((/**
             * @param {?} list
             * @return {?}
             */
            function (list) { return list.length; })), operators.pairwise(), operators.filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), before = _b[0], after = _b[1];
                return after < before;
            })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return (_this.lastScrollTop = 0); }));
        };
        /**
         * @return {?}
         */
        NzOptionContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzOptionContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[nz-option-container]',
                        exportAs: 'nzOptionContainer',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        template: "<ul #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  tabindex=\"0\">\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\n    nz-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n  </li>\n  <li nz-option-li\n    *ngIf=\"nzSelectService.addedTagOption\"\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n    [nzOption]=\"nzSelectService.addedTagOption\">\n  </li>\n  <ng-container *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\">\n    <li nz-option-li\n      *ngIf=\"!option.nzHide\"\n      [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n      [nzOption]=\"option\">\n    </li>\n  </ng-container>\n  <li class=\"ant-select-dropdown-menu-item-group\"\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\n      <ng-container *nzStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <ng-container *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\">\n        <li nz-option-li\n          *ngIf=\"!option.nzHide\"\n          [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n          [nzOption]=\"option\">\n        </li>\n      </ng-container>\n    </ul>\n  </li>\n  <li nz-option-li\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n    [nzOption]=\"option\">\n  </li>\n</ul>\n"
                    }] }
        ];
        /** @nocollapse */
        NzOptionContainerComponent.ctorParameters = function () { return [
            { type: NzSelectService },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        NzOptionContainerComponent.propDecorators = {
            listOfNzOptionLiComponent: [{ type: core.ViewChildren, args: [NzOptionLiComponent,] }],
            dropdownUl: [{ type: core.ViewChild, args: ['dropdownUl', { static: true },] }],
            nzNotFoundContent: [{ type: core.Input }],
            nzMenuItemSelectedIcon: [{ type: core.Input }],
            nzScrollToBottom: [{ type: core.Output }]
        };
        return NzOptionContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzOptionContainerComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzOptionContainerComponent.prototype.lastScrollTop;
        /** @type {?} */
        NzOptionContainerComponent.prototype.listOfNzOptionLiComponent;
        /** @type {?} */
        NzOptionContainerComponent.prototype.dropdownUl;
        /** @type {?} */
        NzOptionContainerComponent.prototype.nzNotFoundContent;
        /** @type {?} */
        NzOptionContainerComponent.prototype.nzMenuItemSelectedIcon;
        /** @type {?} */
        NzOptionContainerComponent.prototype.nzScrollToBottom;
        /** @type {?} */
        NzOptionContainerComponent.prototype.nzSelectService;
        /**
         * @type {?}
         * @private
         */
        NzOptionContainerComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzOptionContainerComponent.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectTopControlComponent = /** @class */ (function () {
        function NzSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
            this.renderer = renderer;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.isComposing = false;
            this.destroy$ = new rxjs.Subject();
            this.nzShowSearch = false;
            this.nzOpen = false;
            this.nzAllowClear = false;
            this.nzShowArrow = true;
            this.nzLoading = false;
            this.nzTokenSeparators = [];
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.onClearSelection = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            this.nzSelectService.updateListOfSelectedValue([], true);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.setInputValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
            if (this.inputDOM && !value) {
                this.inputDOM.value = value;
            }
            this.inputValue = value;
            this.updateWidth();
            this.nzSelectService.updateSearchValue(value);
            this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
        };
        Object.defineProperty(NzSelectTopControlComponent.prototype, "mirrorDOM", {
            get: /**
             * @return {?}
             */
            function () {
                return this.mirrorElement && this.mirrorElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectTopControlComponent.prototype, "inputDOM", {
            get: /**
             * @return {?}
             */
            function () {
                return this.inputElement && this.inputElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
            get: /**
             * @return {?}
             */
            function () {
                return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueStyle", {
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
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.trackValue = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return option.nzValue;
        };
        /**
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.updateWidth = /**
         * @return {?}
         */
        function () {
            if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
                this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
                this.renderer.removeStyle(this.inputDOM, 'width');
                this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
            }
            else if (this.inputDOM) {
                this.renderer.removeStyle(this.inputDOM, 'width');
                this.mirrorDOM.innerText = '';
            }
        };
        /**
         * @param {?} option
         * @param {?} e
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.removeSelectedValue = /**
         * @param {?} option
         * @param {?} e
         * @return {?}
         */
        function (option, e) {
            this.nzSelectService.removeValueFormSelected(option);
            e.stopPropagation();
        };
        /**
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.animationEnd = /**
         * @return {?}
         */
        function () {
            this.nzSelectService.animationEvent$.next();
        };
        /**
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} open
             * @return {?}
             */
            function (open) {
                if (_this.inputElement && open) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.inputDOM.focus(); }));
                }
            }));
            this.nzSelectService.clearInput$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.setInputValue('');
            }));
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzSelectTopControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[nz-select-top-control]',
                        exportAs: 'nzSelectTopControl',
                        preserveWhitespaces: false,
                        animations: [core$1.zoomMotion],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<ng-template #inputTemplate>\n  <input #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzSelectService.disabled\">\n  <span #mirrorElement class=\"ant-select-search__field__mirror\"></span>\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"nzPlaceHolder\"\n    nz-select-unselectable\n    [style.display]=\"placeHolderDisplay\"\n    class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\n  <!--single mode-->\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\n    <!--selected label-->\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\n      class=\"ant-select-selection-selected-value\"\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.nzLabel\"\n      [ngStyle]=\"selectedValueStyle\">\n      <ng-container *nzStringTemplateOutlet=\"nzCustomTemplate; context: { $implicit: nzSelectService.listOfCachedSelectedOption[0] }\">\n        <ng-container>{{ nzSelectService.listOfCachedSelectedOption[0]?.nzLabel }}</ng-container>\n      </ng-container>\n    </div>\n    <!--show search-->\n    <div *ngIf=\"nzShowSearch\"\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"nzOpen ? 'block' : 'none'\">\n      <div class=\"ant-select-search__field__wrap\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </div>\n    </div>\n  </ng-container>\n  <!--multiple or tags mode-->\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : nzMaxTagCount;trackBy:trackValue; let index = index\">\n      <li [@zoomMotion]\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [attr.title]=\"option.nzLabel\"\n        [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\"\n        (@zoomMotion.done)=\"animationEnd()\"\n        class=\"ant-select-selection__choice\">\n        <ng-container *nzStringTemplateOutlet=\"nzCustomTemplate; context:{ $implicit: nzSelectService.listOfCachedSelectedOption[index] }\">\n          <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\n        </ng-container>\n        <span *ngIf=\"!option.nzDisabled\"\n          class=\"ant-select-selection__choice__remove\"\n          (mousedown)=\"$event.preventDefault()\"\n          (click)=\"removeSelectedValue(option, $event)\">\n          <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!nzRemoveIcon; else nzRemoveIcon\"></i>\n        </span>\n      </li>\n    </ng-container>\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > nzMaxTagCount\"\n      [@zoomMotion]\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      (@zoomMotion.done)=\"animationEnd()\"\n      class=\"ant-select-selection__choice\">\n      <div class=\"ant-select-selection__choice__content\">\n        <ng-container *ngIf=\"nzMaxTagPlaceholder\">\n          <ng-template\n            [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: nzMaxTagCount}\">\n          </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\n          + {{ nzSelectService.listOfCachedSelectedOption.length - nzMaxTagCount }} ...\n        </ng-container>\n      </div>\n    </li>\n    <li class=\"ant-select-search ant-select-search--inline\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n    </li>\n  </ul>\n</div>\n<span *ngIf=\"nzAllowClear && nzSelectService.listOfSelectedValue.length\"\n  class=\"ant-select-selection__clear\"\n  nz-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!nzClearIcon; else nzClearIcon\" class=\"ant-select-close-icon\"></i>\n  </span>\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"nzShowArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"nzLoading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\n  </ng-template>\n</span>"
                    }] }
        ];
        /** @nocollapse */
        NzSelectTopControlComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: NzSelectService },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzSelectTopControlComponent.propDecorators = {
            inputElement: [{ type: core.ViewChild, args: ['inputElement', { static: false },] }],
            mirrorElement: [{ type: core.ViewChild, args: ['mirrorElement', { static: false },] }],
            nzShowSearch: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzMaxTagCount: [{ type: core.Input }],
            nzAllowClear: [{ type: core.Input }],
            nzShowArrow: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzCustomTemplate: [{ type: core.Input }],
            nzSuffixIcon: [{ type: core.Input }],
            nzClearIcon: [{ type: core.Input }],
            nzRemoveIcon: [{ type: core.Input }],
            nzMaxTagPlaceholder: [{ type: core.Input }],
            nzTokenSeparators: [{ type: core.Input }]
        };
        return NzSelectTopControlComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSelectTopControlComponent.prototype.inputValue;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.isComposing;
        /**
         * @type {?}
         * @private
         */
        NzSelectTopControlComponent.prototype.destroy$;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.inputElement;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.mirrorElement;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzShowSearch;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzOpen;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzMaxTagCount;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzAllowClear;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzShowArrow;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzLoading;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzCustomTemplate;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzSuffixIcon;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzClearIcon;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzRemoveIcon;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzMaxTagPlaceholder;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzTokenSeparators;
        /**
         * @type {?}
         * @private
         */
        NzSelectTopControlComponent.prototype.renderer;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.nzSelectService;
        /**
         * @type {?}
         * @private
         */
        NzSelectTopControlComponent.prototype.cdr;
        /** @type {?} */
        NzSelectTopControlComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectComponent = /** @class */ (function () {
        function NzSelectComponent(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.platform = platform;
            this.noAnimation = noAnimation;
            this.open = false;
            this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            this.dropDownPosition = 'bottom';
            this._disabled = false;
            this.isInit = false;
            this.destroy$ = new rxjs.Subject();
            this.nzOnSearch = new core.EventEmitter();
            this.nzScrollToBottom = new core.EventEmitter();
            this.nzOpenChange = new core.EventEmitter();
            this.nzBlur = new core.EventEmitter();
            this.nzFocus = new core.EventEmitter();
            this.nzSize = 'default';
            this.nzDropdownMatchSelectWidth = true;
            this.nzAllowClear = false;
            this.nzShowSearch = false;
            this.nzLoading = false;
            this.nzAutoFocus = false;
            this.nzShowArrow = true;
            this.nzTokenSeparators = [];
            renderer.addClass(elementRef.nativeElement, 'ant-select');
        }
        Object.defineProperty(NzSelectComponent.prototype, "nzAutoClearSearchValue", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzSelectService.autoClearSearchValue = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzMaxMultipleCount", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzSelectService.maxMultipleCount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzServerSearch", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzSelectService.serverSearch = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzMode", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzSelectService.mode = value;
                this.nzSelectService.check();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzFilterOption", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzSelectService.filterOption = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "compareWith", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzSelectService.compareWith = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.open = value;
                this.nzSelectService.setOpenState(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._disabled = core$1.toBoolean(value);
                this.nzSelectService.disabled = this._disabled;
                this.nzSelectService.check();
                if (this.nzDisabled && this.isInit) {
                    this.closeDropDown();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzSelectTopControlDOM", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzSelectTopControlElement && this.nzSelectTopControlElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.updateAutoFocus = /**
         * @return {?}
         */
        function () {
            if (this.nzSelectTopControlDOM && this.nzAutoFocus) {
                this.nzSelectTopControlDOM.focus();
            }
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            if (this.nzSelectTopControlDOM) {
                this.nzSelectTopControlDOM.focus();
            }
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.blur = /**
         * @return {?}
         */
        function () {
            if (this.nzSelectTopControlDOM) {
                this.nzSelectTopControlDOM.blur();
            }
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.onFocus = /**
         * @return {?}
         */
        function () {
            this.nzFocus.emit();
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.onBlur = /**
         * @return {?}
         */
        function () {
            this.nzBlur.emit();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NzSelectComponent.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.nzSelectService.onKeyDown(event);
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.toggleDropDown = /**
         * @return {?}
         */
        function () {
            if (!this.nzDisabled) {
                this.nzSelectService.setOpenState(!this.open);
            }
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.closeDropDown = /**
         * @return {?}
         */
        function () {
            this.nzSelectService.setOpenState(false);
        };
        /**
         * @param {?} position
         * @return {?}
         */
        NzSelectComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
         * @return {?}
         */
        function () {
            if (this.platform.isBrowser) {
                this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
            }
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
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
        /** update ngModel -> update listOfSelectedValue **/
        // tslint:disable-next-line:no-any
        /**
         * update ngModel -> update listOfSelectedValue *
         * @param {?} value
         * @return {?}
         */
        // tslint:disable-next-line:no-any
        NzSelectComponent.prototype.writeValue = /**
         * update ngModel -> update listOfSelectedValue *
         * @param {?} value
         * @return {?}
         */
        // tslint:disable-next-line:no-any
        function (value) {
            this.value = value;
            /** @type {?} */
            var listValue = [];
            if (core$1.isNotNil(value)) {
                if (this.nzSelectService.isMultipleOrTags) {
                    listValue = value;
                }
                else {
                    listValue = [value];
                }
            }
            this.nzSelectService.updateListOfSelectedValue(listValue, false);
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzSelectComponent.prototype.registerOnChange = /**
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
        NzSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.nzSelectService.animationEvent$
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.updateCdkConnectedOverlayPositions(); }));
            this.nzSelectService.searchValue$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.nzOnSearch.emit(data);
                _this.updateCdkConnectedOverlayPositions();
            }));
            this.nzSelectService.modelChange$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} modelValue
             * @return {?}
             */
            function (modelValue) {
                if (_this.value !== modelValue) {
                    _this.value = modelValue;
                    _this.onChange(_this.value);
                }
            }));
            this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (_this.open !== value) {
                    _this.nzOpenChange.emit(value);
                }
                if (value) {
                    _this.focus();
                    _this.updateCdkConnectedOverlayStatus();
                }
                else {
                    _this.blur();
                    _this.onTouched();
                }
                _this.open = value;
                _this.nzSelectService.clearInput();
            }));
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.updateCdkConnectedOverlayStatus();
            this.updateAutoFocus();
            this.isInit = true;
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.listOfNzOptionGroupComponent.changes
                .pipe(operators.startWith(true), operators.flatMap((/**
             * @return {?}
             */
            function () {
                return rxjs.merge.apply(void 0, __spread([_this.listOfNzOptionGroupComponent.changes,
                    _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.changes; })), _this.listOfNzOptionGroupComponent.map((/**
                 * @param {?} group
                 * @return {?}
                 */
                function (group) {
                    return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : rxjs.EMPTY;
                })))).pipe(operators.startWith(true));
            })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
            }));
        };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-select',
                        exportAs: 'nzSelect',
                        preserveWhitespaces: false,
                        providers: [
                            NzSelectService,
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzSelectComponent; })),
                                multi: true
                            }
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        animations: [core$1.slideMotion],
                        template: "<div cdkOverlayOrigin\n  nz-select-top-control\n  tabindex=\"0\"\n  class=\"ant-select-selection\"\n  [nzOpen]=\"open\"\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n  [nzMaxTagPlaceholder]=\"nzMaxTagPlaceholder\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzMaxTagCount]=\"nzMaxTagCount\"\n  [nzShowArrow]=\"nzShowArrow\"\n  [nzLoading]=\"nzLoading\"\n  [nzCustomTemplate]=\"nzCustomTemplate\"\n  [nzSuffixIcon]=\"nzSuffixIcon\"\n  [nzClearIcon]=\"nzClearIcon\"\n  [nzRemoveIcon]=\"nzRemoveIcon\"\n  [nzShowSearch]=\"nzShowSearch\"\n  [nzTokenSeparators]=\"nzTokenSeparators\"\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\n  (focus)=\"onFocus()\"\n  (blur)=\"onBlur()\"\n  (keydown)=\"onKeyDown($event)\">\n</div>\nselect demo:\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown();\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"open\">\n  <div\n    class=\"ant-select-dropdown\"\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [nzClassListAdd]=\"[nzDropdownClassName]\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngStyle]=\"nzDropdownStyle\">\n    <div nz-option-container\n      style=\"overflow: auto;transform: translateZ(0px);\"\n      (keydown)=\"onKeyDown($event)\"\n      [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n      [nzNotFoundContent]=\"nzNotFoundContent\"\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\">\n    </div>\n    <ng-template [ngTemplateOutlet]=\"nzDropdownRender\"></ng-template>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                        host: {
                            '[class.ant-select-lg]': 'nzSize==="large"',
                            '[class.ant-select-sm]': 'nzSize==="small"',
                            '[class.ant-select-enabled]': '!nzDisabled',
                            '[class.ant-select-no-arrow]': '!nzShowArrow',
                            '[class.ant-select-disabled]': 'nzDisabled',
                            '[class.ant-select-allow-clear]': 'nzAllowClear',
                            '[class.ant-select-open]': 'open',
                            '(click)': 'toggleDropDown()'
                        },
                        styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzSelectComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: NzSelectService },
            { type: core.ChangeDetectorRef },
            { type: platform.Platform },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzSelectComponent.propDecorators = {
            cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin, { static: false },] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
            nzSelectTopControlComponent: [{ type: core.ViewChild, args: [NzSelectTopControlComponent, { static: true },] }],
            nzSelectTopControlElement: [{ type: core.ViewChild, args: [NzSelectTopControlComponent, { static: true, read: core.ElementRef },] }],
            listOfNzOptionComponent: [{ type: core.ContentChildren, args: [NzOptionComponent,] }],
            listOfNzOptionGroupComponent: [{ type: core.ContentChildren, args: [NzOptionGroupComponent,] }],
            nzOnSearch: [{ type: core.Output }],
            nzScrollToBottom: [{ type: core.Output }],
            nzOpenChange: [{ type: core.Output }],
            nzBlur: [{ type: core.Output }],
            nzFocus: [{ type: core.Output }],
            nzSize: [{ type: core.Input }],
            nzDropdownClassName: [{ type: core.Input }],
            nzDropdownMatchSelectWidth: [{ type: core.Input }],
            nzDropdownStyle: [{ type: core.Input }],
            nzNotFoundContent: [{ type: core.Input }],
            nzAllowClear: [{ type: core.Input }],
            nzShowSearch: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzAutoFocus: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzMaxTagCount: [{ type: core.Input }],
            nzDropdownRender: [{ type: core.Input }],
            nzCustomTemplate: [{ type: core.Input }],
            nzSuffixIcon: [{ type: core.Input }],
            nzClearIcon: [{ type: core.Input }],
            nzRemoveIcon: [{ type: core.Input }],
            nzMenuItemSelectedIcon: [{ type: core.Input }],
            nzShowArrow: [{ type: core.Input }],
            nzTokenSeparators: [{ type: core.Input }],
            nzMaxTagPlaceholder: [{ type: core.Input }],
            nzAutoClearSearchValue: [{ type: core.Input }],
            nzMaxMultipleCount: [{ type: core.Input }],
            nzServerSearch: [{ type: core.Input }],
            nzMode: [{ type: core.Input }],
            nzFilterOption: [{ type: core.Input }],
            compareWith: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzShowSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzAutoFocus", void 0);
        return NzSelectComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSelectComponent.prototype.open;
        /** @type {?} */
        NzSelectComponent.prototype.value;
        /** @type {?} */
        NzSelectComponent.prototype.onChange;
        /** @type {?} */
        NzSelectComponent.prototype.onTouched;
        /** @type {?} */
        NzSelectComponent.prototype.dropDownPosition;
        /** @type {?} */
        NzSelectComponent.prototype.triggerWidth;
        /**
         * @type {?}
         * @private
         */
        NzSelectComponent.prototype._disabled;
        /**
         * @type {?}
         * @private
         */
        NzSelectComponent.prototype.isInit;
        /**
         * @type {?}
         * @private
         */
        NzSelectComponent.prototype.destroy$;
        /** @type {?} */
        NzSelectComponent.prototype.cdkOverlayOrigin;
        /** @type {?} */
        NzSelectComponent.prototype.cdkConnectedOverlay;
        /** @type {?} */
        NzSelectComponent.prototype.nzSelectTopControlComponent;
        /** @type {?} */
        NzSelectComponent.prototype.nzSelectTopControlElement;
        /**
         * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
         * @type {?}
         */
        NzSelectComponent.prototype.listOfNzOptionComponent;
        /** @type {?} */
        NzSelectComponent.prototype.listOfNzOptionGroupComponent;
        /** @type {?} */
        NzSelectComponent.prototype.nzOnSearch;
        /** @type {?} */
        NzSelectComponent.prototype.nzScrollToBottom;
        /** @type {?} */
        NzSelectComponent.prototype.nzOpenChange;
        /** @type {?} */
        NzSelectComponent.prototype.nzBlur;
        /** @type {?} */
        NzSelectComponent.prototype.nzFocus;
        /** @type {?} */
        NzSelectComponent.prototype.nzSize;
        /** @type {?} */
        NzSelectComponent.prototype.nzDropdownClassName;
        /** @type {?} */
        NzSelectComponent.prototype.nzDropdownMatchSelectWidth;
        /** @type {?} */
        NzSelectComponent.prototype.nzDropdownStyle;
        /** @type {?} */
        NzSelectComponent.prototype.nzNotFoundContent;
        /** @type {?} */
        NzSelectComponent.prototype.nzAllowClear;
        /** @type {?} */
        NzSelectComponent.prototype.nzShowSearch;
        /** @type {?} */
        NzSelectComponent.prototype.nzLoading;
        /** @type {?} */
        NzSelectComponent.prototype.nzAutoFocus;
        /** @type {?} */
        NzSelectComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        NzSelectComponent.prototype.nzMaxTagCount;
        /** @type {?} */
        NzSelectComponent.prototype.nzDropdownRender;
        /** @type {?} */
        NzSelectComponent.prototype.nzCustomTemplate;
        /** @type {?} */
        NzSelectComponent.prototype.nzSuffixIcon;
        /** @type {?} */
        NzSelectComponent.prototype.nzClearIcon;
        /** @type {?} */
        NzSelectComponent.prototype.nzRemoveIcon;
        /** @type {?} */
        NzSelectComponent.prototype.nzMenuItemSelectedIcon;
        /** @type {?} */
        NzSelectComponent.prototype.nzShowArrow;
        /** @type {?} */
        NzSelectComponent.prototype.nzTokenSeparators;
        /** @type {?} */
        NzSelectComponent.prototype.nzMaxTagPlaceholder;
        /** @type {?} */
        NzSelectComponent.prototype.nzSelectService;
        /**
         * @type {?}
         * @private
         */
        NzSelectComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzSelectComponent.prototype.platform;
        /** @type {?} */
        NzSelectComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectUnselectableDirective = /** @class */ (function () {
        function NzSelectUnselectableDirective() {
        }
        NzSelectUnselectableDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-select-unselectable]',
                        exportAs: 'nzSelectUnselectable',
                        host: {
                            '[attr.unselectable]': '"unselectable"',
                            '[style.user-select]': '"none"'
                        }
                    },] }
        ];
        return NzSelectUnselectableDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectModule = /** @class */ (function () {
        function NzSelectModule() {
        }
        NzSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i18n.NzI18nModule,
                            forms.FormsModule,
                            platform.PlatformModule,
                            overlay.OverlayModule,
                            icon.NzIconModule,
                            core$1.NzAddOnModule,
                            empty.NzEmptyModule,
                            core$1.NzOverlayModule,
                            core$1.NzNoAnimationModule
                        ],
                        declarations: [
                            NzFilterGroupOptionPipe,
                            NzFilterOptionPipe,
                            NzOptionComponent,
                            NzSelectComponent,
                            NzOptionContainerComponent,
                            NzOptionGroupComponent,
                            NzOptionLiComponent,
                            NzSelectTopControlComponent,
                            NzSelectUnselectableDirective
                        ],
                        exports: [
                            NzOptionComponent,
                            NzSelectComponent,
                            NzOptionContainerComponent,
                            NzOptionGroupComponent,
                            NzSelectTopControlComponent
                        ]
                    },] }
        ];
        return NzSelectModule;
    }());

    exports.NzFilterGroupOptionPipe = NzFilterGroupOptionPipe;
    exports.NzFilterOptionPipe = NzFilterOptionPipe;
    exports.NzOptionComponent = NzOptionComponent;
    exports.NzOptionContainerComponent = NzOptionContainerComponent;
    exports.NzOptionGroupComponent = NzOptionGroupComponent;
    exports.NzOptionLiComponent = NzOptionLiComponent;
    exports.NzSelectComponent = NzSelectComponent;
    exports.NzSelectModule = NzSelectModule;
    exports.NzSelectService = NzSelectService;
    exports.NzSelectTopControlComponent = NzSelectTopControlComponent;
    exports.NzSelectUnselectableDirective = NzSelectUnselectableDirective;
    exports.defaultFilterOption = defaultFilterOption;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-select.umd.js.map
