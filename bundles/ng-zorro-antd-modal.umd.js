(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/button'), require('ng-zorro-antd/icon'), require('@angular/cdk/portal')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/modal', ['exports', '@angular/cdk/a11y', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', 'ng-zorro-antd/button', 'ng-zorro-antd/icon', '@angular/cdk/portal'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].modal = {}), global.ng.cdk.a11y, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].button, global['ng-zorro-antd'].icon, global.ng.cdk.portal));
}(this, (function (exports, a11y, keycodes, overlay, common, core, rxjs, operators, core$1, i18n, button, icon, portal) { 'use strict';

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
    function NzModalConfig() { }
    if (false) {
        /** @type {?|undefined} */
        NzModalConfig.prototype.nzMask;
        /** @type {?|undefined} */
        NzModalConfig.prototype.nzMaskClosable;
    }
    /** @type {?} */
    var NZ_MODAL_CONFIG = new core.InjectionToken('NZ_MODAL_CONFIG');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzModalControlServiceModule = /** @class */ (function () {
        function NzModalControlServiceModule() {
        }
        NzModalControlServiceModule.decorators = [
            { type: core.NgModule }
        ];
        return NzModalControlServiceModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function RegisteredMeta() { }
    if (false) {
        /** @type {?} */
        RegisteredMeta.prototype.modalRef;
        /** @type {?} */
        RegisteredMeta.prototype.afterOpenSubscription;
        /** @type {?} */
        RegisteredMeta.prototype.afterCloseSubscription;
    }
    var NzModalControlService = /** @class */ (function () {
        function NzModalControlService(parentService) {
            this.parentService = parentService;
            this.rootOpenModals = this.parentService ? null : [];
            this.rootAfterAllClose = this.parentService ? null : new rxjs.Subject();
            this.rootRegisteredMetaMap = this.parentService ? null : new Map();
        }
        Object.defineProperty(NzModalControlService.prototype, "afterAllClose", {
            // Track singleton afterAllClose through over the injection tree
            get: 
            // Track singleton afterAllClose through over the injection tree
            /**
             * @return {?}
             */
            function () {
                return this.parentService ? this.parentService.afterAllClose : (/** @type {?} */ (this.rootAfterAllClose));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalControlService.prototype, "openModals", {
            // Track singleton openModals array through over the injection tree
            get: 
            // Track singleton openModals array through over the injection tree
            /**
             * @return {?}
             */
            function () {
                return this.parentService ? this.parentService.openModals : (/** @type {?} */ (this.rootOpenModals));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalControlService.prototype, "registeredMetaMap", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                // Registered modal for later usage
                return this.parentService ? this.parentService.registeredMetaMap : (/** @type {?} */ (this.rootRegisteredMetaMap));
            },
            enumerable: true,
            configurable: true
        });
        // Register a modal to listen its open/close
        // Register a modal to listen its open/close
        /**
         * @param {?} modalRef
         * @return {?}
         */
        NzModalControlService.prototype.registerModal = 
        // Register a modal to listen its open/close
        /**
         * @param {?} modalRef
         * @return {?}
         */
        function (modalRef) {
            var _this = this;
            if (!this.hasRegistered(modalRef)) {
                /** @type {?} */
                var afterOpenSubscription = modalRef.afterOpen.subscribe((/**
                 * @return {?}
                 */
                function () { return _this.openModals.push(modalRef); }));
                /** @type {?} */
                var afterCloseSubscription = modalRef.afterClose.subscribe((/**
                 * @return {?}
                 */
                function () { return _this.removeOpenModal(modalRef); }));
                this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
            }
        };
        // deregister modals
        // deregister modals
        /**
         * @param {?} modalRef
         * @return {?}
         */
        NzModalControlService.prototype.deregisterModal = 
        // deregister modals
        /**
         * @param {?} modalRef
         * @return {?}
         */
        function (modalRef) {
            /** @type {?} */
            var registeredMeta = this.registeredMetaMap.get(modalRef);
            if (registeredMeta) {
                // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
                this.removeOpenModal(registeredMeta.modalRef);
                registeredMeta.afterOpenSubscription.unsubscribe();
                registeredMeta.afterCloseSubscription.unsubscribe();
                this.registeredMetaMap.delete(modalRef);
            }
        };
        /**
         * @param {?} modalRef
         * @return {?}
         */
        NzModalControlService.prototype.hasRegistered = /**
         * @param {?} modalRef
         * @return {?}
         */
        function (modalRef) {
            return this.registeredMetaMap.has(modalRef);
        };
        // Close all registered opened modals
        // Close all registered opened modals
        /**
         * @return {?}
         */
        NzModalControlService.prototype.closeAll = 
        // Close all registered opened modals
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = this.openModals.length;
            while (i--) {
                this.openModals[i].close();
            }
        };
        /**
         * @private
         * @param {?} modalRef
         * @return {?}
         */
        NzModalControlService.prototype.removeOpenModal = /**
         * @private
         * @param {?} modalRef
         * @return {?}
         */
        function (modalRef) {
            /** @type {?} */
            var index = this.openModals.indexOf(modalRef);
            if (index > -1) {
                this.openModals.splice(index, 1);
                if (!this.openModals.length) {
                    this.afterAllClose.next();
                }
            }
        };
        NzModalControlService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: NzModalControlServiceModule
                    },] }
        ];
        /** @nocollapse */
        NzModalControlService.ctorParameters = function () { return [
            { type: NzModalControlService, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        /** @nocollapse */ NzModalControlService.ngInjectableDef = core["ɵɵdefineInjectable"]({ factory: function NzModalControlService_Factory() { return new NzModalControlService(core["ɵɵinject"](NzModalControlService, 12)); }, token: NzModalControlService, providedIn: NzModalControlServiceModule });
        return NzModalControlService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzModalControlService.prototype.rootOpenModals;
        /**
         * @type {?}
         * @private
         */
        NzModalControlService.prototype.rootAfterAllClose;
        /**
         * @type {?}
         * @private
         */
        NzModalControlService.prototype.rootRegisteredMetaMap;
        /**
         * @type {?}
         * @private
         */
        NzModalControlService.prototype.parentService;
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
     * API class that public to users to handle the modal instance.
     * NzModalRef is aim to avoid accessing to the modal instance directly by users.
     * @abstract
     * @template T, R
     */
    // tslint:disable-next-line:no-any
    var   /**
     * API class that public to users to handle the modal instance.
     * NzModalRef is aim to avoid accessing to the modal instance directly by users.
     * @abstract
     * @template T, R
     */
    // tslint:disable-next-line:no-any
    NzModalRef = /** @class */ (function () {
        function NzModalRef() {
        }
        return NzModalRef;
    }());
    if (false) {
        /** @type {?} */
        NzModalRef.prototype.afterOpen;
        /** @type {?} */
        NzModalRef.prototype.afterClose;
        /**
         * @abstract
         * @return {?}
         */
        NzModalRef.prototype.open = function () { };
        /**
         * @abstract
         * @param {?=} result
         * @return {?}
         */
        NzModalRef.prototype.close = function (result) { };
        /**
         * @abstract
         * @param {?=} result
         * @return {?}
         */
        NzModalRef.prototype.destroy = function (result) { };
        /**
         * Trigger the nzOnOk/nzOnCancel by manual
         * @abstract
         * @return {?}
         */
        NzModalRef.prototype.triggerOk = function () { };
        /**
         * @abstract
         * @return {?}
         */
        NzModalRef.prototype.triggerCancel = function () { };
        /**
         * Return the component instance of nzContent when specify nzContent as a Component
         * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
         * @abstract
         * @return {?}
         */
        NzModalRef.prototype.getContentComponent = function () { };
        /**
         * Get the dom element of this Modal
         * @abstract
         * @return {?}
         */
        NzModalRef.prototype.getElement = function () { };
        /**
         * Get the instance of the Modal itself
         * @abstract
         * @return {?}
         */
        NzModalRef.prototype.getInstance = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzModalFooterDirective = /** @class */ (function () {
        function NzModalFooterDirective(nzModalRef, templateRef) {
            this.nzModalRef = nzModalRef;
            this.templateRef = templateRef;
            if (this.nzModalRef) {
                this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
            }
        }
        NzModalFooterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nzModalFooter]',
                        exportAs: 'nzModalFooter'
                    },] }
        ];
        /** @nocollapse */
        NzModalFooterDirective.ctorParameters = function () { return [
            { type: NzModalRef, decorators: [{ type: core.Optional }] },
            { type: core.TemplateRef }
        ]; };
        return NzModalFooterDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzModalFooterDirective.prototype.nzModalRef;
        /** @type {?} */
        NzModalFooterDirective.prototype.templateRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODAL_ANIMATE_DURATION = 200;
    // Duration when perform animations (ms)
    /** @type {?} */
    var WRAP_CLASS_NAME = 'ant-modal-wrap';
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'modal';
    /**
     * @template T, R
     */
    var NzModalComponent = /** @class */ (function (_super) {
        __extends(NzModalComponent, _super);
        function NzModalComponent(nzConfigService, overlay, overlayKeyboardDispatcher, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, nzModalGlobalConfig, document // tslint:disable-line:no-any
        ) {
            var _this = _super.call(this) || this;
            _this.nzConfigService = nzConfigService;
            _this.overlay = overlay;
            _this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
            _this.i18n = i18n;
            _this.cfr = cfr;
            _this.elementRef = elementRef;
            _this.viewContainer = viewContainer;
            _this.modalControl = modalControl;
            _this.focusTrapFactory = focusTrapFactory;
            _this.cdr = cdr;
            _this.nzModalGlobalConfig = nzModalGlobalConfig;
            _this.document = document;
            _this.nzVisible = false;
            _this.nzClosable = true;
            _this.nzOkLoading = false;
            _this.nzOkDisabled = false;
            _this.nzCancelDisabled = false;
            _this.nzCancelLoading = false;
            _this.nzKeyboard = true;
            _this.nzNoAnimation = false;
            // [STATIC] Default Modal ONLY
            _this.nzGetContainer = (/**
             * @return {?}
             */
            function () { return _this.overlay.create(); }); // [STATIC]
            // [STATIC]
            _this.nzZIndex = 1000;
            _this.nzWidth = 520;
            _this.nzCloseIcon = 'close';
            _this.nzOkType = 'primary';
            _this.nzIconType = 'question-circle'; // Confirm Modal ONLY
            // Confirm Modal ONLY
            _this.nzModalType = 'default';
            _this.nzOnOk = new core.EventEmitter();
            _this.nzOnCancel = new core.EventEmitter();
            _this.nzAfterOpen = new core.EventEmitter(); // Trigger when modal open(visible) after animations
            // Trigger when modal open(visible) after animations
            _this.nzAfterClose = new core.EventEmitter(); // Trigger when modal leave-animation over
            // Trigger when modal leave-animation over
            _this.nzVisibleChange = new core.EventEmitter();
            _this.locale = {};
            _this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
            _this.unsubscribe$ = new rxjs.Subject();
            _this.dialogMouseDown = false;
            _this.scrollStrategy = _this.overlay.scrollStrategies.block();
            if (_this.nzModalGlobalConfig) {
                core$1.warnDeprecation('`NZ_MODAL_CONFIG` has been deprecated and will be removed in 9.0.0. Please use global config instead.');
            }
            return _this;
        }
        Object.defineProperty(NzModalComponent.prototype, "modalFooter", {
            set: 
            // Only aim to focus the ok button that needs to be auto focused
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value && value.templateRef) {
                    this.setFooterWithTemplate(value.templateRef);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
            get: /**
             * @return {?}
             */
            function () {
                // Observable alias for nzAfterOpen
                return this.nzAfterOpen.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "afterClose", {
            get: /**
             * @return {?}
             */
            function () {
                // Observable alias for nzAfterClose
                return this.nzAfterClose.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "cancelText", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzCancelText || (/** @type {?} */ (this.locale.cancelText));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "okText", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzOkText || (/** @type {?} */ (this.locale.okText));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "hidden", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.nzVisible && !this.animationState;
            } // Indicate whether this dialog should hidden
            ,
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "mask", {
            /**
             * @description
             * The calculated highest weight of mask value
             *
             * Weight of different mask input:
             * component default value < global configuration < component input value
             */
            get: 
            // Indicate whether this dialog should hidden
            /**
             * \@description
             * The calculated highest weight of mask value
             *
             * Weight of different mask input:
             * component default value < global configuration < component input value
             * @return {?}
             */
            function () {
                if (this.nzMask != null) {
                    return this.nzMask;
                }
                else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMask != null) {
                    return this.nzModalGlobalConfig.nzMask;
                }
                else {
                    return true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "maskClosable", {
            /**
             * @description
             * The calculated highest weight of maskClosable value
             *
             * Weight of different maskClosable input:
             * component default value < global configuration < component input value
             */
            get: /**
             * \@description
             * The calculated highest weight of maskClosable value
             *
             * Weight of different maskClosable input:
             * component default value < global configuration < component input value
             * @return {?}
             */
            function () {
                if (this.nzMaskClosable != null) {
                    return this.nzMaskClosable;
                }
                else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMaskClosable != null) {
                    return this.nzModalGlobalConfig.nzMaskClosable;
                }
                else {
                    return true;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Modal');
            }));
            if (this.isComponent(this.nzContent)) {
                this.createDynamicComponent((/** @type {?} */ (this.nzContent))); // Create component along without View
            }
            if (this.isModalButtons(this.nzFooter)) {
                // Setup default button options
                this.nzFooter = this.formatModalButtons((/** @type {?} */ (this.nzFooter)));
            }
            // Place the modal dom to elsewhere
            this.container = typeof this.nzGetContainer === 'function' ? this.nzGetContainer() : this.nzGetContainer;
            if (this.container instanceof HTMLElement) {
                this.container.appendChild(this.elementRef.nativeElement);
                rxjs.fromEvent(this.document.body, 'keydown')
                    .pipe(operators.takeUntil(this.unsubscribe$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.keydownListener(e); }));
            }
            else if (this.container instanceof overlay.OverlayRef) {
                // NOTE: only attach the dom to overlay, the view container is not changed actually
                this.setOverlayRef(this.container);
                this.container.overlayElement.appendChild(this.elementRef.nativeElement);
            }
            if (this.overlayRef) {
                this.overlayRef
                    .keydownEvents()
                    .pipe(operators.takeUntil(this.unsubscribe$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.keydownListener(e); }));
            }
            // Register modal when afterOpen/afterClose is stable
            this.modalControl.registerModal(this);
        };
        // [NOTE] NOT available when using by service!
        // Because ngOnChanges never be called when using by service,
        // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
        // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
        // [NOTE] NOT available when using by service!
        // Because ngOnChanges never be called when using by service,
        // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
        // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
        /**
         * @param {?} changes
         * @return {?}
         */
        NzModalComponent.prototype.ngOnChanges = 
        // [NOTE] NOT available when using by service!
        // Because ngOnChanges never be called when using by service,
        // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
        // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
        /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzVisible) {
                this.handleVisibleStateChange(this.nzVisible, !changes.nzVisible.firstChange); // Do not trigger animation while initializing
            }
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            // If using Component, it is the time to attach View while bodyContainer is ready
            if (this.contentComponentRef) {
                this.bodyContainer.insert(this.contentComponentRef.hostView);
            }
            if (this.autoFocusButtonOk) {
                ((/** @type {?} */ (this.autoFocusButtonOk.nativeElement))).focus();
            }
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Close self before destructing
            this.changeVisibleFromInside(false).then((/**
             * @return {?}
             */
            function () {
                _this.modalControl.deregisterModal(_this);
                if (_this.container instanceof overlay.OverlayRef) {
                    _this.container.dispose();
                }
                _this.unsubscribe$.next();
                _this.unsubscribe$.complete();
            }));
            clearTimeout(this.timeoutId);
        };
        /**
         * @param {?} templateRef
         * @return {?}
         */
        NzModalComponent.prototype.setFooterWithTemplate = /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this.nzFooter = templateRef;
            this.cdr.markForCheck();
        };
        /**
         * @param {?} overlayRef
         * @return {?}
         */
        NzModalComponent.prototype.setOverlayRef = /**
         * @param {?} overlayRef
         * @return {?}
         */
        function (overlayRef) {
            this.overlayRef = overlayRef;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NzModalComponent.prototype.keydownListener = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.keyCode === keycodes.ESCAPE && this.nzKeyboard) {
                this.onClickOkCancel('cancel');
            }
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.open = /**
         * @return {?}
         */
        function () {
            this.changeVisibleFromInside(true);
        };
        /**
         * @param {?=} result
         * @return {?}
         */
        NzModalComponent.prototype.close = /**
         * @param {?=} result
         * @return {?}
         */
        function (result) {
            this.changeVisibleFromInside(false, result);
        };
        /**
         * @param {?=} result
         * @return {?}
         */
        NzModalComponent.prototype.destroy = /**
         * @param {?=} result
         * @return {?}
         */
        function (result) {
            // Destroy equals Close
            this.close(result);
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.triggerOk = /**
         * @return {?}
         */
        function () {
            this.onClickOkCancel('ok');
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.triggerCancel = /**
         * @return {?}
         */
        function () {
            this.onClickOkCancel('cancel');
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.getInstance = /**
         * @return {?}
         */
        function () {
            return this;
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.getContentComponentRef = /**
         * @return {?}
         */
        function () {
            return this.contentComponentRef;
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.getContentComponent = /**
         * @return {?}
         */
        function () {
            return this.contentComponentRef && this.contentComponentRef.instance;
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.getElement = /**
         * @return {?}
         */
        function () {
            return this.elementRef && this.elementRef.nativeElement;
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.onMaskDialogDown = /**
         * @return {?}
         */
        function () {
            this.dialogMouseDown = true;
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.onDialogUp = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.dialogMouseDown) {
                this.timeoutId = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.dialogMouseDown = false;
                }), 0);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzModalComponent.prototype.onClickMask = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.mask &&
                this.maskClosable &&
                ((/** @type {?} */ ($event.target))).classList.contains(WRAP_CLASS_NAME) &&
                this.nzVisible &&
                !this.dialogMouseDown) {
                this.onClickOkCancel('cancel');
            }
        };
        /**
         * @param {?} type
         * @return {?}
         */
        NzModalComponent.prototype.isModalType = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            return this.nzModalType === type;
        };
        /**
         * @return {?}
         */
        NzModalComponent.prototype.onClickCloseBtn = /**
         * @return {?}
         */
        function () {
            if (this.nzVisible) {
                this.onClickOkCancel('cancel');
            }
        };
        /**
         * @param {?} type
         * @return {?}
         */
        NzModalComponent.prototype.onClickOkCancel = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            var _this = this;
            /** @type {?} */
            var trigger = { ok: this.nzOnOk, cancel: this.nzOnCancel }[type];
            /** @type {?} */
            var loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[type];
            if (trigger instanceof core.EventEmitter) {
                trigger.emit(this.getContentComponent());
            }
            else if (typeof trigger === 'function') {
                /** @type {?} */
                var result = trigger(this.getContentComponent());
                /** @type {?} */
                var caseClose_1 = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                function (doClose) { return doClose !== false && _this.close((/** @type {?} */ (doClose))); });
                if (core$1.isPromise(result)) {
                    this[loadingKey] = true;
                    /** @type {?} */
                    var handleThen = (/**
                     * @param {?} doClose
                     * @return {?}
                     */
                    function (doClose) {
                        _this[loadingKey] = false;
                        caseClose_1(doClose);
                    });
                    ((/** @type {?} */ (result))).then(handleThen).catch(handleThen);
                }
                else {
                    caseClose_1(result);
                }
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzModalComponent.prototype.isNonEmptyString = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return typeof value === 'string' && value !== '';
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzModalComponent.prototype.isTemplateRef = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value instanceof core.TemplateRef;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzModalComponent.prototype.isComponent = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value instanceof core.Type;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzModalComponent.prototype.isModalButtons = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return Array.isArray(value) && value.length > 0;
        };
        // Do rest things when visible state changed
        // Do rest things when visible state changed
        /**
         * @private
         * @param {?} visible
         * @param {?=} animation
         * @param {?=} closeResult
         * @return {?}
         */
        NzModalComponent.prototype.handleVisibleStateChange = 
        // Do rest things when visible state changed
        /**
         * @private
         * @param {?} visible
         * @param {?=} animation
         * @param {?=} closeResult
         * @return {?}
         */
        function (visible, animation, closeResult) {
            var _this = this;
            if (animation === void 0) { animation = true; }
            if (visible) {
                // Hide scrollbar at the first time when shown up
                this.scrollStrategy.enable();
                this.savePreviouslyFocusedElement();
                this.trapFocus();
                if (this.container instanceof overlay.OverlayRef) {
                    this.overlayKeyboardDispatcher.add(this.overlayRef);
                }
            }
            else {
                if (this.container instanceof overlay.OverlayRef) {
                    this.overlayKeyboardDispatcher.remove(this.overlayRef);
                }
            }
            return Promise.resolve(animation ? this.animateTo(visible) : undefined).then((/**
             * @return {?}
             */
            function () {
                // Emit open/close event after animations over
                if (visible) {
                    _this.nzAfterOpen.emit();
                }
                else {
                    _this.nzAfterClose.emit(closeResult);
                    _this.restoreFocus();
                    _this.scrollStrategy.disable();
                    // Mark the for check so it can react if the view container is using OnPush change detection.
                    _this.cdr.markForCheck();
                }
            }));
        };
        // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
        // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
        /**
         * @param {?} options
         * @param {?} prop
         * @return {?}
         */
        NzModalComponent.prototype.getButtonCallableProp = 
        // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
        /**
         * @param {?} options
         * @param {?} prop
         * @return {?}
         */
        function (options, prop) {
            /** @type {?} */
            var value = options[prop];
            /** @type {?} */
            var args = [];
            if (this.contentComponentRef) {
                args.push(this.contentComponentRef.instance);
            }
            return typeof value === 'function' ? value.apply(options, args) : value;
        };
        // On nzFooter's modal button click
        // On nzFooter's modal button click
        /**
         * @param {?} button
         * @return {?}
         */
        NzModalComponent.prototype.onButtonClick = 
        // On nzFooter's modal button click
        /**
         * @param {?} button
         * @return {?}
         */
        function (button) {
            /** @type {?} */
            var result = this.getButtonCallableProp(button, 'onClick');
            if (core$1.isPromise(result)) {
                button.loading = true;
                ((/** @type {?} */ (result))).then((/**
                 * @return {?}
                 */
                function () { return (button.loading = false); })).catch((/**
                 * @return {?}
                 */
                function () { return (button.loading = false); }));
            }
        };
        // Change nzVisible from inside
        // Change nzVisible from inside
        /**
         * @private
         * @param {?} visible
         * @param {?=} closeResult
         * @return {?}
         */
        NzModalComponent.prototype.changeVisibleFromInside = 
        // Change nzVisible from inside
        /**
         * @private
         * @param {?} visible
         * @param {?=} closeResult
         * @return {?}
         */
        function (visible, closeResult) {
            if (this.nzVisible !== visible) {
                // Change nzVisible value immediately
                this.nzVisible = visible;
                this.nzVisibleChange.emit(visible);
                return this.handleVisibleStateChange(visible, true, closeResult);
            }
            return Promise.resolve();
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        NzModalComponent.prototype.changeAnimationState = /**
         * @private
         * @param {?} state
         * @return {?}
         */
        function (state) {
            var _a, _b;
            this.animationState = state;
            if (state) {
                this.maskAnimationClassMap = (_a = {},
                    _a["fade-" + state] = true,
                    _a["fade-" + state + "-active"] = true,
                    _a);
                this.modalAnimationClassMap = (_b = {},
                    _b["zoom-" + state] = true,
                    _b["zoom-" + state + "-active"] = true,
                    _b);
            }
            else {
                this.maskAnimationClassMap = this.modalAnimationClassMap = null;
            }
        };
        /**
         * @private
         * @param {?} isVisible
         * @return {?}
         */
        NzModalComponent.prototype.animateTo = /**
         * @private
         * @param {?} isVisible
         * @return {?}
         */
        function (isVisible) {
            var _this = this;
            if (isVisible) {
                // Figure out the lastest click position when shows up
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.updateTransformOrigin(); })); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
            }
            this.changeAnimationState(isVisible ? 'enter' : 'leave');
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                return setTimeout((/**
                 * @return {?}
                 */
                function () {
                    // Return when animation is over
                    _this.changeAnimationState(null);
                    resolve();
                }), _this.nzNoAnimation ? 0 : MODAL_ANIMATE_DURATION);
            }));
        };
        /**
         * @private
         * @param {?} buttons
         * @return {?}
         */
        NzModalComponent.prototype.formatModalButtons = /**
         * @private
         * @param {?} buttons
         * @return {?}
         */
        function (buttons) {
            return buttons.map((/**
             * @param {?} button
             * @return {?}
             */
            function (button) {
                return __assign({
                    type: 'default',
                    size: 'default',
                    autoLoading: true,
                    show: true,
                    loading: false,
                    disabled: false
                }, button);
            }));
        };
        /**
         * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
         * @param component Component class
         */
        /**
         * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
         * @private
         * @param {?} component Component class
         * @return {?}
         */
        NzModalComponent.prototype.createDynamicComponent = /**
         * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
         * @private
         * @param {?} component Component class
         * @return {?}
         */
        function (component) {
            /** @type {?} */
            var factory = this.cfr.resolveComponentFactory(component);
            /** @type {?} */
            var childInjector = core.Injector.create({
                providers: [{ provide: NzModalRef, useValue: this }],
                parent: this.viewContainer.parentInjector
            });
            this.contentComponentRef = factory.create(childInjector);
            if (this.nzComponentParams) {
                Object.assign(this.contentComponentRef.instance, this.nzComponentParams);
            }
            // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
            this.contentComponentRef.changeDetectorRef.detectChanges();
        };
        // Update transform-origin to the last click position on document
        // Update transform-origin to the last click position on document
        /**
         * @private
         * @return {?}
         */
        NzModalComponent.prototype.updateTransformOrigin = 
        // Update transform-origin to the last click position on document
        /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var modalElement = (/** @type {?} */ (this.modalContainer.nativeElement));
            if (this.previouslyFocusedElement) {
                /** @type {?} */
                var previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
                /** @type {?} */
                var lastPosition = core$1.getElementOffset(this.previouslyFocusedElement);
                /** @type {?} */
                var x = lastPosition.left + previouslyDOMRect.width / 2;
                /** @type {?} */
                var y = lastPosition.top + previouslyDOMRect.height / 2;
                this.transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzModalComponent.prototype.savePreviouslyFocusedElement = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.document) {
                this.previouslyFocusedElement = (/** @type {?} */ (this.document.activeElement));
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzModalComponent.prototype.trapFocus = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.focusTrap) {
                this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            }
            this.focusTrap.focusInitialElementWhenReady();
        };
        /**
         * @private
         * @return {?}
         */
        NzModalComponent.prototype.restoreFocus = /**
         * @private
         * @return {?}
         */
        function () {
            // We need the extra check, because IE can set the `activeElement` to null in some cases.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
                this.previouslyFocusedElement.focus();
            }
            if (this.focusTrap) {
                this.focusTrap.destroy();
            }
        };
        NzModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-modal',
                        exportAs: 'nzModal',
                        template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\n\n<div [nzNoAnimation]=\"nzNoAnimation\">\n  <div *ngIf=\"mask\"\n    class=\"ant-modal-mask\"\n    [ngClass]=\"maskAnimationClassMap\"\n    [class.ant-modal-mask-hidden]=\"hidden\"\n    [ngStyle]=\"nzMaskStyle\"\n    [style.zIndex]=\"nzZIndex\"\n  ></div>\n  <div\n    (click)=\"onClickMask($event)\"\n    (mouseup)=\"onDialogUp()\"\n    class=\"ant-modal-wrap {{ nzWrapClassName }}\"\n    [style.zIndex]=\"nzZIndex\"\n    [style.visibility]=\"hidden ? 'hidden' : null\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n  >\n    <div #modalContainer\n      class=\"ant-modal {{ nzClassName }}\"\n      (mousedown)=\"onMaskDialogDown()\"\n      [ngClass]=\"modalAnimationClassMap\"\n      [ngStyle]=\"nzStyle\"\n      [style.width]=\"nzWidth | nzToCssUnit\"\n      [style.transform-origin]=\"transformOrigin\"\n      role=\"document\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"nzClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\n          <span class=\"ant-modal-close-x\">\n            <ng-container *nzStringTemplateOutlet=\"nzCloseIcon\">\n              <i nz-icon [nzType]=\"nzCloseIcon\" class=\"ant-modal-close-icon\"></i>\n            </ng-container>\n          </span>\n        </button>\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- [Predefined] Default Modal Content -->\n<ng-template #tplContentDefault>\n  <div *ngIf=\"nzTitle\" class=\"ant-modal-header\">\n    <div class=\"ant-modal-title\">\n      <ng-container [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\n    <ng-container #bodyContainer>\n      <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div *ngIf=\"nzFooter !== null\" class=\"ant-modal-footer\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(nzFooter)\" [ngTemplateOutlet]=\"nzFooter\"></ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(nzFooter)\"><div [innerHTML]=\"nzFooter\"></div></ng-container>\n      <ng-container *ngSwitchCase=\"isModalButtons(nzFooter)\">\n        <button *ngFor=\"let button of nzFooter\" nz-button\n          (click)=\"onButtonClick(button)\"\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\n          [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n          [nzType]=\"button.type\"\n          [nzShape]=\"button.shape\"\n          [nzSize]=\"button.size\"\n          [nzGhost]=\"button.ghost\"\n        >{{ button.label }}</button>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button *ngIf=\"nzCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"nzCancelLoading\" [disabled]=\"nzCancelDisabled\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"nzOkText!==null\" nz-button [nzType]=\"nzOkType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"nzOkLoading\" [disabled]=\"nzOkDisabled\">\n          {{ okText }}\n        </button>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-template>\n<!-- /[Predefined] Default Modal Content -->\n\n<!-- [Predefined] Confirm Modal Content -->\n<ng-template #tplContentConfirm>\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\n    <div class=\"ant-modal-confirm-body-wrapper\">\n      <div class=\"ant-modal-confirm-body\">\n        <i nz-icon [nzType]=\"nzIconType\"></i>\n        <span class=\"ant-modal-confirm-title\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\n            <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><span [innerHTML]=\"nzTitle\"></span></ng-container>\n          </ng-container>\n        </span>\n        <div class=\"ant-modal-confirm-content\">\n          <ng-container #bodyContainer>\n            <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"ant-modal-confirm-btns\">\n        <button *ngIf=\"nzCancelText!==null\"\n          nz-button\n          (click)=\"onClickOkCancel('cancel')\"\n          [nzLoading]=\"nzCancelLoading\"\n          [disabled]=\"nzCancelDisabled\">\n          {{ cancelText }}\n        </button>\n        <button #autoFocusButtonOk\n          *ngIf=\"nzOkText!==null\"\n          nz-button\n          (click)=\"onClickOkCancel('ok')\"\n          [nzType]=\"nzOkType\"\n          [nzLoading]=\"nzOkLoading\"\n          [disabled]=\"nzOkDisabled\">\n          {{ okText }}\n        </button>\n      </div>\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\n  </div>\n</ng-template>\n<!-- /[Predefined] Confirm Modal Content -->\n",
                        // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                        changeDetection: core.ChangeDetectionStrategy.Default
                    }] }
        ];
        /** @nocollapse */
        NzModalComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: overlay.Overlay },
            { type: overlay.OverlayKeyboardDispatcher },
            { type: i18n.NzI18nService },
            { type: core.ComponentFactoryResolver },
            { type: core.ElementRef },
            { type: core.ViewContainerRef },
            { type: NzModalControlService },
            { type: a11y.FocusTrapFactory },
            { type: core.ChangeDetectorRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NZ_MODAL_CONFIG,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        NzModalComponent.propDecorators = {
            nzVisible: [{ type: core.Input }],
            nzClosable: [{ type: core.Input }],
            nzOkLoading: [{ type: core.Input }],
            nzOkDisabled: [{ type: core.Input }],
            nzCancelDisabled: [{ type: core.Input }],
            nzCancelLoading: [{ type: core.Input }],
            nzKeyboard: [{ type: core.Input }],
            nzNoAnimation: [{ type: core.Input }],
            nzMask: [{ type: core.Input }],
            nzMaskClosable: [{ type: core.Input }],
            nzContent: [{ type: core.Input }],
            nzComponentParams: [{ type: core.Input }],
            nzFooter: [{ type: core.Input }],
            nzGetContainer: [{ type: core.Input }],
            nzZIndex: [{ type: core.Input }],
            nzWidth: [{ type: core.Input }],
            nzWrapClassName: [{ type: core.Input }],
            nzClassName: [{ type: core.Input }],
            nzStyle: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzCloseIcon: [{ type: core.Input }],
            nzMaskStyle: [{ type: core.Input }],
            nzBodyStyle: [{ type: core.Input }],
            nzOkText: [{ type: core.Input }],
            nzCancelText: [{ type: core.Input }],
            nzOkType: [{ type: core.Input }],
            nzIconType: [{ type: core.Input }],
            nzModalType: [{ type: core.Input }],
            nzOnOk: [{ type: core.Input }, { type: core.Output }],
            nzOnCancel: [{ type: core.Input }, { type: core.Output }],
            nzAfterOpen: [{ type: core.Output }],
            nzAfterClose: [{ type: core.Output }],
            nzVisibleChange: [{ type: core.Output }],
            modalContainer: [{ type: core.ViewChild, args: ['modalContainer', { static: true },] }],
            bodyContainer: [{ type: core.ViewChild, args: ['bodyContainer', { static: false, read: core.ViewContainerRef },] }],
            autoFocusButtonOk: [{ type: core.ViewChild, args: ['autoFocusButtonOk', { static: false, read: core.ElementRef },] }],
            modalFooter: [{ type: core.ContentChild, args: [NzModalFooterDirective, { static: false },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzVisible", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzClosable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzOkLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzOkDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzCancelDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzCancelLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzKeyboard", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzModalComponent.prototype, "nzNoAnimation", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzMask", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzMaskClosable", void 0);
        return NzModalComponent;
    }(NzModalRef));
    if (false) {
        /** @type {?} */
        NzModalComponent.prototype.nzVisible;
        /** @type {?} */
        NzModalComponent.prototype.nzClosable;
        /** @type {?} */
        NzModalComponent.prototype.nzOkLoading;
        /** @type {?} */
        NzModalComponent.prototype.nzOkDisabled;
        /** @type {?} */
        NzModalComponent.prototype.nzCancelDisabled;
        /** @type {?} */
        NzModalComponent.prototype.nzCancelLoading;
        /** @type {?} */
        NzModalComponent.prototype.nzKeyboard;
        /** @type {?} */
        NzModalComponent.prototype.nzNoAnimation;
        /** @type {?} */
        NzModalComponent.prototype.nzMask;
        /** @type {?} */
        NzModalComponent.prototype.nzMaskClosable;
        /** @type {?} */
        NzModalComponent.prototype.nzContent;
        /** @type {?} */
        NzModalComponent.prototype.nzComponentParams;
        /** @type {?} */
        NzModalComponent.prototype.nzFooter;
        /** @type {?} */
        NzModalComponent.prototype.nzGetContainer;
        /** @type {?} */
        NzModalComponent.prototype.nzZIndex;
        /** @type {?} */
        NzModalComponent.prototype.nzWidth;
        /** @type {?} */
        NzModalComponent.prototype.nzWrapClassName;
        /** @type {?} */
        NzModalComponent.prototype.nzClassName;
        /** @type {?} */
        NzModalComponent.prototype.nzStyle;
        /** @type {?} */
        NzModalComponent.prototype.nzTitle;
        /** @type {?} */
        NzModalComponent.prototype.nzCloseIcon;
        /** @type {?} */
        NzModalComponent.prototype.nzMaskStyle;
        /** @type {?} */
        NzModalComponent.prototype.nzBodyStyle;
        /** @type {?} */
        NzModalComponent.prototype.nzOkText;
        /** @type {?} */
        NzModalComponent.prototype.nzCancelText;
        /** @type {?} */
        NzModalComponent.prototype.nzOkType;
        /** @type {?} */
        NzModalComponent.prototype.nzIconType;
        /** @type {?} */
        NzModalComponent.prototype.nzModalType;
        /** @type {?} */
        NzModalComponent.prototype.nzOnOk;
        /** @type {?} */
        NzModalComponent.prototype.nzOnCancel;
        /** @type {?} */
        NzModalComponent.prototype.nzAfterOpen;
        /** @type {?} */
        NzModalComponent.prototype.nzAfterClose;
        /** @type {?} */
        NzModalComponent.prototype.nzVisibleChange;
        /** @type {?} */
        NzModalComponent.prototype.modalContainer;
        /** @type {?} */
        NzModalComponent.prototype.bodyContainer;
        /** @type {?} */
        NzModalComponent.prototype.autoFocusButtonOk;
        /** @type {?} */
        NzModalComponent.prototype.locale;
        /** @type {?} */
        NzModalComponent.prototype.maskAnimationClassMap;
        /** @type {?} */
        NzModalComponent.prototype.modalAnimationClassMap;
        /** @type {?} */
        NzModalComponent.prototype.transformOrigin;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.contentComponentRef;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.animationState;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.container;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.previouslyFocusedElement;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.focusTrap;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.scrollStrategy;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.overlayRef;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.dialogMouseDown;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.timeoutId;
        /** @type {?} */
        NzModalComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.overlayKeyboardDispatcher;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.cfr;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.viewContainer;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.modalControl;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.focusTrapFactory;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.nzModalGlobalConfig;
        /**
         * @type {?}
         * @private
         */
        NzModalComponent.prototype.document;
        /* Skipping unhandled member: [key: string]: any;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzModalServiceModule = /** @class */ (function () {
        function NzModalServiceModule() {
        }
        NzModalServiceModule.decorators = [
            { type: core.NgModule }
        ];
        return NzModalServiceModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzModalModule = /** @class */ (function () {
        function NzModalModule() {
        }
        NzModalModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            overlay.OverlayModule,
                            core$1.NzAddOnModule,
                            i18n.NzI18nModule,
                            button.NzButtonModule,
                            icon.NzIconModule,
                            core$1.NzPipesModule,
                            core$1.NzNoAnimationModule,
                            NzModalServiceModule,
                            NzModalControlServiceModule
                        ],
                        exports: [NzModalComponent, NzModalFooterDirective],
                        declarations: [NzModalComponent, NzModalFooterDirective],
                        entryComponents: [NzModalComponent]
                    },] }
        ];
        return NzModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // A builder used for managing service creating modals
    var 
    // A builder used for managing service creating modals
    ModalBuilderForService = /** @class */ (function () {
        function ModalBuilderForService(overlay, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this.overlay = overlay;
            this.createModal();
            if (!('nzGetContainer' in options)) {
                // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
                options.nzGetContainer = undefined; // Override nzGetContainer's default value to prevent creating another overlay
            }
            this.changeProps(options);
            (/** @type {?} */ (this.modalRef)).instance.setOverlayRef(this.overlayRef);
            (/** @type {?} */ (this.modalRef)).instance.open();
            (/** @type {?} */ (this.modalRef)).instance.nzAfterClose.subscribe((/**
             * @return {?}
             */
            function () { return _this.destroyModal(); })); // [NOTE] By default, close equals destroy when using as Service
        }
        /**
         * @return {?}
         */
        ModalBuilderForService.prototype.getInstance = /**
         * @return {?}
         */
        function () {
            return this.modalRef && this.modalRef.instance;
        };
        /**
         * @return {?}
         */
        ModalBuilderForService.prototype.destroyModal = /**
         * @return {?}
         */
        function () {
            if (this.modalRef) {
                this.overlayRef.dispose();
                this.modalRef = null;
            }
        };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        ModalBuilderForService.prototype.changeProps = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (this.modalRef) {
                Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
            }
        };
        // Create component to ApplicationRef
        // Create component to ApplicationRef
        /**
         * @private
         * @return {?}
         */
        ModalBuilderForService.prototype.createModal = 
        // Create component to ApplicationRef
        /**
         * @private
         * @return {?}
         */
        function () {
            this.overlayRef = this.overlay.create();
            this.modalRef = this.overlayRef.attach(new portal.ComponentPortal(NzModalComponent));
        };
        return ModalBuilderForService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ModalBuilderForService.prototype.modalRef;
        /**
         * @type {?}
         * @private
         */
        ModalBuilderForService.prototype.overlayRef;
        /**
         * @type {?}
         * @private
         */
        ModalBuilderForService.prototype.overlay;
    }
    var NzModalService = /** @class */ (function () {
        function NzModalService(overlay, modalControl) {
            this.overlay = overlay;
            this.modalControl = modalControl;
        }
        Object.defineProperty(NzModalService.prototype, "openModals", {
            // Track of the current close modals (we assume invisible is close this time)
            get: 
            // Track of the current close modals (we assume invisible is close this time)
            /**
             * @return {?}
             */
            function () {
                return this.modalControl.openModals;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalService.prototype, "afterAllClose", {
            get: /**
             * @return {?}
             */
            function () {
                return this.modalControl.afterAllClose.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        // Closes all of the currently-open dialogs
        // Closes all of the currently-open dialogs
        /**
         * @return {?}
         */
        NzModalService.prototype.closeAll = 
        // Closes all of the currently-open dialogs
        /**
         * @return {?}
         */
        function () {
            this.modalControl.closeAll();
        };
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        NzModalService.prototype.create = /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            if (options === void 0) { options = {}; }
            if (typeof options.nzOnCancel !== 'function') {
                options.nzOnCancel = (/**
                 * @return {?}
                 */
                function () { }); // Leave a empty function to close this modal by default
            }
            // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future
            /** @type {?} */
            var modalRef = (/** @type {?} */ (new ModalBuilderForService(this.overlay, options).getInstance()));
            return modalRef;
        };
        /**
         * @template T
         * @param {?=} options
         * @param {?=} confirmType
         * @return {?}
         */
        NzModalService.prototype.confirm = /**
         * @template T
         * @param {?=} options
         * @param {?=} confirmType
         * @return {?}
         */
        function (options, confirmType) {
            if (options === void 0) { options = {}; }
            if (confirmType === void 0) { confirmType = 'confirm'; }
            if ('nzFooter' in options) {
                core$1.warn("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
            }
            if (!('nzWidth' in options)) {
                options.nzWidth = 416;
            }
            if (!('nzMaskClosable' in options)) {
                options.nzMaskClosable = false;
            }
            if (typeof options.nzOnOk !== 'function') {
                // NOTE: only support function currently by calling confirm()
                options.nzOnOk = (/**
                 * @return {?}
                 */
                function () { }); // Leave a empty function to close this modal by default
            }
            options.nzModalType = 'confirm';
            options.nzClassName = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.nzClassName || '');
            return this.create(options);
        };
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        NzModalService.prototype.info = /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            if (options === void 0) { options = {}; }
            return this.simpleConfirm(options, 'info');
        };
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        NzModalService.prototype.success = /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            if (options === void 0) { options = {}; }
            return this.simpleConfirm(options, 'success');
        };
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        NzModalService.prototype.error = /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            if (options === void 0) { options = {}; }
            return this.simpleConfirm(options, 'error');
        };
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        NzModalService.prototype.warning = /**
         * @template T
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            if (options === void 0) { options = {}; }
            return this.simpleConfirm(options, 'warning');
        };
        /**
         * @private
         * @template T
         * @param {?=} options
         * @param {?=} confirmType
         * @return {?}
         */
        NzModalService.prototype.simpleConfirm = /**
         * @private
         * @template T
         * @param {?=} options
         * @param {?=} confirmType
         * @return {?}
         */
        function (options, confirmType) {
            if (options === void 0) { options = {}; }
            /** @type {?} */
            var iconMap = {
                info: 'info-circle',
                success: 'check-circle',
                error: 'close-circle',
                warning: 'exclamation-circle'
            };
            if (!('nzIconType' in options)) {
                options.nzIconType = iconMap[confirmType];
            }
            if (!('nzCancelText' in options)) {
                // Remove the Cancel button if the user not specify a Cancel button
                options.nzCancelText = null;
            }
            return this.confirm(options, confirmType);
        };
        NzModalService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: NzModalServiceModule
                    },] }
        ];
        /** @nocollapse */
        NzModalService.ctorParameters = function () { return [
            { type: overlay.Overlay },
            { type: NzModalControlService }
        ]; };
        /** @nocollapse */ NzModalService.ngInjectableDef = core["ɵɵdefineInjectable"]({ factory: function NzModalService_Factory() { return new NzModalService(core["ɵɵinject"](overlay.Overlay), core["ɵɵinject"](NzModalControlService)); }, token: NzModalService, providedIn: NzModalServiceModule });
        return NzModalService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzModalService.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        NzModalService.prototype.modalControl;
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
     * @template T, R
     */
    function ModalOptions() { }
    if (false) {
        /** @type {?|undefined} */
        ModalOptions.prototype.nzModalType;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzVisible;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzZIndex;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzWidth;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzWrapClassName;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzClassName;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzStyle;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzIconType;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzTitle;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzCloseIcon;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzContent;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzComponentParams;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzClosable;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzKeyboard;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzMask;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzMaskClosable;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzMaskStyle;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzBodyStyle;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzFooter;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzGetContainer;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzAfterOpen;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzAfterClose;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzOkText;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzOkType;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzOkLoading;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzOkDisabled;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzCancelDisabled;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzOnOk;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzCancelText;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzCancelLoading;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzNoAnimation;
        /** @type {?|undefined} */
        ModalOptions.prototype.nzOnCancel;
    }
    /**
     * @record
     * @template T
     */
    function ModalOptionsForService() { }
    if (false) {
        /** @type {?|undefined} */
        ModalOptionsForService.prototype.nzOnOk;
        /** @type {?|undefined} */
        ModalOptionsForService.prototype.nzOnCancel;
    }
    /**
     * @record
     * @template T
     */
    function ModalButtonOptions() { }
    if (false) {
        /** @type {?} */
        ModalButtonOptions.prototype.label;
        /** @type {?|undefined} */
        ModalButtonOptions.prototype.type;
        /** @type {?|undefined} */
        ModalButtonOptions.prototype.shape;
        /** @type {?|undefined} */
        ModalButtonOptions.prototype.ghost;
        /** @type {?|undefined} */
        ModalButtonOptions.prototype.size;
        /** @type {?|undefined} */
        ModalButtonOptions.prototype.autoLoading;
        /** @type {?|undefined} */
        ModalButtonOptions.prototype.show;
        /** @type {?|undefined} */
        ModalButtonOptions.prototype.loading;
        /** @type {?|undefined} */
        ModalButtonOptions.prototype.disabled;
        /* Skipping unhandled member: [key: string]: any;*/
        /**
         * @this {?}
         * @param {?=} contentComponentInstance
         * @return {?}
         */
        ModalButtonOptions.prototype.onClick = function (contentComponentInstance) { };
    }

    exports.NZ_MODAL_CONFIG = NZ_MODAL_CONFIG;
    exports.NzModalComponent = NzModalComponent;
    exports.NzModalControlService = NzModalControlService;
    exports.NzModalControlServiceModule = NzModalControlServiceModule;
    exports.NzModalFooterDirective = NzModalFooterDirective;
    exports.NzModalModule = NzModalModule;
    exports.NzModalRef = NzModalRef;
    exports.NzModalService = NzModalService;
    exports.NzModalServiceModule = NzModalServiceModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-modal.umd.js.map
