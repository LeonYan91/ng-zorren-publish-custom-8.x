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
import { ESCAPE } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Injector, Input, Optional, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { CdkPortalOutlet, ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { toCssPixel, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerRef } from './nz-drawer-ref';
/** @type {?} */
export const DRAWER_ANIMATE_DURATION = 300;
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'drawer';
/**
 * @template T, R, D
 */
// tslint:disable-next-line:no-any
export class NzDrawerComponent extends NzDrawerRef {
    /**
     * @param {?} document
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} overlay
     * @param {?} injector
     * @param {?} changeDetectorRef
     * @param {?} focusTrapFactory
     * @param {?} viewContainerRef
     * @param {?} overlayKeyboardDispatcher
     */
    constructor(document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher) {
        super();
        this.document = document;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.overlay = overlay;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.focusTrapFactory = focusTrapFactory;
        this.viewContainerRef = viewContainerRef;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this.nzClosable = true;
        this.nzNoAnimation = false;
        this.nzKeyboard = true;
        this.nzPlacement = 'right';
        this.nzMaskStyle = {};
        this.nzBodyStyle = {};
        this.nzWidth = 256;
        this.nzHeight = 256;
        this.nzZIndex = 1000;
        this.nzOffsetX = 0;
        this.nzOffsetY = 0;
        this.nzOnViewInit = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.destroy$ = new Subject();
        this.isOpen = false;
        this.templateContext = {
            $implicit: undefined,
            drawerRef: (/** @type {?} */ (this))
        };
        this.nzAfterOpen = new Subject();
        this.nzAfterClose = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        this.isOpen = value;
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this.isOpen;
    }
    /**
     * @return {?}
     */
    get offsetTransform() {
        if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(${this.nzOffsetX}px)`;
            case 'right':
                return `translateX(-${this.nzOffsetX}px)`;
            case 'top':
                return `translateY(${this.nzOffsetY}px)`;
            case 'bottom':
                return `translateY(-${this.nzOffsetY}px)`;
        }
    }
    /**
     * @return {?}
     */
    get transform() {
        if (this.isOpen) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(-100%)`;
            case 'right':
                return `translateX(100%)`;
            case 'top':
                return `translateY(-100%)`;
            case 'bottom':
                return `translateY(100%)`;
        }
    }
    /**
     * @return {?}
     */
    get width() {
        return this.isLeftOrRight ? toCssPixel(this.nzWidth) : null;
    }
    /**
     * @return {?}
     */
    get height() {
        return !this.isLeftOrRight ? toCssPixel(this.nzHeight) : null;
    }
    /**
     * @return {?}
     */
    get isLeftOrRight() {
        return this.nzPlacement === 'left' || this.nzPlacement === 'right';
    }
    /**
     * @return {?}
     */
    get afterOpen() {
        return this.nzAfterOpen.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClose() {
        return this.nzAfterClose.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: (/** @type {?} */ (this)) };
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.attachBodyContent();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.nzOnViewInit.emit();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzVisible')) {
            /** @type {?} */
            const value = changes.nzVisible.currentValue;
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.disposeOverlay();
    }
    /**
     * @private
     * @return {?}
     */
    getAnimationDuration() {
        return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this.isOpen = false;
        this.updateOverlayStyle();
        this.overlayKeyboardDispatcher.remove((/** @type {?} */ (this.overlayRef)));
        this.changeDetectorRef.detectChanges();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.updateBodyOverflow();
            this.restoreFocus();
            this.nzAfterClose.next(result);
            this.nzAfterClose.complete();
        }), this.getAnimationDuration());
    }
    /**
     * @return {?}
     */
    open() {
        this.isOpen = true;
        this.overlayKeyboardDispatcher.add((/** @type {?} */ (this.overlayRef)));
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.nzAfterOpen.next();
        }), this.getAnimationDuration());
    }
    /**
     * @return {?}
     */
    closeClick() {
        this.nzOnClose.emit();
    }
    /**
     * @return {?}
     */
    maskClick() {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    }
    /**
     * @private
     * @return {?}
     */
    attachBodyContent() {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof Type) {
            /** @type {?} */
            const childInjector = new PortalInjector(this.injector, new WeakMap([[NzDrawerRef, this]]));
            /** @type {?} */
            const componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
            /** @type {?} */
            const componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    }
    /**
     * @private
     * @return {?}
     */
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            (/** @type {?} */ (this.overlayRef)).keydownEvents()
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (event.keyCode === ESCAPE && this.isOpen && this.nzKeyboard) {
                    this.nzOnClose.emit();
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    disposeOverlay() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        this.overlayRef = null;
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }
    /**
     * @private
     * @return {?}
     */
    updateOverlayStyle() {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateBodyOverflow() {
        if (this.overlayRef) {
            if (this.isOpen) {
                (/** @type {?} */ (this.overlayRef.getConfig().scrollStrategy)).enable();
            }
            else {
                (/** @type {?} */ (this.overlayRef.getConfig().scrollStrategy)).disable();
            }
        }
    }
    /**
     * @return {?}
     */
    savePreviouslyFocusedElement() {
        if (this.document && !this.previouslyFocusedElement) {
            this.previouslyFocusedElement = (/** @type {?} */ (this.document.activeElement));
            // We need the extra check, because IE's svg element has no blur method.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                this.previouslyFocusedElement.blur();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    trapFocus() {
        if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
            this.focusTrap = this.focusTrapFactory.create((/** @type {?} */ (this.overlayRef)).overlayElement);
            this.focusTrap.focusInitialElement();
        }
    }
    /**
     * @private
     * @return {?}
     */
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
NzDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-drawer',
                exportAs: 'nzDrawer',
                template: "<ng-template #drawerTemplate>\n  <div\n    class=\"ant-drawer\"\n    [nzNoAnimation]=\"nzNoAnimation\"\n    [class.ant-drawer-open]=\"isOpen\"\n    [class.ant-drawer-top]=\"nzPlacement === 'top'\"\n    [class.ant-drawer-bottom]=\"nzPlacement === 'bottom'\"\n    [class.ant-drawer-right]=\"nzPlacement === 'right'\"\n    [class.ant-drawer-left]=\"nzPlacement === 'left'\"\n    [style.transform]=\"offsetTransform\"\n    [style.zIndex]=\"nzZIndex\">\n    <div  class=\"ant-drawer-mask\" (click)=\"maskClick()\" *ngIf=\"nzMask\" [ngStyle]=\"nzMaskStyle\"></div>\n    <div class=\"ant-drawer-content-wrapper {{ nzWrapClassName }}\"\n         [style.width]=\"width\"\n         [style.height]=\"height\"\n         [style.transform]=\"transform\">\n      <div class=\"ant-drawer-content\">\n        <div class=\"ant-drawer-wrapper-body\" [style.height]=\"isLeftOrRight ? '100%' : null\">\n          <div *ngIf=\"nzTitle || nzClosable\"\n            [class.ant-drawer-header]=\"!!nzTitle\"\n            [class.ant-drawer-header-no-title]=\"!!nzTitle\">\n            <div *ngIf=\"nzTitle\" class=\"ant-drawer-title\">\n              <ng-container *nzStringTemplateOutlet=\"nzTitle\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\n            </div>\n            <button *ngIf=\"nzClosable\" (click)=\"closeClick()\" aria-label=\"Close\" class=\"ant-drawer-close\">\n              <i nz-icon nzType=\"close\"></i>\n            </button>\n          </div>\n          <div class=\"ant-drawer-body\" [ngStyle]=\"nzBodyStyle\">\n            <ng-template cdkPortalOutlet></ng-template>\n            <ng-container *ngIf=\"isTemplateRef(nzContent)\">\n              <ng-container *ngTemplateOutlet=\"nzContent; context: templateContext\"></ng-container>\n            </ng-container>\n            <ng-content *ngIf=\"!nzContent\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzDrawerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: Renderer2 },
    { type: Overlay },
    { type: Injector },
    { type: ChangeDetectorRef },
    { type: FocusTrapFactory },
    { type: ViewContainerRef },
    { type: OverlayKeyboardDispatcher }
];
NzDrawerComponent.propDecorators = {
    nzContent: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzMaskClosable: [{ type: Input }],
    nzMask: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzKeyboard: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzMaskStyle: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzWrapClassName: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzHeight: [{ type: Input }],
    nzZIndex: [{ type: Input }],
    nzOffsetX: [{ type: Input }],
    nzOffsetY: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzOnViewInit: [{ type: Output }],
    nzOnClose: [{ type: Output }],
    drawerTemplate: [{ type: ViewChild, args: ['drawerTemplate', { static: true },] }],
    bodyPortalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: false },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzClosable", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzMask", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzKeyboard", void 0);
