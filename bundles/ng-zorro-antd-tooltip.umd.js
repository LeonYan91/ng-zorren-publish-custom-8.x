(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/cdk/overlay'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tooltip', ['exports', '@angular/core', 'ng-zorro-antd/core', '@angular/cdk/overlay', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tooltip = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.cdk.overlay, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, core$1, overlay, rxjs, operators, common) { 'use strict';

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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Tooltip component. Also the base component for legacy components.
     * @abstract
     */
    var NzTooltipBaseComponent = /** @class */ (function () {
        function NzTooltipBaseComponent(cdr, noAnimation) {
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.nzVisibleChange = new core.EventEmitter();
            this._classMap = {};
            this._hasBackdrop = false;
            this._prefix = 'ant-tooltip-placement';
            this._visible = false;
            this._positions = __spread(core$1.DEFAULT_TOOLTIP_POSITIONS);
            this._placement = 'top';
            this._trigger = 'hover';
        }
        Object.defineProperty(NzTooltipBaseComponent.prototype, "content", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzContent !== undefined ? this.nzContent : this.nzContentTemplate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseComponent.prototype, "title", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzTitle !== undefined ? this.nzTitle : this.nzTitleTemplate;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.show = /**
         * @return {?}
         */
        function () {
            if (this.nzVisible) {
                return;
            }
            if (!this.isTitleEmpty() || !this.isContentEmpty()) {
                this.nzVisible = true;
                this.nzVisibleChange.emit(true);
                this.cdr.detectChanges();
            }
        };
        /**
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.hide = /**
         * @return {?}
         */
        function () {
            if (!this.nzVisible) {
                return;
            }
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
            this.cdr.detectChanges();
        };
        /**
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.updateByDirective = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setClassMap();
            this.cdr.detectChanges();
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.updatePosition();
            }));
        };
        /**
         * Force the component to update its position.
         */
        /**
         * Force the component to update its position.
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.updatePosition = /**
         * Force the component to update its position.
         * @return {?}
         */
        function () {
            if (this.origin && this.overlay && this.overlay.overlayRef) {
                this.overlay.overlayRef.updatePosition();
            }
        };
        /**
         * @param {?} position
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this._placement = (/** @type {?} */ (core$1.getPlacementName(position)));
            this.setClassMap();
            this.cdr.detectChanges();
        };
        /**
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            this._classMap = (_a = {},
                _a[this.nzOverlayClassName] = true,
                _a[this._prefix + "-" + this._placement] = true,
                _a);
        };
        /**
         * @param {?} origin
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.setOverlayOrigin = /**
         * @param {?} origin
         * @return {?}
         */
        function (origin) {
            this.origin = origin;
            this.cdr.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.isTitleEmpty = /**
         * @private
         * @return {?}
         */
        function () {
            return this.title instanceof core.TemplateRef ? false : this.title === '' || !core$1.isNotNil(this.title);
        };
        /**
         * @private
         * @return {?}
         */
        NzTooltipBaseComponent.prototype.isContentEmpty = /**
         * @private
         * @return {?}
         */
        function () {
            return this.content instanceof core.TemplateRef ? false : this.content === '' || !core$1.isNotNil(this.content);
        };
        NzTooltipBaseComponent.propDecorators = {
            nzVisibleChange: [{ type: core.Output }]
        };
        return NzTooltipBaseComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzTitle;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzContent;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzVisible;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzPlacement;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzOverlayClassName;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzOverlayStyle;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzMouseEnterDelay;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzMouseLeaveDelay;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzTrigger;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzTitleTemplate;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzContentTemplate;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.nzVisibleChange;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.overlay;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.origin;
        /** @type {?} */
        NzTooltipBaseComponent.prototype._classMap;
        /** @type {?} */
        NzTooltipBaseComponent.prototype._hasBackdrop;
        /** @type {?} */
        NzTooltipBaseComponent.prototype._prefix;
        /** @type {?} */
        NzTooltipBaseComponent.prototype._visible;
        /** @type {?} */
        NzTooltipBaseComponent.prototype._positions;
        /** @type {?} */
        NzTooltipBaseComponent.prototype._placement;
        /** @type {?} */
        NzTooltipBaseComponent.prototype._trigger;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.cdr;
        /** @type {?} */
        NzTooltipBaseComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * This component overrides some properties of `NzTooltipBaseComponent` and make them
     * input properties.
     *
     * @deprecated 9.0.0 tooltip and other components deprecate the old API. This
     * would be removed in 9.0.0.
     *
     * \@example This example is what going to be removed
     *
     * ```html
     * <nz-tooltip>
     *   <a nz-tooltip></a>
     * </nz-tooltip>
     * ```
     */
    var NzTooltipBaseComponentLegacy = /** @class */ (function (_super) {
        __extends(NzTooltipBaseComponentLegacy, _super);
        function NzTooltipBaseComponentLegacy(cdr, noAnimation) {
            var _this = _super.call(this, cdr, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzOverlayClassName = '';
            _this.nzOverlayStyle = {};
            _this.nzMouseEnterDelay = 0.15; // second
            // second
            _this.nzMouseLeaveDelay = 0.1; // second
            _this.nzVisibleChange = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzPlacement", {
            get: /**
             * @return {?}
             */
            function () {
                return this._placement;
            },
            // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
            set: 
            // second
            // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value !== this._placement) {
                    this._placement = value;
                    this._positions = __spread([core$1.POSITION_MAP[this.nzPlacement]], this._positions);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzVisible", {
            get: /**
             * @return {?}
             */
            function () {
                return this._visible;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var visible = core$1.toBoolean(value);
                if (this._visible !== visible) {
                    this._visible = visible;
                    this.nzVisibleChange.emit(visible);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzTrigger", {
            get: /**
             * @return {?}
             */
            function () {
                return this._trigger;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._trigger = value;
                this._hasBackdrop = this._trigger === 'click';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzTooltipBaseComponentLegacy.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            var _this = this;
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.updatePosition();
            }));
        };
        /** @nocollapse */
        NzTooltipBaseComponentLegacy.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzTooltipBaseComponentLegacy.propDecorators = {
            overlay: [{ type: core.ViewChild, args: ['overlay', { static: false },] }],
            nzOverlayClassName: [{ type: core.Input }],
            nzOverlayStyle: [{ type: core.Input }],
            nzMouseEnterDelay: [{ type: core.Input }],
            nzMouseLeaveDelay: [{ type: core.Input }],
            nzPlacement: [{ type: core.Input }],
            nzVisible: [{ type: core.Input }],
            nzTrigger: [{ type: core.Input }],
            nzVisibleChange: [{ type: core.Output }]
        };
        return NzTooltipBaseComponentLegacy;
    }(NzTooltipBaseComponent));
    if (false) {
        /** @type {?} */
        NzTooltipBaseComponentLegacy.prototype.overlay;
        /** @type {?} */
        NzTooltipBaseComponentLegacy.prototype.nzOverlayClassName;
        /** @type {?} */
        NzTooltipBaseComponentLegacy.prototype.nzOverlayStyle;
        /** @type {?} */
        NzTooltipBaseComponentLegacy.prototype.nzMouseEnterDelay;
        /** @type {?} */
        NzTooltipBaseComponentLegacy.prototype.nzMouseLeaveDelay;
        /** @type {?} */
        NzTooltipBaseComponentLegacy.prototype.nzVisibleChange;
        /** @type {?} */
        NzTooltipBaseComponentLegacy.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzToolTipComponent = /** @class */ (function (_super) {
        __extends(NzToolTipComponent, _super);
        function NzToolTipComponent(cdr, noAnimation) {
            var _this = _super.call(this, cdr) || this;
            _this.noAnimation = noAnimation;
            return _this;
        }
        NzToolTipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-tooltip',
                        exportAs: 'nzTooltipComponent',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        animations: [core$1.zoomBigMotion],
                        template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"_visible\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div\n    class=\"ant-tooltip\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@zoomBigMotion]=\"'active'\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow\"></div>\n      <div class=\"ant-tooltip-inner\">\n        <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                        preserveWhitespaces: false,
                        providers: [
                            {
                                provide: NzTooltipBaseComponentLegacy,
                                useExisting: NzToolTipComponent
                            }
                        ],
                        styles: ["\n      .ant-tooltip {\n        position: relative;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzToolTipComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzToolTipComponent.propDecorators = {
            nzTitle: [{ type: core.Input }],
            nzTitleTemplate: [{ type: core.ContentChild, args: ['nzTemplate', { static: true },] }]
        };
        return NzToolTipComponent;
    }(NzTooltipBaseComponentLegacy));
    if (false) {
        /** @type {?} */
        NzToolTipComponent.prototype.nzTitle;
        /** @type {?} */
        NzToolTipComponent.prototype.nzTitleTemplate;
        /** @type {?} */
        NzToolTipComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var NzTooltipBaseDirective = /** @class */ (function () {
        function NzTooltipBaseDirective(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
            this.elementRef = elementRef;
            this.hostView = hostView;
            this.resolver = resolver;
            this.renderer = renderer;
            this._tooltip = _tooltip;
            this.noAnimation = noAnimation;
            /**
             * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
             * Please use a more specific API. Like `nzTooltipTrigger`.
             */
            this.nzTrigger = 'hover';
            /**
             * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
             * Please use a more specific API. Like `nzTooltipPlacement`.
             */
            this.nzPlacement = 'top';
            this.needProxyProperties = [
                'nzOverlayClassName',
                'nzOverlayStyle',
                'nzMouseEnterDelay',
                'nzMouseLeaveDelay',
                'nzVisible',
                'noAnimation'
            ];
            this.nzVisibleChange = new core.EventEmitter();
            this.isTooltipComponentVisible = false;
            /**
             * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
             */
            this.isDynamicTooltip = false;
            this.triggerUnlisteners = [];
            this.$destroy = new rxjs.Subject();
        }
        Object.defineProperty(NzTooltipBaseDirective.prototype, "title", {
            /**
             * This true title that would be used in other parts on this component.
             */
            get: /**
             * This true title that would be used in other parts on this component.
             * @protected
             * @return {?}
             */
            function () {
                return this.specificTitle || this.directiveNameTitle || this.nzTitle;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseDirective.prototype, "content", {
            get: /**
             * @protected
             * @return {?}
             */
            function () {
                return this.specificContent || this.directiveNameContent || this.nzContent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseDirective.prototype, "placement", {
            get: /**
             * @protected
             * @return {?}
             */
            function () {
                return this.specificPlacement || this.nzPlacement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseDirective.prototype, "trigger", {
            get: /**
             * @protected
             * @return {?}
             */
            function () {
                return this.specificTrigger || this.nzTrigger;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var nzTrigger = changes.nzTrigger, specificTrigger = changes.specificTrigger;
            /** @type {?} */
            var trigger = specificTrigger || nzTrigger;
            if (trigger && !trigger.isFirstChange()) {
                this.registerTriggers();
            }
            if (this.tooltip && this.isDynamicTooltip) {
                this.updateChangedProperties(changes);
            }
            // TODO: enable these warning in 9.0.0.
            // if (changes.nzTitle) {
            //   warnDeprecation(
            //     `'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
            //   );
            // }
            // if (changes.nzContent) {
            //   warnDeprecation(
            //     `'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0. Please use 'nzPopoverContent' instead.`
            //   );
            // }
            // if (changes.nzPlacement) {
            //   warnDeprecation(
            //     `'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
            //   );
            // }
            // if (changes.nzTrigger) {
            //   warnDeprecation(
            //     `'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
            //   );
            // }
        };
        /**
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._tooltip) {
                this.createDynamicTooltipComponent();
            }
            else {
                core$1.warnDeprecation("'<nz-tooltip></nz-tooltip>', '<nz-popover></nz-popover>' and '<nz-popconfirm></nz-popconfirm>' is deprecated and will be removed in 9.0.0. Refer: https://ng.ant.design/components/tooltip/zh .");
                this.tooltip = this._tooltip;
                this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
            }
            this.tooltip.nzVisibleChange
                .pipe(operators.distinctUntilChanged(), operators.takeUntil(this.$destroy))
                .subscribe((/**
             * @param {?} visible
             * @return {?}
             */
            function (visible) {
                _this.isTooltipComponentVisible = visible;
                _this.nzVisibleChange.emit(visible);
            }));
        };
        /**
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.registerTriggers();
        };
        /**
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.$destroy.next();
            this.$destroy.complete();
            // Clear toggling timer. Issue #3875 #4317 #4386
            this.clearTogglingTimer();
            this.removeTriggerListeners();
            if (this.tooltipRef) {
                this.tooltipRef.destroy();
            }
        };
        /**
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.show = /**
         * @return {?}
         */
        function () {
            this.tooltip.show();
        };
        /**
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.hide = /**
         * @return {?}
         */
        function () {
            this.tooltip.hide();
        };
        /**
         * Force the component to update its position.
         */
        /**
         * Force the component to update its position.
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.updatePosition = /**
         * Force the component to update its position.
         * @return {?}
         */
        function () {
            if (this.tooltip && this.isDynamicTooltip) {
                this.tooltip.updatePosition();
            }
        };
        /**
         * Create a dynamic tooltip component. This method can be override.
         */
        /**
         * Create a dynamic tooltip component. This method can be override.
         * @protected
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.createDynamicTooltipComponent = /**
         * Create a dynamic tooltip component. This method can be override.
         * @protected
         * @return {?}
         */
        function () {
            this.isDynamicTooltip = true;
            this.tooltipRef = this.hostView.createComponent(this.componentFactory);
            this.tooltip = this.tooltipRef.instance;
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.tooltipRef.location.nativeElement); // Remove the component's DOM because it should be in the overlay container.
            // If the tooltip component is dynamically created, we should set its origin before updating properties to
            // the component.
            this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
            // Update all properties to the component.
            this.updateChangedProperties(this.needProxyProperties);
        };
        /**
         * @protected
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.registerTriggers = /**
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            // When the method gets invoked, all properties has been synced to the dynamic component.
            // After removing the old API, we can just check the directive's own `nzTrigger`.
            /** @type {?} */
            var el = this.elementRef.nativeElement;
            /** @type {?} */
            var trigger = this.isDynamicTooltip ? this.trigger : this.tooltip.nzTrigger;
            this.removeTriggerListeners();
            if (trigger === 'hover') {
                /** @type {?} */
                var overlayElement_1;
                this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseenter', (/**
                 * @return {?}
                 */
                function () {
                    _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay);
                })));
                this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseleave', (/**
                 * @return {?}
                 */
                function () {
                    _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                    if (_this.tooltip.overlay.overlayRef && !overlayElement_1) {
                        overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                        _this.triggerUnlisteners.push(_this.renderer.listen(overlayElement_1, 'mouseenter', (/**
                         * @return {?}
                         */
                        function () {
                            _this.delayEnterLeave(false, true);
                        })));
                        _this.triggerUnlisteners.push(_this.renderer.listen(overlayElement_1, 'mouseleave', (/**
                         * @return {?}
                         */
                        function () {
                            _this.delayEnterLeave(false, false);
                        })));
                    }
                })));
            }
            else if (trigger === 'focus') {
                this.triggerUnlisteners.push(this.renderer.listen(el, 'focus', (/**
                 * @return {?}
                 */
                function () { return _this.show(); })));
                this.triggerUnlisteners.push(this.renderer.listen(el, 'blur', (/**
                 * @return {?}
                 */
                function () { return _this.hide(); })));
            }
            else if (trigger === 'click') {
                this.triggerUnlisteners.push(this.renderer.listen(el, 'click', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    e.preventDefault();
                    _this.show();
                })));
            } // Else do nothing because user wants to control the visibility programmatically.
        };
        /**
         * Sync changed properties to the component and trigger change detection in that component.
         */
        /**
         * Sync changed properties to the component and trigger change detection in that component.
         * @protected
         * @param {?} propertiesOrChanges
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.updateChangedProperties = /**
         * Sync changed properties to the component and trigger change detection in that component.
         * @protected
         * @param {?} propertiesOrChanges
         * @return {?}
         */
        function (propertiesOrChanges) {
            var _this = this;
            /** @type {?} */
            var isArray = Array.isArray(propertiesOrChanges);
            /** @type {?} */
            var keys_ = isArray ? ((/** @type {?} */ (propertiesOrChanges))) : Object.keys(propertiesOrChanges);
            // tslint:disable-next-line no-any
            keys_.forEach((/**
             * @param {?} property
             * @return {?}
             */
            function (property) {
                if (_this.needProxyProperties.indexOf(property) !== -1) {
                    // @ts-ignore
                    _this.updateComponentValue(property, _this[property]);
                }
            }));
            if (isArray) {
                this.updateComponentValue('nzTitle', this.title);
                this.updateComponentValue('nzContent', this.content);
                this.updateComponentValue('nzPlacement', this.placement);
                this.updateComponentValue('nzTrigger', this.trigger);
            }
            else {
                /** @type {?} */
                var c = (/** @type {?} */ (propertiesOrChanges));
                if (c.specificTitle || c.directiveNameTitle || c.nzTitle) {
                    this.updateComponentValue('nzTitle', this.title);
                }
                if (c.specificContent || c.directiveNameContent || c.nzContent) {
                    this.updateComponentValue('nzContent', this.content);
                }
                if (c.specificTrigger || c.nzTrigger) {
                    this.updateComponentValue('nzTrigger', this.trigger);
                }
                if (c.specificPlacement || c.nzPlacement) {
                    this.updateComponentValue('nzPlacement', this.placement);
                }
            }
            this.tooltip.updateByDirective();
        };
        // tslint:disable-next-line no-any
        // tslint:disable-next-line no-any
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.updateComponentValue = 
        // tslint:disable-next-line no-any
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            if (typeof value !== 'undefined') {
                // @ts-ignore
                this.tooltip[key] = value;
            }
        };
        /**
         * @private
         * @param {?} isOrigin
         * @param {?} isEnter
         * @param {?=} delay
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.delayEnterLeave = /**
         * @private
         * @param {?} isOrigin
         * @param {?} isEnter
         * @param {?=} delay
         * @return {?}
         */
        function (isOrigin, isEnter, delay) {
            var _this = this;
            if (delay === void 0) { delay = -1; }
            if (this.delayTimer) {
                this.clearTogglingTimer();
            }
            else if (delay > 0) {
                this.delayTimer = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.delayTimer = undefined;
                    isEnter ? _this.show() : _this.hide();
                }), delay * 1000);
            }
            else {
                // `isOrigin` is used due to the tooltip will not hide immediately
                // (may caused by the fade-out animation).
                isEnter && isOrigin ? this.show() : this.hide();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.removeTriggerListeners = /**
         * @private
         * @return {?}
         */
        function () {
            this.triggerUnlisteners.forEach((/**
             * @param {?} cancel
             * @return {?}
             */
            function (cancel) { return cancel(); }));
            this.triggerUnlisteners.length = 0;
        };
        /**
         * @private
         * @return {?}
         */
        NzTooltipBaseDirective.prototype.clearTogglingTimer = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.delayTimer) {
                clearTimeout(this.delayTimer);
                this.delayTimer = undefined;
            }
        };
        NzTooltipBaseDirective.propDecorators = {
            nzTitle: [{ type: core.Input }],
            nzContent: [{ type: core.Input }],
            nzTrigger: [{ type: core.Input }],
            nzPlacement: [{ type: core.Input }],
            nzMouseEnterDelay: [{ type: core.Input }],
            nzMouseLeaveDelay: [{ type: core.Input }],
            nzOverlayClassName: [{ type: core.Input }],
            nzOverlayStyle: [{ type: core.Input }],
            nzVisible: [{ type: core.Input }],
            nzVisibleChange: [{ type: core.Output }]
        };
        return NzTooltipBaseDirective;
    }());
    if (false) {
        /** @type {?} */
        NzTooltipBaseDirective.prototype.directiveNameTitle;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.specificTitle;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.directiveNameContent;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.specificContent;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.specificTrigger;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.specificPlacement;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.tooltipRef;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTitle`.
         * @type {?}
         */
        NzTooltipBaseDirective.prototype.nzTitle;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzPopoverContent`.
         * @type {?}
         */
        NzTooltipBaseDirective.prototype.nzContent;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         * @type {?}
         */
        NzTooltipBaseDirective.prototype.nzTrigger;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipPlacement`.
         * @type {?}
         */
        NzTooltipBaseDirective.prototype.nzPlacement;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.nzMouseEnterDelay;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.nzMouseLeaveDelay;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.nzOverlayClassName;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.nzOverlayStyle;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.nzVisible;
        /**
         * For create tooltip dynamically. This should be override for each different component.
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.componentFactory;
        /**
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.needProxyProperties;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.nzVisibleChange;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.tooltip;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.isTooltipComponentVisible;
        /**
         * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.isDynamicTooltip;
        /**
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.triggerUnlisteners;
        /**
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.$destroy;
        /**
         * @type {?}
         * @private
         */
        NzTooltipBaseDirective.prototype.delayTimer;
        /** @type {?} */
        NzTooltipBaseDirective.prototype.elementRef;
        /**
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.hostView;
        /**
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.resolver;
        /**
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.renderer;
        /**
         * @deprecated 9.0.0. This will always be `null`.
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype._tooltip;
        /**
         * @type {?}
         * @protected
         */
        NzTooltipBaseDirective.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTooltipDirective = /** @class */ (function (_super) {
        __extends(NzTooltipDirective, _super);
        function NzTooltipDirective(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
            var _this = _super.call(this, elementRef, hostView, resolver, renderer, _tooltip, noAnimation) || this;
            _this.componentFactory = _this.resolver.resolveComponentFactory(NzToolTipComponent);
            return _this;
        }
        NzTooltipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-tooltip]',
                        exportAs: 'nzTooltip',
                        host: {
                            '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
                        }
                    },] }
        ];
        /** @nocollapse */
        NzTooltipDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ViewContainerRef },
            { type: core.ComponentFactoryResolver },
            { type: core.Renderer2 },
            { type: NzTooltipBaseComponentLegacy, decorators: [{ type: core.Optional }] },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzTooltipDirective.propDecorators = {
            specificTitle: [{ type: core.Input, args: ['nzTooltipTitle',] }],
            directiveNameTitle: [{ type: core.Input, args: ['nz-tooltip',] }],
            specificTrigger: [{ type: core.Input, args: ['nzTooltipTrigger',] }],
            specificPlacement: [{ type: core.Input, args: ['nzTooltipPlacement',] }]
        };
        return NzTooltipDirective;
    }(NzTooltipBaseDirective));
    if (false) {
        /**
         * The title that should have highest priority.
         * @type {?}
         */
        NzTooltipDirective.prototype.specificTitle;
        /**
         * Use the directive's name as the title that have priority in the second place.
         * @type {?}
         */
        NzTooltipDirective.prototype.directiveNameTitle;
        /** @type {?} */
        NzTooltipDirective.prototype.specificTrigger;
        /** @type {?} */
        NzTooltipDirective.prototype.specificPlacement;
        /** @type {?} */
        NzTooltipDirective.prototype.componentFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzToolTipModule = /** @class */ (function () {
        function NzToolTipModule() {
        }
        NzToolTipModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzToolTipComponent, NzTooltipDirective],
                        exports: [NzToolTipComponent, NzTooltipDirective],
                        imports: [common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule],
                        entryComponents: [NzToolTipComponent]
                    },] }
        ];
        return NzToolTipModule;
    }());

    exports.NzToolTipComponent = NzToolTipComponent;
    exports.NzToolTipModule = NzToolTipModule;
    exports.NzTooltipBaseComponent = NzTooltipBaseComponent;
    exports.NzTooltipBaseComponentLegacy = NzTooltipBaseComponentLegacy;
    exports.NzTooltipBaseDirective = NzTooltipBaseDirective;
    exports.NzTooltipDirective = NzTooltipDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tooltip.umd.js.map
