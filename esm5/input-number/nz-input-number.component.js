/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
var NzInputNumberComponent = /** @class */ (function () {
    function NzInputNumberComponent(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; }); // tslint:disable-line:no-any
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; });
        renderer.addClass(elementRef.nativeElement, 'ant-input-number');
    }
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.updateAutoFocus = 
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    function () {
        if (this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.actualValue = this.nzParser(value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = "" + this.actualValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getCurrentValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = (/** @type {?} */ (this.getValidValue(val)));
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    };
    // '1.' '1x' 'xx' '' => are not complete numbers
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    NzInputNumberComponent.prototype.isNotCompleteNumber = 
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return (isNaN((/** @type {?} */ (num))) ||
            num === '' ||
            num === null ||
            !!(num && num.toString().indexOf('.') === num.toString().length - 1));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getValidValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = parseFloat((/** @type {?} */ (value)));
        // https://github.com/ant-design/ant-design/issues/7358
        if (isNaN(val)) {
            return value;
        }
        if (val < this.nzMin) {
            val = this.nzMin;
        }
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        return val;
    };
    /**
     * @param {?} num
     * @return {?}
     */
    NzInputNumberComponent.prototype.toNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        if (this.isNotCompleteNumber(num)) {
            return (/** @type {?} */ (num));
        }
        if (isNotNil(this.nzPrecision)) {
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.setValidateValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, "" + this.value !== "" + value);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
        this.setValidateValue();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.isFocused = true;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzInputNumberComponent.prototype.getRatio = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.down = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.up = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getPrecision = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
        var precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    };
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.getMaxPrecision = 
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        /** @type {?} */
        var ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        var stepPrecision = this.getPrecision(this.nzStep);
        /** @type {?} */
        var currentValuePrecision = this.getPrecision((/** @type {?} */ (currentValue)));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    };
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.getPrecisionFactor = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        /** @type {?} */
        var precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    NzInputNumberComponent.prototype.upStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    NzInputNumberComponent.prototype.downStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.step = /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (type, e, ratio) {
        var _this = this;
        if (ratio === void 0) { ratio = 1; }
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue) || 0;
        /** @type {?} */
        var val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
        var outOfRange = val > this.nzMax || val < this.nzMin;
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        else if (val < this.nzMin) {
            val = this.nzMin;
        }
        this.setValue(val, true);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = setTimeout((/**
         * @return {?}
         */
        function () {
            _this[type](e, ratio, true);
        }), 600);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzInputNumberComponent.prototype.setValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (emit && "" + this.value !== "" + value) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        /** @type {?} */
        var displayValue = isNotNil(this.nzFormatter(this.value)) ? this.nzFormatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = "" + displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            var val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzInputNumberComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onKeyUp = /**
     * @return {?}
     */
    function () {
        this.stop();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value, false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzInputNumberComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzInputNumberComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzInputNumberComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                _this.onBlur();
                _this.nzBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
            else {
                _this.onFocus();
                _this.nzFocus.emit();
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
        if (changes.nzFormatter) {
            /** @type {?} */
            var value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoFocus) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    NzInputNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-input-number',
                    exportAs: 'nzInputNumber',
                    template: "<div class=\"ant-input-number-handler-wrap\">\n  <span unselectable=\"unselectable\"\n        class=\"ant-input-number-handler ant-input-number-handler-up\"\n        (mousedown)=\"up($event)\"\n        (mouseup)=\"stop()\"\n        (mouseleave)=\"stop()\"\n        [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\n    <i nz-icon nzType=\"up\" class=\"ant-input-number-handler-up-inner\"></i>\n  </span>\n  <span unselectable=\"unselectable\"\n        class=\"ant-input-number-handler ant-input-number-handler-down\"\n        (mousedown)=\"down($event)\"\n        (mouseup)=\"stop()\"\n        (mouseleave)=\"stop()\"\n        [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\n    <i nz-icon nzType=\"down\" class=\"ant-input-number-handler-down-inner\"></i>\n  </span>\n</div>\n<div class=\"ant-input-number-input-wrap\">\n  <input #inputElement\n         autocomplete=\"off\"\n         class=\"ant-input-number-input\"\n         [attr.id]=\"nzId\"\n         [disabled]=\"nzDisabled\"\n         [attr.min]=\"nzMin\"\n         [attr.max]=\"nzMax\"\n         [placeholder]=\"nzPlaceHolder\"\n         [attr.step]=\"nzStep\"\n         (keydown)=\"onKeyDown($event)\"\n         (keyup)=\"onKeyUp()\"\n         [ngModel]=\"displayValue\"\n         (ngModelChange)=\"onModelChange($event)\">\n</div>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzInputNumberComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.ant-input-number-focused]': 'isFocused',
                        '[class.ant-input-number-lg]': "nzSize === 'large'",
                        '[class.ant-input-number-sm]': "nzSize === 'small'",
                        '[class.ant-input-number-disabled]': 'nzDisabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzInputNumberComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    NzInputNumberComponent.propDecorators = {
        nzBlur: [{ type: Output }],
        nzFocus: [{ type: Output }],
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
        nzSize: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzParser: [{ type: Input }],
        nzPrecision: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzStep: [{ type: Input }],
        nzId: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzFormatter: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputNumberComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
    return NzInputNumberComponent;
}());
export { NzInputNumberComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.autoStepTimer;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.value;
    /** @type {?} */
    NzInputNumberComponent.prototype.displayValue;
    /** @type {?} */
    NzInputNumberComponent.prototype.isFocused;
    /** @type {?} */
    NzInputNumberComponent.prototype.disabledUp;
    /** @type {?} */
    NzInputNumberComponent.prototype.disabledDown;
    /** @type {?} */
    NzInputNumberComponent.prototype.onChange;
    /** @type {?} */
    NzInputNumberComponent.prototype.onTouched;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzBlur;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzFocus;
    /** @type {?} */
    NzInputNumberComponent.prototype.inputElement;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzSize;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzMin;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzMax;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzParser;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPrecision;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzStep;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzId;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzDisabled;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzFormatter;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.focusMonitor;
    /* Skipping unhandled member: [property: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyLyIsInNvdXJjZXMiOlsibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBRTNFO0lBcVRFLGdDQUNVLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFlBQTBCO1FBSDFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWhTcEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGFBQVE7OztRQUE0QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQUMvQyxjQUFTOzs7UUFBZSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQUNoQixXQUFNLEdBQUcsSUFBSSxZQUFZ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QUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBQzFDLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFGbUI7UUFBZixZQUFZLEVBQUU7OzhEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7K0RBQXFCO0lBb1QvQyw2QkFBQztDQUFBLEFBOVZELElBOFZDO1NBMVVZLHNCQUFzQjs7Ozs7O0lBQ2pDLCtDQUE4Qjs7Ozs7SUFDOUIsNkNBQXFDOzs7OztJQUNyQyx1Q0FBK0I7O0lBQy9CLDhDQUE4Qjs7SUFDOUIsMkNBQWtCOztJQUNsQiw0Q0FBbUI7O0lBQ25CLDhDQUFxQjs7SUFDckIsMENBQStDOztJQUMvQywyQ0FBbUM7O0lBQ25DLHdDQUErQzs7SUFDL0MseUNBQWdEOztJQUNoRCw4Q0FBd0Y7O0lBQ3hGLHdDQUEyQzs7SUFDM0MsdUNBQW1DOztJQUNuQyx1Q0FBa0M7O0lBQ2xDLDBDQUEwQzs7SUFDMUMsNkNBQTZCOztJQUM3QiwrQ0FBNEI7O0lBQzVCLHdDQUFvQjs7SUFDcEIsc0NBQXNCOztJQUN0Qiw0Q0FBNEM7O0lBQzVDLDZDQUE2Qzs7SUFDN0MsNkNBQTBFOzs7OztJQTJReEUsNENBQThCOzs7OztJQUM5QiwwQ0FBMkI7Ozs7O0lBQzNCLHFDQUE4Qjs7Ozs7SUFDOUIsOENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1pbnB1dC1udW1iZXInLFxuICBleHBvcnRBczogJ256SW5wdXROdW1iZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOeklucHV0TnVtYmVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1mb2N1c2VkXSc6ICdpc0ZvY3VzZWQnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1sZ10nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItc21dJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXROdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYXV0b1N0ZXBUaW1lcjogbnVtYmVyO1xuICBwcml2YXRlIGFjdHVhbFZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICBkaXNhYmxlZFVwID0gZmFsc2U7XG4gIGRpc2FibGVkRG93biA9IGZhbHNlO1xuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCbHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXIgPSAtSW5maW5pdHk7XG4gIEBJbnB1dCgpIG56TWF4OiBudW1iZXIgPSBJbmZpbml0eTtcbiAgQElucHV0KCkgbnpQYXJzZXIgPSAodmFsdWU6IGFueSkgPT4gdmFsdWU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIG56UHJlY2lzaW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcbiAgQElucHV0KCkgbnpTdGVwID0gMTtcbiAgQElucHV0KCkgbnpJZDogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcblxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFjdHVhbFZhbHVlID0gdGhpcy5uelBhcnNlcihcbiAgICAgIHZhbHVlXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnJlcGxhY2UoL+OAgi9nLCAnLicpXG4gICAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLi1dKy9nLCAnJylcbiAgICApO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHt0aGlzLmFjdHVhbFZhbHVlfWA7XG4gIH1cblxuICBnZXRDdXJyZW50VmFsaWRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgdmFsID0gdmFsdWU7XG4gICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgIHZhbCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcih2YWwpKSB7XG4gICAgICB2YWwgPSB0aGlzLmdldFZhbGlkVmFsdWUodmFsKSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHZhbCk7XG4gIH1cblxuICAvLyAnMS4nICcxeCcgJ3h4JyAnJyA9PiBhcmUgbm90IGNvbXBsZXRlIG51bWJlcnNcbiAgaXNOb3RDb21wbGV0ZU51bWJlcihudW06IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBpc05hTihudW0gYXMgbnVtYmVyKSB8fFxuICAgICAgbnVtID09PSAnJyB8fFxuICAgICAgbnVtID09PSBudWxsIHx8XG4gICAgICAhIShudW0gJiYgbnVtLnRvU3RyaW5nKCkuaW5kZXhPZignLicpID09PSBudW0udG9TdHJpbmcoKS5sZW5ndGggLSAxKVxuICAgICk7XG4gIH1cblxuICBnZXRWYWxpZFZhbHVlKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzczNThcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsIDwgdGhpcy5uek1pbikge1xuICAgICAgdmFsID0gdGhpcy5uek1pbjtcbiAgICB9XG4gICAgaWYgKHZhbCA+IHRoaXMubnpNYXgpIHtcbiAgICAgIHZhbCA9IHRoaXMubnpNYXg7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICB0b051bWJlcihudW06IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcihudW0pKSB7XG4gICAgICByZXR1cm4gbnVtIGFzIG51bWJlcjtcbiAgICB9XG4gICAgaWYgKGlzTm90TmlsKHRoaXMubnpQcmVjaXNpb24pKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQodGhpcy5uelByZWNpc2lvbikpO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKG51bSk7XG4gIH1cblxuICBzZXRWYWxpZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBgJHt0aGlzLnZhbHVlfWAgIT09IGAke3ZhbHVlfWApO1xuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5zZXRWYWxpZGF0ZVZhbHVlKCk7XG4gIH1cblxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGdldFJhdGlvKGU6IEtleWJvYXJkRXZlbnQpOiBudW1iZXIge1xuICAgIGxldCByYXRpbyA9IDE7XG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgIHJhdGlvID0gMC4xO1xuICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgcmF0aW8gPSAxMDtcbiAgICB9XG4gICAgcmV0dXJuIHJhdGlvO1xuICB9XG5cbiAgZG93bihlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMuc3RlcCgnZG93bicsIGUsIHJhdGlvKTtcbiAgfVxuXG4gIHVwKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbz86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgdGhpcy5zdGVwKCd1cCcsIGUsIHJhdGlvKTtcbiAgfVxuXG4gIGdldFByZWNpc2lvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgPj0gMCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlU3RyaW5nLnNsaWNlKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgKyAyKSwgMTApO1xuICAgIH1cbiAgICBsZXQgcHJlY2lzaW9uID0gMDtcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5kZXhPZignLicpID49IDApIHtcbiAgICAgIHByZWNpc2lvbiA9IHZhbHVlU3RyaW5nLmxlbmd0aCAtIHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XG4gICAgfVxuICAgIHJldHVybiBwcmVjaXNpb247XG4gIH1cblxuICAvLyBzdGVwPXsxLjB9IHZhbHVlPXsxLjUxfVxuICAvLyBwcmVzcyArXG4gIC8vIHRoZW4gdmFsdWUgc2hvdWxkIGJlIDIuNTEsIHJhdGhlciB0aGFuIDIuNVxuICAvLyBpZiB0aGlzLnByb3BzLnByZWNpc2lvbiBpcyB1bmRlZmluZWRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9pbnB1dC1udW1iZXIvaXNzdWVzLzM5XG4gIGdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMubnpQcmVjaXNpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5uelByZWNpc2lvbjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW9QcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihyYXRpbyk7XG4gICAgY29uc3Qgc3RlcFByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWVQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihjdXJyZW50VmFsdWUgYXMgbnVtYmVyKTtcbiAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgubWF4KGN1cnJlbnRWYWx1ZVByZWNpc2lvbiwgcmF0aW9QcmVjaXNpb24gKyBzdGVwUHJlY2lzaW9uKTtcbiAgfVxuXG4gIGdldFByZWNpc2lvbkZhY3RvcihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5nZXRNYXhQcmVjaXNpb24oY3VycmVudFZhbHVlLCByYXRpbyk7XG4gICAgcmV0dXJuIE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICB9XG5cbiAgdXBTdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHJlY2lzaW9uRmFjdG9yID0gdGhpcy5nZXRQcmVjaXNpb25GYWN0b3IodmFsLCByYXQpO1xuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsICsgcHJlY2lzaW9uRmFjdG9yICogdGhpcy5uelN0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubnpNaW4gPT09IC1JbmZpbml0eSA/IHRoaXMubnpTdGVwIDogdGhpcy5uek1pbjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcbiAgfVxuXG4gIGRvd25TdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHJlY2lzaW9uRmFjdG9yID0gdGhpcy5nZXRQcmVjaXNpb25GYWN0b3IodmFsLCByYXQpO1xuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsIC0gcHJlY2lzaW9uRmFjdG9yICogdGhpcy5uelN0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubnpNaW4gPT09IC1JbmZpbml0eSA/IC10aGlzLm56U3RlcCA6IHRoaXMubnpNaW47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHJlc3VsdCk7XG4gIH1cblxuICBzdGVwKHR5cGU6IHN0cmluZywgZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvOiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpIHx8IDA7XG4gICAgbGV0IHZhbCA9IDA7XG4gICAgaWYgKHR5cGUgPT09ICd1cCcpIHtcbiAgICAgIHZhbCA9IHRoaXMudXBTdGVwKHZhbHVlLCByYXRpbyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZG93bicpIHtcbiAgICAgIHZhbCA9IHRoaXMuZG93blN0ZXAodmFsdWUsIHJhdGlvKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0T2ZSYW5nZSA9IHZhbCA+IHRoaXMubnpNYXggfHwgdmFsIDwgdGhpcy5uek1pbjtcbiAgICBpZiAodmFsID4gdGhpcy5uek1heCkge1xuICAgICAgdmFsID0gdGhpcy5uek1heDtcbiAgICB9IGVsc2UgaWYgKHZhbCA8IHRoaXMubnpNaW4pIHtcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgaWYgKG91dE9mUmFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hdXRvU3RlcFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzW3R5cGVdKGUsIHJhdGlvLCB0cnVlKTtcbiAgICB9LCA2MDApO1xuICB9XG5cbiAgc3RvcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvU3RlcFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvU3RlcFRpbWVyKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGVtaXQgJiYgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcbiAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSBpc05vdE5pbCh0aGlzLm56Rm9ybWF0dGVyKHRoaXMudmFsdWUpKSA/IHRoaXMubnpGb3JtYXR0ZXIodGhpcy52YWx1ZSkgOiAnJztcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gYCR7ZGlzcGxheVZhbHVlfWA7XG4gICAgdGhpcy5kaXNhYmxlZFVwID0gdGhpcy5kaXNhYmxlZERvd24gPSBmYWxzZTtcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIGNvbnN0IHZhbCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAodmFsID49IHRoaXMubnpNYXgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFVwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPD0gdGhpcy5uek1pbikge1xuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dVcCcgfHwgZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmdldFJhdGlvKGUpO1xuICAgICAgdGhpcy51cChlLCByYXRpbyk7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gJ0Fycm93RG93bicgfHwgZS5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICBjb25zdCByYXRpbyA9IHRoaXMuZ2V0UmF0aW8oZSk7XG4gICAgICB0aGlzLmRvd24oZSwgcmF0aW8pO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBvbktleVVwKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcCgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvclxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtaW5wdXQtbnVtYmVyJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcbiAgICAgICAgdGhpcy5vbkJsdXIoKTtcbiAgICAgICAgdGhpcy5uekJsdXIuZW1pdCgpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkZvY3VzKCk7XG4gICAgICAgIHRoaXMubnpGb2N1cy5lbWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpBdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56Rm9ybWF0dGVyKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5hY3R1YWxWYWx1ZSk7XG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xuICB9XG59XG4iXX0=