if (false) {
    /** @type {?} */
    NzDrawerComponent.prototype.nzContent;
    /** @type {?} */
    NzDrawerComponent.prototype.nzClosable;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMaskClosable;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMask;
    /** @type {?} */
    NzDrawerComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzDrawerComponent.prototype.nzKeyboard;
    /** @type {?} */
    NzDrawerComponent.prototype.nzTitle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMaskStyle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzWrapClassName;
    /** @type {?} */
    NzDrawerComponent.prototype.nzWidth;
    /** @type {?} */
    NzDrawerComponent.prototype.nzHeight;
    /** @type {?} */
    NzDrawerComponent.prototype.nzZIndex;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOffsetX;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOffsetY;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOnViewInit;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOnClose;
    /** @type {?} */
    NzDrawerComponent.prototype.drawerTemplate;
    /** @type {?} */
    NzDrawerComponent.prototype.bodyPortalOutlet;
    /** @type {?} */
    NzDrawerComponent.prototype.destroy$;
    /** @type {?} */
    NzDrawerComponent.prototype.previouslyFocusedElement;
    /** @type {?} */
    NzDrawerComponent.prototype.nzContentParams;
    /** @type {?} */
    NzDrawerComponent.prototype.overlayRef;
    /** @type {?} */
    NzDrawerComponent.prototype.portal;
    /** @type {?} */
    NzDrawerComponent.prototype.focusTrap;
    /** @type {?} */
    NzDrawerComponent.prototype.isOpen;
    /** @type {?} */
    NzDrawerComponent.prototype.templateContext;
    /** @type {?} */
    NzDrawerComponent.prototype.nzAfterOpen;
    /** @type {?} */
    NzDrawerComponent.prototype.nzAfterClose;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.document;
    /** @type {?} */
    NzDrawerComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.focusTrapFactory;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.overlayKeyboardDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJhd2VyLyIsInNvdXJjZXMiOlsibnotZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLHlCQUF5QixFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDckcsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZHLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTlDLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxHQUFHOztNQUVwQyx3QkFBd0IsR0FBRyxRQUFROzs7O0FBU3pDLGtDQUFrQztBQUNsQyxNQUFNLE9BQU8saUJB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O0lBQ3pDLHFDQUF5Qjs7SUFDekIsc0NBQXVCOztJQUN2QixzQ0FBdUI7O0lBV3ZCLHlDQUEyRDs7SUFDM0Qsc0NBQThEOztJQUU5RCwyQ0FBaUY7O0lBQ2pGLDZDQUFpRjs7SUFFakYscUNBQStCOztJQUMvQixxREFBc0M7O0lBQ3RDLDRDQUFtQjs7SUFDbkIsdUNBQThCOztJQUM5QixtQ0FBdUI7O0lBQ3ZCLHNDQUFxQjs7SUFDckIsbUNBQWU7O0lBQ2YsNENBR0U7O0lBK0NGLHdDQUFrQzs7SUFDbEMseUNBQWdDOzs7OztJQWdCOUIscUNBQW1EOztJQUNuRCw0Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUEyQjs7Ozs7SUFDM0Isb0NBQXdCOzs7OztJQUN4QixxQ0FBMEI7Ozs7O0lBQzFCLDhDQUE0Qzs7Ozs7SUFDNUMsNkNBQTBDOzs7OztJQUMxQyw2Q0FBMEM7Ozs7O0lBQzFDLHNEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENka1BvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB0b0Nzc1BpeGVsLCBJbnB1dEJvb2xlYW4sIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCwgTnpEcmF3ZXJQbGFjZW1lbnQgfSBmcm9tICcuL256LWRyYXdlci1vcHRpb25zJztcbmltcG9ydCB7IE56RHJhd2VyUmVmIH0gZnJvbSAnLi9uei1kcmF3ZXItcmVmJztcblxuZXhwb3J0IGNvbnN0IERSQVdFUl9BTklNQVRFX0RVUkFUSU9OID0gMzAwO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZHJhd2VyJyxcbiAgZXhwb3J0QXM6ICduekRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgY2xhc3MgTnpEcmF3ZXJDb21wb25lbnQ8VCA9IGFueSwgUiA9IGFueSwgRCA9IGFueT4gZXh0ZW5kcyBOekRyYXdlclJlZjxSPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpDb250ZW50OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRDsgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9PiB8IFR5cGU8VD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNsb3NhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrQ2xvc2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56TWFzazogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56S2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBOekRyYXdlclBsYWNlbWVudCA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIG56TWFza1N0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KCkgbnpCb2R5U3R5bGU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKSBueldyYXBDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpXaWR0aDogbnVtYmVyIHwgc3RyaW5nID0gMjU2O1xuICBASW5wdXQoKSBuekhlaWdodDogbnVtYmVyIHwgc3RyaW5nID0gMjU2O1xuICBASW5wdXQoKSBuelpJbmRleCA9IDEwMDA7XG4gIEBJbnB1dCgpIG56T2Zmc2V0WCA9IDA7XG4gIEBJbnB1dCgpIG56T2Zmc2V0WSA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzT3BlbjtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uVmlld0luaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZHJhd2VyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkcmF3ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogZmFsc2UgfSkgYm9keVBvcnRhbE91dGxldDogQ2RrUG9ydGFsT3V0bGV0O1xuXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgbnpDb250ZW50UGFyYW1zOiBEOyAvLyBvbmx5IHNlcnZpY2VcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw7XG4gIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xuICBpc09wZW4gPSBmYWxzZTtcbiAgdGVtcGxhdGVDb250ZXh0OiB7ICRpbXBsaWNpdDogRCB8IHVuZGVmaW5lZDsgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9ID0ge1xuICAgICRpbXBsaWNpdDogdW5kZWZpbmVkLFxuICAgIGRyYXdlclJlZjogdGhpcyBhcyBOekRyYXdlclJlZjxSPlxuICB9O1xuXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbiB8fCB0aGlzLm56T2Zmc2V0WCArIHRoaXMubnpPZmZzZXRZID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm56UGxhY2VtZW50KSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7dGhpcy5uek9mZnNldFh9cHgpYDtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKC0ke3RoaXMubnpPZmZzZXRYfXB4KWA7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVkoJHt0aGlzLm56T2Zmc2V0WX1weClgO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVZKC0ke3RoaXMubnpPZmZzZXRZfXB4KWA7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRyYW5zZm9ybSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5uelBsYWNlbWVudCkge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWCgtMTAwJSlgO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVgoMTAwJSlgO1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVZKC0xMDAlKWA7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVkoMTAwJSlgO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pc0xlZnRPclJpZ2h0ID8gdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuICF0aGlzLmlzTGVmdE9yUmlnaHQgPyB0b0Nzc1BpeGVsKHRoaXMubnpIZWlnaHQpIDogbnVsbDtcbiAgfVxuXG4gIGdldCBpc0xlZnRPclJpZ2h0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56UGxhY2VtZW50ID09PSAnbGVmdCcgfHwgdGhpcy5uelBsYWNlbWVudCA9PT0gJ3JpZ2h0JztcbiAgfVxuXG4gIG56QWZ0ZXJPcGVuID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbnpBZnRlckNsb3NlID0gbmV3IFN1YmplY3Q8Uj4oKTtcblxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgcmV0dXJuIHRoaXMubnpBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIG92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXJcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xuICAgIHRoaXMudXBkYXRlT3ZlcmxheVN0eWxlKCk7XG4gICAgdGhpcy51cGRhdGVCb2R5T3ZlcmZsb3coKTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dCA9IHsgJGltcGxpY2l0OiB0aGlzLm56Q29udGVudFBhcmFtcywgZHJhd2VyUmVmOiB0aGlzIGFzIE56RHJhd2VyUmVmPFI+IH07XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hCb2R5Q29udGVudCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uek9uVmlld0luaXQuZW1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduelZpc2libGUnKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VzLm56VmlzaWJsZS5jdXJyZW50VmFsdWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGlzcG9zZU92ZXJsYXkoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QW5pbWF0aW9uRHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uek5vQW5pbWF0aW9uID8gMCA6IERSQVdFUl9BTklNQVRFX0RVUkFUSU9OO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5U3R5bGUoKTtcbiAgICB0aGlzLm92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIucmVtb3ZlKHRoaXMub3ZlcmxheVJlZiEpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVCb2R5T3ZlcmZsb3coKTtcbiAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XG4gICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5uZXh0KHJlc3VsdCk7XG4gICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5jb21wbGV0ZSgpO1xuICAgIH0sIHRoaXMuZ2V0QW5pbWF0aW9uRHVyYXRpb24oKSk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLm92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIuYWRkKHRoaXMub3ZlcmxheVJlZiEpO1xuICAgIHRoaXMudXBkYXRlT3ZlcmxheVN0eWxlKCk7XG4gICAgdGhpcy51cGRhdGVCb2R5T3ZlcmZsb3coKTtcbiAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICB0aGlzLnRyYXBGb2N1cygpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uekFmdGVyT3Blbi5uZXh0KCk7XG4gICAgfSwgdGhpcy5nZXRBbmltYXRpb25EdXJhdGlvbigpKTtcbiAgfVxuXG4gIGNsb3NlQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5uek9uQ2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgbWFza0NsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TWFza0Nsb3NhYmxlICYmIHRoaXMubnpNYXNrKSB7XG4gICAgICB0aGlzLm56T25DbG9zZS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hCb2R5Q29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmJvZHlQb3J0YWxPdXRsZXQuZGlzcG9zZSgpO1xuXG4gICAgaWYgKHRoaXMubnpDb250ZW50IGluc3RhbmNlb2YgVHlwZSkge1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBuZXcgV2Vha01hcChbW056RHJhd2VyUmVmLCB0aGlzXV0pKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWw8VD4odGhpcy5uekNvbnRlbnQsIG51bGwsIGNoaWxkSW5qZWN0b3IpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5ib2R5UG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChjb21wb25lbnRQb3J0YWwpO1xuICAgICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMubnpDb250ZW50UGFyYW1zKTtcbiAgICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmRyYXdlclRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmIS5rZXlkb3duRXZlbnRzKClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy5pc09wZW4gJiYgdGhpcy5uektleWJvYXJkKSB7XG4gICAgICAgICAgICB0aGlzLm56T25DbG9zZS5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRpc3Bvc2VPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlT3ZlcmxheVN0eWxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCwgJ3BvaW50ZXItZXZlbnRzJywgdGhpcy5pc09wZW4gPyAnYXV0bycgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQm9keU92ZXJmbG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkuc2Nyb2xsU3RyYXRlZ3khLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnNjcm9sbFN0cmF0ZWd5IS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudCAmJiAhdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUncyBzdmcgZWxlbWVudCBoYXMgbm8gYmx1ciBtZXRob2QuXG4gICAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb2N1c1RyYXAgJiYgdGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMub3ZlcmxheVJlZiEub3ZlcmxheUVsZW1lbnQpO1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ICYmIHR5cGVvZiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iXX0=