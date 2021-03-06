/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentObserver } from '@angular/cdk/observers';
import { AfterContentInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService, NzSizeLDSType, NzUpdateHostClassService, NzWaveConfig, NzWaveDirective } from 'ng-zorro-antd/core';
export declare type NzButtonType = 'primary' | 'dashed' | 'danger' | 'default' | 'link';
export declare type NzButtonShape = 'circle' | 'round' | null;
export declare class NzButtonComponent implements AfterContentInit, OnInit, OnDestroy, OnChanges {
    private elementRef;
    private cdr;
    private renderer;
    private contentObserver;
    private nzUpdateHostClassService;
    private ngZone;
    nzConfigService: NzConfigService;
    private waveConfig;
    private animationType;
    contentElement: ElementRef;
    listOfIconElement: QueryList<ElementRef>;
    nzWave: NzWaveDirective;
    nzBlock: boolean;
    nzGhost: boolean;
    nzSearch: boolean;
    nzLoading: boolean;
    nzType: NzButtonType;
    nzShape: NzButtonShape;
    nzSize: NzSizeLDSType;
    readonly el: HTMLElement;
    isInDropdown: boolean;
    private iconElement;
    private iconOnly;
    private destroy$;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap(): void;
    updateIconDisplay(value: boolean): void;
    checkContent(): void;
    moveIcon(): void;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, contentObserver: ContentObserver, nzUpdateHostClassService: NzUpdateHostClassService, ngZone: NgZone, nzConfigService: NzConfigService, waveConfig: NzWaveConfig, animationType: string);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
