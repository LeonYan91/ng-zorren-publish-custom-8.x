import { __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { LEFT_ARROW, RIGHT_ARROW, SPACE, ENTER } from '@angular/cdk/keycodes';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ChangeDetectorRef, ViewChild, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzConfigService, InputBoolean, WithConfig, NzWaveModule, NzAddOnModule } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'switch';
class NzSwitchComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(nzConfigService, cdr, focusMonitor) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.nzLoading = false;
        this.nzDisabled = false;
        this.nzControl = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    hostClick(e) {
        e.preventDefault();
        if (!this.nzDisabled && !this.nzLoading && !this.nzControl) {
            this.updateValue(!this.checked);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (!this.nzControl && !this.nzDisabled && !this.nzLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.switchElement.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
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
NzSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-switch',
                exportAs: 'nzSwitch',
                preserveWhitespaces: false,
                template: "<button type=\"button\" #switchElement\n  nz-wave\n  class=\"ant-switch\"\n  [disabled]=\"nzDisabled\"\n  [class.ant-switch-checked]=\"checked\"\n  [class.ant-switch-loading]=\"nzLoading\"\n  [class.ant-switch-disabled]=\"nzDisabled\"\n  [class.ant-switch-small]=\"nzSize === 'small'\"\n  [nzWaveExtraNode]=\"true\"\n  (keydown)=\"onKeyDown($event)\">\n  <i *ngIf=\"nzLoading\" nz-icon nzType=\"loading\" class=\"ant-switch-loading-icon\"></i>\n  <span class=\"ant-switch-inner\">\n    <span>\n      <ng-container *ngIf=\"checked\">\n        <ng-container *nzStringTemplateOutlet=\"nzCheckedChildren\">{{ nzCheckedChildren }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!checked\">\n        <ng-container *nzStringTemplateOutlet=\"nzUnCheckedChildren\">{{ nzUnCheckedChildren }}</ng-container>\n      </ng-container>\n    </span>\n  </span>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzSwitchComponent)),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                },
                styles: [`
      nz-switch {
        display: inline-block;
      }
    `]
            }] }
];
/** @nocollapse */
NzSwitchComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
NzSwitchComponent.propDecorators = {
    switchElement: [{ type: ViewChild, args: ['switchElement', { static: true },] }],
    nzLoading: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzControl: [{ type: Input }],
    nzCheckedChildren: [{ type: Input }],
    nzUnCheckedChildren: [{ type: Input }],
    nzSize: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzControl", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    __metadata("design:type", String)
], NzSwitchComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzSwitchComponent.prototype.checked;
    /** @type {?} */
    NzSwitchComponent.prototype.onChange;
    /** @type {?} */
    NzSwitchComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.switchElement;
    /** @type {?} */
    NzSwitchComponent.prototype.nzLoading;
    /** @type {?} */
    NzSwitchComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSwitchComponent.prototype.nzControl;
    /** @type {?} */
    NzSwitchComponent.prototype.nzCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzUnCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzSize;
    /** @type {?} */
    NzSwitchComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.focusMonitor;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSwitchModule {
}
NzSwitchModule.decorators = [
    { type: NgModule, args: [{
                exports: [NzSwitchComponent],
                declarations: [NzSwitchComponent],
                imports: [CommonModule, NzWaveModule, NzIconModule, NzAddOnModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzSwitchComponent, NzSwitchModule };
//# sourceMappingURL=ng-zorro-antd-switch.js.map
