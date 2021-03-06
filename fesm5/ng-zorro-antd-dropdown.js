import { Injectable, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Self, Injector, ElementRef, Renderer2, ViewContainerRef, Host, Optional, ViewChild, TemplateRef, EventEmitter, Directive, Input, Output, ContentChild, NgModule, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { NzMenuBaseService, slideMotion, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective, DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP, InputBoolean, warnDeprecation, NzNoAnimationModule, NzOverlayModule, NzAddOnModule } from 'ng-zorro-antd/core';
import { Subject, Subscription, merge, fromEvent, EMPTY, combineLatest } from 'rxjs';
import { takeUntil, mapTo, tap, filter, map, debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { __extends, __spread, __read, __decorate, __metadata } from 'tslib';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { OverlayConfig, Overlay, ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { NzButtonComponent, NzButtonGroupComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzMenuDropdownService = /** @class */ (function (_super) {
    __extends(NzMenuDropdownService, _super);
    function NzMenuDropdownService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInDropDown = true;
        return _this;
    }
    NzMenuDropdownService.decorators = [
        { type: Injectable }
    ];
    return NzMenuDropdownService;
}(NzMenuBaseService));
if (false) {
    /** @type {?} */
    NzMenuDropdownService.prototype.isInDropDown;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDropdownContextComponent = /** @class */ (function () {
    function NzDropdownContextComponent(cdr) {
        this.cdr = cdr;
        this.open = true;
        this.dropDownPosition = 'bottom';
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    NzDropdownContextComponent.prototype.init = /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    function (open, templateRef, positionChanges, control) {
        var _this = this;
        this.open = open;
        this.templateRef = templateRef;
        this.control = control;
        positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.dropDownPosition = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.afterAnimation = /**
     * @return {?}
     */
    function () {
        if (!this.open) {
            this.control.dispose();
        }
    };
    // TODO auto set dropdown class after the bug resolved
    /** https://github.com/angular/angular/issues/14842 **/
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    NzDropdownContextComponent.prototype.ngOnDestroy = 
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzDropdownContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown-context',
                    exportAs: 'nzDropdownContext',
                    animations: [slideMotion],
                    preserveWhitespaces: false,
                    template: "<div *ngIf=\"open\"\n  class=\"ant-dropdown ant-dropdown-placement-bottomLeft\"\n  [@slideMotion]=\"dropDownPosition\"\n  (@slideMotion.done)=\"afterAnimation()\">\n  <ng-template [ngTemplateOutlet]=\"templateRef\"></ng-template>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzMenuDropdownService],
                    styles: ["\n      nz-dropdown-context {\n        display: block;\n      }\n\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropdownContextComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return NzDropdownContextComponent;
}());
if (false) {
    /** @type {?} */
    NzDropdownContextComponent.prototype.open;
    /** @type {?} */
    NzDropdownContextComponent.prototype.templateRef;
    /** @type {?} */
    NzDropdownContextComponent.prototype.dropDownPosition;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.control;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
var NzDropdownMenuComponent = /** @class */ (function () {
    function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.open = false;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.visible$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzPlacement = 'bottomLeft';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzTableFilter = false;
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.setVisibleStateWhen = /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    function (visible, trigger) {
        if (trigger === void 0) { trigger = 'all'; }
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.setValue = /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    };
    NzDropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "nz-dropdown-menu",
                    template: "<ng-template>\n  <div *ngIf=\"open\" class=\"{{'ant-dropdown nz-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n       [ngClass]=\"nzOverlayClassName\"\n       [ngStyle]=\"nzOverlayStyle\"\n       [@slideMotion]=\"dropDownPosition\"\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n       (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n       (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                    exportAs: "nzDropdownMenu",
                    animations: [slideMotion],
                    providers: [
                        NzMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: dropdownMenuServiceFactory,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropdownMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: NzMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropdownMenuComponent.propDecorators = {
        templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzDropdownMenuComponent;
}());
if (false) {
    /** @type {?} */
    NzDropdownMenuComponent.prototype.open;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.visible$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzTableFilter;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.renderer;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.viewContainerRef;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzMenuDropdownService;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDropDownDirective = /** @class */ (function () {
    function NzDropDownDirective(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.overlay = overlay;
        this.platform = platform;
        this.nzButtonComponent = nzButtonComponent;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.viewContainerRef = viewContainerRef;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.triggerWidth = 0;
        this.el = this.elementRef.nativeElement;
        this.dropdownOpen = false;
        this.positions = __spread(DEFAULT_DROPDOWN_POSITIONS);
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.stopPropagation(); })), mapTo(true));
        this.nzTrigger = 'hover';
        this.nzBackdrop = true;
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzTableFilter = false;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzVisibleChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
        if (this.nzButtonComponent) {
            this.nzButtonComponent.isInDropdown = true;
        }
        if (this.nzButtonGroupComponent) {
            this.nzButtonGroupComponent.isInDropdown = true;
        }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzDropDownDirective.prototype.setDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el, 'disabled', '');
            if (this.nzVisible) {
                this.nzVisible = false;
                this.nzVisibleChange.emit(this.nzVisible);
                this.updateOverlayByVisible();
            }
        }
        else {
            this.renderer.removeAttribute(this.el, 'disabled');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.el)
                .withLockedPosition(),
            minWidth: this.triggerWidth,
            hasBackdrop: this.nzTrigger === 'click',
            backdropClass: this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.createOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.overlayRef) {
            /** @type {?} */
            var config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
            return this.overlayRef;
        }
        else {
            /** @type {?} */
            var overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    };
    /**
     * @param {?} overlayConfig
     * @return {?}
     */
    NzDropDownDirective.prototype.updateOverlayConfig = /**
     * @param {?} overlayConfig
     * @return {?}
     */
    function (overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NzDropDownDirective.prototype.subscribeToPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            _this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        }));
    };
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    NzDropDownDirective.prototype.subscribeOverlayEvent = /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === ESCAPE && !hasModifierKey(e); }))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzDropdownMenu.setVisibleStateWhen(false);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.getPortal = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.openMenu = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.dropdownOpen) {
            /** @type {?} */
            var overlayRef = this.createOverlay();
            /** @type {?} */
            var overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition((/** @type {?} */ (overlayConfig.positionStrategy)));
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.closeMenu = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    };
    /**
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    NzDropDownDirective.prototype.setPosition = /**
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    function (positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions(__spread(this.positions));
    };
    /**
     * @private
     * @param {?} positions
     * @return {?}
     */
    NzDropDownDirective.prototype.updatePositionStrategy = /**
     * @private
     * @param {?} positions
     * @return {?}
     */
    function (positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.setTriggerWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            /** @type {?} */
            var element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.initActionSubscribe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        /** @type {?} */
        var dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        /** @type {?} */
        var menuClickVisible$ = this.nzClickHide
            ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false))
            : EMPTY;
        /** @type {?} */
        var supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        /** @type {?} */
        var subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), supVisible = _b[0], subVisible = _b[1];
            return supVisible || subVisible;
        })), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            if (!_this.nzDisabled && _this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.updateOverlayByVisible();
                _this.nzVisibleChange.emit(_this.nzVisible);
                _this.setTriggerWidth();
                _this.nzDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
            }
        }));
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.updateOverlayByVisible = /**
     * @return {?}
     */
    function () {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        this.setDisabled(this.nzDisabled);
    };
    /**
     * @param {?} placement
     * @param {?} positions
     * @return {?}
     */
    NzDropDownDirective.prototype.regeneratePosition = /**
     * @param {?} placement
     * @param {?} positions
     * @return {?}
     */
    function (placement, positions) {
        return __spread([POSITION_MAP[placement]], positions);
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzVisible = changes.nzVisible, nzTrigger = changes.nzTrigger, nzPlacement = changes.nzPlacement, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTableFilter = changes.nzTableFilter;
        if (this.nzDropdownMenu) {
            if (nzVisible) {
                this.updateOverlayByVisible();
                this.nzDropdownMenu.visible$.next(this.nzVisible);
            }
            if (nzTrigger) {
                this.nzDropdownMenu.setValue('nzTrigger', this.nzTrigger);
            }
            if (nzTableFilter) {
                this.nzDropdownMenu.setValue('nzTableFilter', this.nzTableFilter);
            }
            if (nzOverlayClassName) {
                this.nzDropdownMenu.setValue('nzOverlayClassName', this.nzOverlayClassName);
            }
            if (nzOverlayStyle) {
                this.nzDropdownMenu.setValue('nzOverlayStyle', this.nzOverlayStyle);
            }
            if (nzPlacement) {
                this.nzDropdownMenu.setValue('nzPlacement', this.nzPlacement);
                this.nzDropdownMenu.setValue('dropDownPosition', this.nzDropdownMenu.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom');
                this.positions = this.regeneratePosition(this.nzPlacement, this.positions);
                this.updatePositionStrategy(this.positions);
            }
        }
        if (nzDisabled) {
            this.updateDisabledState();
        }
    };
    NzDropDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-dropdown]',
                    exportAs: 'nzDropdown'
                },] }
    ];
    /** @nocollapse */
    NzDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Overlay },
        { type: Platform },
        { type: NzButtonComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzButtonGroupComponent, decorators: [{ type: Optional }] },
        { type: ViewContainerRef }
    ]; };
    NzDropDownDirective.propDecorators = {
        nzDropdownMenu: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzMatchWidthElement: [{ type: Input }],
        nzBackdrop: [{ type: Input }],
        nzClickHide: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTableFilter: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzClickHide", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzVisible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzTableFilter", void 0);
    return NzDropDownDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.triggerWidth;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.dropdownOpen;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positions;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positionSubscription;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlaySubscription;
    /** @type {?} */
    NzDropDownDirective.prototype.hover$;
    /** @type {?} */
    NzDropDownDirective.prototype.$click;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDropdownMenu;
    /** @type {?} */
    NzDropDownDirective.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownDirective.prototype.nzMatchWidthElement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzBackdrop;
    /** @type {?} */
    NzDropDownDirective.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisible;
    /** @type {?} */
    NzDropDownDirective.prototype.nzTableFilter;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownDirective.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzDropDownDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.nzButtonComponent;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.nzButtonGroupComponent;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function menuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
