(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('ng-zorro-antd/button'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/dropdown', ['exports', '@angular/core', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/cdk/portal', 'ng-zorro-antd/button', '@angular/common', '@angular/forms', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].dropdown = {}), global.ng.core, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.cdk.portal, global['ng-zorro-antd'].button, global.ng.common, global.ng.forms, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].menu));
}(this, (function (exports, core, core$1, rxjs, operators, keycodes, overlay, platform, portal, button, common, forms, icon, menu) { 'use strict';

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
    var NzMenuDropdownService = /** @class */ (function (_super) {
        __extends(NzMenuDropdownService, _super);
        function NzMenuDropdownService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isInDropDown = true;
            return _this;
        }
        NzMenuDropdownService.decorators = [
            { type: core.Injectable }
        ];
        return NzMenuDropdownService;
    }(core$1.NzMenuBaseService));
    if (false) {
        /** @type {?} */
        NzMenuDropdownService.prototype.isInDropDown;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDropdownContextComponent = /** @class */ (function () {
        function NzDropdownContextComponent(cdr) {
            this.cdr = cdr;
            this.open = true;
            this.dropDownPosition = 'bottom';
            this.destroy$ = new rxjs.Subject();
        }
        /**
         * @param {?} open
         * @param {?} templateRef
         * @param {?} positionChanges
         * @param {?} control
         * @return {?}
         */
        NzDropdownContextComponent.prototype.init = /**
         * @param {?} open
         * @param {?} templateRef
         * @param {?} positionChanges
         * @param {?} control
         * @return {?}
         */
        function (open, templateRef, positionChanges, control) {
            var _this = this;
            this.open = open;
            this.templateRef = templateRef;
            this.control = control;
            positionChanges.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.dropDownPosition = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzDropdownContextComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this.open = false;
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzDropdownContextComponent.prototype.afterAnimation = /**
         * @return {?}
         */
        function () {
            if (!this.open) {
                this.control.dispose();
            }
        };
        // TODO auto set dropdown class after the bug resolved
        /** https://github.com/angular/angular/issues/14842 **/
        // TODO auto set dropdown class after the bug resolved
        /**
         * https://github.com/angular/angular/issues/14842 *
         * @return {?}
         */
        NzDropdownContextComponent.prototype.ngOnDestroy = 
        // TODO auto set dropdown class after the bug resolved
        /**
         * https://github.com/angular/angular/issues/14842 *
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzDropdownContextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-dropdown-context',
                        exportAs: 'nzDropdownContext',
                        animations: [core$1.slideMotion],
                        preserveWhitespaces: false,
                        template: "<div *ngIf=\"open\"\n  class=\"ant-dropdown ant-dropdown-placement-bottomLeft\"\n  [@slideMotion]=\"dropDownPosition\"\n  (@slideMotion.done)=\"afterAnimation()\">\n  <ng-template [ngTemplateOutlet]=\"templateRef\"></ng-template>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [NzMenuDropdownService],
                        styles: ["\n      nz-dropdown-context {\n        display: block;\n      }\n\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzDropdownContextComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        return NzDropdownContextComponent;
    }());
    if (false) {
        /** @type {?} */
        NzDropdownContextComponent.prototype.open;
        /** @type {?} */
        NzDropdownContextComponent.prototype.templateRef;
        /** @type {?} */
        NzDropdownContextComponent.prototype.dropDownPosition;
        /**
         * @type {?}
         * @private
         */
        NzDropdownContextComponent.prototype.control;
        /**
         * @type {?}
         * @private
         */
        NzDropdownContextComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzDropdownContextComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function dropdownMenuServiceFactory(injector) {
        return injector.get(NzMenuDropdownService);
    }
    var NzDropdownMenuComponent = /** @class */ (function () {
        function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.nzMenuDropdownService = nzMenuDropdownService;
            this.noAnimation = noAnimation;
            this.open = false;
            this.triggerWidth = 0;
            this.dropDownPosition = 'bottom';
            this.visible$ = new rxjs.Subject();
            this.nzTrigger = 'hover';
            this.nzPlacement = 'bottomLeft';
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzTableFilter = false;
        }
        /**
         * @param {?} visible
         * @param {?=} trigger
         * @return {?}
         */
        NzDropdownMenuComponent.prototype.setVisibleStateWhen = /**
         * @param {?} visible
         * @param {?=} trigger
         * @return {?}
         */
        function (visible, trigger) {
            if (trigger === void 0) { trigger = 'all'; }
            if (this.nzTrigger === trigger || trigger === 'all') {
                this.visible$.next(visible);
            }
        };
        /**
         * @template T
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        NzDropdownMenuComponent.prototype.setValue = /**
         * @template T
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            this[key] = value;
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzDropdownMenuComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        };
        NzDropdownMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "nz-dropdown-menu",
                        template: "<ng-template>\n  <div *ngIf=\"open\" class=\"{{'ant-dropdown nz-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n       [ngClass]=\"nzOverlayClassName\"\n       [ngStyle]=\"nzOverlayStyle\"\n       [@slideMotion]=\"dropDownPosition\"\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n       (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n       (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                        exportAs: "nzDropdownMenu",
                        animations: [core$1.slideMotion],
                        providers: [
                            NzMenuDropdownService,
                            {
                                provide: core$1.NzDropdownHigherOrderServiceToken,
                                useFactory: dropdownMenuServiceFactory,
                                deps: [[new core.Self(), core.Injector]]
                            }
                        ],
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzDropdownMenuComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ViewContainerRef },
            { type: NzMenuDropdownService },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzDropdownMenuComponent.propDecorators = {
            templateRef: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }]
        };
        return NzDropdownMenuComponent;
    }());
    if (false) {
        /** @type {?} */
        NzDropdownMenuComponent.prototype.open;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.triggerWidth;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.dropDownPosition;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.visible$;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.nzTrigger;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.nzPlacement;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.nzOverlayClassName;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.nzOverlayStyle;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.nzTableFilter;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.templateRef;
        /**
         * @type {?}
         * @private
         */
        NzDropdownMenuComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzDropdownMenuComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzDropdownMenuComponent.prototype.renderer;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.viewContainerRef;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.nzMenuDropdownService;
        /** @type {?} */
        NzDropdownMenuComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDropDownDirective = /** @class */ (function () {
        function NzDropDownDirective(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.overlay = overlay;
            this.platform = platform;
            this.nzButtonComponent = nzButtonComponent;
            this.nzButtonGroupComponent = nzButtonGroupComponent;
            this.viewContainerRef = viewContainerRef;
            this.overlayRef = null;
            this.destroy$ = new rxjs.Subject();
            this.triggerWidth = 0;
            this.el = this.elementRef.nativeElement;
            this.dropdownOpen = false;
            this.positions = __spread(core$1.DEFAULT_DROPDOWN_POSITIONS);
            this.positionSubscription = rxjs.Subscription.EMPTY;
            this.overlaySubscription = rxjs.Subscription.EMPTY;
            this.hover$ = rxjs.merge(rxjs.fromEvent(this.el, 'mouseenter').pipe(operators.mapTo(true)), rxjs.fromEvent(this.el, 'mouseleave').pipe(operators.mapTo(false)));
            this.$click = rxjs.fromEvent(this.el, 'click').pipe(operators.tap((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.stopPropagation(); })), operators.mapTo(true));
            this.nzTrigger = 'hover';
            this.nzBackdrop = true;
            this.nzClickHide = true;
            this.nzDisabled = false;
            this.nzVisible = false;
            this.nzTableFilter = false;
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzPlacement = 'bottomLeft';
            this.nzVisibleChange = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
            if (this.nzButtonComponent) {
                this.nzButtonComponent.isInDropdown = true;
            }
            if (this.nzButtonGroupComponent) {
                this.nzButtonGroupComponent.isInDropdown = true;
            }
        }
        /**
         * @param {?} disabled
         * @return {?}
         */
        NzDropDownDirective.prototype.setDisabled = /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            if (disabled) {
                this.renderer.setAttribute(this.el, 'disabled', '');
                if (this.nzVisible) {
                    this.nzVisible = false;
                    this.nzVisibleChange.emit(this.nzVisible);
                    this.updateOverlayByVisible();
                }
            }
            else {
                this.renderer.removeAttribute(this.el, 'disabled');
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDropDownDirective.prototype.getOverlayConfig = /**
         * @private
         * @return {?}
         */
        function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.overlay
                    .position()
                    .flexibleConnectedTo(this.el)
                    .withLockedPosition(),
                minWidth: this.triggerWidth,
                hasBackdrop: this.nzTrigger === 'click',
                backdropClass: this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
                scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
        };
        /**
         * @private
         * @return {?}
         */
        NzDropDownDirective.prototype.createOverlay = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.overlayRef) {
                /** @type {?} */
                var config = this.getOverlayConfig();
                this.overlayRef = this.overlay.create(config);
                this.subscribeOverlayEvent(this.overlayRef);
                this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
                return this.overlayRef;
            }
            else {
                /** @type {?} */
                var overlayConfig = this.overlayRef.getConfig();
                this.updateOverlayConfig(overlayConfig);
                return this.overlayRef;
            }
        };
        /**
         * @param {?} overlayConfig
         * @return {?}
         */
        NzDropDownDirective.prototype.updateOverlayConfig = /**
         * @param {?} overlayConfig
         * @return {?}
         */
        function (overlayConfig) {
            overlayConfig.minWidth = this.triggerWidth;
            overlayConfig.hasBackdrop = this.nzTrigger === 'click';
            return overlayConfig;
        };
        /**
         * @return {?}
         */
        NzDropDownDirective.prototype.dispose = /**
         * @return {?}
         */
        function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
                this.overlayRef = null;
                this.positionSubscription.unsubscribe();
                this.overlaySubscription.unsubscribe();
            }
        };
        /**
         * @private
         * @param {?} position
         * @return {?}
         */
        NzDropDownDirective.prototype.subscribeToPositions = /**
         * @private
         * @param {?} position
         * @return {?}
         */
        function (position) {
            var _this = this;
            this.positionSubscription.unsubscribe();
            this.positionSubscription = position.positionChanges.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} change
             * @return {?}
             */
            function (change) {
                _this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
            }));
        };
        /**
         * @private
         * @param {?} overlayRef
         * @return {?}
         */
        NzDropDownDirective.prototype.subscribeOverlayEvent = /**
         * @private
         * @param {?} overlayRef
         * @return {?}
         */
        function (overlayRef) {
            var _this = this;
            this.overlaySubscription.unsubscribe();
            this.overlaySubscription = rxjs.merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.keyCode === keycodes.ESCAPE && !keycodes.hasModifierKey(e); }))))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.nzDropdownMenu.setVisibleStateWhen(false);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NzDropDownDirective.prototype.getPortal = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
                this.portal = new portal.TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
            }
            return this.portal;
        };
        /**
         * @private
         * @return {?}
         */
        NzDropDownDirective.prototype.openMenu = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.dropdownOpen) {
                /** @type {?} */
                var overlayRef = this.createOverlay();
                /** @type {?} */
                var overlayConfig = overlayRef.getConfig();
                this.nzDropdownMenu.setValue('open', true);
                this.setPosition((/** @type {?} */ (overlayConfig.positionStrategy)));
                overlayRef.attach(this.getPortal());
                this.dropdownOpen = true;
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDropDownDirective.prototype.closeMenu = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.overlayRef) {
                this.overlayRef.detach();
                this.dropdownOpen = false;
                this.nzDropdownMenu.setValue('open', false);
            }
        };
        /**
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */
        NzDropDownDirective.prototype.setPosition = /**
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */
        function (positionStrategy) {
            this.positionStrategy = positionStrategy;
            positionStrategy.withPositions(__spread(this.positions));
        };
        /**
         * @private
         * @param {?} positions
         * @return {?}
         */
        NzDropDownDirective.prototype.updatePositionStrategy = /**
         * @private
         * @param {?} positions
         * @return {?}
         */
        function (positions) {
            if (this.positionStrategy) {
                this.positionStrategy.withPositions(positions);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDropDownDirective.prototype.setTriggerWidth = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.platform.isBrowser) {
                /** @type {?} */
                var element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
                this.triggerWidth = element.getBoundingClientRect().width;
            }
        };
        /**
         * @return {?}
         */
        NzDropDownDirective.prototype.initActionSubscribe = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
            /** @type {?} */
            var dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
            /** @type {?} */
            var menuClickVisible$ = this.nzClickHide
                ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(operators.mapTo(false))
                : rxjs.EMPTY;
            /** @type {?} */
            var supVisible$ = rxjs.merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
            /** @type {?} */
            var subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
            rxjs.combineLatest([supVisible$, subVisible$])
                .pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), supVisible = _b[0], subVisible = _b[1];
                return supVisible || subVisible;
            })), operators.debounceTime(50), operators.distinctUntilChanged(), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} visible
             * @return {?}
             */
            function (visible) {
                if (!_this.nzDisabled && _this.nzVisible !== visible) {
                    _this.nzVisible = visible;
                    _this.updateOverlayByVisible();
                    _this.nzVisibleChange.emit(_this.nzVisible);
                    _this.setTriggerWidth();
                    _this.nzDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
                }
            }));
        };
        /**
         * @return {?}
         */
        NzDropDownDirective.prototype.updateOverlayByVisible = /**
         * @return {?}
         */
        function () {
            if (this.nzVisible) {
                this.openMenu();
            }
            else {
                this.closeMenu();
            }
        };
        /**
         * @return {?}
         */
        NzDropDownDirective.prototype.updateDisabledState = /**
         * @return {?}
         */
        function () {
            this.setDisabled(this.nzDisabled);
        };
        /**
         * @param {?} placement
         * @param {?} positions
         * @return {?}
         */
        NzDropDownDirective.prototype.regeneratePosition = /**
         * @param {?} placement
         * @param {?} positions
         * @return {?}
         */
        function (placement, positions) {
            return __spread([core$1.POSITION_MAP[placement]], positions);
        };
        /**
         * @return {?}
         */
        NzDropDownDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.nzDropdownMenu) {
                this.setTriggerWidth();
                this.initActionSubscribe();
                this.updateDisabledState();
            }
        };
        /**
         * @return {?}
         */
        NzDropDownDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.dispose();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzDropDownDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var nzVisible = changes.nzVisible, nzTrigger = changes.nzTrigger, nzPlacement = changes.nzPlacement, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTableFilter = changes.nzTableFilter;
            if (this.nzDropdownMenu) {
                if (nzVisible) {
                    this.updateOverlayByVisible();
                    this.nzDropdownMenu.visible$.next(this.nzVisible);
                }
                if (nzTrigger) {
                    this.nzDropdownMenu.setValue('nzTrigger', this.nzTrigger);
                }
                if (nzTableFilter) {
                    this.nzDropdownMenu.setValue('nzTableFilter', this.nzTableFilter);
                }
                if (nzOverlayClassName) {
                    this.nzDropdownMenu.setValue('nzOverlayClassName', this.nzOverlayClassName);
                }
                if (nzOverlayStyle) {
                    this.nzDropdownMenu.setValue('nzOverlayStyle', this.nzOverlayStyle);
                }
                if (nzPlacement) {
                    this.nzDropdownMenu.setValue('nzPlacement', this.nzPlacement);
                    this.nzDropdownMenu.setValue('dropDownPosition', this.nzDropdownMenu.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom');
                    this.positions = this.regeneratePosition(this.nzPlacement, this.positions);
                    this.updatePositionStrategy(this.positions);
                }
            }
            if (nzDisabled) {
                this.updateDisabledState();
            }
        };
        NzDropDownDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-dropdown]',
                        exportAs: 'nzDropdown'
                    },] }
        ];
        /** @nocollapse */
        NzDropDownDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: overlay.Overlay },
            { type: platform.Platform },
            { type: button.NzButtonComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: button.NzButtonGroupComponent, decorators: [{ type: core.Optional }] },
            { type: core.ViewContainerRef }
        ]; };
        NzDropDownDirective.propDecorators = {
            nzDropdownMenu: [{ type: core.Input }],
            nzTrigger: [{ type: core.Input }],
            nzMatchWidthElement: [{ type: core.Input }],
            nzBackdrop: [{ type: core.Input }],
            nzClickHide: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzVisible: [{ type: core.Input }],
            nzTableFilter: [{ type: core.Input }],
            nzOverlayClassName: [{ type: core.Input }],
            nzOverlayStyle: [{ type: core.Input }],
            nzPlacement: [{ type: core.Input }],
            nzVisibleChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzClickHide", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzVisible", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzTableFilter", void 0);
        return NzDropDownDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.portal;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.overlayRef;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.triggerWidth;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.dropdownOpen;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.positionStrategy;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.positions;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.positionSubscription;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.overlaySubscription;
        /** @type {?} */
        NzDropDownDirective.prototype.hover$;
        /** @type {?} */
        NzDropDownDirective.prototype.$click;
        /** @type {?} */
        NzDropDownDirective.prototype.nzDropdownMenu;
        /** @type {?} */
        NzDropDownDirective.prototype.nzTrigger;
        /** @type {?} */
        NzDropDownDirective.prototype.nzMatchWidthElement;
        /** @type {?} */
        NzDropDownDirective.prototype.nzBackdrop;
        /** @type {?} */
        NzDropDownDirective.prototype.nzClickHide;
        /** @type {?} */
        NzDropDownDirective.prototype.nzDisabled;
        /** @type {?} */
        NzDropDownDirective.prototype.nzVisible;
        /** @type {?} */
        NzDropDownDirective.prototype.nzTableFilter;
        /** @type {?} */
        NzDropDownDirective.prototype.nzOverlayClassName;
        /** @type {?} */
        NzDropDownDirective.prototype.nzOverlayStyle;
        /** @type {?} */
        NzDropDownDirective.prototype.nzPlacement;
        /** @type {?} */
        NzDropDownDirective.prototype.nzVisibleChange;
        /** @type {?} */
        NzDropDownDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.nzButtonComponent;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.nzButtonGroupComponent;
        /**
         * @type {?}
         * @private
         */
        NzDropDownDirective.prototype.viewContainerRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function menuServiceFactory(injector) {
        return injector.get(NzMenuDropdownService);
    }
    var NzDropDownComponent = /** @class */ (function () {
        function NzDropDownComponent(cdr, nzMenuDropdownService, noAnimation) {
            this.cdr = cdr;
            this.nzMenuDropdownService = nzMenuDropdownService;
            this.noAnimation = noAnimation;
            this.triggerWidth = 0;
            this.dropDownPosition = 'bottom';
            this.positions = __spread(core$1.DEFAULT_DROPDOWN_POSITIONS);
            this.visible$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
            this.nzTrigger = 'hover';
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzPlacement = 'bottomLeft';
            this.nzClickHide = true;
            this.nzDisabled = false;
            this.nzVisible = false;
            this.nzTableFilter = false;
            this.nzVisibleChange = new core.EventEmitter();
            core$1.warnDeprecation("'nz-dropdown' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en");
        }
        /**
         * @param {?} visible
         * @param {?=} trigger
         * @return {?}
         */
        NzDropDownComponent.prototype.setVisibleStateWhen = /**
         * @param {?} visible
         * @param {?=} trigger
         * @return {?}
         */
        function (visible, trigger) {
            if (trigger === void 0) { trigger = 'all'; }
            if (this.nzTrigger === trigger || trigger === 'all') {
                this.visible$.next(visible);
            }
        };
        /**
         * @param {?} position
         * @return {?}
         */
        NzDropDownComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropDownPosition = position.connectionPair.originY;
            this.cdr.markForCheck();
        };
        /**
         * @param {?} observable$
         * @return {?}
         */
        NzDropDownComponent.prototype.startSubscribe = /**
         * @param {?} observable$
         * @return {?}
         */
        function (observable$) {
            var _this = this;
            /** @type {?} */
            var click$ = this.nzClickHide ? this.nzMenuDropdownService.menuItemClick$.pipe(operators.mapTo(false)) : rxjs.EMPTY;
            rxjs.combineLatest([rxjs.merge(observable$, click$), this.nzMenuDropdownService.menuOpen$])
                .pipe(operators.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value[0] || value[1]; })), operators.debounceTime(50), operators.distinctUntilChanged(), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} visible
             * @return {?}
             */
            function (visible) {
                if (!_this.nzDisabled && _this.nzVisible !== visible) {
                    _this.nzVisible = visible;
                    _this.nzVisibleChange.emit(_this.nzVisible);
                    _this.triggerWidth = _this.nzDropDownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                    _this.cdr.markForCheck();
                }
            }));
        };
        /**
         * @return {?}
         */
        NzDropDownComponent.prototype.updateDisabledState = /**
         * @return {?}
         */
        function () {
            if (this.nzDropDownDirective) {
                this.nzDropDownDirective.setDisabled(this.nzDisabled);
            }
        };
        /**
         * @return {?}
         */
        NzDropDownComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * @return {?}
         */
        NzDropDownComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            this.startSubscribe(rxjs.merge(this.visible$, this.nzTrigger === 'hover' ? this.nzDropDownDirective.hover$ : this.nzDropDownDirective.$click));
            this.updateDisabledState();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzDropDownComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzVisible) {
                this.visible$.next(this.nzVisible);
            }
            if (changes.nzDisabled) {
                this.updateDisabledState();
            }
            if (changes.nzPlacement) {
                this.dropDownPosition = this.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom';
                this.positions = __spread([core$1.POSITION_MAP[this.nzPlacement]], this.positions);
            }
        };
        NzDropDownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-dropdown',
                        exportAs: 'nzDropdown',
                        preserveWhitespaces: false,
                        providers: [
                            NzMenuDropdownService,
                            {
                                provide: core$1.NzDropdownHigherOrderServiceToken,
                                useFactory: menuServiceFactory,
                                deps: [[new core.Self(), core.Injector]]
                            }
                        ],
                        animations: [core$1.slideMotion],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content select=\"[nz-dropdown]\"></ng-content>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\"\n  (backdropClick)=\"setVisibleStateWhen(false)\"\n  (detach)=\"setVisibleStateWhen(false)\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [ngClass]=\"nzOverlayClassName\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [style.minWidth.px]=\"triggerWidth\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\n      <ng-content select=\"[nz-menu]\"></ng-content>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                        styles: ["\n      :root .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzDropDownComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: NzMenuDropdownService },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzDropDownComponent.propDecorators = {
            nzDropDownDirective: [{ type: core.ContentChild, args: [NzDropDownDirective, { static: false },] }],
            nzTrigger: [{ type: core.Input }],
            nzOverlayClassName: [{ type: core.Input }],
            nzOverlayStyle: [{ type: core.Input }],
            nzPlacement: [{ type: core.Input }],
            nzClickHide: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzVisible: [{ type: core.Input }],
            nzTableFilter: [{ type: core.Input }],
            nzVisibleChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownComponent.prototype, "nzClickHide", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownComponent.prototype, "nzVisible", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownComponent.prototype, "nzTableFilter", void 0);
        return NzDropDownComponent;
    }());
    if (false) {
        /** @type {?} */
        NzDropDownComponent.prototype.triggerWidth;
        /** @type {?} */
        NzDropDownComponent.prototype.dropDownPosition;
        /** @type {?} */
        NzDropDownComponent.prototype.positions;
        /** @type {?} */
        NzDropDownComponent.prototype.visible$;
        /**
         * @type {?}
         * @private
         */
        NzDropDownComponent.prototype.destroy$;
        /** @type {?} */
        NzDropDownComponent.prototype.nzDropDownDirective;
        /** @type {?} */
        NzDropDownComponent.prototype.nzTrigger;
        /** @type {?} */
        NzDropDownComponent.prototype.nzOverlayClassName;
        /** @type {?} */
        NzDropDownComponent.prototype.nzOverlayStyle;
        /** @type {?} */
        NzDropDownComponent.prototype.nzPlacement;
        /** @type {?} */
        NzDropDownComponent.prototype.nzClickHide;
        /** @type {?} */
        NzDropDownComponent.prototype.nzDisabled;
        /** @type {?} */
        NzDropDownComponent.prototype.nzVisible;
        /** @type {?} */
        NzDropDownComponent.prototype.nzTableFilter;
        /** @type {?} */
        NzDropDownComponent.prototype.nzVisibleChange;
        /**
         * @type {?}
         * @protected
         */
        NzDropDownComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzDropDownComponent.prototype.nzMenuDropdownService;
        /** @type {?} */
        NzDropDownComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDropdownServiceModule = /** @class */ (function () {
        function NzDropdownServiceModule() {
        }
        NzDropdownServiceModule.decorators = [
            { type: core.NgModule }
        ];
        return NzDropdownServiceModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDropdownService = /** @class */ (function () {
        function NzDropdownService(overlay) {
            this.overlay = overlay;
            core$1.warnDeprecation("'NzDropdownService' is going to be removed in 9.0.0. Please use 'NzContextMenuService' instead. Read https://ng.ant.design/components/dropdown/en");
        }
        /**
         * @param {?} $event
         * @param {?} templateRef
         * @return {?}
         */
        NzDropdownService.prototype.create = /**
         * @param {?} $event
         * @param {?} templateRef
         * @return {?}
         */
        function ($event, templateRef) {
            var _this = this;
            $event.preventDefault();
            this.dispose();
            this.overlayRef = this.overlay.create(new overlay.OverlayConfig({
                scrollStrategy: this.overlay.scrollStrategies.close(),
                panelClass: 'nz-dropdown-panel',
                positionStrategy: this.overlay
                    .position()
                    .flexibleConnectedTo({
                    x: $event.x,
                    y: $event.y
                })
                    .withPositions([
                    new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
                    new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
                    new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
                    new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                ])
            }));
            /** @type {?} */
            var positionChanges = ((/** @type {?} */ (this.overlayRef.getConfig().positionStrategy)))
                .positionChanges;
            /** @type {?} */
            var instance = this.overlayRef.attach(new portal.ComponentPortal(NzDropdownContextComponent)).instance;
            rxjs.fromEvent(document, 'click')
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), operators.take(1))
                .subscribe((/**
             * @return {?}
             */
            function () { return instance.close(); }));
            instance.init(true, templateRef, positionChanges, this);
            return instance;
        };
        /**
         * @return {?}
         */
        NzDropdownService.prototype.dispose = /**
         * @return {?}
         */
        function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
                this.overlayRef = null;
            }
        };
        NzDropdownService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: NzDropdownServiceModule
                    },] }
        ];
        /** @nocollapse */
        NzDropdownService.ctorParameters = function () { return [
            { type: overlay.Overlay }
        ]; };
        /** @nocollapse */ NzDropdownService.ngInjectableDef = core["ɵɵdefineInjectable"]({ factory: function NzDropdownService_Factory() { return new NzDropdownService(core["ɵɵinject"](overlay.Overlay)); }, token: NzDropdownService, providedIn: NzDropdownServiceModule });
        return NzDropdownService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzDropdownService.prototype.overlayRef;
        /**
         * @type {?}
         * @private
         */
        NzDropdownService.prototype.overlay;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = menuServiceFactory;
    var NzDropDownButtonComponent = /** @class */ (function (_super) {
        __extends(NzDropDownButtonComponent, _super);
        function NzDropDownButtonComponent(cdr, nzMenuDropdownService, noAnimation) {
            var _this = _super.call(this, cdr, nzMenuDropdownService, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzSize = 'default';
            _this.nzType = 'default';
            _this.nzIcon = 'ellipsis';
            _this.nzClick = new core.EventEmitter();
            core$1.warnDeprecation("'nz-dropdown-button' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en");
            return _this;
        }
        /** rewrite afterViewInit hook */
        /**
         * rewrite afterViewInit hook
         * @return {?}
         */
        NzDropDownButtonComponent.prototype.ngAfterContentInit = /**
         * rewrite afterViewInit hook
         * @return {?}
         */
        function () {
            this.startSubscribe(this.visible$);
        };
        NzDropDownButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-dropdown-button',
                        exportAs: 'nzDropdownButton',
                        preserveWhitespaces: false,
                        animations: [core$1.slideMotion],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            NzMenuDropdownService,
                            {
                                provide: core$1.NzDropdownHigherOrderServiceToken,
                                useFactory: ɵ0,
                                deps: [[new core.Self(), core.Injector]]
                            }
                        ],
                        template: "<div class=\"ant-btn-group ant-dropdown-button\" nz-dropdown>\n  <button nz-button\n    type=\"button\"\n    [disabled]=\"nzDisabled\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    (click)=\"nzClick.emit($event)\">\n    <span><ng-content></ng-content></span>\n  </button>\n  <button nz-button\n    type=\"button\"\n    class=\"ant-dropdown-trigger\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    [disabled]=\"nzDisabled\"\n    (click)=\"setVisibleStateWhen(true,'click')\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <ng-container *nzStringTemplateOutlet=\"nzIcon\"><i nz-icon [nzType]=\"nzIcon\"></i></ng-container>\n  </button>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\n  (backdropClick)=\"setVisibleStateWhen(false)\"\n  (detach)=\"setVisibleStateWhen(false)\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@slideMotion]=\"dropDownPosition\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <ng-content select=\"[nz-menu]\"></ng-content>\n  </div>\n</ng-template>",
                        styles: ["\n      nz-dropdown-button {\n        position: relative;\n        display: inline-block;\n      }\n\n      :root .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzDropDownButtonComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: NzMenuDropdownService },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzDropDownButtonComponent.propDecorators = {
            nzSize: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzIcon: [{ type: core.Input }],
            nzClick: [{ type: core.Output }],
            nzDropDownDirective: [{ type: core.ViewChild, args: [NzDropDownDirective, { static: true },] }]
        };
        return NzDropDownButtonComponent;
    }(NzDropDownComponent));
    if (false) {
        /** @type {?} */
        NzDropDownButtonComponent.prototype.nzSize;
        /** @type {?} */
        NzDropDownButtonComponent.prototype.nzType;
        /** @type {?} */
        NzDropDownButtonComponent.prototype.nzIcon;
        /** @type {?} */
        NzDropDownButtonComponent.prototype.nzClick;
        /** @type {?} */
        NzDropDownButtonComponent.prototype.nzDropDownDirective;
        /** @type {?} */
        NzDropDownButtonComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzContextMenuServiceModule = /** @class */ (function () {
        function NzContextMenuServiceModule() {
        }
        NzContextMenuServiceModule.decorators = [
            { type: core.NgModule }
        ];
        return NzContextMenuServiceModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDropDownADirective = /** @class */ (function () {
        function NzDropDownADirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
        }
        NzDropDownADirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'a[nz-dropdown]',
                        exportAs: 'nzDropdown'
                    },] }
        ];
        /** @nocollapse */
        NzDropDownADirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return NzDropDownADirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzDropDownADirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzDropDownADirective.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDropDownModule = /** @class */ (function () {
        function NzDropDownModule() {
        }
        NzDropDownModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            overlay.OverlayModule,
                            forms.FormsModule,
                            button.NzButtonModule,
                            menu.NzMenuModule,
                            icon.NzIconModule,
                            platform.PlatformModule,
                            core$1.NzNoAnimationModule,
                            core$1.NzOverlayModule,
                            NzDropdownServiceModule,
                            NzContextMenuServiceModule,
                            core$1.NzAddOnModule
                        ],
                        entryComponents: [NzDropdownContextComponent, NzDropdownMenuComponent],
                        declarations: [
                            NzDropDownComponent,
                            NzDropDownButtonComponent,
                            NzDropDownDirective,
                            NzDropDownADirective,
                            NzDropdownContextComponent,
                            NzDropdownMenuComponent
                        ],
                        exports: [
                            menu.NzMenuModule,
                            NzDropDownComponent,
                            NzDropDownButtonComponent,
                            NzDropDownDirective,
                            NzDropDownADirective,
                            NzDropdownMenuComponent
                        ]
                    },] }
        ];
        return NzDropDownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzContextMenuService = /** @class */ (function () {
        function NzContextMenuService(overlay) {
            this.overlay = overlay;
            this.clickOutsideSubscription = rxjs.Subscription.EMPTY;
            this.clickMenuSubscription = rxjs.Subscription.EMPTY;
            this.positionSubscription = rxjs.Subscription.EMPTY;
        }
        /**
         * @param {?} $event
         * @param {?} nzDropdownMenuComponent
         * @return {?}
         */
        NzContextMenuService.prototype.create = /**
         * @param {?} $event
         * @param {?} nzDropdownMenuComponent
         * @return {?}
         */
        function ($event, nzDropdownMenuComponent) {
            $event.preventDefault();
            /** @type {?} */
            var overlayRef = this.createOverlay($event);
            if (overlayRef.hasAttached()) {
                this.close();
            }
            this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
            this.handleClickOutside();
        };
        /**
         * @return {?}
         */
        NzContextMenuService.prototype.close = /**
         * @return {?}
         */
        function () {
            if (this.overlayRef) {
                this.overlayRef.detach();
                this.setOpenState(false);
                this.clickOutsideSubscription.unsubscribe();
                this.clickMenuSubscription.unsubscribe();
                this.positionSubscription.unsubscribe();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzContextMenuService.prototype.handleClickOutside = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.clickOutsideSubscription.unsubscribe();
            this.clickOutsideSubscription = rxjs.fromEvent(document, 'click')
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), 
            // handle firefox contextmenu event
            operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.button !== 2; })), operators.take(1))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.close();
            }));
        };
        /**
         * @private
         * @param {?} overlayRef
         * @param {?} nzDropdownMenuComponent
         * @return {?}
         */
        NzContextMenuService.prototype.attachTemplatePortal = /**
         * @private
         * @param {?} overlayRef
         * @param {?} nzDropdownMenuComponent
         * @return {?}
         */
        function (overlayRef, nzDropdownMenuComponent) {
            var _this = this;
            this.nzDropdownMenuComponent = nzDropdownMenuComponent;
            nzDropdownMenuComponent.setValue('nzTrigger', 'click');
            this.clickMenuSubscription.unsubscribe();
            this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe((/**
             * @return {?}
             */
            function () {
                _this.close();
            }));
            overlayRef.attach(new portal.TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
            this.setOpenState(true);
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        NzContextMenuService.prototype.setOpenState = /**
         * @private
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.nzDropdownMenuComponent.setValue('open', state);
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NzContextMenuService.prototype.getOverlayConfig = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            return new overlay.OverlayConfig({
                panelClass: 'nz-dropdown-panel',
                positionStrategy: this.generatePositionStrategy($event),
                scrollStrategy: this.overlay.scrollStrategies.close()
            });
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NzContextMenuService.prototype.generatePositionStrategy = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            return this.overlay
                .position()
                .flexibleConnectedTo({ x: $event.x, y: $event.y })
                .withPositions([
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            ]);
        };
        /**
         * @private
         * @param {?} position
         * @return {?}
         */
        NzContextMenuService.prototype.subscribeToPositions = /**
         * @private
         * @param {?} position
         * @return {?}
         */
        function (position) {
            var _this = this;
            this.positionSubscription.unsubscribe();
            this.positionSubscription = position.positionChanges.subscribe((/**
             * @param {?} change
             * @return {?}
             */
            function (change) {
                // TODO: positionChanges won't trigger if not dispose
                _this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
            }));
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NzContextMenuService.prototype.createOverlay = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var config = this.getOverlayConfig($event);
            if (!this.overlayRef) {
                this.overlayRef = this.overlay.create(config);
            }
            else {
                this.updatePosition(this.overlayRef, $event);
            }
            this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
            return this.overlayRef;
        };
        /**
         * @private
         * @param {?} overlayRef
         * @param {?} $event
         * @return {?}
         */
        NzContextMenuService.prototype.updatePosition = /**
         * @private
         * @param {?} overlayRef
         * @param {?} $event
         * @return {?}
         */
        function (overlayRef, $event) {
            overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
        };
        NzContextMenuService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: NzContextMenuServiceModule
                    },] }
        ];
        /** @nocollapse */
        NzContextMenuService.ctorParameters = function () { return [
            { type: overlay.Overlay }
        ]; };
        /** @nocollapse */ NzContextMenuService.ngInjectableDef = core["ɵɵdefineInjectable"]({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(core["ɵɵinject"](overlay.Overlay)); }, token: NzContextMenuService, providedIn: NzContextMenuServiceModule });
        return NzContextMenuService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzContextMenuService.prototype.overlayRef;
        /**
         * @type {?}
         * @private
         */
        NzContextMenuService.prototype.nzDropdownMenuComponent;
        /**
         * @type {?}
         * @private
         */
        NzContextMenuService.prototype.clickOutsideSubscription;
        /**
         * @type {?}
         * @private
         */
        NzContextMenuService.prototype.clickMenuSubscription;
        /**
         * @type {?}
         * @private
         */
        NzContextMenuService.prototype.positionSubscription;
        /**
         * @type {?}
         * @private
         */
        NzContextMenuService.prototype.overlay;
    }

    exports.NzContextMenuService = NzContextMenuService;
    exports.NzContextMenuServiceModule = NzContextMenuServiceModule;
    exports.NzDropDownADirective = NzDropDownADirective;
    exports.NzDropDownButtonComponent = NzDropDownButtonComponent;
    exports.NzDropDownComponent = NzDropDownComponent;
    exports.NzDropDownDirective = NzDropDownDirective;
    exports.NzDropDownModule = NzDropDownModule;
    exports.NzDropdownContextComponent = NzDropdownContextComponent;
    exports.NzDropdownMenuComponent = NzDropdownMenuComponent;
    exports.NzDropdownService = NzDropdownService;
    exports.NzDropdownServiceModule = NzDropdownServiceModule;
    exports.NzMenuDropdownService = NzMenuDropdownService;
    exports.dropdownMenuServiceFactory = dropdownMenuServiceFactory;
    exports.menuServiceFactory = menuServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-dropdown.umd.js.map
