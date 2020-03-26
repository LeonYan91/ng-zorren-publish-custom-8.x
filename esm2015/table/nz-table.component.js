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
import { Platform } from '@angular/cdk/platform';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, EMPTY, Subject } from 'rxjs';
import { flatMap, startWith, takeUntil } from 'rxjs/operators';
import { measureScrollbar, InputBoolean, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzThComponent } from './nz-th.component';
import { NzVirtualScrollDirective } from './nz-virtual-scroll.directive';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'table';
/**
 * @template T
 */
// tslint:disable-next-line no-any
export class NzTableComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} cdr
     * @param {?} i18n
     * @param {?} platform
     * @param {?} elementRef
     */
    constructor(nzConfigService, renderer, ngZone, cdr, i18n, platform, elementRef) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.i18n = i18n;
        this.platform = platform;
        /**
         * public data for ngFor tr
         */
        this.data = [];
        this.locale = {}; // tslint:disable-line:no-any
        this.lastScrollLeft = 0;
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzVirtualScroll = false;
        this.nzVirtualItemSize = 0;
        this.nzVirtualMaxBufferPx = 200;
        this.nzVirtualMinBufferPx = 100;
        this.nzLoadingDelay = 0;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = { x: null, y: null };
        this.nzFrontPagination = true;
        this.nzTemplateMode = false;
        this.nzShowPagination = true;
        this.nzLoading = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzCurrentPageDataChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    /**
     * @return {?}
     */
    get itemRender() {
        return this.nzItemRender || this.itemRenderChild;
    }
    /**
     * @return {?}
     */
    get tableBodyNativeElement() {
        return this.tableBodyElement && this.tableBodyElement.nativeElement;
    }
    /**
     * @return {?}
     */
    get tableHeaderNativeElement() {
        return this.tableHeaderElement && this.tableHeaderElement.nativeElement;
    }
    /**
     * @return {?}
     */
    get cdkVirtualScrollNativeElement() {
        return this.cdkVirtualScrollElement && this.cdkVirtualScrollElement.nativeElement;
    }
    /**
     * @return {?}
     */
    get mixTableBodyNativeElement() {
        return this.tableBodyNativeElement || this.cdkVirtualScrollNativeElement;
    }
    /**
     * @param {?} size
     * @param {?} index
     * @return {?}
     */
    emitPageSizeOrIndex(size, index) {
        if (this.nzPageSize !== size || this.nzPageIndex !== index) {
            if (this.nzPageSize !== size) {
                this.nzPageSize = size;
                this.nzPageSizeChange.emit(this.nzPageSize);
            }
            if (this.nzPageIndex !== index) {
                this.nzPageIndex = index;
                this.nzPageIndexChange.emit(this.nzPageIndex);
            }
            this.updateFrontPaginationDataIfNeeded(this.nzPageSize !== size);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    syncScrollTable(e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            const target = (/** @type {?} */ (e.target));
            if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                if (target === this.mixTableBodyNativeElement && this.tableHeaderNativeElement) {
                    this.tableHeaderNativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderNativeElement && this.mixTableBodyNativeElement) {
                    this.mixTableBodyNativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    }
    /**
     * @return {?}
     */
    setScrollPositionClassName() {
        if (this.mixTableBodyNativeElement && this.nzScroll && this.nzScroll.x) {
            if (this.mixTableBodyNativeElement.scrollWidth === this.mixTableBodyNativeElement.clientWidth &&
                this.mixTableBodyNativeElement.scrollWidth !== 0) {
                this.setScrollName();
            }
            else if (this.mixTableBodyNativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.mixTableBodyNativeElement.scrollWidth ===
                this.mixTableBodyNativeElement.scrollLeft + this.mixTableBodyNativeElement.clientWidth) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    setScrollName(position) {
        /** @type {?} */
        const prefix = 'ant-table-scroll-position';
        /** @type {?} */
        const classList = ['left', 'right', 'middle'];
        classList.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.renderer.removeClass(this.tableMainElement.nativeElement, `${prefix}-${name}`);
        }));
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, `${prefix}-${position}`);
        }
    }
    /**
     * @return {?}
     */
    fitScrollBar() {
        if (this.nzScroll.y) {
            /** @type {?} */
            const scrollbarWidth = measureScrollbar('vertical');
            /** @type {?} */
            const scrollbarWidthOfHeader = measureScrollbar('horizontal', 'ant-table');
            // Add negative margin bottom for scroll bar overflow bug
            if (scrollbarWidthOfHeader > 0) {
                this.headerBottomStyle = {
                    marginBottom: `-${scrollbarWidthOfHeader}px`,
                    paddingBottom: '0px',
                    overflowX: 'scroll',
                    overflowY: `${scrollbarWidth === 0 ? 'hidden' : 'scroll'}`
                };
                this.cdr.markForCheck();
            }
        }
    }
    /**
     * @param {?=} isPageSizeOrDataChange
     * @return {?}
     */
    updateFrontPaginationDataIfNeeded(isPageSizeOrDataChange = false) {
        /** @type {?} */
        let data = this.nzData || [];
        if (this.nzFrontPagination) {
            this.nzTotal = data.length;
            if (isPageSizeOrDataChange) {
                /** @type {?} */
                const maxPageIndex = Math.ceil(data.length / this.nzPageSize) || 1;
                /** @type {?} */
                const pageIndex = this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex;
                if (pageIndex !== this.nzPageIndex) {
                    this.nzPageIndex = pageIndex;
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    () => this.nzPageIndexChange.emit(pageIndex)));
                }
            }
            data = data.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        }
        this.data = [...data];
        this.nzCurrentPageDataChange.emit(this.data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzScroll) {
            if (changes.nzScroll.currentValue) {
                this.nzScroll = changes.nzScroll.currentValue;
            }
            else {
                this.nzScroll = { x: null, y: null };
            }
            this.fitScrollBar();
            this.setScrollPositionClassName();
        }
        if (changes.nzData) {
            if (this.platform.isBrowser) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.setScrollPositionClassName()));
            }
        }
        if (changes.nzPageIndex || changes.nzPageSize || changes.nzFrontPagination || changes.nzData) {
            this.updateFrontPaginationDataIfNeeded(!!(changes.nzPageSize || changes.nzData));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => this.setScrollPositionClassName()));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            merge(this.tableHeaderNativeElement ? fromEvent(this.tableHeaderNativeElement, 'scroll') : EMPTY, this.mixTableBodyNativeElement ? fromEvent(this.mixTableBodyNativeElement, 'scroll') : EMPTY)
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.syncScrollTable(data);
            }));
            fromEvent(window, 'resize')
                .pipe(startWith(true), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.fitScrollBar();
                this.setScrollPositionClassName();
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listOfNzThComponent.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        () => merge(this.listOfNzThComponent.changes, ...this.listOfNzThComponent.map((/**
         * @param {?} th
         * @return {?}
         */
        th => th.nzWidthChange$))))), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table',
                exportAs: 'nzTable',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon nzType=\"left\"></i></a>\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon nzType=\"right\"></i></a>\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\n</ng-template>\n<ng-template #colGroupTemplate>\n  <colgroup>\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\n    <ng-container *ngIf=\"(nzWidthConfig && !nzWidthConfig.length) || !nzWidthConfig\">\n      <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\n    </ng-container>\n  </colgroup>\n</ng-template>\n<ng-template #headerTemplate>\n  <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n  <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\n    <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\n  </thead>\n</ng-template>\n<ng-template #tableInnerTemplate>\n  <div #tableHeaderElement\n    *ngIf=\"nzScroll.y\"\n    [ngStyle]=\"headerBottomStyle\"\n    class=\"ant-table-header ant-table-hide-scrollbar\">\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\n      </thead>\n    </table>\n  </div>\n  <div #tableBodyElement *ngIf=\"!nzVirtualScroll;else scrollViewTpl\"\n    class=\"ant-table-body\"\n    [style.maxHeight]=\"nzScroll.y\"\n    [style.overflow-y]=\"nzScroll.y ? 'scroll' : ''\"\n    [style.overflow-x]=\"nzScroll.x ? 'auto' : ''\">\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n      <ng-template [ngIf]=\"!nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n      <ng-content></ng-content>\n    </table>\n  </div>\n  <ng-template #scrollViewTpl>\n    <cdk-virtual-scroll-viewport\n      class=\"ant-table-body\"\n      [hidden]=\"!data.length\"\n      [itemSize]=\"nzVirtualItemSize\"\n      [maxBufferPx]=\"nzVirtualMaxBufferPx\"\n      [minBufferPx]=\"nzVirtualMinBufferPx\"\n      [style.height]=\"nzScroll.y\">\n      <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n        <ng-template [ngIf]=\"nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n        <tbody>\n          <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy:nzVirtualForTrackBy;\">\n            <ng-template [ngTemplateOutlet]=\"nzVirtualScrollDirective?.templateRef\" [ngTemplateOutletContext]=\"{$implicit:item, index:i}\"></ng-template>\n          </ng-container>\n        </tbody>\n      </table>\n    </cdk-virtual-scroll-viewport>\n  </ng-template>\n  <div class=\"ant-table-placeholder\" *ngIf=\"data.length === 0 && !nzLoading && !nzTemplateMode\">\n    <nz-embed-empty [nzComponentName]=\"'table'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\n  </div>\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\n    <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\n  </div>\n</ng-template>\n<ng-template #paginationTemplate>\n  <nz-pagination *ngIf=\"nzShowPagination && data.length\"\n    [nzInTable]=\"true\"\n    [nzShowSizeChanger]=\"nzShowSizeChanger\"\n    [nzPageSizeOptions]=\"nzPageSizeOptions\"\n    [nzItemRender]=\"itemRender\"\n    [nzShowQuickJumper]=\"nzShowQuickJumper\"\n    [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n    [nzShowTotal]=\"nzShowTotal\"\n    [nzSize]=\"nzSize === 'default' ? 'default' : 'small'\"\n    [nzPageSize]=\"nzPageSize\"\n    [nzTotal]=\"nzTotal\"\n    [nzSimple]=\"nzSimple\"\n    [nzPageIndex]=\"nzPageIndex\"\n    (nzPageSizeChange)=\"emitPageSizeOrIndex($event,nzPageIndex)\"\n    (nzPageIndexChange)=\"emitPageSizeOrIndex(nzPageSize,$event)\">\n  </nz-pagination>\n</ng-template>\n<nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n  </ng-container>\n  <div #tableMainElement\n    class=\"ant-table\"\n    [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\n    [class.ant-table-bordered]=\"nzBordered\"\n    [class.ant-table-default]=\"nzSize === 'default'\"\n    [class.ant-table-middle]=\"nzSize === 'middle'\"\n    [class.ant-table-small]=\"nzSize === 'small'\">\n    <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n    </div>\n    <div class=\"ant-table-content\">\n      <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\n        <div class=\"ant-table-scroll\">\n          <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n  </ng-container>\n</nz-spin>\n",
                host: {
                    '[class.ant-table-empty]': 'data.length === 0 && !nzTemplateMode'
                },
                styles: [`
      nz-table {
        display: block;
      }

      cdk-virtual-scroll-viewport.ant-table-body {
        overflow-y: scroll;
      }
    `]
            }] }
];
/** @nocollapse */
NzTableComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: Platform },
    { type: ElementRef }
];
NzTableComponent.propDecorators = {
    listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
    tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement', { static: false, read: ElementRef },] }],
    tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement', { static: false, read: ElementRef },] }],
    tableMainElement: [{ type: ViewChild, args: ['tableMainElement', { static: false, read: ElementRef },] }],
    cdkVirtualScrollElement: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false, read: ElementRef },] }],
    cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false, read: CdkVirtualScrollViewport },] }],
    nzVirtualScrollDirective: [{ type: ContentChild, args: [NzVirtualScrollDirective, { static: false },] }],
    nzSize: [{ type: Input }],
    nzShowTotal: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzVirtualScroll: [{ type: Input }],
    nzVirtualItemSize: [{ type: Input }],
    nzVirtualMaxBufferPx: [{ type: Input }],
    nzVirtualMinBufferPx: [{ type: Input }],
    nzVirtualForTrackBy: [{ type: Input }],
    nzLoadingDelay: [{ type: Input }],
    nzLoadingIndicator: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzNoResult: [{ type: Input }],
    nzWidthConfig: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }],
    nzData: [{ type: Input }],
    nzPaginationPosition: [{ type: Input }],
    nzScroll: [{ type: Input }],
    nzItemRender: [{ type: Input }],
    itemRenderChild: [{ type: ViewChild, args: ['renderItemTemplate', { static: true },] }],
    nzFrontPagination: [{ type: Input }],
    nzTemplateMode: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzCurrentPageDataChange: [{ type: Output }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzTableComponent.prototype, "nzSize", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTableComponent.prototype, "nzVirtualScroll", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzTableComponent.prototype, "nzVirtualItemSize", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzTableComponent.prototype, "nzVirtualMaxBufferPx", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzTableComponent.prototype, "nzVirtualMinBufferPx", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTableComponent.prototype, "nzFrontPagination", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTableComponent.prototype, "nzTemplateMode", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTableComponent.prototype, "nzShowPagination", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTableComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzSimple", void 0);
if (false) {
    /**
     * public data for ngFor tr
     * @type {?}
     */
    NzTableComponent.prototype.data;
    /** @type {?} */
    NzTableComponent.prototype.locale;
    /** @type {?} */
    NzTableComponent.prototype.nzTheadComponent;
    /** @type {?} */
    NzTableComponent.prototype.lastScrollLeft;
    /** @type {?} */
    NzTableComponent.prototype.headerBottomStyle;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.destroy$;
    /** @type {?} */
    NzTableComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTableComponent.prototype.tableHeaderElement;
    /** @type {?} */
    NzTableComponent.prototype.tableBodyElement;
    /** @type {?} */
    NzTableComponent.prototype.tableMainElement;
    /** @type {?} */
    NzTableComponent.prototype.cdkVirtualScrollElement;
    /** @type {?} */
    NzTableComponent.prototype.cdkVirtualScrollViewport;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualScrollDirective;
    /** @type {?} */
    NzTableComponent.prototype.nzSize;
    /** @type {?} */
    NzTableComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualScroll;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualItemSize;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualMaxBufferPx;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualMinBufferPx;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualForTrackBy;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingDelay;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingIndicator;
    /** @type {?} */
    NzTableComponent.prototype.nzTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzTitle;
    /** @type {?} */
    NzTableComponent.prototype.nzFooter;
    /** @type {?} */
    NzTableComponent.prototype.nzNoResult;
    /** @type {?} */
    NzTableComponent.prototype.nzWidthConfig;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndex;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSize;
    /** @type {?} */
    NzTableComponent.prototype.nzData;
    /** @type {?} */
    NzTableComponent.prototype.nzPaginationPosition;
    /** @type {?} */
    NzTableComponent.prototype.nzScroll;
    /** @type {?} */
    NzTableComponent.prototype.nzItemRender;
    /** @type {?} */
    NzTableComponent.prototype.itemRenderChild;
    /** @type {?} */
    NzTableComponent.prototype.nzFrontPagination;
    /** @type {?} */
    NzTableComponent.prototype.nzTemplateMode;
    /** @type {?} */
    NzTableComponent.prototype.nzBordered;
    /** @type {?} */
    NzTableComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTableComponent.prototype.nzLoading;
    /** @type {?} */
    NzTableComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    NzTableComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    NzTableComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    NzTableComponent.prototype.nzSimple;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzTableComponent.prototype.nzCurrentPageDataChange;
    /** @type {?} */
    NzTableComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFFWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osV0FBVyxFQUNYLGVBQWUsRUFFZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOztNQUVuRSx3QkFBd0IsR0FBRyxPQUFPOzs7O0FBd0J4QyxrQ0FBa0M7QUFDbEMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7OztJQXlLM0IsWUFDUyxlQUFnQyxFQUMvQixRQUFtQixFQUNuQixNQUFjLEVBQ2QsR0FBc0IsRUFDdEIsSUFBbUIsRUFDbkIsUUFBa0IsRUFDMUIsVUFBc0I7UUFOZixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFVOzs7O1FBN0s1QixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFRLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtRQUUvQyxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVc5QixzQkFBaUIsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIseUJBQW9CLEdBQUcsR0FBRyxDQUFDO1FBQzNCLHlCQUFvQixHQUFHLEdBQUcsQ0FBQztRQUUxQyxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUVuQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBSVosa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLHlCQUFvQixHQUE4QixRQUFRLENBQUM7UUFDM0QsYUFBUSxHQUE2QyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBUzFELHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUt4QixxQkFBZ0IsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1RCxzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFN0QsNEJBQXVCLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUM7UUEwSG5GLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUEzSUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDbkQsQ0FBQzs7OztJQWdCRCxJQUFJLHNCQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxJQUFJLHdCQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxJQUFJLDZCQUE2QjtRQUMvQixPQUFPLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDO0lBQ3BGLENBQUM7Ozs7SUFFRCxJQUFJLHlCQUF5QjtRQUMzQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUMxRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO2dCQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDL0M7WUFDRCxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLENBQWE7UUFDM0IsSUFBSSxDQUFDLENBQUMsYUFBYSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7O2tCQUMxQixNQUFNLEdBQUcsbUJBQUEsQ0FBQyxDQUFDLE1BQU0sRUFBZTtZQUN0QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO2dCQUNqRixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMseUJBQXlCLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO29CQUM5RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7aUJBQzlEO3FCQUFNLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7b0JBQ3JGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztpQkFDL0Q7Z0JBQ0QsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7O0lBRUQsMEJBQTBCO1FBQ3hCLElBQUksSUFBSSxDQUFDLHlCQUF5QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDdEUsSUFDRSxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXO2dCQUN6RixJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxLQUFLLENBQUMsRUFDaEQ7Z0JBQ0EsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUI7aUJBQU0sSUFDTCxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVztnQkFDMUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUN0RjtnQkFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQWlCOztjQUN2QixNQUFNLEdBQUcsMkJBQTJCOztjQUNwQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUM3QyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLE1BQU0sSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3RGO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFOztrQkFDYixjQUFjLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDOztrQkFDN0Msc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztZQUMxRSx5REFBeUQ7WUFDekQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztvQkFDdkIsWUFBWSxFQUFFLElBQUksc0JBQXNCLElBQUk7b0JBQzVDLGFBQWEsRUFBRSxLQUFLO29CQUNwQixTQUFTLEVBQUUsUUFBUTtvQkFDbkIsU0FBUyxFQUFFLEdBQUcsY0FBYyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7aUJBQzNELENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQ0FBaUMsQ0FBQyx5QkFBa0MsS0FBSzs7WUFDbkUsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRTtRQUM1QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxzQkFBc0IsRUFBRTs7c0JBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7O3NCQUM1RCxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ25GLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO29CQUM3QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztpQkFDdEU7YUFDRjtZQUNELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pHO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQWNELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtnQkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQzthQUMvQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDdEM7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7U0FDbkM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtnQkFDM0IsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxFQUFDLENBQUM7YUFDckQ7U0FDRjtRQUNELElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzVGLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEVBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFO1lBQ2pDLEtBQUssQ0FDSCxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBYSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDdEcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQWEsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3pHO2lCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTOzs7O1lBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxFQUFDLENBQUM7WUFDTCxTQUFTLENBQVUsTUFBTSxFQUFFLFFBQVEsQ0FBQztpQkFDakMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjtpQkFDQSxTQUFTOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTzthQUM3QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLE9BQU87OztRQUFDLEdBQUcsRUFBRSxDQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUc7Ozs7UUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUMsQ0FBQyxFQUNsRyxFQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQWxSRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG9zS0FBd0M7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxzQ0FBc0M7aUJBQ2xFO3lCQUVDOzs7Ozs7OztLQVFDO2FBRUo7Ozs7WUFsQ0MsZUFBZTtZQWRmLFNBQVM7WUFOVCxNQUFNO1lBUE4saUJBQWlCO1lBK0JWLGFBQWE7WUFyQ2IsUUFBUTtZQVVmLFVBQVU7OztrQ0FtRVQsZUFBZSxTQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7aUNBQ3BELFNBQVMsU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTsrQkFDbkUsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOytCQUNqRSxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7c0NBQ2pFLFNBQVMsU0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTt1Q0FDdkUsU0FBUyxTQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7dUNBRXJGLFlBQVksU0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUJBQ3hELEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzttQ0FDTCxLQUFLO21DQUNMLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO21DQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFFTCxLQUFLOzhCQUNMLFNBQVMsU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0NBTWhELEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt1QkFDTCxLQUFLOytCQUNMLE1BQU07Z0NBQ04sTUFBTTtzQ0FFTixNQUFNOztBQXhDbUQ7SUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7Z0RBQXVCO0FBR3ZEO0lBQWYsWUFBWSxFQUFFOzt5REFBeUI7QUFDekI7SUFBZCxXQUFXLEVBQUU7OzJEQUF1QjtBQUN0QjtJQUFkLFdBQVcsRUFBRTs7OERBQTRCO0FBQzNCO0lBQWQsV0FBVyxFQUFFOzs4REFBNEI7QUFzQjFCO0lBQWYsWUFBWSxFQUFFOzsyREFBMEI7QUFDekI7SUFBZixZQUFZLEVBQUU7O3dEQUF3QjtBQUNzQjtJQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOztvREFBcUI7QUFDakU7SUFBZixZQUFZLEVBQUU7OzBEQUF5QjtBQUN4QjtJQUFmLFlBQVksRUFBRTs7bURBQW1CO0FBQzJCO0lBQTVELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZLEVBQUU7OzJEQUE0QjtBQUMzQjtJQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOzs0REFBNkI7QUFDNUI7SUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs7MkRBQTRCO0FBQzNCO0lBQTVELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZLEVBQUU7O2tEQUFtQjs7Ozs7O0lBbER4RixnQ0FBZTs7SUFDZixrQ0FBaUI7O0lBQ2pCLDRDQUFtQzs7SUFDbkMsMENBQW1COztJQUNuQiw2Q0FBdUI7Ozs7O0lBQ3ZCLG9DQUF1Qzs7SUFDdkMsK0NBQXFHOztJQUNyRyw4Q0FBcUc7O0lBQ3JHLDRDQUFpRzs7SUFDakcsNENBQWlHOztJQUNqRyxtREFBOEc7O0lBQzlHLG9EQUNtRDs7SUFDbkQsb0RBQThHOztJQUM5RyxrQ0FBZ0Y7O0lBQ2hGLHVDQUFrRjs7SUFDbEYsNkNBQWtEOztJQUNsRCwyQ0FBaUQ7O0lBQ2pELDZDQUE4Qzs7SUFDOUMsZ0RBQW1EOztJQUNuRCxnREFBbUQ7O0lBQ25ELCtDQUE2RDs7SUFDN0QsMENBQTRCOztJQUM1Qiw4Q0FBK0M7O0lBQy9DLG1DQUFxQjs7SUFDckIsbUNBQTZDOztJQUM3QyxvQ0FBOEM7O0lBQzlDLHNDQUFnRDs7SUFDaEQseUNBQXNDOztJQUN0Qyx1Q0FBeUI7O0lBQ3pCLHNDQUF5Qjs7SUFDekIsa0NBQTBCOztJQUMxQixnREFBb0U7O0lBQ3BFLG9DQUFtRjs7SUFFbkYsd0NBQWdFOztJQUNoRSwyQ0FBNkc7O0lBTTdHLDZDQUFrRDs7SUFDbEQsMENBQWdEOztJQUNoRCxzQ0FBMEY7O0lBQzFGLDRDQUFpRDs7SUFDakQscUNBQTJDOztJQUMzQyw2Q0FBaUc7O0lBQ2pHLDhDQUFrRzs7SUFDbEcsNkNBQWlHOztJQUNqRyxvQ0FBd0Y7O0lBQ3hGLDRDQUErRTs7SUFDL0UsNkNBQWdGOztJQUVoRixtREFBcUY7O0lBa0huRiwyQ0FBdUM7Ozs7O0lBQ3ZDLG9DQUEyQjs7Ozs7SUFDM0Isa0NBQXNCOzs7OztJQUN0QiwrQkFBOEI7Ozs7O0lBQzlCLGdDQUEyQjs7Ozs7SUFDM0Isb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBFTVBUWSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmxhdE1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIG1lYXN1cmVTY3JvbGxiYXIsXG4gIElucHV0Qm9vbGVhbixcbiAgSW5wdXROdW1iZXIsXG4gIE56Q29uZmlnU2VydmljZSxcbiAgTnpTaXplTURTVHlwZSxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQgfSBmcm9tICduZy16b3Jyby1hbnRkL3BhZ2luYXRpb24nO1xuXG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IE56VmlydHVhbFNjcm9sbERpcmVjdGl2ZSB9IGZyb20gJy4vbnotdmlydHVhbC1zY3JvbGwuZGlyZWN0aXZlJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFibGUnLFxuICBleHBvcnRBczogJ256VGFibGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1lbXB0eV0nOiAnZGF0YS5sZW5ndGggPT09IDAgJiYgIW56VGVtcGxhdGVNb2RlJ1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei10YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQuYW50LXRhYmxlLWJvZHkge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuZXhwb3J0IGNsYXNzIE56VGFibGVDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqIHB1YmxpYyBkYXRhIGZvciBuZ0ZvciB0ciAqL1xuICBkYXRhOiBUW10gPSBbXTtcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgbnpUaGVhZENvbXBvbmVudDogTnpUaGVhZENvbXBvbmVudDtcbiAgbGFzdFNjcm9sbExlZnQgPSAwO1xuICBoZWFkZXJCb3R0b21TdHlsZSA9IHt9O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihOelRoQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56VGhDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelRoQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZCgndGFibGVIZWFkZXJFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIHRhYmxlSGVhZGVyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVCb2R5RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJsZUJvZHlFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJsZU1haW5FbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIHRhYmxlTWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2RrVmlydHVhbFNjcm9sbEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9KVxuICBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgQENvbnRlbnRDaGlsZChOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelZpcnR1YWxTY3JvbGxEaXJlY3RpdmU6IE56VmlydHVhbFNjcm9sbERpcmVjdGl2ZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplTURTVHlwZTtcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWaXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VmlydHVhbEl0ZW1TaXplID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpWaXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSBuelZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248VD4gfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG56TG9hZGluZ0RlbGF5ID0gMDtcbiAgQElucHV0KCkgbnpMb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpUb3RhbCA9IDA7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56Tm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBueldpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBuelBhZ2VJbmRleCA9IDE7XG4gIEBJbnB1dCgpIG56UGFnZVNpemUgPSAxMDtcbiAgQElucHV0KCkgbnpEYXRhOiBUW10gPSBbXTtcbiAgQElucHV0KCkgbnpQYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcbiAgQElucHV0KCkgbnpTY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcblxuICBASW5wdXQoKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD47XG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIGl0ZW1SZW5kZXJDaGlsZDogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PjtcblxuICBnZXQgaXRlbVJlbmRlcigpOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5uekl0ZW1SZW5kZXIgfHwgdGhpcy5pdGVtUmVuZGVyQ2hpbGQ7XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGcm9udFBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpUZW1wbGF0ZU1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2l6ZUNoYW5nZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVPblNpbmdsZVBhZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dRdWlja0p1bXBlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCB0YWJsZUJvZHlOYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy50YWJsZUJvZHlFbGVtZW50ICYmIHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IHRhYmxlSGVhZGVyTmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVIZWFkZXJFbGVtZW50ICYmIHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXQgY2RrVmlydHVhbFNjcm9sbE5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNka1ZpcnR1YWxTY3JvbGxFbGVtZW50ICYmIHRoaXMuY2RrVmlydHVhbFNjcm9sbEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBtaXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy50YWJsZUJvZHlOYXRpdmVFbGVtZW50IHx8IHRoaXMuY2RrVmlydHVhbFNjcm9sbE5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBlbWl0UGFnZVNpemVPckluZGV4KHNpemU6IG51bWJlciwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLm56UGFnZVNpemUgIT09IHNpemUgfHwgdGhpcy5uelBhZ2VJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLm56UGFnZVNpemUgIT09IHNpemUpIHtcbiAgICAgICAgdGhpcy5uelBhZ2VTaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5uelBhZ2VTaXplQ2hhbmdlLmVtaXQodGhpcy5uelBhZ2VTaXplKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm56UGFnZUluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICB0aGlzLm56UGFnZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlRnJvbnRQYWdpbmF0aW9uRGF0YUlmTmVlZGVkKHRoaXMubnpQYWdlU2l6ZSAhPT0gc2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgc3luY1Njcm9sbFRhYmxlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09PSBlLnRhcmdldCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0LnNjcm9sbExlZnQgIT09IHRoaXMubGFzdFNjcm9sbExlZnQgJiYgdGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLngpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50ICYmIHRoaXMudGFibGVIZWFkZXJOYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy50YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gdGhpcy50YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9XG5cbiAgc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCAmJiB0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggPT09IHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAmJlxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggIT09IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdsZWZ0Jyk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggPT09XG4gICAgICAgIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICsgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdyaWdodCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdtaWRkbGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRTY3JvbGxOYW1lKHBvc2l0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC10YWJsZS1zY3JvbGwtcG9zaXRpb24nO1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFsnbGVmdCcsICdyaWdodCcsICdtaWRkbGUnXTtcbiAgICBjbGFzc0xpc3QuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke3ByZWZpeH0tJHtuYW1lfWApO1xuICAgIH0pO1xuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7cHJlZml4fS0ke3Bvc2l0aW9ufWApO1xuICAgIH1cbiAgfVxuXG4gIGZpdFNjcm9sbEJhcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNjcm9sbC55KSB7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IG1lYXN1cmVTY3JvbGxiYXIoJ3ZlcnRpY2FsJyk7XG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aE9mSGVhZGVyID0gbWVhc3VyZVNjcm9sbGJhcignaG9yaXpvbnRhbCcsICdhbnQtdGFibGUnKTtcbiAgICAgIC8vIEFkZCBuZWdhdGl2ZSBtYXJnaW4gYm90dG9tIGZvciBzY3JvbGwgYmFyIG92ZXJmbG93IGJ1Z1xuICAgICAgaWYgKHNjcm9sbGJhcldpZHRoT2ZIZWFkZXIgPiAwKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyQm90dG9tU3R5bGUgPSB7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBgLSR7c2Nyb2xsYmFyV2lkdGhPZkhlYWRlcn1weGAsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzBweCcsXG4gICAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICAgICBvdmVyZmxvd1k6IGAke3Njcm9sbGJhcldpZHRoID09PSAwID8gJ2hpZGRlbicgOiAnc2Nyb2xsJ31gXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZyb250UGFnaW5hdGlvbkRhdGFJZk5lZWRlZChpc1BhZ2VTaXplT3JEYXRhQ2hhbmdlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMubnpEYXRhIHx8IFtdO1xuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLm56VG90YWwgPSBkYXRhLmxlbmd0aDtcbiAgICAgIGlmIChpc1BhZ2VTaXplT3JEYXRhQ2hhbmdlKSB7XG4gICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIHRoaXMubnpQYWdlU2l6ZSkgfHwgMTtcbiAgICAgICAgY29uc3QgcGFnZUluZGV4ID0gdGhpcy5uelBhZ2VJbmRleCA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHRoaXMubnpQYWdlSW5kZXg7XG4gICAgICAgIGlmIChwYWdlSW5kZXggIT09IHRoaXMubnpQYWdlSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLm56UGFnZUluZGV4ID0gcGFnZUluZGV4O1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHBhZ2VJbmRleCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkYXRhID0gZGF0YS5zbGljZSgodGhpcy5uelBhZ2VJbmRleCAtIDEpICogdGhpcy5uelBhZ2VTaXplLCB0aGlzLm56UGFnZUluZGV4ICogdGhpcy5uelBhZ2VTaXplKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhID0gWy4uLmRhdGFdO1xuICAgIHRoaXMubnpDdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGFibGUtd3JhcHBlcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelNjcm9sbCkge1xuICAgICAgaWYgKGNoYW5nZXMubnpTY3JvbGwuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMubnpTY3JvbGwgPSBjaGFuZ2VzLm56U2Nyb2xsLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpTY3JvbGwgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZml0U2Nyb2xsQmFyKCk7XG4gICAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56RGF0YSkge1xuICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpQYWdlSW5kZXggfHwgY2hhbmdlcy5uelBhZ2VTaXplIHx8IGNoYW5nZXMubnpGcm9udFBhZ2luYXRpb24gfHwgY2hhbmdlcy5uekRhdGEpIHtcbiAgICAgIHRoaXMudXBkYXRlRnJvbnRQYWdpbmF0aW9uRGF0YUlmTmVlZGVkKCEhKGNoYW5nZXMubnpQYWdlU2l6ZSB8fCBjaGFuZ2VzLm56RGF0YSkpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBtZXJnZTxNb3VzZUV2ZW50PihcbiAgICAgICAgdGhpcy50YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQgPyBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy50YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKSA6IEVNUFRZLFxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQgPyBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LCAnc2Nyb2xsJykgOiBFTVBUWVxuICAgICAgKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnN5bmNTY3JvbGxUYWJsZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICBmcm9tRXZlbnQ8VUlFdmVudD4od2luZG93LCAncmVzaXplJylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZml0U2Nyb2xsQmFyKCk7XG4gICAgICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZk56VGhDb21wb25lbnQuY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcbiAgICAgICAgZmxhdE1hcCgoKSA9PlxuICAgICAgICAgIG1lcmdlKHRoaXMubGlzdE9mTnpUaENvbXBvbmVudC5jaGFuZ2VzLCAuLi50aGlzLmxpc3RPZk56VGhDb21wb25lbnQubWFwKHRoID0+IHRoLm56V2lkdGhDaGFuZ2UkKSlcbiAgICAgICAgKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19