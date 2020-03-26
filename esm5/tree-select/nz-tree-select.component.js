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
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Host, Injector, Input, Optional, Output, Renderer2, Self, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { isNotNil, slideMotion, warnDeprecation, zoomMotion, InputBoolean, NzConfigService, NzNoAnimationDirective, NzTreeBase, NzTreeHigherOrderServiceToken, WithConfig } from 'ng-zorro-antd/core';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { NzTreeSelectService } from './nz-tree-select.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function higherOrderServiceFactory(injector) {
    return injector.get(NzTreeSelectService);
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
var NzTreeSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzTreeSelectComponent, _super);
    function NzTreeSelectComponent(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.renderer = renderer;
        _this.cdr = cdr;
        _this.elementRef = elementRef;
        _this.noAnimation = noAnimation;
        _this.nzAllowClear = true;
        _this.nzShowExpand = true;
        _this.nzShowLine = false;
        _this.nzCheckable = false;
        _this.nzShowSearch = false;
        _this.nzDisabled = false;
        _this.nzAsyncData = false;
        _this.nzMultiple = false;
        _this.nzDefaultExpandAll = false;
        _this.nzCheckStrictly = false;
        _this.nzNodes = [];
        _this.nzOpen = false;
        _this.nzPlaceHolder = '';
        _this.nzDisplayWith = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.title; });
        _this.nzOpenChange = new EventEmitter();
        _this.nzCleared = new EventEmitter();
        _this.nzRemoved = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzTreeClick = new EventEmitter();
        _this.nzTreeCheckBoxChange = new EventEmitter();
        _this.isComposing = false;
        _this.isDestroy = true;
        _this.isNotFound = false;
        _this.inputValue = '';
        _this.dropDownPosition = 'bottom';
        _this.selectedNodes = [];
        _this.expandedKeys = [];
        _this.value = [];
        _this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
        return _this;
    }
    Object.defineProperty(NzTreeSelectComponent.prototype, "nzDefaultExpandedKeys", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandedKeys;
        },
        /**
         * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
         */
        set: /**
         * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
            this.expandedKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "nzExpandedKeys", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandedKeys;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.expandedKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "treeTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTreeTemplate || this.nzTreeTemplateChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "searchDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzOpen ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMultiple || this.nzCheckable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "selectedValueDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
            if (!this.nzShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            this.updateSelectedNodes(true);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (isNotNil(value)) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            this.updateSelectedNodes(true);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this.removeSelected(node, false);
            }));
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                /** @type {?} */
                var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next({
                    eventName: 'removeSelect',
                    node: removeNode
                });
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onExpandedKeysChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzExpandChange.emit(value);
        this.expandedKeys = tslib_1.__spread((/** @type {?} */ (value.keys)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    };
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    NzTreeSelectComponent.prototype.removeSelected = /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    function (node, emit, event) {
        if (emit === void 0) { emit = true; }
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.nzTreeService.conduct(node);
        }
        else {
            this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.focusOnInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.inputElement) {
                _this.inputElement.nativeElement.focus();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.subscribeSelectionChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(this.nzTreeClick.pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var node = (/** @type {?} */ (event.node));
            if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                node.isHalfChecked = false;
                if (!_this.nzCheckStrictly) {
                    _this.nzTreeService.conduct(node);
                }
            }
            if (_this.nzCheckable) {
                node.isSelected = false;
            }
        })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var node = (/** @type {?} */ (event.node));
            return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        }))), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateSelectedNodes();
            /** @type {?} */
            var value = _this.selectedNodes.map((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return (/** @type {?} */ (node.key)); }));
            _this.value = tslib_1.__spread(value);
            if (_this.nzShowSearch || _this.isMultiple) {
                _this.inputValue = '';
                _this.isNotFound = false;
            }
            if (_this.isMultiple) {
                _this.onChange(value);
                _this.focusOnInput();
                _this.updatePosition();
            }
            else {
                _this.closeDropDown();
                _this.onChange(value.length ? value[0] : null);
            }
        }));
    };
    /**
     * @param {?=} init
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateSelectedNodes = /**
     * @param {?=} init
     * @return {?}
     */
    function (init) {
        if (init === void 0) { init = false; }
        if (init) {
            /** @type {?} */
            var nodes = this.coerceTreeNodes(this.nzNodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(nodes);
            if (this.nzCheckable) {
                this.nzTreeService.calcCheckedKeys(this.value, nodes, this.nzCheckStrictly);
            }
            else {
                this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
            }
        }
        this.selectedNodes = tslib_1.__spread((this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateInputWidth = /**
     * @return {?}
     */
    function () {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onClearSelection = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.removeSelected(node, false);
        }));
        this.nzCleared.emit();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setSearchValues = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && (/** @type {?} */ ($event.matchedKeys)).length === 0;
        }));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzTreeSelectComponent.prototype.trackValue = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return (/** @type {?} */ (option.key));
    };
    NzTreeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree-select',
                    exportAs: 'nzTreeSelect',
                    animations: [slideMotion, zoomMotion],
                    template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"off\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzDisabled\">\n</ng-template>\n\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown\"\n    [@slideMotion]=\"nzOpen ? dropDownPosition : 'void'\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [class.ant-select-dropdown--single]=\"!nzMultiple\"\n    [class.ant-select-dropdown--multiple]=\"nzMultiple\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [ngStyle]=\"nzDropdownStyle\">\n    <nz-tree\n      #treeRef\n      [hidden]=\"isNotFound\"\n      nzNoAnimation\n      nzSelectMode\n      [nzData]=\"nzNodes\"\n      [nzMultiple]=\"nzMultiple\"\n      [nzSearchValue]=\"inputValue\"\n      [nzHideUnMatched]=\"nzHideUnMatched\"\n      [nzShowIcon]=\"nzShowIcon\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzExpandAll]=\"nzDefaultExpandAll\"\n      [nzExpandedKeys]=\"expandedKeys\"\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\n      [nzTreeTemplate]=\"treeTemplate\"\n      [nzCheckStrictly]=\"nzCheckStrictly\"\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\n      (nzClick)=\"nzTreeClick.emit($event)\"\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\"\n      (nzSearchValueChange)=\"setSearchValues($event)\">\n    </nz-tree>\n    <span *ngIf=\"nzNodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n    </span>\n  </div>\n</ng-template>\n\n<div\n  cdkOverlayOrigin\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"!isMultiple\"\n  [class.ant-select-selection--multiple]=\"isMultiple\"\n  tabindex=\"0\">\n  <ng-container *ngIf=\"!isMultiple\">\n    <div class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n\n      <div\n        *ngIf=\"selectedNodes.length === 1\"\n        class=\"ant-select-selection-selected-value\"\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\n        [ngStyle]=\"selectedValueDisplay\">\n        {{ nzDisplayWith(selectedNodes[0]) }}\n      </div>\n\n      <div\n        *ngIf=\"nzShowSearch\"\n        [style.display]=\"searchDisplay\"\n        class=\"ant-select-search ant-select-search--inline\">\n        <div class=\"ant-select-search__field__wrap\">\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isMultiple\">\n    <ul class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : nzMaxTagCount; trackBy:trackValue\">\n        <li\n          [@zoomMotion]\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [attr.title]=\"nzDisplayWith(node)\"\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\n          class=\"ant-select-selection__choice\">\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\n                 (mousedown)=\"$event.preventDefault()\"\n                 (click)=\"removeSelected(node, true, $event)\">\n                 <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\"></i>\n               </span>\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\n        </li>\n      </ng-container>\n      <li [@zoomMotion]\n        *ngIf=\"selectedNodes.length > nzMaxTagCount\"\n        class=\"ant-select-selection__choice\">\n        <div class=\"ant-select-selection__choice__content\">\n          <ng-container *ngIf=\"nzMaxTagPlaceholder\">\n            <ng-template\n              [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: nzMaxTagCount}\">\n            </ng-template>\n          </ng-container>\n          <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\n            + {{ selectedNodes.length - nzMaxTagCount }} ...\n          </ng-container>\n        </div>\n      </li>\n      <li class=\"ant-select-search ant-select-search--inline\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </li>\n    </ul>\n  </ng-container>\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\"\n    (mousedown)=\"$event.preventDefault()\"\n    (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" class=\"ant-select-clear-icon\" nzTheme=\"fill\"></i>\n  </span>\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\"></i>\n  </span>\n</div>",
                    providers: [
                        NzTreeSelectService,
                        {
                            provide: NzTreeHigherOrderServiceToken,
                            useFactory: higherOrderServiceFactory,
                            deps: [[new Self(), Injector]]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzTreeSelectComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'nzOpen',
                        '(click)': 'trigger()'
                    },
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzTreeSelectComponent.ctorParameters = function () { return [
        { type: NzTreeSelectService },
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTreeSelectComponent.propDecorators = {
        nzAllowClear: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzShowLine: [{ type: Input }],
        nzDropdownMatchSelectWidth: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzHideUnMatched: [{ type: Input }],
        nzShowIcon: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzDefaultExpandAll: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzExpandedIcon: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzNodes: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzDropdownStyle: [{ type: Input }],
        nzDefaultExpandedKeys: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzDisplayWith: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzOpenChange: [{ type: Output }],
        nzCleared: [{ type: Output }],
        nzRemoved: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzTreeClick: [{ type: Output }],
        nzTreeCheckBoxChange: [{ type: Output }],
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        treeRef: [{ type: ViewChild, args: ['treeRef', { static: false },] }],
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true },] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
        nzTreeTemplate: [{ type: Input }],
        nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzTreeSelectComponent.prototype, "nzSize", void 0);
    return NzTreeSelectComponent;
}(NzTreeBase));
export { NzTreeSelectComponent };
if (false) {
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpen;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisplayWith;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCleared;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzRemoved;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeClick;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeCheckBoxChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputElement;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeTemplateChild;
    /** @type {?} */
    NzTreeSelectComponent.prototype.triggerWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isComposing;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isNotFound;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputValue;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectedNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.expandedKeys;
    /** @type {?} */
    NzTreeSelectComponent.prototype.value;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.elementRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm56LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxJQUFJLEVBRUosV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLGVBQWUsRUFFZixzQkFBc0IsRUFFdEIsVUFBVSxFQUVWLDZCQUE2QixFQUc3QixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRS9ELE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxRQUFrQjtJQUMxRCxPQUFPLFFBQVEs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Qjs7O0lBQ2hDLDZDQUFzRDs7SUFDdEQsNkNBQXNEOztJQUN0RCwyQ0FBcUQ7O0lBQ3JELDJEQUF5Rzs7SUFDekcsNENBQXNEOztJQUN0RCxnREFBK0Y7O0lBQy9GLDJDQUEwRjs7SUFDMUYsNkNBQXVEOztJQUN2RCwyQ0FBNEM7O0lBQzVDLDRDQUE2Qzs7SUFDN0MsMkNBQTRDOztJQUM1QyxtREFBb0Q7O0lBQ3BELGdEQUFpRDs7SUFDakQsK0NBQWdFOztJQUNoRSxrREFBbUM7O0lBQ25DLHdDQUE2RDs7SUFDN0QsdUNBQXdCOztJQUN4Qix1Q0FBZ0Y7O0lBQ2hGLDhDQUE0Qjs7SUFDNUIsZ0RBQW9EOztJQXFCcEQsOENBQW9HOztJQUNwRyw4Q0FBK0I7O0lBQy9CLG9EQUF1RTs7SUFDdkUsNkNBQThEOztJQUM5RCwwQ0FBd0Q7O0lBQ3hELDBDQUE4RDs7SUFDOUQsK0NBQTBFOztJQUMxRSw0Q0FBdUU7O0lBQ3ZFLHFEQUFnRjs7SUFFaEYsNkNBQXlGOztJQUN6Rix3Q0FBa0U7O0lBQ2xFLGlEQUFrRjs7SUFDbEYsb0RBQTRGOztJQUU1RiwrQ0FBZ0U7O0lBQ2hFLG9EQUE4Rzs7SUFLOUcsNkNBQXFCOztJQUNyQiw0Q0FBb0I7O0lBQ3BCLDBDQUFpQjs7SUFDakIsMkNBQW1COztJQUNuQiwyQ0FBZ0I7O0lBQ2hCLGlEQUF5RDs7SUFDekQsNERBQTBDOztJQUMxQyw4Q0FBaUM7O0lBQ2pDLDZDQUE0Qjs7SUFDNUIsc0NBQXFCOztJQUVyQix5Q0FBb0Q7O0lBQ3BELDBDQUFtQzs7SUFxQ2pDLGdEQUF1Qzs7Ozs7SUFDdkMseUNBQTJCOzs7OztJQUMzQixvQ0FBOEI7Ozs7O0lBQzlCLDJDQUE4Qjs7SUFDOUIsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJBQ0tTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNlbGYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIGlzTm90TmlsLFxuICBzbGlkZU1vdGlvbixcbiAgd2FybkRlcHJlY2F0aW9uLFxuICB6b29tTW90aW9uLFxuICBJbnB1dEJvb2xlYW4sXG4gIE56Q29uZmlnU2VydmljZSxcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXG4gIE56U2l6ZUxEU1R5cGUsXG4gIE56VHJlZUJhc2UsXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgTnpUcmVlTm9kZSxcbiAgTnpUcmVlTm9kZU9wdGlvbnMsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56VHJlZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XG5cbmltcG9ydCB7IE56VHJlZVNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUtc2VsZWN0LnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOelRyZWVCYXNlU2VydmljZSB7XG4gIHJldHVybiBpbmplY3Rvci5nZXQoTnpUcmVlU2VsZWN0U2VydmljZSk7XG59XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0cmVlU2VsZWN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1zZWxlY3QnLFxuICBleHBvcnRBczogJ256VHJlZVNlbGVjdCcsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbiwgem9vbU1vdGlvbl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIE56VHJlZVNlbGVjdFNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gICAgICB1c2VGYWN0b3J5OiBoaWdoZXJPcmRlclNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZVNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnbnpTaXplPT09XCJsYXJnZVwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ256U2l6ZT09PVwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJzogJyFuekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnbnpBbGxvd0NsZWFyJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nOiAnbnpPcGVuJyxcbiAgICAnKGNsaWNrKSc6ICd0cmlnZ2VyKCknXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZVNlbGVjdENvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpIaWRlVW5NYXRjaGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpTaG93SWNvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGEgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpOb2RlczogQXJyYXk8TnpUcmVlTm9kZSB8IE56VHJlZU5vZGVPcHRpb25zPiA9IFtdO1xuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplTERTVHlwZTtcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpFeHBhbmRlZEtleXNgIGluc3RlYWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdEV4cGFuZGVkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpFeHBhbmRlZEtleXMnIGluc3RlYWQuYCk7XG4gICAgdGhpcy5leHBhbmRlZEtleXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZEtleXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5leHBhbmRlZEtleXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnpFeHBhbmRlZEtleXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkS2V5cztcbiAgfVxuXG4gIEBJbnB1dCgpIG56RGlzcGxheVdpdGg6IChub2RlOiBOelRyZWVOb2RlKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQgPSAobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZTtcbiAgQElucHV0KCkgbnpNYXhUYWdDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZVtdIH0+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpUcmVlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpUcmVlQ2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3RyZWVSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSkgdHJlZVJlZjogTnpUcmVlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiB0cnVlIH0pIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IGZhbHNlIH0pIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgQElucHV0KCkgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xuICBAQ29udGVudENoaWxkKCduelRyZWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VHJlZVRlbXBsYXRlQ2hpbGQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xuICBnZXQgdHJlZVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+IHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVUZW1wbGF0ZSB8fCB0aGlzLm56VHJlZVRlbXBsYXRlQ2hpbGQ7XG4gIH1cblxuICB0cmlnZ2VyV2lkdGg6IG51bWJlcjtcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcbiAgaXNOb3RGb3VuZCA9IGZhbHNlO1xuICBpbnB1dFZhbHVlID0gJyc7XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0ZWROb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIGV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcbiAgdmFsdWU6IHN0cmluZ1tdID0gW107XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKSA9PiB2b2lkO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIGdldCBwbGFjZUhvbGRlckRpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XG4gIH1cblxuICBnZXQgc2VhcmNoRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm56T3BlbiA/ICdibG9jaycgOiAnbm9uZSc7XG4gIH1cblxuICBnZXQgaXNNdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uek11bHRpcGxlIHx8IHRoaXMubnpDaGVja2FibGU7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRWYWx1ZURpc3BsYXkoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG9wYWNpdHkgPSAxO1xuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVTZWxlY3RTZXJ2aWNlLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIobnpUcmVlU2VydmljZSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduek5vZGVzJykpIHtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2Rlcyh0cnVlKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFt2YWx1ZSBhcyBzdHJpbmddO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uek9wZW4pKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5mb2N1c09uSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbktleURvd25JbnB1dChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiAhZXZlbnRUYXJnZXQudmFsdWUgJiYga2V5Q29kZSA9PT0gQkFDS1NQQUNFKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByZW1vdmVOb2RlID0gdGhpcy5zZWxlY3RlZE5vZGVzW3RoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChyZW1vdmVOb2RlKTtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KHtcbiAgICAgICAgICBldmVudE5hbWU6ICdyZW1vdmVTZWxlY3QnLFxuICAgICAgICAgIG5vZGU6IHJlbW92ZU5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25FeHBhbmRlZEtleXNDaGFuZ2UodmFsdWU6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLmV4cGFuZGVkS2V5cyA9IFsuLi52YWx1ZS5rZXlzIV07XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZChub2RlOiBOelRyZWVOb2RlLCBlbWl0OiBib29sZWFuID0gdHJ1ZSwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGUsIHRoaXMubnpNdWx0aXBsZSk7XG4gICAgfVxuXG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMubnpSZW1vdmVkLmVtaXQobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGhlIHBvcHVwXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNPbklucHV0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIHRoaXMubnpUcmVlQ2xpY2sucGlwZShcbiAgICAgICAgdGFwKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XG4gICAgICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUgJiYgIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhbm9kZS5pc0NoZWNrZWQ7XG4gICAgICAgICAgICBub2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5uekNoZWNrU3RyaWN0bHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLm56Q2hlY2thYmxlKSB7XG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcbiAgICAgICAgICByZXR1cm4gdGhpcy5uekNoZWNrYWJsZSA/ICFub2RlLmlzRGlzYWJsZWQgJiYgIW5vZGUuaXNEaXNhYmxlQ2hlY2tib3ggOiAhbm9kZS5pc0Rpc2FibGVkICYmIG5vZGUuaXNTZWxlY3RhYmxlO1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRoaXMubnpDaGVja2FibGUgPyB0aGlzLm56VHJlZUNoZWNrQm94Q2hhbmdlIDogb2JzZXJ2YWJsZU9mKCksXG4gICAgICB0aGlzLm56Q2xlYXJlZCxcbiAgICAgIHRoaXMubnpSZW1vdmVkXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5tYXAobm9kZSA9PiBub2RlLmtleSEpO1xuICAgICAgdGhpcy52YWx1ZSA9IFsuLi52YWx1ZV07XG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmlzTm90Rm91bmQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmxlbmd0aCA/IHZhbHVlWzBdIDogbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZE5vZGVzKGluaXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChpbml0KSB7XG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMuY29lcmNlVHJlZU5vZGVzKHRoaXMubnpOb2Rlcyk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMuaXNNdWx0aXBsZTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZShub2Rlcyk7XG4gICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyh0aGlzLnZhbHVlLCBub2RlcywgdGhpcy5pc011bHRpcGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbLi4uKHRoaXMubnpDaGVja2FibGUgPyB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpIDogdGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkpXTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0V2lkdGgoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiB0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnd2lkdGgnLFxuICAgICAgICAgIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xlYXJTZWxlY3Rpb24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5uekNsZWFyZWQuZW1pdCgpO1xuICB9XG5cbiAgc2V0U2VhcmNoVmFsdWVzKCRldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuaXNOb3RGb3VuZCA9ICh0aGlzLm56U2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpICYmICEhdGhpcy5pbnB1dFZhbHVlICYmICRldmVudC5tYXRjaGVkS2V5cyEubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIH1cblxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56VHJlZU5vZGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRpb24ua2V5ITtcbiAgfVxufVxuIl19