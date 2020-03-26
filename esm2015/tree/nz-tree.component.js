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
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, warnDeprecation, InputBoolean, NzConfigService, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken, WithConfig } from 'ng-zorro-antd/core';
import { NzTreeService } from './nz-tree.service';
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'tree';
export class NzTreeComponent extends NzTreeBase {
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
tslib_1.__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowIcon", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzAsyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzDraggable", void 0);
tslib_1.__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzSelectMode", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzBlockNode", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzExpandAll", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], NzTreeComponent.prototype, "nzDefaultExpandAll", null);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFFBQVEsRUFDUixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsUUFBUSxFQUNSLGVBQWUsRUFDZixZQUFZLEVBQ1osZUFBZSxFQUdmLHNCQUFzQixFQUN0QixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLDZCQUE2QixFQUU3QixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQUVsRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGtCQUFxQyxFQUNyQyxXQUEwQjtJQUUxQixPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0FBQy9ELENBQUM7O01BRUssd0JBQXdCLEdBQUcsTUFBTTtBQXFCdkMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTs7Ozs7OztJQW9MN0MsWUFDRSxhQUFnQyxFQUN6QixlQUFnQyxFQUMvQixHQUFzQixFQUNILFdBQW9DO1FBRS9ELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUpkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNILGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXRMeEMsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc3QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXVCckMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBSVgsZUFBVSxHQUFHLEtBQUssQ0FBQztRQTJFekIseUJBQW9CLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDNUUseUJBQW9CLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDNUUsd0JBQW1CLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFFM0Usd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7Ozs7UUFLNUQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV2RCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDaEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ25ELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDdEQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDekQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV2RCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ3RELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNyRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ3RELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNqRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBR3ZFLHFCQUFnQixHQUFHLElBQUksYUFBYSxDQUFtQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxhQUFROzs7UUFBa0MsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFDO1FBQ3JELGNBQVM7OztRQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztJQXlDbkMsQ0FBQzs7OztJQTFLRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3pELENBQUM7Ozs7OztJQU9ELElBQUksa0JBQWtCLENBQUMsS0FBYztRQUNuQyxlQUFlLENBQUMsbUZBQW1GLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzs7OztJQVFELElBRUksTUFBTSxDQUFDLEtBQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFLRCxJQUNJLHFCQUFxQixDQUFDLEtBQWU7UUFDdkMsZUFBZSxDQUFDLHlGQUF5RixDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFLRCxJQUNJLHFCQUFxQixDQUFDLEtBQWU7UUFDdkMsZUFBZSxDQUFDLHlGQUF5RixDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFLRCxJQUNJLG9CQUFvQixDQUFDLEtBQWU7UUFDdEMsZUFBZSxDQUFDLHVGQUF1RixDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFRCxJQUNJLGNBQWMsQ0FBQyxLQUFlO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFRCxJQUNJLGNBQWMsQ0FBQyxLQUFlO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFlO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRUQsSUFDSSxhQUFhLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRjs7O2VBR0c7WUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBS0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBbUNELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSTtZQUN0QixDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDaEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDakQsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ2xELENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVztZQUNwQyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDdkMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQW1CO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUE2QjtRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQVk7UUFDckIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7O0lBV0QsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFzQyxFQUFFLEVBQUU7WUFDeEcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU87YUFDUjtZQUNELFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxnQkFBZ0I7b0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssZ0JBQWdCO29CQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzlFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssZUFBZTtvQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLE1BQU07YUFDVDtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYTthQUNmLG1CQUFtQixFQUFFO2FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNoQixRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RCLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hCLE1BQU07Z0JBQ1IsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1IsS0FBSyxVQUFVO29CQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixNQUFNO2dCQUNSLEtBQUssYUFBYTtvQkFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLE1BQU07Z0JBQ1IsWUFBWTtnQkFDWixLQUFLLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM5QixNQUFNO2dCQUNSLEtBQUssVUFBVTtvQkFDYixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsTUFBTTtnQkFDUixLQUFLLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixNQUFNO2dCQUNSLEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFpRDtRQUMzRCxJQUFJLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBN1JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLHEwQkFBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUU7b0JBQ1QsYUFBYTtvQkFDYjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLEVBQUUsb0JBQW9CO3dCQUNoQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSw2QkFBNkIsQ0FBQyxFQUFFLGFBQWEsQ0FBQztxQkFDdkY7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUM7d0JBQzlDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7WUFuQ0MsaUJBQWlCO1lBTGpCLGVBQWU7WUF2QmYsaUJBQWlCO1lBMEJqQixzQkFBc0IsdUJBOE5uQixJQUFJLFlBQUksUUFBUTs7O3lCQXZMbEIsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFFTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBRUwsS0FBSztrQ0FDTCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQVEvQyxLQUFLOzJCQWNMLEtBQUs7eUJBRUwsS0FBSztxQkFFTCxLQUFLO29DQVNMLEtBQUs7b0NBU0wsS0FBSzttQ0FTTCxLQUFLOzZCQU1MLEtBQUs7NkJBS0wsS0FBSzs0QkFLTCxLQUFLOzRCQUtMLEtBQUs7bUNBeUJMLE1BQU07bUNBQ04sTUFBTTtrQ0FDTixNQUFNO2tDQUVOLE1BQU07NkJBS04sTUFBTTtzQkFFTixNQUFNO3lCQUNOLE1BQU07NEJBQ04sTUFBTTsrQkFDTixNQUFNOzZCQUNOLE1BQU07NEJBRU4sTUFBTTs0QkFDTixNQUFNOzJCQUNOLE1BQU07NEJBQ04sTUFBTTt1QkFDTixNQUFNOzBCQUNOLE1BQU07O0FBeEkrRDtJQUE1RCxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDOzttREFBcUI7QUFDakU7SUFBZixZQUFZLEVBQUU7O3FEQUE4QjtBQUM3QjtJQUFmLFlBQVksRUFBRTs7bURBQW9CO0FBRW5CO0lBQWYsWUFBWSxFQUFFOztvREFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7O29EQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7b0RBQThCO0FBRWdCO0lBQTVELFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7O3dEQUEwQjtBQUN0RTtJQUFmLFlBQVksRUFBRTs7cURBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFOzt3REFBeUI7QUFDcUI7SUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs7b0RBQXNCO0FBQ2xFO0lBQWYsWUFBWSxFQUFFOztvREFBcUI7QUFhN0M7SUFEQyxZQUFZLEVBQUU7Ozt5REFLZDtBQVV3QjtJQUFmLFlBQVksRUFBRTs7bURBQW9COzs7SUF2QzVDLHFDQUEwRjs7SUFDMUYsdUNBQXNEOztJQUN0RCxxQ0FBNEM7O0lBQzVDLHlDQUFnRTs7SUFDaEUsc0NBQTZDOztJQUM3QyxzQ0FBNkM7O0lBQzdDLHNDQUFzRDs7SUFFdEQsMENBQStGOztJQUMvRix1Q0FBOEM7O0lBQzlDLDBDQUFpRDs7SUFDakQsc0NBQTJGOztJQUMzRixzQ0FBNkM7O0lBRTdDLHlDQUFnRTs7SUFDaEUsOENBQThHOzs7OztJQW9COUcsOENBQW9DOztJQUVwQyx1Q0FBaUY7O0lBRWpGLHFDQUE0Qzs7SUEyRTVDLCtDQUErRjs7SUFDL0YsK0NBQStGOztJQUMvRiw4Q0FBOEY7O0lBRTlGLDhDQUErRTs7Ozs7SUFLL0UseUNBQTBFOztJQUUxRSxrQ0FBbUU7O0lBQ25FLHFDQUFzRTs7SUFDdEUsd0NBQXlFOztJQUN6RSwyQ0FBNEU7O0lBQzVFLHlDQUEwRTs7SUFFMUUsd0NBQXlFOztJQUN6RSx3Q0FBeUU7O0lBQ3pFLHVDQUF3RTs7SUFDeEUsd0NBQXlFOztJQUN6RSxtQ0FBb0U7O0lBQ3BFLHNDQUF1RTs7SUFFdkUsdUNBQXFCOztJQUNyQiwyQ0FBMEU7O0lBQzFFLG1DQUF5Qjs7SUFDekIsb0NBQXVCOztJQUN2QixtQ0FBYzs7SUFFZCxtQ0FBcUQ7O0lBQ3JELG9DQUFtQzs7SUFvQ2pDLDBDQUF1Qzs7Ozs7SUFDdkMsOEJBQThCOztJQUM5QixzQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTa2lwU2VsZixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIGlzTm90TmlsLFxuICB3YXJuRGVwcmVjYXRpb24sXG4gIElucHV0Qm9vbGVhbixcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOekZvcm1hdEJlZm9yZURyb3BFdmVudCxcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXG4gIE56VHJlZUJhc2UsXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgTnpUcmVlTm9kZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRyZWVTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gTnpUcmVlU2VydmljZUZhY3RvcnkoXG4gIGhpZ2hlck9yZGVyU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsXG4gIHRyZWVTZXJ2aWNlOiBOelRyZWVTZXJ2aWNlXG4pOiBOelRyZWVCYXNlU2VydmljZSB7XG4gIHJldHVybiBoaWdoZXJPcmRlclNlcnZpY2UgPyBoaWdoZXJPcmRlclNlcnZpY2UgOiB0cmVlU2VydmljZTtcbn1cblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RyZWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmVlJyxcbiAgZXhwb3J0QXM6ICduelRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBOelRyZWVTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56VHJlZUJhc2VTZXJ2aWNlLFxuICAgICAgdXNlRmFjdG9yeTogTnpUcmVlU2VydmljZUZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW5dLCBOelRyZWVTZXJ2aWNlXVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelRyZWVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlQ29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56U2hvd0ljb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGEgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RHJhZ2dhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56SGlkZVVuTWF0Y2hlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VsZWN0TW9kZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekJsb2NrTm9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kQWxsID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xuICBAQ29udGVudENoaWxkKCduelRyZWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VHJlZVRlbXBsYXRlQ2hpbGQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xuICBnZXQgdHJlZVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+IHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVUZW1wbGF0ZSB8fCB0aGlzLm56VHJlZVRlbXBsYXRlQ2hpbGQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgdXNlIGBuekV4cGFuZEFsbGAgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBzZXQgbnpEZWZhdWx0RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0RXhwYW5kQWxsJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekV4cGFuZEFsbCcgaW5zdGVhZC5gKTtcbiAgICB0aGlzLm56RXhwYW5kQWxsID0gdmFsdWU7XG4gICAgdGhpcy5fbnpEZWZhdWx0RXhwYW5kQWxsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpEZWZhdWx0RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9uekRlZmF1bHRFeHBhbmRBbGw7XG4gIH1cblxuICBwcml2YXRlIF9uekRlZmF1bHRFeHBhbmRBbGwgPSBmYWxzZTtcblxuICBASW5wdXQoKSBuekJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IG56RGF0YSh2YWx1ZTogYW55W10pIHtcbiAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuekV4cGFuZGVkS2V5c2AgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0RXhwYW5kZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekV4cGFuZGVkS2V5cycgaW5zdGVhZC5gKTtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuelNlbGVjdGVkS2V5c2AgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0U2VsZWN0ZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduelNlbGVjdGVkS2V5cycgaW5zdGVhZC5gKTtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuekNoZWNrZWRLZXlzYCBpbnN0ZWFkLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdENoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdENoZWNrZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekNoZWNrZWRLZXlzJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2VhcmNoRXhwYW5kKHZhbHVlKTtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLm56U2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcbiAgICAgIC8qKlxuICAgICAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56T25TZWFyY2hOb2RlYCBpbnN0ZWFkLlxuICAgICAgICogSGlkZSB3YXJuaW5nLCBuZWVkIHJlbW92ZSBuZXh0IHZlcnNpb25cbiAgICAgICAqL1xuICAgICAgdGhpcy5uek9uU2VhcmNoTm9kZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHJlbmRlciBub2RlcyBpZiByb290IGlzIGNoYW5nZWQuXG4gICAqL1xuICBnZXQgbnpOb2RlcygpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuelNlYXJjaFZhbHVlQ2hhbmdlYCBpbnN0ZWFkLlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2hOb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dE1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XG4gIG56RGVmYXVsdFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdDx7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfT4oNik7XG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcbiAgY2xhc3NNYXAgPSB7fTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBOelRyZWVOb2RlW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxuICAgICAgW3RoaXMucHJlZml4Q2xzICsgJy1zaG93LWxpbmUnXTogdGhpcy5uelNob3dMaW5lLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgXTogIXRoaXMubnpTaG93SWNvbixcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYmxvY2stbm9kZWBdOiB0aGlzLm56QmxvY2tOb2RlLFxuICAgICAgWydkcmFnZ2FibGUtdHJlZSddOiB0aGlzLm56RHJhZ2dhYmxlLFxuICAgICAgWydhbnQtc2VsZWN0LXRyZWUnXTogdGhpcy5uelNlbGVjdE1vZGVcbiAgICB9O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOelRyZWVOb2RlW10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGluaXROekRhdGEodmFsdWU6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5uekNoZWNrU3RyaWN0bHk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMubnpNdWx0aXBsZTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLmNvZXJjZVRyZWVOb2Rlcyh2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfSkgPT4ge1xuICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmtleXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzKTtcbiAgICAgICAgICB0aGlzLm56RXhwYW5kZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnpTZWxlY3RlZEtleXMnOlxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56TXVsdGlwbGUpO1xuICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduekNoZWNrZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XG4gICAgICAgICAgdGhpcy5uekNoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMubnpUcmVlU2VydmljZVxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50TmFtZSkge1xuICAgICAgICAgIGNhc2UgJ2V4cGFuZCc6XG4gICAgICAgICAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgICB0aGlzLm56Q2xpY2suZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgICAgIHRoaXMubnpDaGVja0JveENoYW5nZS5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGJsY2xpY2snOlxuICAgICAgICAgICAgdGhpcy5uekRibENsaWNrLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XG4gICAgICAgICAgICB0aGlzLm56Q29udGV4dE1lbnUuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIGRyYWcgZHJvcFxuICAgICAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XG4gICAgICAgICAgICB0aGlzLm56T25EcmFnU3RhcnQuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW50ZXIuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdPdmVyLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkcmFnbGVhdmUnOlxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0xlYXZlLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkcm9wJzpcbiAgICAgICAgICAgIHRoaXMubnpPbkRyb3AuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VuZC5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uek11bHRpcGxlKSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMubnpNdWx0aXBsZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==