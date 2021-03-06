(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/message'), require('rxjs'), require('@angular/cdk/overlay'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/notification', ['exports', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/message', 'rxjs', '@angular/cdk/overlay', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].notification = {}), global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].message, global.rxjs, global.ng.cdk.overlay, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, core$1, message, rxjs, overlay, common, icon) { 'use strict';

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
     * @deprecated This interface would has been moved to `ng-zorro-antd/core`. Please migrate to that.
     * @record
     */
    function NzNotificationConfigLegacy() { }
    if (false) {
        /** @type {?|undefined} */
        NzNotificationConfigLegacy.prototype.nzTop;
        /** @type {?|undefined} */
        NzNotificationConfigLegacy.prototype.nzBottom;
        /** @type {?|undefined} */
        NzNotificationConfigLegacy.prototype.nzPlacement;
    }
    /** @type {?} */
    var NZ_NOTIFICATION_DEFAULT_CONFIG = new core.InjectionToken('NZ_NOTIFICATION_DEFAULT_CONFIG');
    /** @type {?} */
    var NZ_NOTIFICATION_CONFIG = new core.InjectionToken('NZ_NOTIFICATION_CONFIG');
    var ɵ0 = {
        nzTop: '24px',
        nzBottom: '24px',
        nzPlacement: 'topRight',
        nzDuration: 4500,
        nzMaxStack: 7,
        nzPauseOnHover: true,
        nzAnimate: true
    };
    /** @type {?} */
    var NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER = {
        provide: NZ_NOTIFICATION_DEFAULT_CONFIG,
        useValue: ɵ0
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'notification';
    var NzNotificationContainerComponent = /** @class */ (function (_super) {
        __extends(NzNotificationContainerComponent, _super);
        function NzNotificationContainerComponent(cdr, nzConfigService, defaultConfig, config) {
            var _this = _super.call(this, cdr, nzConfigService, defaultConfig, config) || this;
            /**
             * @override
             */
            _this.messages = [];
            if (!!config) {
                core$1.warnDeprecation("Injection token 'NZ_NOTIFICATION_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
            }
            return _this;
        }
        /**
         * @override
         */
        /**
         * @override
         * @param {?=} config
         * @return {?}
         */
        NzNotificationContainerComponent.prototype.setConfig = /**
         * @override
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var newConfig = (this.config = __assign({}, this.config, config, this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)));
            /** @type {?} */
            var placement = this.config.nzPlacement;
            this.top = placement === 'topLeft' || placement === 'topRight' ? core$1.toCssPixel(newConfig.nzTop) : null;
            this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? core$1.toCssPixel(newConfig.nzBottom) : null;
            this.cdr.markForCheck();
        };
        /**
         * Create a new notification.
         * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
         * replace its content instead of create a new one.
         * @override
         * @param notification
         */
        /**
         * Create a new notification.
         * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
         * replace its content instead of create a new one.
         * @override
         * @param {?} notification
         * @return {?}
         */
        NzNotificationContainerComponent.prototype.createMessage = /**
         * Create a new notification.
         * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
         * replace its content instead of create a new one.
         * @override
         * @param {?} notification
         * @return {?}
         */
        function (notification) {
            notification.options = this._mergeMessageOptions(notification.options);
            notification.onClose = new rxjs.Subject();
            /** @type {?} */
            var key = notification.options.nzKey;
            /** @type {?} */
            var notificationWithSameKey = this.messages.find((/**
             * @param {?} msg
             * @return {?}
             */
            function (msg) { return msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey; }));
            if (key && notificationWithSameKey) {
                this.replaceNotification(notificationWithSameKey, notification);
            }
            else {
                if (this.messages.length >= this.config.nzMaxStack) {
                    this.messages.splice(0, 1);
                }
                this.messages.push((/** @type {?} */ (notification)));
            }
            this.cdr.detectChanges();
        };
        /**
         * @override
         */
        /**
         * @override
         * @protected
         * @return {?}
         */
        NzNotificationContainerComponent.prototype.subscribeConfigChange = /**
         * @override
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
             * @return {?}
             */
            function () { return _this.setConfig(); }));
        };
        /**
         * @private
         * @param {?} old
         * @param {?} _new
         * @return {?}
         */
        NzNotificationContainerComponent.prototype.replaceNotification = /**
         * @private
         * @param {?} old
         * @param {?} _new
         * @return {?}
         */
        function (old, _new) {
            old.title = _new.title;
            old.content = _new.content;
            old.template = _new.template;
            old.type = _new.type;
        };
        NzNotificationContainerComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-notification-container',
                        exportAs: 'nzNotificationContainer',
                        preserveWhitespaces: false,
                        template: "<div\n  class=\"ant-notification ant-notification-{{config.nzPlacement}}\"\n  [style.top]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'topRight') ? top : null\"\n  [style.bottom]=\"(config.nzPlacement === 'bottomLeft' || config.nzPlacement === 'bottomRight') ? bottom : null\"\n  [style.right]=\"(config.nzPlacement === 'bottomRight' || config.nzPlacement === 'topRight') ? '0px' : null\"\n  [style.left]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'bottomLeft') ? '0px' : null\">\n  <nz-notification\n    *ngFor=\"let message of messages; let i = index\"\n    [nzMessage]=\"message\"\n    [nzIndex]=\"i\">\n  </nz-notification>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        NzNotificationContainerComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core$1.NzConfigService },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
        ]; };
        return NzNotificationContainerComponent;
    }(message.NzMessageContainerComponent));
    if (false) {
        /** @type {?} */
        NzNotificationContainerComponent.prototype.config;
        /** @type {?} */
        NzNotificationContainerComponent.prototype.bottom;
        /**
         * @override
         * @type {?}
         */
        NzNotificationContainerComponent.prototype.messages;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzNotificationComponent = /** @class */ (function (_super) {
        __extends(NzNotificationComponent, _super);
        function NzNotificationComponent(container, cdr) {
            var _this = _super.call(this, container, cdr) || this;
            _this.container = container;
            _this.cdr = cdr;
            return _this;
        }
        /**
         * @return {?}
         */
        NzNotificationComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this._destroy(true);
        };
        Object.defineProperty(NzNotificationComponent.prototype, "state", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.nzMessage.state === 'enter') {
                    if (this.container.config.nzPlacement === 'topLeft' || this.container.config.nzPlacement === 'bottomLeft') {
                        return 'enterLeft';
                    }
                    else {
                        return 'enterRight';
                    }
                }
                else {
                    return this.nzMessage.state;
                }
            },
            enumerable: true,
            configurable: true
        });
        NzNotificationComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-notification',
                        exportAs: 'nzNotification',
                        preserveWhitespaces: false,
                        animations: [core$1.notificationMotion],
                        template: "<div class=\"ant-notification-notice ant-notification-notice-closable\"\n  [ngStyle]=\"nzMessage.options?.nzStyle\"\n  [ngClass]=\"nzMessage.options?.nzClass\"\n  [@notificationMotion]=\"state\"\n  (mouseenter)=\"onEnter()\"\n  (mouseleave)=\"onLeave()\">\n  <div *ngIf=\"!nzMessage.template\" class=\"ant-notification-notice-content\">\n    <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': nzMessage.type !== 'blank' }\">\n      <div [class.ant-notification-notice-with-icon]=\"nzMessage.type !== 'blank'\">\n        <ng-container [ngSwitch]=\"nzMessage.type\">\n          <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"></i>\n          <i *ngSwitchCase=\"'info'\" nz-icon nzType=\"info-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"></i>\n          <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"></i>\n          <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"></i>\n        </ng-container>\n        <div class=\"ant-notification-notice-message\" [innerHTML]=\"nzMessage.title\"></div>\n        <div class=\"ant-notification-notice-description\" [innerHTML]=\"nzMessage.content\"></div>\n      </div>\n    </div>\n  </div>\n  <ng-template\n    [ngIf]=\"nzMessage.template\"\n    [ngTemplateOutlet]=\"nzMessage.template\"\n    [ngTemplateOutletContext]=\"{ $implicit: this, data: nzMessage.options?.nzData }\">\n  </ng-template>\n  <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\n    <span class=\"ant-notification-notice-close-x\">\n      <i nz-icon nzType=\"close\" class=\"ant-notification-close-icon\"></i>\n    </span>\n  </a>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        NzNotificationComponent.ctorParameters = function () { return [
            { type: NzNotificationContainerComponent },
            { type: core.ChangeDetectorRef }
        ]; };
        NzNotificationComponent.propDecorators = {
            nzMessage: [{ type: core.Input }]
        };
        return NzNotificationComponent;
    }(message.NzMessageComponent));
    if (false) {
        /** @type {?} */
        NzNotificationComponent.prototype.nzMessage;
        /**
         * @type {?}
         * @private
         */
        NzNotificationComponent.prototype.container;
        /**
         * @type {?}
         * @protected
         */
        NzNotificationComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzNotificationServiceModule = /** @class */ (function () {
        function NzNotificationServiceModule() {
        }
        NzNotificationServiceModule.decorators = [
            { type: core.NgModule }
        ];
        return NzNotificationServiceModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzNotificationModule = /** @class */ (function () {
        function NzNotificationModule() {
        }
        NzNotificationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, overlay.OverlayModule, icon.NzIconModule, NzNotificationServiceModule],
                        declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                        providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER],
                        entryComponents: [NzNotificationContainerComponent]
                    },] }
        ];
        return NzNotificationModule;
    }());

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
    function NzNotificationData() { }
    if (false) {
        /** @type {?|undefined} */
        NzNotificationData.prototype.template;
        /** @type {?|undefined} */
        NzNotificationData.prototype.type;
        /** @type {?|undefined} */
        NzNotificationData.prototype.title;
    }
    /**
     * @record
     * @template T
     */
    function NzNotificationDataOptions() { }
    if (false) {
        /** @type {?|undefined} */
        NzNotificationDataOptions.prototype.nzKey;
        /** @type {?|undefined} */
        NzNotificationDataOptions.prototype.nzStyle;
        /** @type {?|undefined} */
        NzNotificationDataOptions.prototype.nzClass;
        /**
         * Anything user wants renderer into a template.
         * @type {?|undefined}
         */
        NzNotificationDataOptions.prototype.nzData;
    }
    /**
     * @record
     */
    function NzNotificationDataFilled() { }
    if (false) {
        /** @type {?} */
        NzNotificationDataFilled.prototype.messageId;
        /** @type {?} */
        NzNotificationDataFilled.prototype.createdAt;
        /** @type {?|undefined} */
        NzNotificationDataFilled.prototype.state;
        /** @type {?|undefined} */
        NzNotificationDataFilled.prototype.options;
        /** @type {?|undefined} */
        NzNotificationDataFilled.prototype.onClose;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzNotificationService = /** @class */ (function (_super) {
        __extends(NzNotificationService, _super);
        function NzNotificationService(nzSingletonService, overlay, injector, cfr, appRef) {
            return _super.call(this, nzSingletonService, overlay, NzNotificationContainerComponent, injector, cfr, appRef, 'notification-') || this;
        }
        // Shortcut methods
        // Shortcut methods
        /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzNotificationService.prototype.success = 
        // Shortcut methods
        /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (title, content, options) {
            return (/** @type {?} */ (this.createMessage({ type: 'success', title: title, content: content }, options)));
        };
        /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzNotificationService.prototype.error = /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (title, content, options) {
            return (/** @type {?} */ (this.createMessage({ type: 'error', title: title, content: content }, options)));
        };
        /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzNotificationService.prototype.info = /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (title, content, options) {
            return (/** @type {?} */ (this.createMessage({ type: 'info', title: title, content: content }, options)));
        };
        /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzNotificationService.prototype.warning = /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (title, content, options) {
            return (/** @type {?} */ (this.createMessage({ type: 'warning', title: title, content: content }, options)));
        };
        /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzNotificationService.prototype.blank = /**
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (title, content, options) {
            return (/** @type {?} */ (this.createMessage({ type: 'blank', title: title, content: content }, options)));
        };
        /**
         * @param {?} type
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzNotificationService.prototype.create = /**
         * @param {?} type
         * @param {?} title
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (type, title, content, options) {
            return (/** @type {?} */ (this.createMessage({ type: type, title: title, content: content }, options)));
        };
        // For content with template
        // For content with template
        /**
         * @param {?} template
         * @param {?=} options
         * @return {?}
         */
        NzNotificationService.prototype.template = 
        // For content with template
        /**
         * @param {?} template
         * @param {?=} options
         * @return {?}
         */
        function (template, options) {
            return (/** @type {?} */ (this.createMessage({ template: template }, options)));
        };
        NzNotificationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: NzNotificationServiceModule
                    },] }
        ];
        /** @nocollapse */
        NzNotificationService.ctorParameters = function () { return [
            { type: core$1.NzSingletonService },
            { type: overlay.Overlay },
            { type: core.Injector },
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef }
        ]; };
        /** @nocollapse */ NzNotificationService.ngInjectableDef = core["ɵɵdefineInjectable"]({ factory: function NzNotificationService_Factory() { return new NzNotificationService(core["ɵɵinject"](core$1.NzSingletonService), core["ɵɵinject"](overlay.Overlay), core["ɵɵinject"](core.INJECTOR), core["ɵɵinject"](core.ComponentFactoryResolver), core["ɵɵinject"](core.ApplicationRef)); }, token: NzNotificationService, providedIn: NzNotificationServiceModule });
        return NzNotificationService;
    }(message.NzMessageBaseService));

    exports.NZ_NOTIFICATION_CONFIG = NZ_NOTIFICATION_CONFIG;
    exports.NZ_NOTIFICATION_DEFAULT_CONFIG = NZ_NOTIFICATION_DEFAULT_CONFIG;
    exports.NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER = NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER;
    exports.NzNotificationComponent = NzNotificationComponent;
    exports.NzNotificationContainerComponent = NzNotificationContainerComponent;
    exports.NzNotificationModule = NzNotificationModule;
    exports.NzNotificationService = NzNotificationService;
    exports.NzNotificationServiceModule = NzNotificationServiceModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-notification.umd.js.map
