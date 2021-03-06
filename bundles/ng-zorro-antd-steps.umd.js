(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/steps', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].steps = {}), global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, rxjs, operators, core$1, common, icon) { 'use strict';

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
    var NzStepComponent = /** @class */ (function () {
        function NzStepComponent(cdr, renderer, elementRef) {
            this.cdr = cdr;
            this.nzDisabled = false;
            this.isCustomStatus = false;
            this._status = 'wait';
            this.oldAPIIcon = true;
            this.isIconString = true;
            // Set by parent.
            this.direction = 'horizontal';
            this.index = 0;
            this.last = false;
            this.outStatus = 'process';
            this.showProcessDot = false;
            this.clickable = false;
            this.click$ = new rxjs.Subject();
            this._currentIndex = 0;
            renderer.addClass(elementRef.nativeElement, 'ant-steps-item');
        }
        Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
            get: /**
             * @return {?}
             */
            function () {
                return this._status;
            },
            set: /**
             * @param {?} status
             * @return {?}
             */
            function (status) {
                this._status = status;
                this.isCustomStatus = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
            get: /**
             * @return {?}
             */
            function () {
                return this._icon;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (!(value instanceof core.TemplateRef)) {
                    this.isIconString = true;
                    this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
                }
                else {
                    this.isIconString = false;
                }
                this._icon = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this._currentIndex;
            },
            set: /**
             * @param {?} current
             * @return {?}
             */
            function (current) {
                this._currentIndex = current;
                if (!this.isCustomStatus) {
                    this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzStepComponent.prototype.onClick = /**
         * @return {?}
         */
        function () {
            if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
                this.click$.next(this.index);
            }
        };
        /**
         * @return {?}
         */
        NzStepComponent.prototype.markForCheck = /**
         * @return {?}
         */
        function () {
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzStepComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.click$.complete();
        };
        NzStepComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-step',
                        exportAs: 'nzStep',
                        preserveWhitespaces: false,
                        template: "<div\n  class=\"ant-steps-item-container\"\n  [attr.role]=\"(clickable && !nzDisabled) ? 'button' : null\"\n  [tabindex]=\"(clickable && !nzDisabled) ? 0 : null\"\n  (click)=\"onClick()\">\n  <div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n  <div class=\"ant-steps-item-icon\">\n    <ng-template [ngIf]=\"!showProcessDot\">\n      <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\"><i nz-icon nzType=\"check\"></i></span>\n      <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\"><i nz-icon nzType=\"close\"></i></span>\n      <span\n        class=\"ant-steps-icon\"\n        *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">{{ index + 1 }}</span>\n      <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i nz-icon [nzType]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\n    </ng-template>\n    </span>\n    </ng-template>\n    <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate>\n        <span class=\"ant-steps-icon-dot\"></span>\n      </ng-template>\n      <ng-template\n        [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:nzStatus, index:index }\">\n      </ng-template>\n    </span>\n    </ng-template>\n  </div>\n  <div class=\"ant-steps-item-content\">\n    <div class=\"ant-steps-item-title\">\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      <div *ngIf=\"nzSubtitle\" class=\"ant-steps-item-subtitle\">\n        <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\n      </div>\n    </div>\n    <div class=\"ant-steps-item-description\">\n      <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n    </div>\n  </div>\n</div>\n",
                        host: {
                            '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                            '[class.ant-steps-item-process]': 'nzStatus === "process"',
                            '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                            '[class.ant-steps-item-error]': 'nzStatus === "error"',
                            '[class.ant-steps-item-active]': 'currentIndex === index',
                            '[class.ant-steps-item-disabled]': 'nzDisabled',
                            '[class.ant-steps-item-custom]': '!!nzIcon',
                            '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzStepComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        NzStepComponent.propDecorators = {
            processDotTemplate: [{ type: core.ViewChild, args: ['processDotTemplate', { static: false },] }],
            nzTitle: [{ type: core.Input }],
            nzSubtitle: [{ type: core.Input }],
            nzDescription: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzStatus: [{ type: core.Input }],
            nzIcon: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzStepComponent.prototype, "nzDisabled", void 0);
        return NzStepComponent;
    }());
    if (false) {
        /** @type {?} */
        NzStepComponent.prototype.processDotTemplate;
        /** @type {?} */
        NzStepComponent.prototype.nzTitle;
        /** @type {?} */
        NzStepComponent.prototype.nzSubtitle;
        /** @type {?} */
        NzStepComponent.prototype.nzDescription;
        /** @type {?} */
        NzStepComponent.prototype.nzDisabled;
        /** @type {?} */
        NzStepComponent.prototype.isCustomStatus;
        /**
         * @type {?}
         * @private
         */
        NzStepComponent.prototype._status;
        /** @type {?} */
        NzStepComponent.prototype.oldAPIIcon;
        /** @type {?} */
        NzStepComponent.prototype.isIconString;
        /**
         * @type {?}
         * @private
         */
        NzStepComponent.prototype._icon;
        /** @type {?} */
        NzStepComponent.prototype.customProcessTemplate;
        /** @type {?} */
        NzStepComponent.prototype.direction;
        /** @type {?} */
        NzStepComponent.prototype.index;
        /** @type {?} */
        NzStepComponent.prototype.last;
        /** @type {?} */
        NzStepComponent.prototype.outStatus;
        /** @type {?} */
        NzStepComponent.prototype.showProcessDot;
        /** @type {?} */
        NzStepComponent.prototype.clickable;
        /** @type {?} */
        NzStepComponent.prototype.click$;
        /**
         * @type {?}
         * @private
         */
        NzStepComponent.prototype._currentIndex;
        /**
         * @type {?}
         * @private
         */
        NzStepComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzStepsComponent = /** @class */ (function () {
        function NzStepsComponent() {
            this.nzCurrent = 0;
            this.nzDirection = 'horizontal';
            this.nzLabelPlacement = 'horizontal';
            this.nzType = 'default';
            this.nzSize = 'default';
            this.nzStartIndex = 0;
            this.nzStatus = 'process';
            this.nzIndexChange = new core.EventEmitter();
            this.destroy$ = new rxjs.Subject();
            this.showProcessDot = false;
        }
        Object.defineProperty(NzStepsComponent.prototype, "nzProgressDot", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value instanceof core.TemplateRef) {
                    this.showProcessDot = true;
                    this.customProcessDotTemplate = value;
                }
                else {
                    this.showProcessDot = core$1.toBoolean(value);
                }
                this.updateChildrenSteps();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NzStepsComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
                this.updateChildrenSteps();
            }
            if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
                this.setClassMap();
            }
        };
        /**
         * @return {?}
         */
        NzStepsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
            this.updateChildrenSteps();
        };
        /**
         * @return {?}
         */
        NzStepsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
        };
        /**
         * @return {?}
         */
        NzStepsComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.steps) {
                this.steps.changes
                    .pipe(operators.startWith(null), operators.takeUntil(this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateChildrenSteps();
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzStepsComponent.prototype.updateChildrenSteps = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.steps) {
                /** @type {?} */
                var length_1 = this.steps.length;
                this.steps.toArray().forEach((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) {
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () {
                        step.outStatus = _this.nzStatus;
                        step.showProcessDot = _this.showProcessDot;
                        if (_this.customProcessDotTemplate) {
                            step.customProcessTemplate = _this.customProcessDotTemplate;
                        }
                        step.clickable = _this.nzIndexChange.observers.length > 0;
                        step.direction = _this.nzDirection;
                        step.index = index + _this.nzStartIndex;
                        step.currentIndex = _this.nzCurrent;
                        step.last = length_1 === index + 1;
                        step.markForCheck();
                    }));
                }));
                if (this.indexChangeSubscription) {
                    this.indexChangeSubscription.unsubscribe();
                }
                this.indexChangeSubscription = rxjs.merge.apply(void 0, __spread(this.steps.map((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.click$; })))).subscribe((/**
                 * @param {?} index
                 * @return {?}
                 */
                function (index) {
                    return _this.nzIndexChange.emit(index);
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzStepsComponent.prototype.setClassMap = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            this.classMap = (_a = {},
                _a["ant-steps-" + this.nzDirection] = true,
                _a["ant-steps-label-horizontal"] = this.nzDirection === 'horizontal',
                _a["ant-steps-label-vertical"] = (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
                _a["ant-steps-dot"] = this.showProcessDot,
                _a['ant-steps-small'] = this.nzSize === 'small',
                _a['ant-steps-navigation'] = this.nzType === 'navigation',
                _a);
        };
        NzStepsComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        selector: 'nz-steps',
                        exportAs: 'nzSteps',
                        template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\n  <ng-content></ng-content>\n</div>"
                    }] }
        ];
        NzStepsComponent.propDecorators = {
            steps: [{ type: core.ContentChildren, args: [NzStepComponent,] }],
            nzCurrent: [{ type: core.Input }],
            nzDirection: [{ type: core.Input }],
            nzLabelPlacement: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzStartIndex: [{ type: core.Input }],
            nzStatus: [{ type: core.Input }],
            nzProgressDot: [{ type: core.Input }],
            nzIndexChange: [{ type: core.Output }]
        };
        return NzStepsComponent;
    }());
    if (false) {
        /** @type {?} */
        NzStepsComponent.prototype.steps;
        /** @type {?} */
        NzStepsComponent.prototype.nzCurrent;
        /** @type {?} */
        NzStepsComponent.prototype.nzDirection;
        /** @type {?} */
        NzStepsComponent.prototype.nzLabelPlacement;
        /** @type {?} */
        NzStepsComponent.prototype.nzType;
        /** @type {?} */
        NzStepsComponent.prototype.nzSize;
        /** @type {?} */
        NzStepsComponent.prototype.nzStartIndex;
        /** @type {?} */
        NzStepsComponent.prototype.nzStatus;
        /** @type {?} */
        NzStepsComponent.prototype.nzIndexChange;
        /**
         * @type {?}
         * @private
         */
        NzStepsComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzStepsComponent.prototype.indexChangeSubscription;
        /** @type {?} */
        NzStepsComponent.prototype.showProcessDot;
        /** @type {?} */
        NzStepsComponent.prototype.customProcessDotTemplate;
        /** @type {?} */
        NzStepsComponent.prototype.classMap;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzStepsModule = /** @class */ (function () {
        function NzStepsModule() {
        }
        NzStepsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule],
                        exports: [NzStepsComponent, NzStepComponent],
                        declarations: [NzStepsComponent, NzStepComponent]
                    },] }
        ];
        return NzStepsModule;
    }());

    exports.NzStepComponent = NzStepComponent;
    exports.NzStepsComponent = NzStepsComponent;
    exports.NzStepsModule = NzStepsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-steps.umd.js.map
