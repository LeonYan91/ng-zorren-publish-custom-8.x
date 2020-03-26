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
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil, slideMotion, InputBoolean, NzConfigService, NzUpdateHostClassService as UpdateCls, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'timePicker';
export class NzTimePickerComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} element
     * @param {?} renderer
     * @param {?} updateCls
     * @param {?} cdr
     */
    constructor(nzConfigService, element, renderer, updateCls, cdr) {
        this.nzConfigService = nzConfigService;
        this.element = element;
        this.renderer = renderer;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._value = null;
        this.isInit = false;
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }
        ];
        this.nzSize = null;
        this.nzPlaceHolder = '';
        this.nzDefaultOpenValue = new Date();
        this.nzOpen = false;
        this.nzOpenChange = new EventEmitter();
        this.nzHideDisabledOptions = false;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    open() {
        if (this.nzDisabled) {
            return;
        }
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    }
    /**
     * @return {?}
     */
    close() {
        this.nzOpen = false;
        this.cdr.markForCheck();
        this.nzOpenChange.emit(this.nzOpen);
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    onClickClearBtn() {
        this.value = null;
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`ant-time-picker`]: true,
            [`ant-time-picker-${this.nzSize}`]: isNotNil(this.nzSize)
        });
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzUse12Hours, nzFormat, nzDisabled, nzAutoFocus } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
            this.nzFormat = 'h:mm:ss a';
        }
        if (nzDisabled) {
            /** @type {?} */
            const value = nzDisabled.currentValue;
            /** @type {?} */
            const input = (/** @type {?} */ (this.inputRef.nativeElement));
            if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        }
        if (nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    writeValue(time) {
        this._value = time;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
NzTimePickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker',
                exportAs: 'nzTimePicker',
                template: "<input\n  #inputElement\n  nzType=\"text\"\n  [nzTime]=\"nzFormat\"\n  class=\"ant-time-picker-input\"\n  [placeholder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n  [(ngModel)]=\"value\"\n  readonly=\"readonly\"\n  (click)=\"open()\">\n<span class=\"ant-time-picker-icon\">\n  <i nz-icon nzType=\"clock-circle\"></i>\n</span>\n<i\n  *ngIf=\"nzAllowEmpty && value\"\n  nz-icon\n  nzType=\"close-circle\"\n  nzTheme=\"fill\"\n  class=\"anticon anticon-close-circle ant-time-picker-clear\"\n  tabindex=\"-1\"\n  [attr.aria-label]=\"nzClearText\"\n  [attr.title]=\"nzClearText\"\n  (click)=\"onClickClearBtn()\"\n></i>\n\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\n  [cdkConnectedOverlayOffsetY]=\"-2\"\n  (detach)=\"close()\"\n  (backdropClick)=\"close()\">\n  <nz-time-picker-panel\n    [ngClass]=\"nzPopupClassName\"\n    [@slideMotion]=\"'bottom'\"\n    [format]=\"nzFormat\"\n    [nzHourStep]=\"nzHourStep\"\n    [nzMinuteStep]=\"nzMinuteStep\"\n    [nzSecondStep]=\"nzSecondStep\"\n    [nzDisabledHours]=\"nzDisabledHours\"\n    [nzDisabledMinutes]=\"nzDisabledMinutes\"\n    [nzDisabledSeconds]=\"nzDisabledSeconds\"\n    [nzPlaceHolder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n    [nzHideDisabledOptions]=\"nzHideDisabledOptions\"\n    [nzUse12Hours]=\"nzUse12Hours\"\n    [nzDefaultOpenValue]=\"nzDefaultOpenValue\"\n    [nzAddOn]=\"nzAddOn\"\n    [opened]=\"nzOpen\"\n    [nzClearText]=\"nzClearText\"\n    [nzAllowEmpty]=\"nzAllowEmpty\"\n    [(ngModel)]=\"value\">\n  </nz-time-picker-panel>\n</ng-template>\n\n",
                animations: [slideMotion],
                providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]
            }] }
];
/** @nocollapse */
NzTimePickerComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: UpdateCls },
    { type: ChangeDetectorRef }
];
NzTimePickerComponent.propDecorators = {
    inputRef: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    nzSize: [{ type: Input }],
    nzHourStep: [{ type: Input }],
    nzMinuteStep: [{ type: Input }],
    nzSecondStep: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzPopupClassName: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzAddOn: [{ type: Input }],
    nzDefaultOpenValue: [{ type: Input }],
    nzDisabledHours: [{ type: Input }],
    nzDisabledMinutes: [{ type: Input }],
    nzDisabledSeconds: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzUse12Hours: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    nzHideDisabledOptions: [{ type: Input }],
    nzAllowEmpty: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzAutoFocus: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
    tslib_1.__metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzHourStep", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
    tslib_1.__metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
    tslib_1.__metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'clear'),
    tslib_1.__metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzClearText", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'HH:mm:ss'),
    tslib_1.__metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzFormat", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype._onTouched;
    /** @type {?} */
    NzTimePickerComponent.prototype.isInit;
    /** @type {?} */
    NzTimePickerComponent.prototype.origin;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzTimePickerComponent.prototype.inputRef;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSize;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHourStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzMinuteStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSecondStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPopupClassName;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDefaultOpenValue;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledHours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledMinutes;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledSeconds;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpen;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzUse12Hours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAllowEmpty;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype.updateCls;
    /** @type {?} */
    NzTimePickerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFlBQVksRUFDWixlQUFlLEVBQ2Ysd0JBQXdCLElBQUksU0FBUyxFQUNyQyxVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFdEIsd0JBQXdCLEdBQUcsWUFBWTtBQVc3QyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7OztJQW9HaEMsWUFDUyxlQUFnQyxFQUMvQixPQUFtQixFQUNuQixRQUFtQixFQUNuQixTQUFvQixFQUNyQixHQUFzQjtRQUp0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF4R3ZCLFdBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBR25DLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixxQkFBZ0IsR0FBNkI7WUFDM0M7Z0JBQ0UsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRixDQUFDO1FBRU8sV0FBTSxHQUFrQixJQUFJLENBQUM7UUFNN0Isa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFbkIsdUJBQWtCLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUtoQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRUwsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXJDLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUU5QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBcUUxQyxDQUFDOzs7OztJQW5FSixJQUFJLEtBQUssQ0FBQyxLQUFrQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDbkY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDekU7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pELENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJO1lBQ3pCLENBQUMsbUJBQW1CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzFELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFVRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7Y0FDMUIsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPO1FBQ25FLElBQUksWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUMsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3pGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxVQUFVLEVBQUU7O2tCQUNSLEtBQUssR0FBRyxVQUFVLENBQUMsWUFBWTs7a0JBQy9CLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBb0I7WUFDN0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNuRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDbEQ7U0FDRjtRQUNELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBaUI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQStCO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBbEtGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix1dERBQThDO2dCQUM5QyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3hHOzs7O1lBZkMsZUFBZTtZQWxCZixVQUFVO1lBTVYsU0FBUztZQWFtQixTQUFTO1lBckJyQyxpQkFBaUI7Ozt1QkFvRGhCLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3FCQUMxQyxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxNQUFNO29DQUVOLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0FBbkI0QztJQUF4QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDOzt5REFBb0I7QUFDbkI7SUFBeEMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQzs7MkRBQXNCO0FBQ3JCO0lBQXhDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7OzJEQUFzQjtBQUNmO0lBQTlDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUM7OzBEQUFxQjtBQUM3QjtJQUFyQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7OytEQUEwQjtBQU9iO0lBQWpELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLENBQUM7O3VEQUFrQjtBQUVOO0lBQTVELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZLEVBQUU7OzJEQUF1QjtBQUduRTtJQUFmLFlBQVksRUFBRTs7b0VBQStCO0FBQ2M7SUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRTs7MkRBQXVCO0FBQ2xFO0lBQWYsWUFBWSxFQUFFOzt5REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7OzBEQUFxQjs7Ozs7O0lBcEM3Qyx1Q0FBbUM7Ozs7O0lBQ25DLDBDQUFnRDs7Ozs7SUFDaEQsMkNBQStCOztJQUMvQix1Q0FBZTs7SUFDZix1Q0FBeUI7O0lBQ3pCLGlEQVNFOztJQUNGLHlDQUFvRjs7SUFDcEYsdUNBQXNDOztJQUN0QywyQ0FBcUU7O0lBQ3JFLDZDQUF1RTs7SUFDdkUsNkNBQXVFOztJQUN2RSw0Q0FBNEU7O0lBQzVFLGlEQUF3RTs7SUFDeEUsOENBQTRCOztJQUM1Qix3Q0FBb0M7O0lBQ3BDLG1EQUF5Qzs7SUFDekMsZ0RBQXlDOztJQUN6QyxrREFBdUQ7O0lBQ3ZELGtEQUF1RTs7SUFDdkUseUNBQTRFOztJQUM1RSx1Q0FBd0I7O0lBQ3hCLDZDQUE0Rjs7SUFDNUYsNkNBQThEOztJQUU5RCxzREFBdUQ7O0lBQ3ZELDZDQUEyRjs7SUFDM0YsMkNBQTRDOztJQUM1Qyw0Q0FBNkM7O0lBZ0UzQyxnREFBdUM7Ozs7O0lBQ3ZDLHdDQUEyQjs7Ozs7SUFDM0IseUNBQTJCOzs7OztJQUMzQiwwQ0FBNEI7O0lBQzVCLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG4gIGlzTm90TmlsLFxuICBzbGlkZU1vdGlvbixcbiAgSW5wdXRCb29sZWFuLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBVcGRhdGVDbHMsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RpbWVQaWNrZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnbnotdGltZS1waWNrZXInLFxuICBleHBvcnRBczogJ256VGltZVBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHByb3ZpZGVyczogW1VwZGF0ZUNscywgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE56VGltZVBpY2tlckNvbXBvbmVudCwgbXVsdGk6IHRydWUgfV1cbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSB8IG51bGwpID0+IHZvaWQ7XG4gIHByaXZhdGUgX29uVG91Y2hlZDogKCkgPT4gdm9pZDtcbiAgaXNJbml0ID0gZmFsc2U7XG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xuICAgIHtcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgIG9mZnNldFg6IDAsXG4gICAgICBvZmZzZXRZOiAwXG4gICAgfVxuICBdO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAxKSBuekhvdXJTdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMSkgbnpNaW51dGVTdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMSkgbnpTZWNvbmRTdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2NsZWFyJykgbnpDbGVhclRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelBvcHVwQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcbiAgQElucHV0KCkgbnpBZGRPbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRNaW51dGVzOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZFNlY29uZHM6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnSEg6bW06c3MnKSBuekZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56VXNlMTJIb3VyczogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dFbXB0eTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29uVG91Y2hlZCkge1xuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uek9wZW4gPSB0cnVlO1xuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgfVxuXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja0NsZWFyQnRuKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNscy51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFtgYW50LXRpbWUtcGlja2VyYF06IHRydWUsXG4gICAgICBbYGFudC10aW1lLXBpY2tlci0ke3RoaXMubnpTaXplfWBdOiBpc05vdE5pbCh0aGlzLm56U2l6ZSlcbiAgICB9KTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHVwZGF0ZUNsczogVXBkYXRlQ2xzLFxuICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpVc2UxMkhvdXJzLCBuekZvcm1hdCwgbnpEaXNhYmxlZCwgbnpBdXRvRm9jdXMgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56VXNlMTJIb3VycyAmJiAhbnpVc2UxMkhvdXJzLnByZXZpb3VzVmFsdWUgJiYgbnpVc2UxMkhvdXJzLmN1cnJlbnRWYWx1ZSAmJiAhbnpGb3JtYXQpIHtcbiAgICAgIHRoaXMubnpGb3JtYXQgPSAnaDptbTpzcyBhJztcbiAgICB9XG4gICAgaWYgKG56RGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbnpEaXNhYmxlZC5jdXJyZW50VmFsdWU7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuekF1dG9Gb2N1cykge1xuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHRpbWU6IERhdGUgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB0aW1lO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=