(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/select')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/pagination', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', '@angular/common', '@angular/forms', 'ng-zorro-antd/icon', 'ng-zorro-antd/select'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].pagination = {}), global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global.ng.common, global.ng.forms, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].select));
}(this, (function (exports, core, rxjs, operators, core$1, i18n, common, forms, icon, select) { 'use strict';

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
    function PaginationItemRenderContext() { }
    if (false) {
        /** @type {?} */
        PaginationItemRenderContext.prototype.$implicit;
        /** @type {?} */
        PaginationItemRenderContext.prototype.page;
    }
    var NzPaginationComponent = /** @class */ (function () {
        function NzPaginationComponent(i18n, cdr) {
            this.i18n = i18n;
            this.cdr = cdr;
            // tslint:disable-next-line:no-any
            this.locale = {};
            this.firstIndex = 1;
            this.pages = [];
            this.$destroy = new rxjs.Subject();
            this.nzPageSizeChange = new core.EventEmitter();
            this.nzPageIndexChange = new core.EventEmitter();
            this.nzInTable = false;
            this.nzSize = 'default';
            this.nzPageSizeOptions = [10, 20, 30, 40];
            this.nzDisabled = false;
            this.nzShowSizeChanger = false;
            this.nzHideOnSinglePage = false;
            this.nzShowQuickJumper = false;
            this.nzSimple = false;
            this.nzTotal = 0;
            this.nzPageIndex = 1;
            this.nzPageSize = 10;
        }
        Object.defineProperty(NzPaginationComponent.prototype, "itemRender", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzItemRender || this.nzItemRenderChild;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        NzPaginationComponent.prototype.validatePageIndex = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value > this.lastIndex) {
                return this.lastIndex;
            }
            else if (value < this.firstIndex) {
                return this.firstIndex;
            }
            else {
                return value;
            }
        };
        /**
         * @param {?} page
         * @return {?}
         */
        NzPaginationComponent.prototype.updatePageIndexValue = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            this.nzPageIndex = page;
            this.nzPageIndexChange.emit(this.nzPageIndex);
            this.buildIndexes();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzPaginationComponent.prototype.isPageIndexValid = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return this.validatePageIndex(value) === value;
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NzPaginationComponent.prototype.jumpPage = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index !== this.nzPageIndex && !this.nzDisabled) {
                /** @type {?} */
                var pageIndex = this.validatePageIndex(index);
                if (pageIndex !== this.nzPageIndex) {
                    this.updatePageIndexValue(pageIndex);
                }
            }
        };
        /**
         * @param {?} diff
         * @return {?}
         */
        NzPaginationComponent.prototype.jumpDiff = /**
         * @param {?} diff
         * @return {?}
         */
        function (diff) {
            this.jumpPage(this.nzPageIndex + diff);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzPaginationComponent.prototype.onPageSizeChange = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.nzPageSize = $event;
            this.nzPageSizeChange.emit($event);
            this.buildIndexes();
            if (this.nzPageIndex > this.lastIndex) {
                this.updatePageIndexValue(this.lastIndex);
            }
        };
        /**
         * @param {?} _
         * @param {?} input
         * @param {?} clearInputValue
         * @return {?}
         */
        NzPaginationComponent.prototype.handleKeyDown = /**
         * @param {?} _
         * @param {?} input
         * @param {?} clearInputValue
         * @return {?}
         */
        function (_, input, clearInputValue) {
            /** @type {?} */
            var target = input;
            /** @type {?} */
            var page = core$1.toNumber(target.value, this.nzPageIndex);
            if (core$1.isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
                this.updatePageIndexValue(page);
            }
            if (clearInputValue) {
                target.value = '';
            }
            else {
                target.value = "" + this.nzPageIndex;
            }
        };
        /** generate indexes list */
        /**
         * generate indexes list
         * @return {?}
         */
        NzPaginationComponent.prototype.buildIndexes = /**
         * generate indexes list
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pages = [];
            if (this.lastIndex <= 9) {
                for (var i = 2; i <= this.lastIndex - 1; i++) {
                    pages.push(i);
                }
            }
            else {
                /** @type {?} */
                var current = +this.nzPageIndex;
                /** @type {?} */
                var left = Math.max(2, current - 2);
                /** @type {?} */
                var right = Math.min(current + 2, this.lastIndex - 1);
                if (current - 1 <= 2) {
                    right = 5;
                }
                if (this.lastIndex - current <= 2) {
                    left = this.lastIndex - 4;
                }
                for (var i = left; i <= right; i++) {
                    pages.push(i);
                }
            }
            this.pages = pages;
            this.cdr.markForCheck();
        };
        Object.defineProperty(NzPaginationComponent.prototype, "lastIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return Math.ceil(this.nzTotal / this.nzPageSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzPageIndex === this.lastIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzPageIndex === this.firstIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "ranges", {
            get: /**
             * @return {?}
             */
            function () {
                return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "showAddOption", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.$destroy)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Pagination');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.$destroy.next();
            this.$destroy.complete();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
                this.buildIndexes();
            }
        };
        NzPaginationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-pagination',
                        exportAs: 'nzPagination',
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\">\n    <i nz-icon nzType=\"left\"></i>\n  </a>\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\">\n    <i nz-icon nzType=\"right\"></i>\n  </a>\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\n</ng-template>\n<ng-container *ngIf=\"(nzHideOnSinglePage && (nzTotal > nzPageSize)) || (nzTotal && !nzHideOnSinglePage)\">\n  <ul class=\"ant-pagination\"\n      [class.ant-table-pagination]=\"nzInTable\"\n      [class.ant-pagination-simple]=\"nzSimple\"\n      [class.ant-pagination-disabled]=\"nzDisabled\"\n      [class.mini]=\"(nzSize === 'small') && !nzSimple\">\n    <ng-container *ngIf=\"nzSimple; else normalTemplate\">\n      <li class=\"ant-pagination-prev\"\n          [attr.title]=\"locale.prev_page\"\n          [class.ant-pagination-disabled]=\"isFirstIndex\"\n          (click)=\"jumpDiff(-1)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n      </li>\n      <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\n        <input #simplePagerInput\n               [disabled]=\"nzDisabled\"\n               [value]=\"nzPageIndex\"\n               (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\n               size=\"3\">\n        <span class=\"ant-pagination-slash\">/</span>\n        {{ lastIndex }}\n      </li>\n      <li class=\"ant-pagination-next\"\n          [attr.title]=\"locale.next_page\"\n          [class.ant-pagination-disabled]=\"isLastIndex\"\n          (click)=\"jumpDiff(1)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n      </li>\n    </ng-container>\n    <ng-template #normalTemplate>\n      <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\n        <ng-template [ngTemplateOutlet]=\"nzShowTotal\"\n                     [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:ranges }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-prev\"\n          [attr.title]=\"locale.prev_page\"\n          [class.ant-pagination-disabled]=\"isFirstIndex\"\n          (click)=\"jumpDiff(-1)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-item\"\n          [attr.title]=\"firstIndex\"\n          [class.ant-pagination-item-active]=\"isFirstIndex\"\n          (click)=\"jumpPage(firstIndex)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-jump-prev\"\n          *ngIf=\"(lastIndex > 9) && (nzPageIndex - 3 > firstIndex)\"\n          [attr.title]=\"locale.prev_5\"\n          (click)=\"jumpDiff(-5)\">\n        <a class=\"ant-pagination-item-link\">\n          <div class=\"ant-pagination-item-container\">\n            <i nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n          </div>\n        </a>\n      </li>\n      <li class=\"ant-pagination-item\"\n          *ngFor=\"let page of pages\"\n          [attr.title]=\"page\"\n          [class.ant-pagination-item-active]=\"nzPageIndex === page\"\n          (click)=\"jumpPage(page)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\n          [attr.title]=\"locale.next_5\"\n          (click)=\"jumpDiff(5)\"\n          *ngIf=\"(lastIndex > 9) && (nzPageIndex + 3 < lastIndex)\">\n        <a class=\"ant-pagination-item-link\">\n          <div class=\"ant-pagination-item-container\">\n            <i nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n          </div>\n        </a>\n      </li>\n      <li class=\"ant-pagination-item\"\n          [attr.title]=\"lastIndex\"\n          (click)=\"jumpPage(lastIndex)\"\n          *ngIf=\"(lastIndex > 0) && (lastIndex !== firstIndex)\"\n          [class.ant-pagination-item-active]=\"isLastIndex\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-next\"\n          [title]=\"locale.next_page\"\n          [class.ant-pagination-disabled]=\"isLastIndex\"\n          (click)=\"jumpDiff(1)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n      </li>\n      <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper || nzShowSizeChanger\">\n        <nz-select class=\"ant-pagination-options-size-changer\"\n                   *ngIf=\"nzShowSizeChanger\"\n                   [nzDisabled]=\"nzDisabled\"\n                   [nzSize]=\"nzSize\"\n                   [ngModel]=\"nzPageSize\"\n                   (ngModelChange)=\"onPageSizeChange($event)\">\n          <nz-option *ngFor=\"let option of nzPageSizeOptions\"\n                     [nzLabel]=\"option + ' ' + locale.items_per_page\"\n                     [nzValue]=\"option\">\n          </nz-option>\n          <nz-option *ngIf=\"showAddOption\"\n                     [nzLabel]=\"nzPageSize + ' ' + locale.items_per_page\"\n                     [nzValue]=\"nzPageSize\">\n          </nz-option>\n        </nz-select>\n        <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"nzShowQuickJumper\">\n          {{ locale.jump_to }}\n          <input #quickJumperInput\n                 [disabled]=\"nzDisabled\"\n                 (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\n          {{ locale.page }}\n        </div>\n      </div>\n    </ng-template>\n  </ul>\n</ng-container>\n"
                    }] }
        ];
        /** @nocollapse */
        NzPaginationComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef }
        ]; };
        NzPaginationComponent.propDecorators = {
            nzPageSizeChange: [{ type: core.Output }],
            nzPageIndexChange: [{ type: core.Output }],
            nzShowTotal: [{ type: core.Input }],
            nzInTable: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzPageSizeOptions: [{ type: core.Input }],
            nzItemRender: [{ type: core.Input }],
            nzItemRenderChild: [{ type: core.ViewChild, args: ['renderItemTemplate', { static: true },] }],
            nzDisabled: [{ type: core.Input }],
            nzShowSizeChanger: [{ type: core.Input }],
            nzHideOnSinglePage: [{ type: core.Input }],
            nzShowQuickJumper: [{ type: core.Input }],
            nzSimple: [{ type: core.Input }],
            nzTotal: [{ type: core.Input }],
            nzPageIndex: [{ type: core.Input }],
            nzPageSize: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzSimple", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzTotal", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzPageIndex", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzPageSize", void 0);
        return NzPaginationComponent;
    }());
    if (false) {
        /** @type {?} */
        NzPaginationComponent.prototype.locale;
        /** @type {?} */
        NzPaginationComponent.prototype.firstIndex;
        /** @type {?} */
        NzPaginationComponent.prototype.pages;
        /**
         * @type {?}
         * @private
         */
        NzPaginationComponent.prototype.$destroy;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageSizeChange;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageIndexChange;
        /** @type {?} */
        NzPaginationComponent.prototype.nzShowTotal;
        /** @type {?} */
        NzPaginationComponent.prototype.nzInTable;
        /** @type {?} */
        NzPaginationComponent.prototype.nzSize;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageSizeOptions;
        /** @type {?} */
        NzPaginationComponent.prototype.nzItemRender;
        /** @type {?} */
        NzPaginationComponent.prototype.nzItemRenderChild;
        /** @type {?} */
        NzPaginationComponent.prototype.nzDisabled;
        /** @type {?} */
        NzPaginationComponent.prototype.nzShowSizeChanger;
        /** @type {?} */
        NzPaginationComponent.prototype.nzHideOnSinglePage;
        /** @type {?} */
        NzPaginationComponent.prototype.nzShowQuickJumper;
        /** @type {?} */
        NzPaginationComponent.prototype.nzSimple;
        /** @type {?} */
        NzPaginationComponent.prototype.nzTotal;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageIndex;
        /** @type {?} */
        NzPaginationComponent.prototype.nzPageSize;
        /**
         * @type {?}
         * @private
         */
        NzPaginationComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzPaginationComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPaginationModule = /** @class */ (function () {
        function NzPaginationModule() {
        }
        NzPaginationModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzPaginationComponent],
                        exports: [NzPaginationComponent],
                        imports: [common.CommonModule, forms.FormsModule, select.NzSelectModule, i18n.NzI18nModule, icon.NzIconModule]
                    },] }
        ];
        return NzPaginationModule;
    }());

    exports.NzPaginationComponent = NzPaginationComponent;
    exports.NzPaginationModule = NzPaginationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-pagination.umd.js.map
