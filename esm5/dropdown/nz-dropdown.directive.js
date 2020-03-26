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
import { hasModifierKey, ESCAPE } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { NzButtonComponent, NzButtonGroupComponent } from 'ng-zorro-antd/button';
import { DEFAULT_DROPDOWN_POSITIONS, InputBoolean, POSITION_MAP } from 'ng-zorro-antd/core';
import { combineLatest, fromEvent, merge, EMPTY, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';
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
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
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
        positionStrategy.withPositions(tslib_1.__spread(this.positions));
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
            var _b = tslib_1.__read(_a, 2), supVisible = _b[0], subVisible = _b[1];
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
        return tslib_1.__spread([POSITION_MAP[placement]], positions);
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
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzClickHide", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzVisible", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzTableFilter", void 0);
    return NzDropDownDirective;
}());
export { NzDropDownDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFJTCxPQUFPLEVBQ1AsYUFBYSxFQUVkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakcsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFtQixNQUFNLDhCQUE4QixDQUFDO0FBRXhGO0lBcU1FLDZCQUNTLFVBQXNCLEVBQ3JCLFFBQW1CLEVBQ25CLE9BQWdCLEVBQ2hCLFFB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QXFEOztJQUNyRCw4Q0FBK0U7O0lBb0s3RSx5Q0FBNkI7Ozs7O0lBQzdCLHVDQUEyQjs7Ozs7SUFDM0Isc0NBQXdCOzs7OztJQUN4Qix1Q0FBMEI7Ozs7O0lBQzFCLGdEQUFnRTs7Ozs7SUFDaEUscURBQWtFOzs7OztJQUNsRSwrQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgaGFzTW9kaWZpZXJLZXksIEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDb25uZWN0ZWRQb3NpdGlvbixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekJ1dHRvbkNvbXBvbmVudCwgTnpCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLCBJbnB1dEJvb2xlYW4sIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIG1lcmdlLCBFTVBUWSwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQsIE56UGxhY2VtZW50VHlwZSB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotZHJvcGRvd25dJyxcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duJ1xufSlcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSB0cmlnZ2VyV2lkdGggPSAwO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIGRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgcHJpdmF0ZSBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XG4gIHByaXZhdGUgcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgb3ZlcmxheVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcmVhZG9ubHkgaG92ZXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gbWVyZ2UoXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWVudGVyJykucGlwZShtYXBUbyh0cnVlKSksXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbyhmYWxzZSkpXG4gICk7XG4gIHJlYWRvbmx5ICRjbGljazogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGZyb21FdmVudCh0aGlzLmVsLCAnY2xpY2snKS5waXBlKFxuICAgIHRhcChlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpLFxuICAgIG1hcFRvKHRydWUpXG4gICk7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25NZW51OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XG4gIEBJbnB1dCgpIG56TWF0Y2hXaWR0aEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhY2tkcm9wID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xpY2tIaWRlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpUYWJsZUZpbHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheVxuICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsKVxuICAgICAgICAud2l0aExvY2tlZFBvc2l0aW9uKCksXG4gICAgICBtaW5XaWR0aDogdGhpcy50cmlnZ2VyV2lkdGgsXG4gICAgICBoYXNCYWNrZHJvcDogdGhpcy5uelRyaWdnZXIgPT09ICdjbGljaycsXG4gICAgICBiYWNrZHJvcENsYXNzOiB0aGlzLm56QmFja2Ryb3AgPyB1bmRlZmluZWQgOiAnbnotb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xuICAgICAgdGhpcy5zdWJzY3JpYmVPdmVybGF5RXZlbnQodGhpcy5vdmVybGF5UmVmKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Qb3NpdGlvbnMoY29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZyk7XG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlDb25maWcge1xuICAgIG92ZXJsYXlDb25maWcubWluV2lkdGggPSB0aGlzLnRyaWdnZXJXaWR0aDtcbiAgICBvdmVybGF5Q29uZmlnLmhhc0JhY2tkcm9wID0gdGhpcy5uelRyaWdnZXIgPT09ICdjbGljayc7XG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XG4gIH1cblxuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbjogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5wb3NpdGlvbkNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnZHJvcERvd25Qb3NpdGlvbicsIGNoYW5nZS5jb25uZWN0aW9uUGFpci5vcmlnaW5ZKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUV2ZW50KG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLFxuICAgICAgb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLFxuICAgICAgb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShmaWx0ZXIoZSA9PiBlLmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhaGFzTW9kaWZpZXJLZXkoZSkpKVxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZpc2libGVTdGF0ZVdoZW4oZmFsc2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBvcnRhbCgpOiBUZW1wbGF0ZVBvcnRhbCB7XG4gICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5uekRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5uekRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZiwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9ydGFsO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuTWVudSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZHJvcGRvd25PcGVuKSB7XG4gICAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCk7XG4gICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gb3ZlcmxheVJlZi5nZXRDb25maWcoKTtcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ29wZW4nLCB0cnVlKTtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ob3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XG4gICAgICBvdmVybGF5UmVmLmF0dGFjaCh0aGlzLmdldFBvcnRhbCgpKTtcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlTWVudSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnb3BlbicsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBvc2l0aW9uKHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHBvc2l0aW9uU3RyYXRlZ3k7XG4gICAgcG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi50aGlzLnBvc2l0aW9uc10pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uU3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5uek1hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5uek1hdGNoV2lkdGhFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsO1xuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGluaXRBY3Rpb25TdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdFZpc2libGUkID0gdGhpcy5uelRyaWdnZXIgPT09ICdob3ZlcicgPyB0aGlzLmhvdmVyJCA6IHRoaXMuJGNsaWNrO1xuICAgIGNvbnN0IGRyb3Bkb3duTWVudVZpc2libGUkID0gdGhpcy5uekRyb3Bkb3duTWVudS52aXNpYmxlJDtcbiAgICBjb25zdCBtZW51Q2xpY2tWaXNpYmxlJCA9IHRoaXMubnpDbGlja0hpZGVcbiAgICAgID8gdGhpcy5uekRyb3Bkb3duTWVudS5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZShtYXBUbyhmYWxzZSkpXG4gICAgICA6IEVNUFRZO1xuICAgIGNvbnN0IHN1cFZpc2libGUkID0gbWVyZ2UoZHJvcGRvd25NZW51VmlzaWJsZSQsIGhvc3RWaXNpYmxlJCwgbWVudUNsaWNrVmlzaWJsZSQpO1xuICAgIGNvbnN0IHN1YlZpc2libGUkID0gdGhpcy5uekRyb3Bkb3duTWVudS5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudU9wZW4kO1xuICAgIGNvbWJpbmVMYXRlc3QoW3N1cFZpc2libGUkLCBzdWJWaXNpYmxlJF0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChbc3VwVmlzaWJsZSwgc3ViVmlzaWJsZV0pID0+IHN1cFZpc2libGUgfHwgc3ViVmlzaWJsZSksXG4gICAgICAgIGRlYm91bmNlVGltZSg1MCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uelZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XG4gICAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XG4gICAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCd0cmlnZ2VyV2lkdGgnLCB0aGlzLnRyaWdnZXJXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMub3Blbk1lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0RGlzYWJsZWQodGhpcy5uekRpc2FibGVkKTtcbiAgfVxuXG4gIHJlZ2VuZXJhdGVQb3NpdGlvbihwbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSwgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10pOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xuICAgIHJldHVybiBbUE9TSVRJT05fTUFQW3BsYWNlbWVudF0sIC4uLnBvc2l0aW9uc107XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBuekJ1dHRvbkNvbXBvbmVudDogTnpCdXR0b25Db21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekJ1dHRvbkdyb3VwQ29tcG9uZW50OiBOekJ1dHRvbkdyb3VwQ29tcG9uZW50LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZHJvcGRvd24tdHJpZ2dlcicpO1xuICAgIGlmICh0aGlzLm56QnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56QnV0dG9uQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm56QnV0dG9uR3JvdXBDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpCdXR0b25Hcm91cENvbXBvbmVudC5pc0luRHJvcGRvd24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRyb3Bkb3duTWVudSkge1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICAgIHRoaXMuaW5pdEFjdGlvblN1YnNjcmliZSgpO1xuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGlzcG9zZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIG56VmlzaWJsZSxcbiAgICAgIG56VHJpZ2dlcixcbiAgICAgIG56UGxhY2VtZW50LFxuICAgICAgbnpEaXNhYmxlZCxcbiAgICAgIG56T3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIG56T3ZlcmxheVN0eWxlLFxuICAgICAgbnpUYWJsZUZpbHRlclxuICAgIH0gPSBjaGFuZ2VzO1xuICAgIGlmICh0aGlzLm56RHJvcGRvd25NZW51KSB7XG4gICAgICBpZiAobnpWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnZpc2libGUkLm5leHQodGhpcy5uelZpc2libGUpO1xuICAgICAgfVxuICAgICAgaWYgKG56VHJpZ2dlcikge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduelRyaWdnZXInLCB0aGlzLm56VHJpZ2dlcik7XG4gICAgICB9XG4gICAgICBpZiAobnpUYWJsZUZpbHRlcikge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduelRhYmxlRmlsdGVyJywgdGhpcy5uelRhYmxlRmlsdGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChuek92ZXJsYXlDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpPdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5uek92ZXJsYXlDbGFzc05hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG56T3ZlcmxheVN0eWxlKSB7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256T3ZlcmxheVN0eWxlJywgdGhpcy5uek92ZXJsYXlTdHlsZSk7XG4gICAgICB9XG4gICAgICBpZiAobnpQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpQbGFjZW1lbnQnLCB0aGlzLm56UGxhY2VtZW50KTtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZShcbiAgICAgICAgICAnZHJvcERvd25Qb3NpdGlvbicsXG4gICAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5uelBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEgPyAndG9wJyA6ICdib3R0b20nXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gdGhpcy5yZWdlbmVyYXRlUG9zaXRpb24odGhpcy5uelBsYWNlbWVudCwgdGhpcy5wb3NpdGlvbnMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uU3RyYXRlZ3kodGhpcy5wb3NpdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=