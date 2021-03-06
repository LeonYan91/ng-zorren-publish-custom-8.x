(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('rxjs'), require('@angular/common'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/spin')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/list', ['exports', '@angular/core', 'ng-zorro-antd/core', 'rxjs', '@angular/common', 'ng-zorro-antd/avatar', 'ng-zorro-antd/empty', 'ng-zorro-antd/grid', 'ng-zorro-antd/spin'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].list = {}), global.ng.core, global['ng-zorro-antd'].core, global.rxjs, global.ng.common, global['ng-zorro-antd'].avatar, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].grid, global['ng-zorro-antd'].spin));
}(this, (function (exports, core, core$1, rxjs, common, avatar, empty, grid, spin) { 'use strict';

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
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * @record
     */
    function NzListGrid() { }
    if (false) {
        /** @type {?|undefined} */
        NzListGrid.prototype.gutter;
        /** @type {?|undefined} */
        NzListGrid.prototype.span;
        /** @type {?|undefined} */
        NzListGrid.prototype.column;
        /** @type {?|undefined} */
        NzListGrid.prototype.xs;
        /** @type {?|undefined} */
        NzListGrid.prototype.sm;
        /** @type {?|undefined} */
        NzListGrid.prototype.md;
        /** @type {?|undefined} */
        NzListGrid.prototype.lg;
        /** @type {?|undefined} */
        NzListGrid.prototype.xl;
        /** @type {?|undefined} */
        NzListGrid.prototype.xxl;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzListItemMetaComponent = /** @class */ (function () {
        function NzListItemMetaComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.avatarStr = '';
            this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
        }
        Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value instanceof core.TemplateRef) {
                    this.avatarStr = '';
                    this.avatarTpl = value;
                }
                else {
                    this.avatarStr = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        NzListItemMetaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-list-item-meta, [nz-list-item-meta]',
                        exportAs: 'nzListItemMeta',
                        template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\n  </ng-container>\n</div>\n<div *ngIf=\"nzTitle || nzDescription\" class=\"ant-list-item-meta-content\">\n  <h4 *ngIf=\"nzTitle\" class=\"ant-list-item-meta-title\">\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n  </h4>\n  <div *ngIf=\"nzDescription\" class=\"ant-list-item-meta-description\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </div>\n</div>",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        NzListItemMetaComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NzListItemMetaComponent.propDecorators = {
            nzAvatar: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzDescription: [{ type: core.Input }]
        };
        return NzListItemMetaComponent;
    }());
    if (false) {
        /** @type {?} */
        NzListItemMetaComponent.prototype.avatarStr;
        /** @type {?} */
        NzListItemMetaComponent.prototype.avatarTpl;
        /** @type {?} */
        NzListItemMetaComponent.prototype.nzTitle;
        /** @type {?} */
        NzListItemMetaComponent.prototype.nzDescription;
        /** @type {?} */
        NzListItemMetaComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzListItemMetaComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzListComponent = /** @class */ (function () {
        function NzListComponent(el, updateHostClassService) {
            this.el = el;
            this.updateHostClassService = updateHostClassService;
            this.nzBordered = false;
            this.nzItemLayout = 'horizontal';
            this.nzLoading = false;
            this.nzSize = 'default';
            this.nzSplit = true;
            // #endregion
            // #region styles
            this.prefixCls = 'ant-list';
            // #endregion
            this.itemLayoutNotifySource = new rxjs.BehaviorSubject(this.nzItemLayout);
        }
        /**
         * @private
         * @return {?}
         */
        NzListComponent.prototype._setClassMap = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-vertical"] = this.nzItemLayout === 'vertical',
                _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
                _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
                _a[this.prefixCls + "-split"] = this.nzSplit,
                _a[this.prefixCls + "-bordered"] = this.nzBordered,
                _a[this.prefixCls + "-loading"] = this.nzLoading,
                _a[this.prefixCls + "-grid"] = this.nzGrid,
                _a[this.prefixCls + "-something-after-last-item"] = !!(this.nzLoadMore || this.nzPagination || this.nzFooter),
                _a);
            this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        };
        Object.defineProperty(NzListComponent.prototype, "itemLayoutNotify$", {
            get: /**
             * @return {?}
             */
            function () {
                return this.itemLayoutNotifySource.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._setClassMap();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzListComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this._setClassMap();
            if (changes.nzItemLayout) {
                this.itemLayoutNotifySource.next(this.nzItemLayout);
            }
        };
        /**
         * @return {?}
         */
        NzListComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.itemLayoutNotifySource.unsubscribe();
        };
        NzListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-list, [nz-list]',
                        exportAs: 'nzList',
                        template: "<ng-template #itemsTpl>\n  <div class=\"ant-list-items\" *ngIf=\"nzDataSource.length > 0\">\n    <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\n      <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n    </ng-container>\n  </div>\n</ng-template>\n<div *ngIf=\"nzHeader\" class=\"ant-list-header\">\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\n</div>\n<nz-spin [nzSpinning]=\"nzLoading\">\n  <ng-container *ngIf=\"nzDataSource\">\n    <div *ngIf=\"nzLoading && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\n    <div *ngIf=\"nzGrid; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter\">\n      <div nz-col [nzSpan]=\"nzGrid.span\" [nzXs]=\"nzGrid.xs\" [nzSm]=\"nzGrid.sm\" [nzMd]=\"nzGrid.md\" [nzLg]=\"nzGrid.lg\" [nzXl]=\"nzGrid.xl\"\n           [nzXXl]=\"nzGrid.xxl\" *ngFor=\"let item of nzDataSource; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n      </div>\n    </div>\n    <div *ngIf=\"!nzLoading && nzDataSource.length === 0\" class=\"ant-list-empty-text\">\n      <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\n    </div>\n  </ng-container>\n  <ng-content></ng-content>\n</nz-spin>\n<div *ngIf=\"nzFooter\" class=\"ant-list-footer\">\n  <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\n</div>\n<ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\n<div *ngIf=\"nzPagination\" class=\"ant-list-pagination\">\n  <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\n</div>",
                        providers: [core$1.NzUpdateHostClassService],
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzListComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        NzListComponent.propDecorators = {
            nzDataSource: [{ type: core.Input }],
            nzBordered: [{ type: core.Input }],
            nzGrid: [{ type: core.Input }],
            nzHeader: [{ type: core.Input }],
            nzFooter: [{ type: core.Input }],
            nzItemLayout: [{ type: core.Input }],
            nzRenderItem: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzLoadMore: [{ type: core.Input }],
            nzPagination: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzSplit: [{ type: core.Input }],
            nzNoResult: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzBordered", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzSplit", void 0);
        return NzListComponent;
    }());
    if (false) {
        /** @type {?} */
        NzListComponent.prototype.nzDataSource;
        /** @type {?} */
        NzListComponent.prototype.nzBordered;
        /** @type {?} */
        NzListComponent.prototype.nzGrid;
        /** @type {?} */
        NzListComponent.prototype.nzHeader;
        /** @type {?} */
        NzListComponent.prototype.nzFooter;
        /** @type {?} */
        NzListComponent.prototype.nzItemLayout;
        /** @type {?} */
        NzListComponent.prototype.nzRenderItem;
        /** @type {?} */
        NzListComponent.prototype.nzLoading;
        /** @type {?} */
        NzListComponent.prototype.nzLoadMore;
        /** @type {?} */
        NzListComponent.prototype.nzPagination;
        /** @type {?} */
        NzListComponent.prototype.nzSize;
        /** @type {?} */
        NzListComponent.prototype.nzSplit;
        /** @type {?} */
        NzListComponent.prototype.nzNoResult;
        /**
         * @type {?}
         * @private
         */
        NzListComponent.prototype.prefixCls;
        /**
         * @type {?}
         * @private
         */
        NzListComponent.prototype.itemLayoutNotifySource;
        /**
         * @type {?}
         * @private
         */
        NzListComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzListComponent.prototype.updateHostClassService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzListItemComponent = /** @class */ (function () {
        function NzListItemComponent(elementRef, renderer, parentComp, cdr) {
            this.parentComp = parentComp;
            this.cdr = cdr;
            this.nzActions = [];
            this.nzNoFlex = false;
            renderer.addClass(elementRef.nativeElement, 'ant-list-item');
        }
        Object.defineProperty(NzListItemComponent.prototype, "isVerticalAndExtra", {
            get: /**
             * @return {?}
             */
            function () {
                return this.itemLayout === 'vertical' && !!this.nzExtra;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzListItemComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                _this.itemLayout = val;
                _this.cdr.detectChanges();
            }));
        };
        /**
         * @return {?}
         */
        NzListItemComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.itemLayout$) {
                this.itemLayout$.unsubscribe();
            }
        };
        NzListItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-list-item, [nz-list-item]',
                        exportAs: 'nzListItem',
                        template: "<ng-template #actionsTpl>\n  <ul *ngIf=\"nzActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of nzActions; let last=last;\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n  <ng-container *ngIf=\"nzContent\">\n    <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #simpleTpl>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n  </div>\n</ng-container>",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NzListItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: NzListComponent },
            { type: core.ChangeDetectorRef }
        ]; };
        NzListItemComponent.propDecorators = {
            metas: [{ type: core.ContentChildren, args: [NzListItemMetaComponent,] }],
            nzActions: [{ type: core.Input }],
            nzContent: [{ type: core.Input }],
            nzExtra: [{ type: core.Input }],
            nzNoFlex: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ant-list-item-no-flex',] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzListItemComponent.prototype, "nzNoFlex", void 0);
        return NzListItemComponent;
    }());
    if (false) {
        /** @type {?} */
        NzListItemComponent.prototype.metas;
        /** @type {?} */
        NzListItemComponent.prototype.nzActions;
        /** @type {?} */
        NzListItemComponent.prototype.nzContent;
        /** @type {?} */
        NzListItemComponent.prototype.nzExtra;
        /** @type {?} */
        NzListItemComponent.prototype.nzNoFlex;
        /**
         * @type {?}
         * @private
         */
        NzListItemComponent.prototype.itemLayout;
        /**
         * @type {?}
         * @private
         */
        NzListItemComponent.prototype.itemLayout$;
        /**
         * @type {?}
         * @private
         */
        NzListItemComponent.prototype.parentComp;
        /**
         * @type {?}
         * @private
         */
        NzListItemComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzListModule = /** @class */ (function () {
        function NzListModule() {
        }
        NzListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, spin.NzSpinModule, grid.NzGridModule, avatar.NzAvatarModule, core$1.NzAddOnModule, empty.NzEmptyModule],
                        declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                        exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
                    },] }
        ];
        return NzListModule;
    }());

    exports.NzListComponent = NzListComponent;
    exports.NzListItemComponent = NzListItemComponent;
    exports.NzListItemMetaComponent = NzListItemMetaComponent;
    exports.NzListModule = NzListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-list.umd.js.map
