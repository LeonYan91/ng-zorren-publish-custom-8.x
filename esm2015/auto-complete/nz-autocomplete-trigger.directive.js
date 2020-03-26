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
import { DOWN_ARROW, ENTER, ESCAPE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { forwardRef, Directive, ElementRef, Inject, Input, NgZone, Optional, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { delay, distinct, map, take, tap } from 'rxjs/operators';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
/** @type {?} */
export const NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NzAutocompleteTriggerDirective)),
    multi: true
};
/**
 * @return {?}
 */
export function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        "you're attempting to open it after the ngAfterContentInit hook.");
}
export class NzAutocompleteTriggerDirective {
    /**
     * @param {?} elementRef
     * @param {?} overlay
     * @param {?} viewContainerRef
     * @param {?} ngZone
     * @param {?} document
     */
    constructor(elementRef, overlay, viewContainerRef, ngZone, document) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.document = document;
        // tslint:disable-next-line:no-any
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this.panelOpen = false;
    }
    /**
     * Current active option
     * @return {?}
     */
    get activeOption() {
        if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
            return this.nzAutocomplete.activeItem;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyPanel();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setTriggerValue(value);
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
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    }
    /**
     * @return {?}
     */
    openPanel() {
        this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
        this.updateStatus();
    }
    /**
     * @return {?}
     */
    closePanel() {
        if (this.panelOpen) {
            this.nzAutocomplete.isOpen = this.panelOpen = false;
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.selectionChangeSubscription.unsubscribe();
                this.overlayBackdropClickSubscription.unsubscribe();
                this.overlayPositionChangeSubscription.unsubscribe();
                this.optionsChangeSubscription.unsubscribe();
                this.overlayRef.detach();
                this.overlayRef = null;
                this.portal = null;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
        if (keyCode === ESCAPE) {
            event.preventDefault();
        }
        if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
            // Reset value when tab / ESC close
            if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                this.setTriggerValue(this.previousValue);
            }
            this.closePanel();
        }
        else if (this.panelOpen && keyCode === ENTER) {
            if (this.nzAutocomplete.showPanel && this.activeOption) {
                event.preventDefault();
                this.activeOption.selectViaInteraction();
            }
        }
        else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
            event.stopPropagation();
            event.preventDefault();
            if (keyCode === UP_ARROW) {
                this.nzAutocomplete.setPreviousItemActive();
            }
            else {
                this.nzAutocomplete.setNextItemActive();
            }
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
            this.doBackfill();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        /** @type {?} */
        const document = (/** @type {?} */ (this.document));
        /** @type {?} */
        let value = target.value;
        if (target.type === 'number') {
            value = value === '' ? null : parseFloat(value);
        }
        if (this.previousValue !== value) {
            this.previousValue = value;
            this._onChange(value);
            if (this.canOpen() && document.activeElement === event.target) {
                this.openPanel();
            }
        }
    }
    /**
     * @return {?}
     */
    handleFocus() {
        if (this.canOpen()) {
            this.openPanel();
        }
    }
    /**
     * @return {?}
     */
    handleBlur() {
        this.closePanel();
        this._onTouched();
    }
    /**
     * Subscription data source changes event
     * @private
     * @return {?}
     */
    subscribeOptionsChange() {
        /** @type {?} */
        const firstStable = this.ngZone.onStable.asObservable().pipe(take(1));
        /** @type {?} */
        const optionChanges = this.nzAutocomplete.options.changes.pipe(tap((/**
         * @return {?}
         */
        () => this.positionStrategy.reapplyLastPosition())), delay(0));
        return merge(firstStable, optionChanges).subscribe((/**
         * @return {?}
         */
        () => {
            this.resetActiveItem();
            if (this.panelOpen) {
                (/** @type {?} */ (this.overlayRef)).updatePosition();
            }
        }));
    }
    /**
     * Subscription option changes event and set the value
     * @private
     * @return {?}
     */
    subscribeSelectionChange() {
        return this.nzAutocomplete.selectionChange.subscribe((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            this.setValueAndClose(option);
        }));
    }
    /**
     * Subscription external click and close panel
     * @private
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const clickTarget = (/** @type {?} */ (event.target));
            // Make sure is not self
            if (clickTarget !== this.elementRef.nativeElement &&
                !(/** @type {?} */ (this.overlayRef)).overlayElement.contains(clickTarget) &&
                this.panelOpen) {
                this.closePanel();
            }
        }));
    }
    /**
     * Subscription overlay position changes and reset dropdown position
     * @private
     * @return {?}
     */
    subscribeOverlayPositionChange() {
        return this.positionStrategy.positionChanges
            .pipe(map((/**
         * @param {?} position
         * @return {?}
         */
        (position) => position.connectionPair.originY)), distinct(), delay(0))
            .subscribe((/**
         * @param {?} position
         * @return {?}
         */
        (position) => {
            this.nzAutocomplete.updatePosition(position);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    attachOverlay() {
        if (!this.nzAutocomplete) {
            throw getNzAutocompleteMissingPanelError();
        }
        if (!this.portal) {
            this.portal = new TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
        }
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayPositionChangeSubscription = this.subscribeOverlayPositionChange();
            this.selectionChangeSubscription = this.subscribeSelectionChange();
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            this.optionsChangeSubscription = this.subscribeOptionsChange();
        }
        this.nzAutocomplete.isOpen = this.panelOpen = true;
    }
    /**
     * @private
     * @return {?}
     */
    updateStatus() {
        if (this.overlayRef) {
            this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
        }
        this.nzAutocomplete.setVisibility();
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    }
    /**
     * @private
     * @return {?}
     */
    destroyPanel() {
        if (this.overlayRef) {
            this.closePanel();
        }
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    }
    /**
     * @private
     * @return {?}
     */
    getConnectedElement() {
        return this.elementRef;
    }
    /**
     * @private
     * @return {?}
     */
    getHostWidth() {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.getConnectedElement())
            .withFlexibleDimensions(false)
            .withPush(false)
            .withPositions(positions);
        return this.positionStrategy;
    }
    /**
     * @private
     * @return {?}
     */
    resetActiveItem() {
        /** @type {?} */
        const index = this.nzAutocomplete.getOptionIndex(this.previousValue);
        this.nzAutocomplete.clearSelectedOptions(null, true);
        if (index !== -1) {
            this.nzAutocomplete.setActiveItem(index);
            this.nzAutocomplete.activeItem.select(false);
        }
        else {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
        }
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    setValueAndClose(option) {
        /** @type {?} */
        const value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setTriggerValue(value) {
        this.elementRef.nativeElement.value = value || '';
        if (!this.nzAutocomplete.nzBackfill) {
            this.previousValue = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    doBackfill() {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    }
    /**
     * @private
     * @return {?}
     */
    canOpen() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    }
}
NzAutocompleteTriggerDirective.decorators = [
    { type: Directive, args: [{
                selector: `input[nzAutocomplete], textarea[nzAutocomplete]`,
                exportAs: 'nzAutocompleteTrigger',
                providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
                host: {
                    autocomplete: 'off',
                    'aria-autocomplete': 'list',
                    '(focusin)': 'handleFocus()',
                    '(blur)': 'handleBlur()',
                    '(input)': 'handleInput($event)',
                    '(keydown)': 'handleKeydown($event)'
                }
            },] }
];
/** @nocollapse */
NzAutocompleteTriggerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Overlay },
    { type: ViewContainerRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NzAutocompleteTriggerDirective.propDecorators = {
    nzAutocomplete: [{ type: Input }]
};
if (false) {
    /**
     * Bind nzAutocomplete component
     * @type {?}
     */
    NzAutocompleteTriggerDirective.prototype.nzAutocomplete;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._onChange;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._onTouched;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.panelOpen;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.selectionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.optionsChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.overlayBackdropClickSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.overlayPositionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hdXRvLWNvbXBsZXRlLyIsInNvdXJjZXMiOlsibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRixPQUFPLEVBRUwsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBSWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFFVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFdEUsTUFBTSxPQUFPLDhCQUE4QixHQUFxQjtJQUM5RCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQztJQUM3RCxLQUFLLEVBQUUsSUFBSTtDQUNa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LFFBQVEsQ0FBQztJQUNoRCxDQUFDOzs7WUFwVUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpREFBaUQ7Z0JBQzNELFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxJQUFJLEVBQUU7b0JBQ0osWUFBWSxFQUFFLEtBQUs7b0JBQ25CLG1CQUFtQixFQUFFLE1BQU07b0JBQzNCLFdBQVcsRUFBRSxlQUFlO29CQUM1QixRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLHFCQUFxQjtvQkFDaEMsV0FBVyxFQUFFLHVCQUF1QjtpQkFDckM7YUFDRjs7OztZQTNDQyxVQUFVO1lBWFYsT0FBTztZQWtCUCxnQkFBZ0I7WUFIaEIsTUFBTTs0Q0F1RUgsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7NkJBN0I3QixLQUFLOzs7Ozs7O0lBQU4sd0RBQWlEOztJQUdqRCxtREFBMkM7O0lBQzNDLG9EQUFzQjs7SUFDdEIsbURBQTJCOzs7OztJQVMzQixvREFBc0M7Ozs7O0lBQ3RDLGdEQUEwQzs7Ozs7SUFDMUMsMERBQTREOzs7OztJQUM1RCx1REFBOEM7Ozs7O0lBQzlDLHFFQUFrRDs7Ozs7SUFDbEQsbUVBQWdEOzs7OztJQUNoRCwwRUFBdUQ7Ozs7O0lBQ3ZELDJFQUF3RDs7Ozs7SUFHdEQsb0RBQThCOzs7OztJQUM5QixpREFBd0I7Ozs7O0lBQ3hCLDBEQUEwQzs7Ozs7SUFDMUMsZ0RBQXNCOzs7OztJQUV0QixrREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgUG9zaXRpb25TdHJhdGVneSxcbiAgVmVydGljYWxDb25uZWN0aW9uUG9zXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV4aXN0aW5nUHJvdmlkZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZGlzdGluY3QsIG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgTlpfQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SOiBFeGlzdGluZ1Byb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROekF1dG9jb21wbGV0ZU1pc3NpbmdQYW5lbEVycm9yKCk6IEVycm9yIHtcbiAgcmV0dXJuIEVycm9yKFxuICAgICdBdHRlbXB0aW5nIHRvIG9wZW4gYW4gdW5kZWZpbmVkIGluc3RhbmNlIG9mIGBuei1hdXRvY29tcGxldGVgLiAnICtcbiAgICAgICdNYWtlIHN1cmUgdGhhdCB0aGUgaWQgcGFzc2VkIHRvIHRoZSBgbnpBdXRvY29tcGxldGVgIGlzIGNvcnJlY3QgYW5kIHRoYXQgJyArXG4gICAgICBcInlvdSdyZSBhdHRlbXB0aW5nIHRvIG9wZW4gaXQgYWZ0ZXIgdGhlIG5nQWZ0ZXJDb250ZW50SW5pdCBob29rLlwiXG4gICk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W256QXV0b2NvbXBsZXRlXSwgdGV4dGFyZWFbbnpBdXRvY29tcGxldGVdYCxcbiAgZXhwb3J0QXM6ICduekF1dG9jb21wbGV0ZVRyaWdnZXInLFxuICBwcm92aWRlcnM6IFtOWl9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1JdLFxuICBob3N0OiB7XG4gICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgJyhmb2N1c2luKSc6ICdoYW5kbGVGb2N1cygpJyxcbiAgICAnKGJsdXIpJzogJ2hhbmRsZUJsdXIoKScsXG4gICAgJyhpbnB1dCknOiAnaGFuZGxlSW5wdXQoJGV2ZW50KScsXG4gICAgJyhrZXlkb3duKSc6ICdoYW5kbGVLZXlkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XG4gIC8qKiBCaW5kIG56QXV0b2NvbXBsZXRlIGNvbXBvbmVudCAqL1xuICBASW5wdXQoKSBuekF1dG9jb21wbGV0ZTogTnpBdXRvY29tcGxldGVDb21wb25lbnQ7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcbiAgcGFuZWxPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEN1cnJlbnQgYWN0aXZlIG9wdGlvbiAqL1xuICBnZXQgYWN0aXZlT3B0aW9uKCk6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5uekF1dG9jb21wbGV0ZSAmJiB0aGlzLm56QXV0b2NvbXBsZXRlLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHByaXZhdGUgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDx7fT4gfCBudWxsO1xuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBvdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG92ZXJsYXlQb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueVxuICApIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95UGFuZWwoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXRUcmlnZ2VyVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiB7fSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgZWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgdGhpcy5hdHRhY2hPdmVybGF5KCk7XG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbiAgfVxuXG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLmlzT3BlbiA9IHRoaXMucGFuZWxPcGVuID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgICB0aGlzLnBvcnRhbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGNvbnN0IGlzQXJyb3dLZXkgPSBrZXlDb2RlID09PSBVUF9BUlJPVyB8fCBrZXlDb2RlID09PSBET1dOX0FSUk9XO1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgKGtleUNvZGUgPT09IEVTQ0FQRSB8fCBrZXlDb2RlID09PSBUQUIpKSB7XG4gICAgICAvLyBSZXNldCB2YWx1ZSB3aGVuIHRhYiAvIEVTQyBjbG9zZVxuICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uICYmIHRoaXMuYWN0aXZlT3B0aW9uLmdldExhYmVsKCkgIT09IHRoaXMucHJldmlvdXNWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh0aGlzLnByZXZpb3VzVmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhbmVsT3BlbiAmJiBrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgaWYgKHRoaXMubnpBdXRvY29tcGxldGUuc2hvd1BhbmVsICYmIHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNlbGVjdFZpYUludGVyYWN0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhbmVsT3BlbiAmJiBpc0Fycm93S2V5ICYmIHRoaXMubnpBdXRvY29tcGxldGUuc2hvd1BhbmVsKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbi5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRvQmFja2ZpbGwoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5kb2N1bWVudCBhcyBEb2N1bWVudDtcbiAgICBsZXQgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IG51bGwgPSB0YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlID09PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmNhbk9wZW4oKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5PcGVuKCkpIHtcbiAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZGF0YSBzb3VyY2UgY2hhbmdlcyBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVPcHRpb25zQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3QgZmlyc3RTdGFibGUgPSB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpO1xuICAgIGNvbnN0IG9wdGlvbkNoYW5nZXMgPSB0aGlzLm56QXV0b2NvbXBsZXRlLm9wdGlvbnMuY2hhbmdlcy5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMucG9zaXRpb25TdHJhdGVneS5yZWFwcGx5TGFzdFBvc2l0aW9uKCkpLFxuICAgICAgZGVsYXkoMClcbiAgICApO1xuICAgIHJldHVybiBtZXJnZShmaXJzdFN0YWJsZSwgb3B0aW9uQ2hhbmdlcykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKCk7XG4gICAgICBpZiAodGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmIS51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBvcHRpb24gY2hhbmdlcyBldmVudCBhbmQgc2V0IHRoZSB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5uekF1dG9jb21wbGV0ZS5zZWxlY3Rpb25DaGFuZ2Uuc3Vic2NyaWJlKChvcHRpb246IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlQW5kQ2xvc2Uob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZXh0ZXJuYWwgY2xpY2sgYW5kIGNsb3NlIHBhbmVsXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIG1lcmdlPE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PihcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLmRvY3VtZW50LCAnY2xpY2snKSxcbiAgICAgIGZyb21FdmVudDxUb3VjaEV2ZW50Pih0aGlzLmRvY3VtZW50LCAndG91Y2hlbmQnKVxuICAgICkuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAvLyBNYWtlIHN1cmUgaXMgbm90IHNlbGZcbiAgICAgIGlmIChcbiAgICAgICAgY2xpY2tUYXJnZXQgIT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICF0aGlzLm92ZXJsYXlSZWYhLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJlxuICAgICAgICB0aGlzLnBhbmVsT3BlblxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBvdmVybGF5IHBvc2l0aW9uIGNoYW5nZXMgYW5kIHJlc2V0IGRyb3Bkb3duIHBvc2l0aW9uXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlQb3NpdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKSA9PiBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZKSxcbiAgICAgICAgZGlzdGluY3QoKSxcbiAgICAgICAgZGVsYXkoMClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHBvc2l0aW9uOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MpID0+IHtcbiAgICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS51cGRhdGVQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpBdXRvY29tcGxldGUpIHtcbiAgICAgIHRocm93IGdldE56QXV0b2NvbXBsZXRlTWlzc2luZ1BhbmVsRXJyb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucG9ydGFsKSB7XG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLm56QXV0b2NvbXBsZXRlLnRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XG4gICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpO1xuICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPcHRpb25zQ2hhbmdlKCk7XG4gICAgfVxuICAgIHRoaXMubnpBdXRvY29tcGxldGUuaXNPcGVuID0gdGhpcy5wYW5lbE9wZW4gPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyB3aWR0aDogdGhpcy5uekF1dG9jb21wbGV0ZS5ueldpZHRoIHx8IHRoaXMuZ2V0SG9zdFdpZHRoKCkgfSk7XG4gICAgfVxuICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0VmlzaWJpbGl0eSgpO1xuICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKCk7XG4gICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgICB0aGlzLmFjdGl2ZU9wdGlvbi5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95UGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLmdldE92ZXJsYXlQb3NpdGlvbigpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcbiAgICAgIC8vIGRlZmF1bHQgaG9zdCBlbGVtZW50IHdpZHRoXG4gICAgICB3aWR0aDogdGhpcy5uekF1dG9jb21wbGV0ZS5ueldpZHRoIHx8IHRoaXMuZ2V0SG9zdFdpZHRoKClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29ubmVjdGVkRWxlbWVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICBdO1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpKVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXG4gICAgICAud2l0aFB1c2goZmFsc2UpXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0QWN0aXZlSXRlbSgpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubnpBdXRvY29tcGxldGUuZ2V0T3B0aW9uSW5kZXgodGhpcy5wcmV2aW91c1ZhbHVlKTtcbiAgICB0aGlzLm56QXV0b2NvbXBsZXRlLmNsZWFyU2VsZWN0ZWRPcHRpb25zKG51bGwsIHRydWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0uc2VsZWN0KGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRBY3RpdmVJdGVtKHRoaXMubnpBdXRvY29tcGxldGUubnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPyAwIDogLTEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsdWVBbmRDbG9zZShvcHRpb246IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb24ubnpWYWx1ZTtcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZShvcHRpb24uZ2V0TGFiZWwoKSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyaWdnZXJWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgaWYgKCF0aGlzLm56QXV0b2NvbXBsZXRlLm56QmFja2ZpbGwpIHtcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZG9CYWNrZmlsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekF1dG9jb21wbGV0ZS5uekJhY2tmaWxsICYmIHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbSkge1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyVmFsdWUodGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtLmdldExhYmVsKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FuT3BlbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuICFlbGVtZW50LnJlYWRPbmx5ICYmICFlbGVtZW50LmRpc2FibGVkO1xuICB9XG59XG4iXX0=