(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/select'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/calendar', ['exports', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/i18n', 'ng-zorro-antd/radio', 'ng-zorro-antd/select', 'ng-zorro-antd/core'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].calendar = {}), global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].select, global['ng-zorro-antd'].core));
}(this, (function (exports, common, core, forms, i18n, radio, select, core$1) { 'use strict';

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
    var DateTableCellComponent = /** @class */ (function () {
        function DateTableCellComponent() {
            this.isTemplateRef = core$1.isTemplateRef;
            this.isNonEmptyString = core$1.isNonEmptyString;
        }
        DateTableCellComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: '[date-table-cell]',
                        exportAs: 'dateTableCell',
                        template: "<ng-container [ngSwitch]=\"prefixCls\">\n  <ng-container *ngSwitchCase=\"'ant-calendar'\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(cell.dateCellRender)\">\n        <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: { $implicit: cell.value }\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(cell.dateCellRender)\">\n        <span [innerHTML]=\"cell.dateCellRender\"></span>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <div class=\"{{ prefixCls }}-date\" [attr.aria-selected]=\"cell.isSelected\" [attr.aria-disabled]=\"cell.isDisabled\">\n          {{ cell.content }}\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\n    <div class=\"ant-fullcalendar-date\">\n      <ng-container *ngIf=\"cell.dateFullCellRender else defaultCell\">\n        <ng-container *ngTemplateOutlet=\"cell.dateFullCellRender; context: {$implicit: cell.value}\"></ng-container>\n      </ng-container>\n      <ng-template #defaultCell>\n        <div class=\"{{ prefixCls }}-value\">{{ cell.content }}</div>\n        <div *ngIf=\"cell.dateCellRender\" class=\"{{ prefixCls }}-content\">\n          <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: {$implicit: cell.value}\"></ng-container>\n        </div>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>"
                    }] }
        ];
        DateTableCellComponent.propDecorators = {
            prefixCls: [{ type: core.Input }],
            cell: [{ type: core.Input }]
        };
        return DateTableCellComponent;
    }());
    if (false) {
        /** @type {?} */
        DateTableCellComponent.prototype.isTemplateRef;
        /** @type {?} */
        DateTableCellComponent.prototype.isNonEmptyString;
        /** @type {?} */
        DateTableCellComponent.prototype.prefixCls;
        /** @type {?} */
        DateTableCellComponent.prototype.cell;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DATE_ROW_NUM = 6;
    /** @type {?} */
    var DATE_COL_NUM = 7;
    var DateTableComponent = /** @class */ (function () {
        function DateTableComponent(i18n, dateHelper) {
            this.i18n = i18n;
            this.dateHelper = dateHelper;
            this.prefixCls = 'ant-calendar';
            this.showWeek = false;
            this.dayHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            // Emitted when hover on a day by mouse enter
            this.valueChange = new core.EventEmitter();
        }
        Object.defineProperty(DateTableComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: 
            // Range ONLY
            /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                // Show today by default
                this._value = this.activeDate = date || new core$1.CandyDate();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DateTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.render();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DateTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this.isDateRealChange(changes.activeDate) ||
                this.isDateRealChange(changes.value) ||
                this.isDateRealChange(changes.selectedValue) ||
                this.isDateRealChange(changes.hoverValue)) {
                this.render();
            }
        };
        /**
         * @private
         * @param {?} change
         * @return {?}
         */
        DateTableComponent.prototype.isDateRealChange = /**
         * @private
         * @param {?} change
         * @return {?}
         */
        function (change) {
            if (change) {
                /** @type {?} */
                var previousValue_1 = change.previousValue;
                /** @type {?} */
                var currentValue = change.currentValue;
                if (Array.isArray(currentValue)) {
                    return (!Array.isArray(previousValue_1) ||
                        currentValue.length !== previousValue_1.length ||
                        currentValue.some((/**
                         * @param {?} value
                         * @param {?} index
                         * @return {?}
                         */
                        function (value, index) {
                            /** @type {?} */
                            var previousCandyDate = previousValue_1[index];
                            return previousCandyDate instanceof core$1.CandyDate
                                ? previousCandyDate.isSameDay(value)
                                : previousCandyDate !== value;
                        })));
                }
                else {
                    return !this.isSameDate((/** @type {?} */ (previousValue_1)), currentValue);
                }
            }
            return false;
        };
        /**
         * @private
         * @param {?} left
         * @param {?} right
         * @return {?}
         */
        DateTableComponent.prototype.isSameDate = /**
         * @private
         * @param {?} left
         * @param {?} right
         * @return {?}
         */
        function (left, right) {
            return (!left && !right) || (left && right && right.isSameDay(left));
        };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.headWeekDays = this.makeHeadWeekDays();
                this.weekRows = this.makeWeekRows();
            }
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateTableComponent.prototype.changeValueFromInside = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Only change date not change time
            /** @type {?} */
            var newValue = this.value
                .setYear(value.getYear())
                .setMonth(value.getMonth())
                .setDate(value.getDate());
            this.valueChange.emit(newValue);
        };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.makeHeadWeekDays = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var weekDays = [];
            /** @type {?} */
            var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
            for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                /** @type {?} */
                var day = start.addDays(colIndex);
                weekDays[colIndex] = {
                    short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                    // eg. Tue
                    veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
                };
            }
            return weekDays;
        };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.getVeryShortWeekFormat = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.dateHelper.relyOnDatePipe) {
                return this.i18n
                    .getLocaleId()
                    .toLowerCase()
                    .indexOf('zh') === 0
                    ? 'EEEEE'
                    : 'EEEEEE'; // Use extreme short for chinese
            }
            return 'dd';
        };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.makeWeekRows = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            var _this = this;
            /** @type {?} */
            var weekRows = [];
            /** @type {?} */
            var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
            for (var week = 0; week < DATE_ROW_NUM; week++) {
                /** @type {?} */
                var weekStart = firstDayOfMonth.addDays(week * 7);
                /** @type {?} */
                var row = {
                    isActive: false,
                    isCurrent: false,
                    dateCells: [],
                    year: weekStart.getYear()
                };
                var _loop_1 = function (day) {
                    var _a;
                    /** @type {?} */
                    var date = weekStart.addDays(day);
                    /** @type {?} */
                    var dateFormat = this_1.dateHelper.relyOnDatePipe
                        ? 'longDate'
                        : this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                    /** @type {?} */
                    var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                    /** @type {?} */
                    var label = this_1.dateHelper.format(date.nativeDate, this_1.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                    /** @type {?} */
                    var cell = {
                        value: date.nativeDate,
                        label: label,
                        isSelected: false,
                        isDisabled: false,
                        isToday: false,
                        title: title,
                        dateCellRender: core$1.valueFunctionProp(this_1.dateCellRender, date),
                        // Customized content
                        dateFullCellRender: core$1.valueFunctionProp(this_1.dateFullCellRender, date),
                        content: "" + date.getDate(),
                        onClick: (/**
                         * @return {?}
                         */
                        function () { return _this.changeValueFromInside(date); }),
                        onMouseEnter: (/**
                         * @return {?}
                         */
                        function () { return _this.dayHover.emit(date); })
                    };
                    if (this_1.showWeek && !row.weekNum) {
                        row.weekNum = this_1.dateHelper.getISOWeek(date.nativeDate);
                    }
                    if (date.isToday()) {
                        cell.isToday = true;
                        row.isCurrent = true;
                    }
                    if (Array.isArray(this_1.selectedValue) && date.isSameMonth(this_1.activeDate)) {
                        // Range selections
                        /** @type {?} */
                        var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                        /** @type {?} */
                        var start = rangeValue[0];
                        /** @type {?} */
                        var end = rangeValue[1];
                        if (start) {
                            if (start.isSameDay(date)) {
                                cell.isSelectedStartDate = true;
                                cell.isSelected = true;
                                row.isActive = true;
                            }
                            if (end) {
                                if (end.isSameDay(date)) {
                                    cell.isSelectedEndDate = true;
                                    cell.isSelected = true;
                                    row.isActive = true;
                                }
                                else if (date.isAfterDay(start) && date.isBeforeDay(end)) {
                                    cell.isInRange = true;
                                }
                            }
                        }
                    }
                    else if (date.isSameDay(this_1.value)) {
                        cell.isSelected = true;
                        row.isActive = true;
                    }
                    if (this_1.disabledDate && this_1.disabledDate(date.nativeDate)) {
                        cell.isDisabled = true;
                    }
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-today"] = cell.isToday,
                        _a[this_1.prefixCls + "-last-month-cell"] = date.isBeforeMonth(this_1.activeDate),
                        _a[this_1.prefixCls + "-next-month-btn-day"] = date.isAfterMonth(this_1.activeDate),
                        _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                        _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                        _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                        _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                        _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                        _a);
                    row.dateCells.push(cell);
                };
                var this_1 = this;
                for (var day = 0; day < 7; day++) {
                    _loop_1(day);
                }
                row.classMap = (_a = {},
                    _a[this.prefixCls + "-current-week"] = row.isCurrent,
                    _a[this.prefixCls + "-active-week"] = row.isActive,
                    _a);
                weekRows.push(row);
            }
            return weekRows;
        };
        /**
         * @param {?} _index
         * @param {?} item
         * @return {?}
         */
        DateTableComponent.prototype.trackByDateFn = /**
         * @param {?} _index
         * @param {?} item
         * @return {?}
         */
        function (_index, item) {
            return "" + item.title;
        };
        /**
         * @param {?} _index
         * @param {?} item
         * @return {?}
         */
        DateTableComponent.prototype.trackByWeekFn = /**
         * @param {?} _index
         * @param {?} item
         * @return {?}
         */
        function (_index, item) {
            return item.year + "-" + item.weekNum;
        };
        DateTableComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'date-table',
                        exportAs: 'dateTable',
                        template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n  <thead>\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\n      </th>\n      <th *ngFor=\"let cell of headWeekDays\" role=\"columnheader\" title=\"{{ cell.short }}\"\n        class=\"{{ prefixCls }}-column-header\">\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"{{ prefixCls }}-tbody\">\n    <tr *ngFor=\"let row of weekRows;trackBy:trackByWeekFn\" [ngClass]=\"row.classMap\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\n        {{ row.weekNum }}\n      </td>\n      <td *ngFor=\"let cell of row.dateCells;trackBy:trackByDateFn\" title=\"{{ cell.title }}\" role=\"gridcell\" [ngClass]=\"cell.classMap\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\" (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\n        date-table-cell [prefixCls]=\"prefixCls\" [cell]=\"cell\">\n      </td>\n    </tr>\n  </tbody>\n</table>"
                    }] }
        ];
        /** @nocollapse */
        DateTableComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: i18n.DateHelperService }
        ]; };
        DateTableComponent.propDecorators = {
            prefixCls: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            selectedValue: [{ type: core.Input }],
            hoverValue: [{ type: core.Input }],
            value: [{ type: core.Input }],
            activeDate: [{ type: core.Input }],
            showWeek: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            dateCellRender: [{ type: core.Input }],
            dateFullCellRender: [{ type: core.Input }],
            dayHover: [{ type: core.Output }],
            valueChange: [{ type: core.Output }]
        };
        return DateTableComponent;
    }());
    if (false) {
        /** @type {?} */
        DateTableComponent.prototype._value;
        /** @type {?} */
        DateTableComponent.prototype.headWeekDays;
        /** @type {?} */
        DateTableComponent.prototype.weekRows;
        /** @type {?} */
        DateTableComponent.prototype.prefixCls;
        /** @type {?} */
        DateTableComponent.prototype.locale;
        /** @type {?} */
        DateTableComponent.prototype.selectedValue;
        /** @type {?} */
        DateTableComponent.prototype.hoverValue;
        /** @type {?} */
        DateTableComponent.prototype.activeDate;
        /** @type {?} */
        DateTableComponent.prototype.showWeek;
        /** @type {?} */
        DateTableComponent.prototype.disabledDate;
        /** @type {?} */
        DateTableComponent.prototype.dateCellRender;
        /** @type {?} */
        DateTableComponent.prototype.dateFullCellRender;
        /** @type {?} */
        DateTableComponent.prototype.dayHover;
        /** @type {?} */
        DateTableComponent.prototype.valueChange;
        /**
         * @type {?}
         * @private
         */
        DateTableComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        DateTableComponent.prototype.dateHelper;
    }
    /**
     * @record
     */
    function WeekDayLabel() { }
    if (false) {
        /** @type {?} */
        WeekDayLabel.prototype.short;
        /** @type {?} */
        WeekDayLabel.prototype.veryShort;
    }
    /**
     * @record
     */
    function DateCell() { }
    if (false) {
        /** @type {?} */
        DateCell.prototype.value;
        /** @type {?} */
        DateCell.prototype.label;
        /** @type {?} */
        DateCell.prototype.title;
        /** @type {?} */
        DateCell.prototype.dateCellRender;
        /** @type {?} */
        DateCell.prototype.dateFullCellRender;
        /** @type {?} */
        DateCell.prototype.content;
        /** @type {?|undefined} */
        DateCell.prototype.isSelected;
        /** @type {?|undefined} */
        DateCell.prototype.isToday;
        /** @type {?|undefined} */
        DateCell.prototype.isDisabled;
        /** @type {?|undefined} */
        DateCell.prototype.isSelectedStartDate;
        /** @type {?|undefined} */
        DateCell.prototype.isSelectedEndDate;
        /** @type {?|undefined} */
        DateCell.prototype.isInRange;
        /** @type {?|undefined} */
        DateCell.prototype.classMap;
        /**
         * @param {?} date
         * @return {?}
         */
        DateCell.prototype.onClick = function (date) { };
        /**
         * @return {?}
         */
        DateCell.prototype.onMouseEnter = function () { };
    }
    /**
     * @record
     */
    function WeekRow() { }
    if (false) {
        /** @type {?|undefined} */
        WeekRow.prototype.isCurrent;
        /** @type {?|undefined} */
        WeekRow.prototype.isActive;
        /** @type {?|undefined} */
        WeekRow.prototype.weekNum;
        /** @type {?|undefined} */
        WeekRow.prototype.year;
        /** @type {?|undefined} */
        WeekRow.prototype.classMap;
        /** @type {?} */
        WeekRow.prototype.dateCells;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW = 4;
    /** @type {?} */
    var MAX_COL = 3;
    var MonthTableComponent = /** @class */ (function () {
        function MonthTableComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.value = new core$1.CandyDate();
            this.prefixCls = 'ant-fullcalendar';
            this.valueChange = new core.EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        MonthTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.value || changes.disabledDate) {
                this.render();
            }
        };
        /**
         * @param {?} _index
         * @return {?}
         */
        MonthTableComponent.prototype.trackYear = /**
         * @param {?} _index
         * @return {?}
         */
        function (_index) {
            return this.value ? this.value.getYear() : _index;
        };
        /**
         * @param {?} _index
         * @param {?} monthData
         * @return {?}
         */
        MonthTableComponent.prototype.trackPanelMonth = /**
         * @param {?} _index
         * @param {?} monthData
         * @return {?}
         */
        function (_index, monthData) {
            return monthData.content;
        };
        /**
         * @private
         * @return {?}
         */
        MonthTableComponent.prototype.render = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value) {
                this.panelMonths = this.makePanelMonths();
            }
        };
        /**
         * @private
         * @return {?}
         */
        MonthTableComponent.prototype.makePanelMonths = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var months = [];
            /** @type {?} */
            var currentMonth = this.value.getMonth();
            /** @type {?} */
            var today = new core$1.CandyDate();
            /** @type {?} */
            var monthValue = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
                months[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    /** @type {?} */
                    var month = this_1.value.setMonth(monthValue);
                    /** @type {?} */
                    var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                    /** @type {?} */
                    var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                    /** @type {?} */
                    var cell = (months[rowIndex][colIndex] = {
                        value: month.nativeDate,
                        disabled: disabled,
                        content: content,
                        month: monthValue,
                        title: content,
                        classMap: null,
                        onClick: (/**
                         * @return {?}
                         */
                        function () { return _this.chooseMonth(cell.month); }) // don't use monthValue here
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-month-panel-cell"] = true,
                        _a[this_1.prefixCls + "-month-panel-cell-disabled"] = disabled,
                        _a[this_1.prefixCls + "-month-panel-selected-cell"] = monthValue === currentMonth,
                        _a[this_1.prefixCls + "-month-panel-current-cell"] = today.getYear() === this_1.value.getYear() && monthValue === today.getMonth(),
                        _a);
                    monthValue++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return months;
        };
        /**
         * @private
         * @param {?} month
         * @return {?}
         */
        MonthTableComponent.prototype.chooseMonth = /**
         * @private
         * @param {?} month
         * @return {?}
         */
        function (month) {
            this.value = this.value.setMonth(month);
            this.valueChange.emit(this.value);
            this.render();
        };
        MonthTableComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'month-table',
                        exportAs: 'monthTable',
                        template: "<table class=\"{{ prefixCls }}-month-panel-table\" cellSpacing=\"0\" role=\"grid\">\n  <tbody class=\"{{ prefixCls }}-month-panel-tbody\">\n    <tr *ngFor=\"let row of panelMonths; trackBy: trackYear\" role=\"row\">\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\" role=\"gridcell\" title=\"{{ monthCell.title }}\"\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\" [ngClass]=\"monthCell.classMap\">\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\n            <div class=\"{{ prefixCls }}-month\">\n              <ng-container *ngIf=\"monthFullCellRender else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"monthFullCellRender; context: { $implicit: monthCell.value }\">\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{prefixCls}}-value\">{{ monthCell.content }}</div>\n                <div *ngIf=\"monthCellRender\" class=\"{{prefixCls}}-content\">\n                  <ng-container *ngTemplateOutlet=\"monthCellRender; context: { $implicit: monthCell.value }\">\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-calendar'\">\n            <a class=\"{{ prefixCls }}-month-panel-month\">{{ monthCell.content }}</a>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>"
                    }] }
        ];
        /** @nocollapse */
        MonthTableComponent.ctorParameters = function () { return [
            { type: i18n.DateHelperService }
        ]; };
        MonthTableComponent.propDecorators = {
            value: [{ type: core.Input }],
            prefixCls: [{ type: core.Input }],
            monthCellRender: [{ type: core.Input }],
            monthFullCellRender: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            disabledDate: [{ type: core.Input }]
        };
        return MonthTableComponent;
    }());
    if (false) {
        /** @type {?} */
        MonthTableComponent.prototype.value;
        /** @type {?} */
        MonthTableComponent.prototype.prefixCls;
        /** @type {?} */
        MonthTableComponent.prototype.monthCellRender;
        /** @type {?} */
        MonthTableComponent.prototype.monthFullCellRender;
        /** @type {?} */
        MonthTableComponent.prototype.valueChange;
        /** @type {?} */
        MonthTableComponent.prototype.disabledDate;
        /** @type {?} */
        MonthTableComponent.prototype.panelMonths;
        /**
         * @type {?}
         * @private
         */
        MonthTableComponent.prototype.dateHelper;
    }
    /**
     * @record
     */
    function PanelMonthData() { }
    if (false) {
        /** @type {?} */
        PanelMonthData.prototype.disabled;
        /** @type {?} */
        PanelMonthData.prototype.content;
        /** @type {?} */
        PanelMonthData.prototype.month;
        /** @type {?} */
        PanelMonthData.prototype.title;
        /** @type {?} */
        PanelMonthData.prototype.classMap;
        /** @type {?} */
        PanelMonthData.prototype.onClick;
        /** @type {?} */
        PanelMonthData.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDateCellDirective = /** @class */ (function () {
        function NzDateCellDirective() {
        }
        NzDateCellDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nzDateCell]',
                        exportAs: 'nzDateCell'
                    },] }
        ];
        return NzDateCellDirective;
    }());
    var NzMonthCellDirective = /** @class */ (function () {
        function NzMonthCellDirective() {
        }
        NzMonthCellDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nzMonthCell]',
                        exportAs: 'nzMonthCell'
                    },] }
        ];
        return NzMonthCellDirective;
    }());
    var NzDateFullCellDirective = /** @class */ (function () {
        function NzDateFullCellDirective() {
        }
        NzDateFullCellDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nzDateFullCell]',
                        exportAs: 'nzDateFullCell'
                    },] }
        ];
        return NzDateFullCellDirective;
    }());
    var NzMonthFullCellDirective = /** @class */ (function () {
        function NzMonthFullCellDirective() {
        }
        NzMonthFullCellDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nzMonthFullCell]',
                        exportAs: 'nzMonthFullCell'
                    },] }
        ];
        return NzMonthFullCellDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCalendarHeaderComponent = /** @class */ (function () {
        function NzCalendarHeaderComponent(i18n, dateHelper) {
            this.i18n = i18n;
            this.dateHelper = dateHelper;
            this.mode = 'month';
            this.fullscreen = true;
            this.modeChange = new core.EventEmitter();
            this.activeDate = new core$1.CandyDate();
            this.yearChange = new core.EventEmitter();
            this.monthChange = new core.EventEmitter();
            // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
            this.yearOffset = 10;
            this.yearTotal = 20;
        }
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
            get: /**
             * @return {?}
             */
            function () {
                return this.activeDate.getYear();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
            get: /**
             * @return {?}
             */
            function () {
                return this.activeDate.getMonth();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
            get: /**
             * @return {?}
             */
            function () {
                return this.fullscreen ? 'default' : 'small';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
            get: /**
             * @return {?}
             */
            function () {
                return this.i18n.getLocale().Calendar.year;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
            get: /**
             * @return {?}
             */
            function () {
                return this.i18n.getLocale().Calendar.month;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzCalendarHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setUpYears();
            this.setUpMonths();
        };
        /**
         * @param {?} year
         * @return {?}
         */
        NzCalendarHeaderComponent.prototype.updateYear = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this.yearChange.emit(year);
            this.setUpYears(year);
        };
        /**
         * @private
         * @param {?=} year
         * @return {?}
         */
        NzCalendarHeaderComponent.prototype.setUpYears = /**
         * @private
         * @param {?=} year
         * @return {?}
         */
        function (year) {
            /** @type {?} */
            var start = (year || this.activeYear) - this.yearOffset;
            /** @type {?} */
            var end = start + this.yearTotal;
            this.years = [];
            for (var i = start; i < end; i++) {
                this.years.push({ label: "" + i, value: i });
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzCalendarHeaderComponent.prototype.setUpMonths = /**
         * @private
         * @return {?}
         */
        function () {
            this.months = [];
            for (var i = 0; i < 12; i++) {
                /** @type {?} */
                var dateInMonth = this.activeDate.setMonth(i);
                /** @type {?} */
                var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
                this.months.push({ label: monthText, value: i });
            }
        };
        NzCalendarHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-calendar-header',
                        exportAs: 'nzCalendarHeader',
                        template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\"> \n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\n</nz-select>\n\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\n</nz-select>\n\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\n</nz-radio-group>\n",
                        host: {
                            '[style.display]': "'block'",
                            '[class.ant-fullcalendar-header]': "true"
                        }
                    }] }
        ];
        /** @nocollapse */
        NzCalendarHeaderComponent.ctorParameters = function () { return [
            { type: i18n.NzI18nService },
            { type: i18n.DateHelperService }
        ]; };
        NzCalendarHeaderComponent.propDecorators = {
            mode: [{ type: core.Input }],
            fullscreen: [{ type: core.Input }],
            modeChange: [{ type: core.Output }],
            activeDate: [{ type: core.Input }],
            yearChange: [{ type: core.Output }],
            monthChange: [{ type: core.Output }]
        };
        return NzCalendarHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.mode;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.fullscreen;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.modeChange;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.activeDate;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.yearChange;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.monthChange;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.yearOffset;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.yearTotal;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.years;
        /** @type {?} */
        NzCalendarHeaderComponent.prototype.months;
        /**
         * @type {?}
         * @private
         */
        NzCalendarHeaderComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzCalendarHeaderComponent.prototype.dateHelper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCalendarComponent = /** @class */ (function () {
        function NzCalendarComponent(cdr) {
            this.cdr = cdr;
            this.activeDate = new core$1.CandyDate();
            this.prefixCls = 'ant-fullcalendar';
            this.onChangeFn = (/**
             * @return {?}
             */
            function () { });
            this.onTouchFn = (/**
             * @return {?}
             */
            function () { });
            this.nzMode = 'month';
            this.nzModeChange = new core.EventEmitter();
            this.nzPanelChange = new core.EventEmitter();
            this.nzSelectChange = new core.EventEmitter();
            this.nzValueChange = new core.EventEmitter();
            this.nzFullscreen = true;
        }
        Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.updateDate(new core$1.CandyDate(value), false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzDateCell || this.nzDateCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzDateFullCell || this.nzDateFullCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzMonthCell || this.nzMonthCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzMonthFullCell || this.nzMonthFullCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "nzCard", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.nzFullscreen;
            },
            /**
             * @deprecated use `[nzFullscreen]` instead.
             */
            set: /**
             * @deprecated use `[nzFullscreen]` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzCard' is going to be removed in 9.0.0. Please use 'nzFullscreen' instead.");
                this.nzFullscreen = !core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} mode
         * @return {?}
         */
        NzCalendarComponent.prototype.onModeChange = /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this.nzModeChange.emit(mode);
            this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
        };
        /**
         * @param {?} year
         * @return {?}
         */
        NzCalendarComponent.prototype.onYearSelect = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            /** @type {?} */
            var date = this.activeDate.setYear(year);
            this.updateDate(date);
        };
        /**
         * @param {?} month
         * @return {?}
         */
        NzCalendarComponent.prototype.onMonthSelect = /**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            /** @type {?} */
            var date = this.activeDate.setMonth(month);
            this.updateDate(date);
        };
        /**
         * @param {?} date
         * @return {?}
         */
        NzCalendarComponent.prototype.onDateSelect = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            // Only activeDate is enough in calendar
            // this.value = date;
            this.updateDate(date);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzCalendarComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.updateDate(new core$1.CandyDate((/** @type {?} */ (value))), false);
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzCalendarComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeFn = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzCalendarComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchFn = fn;
        };
        /**
         * @private
         * @param {?} date
         * @param {?=} touched
         * @return {?}
         */
        NzCalendarComponent.prototype.updateDate = /**
         * @private
         * @param {?} date
         * @param {?=} touched
         * @return {?}
         */
        function (date, touched) {
            if (touched === void 0) { touched = true; }
            this.activeDate = date;
            if (touched) {
                this.onChangeFn(date.nativeDate);
                this.onTouchFn();
                this.nzSelectChange.emit(date.nativeDate);
                this.nzValueChange.emit(date.nativeDate);
            }
        };
        NzCalendarComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-calendar',
                        exportAs: 'nzCalendar',
                        template: "<nz-calendar-header [fullscreen]=\"nzFullscreen\" [activeDate]=\"activeDate\" [(mode)]=\"nzMode\"\n  (modeChange)=\"onModeChange($event)\" (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\n</nz-calendar-header>\n\n<div class=\"{{prefixCls}} {{prefixCls}}-full\" [class.ant-fullcalendar-fullscreen]=\"nzFullscreen\">\n  <div class=\"{{prefixCls}}-calendar-body\">\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\n  </div>\n</div>\n\n<ng-template #monthModeTable>\n  <date-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [dateCellRender]=\"dateCell\"\n    [dateFullCellRender]=\"dateFullCell\" (valueChange)=\"onDateSelect($event)\"></date-table>\n</ng-template>\n\n<ng-template #yearModeTable>\n  <month-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [monthCellRender]=\"monthCell\"\n    [monthFullCellRender]=\"monthFullCell\" (valueChange)=\"onDateSelect($event)\"></month-table>\n</ng-template>",
                        providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzCalendarComponent; })), multi: true }]
                    }] }
        ];
        /** @nocollapse */
        NzCalendarComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        NzCalendarComponent.propDecorators = {
            nzMode: [{ type: core.Input }],
            nzModeChange: [{ type: core.Output }],
            nzPanelChange: [{ type: core.Output }],
            nzSelectChange: [{ type: core.Output }],
            nzValue: [{ type: core.Input }],
            nzValueChange: [{ type: core.Output }],
            nzDateCell: [{ type: core.Input }],
            nzDateCellChild: [{ type: core.ContentChild, args: [NzDateCellDirective, { static: false, read: core.TemplateRef },] }],
            nzDateFullCell: [{ type: core.Input }],
            nzDateFullCellChild: [{ type: core.ContentChild, args: [NzDateFullCellDirective, { static: false, read: core.TemplateRef },] }],
            nzMonthCell: [{ type: core.Input }],
            nzMonthCellChild: [{ type: core.ContentChild, args: [NzMonthCellDirective, { static: false, read: core.TemplateRef },] }],
            nzMonthFullCell: [{ type: core.Input }],
            nzMonthFullCellChild: [{ type: core.ContentChild, args: [NzMonthFullCellDirective, { static: false, read: core.TemplateRef },] }],
            nzFullscreen: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }],
            nzCard: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
        return NzCalendarComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCalendarComponent.prototype.activeDate;
        /** @type {?} */
        NzCalendarComponent.prototype.prefixCls;
        /**
         * @type {?}
         * @private
         */
        NzCalendarComponent.prototype.onChangeFn;
        /**
         * @type {?}
         * @private
         */
        NzCalendarComponent.prototype.onTouchFn;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMode;
        /** @type {?} */
        NzCalendarComponent.prototype.nzModeChange;
        /** @type {?} */
        NzCalendarComponent.prototype.nzPanelChange;
        /** @type {?} */
        NzCalendarComponent.prototype.nzSelectChange;
        /** @type {?} */
        NzCalendarComponent.prototype.nzValueChange;
        /**
         * Cannot use \@Input and \@ContentChild on one variable
         * because { static: false } will make \@Input property get delayed
         *
         * @type {?}
         */
        NzCalendarComponent.prototype.nzDateCell;
        /** @type {?} */
        NzCalendarComponent.prototype.nzDateCellChild;
        /** @type {?} */
        NzCalendarComponent.prototype.nzDateFullCell;
        /** @type {?} */
        NzCalendarComponent.prototype.nzDateFullCellChild;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMonthCell;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMonthCellChild;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMonthFullCell;
        /** @type {?} */
        NzCalendarComponent.prototype.nzMonthFullCellChild;
        /** @type {?} */
        NzCalendarComponent.prototype.nzFullscreen;
        /**
         * @type {?}
         * @private
         */
        NzCalendarComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCalendarModule = /** @class */ (function () {
        function NzCalendarModule() {
        }
        NzCalendarModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NzCalendarHeaderComponent,
                            NzCalendarComponent,
                            NzDateCellDirective,
                            NzDateFullCellDirective,
                            NzMonthCellDirective,
                            NzMonthFullCellDirective,
                            DateTableComponent,
                            DateTableCellComponent,
                            MonthTableComponent
                        ],
                        exports: [
                            NzCalendarComponent,
                            NzDateCellDirective,
                            NzDateFullCellDirective,
                            NzMonthCellDirective,
                            NzMonthFullCellDirective,
                            DateTableComponent,
                            MonthTableComponent
                        ],
                        imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, radio.NzRadioModule, select.NzSelectModule]
                    },] }
        ];
        return NzCalendarModule;
    }());

    exports.DateTableCellComponent = DateTableCellComponent;
    exports.DateTableComponent = DateTableComponent;
    exports.MonthTableComponent = MonthTableComponent;
    exports.NzCalendarComponent = NzCalendarComponent;
    exports.NzCalendarHeaderComponent = NzCalendarHeaderComponent;
    exports.NzCalendarModule = NzCalendarModule;
    exports.NzDateCellDirective = NzDateCellDirective;
    exports.NzDateFullCellDirective = NzDateFullCellDirective;
    exports.NzMonthCellDirective = NzMonthCellDirective;
    exports.NzMonthFullCellDirective = NzMonthFullCellDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-calendar.umd.js.map
