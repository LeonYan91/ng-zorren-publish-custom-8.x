(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon'), require('@angular/forms'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/calendar'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/date-picker', ['exports', '@angular/cdk/overlay', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/icon', '@angular/forms', 'ng-zorro-antd/i18n', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/calendar', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['date-picker'] = {}), global.ng.cdk.overlay, global.ng.common, global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].icon, global.ng.forms, global['ng-zorro-antd'].i18n, global['ng-zorro-antd']['time-picker'], global['ng-zorro-antd'].calendar, global.rxjs, global.rxjs.operators));
}(this, (function (exports, overlay, common, core, core$1, icon, forms, i18n, timePicker, calendar, rxjs, operators) { 'use strict';

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
    var CalendarFooterComponent = /** @class */ (function () {
        function CalendarFooterComponent() {
            this.showToday = false;
            this.hasTimePicker = false;
            this.isRange = false;
            this.showTimePicker = false;
            this.showTimePickerChange = new core.EventEmitter();
            this.timePickerDisabled = false;
            this.okDisabled = false;
            this.clickOk = new core.EventEmitter();
            this.clickToday = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.isTemplateRef = core$1.isTemplateRef;
            this.isNonEmptyString = core$1.isNonEmptyString;
        }
        CalendarFooterComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'calendar-footer',
                        exportAs: 'calendarFooter',
                        template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\n  </div>\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\n        <span [innerHTML]=\"extraFooter\"></span>\n      </ng-container>\n    </ng-container>\n  </div>\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\n    <today-button\n      *ngIf=\"showToday\"\n      [locale]=\"locale\"\n      [disabledDate]=\"disabledDate\"\n      [hasTimePicker]=\"hasTimePicker\"\n      (clickToday)=\"clickToday.emit($event)\"\n    ></today-button>\n    <time-picker-button\n      *ngIf=\"hasTimePicker\"\n      [locale]=\"locale\"\n      [timePickerDisabled]=\"timePickerDisabled\"\n      [showTimePicker]=\"showTimePicker\"\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\n    ></time-picker-button>\n    <ok-button\n      *ngIf=\"hasTimePicker\"\n      [okDisabled]=\"okDisabled\"\n      [locale]=\"locale\"\n      (clickOk)=\"clickOk.emit()\"\n    ></ok-button>\n  </span>\n</div>"
                    }] }
        ];
        CalendarFooterComponent.propDecorators = {
            locale: [{ type: core.Input }],
            showToday: [{ type: core.Input }],
            hasTimePicker: [{ type: core.Input }],
            isRange: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            showTimePickerChange: [{ type: core.Output }],
            timePickerDisabled: [{ type: core.Input }],
            okDisabled: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            extraFooter: [{ type: core.Input }],
            rangeQuickSelector: [{ type: core.Input }],
            clickOk: [{ type: core.Output }],
            clickToday: [{ type: core.Output }]
        };
        return CalendarFooterComponent;
    }());
    if (false) {
        /** @type {?} */
        CalendarFooterComponent.prototype.locale;
        /** @type {?} */
        CalendarFooterComponent.prototype.showToday;
        /** @type {?} */
        CalendarFooterComponent.prototype.hasTimePicker;
        /** @type {?} */
        CalendarFooterComponent.prototype.isRange;
        /** @type {?} */
        CalendarFooterComponent.prototype.showTimePicker;
        /** @type {?} */
        CalendarFooterComponent.prototype.showTimePickerChange;
        /** @type {?} */
        CalendarFooterComponent.prototype.timePickerDisabled;
        /** @type {?} */
        CalendarFooterComponent.prototype.okDisabled;
        /** @type {?} */
        CalendarFooterComponent.prototype.disabledDate;
        /** @type {?} */
        CalendarFooterComponent.prototype.extraFooter;
        /** @type {?} */
        CalendarFooterComponent.prototype.rangeQuickSelector;
        /** @type {?} */
        CalendarFooterComponent.prototype.clickOk;
        /** @type {?} */
        CalendarFooterComponent.prototype.clickToday;
        /** @type {?} */
        CalendarFooterComponent.prototype.prefixCls;
        /** @type {?} */
        CalendarFooterComponent.prototype.isTemplateRef;
        /** @type {?} */
        CalendarFooterComponent.prototype.isNonEmptyString;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarHeaderComponent = /** @class */ (function () {
        function CalendarHeaderComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.enablePrev = true;
            this.enableNext = true;
            this.showTimePicker = false;
            this.valueChange = new core.EventEmitter();
            this.panelModeChange = new core.EventEmitter();
            this.chooseDecade = new core.EventEmitter();
            this.chooseYear = new core.EventEmitter();
            this.chooseMonth = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
        }
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.value) {
                this.value = new core$1.CandyDate(); // Show today by default
            }
            this.render();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        CalendarHeaderComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.value || changes.showTimePicker || changes.panelMode) {
                this.render();
            }
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.previousYear = /**
         * @return {?}
         */
        function () {
            this.gotoYear(-1);
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.nextYear = /**
         * @return {?}
         */
        function () {
            this.gotoYear(1);
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.previousMonth = /**
         * @return {?}
         */
        function () {
            this.gotoMonth(-1);
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.nextMonth = /**
         * @return {?}
         */
        function () {
            this.gotoMonth(1);
        };
        /**
         * @param {?} mode
         * @param {?=} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changePanel = /**
         * @param {?} mode
         * @param {?=} value
         * @return {?}
         */
        function (mode, value) {
            this.panelModeChange.emit(mode);
            if (value) {
                this.changeValueFromInside(value);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseDecade = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changePanel('year', value);
            this.chooseDecade.emit(value);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseYear = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changePanel(this.yearToMonth ? 'month' : 'date', value);
            this.yearToMonth = false; // Clear
            this.chooseYear.emit(value);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseMonth = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changePanel('date', value);
            this.yearToMonth = false; // Clear
            this.chooseMonth.emit(value);
        };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changeToMonthPanel = /**
         * @return {?}
         */
        function () {
            this.changePanel('month');
            this.yearToMonth = true;
        };
        /**
         * @private
         * @return {?}
         */
        CalendarHeaderComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
            }
        };
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        CalendarHeaderComponent.prototype.gotoMonth = /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.changeValueFromInside(this.value.addMonths(amount));
        };
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        CalendarHeaderComponent.prototype.gotoYear = /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.changeValueFromInside(this.value.addYears(amount));
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changeValueFromInside = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.value !== value) {
                this.value = value;
                this.valueChange.emit(this.value);
                this.render();
            }
        };
        /**
         * @private
         * @param {?} localeFormat
         * @return {?}
         */
        CalendarHeaderComponent.prototype.formatDateTime = /**
         * @private
         * @param {?} localeFormat
         * @return {?}
         */
        function (localeFormat) {
            return this.dateHelper.format(this.value.nativeDate, localeFormat);
        };
        /**
         * @private
         * @return {?}
         */
        CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var year;
            /** @type {?} */
            var month;
            /** @type {?} */
            var day;
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            var yearFormat = this.locale.yearFormat;
            if (this.dateHelper.relyOnDatePipe) {
                yearFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(yearFormat);
            }
            year = {
                className: this.prefixCls + "-year-select",
                title: this.locale.yearSelect,
                onClick: (/**
                 * @return {?}
                 */
                function () { return (_this.showTimePicker ? null : _this.changePanel('year')); }),
                label: this.formatDateTime(yearFormat)
            };
            month = {
                className: this.prefixCls + "-month-select",
                title: this.locale.monthSelect,
                onClick: (/**
                 * @return {?}
                 */
                function () { return (_this.showTimePicker ? null : _this.changeToMonthPanel()); }),
                label: this.formatDateTime(this.locale.monthFormat || 'MMM')
            };
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            var dayFormat = this.locale.dayFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dayFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dayFormat);
            }
            if (this.showTimePicker) {
                day = {
                    className: this.prefixCls + "-day-select",
                    label: this.formatDateTime(dayFormat)
                };
            }
            /** @type {?} */
            var result;
            if (this.locale.monthBeforeYear) {
                result = [month, (/** @type {?} */ (day)), year];
            }
            else {
                result = [year, month, (/** @type {?} */ (day))];
            }
            return result.filter((/**
             * @param {?} selector
             * @return {?}
             */
            function (selector) { return !!selector; }));
        };
        CalendarHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'calendar-header',
                        exportAs: 'calendarHeader',
                        template: "<div class=\"{{ prefixCls }}-header\">\n  <div style=\"position: relative;\">\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-year-btn\"\n      role=\"button\"\n      (click)=\"previousYear()\"\n      title=\"{{ locale.previousYear }}\"\n    ></a>\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-month-btn\"\n      role=\"button\"\n      (click)=\"previousMonth()\"\n      title=\"{{ locale.previousMonth }}\"\n    ></a>\n\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\n        <a class=\"{{ selector.className }}\"\n          role=\"button\"\n          (click)=\"selector.onClick ? selector.onClick() : null\"\n          title=\"{{ selector.title || null }}\"\n        >\n          {{ selector.label }}\n        </a>\n      </ng-container>\n    </span>\n\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-month-btn\"\n      role=\"button\"\n      (click)=\"nextMonth()\"\n      title=\"{{ locale.nextMonth }}\"\n    ></a>\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-year-btn\"\n      role=\"button\"\n      (click)=\"nextYear()\"\n      title=\"{{ locale.nextYear }}\"\n    ></a>\n  </div>\n\n  <ng-container [ngSwitch]=\"panelMode\">\n    <ng-container *ngSwitchCase=\"'decade'\">\n      <decade-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseDecade($event)\"\n      ></decade-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'year'\">\n      <year-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledYear\"\n        (valueChange)=\"onChooseYear($event)\"\n        (decadePanelShow)=\"changePanel('decade')\"\n      ></year-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'month'\">\n      <month-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledMonth\"\n        (valueChange)=\"onChooseMonth($event)\"\n        (yearPanelShow)=\"changePanel('year')\"\n      ></month-panel>\n    </ng-container>\n  </ng-container>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        CalendarHeaderComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService }
        ]; };
        CalendarHeaderComponent.propDecorators = {
            locale: [{ type: core.Input }],
            enablePrev: [{ type: core.Input }],
            enableNext: [{ type: core.Input }],
            disabledMonth: [{ type: core.Input }],
            disabledYear: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            panelMode: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            chooseDecade: [{ type: core.Output }],
            chooseYear: [{ type: core.Output }],
            chooseMonth: [{ type: core.Output }]
        };
        return CalendarHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        CalendarHeaderComponent.prototype.locale;
        /** @type {?} */
        CalendarHeaderComponent.prototype.enablePrev;
        /** @type {?} */
        CalendarHeaderComponent.prototype.enableNext;
        /** @type {?} */
        CalendarHeaderComponent.prototype.disabledMonth;
        /** @type {?} */
        CalendarHeaderComponent.prototype.disabledYear;
        /** @type {?} */
        CalendarHeaderComponent.prototype.showTimePicker;
        /** @type {?} */
        CalendarHeaderComponent.prototype.value;
        /** @type {?} */
        CalendarHeaderComponent.prototype.valueChange;
        /** @type {?} */
        CalendarHeaderComponent.prototype.panelMode;
        /** @type {?} */
        CalendarHeaderComponent.prototype.panelModeChange;
        /** @type {?} */
        CalendarHeaderComponent.prototype.chooseDecade;
        /** @type {?} */
        CalendarHeaderComponent.prototype.chooseYear;
        /** @type {?} */
        CalendarHeaderComponent.prototype.chooseMonth;
        /** @type {?} */
        CalendarHeaderComponent.prototype.prefixCls;
        /** @type {?} */
        CalendarHeaderComponent.prototype.yearMonthDaySelectors;
        /**
         * @type {?}
         * @private
         */
        CalendarHeaderComponent.prototype.yearToMonth;
        /**
         * @type {?}
         * @private
         */
        CalendarHeaderComponent.prototype.dateHelper;
    }
    /**
     * @record
     */
    function YearMonthDaySelector() { }
    if (false) {
        /** @type {?} */
        YearMonthDaySelector.prototype.className;
        /** @type {?|undefined} */
        YearMonthDaySelector.prototype.title;
        /** @type {?} */
        YearMonthDaySelector.prototype.label;
        /**
         * @return {?}
         */
        YearMonthDaySelector.prototype.onClick = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarInputComponent = /** @class */ (function () {
        function CalendarInputComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.invalidInputClass = '';
        }
        /**
         * @return {?}
         */
        CalendarInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.autoFocus) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputRef.nativeElement.focus(); }));
            }
        };
        /**
         * @param {?} event
         * @param {?=} isEnter
         * @return {?}
         */
        CalendarInputComponent.prototype.onInputKeyup = /**
         * @param {?} event
         * @param {?=} isEnter
         * @return {?}
         */
        function (event, isEnter) {
            if (isEnter === void 0) { isEnter = false; }
            /** @type {?} */
            var date = this.checkValidInputDate(event);
            if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
                return;
            }
            this.value = date;
            this.valueChange.emit({ date: date, isEnter: isEnter });
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarInputComponent.prototype.toReadableInput = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        CalendarInputComponent.prototype.checkValidInputDate = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var input = ((/** @type {?} */ (event.target))).value;
            /** @type {?} */
            var date = new core$1.CandyDate(input);
            this.invalidInputClass = '';
            if (!date.isValid() || input !== this.toReadableInput(date)) {
                // Should also match the input format exactly
                this.invalidInputClass = this.prefixCls + "-input-invalid";
                return null;
            }
            return date;
        };
        CalendarInputComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'calendar-input',
                        exportAs: 'calendarInput',
                        template: "<div class=\"{{ prefixCls }}-input-wrap\">\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\n    <input\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\n      value=\"{{ toReadableInput(value) }}\"\n      (input)=\"onInputKeyup($event)\"\n      (keyup.enter)=\"onInputKeyup($event, true)\"\n      #inputElement\n    />\n  </div>\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\"></a>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CalendarInputComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService }
        ]; };
        CalendarInputComponent.propDecorators = {
            locale: [{ type: core.Input }],
            format: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            value: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            inputRef: [{ type: core.ViewChild, args: ['inputElement', { static: true },] }],
            valueChange: [{ type: core.Output }]
        };
        return CalendarInputComponent;
    }());
    if (false) {
        /** @type {?} */
        CalendarInputComponent.prototype.locale;
        /** @type {?} */
        CalendarInputComponent.prototype.format;
        /** @type {?} */
        CalendarInputComponent.prototype.placeholder;
        /** @type {?} */
        CalendarInputComponent.prototype.disabledDate;
        /** @type {?} */
        CalendarInputComponent.prototype.value;
        /** @type {?} */
        CalendarInputComponent.prototype.autoFocus;
        /** @type {?} */
        CalendarInputComponent.prototype.inputRef;
        /** @type {?} */
        CalendarInputComponent.prototype.valueChange;
        /** @type {?} */
        CalendarInputComponent.prototype.prefixCls;
        /** @type {?} */
        CalendarInputComponent.prototype.invalidInputClass;
        /**
         * @type {?}
         * @private
         */
        CalendarInputComponent.prototype.dateHelper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OkButtonComponent = /** @class */ (function () {
        function OkButtonComponent() {
            this.okDisabled = false;
            this.clickOk = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
        }
        OkButtonComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'ok-button',
                        exportAs: 'okButton',
                        template: "<a\n    class=\"{{ prefixCls }}-ok-btn {{ okDisabled ? prefixCls + '-ok-btn-disabled' : '' }}\"\n    role=\"button\"\n    (click)=\"okDisabled ? null : clickOk.emit()\"\n  >\n    {{ locale.ok }}\n  </a>"
                    }] }
        ];
        OkButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            okDisabled: [{ type: core.Input }],
            clickOk: [{ type: core.Output }]
        };
        return OkButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        OkButtonComponent.prototype.locale;
        /** @type {?} */
        OkButtonComponent.prototype.okDisabled;
        /** @type {?} */
        OkButtonComponent.prototype.clickOk;
        /** @type {?} */
        OkButtonComponent.prototype.prefixCls;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TimePickerButtonComponent = /** @class */ (function () {
        function TimePickerButtonComponent() {
            this.timePickerDisabled = false;
            this.showTimePicker = false;
            this.showTimePickerChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
        }
        /**
         * @return {?}
         */
        TimePickerButtonComponent.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this.showTimePicker = !this.showTimePicker;
            this.showTimePickerChange.emit(this.showTimePicker);
        };
        TimePickerButtonComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'time-picker-button',
                        exportAs: 'timePickerButton',
                        template: "<a\n  class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\"\n  role=\"button\"\n  (click)=\"timePickerDisabled ? null : onClick()\"\n>\n  {{ showTimePicker ? locale.dateSelect : locale.timeSelect }}\n</a>"
                    }] }
        ];
        TimePickerButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            timePickerDisabled: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            showTimePickerChange: [{ type: core.Output }]
        };
        return TimePickerButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        TimePickerButtonComponent.prototype.locale;
        /** @type {?} */
        TimePickerButtonComponent.prototype.timePickerDisabled;
        /** @type {?} */
        TimePickerButtonComponent.prototype.showTimePicker;
        /** @type {?} */
        TimePickerButtonComponent.prototype.showTimePickerChange;
        /** @type {?} */
        TimePickerButtonComponent.prototype.prefixCls;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TodayButtonComponent = /** @class */ (function () {
        function TodayButtonComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.hasTimePicker = false;
            this.clickToday = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.isDisabled = false;
            this.now = new core$1.CandyDate();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        TodayButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.disabledDate) {
                this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
            }
            if (changes.locale) {
                // NOTE: Compat for DatePipe formatting rules
                /** @type {?} */
                var dateFormat = this.locale.dateFormat;
                if (this.dateHelper.relyOnDatePipe) {
                    dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
                }
                this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
            }
        };
        /**
         * @return {?}
         */
        TodayButtonComponent.prototype.onClickToday = /**
         * @return {?}
         */
        function () {
            this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
        };
        TodayButtonComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'today-button',
                        exportAs: 'todayButton',
                        template: "<a\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\n  role=\"button\"\n  (click)=\"isDisabled ? null : onClickToday()\"\n  title=\"{{ title }}\"\n>\n  {{ hasTimePicker ? locale.now : locale.today }}\n</a>"
                    }] }
        ];
        /** @nocollapse */
        TodayButtonComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService }
        ]; };
        TodayButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            hasTimePicker: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            clickToday: [{ type: core.Output }]
        };
        return TodayButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        TodayButtonComponent.prototype.locale;
        /** @type {?} */
        TodayButtonComponent.prototype.hasTimePicker;
        /** @type {?} */
        TodayButtonComponent.prototype.disabledDate;
        /** @type {?} */
        TodayButtonComponent.prototype.clickToday;
        /** @type {?} */
        TodayButtonComponent.prototype.prefixCls;
        /** @type {?} */
        TodayButtonComponent.prototype.isDisabled;
        /** @type {?} */
        TodayButtonComponent.prototype.title;
        /**
         * @type {?}
         * @private
         */
        TodayButtonComponent.prototype.now;
        /**
         * @type {?}
         * @private
         */
        TodayButtonComponent.prototype.dateHelper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW = 4;
    /** @type {?} */
    var MAX_COL = 3;
    var DecadePanelComponent = /** @class */ (function () {
        function DecadePanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-decade-panel';
        }
        Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
            get: /**
             * @return {?}
             */
            function () {
                return parseInt("" + this.value.getYear() / 100, 10) * 100;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
            get: /**
             * @return {?}
             */
            function () {
                return this.startYear + 99;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        DecadePanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.value) {
                this.render();
            }
        };
        /**
         * @return {?}
         */
        DecadePanelComponent.prototype.previousCentury = /**
         * @return {?}
         */
        function () {
            this.gotoYear(-100);
        };
        /**
         * @return {?}
         */
        DecadePanelComponent.prototype.nextCentury = /**
         * @return {?}
         */
        function () {
            this.gotoYear(100);
        };
        /**
         * @param {?} _index
         * @param {?} decadeData
         * @return {?}
         */
        DecadePanelComponent.prototype.trackPanelDecade = /**
         * @param {?} _index
         * @param {?} decadeData
         * @return {?}
         */
        function (_index, decadeData) {
            return decadeData.content;
        };
        /**
         * @private
         * @return {?}
         */
        DecadePanelComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.panelDecades = this.makePanelDecades();
            }
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        DecadePanelComponent.prototype.gotoYear = 
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not try to trigger final value change
            this.render();
        };
        /**
         * @private
         * @param {?} startYear
         * @return {?}
         */
        DecadePanelComponent.prototype.chooseDecade = /**
         * @private
         * @param {?} startYear
         * @return {?}
         */
        function (startYear) {
            this.value = this.value.setYear(startYear);
            this.valueChange.emit(this.value);
        };
        /**
         * @private
         * @return {?}
         */
        DecadePanelComponent.prototype.makePanelDecades = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var decades = [];
            /** @type {?} */
            var currentYear = this.value.getYear();
            /** @type {?} */
            var startYear = this.startYear;
            /** @type {?} */
            var endYear = this.endYear;
            /** @type {?} */
            var previousYear = startYear - 10;
            /** @type {?} */
            var index = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
                decades[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    /** @type {?} */
                    var start = previousYear + index * 10;
                    /** @type {?} */
                    var end = previousYear + index * 10 + 9;
                    /** @type {?} */
                    var content = start + "-" + end;
                    /** @type {?} */
                    var cell = (decades[rowIndex][colIndex] = {
                        content: content,
                        title: content,
                        isCurrent: currentYear >= start && currentYear <= end,
                        isLowerThanStart: end < startYear,
                        isBiggerThanEnd: start > endYear,
                        classMap: null,
                        onClick: null
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                        _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                        _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                        _a);
                    if (cell.isLowerThanStart) {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.previousCentury(); });
                    }
                    else if (cell.isBiggerThanEnd) {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.nextCentury(); });
                    }
                    else {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.chooseDecade(start); });
                    }
                    index++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return decades;
        };
        DecadePanelComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'decade-panel',
                        exportAs: 'decadePanel',
                        template: "<div class=\"{{ prefixCls }}\">\n  <div class=\"{{ prefixCls }}-header\">\n    <a\n      class=\"{{ prefixCls }}-prev-century-btn\"\n      role=\"button\"\n      (click)=\"previousCentury()\"\n      title=\"{{ locale.previousCentury }}\"\n    ></a>\n\n    <div class=\"{{ prefixCls }}-century\">\n      {{ startYear }}-{{ endYear }}\n    </div>\n    <a\n      class=\"{{ prefixCls }}-next-century-btn\"\n      role=\"button\"\n      (click)=\"nextCentury()\"\n      title=\"{{ locale.nextCentury }}\"\n    ></a>\n  </div>\n  <div class=\"{{ prefixCls }}-body\">\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n      <tbody class=\"{{ prefixCls }}-tbody\">\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\n            role=\"gridcell\"\n            title=\"{{ cell.title }}\"\n            (click)=\"cell.onClick()\"\n            [ngClass]=\"cell.classMap\"\n          >\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DecadePanelComponent.ctorParameters = function () { return []; };
        DecadePanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }]
        };
        return DecadePanelComponent;
    }());
    if (false) {
        /** @type {?} */
        DecadePanelComponent.prototype.locale;
        /** @type {?} */
        DecadePanelComponent.prototype.value;
        /** @type {?} */
        DecadePanelComponent.prototype.valueChange;
        /** @type {?} */
        DecadePanelComponent.prototype.prefixCls;
        /** @type {?} */
        DecadePanelComponent.prototype.panelDecades;
    }
    /**
     * @record
     */
    function PanelDecadeData() { }
    if (false) {
        /** @type {?} */
        PanelDecadeData.prototype.content;
        /** @type {?} */
        PanelDecadeData.prototype.title;
        /** @type {?} */
        PanelDecadeData.prototype.isCurrent;
        /** @type {?} */
        PanelDecadeData.prototype.isLowerThanStart;
        /** @type {?} */
        PanelDecadeData.prototype.isBiggerThanEnd;
        /** @type {?|undefined} */
        PanelDecadeData.prototype.classMap;
        /** @type {?} */
        PanelDecadeData.prototype.onClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MonthPanelComponent = /** @class */ (function () {
        function MonthPanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.yearPanelShow = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-month-panel';
        }
        /**
         * @return {?}
         */
        MonthPanelComponent.prototype.previousYear = /**
         * @return {?}
         */
        function () {
            this.gotoYear(-1);
        };
        /**
         * @return {?}
         */
        MonthPanelComponent.prototype.nextYear = /**
         * @return {?}
         */
        function () {
            this.gotoYear(1);
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        MonthPanelComponent.prototype.gotoYear = 
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not try to trigger final value change
        };
        MonthPanelComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'month-panel',
                        // tslint:disable-line:component-selector
                        exportAs: 'monthPanel',
                        template: "<div class=\"{{ prefixCls }}\">\n  <div>\n    <div class=\"{{ prefixCls }}-header\">\n      <a\n        class=\"{{ prefixCls }}-prev-year-btn\"\n        role=\"button\"\n        (click)=\"previousYear()\"\n        title=\"{{ locale.previousYear }}\"\n      ></a>\n\n      <a\n        class=\"{{ prefixCls }}-year-select\"\n        role=\"button\"\n        (click)=\"yearPanelShow.emit()\"\n        title=\"{{ locale.yearSelect }}\"\n      >\n        <span class=\"{{ prefixCls }}-year-select-content\">{{ value.getYear() }}</span>\n        <span class=\"{{ prefixCls }}-year-select-arrow\">x</span>\n      </a>\n\n      <a\n        class=\"{{ prefixCls }}-next-year-btn\"\n        role=\"button\"\n        (click)=\"nextYear()\"\n        title=\"{{ locale.nextYear }}\"\n      ></a>\n    </div>\n    <div class=\"{{ prefixCls }}-body\">\n      <month-table [prefixCls]=\"'ant-calendar'\" [disabledDate]=\"disabledDate\" [value]=\"value\" (valueChange)=\"valueChange.emit($event)\"></month-table>\n    </div>\n  </div>\n</div>"
                    }] }
        ];
        MonthPanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            yearPanelShow: [{ type: core.Output }]
        };
        return MonthPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        MonthPanelComponent.prototype.locale;
        /** @type {?} */
        MonthPanelComponent.prototype.value;
        /** @type {?} */
        MonthPanelComponent.prototype.disabledDate;
        /** @type {?} */
        MonthPanelComponent.prototype.valueChange;
        /** @type {?} */
        MonthPanelComponent.prototype.yearPanelShow;
        /** @type {?} */
        MonthPanelComponent.prototype.prefixCls;
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
    /** @type {?} */
    var defaultDisabledTime = {
        nzDisabledHours: /**
         * @return {?}
         */
        function () {
            return [];
        },
        nzDisabledMinutes: /**
         * @return {?}
         */
        function () {
            return [];
        },
        nzDisabledSeconds: /**
         * @return {?}
         */
        function () {
            return [];
        }
    };
    /**
     * @param {?} value
     * @param {?} disabledTime
     * @return {?}
     */
    function getTimeConfig(value, disabledTime) {
        /** @type {?} */
        var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
        disabledTimeConfig = __assign({}, defaultDisabledTime, disabledTimeConfig);
        return disabledTimeConfig;
    }
    /**
     * @param {?} value
     * @param {?} disabledTimeConfig
     * @return {?}
     */
    function isTimeValidByConfig(value, disabledTimeConfig) {
        /** @type {?} */
        var invalidTime = false;
        if (value) {
            /** @type {?} */
            var hour = value.getHours();
            /** @type {?} */
            var minutes = value.getMinutes();
            /** @type {?} */
            var seconds = value.getSeconds();
            /** @type {?} */
            var disabledHours = disabledTimeConfig.nzDisabledHours();
            if (disabledHours.indexOf(hour) === -1) {
                /** @type {?} */
                var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
                if (disabledMinutes.indexOf(minutes) === -1) {
                    /** @type {?} */
                    var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                    invalidTime = disabledSeconds.indexOf(seconds) !== -1;
                }
                else {
                    invalidTime = true;
                }
            }
            else {
                invalidTime = true;
            }
        }
        return !invalidTime;
    }
    /**
     * @param {?} value
     * @param {?} disabledTime
     * @return {?}
     */
    function isTimeValid(value, disabledTime) {
        /** @type {?} */
        var disabledTimeConfig = getTimeConfig(value, disabledTime);
        return isTimeValidByConfig(value, disabledTimeConfig);
    }
    /**
     * @param {?} value
     * @param {?=} disabledDate
     * @param {?=} disabledTime
     * @return {?}
     */
    function isAllowedDate(value, disabledDate, disabledTime) {
        if (disabledDate) {
            if (disabledDate(value.nativeDate)) {
                return false;
            }
        }
        if (disabledTime) {
            if (!isTimeValid(value, disabledTime)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateRangePopupComponent = /** @class */ (function () {
        function DateRangePopupComponent() {
            var _this = this;
            this.panelModeChange = new core.EventEmitter();
            this.calendarChange = new core.EventEmitter();
            this.valueChange = new core.EventEmitter();
            this.inputChange = new core.EventEmitter();
            this.resultOk = new core.EventEmitter(); // Emitted when done with date selecting
            // Emitted when done with date selecting
            this.closePicker = new core.EventEmitter(); // Notify outside to close the picker panel
            // Notify outside to close the picker panel
            this.prefixCls = 'ant-calendar';
            this.showTimePicker = false;
            this.partTypeMap = { left: 0, right: 1 };
            this.disabledStartTime = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'start');
            });
            this.disabledEndTime = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'end');
            });
        }
        Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
            get: 
            // Range ONLY
            /**
             * @return {?}
             */
            function () {
                return !!this.showTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
            get: /**
             * @return {?}
             */
            function () {
                return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
            },
            enumerable: true,
            configurable: true
        });
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.ngOnInit = 
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Initialization for range properties to prevent errors while later assignment
            if (this.isRange) {
                ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                function (prop) { return _this.initialArray(prop); }));
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DateRangePopupComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this.isRange) {
                if (changes.value) {
                    // Re-initialize all related values
                    this.clearHoverValue();
                    this.selectedValue = (/** @type {?} */ (this.value));
                    this.valueForRangeShow = this.normalizeRangeValue((/** @type {?} */ (this.value)));
                }
            }
            // Parse showTime options
            if (changes.showTime || changes.disabledTime) {
                if (this.showTime) {
                    this.buildTimeOptions();
                }
            }
            // Show time picker when assigned panel mode as "time"
            if (changes.panelMode && this.hasTimePicker) {
                this.showTimePicker = this.panelMode === 'time';
            }
        };
        /**
         * @param {?} show
         * @return {?}
         */
        DateRangePopupComponent.prototype.onShowTimePickerChange = /**
         * @param {?} show
         * @return {?}
         */
        function (show) {
            // this.panelMode = show ? 'time' : 'date';
            // this.panelModeChange.emit(this.panelMode);
            this.panelModeChange.emit(show ? 'time' : 'date');
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.onClickOk = /**
         * @return {?}
         */
        function () {
            this.setValue(this.value);
            this.resultOk.emit();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.onClickToday = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // if (this.isRange) { // Show today is not support by range
            //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
            // } else {
            if (!this.isRange) {
                // tslint:disable-next-line: no-any
                this.value = (/** @type {?} */ (null)); // Clear current value to not sync time by next step
                this.changeValueFromSelect(value);
            }
            this.closePickerPanel();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.onDayHover = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
                // When right value is selected, don't do hover
                /** @type {?} */
                var base = this.selectedValue[0];
                if (base.isBeforeDay(value)) {
                    this.hoverValue = [base, value];
                }
                else {
                    this.hoverValue = [value, base];
                }
            }
        };
        /**
         * @param {?} mode
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onPanelModeChange = /**
         * @param {?} mode
         * @param {?=} partType
         * @return {?}
         */
        function (mode, partType) {
            if (this.isRange) {
                ((/** @type {?} */ (this.panelMode)))[this.getPartTypeIndex(partType)] = mode;
            }
            else {
                this.panelMode = mode;
            }
            this.panelModeChange.emit(this.panelMode);
        };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onHeaderChange = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        function (value, partType) {
            if (this.isRange) {
                this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
                this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
            }
        };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onSelectTime = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        function (value, partType) {
            if (this.isRange) {
                /** @type {?} */
                var newValue = this.cloneRangeDate((/** @type {?} */ (this.value)));
                /** @type {?} */
                var index = this.getPartTypeIndex(partType);
                newValue[index] = (/** @type {?} */ (this.overrideHms(value, newValue[index])));
                this.setValue(newValue);
            }
            else {
                this.setValue((/** @type {?} */ (this.overrideHms(value, ((/** @type {?} */ (this.value))) || new core$1.CandyDate())))); // If not select a date currently, use today
            }
        };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.changeValueFromInput = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        function (value, partType) {
            var date = value.date, isEnter = value.isEnter;
            if (this.isRange) {
                /** @type {?} */
                var newRangeValue = partType === 'left' ? [date, this.selectedValue[1]] : [this.selectedValue[0], date];
                /** @type {?} */
                var isValidRange = this.isValidRange(newRangeValue);
                if (isValidRange) {
                    newRangeValue = core$1.sortRangeValue(newRangeValue);
                    this.valueForRangeShow = this.normalizeRangeValue(newRangeValue);
                }
                // ? Why Can not use follow code
                // this.selectedValue[index] = date;
                this.selectedValue = this.cloneRangeDate(newRangeValue);
                this.setValueFromInput(this.cloneRangeDate(newRangeValue), isEnter && isValidRange);
            }
            else {
                this.setValueFromInput(date, isEnter);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.changeValueFromSelect = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isRange) {
                var _a = __read((/** @type {?} */ (this.selectedValue)), 2), left = _a[0], right = _a[1];
                if ((!left && !right) || (left && right)) {
                    // If totally full or empty, clean up && re-assign left first
                    this.hoverValue = this.selectedValue = [value];
                    this.calendarChange.emit([value.clone()]);
                }
                else if (left && !right) {
                    // If one of them is empty, assign the other one and sort, then set the final values
                    this.clearHoverValue(); // Clean up
                    this.setRangeValue('right', value);
                    this.selectedValue = core$1.sortRangeValue(this.selectedValue); // Sort
                    this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                    this.setValue(this.cloneRangeDate(this.selectedValue));
                    this.calendarChange.emit(this.cloneRangeDate(this.selectedValue));
                }
            }
            else {
                this.setValue(value);
            }
            // this.selectDate.emit(value);
        };
        /**
         * @param {?} direction
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.enablePrevNext = /**
         * @param {?} direction
         * @param {?=} partType
         * @return {?}
         */
        function (direction, partType) {
            if (this.isRange) {
                var _a = __read(this.valueForRangeShow, 2), start = _a[0], end = _a[1];
                /** @type {?} */
                var showMiddle = !start.addMonths(1).isSame(end, 'month');
                if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                    return showMiddle;
                }
                return true;
            }
            else {
                return true;
            }
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPanelMode = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            if (this.isRange) {
                return (/** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]));
            }
            else {
                return (/** @type {?} */ (this.panelMode));
            }
        };
        // Get single value or part value of a range
        // Get single value or part value of a range
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getValue = 
        // Get single value or part value of a range
        /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            if (this.isRange) {
                return ((/** @type {?} */ (this.value)))[this.getPartTypeIndex(partType)];
            }
            else {
                return (/** @type {?} */ (this.value));
            }
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getValueBySelector = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            if (this.isRange) {
                /** @type {?} */
                var valueShow = this.showTimePicker ? this.value : this.valueForRangeShow;
                return ((/** @type {?} */ (valueShow)))[this.getPartTypeIndex(partType)];
            }
            else {
                return (/** @type {?} */ (this.value));
            }
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPartTypeIndex = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            return this.partTypeMap[(/** @type {?} */ (partType))];
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPlaceholder = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : ((/** @type {?} */ (this.placeholder)));
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.hasSelectedValue = /**
         * @return {?}
         */
        function () {
            return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.isAllowedSelectedValue = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selectedValue = this.selectedValue;
            if (selectedValue && selectedValue[0] && selectedValue[1]) {
                return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                    isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
            }
            return false;
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.timePickerDisabled = /**
         * @return {?}
         */
        function () {
            if (!this.hasTimePicker) {
                return true;
            }
            if (this.isRange) {
                return !this.hasSelectedValue() || !!this.hoverValue.length;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.okDisabled = /**
         * @return {?}
         */
        function () {
            if (!this.hasTimePicker) {
                return true;
            }
            if (this.isRange) {
                return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
            }
            else {
                return this.value ? !isAllowedDate((/** @type {?} */ (this.value)), this.disabledDate, this.disabledTime) : false;
            }
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getTimeOptions = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            if (this.showTime && this.timeOptions) {
                return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
            }
            return null;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        DateRangePopupComponent.prototype.onClickPresetRange = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var value = typeof val === 'function' ? val() : val;
            if (value) {
                this.setValue([new core$1.CandyDate(value[0]), new core$1.CandyDate(value[1])]);
                this.resultOk.emit();
            }
        };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.onPresetRangeMouseLeave = /**
         * @return {?}
         */
        function () {
            this.clearHoverValue();
        };
        /**
         * @param {?} val
         * @return {?}
         */
        DateRangePopupComponent.prototype.onHoverPresetRange = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (typeof val !== 'function') {
                this.hoverValue = [new core$1.CandyDate(val[0]), new core$1.CandyDate(val[1])];
            }
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        DateRangePopupComponent.prototype.getObjectKeys = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return obj ? Object.keys(obj) : [];
        };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.closePickerPanel = /**
         * @private
         * @return {?}
         */
        function () {
            this.closePicker.emit();
        };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.clearHoverValue = /**
         * @private
         * @return {?}
         */
        function () {
            this.hoverValue = [];
        };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.buildTimeOptions = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.showTime) {
                /** @type {?} */
                var showTime = typeof this.showTime === 'object' ? this.showTime : {};
                if (this.isRange) {
                    /** @type {?} */
                    var value = (/** @type {?} */ (this.value));
                    this.timeOptions = [
                        this.overrideTimeOptions(showTime, value[0], 'start'),
                        this.overrideTimeOptions(showTime, value[1], 'end')
                    ];
                }
                else {
                    this.timeOptions = this.overrideTimeOptions(showTime, (/** @type {?} */ (this.value)));
                }
            }
            else {
                this.timeOptions = null;
            }
        };
        /**
         * @private
         * @param {?} origin
         * @param {?} value
         * @param {?=} partial
         * @return {?}
         */
        DateRangePopupComponent.prototype.overrideTimeOptions = /**
         * @private
         * @param {?} origin
         * @param {?} value
         * @param {?=} partial
         * @return {?}
         */
        function (origin, value, partial) {
            /** @type {?} */
            var disabledTimeFn;
            if (partial) {
                disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
            }
            else {
                disabledTimeFn = this.disabledTime;
            }
            return __assign({}, origin, getTimeConfig(value, disabledTimeFn));
        };
        /**
         * @private
         * @param {?} value
         * @param {?=} emitValue
         * @return {?}
         */
        DateRangePopupComponent.prototype.setValueFromInput = /**
         * @private
         * @param {?} value
         * @param {?=} emitValue
         * @return {?}
         */
        function (value, emitValue) {
            if (emitValue === void 0) { emitValue = true; }
            this.value = value;
            if (emitValue) {
                this.inputChange.emit(this.value);
            }
            this.buildTimeOptions();
        };
        // Set value and trigger change event
        // Set value and trigger change event
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.setValue = 
        // Set value and trigger change event
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // TODO: Sync original time (NOTE: this should take more care of because it may depend on many change sources)
            // if (this.isRange) {
            //   // TODO: Sync time
            // } else {
            //   if (this.value) { // Sync time from the original one if it's available
            //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
            //   }
            // }
            this.value = value;
            this.valueChange.emit(this.value);
            this.buildTimeOptions();
        };
        /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
        DateRangePopupComponent.prototype.overrideHms = /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
        function (from, to) {
            if (!from || !to) {
                return null;
            }
            return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
        };
        // Check if it's a valid range value
        // Check if it's a valid range value
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.isValidRange = 
        // Check if it's a valid range value
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value)) {
                var _a = __read(value, 2), start = _a[0], end = _a[1];
                return !!(start && end);
            }
            return false;
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.normalizeRangeValue = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a = __read(value, 2), start = _a[0], end = _a[1];
            /** @type {?} */
            var newStart = start || new core$1.CandyDate();
            /** @type {?} */
            var newEnd = end && end.isSameMonth(newStart) ? end.addMonths(1) : end || newStart.addMonths(1);
            return [newStart, newEnd];
        };
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Renew and set a range value to trigger sub-component's change detection
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Renew and set a range value to trigger sub-component's change detection
        /**
         * @private
         * @param {?} partType
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.setRangeValue = 
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Renew and set a range value to trigger sub-component's change detection
        /**
         * @private
         * @param {?} partType
         * @param {?} value
         * @return {?}
         */
        function (partType, value) {
            /** @type {?} */
            var ref = (this.selectedValue = this.cloneRangeDate((/** @type {?} */ (this.selectedValue))));
            ref[this.getPartTypeIndex(partType)] = value;
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.cloneRangeDate = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return (/** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]));
        };
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        DateRangePopupComponent.prototype.initialArray = /**
         * @private
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!this[key] || !Array.isArray(this[key])) {
                this[key] = [];
            }
        };
        DateRangePopupComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'date-range-popup',
                        exportAs: 'dateRangePopup',
                        template: "<div\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\n  [ngStyle]=\"popupStyle\">\n\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\n    <div class=\"{{ prefixCls }}-panel\">\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\n      </ng-container>\n      <div class=\"{{ prefixCls }}-date-panel\">\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\n          <!-- Range Selectors -->\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\n          <div class=\"ant-calendar-range-middle\">~</div>\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </ng-container>\n      </div>\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #tplCalendarInput let-partType=\"partType\">\n  <calendar-input\n    [value]=\"getValue(partType)\"\n    (valueChange)=\"changeValueFromInput($event, partType)\"\n    [locale]=\"locale\"\n    [disabledDate]=\"disabledDate\"\n    [format]=\"format\"\n    [autoFocus]=\"partType !== 'right'\"\n    [placeholder]=\"getPlaceholder(partType)\"\n  ></calendar-input>\n</ng-template>\n\n<ng-template #tplInnerPopup let-partType=\"partType\">\n  <inner-popup\n    [showWeek]=\"showWeek\"\n    [locale]=\"locale\"\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\n    [timeOptions]=\"getTimeOptions(partType)\"\n    [panelMode]=\"getPanelMode(partType)\"\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\n    [value]=\"getValueBySelector(partType)\"\n    [disabledDate]=\"disabledDate\"\n    [dateRender]=\"dateRender\"\n    [selectedValue]=\"selectedValue\"\n    [hoverValue]=\"hoverValue\"\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\n    [enableNext]=\"enablePrevNext('next', partType)\"\n    (dayHover)=\"onDayHover($event)\"\n    (selectDate)=\"changeValueFromSelect($event)\"\n    (selectTime)=\"onSelectTime($event, partType)\"\n    (headerChange)=\"onHeaderChange($event, partType)\"\n  ></inner-popup>\n</ng-template>\n\n<ng-template #tplFooter>\n  <calendar-footer\n    *ngIf=\"hasFooter\"\n    [locale]=\"locale\"\n    [showToday]=\"showToday\"\n    [hasTimePicker]=\"hasTimePicker\"\n    [timePickerDisabled]=\"timePickerDisabled()\"\n    [okDisabled]=\"okDisabled()\"\n    [extraFooter]=\"extraFooter\"\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\n    [(showTimePicker)]=\"showTimePicker\"\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\n    (clickOk)=\"onClickOk()\"\n    (clickToday)=\"onClickToday($event)\"\n  ></calendar-footer>\n</ng-template>\n\n<!-- Single ONLY -->\n<ng-template #tplSinglePart>\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\n</ng-template>\n\n<!-- Range ONLY -->\n<ng-template #tplRangePart let-partType=\"partType\">\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\n    <div style=\"outline: none;\">\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Range ONLY: Range Quick Selector -->\n<ng-template #tplRangeQuickSelector>\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\n    (click)=\"onClickPresetRange(ranges[name])\"\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\n  >{{ name }}</a>\n</ng-template>"
                    }] }
        ];
        DateRangePopupComponent.propDecorators = {
            isRange: [{ type: core.Input }],
            showWeek: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            format: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            disabledTime: [{ type: core.Input }],
            showToday: [{ type: core.Input }],
            showTime: [{ type: core.Input }],
            extraFooter: [{ type: core.Input }],
            ranges: [{ type: core.Input }],
            dateRender: [{ type: core.Input }],
            popupStyle: [{ type: core.Input }],
            dropdownClassName: [{ type: core.Input }],
            panelMode: [{ type: core.Input }],
            value: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            calendarChange: [{ type: core.Output }],
            valueChange: [{ type: core.Output }],
            inputChange: [{ type: core.Output }],
            resultOk: [{ type: core.Output }],
            closePicker: [{ type: core.Output }]
        };
        return DateRangePopupComponent;
    }());
    if (false) {
        /** @type {?} */
        DateRangePopupComponent.prototype.isRange;
        /** @type {?} */
        DateRangePopupComponent.prototype.showWeek;
        /** @type {?} */
        DateRangePopupComponent.prototype.locale;
        /** @type {?} */
        DateRangePopupComponent.prototype.format;
        /** @type {?} */
        DateRangePopupComponent.prototype.placeholder;
        /** @type {?} */
        DateRangePopupComponent.prototype.disabledDate;
        /** @type {?} */
        DateRangePopupComponent.prototype.disabledTime;
        /** @type {?} */
        DateRangePopupComponent.prototype.showToday;
        /** @type {?} */
        DateRangePopupComponent.prototype.showTime;
        /** @type {?} */
        DateRangePopupComponent.prototype.extraFooter;
        /** @type {?} */
        DateRangePopupComponent.prototype.ranges;
        /** @type {?} */
        DateRangePopupComponent.prototype.dateRender;
        /** @type {?} */
        DateRangePopupComponent.prototype.popupStyle;
        /** @type {?} */
        DateRangePopupComponent.prototype.dropdownClassName;
        /** @type {?} */
        DateRangePopupComponent.prototype.panelMode;
        /** @type {?} */
        DateRangePopupComponent.prototype.value;
        /** @type {?} */
        DateRangePopupComponent.prototype.panelModeChange;
        /** @type {?} */
        DateRangePopupComponent.prototype.calendarChange;
        /** @type {?} */
        DateRangePopupComponent.prototype.valueChange;
        /** @type {?} */
        DateRangePopupComponent.prototype.inputChange;
        /** @type {?} */
        DateRangePopupComponent.prototype.resultOk;
        /** @type {?} */
        DateRangePopupComponent.prototype.closePicker;
        /** @type {?} */
        DateRangePopupComponent.prototype.prefixCls;
        /** @type {?} */
        DateRangePopupComponent.prototype.showTimePicker;
        /** @type {?} */
        DateRangePopupComponent.prototype.timeOptions;
        /** @type {?} */
        DateRangePopupComponent.prototype.valueForRangeShow;
        /** @type {?} */
        DateRangePopupComponent.prototype.selectedValue;
        /** @type {?} */
        DateRangePopupComponent.prototype.hoverValue;
        /**
         * @type {?}
         * @private
         */
        DateRangePopupComponent.prototype.partTypeMap;
        /** @type {?} */
        DateRangePopupComponent.prototype.disabledStartTime;
        /** @type {?} */
        DateRangePopupComponent.prototype.disabledEndTime;
        /* Skipping unhandled member: [property: string]: any;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InnerPopupComponent = /** @class */ (function () {
        function InnerPopupComponent() {
            this.panelModeChange = new core.EventEmitter();
            this.headerChange = new core.EventEmitter(); // Emitted when user changed the header's value
            // Emitted when user changed the header's value
            this.selectDate = new core.EventEmitter(); // Emitted when the date is selected by click the date panel
            // Emitted when the date is selected by click the date panel
            this.selectTime = new core.EventEmitter();
            this.dayHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            // Emitted when hover on a day by mouse enter
            this.prefixCls = 'ant-calendar';
        }
        /**
         * @param {?} date
         * @return {?}
         */
        InnerPopupComponent.prototype.onSelectTime = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this.selectTime.emit(new core$1.CandyDate(date));
        };
        // The value real changed to outside
        // The value real changed to outside
        /**
         * @param {?} date
         * @return {?}
         */
        InnerPopupComponent.prototype.onSelectDate = 
        // The value real changed to outside
        /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var value = date instanceof core$1.CandyDate ? date : new core$1.CandyDate(date);
            this.selectDate.emit(value);
        };
        InnerPopupComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'inner-popup',
                        exportAs: 'innerPopup',
                        template: "<calendar-header\n  [(panelMode)]=\"panelMode\"\n  (panelModeChange)=\"panelModeChange.emit($event)\"\n  [(value)]=\"value\"\n  (valueChange)=\"headerChange.emit($event)\"\n  [locale]=\"locale\"\n  [showTimePicker]=\"showTimePicker\"\n  [enablePrev]=\"enablePrev\"\n  [enableNext]=\"enableNext\"\n></calendar-header>\n\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\n  <nz-time-picker-panel\n    [nzInDatePicker]=\"true\"\n    [ngModel]=\"value?.nativeDate\"\n    (ngModelChange)=\"onSelectTime($event)\"\n    [format]=\"timeOptions.nzFormat\"\n    [nzHourStep]=\"timeOptions.nzHourStep\"\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\n    [nzUse12Hours]=\"timeOptions.nzUse12Hours\"\n    [nzAddOn]=\"timeOptions.nzAddOn\"\n    [opened]=\"true\"\n  ></nz-time-picker-panel>\n  <!-- use [opened] to trigger time panel `initPosition()` -->\n</ng-container>\n\n<div class=\"{{ prefixCls }}-body\">\n  <date-table\n    [locale]=\"locale\"\n    [showWeek]=\"showWeek\"\n    [value]=\"value\"\n    (valueChange)=\"onSelectDate($event)\"\n    showWeekNumber=\"false\"\n    [disabledDate]=\"disabledDate\"\n    [dateCellRender]=\"dateRender\"\n    [selectedValue]=\"selectedValue\"\n    [hoverValue]=\"hoverValue\"\n    (dayHover)=\"dayHover.emit($event)\"\n  ></date-table>\n</div>"
                    }] }
        ];
        InnerPopupComponent.propDecorators = {
            showWeek: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            timeOptions: [{ type: core.Input }],
            enablePrev: [{ type: core.Input }],
            enableNext: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            dateRender: [{ type: core.Input }],
            selectedValue: [{ type: core.Input }],
            hoverValue: [{ type: core.Input }],
            panelMode: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            value: [{ type: core.Input }],
            headerChange: [{ type: core.Output }],
            selectDate: [{ type: core.Output }],
            selectTime: [{ type: core.Output }],
            dayHover: [{ type: core.Output }]
        };
        return InnerPopupComponent;
    }());
    if (false) {
        /** @type {?} */
        InnerPopupComponent.prototype.showWeek;
        /** @type {?} */
        InnerPopupComponent.prototype.locale;
        /** @type {?} */
        InnerPopupComponent.prototype.showTimePicker;
        /** @type {?} */
        InnerPopupComponent.prototype.timeOptions;
        /** @type {?} */
        InnerPopupComponent.prototype.enablePrev;
        /** @type {?} */
        InnerPopupComponent.prototype.enableNext;
        /** @type {?} */
        InnerPopupComponent.prototype.disabledDate;
        /** @type {?} */
        InnerPopupComponent.prototype.dateRender;
        /** @type {?} */
        InnerPopupComponent.prototype.selectedValue;
        /** @type {?} */
        InnerPopupComponent.prototype.hoverValue;
        /** @type {?} */
        InnerPopupComponent.prototype.panelMode;
        /** @type {?} */
        InnerPopupComponent.prototype.panelModeChange;
        /** @type {?} */
        InnerPopupComponent.prototype.value;
        /** @type {?} */
        InnerPopupComponent.prototype.headerChange;
        /** @type {?} */
        InnerPopupComponent.prototype.selectDate;
        /** @type {?} */
        InnerPopupComponent.prototype.selectTime;
        /** @type {?} */
        InnerPopupComponent.prototype.dayHover;
        /** @type {?} */
        InnerPopupComponent.prototype.prefixCls;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW$1 = 4;
    /** @type {?} */
    var MAX_COL$1 = 3;
    var YearPanelComponent = /** @class */ (function () {
        function YearPanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.decadePanelShow = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-year-panel';
        }
        Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
            get: /**
             * @return {?}
             */
            function () {
                return this.value.getYear();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YearPanelComponent.prototype, "startYear", {
            get: /**
             * @return {?}
             */
            function () {
                return parseInt("" + this.currentYear / 10, 10) * 10;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YearPanelComponent.prototype, "endYear", {
            get: /**
             * @return {?}
             */
            function () {
                return this.startYear + 9;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        YearPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.value || changes.disabledDate) {
                this.render();
            }
        };
        /**
         * @return {?}
         */
        YearPanelComponent.prototype.previousDecade = /**
         * @return {?}
         */
        function () {
            this.gotoYear(-10);
        };
        /**
         * @return {?}
         */
        YearPanelComponent.prototype.nextDecade = /**
         * @return {?}
         */
        function () {
            this.gotoYear(10);
        };
        /**
         * @param {?} _index
         * @param {?} yearData
         * @return {?}
         */
        YearPanelComponent.prototype.trackPanelYear = /**
         * @param {?} _index
         * @param {?} yearData
         * @return {?}
         */
        function (_index, yearData) {
            return yearData.content;
        };
        /**
         * @private
         * @return {?}
         */
        YearPanelComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.panelYears = this.makePanelYears();
            }
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        YearPanelComponent.prototype.gotoYear = 
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not trigger final value change
            this.render();
        };
        /**
         * @private
         * @param {?} year
         * @return {?}
         */
        YearPanelComponent.prototype.chooseYear = /**
         * @private
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this.value = this.value.setYear(year);
            this.valueChange.emit(this.value);
            this.render();
        };
        /**
         * @private
         * @return {?}
         */
        YearPanelComponent.prototype.makePanelYears = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var years = [];
            /** @type {?} */
            var currentYear = this.currentYear;
            /** @type {?} */
            var startYear = this.startYear;
            /** @type {?} */
            var endYear = this.endYear;
            /** @type {?} */
            var previousYear = startYear - 1;
            /** @type {?} */
            var index = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW$1; rowIndex++) {
                years[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    /** @type {?} */
                    var year = previousYear + index;
                    /** @type {?} */
                    var content = String(year);
                    /** @type {?} */
                    var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setYear(year).nativeDate) : false;
                    /** @type {?} */
                    var cell = (years[rowIndex][colIndex] = {
                        disabled: disabled,
                        content: content,
                        year: year,
                        title: content,
                        isCurrent: year === currentYear,
                        isLowerThanStart: year < startYear,
                        isBiggerThanEnd: year > endYear,
                        classMap: null,
                        onClick: null
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                        _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                        _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                        _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                        _a);
                    if (cell.isLowerThanStart) {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.previousDecade(); });
                    }
                    else if (cell.isBiggerThanEnd) {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.nextDecade(); });
                    }
                    else {
                        cell.onClick = (/**
                         * @return {?}
                         */
                        function () { return _this.chooseYear(cell.year); });
                    }
                    index++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL$1; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return years;
        };
        YearPanelComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'year-panel',
                        exportAs: 'yearPanel',
                        template: "<div class=\"{{ prefixCls }}\">\n  <div>\n    <div class=\"{{ prefixCls }}-header\">\n      <a\n        class=\"{{ prefixCls }}-prev-decade-btn\"\n        role=\"button\"\n        (click)=\"previousDecade()\"\n        title=\"{{ locale.previousDecade }}\"\n      ></a>\n      <a\n        class=\"{{ prefixCls }}-decade-select\"\n        role=\"button\"\n        (click)=\"decadePanelShow.emit()\"\n        title=\"{{ locale.decadeSelect }}\"\n      >\n        <span class=\"{{ prefixCls }}-decade-select-content\">\n          {{ startYear }}-{{ endYear }}\n        </span>\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\n      </a>\n\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\n    </div>\n    <div class=\"{{ prefixCls }}-body\">\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n        <tbody class=\"{{ prefixCls }}-tbody\">\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\n              role=\"gridcell\"\n              title=\"{{ yearCell.title }}\"\n              (click)=\"yearCell.disabled ? null : yearCell.onClick()\"\n              [ngClass]=\"yearCell.classMap\"\n            >\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                        styles: [
                            // Support disabledDate
                            "\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        YearPanelComponent.ctorParameters = function () { return []; };
        YearPanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            disabledDate: [{ type: core.Input }],
            decadePanelShow: [{ type: core.Output }]
        };
        return YearPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        YearPanelComponent.prototype.locale;
        /** @type {?} */
        YearPanelComponent.prototype.value;
        /** @type {?} */
        YearPanelComponent.prototype.valueChange;
        /** @type {?} */
        YearPanelComponent.prototype.disabledDate;
        /** @type {?} */
        YearPanelComponent.prototype.decadePanelShow;
        /** @type {?} */
        YearPanelComponent.prototype.prefixCls;
        /** @type {?} */
        YearPanelComponent.prototype.panelYears;
    }
    /**
     * @record
     */
    function PanelYearData() { }
    if (false) {
        /** @type {?} */
        PanelYearData.prototype.disabled;
        /** @type {?} */
        PanelYearData.prototype.content;
        /** @type {?} */
        PanelYearData.prototype.year;
        /** @type {?} */
        PanelYearData.prototype.title;
        /** @type {?} */
        PanelYearData.prototype.isCurrent;
        /** @type {?} */
        PanelYearData.prototype.isLowerThanStart;
        /** @type {?} */
        PanelYearData.prototype.isBiggerThanEnd;
        /** @type {?} */
        PanelYearData.prototype.classMap;
        /** @type {?} */
        PanelYearData.prototype.onClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibPackerModule = /** @class */ (function () {
        function LibPackerModule() {
        }
        LibPackerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule, calendar.NzCalendarModule],
                        exports: [
                            CalendarHeaderComponent,
                            CalendarInputComponent,
                            CalendarFooterComponent,
                            OkButtonComponent,
                            TimePickerButtonComponent,
                            TodayButtonComponent,
                            YearPanelComponent,
                            MonthPanelComponent,
                            DecadePanelComponent,
                            InnerPopupComponent,
                            DateRangePopupComponent
                        ],
                        declarations: [
                            CalendarHeaderComponent,
                            CalendarInputComponent,
                            CalendarFooterComponent,
                            OkButtonComponent,
                            TimePickerButtonComponent,
                            TodayButtonComponent,
                            YearPanelComponent,
                            MonthPanelComponent,
                            DecadePanelComponent,
                            InnerPopupComponent,
                            DateRangePopupComponent
                        ]
                    },] }
        ];
        return LibPackerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPickerComponent = /** @class */ (function () {
        function NzPickerComponent(dateHelper, changeDetector) {
            this.dateHelper = dateHelper;
            this.changeDetector = changeDetector;
            this.noAnimation = false;
            this.isRange = false;
            this.open = undefined;
            this.valueChange = new core.EventEmitter();
            this.openChange = new core.EventEmitter(); // Emitted when overlay's open state change
            this.prefixCls = 'ant-calendar';
            this.animationOpenState = false;
            this.overlayOpen = false; // Available when "open"=undefined
            // Available when "open"=undefined
            this.overlayOffsetY = 0;
            this.overlayOffsetX = -2;
            this.overlayPositions = (/** @type {?} */ ([
                {
                    // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                    // offsetY: -10,
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'bottom'
                }
            ]));
            this.dropdownAnimation = 'bottom';
            this.currentPositionX = 'start';
            this.currentPositionY = 'top';
        }
        Object.defineProperty(NzPickerComponent.prototype, "realOpenState", {
            get: /**
             * @return {?}
             */
            function () {
                // The value that really decide the open state of overlay
                return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.autoFocus) {
                this.focus();
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzPickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.open) {
                this.animationStart();
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            if (this.isRange) {
                /** @type {?} */
                var firstInput = (/** @type {?} */ (((/** @type {?} */ (this.pickerInput.nativeElement))).querySelector('input:first-child')));
                firstInput.focus(); // Focus on the first input
            }
            else {
                this.pickerInput.nativeElement.focus();
            }
        };
        // Show overlay content
        // Show overlay content
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.showOverlay = 
        // Show overlay content
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.realOpenState) {
                this.overlayOpen = true;
                this.animationStart();
                this.openChange.emit(this.overlayOpen);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                        _this.cdkConnectedOverlay.overlayRef.updatePosition();
                    }
                }));
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.hideOverlay = /**
         * @return {?}
         */
        function () {
            if (this.realOpenState) {
                this.overlayOpen = false;
                this.openChange.emit(this.overlayOpen);
                this.focus();
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onClickInputBox = /**
         * @return {?}
         */
        function () {
            if (!this.disabled && !this.isOpenHandledByUser()) {
                this.showOverlay();
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onClickBackdrop = /**
         * @return {?}
         */
        function () {
            this.hideOverlay();
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onOverlayDetach = /**
         * @return {?}
         */
        function () {
            this.hideOverlay();
        };
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        /**
         * @param {?} position
         * @return {?}
         */
        NzPickerComponent.prototype.onPositionChange = 
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
            this.currentPositionX = (/** @type {?} */ (position.connectionPair.originX));
            this.currentPositionY = (/** @type {?} */ (position.connectionPair.originY));
            this.changeDetector.detectChanges(); // Take side-effects to position styles
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NzPickerComponent.prototype.onClickClear = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.value = this.isRange ? [] : null;
            this.valueChange.emit(this.value);
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getReadableValue = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            /** @type {?} */
            var value;
            if (this.isRange) {
                value = ((/** @type {?} */ (this.value)))[this.getPartTypeIndex((/** @type {?} */ (partType)))];
            }
            else {
                value = (/** @type {?} */ (this.value));
            }
            return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
        };
        /**
         * @param {?} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getPartTypeIndex = /**
         * @param {?} partType
         * @return {?}
         */
        function (partType) {
            return { left: 0, right: 1 }[partType];
        };
        /**
         * @param {?=} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getPlaceholder = /**
         * @param {?=} partType
         * @return {?}
         */
        function (partType) {
            return this.isRange ? this.placeholder[this.getPartTypeIndex((/** @type {?} */ (partType)))] : ((/** @type {?} */ (this.placeholder)));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzPickerComponent.prototype.isEmptyValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === null) {
                return true;
            }
            else if (this.isRange) {
                return !value || !Array.isArray(value) || value.every((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return !val; }));
            }
            else {
                return !value;
            }
        };
        // Whether open state is permanently controlled by user himself
        // Whether open state is permanently controlled by user himself
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.isOpenHandledByUser = 
        // Whether open state is permanently controlled by user himself
        /**
         * @return {?}
         */
        function () {
            return this.open !== undefined;
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.animationStart = /**
         * @return {?}
         */
        function () {
            if (this.realOpenState) {
                this.animationOpenState = true;
            }
        };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.animationDone = /**
         * @return {?}
         */
        function () {
            if (!this.realOpenState) {
                this.animationOpenState = false;
            }
        };
        NzPickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-picker',
                        exportAs: 'nzPicker',
                        template: "<span\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  class=\"{{ prefixCls }}-picker {{ size ? prefixCls + '-picker-' + size : '' }} {{ className }}\"\n  [ngStyle]=\"style\"\n  tabindex=\"0\"\n  (click)=\"onClickInputBox()\"\n  (keyup.enter)=\"onClickInputBox()\"\n>\n  <!-- Content of single picker -->\n  <ng-container *ngIf=\"!isRange\">\n    <input\n      #pickerInput\n      class=\"{{ prefixCls }}-picker-input ant-input\"\n      [class.ant-input-lg]=\"size === 'large'\"\n      [class.ant-input-sm]=\"size === 'small'\"\n      [class.ant-input-disabled]=\"disabled\"\n\n      [disabled]=\"disabled\"\n      readonly\n      value=\"{{ getReadableValue() }}\"\n      placeholder=\"{{ getPlaceholder() }}\"\n    />\n    <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n  </ng-container>\n\n  <!-- Content of range picker -->\n  <ng-container *ngIf=\"isRange\">\n    <span\n      #pickerInput\n      class=\"{{ prefixCls }}-picker-input ant-input\"\n      [class.ant-input-lg]=\"size === 'large'\"\n      [class.ant-input-sm]=\"size === 'small'\"\n      [class.ant-input-disabled]=\"disabled\"\n    >\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\n      <span class=\"{{ prefixCls }}-range-picker-separator\"> ~ </span>\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\n      <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n    </span>\n  </ng-container>\n</span>\n\n<!-- Input for Range ONLY -->\n<ng-template #tplRangeInput let-partType=\"partType\">\n  <input\n    class=\"{{ prefixCls }}-range-picker-input\"\n    [disabled]=\"disabled\"\n    readonly\n    value=\"{{ getReadableValue(partType) }}\"\n    placeholder=\"{{ getPlaceholder(partType) }}\"\n  />\n</ng-template>\n\n<!-- Right operator icons -->\n<ng-template #tplRightRest>\n  <i\n    nz-icon\n    nzType=\"close-circle\"\n    nzTheme=\"fill\"\n    *ngIf=\"!disabled && !isEmptyValue(value) && allowClear\"\n    class=\"{{ prefixCls }}-picker-clear\"\n    (click)=\"onClickClear($event)\"\n  ></i>\n  <span class=\"{{ prefixCls }}-picker-icon\">\n    <i nz-icon nzType=\"calendar\"></i>\n  </span>\n</ng-template>\n\n<!-- Overlay -->\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"realOpenState\"\n  [cdkConnectedOverlayHasBackdrop]=\"!isOpenHandledByUser()\"\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  (positionChange)=\"onPositionChange($event)\"\n  (backdropClick)=\"onClickBackdrop()\"\n  (detach)=\"onOverlayDetach()\"\n>\n  <div\n    [nzNoAnimation]=\"noAnimation\"\n    [@slideMotion]=\"dropdownAnimation\"\n    (@slideMotion.done)=\"animationDone()\"\n    style=\"position: relative;\"\n    [style.left]=\"currentPositionX === 'start' ? '-2px' : '2px'\"\n    [style.top]=\"currentPositionY === 'top' ? '-2px' : '2px'\"\n  > <!-- Compatible for overlay that not support offset dynamically and immediately -->\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                        animations: [core$1.slideMotion],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NzPickerComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService },
            { type: core.ChangeDetectorRef }
        ]; };
        NzPickerComponent.propDecorators = {
            noAnimation: [{ type: core.Input }],
            isRange: [{ type: core.Input }],
            open: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            allowClear: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            className: [{ type: core.Input }],
            format: [{ type: core.Input }],
            size: [{ type: core.Input }],
            style: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            openChange: [{ type: core.Output }],
            origin: [{ type: core.ViewChild, args: ['origin', { static: false },] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
            pickerInput: [{ type: core.ViewChild, args: ['pickerInput', { static: false },] }]
        };
        return NzPickerComponent;
    }());
    if (false) {
        /** @type {?} */
        NzPickerComponent.prototype.noAnimation;
        /** @type {?} */
        NzPickerComponent.prototype.isRange;
        /** @type {?} */
        NzPickerComponent.prototype.open;
        /** @type {?} */
        NzPickerComponent.prototype.disabled;
        /** @type {?} */
        NzPickerComponent.prototype.placeholder;
        /** @type {?} */
        NzPickerComponent.prototype.allowClear;
        /** @type {?} */
        NzPickerComponent.prototype.autoFocus;
        /** @type {?} */
        NzPickerComponent.prototype.className;
        /** @type {?} */
        NzPickerComponent.prototype.format;
        /** @type {?} */
        NzPickerComponent.prototype.size;
        /** @type {?} */
        NzPickerComponent.prototype.style;
        /** @type {?} */
        NzPickerComponent.prototype.value;
        /** @type {?} */
        NzPickerComponent.prototype.valueChange;
        /** @type {?} */
        NzPickerComponent.prototype.openChange;
        /** @type {?} */
        NzPickerComponent.prototype.origin;
        /** @type {?} */
        NzPickerComponent.prototype.cdkConnectedOverlay;
        /** @type {?} */
        NzPickerComponent.prototype.pickerInput;
        /** @type {?} */
        NzPickerComponent.prototype.prefixCls;
        /** @type {?} */
        NzPickerComponent.prototype.animationOpenState;
        /** @type {?} */
        NzPickerComponent.prototype.overlayOpen;
        /** @type {?} */
        NzPickerComponent.prototype.overlayOffsetY;
        /** @type {?} */
        NzPickerComponent.prototype.overlayOffsetX;
        /** @type {?} */
        NzPickerComponent.prototype.overlayPositions;
        /** @type {?} */
        NzPickerComponent.prototype.dropdownAnimation;
        /** @type {?} */
        NzPickerComponent.prototype.currentPositionX;
        /** @type {?} */
        NzPickerComponent.prototype.currentPositionY;
        /**
         * @type {?}
         * @private
         */
        NzPickerComponent.prototype.dateHelper;
        /**
         * @type {?}
         * @private
         */
        NzPickerComponent.prototype.changeDetector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var POPUP_STYLE_PATCH = { position: 'relative' };
    // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
    /**
     * The base picker for all common APIs
     * @abstract
     */
    var AbstractPickerComponent = /** @class */ (function () {
        function AbstractPickerComponent(i18n, cdr, dateHelper, noAnimation) {
            this.i18n = i18n;
            this.cdr = cdr;
            this.dateHelper = dateHelper;
            this.noAnimation = noAnimation;
            // --- Common API
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzDisabled = false;
            this.nzPopupStyle = POPUP_STYLE_PATCH;
            this.nzOnOpenChange = new core.EventEmitter();
            this.isRange = false; // Indicate whether the value is a range value
            this.destroyed$ = new rxjs.Subject();
            this.isCustomPlaceHolder = false;
            // ------------------------------------------------------------------------
            // | Control value accessor implements
            // ------------------------------------------------------------------------
            // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
            this.onChangeFn = (/**
             * @return {?}
             */
            function () { return void 0; });
            this.onTouchedFn = (/**
             * @return {?}
             */
            function () { return void 0; });
        }
        Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
            get: 
            // Indicate whether the value is a range value
            /**
             * @return {?}
             */
            function () {
                return this.picker.animationOpenState;
            } // Use picker's real open state to let re-render the picker's content when shown up
            ,
            enumerable: true,
            configurable: true
        });
        // Use picker's real open state to let re-render the picker's content when shown up
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.initValue = 
        // Use picker's real open state to let re-render the picker's content when shown up
        /**
         * @return {?}
         */
        function () {
            this.nzValue = this.isRange ? [] : null;
        };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Subscribe the every locale change if the nzLocale is not handled by user
            if (!this.nzLocale) {
                this.i18n.localeChange.pipe(operators.takeUntil(this.destroyed$)).subscribe((/**
                 * @return {?}
                 */
                function () { return _this.setLocale(); }));
            }
            // Default value
            this.initValue();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzPopupStyle) {
                // Always assign the popup style patch
                this.nzPopupStyle = this.nzPopupStyle ? __assign({}, this.nzPopupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
            }
            // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
            if (changes.nzPlaceHolder && changes.nzPlaceHolder.firstChange && typeof this.nzPlaceHolder !== 'undefined') {
                this.isCustomPlaceHolder = true;
            }
            if (changes.nzLocale) {
                // The nzLocale is currently handled by user
                this.setDefaultPlaceHolder();
            }
        };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroyed$.next();
            this.destroyed$.complete();
        };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.closeOverlay = /**
         * @return {?}
         */
        function () {
            this.picker.hideOverlay();
        };
        /**
         * Common handle for value changes
         * @param value changed value
         */
        /**
         * Common handle for value changes
         * @param {?} value changed value
         * @return {?}
         */
        AbstractPickerComponent.prototype.onValueChange = /**
         * Common handle for value changes
         * @param {?} value changed value
         * @return {?}
         */
        function (value) {
            this.nzValue = value;
            if (this.isRange) {
                /** @type {?} */
                var vAsRange = (/** @type {?} */ (this.nzValue));
                if (vAsRange.length) {
                    this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
                }
                else {
                    this.onChangeFn([]);
                }
            }
            else {
                if (this.nzValue) {
                    this.onChangeFn(((/** @type {?} */ (this.nzValue))).nativeDate);
                }
                else {
                    this.onChangeFn(null);
                }
            }
            this.onTouchedFn();
        };
        /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param open The overlayOpen in picker component
         */
        /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param {?} open The overlayOpen in picker component
         * @return {?}
         */
        AbstractPickerComponent.prototype.onOpenChange = /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param {?} open The overlayOpen in picker component
         * @return {?}
         */
        function (open) {
            this.nzOnOpenChange.emit(open);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AbstractPickerComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setValue(value);
            this.cdr.markForCheck();
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        AbstractPickerComponent.prototype.registerOnChange = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeFn = fn;
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        AbstractPickerComponent.prototype.registerOnTouched = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedFn = fn;
        };
        /**
         * @param {?} disabled
         * @return {?}
         */
        AbstractPickerComponent.prototype.setDisabledState = /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this.nzDisabled = disabled;
            this.cdr.markForCheck();
        };
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        /**
         * @private
         * @return {?}
         */
        AbstractPickerComponent.prototype.setLocale = 
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        /**
         * @private
         * @return {?}
         */
        function () {
            this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
            this.setDefaultPlaceHolder();
            this.cdr.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.isCustomPlaceHolder && this.nzLocale) {
                this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
            }
        };
        // Safe way of setting value with default
        // Safe way of setting value with default
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        AbstractPickerComponent.prototype.setValue = 
        // Safe way of setting value with default
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isRange) {
                this.nzValue = value ? ((/** @type {?} */ (value))).map((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return new core$1.CandyDate(val); })) : [];
            }
            else {
                this.nzValue = value ? new core$1.CandyDate((/** @type {?} */ (value))) : null;
            }
        };
        AbstractPickerComponent.propDecorators = {
            nzAllowClear: [{ type: core.Input }],
            nzAutoFocus: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzClassName: [{ type: core.Input }],
            nzDisabledDate: [{ type: core.Input }],
            nzLocale: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzPopupStyle: [{ type: core.Input }],
            nzDropdownClassName: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzStyle: [{ type: core.Input }],
            nzFormat: [{ type: core.Input }],
            nzValue: [{ type: core.Input }],
            nzOnOpenChange: [{ type: core.Output }],
            picker: [{ type: core.ViewChild, args: [NzPickerComponent, { static: true },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzOpen", void 0);
        return AbstractPickerComponent;
    }());
    if (false) {
        /** @type {?} */
        AbstractPickerComponent.prototype.nzAllowClear;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzAutoFocus;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzDisabled;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzOpen;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzClassName;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzDisabledDate;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzLocale;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzPopupStyle;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzDropdownClassName;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzSize;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzStyle;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzFormat;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzValue;
        /** @type {?} */
        AbstractPickerComponent.prototype.nzOnOpenChange;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.picker;
        /** @type {?} */
        AbstractPickerComponent.prototype.isRange;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.destroyed$;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.isCustomPlaceHolder;
        /** @type {?} */
        AbstractPickerComponent.prototype.onChangeFn;
        /** @type {?} */
        AbstractPickerComponent.prototype.onTouchedFn;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.i18n;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.cdr;
        /**
         * @type {?}
         * @protected
         */
        AbstractPickerComponent.prototype.dateHelper;
        /** @type {?} */
        AbstractPickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateRangePickerComponent = /** @class */ (function (_super) {
        __extends(DateRangePickerComponent, _super);
        function DateRangePickerComponent(i18n, cdr, dateHelper, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.showWeek = false; // Should show as week picker
            _this.nzShowToday = true;
            _this.nzOnPanelChange = new core.EventEmitter();
            _this.nzOnCalendarChange = new core.EventEmitter();
            _this.nzOnOk = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(DateRangePickerComponent.prototype, "nzShowTime", {
            get: /**
             * @return {?}
             */
            function () {
                return this._showTime;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._showTime = typeof value === 'object' ? value : core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
            get: /**
             * @return {?}
             */
            function () {
                // Range not support nzShowToday currently
                return !this.isRange && this.nzShowToday;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DateRangePickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
            // Default format when it's empty
            if (!this.nzFormat) {
                if (this.showWeek) {
                    this.nzFormat = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
                }
                else {
                    if (this.dateHelper.relyOnDatePipe) {
                        this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                    }
                    else {
                        this.nzFormat = this.nzShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                    }
                }
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DateRangePickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.nzRenderExtraFooter) {
                this.extraFooter = core$1.valueFunctionProp(this.nzRenderExtraFooter);
            }
            if (changes.nzShowTime || changes.nzStyle) {
                this.setFixedPickerStyle();
            }
        };
        /**
         * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
         */
        /**
         * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
         * @param {?} value
         * @param {?=} isEnter
         * @return {?}
         */
        DateRangePickerComponent.prototype.onValueChange = /**
         * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
         * @param {?} value
         * @param {?=} isEnter
         * @return {?}
         */
        function (value, isEnter) {
            if (isEnter === void 0) { isEnter = false; }
            _super.prototype.onValueChange.call(this, value);
            if (!this.nzShowTime || isEnter) {
                this.closeOverlay();
            }
        };
        // Emit nzOnCalendarChange when select date by nz-range-picker
        // Emit nzOnCalendarChange when select date by nz-range-picker
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePickerComponent.prototype.onCalendarChange = 
        // Emit nzOnCalendarChange when select date by nz-range-picker
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isRange) {
                /** @type {?} */
                var rangeValue = value.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.nativeDate; }));
                this.nzOnCalendarChange.emit(rangeValue);
            }
        };
        // Emitted when done with date selecting
        // Emitted when done with date selecting
        /**
         * @return {?}
         */
        DateRangePickerComponent.prototype.onResultOk = 
        // Emitted when done with date selecting
        /**
         * @return {?}
         */
        function () {
            if (this.isRange) {
                /** @type {?} */
                var value = (/** @type {?} */ (this.nzValue));
                if (value.length) {
                    this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
                }
                else {
                    this.nzOnOk.emit([]);
                }
            }
            else {
                if (this.nzValue) {
                    this.nzOnOk.emit(((/** @type {?} */ (this.nzValue))).nativeDate);
                }
                else {
                    this.nzOnOk.emit(null);
                }
            }
            this.closeOverlay();
        };
        /**
         * @param {?} open
         * @return {?}
         */
        DateRangePickerComponent.prototype.onOpenChange = /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this.nzOnOpenChange.emit(open);
        };
        // Setup fixed style for picker
        // Setup fixed style for picker
        /**
         * @private
         * @return {?}
         */
        DateRangePickerComponent.prototype.setFixedPickerStyle = 
        // Setup fixed style for picker
        /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showTimeFixes = {};
            if (this.nzShowTime) {
                showTimeFixes.width = this.isRange ? '350px' : '195px';
            }
            this.pickerStyle = __assign({}, showTimeFixes, this.nzStyle);
        };
        DateRangePickerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "" // Just for rollup
                    }] }
        ];
        /** @nocollapse */
        DateRangePickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core$1.NzNoAnimationDirective }
        ]; };
        DateRangePickerComponent.propDecorators = {
            nzDateRender: [{ type: core.Input }],
            nzDisabledTime: [{ type: core.Input }],
            nzRenderExtraFooter: [{ type: core.Input }],
            nzShowToday: [{ type: core.Input }],
            nzMode: [{ type: core.Input }],
            nzRanges: [{ type: core.Input }],
            nzOnPanelChange: [{ type: core.Output }],
            nzOnCalendarChange: [{ type: core.Output }],
            nzShowTime: [{ type: core.Input }],
            nzOnOk: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], DateRangePickerComponent.prototype, "nzShowToday", void 0);
        return DateRangePickerComponent;
    }(AbstractPickerComponent));
    if (false) {
        /** @type {?} */
        DateRangePickerComponent.prototype.showWeek;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzDateRender;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzDisabledTime;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzRenderExtraFooter;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzShowToday;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzMode;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzRanges;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzOnPanelChange;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzOnCalendarChange;
        /**
         * @type {?}
         * @private
         */
        DateRangePickerComponent.prototype._showTime;
        /** @type {?} */
        DateRangePickerComponent.prototype.nzOnOk;
        /** @type {?} */
        DateRangePickerComponent.prototype.pickerStyle;
        /** @type {?} */
        DateRangePickerComponent.prototype.extraFooter;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The base picker for header panels, current support: Year/Month
     */
    var HeaderPickerComponent = /** @class */ (function (_super) {
        __extends(HeaderPickerComponent, _super);
        function HeaderPickerComponent(i18n, cdr, dateHelper, noAnimation) {
            return _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        }
        /**
         * @return {?}
         */
        HeaderPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
            this.panelMode = this.endPanelMode;
            /** @type {?} */
            var allHeaderPanels = ['decade', 'year', 'month'];
            this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        HeaderPickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.nzRenderExtraFooter) {
                this.extraFooter = core$1.valueFunctionProp(this.nzRenderExtraFooter);
            }
        };
        /**
         * @param {?} mode
         * @return {?}
         */
        HeaderPickerComponent.prototype.onPanelModeChange = /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (this.supportPanels.indexOf(mode) > -1) {
                this.panelMode = mode;
            }
            else {
                // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
                this.panelMode = this.endPanelMode;
            }
        };
        /**
         * @param {?} mode
         * @param {?} value
         * @return {?}
         */
        HeaderPickerComponent.prototype.onChooseValue = /**
         * @param {?} mode
         * @param {?} value
         * @return {?}
         */
        function (mode, value) {
            if (this.endPanelMode === mode) {
                _super.prototype.onValueChange.call(this, value);
                this.closeOverlay();
            }
        };
        /**
         * @param {?} open
         * @return {?}
         */
        HeaderPickerComponent.prototype.onOpenChange = /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            if (!open) {
                this.cleanUp();
            }
            this.nzOnOpenChange.emit(open);
        };
        // Restore some initial props to let open as new in next time
        // Restore some initial props to let open as new in next time
        /**
         * @private
         * @return {?}
         */
        HeaderPickerComponent.prototype.cleanUp = 
        // Restore some initial props to let open as new in next time
        /**
         * @private
         * @return {?}
         */
        function () {
            this.panelMode = this.endPanelMode;
        };
        HeaderPickerComponent.decorators = [
            { type: core.Component, args: [{
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        HeaderPickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core$1.NzNoAnimationDirective }
        ]; };
        HeaderPickerComponent.propDecorators = {
            nzPlaceHolder: [{ type: core.Input }],
            nzRenderExtraFooter: [{ type: core.Input }],
            nzDefaultValue: [{ type: core.Input }],
            nzFormat: [{ type: core.Input }]
        };
        return HeaderPickerComponent;
    }(AbstractPickerComponent));
    if (false) {
        /** @type {?} */
        HeaderPickerComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        HeaderPickerComponent.prototype.nzRenderExtraFooter;
        /** @type {?} */
        HeaderPickerComponent.prototype.nzDefaultValue;
        /** @type {?} */
        HeaderPickerComponent.prototype.nzFormat;
        /** @type {?} */
        HeaderPickerComponent.prototype.endPanelMode;
        /** @type {?} */
        HeaderPickerComponent.prototype.panelMode;
        /** @type {?} */
        HeaderPickerComponent.prototype.extraFooter;
        /**
         * @type {?}
         * @private
         */
        HeaderPickerComponent.prototype.supportPanels;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDatePickerComponent = /** @class */ (function (_super) {
        __extends(NzDatePickerComponent, _super);
        function NzDatePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.isRange = false;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzDatePickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-date-picker',
                        exportAs: 'nzDatePicker',
                        template: "<nz-picker\n  [isRange]=\"isRange\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"pickerStyle\"\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"nzMode\"\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\n    [value]=\"nzValue\"\n    (valueChange)=\"onValueChange($event)\"\n    (inputChange)=\"onValueChange($event, true)\"\n    (calendarChange)=\"onCalendarChange($event)\"\n    [locale]=\"nzLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"nzShowTime\"\n    [format]=\"nzFormat\"\n    [dateRender]=\"nzDateRender\"\n    [disabledDate]=\"nzDisabledDate\"\n    [disabledTime]=\"nzDisabledTime\"\n    [placeholder]=\"nzPlaceHolder\"\n    [dropdownClassName]=\"nzDropdownClassName\"\n    [popupStyle]=\"nzPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"nzRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzDatePickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzDatePickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        return NzDatePickerComponent;
    }(DateRangePickerComponent));
    if (false) {
        /** @type {?} */
        NzDatePickerComponent.prototype.isRange;
        /** @type {?} */
        NzDatePickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMonthPickerComponent = /** @class */ (function (_super) {
        __extends(NzMonthPickerComponent, _super);
        function NzMonthPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzFormat = 'yyyy-MM';
            _this.endPanelMode = 'month';
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzMonthPickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-month-picker',
                        exportAs: 'nzMonthPicker',
                        template: "<nz-picker\n  [isRange]=\"false\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"nzStyle\"\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <div *ngIf=\"realOpenState\">\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\n        <div class=\"ant-calendar-month-calendar-content\">\n          <div class=\"ant-calendar-month-header-wrap\">\n            <calendar-header\n              [disabledMonth]=\"nzDisabledDate\"\n              [disabledYear]=\"nzDisabledDate\"\n              [panelMode]=\"panelMode\"\n              (panelModeChange)=\"onPanelModeChange($event)\"\n              [value]=\"nzValue\"\n              (chooseYear)=\"onChooseValue('year', $event)\"\n              (chooseMonth)=\"onChooseValue('month', $event)\"\n              [locale]=\"nzLocale.lang\"\n              [enablePrev]=\"true\"\n              [enableNext]=\"true\"\n            ></calendar-header>\n          </div>\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzMonthPickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzMonthPickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzMonthPickerComponent.propDecorators = {
            nzFormat: [{ type: core.Input }]
        };
        return NzMonthPickerComponent;
    }(HeaderPickerComponent));
    if (false) {
        /** @type {?} */
        NzMonthPickerComponent.prototype.nzFormat;
        /** @type {?} */
        NzMonthPickerComponent.prototype.endPanelMode;
        /** @type {?} */
        NzMonthPickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzRangePickerComponent = /** @class */ (function (_super) {
        __extends(NzRangePickerComponent, _super);
        function NzRangePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.isRange = true;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzRangePickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-range-picker',
                        exportAs: 'nzRangePicker',
                        template: "<nz-picker\n  [isRange]=\"isRange\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"pickerStyle\"\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"nzMode\"\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\n    [value]=\"nzValue\"\n    (valueChange)=\"onValueChange($event)\"\n    (inputChange)=\"onValueChange($event, true)\"\n    (calendarChange)=\"onCalendarChange($event)\"\n    [locale]=\"nzLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"nzShowTime\"\n    [format]=\"nzFormat\"\n    [dateRender]=\"nzDateRender\"\n    [disabledDate]=\"nzDisabledDate\"\n    [disabledTime]=\"nzDisabledTime\"\n    [placeholder]=\"nzPlaceHolder\"\n    [dropdownClassName]=\"nzDropdownClassName\"\n    [popupStyle]=\"nzPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"nzRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzRangePickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzRangePickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        return NzRangePickerComponent;
    }(DateRangePickerComponent));
    if (false) {
        /** @type {?} */
        NzRangePickerComponent.prototype.isRange;
        /** @type {?} */
        NzRangePickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzWeekPickerComponent = /** @class */ (function (_super) {
        __extends(NzWeekPickerComponent, _super);
        function NzWeekPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.showWeek = true;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzWeekPickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-week-picker',
                        exportAs: 'nzWeekPicker',
                        template: "<nz-picker\n  [isRange]=\"isRange\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"pickerStyle\"\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"nzMode\"\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\n    [value]=\"nzValue\"\n    (valueChange)=\"onValueChange($event)\"\n    (inputChange)=\"onValueChange($event, true)\"\n    (calendarChange)=\"onCalendarChange($event)\"\n    [locale]=\"nzLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"nzShowTime\"\n    [format]=\"nzFormat\"\n    [dateRender]=\"nzDateRender\"\n    [disabledDate]=\"nzDisabledDate\"\n    [disabledTime]=\"nzDisabledTime\"\n    [placeholder]=\"nzPlaceHolder\"\n    [dropdownClassName]=\"nzDropdownClassName\"\n    [popupStyle]=\"nzPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"nzRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzWeekPickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzWeekPickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        return NzWeekPickerComponent;
    }(DateRangePickerComponent));
    if (false) {
        /** @type {?} */
        NzWeekPickerComponent.prototype.showWeek;
        /** @type {?} */
        NzWeekPickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzYearPickerComponent = /** @class */ (function (_super) {
        __extends(NzYearPickerComponent, _super);
        function NzYearPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzFormat = 'yyyy';
            _this.endPanelMode = 'year';
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzYearPickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-year-picker',
                        exportAs: 'nzYearPicker',
                        template: "<nz-picker\n  [isRange]=\"false\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"nzStyle\"\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <div *ngIf=\"realOpenState\">\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\n        <div class=\"ant-calendar-month-calendar-content\">\n          <div class=\"ant-calendar-month-header-wrap\">\n            <calendar-header\n              [disabledMonth]=\"nzDisabledDate\"\n              [disabledYear]=\"nzDisabledDate\"\n              [panelMode]=\"panelMode\"\n              (panelModeChange)=\"onPanelModeChange($event)\"\n              [value]=\"nzValue\"\n              (chooseYear)=\"onChooseValue('year', $event)\"\n              (chooseMonth)=\"onChooseValue('month', $event)\"\n              [locale]=\"nzLocale.lang\"\n              [enablePrev]=\"true\"\n              [enableNext]=\"true\"\n            ></calendar-header>\n          </div>\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzYearPickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzYearPickerComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef },
            { type: i18n.DateHelperService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzYearPickerComponent.propDecorators = {
            nzFormat: [{ type: core.Input }]
        };
        return NzYearPickerComponent;
    }(HeaderPickerComponent));
    if (false) {
        /** @type {?} */
        NzYearPickerComponent.prototype.nzFormat;
        /** @type {?} */
        NzYearPickerComponent.prototype.endPanelMode;
        /** @type {?} */
        NzYearPickerComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDatePickerModule = /** @class */ (function () {
        function NzDatePickerModule() {
        }
        NzDatePickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, overlay.OverlayModule, LibPackerModule, icon.NzIconModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule],
                        exports: [
                            NzDatePickerComponent,
                            NzRangePickerComponent,
                            NzMonthPickerComponent,
                            NzYearPickerComponent,
                            NzWeekPickerComponent
                        ],
                        declarations: [
                            HeaderPickerComponent,
                            DateRangePickerComponent,
                            NzPickerComponent,
                            NzDatePickerComponent,
                            NzMonthPickerComponent,
                            NzYearPickerComponent,
                            NzWeekPickerComponent,
                            NzRangePickerComponent
                        ]
                    },] }
        ];
        return NzDatePickerModule;
    }());

    exports.NzDatePickerComponent = NzDatePickerComponent;
    exports.NzDatePickerModule = NzDatePickerModule;
    exports.NzMonthPickerComponent = NzMonthPickerComponent;
    exports.NzRangePickerComponent = NzRangePickerComponent;
    exports.NzWeekPickerComponent = NzWeekPickerComponent;
    exports.NzYearPickerComponent = NzYearPickerComponent;
    exports.ɵa = LibPackerModule;
    exports.ɵb = CalendarHeaderComponent;
    exports.ɵc = CalendarInputComponent;
    exports.ɵd = CalendarFooterComponent;
    exports.ɵe = OkButtonComponent;
    exports.ɵf = TimePickerButtonComponent;
    exports.ɵg = TodayButtonComponent;
    exports.ɵh = YearPanelComponent;
    exports.ɵi = MonthPanelComponent;
    exports.ɵj = DecadePanelComponent;
    exports.ɵk = InnerPopupComponent;
    exports.ɵl = DateRangePopupComponent;
    exports.ɵm = DateRangePickerComponent;
    exports.ɵn = AbstractPickerComponent;
    exports.ɵo = NzPickerComponent;
    exports.ɵp = HeaderPickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-date-picker.umd.js.map
