import { MediaMatcher, LayoutModule } from '@angular/cdk/layout';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Renderer2, NgZone, ChangeDetectorRef, Input, ContentChildren, Optional, Host, ContentChild, Directive, NgModule } from '@angular/core';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { warnDeprecation, helpMotion, NzUpdateHostClassService, NzDomEventService, InputBoolean, toBoolean, NzConfigService, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { FormControl, NgModel, FormControlName, FormControlDirective, NgControl } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated Use `[nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip]` in `NzFormControlComponent` instead, will remove in 9.0.0.
 */
class NzFormExplainComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation(`'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
}
NzFormExplainComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-explain',
                exportAs: 'nzFormExplain',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [helpMotion],
                template: "<div [@helpMotion]>\n  <ng-content></ng-content>\n</div>",
                styles: [`
      nz-form-explain {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormExplainComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    NzFormExplainComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormExplainComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
class NzFormItemComponent extends NzRowDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} nzDomEventService
     * @param {?} cdr
     */
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService);
        this.cdr = cdr;
        this.nzFlex = false;
        this.withHelpClass = false;
        this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    /**
     * @return {?}
     */
    updateFlexStyle() {
        if (this.nzFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setWithHelpViaTips(value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes
                .pipe(startWith(true), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.withHelpClass = this.listOfNzFormExplainComponent && this.listOfNzFormExplainComponent.length > 0;
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.updateFlexStyle();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.hasOwnProperty('nzFlex')) {
            this.updateFlexStyle();
        }
    }
}
NzFormItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-item',
                exportAs: 'nzFormItem',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                },
                styles: [`
      nz-form-item {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: NzDomEventService },
    { type: ChangeDetectorRef }
];
NzFormItemComponent.propDecorators = {
    nzFlex: [{ type: Input }],
    listOfNzFormExplainComponent: [{ type: ContentChildren, args: [NzFormExplainComponent, { descendants: true },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzFormItemComponent.prototype, "nzFlex", void 0);
if (false) {
    /** @type {?} */
    NzFormItemComponent.prototype.nzFlex;
    /** @type {?} */
    NzFormItemComponent.prototype.listOfNzFormExplainComponent;
    /** @type {?} */
    NzFormItemComponent.prototype.withHelpClass;
    /** @type {?} */
    NzFormItemComponent.prototype.tipsMode;
    /**
     * @type {?}
     * @private
     */
    NzFormItemComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzFormControlComponent extends NzColDirective {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzFormItemComponent
     * @param {?} nzRowDirective
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.status = null;
        this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValidateStatus(value) {
        if (value instanceof FormControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setControlClassMap();
        }
    }
    /**
     * @return {?}
     */
    removeSubscribe() {
        this.validateChanges.unsubscribe();
    }
    /**
     * @return {?}
     */
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe((/**
             * @return {?}
             */
            () => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    validateControlStatus(status) {
        return (/** @type {?} */ ((!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status)));
    }
    /**
     * @return {?}
     */
    setControlClassMap() {
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' ||
            this.validateString === 'pending' ||
            this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = {
            [`has-warning`]: this.status === 'warning',
            [`is-validating`]: this.status === 'validating',
            [`has-error`]: this.status === 'error',
            [`has-success`]: this.status === 'success',
            [`has-feedback`]: this.nzHasFeedback && this.status
        };
    }
    /**
     * @return {?}
     */
    get hasTips() {
        return !!(this.nzSuccessTip || this.nzWarningTip || this.nzErrorTip || this.nzValidatingTip);
    }
    /**
     * @return {?}
     */
    get showSuccessTip() {
        return this.status === 'success' && !!this.nzSuccessTip;
    }
    /**
     * @return {?}
     */
    get showWarningTip() {
        return this.status === 'warning' && !!this.nzWarningTip;
    }
    /**
     * @return {?}
     */
    get showErrorTip() {
        return this.status === 'error' && !!this.nzErrorTip;
    }
    /**
     * @return {?}
     */
    get showValidatingTip() {
        return this.status === 'validating' && !!this.nzValidatingTip;
    }
    /**
     * @return {?}
     */
    get showInnerTip() {
        return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeSubscribe();
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = this.defaultValidateControl;
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
NzFormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-control',
                exportAs: 'nzFormControl',
                preserveWhitespaces: false,
                animations: [helpMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\n  <span class=\"ant-form-item-children\">\n    <ng-content></ng-content>\n    <span class=\"ant-form-item-children-icon\">\n      <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\n    </span>\n  </span>\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\n    <div @helpMotion>\n      <ng-container *ngIf=\"showSuccessTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuccessTip;context:{$implicit:validateControl};\">{{ nzSuccessTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showWarningTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzWarningTip;context:{$implicit:validateControl};\">{{ nzWarningTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showErrorTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzErrorTip;context:{$implicit:validateControl};\">{{ nzErrorTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showValidatingTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzValidatingTip;context:{$implicit:validateControl};\">{{ nzValidatingTip }}</ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content *ngIf=\"!hasTips\" select=\"nz-form-explain\"></ng-content>\n  <ng-content *ngIf=\"!nzExtra\" select=\"nz-form-extra\"></ng-content>\n  <div class=\"ant-form-extra\" *ngIf=\"nzExtra\">\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n  </div>\n</div>",
                styles: [`
      nz-form-control {
        display: block;
      }
      form .has-feedback .ant-input-suffix i {
        margin-right: 18px;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormControlComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
NzFormControlComponent.propDecorators = {
    defaultValidateControl: [{ type: ContentChild, args: [NgControl, { static: false },] }],
    nzSuccessTip: [{ type: Input }],
    nzWarningTip: [{ type: Input }],
    nzErrorTip: [{ type: Input }],
    nzValidatingTip: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzHasFeedback: [{ type: Input }],
    nzValidateStatus: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype._hasFeedback;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.validateChanges;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.validateString;
    /** @type {?} */
    NzFormControlComponent.prototype.validateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.status;
    /** @type {?} */
    NzFormControlComponent.prototype.controlClassMap;
    /** @type {?} */
    NzFormControlComponent.prototype.iconType;
    /** @type {?} */
    NzFormControlComponent.prototype.defaultValidateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.nzSuccessTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzWarningTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzErrorTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzValidatingTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzExtra;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.nzFormItemComponent;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated Use `[nzExtra]` in `NzFormControlComponent` instead, will remove in 9.0.0.
 */
class NzFormExtraComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
        warnDeprecation(`'nz-form-extra' is going to be removed in 9.0.0. Use [nzExtra] in nz-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
}
NzFormExtraComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-extra',
                exportAs: 'nzFormExtra',
                template: "<ng-content></ng-content>",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      nz-form-extra {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormExtraComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    NzFormExtraComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormExtraComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzFormLabelComponent extends NzColDirective {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzFormItemComponent
     * @param {?} nzRowDirective
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.cdr = cdr;
        this.nzRequired = false;
        this.defaultNoColon = false;
        this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzNoColon(value) {
        this.noColon = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzNoColon() {
        return !!this.noColon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDefaultNoColon(value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
NzFormLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-label',
                exportAs: 'nzFormLabel',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<label [attr.for]=\"nzFor\"\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : nzNoColon\"\n  [class.ant-form-item-required]=\"nzRequired\">\n  <ng-content></ng-content>\n</label>"
            }] }
];
/** @nocollapse */
NzFormLabelComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NzFormLabelComponent.propDecorators = {
    nzFor: [{ type: Input }],
    nzRequired: [{ type: Input }],
    nzNoColon: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzFormLabelComponent.prototype, "nzRequired", void 0);
if (false) {
    /** @type {?} */
    NzFormLabelComponent.prototype.nzFor;
    /** @type {?} */
    NzFormLabelComponent.prototype.nzRequired;
    /** @type {?} */
    NzFormLabelComponent.prototype.defaultNoColon;
    /** @type {?} */
    NzFormLabelComponent.prototype.noColon;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzFormSplitComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }
}
NzFormSplitComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-split',
                exportAs: 'nzFormSplit',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzFormSplitComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    NzFormSplitComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormSplitComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzFormTextComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }
}
NzFormTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-text',
                exportAs: 'nzFormText',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzFormTextComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    NzFormTextComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormTextComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'form';
class NzFormDirective {
    /**
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     */
    constructor(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-form-${this.nzLayout}`]: this.nzLayout
        });
    }
    /**
     * @return {?}
     */
    updateItemsDefaultColon() {
        if (this.nzFormLabelComponent) {
            this.nzFormLabelComponent.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => item.setDefaultNoColon(this.nzNoColon)));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('nzNoColon')) {
            this.updateItemsDefaultColon();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.nzFormLabelComponent.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateItemsDefaultColon();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-form]',
                exportAs: 'nzForm',
                providers: [NzUpdateHostClassService]
            },] }
];
/** @nocollapse */
NzFormDirective.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService }
];
NzFormDirective.propDecorators = {
    nzLayout: [{ type: Input }],
    nzNoColon: [{ type: Input }],
    nzFormLabelComponent: [{ type: ContentChildren, args: [NzFormLabelComponent, { descendants: true },] }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzFormDirective.prototype, "nzNoColon", void 0);
if (false) {
    /** @type {?} */
    NzFormDirective.prototype.nzLayout;
    /** @type {?} */
    NzFormDirective.prototype.nzNoColon;
    /** @type {?} */
    NzFormDirective.prototype.nzFormLabelComponent;
    /** @type {?} */
    NzFormDirective.prototype.destroy$;
    /** @type {?} */
    NzFormDirective.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.nzUpdateHostClassService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzFormModule {
}
NzFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                exports: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                imports: [CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule]
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

export { NzFormControlComponent, NzFormDirective, NzFormExplainComponent, NzFormExtraComponent, NzFormItemComponent, NzFormLabelComponent, NzFormModule, NzFormSplitComponent, NzFormTextComponent };
//# sourceMappingURL=ng-zorro-antd-form.js.map
