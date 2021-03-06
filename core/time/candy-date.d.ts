/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { IndexableObject } from '../types';
export declare type CandyDateCompareGrain = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export declare type CandyDateType = CandyDate | Date | null;
export declare function sortRangeValue(rangeValue: CandyDate[]): CandyDate[];
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export declare class CandyDate implements IndexableObject {
    nativeDate: Date;
    constructor(date?: Date | string | number);
    calendarStart(options?: {
        weekStartsOn: number | undefined;
    }): CandyDate;
    getYear(): number;
    getMonth(): number;
    getDay(): number;
    getTime(): number;
    getDate(): number;
    getHours(): number;
    getMinutes(): number;
    getSeconds(): number;
    getMilliseconds(): number;
    clone(): CandyDate;
    setHms(hour: number, minute: number, second: number): CandyDate;
    setYear(year: number): CandyDate;
    addYears(amount: number): CandyDate;
    setMonth(month: number): CandyDate;
    addMonths(amount: number): CandyDate;
    setDay(day: number, options?: {
        weekStartsOn: number;
    }): CandyDate;
    setDate(amount: number): CandyDate;
    addDays(amount: number): CandyDate;
    isSame(date: CandyDateType, grain?: CandyDateCompareGrain): boolean;
    isSameYear(date: CandyDateType): boolean;
    isSameMonth(date: CandyDateType): boolean;
    isSameDay(date: CandyDateType): boolean;
    isSameHour(date: CandyDateType): boolean;
    isSameMinute(date: CandyDateType): boolean;
    isSameSecond(date: CandyDateType): boolean;
    compare(date: CandyDateType, grain?: CandyDateCompareGrain, isBefore?: boolean): boolean;
    isBeforeYear(date: CandyDateType): boolean;
    isBeforeMonth(date: CandyDateType): boolean;
    isBeforeDay(date: CandyDateType): boolean;
    isBeforeHour(date: CandyDateType): boolean;
    isBeforeMinute(date: CandyDateType): boolean;
    isBeforeSecond(date: CandyDateType): boolean;
    isAfterYear(date: CandyDateType): boolean;
    isAfterMonth(date: CandyDateType): boolean;
    isAfterDay(date: CandyDateType): boolean;
    isAfterHour(date: CandyDateType): boolean;
    isAfterMinute(date: CandyDateType): boolean;
    isAfterSecond(date: CandyDateType): boolean;
    isToday(): boolean;
    isValid(): boolean;
    private toNativeDate;
}
