/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NzConfigService, NzFormatBeforeDropEvent, NzFormatEmitEvent, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core';
import { NzTreeService } from './nz-tree.service';
export declare function NzTreeServiceFactory(higherOrderService: NzTreeBaseService, treeService: NzTreeService): NzTreeBaseService;
export declare class NzTreeComponent extends NzTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    nzConfigService: NzConfigService;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzShowIcon: boolean;
    nzShowExpand: boolean;
    nzShowLine: boolean;
    nzExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    nzCheckable: boolean;
    nzAsyncData: boolean;
    nzDraggable: boolean;
    nzHideUnMatched: boolean;
    nzSelectMode: boolean;
    nzCheckStrictly: boolean;
    nzBlockNode: boolean;
    nzExpandAll: boolean;
    nzTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    nzTreeTemplateChild: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    readonly treeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    /**
     * @deprecated 9.0.0 use `nzExpandAll` instead.
     */
    nzDefaultExpandAll: boolean;
    private _nzDefaultExpandAll;
    nzBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzMultiple: boolean;
    nzData: any[];
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     */
    nzDefaultExpandedKeys: string[];
    /**
     * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
     */
    nzDefaultSelectedKeys: string[];
    /**
     * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
     */
    nzDefaultCheckedKeys: string[];
    nzExpandedKeys: string[];
    nzSelectedKeys: string[];
    nzCheckedKeys: string[];
    nzSearchValue: string;
    /**
     * To render nodes if root is changed.
     */
    readonly nzNodes: NzTreeNode[];
    readonly nzExpandedKeysChange: EventEmitter<string[]>;
    readonly nzSelectedKeysChange: EventEmitter<string[]>;
    readonly nzCheckedKeysChange: EventEmitter<string[]>;
    readonly nzSearchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use `nzSearchValueChange` instead.
     */
    readonly nzOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    readonly nzClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly nzCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    _searchValue: string;
    nzDefaultSubject: ReplaySubject<{
        type: string;
        keys: string[];
    }>;
    destroy$: Subject<unknown>;
    prefixCls: string;
    classMap: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    initNzData(value: any[]): void;
    constructor(nzTreeService: NzTreeBaseService, nzConfigService: NzConfigService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}