var NzDropDownComponent = /** @class */ (function () {
    function NzDropDownComponent(cdr, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.positions = __spread(DEFAULT_DROPDOWN_POSITIONS);
        this.visible$ = new Subject();
        this.destroy$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzTableFilter = false;
        this.nzVisibleChange = new EventEmitter();
        warnDeprecation("'nz-dropdown' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en");
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    NzDropDownComponent.prototype.setVisibleStateWhen = /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    function (visible, trigger) {
        if (trigger === void 0) { trigger = 'all'; }
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzDropDownComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    NzDropDownComponent.prototype.startSubscribe = /**
     * @param {?} observable$
     * @return {?}
     */
    function (observable$) {
        var _this = this;
        /** @type {?} */
        var click$ = this.nzClickHide ? this.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        combineLatest([merge(observable$, click$), this.nzMenuDropdownService.menuOpen$])
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[0] || value[1]; })), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            if (!_this.nzDisabled && _this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.nzVisibleChange.emit(_this.nzVisible);
                _this.triggerWidth = _this.nzDropDownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                _this.cdr.markForCheck();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        if (this.nzDropDownDirective) {
            this.nzDropDownDirective.setDisabled(this.nzDisabled);
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.startSubscribe(merge(this.visible$, this.nzTrigger === 'hover' ? this.nzDropDownDirective.hover$ : this.nzDropDownDirective.$click));
        this.updateDisabledState();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDropDownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzVisible) {
            this.visible$.next(this.nzVisible);
        }
        if (changes.nzDisabled) {
            this.updateDisabledState();
        }
        if (changes.nzPlacement) {
            this.dropDownPosition = this.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom';
            this.positions = __spread([POSITION_MAP[this.nzPlacement]], this.positions);
        }
    };
    NzDropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown',
                    exportAs: 'nzDropdown',
                    preserveWhitespaces: false,
                    providers: [
                        NzMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: menuServiceFactory,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    animations: [slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content select=\"[nz-dropdown]\"></ng-content>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\"\n  (backdropClick)=\"setVisibleStateWhen(false)\"\n  (detach)=\"setVisibleStateWhen(false)\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [ngClass]=\"nzOverlayClassName\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [style.minWidth.px]=\"triggerWidth\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\n      <ng-content select=\"[nz-menu]\"></ng-content>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                    styles: ["\n      :root .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropDownComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropDownComponent.propDecorators = {
        nzDropDownDirective: [{ type: ContentChild, args: [NzDropDownDirective, { static: false },] }],
        nzTrigger: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzClickHide: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTableFilter: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownComponent.prototype, "nzClickHide", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownComponent.prototype, "nzVisible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownComponent.prototype, "nzTableFilter", void 0);
    return NzDropDownComponent;
}());
if (false) {
    /** @type {?} */
    NzDropDownComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropDownComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropDownComponent.prototype.positions;
    /** @type {?} */
    NzDropDownComponent.prototype.visible$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownComponent.prototype.destroy$;
    /** @type {?} */
    NzDropDownComponent.prototype.nzDropDownDirective;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownComponent.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownComponent.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisible;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTableFilter;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisibleChange;
    /**
     * @type {?}
     * @protected
     */
    NzDropDownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropDownComponent.prototype.nzMenuDropdownService;
    /** @type {?} */
    NzDropDownComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDropdownServiceModule = /** @class */ (function () {
    function NzDropdownServiceModule() {
    }
    NzDropdownServiceModule.decorators = [
        { type: NgModule }
    ];
    return NzDropdownServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDropdownService = /** @class */ (function () {
    function NzDropdownService(overlay) {
        this.overlay = overlay;
        warnDeprecation("'NzDropdownService' is going to be removed in 9.0.0. Please use 'NzContextMenuService' instead. Read https://ng.ant.design/components/dropdown/en");
    }
    /**
     * @param {?} $event
     * @param {?} templateRef
     * @return {?}
     */
    NzDropdownService.prototype.create = /**
     * @param {?} $event
     * @param {?} templateRef
     * @return {?}
     */
    function ($event, templateRef) {
        var _this = this;
        $event.preventDefault();
        this.dispose();
        this.overlayRef = this.overlay.create(new OverlayConfig({
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo({
                x: $event.x,
                y: $event.y
            })
                .withPositions([
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            ])
        }));
        /** @type {?} */
        var positionChanges = ((/** @type {?} */ (this.overlayRef.getConfig().positionStrategy)))
            .positionChanges;
        /** @type {?} */
        var instance = this.overlayRef.attach(new ComponentPortal(NzDropdownContextComponent)).instance;
        fromEvent(document, 'click')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () { return instance.close(); }));
        instance.init(true, templateRef, positionChanges, this);
        return instance;
    };
    /**
     * @return {?}
     */
    NzDropdownService.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    };
    NzDropdownService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzDropdownServiceModule
                },] }
    ];
    /** @nocollapse */
    NzDropdownService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzDropdownService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzDropdownService_Factory() { return new NzDropdownService(ɵɵinject(Overlay)); }, token: NzDropdownService, providedIn: NzDropdownServiceModule });
    return NzDropdownService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDropdownService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownService.prototype.overlay;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = menuServiceFactory;
