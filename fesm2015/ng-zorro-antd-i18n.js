import { InjectionToken, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Pipe, NgModule, Injector, INJECTOR } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { warn } from 'ng-zorro-antd/core';
import { formatDate } from '@angular/common';
import fnsFormat from 'date-fns/format';
import fnsGetISOWeek from 'date-fns/get_iso_week';
import fnsParse from 'date-fns/parse';

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
var Calendar = {
    today: '今天',
    now: '此刻',
    backToToday: '返回今天',
    ok: '确定',
    timeSelect: '选择时间',
    dateSelect: '选择日期',
    weekSelect: '选择周',
    clear: '清除',
    month: '月',
    year: '年',
    previousMonth: '上个月 (翻页上键)',
    nextMonth: '下个月 (翻页下键)',
    monthSelect: '选择月份',
    yearSelect: '选择年份',
    decadeSelect: '选择年代',
    yearFormat: 'YYYY年',
    dayFormat: 'D日',
    dateFormat: 'YYYY年M月D日',
    dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',
    previousYear: '上一年 (Control键加左方向键)',
    nextYear: '下一年 (Control键加右方向键)',
    previousDecade: '上一年代',
    nextDecade: '下一年代',
    previousCentury: '上一世纪',
    nextCentury: '下一世纪'
};

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
const locale = {
    placeholder: '请选择时间'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const locale$1 = {
    lang: Object.assign({ placeholder: '请选择日期', rangePlaceholder: ['开始日期', '结束日期'] }, Calendar),
    timePickerLocale: Object.assign({}, locale)
};
// should add whitespace between char in Button
locale$1.lang.ok = '确 定';

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
var Pagination = {
    // Options.jsx
    items_per_page: '条/页',
    jump_to: '跳至',
    jump_to_confirm: '确定',
    page: '页',
    // Pagination.jsx
    prev_page: '上一页',
    next_page: '下一页',
    prev_5: '向前 5 页',
    next_5: '向后 5 页',
    prev_3: '向前 3 页',
    next_3: '向后 3 页'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var zh_CN = {
    locale: 'zh-cn',
    Pagination,
    DatePicker: locale$1,
    TimePicker: locale,
    Calendar,
    // locales for all comoponents
    global: {
        placeholder: '请选择'
    },
    Table: {
        filterTitle: '筛选',
        filterConfirm: '确定',
        filterReset: '重置',
        selectAll: '全选当页',
        selectInvert: '反选当页',
        sortTitle: '排序'
    },
    Modal: {
        okText: '确定',
        cancelText: '取消',
        justOkText: '知道了'
    },
    Popconfirm: {
        cancelText: '取消',
        okText: '确定'
    },
    Transfer: {
        searchPlaceholder: '请输入搜索内容',
        itemUnit: '项',
        itemsUnit: '项'
    },
    Upload: {
        uploading: '文件上传中',
        removeFile: '删除文件',
        uploadError: '上传错误',
        previewFile: '预览文件'
    },
    Empty: {
        description: '暂无数据'
    },
    Icon: {
        icon: '图标'
    },
    Text: {
        edit: '编辑',
        copy: '复制',
        copied: '复制成功',
        expand: '展开'
    },
    PageHeader: {
        back: '返回'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_I18N = new InjectionToken('nz-i18n');
/**
 * Locale for date operations, should import from date-fns, see example: https://github.com/date-fns/date-fns/blob/v1.30.1/src/locale/zh_cn/index.js
 * @type {?}
 */
const NZ_DATE_LOCALE = new InjectionToken('nz-date-locale');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzI18nService {
    /**
     * @param {?} locale
     * @param {?} dateLocale
     */
    constructor(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._change.asObservable();
    }
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    translate(path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        /** @type {?} */
        let content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => (content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]))));
            }
            return content;
        }
        return path;
    }
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    setLocale(locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    /**
     * @return {?}
     */
    getLocale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    getLocaleId() {
        return this._locale ? this._locale.locale : '';
    }
    /**
     * @param {?} dateLocale
     * @return {?}
     */
    setDateLocale(dateLocale) {
        this.dateLocale = dateLocale;
    }
    /**
     * @return {?}
     */
    getDateLocale() {
        return this.dateLocale;
    }
    /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    getLocaleData(path, defaultValue) {
        /** @type {?} */
        const result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn(`Missing translations for "${path}" in language "${this._locale.locale}".
You can use "NzI18nService.setLocale" as a temporary fix.
Welcome to submit a pull request to help us optimize the translations!
https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md`);
        }
        return result || defaultValue || {};
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    _getObjectPath(obj, path) {
        /** @type {?} */
        let res = obj;
        /** @type {?} */
        const paths = path.split('.');
        /** @type {?} */
        const depth = paths.length;
        /** @type {?} */
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
}
NzI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
];
/** @nocollapse */ NzI18nService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(ɵɵinject(NZ_I18N, 8), ɵɵinject(NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._change;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype.dateLocale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzI18nPipe {
    /**
     * @param {?} _locale
     */
    constructor(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    transform(path, keyValue) {
        return this._locale.translate(path, keyValue);
    }
}
NzI18nPipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzI18n'
            },] }
];
/** @nocollapse */
NzI18nPipe.ctorParameters = () => [
    { type: NzI18nService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nPipe.prototype._locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzI18nModule {
}
NzI18nModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzI18nPipe],
                exports: [NzI18nPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_DATE_CONFIG = new InjectionToken('date-config');
/** @type {?} */
const NZ_DATE_CONFIG_DEFAULT = {
    firstDayOfWeek: undefined
};
/**
 * @param {?} config
 * @return {?}
 */
function mergeDateConfig(config) {
    return Object.assign({}, NZ_DATE_CONFIG_DEFAULT, config);
}
/**
 * @record
 */
function NzDateConfig() { }
if (false) {
    /**
     * Customize the first day of a week
     * @type {?|undefined}
     */
    NzDateConfig.prototype.firstDayOfWeek;
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
function NzPaginationI18nInterface() { }
if (false) {
    /** @type {?} */
    NzPaginationI18nInterface.prototype.items_per_page;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.jump_to;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.jump_to_confirm;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.page;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.prev_page;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.next_page;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.prev_5;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.next_5;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.prev_3;
    /** @type {?} */
    NzPaginationI18nInterface.prototype.next_3;
}
/**
 * @record
 */
function NzGlobalI18nInterface() { }
if (false) {
    /** @type {?} */
    NzGlobalI18nInterface.prototype.placeholder;
}
/**
 * @record
 */
function NzDatePickerI18nInterface() { }
if (false) {
    /** @type {?} */
    NzDatePickerI18nInterface.prototype.lang;
    /** @type {?} */
    NzDatePickerI18nInterface.prototype.timePickerLocale;
}
/**
 * @record
 */
function NzCalendarI18nInterface() { }
if (false) {
    /** @type {?} */
    NzCalendarI18nInterface.prototype.today;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.now;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.backToToday;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.ok;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.clear;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.month;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.year;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.timeSelect;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.dateSelect;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.monthSelect;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.yearSelect;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.decadeSelect;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.yearFormat;
    /** @type {?|undefined} */
    NzCalendarI18nInterface.prototype.monthFormat;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.dateFormat;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.dayFormat;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.dateTimeFormat;
    /** @type {?|undefined} */
    NzCalendarI18nInterface.prototype.monthBeforeYear;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.previousMonth;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.nextMonth;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.previousYear;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.nextYear;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.previousDecade;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.nextDecade;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.previousCentury;
    /** @type {?} */
    NzCalendarI18nInterface.prototype.nextCentury;
}
/**
 * @record
 */
function NzDatePickerLangI18nInterface() { }
if (false) {
    /** @type {?} */
    NzDatePickerLangI18nInterface.prototype.placeholder;
    /** @type {?} */
    NzDatePickerLangI18nInterface.prototype.rangePlaceholder;
}
/**
 * @record
 */
function NzTimePickerI18nInterface() { }
if (false) {
    /** @type {?} */
    NzTimePickerI18nInterface.prototype.placeholder;
}
/**
 * @record
 */
function NzI18nInterface() { }
if (false) {
    /** @type {?} */
    NzI18nInterface.prototype.locale;
    /** @type {?} */
    NzI18nInterface.prototype.Pagination;
    /** @type {?} */
    NzI18nInterface.prototype.DatePicker;
    /** @type {?} */
    NzI18nInterface.prototype.TimePicker;
    /** @type {?} */
    NzI18nInterface.prototype.Calendar;
    /** @type {?|undefined} */
    NzI18nInterface.prototype.global;
    /** @type {?} */
    NzI18nInterface.prototype.Table;
    /** @type {?} */
    NzI18nInterface.prototype.Modal;
    /** @type {?} */
    NzI18nInterface.prototype.Popconfirm;
    /** @type {?} */
    NzI18nInterface.prototype.Transfer;
    /** @type {?} */
    NzI18nInterface.prototype.Upload;
    /** @type {?} */
    NzI18nInterface.prototype.Empty;
    /** @type {?|undefined} */
    NzI18nInterface.prototype.Text;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @param {?} config
 * @return {?}
 */
function DATE_HELPER_SERVICE_FACTORY(injector, config) {
    /** @type {?} */
    const i18n = injector.get(NzI18nService);
    return i18n.getDateLocale() ? new DateHelperByDateFns(i18n, config) : new DateHelperByDatePipe(i18n, config);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 * @abstract
 */
class DateHelperService {
    // Indicate whether this service is rely on DatePipe
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.relyOnDatePipe = this instanceof DateHelperByDatePipe; // Indicate whether this service is rely on DatePipe
        this.config = mergeDateConfig(this.config);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseDate(text) {
        if (!text) {
            return;
        }
        return fnsParse(text);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseTime(text) {
        if (!text) {
            return;
        }
        return fnsParse(`1970-01-01 ${text}`);
    }
}
DateHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useFactory: DATE_HELPER_SERVICE_FACTORY,
                deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
            },] }
];
/** @nocollapse */
DateHelperService.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
];
/** @nocollapse */ DateHelperService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(ɵɵinject(INJECTOR), ɵɵinject(NZ_DATE_CONFIG, 8)); }, token: DateHelperService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DateHelperService.prototype.relyOnDatePipe;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.i18n;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.config;
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateHelperService.prototype.getISOWeek = function (date) { };
    /**
     * @abstract
     * @return {?}
     */
    DateHelperService.prototype.getFirstDayOfWeek = function () { };
    /**
     * @abstract
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperService.prototype.format = function (date, formatStr) { };
}
/**
 * DateHelper that handles date formats with date-fns
 */
