/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NzButtonComponent, NzButtonGroupComponent } from 'ng-zorro-antd/button';
import { Observable } from 'rxjs';
import { NzDropdownMenuComponent, NzPlacementType } from './nz-dropdown-menu.component';
export declare class NzDropDownDirective implements AfterViewInit, OnDestroy, OnChanges {
    elementRef: ElementRef;
    private renderer;
    private overlay;
    private platform;
    private nzButtonComponent;
    private nzButtonGroupComponent;
    private viewContainerRef;
    private portal;
    private overlayRef;
    private destroy$;
    private triggerWidth;
    private el;
    private dropdownOpen;
    private positionStrategy;
    private positions;
    private positionSubscription;
    private overlaySubscription;
    readonly hover$: Observable<boolean>;
    readonly $click: Observable<boolean>;
    nzDropdownMenu: NzDropdownMenuComponent;
    nzTrigger: 'click' | 'hover';
    nzMatchWidthElement: ElementRef;
    nzBackdrop: boolean;
    nzClickHide: boolean;
    nzDisabled: boolean;
    nzVisible: boolean;
    nzTableFilter: boolean;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzPlacement: NzPlacementType;
    readonly nzVisibleChange: EventEmitter<boolean>;
    setDisabled(disabled: boolean): void;
    private getOverlayConfig;
    private createOverlay;
    updateOverlayConfig(overlayConfig: OverlayConfig): OverlayConfig;
    dispose(): void;
    private subscribeToPositions;
    private subscribeOverlayEvent;
    private getPortal;
    private openMenu;
    private closeMenu;
    private setPosition;
    private updatePositionStrategy;
    private setTriggerWidth;
    initActionSubscribe(): void;
    updateOverlayByVisible(): void;
    updateDisabledState(): void;
    regeneratePosition(placement: NzPlacementType, positions: ConnectionPositionPair[]): ConnectionPositionPair[];
    constructor(elementRef: ElementRef, renderer: Renderer2, overlay: Overlay, platform: Platform, nzButtonComponent: NzButtonComponent, nzButtonGroupComponent: NzButtonGroupComponent, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