var NzDropDownButtonComponent = /** @class */ (function (_super) {
    __extends(NzDropDownButtonComponent, _super);
    function NzDropDownButtonComponent(cdr, nzMenuDropdownService, noAnimation) {
        var _this = _super.call(this, cdr, nzMenuDropdownService, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzSize = 'default';
        _this.nzType = 'default';
        _this.nzIcon = 'ellipsis';
        _this.nzClick = new EventEmitter();
        warnDeprecation("'nz-dropdown-button' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en");
        return _this;
    }
    /** rewrite afterViewInit hook */
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    NzDropDownButtonComponent.prototype.ngAfterContentInit = /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    function () {
        this.startSubscribe(this.visible$);
    };
    NzDropDownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown-button',
                    exportAs: 'nzDropdownButton',
                    preserveWhitespaces: false,
                    animations: [slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        NzMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: ɵ0,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    template: "<div class=\"ant-btn-group ant-dropdown-button\" nz-dropdown>\n  <button nz-button\n    type=\"button\"\n    [disabled]=\"nzDisabled\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    (click)=\"nzClick.emit($event)\">\n    <span><ng-content></ng-content></span>\n  </button>\n  <button nz-button\n    type=\"button\"\n    class=\"ant-dropdown-trigger\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    [disabled]=\"nzDisabled\"\n    (click)=\"setVisibleStateWhen(true,'click')\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <ng-container *nzStringTemplateOutlet=\"nzIcon\"><i nz-icon [nzType]=\"nzIcon\"></i></ng-container>\n  </button>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\n  (backdropClick)=\"setVisibleStateWhen(false)\"\n  (detach)=\"setVisibleStateWhen(false)\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@slideMotion]=\"dropDownPosition\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <ng-content select=\"[nz-menu]\"></ng-content>\n  </div>\n</ng-template>",
                    styles: ["\n      nz-dropdown-button {\n        position: relative;\n        display: inline-block;\n      }\n\n      :root .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropDownButtonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropDownButtonComponent.propDecorators = {
        nzSize: [{ type: Input }],
        nzType: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzDropDownDirective: [{ type: ViewChild, args: [NzDropDownDirective, { static: true },] }]
    };
    return NzDropDownButtonComponent;
}(NzDropDownComponent));
if (false) {
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzType;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzIcon;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzClick;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzDropDownDirective;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzContextMenuServiceModule = /** @class */ (function () {
    function NzContextMenuServiceModule() {
    }
    NzContextMenuServiceModule.decorators = [
        { type: NgModule }
    ];
    return NzContextMenuServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDropDownADirective = /** @class */ (function () {
    function NzDropDownADirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
    }
    NzDropDownADirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[nz-dropdown]',
                    exportAs: 'nzDropdown'
                },] }
    ];
    /** @nocollapse */
    NzDropDownADirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NzDropDownADirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDropDownADirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownADirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDropDownModule = /** @class */ (function () {
    function NzDropDownModule() {
    }
    NzDropDownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OverlayModule,
                        FormsModule,
                        NzButtonModule,
                        NzMenuModule,
                        NzIconModule,
                        PlatformModule,
                        NzNoAnimationModule,
                        NzOverlayModule,
                        NzDropdownServiceModule,
                        NzContextMenuServiceModule,
                        NzAddOnModule
                    ],
                    entryComponents: [NzDropdownContextComponent, NzDropdownMenuComponent],
                    declarations: [
                        NzDropDownComponent,
                        NzDropDownButtonComponent,
                        NzDropDownDirective,
                        NzDropDownADirective,
                        NzDropdownContextComponent,
                        NzDropdownMenuComponent
                    ],
                    exports: [
                        NzMenuModule,
                        NzDropDownComponent,
                        NzDropDownButtonComponent,
                        NzDropDownDirective,
                        NzDropDownADirective,
                        NzDropdownMenuComponent
                    ]
                },] }
    ];
    return NzDropDownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzContextMenuService = /** @class */ (function () {
    function NzContextMenuService(overlay) {
        this.overlay = overlay;
        this.clickOutsideSubscription = Subscription.EMPTY;
        this.clickMenuSubscription = Subscription.EMPTY;
        this.positionSubscription = Subscription.EMPTY;
    }
    /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    NzContextMenuService.prototype.create = /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    function ($event, nzDropdownMenuComponent) {
        $event.preventDefault();
        /** @type {?} */
        var overlayRef = this.createOverlay($event);
        if (overlayRef.hasAttached()) {
            this.close();
        }
        this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
        this.handleClickOutside();
    };
    /**
     * @return {?}
     */
    NzContextMenuService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.setOpenState(false);
            this.clickOutsideSubscription.unsubscribe();
            this.clickMenuSubscription.unsubscribe();
            this.positionSubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzContextMenuService.prototype.handleClickOutside = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.clickOutsideSubscription.unsubscribe();
        this.clickOutsideSubscription = fromEvent(document, 'click')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), 
        // handle firefox contextmenu event
        filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.button !== 2; })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
    };
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    NzContextMenuService.prototype.attachTemplatePortal = /**
     * @private
     * @param {?} overlayRef
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    function (overlayRef, nzDropdownMenuComponent) {
        var _this = this;
        this.nzDropdownMenuComponent = nzDropdownMenuComponent;
        nzDropdownMenuComponent.setValue('nzTrigger', 'click');
        this.clickMenuSubscription.unsubscribe();
        this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
        overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        this.setOpenState(true);
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    NzContextMenuService.prototype.setOpenState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.nzDropdownMenuComponent.setValue('open', state);
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.getOverlayConfig = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return new OverlayConfig({
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.generatePositionStrategy($event),
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.generatePositionStrategy = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return this.overlay
            .position()
            .flexibleConnectedTo({ x: $event.x, y: $event.y })
            .withPositions([
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ]);
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NzContextMenuService.prototype.subscribeToPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.subscribe((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            // TODO: positionChanges won't trigger if not dispose
            _this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
        }));
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.createOverlay = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var config = this.getOverlayConfig($event);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(config);
        }
        else {
            this.updatePosition(this.overlayRef, $event);
        }
        this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
        return this.overlayRef;
    };
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.updatePosition = /**
     * @private
     * @param {?} overlayRef
     * @param {?} $event
     * @return {?}
     */
    function (overlayRef, $event) {
        overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
    };
    NzContextMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzContextMenuServiceModule
                },] }
    ];
    /** @nocollapse */
    NzContextMenuService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzContextMenuService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(ɵɵinject(Overlay)); }, token: NzContextMenuService, providedIn: NzContextMenuServiceModule });
    return NzContextMenuService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.nzDropdownMenuComponent;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.clickOutsideSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.clickMenuSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.positionSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.overlay;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzContextMenuService, NzContextMenuServiceModule, NzDropDownADirective, NzDropDownButtonComponent, NzDropDownComponent, NzDropDownDirective, NzDropDownModule, NzDropdownContextComponent, NzDropdownMenuComponent, NzDropdownService, NzDropdownServiceModule, NzMenuDropdownService, dropdownMenuServiceFactory, menuServiceFactory };
//# sourceMappingURL=ng-zorro-antd-dropdown.js.map