class DateHelperByDateFns extends DateHelperService {
    /**
     * @param {?} date
     * @return {?}
     */
    getISOWeek(date) {
        return fnsGetISOWeek(date);
    }
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        return this.config.firstDayOfWeek == null ? 1 : this.config.firstDayOfWeek;
    }
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    format(date, formatStr) {
        return date ? fnsFormat(date, formatStr, { locale: this.i18n.getDateLocale() }) : '';
    }
}
/** @nocollapse */ DateHelperByDateFns.ngInjectableDef = ɵɵdefineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(ɵɵinject(INJECTOR), ɵɵinject(NZ_DATE_CONFIG, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
class DateHelperByDatePipe extends DateHelperService {
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        super(i18n, config);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getISOWeek(date) {
        return +this.format(date, 'w');
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        if (this.config.firstDayOfWeek === undefined) {
            /** @type {?} */
            const locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    }
    /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    format(date, formatStr) {
        return date ? (/** @type {?} */ (formatDate(date, formatStr, this.i18n.getLocaleId()))) : '';
    }
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/ / https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    transCompatFormat(format) {
        return (format &&
            format
                .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
                .replace(/D/g, 'd')); // d, dd represent of D, DD for momentjs, others are not support
    }
}
/** @nocollapse */
DateHelperByDatePipe.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
];
/** @nocollapse */ DateHelperByDatePipe.ngInjectableDef = ɵɵdefineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(ɵɵinject(INJECTOR), ɵɵinject(NZ_DATE_CONFIG, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });

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
var Calendar$1 = {
    today: 'اليوم',
    now: 'الأن',
    backToToday: 'العودة إلى اليوم',
    ok: 'تأكيد',
    clear: 'مسح',
    month: 'الشهر',
    year: 'السنة',
    timeSelect: 'اختيار الوقت',
    dateSelect: 'اختيار التاريخ',
    monthSelect: 'اختيار الشهر',
    yearSelect: 'اختيار السنة',
    decadeSelect: 'اختيار العقد',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'الشهر السابق (PageUp)',
    nextMonth: 'الشهر التالى(PageDown)',
    previousYear: 'العام السابق (Control + left)',
    nextYear: 'العام التالى (Control + right)',
    previousDecade: 'العقد السابق',
    nextDecade: 'العقد التالى',
    previousCentury: 'القرن السابق',
    nextCentury: 'القرن التالى'
};

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
const locale$2 = {
    placeholder: 'اختيار الوقت'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$3 = {
    lang: Object.assign({ placeholder: 'اختيار التاريخ', rangePlaceholder: ['البداية', 'النهاية'] }, Calendar$1),
    timePickerLocale: Object.assign({}, locale$2),
    dateFormat: 'DD-MM-YYYY',
    monthFormat: 'MM-YYYY',
    dateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
    weekFormat: 'wo-YYYY'
};

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
var Pagination$1 = {
    // Options.jsx
    items_per_page: '/ الصفحة',
    jump_to: 'الذهاب إلى',
    jump_to_confirm: 'تأكيد',
    page: '',
    // Pagination.jsx
    prev_page: 'الصفحة السابقة',
    next_page: 'الصفحة التالية',
    prev_5: 'خمس صفحات سابقة',
    next_5: 'خمس صفحات تالية',
    prev_3: 'ثلاث صفحات سابقة',
    next_3: 'ثلاث صفحات تالية'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ar_EG = {
    locale: 'ar',
    Pagination: Pagination$1,
    DatePicker: locale$3,
    TimePicker: locale$2,
    Calendar: Calendar$1,
    global: {
        placeholder: 'يرجى اختيار'
    },
    Table: {
        filterTitle: 'الفلاتر',
        filterConfirm: 'تأكيد',
        filterReset: 'إعادة ضبط',
        selectAll: 'اختيار الكل',
        selectInvert: 'إلغاء الاختيار',
        sortTitle: 'فرز'
    },
    Modal: {
        okText: 'تأكيد',
        cancelText: 'إلغاء',
        justOkText: 'تأكيد'
    },
    Popconfirm: {
        okText: 'تأكيد',
        cancelText: 'إلغاء'
    },
    Transfer: {
        searchPlaceholder: 'ابحث هنا',
        itemUnit: 'عنصر',
        itemsUnit: 'عناصر'
    },
    Upload: {
        uploading: 'جاري الرفع...',
        removeFile: 'احذف الملف',
        uploadError: 'مشكلة فى الرفع',
        previewFile: 'استعرض الملف'
    },
    Empty: {
        description: 'لا توجد بيانات'
    },
    Icon: {
        icon: 'أيقونة'
    },
    Text: {
        edit: 'تعديل',
        copy: 'نسخ',
        copied: 'نسخ النجاح',
        expand: 'مدد'
    },
    PageHeader: {
        back: 'خلف'
    }
};

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
var Calendar$2 = {
    today: 'Днес',
    now: 'Сега',
    backToToday: 'Към днес',
    ok: 'Добре',
    clear: 'Изчистване',
    month: 'Месец',
    year: 'Година',
    timeSelect: 'Избор на час',
    dateSelect: 'Избор на дата',
    monthSelect: 'Избор на месец',
    yearSelect: 'Избор на година',
    decadeSelect: 'Десетилетие',
    yearFormat: 'YYYY',
    dateFormat: 'D M YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D M YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Предишен месец (PageUp)',
    nextMonth: 'Следващ месец (PageDown)',
    previousYear: 'Последна година (Control + left)',
    nextYear: 'Следваща година (Control + right)',
    previousDecade: 'Предишно десетилетие',
    nextDecade: 'Следващо десетилетие',
    previousCentury: 'Последен век',
    nextCentury: 'Следващ век'
};

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
const locale$4 = {
    placeholder: 'Избор на час'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$5 = {
    lang: Object.assign({ placeholder: 'Избор на дата', rangePlaceholder: ['Начална', 'Крайна'] }, Calendar$2),
    timePickerLocale: Object.assign({}, locale$4)
};

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
var Pagination$2 = {
    // Options.jsx
    items_per_page: '/ страница',
    jump_to: 'Към',
    jump_to_confirm: 'потвърждавам',
    page: '',
    // Pagination.jsx
    prev_page: 'Предишна страница',
    next_page: 'Следваща страница',
    prev_5: 'Предишни 5 страници',
    next_5: 'Следващи 5 страници',
    prev_3: 'Предишни 3 страници',
    next_3: 'Следващи 3 страници'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var bg_BG = {
    locale: 'bg',
    Pagination: Pagination$2,
    DatePicker: locale$5,
    TimePicker: locale$4,
    Calendar: Calendar$2,
    Table: {
        filterTitle: 'Филтриране',
        filterConfirm: 'Добре',
        filterReset: 'Нулриане',
        selectAll: 'Избор на текуща страница',
        selectInvert: 'Обръщане'
    },
    Modal: {
        okText: 'Добре',
        cancelText: 'Отказ',
        justOkText: 'Добре'
    },
    Popconfirm: {
        okText: 'Добре',
        cancelText: 'Отказ'
    },
    Transfer: {
        searchPlaceholder: 'Търсене',
        itemUnit: 'избор',
        itemsUnit: 'избори'
    },
    Upload: {
        uploading: 'Качване...',
        removeFile: 'Премахване',
        uploadError: 'Грешка при качването',
        previewFile: 'Преглед'
    },
    Empty: {
        description: 'Няма данни'
    }
};

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
var Calendar$3 = {
    today: 'Avui',
    now: 'Ara',
    backToToday: 'Tornar a avui',
    ok: 'Acceptar',
    clear: 'Netejar',
    month: 'Mes',
    year: 'Any',
    timeSelect: 'Seleccionar hora',
    dateSelect: 'Seleccionar data',
    monthSelect: 'Escollir un mes',
    yearSelect: 'Escollir un any',
    decadeSelect: 'Escollir una dècada',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Mes anterior (PageUp)',
    nextMonth: 'Mes següent (PageDown)',
    previousYear: 'Any anterior (Control + left)',
    nextYear: 'Mes següent (Control + right)',
    previousDecade: 'Dècada anterior',
    nextDecade: 'Dècada següent',
    previousCentury: 'Segle anterior',
    nextCentury: 'Segle següent'
};

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
const locale$6 = {
    placeholder: 'Seleccionar hora'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$7 = {
    lang: Object.assign({ placeholder: 'Seleccionar data', rangePlaceholder: ['Data inicial', 'Data final'] }, Calendar$3),
    timePickerLocale: Object.assign({}, locale$6)
};

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
var Pagination$3 = {
    // Options.jsx
    items_per_page: '/ pàgina',
    jump_to: 'Anar a',
    jump_to_confirm: 'Confirmar',
    page: '',
    // Pagination.jsx
    prev_page: 'Pàgina prèvia',
    next_page: 'Pàgina següent',
    prev_5: '5 pàgines prèvies',
    next_5: '5 pàgines següents',
    prev_3: '3 pàgines prèvies',
    next_3: '3 pàgines següents'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ca_ES = {
    locale: 'ca',
    Pagination: Pagination$3,
    DatePicker: locale$7,
    TimePicker: locale$6,
    Calendar: Calendar$3,
    global: {
        placeholder: 'Seleccioni'
    },
    Table: {
        filterTitle: 'Filtrar Menu',
        filterConfirm: 'OK',
        filterReset: 'Restablir',
        selectAll: 'Seleccionar tot',
        selectInvert: 'Invertir selecció',
        sortTitle: 'Ordenar'
    },
    Modal: {
        okText: 'Acceptar',
        cancelText: 'Cancel·lar',
        justOkText: 'Acceptar'
    },
    Popconfirm: {
        okText: 'Acceptar',
        cancelText: 'Cancel·lar'
    },
    Transfer: {
        searchPlaceholder: 'Cercar aquí',
        itemUnit: 'element',
        itemsUnit: 'element'
    },
    Upload: {
        uploading: 'Pujant...',
        removeFile: 'Eliminar fitxer',
        uploadError: 'Error al pujar el fitxer',
        previewFile: 'Vista prèvia'
    },
    Empty: {
        description: 'No hi ha dades'
    },
    Icon: {
        icon: 'ícona'
    },
    Text: {
        edit: 'editar',
        copy: 'copiar',
        copied: 'copiat',
        expand: 'expandir'
    },
    PageHeader: {
        back: 'tornar'
    }
};

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
var Calendar$4 = {
    today: 'Dnes',
    now: 'Nyní',
    backToToday: 'Zpět na dnešek',
    ok: 'Ok',
    clear: 'Vymazat',
    month: 'Měsíc',
    year: 'Rok',
    timeSelect: 'Vybrat čas',
    dateSelect: 'Vybrat datum',
    monthSelect: 'Vyberte měsíc',
    yearSelect: 'Vyberte rok',
    decadeSelect: 'Vyberte dekádu',
    yearFormat: 'YYYY',
    dateFormat: 'D.M.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D.M.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Předchozí měsíc (PageUp)',
    nextMonth: 'Následující (PageDown)',
    previousYear: 'Předchozí rok (Control + left)',
    nextYear: 'Následující rok (Control + right)',
    previousDecade: 'Předchozí dekáda',
    nextDecade: 'Následující dekáda',
    previousCentury: 'Předchozí století',
    nextCentury: 'Následující století'
};

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
const locale$8 = {
    placeholder: 'Vybrat čas'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$9 = {
    lang: Object.assign({ placeholder: 'Vybrat datum', rangePlaceholder: ['Od', 'Do'] }, Calendar$4),
    timePickerLocale: Object.assign({}, locale$8)
};

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
var Pagination$4 = {
    // Options.jsx
    items_per_page: '/ strana',
    jump_to: 'Přejít',
    jump_to_confirm: 'potvrdit',
    page: '',
    // Pagination.jsx
    prev_page: 'Předchozí strana',
    next_page: 'Následující strana',
    prev_5: 'Předchozích 5 stran',
    next_5: 'Následujících 5 stran',
    prev_3: 'Předchozí 3 strany',
    next_3: 'Následující 3 strany'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var cs_CZ = {
    locale: 'cs',
    Pagination: Pagination$4,
    DatePicker: locale$9,
    TimePicker: locale$8,
    Calendar: Calendar$4,
    Table: {
        filterTitle: 'Filtr',
        filterConfirm: 'Potvrdit',
        filterReset: 'Obnovit'
    },
    Modal: {
        okText: 'Ok',
        cancelText: 'Storno',
        justOkText: 'Ok'
    },
    Popconfirm: {
        okText: 'Ok',
        cancelText: 'Storno'
    },
    Transfer: {
        searchPlaceholder: 'Vyhledávání',
        itemUnit: 'položka',
        itemsUnit: 'položek'
    },
    Upload: {
        uploading: 'Nahrávání...',
        removeFile: 'Odstranit soubor',
        uploadError: 'Chyba při nahrávání',
        previewFile: 'Zobrazit soubor'
    },
    Empty: {
        description: 'Žádná data'
    }
};

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
var Calendar$5 = {
    today: 'I dag',
    now: 'Nu',
    backToToday: 'Gå til i dag',
    ok: 'Ok',
    clear: 'Annuller',
    month: 'Måned',
    year: 'År',
    timeSelect: 'Vælg tidspunkt',
    dateSelect: 'Vælg dato',
    monthSelect: 'Vælg måned',
    yearSelect: 'Vælg år',
    decadeSelect: 'Vælg årti',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Forrige måned(PageUp)',
    nextMonth: 'Næste måned (PageDown)',
    previousYear: 'Forrige år (Control + left)',
    nextYear: 'Næste r (Control + right)',
    previousDecade: 'Forrige årti',
    nextDecade: 'Næste årti',
    previousCentury: 'Forrige århundrede',
    nextCentury: 'Næste århundrede'
};

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
const locale$a = {
    placeholder: 'Vælg tid'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$b = {
    lang: Object.assign({ placeholder: 'Vælg dato', rangePlaceholder: ['Startdato', 'Slutdato'] }, Calendar$5),
    timePickerLocale: Object.assign({}, locale$a)
};

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
var Pagination$5 = {
    // Options.jsx
    items_per_page: '/ side',
    jump_to: 'Gå til',
    jump_to_confirm: 'bekræft',
    page: '',
    // Pagination.jsx
    prev_page: 'Forrige Side',
    next_page: 'Næste Side',
    prev_5: 'Forrige 5 Sider',
    next_5: 'Næste 5 Sider',
    prev_3: 'Forrige 3 Sider',
    next_3: 'Næste 3 Sider'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var da_DK = {
    locale: 'da',
    DatePicker: locale$b,
    TimePicker: locale$a,
    Calendar: Calendar$5,
    Pagination: Pagination$5,
    Table: {
        filterTitle: 'Filtermenu',
        filterConfirm: 'OK',
        filterReset: 'Nulstil',
        selectAll: 'Vælg alle',
        selectInvert: 'Inverter valg'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Afbryd',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Afbryd'
    },
    Transfer: {
        searchPlaceholder: 'Søg her',
        itemUnit: 'element',
        itemsUnit: 'elementer'
    },
    Upload: {
        uploading: 'Uploader...',
        removeFile: 'Fjern fil',
        uploadError: 'Fejl ved upload',
        previewFile: 'Forhåndsvisning'
    },
    Empty: {
        description: 'Ingen data'
    }
};

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
var Calendar$6 = {
    today: 'Heute',
    now: 'Jetzt',
    backToToday: 'Zurück zu Heute',
    ok: 'OK',
    clear: 'Zurücksetzen',
    month: 'Monat',
    year: 'Jahr',
    timeSelect: 'Zeit wählen',
    dateSelect: 'Datum wählen',
    monthSelect: 'Wähle einen Monat',
    yearSelect: 'Wähle ein Jahr',
    decadeSelect: 'Wähle ein Jahrzehnt',
    yearFormat: 'YYYY',
    dateFormat: 'D.M.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D.M.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Vorheriger Monat (PageUp)',
    nextMonth: 'Nächster Monat (PageDown)',
    previousYear: 'Vorheriges Jahr (Ctrl + left)',
    nextYear: 'Nächstes Jahr (Ctrl + right)',
    previousDecade: 'Vorheriges Jahrzehnt',
    nextDecade: 'Nächstes Jahrzehnt',
    previousCentury: 'Vorheriges Jahrhundert',
    nextCentury: 'Nächstes Jahrhundert'
};

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
const locale$c = {
    placeholder: 'Zeit auswählen'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$d = {
    lang: Object.assign({ placeholder: 'Datum auswählen', rangePlaceholder: ['Startdatum', 'Enddatum'] }, Calendar$6),
    timePickerLocale: Object.assign({}, locale$c)
};

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
var Pagination$6 = {
    // Options.jsx
    items_per_page: '/ Seite',
    jump_to: 'Gehe zu',
    jump_to_confirm: 'bestätigen',
    page: '',
    // Pagination.jsx
    prev_page: 'Vorherige Seite',
    next_page: 'Nächste Seite',
    prev_5: '5 Seiten zurück',
    next_5: '5 Seiten vor',
    prev_3: '3 Seiten zurück',
    next_3: '3 Seiten vor'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var de_DE = {
    locale: 'de',
    Pagination: Pagination$6,
    DatePicker: locale$d,
    TimePicker: locale$c,
    Calendar: Calendar$6,
    global: {
        placeholder: 'Bitte auswählen'
    },
    Table: {
        filterTitle: 'Filter-Menü',
        filterConfirm: 'OK',
        filterReset: 'Zurücksetzen',
        selectAll: 'Alle auswählen',
        selectInvert: 'Auswahl Invertieren',
        sortTitle: 'Sortieren'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Abbrechen',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Abbrechen'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Suchen',
        itemUnit: 'Eintrag',
        itemsUnit: 'Einträge'
    },
    Upload: {
        uploading: 'Hochladen...',
        removeFile: 'Datei entfernen',
        uploadError: 'Fehler beim Hochladen',
        previewFile: 'Dateivorschau'
    },
    Empty: {
        description: 'Keine Daten'
    },
    Icon: {
        icon: 'Symbol'
    },
    Text: {
        edit: 'Bearbeiten',
        copy: 'Kopieren',
        copied: 'Kopieren erfolgreich',
        expand: 'Aufklappen'
    },
    PageHeader: {
        back: 'Zurück'
    }
};

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
var Calendar$7 = {
    today: 'Σήμερα',
    now: 'Τώρα',
    backToToday: 'Πίσω στη σημερινή μέρα',
    ok: 'Ok',
    clear: 'Καθαρισμός',
    month: 'Μήνας',
    year: 'Έτος',
    timeSelect: 'Επιλογή ώρας',
    dateSelect: 'Επιλογή ημερομηνίας',
    monthSelect: 'Επιλογή μήνα',
    yearSelect: 'Επιλογή έτους',
    decadeSelect: 'Επιλογή δεκαετίας',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Προηγούμενος μήνας (PageUp)',
    nextMonth: 'Επόμενος μήνας (PageDown)',
    previousYear: 'Προηγούμενο έτος (Control + αριστερά)',
    nextYear: 'Επόμενο έτος (Control + δεξιά)',
    previousDecade: 'Προηγούμενη δεκαετία',
    nextDecade: 'Επόμενη δεκαετία',
    previousCentury: 'Προηγούμενος αιώνας',
    nextCentury: 'Επόμενος αιώνας'
};

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
const locale$e = {
    placeholder: 'Επιλέξτε ώρα'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$f = {
    lang: Object.assign({ placeholder: 'Επιλέξτε ημερομηνία', rangePlaceholder: ['Αρχική ημερομηνία', 'Τελική ημερομηνία'] }, Calendar$7),
    timePickerLocale: Object.assign({}, locale$e)
};

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
var Pagination$7 = {
    // Options.jsx
    items_per_page: '/ σελίδα',
    jump_to: 'Μετάβαση',
    jump_to_confirm: 'επιβεβαιώνω',
    page: '',
    // Pagination.jsx
    prev_page: 'Προηγούμενη Σελίδα',
    next_page: 'Επόμενη Σελίδα',
    prev_5: 'Προηγούμενες 5 Σελίδες',
    next_5: 'Επόμενες 5 σελίδες',
    prev_3: 'Προηγούμενες 3 Σελίδες',
    next_3: 'Επόμενες 3 Σελίδες'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var el_GR = {
    locale: 'el',
    Pagination: Pagination$7,
    DatePicker: locale$f,
    TimePicker: locale$e,
    Calendar: Calendar$7,
    Table: {
        filterTitle: 'Μενού φίλτρων',
        filterConfirm: 'ΟΚ',
        filterReset: 'Επαναφορά',
        selectAll: 'Επιλογή τρέχουσας σελίδας',
        selectInvert: 'Αντιστροφή τρέχουσας σελίδας'
    },
    Modal: {
        okText: 'ΟΚ',
        cancelText: 'Άκυρο',
        justOkText: 'ΟΚ'
    },
    Popconfirm: {
        okText: 'ΟΚ',
        cancelText: 'Άκυρο'
    },
    Transfer: {
        searchPlaceholder: 'Αναζήτηση',
        itemUnit: 'αντικείμενο',
        itemsUnit: 'αντικείμενα'
    },
    Upload: {
        uploading: 'Μεταφόρτωση...',
        removeFile: 'Αφαίρεση αρχείου',
        uploadError: 'Σφάλμα μεταφόρτωσης',
        previewFile: 'Προεπισκόπηση αρχείου'
    },
    Empty: {
        description: 'Δεν υπάρχουν δεδομένα'
    }
};

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
var Calendar$8 = {
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'Ok',
    clear: 'Clear',
    month: 'Month',
    year: 'Year',
    timeSelect: 'Select time',
    dateSelect: 'Select date',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century'
};

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
const locale$g = {
    placeholder: 'Select time'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$h = {
    lang: Object.assign({ placeholder: 'Select date', rangePlaceholder: ['Start date', 'End date'] }, Calendar$8),
    timePickerLocale: Object.assign({}, locale$g)
};

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
var Pagination$8 = {
    // Options.jsx
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',
    // Pagination.jsx
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var en_GB = {
    locale: 'en-gb',
    Pagination: Pagination$8,
    DatePicker: locale$h,
    TimePicker: locale$g,
    Calendar: Calendar$8,
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    },
    Empty: {
        description: 'No data'
    }
};

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
var Calendar$9 = {
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'Ok',
    clear: 'Clear',
    month: 'Month',
    year: 'Year',
    timeSelect: 'select time',
    dateSelect: 'select date',
    weekSelect: 'Choose a week',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century'
};

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
const locale$i = {
    placeholder: 'Select time'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$j = {
    lang: Object.assign({ placeholder: 'Select date', rangePlaceholder: ['Start date', 'End date'] }, Calendar$9),
    timePickerLocale: Object.assign({}, locale$i)
};

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
var Pagination$9 = {
    // Options.jsx
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',
    // Pagination.jsx
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var en_US = {
    locale: 'en',
    Pagination: Pagination$9,
    DatePicker: locale$j,
    TimePicker: locale$i,
    Calendar: Calendar$9,
    global: {
        placeholder: 'Please select'
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        sortTitle: 'Sort'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    },
    Empty: {
        description: 'No Data'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'edit',
        copy: 'copy',
        copied: 'copy success',
        expand: 'expand'
    },
    PageHeader: {
        back: 'back'
    }
};

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
var Calendar$a = {
    today: 'Hoy',
    now: 'Ahora',
    backToToday: 'Volver a hoy',
    ok: 'Aceptar',
    clear: 'Limpiar',
    month: 'Mes',
    year: 'Año',
    timeSelect: 'Seleccionar hora',
    dateSelect: 'Seleccionar fecha',
    monthSelect: 'Elegir un mes',
    yearSelect: 'Elegir un año',
    decadeSelect: 'Elegir una década',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Mes anterior (PageUp)',
    nextMonth: 'Mes siguiente (PageDown)',
    previousYear: 'Año anterior (Control + left)',
    nextYear: 'Año siguiente (Control + right)',
    previousDecade: 'Década anterior',
    nextDecade: 'Década siguiente',
    previousCentury: 'Siglo anterior',
    nextCentury: 'Siglo siguiente'
};

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
const locale$k = {
    placeholder: 'Seleccionar hora'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$l = {
    lang: Object.assign({ placeholder: 'Seleccionar fecha', rangePlaceholder: ['Fecha inicial', 'Fecha final'] }, Calendar$a),
    timePickerLocale: Object.assign({}, locale$k)
};

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
var Pagination$a = {
    // Options.jsx
    items_per_page: '/ página',
    jump_to: 'Ir a',
    jump_to_confirm: 'confirmar',
    page: '',
    // Pagination.jsx
    prev_page: 'Página anterior',
    next_page: 'Página siguiente',
    prev_5: '5 páginas previas',
    next_5: '5 páginas siguientes',
    prev_3: '3 páginas previas',
    next_3: '3 páginas siguientes'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var es_ES = {
    locale: 'es',
    Pagination: Pagination$a,
    DatePicker: locale$l,
    TimePicker: locale$k,
    Calendar: Calendar$a,
    global: {
        placeholder: 'Seleccione'
    },
    Table: {
        filterTitle: 'Filtrar menú',
        filterConfirm: 'Aceptar',
        filterReset: 'Reiniciar',
        selectAll: 'Seleccionar todo',
        selectInvert: 'Invertir selección',
        sortTitle: 'Ordenar'
    },
    Modal: {
        okText: 'Aceptar',
        cancelText: 'Cancelar',
        justOkText: 'Aceptar'
    },
    Popconfirm: {
        okText: 'Aceptar',
        cancelText: 'Cancelar'
    },
    Transfer: {
        searchPlaceholder: 'Buscar aquí',
        itemUnit: 'elemento',
        itemsUnit: 'elementos'
    },
    Upload: {
        uploading: 'Subiendo...',
        removeFile: 'Eliminar archivo',
        uploadError: 'Error al subir el archivo',
        previewFile: 'Vista previa'
    },
    Empty: {
        description: 'No hay datos'
    },
    Icon: {
        icon: 'ícono'
    },
    Text: {
        edit: 'editar',
        copy: 'copiar',
        copied: 'copiado',
        expand: 'expandir'
    },
    PageHeader: {
        back: 'volver'
    }
};

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
var Calendar$b = {
    today: 'Täna',
    now: 'Praegu',
    backToToday: 'Tagasi tänase juurde',
    ok: 'Ok',
    clear: 'Tühista',
    month: 'Kuu',
    year: 'Aasta',
    timeSelect: 'Vali aeg',
    dateSelect: 'Vali kuupäev',
    monthSelect: 'Vali kuu',
    yearSelect: 'Vali aasta',
    decadeSelect: 'Vali dekaad',
    yearFormat: 'YYYY',
    dateFormat: 'D.M.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D.M.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Eelmine kuu (PageUp)',
    nextMonth: 'Järgmine kuu (PageDown)',
    previousYear: 'Eelmine aasta (Control + left)',
    nextYear: 'Järgmine aasta (Control + right)',
    previousDecade: 'Eelmine dekaad',
    nextDecade: 'Järgmine dekaad',
    previousCentury: 'Eelmine sajand',
    nextCentury: 'Järgmine sajand'
};

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
const locale$m = {
    placeholder: 'Vali aeg'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// 统一合并为完整的 Locale
/** @type {?} */
const locale$n = {
    lang: Object.assign({ placeholder: 'Vali kuupäev', rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev'] }, Calendar$b),
    timePickerLocale: Object.assign({}, locale$m)
};

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
var Pagination$b = {
    // Options.jsx
    items_per_page: '/ leheküljel',
    jump_to: 'Hüppa',
    jump_to_confirm: 'Kinnitage',
    page: '',
    // Pagination.jsx
    prev_page: 'Eelmine leht',
    next_page: 'Järgmine leht',
    prev_5: 'Eelmised 5 lehekülge',
    next_5: 'Järgmised 5 lehekülge',
    prev_3: 'Eelmised 3 lehekülge',
    next_3: 'Järgmised 3 lehekülge'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var et_EE = {
    locale: 'et',
    Pagination: Pagination$b,
    DatePicker: locale$n,
    TimePicker: locale$m,
    Calendar: Calendar$b,
    Table: {
        filterTitle: 'Filtri menüü',
        filterConfirm: 'OK',
        filterReset: 'Nulli',
        selectAll: 'Vali kõik',
        selectInvert: 'Inverteeri valik'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Tühista',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Tühista'
    },
    Transfer: {
        searchPlaceholder: 'Otsi siit',
        itemUnit: 'kogus',
        itemsUnit: 'kogus'
    },
    Upload: {
        uploading: 'Üleslaadimine...',
        removeFile: 'Eemalda fail',
        uploadError: 'Üleslaadimise tõrge',
        previewFile: 'Faili eelvaade'
    },
    Empty: {
        description: 'Andmed puuduvad'
    }
};

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
var Calendar$c = {
    today: 'امروز',
    now: 'اکنون',
    backToToday: 'بازگشت به روز',
    ok: 'باشه',
    clear: 'پاک کردن',
    month: 'ماه',
    year: 'سال',
    timeSelect: 'انتخاب زمان',
    dateSelect: 'انتخاب تاریخ',
    monthSelect: 'یک ماه را انتخاب کنید',
    yearSelect: 'یک سال را انتخاب کنید',
    decadeSelect: 'یک دهه را انتخاب کنید',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'ماه قبل (PageUp)',
    nextMonth: 'ماه بعد (PageDown)',
    previousYear: 'سال قبل (Control + left)',
    nextYear: 'سال بعد (Control + right)',
    previousDecade: 'دهه قبل',
    nextDecade: 'دهه بعد',
    previousCentury: 'قرن قبل',
    nextCentury: 'قرن بعد'
};

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
const locale$o = {
    placeholder: 'انتخاب زمان'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$p = {
    lang: Object.assign({ placeholder: 'انتخاب تاریخ', rangePlaceholder: ['تاریخ شروع', 'تاریخ پایان'] }, Calendar$c),
    timePickerLocale: Object.assign({}, locale$o)
};

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
var Pagination$c = {
    // Options.jsx
    items_per_page: '/ صفحه',
    jump_to: 'برو به',
    jump_to_confirm: 'تایید',
    page: '',
    // Pagination.jsx
    prev_page: 'صفحه قبلی',
    next_page: 'صفحه بعدی',
    prev_5: '۵ صفحه قبلی',
    next_5: '۵ صفحه بعدی',
    prev_3: '۳ صفحه قبلی',
    next_3: '۳ صفحه بعدی'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var fa_IR = {
    locale: 'fa',
    Pagination: Pagination$c,
    DatePicker: locale$p,
    TimePicker: locale$o,
    Calendar: Calendar$c,
    Table: {
        filterTitle: 'منوی فیلتر',
        filterConfirm: 'تایید',
        filterReset: 'پاک کردن',
        selectAll: 'انتخاب صفحه‌ی کنونی',
        selectInvert: 'معکوس کردن انتخاب‌ها در صفحه ی کنونی'
    },
    Modal: {
        okText: 'تایید',
        cancelText: 'لغو',
        justOkText: 'تایید'
    },
    Popconfirm: {
        okText: 'تایید',
        cancelText: 'لغو'
    },
    Transfer: {
        searchPlaceholder: 'جستجو',
        itemUnit: '',
        itemsUnit: ''
    },
    Upload: {
        uploading: 'در حال آپلود...',
        removeFile: 'حذف فایل',
        uploadError: 'خطا در آپلود',
        previewFile: 'مشاهده‌ی فایل'
    },
    Empty: {
        description: 'داده‌ای موجود نیست'
    }
};

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
var Calendar$d = {
    today: 'Tänään',
    now: 'Nyt',
    backToToday: 'Tämä päivä',
    ok: 'Ok',
    clear: 'Tyhjennä',
    month: 'Kuukausi',
    year: 'Vuosi',
    timeSelect: 'Valise aika',
    dateSelect: 'Valitse päivä',
    monthSelect: 'Valitse kuukausi',
    yearSelect: 'Valitse vuosi',
    decadeSelect: 'Valitse vuosikymmen',
    yearFormat: 'YYYY',
    dateFormat: 'D.M.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D.M.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Edellinen kuukausi (PageUp)',
    nextMonth: 'Seuraava kuukausi (PageDown)',
    previousYear: 'Edellinen vuosi (Control + left)',
    nextYear: 'Seuraava vuosi (Control + right)',
    previousDecade: 'Edellinen vuosikymmen',
    nextDecade: 'Seuraava vuosikymmen',
    previousCentury: 'Edellinen vuosisata',
    nextCentury: 'Seuraava vuosisata'
};

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
const locale$q = {
    placeholder: 'Valitse aika'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$r = {
    lang: Object.assign({ placeholder: 'Valitse päivä', rangePlaceholder: ['Alku päivä', 'Loppu päivä'] }, Calendar$d),
    timePickerLocale: Object.assign({}, locale$q)
};

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
var Pagination$d = {
    // Options.jsx
    items_per_page: '/ sivu',
    jump_to: 'Mene',
    jump_to_confirm: 'Potvrdite',
    page: '',
    // Pagination.jsx
    prev_page: 'Edellinen sivu',
    next_page: 'Seuraava sivu',
    prev_5: 'Edelliset 5 sivua',
    next_5: 'Seuraavat 5 sivua',
    prev_3: 'Edelliset 3 sivua',
    next_3: 'Seuraavat 3 sivua'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var fi_FI = {
    locale: 'fi',
    Pagination: Pagination$d,
    DatePicker: locale$r,
    TimePicker: locale$q,
    Calendar: Calendar$d,
    Table: {
        filterTitle: 'Suodatus valikko',
        filterConfirm: 'OK',
        filterReset: 'Tyhjennä',
        selectAll: 'Valitse kaikki',
        selectInvert: 'Valitse päinvastoin',
        sortTitle: 'Lajittele'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Peruuta',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Peruuta'
    },
    Transfer: {
        searchPlaceholder: 'Etsi täältä',
        itemUnit: 'kohde',
        itemsUnit: 'kohdetta'
    },
    Upload: {
        uploading: 'Lähetetään...',
        removeFile: 'Poista tiedosto',
        uploadError: 'Virhe lähetyksessä',
        previewFile: 'Esikatsele tiedostoa'
    },
    Empty: {
        description: 'Ei kohteita'
    }
};

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
var Calendar$e = {
    today: 'Aujourd\'hui',
    now: 'Maintenant',
    backToToday: 'Aujourd\'hui',
    ok: 'Ok',
    clear: 'Rétablir',
    month: 'Mois',
    year: 'Année',
    timeSelect: 'Sélectionner l\'heure',
    dateSelect: 'Sélectionner l\'heure',
    monthSelect: 'Choisissez un mois',
    yearSelect: 'Choisissez une année',
    decadeSelect: 'Choisissez une décennie',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Mois précédent (PageUp)',
    nextMonth: 'Mois suivant (PageDown)',
    previousYear: 'Année précédente (Ctrl + gauche)',
    nextYear: 'Année prochaine (Ctrl + droite)',
    previousDecade: 'Décennie précédente',
    nextDecade: 'Décennie suivante',
    previousCentury: 'Siècle précédent',
    nextCentury: 'Siècle suivant'
};

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
const locale$s = {
    placeholder: "Sélectionner l'heure"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$t = {
    lang: Object.assign({ placeholder: 'Sélectionner une date', rangePlaceholder: ['Date de début', 'Date de fin'] }, Calendar$e),
    timePickerLocale: Object.assign({}, locale$s)
};

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
var Pagination$e = {
    // Options.jsx
    items_per_page: '/ page',
    jump_to: 'Aller à',
    jump_to_confirm: 'confirmer',
    page: '',
    // Pagination.jsx
    prev_page: 'Page précédente',
    next_page: 'Page suivante',
    prev_5: '5 Pages précédentes',
    next_5: '5 Pages suivantes',
    prev_3: '3 Pages précédentes',
    next_3: '3 Pages suivantes'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var fr_BE = {
    locale: 'fr',
    Pagination: Pagination$e,
    DatePicker: locale$t,
    TimePicker: locale$s,
    Calendar: Calendar$e,
    Table: {
        filterTitle: 'Filtrer',
        filterConfirm: 'OK',
        filterReset: 'Réinitialiser'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuler',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuler'
    },
    Transfer: {
        searchPlaceholder: 'Recherche',
        itemUnit: 'élément',
        itemsUnit: 'éléments'
    },
    Empty: {
        description: 'Aucune donnée'
    },
    Text: {
        edit: 'éditer',
        copy: 'copier',
        copied: 'copie effectuée',
        expand: 'développer'
    }
};

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
var Calendar$f = {
    today: "Aujourd'hui",
    now: 'Maintenant',
    backToToday: "Aujourd'hui",
    ok: 'Ok',
    clear: 'Rétablir',
    month: 'Mois',
    year: 'Année',
    timeSelect: "Sélectionner l'heure",
    dateSelect: 'Sélectionner la date',
    monthSelect: 'Choisissez un mois',
    yearSelect: 'Choisissez une année',
    decadeSelect: 'Choisissez une décennie',
    yearFormat: 'YYYY',
    dateFormat: 'DD/MM/YYYY',
    dayFormat: 'DD',
    dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Mois précédent (PageUp)',
    nextMonth: 'Mois suivant (PageDown)',
    previousYear: 'Année précédente (Ctrl + gauche)',
    nextYear: 'Année prochaine (Ctrl + droite)',
    previousDecade: 'Décennie précédente',
    nextDecade: 'Décennie suivante',
    previousCentury: 'Siècle précédent',
    nextCentury: 'Siècle suivant'
};

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
const locale$u = {
    placeholder: "Sélectionner l'heure"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$v = {
    lang: Object.assign({ placeholder: 'Sélectionner une date', rangePlaceholder: ['Date de début', 'Date de fin'] }, Calendar$f),
    timePickerLocale: Object.assign({}, locale$u)
};

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
var Pagination$f = {
    // Options.jsx
    items_per_page: '/ page',
    jump_to: 'Aller à',
    jump_to_confirm: 'confirmer',
    page: '',
    // Pagination.jsx
    prev_page: 'Page précédente',
    next_page: 'Page suivante',
    prev_5: '5 Pages précédentes',
    next_5: '5 Pages suivantes',
    prev_3: '3 Pages précédentes',
    next_3: '3 Pages suivantes'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var fr_FR = {
    locale: 'fr',
    Pagination: Pagination$f,
    DatePicker: locale$v,
    TimePicker: locale$u,
    Calendar: Calendar$f,
    Table: {
        filterTitle: 'Filtrer',
        filterConfirm: 'OK',
        filterReset: 'Réinitialiser',
        selectAll: 'Tout sélectionner',
        selectInvert: 'Inverser la sélection'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuler',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuler'
    },
    Transfer: {
        searchPlaceholder: 'Recherche',
        itemUnit: 'élément',
        itemsUnit: 'éléments'
    },
    Upload: {
        uploading: 'Téléversement en cours...',
        removeFile: 'Supprimer',
        uploadError: 'Erreur de téléversement',
        previewFile: "Afficher l'aperçu du fichier"
    },
    Empty: {
        description: 'Aucune donnée'
    },
    Text: {
        edit: 'éditer',
        copy: 'copier',
        copied: 'copie effectuée',
        expand: 'développer'
    }
};

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
var Calendar$g = {
    today: 'היום',
    now: 'עכשיו',
    backToToday: 'חזור להיום',
    ok: 'אישור',
    clear: 'איפוס',
    month: 'חודש',
    year: 'שנה',
    timeSelect: 'בחר שעה',
    dateSelect: 'בחר תאריך',
    weekSelect: 'בחר שבוע',
    monthSelect: 'בחר חודש',
    yearSelect: 'בחר שנה',
    decadeSelect: 'בחר עשור',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'חודש קודם (PageUp)',
    nextMonth: 'חודש הבא (PageDown)',
    previousYear: 'שנה שעברה (Control + left)',
    nextYear: 'שנה הבאה (Control + right)',
    previousDecade: 'העשור הקודם',
    nextDecade: 'העשור הבא',
    previousCentury: 'המאה הקודמת',
    nextCentury: 'המאה הבאה'
};

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
const locale$w = {
    placeholder: 'בחר שעה'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$x = {
    lang: Object.assign({ placeholder: 'בחר תאריך', rangePlaceholder: ['תאריך התחלה', 'תאריך סיום'] }, Calendar$g),
    timePickerLocale: Object.assign({}, locale$w)
};

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
var Pagination$g = {
    // Options.jsx
    items_per_page: '/ עמוד',
    jump_to: 'עבור אל',
    jump_to_confirm: 'אישור',
    page: '',
    // Pagination.jsx
    prev_page: 'העמוד הקודם',
    next_page: 'העמוד הבא',
    prev_5: '5 עמודים קודמים',
    next_5: '5 עמודים הבאים',
    prev_3: '3 עמודים קודמים',
    next_3: '3 עמודים הבאים'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var he_IL = {
    locale: 'he',
    Pagination: Pagination$g,
    DatePicker: locale$x,
    TimePicker: locale$w,
    Calendar: Calendar$g,
    Table: {
        filterTitle: 'תפריט סינון',
        filterConfirm: 'אישור',
        filterReset: 'איפוס',
        selectAll: 'בחר הכל',
        selectInvert: 'הפוך בחירה'
    },
    Modal: {
        okText: 'אישור',
        cancelText: 'ביטול',
        justOkText: 'אישור'
    },
    Popconfirm: {
        okText: 'אישור',
        cancelText: 'ביטול'
    },
    Transfer: {
        searchPlaceholder: 'חפש כאן',
        itemUnit: 'פריט',
        itemsUnit: 'פריטים'
    },
    Upload: {
        uploading: 'מעלה...',
        removeFile: 'הסר קובץ',
        uploadError: 'שגיאת העלאה',
        previewFile: 'הצג קובץ'
    },
    Empty: {
        description: 'אין מידע'
    }
};

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
var Calendar$h = {
    today: 'आज',
    now: 'अभी',
    backToToday: 'आज तक',
    ok: 'ठीक',
    clear: 'स्पष्ट',
    month: 'महीना',
    year: 'साल',
    timeSelect: 'समय का चयन करें',
    dateSelect: 'तारीख़ चुनें',
    weekSelect: 'एक सप्ताह चुनें',
    monthSelect: 'एक महीना चुनें',
    yearSelect: 'एक वर्ष चुनें',
    decadeSelect: 'एक दशक चुनें',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'पिछला महीना (पेजअप)',
    nextMonth: 'अगले महीने (पेजडाउन)',
    previousYear: 'पिछले साल (Ctrl + बाएं)',
    nextYear: 'अगले साल (Ctrl + दाहिना)',
    previousDecade: 'पिछला दशक',
    nextDecade: 'अगले दशक',
    previousCentury: 'पीछ्ली शताब्दी',
    nextCentury: 'अगली सदी'
};

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
const locale$y = {
    placeholder: 'समय का चयन करें'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$z = {
    lang: Object.assign({ placeholder: 'तारीख़ चुनें', rangePlaceholder: ['प्रारंभ तिथि', 'समाप्ति तिथि'] }, Calendar$h),
    timePickerLocale: Object.assign({}, locale$y)
};

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
var Pagination$h = {
    // Options.jsx
    items_per_page: '/ पृष्ठ',
    jump_to: 'इस पर चलें',
    jump_to_confirm: 'पुष्टि करें',
    page: '',
    // Pagination.jsx
    prev_page: 'पिछला पृष्ठ',
    next_page: 'अगला पृष्ठ',
    prev_5: 'पिछले 5 पृष्ठ',
    next_5: 'अगले 5 पृष्ठ',
    prev_3: 'पिछले 3 पृष्ठ',
    next_3: 'अगले 3 पेज'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var hi_IN = {
    locale: 'hi',
    Pagination: Pagination$h,
    DatePicker: locale$z,
    TimePicker: locale$y,
    Calendar: Calendar$h,
    // locales for all comoponents
    global: {
        placeholder: 'कृपया चुनें'
    },
    Table: {
        filterTitle: 'सूची बंद करें',
        filterConfirm: 'अच्छी तरह से',
        filterReset: 'रीसेट',
        emptyText: 'कोई जानकारी नहीं',
        selectAll: 'वर्तमान पृष्ठ का चयन करें',
        selectInvert: 'वर्तमान पृष्ठ घुमाएं',
        sortTitle: 'द्वारा क्रमबद्ध करें'
    },
    Modal: {
        okText: 'अच्छी तरह से',
        cancelText: 'रद्द करना',
        justOkText: 'अच्छी तरह से'
    },
    Popconfirm: {
        okText: 'अच्छी तरह से',
        cancelText: 'रद्द करना'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'नहीं मिला',
        searchPlaceholder: 'यहां खोजें',
        itemUnit: 'तत्त्व',
        itemsUnit: 'विषय-वस्तु'
    },
    Select: {
        notFoundContent: 'नहीं मिला'
    },
    Upload: {
        uploading: 'अपलोडिंग...',
        removeFile: 'फ़ाइल निकालें',
        uploadError: 'अपलोड में त्रुटि',
        previewFile: 'फ़ाइल पूर्वावलोकन'
    }
};

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
var Calendar$i = {
    today: 'Danas',
    now: 'Sad',
    backToToday: 'Natrag na danas',
    ok: 'Ok',
    clear: 'Očisti',
    month: 'Mjesec',
    year: 'Godina',
    timeSelect: 'odaberite vrijeme',
    dateSelect: 'odaberite datum',
    weekSelect: 'Odaberite tjedan',
    monthSelect: 'Odaberite mjesec',
    yearSelect: 'Odaberite godinu',
    decadeSelect: 'Odaberite desetljeće',
    yearFormat: 'YYYY',
    dateFormat: 'D.M.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D.M.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Prošli mjesec (PageUp)',
    nextMonth: 'Sljedeći mjesec (PageDown)',
    previousYear: 'Prošla godina (Control + left)',
    nextYear: 'Sljedeća godina (Control + right)',
    previousDecade: 'Prošlo desetljeće',
    nextDecade: 'Sljedeće desetljeće',
    previousCentury: 'Prošlo stoljeće',
    nextCentury: 'Sljedeće stoljeće'
};

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
const locale$A = {
    placeholder: 'Odaberite vrijeme'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$B = {
    lang: Object.assign({ placeholder: 'Odaberite datum', rangePlaceholder: ['Početni datum', 'Završni datum'] }, Calendar$i),
    timePickerLocale: Object.assign({}, locale$A)
};

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
var Pagination$i = {
    // Options.jsx
    items_per_page: '/ str',
    jump_to: 'Idi na',
    jump_to_confirm: 'potvrdi',
    page: '',
    // Pagination.jsx
    prev_page: 'Prijašnja stranica',
    next_page: 'Sljedeća stranica',
    prev_5: 'Prijašnjih 5 stranica',
    next_5: 'Sljedećih 5 stranica',
    prev_3: 'Prijašnje 3 stranice',
    next_3: 'Sljedeće 3 stranice'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var hr_HR = {
    locale: 'hr',
    Pagination: Pagination$i,
    DatePicker: locale$B,
    TimePicker: locale$A,
    Calendar: Calendar$i,
    global: {
        placeholder: 'Molimo označite'
    },
    Table: {
        filterTitle: 'Filter meni',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Označi trenutnu stranicu',
        selectInvert: 'Invertiraj trenutnu stranicu',
        sortTitle: 'Sortiraj'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Odustani',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Odustani'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Pretraži ovdje',
        itemUnit: 'stavka',
        itemsUnit: 'stavke'
    },
    Upload: {
        uploading: 'Upload u tijeku...',
        removeFile: 'Makni datoteku',
        uploadError: 'Greška kod uploada',
        previewFile: 'Pogledaj datoteku'
    },
    Empty: {
        description: 'Nema podataka'
    },
    Icon: {
        icon: 'ikona'
    },
    Text: {
        edit: 'uredi',
        copy: 'kopiraj',
        copied: 'kopiranje uspješno',
        expand: 'proširi'
    }
};

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
var Calendar$j = {
    today: 'Ma',
    // 'Today',
    now: 'Most',
    // 'Now',
    backToToday: 'Vissza a mai napra',
    // 'Back to today',
    ok: 'Ok',
    clear: 'Törlés',
    // 'Clear',
    month: 'Hónap',
    // 'Month',
    year: 'Év',
    // 'Year',
    timeSelect: 'Időpont kiválasztása',
    // 'Select time',
    dateSelect: 'Dátum kiválasztása',
    // 'Select date',
    monthSelect: 'Hónap kiválasztása',
    // 'Choose a month',
    yearSelect: 'Év kiválasztása',
    // 'Choose a year',
    decadeSelect: 'Évtized kiválasztása',
    // 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'YYYY/MM/DD',
    // 'M/D/YYYY',
    dayFormat: 'DD',
    // 'D',
    dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
    // 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Előző hónap (PageUp)',
    // 'Previous month (PageUp)',
    nextMonth: 'Következő hónap (PageDown)',
    // 'Next month (PageDown)',
    previousYear: 'Múlt év (Control + left)',
    // 'Last year (Control + left)',
    nextYear: 'Jövő év (Control + right)',
    // 'Next year (Control + right)',
    previousDecade: 'Előző évtized',
    // 'Last decade',
    nextDecade: 'Következő évtized',
    // 'Next decade',
    previousCentury: 'Múlt évszázad',
    // 'Last century',
    nextCentury: 'Jövő évszázad' // 'Next century',
};

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
const locale$C = {
    placeholder: 'Válasszon időt'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$D = {
    lang: Object.assign({ placeholder: 'Válasszon dátumot', rangePlaceholder: ['Kezdő dátum', 'Befejezés dátuma'] }, Calendar$j),
    timePickerLocale: Object.assign({}, locale$C)
};

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
var Pagination$j = {
    // Options.jsx
    items_per_page: '/ oldal',
    // '/ page',
    jump_to: 'Ugrás',
    // 'Goto',
    jump_to_confirm: 'megerősít',
    // 'confirm',
    page: '',
    // Pagination.jsx
    prev_page: 'Előző oldal',
    // 'Previous Page',
    next_page: 'Következő oldal',
    // 'Next Page',
    prev_5: 'Előző 5 oldal',
    // 'Previous 5 Pages',
    next_5: 'Következő 5 oldal',
    // 'Next 5 Pages',
    prev_3: 'Előző 3 oldal',
    // 'Previous 3 Pages',
    next_3: 'Következő 3 oldal' // 'Next 3 Pages',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var hu_HU = {
    locale: 'hu',
    Pagination: Pagination$j,
    DatePicker: locale$D,
    TimePicker: locale$C,
    Calendar: Calendar$j,
    Table: {
        filterTitle: 'Szűrők',
        filterConfirm: 'Alkalmazás',
        filterReset: 'Visszaállítás',
        selectAll: 'Jelenlegi oldal kiválasztása',
        selectInvert: 'Jelenlegi oldal inverze',
        sortTitle: 'Rendezés'
    },
    Modal: {
        okText: 'Alkalmazás',
        cancelText: 'Visszavonás',
        justOkText: 'Alkalmazás'
    },
    Popconfirm: {
        okText: 'Alkalmazás',
        cancelText: 'Visszavonás'
    },
    Transfer: {
        searchPlaceholder: 'Keresés',
        itemUnit: 'elem',
        itemsUnit: 'elemek'
    },
    Upload: {
        uploading: 'Feltöltés...',
        removeFile: 'Fájl eltávolítása',
        uploadError: 'Feltöltési hiba',
        previewFile: 'Fájl előnézet'
    },
    Empty: {
        description: 'Nincs adat'
    }
};

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
var Calendar$k = {
    today: 'Hari ini',
    now: 'Sekarang',
    backToToday: 'Kembali ke hari ini',
    ok: 'Baik',
    clear: 'Bersih',
    month: 'Bulan',
    year: 'Tahun',
    timeSelect: 'pilih waktu',
    dateSelect: 'pilih tanggal',
    weekSelect: 'Pilih satu minggu',
    monthSelect: 'Pilih satu bulan',
    yearSelect: 'Pilih satu tahun',
    decadeSelect: 'Pilih satu dekade',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Bulan sebelumnya (PageUp)',
    nextMonth: 'Bulan depan (PageDown)',
    previousYear: 'Tahun lalu (Control + kiri)',
    nextYear: 'Tahun depan (Kontrol + kanan)',
    previousDecade: 'Dekade terakhir',
    nextDecade: 'Dekade berikutnya',
    previousCentury: 'Abad terakhir',
    nextCentury: 'Abad berikutnya'
};

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
const locale$E = {
    placeholder: 'Pilih waktu'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$F = {
    lang: Object.assign({ placeholder: 'Pilih tanggal', rangePlaceholder: ['Mulai tanggal', 'Tanggal akhir'] }, Calendar$k),
    timePickerLocale: Object.assign({}, locale$E)
};

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
var Pagination$k = {
    // Options.jsx
    items_per_page: '/ halaman',
    jump_to: 'Menuju',
    jump_to_confirm: 'konfirmasi',
    page: '',
    // Pagination.jsx
    prev_page: 'Halaman Sebelumnya',
    next_page: 'Halaman Berikutnya',
    prev_5: '5 Halaman Sebelumnya',
    next_5: '5 Halaman Berikutnya',
    prev_3: '3 Halaman Sebelumnya',
    next_3: '3 Halaman Berikutnya'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var id_ID = {
    locale: 'id',
    Pagination: Pagination$k,
    DatePicker: locale$F,
    TimePicker: locale$E,
    Calendar: Calendar$k,
    Table: {
        filterTitle: 'Saring',
        filterConfirm: 'OK',
        filterReset: 'Hapus',
        selectAll: 'Pilih semua di halaman ini',
        selectInvert: 'Balikkan pilihan di halaman ini',
        sortTitle: 'Urutkan'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Batal',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Batal'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Cari',
        itemUnit: 'item',
        itemsUnit: 'item'
    },
    Upload: {
        uploading: 'Mengunggah...',
        removeFile: 'Hapus file',
        uploadError: 'Kesalahan pengunggahan',
        previewFile: 'File pratinjau'
    },
    Empty: {
        description: 'Tidak ada data'
    }
};

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
var Calendar$l = {
    today: 'Í dag',
    now: 'Núna',
    backToToday: 'Til baka til dagsins í dag',
    ok: 'Í lagi',
    clear: 'Hreinsa',
    month: 'Mánuður',
    year: 'Ár',
    timeSelect: 'Velja tíma',
    dateSelect: 'Velja dag',
    monthSelect: 'Velja mánuð',
    yearSelect: 'Velja ár',
    decadeSelect: 'Velja áratug',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Fyrri mánuður (PageUp)',
    nextMonth: 'Næsti mánuður (PageDown)',
    previousYear: 'Fyrra ár (Control + left)',
    nextYear: 'Næsta ár (Control + right)',
    previousDecade: 'Fyrri áratugur',
    nextDecade: 'Næsti áratugur',
    previousCentury: 'Fyrri öld',
    nextCentury: 'Næsta öld'
};

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
const locale$G = {
    placeholder: 'Velja tíma'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$H = {
    lang: Object.assign({ placeholder: 'Veldu dag', rangePlaceholder: ['Upphafsdagur', 'Lokadagur'] }, Calendar$l),
    timePickerLocale: Object.assign({}, locale$G)
};

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
var Pagination$l = {
    // Options.jsx
    items_per_page: '/ síðu',
    jump_to: 'Síða',
    jump_to_confirm: 'staðfest',
    page: '',
    // Pagination.jsx
    prev_page: 'Fyrri síða',
    next_page: 'Næsta síða',
    prev_5: 'Til baka 5 síður',
    next_5: 'Áfram 5 síður',
    prev_3: 'Til baka 3 síður',
    next_3: 'Áfram 3 síður'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var is_IS = {
    locale: 'is',
    Pagination: Pagination$l,
    DatePicker: locale$H,
    TimePicker: locale$G,
    Calendar: Calendar$l,
    Table: {
        filterTitle: 'Afmarkanir',
        filterConfirm: 'Staðfesta',
        filterReset: 'Núllstilla',
        selectAll: 'Velja allt',
        selectInvert: 'Viðsnúa vali'
    },
    Modal: {
        okText: 'Áfram',
        cancelText: 'Hætta við',
        justOkText: 'Í lagi'
    },
    Popconfirm: {
        okText: 'Áfram',
        cancelText: 'Hætta við'
    },
    Transfer: {
        searchPlaceholder: 'Leita hér',
        itemUnit: 'færsla',
        itemsUnit: 'færslur'
    },
    Upload: {
        uploading: 'Hleð upp...',
        removeFile: 'Fjarlægja skrá',
        uploadError: 'Villa við að hlaða upp',
        previewFile: 'Forskoða skrá'
    },
    Empty: {
        description: 'Engin gögn'
    }
};

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
var Calendar$m = {
    today: 'Oggi',
    now: 'Adesso',
    backToToday: 'Torna ad oggi',
    ok: 'Ok',
    clear: 'Cancella',
    month: 'Mese',
    year: 'Anno',
    timeSelect: "Seleziona l'ora",
    dateSelect: 'Seleziona la data',
    monthSelect: 'Seleziona il mese',
    yearSelect: "Seleziona l'anno",
    decadeSelect: 'Seleziona il decennio',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Il mese scorso (PageUp)',
    nextMonth: 'Il prossimo mese (PageDown)',
    previousYear: "L'anno scorso (Control + sinistra)",
    nextYear: "L'anno prossimo (Control + destra)",
    previousDecade: 'Ultimo decennio',
    nextDecade: 'Prossimo decennio',
    previousCentury: 'Secolo precedente',
    nextCentury: 'Prossimo secolo'
};

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
const locale$I = {
    placeholder: "Selezionare l'orario"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$J = {
    lang: Object.assign({ placeholder: 'Selezionare la data', rangePlaceholder: ["Data d'inizio", 'Data di fine'] }, Calendar$m),
    timePickerLocale: Object.assign({}, locale$I)
};

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
var Pagination$m = {
    // Options.jsx
    items_per_page: '/ pagina',
    jump_to: 'vai a',
    jump_to_confirm: 'Conferma',
    page: '',
    // Pagination.jsx
    prev_page: 'Pagina precedente',
    next_page: 'Pagina successiva',
    prev_5: 'Precedente 5 pagine',
    next_5: 'Prossime 5 pagine',
    prev_3: 'Precedente 3 pagine',
    next_3: 'Prossime 3 pagine'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var it_IT = {
    locale: 'it',
    Pagination: Pagination$m,
    DatePicker: locale$J,
    TimePicker: locale$I,
    Calendar: Calendar$m,
    global: {
        placeholder: 'Selezionare'
    },
    Table: {
        filterTitle: 'Menù Filtro',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Seleziona pagina corrente',
        selectInvert: 'Inverti selezione nella pagina corrente',
        sortTitle: 'Ordina'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annulla',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annulla'
    },
    Transfer: {
        searchPlaceholder: 'Cerca qui',
        itemUnit: 'elemento',
        itemsUnit: 'elementi'
    },
    Upload: {
        uploading: 'Caricamento...',
        removeFile: 'Rimuovi il file',
        uploadError: 'Errore di caricamento',
        previewFile: 'Anteprima file'
    },
    Empty: {
        description: 'Nessun dato'
    },
    Icon: {
        icon: 'icona'
    },
    Text: {
        edit: 'modifica',
        copy: 'copia',
        copied: 'copia effettuata',
        expand: 'espandi'
    }
};

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
var Calendar$n = {
    today: '今日',
    now: '現在時刻',
    backToToday: '今日に戻る',
    ok: '決定',
    timeSelect: '時間を選択',
    dateSelect: '日時を選択',
    clear: 'クリア',
    month: '月',
    year: '年',
    previousMonth: '前月 (ページアップキー)',
    nextMonth: '翌月 (ページダウンキー)',
    monthSelect: '月を選択',
    yearSelect: '年を選択',
    decadeSelect: '年代を選択',
    yearFormat: 'YYYY年',
    dayFormat: 'D日',
    dateFormat: 'YYYY年M月D日',
    dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
    previousYear: '前年 (Controlを押しながら左キー)',
    nextYear: '翌年 (Controlを押しながら右キー)',
    previousDecade: '前の年代',
    nextDecade: '次の年代',
    previousCentury: '前の世紀',
    nextCentury: '次の世紀'
};

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
const locale$K = {
    placeholder: '時刻を選択'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const locale$L = {
    lang: Object.assign({ placeholder: '日付を選択', rangePlaceholder: ['開始日付', '終了日付'] }, Calendar$n),
    timePickerLocale: Object.assign({}, locale$K)
};

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
var Pagination$n = {
    // Options.jsx
    items_per_page: '/ ページ',
    jump_to: '移動',
    jump_to_confirm: '確認する',
    page: 'ページ',
    // Pagination.jsx
    prev_page: '前のページ',
    next_page: '次のページ',
    prev_5: '前 5ページ',
    next_5: '次 5ページ',
    prev_3: '前 3ページ',
    next_3: '次 3ページ'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ja_JP = {
    locale: 'ja',
    Pagination: Pagination$n,
    DatePicker: locale$L,
    TimePicker: locale$K,
    Calendar: Calendar$n,
    Table: {
        filterTitle: 'メニューをフィルター',
        filterConfirm: 'OK',
        filterReset: 'リセット',
        selectAll: 'すべてを選択',
        selectInvert: '選択を反転'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'キャンセル',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'キャンセル'
    },
    Transfer: {
        searchPlaceholder: 'ここを検索',
        itemUnit: 'アイテム',
        itemsUnit: 'アイテム'
    },
    Upload: {
        uploading: 'アップロード中...',
        removeFile: 'ファイルを削除',
        uploadError: 'アップロードエラー',
        previewFile: 'ファイルをプレビュー'
    },
    Empty: {
        description: 'データがありません'
    }
};

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
var Calendar$o = {
    today: 'ಇಂದು',
    now: 'ಈಗ',
    backToToday: 'ಇಂದು ಹಿಂದಿರುಗಿ',
    ok: 'ಸರಿ',
    clear: 'ಸ್ಪಷ್ಟ',
    month: 'ತಿಂಗಳು',
    year: 'ವರ್ಷ',
    timeSelect: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ',
    dateSelect: 'ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
    weekSelect: 'ಒಂದು ವಾರದ ಆರಿಸಿ',
    monthSelect: 'ಒಂದು ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ',
    yearSelect: 'ಒಂದು ವರ್ಷ ಆರಿಸಿ',
    decadeSelect: 'ಒಂದು ದಶಕದ ಆಯ್ಕೆಮಾಡಿ',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'ಹಿಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಅಪ್)',
    nextMonth: 'ಮುಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಡೌನ್)',
    previousYear: 'ಕಳೆದ ವರ್ಷ (Ctrl + ಎಡ)',
    nextYear: 'ಮುಂದಿನ ವರ್ಷ (Ctrl + ಬಲ)',
    previousDecade: 'ಕಳೆದ ದಶಕ',
    nextDecade: 'ಮುಂದಿನ ದಶಕ',
    previousCentury: 'ಕಳೆದ ಶತಮಾನ',
    nextCentury: 'ಮುಂದಿನ ಶತಮಾನ'
};

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
const locale$M = {
    placeholder: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$N = {
    lang: Object.assign({ placeholder: 'ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ', rangePlaceholder: ['ಪ್ರಾರಂಭ ದಿನಾಂಕ', 'ಅಂತಿಮ ದಿನಾಂಕ'] }, Calendar$o),
    timePickerLocale: Object.assign({}, locale$M)
};

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
var Pagination$o = {
    // Options.jsx
    items_per_page: '/ ಪುಟ',
    jump_to: 'ಜಿಗಿತವನ್ನು',
    jump_to_confirm: 'ಖಚಿತಪಡಿಸಲು ಜಿಗಿತವನ್ನು',
    page: '',
    // Pagination.jsx
    prev_page: 'ಹಿಂದಿನ ಪುಟ',
    next_page: 'ಮುಂದಿನ ಪುಟ',
    prev_5: 'ಹಿಂದಿನ 5 ಪುಟಗಳು',
    next_5: 'ಮುಂದಿನ 5 ಪುಟಗಳು',
    prev_3: 'ಹಿಂದಿನ 3 ಪುಟಗಳು',
    next_3: 'ಮುಂದಿನ 3 ಪುಟಗಳು'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var kn_IN = {
    locale: 'kn',
    Pagination: Pagination$o,
    DatePicker: locale$N,
    TimePicker: locale$M,
    Calendar: Calendar$o,
    // locales for all comoponents
    global: {
        placeholder: 'ದಯವಿಟ್ಟು ಆರಿಸಿ'
    },
    Table: {
        filterTitle: 'ಪಟ್ಟಿ ಸೋಸಿ',
        filterConfirm: 'ಸರಿ',
        filterReset: 'ಮರುಹೊಂದಿಸಿ',
        emptyText: 'ಮಾಹಿತಿ ಇಲ್ಲ',
        selectAll: 'ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        selectInvert: 'ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ತಿರುಗಿಸಿ',
        sortTitle: 'ವಿಂಗಡಿಸಿ'
    },
    Modal: {
        okText: 'ಸರಿ',
        cancelText: 'ರದ್ದು',
        justOkText: 'ಸರಿ'
    },
    Popconfirm: {
        okText: 'ಸರಿ',
        cancelText: 'ರದ್ದು'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'ದೊರೆತಿಲ್ಲ',
        searchPlaceholder: 'ಇಲ್ಲಿ ಹುಡುಕಿ',
        itemUnit: 'ವಿಷಯ',
        itemsUnit: 'ವಿಷಯಗಳು'
    },
    Select: {
        notFoundContent: 'ದೊರೆತಿಲ್ಲ'
    },
    Upload: {
        uploading: 'ಏರಿಸಿ...',
        removeFile: 'ಫೈಲ್ ತೆಗೆದುಹಾಕಿ',
        uploadError: 'ಏರಿಸುವ ದೋಷ',
        previewFile: 'ಫೈಲ್ ಮುನ್ನೋಟ'
    }
};

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
var Calendar$p = {
    today: '오늘',
    now: '현재 시각',
    backToToday: '오늘로 돌아가기',
    ok: '확인',
    clear: '지우기',
    month: '월',
    year: '년',
    timeSelect: '시간 선택',
    dateSelect: '날짜 선택',
    monthSelect: '달 선택',
    yearSelect: '연 선택',
    decadeSelect: '연대 선택',
    yearFormat: 'YYYY년',
    dateFormat: 'YYYY-MM-DD',
    dayFormat: 'Do',
    dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    monthBeforeYear: false,
    previousMonth: '이전 달 (PageUp)',
    nextMonth: '다음 달 (PageDown)',
    previousYear: '이전 해 (Control + left)',
    nextYear: '다음 해 (Control + right)',
    previousDecade: '이전 연대',
    nextDecade: '다음 연대',
    previousCentury: '이전 세기',
    nextCentury: '다음 세기'
};

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
const locale$O = {
    placeholder: '날짜 선택'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$P = {
    lang: Object.assign({ placeholder: '날짜 선택', rangePlaceholder: ['시작일', '종료일'] }, Calendar$p),
    timePickerLocale: Object.assign({}, locale$O)
};

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
var Pagination$p = {
    // Options.jsx
    items_per_page: '/ 쪽',
    jump_to: '이동하기',
    jump_to_confirm: '확인하다',
    page: '',
    // Pagination.jsx
    prev_page: '이전 페이지',
    next_page: '다음 페이지',
    prev_5: '이전 5 페이지',
    next_5: '다음 5 페이지',
    prev_3: '이전 3 페이지',
    next_3: '다음 3 페이지'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ko_KR = {
    locale: 'ko',
    Pagination: Pagination$p,
    DatePicker: locale$P,
    TimePicker: locale$O,
    Calendar: Calendar$p,
    Table: {
        filterTitle: '필터 메뉴',
        filterConfirm: '확인',
        filterReset: '초기화',
        selectAll: '모두 선택',
        selectInvert: '선택 반전'
    },
    Modal: {
        okText: '확인',
        cancelText: '취소',
        justOkText: '확인'
    },
    Popconfirm: {
        okText: '확인',
        cancelText: '취소'
    },
    Transfer: {
        searchPlaceholder: '여기에 검색하세요',
        itemUnit: '개',
        itemsUnit: '개'
    },
    Upload: {
        uploading: '업로드 중...',
        removeFile: '파일 삭제',
        uploadError: '업로드 실패',
        previewFile: '파일 미리보기'
    },
    Empty: {
        description: '데이터 없음'
    }
};

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
var Calendar$q = {
    today: 'Îro',
    now: 'Niha',
    backToToday: 'Vegere îro',
    ok: 'Temam',
    clear: 'Paqij bike',
    month: 'Meh',
    year: 'Sal',
    timeSelect: 'Demê hilbijêre',
    dateSelect: 'Dîrok hilbijêre',
    monthSelect: 'Meh hilbijêre',
    yearSelect: 'Sal hilbijêre',
    decadeSelect: 'Dehsal hilbijêre',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Meha peş (PageUp))',
    nextMonth: 'Meha paş (PageDown)',
    previousYear: 'Sala peş (Control + şep)',
    nextYear: 'Sala paş (Control + rast)',
    previousDecade: 'Dehsalen peş',
    nextDecade: 'Dehsalen paş',
    previousCentury: 'Sedsalen peş',
    nextCentury: 'Sedsalen paş'
};

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
const locale$Q = {
    placeholder: 'Demê hilbijêre'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$R = {
    lang: Object.assign({ placeholder: 'Dîrok hilbijêre', rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn'] }, Calendar$q),
    timePickerLocale: Object.assign({}, locale$Q)
};

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
var Pagination$q = {
    // Options.jsx
    items_per_page: '/ rûpel',
    jump_to: 'Biçe',
    jump_to_confirm: 'piştrast bike',
    page: '',
    // Pagination.jsx
    prev_page: 'Rûpelê Pêş',
    next_page: 'Rûpelê Paş',
    prev_5: '5 Rûpelên Pêş',
    next_5: '5 Rûpelên Paş',
    prev_3: '3 Rûpelên Pêş',
    next_3: '3 Rûpelên Paş'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ku_IQ = {
    locale: 'ku-iq',
    Pagination: Pagination$q,
    DatePicker: locale$R,
    TimePicker: locale$Q,
    Calendar: Calendar$q,
    Table: {
        filterTitle: 'Menuê peldanka',
        filterConfirm: 'Temam',
        filterReset: 'Jê bibe',
        selectAll: 'Hemî hilbijêre',
        selectInvert: 'Hilbijartinan veguhere'
    },
    Modal: {
        okText: 'Temam',
        cancelText: 'Betal ke',
        justOkText: 'Temam'
    },
    Popconfirm: {
        okText: 'Temam',
        cancelText: 'Betal ke'
    },
    Transfer: {
        searchPlaceholder: 'Lêgerîn',
        itemUnit: 'tişt',
        itemsUnit: 'tişt'
    },
    Upload: {
        uploading: 'Bardike...',
        removeFile: 'Pelê rabike',
        uploadError: 'Xeta barkirine',
        previewFile: 'Pelê pêşbibîne'
    },
    Empty: {
        description: 'Agahî tune'
    }
};

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
var Calendar$r = {
    today: 'Šodien',
    now: 'Tagad',
    backToToday: 'Atpakaļ pie šodienas',
    ok: 'Ok',
    clear: 'Skaidrs',
    month: 'Mēnesis',
    year: 'Gads',
    timeSelect: 'Izvēlieties laiku',
    dateSelect: 'Izvēlieties datumu',
    monthSelect: 'Izvēlieties mēnesi',
    yearSelect: 'Izvēlieties gadu',
    decadeSelect: 'Izvēlieties desmit gadus',
    yearFormat: 'YYYY',
    dateFormat: 'D.M.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D.M.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Iepriekšējais mēnesis (PageUp)',
    nextMonth: 'Nākammēnes (PageDown)',
    previousYear: 'Pagājušais gads (Control + left)',
    nextYear: 'Nākamgad (Control + right)',
    previousDecade: 'Pēdējā desmitgadē',
    nextDecade: 'Nākamā desmitgade',
    previousCentury: 'Pagājušajā gadsimtā',
    nextCentury: 'Nākamajā gadsimtā'
};

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
const locale$S = {
    placeholder: 'Izvēlieties laiku'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$T = {
    lang: Object.assign({ placeholder: 'Izvēlieties datumu', rangePlaceholder: ['Sākuma datums', 'Beigu datums'] }, Calendar$r),
    timePickerLocale: Object.assign({}, locale$S)
};

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
var Pagination$r = {
    // Options.jsx
    items_per_page: '/ lappuse',
    jump_to: 'iet uz',
    jump_to_confirm: 'apstiprināt',
    page: '',
    // Pagination.jsx
    prev_page: 'Iepriekšējā lapa',
    next_page: 'Nākamā lapaspuse',
    prev_5: 'Iepriekšējās 5 lapas',
    next_5: 'Nākamās 5 lapas',
    prev_3: 'Iepriekšējās 3 lapas',
    next_3: 'Nākamās 3 lapas'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var lv_LV = {
    locale: 'lv',
    Pagination: Pagination$r,
    DatePicker: locale$T,
    TimePicker: locale$S,
    Calendar: Calendar$r,
    Table: {
        filterTitle: 'Filtrēšanas izvēlne',
        filterConfirm: 'OK',
        filterReset: 'Atiestatīt',
        selectAll: 'Atlasiet pašreizējo lapu',
        selectInvert: 'Pārvērst pašreizējo lapu'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Atcelt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Atcelt'
    },
    Transfer: {
        searchPlaceholder: 'Meklēt šeit',
        itemUnit: 'vienumu',
        itemsUnit: 'vienumus'
    },
    Upload: {
        uploading: 'Augšupielāde...',
        removeFile: 'Noņemt failu',
        uploadError: 'Augšupielādes kļūda',
        previewFile: 'Priekšskatiet failu'
    },
    Empty: {
        description: 'Nav datu'
    }
};

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
var Calendar$s = {
    today: 'Өнөөдөр',
    now: 'Одоо',
    backToToday: 'Өнөөдөрлүү буцах',
    ok: 'Ok',
    clear: 'Цэвэрлэх',
    month: 'Сар',
    year: 'Жил',
    timeSelect: 'Цаг сонгох',
    dateSelect: 'Огноо сонгох',
    weekSelect: '7 хоног сонгох',
    monthSelect: 'Сар сонгох',
    yearSelect: 'Жил сонгох',
    decadeSelect: 'Арван сонгох',
    yearFormat: 'YYYY',
    dateFormat: 'YYYY/MM/DD',
    dayFormat: 'DD',
    dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Өмнөх сар (PageUp)',
    nextMonth: 'Дараа сар (PageDown)',
    previousYear: 'Өмнөх жил (Control + left)',
    nextYear: 'Дараа жил (Control + right)',
    previousDecade: 'Өмнөх арван',
    nextDecade: 'Дараа арван',
    previousCentury: 'Өмнөх зуун',
    nextCentury: 'Дараа зуун'
};

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
const locale$U = {
    placeholder: 'Цаг сонгох'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$V = {
    lang: Object.assign({ placeholder: 'Огноо сонгох', rangePlaceholder: ['Эхлэх огноо', 'Дуусах огноо'] }, Calendar$s),
    timePickerLocale: Object.assign({}, locale$U)
};

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
var Pagination$s = {
    // Options.jsx
    items_per_page: '/ хуудас',
    jump_to: 'Шилжих',
    jump_to_confirm: 'сонгох',
    page: '',
    // Pagination.jsx
    prev_page: 'Өмнөх хуудас',
    next_page: 'Дараагийн хуудас',
    prev_5: 'Дараагийн 5 хуудас',
    next_5: 'Дараагийн 5 хуудас',
    prev_3: 'Дараагийн 3 хуудас',
    next_3: 'Дараагийн 3 хуудас'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var mn_MN = {
    locale: 'mn-mn',
    Pagination: Pagination$s,
    DatePicker: locale$V,
    TimePicker: locale$U,
    Calendar: Calendar$s,
    Table: {
        filterTitle: 'Хайх цэс',
        filterConfirm: 'OK',
        filterReset: 'Цэвэрлэх',
        selectAll: 'Бүгдийг сонгох',
        selectInvert: 'Бусдыг сонгох'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Цуцлах',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Цуцлах'
    },
    Transfer: {
        searchPlaceholder: 'Хайх',
        itemUnit: 'Зүйл',
        itemsUnit: 'Зүйлүүд'
    },
    Upload: {
        uploading: 'Хуулж байна...',
        removeFile: 'Файл устгах',
        uploadError: 'Хуулахад алдаа гарлаа',
        previewFile: 'Файлыг түргэн үзэх'
    },
    Empty: {
        description: 'Мэдээлэл байхгүй байна'
    }
};

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
var Calendar$t = {
    today: 'Hari ini',
    now: 'Sekarang',
    backToToday: 'Kembali ke hari ini',
    ok: 'Ok',
    timeSelect: 'Pilih masa',
    dateSelect: 'Pilih tarikh',
    weekSelect: 'Pilih minggu',
    clear: 'Padam',
    month: 'Bulan',
    year: 'Tahun',
    previousMonth: 'Bulan lepas',
    nextMonth: 'Bulan depan',
    monthSelect: 'Pilih bulan',
    yearSelect: 'Pilih tahun',
    decadeSelect: 'Pilih dekad',
    yearFormat: 'YYYY',
    dayFormat: 'D',
    dateFormat: 'M/D/YYYY',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    previousYear: 'Tahun lepas (Ctrl+left)',
    nextYear: 'Tahun depan (Ctrl+right)',
    previousDecade: 'Dekad lepas',
    nextDecade: 'Dekad depan',
    previousCentury: 'Abad lepas',
    nextCentury: 'Abad depan'
};

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
const locale$W = {
    placeholder: 'Sila pilih masa'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$X = {
    lang: Object.assign({ placeholder: 'Pilih tarikh', rangePlaceholder: ['Tarikh mula', 'Tarikh akhir'] }, Calendar$t),
    timePickerLocale: Object.assign({}, locale$W)
};

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
var Pagination$t = {
    // Options.jsx
    items_per_page: '/ halaman',
    jump_to: 'Lompat ke',
    jump_to_confirm: 'Sahkan',
    page: '',
    // Pagination.jsx
    prev_page: 'Halaman sebelumnya',
    next_page: 'Halam seterusnya',
    prev_5: '5 halaman sebelum',
    next_5: '5 halaman seterusnya',
    prev_3: '3 halaman sebelumnya',
    next_3: '3 halaman seterusnya'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ms_MY = {
    locale: 'ms-my',
    Pagination: Pagination$t,
    DatePicker: locale$X,
    TimePicker: locale$W,
    Calendar: Calendar$t,
    global: {
        placeholder: 'Sila pilih'
    },
    PageHeader: {
        back: 'Kembali'
    },
    Text: {
        edit: 'Sunting',
        copy: 'Salin',
        copied: 'Berjaya menyalin',
        expand: 'Kembang'
    },
    Empty: {
        description: 'Tiada data'
    },
    Table: {
        filterTitle: 'Cari dengan tajuk',
        filterConfirm: 'Ok',
        filterReset: 'Menetapkan semula',
        emptyText: 'Tiada data',
        selectAll: 'Pilih semua',
        selectInvert: 'Terbalikkan'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Batal',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Batal'
    },
    Transfer: {
        notFoundContent: 'Tidak dijumpai',
        searchPlaceholder: 'Carian di sini',
        itemUnit: 'item',
        itemsUnit: 'item'
    },
    Icon: {
        icon: 'ikon'
    },
    Select: {
        notFoundContent: 'Tidak Dijumpai'
    },
    Upload: {
        uploading: 'Sedang memuat naik...',
        removeFile: 'Buang fail',
        uploadError: 'Masalah muat naik',
        previewFile: 'Tengok fail'
    }
};

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
var Calendar$u = {
    today: 'I dag',
    now: 'Nå',
    backToToday: 'Gå til i dag',
    ok: 'Ok',
    clear: 'Annuller',
    month: 'Måned',
    year: 'År',
    timeSelect: 'Velg tidspunkt',
    dateSelect: 'Velg dato',
    monthSelect: 'Velg måned',
    yearSelect: 'Velg år',
    decadeSelect: 'Velg årti',
    yearFormat: 'YYYY',
    dateFormat: 'DD.MM.YYYY',
    dayFormat: 'DD',
    dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Forrige måned(PageUp)',
    nextMonth: 'Neste måned (PageDown)',
    previousYear: 'Forrige år (Control + left)',
    nextYear: 'Neste år (Control + right)',
    previousDecade: 'Forrige tiår',
    nextDecade: 'Neste tiår',
    previousCentury: 'Forrige århundre',
    nextCentury: 'Neste århundre'
};

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
const locale$Y = {
    placeholder: 'Velg tid'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$Z = {
    lang: Object.assign({ placeholder: 'Velg dato', rangePlaceholder: ['Startdato', 'Sluttdato'] }, Calendar$u),
    timePickerLocale: Object.assign({}, locale$Y)
};

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
var Pagination$u = {
    // Options.jsx
    items_per_page: '/ side',
    jump_to: 'Gå til side',
    page: '',
    // Pagination.jsx
    prev_page: 'Forrige side',
    next_page: 'Neste side',
    prev_5: '5 forrige',
    next_5: '5 neste',
    prev_3: '3 forrige',
    next_3: '3 neste'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var nb_NO = {
    locale: 'nb',
    DatePicker: locale$Z,
    TimePicker: locale$Y,
    Calendar: Calendar$u,
    Pagination: Pagination$u,
    Table: {
        filterTitle: 'Filtermeny',
        filterConfirm: 'OK',
        filterReset: 'Nullstill',
        selectAll: 'Velg alle',
        selectInvert: 'Inverter valg'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Avbryt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Avbryt'
    },
    Transfer: {
        searchPlaceholder: 'Søk her',
        itemUnit: 'element',
        itemsUnit: 'elementer'
    },
    Upload: {
        uploading: 'Laster opp...',
        removeFile: 'Fjern fil',
        uploadError: 'Feil ved opplastning',
        previewFile: 'Forhåndsvisning'
    },
    Empty: {
        description: 'Ingen data'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ne_NP = {
    locale: 'ne-np',
    Pagination: Pagination$9,
    DatePicker: locale$j,
    TimePicker: locale$i,
    Calendar: Calendar$9,
    Table: {
        filterTitle: 'फिल्टर मेनु',
        filterConfirm: 'हो',
        filterReset: 'रीसेट',
        selectAll: 'सबै छान्नुुहोस्',
        selectInvert: 'छनौट उल्टाउनुहोस'
    },
    Modal: {
        okText: 'हो',
        cancelText: 'होईन',
        justOkText: 'हो'
    },
    Popconfirm: {
        okText: 'हो',
        cancelText: 'होईन'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'यहाँ खोज्नुहोस्',
        itemUnit: 'वस्तु',
        itemsUnit: 'वस्तुहरू'
    },
    Upload: {
        uploading: 'अपलोड गर्दै...',
        removeFile: 'फाइल हटाउनुहोस्',
        uploadError: 'अप्लोडमा समस्या भयो',
        previewFile: 'फाइल पूर्वावलोकन गर्नुहोस्'
    },
    Empty: {
        description: 'डाटा छैन'
    }
};

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
var Calendar$v = {
    today: 'Vandaag',
    now: 'Nu',
    backToToday: 'Terug naar vandaag',
    ok: 'Ok',
    clear: 'Reset',
    month: 'Maand',
    year: 'Jaar',
    timeSelect: 'Selecteer tijd',
    dateSelect: 'Selecteer datum',
    monthSelect: 'Kies een maand',
    yearSelect: 'Kies een jaar',
    decadeSelect: 'Kies een decennium',
    yearFormat: 'YYYY',
    dateFormat: 'D-M-YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D-M-YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Vorige maand (PageUp)',
    nextMonth: 'Volgende maand (PageDown)',
    previousYear: 'Vorig jaar (Control + left)',
    nextYear: 'Volgend jaar (Control + right)',
    previousDecade: 'Vorig decennium',
    nextDecade: 'Volgend decennium',
    previousCentury: 'Vorige eeuw',
    nextCentury: 'Volgende eeuw'
};

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
const locale$_ = {
    placeholder: 'Selecteer tijd'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$$ = {
    lang: Object.assign({ placeholder: 'Selecteer datum', rangePlaceholder: ['Begin datum', 'Eind datum'] }, Calendar$v),
    timePickerLocale: Object.assign({}, locale$_)
};

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
var Pagination$v = {
    // Options.jsx
    items_per_page: '/ pagina',
    jump_to: 'Ga naar',
    jump_to_confirm: 'bevestigen',
    page: '',
    // Pagination.jsx
    prev_page: 'Vorige pagina',
    next_page: 'Volgende pagina',
    prev_5: 'Vorige 5 pagina\'s',
    next_5: 'Volgende 5 pagina\'s',
    prev_3: 'Vorige 3 pagina\'s',
    next_3: 'Volgende 3 pagina\'s'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var nl_BE = {
    locale: 'nl-be',
    Pagination: Pagination$v,
    DatePicker: locale$$,
    TimePicker: locale$_,
    Calendar: Calendar$v,
    Table: {
        filterTitle: 'FilterMenu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Selecteer huidige pagina',
        selectInvert: 'Selecteer huidige pagina'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuleer',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuleer'
    },
    Transfer: {
        searchPlaceholder: 'Zoek hier',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Uploaden...',
        removeFile: 'Bestand verwijderen',
        uploadError: 'Upload fout',
        previewFile: 'Preview bestand'
    },
    Empty: {
        description: 'Geen gegevens'
    }
};

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
var Calendar$w = {
    today: 'Vandaag',
    now: 'Nu',
    backToToday: 'Terug naar vandaag',
    ok: 'Ok',
    clear: 'Reset',
    month: 'Maand',
    year: 'Jaar',
    timeSelect: 'Selecteer tijd',
    dateSelect: 'Selecteer datum',
    monthSelect: 'Kies een maand',
    yearSelect: 'Kies een jaar',
    decadeSelect: 'Kies een decennium',
    yearFormat: 'YYYY',
    dateFormat: 'D-M-YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D-M-YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Vorige maand (PageUp)',
    nextMonth: 'Volgende maand (PageDown)',
    previousYear: 'Vorig jaar (Control + left)',
    nextYear: 'Volgend jaar (Control + right)',
    previousDecade: 'Vorig decennium',
    nextDecade: 'Volgend decennium',
    previousCentury: 'Vorige eeuw',
    nextCentury: 'Volgende eeuw'
};

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
const locale$10 = {
    placeholder: 'Selecteer tijd'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$11 = {
    lang: Object.assign({ placeholder: 'Selecteer datum', rangePlaceholder: ['Begin datum', 'Eind datum'] }, Calendar$w),
    timePickerLocale: Object.assign({}, locale$10)
};

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
var Pagination$w = {
    // Options.jsx
    items_per_page: '/ pagina',
    jump_to: 'Ga naar',
    jump_to_confirm: 'bevestigen',
    page: '',
    // Pagination.jsx
    prev_page: 'Vorige pagina',
    next_page: 'Volgende pagina',
    prev_5: 'Vorige 5 pagina\'s',
    next_5: 'Volgende 5 pagina\'s',
    prev_3: 'Vorige 3 pagina\'s',
    next_3: 'Volgende 3 pagina\'s'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var nl_NL = {
    locale: 'nl',
    Pagination: Pagination$w,
    DatePicker: locale$11,
    TimePicker: locale$10,
    Calendar: Calendar$w,
    Table: {
        filterTitle: 'Filteren',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Selecteer huidige pagina',
        selectInvert: 'Deselecteer huidige pagina'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuleren',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuleren'
    },
    Transfer: {
        searchPlaceholder: 'Zoeken',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Uploaden...',
        removeFile: 'Verwijder bestand',
        uploadError: 'Fout tijdens uploaden',
        previewFile: 'Bekijk bestand'
    },
    Empty: {
        description: 'Geen gegevens'
    }
};

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
var Calendar$x = {
    today: 'Dzisiaj',
    now: 'Teraz',
    backToToday: 'Ustaw dzisiaj',
    ok: 'Ok',
    clear: 'Wyczyść',
    month: 'Miesiąc',
    year: 'Rok',
    timeSelect: 'Ustaw czas',
    dateSelect: 'Ustaw datę',
    monthSelect: 'Wybierz miesiąc',
    yearSelect: 'Wybierz rok',
    decadeSelect: 'Wybierz dekadę',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Poprzedni miesiąc (PageUp)',
    nextMonth: 'Następny miesiąc (PageDown)',
    previousYear: 'Ostatni rok (Ctrl + left)',
    nextYear: 'Następny rok (Ctrl + right)',
    previousDecade: 'Ostatnia dekada',
    nextDecade: 'Następna dekada',
    previousCentury: 'Ostatni wiek',
    nextCentury: 'Następny wiek'
};

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
const locale$12 = {
    placeholder: 'Wybierz godzinę'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$13 = {
    lang: Object.assign({ placeholder: 'Wybierz datę', rangePlaceholder: ['Data początkowa', 'Data końcowa'] }, Calendar$x),
    timePickerLocale: Object.assign({}, locale$12)
};

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
var Pagination$x = {
    // Options.jsx
    items_per_page: '/ stronę',
    jump_to: 'Idź do',
    jump_to_confirm: 'potwierdzać',
    page: '',
    // Pagination.jsx
    prev_page: 'Poprzednia strona',
    next_page: 'Następna strona',
    prev_5: 'Poprzednie 5 stron',
    next_5: 'Następne 5 stron',
    prev_3: 'Poprzednie 3 strony',
    next_3: 'Następne 3 strony'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var pl_PL = {
    locale: 'pl',
    Pagination: Pagination$x,
    DatePicker: locale$13,
    TimePicker: locale$12,
    Calendar: Calendar$x,
    Table: {
        filterTitle: 'Menu filtra',
        filterConfirm: 'OK',
        filterReset: 'Wyczyść',
        selectAll: 'Zaznacz bieżącą stronę',
        selectInvert: 'Odwróć zaznaczenie'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Anuluj',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Anuluj'
    },
    Transfer: {
        searchPlaceholder: 'Szukaj',
        itemUnit: 'obiekt',
        itemsUnit: 'obiekty'
    },
    Upload: {
        uploading: 'Wysyłanie...',
        removeFile: 'Usuń plik',
        uploadError: 'Błąd wysyłania',
        previewFile: 'Podejrzyj plik'
    },
    Empty: {
        description: 'Brak danych'
    }
};

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
var Calendar$y = {
    today: 'Hoje',
    now: 'Agora',
    backToToday: 'Voltar para hoje',
    ok: 'Ok',
    clear: 'Limpar',
    month: 'Mês',
    year: 'Ano',
    timeSelect: 'Selecionar tempo',
    dateSelect: 'Selecionar data',
    monthSelect: 'Escolher mês',
    yearSelect: 'Escolher ano',
    decadeSelect: 'Escolher década',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: false,
    previousMonth: 'Mês anterior (PageUp)',
    nextMonth: 'Próximo mês (PageDown)',
    previousYear: 'Ano anterior (Control + esquerda)',
    nextYear: 'Próximo ano (Control + direita)',
    previousDecade: 'Década anterior',
    nextDecade: 'Próxima década',
    previousCentury: 'Século anterior',
    nextCentury: 'Próximo século'
};

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
const locale$14 = {
    placeholder: 'Hora'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$15 = {
    lang: Object.assign({ placeholder: 'Selecionar data', rangePlaceholder: ['Data de início', 'Data de fim'] }, Calendar$y),
    timePickerLocale: Object.assign({}, locale$14)
};

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
var Pagination$y = {
    // Options.jsx
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',
    // Pagination.jsx
    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var pt_BR = {
    locale: 'pt-br',
    Pagination: Pagination$y,
    DatePicker: locale$15,
    TimePicker: locale$14,
    Calendar: Calendar$y,
    Table: {
        filterTitle: 'Filtro',
        filterConfirm: 'OK',
        filterReset: 'Resetar',
        selectAll: 'Selecionar página atual',
        selectInvert: 'Inverter seleção'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancelar',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancelar'
    },
    Transfer: {
        searchPlaceholder: 'Procurar',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Enviando...',
        removeFile: 'Remover arquivo',
        uploadError: 'Erro no envio',
        previewFile: 'Visualizar arquivo'
    },
    Empty: {
        description: 'Não há dados'
    }
};

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
var Calendar$z = {
    today: 'Hoje',
    now: 'Agora',
    backToToday: 'Hoje',
    ok: 'Ok',
    clear: 'Limpar',
    month: 'Mês',
    year: 'Ano',
    timeSelect: 'Selecionar hora',
    dateSelect: 'Selecionar data',
    monthSelect: 'Selecionar mês',
    yearSelect: 'Selecionar ano',
    decadeSelect: 'Selecionar década',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Mês anterior (PageUp)',
    nextMonth: 'Mês seguinte (PageDown)',
    previousYear: 'Ano anterior (Control + left)',
    nextYear: 'Ano seguinte (Control + right)',
    previousDecade: 'Década anterior',
    nextDecade: 'Década seguinte',
    previousCentury: 'Século anterior',
    nextCentury: 'Século seguinte'
};

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
const locale$16 = {
    placeholder: 'Hora'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$17 = {
    lang: Object.assign({}, Calendar$z, { placeholder: 'Data', rangePlaceholder: ['Data inicial', 'Data final'], today: 'Hoje', now: 'Agora', backToToday: 'Hoje', ok: 'Ok', clear: 'Limpar', month: 'Mês', year: 'Ano', timeSelect: 'Hora', dateSelect: 'Selecionar data', monthSelect: 'Selecionar mês', yearSelect: 'Selecionar ano', decadeSelect: 'Selecionar década', yearFormat: 'YYYY', dateFormat: 'D/M/YYYY', dayFormat: 'D', dateTimeFormat: 'D/M/YYYY HH:mm:ss', monthFormat: 'MMMM', monthBeforeYear: false, previousMonth: 'Mês anterior (PageUp)', nextMonth: 'Mês seguinte (PageDown)', previousYear: 'Ano anterior (Control + left)', nextYear: 'Ano seguinte (Control + right)', previousDecade: 'Última década', nextDecade: 'Próxima década', previousCentury: 'Último século', nextCentury: 'Próximo século' }),
    timePickerLocale: Object.assign({}, locale$16, { placeholder: 'Hora' })
};

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
var Pagination$z = {
    // Options.jsx
    items_per_page: '/ página',
    jump_to: 'Saltar',
    jump_to_confirm: 'confirmar',
    page: '',
    // Pagination.jsx
    prev_page: 'Página Anterior',
    next_page: 'Página Seguinte',
    prev_5: 'Recuar 5 Páginas',
    next_5: 'Avançar 5 Páginas',
    prev_3: 'Recuar 3 Páginas',
    next_3: 'Avançar 3 Páginas'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var pt_PT = {
    locale: 'pt',
    Pagination: Pagination$z,
    DatePicker: locale$17,
    TimePicker: locale$16,
    Calendar: Calendar$z,
    Table: {
        filterTitle: 'Filtro',
        filterConfirm: 'Aplicar',
        filterReset: 'Reiniciar',
        selectAll: 'Selecionar página atual',
        selectInvert: 'Inverter seleção',
        sortTitle: 'Ordenação'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancelar',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancelar'
    },
    Transfer: {
        searchPlaceholder: 'Procurar...',
        itemUnit: 'item',
        itemsUnit: 'itens'
    },
    Upload: {
        uploading: 'A carregar...',
        removeFile: 'Remover',
        uploadError: 'Erro ao carregar',
        previewFile: 'Pré-visualizar'
    },
    Empty: {
        description: 'Sem resultados'
    }
};

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
var Calendar$A = {
    today: 'Azi',
    now: 'Acum',
    backToToday: 'Înapoi la azi',
    ok: 'Ok',
    clear: 'Șterge',
    month: 'Lună',
    year: 'An',
    timeSelect: 'selectează timpul',
    dateSelect: 'selectează data',
    weekSelect: 'Alege o săptămână',
    monthSelect: 'Alege o lună',
    yearSelect: 'Alege un an',
    decadeSelect: 'Alege un deceniu',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Luna anterioară (PageUp)',
    nextMonth: 'Luna următoare (PageDown)',
    previousYear: 'Anul anterior (Control + stânga)',
    nextYear: 'Anul următor (Control + dreapta)',
    previousDecade: 'Deceniul anterior',
    nextDecade: 'Deceniul următor',
    previousCentury: 'Secolul anterior',
    nextCentury: 'Secolul următor'
};

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
const locale$18 = {
    placeholder: 'Selectează ora'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$19 = {
    lang: Object.assign({ placeholder: 'Selectează data', rangePlaceholder: ['Data start', 'Data sfârșit'] }, Calendar$A),
    timePickerLocale: Object.assign({}, locale$18)
};

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
var Pagination$A = {
    // Options.jsx
    items_per_page: '/ pagină',
    jump_to: 'Mergi la',
    jump_to_confirm: 'confirm',
    page: '',
    // Pagination.jsx
    prev_page: 'Pagina Anterioară',
    next_page: 'Pagina Următoare',
    prev_5: '5 Pagini Anterioare',
    next_5: '5 Pagini Următoare',
    prev_3: '3 Pagini Anterioare',
    next_3: '3 Pagini Următoare'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ro_RO = {
    locale: 'ro',
    Pagination: Pagination$A,
    DatePicker: locale$19,
    TimePicker: locale$18,
    Calendar: Calendar$A,
    global: {
        placeholder: 'Selectează'
    },
    Table: {
        filterTitle: 'Filtrează',
        filterConfirm: 'OK',
        filterReset: 'Resetează',
        selectAll: 'Selectează pagina curentă',
        selectInvert: 'Inversează pagina curentă',
        sortTitle: 'Ordonează',
        expand: 'Extinde rândul',
        collapse: 'Micșorează rândul'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Anulare',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Anulare'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Căutare',
        itemUnit: 'element',
        itemsUnit: 'elemente'
    },
    Upload: {
        uploading: 'Se transferă...',
        removeFile: 'Înlătură fișierul',
        uploadError: 'Eroare la upload',
        previewFile: 'Previzualizare fișier'
    },
    Empty: {
        description: 'Fără date'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'editează',
        copy: 'copiază',
        copied: 'copiat',
        expand: 'extinde'
    },
    PageHeader: {
        back: 'înapoi'
    }
};

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
var Calendar$B = {
    today: 'Сегодня',
    now: 'Сейчас',
    backToToday: 'Текущая дата',
    ok: 'Ok',
    clear: 'Очистить',
    month: 'Месяц',
    year: 'Год',
    timeSelect: 'Выбрать время',
    dateSelect: 'Выбрать дату',
    monthSelect: 'Выбрать месяц',
    yearSelect: 'Выбрать год',
    decadeSelect: 'Выбрать десятилетие',
    yearFormat: 'YYYY',
    dateFormat: 'D-M-YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D-M-YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Предыдущий месяц (PageUp)',
    nextMonth: 'Следующий месяц (PageDown)',
    previousYear: 'Предыдущий год (Control + left)',
    nextYear: 'Следующий год (Control + right)',
    previousDecade: 'Предыдущее десятилетие',
    nextDecade: 'Следущее десятилетие',
    previousCentury: 'Предыдущий век',
    nextCentury: 'Следующий век'
};

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
 * Created by Andrey Gayvoronsky on 13/04/16.
 * @type {?}
 */
const locale$1a = {
    placeholder: 'Выберите время'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const locale$1b = {
    lang: Object.assign({ placeholder: 'Выберите дату', rangePlaceholder: ['Начальная дата', 'Конечная дата'] }, Calendar$B),
    timePickerLocale: Object.assign({}, locale$1a)
};

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
var Pagination$B = {
    // Options.jsx
    items_per_page: '/ стр.',
    jump_to: 'Перейти',
    jump_to_confirm: 'подтвердить',
    page: '',
    // Pagination.jsx
    prev_page: 'Назад',
    next_page: 'Вперед',
    prev_5: 'Предыдущие 5',
    next_5: 'Следующие 5',
    prev_3: 'Предыдущие 3',
    next_3: 'Следующие 3'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ru_RU = {
    locale: 'ru',
    Pagination: Pagination$B,
    DatePicker: locale$1b,
    TimePicker: locale$1a,
    Calendar: Calendar$B,
    global: {
        placeholder: 'Пожалуйста, выберите'
    },
    Table: {
        filterTitle: 'Фильтр',
        filterConfirm: 'OK',
        filterReset: 'Сбросить',
        selectAll: 'Выбрать всё',
        selectInvert: 'Инвертировать выбор',
        sortTitle: 'Сортировка'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Отмена',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Отмена'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Поиск',
        itemUnit: 'элем.',
        itemsUnit: 'элем.'
    },
    Upload: {
        uploading: 'Загрузка...',
        removeFile: 'Удалить файл',
        uploadError: 'При загрузке произошла ошибка',
        previewFile: 'Предпросмотр файла'
    },
    Empty: {
        description: 'Нет данных'
    },
    Icon: {
        icon: 'иконка'
    },
    Text: {
        edit: 'редактировать',
        copy: 'копировать',
        copied: 'скопировано',
        expand: 'раскрыть'
    },
    PageHeader: {
        back: 'назад'
    }
};

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
var Calendar$C = {
    today: 'Dnes',
    now: 'Teraz',
    backToToday: 'Späť na dnes',
    ok: 'Ok',
    clear: 'Vymazať',
    month: 'Mesiac',
    year: 'Rok',
    timeSelect: 'Vybrať čas',
    dateSelect: 'Vybrať dátum',
    monthSelect: 'Vybrať mesiac',
    yearSelect: 'Vybrať rok',
    decadeSelect: 'Vybrať dekádu',
    yearFormat: 'YYYY',
    dateFormat: 'D.M.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D.M.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Predchádzajúci mesiac (PageUp)',
    nextMonth: 'Nasledujúci mesiac (PageDown)',
    previousYear: 'Predchádzajúci rok (Control + left)',
    nextYear: 'Nasledujúci rok (Control + right)',
    previousDecade: 'Predchádzajúca dekáda',
    nextDecade: 'Nasledujúca dekáda',
    previousCentury: 'Predchádzajúce storočie',
    nextCentury: 'Nasledujúce storočie'
};

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
const locale$1c = {
    placeholder: 'Vybrať čas'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// 统一合并为完整的 Locale
/** @type {?} */
const locale$1d = {
    lang: Object.assign({ placeholder: 'Vybrať dátum', rangePlaceholder: ['Od', 'Do'] }, Calendar$C),
    timePickerLocale: Object.assign({}, locale$1c)
};

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
var Pagination$C = {
    // Options.jsx
    items_per_page: '/ strana',
    jump_to: 'Choď na',
    jump_to_confirm: 'potvrdit',
    page: '',
    // Pagination.jsx
    prev_page: 'Predchádzajúca strana',
    next_page: 'Nasledujúca strana',
    prev_5: 'Predchádzajúcich 5 strán',
    next_5: 'Nasledujúcich 5 strán',
    prev_3: 'Predchádzajúce 3 strany',
    next_3: 'Nasledujúce 3 strany'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var sk_SK = {
    locale: 'sk',
    Pagination: Pagination$C,
    DatePicker: locale$1d,
    TimePicker: locale$1c,
    Calendar: Calendar$C,
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'OK',
        filterReset: 'Obnoviť',
        selectAll: 'Vybrať všetko',
        selectInvert: 'Vybrať opačné'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Zrušiť',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Zrušiť'
    },
    Transfer: {
        searchPlaceholder: 'Vyhľadávanie',
        itemUnit: 'položka',
        itemsUnit: 'položiek'
    },
    Upload: {
        uploading: 'Nahrávanie...',
        removeFile: 'Odstrániť súbor',
        uploadError: 'Chyba pri nahrávaní',
        previewFile: 'Zobraziť súbor'
    },
    Empty: {
        description: 'Žiadne dáta'
    }
};

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
var Calendar$D = {
    today: 'Danes',
    now: 'Trenutno',
    backToToday: 'Nazaj na danes',
    ok: 'V redu',
    clear: 'Počisti',
    month: 'Mesec',
    year: 'Leto',
    timeSelect: 'Izberite čas',
    dateSelect: 'Izberite datum',
    monthSelect: 'Izberite mesec',
    yearSelect: 'Izberite leto',
    decadeSelect: 'Izberite desetletje',
    yearFormat: 'YYYY',
    dateFormat: 'DD.MM.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Prejšnji mesec (PageUp)',
    nextMonth: 'Naslednji mesec (PageDown)',
    previousYear: 'Prejšnje leto (Control + left)',
    nextYear: 'Naslednje leto (Control + right)',
    previousDecade: 'Prejšnje desetletje',
    nextDecade: 'Naslednje desetletje',
    previousCentury: 'Prejšnje stoletje',
    nextCentury: 'Naslednje stoletje'
};

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
const locale$1e = {
    placeholder: 'Izberite čas'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$1f = {
    lang: {
        placeholder: 'Izberite datum',
        rangePlaceholder: ['Začetni datum', 'Končni datum'],
        today: 'Danes',
        now: 'Trenutno',
        backToToday: 'Nazaj na trenutni datum',
        ok: 'Ok',
        clear: 'Počisti',
        month: 'Mesec',
        year: 'Leto',
        timeSelect: 'Izberi čas',
        dateSelect: 'Izberi datum',
        monthSelect: 'Izberite mesec',
        yearSelect: 'Izberite leto',
        decadeSelect: 'Izberite desetletje',
        yearFormat: 'YYYY',
        dateFormat: 'D.M.YYYY',
        dayFormat: 'D',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        monthFormat: 'MMMM',
        monthBeforeYear: true,
        previousMonth: 'Prejšnji mesec (PageUp)',
        nextMonth: 'Naslednji mesec (PageDown)',
        previousYear: 'Lansko leto (Control + left)',
        nextYear: 'Naslednje leto (Control + right)',
        previousDecade: 'Prejšnje desetletje',
        nextDecade: 'Naslednje desetletje',
        previousCentury: 'Zadnje stoletje',
        nextCentury: 'Naslednje stoletje'
    },
    timePickerLocale: Object.assign({}, locale$1e)
};

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
var Pagination$D = {
    // Options.jsx
    items_per_page: '/ strani',
    jump_to: 'Pojdi na',
    jump_to_confirm: 'potrdi',
    page: '',
    // Pagination.jsx
    prev_page: 'Prejšnja stran',
    next_page: 'Naslednja stran',
    prev_5: 'Prejšnjih 5 strani',
    next_5: 'Naslednjih 5 strani',
    prev_3: 'Prejšnje 3 strani',
    next_3: 'Naslednje 3 strani'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var sl_SI = {
    locale: 'sl',
    Pagination: Pagination$D,
    DatePicker: locale$1f,
    TimePicker: locale$1e,
    Calendar: Calendar$D,
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'Filtriraj',
        filterReset: 'Pobriši filter',
        selectAll: 'Izberi vse na trenutni strani',
        selectInvert: 'Obrni izbor na trenutni strani'
    },
    Modal: {
        okText: 'V redu',
        cancelText: 'Prekliči',
        justOkText: 'V redu'
    },
    Popconfirm: {
        okText: 'v redu',
        cancelText: 'Prekliči'
    },
    Transfer: {
        searchPlaceholder: 'Išči tukaj',
        itemUnit: 'Objekt',
        itemsUnit: 'Objektov'
    },
    Upload: {
        uploading: 'Nalaganje...',
        removeFile: 'Odstrani datoteko',
        uploadError: 'Napaka pri nalaganju',
        previewFile: 'Predogled datoteke'
    },
    Empty: {
        description: 'Ni podatkov'
    }
};

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
var Calendar$E = {
    today: 'Danas',
    now: 'Sada',
    backToToday: 'Vrati se na danas',
    ok: 'U redu',
    clear: 'Obriši',
    month: 'Mesec',
    year: 'Godina',
    timeSelect: 'Izaberi vreme',
    dateSelect: 'Izaberi datum',
    monthSelect: 'Izaberi mesec',
    yearSelect: 'Izaberi godinu',
    decadeSelect: 'Izaberi deceniju',
    yearFormat: 'YYYY',
    dateFormat: 'DD.MM.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Prethodni mesec (PageUp)',
    nextMonth: 'Sledeći mesec (PageDown)',
    previousYear: 'Prethodna godina (Control + left)',
    nextYear: 'Sledeća godina (Control + right)',
    previousDecade: 'Prethodna decenija',
    nextDecade: 'Sledeća decenija',
    previousCentury: 'Prethodni vek',
    nextCentury: 'Sledeći vek'
};

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
const locale$1g = {
    placeholder: 'Izaberite vreme'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$1h = {
    lang: Object.assign({ placeholder: 'Izaberite datum', rangePlaceholder: ['Početni datum', 'Krajnji datum'] }, Calendar$E),
    timePickerLocale: Object.assign({}, locale$1g)
};

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
var Pagination$E = {
    // Options.jsx
    items_per_page: '/ strani',
    jump_to: 'Idi na',
    page: '',
    // Pagination.jsx
    prev_page: 'Prethodna strana',
    next_page: 'Sledeća strana',
    prev_5: 'Prethodnih 5 Strana',
    next_5: 'Sledećih 5 Strana',
    prev_3: 'Prethodnih 3 Strane',
    next_3: 'Sledećih 3 Strane'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var sr_RS = {
    locale: 'sr',
    Pagination: Pagination$E,
    DatePicker: locale$1h,
    TimePicker: locale$1g,
    Calendar: Calendar$E,
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'Primeni filter',
        filterReset: 'Resetuj filter',
        selectAll: 'Obeleži sve na trenutnoj strani',
        selectInvert: 'Obrni selekciju na trenutnoj stranici'
    },
    Modal: {
        okText: 'U redu',
        cancelText: 'Otkaži',
        justOkText: 'U redu'
    },
    Popconfirm: {
        okText: 'U redu',
        cancelText: 'Otkaži'
    },
    Transfer: {
        searchPlaceholder: 'Pretražite ovde',
        itemUnit: 'stavka',
        itemsUnit: 'stavki'
    },
    Upload: {
        uploading: 'Slanje...',
        removeFile: 'Ukloni fajl',
        uploadError: 'Greška prilikom slanja',
        previewFile: 'Pogledaj fajl'
    },
    Empty: {
        description: 'Nema podataka'
    }
};

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
var Calendar$F = {
    today: 'I dag',
    now: 'Nu',
    backToToday: 'Till idag',
    ok: 'Ok',
    clear: 'Avbryt',
    month: 'Månad',
    year: 'År',
    timeSelect: 'Välj tidpunkt',
    dateSelect: 'Välj datum',
    monthSelect: 'Välj månad',
    yearSelect: 'Välj år',
    decadeSelect: 'Välj årtionde',
    yearFormat: 'YYYY',
    dateFormat: 'YYYY-MM-DD',
    dayFormat: 'D',
    dateTimeFormat: 'YYYY-MM-DD H:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Förra månaden (PageUp)',
    nextMonth: 'Nästa månad (PageDown)',
    previousYear: 'Föreg år (Control + left)',
    nextYear: 'Nästa år (Control + right)',
    previousDecade: 'Föreg årtionde',
    nextDecade: 'Nästa årtionde',
    previousCentury: 'Föreg århundrade',
    nextCentury: 'Nästa århundrade'
};

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
const locale$1i = {
    placeholder: 'Välj tid'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const locale$1j = {
    lang: Object.assign({ placeholder: 'Välj datum', rangePlaceholder: ['Startdatum', 'Slutdatum'] }, Calendar$F),
    timePickerLocale: Object.assign({}, locale$1i)
};

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
var Pagination$F = {
    // Options.jsx
    items_per_page: '/ sida',
    jump_to: 'Gå till',
    jump_to_confirm: 'bekräfta',
    page: '',
    // Pagination.jsx
    prev_page: 'Föreg sida',
    next_page: 'Nästa sida',
    prev_5: 'Föreg 5 sidor',
    next_5: 'Nästa 5 sidor',
    prev_3: 'Föreg 3 sidor',
    next_3: 'Nästa 3 sidor'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var sv_SE = {
    locale: 'sv',
    Pagination: Pagination$F,
    DatePicker: locale$1j,
    TimePicker: locale$1i,
    Calendar: Calendar$F,
    Table: {
        filterTitle: 'Filtermeny',
        filterConfirm: 'OK',
        filterReset: 'Rensa'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Avbryt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Avbryt'
    },
    Transfer: {
        searchPlaceholder: 'Sök',
        itemUnit: 'element',
        itemsUnit: 'element'
    },
    Empty: {
        description: 'Ingen information'
    },
    Text: {
        edit: 'editera',
        copy: 'kopiera',
        copied: 'kopierad',
        expand: 'expandera'
    }
};

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
var Calendar$G = {
    today: 'இன்று',
    now: 'இப்போது',
    backToToday: 'இன்றுக்கு திரும்பு',
    ok: 'சரி',
    clear: 'அழி',
    month: 'மாதம்',
    year: 'வருடம்',
    timeSelect: 'நேரத்தைத் தேர்ந்தெடு',
    dateSelect: 'தேதியைத் தேர்ந்தெடு',
    weekSelect: 'வாரத்தைத் தேர்வுசெய்க',
    monthSelect: 'மாதத்தைத் தேர்வுசெய்க',
    yearSelect: 'வருடத்தைத் தேர்வுசெய்க',
    decadeSelect: 'தசாப்தத்தைத் தேர்வுசெய்க',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'முந்தைய மாதம் (PageUp)',
    nextMonth: 'அடுத்த மாதம் (PageDown)',
    previousYear: 'முந்தைய வருடம் (Control + left)',
    nextYear: 'அடுத்த வருடம் (Control + right)',
    previousDecade: 'முந்தைய தசாப்தம்',
    nextDecade: 'அடுத்த தசாப்தம்',
    previousCentury: 'முந்தைய நூற்றாண்டு',
    nextCentury: 'அடுத்த நூற்றாண்டு'
};

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
const locale$1k = {
    placeholder: 'நேரத்தைத் தேர்ந்தெடுக்கவும்'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$1l = {
    lang: Object.assign({ placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்', rangePlaceholder: ['தொடக்க தேதி', 'கடைசி தேதி'] }, Calendar$G),
    timePickerLocale: Object.assign({}, locale$1k)
};

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
var Pagination$G = {
    // Options.jsx
    items_per_page: '/ பக்கம்',
    jump_to: 'அடுத்த',
    jump_to_confirm: 'உறுதிப்படுத்தவும்',
    page: '',
    // Pagination.jsx
    prev_page: 'முந்தைய பக்கம்',
    next_page: 'அடுத்த பக்கம்',
    prev_5: 'முந்தைய 5 பக்கங்கள்',
    next_5: 'அடுத்த 5 பக்கங்கள்',
    prev_3: 'முந்தைய 3 பக்கங்கள்',
    next_3: 'அடுத்த 3 பக்கங்கள்'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ta_IN = {
    locale: 'ta',
    Pagination: Pagination$G,
    DatePicker: locale$1l,
    TimePicker: locale$1k,
    Calendar: Calendar$G,
    // locales for all comoponents
    global: {
        placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்'
    },
    Table: {
        filterTitle: 'பட்டியலை மூடு',
        filterConfirm: 'சரி',
        filterReset: 'மீட்டமை',
        emptyText: 'தகவல் இல்லை',
        selectAll: 'அனைத்தையும் தேர்வுசெய்',
        selectInvert: 'தலைகீழாக மாற்று',
        sortTitle: 'தலைப்பை வரிசைப்படுத்தவும்'
    },
    Modal: {
        okText: 'சரி',
        cancelText: 'ரத்து செய்யவும்',
        justOkText: 'பரவாயில்லை, சரி'
    },
    Popconfirm: {
        okText: 'சரி',
        cancelText: 'ரத்து செய்யவும்'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'உள்ளடக்கம் கிடைக்கவில்லை',
        searchPlaceholder: 'இங்கு தேடவும்',
        itemUnit: 'தகவல்',
        itemsUnit: 'தகவல்கள்'
    },
    Upload: {
        uploading: 'பதிவேற்றுகிறது...',
        removeFile: 'கோப்பை அகற்று',
        uploadError: 'பதிவேற்றுவதில் பிழை',
        previewFile: 'கோப்பை முன்னோட்டமிடுங்கள்'
    },
    Empty: {
        description: 'தகவல் இல்லை'
    },
    Icon: {
        icon: 'உருவம்'
    },
    Text: {
        edit: 'திருத்து',
        copy: 'நகல் எடு',
        copied: 'நகல் எடுக்கப்பட்டது',
        expand: 'விரிவாக்கவும்'
    },
    PageHeader: {
        back: 'பின் செல்லவும்'
    }
};

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
var Calendar$H = {
    today: 'วันนี้',
    now: 'ตอนนี้',
    backToToday: 'กลับไปยังวันนี้',
    ok: 'ตกลง',
    clear: 'ลบล้าง',
    month: 'เดือน',
    year: 'ปี',
    timeSelect: 'เลือกเวลา',
    dateSelect: 'เลือกวัน',
    monthSelect: 'เลือกเดือน',
    yearSelect: 'เลือกปี',
    decadeSelect: 'เลือกทศวรรษ',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'เดือนก่อนหน้า (PageUp)',
    nextMonth: 'เดือนถัดไป (PageDown)',
    previousYear: 'ปีก่อนหน้า (Control + left)',
    nextYear: 'ปีถัดไป (Control + right)',
    previousDecade: 'ทศวรรษก่อนหน้า',
    nextDecade: 'ทศวรรษถัดไป',
    previousCentury: 'ศตวรรษก่อนหน้า',
    nextCentury: 'ศตวรรษถัดไป'
};

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
const locale$1m = {
    placeholder: 'เลือกเวลา'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$1n = {
    lang: Object.assign({ placeholder: 'เลือกวันที่', rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด'] }, Calendar$H),
    timePickerLocale: Object.assign({}, locale$1m)
};

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
var Pagination$H = {
    // Options.jsx
    items_per_page: '/ หน้า',
    jump_to: 'ไปยัง',
    jump_to_confirm: 'ยืนยัน',
    page: '',
    // Pagination.jsx
    prev_page: 'หน้าก่อนหน้า',
    next_page: 'หน้าถัดไป',
    prev_5: 'ย้อนกลับ 5 หน้า',
    next_5: 'ถัดไป 5 หน้า',
    prev_3: 'ย้อนกลับ 3 หน้า',
    next_3: 'ถัดไป 3 หน้า'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var th_TH = {
    locale: 'th',
    Pagination: Pagination$H,
    DatePicker: locale$1n,
    TimePicker: locale$1m,
    Calendar: Calendar$H,
    Table: {
        filterTitle: 'ตัวกรอง',
        filterConfirm: 'ยืนยัน',
        filterReset: 'รีเซ็ต',
        selectAll: 'เลือกทั้งหมดในหน้านี้',
        selectInvert: 'เลือกสถานะตรงกันข้าม'
    },
    Modal: {
        okText: 'ตกลง',
        cancelText: 'ยกเลิก',
        justOkText: 'ตกลง'
    },
    Popconfirm: {
        okText: 'ตกลง',
        cancelText: 'ยกเลิก'
    },
    Transfer: {
        searchPlaceholder: 'ค้นหา',
        itemUnit: 'ชิ้น',
        itemsUnit: 'ชิ้น'
    },
    Upload: {
        uploading: 'กำลังอัปโหลด...',
        removeFile: 'ลบไฟล์',
        uploadError: 'เกิดข้อผิดพลาดในการอัปโหลด',
        previewFile: 'ดูตัวอย่างไฟล์'
    },
    Empty: {
        description: 'ไม่มีข้อมูล'
    }
};

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
var Calendar$I = {
    today: 'Bugün',
    now: 'Şimdi',
    backToToday: 'Bugüne Geri Dön',
    ok: 'tamam',
    clear: 'Temizle',
    month: 'Ay',
    year: 'Yıl',
    timeSelect: 'Zaman Seç',
    dateSelect: 'Tarih Seç',
    monthSelect: 'Ay Seç',
    yearSelect: 'Yıl Seç',
    decadeSelect: 'On Yıl Seç',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Önceki Ay (PageUp)',
    nextMonth: 'Sonraki Ay (PageDown)',
    previousYear: 'Önceki Yıl (Control + Sol)',
    nextYear: 'Sonraki Yıl (Control + Sağ)',
    previousDecade: 'Önceki On Yıl',
    nextDecade: 'Sonraki On Yıl',
    previousCentury: 'Önceki Yüzyıl',
    nextCentury: 'Sonraki Yüzyıl'
};

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
const locale$1o = {
    placeholder: 'Zaman Seç'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$1p = {
    lang: Object.assign({ placeholder: 'Tarih Seç', rangePlaceholder: ['Başlangıç Tarihi', 'Bitiş Tarihi'] }, Calendar$I),
    timePickerLocale: Object.assign({}, locale$1o)
};

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
var Pagination$I = {
    // Options.jsx
    items_per_page: '/ sayfa',
    jump_to: 'Git',
    jump_to_confirm: 'onayla',
    page: '',
    // Pagination.jsx
    prev_page: 'Önceki Sayfa',
    next_page: 'Sonraki Sayfa',
    prev_5: 'Önceki 5 Sayfa',
    next_5: 'Sonraki 5 Sayfa',
    prev_3: 'Önceki 3 Sayfa',
    next_3: 'Sonraki 3 Sayfa'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var tr_TR = {
    locale: 'tr',
    Pagination: Pagination$I,
    DatePicker: locale$1p,
    TimePicker: locale$1o,
    Calendar: Calendar$I,
    global: {
        placeholder: 'Lütfen seçiniz'
    },
    Table: {
        filterTitle: 'Menü Filtrele',
        filterConfirm: 'Tamam',
        filterReset: 'Sıfırla',
        selectAll: 'Hepsini Seç',
        selectInvert: 'Tersini Seç',
        sortTitle: 'Sırala'
    },
    Modal: {
        okText: 'Tamam',
        cancelText: 'İptal',
        justOkText: 'Tamam'
    },
    Popconfirm: {
        okText: 'Tamam',
        cancelText: 'İptal'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Arama',
        itemUnit: 'Öğe',
        itemsUnit: 'Öğeler'
    },
    Upload: {
        uploading: 'Yükleniyor...',
        removeFile: `Dosyayı kaldır`,
        uploadError: 'Yükleme Hatası',
        previewFile: `Dosyayı Önizle`
    },
    Empty: {
        description: 'Veri Yok'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'düzenle',
        copy: 'kopyala',
        copied: 'kopyalandı',
        expand: 'genişlet'
    }
};

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
var Calendar$J = {
    today: 'Сьогодні',
    now: 'Зараз',
    backToToday: 'Поточна дата',
    ok: 'Ok',
    clear: 'Очистити',
    month: 'Місяць',
    year: 'Рік',
    timeSelect: 'Обрати час',
    dateSelect: 'Обрати дату',
    monthSelect: 'Обрати місяць',
    yearSelect: 'Обрати рік',
    decadeSelect: 'Обрати десятиріччя',
    yearFormat: 'YYYY',
    dateFormat: 'D-M-YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D-M-YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Попередній місяць (PageUp)',
    nextMonth: 'Наступний місяць (PageDown)',
    previousYear: 'Попередній рік (Control + left)',
    nextYear: 'Наступний рік (Control + right)',
    previousDecade: 'Попереднє десятиріччя',
    nextDecade: 'Наступне десятиріччя',
    previousCentury: 'Попереднє століття',
    nextCentury: 'Наступне століття'
};

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
const locale$1q = {
    placeholder: 'Оберіть час'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const locale$1r = {
    lang: Object.assign({ placeholder: 'Оберіть дату', rangePlaceholder: ['Початкова дата', 'Кінцева дата'] }, Calendar$J),
    timePickerLocale: Object.assign({}, locale$1q)
};

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
var Pagination$J = {
    // Options.jsx
    items_per_page: '/ сторінці',
    jump_to: 'Перейти',
    jump_to_confirm: 'підтвердити',
    page: '',
    // Pagination.jsx
    prev_page: 'Попередня сторінка',
    next_page: 'Наступна сторінка',
    prev_5: 'Попередні 5 сторінок',
    next_5: 'Наступні 5 сторінок',
    prev_3: 'Попередні 3 сторінки',
    next_3: 'Наступні 3 сторінки'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var uk_UA = {
    locale: 'uk',
    Pagination: Pagination$J,
    DatePicker: locale$1r,
    TimePicker: locale$1q,
    Calendar: Calendar$J,
    Table: {
        filterTitle: 'Фільтрувати',
        filterConfirm: 'OK',
        filterReset: 'Скинути',
        selectAll: 'Обрати всі',
        selectInvert: 'Інвертувати вибір'
    },
    Modal: {
        okText: 'Гаразд',
        cancelText: 'Скасувати',
        justOkText: 'Гаразд'
    },
    Popconfirm: {
        okText: 'Гаразд',
        cancelText: 'Скасувати'
    },
    Transfer: {
        searchPlaceholder: 'Введіть текст для пошуку',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Завантаження ...',
        removeFile: 'Видалити файл',
        uploadError: 'Помилка завантаження',
        previewFile: 'Попередній перегляд файлу'
    },
    Empty: {
        description: 'Даних немає'
    }
};

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
var Calendar$K = {
    today: 'Hôm nay',
    now: 'Bây giờ',
    backToToday: 'Trở về hôm nay',
    ok: 'Ok',
    clear: 'Xóa',
    month: 'Tháng',
    year: 'Năm',
    timeSelect: 'Chọn thời gian',
    dateSelect: 'Chọn ngày',
    weekSelect: 'Chọn tuần',
    monthSelect: 'Chọn tháng',
    yearSelect: 'Chọn năm',
    decadeSelect: 'Chọn thập kỷ',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Tháng trước (PageUp)',
    nextMonth: 'Tháng sau (PageDown)',
    previousYear: 'Năm trước (Control + left)',
    nextYear: 'Năm sau (Control + right)',
    previousDecade: 'Thập kỷ trước',
    nextDecade: 'Thập kỷ sau',
    previousCentury: 'Thế kỷ trước',
    nextCentury: 'Thế kỷ sau'
};

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
const locale$1s = {
    placeholder: 'Chọn thời gian'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Merge into a locale object
/** @type {?} */
const locale$1t = {
    lang: Object.assign({ placeholder: 'Chọn thời điểm', rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc'] }, Calendar$K),
    timePickerLocale: Object.assign({}, locale$1s)
};

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
var Pagination$K = {
    // Options.jsx
    items_per_page: '/ trang',
    jump_to: 'Đến',
    jump_to_confirm: 'xác nhận',
    page: '',
    // Pagination.jsx
    prev_page: 'Trang Trước',
    next_page: 'Trang Kế',
    prev_5: 'Về 5 Trang Trước',
    next_5: 'Đến 5 Trang Kế',
    prev_3: 'Về 3 Trang Trước',
    next_3: 'Đến 3 Trang Kế'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var vi_VN = {
    locale: 'vi',
    Pagination: Pagination$K,
    DatePicker: locale$1t,
    TimePicker: locale$1s,
    Calendar: Calendar$K,
    Table: {
        filterTitle: 'Bộ ',
        filterConfirm: 'OK',
        filterReset: 'Tạo Lại',
        selectAll: 'Chọn Tất Cả',
        selectInvert: 'Chọn Ngược Lại'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Huỷ',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Huỷ'
    },
    Transfer: {
        searchPlaceholder: 'Tìm ở đây',
        itemUnit: 'mục',
        itemsUnit: 'mục'
    },
    Upload: {
        uploading: 'Đang tải lên...',
        removeFile: 'Gỡ bỏ tập tin',
        uploadError: 'Lỗi tải lên',
        previewFile: 'Xem thử tập tin'
    },
    Empty: {
        description: 'Trống'
    }
};

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
var Calendar$L = {
    today: '今天',
    now: '此刻',
    backToToday: '返回今天',
    ok: '確定',
    timeSelect: '選擇時間',
    dateSelect: '選擇日期',
    clear: '清除',
    month: '月',
    year: '年',
    previousMonth: '上個月 (翻頁上鍵)',
    nextMonth: '下個月 (翻頁下鍵)',
    monthSelect: '選擇月份',
    yearSelect: '選擇年份',
    decadeSelect: '選擇年代',
    yearFormat: 'YYYY年',
    dayFormat: 'D日',
    dateFormat: 'YYYY年M月D日',
    dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
    previousYear: '上一年 (Control鍵加左方向鍵)',
    nextYear: '下一年 (Control鍵加右方向鍵)',
    previousDecade: '上一年代',
    nextDecade: '下一年代',
    previousCentury: '上一世紀',
    nextCentury: '下一世紀'
};

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
const locale$1u = {
    placeholder: '請選擇時間'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const locale$1v = {
    lang: Object.assign({ placeholder: '請選擇日期', rangePlaceholder: ['開始日期', '結束日期'] }, Calendar$L),
    timePickerLocale: Object.assign({}, locale$1u)
};
locale$1v.lang.ok = '確 定';

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
var Pagination$L = {
    // Options.jsx
    items_per_page: '條/頁',
    jump_to: '跳至',
    jump_to_confirm: '確定',
    page: '頁',
    // Pagination.jsx
    prev_page: '上一頁',
    next_page: '下一頁',
    prev_5: '向前 5 頁',
    next_5: '向後 5 頁',
    prev_3: '向前 3 頁',
    next_3: '向後 3 頁'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var zh_TW = {
    locale: 'zh-tw',
    Pagination: Pagination$L,
    DatePicker: locale$1v,
    TimePicker: locale$1u,
    Calendar: Calendar$L,
    // locales for all comoponents
    global: {
        placeholder: '請選擇'
    },
    Table: {
        filterTitle: '篩選器',
        filterConfirm: '確 定',
        filterReset: '重 置',
        selectAll: '全部選取',
        selectInvert: '反向選取'
    },
    Modal: {
        okText: '確 定',
        cancelText: '取 消',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: '確 定',
        cancelText: '取 消'
    },
    Transfer: {
        searchPlaceholder: '搜尋資料',
        itemUnit: '項目',
        itemsUnit: '項目'
    },
    Upload: {
        uploading: '正在上傳...',
        removeFile: '刪除檔案',
        uploadError: '上傳失敗',
        previewFile: '檔案預覽'
    },
    Empty: {
        description: '無此資料'
    },
    Icon: {
        icon: '圖標'
    },
    Text: {
        edit: '編輯',
        copy: '複製',
        copied: '複製成功',
        expand: '展開'
    },
    PageHeader: {
        back: '返回'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DATE_HELPER_SERVICE_FACTORY, DateHelperByDateFns, DateHelperByDatePipe, DateHelperService, NZ_DATE_CONFIG, NZ_DATE_LOCALE, NZ_I18N, NzI18nModule, NzI18nPipe, NzI18nService, ar_EG, bg_BG, ca_ES, cs_CZ, da_DK, de_DE, el_GR, en_GB, en_US, es_ES, et_EE, fa_IR, fi_FI, fr_BE, fr_FR, he_IL, hi_IN, hr_HR, hu_HU, id_ID, is_IS, it_IT, ja_JP, kn_IN, ko_KR, ku_IQ, lv_LV, mn_MN, ms_MY, nb_NO, ne_NP, nl_BE, nl_NL, pl_PL, pt_BR, pt_PT, ro_RO, ru_RU, sk_SK, sl_SI, sr_RS, sv_SE, ta_IN, th_TH, tr_TR, uk_UA, vi_VN, zh_CN, zh_TW };
//# sourceMappingURL=ng-zorro-antd-i18n.js.map
