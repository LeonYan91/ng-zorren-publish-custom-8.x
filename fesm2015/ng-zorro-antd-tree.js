import { CommonModule } from '@angular/common';
import { TemplateRef, Component, ChangeDetectionStrategy, NgZone, Renderer2, ElementRef, ChangeDetectorRef, Host, Optional, ViewChild, Input, HostListener, Injectable, EventEmitter, SkipSelf, forwardRef, ContentChild, Output, NgModule } from '@angular/core';
import { warnDeprecation, treeCollapseMotion, NzTreeBaseService, NzNoAnimationDirective, InputBoolean, NzTreeBase, isNotNil, NzTreeHigherOrderServiceToken, NzConfigService, WithConfig, NzAddOnModule, NzNoAnimationModule, NzHighlightModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { __decorate, __metadata } from 'tslib';
import { Subject, fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeComponent {
    /**
     * @param {?} nzTreeService
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzHideUnMatched = false;
        this.nzNoAnimation = false;
        this.nzSelectMode = false;
        this.nzShowIcon = false;
        this.nzSearchValue = '';
        // default var
        this.prefixCls = 'ant-tree';
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeCheckboxClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        this._nzDraggable = false;
        this._nzExpandAll = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDraggable(value) {
        this._nzDraggable = value;
        this.handDragEvent();
    }
    /**
     * @return {?}
     */
    get nzDraggable() {
        return this._nzDraggable;
    }
    /**
     * @deprecated use `nzExpandAll` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandAll(value) {
        warnDeprecation(`'nzDefaultExpandAll' is going to be removed in 9.0.0. Please use 'nzExpandAll' instead.`);
        this._nzExpandAll = value;
        if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
            this.nzTreeNode.isExpanded = true;
        }
    }
    /**
     * @return {?}
     */
    get nzDefaultExpandAll() {
        return this._nzExpandAll;
    }
    // default set
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpandAll(value) {
        this._nzExpandAll = value;
        if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
            this.nzTreeNode.isExpanded = true;
        }
    }
    /**
     * @return {?}
     */
    get nzExpandAll() {
        return this._nzExpandAll;
    }
    /**
     * @return {?}
     */
    get nzIcon() {
        return this.nzTreeNode.icon;
    }
    /**
     * @return {?}
     */
    get canDraggable() {
        return this.nzDraggable && !this.nzTreeNode.isDisabled ? true : null;
    }
    /**
     * @return {?}
     */
    get isShowLineIcon() {
        return !this.nzTreeNode.isLeaf && this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isShowSwitchIcon() {
        return !this.nzTreeNode.isLeaf && !this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        // to hide unmatched nodes
        return this.nzSearchValue &&
            this.nzHideUnMatched &&
            !this.nzTreeNode.isMatched &&
            !this.nzTreeNode.isExpanded &&
            this.nzTreeNode.canHide
            ? 'none'
            : '';
    }
    /**
     * reset node class
     * @return {?}
     */
    setClassMap() {
        this.prefixCls = this.nzSelectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.nzTreeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.nzTreeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.nzTreeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: this.nzTreeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.nzTreeNode.isLoading
        };
        this.nzNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.nzTreeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.nzNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.nzTreeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.nzTreeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox
        };
        this.nzNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.nzTreeNode.isSelected
        };
        this.nzNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.nzNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeNode.isSelectable && !this.nzTreeNode.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    _clickExpand(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.nzTreeNode.isLoading && !this.nzTreeNode.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.nzTreeNode.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.isExpanded = !this.nzTreeNode.isExpanded;
            if (this.nzTreeNode.isMatched) {
                this.setDisplayForParentNodes(this.nzTreeNode);
            }
            this.setDisplayForChildNodes(this.nzTreeNode);
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    }
    /**
     * @private
     * @param {?} parentNode
     * @return {?}
     */
    setDisplayForChildNodes(parentNode) {
        const { children } = parentNode;
        if (children.length > 0) {
            children.map((/**
             * @param {?} node
             * @return {?}
             */
            node => {
                /** @type {?} */
                const canHide = !node.isMatched;
                node.canHide = canHide;
                this.setDisplayForChildNodes(node);
            }));
        }
    }
    /**
     * @private
     * @param {?} targetNode
     * @return {?}
     */
    setDisplayForParentNodes(targetNode) {
        /** @type {?} */
        const parentNode = targetNode.getParentNode();
        if (parentNode) {
            parentNode.canHide = false;
            this.setDisplayForParentNodes(parentNode);
        }
    }
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    _clickCheckBox(event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox) {
            return;
        }
        this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
        this.nzTreeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.nzTreeNode);
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * drag event
     * @return {?}
     */
    clearDragClass() {
        /** @type {?} */
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragStart(e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.nzTreeNode.key)));
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        this.nzTreeNode.isExpanded = false;
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.nzTreeNode.key && !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.isExpanded = true;
            }
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
        }));
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.nzTreeNode.key) || (this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            const dropEvent = this.nzTreeService.formatEvent('drop', this.nzTreeNode, e);
            /** @type {?} */
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
            if (this.nzBeforeDrop) {
                this.nzBeforeDrop({
                    dragNode: (/** @type {?} */ (this.nzTreeService.getSelectedNode())),
                    node: this.nzTreeNode,
                    pos: this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                (canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                    }
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                }));
            }
            else if (this.nzTreeNode) {
                this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dropEvent);
            }
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            // if user do not custom beforeDrop
            if (!this.nzBeforeDrop) {
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }));
    }
    /**
     * Listening to dragging events.
     * @return {?}
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.nzDraggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragStart(e)));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnter(e)));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragOver(e)));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragLeave(e)));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragDrop(e)));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnd(e)));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        }));
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
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // init expanded / selected / checked list
        if (this.nzTreeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.nzTreeNode);
        }
        if (this.nzTreeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
        }
        if (this.nzTreeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        }
        // TODO
        this.nzTreeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => (/** @type {?} */ (data.node)).key === this.nzTreeNode.key)), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.setClassMap();
            this.markForCheck();
        }));
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeNodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node',
                exportAs: 'nzTreeNode',
                template: "<li\n  #dragElement\n  role=\"treeitem\"\n  [style.display]=\"displayStyle\"\n  [ngClass]=\"nzNodeClass\">\n  <ng-container *ngIf=\"nzShowExpand\">\n    <span\n      [ngClass]=\"nzNodeSwitcherClass\"\n      (click)=\"_clickExpand($event)\">\n      <ng-container *ngIf=\"isShowSwitchIcon\">\n        <ng-container *ngIf=\"!nzTreeNode.isLoading\">\n          <ng-template\n            *ngIf=\"isTemplateRef(nzExpandedIcon)\"\n            [ngTemplateOutlet]=\"nzExpandedIcon\"\n            [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\n          </ng-template>\n          <i\n            *ngIf=\"!isTemplateRef(nzExpandedIcon)\"\n            nz-icon\n            nzType=\"caret-down\"\n            [class.ant-select-switcher-icon]=\"nzSelectMode\"\n            [class.ant-tree-switcher-icon]=\"!nzSelectMode\">\n          </i>\n        </ng-container>\n        <i *ngIf=\"nzTreeNode.isLoading\" nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"nzShowLine\">\n        <ng-template\n          *ngIf=\"isTemplateRef(nzExpandedIcon)\"\n          [ngTemplateOutlet]=\"nzExpandedIcon\"\n          [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\n        </ng-template>\n        <ng-container *ngIf=\"!isTemplateRef(nzExpandedIcon)\">\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\n        </ng-container>\n      </ng-container>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"nzCheckable\">\n    <span\n      [ngClass]=\"nzNodeCheckboxClass\"\n      (click)=\"_clickCheckBox($event)\">\n      <span [class.ant-tree-checkbox-inner]=\"!nzSelectMode\"\n            [class.ant-select-tree-checkbox-inner]=\"nzSelectMode\"></span>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"!nzTreeTemplate\">\n    <span\n      title=\"{{nzTreeNode.title}}\"\n      [attr.draggable]=\"canDraggable\"\n      [attr.aria-grabbed]=\"canDraggable\"\n      [ngClass]=\"nzNodeContentClass\"\n      [class.draggable]=\"canDraggable\">\n      <span\n        *ngIf=\"nzTreeNode.icon && nzShowIcon\"\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\n        [class.ant-tree-icon_loading]=\"nzTreeNode.isLoading\"\n        [ngClass]=\"nzNodeContentLoadingClass\">\n        <span\n          [ngClass]=\"nzNodeContentIconClass\">\n          <i nz-icon *ngIf=\"nzIcon\" [nzType]=\"nzIcon\"></i>\n        </span>\n      </span>\n      <span class=\"ant-tree-title\" [innerHTML]=\"nzTreeNode.title | nzHighlight: nzSearchValue: '' : 'font-highlight'\">\n      </span>\n    </span>\n  </ng-container>\n  <ng-template\n    [ngTemplateOutlet]=\"nzTreeTemplate\"\n    [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\n  </ng-template>\n\n  <ul\n    *ngIf=\"nzTreeNode.isExpanded\"\n    role=\"group\"\n    class=\"ant-tree-child-tree\"\n    [class.ant-tree-child-tree-open]=\"!nzSelectMode || nzTreeNode.isExpanded\"\n    data-expanded=\"true\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    @treeCollapseMotion>\n    <nz-tree-node\n      *ngFor=\"let node of nzTreeNode.getChildren()\"\n      [nzTreeNode]=\"node\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzDraggable]=\"nzDraggable\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzExpandAll]=\"nzExpandAll\"\n      [nzShowIcon]=\"nzShowIcon\"\n      [nzSearchValue]=\"nzSearchValue\"\n      [nzHideUnMatched]=\"nzHideUnMatched\"\n      [nzBeforeDrop]=\"nzBeforeDrop\"\n      [nzTreeTemplate]=\"nzTreeTemplate\">\n    </nz-tree-node>\n  </ul>\n</li>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [treeCollapseMotion]
            }] }
];
/** @nocollapse */
NzTreeNodeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTreeNodeComponent.propDecorators = {
    dragElement: [{ type: ViewChild, args: ['dragElement', { static: false },] }],
    nzTreeNode: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzTreeTemplate: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzDefaultExpandAll: [{ type: Input }],
    nzExpandAll: [{ type: Input }],
    onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    nzClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    nzDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
    nzContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);
