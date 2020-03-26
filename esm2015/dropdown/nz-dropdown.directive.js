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
export class NzDropDownDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} overlay
     * @param {?} platform
     * @param {?} nzButtonComponent
     * @param {?} nzButtonGroupComponent
     * @param {?} viewContainerRef
     */
    constructor(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
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
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap((/**
         * @param {?} e
         * @return {?}
         */
        e => e.stopPropagation())), mapTo(true));
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
    setDisabled(disabled) {
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
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayConfig() {
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
    }
    /**
     * @private
     * @return {?}
     */
    createOverlay() {
        if (!this.overlayRef) {
            /** @type {?} */
            const config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
            return this.overlayRef;
        }
        else {
            /** @type {?} */
            const overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    }
    /**
     * @param {?} overlayConfig
     * @return {?}
     */
    updateOverlayConfig(overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    subscribeToPositions(position) {
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} change
         * @return {?}
         */
        change => {
            this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        }));
    }
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    subscribeOverlayEvent(overlayRef) {
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e.keyCode === ESCAPE && !hasModifierKey(e)))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.nzDropdownMenu.setVisibleStateWhen(false);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getPortal() {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    }
    /**
     * @private
     * @return {?}
     */
    openMenu() {
        if (!this.dropdownOpen) {
            /** @type {?} */
            const overlayRef = this.createOverlay();
            /** @type {?} */
            const overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition((/** @type {?} */ (overlayConfig.positionStrategy)));
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    closeMenu() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    }
    /**
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    setPosition(positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions([...this.positions]);
    }
    /**
     * @private
     * @param {?} positions
     * @return {?}
     */
    updatePositionStrategy(positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setTriggerWidth() {
        if (this.platform.isBrowser) {
            /** @type {?} */
            const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    }
    /**
     * @return {?}
     */
    initActionSubscribe() {
        /** @type {?} */
        const hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        /** @type {?} */
        const dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        /** @type {?} */
        const menuClickVisible$ = this.nzClickHide
            ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false))
            : EMPTY;
        /** @type {?} */
        const supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        /** @type {?} */
        const subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([supVisible, subVisible]) => supVisible || subVisible)), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        visible => {
            if (!this.nzDisabled && this.nzVisible !== visible) {
                this.nzVisible = visible;
                this.updateOverlayByVisible();
                this.nzVisibleChange.emit(this.nzVisible);
                this.setTriggerWidth();
                this.nzDropdownMenu.setValue('triggerWidth', this.triggerWidth);
            }
        }));
    }
    /**
     * @return {?}
     */
    updateOverlayByVisible() {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        this.setDisabled(this.nzDisabled);
    }
    /**
     * @param {?} placement
     * @param {?} positions
     * @return {?}
     */
    regeneratePosition(placement, positions) {
        return [POSITION_MAP[placement], ...positions];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzVisible, nzTrigger, nzPlacement, nzDisabled, nzOverlayClassName, nzOverlayStyle, nzTableFilter } = changes;
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
    }
}
NzDropDownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-dropdown]',
                exportAs: 'nzDropdown'
            },] }
];
/** @nocollapse */
NzDropDownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Overlay },
    { type: Platform },
    { type: NzButtonComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzButtonGroupComponent, decorators: [{ type: Optional }] },
    { type: ViewContainerRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFJTCxPQUFPLEVBQ1AsYUFBYSxFQUVkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakcsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFtQixNQUFNLDhCQUE4QixDQUFDO0FBTXhGLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7SUFpTTlCLFlBQ1MsVUFBc0IsRUFDckIs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LFlBQUksSUFBSTtZQWhOTyxzQkFBc0IsdUJBaU43QyxRQUFRO1lBbk5YLGdCQUFnQjs7OzZCQStCZixLQUFLO3dCQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsTUFBTTs7QUFSa0I7SUFBZixZQUFZLEVBQUU7O3VEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTs7d0RBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzt1REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7O3NEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTs7MERBQXVCOzs7Ozs7SUF6Qi9DLHFDQUErQjs7Ozs7SUFDL0IseUNBQTZDOzs7OztJQUM3Qyx1Q0FBaUM7Ozs7O0lBQ2pDLDJDQUF5Qjs7Ozs7SUFDekIsaUNBQXdEOzs7OztJQUN4RCwyQ0FBNkI7Ozs7O0lBQzdCLCtDQUE0RDs7Ozs7SUFDNUQsd0NBQThFOzs7OztJQUM5RSxtREFBa0Q7Ozs7O0lBQ2xELGtEQUFpRDs7SUFDakQscUNBR0U7O0lBQ0YscUNBR0U7O0lBQ0YsNkNBQWlEOztJQUNqRCx3Q0FBZ0Q7O0lBQ2hELGtEQUF5Qzs7SUFDekMseUNBQTJDOztJQUMzQywwQ0FBNEM7O0lBQzVDLHlDQUE0Qzs7SUFDNUMsd0NBQTJDOztJQUMzQyw0Q0FBK0M7O0lBQy9DLGlEQUFpQzs7SUFDakMsNkNBQXdEOztJQUN4RCwwQ0FBcUQ7O0lBQ3JELDhDQUErRTs7SUFvSzdFLHlDQUE2Qjs7Ozs7SUFDN0IsdUNBQTJCOzs7OztJQUMzQixzQ0FBd0I7Ozs7O0lBQ3hCLHVDQUEwQjs7Ozs7SUFDMUIsZ0RBQWdFOzs7OztJQUNoRSxxREFBa0U7Ozs7O0lBQ2xFLCtDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBoYXNNb2RpZmllcktleSwgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENvbm5lY3RlZFBvc2l0aW9uLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56QnV0dG9uQ29tcG9uZW50LCBOekJ1dHRvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMsIElucHV0Qm9vbGVhbiwgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgbWVyZ2UsIEVNUFRZLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBtYXBUbywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCwgTnpQbGFjZW1lbnRUeXBlIH0gZnJvbSAnLi9uei1kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1kcm9wZG93bl0nLFxuICBleHBvcnRBczogJ256RHJvcGRvd24nXG59KVxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHRyaWdnZXJXaWR0aCA9IDA7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuICBwcml2YXRlIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TXTtcbiAgcHJpdmF0ZSBwb3NpdGlvblN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBvdmVybGF5U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICByZWFkb25seSBob3ZlciQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBtZXJnZShcbiAgICBmcm9tRXZlbnQodGhpcy5lbCwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKHRydWUpKSxcbiAgICBmcm9tRXZlbnQodGhpcy5lbCwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKGZhbHNlKSlcbiAgKTtcbiAgcmVhZG9ubHkgJGNsaWNrOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gZnJvbUV2ZW50KHRoaXMuZWwsICdjbGljaycpLnBpcGUoXG4gICAgdGFwKGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSksXG4gICAgbWFwVG8odHJ1ZSlcbiAgKTtcbiAgQElucHV0KCkgbnpEcm9wZG93bk1lbnU6IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xuICBASW5wdXQoKSBuelRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInID0gJ2hvdmVyJztcbiAgQElucHV0KCkgbnpNYXRjaFdpZHRoRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmFja2Ryb3AgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbGlja0hpZGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWaXNpYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelRhYmxlRmlsdGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBASW5wdXQoKSBuelBsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdkaXNhYmxlZCcsICcnKTtcbiAgICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xuICAgICAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMubnpWaXNpYmxlKTtcbiAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5XG4gICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWwpXG4gICAgICAgIC53aXRoTG9ja2VkUG9zaXRpb24oKSxcbiAgICAgIG1pbldpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aCxcbiAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLm56VHJpZ2dlciA9PT0gJ2NsaWNrJyxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IHRoaXMubnpCYWNrZHJvcCA/IHVuZGVmaW5lZCA6ICduei1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XG4gICAgICB0aGlzLnN1YnNjcmliZU92ZXJsYXlFdmVudCh0aGlzLm92ZXJsYXlSZWYpO1xuICAgICAgdGhpcy5zdWJzY3JpYmVUb1Bvc2l0aW9ucyhjb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpO1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKTtcbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUNvbmZpZyhvdmVybGF5Q29uZmlnKTtcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3ZlcmxheUNvbmZpZyhvdmVybGF5Q29uZmlnOiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgb3ZlcmxheUNvbmZpZy5taW5XaWR0aCA9IHRoaXMudHJpZ2dlcldpZHRoO1xuICAgIG92ZXJsYXlDb25maWcuaGFzQmFja2Ryb3AgPSB0aGlzLm56VHJpZ2dlciA9PT0gJ2NsaWNrJztcbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCdkcm9wRG93blBvc2l0aW9uJywgY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVPdmVybGF5RXZlbnQob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCksXG4gICAgICBvdmVybGF5UmVmLmRldGFjaG1lbnRzKCksXG4gICAgICBvdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5waXBlKGZpbHRlcihlID0+IGUua2V5Q29kZSA9PT0gRVNDQVBFICYmICFoYXNNb2RpZmllcktleShlKSkpXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmlzaWJsZVN0YXRlV2hlbihmYWxzZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9ydGFsKCk6IFRlbXBsYXRlUG9ydGFsIHtcbiAgICBpZiAoIXRoaXMucG9ydGFsIHx8IHRoaXMucG9ydGFsLnRlbXBsYXRlUmVmICE9PSB0aGlzLm56RHJvcGRvd25NZW51LnRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLm56RHJvcGRvd25NZW51LnRlbXBsYXRlUmVmLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb3J0YWw7XG4gIH1cblxuICBwcml2YXRlIG9wZW5NZW51KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kcm9wZG93bk9wZW4pIHtcbiAgICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcbiAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBvdmVybGF5UmVmLmdldENvbmZpZygpO1xuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnb3BlbicsIHRydWUpO1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbihvdmVybGF5Q29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcbiAgICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMuZ2V0UG9ydGFsKCkpO1xuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCdvcGVuJywgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UG9zaXRpb24ocG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gcG9zaXRpb25TdHJhdGVneTtcbiAgICBwb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoWy4uLnRoaXMucG9zaXRpb25zXSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uU3RyYXRlZ3kocG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9zaXRpb25TdHJhdGVneSkge1xuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm56TWF0Y2hXaWR0aEVsZW1lbnQgPyB0aGlzLm56TWF0Y2hXaWR0aEVsZW1lbnQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWw7XG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgaW5pdEFjdGlvblN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0VmlzaWJsZSQgPSB0aGlzLm56VHJpZ2dlciA9PT0gJ2hvdmVyJyA/IHRoaXMuaG92ZXIkIDogdGhpcy4kY2xpY2s7XG4gICAgY29uc3QgZHJvcGRvd25NZW51VmlzaWJsZSQgPSB0aGlzLm56RHJvcGRvd25NZW51LnZpc2libGUkO1xuICAgIGNvbnN0IG1lbnVDbGlja1Zpc2libGUkID0gdGhpcy5uekNsaWNrSGlkZVxuICAgICAgPyB0aGlzLm56RHJvcGRvd25NZW51Lm56TWVudURyb3Bkb3duU2VydmljZS5tZW51SXRlbUNsaWNrJC5waXBlKG1hcFRvKGZhbHNlKSlcbiAgICAgIDogRU1QVFk7XG4gICAgY29uc3Qgc3VwVmlzaWJsZSQgPSBtZXJnZShkcm9wZG93bk1lbnVWaXNpYmxlJCwgaG9zdFZpc2libGUkLCBtZW51Q2xpY2tWaXNpYmxlJCk7XG4gICAgY29uc3Qgc3ViVmlzaWJsZSQgPSB0aGlzLm56RHJvcGRvd25NZW51Lm56TWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiQ7XG4gICAgY29tYmluZUxhdGVzdChbc3VwVmlzaWJsZSQsIHN1YlZpc2libGUkXSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFtzdXBWaXNpYmxlLCBzdWJWaXNpYmxlXSkgPT4gc3VwVmlzaWJsZSB8fCBzdWJWaXNpYmxlKSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHZpc2libGUgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCAmJiB0aGlzLm56VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTtcbiAgICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMubnpWaXNpYmxlKTtcbiAgICAgICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICAgICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ3RyaWdnZXJXaWR0aCcsIHRoaXMudHJpZ2dlcldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB1cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xuICAgICAgdGhpcy5vcGVuTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXREaXNhYmxlZCh0aGlzLm56RGlzYWJsZWQpO1xuICB9XG5cbiAgcmVnZW5lcmF0ZVBvc2l0aW9uKHBsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlLCBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSk6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSB7XG4gICAgcmV0dXJuIFtQT1NJVElPTl9NQVBbcGxhY2VtZW50XSwgLi4ucG9zaXRpb25zXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG56QnV0dG9uQ29tcG9uZW50OiBOekJ1dHRvbkNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56QnV0dG9uR3JvdXBDb21wb25lbnQ6IE56QnV0dG9uR3JvdXBDb21wb25lbnQsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1kcm9wZG93bi10cmlnZ2VyJyk7XG4gICAgaWYgKHRoaXMubnpCdXR0b25Db21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpCdXR0b25Db21wb25lbnQuaXNJbkRyb3Bkb3duID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpCdXR0b25Hcm91cENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uekJ1dHRvbkdyb3VwQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RHJvcGRvd25NZW51KSB7XG4gICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICAgICAgdGhpcy5pbml0QWN0aW9uU3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kaXNwb3NlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgbnpWaXNpYmxlLFxuICAgICAgbnpUcmlnZ2VyLFxuICAgICAgbnpQbGFjZW1lbnQsXG4gICAgICBuekRpc2FibGVkLFxuICAgICAgbnpPdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgbnpPdmVybGF5U3R5bGUsXG4gICAgICBuelRhYmxlRmlsdGVyXG4gICAgfSA9IGNoYW5nZXM7XG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1lbnUpIHtcbiAgICAgIGlmIChuelZpc2libGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUudmlzaWJsZSQubmV4dCh0aGlzLm56VmlzaWJsZSk7XG4gICAgICB9XG4gICAgICBpZiAobnpUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256VHJpZ2dlcicsIHRoaXMubnpUcmlnZ2VyKTtcbiAgICAgIH1cbiAgICAgIGlmIChuelRhYmxlRmlsdGVyKSB7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256VGFibGVGaWx0ZXInLCB0aGlzLm56VGFibGVGaWx0ZXIpO1xuICAgICAgfVxuICAgICAgaWYgKG56T3ZlcmxheUNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduek92ZXJsYXlDbGFzc05hbWUnLCB0aGlzLm56T3ZlcmxheUNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAobnpPdmVybGF5U3R5bGUpIHtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpPdmVybGF5U3R5bGUnLCB0aGlzLm56T3ZlcmxheVN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGlmIChuelBsYWNlbWVudCkge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMubnpQbGFjZW1lbnQpO1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKFxuICAgICAgICAgICdkcm9wRG93blBvc2l0aW9uJyxcbiAgICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51Lm56UGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpICE9PSAtMSA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSB0aGlzLnJlZ2VuZXJhdGVQb3NpdGlvbih0aGlzLm56UGxhY2VtZW50LCB0aGlzLnBvc2l0aW9ucyk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLnBvc2l0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==