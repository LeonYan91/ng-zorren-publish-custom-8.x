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
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { getCaretCoordinates, getMentions, DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, InputBoolean } from 'ng-zorro-antd/core';
import { NzMentionSuggestionDirective } from './nz-mention-suggestions';
import { NzMentionService } from './nz-mention.service';
/**
 * @record
 */
export function MentionOnSearchTypes() { }
if (false) {
    /** @type {?} */
    MentionOnSearchTypes.prototype.value;
    /** @type {?} */
    MentionOnSearchTypes.prototype.prefix;
}
/**
 * @record
 */
export function Mention() { }
if (false) {
    /** @type {?} */
    Mention.prototype.startPos;
    /** @type {?} */
    Mention.prototype.endPos;
    /** @type {?} */
    Mention.prototype.mention;
}
var NzMentionComponent = /** @class */ (function () {
    function NzMentionComponent(ngDocument, // tslint:disable-line:no-any
    changeDetectorRef, overlay, viewContainerRef, nzMentionService) {
        this.ngDocument = ngDocument;
        this.changeDetectorRef = changeDetectorRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzMentionService = nzMentionService;
        this.nzValueWith = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; }); // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.nzPrefix = '@';
        this.nzLoading = false;
        this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
        this.nzPlacement = 'bottom';
        this.nzSuggestions = [];
        this.nzOnSelect = new EventEmitter();
        this.nzOnSearchChange = new EventEmitter();
        this.isOpen = false;
        this.filteredSuggestions = [];
        this.suggestionTemplate = null; // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.activeIndex = -1;
        this.previousValue = null;
    }
    Object.defineProperty(NzMentionComponent.prototype, "suggestionChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.suggestionTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMentionComponent.prototype, "triggerNativeElement", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.trigger.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzMentionService.triggerChanged().subscribe((/**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            _this.trigger = trigger;
            _this.bindTriggerEvents();
            _this.closeDropdown();
            _this.overlayRef = null;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
        this.isOpen = true;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.getMentions = /**
     * @return {?}
     */
    function () {
        return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
    };
    /**
     * @param {?} suggestion
     * @return {?}
     */
    NzMentionComponent.prototype.selectSuggestion = /**
     * @param {?} suggestion
     * @return {?}
     */
    function (suggestion) {
        /** @type {?} */
        var value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NzMentionComponent.prototype.handleInput = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NzMentionComponent.prototype.handleKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
            this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
            event.preventDefault();
        }
        else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            this.resetDropdown();
            event.stopPropagation();
        }
        else {
            if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
                this.closeDropdown();
                return;
            }
            if (this.isOpen && keyCode === UP_ARROW) {
                this.setPreviousItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isOpen && keyCode === DOWN_ARROW) {
                this.setNextItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.handleClick = /**
     * @private
     * @return {?}
     */
    function () {
        this.resetDropdown();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.bindTriggerEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.trigger.onInput.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.handleInput(e); }));
        this.trigger.onKeydown.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.handleKeydown(e); }));
        this.trigger.onClick.subscribe((/**
         * @return {?}
         */
        function () { return _this.handleClick(); }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzMentionComponent.prototype.suggestionsFilter = /**
     * @private
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        var _this = this;
        /** @type {?} */
        var suggestions = value.substring(1);
        if (this.previousValue === value) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: (/** @type {?} */ (this.cursorMention)).substring(1),
                prefix: (/** @type {?} */ (this.cursorMention))[0]
            });
        }
        /** @type {?} */
        var searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions.filter((/**
         * @param {?} suggestion
         * @return {?}
         */
        function (suggestion) {
            return _this.nzValueWith(suggestion)
                .toLowerCase()
                .includes(searchValue);
        }));
    };
    /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    NzMentionComponent.prototype.resetDropdown = /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        if (emit === void 0) { emit = true; }
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        /** @type {?} */
        var activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.setNextItemActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.setPreviousItemActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.canOpen = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.resetCursorMention = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        /** @type {?} */
        var selectionStart = (/** @type {?} */ (this.triggerNativeElement.selectionStart));
        /** @type {?} */
        var prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        /** @type {?} */
        var i = prefix.length;
        while (i >= 0) {
            /** @type {?} */
            var startPos = value.lastIndexOf(prefix[i], selectionStart);
            /** @type {?} */
            var endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            /** @type {?} */
            var mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== ' ') ||
                startPos < 0 ||
                mention.includes(prefix[i], 1) ||
                mention.includes(' ')) {
                this.cursorMention = null;
                this.cursorMentionStart = -1;
                this.cursorMentionEnd = -1;
            }
            else {
                this.cursorMention = mention;
                this.cursorMentionStart = startPos;
                this.cursorMentionEnd = endPos;
                return;
            }
            i--;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.updatePositions = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        /** @type {?} */
        var top = coordinates.top -
            this.triggerNativeElement.getBoundingClientRect().height -
            this.triggerNativeElement.scrollTop +
            (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
        /** @type {?} */
        var left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions(tslib_1.__spread(DEFAULT_MENTION_BOTTOM_POSITIONS));
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions(tslib_1.__spread(DEFAULT_MENTION_TOP_POSITIONS));
        }
        this.positionStrategy.apply();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.subscribeOverlayBackdropClick = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this.ngDocument, 'click'), fromEvent(this.ngDocument, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            if (_this.isOpen &&
                clickTarget !== _this.trigger.el.nativeElement &&
                (!!_this.overlayRef && !_this.overlayRef.overlayElement.contains(clickTarget))) {
                _this.closeDropdown();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.attachOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
        }
        this.updatePositions();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.getOverlayPosition = /**
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
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    };
    NzMentionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-mention',
                    exportAs: 'nzMention',
                    template: "<ng-content></ng-content>\n<ng-template #suggestions>\n  <ul class=\"ant-mention-dropdown\">\n    <li class=\"ant-mention-dropdown-item\"\n        *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\n        [class.focus]=\"i === activeIndex\"\n        (mousedown)=\"$event.preventDefault()\"\n        (click)=\"selectSuggestion(suggestion)\">\n      <ng-container *ngIf=\"suggestionTemplate else defaultSuggestion\">\n        <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: {$implicit: suggestion}\"></ng-container>\n      </ng-container>\n      <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\n    </li>\n    <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\"\n        *ngIf=\"filteredSuggestions.length === 0\">\n      <span *ngIf=\"nzLoading\"><i nz-icon nzType=\"loading\"></i></span>\n      <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\n    </li>\n  </ul>\n</ng-template>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzMentionService],
                    styles: ["\n      .ant-mention-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzMentionComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: NzMentionService }
    ]; };
    NzMentionComponent.propDecorators = {
        nzValueWith: [{ type: Input }],
        nzPrefix: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzSuggestions: [{ type: Input }],
        nzOnSelect: [{ type: Output }],
        nzOnSearchChange: [{ type: Output }],
        suggestionsTemp: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
        suggestionChild: [{ type: ContentChild, args: [NzMentionSuggestionDirective, { static: false, read: TemplateRef },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMentionComponent.prototype, "nzLoading", void 0);
    return NzMentionComponent;
}());
export { NzMentionComponent };
if (false) {
    /** @type {?} */
    NzMentionComponent.prototype.nzValueWith;
    /** @type {?} */
    NzMentionComponent.prototype.nzPrefix;
    /** @type {?} */
    NzMentionComponent.prototype.nzLoading;
    /** @type {?} */
    NzMentionComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzMentionComponent.prototype.nzPlacement;
    /** @type {?} */
    NzMentionComponent.prototype.nzSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSelect;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSearchChange;
    /** @type {?} */
    NzMentionComponent.prototype.trigger;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionsTemp;
    /** @type {?} */
    NzMentionComponent.prototype.isOpen;
    /** @type {?} */
    NzMentionComponent.prototype.filteredSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionTemplate;
    /** @type {?} */
    NzMentionComponent.prototype.activeIndex;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMention;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMentionStart;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMentionEnd;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlayBackdropClickSubscription;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.ngDocument;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.nzMentionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnRpb24vIiwic291cmNlcyI6WyJuei1tZW50aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUcsT0FBTyxFQUNMLHNCQUFzQixFQUV0QixPQUFPLEVBQ1AsYUFBYSxFQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRXRELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLGdDQUFnQyxFQUNoQyw2QkFBNkIsRUFDN0IsWUFBWSxFQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFeEQsMENBR0M7OztJQUZDLHFDQUFjOztJQUNkLHNDQUFlOzs7OztBQUdqQiw2QkFJQzs7O0lBSEMsMkJBQWlCOztJQUNqQix5QkFBZTs7SUFDZiwwQkFBZ0I7O0FBS2xCO0lBMkRFLDRCQUN3QyxVQUFlLEVBQUUsNkJBQTZCO0lBQzVFLGlCQUFvQyxFQUNwQyxPQUFnQixFQUNoQixnQkFBa0MsRUFDbEMsZ0JBQWtDO1FBSkosZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBM0NuQyxnQkFBVzs7OztRQUEyQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLLEVBQUMsQ0FBQyw2QkFBNkI7O1FBQ25GLGFBQVEsR0FBc0IsR0FBRyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsc0JBQWlCLEdBQVcsZ0JBQWdCLENBQUM7UUFDN0MsZ0JBQVcsR0FBcUIsUUFBUSxDQUFDO1FBQ3pDLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBQ25CLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxxQkFBZ0IsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWE3RixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUEyQyxJQUFJLENBQUMsQ0FBQyw2QkFBNkI7O1FBQ2hHLGdCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFVCxrQkFBYSxHQUFrQixJQUFJLENBQUM7SUFtQnpDLENBQUM7SUFoQ0osc0JBRUksK0NBQWU7Ozs7O1FBRm5CLFVBRW9CLEtBQXNDO1lBQ3hELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7YUFDakM7UUFDSCxDQUFDOzs7T0FBQTtJQWdCRCxzQkFBWSxvREFBb0I7Ozs7O1FBQWhDO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7Ozs7SUFVRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ3RELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDBDQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7SUFFRCx5Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELDZDQUFnQjs7OztJQUFoQixVQUFpQixVQUF1Qjs7WUFDaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8sd0NBQVc7Ozs7O0lBQW5CLFVBQW9CLEtBQW9COztZQUNoQyxNQUFNLEdBQUcsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBMEM7UUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLDBDQUFhOzs7OztJQUFyQixVQUFzQixLQUFvQjs7WUFDbEMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPO1FBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRTtZQUNsRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjthQUFNLElBQUksT0FBTyxLQUFLLFVBQVUsSUFBSSxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQzVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sS0FBSyxHQUFHLElBQUksT0FBTyxLQUFLLE1BQU0sQ0FBQyxFQUFFO2dCQUMxRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLE9BQU87YUFDUjtZQUVELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUN2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDekI7WUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVPLHdDQUFXOzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU8sOENBQWlCOzs7O0lBQXpCO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxDQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLENBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7SUFFTyw4Q0FBaUI7Ozs7OztJQUF6QixVQUEwQixLQUFhLEVBQUUsSUFBYTtRQUF0RCxpQkFrQkM7O1lBakJPLFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDekIsS0FBSyxFQUFFLG1CQUFBLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLEVBQUUsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUMvQixDQUFDLENBQUM7U0FDSjs7WUFDSyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRTtRQUM3QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxVQUFVO1lBQzdELE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7aUJBQ3pCLFdBQVcsRUFBRTtpQkFDYixRQUFRLENBQUMsV0FBVyxDQUFDO1FBRnhCLENBRXdCLEVBQ3pCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTywwQ0FBYTs7Ozs7SUFBckIsVUFBc0IsSUFBb0I7UUFBcEIscUJBQUEsRUFBQSxXQUFvQjtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUMzQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLDhDQUFpQjs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU8sa0RBQXFCOzs7O0lBQTdCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTyxvQ0FBTzs7OztJQUFmOztZQUNRLE9BQU8sR0FBMkMsSUFBSSxDQUFDLG9CQUFvQjtRQUNqRixPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFTywrQ0FBa0I7Ozs7SUFBMUI7O1lBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFOztZQUNyRSxjQUFjLEdBQUcsbUJBQUEsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBQzs7WUFDMUQsTUFBTSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTs7WUFDOUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNO1FBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ1AsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQzs7Z0JBQ3ZELE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNOztnQkFDcEcsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztZQUNqRCxJQUNFLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztnQkFDN0MsUUFBUSxHQUFHLENBQUM7Z0JBQ1osT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNyQjtnQkFDQSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7Z0JBQy9CLE9BQU87YUFDUjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDOzs7OztJQUVPLDRDQUFlOzs7O0lBQXZCOztZQUNRLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDOztZQUNyRixHQUFHLEdBQ1AsV0FBVyxDQUFDLEdBQUc7WUFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNO1lBQ3hELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTO1lBQ25DLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDekQsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVU7UUFDcEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsa0JBQUssZ0NBQWdDLEVBQUUsQ0FBQztTQUM1RTtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsa0JBQUssNkJBQTZCLEVBQUUsQ0FBQztTQUN6RTtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVPLDBEQUE2Qjs7OztJQUFyQztRQUFBLGlCQWNDO1FBYkMsT0FBTyxLQUFLLENBQ1YsU0FBUyxDQUFhLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQy9DLFNBQVMsQ0FBYSxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUNuRCxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQThCOztnQkFDbkMsV0FBVyxHQUFHLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQWU7WUFDL0MsSUFDRSxLQUFJLENBQUMsTUFBTTtnQkFDWCxXQUFXLEtBQUssS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYTtnQkFDN0MsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUM1RTtnQkFDQSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sMENBQWE7Ozs7SUFBckI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1NBQzlFO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8sNkNBQWdCOzs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLGFBQWEsQ0FBQztZQUN2QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0MsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1NBQzNELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sK0NBQWtCOzs7O0lBQTFCOztZQUNRLFNBQVMsR0FBRztZQUNoQixJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUMzRyxJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUM1RztRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNqQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNwQyxhQUFhLENBQUMsU0FBUyxDQUFDO2FBQ3hCLHNCQUFzQixDQUFDLEtBQUssQ0FBQzthQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Z0JBbFRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGs5QkFBMEM7b0JBQzFDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFFM0IsZ01BU0M7aUJBRUo7Ozs7Z0RBeUNJLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtnQkF4RzlCLGlCQUFpQjtnQkFWakIsT0FBTztnQkF3QlAsZ0JBQWdCO2dCQWVULGdCQUFnQjs7OzhCQW9DdEIsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7b0NBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsTUFBTTttQ0FDTixNQUFNO2tDQUdOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2tDQUV4QyxZQUFZLFNBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0lBVnZEO1FBQWYsWUFBWSxFQUFFOzt5REFBbUI7SUE0UjdDLHlCQUFDO0NBQUEsQUFuVEQsSUFtVEM7U0EvUlksa0JBQWtCOzs7SUFDN0IseUNBQThEOztJQUM5RCxzQ0FBMkM7O0lBQzNDLHVDQUEyQzs7SUFDM0MsK0NBQXNEOztJQUN0RCx5Q0FBa0Q7O0lBQ2xELDJDQUFzQzs7SUFDdEMsd0NBQThFOztJQUM5RSw4Q0FBNkY7O0lBRTdGLHFDQUFtQzs7SUFDbkMsNkNBQThFOztJQVU5RSxvQ0FBZTs7SUFDZixpREFBbUM7O0lBQ25DLGdEQUFrRTs7SUFDbEUseUNBQWlCOzs7OztJQUVqQiwyQ0FBNEM7Ozs7O0lBQzVDLDJDQUFxQzs7Ozs7SUFDckMsZ0RBQW1DOzs7OztJQUNuQyw4Q0FBaUM7Ozs7O0lBQ2pDLHdDQUFzQzs7Ozs7SUFDdEMsb0NBQXFDOzs7OztJQUNyQyw4Q0FBNEQ7Ozs7O0lBQzVELDhEQUF1RDs7Ozs7SUFPckQsd0NBQXFEOzs7OztJQUNyRCwrQ0FBNEM7Ozs7O0lBQzVDLHFDQUF3Qjs7Ozs7SUFDeEIsOENBQTBDOzs7OztJQUMxQyw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmLFxuICBQb3NpdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIGdldENhcmV0Q29vcmRpbmF0ZXMsXG4gIGdldE1lbnRpb25zLFxuICBERUZBVUxUX01FTlRJT05fQk9UVE9NX1BPU0lUSU9OUyxcbiAgREVGQVVMVF9NRU5USU9OX1RPUF9QT1NJVElPTlMsXG4gIElucHV0Qm9vbGVhblxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXN1Z2dlc3Rpb25zJztcbmltcG9ydCB7IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tdHJpZ2dlcic7XG5pbXBvcnQgeyBOek1lbnRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW50aW9uLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnRpb25PblNlYXJjaFR5cGVzIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgcHJlZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudGlvbiB7XG4gIHN0YXJ0UG9zOiBudW1iZXI7XG4gIGVuZFBvczogbnVtYmVyO1xuICBtZW50aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE1lbnRpb25QbGFjZW1lbnQgPSAndG9wJyB8ICdib3R0b20nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1tZW50aW9uJyxcbiAgZXhwb3J0QXM6ICduek1lbnRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotbWVudGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTnpNZW50aW9uU2VydmljZV0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5hbnQtbWVudGlvbi1kcm9wZG93biB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56TWVudGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuelZhbHVlV2l0aDogKHZhbHVlOiBhbnkpID0+IHN0cmluZyA9IHZhbHVlID0+IHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBASW5wdXQoKSBuelByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10gPSAnQCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyA9ICfml6DljLnphY3nu5PmnpzvvIzovbvmlbLnqbrmoLzlrozmiJDovpPlhaUnO1xuICBASW5wdXQoKSBuelBsYWNlbWVudDogTWVudGlvblBsYWNlbWVudCA9ICdib3R0b20nO1xuICBASW5wdXQoKSBuelN1Z2dlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlbGVjdDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHt9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNZW50aW9uT25TZWFyY2hUeXBlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdHJpZ2dlcjogTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHN1Z2dlc3Rpb25zVGVtcDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQENvbnRlbnRDaGlsZChOek1lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IHN1Z2dlc3Rpb25DaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9Pikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zdWdnZXN0aW9uVGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBpc09wZW4gPSBmYWxzZTtcbiAgZmlsdGVyZWRTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgc3VnZ2VzdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+IHwgbnVsbCA9IG51bGw7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIGFjdGl2ZUluZGV4ID0gLTE7XG5cbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIGN1cnNvck1lbnRpb25TdGFydDogbnVtYmVyO1xuICBwcml2YXRlIGN1cnNvck1lbnRpb25FbmQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPHZvaWQ+O1xuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgcHJpdmF0ZSBvdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZ2V0IHRyaWdnZXJOYXRpdmVFbGVtZW50KCk6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIG5nRG9jdW1lbnQ6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgbnpNZW50aW9uU2VydmljZTogTnpNZW50aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uek1lbnRpb25TZXJ2aWNlLnRyaWdnZXJDaGFuZ2VkKCkuc3Vic2NyaWJlKHRyaWdnZXIgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICAgIHRoaXMuYmluZFRyaWdnZXJFdmVudHMoKTtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpTdWdnZXN0aW9ucycpKSB7XG4gICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnJlc2V0RHJvcGRvd24oZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hPdmVybGF5KCk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXRNZW50aW9ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlciA/IGdldE1lbnRpb25zKHRoaXMudHJpZ2dlci52YWx1ZSwgdGhpcy5uelByZWZpeCkgOiBbXTtcbiAgfVxuXG4gIHNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbjogc3RyaW5nIHwge30pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbik7XG4gICAgdGhpcy50cmlnZ2VyLmluc2VydE1lbnRpb24oe1xuICAgICAgbWVudGlvbjogdmFsdWUsXG4gICAgICBzdGFydFBvczogdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQsXG4gICAgICBlbmRQb3M6IHRoaXMuY3Vyc29yTWVudGlvbkVuZFxuICAgIH0pO1xuICAgIHRoaXMubnpPblNlbGVjdC5lbWl0KHN1Z2dlc3Rpb24pO1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgdGhpcy50cmlnZ2VyLm9uQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy50cmlnZ2VyLnZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgaWYgKHRoaXMuaXNPcGVuICYmIGtleUNvZGUgPT09IEVOVEVSICYmIHRoaXMuYWN0aXZlSW5kZXggIT09IC0xICYmIHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsZWN0U3VnZ2VzdGlvbih0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnNbdGhpcy5hY3RpdmVJbmRleF0pO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiAoa2V5Q29kZSA9PT0gVEFCIHx8IGtleUNvZGUgPT09IEVTQ0FQRSkpIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XG4gICAgICAgIHRoaXMuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICB0aGlzLnNldE5leHRJdGVtQWN0aXZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XG4gIH1cblxuICBwcml2YXRlIGJpbmRUcmlnZ2VyRXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlci5vbklucHV0LnN1YnNjcmliZSgoZTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dChlKSk7XG4gICAgdGhpcy50cmlnZ2VyLm9uS2V5ZG93bi5zdWJzY3JpYmUoKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuaGFuZGxlS2V5ZG93bihlKSk7XG4gICAgdGhpcy50cmlnZ2VyLm9uQ2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XG4gIH1cblxuICBwcml2YXRlIHN1Z2dlc3Rpb25zRmlsdGVyKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHZhbHVlLnN1YnN0cmluZygxKTtcbiAgICBpZiAodGhpcy5wcmV2aW91c1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5uek9uU2VhcmNoQ2hhbmdlLmVtaXQoe1xuICAgICAgICB2YWx1ZTogdGhpcy5jdXJzb3JNZW50aW9uIS5zdWJzdHJpbmcoMSksXG4gICAgICAgIHByZWZpeDogdGhpcy5jdXJzb3JNZW50aW9uIVswXVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gc3VnZ2VzdGlvbnMudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMgPSB0aGlzLm56U3VnZ2VzdGlvbnMuZmlsdGVyKHN1Z2dlc3Rpb24gPT5cbiAgICAgIHRoaXMubnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbilcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFZhbHVlKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RHJvcGRvd24oZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0Q3Vyc29yTWVudGlvbigpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5jdXJzb3JNZW50aW9uICE9PSAnc3RyaW5nJyB8fCAhdGhpcy5jYW5PcGVuKCkpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN1Z2dlc3Rpb25zRmlsdGVyKHRoaXMuY3Vyc29yTWVudGlvbiwgZW1pdCk7XG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMuaW5kZXhPZih0aGlzLmN1cnNvck1lbnRpb24uc3Vic3RyaW5nKDEpKTtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggPj0gMCA/IGFjdGl2ZUluZGV4IDogMDtcbiAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXROZXh0SXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCArIDEgPD0gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCAtIDEgPyB0aGlzLmFjdGl2ZUluZGV4ICsgMSA6IDA7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4IC0gMSA8IDAgPyB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuYWN0aXZlSW5kZXggLSAxO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGNhbk9wZW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiAhZWxlbWVudC5yZWFkT25seSAmJiAhZWxlbWVudC5kaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRDdXJzb3JNZW50aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC52YWx1ZS5yZXBsYWNlKC9bXFxyXFxuXS9nLCAnICcpIHx8ICcnO1xuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCE7XG4gICAgY29uc3QgcHJlZml4ID0gdHlwZW9mIHRoaXMubnpQcmVmaXggPT09ICdzdHJpbmcnID8gW3RoaXMubnpQcmVmaXhdIDogdGhpcy5uelByZWZpeDtcbiAgICBsZXQgaSA9IHByZWZpeC5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPj0gMCkge1xuICAgICAgY29uc3Qgc3RhcnRQb3MgPSB2YWx1ZS5sYXN0SW5kZXhPZihwcmVmaXhbaV0sIHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgIGNvbnN0IGVuZFBvcyA9IHZhbHVlLmluZGV4T2YoJyAnLCBzZWxlY3Rpb25TdGFydCkgPiAtMSA/IHZhbHVlLmluZGV4T2YoJyAnLCBzZWxlY3Rpb25TdGFydCkgOiB2YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBtZW50aW9uID0gdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLCBlbmRQb3MpO1xuICAgICAgaWYgKFxuICAgICAgICAoc3RhcnRQb3MgPiAwICYmIHZhbHVlW3N0YXJ0UG9zIC0gMV0gIT09ICcgJykgfHxcbiAgICAgICAgc3RhcnRQb3MgPCAwIHx8XG4gICAgICAgIG1lbnRpb24uaW5jbHVkZXMocHJlZml4W2ldLCAxKSB8fFxuICAgICAgICBtZW50aW9uLmluY2x1ZGVzKCcgJylcbiAgICAgICkge1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25TdGFydCA9IC0xO1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25FbmQgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbiA9IG1lbnRpb247XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0ID0gc3RhcnRQb3M7XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbkVuZCA9IGVuZFBvcztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaS0tO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9zaXRpb25zKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q2FyZXRDb29yZGluYXRlcyh0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LCB0aGlzLmN1cnNvck1lbnRpb25TdGFydCk7XG4gICAgY29uc3QgdG9wID1cbiAgICAgIGNvb3JkaW5hdGVzLnRvcCAtXG4gICAgICB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtXG4gICAgICB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNjcm9sbFRvcCArXG4gICAgICAodGhpcy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyBjb29yZGluYXRlcy5oZWlnaHQgLSA2IDogLTYpO1xuICAgIGNvbnN0IGxlZnQgPSBjb29yZGluYXRlcy5sZWZ0IC0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoRGVmYXVsdE9mZnNldFgobGVmdCkud2l0aERlZmF1bHRPZmZzZXRZKHRvcCk7XG4gICAgaWYgKHRoaXMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbLi4uREVGQVVMVF9NRU5USU9OX0JPVFRPTV9QT1NJVElPTlNdKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbLi4uREVGQVVMVF9NRU5USU9OX1RPUF9QT1NJVElPTlNdKTtcbiAgICB9XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LmFwcGx5KCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIG1lcmdlPE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PihcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLm5nRG9jdW1lbnQsICdjbGljaycpLFxuICAgICAgZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KHRoaXMubmdEb2N1bWVudCwgJ3RvdWNoZW5kJylcbiAgICApLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5pc09wZW4gJiZcbiAgICAgICAgY2xpY2tUYXJnZXQgIT09IHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICghIXRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5zdWdnZXN0aW9uc1RlbXAsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICBdO1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMudHJpZ2dlci5lbClcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucylcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxuICAgICAgLndpdGhQdXNoKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5O1xuICB9XG59XG4iXX0=