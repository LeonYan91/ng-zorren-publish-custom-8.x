/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { NgStyleInterface, NzConfigService, NzScrollService } from 'ng-zorro-antd/core';
import { NzAnchorLinkComponent } from './nz-anchor-link.component';
export declare class NzAnchorComponent implements OnDestroy, AfterViewInit {
    nzConfigService: NzConfigService;
    private scrollSrv;
    private doc;
    private cdr;
    private platform;
    private ink;
    nzAffix: boolean;
    nzShowInkInFixed: boolean;
    nzBounds: number;
    nzOffsetTop: number;
    private _offsetTop;
    nzTarget: string | Element;
    readonly nzClick: EventEmitter<string>;
    readonly nzScroll: EventEmitter<NzAnchorLinkComponent>;
    visible: boolean;
    wrapperStyle: NgStyleInterface;
    private links;
    private animating;
    private target;
    private scroll$;
    private destroyed;
    constructor(nzConfigService: NzConfigService, scrollSrv: NzScrollService, doc: any, cdr: ChangeDetectorRef, platform: Platform);
    registerLink(link: NzAnchorLinkComponent): void;
    unregisterLink(link: NzAnchorLinkComponent): void;
    private getTarget;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private registerScrollEvent;
    private removeListen;
    private getOffsetTop;
    handleScroll(): void;
    private clearActive;
    private handleActive;
    handleScrollTo(linkComp: NzAnchorLinkComponent): void;
}
