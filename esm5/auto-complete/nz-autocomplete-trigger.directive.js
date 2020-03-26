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
export var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NzAutocompleteTriggerDirective; })),
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
var NzAutocompleteTriggerDirective = /** @class */ (function () {
    function NzAutocompleteTriggerDirective(elementRef, overlay, viewContainerRef, ngZone, document) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.document = document;
        // tslint:disable-next-line:no-any
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this.panelOpen = false;
    }
    Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
        /** Current active option */
        get: /**
         * Current active option
         * @return {?}
         */
        function () {
            if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                return this.nzAutocomplete.activeItem;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyPanel();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.writeValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setTriggerValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
        this.updateStatus();
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.closePanel = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        /** @type {?} */
        var document = (/** @type {?} */ (this.document));
        /** @type {?} */
        var value = target.value;
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
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        if (this.canOpen()) {
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this.closePanel();
        this._onTouched();
    };
    /**
     * Subscription data source changes event
     */
    /**
     * Subscription data source changes event
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOptionsChange = /**
     * Subscription data source changes event
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var firstStable = this.ngZone.onStable.asObservable().pipe(take(1));
        /** @type {?} */
        var optionChanges = this.nzAutocomplete.options.changes.pipe(tap((/**
         * @return {?}
         */
        function () { return _this.positionStrategy.reapplyLastPosition(); })), delay(0));
        return merge(firstStable, optionChanges).subscribe((/**
         * @return {?}
         */
        function () {
            _this.resetActiveItem();
            if (_this.panelOpen) {
                (/** @type {?} */ (_this.overlayRef)).updatePosition();
            }
        }));
    };
    /**
     * Subscription option changes event and set the value
     */
    /**
     * Subscription option changes event and set the value
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeSelectionChange = /**
     * Subscription option changes event and set the value
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.nzAutocomplete.selectionChange.subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this.setValueAndClose(option);
        }));
    };
    /**
     * Subscription external click and close panel
     */
    /**
     * Subscription external click and close panel
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayBackdropClick = /**
     * Subscription external click and close panel
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            // Make sure is not self
            if (clickTarget !== _this.elementRef.nativeElement &&
                !(/** @type {?} */ (_this.overlayRef)).overlayElement.contains(clickTarget) &&
                _this.panelOpen) {
                _this.closePanel();
            }
        }));
    };
    /**
     * Subscription overlay position changes and reset dropdown position
     */
    /**
     * Subscription overlay position changes and reset dropdown position
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayPositionChange = /**
     * Subscription overlay position changes and reset dropdown position
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.positionStrategy.positionChanges
            .pipe(map((/**
         * @param {?} position
         * @return {?}
         */
        function (position) { return position.connectionPair.originY; })), distinct(), delay(0))
            .subscribe((/**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            _this.nzAutocomplete.updatePosition(position);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.attachOverlay = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.updateStatus = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
        }
        this.nzAutocomplete.setVisibility();
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.destroyPanel = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.closePanel();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getConnectedElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getHostWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getOverlayPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positions = [
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
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.resetActiveItem = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.nzAutocomplete.getOptionIndex(this.previousValue);
        this.nzAutocomplete.clearSelectedOptions(null, true);
        if (index !== -1) {
            this.nzAutocomplete.setActiveItem(index);
            this.nzAutocomplete.activeItem.select(false);
        }
        else {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setValueAndClose = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setTriggerValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = value || '';
        if (!this.nzAutocomplete.nzBackfill) {
            this.previousValue = value;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.doBackfill = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.canOpen = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    };
    NzAutocompleteTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: "input[nzAutocomplete], textarea[nzAutocomplete]",
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
    NzAutocompleteTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NzAutocompleteTriggerDirective.propDecorators = {
        nzAutocomplete: [{ type: Input }]
    };
    return NzAutocompleteTriggerDirective;
}());
export { NzAutocompleteTriggerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hdXRvLWNvbXBsZXRlLyIsInNvdXJjZXMiOlsibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRixPQUFPLEVBRUwsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBSWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFFVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFdEUsTUFBTSxLQUFPLDhCQUE4QixHQUFxQjtJQUM5RCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsOEJBQThCLEVBQTlCLENBQThCLEVBQUM7SUFDN0QsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELE1BQU0sVUFBVSxrQ0FBa0M7SUFDaEQsT0FBTyxLQUFLLENBQ1YsaUVBQWlFO1FBQy9ELDJFQUEyRTtRQUMzRSxpRUFBaUUsQ0FDcEUsQ0FBQztBQUNKLENBQUM7QUFFRDtJQXNDRSx3Q0FDVSxVQUFzQixFQUN0QixPQUFnQixFQUNoQixnQkFBa0MsRUFDbEMsTUFBYyxFQUVnQixRQUFhO1FBTDNDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFZ0IsYUFBUSxHQUFSLFFBQVEsQ0FBSzs7UUExQnJELGNBQVM7OztRQUF5QixjQUFPLENBQUMsRUFBQztRQUMzQyxlQUFVOzs7UUFBRyxjQUFPLENBQUMsRUFBQztRQUN0QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBeUJ4QixDQUFDO0lBdEJKLHNCQUFJLHdEQUFZO1FBRGhCLDRCQUE0Qjs7Ozs7UUFDNUI7WUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUM3RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFvQkQsb0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyxtREFBVTs7Ozs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCx5REFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBcUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCwwREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHlEQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjs7WUFDNUIsT0FBTyxHQUFxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7UUFDL0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxrREFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxtREFBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3BELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsaUNBQWlDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELHNEQUFhOzs7O0lBQWIsVUFBYyxLQUFvQjs7WUFDMUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPOztZQUN2QixVQUFVLEdBQUcsT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssVUFBVTtRQUVqRSxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDdEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sSUFBSSxPQUFPLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDN0QsbUNBQW1DO1lBQ25DLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUMxQztTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRTtZQUN4RSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUN6QztZQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxvREFBVzs7OztJQUFYLFVBQVksS0FBb0I7O1lBQ3hCLE1BQU0sR0FBRyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFvQjs7WUFDekMsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxRQUFRLEVBQVk7O1lBQ3RDLEtBQUssR0FBMkIsTUFBTSxDQUFDLEtBQUs7UUFFaEQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixLQUFLLEdBQUcsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxvREFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7O0lBRUQsbURBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLCtEQUFzQjs7Ozs7SUFBOUI7UUFBQSxpQkFZQzs7WUFYTyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDL0QsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVELEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsRUFBM0MsQ0FBMkMsRUFBQyxFQUN0RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1Q7UUFDRCxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDakQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsbUJBQUEsS0FBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLGlFQUF3Qjs7Ozs7SUFBaEM7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBcUM7WUFDekYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyxzRUFBNkI7Ozs7O0lBQXJDO1FBQUEsaUJBZ0JDO1FBZkMsT0FBTyxLQUFLLENBQ1YsU0FBUyxDQUFhLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQzdDLFNBQVMsQ0FBYSxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUNqRCxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQThCOztnQkFDbkMsV0FBVyxHQUFHLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQWU7WUFFL0Msd0JBQXdCO1lBQ3hCLElBQ0UsV0FBVyxLQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtnQkFDN0MsQ0FBQyxtQkFBQSxLQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7Z0JBQ3RELEtBQUksQ0FBQyxTQUFTLEVBQ2Q7Z0JBQ0EsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLHVFQUE4Qjs7Ozs7SUFBdEM7UUFBQSxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWU7YUFDekMsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxVQUFDLFFBQXdDLElBQUssT0FBQSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBL0IsQ0FBK0IsRUFBQyxFQUNsRixRQUFRLEVBQUUsRUFDVixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1Q7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxRQUErQjtZQUN6QyxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU8sc0RBQWE7Ozs7SUFBckI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixNQUFNLGtDQUFrQyxFQUFFLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3ZGO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1lBQy9FLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNuRSxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7WUFDN0UsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFTyxxREFBWTs7OztJQUFwQjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNGO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7Ozs7O0lBRU8scURBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx5REFBZ0I7Ozs7SUFBeEI7UUFDRSxPQUFPLElBQUksYUFBYSxDQUFDO1lBQ3ZCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7O1lBRTFELEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1NBQzFELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sNERBQW1COzs7O0lBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8scURBQVk7Ozs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNoRixDQUFDOzs7OztJQUVPLDJEQUFrQjs7OztJQUExQjs7WUFDUSxTQUFTLEdBQUc7WUFDaEIsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDM0csSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7U0FDNUc7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDakMsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDL0Msc0JBQXNCLENBQUMsS0FBSyxDQUFDO2FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTyx3REFBZTs7OztJQUF2Qjs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNwRSxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RjtJQUNILENBQUM7Ozs7OztJQUVPLHlEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsTUFBcUM7O1lBQ3RELEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUVPLHdEQUFlOzs7OztJQUF2QixVQUF3QixLQUE2QjtRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7OztJQUVPLG1EQUFVOzs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRTtZQUNwRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7OztJQUVPLGdEQUFPOzs7O0lBQWY7O1lBQ1EsT0FBTyxHQUFxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7UUFDL0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2hELENBQUM7O2dCQXBVRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlEQUFpRDtvQkFDM0QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7b0JBQzNDLElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsS0FBSzt3QkFDbkIsbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0IsV0FBVyxFQUFFLGVBQWU7d0JBQzVCLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixTQUFTLEVBQUUscUJBQXFCO3dCQUNoQyxXQUFXLEVBQUUsdUJBQXVCO3FCQUNyQztpQkFDRjs7OztnQkEzQ0MsVUFBVTtnQkFYVixPQUFPO2dCQWtCUCxnQkFBZ0I7Z0JBSGhCLE1BQU07Z0RBdUVILFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O2lDQTdCN0IsS0FBSzs7SUFzVFIscUNBQUM7Q0FBQSxBQXJVRCxJQXFVQztTQXhUWSw4QkFBOEI7Ozs7OztJQUV6Qyx3REFBaUQ7O0lBR2pELG1EQUEyQzs7SUFDM0Msb0RBQXNCOztJQUN0QixtREFBMkI7Ozs7O0lBUzNCLG9EQUFzQzs7Ozs7SUFDdEMsZ0RBQTBDOzs7OztJQUMxQywwREFBNEQ7Ozs7O0lBQzVELHVEQUE4Qzs7Ozs7SUFDOUMscUVBQWtEOzs7OztJQUNsRCxtRUFBZ0Q7Ozs7O0lBQ2hELDBFQUF1RDs7Ozs7SUFDdkQsMkVBQXdEOzs7OztJQUd0RCxvREFBOEI7Ozs7O0lBQzlCLGlEQUF3Qjs7Ozs7SUFDeEIsMERBQTBDOzs7OztJQUMxQyxnREFBc0I7Ozs7O0lBRXRCLGtEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmLFxuICBQb3NpdGlvblN0cmF0ZWd5LFxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3Ncbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXhpc3RpbmdQcm92aWRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBkaXN0aW5jdCwgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBOWl9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE56QXV0b2NvbXBsZXRlTWlzc2luZ1BhbmVsRXJyb3IoKTogRXJyb3Ige1xuICByZXR1cm4gRXJyb3IoXG4gICAgJ0F0dGVtcHRpbmcgdG8gb3BlbiBhbiB1bmRlZmluZWQgaW5zdGFuY2Ugb2YgYG56LWF1dG9jb21wbGV0ZWAuICcgK1xuICAgICAgJ01ha2Ugc3VyZSB0aGF0IHRoZSBpZCBwYXNzZWQgdG8gdGhlIGBuekF1dG9jb21wbGV0ZWAgaXMgY29ycmVjdCBhbmQgdGhhdCAnICtcbiAgICAgIFwieW91J3JlIGF0dGVtcHRpbmcgdG8gb3BlbiBpdCBhZnRlciB0aGUgbmdBZnRlckNvbnRlbnRJbml0IGhvb2suXCJcbiAgKTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW5wdXRbbnpBdXRvY29tcGxldGVdLCB0ZXh0YXJlYVtuekF1dG9jb21wbGV0ZV1gLFxuICBleHBvcnRBczogJ256QXV0b2NvbXBsZXRlVHJpZ2dlcicsXG4gIHByb3ZpZGVyczogW05aX0FVVE9DT01QTEVURV9WQUxVRV9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxuICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAnKGZvY3VzaW4pJzogJ2hhbmRsZUZvY3VzKCknLFxuICAgICcoYmx1ciknOiAnaGFuZGxlQmx1cigpJyxcbiAgICAnKGlucHV0KSc6ICdoYW5kbGVJbnB1dCgkZXZlbnQpJyxcbiAgICAnKGtleWRvd24pJzogJ2hhbmRsZUtleWRvd24oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcbiAgLyoqIEJpbmQgbnpBdXRvY29tcGxldGUgY29tcG9uZW50ICovXG4gIEBJbnB1dCgpIG56QXV0b2NvbXBsZXRlOiBOekF1dG9jb21wbGV0ZUNvbXBvbmVudDtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuICBwYW5lbE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogQ3VycmVudCBhY3RpdmUgb3B0aW9uICovXG4gIGdldCBhY3RpdmVPcHRpb24oKTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLm56QXV0b2NvbXBsZXRlICYmIHRoaXMubnpBdXRvY29tcGxldGUub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPHt9PiB8IG51bGw7XG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb3B0aW9uc0NoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb3ZlcmxheVBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lQYW5lbCgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHt9KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBlbGVtZW50LmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuICB9XG5cbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuaXNPcGVuID0gdGhpcy5wYW5lbE9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMub3B0aW9uc0NoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgICAgIHRoaXMucG9ydGFsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgaXNBcnJvd0tleSA9IGtleUNvZGUgPT09IFVQX0FSUk9XIHx8IGtleUNvZGUgPT09IERPV05fQVJST1c7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAoa2V5Q29kZSA9PT0gRVNDQVBFIHx8IGtleUNvZGUgPT09IFRBQikpIHtcbiAgICAgIC8vIFJlc2V0IHZhbHVlIHdoZW4gdGFiIC8gRVNDIGNsb3NlXG4gICAgICBpZiAodGhpcy5hY3RpdmVPcHRpb24gJiYgdGhpcy5hY3RpdmVPcHRpb24uZ2V0TGFiZWwoKSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKHRoaXMucHJldmlvdXNWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFuZWxPcGVuICYmIGtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICBpZiAodGhpcy5uekF1dG9jb21wbGV0ZS5zaG93UGFuZWwgJiYgdGhpcy5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24uc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucGFuZWxPcGVuICYmIGlzQXJyb3dLZXkgJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5zaG93UGFuZWwpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXROZXh0SXRlbUFjdGl2ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9CYWNrZmlsbCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50IGFzIERvY3VtZW50O1xuICAgIGxldCB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCA9IHRhcmdldC52YWx1ZTtcblxuICAgIGlmICh0YXJnZXQudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgPT09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuY2FuT3BlbigpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbk9wZW4oKSkge1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBkYXRhIHNvdXJjZSBjaGFuZ2VzIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZU9wdGlvbnNDaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBmaXJzdFN0YWJsZSA9IHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSk7XG4gICAgY29uc3Qgb3B0aW9uQ2hhbmdlcyA9IHRoaXMubnpBdXRvY29tcGxldGUub3B0aW9ucy5jaGFuZ2VzLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5LnJlYXBwbHlMYXN0UG9zaXRpb24oKSksXG4gICAgICBkZWxheSgwKVxuICAgICk7XG4gICAgcmV0dXJuIG1lcmdlKGZpcnN0U3RhYmxlLCBvcHRpb25DaGFuZ2VzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldEFjdGl2ZUl0ZW0oKTtcbiAgICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYhLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIG9wdGlvbiBjaGFuZ2VzIGV2ZW50IGFuZCBzZXQgdGhlIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLm56QXV0b2NvbXBsZXRlLnNlbGVjdGlvbkNoYW5nZS5zdWJzY3JpYmUoKG9wdGlvbjogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWVBbmRDbG9zZShvcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBleHRlcm5hbCBjbGljayBhbmQgY2xvc2UgcGFuZWxcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbWVyZ2U8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KFxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZG9jdW1lbnQsICdjbGljaycpLFxuICAgICAgZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcpXG4gICAgKS5zdWJzY3JpYmUoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSBpcyBub3Qgc2VsZlxuICAgICAgaWYgKFxuICAgICAgICBjbGlja1RhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgIXRoaXMub3ZlcmxheVJlZiEub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmXG4gICAgICAgIHRoaXMucGFuZWxPcGVuXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIG92ZXJsYXkgcG9zaXRpb24gY2hhbmdlcyBhbmQgcmVzZXQgZHJvcGRvd24gcG9zaXRpb25cbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneS5wb3NpdGlvbkNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpID0+IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkpLFxuICAgICAgICBkaXN0aW5jdCgpLFxuICAgICAgICBkZWxheSgwKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgocG9zaXRpb246IFZlcnRpY2FsQ29ubmVjdGlvblBvcykgPT4ge1xuICAgICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekF1dG9jb21wbGV0ZSkge1xuICAgICAgdGhyb3cgZ2V0TnpBdXRvY29tcGxldGVNaXNzaW5nUGFuZWxFcnJvcigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wb3J0YWwpIHtcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMubnpBdXRvY29tcGxldGUudGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5UG9zaXRpb25DaGFuZ2UoKTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk7XG4gICAgICB0aGlzLm9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU9wdGlvbnNDaGFuZ2UoKTtcbiAgICB9XG4gICAgdGhpcy5uekF1dG9jb21wbGV0ZS5pc09wZW4gPSB0aGlzLnBhbmVsT3BlbiA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXR1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IHdpZHRoOiB0aGlzLm56QXV0b2NvbXBsZXRlLm56V2lkdGggfHwgdGhpcy5nZXRIb3N0V2lkdGgoKSB9KTtcbiAgICB9XG4gICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRWaXNpYmlsaXR5KCk7XG4gICAgdGhpcy5yZXNldEFjdGl2ZUl0ZW0oKTtcbiAgICBpZiAodGhpcy5hY3RpdmVPcHRpb24pIHtcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lQYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxuICAgICAgLy8gZGVmYXVsdCBob3N0IGVsZW1lbnQgd2lkdGhcbiAgICAgIHdpZHRoOiB0aGlzLm56QXV0b2NvbXBsZXRlLm56V2lkdGggfHwgdGhpcy5nZXRIb3N0V2lkdGgoKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25uZWN0ZWRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG4gIH1cblxuICBwcml2YXRlIGdldEhvc3RXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb24oKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxuICAgIF07XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkpXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAgIC53aXRoUHVzaChmYWxzZSlcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRBY3RpdmVJdGVtKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5uekF1dG9jb21wbGV0ZS5nZXRPcHRpb25JbmRleCh0aGlzLnByZXZpb3VzVmFsdWUpO1xuICAgIHRoaXMubnpBdXRvY29tcGxldGUuY2xlYXJTZWxlY3RlZE9wdGlvbnMobnVsbCwgdHJ1ZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbS5zZWxlY3QoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldEFjdGl2ZUl0ZW0odGhpcy5uekF1dG9jb21wbGV0ZS5uekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA/IDAgOiAtMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZUFuZENsb3NlKG9wdGlvbjogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbi5uelZhbHVlO1xuICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKG9wdGlvbi5nZXRMYWJlbCgpKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICBpZiAoIXRoaXMubnpBdXRvY29tcGxldGUubnpCYWNrZmlsbCkge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkb0JhY2tmaWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b2NvbXBsZXRlLm56QmFja2ZpbGwgJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtKSB7XG4gICAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0uZ2V0TGFiZWwoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYW5PcGVuKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gIWVsZW1lbnQucmVhZE9ubHkgJiYgIWVsZW1lbnQuZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==