if (false) {
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragElement;
    /**
     * for global property
     * @type {?}
     */
    NzTreeNodeComponent.prototype.nzTreeNode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzSearchValue;
    /** @type {?} */
    NzTreeNodeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeSwitcherClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeCheckboxClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentIconClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentLoadingClass;
    /**
     * drag var
     * @type {?}
     */
    NzTreeNodeComponent.prototype.destroy$;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPosClass;
    /**
     * default set
     * @type {?}
     */
    NzTreeNodeComponent.prototype._nzDraggable;
    /** @type {?} */
    NzTreeNodeComponent.prototype._nzExpandAll;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeService;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.cdr;
    /** @type {?} */
    NzTreeNodeComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeService extends NzTreeBaseService {
}
NzTreeService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'tree';
class NzTreeComponent extends NzTreeBase {
    /**
     * @param {?} nzTreeService
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzSelectMode = false;
        this.nzCheckStrictly = false;
        this.nzExpandAll = false;
        this._nzDefaultExpandAll = false;
        this.nzMultiple = false;
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this.nzDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @return {?}
     */
    get treeTemplate() {
        return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    /**
     * @deprecated 9.0.0 use `nzExpandAll` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandAll(value) {
        warnDeprecation(`'nzDefaultExpandAll' would be removed in 9.0.0. Please use 'nzExpandAll' instead.`);
        this.nzExpandAll = value;
        this._nzDefaultExpandAll = value;
    }
    /**
     * @return {?}
     */
    get nzDefaultExpandAll() {
        return this._nzDefaultExpandAll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzData(value) {
        this.initNzData(value);
    }
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandedKeys(value) {
        warnDeprecation(`'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultSelectedKeys(value) {
        warnDeprecation(`'nzDefaultSelectedKeys' would be removed in 9.0.0. Please use 'nzSelectedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultCheckedKeys(value) {
        warnDeprecation(`'nzDefaultCheckedKeys' would be removed in 9.0.0. Please use 'nzCheckedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSearchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (isNotNil(value)) {
            this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            /**
             * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
             * Hide warning, need remove next version
             */
            this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    /**
     * @return {?}
     */
    get nzSearchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed.
     * @return {?}
     */
    get nzNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.nzShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.nzShowIcon,
            [`${this.prefixCls}-block-node`]: this.nzBlockNode,
            ['draggable-tree']: this.nzDraggable,
            ['ant-select-tree']: this.nzSelectMode
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.initNzData(value);
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
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
                    this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
                    this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        }));
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            switch (data.eventName) {
                case 'expand':
                    this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    this.nzClick.emit(data);
                    break;
                case 'check':
                    this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.nzOnDragEnd.emit(data);
                    break;
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree',
                exportAs: 'nzTree',
                template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"classMap\">\n  <ng-container *ngFor=\"let node of nzNodes\">\n    <nz-tree-node\n      [nzTreeNode]=\"node\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzDraggable]=\"nzDraggable\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzSearchValue]=\"nzSearchValue\"\n      [nzHideUnMatched]=\"nzHideUnMatched\"\n      [nzBeforeDrop]=\"nzBeforeDrop\"\n      [nzExpandAll]=\"nzExpandAll\"\n      [nzShowIcon]=\"nzShowIcon\"\n      [nzTreeTemplate]=\"treeTemplate\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\">\n    </nz-tree-node>\n  </ng-container>\n</ul>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzTreeService,
                    {
                        provide: NzTreeBaseService,
                        useFactory: NzTreeServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzTreeComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzTreeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTreeComponent.propDecorators = {
    nzShowIcon: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    nzCheckStrictly: [{ type: Input }],
    nzBlockNode: [{ type: Input }],
    nzExpandAll: [{ type: Input }],
    nzTreeTemplate: [{ type: Input }],
    nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }],
    nzDefaultExpandAll: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzData: [{ type: Input }],
    nzDefaultExpandedKeys: [{ type: Input }],
    nzDefaultSelectedKeys: [{ type: Input }],
    nzDefaultCheckedKeys: [{ type: Input }],
    nzExpandedKeys: [{ type: Input }],
    nzSelectedKeys: [{ type: Input }],
    nzCheckedKeys: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzExpandedKeysChange: [{ type: Output }],
    nzSelectedKeysChange: [{ type: Output }],
    nzCheckedKeysChange: [{ type: Output }],
    nzSearchValueChange: [{ type: Output }],
    nzOnSearchNode: [{ type: Output }],
    nzClick: [{ type: Output }],
    nzDblClick: [{ type: Output }],
    nzContextMenu: [{ type: Output }],
    nzCheckBoxChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnDragStart: [{ type: Output }],
    nzOnDragEnter: [{ type: Output }],
    nzOnDragOver: [{ type: Output }],
    nzOnDragLeave: [{ type: Output }],
    nzOnDrop: [{ type: Output }],
    nzOnDragEnd: [{ type: Output }]
};
__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowLine", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzAsyncData", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzDraggable", void 0);
__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzSelectMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzBlockNode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzExpandAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NzTreeComponent.prototype, "nzDefaultExpandAll", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzMultiple", void 0);
if (false) {
    /** @type {?} */
    NzTreeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.prototype.nzBlockNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplateChild;
    /**
     * @type {?}
     * @private
     */
    NzTreeComponent.prototype._nzDefaultExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValueChange;
    /**
     * @deprecated use `nzSearchValueChange` instead.
     * @type {?}
     */
    NzTreeComponent.prototype.nzOnSearchNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    NzTreeComponent.prototype._searchValue;
    /** @type {?} */
    NzTreeComponent.prototype.nzDefaultSubject;
    /** @type {?} */
    NzTreeComponent.prototype.destroy$;
    /** @type {?} */
    NzTreeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeComponent.prototype.classMap;
    /** @type {?} */
    NzTreeComponent.prototype.onChange;
    /** @type {?} */
    NzTreeComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTreeComponent.prototype.cdr;
    /** @type {?} */
    NzTreeComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeModule {
}
NzTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule],
                declarations: [NzTreeComponent, NzTreeNodeComponent],
                exports: [NzTreeComponent, NzTreeNodeComponent]
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

export { NzTreeComponent, NzTreeModule, NzTreeNodeComponent, NzTreeService, NzTreeServiceFactory };
//# sourceMappingURL=ng-zorro-antd-tree.js.map
