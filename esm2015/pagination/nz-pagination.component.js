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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isInteger, toNumber, InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
/**
 * @record
 */
export function PaginationItemRenderContext() { }
if (false) {
    /** @type {?} */
    PaginationItemRenderContext.prototype.$implicit;
    /** @type {?} */
    PaginationItemRenderContext.prototype.page;
}
export class NzPaginationComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.firstIndex = 1;
        this.pages = [];
        this.$destroy = new Subject();
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzInTable = false;
        this.nzSize = 'default';
        this.nzPageSizeOptions = [10, 20, 30, 40];
        this.nzDisabled = false;
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzTotal = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
    }
    /**
     * @return {?}
     */
    get itemRender() {
        return this.nzItemRender || this.nzItemRenderChild;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    validatePageIndex(value) {
        if (value > this.lastIndex) {
            return this.lastIndex;
        }
        else if (value < this.firstIndex) {
            return this.firstIndex;
        }
        else {
            return value;
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    updatePageIndexValue(page) {
        this.nzPageIndex = page;
        this.nzPageIndexChange.emit(this.nzPageIndex);
        this.buildIndexes();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isPageIndexValid(value) {
        return this.validatePageIndex(value) === value;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    jumpPage(index) {
        if (index !== this.nzPageIndex && !this.nzDisabled) {
            /** @type {?} */
            const pageIndex = this.validatePageIndex(index);
            if (pageIndex !== this.nzPageIndex) {
                this.updatePageIndexValue(pageIndex);
            }
        }
    }
    /**
     * @param {?} diff
     * @return {?}
     */
    jumpDiff(diff) {
        this.jumpPage(this.nzPageIndex + diff);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPageSizeChange($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
        this.buildIndexes();
        if (this.nzPageIndex > this.lastIndex) {
            this.updatePageIndexValue(this.lastIndex);
        }
    }
    /**
     * @param {?} _
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    handleKeyDown(_, input, clearInputValue) {
        /** @type {?} */
        const target = input;
        /** @type {?} */
        const page = toNumber(target.value, this.nzPageIndex);
        if (isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
            this.updatePageIndexValue(page);
        }
        if (clearInputValue) {
            target.value = '';
        }
        else {
            target.value = `${this.nzPageIndex}`;
        }
    }
    /**
     * generate indexes list
     * @return {?}
     */
    buildIndexes() {
        /** @type {?} */
        const pages = [];
        if (this.lastIndex <= 9) {
            for (let i = 2; i <= this.lastIndex - 1; i++) {
                pages.push(i);
            }
        }
        else {
            /** @type {?} */
            const current = +this.nzPageIndex;
            /** @type {?} */
            let left = Math.max(2, current - 2);
            /** @type {?} */
            let right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (let i = left; i <= right; i++) {
                pages.push(i);
            }
        }
        this.pages = pages;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    get lastIndex() {
        return Math.ceil(this.nzTotal / this.nzPageSize);
    }
    /**
     * @return {?}
     */
    get isLastIndex() {
        return this.nzPageIndex === this.lastIndex;
    }
    /**
     * @return {?}
     */
    get isFirstIndex() {
        return this.nzPageIndex === this.firstIndex;
    }
    /**
     * @return {?}
     */
    get ranges() {
        return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
    }
    /**
     * @return {?}
     */
    get showAddOption() {
        return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Pagination');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
            this.buildIndexes();
        }
    }
}
NzPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-pagination',
                exportAs: 'nzPagination',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\">\n    <i nz-icon nzType=\"left\"></i>\n  </a>\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\">\n    <i nz-icon nzType=\"right\"></i>\n  </a>\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\n</ng-template>\n<ng-container *ngIf=\"(nzHideOnSinglePage && (nzTotal > nzPageSize)) || (nzTotal && !nzHideOnSinglePage)\">\n  <ul class=\"ant-pagination\"\n      [class.ant-table-pagination]=\"nzInTable\"\n      [class.ant-pagination-simple]=\"nzSimple\"\n      [class.ant-pagination-disabled]=\"nzDisabled\"\n      [class.mini]=\"(nzSize === 'small') && !nzSimple\">\n    <ng-container *ngIf=\"nzSimple; else normalTemplate\">\n      <li class=\"ant-pagination-prev\"\n          [attr.title]=\"locale.prev_page\"\n          [class.ant-pagination-disabled]=\"isFirstIndex\"\n          (click)=\"jumpDiff(-1)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n      </li>\n      <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\n        <input #simplePagerInput\n               [disabled]=\"nzDisabled\"\n               [value]=\"nzPageIndex\"\n               (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\n               size=\"3\">\n        <span class=\"ant-pagination-slash\">/</span>\n        {{ lastIndex }}\n      </li>\n      <li class=\"ant-pagination-next\"\n          [attr.title]=\"locale.next_page\"\n          [class.ant-pagination-disabled]=\"isLastIndex\"\n          (click)=\"jumpDiff(1)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n      </li>\n    </ng-container>\n    <ng-template #normalTemplate>\n      <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\n        <ng-template [ngTemplateOutlet]=\"nzShowTotal\"\n                     [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:ranges }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-prev\"\n          [attr.title]=\"locale.prev_page\"\n          [class.ant-pagination-disabled]=\"isFirstIndex\"\n          (click)=\"jumpDiff(-1)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-item\"\n          [attr.title]=\"firstIndex\"\n          [class.ant-pagination-item-active]=\"isFirstIndex\"\n          (click)=\"jumpPage(firstIndex)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-jump-prev\"\n          *ngIf=\"(lastIndex > 9) && (nzPageIndex - 3 > firstIndex)\"\n          [attr.title]=\"locale.prev_5\"\n          (click)=\"jumpDiff(-5)\">\n        <a class=\"ant-pagination-item-link\">\n          <div class=\"ant-pagination-item-container\">\n            <i nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n          </div>\n        </a>\n      </li>\n      <li class=\"ant-pagination-item\"\n          *ngFor=\"let page of pages\"\n          [attr.title]=\"page\"\n          [class.ant-pagination-item-active]=\"nzPageIndex === page\"\n          (click)=\"jumpPage(page)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\n          [attr.title]=\"locale.next_5\"\n          (click)=\"jumpDiff(5)\"\n          *ngIf=\"(lastIndex > 9) && (nzPageIndex + 3 < lastIndex)\">\n        <a class=\"ant-pagination-item-link\">\n          <div class=\"ant-pagination-item-container\">\n            <i nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n          </div>\n        </a>\n      </li>\n      <li class=\"ant-pagination-item\"\n          [attr.title]=\"lastIndex\"\n          (click)=\"jumpPage(lastIndex)\"\n          *ngIf=\"(lastIndex > 0) && (lastIndex !== firstIndex)\"\n          [class.ant-pagination-item-active]=\"isLastIndex\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-next\"\n          [title]=\"locale.next_page\"\n          [class.ant-pagination-disabled]=\"isLastIndex\"\n          (click)=\"jumpDiff(1)\">\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n      </li>\n      <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper || nzShowSizeChanger\">\n        <nz-select class=\"ant-pagination-options-size-changer\"\n                   *ngIf=\"nzShowSizeChanger\"\n                   [nzDisabled]=\"nzDisabled\"\n                   [nzSize]=\"nzSize\"\n                   [ngModel]=\"nzPageSize\"\n                   (ngModelChange)=\"onPageSizeChange($event)\">\n          <nz-option *ngFor=\"let option of nzPageSizeOptions\"\n                     [nzLabel]=\"option + ' ' + locale.items_per_page\"\n                     [nzValue]=\"option\">\n          </nz-option>\n          <nz-option *ngIf=\"showAddOption\"\n                     [nzLabel]=\"nzPageSize + ' ' + locale.items_per_page\"\n                     [nzValue]=\"nzPageSize\">\n          </nz-option>\n        </nz-select>\n        <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"nzShowQuickJumper\">\n          {{ locale.jump_to }}\n          <input #quickJumperInput\n                 [disabled]=\"nzDisabled\"\n                 (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\n          {{ locale.page }}\n        </div>\n      </div>\n    </ng-template>\n  </ul>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
NzPaginationComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
NzPaginationComponent.propDecorators = {
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzShowTotal: [{ type: Input }],
    nzInTable: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzItemRender: [{ type: Input }],
    nzItemRenderChild: [{ type: ViewChild, args: ['renderItemTemplate', { static: true },] }],
    nzDisabled: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzSimple", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzTotal", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageIndex", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageSize", void 0);
if (false) {
    /** @type {?} */
    NzPaginationComponent.prototype.locale;
    /** @type {?} */
    NzPaginationComponent.prototype.firstIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.pages;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.$destroy;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzInTable;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzPaginationComponent.prototype.nzItemRender;
    /** @type {?} */
    NzPaginationComponent.prototype.nzItemRenderChild;
    /** @type {?} */
    NzPaginationComponent.prototype.nzDisabled;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    NzPaginationComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSimple;
    /** @type {?} */
    NzPaginationComponent.prototype.nzTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSize;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJuei1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVuRCxpREFHQzs7O0lBRkMsZ0RBQW9DOztJQUNwQywyQ0FBYTs7QUFXZixNQUFNLE9BQU8scUJBQXFCOzs7OztJQWdJaEMsWUFBb0IsSUFBbUIsRUFBVSxHQUFzQjtRQUFuRCxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7O1FBOUh2RSxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ2IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDcEIscUJBQWdCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQXdCLFNBQVMsQ0FBQztRQUN4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QyxpREFBK0U7O0lBQy9FLGtEQUFnRjs7SUFDaEYsNENBQWtGOztJQUNsRiwwQ0FBMkI7O0lBQzNCLHVDQUFpRDs7SUFDakQsa0RBQThDOztJQUU5Qyw2Q0FBZ0U7O0lBQ2hFLGtEQUErRzs7SUFLL0csMkNBQTRDOztJQUM1QyxrREFBbUQ7O0lBQ25ELG1EQUFvRDs7SUFDcEQsa0RBQW1EOztJQUNuRCx5Q0FBMEM7O0lBQzFDLHdDQUFvQzs7SUFDcEMsNENBQXdDOztJQUN4QywyQ0FBd0M7Ozs7O0lBc0c1QixxQ0FBMkI7Ozs7O0lBQUUsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0ludGVnZXIsIHRvTnVtYmVyLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dCB7XG4gICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xuICBwYWdlOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXBhZ2luYXRpb24nLFxuICBleHBvcnRBczogJ256UGFnaW5hdGlvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG4gIGZpcnN0SW5kZXggPSAxO1xuICBwYWdlczogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSAkZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xuICBASW5wdXQoKSBuekluVGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpTaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MF07XG5cbiAgQElucHV0KCkgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+O1xuICBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuekl0ZW1SZW5kZXJDaGlsZDogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PjtcbiAgZ2V0IGl0ZW1SZW5kZXIoKTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMubnpJdGVtUmVuZGVyIHx8IHRoaXMubnpJdGVtUmVuZGVyQ2hpbGQ7XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VG90YWwgPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelBhZ2VJbmRleCA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGFnZVNpemUgPSAxMDtcblxuICB2YWxpZGF0ZVBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodmFsdWUgPiB0aGlzLmxhc3RJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPCB0aGlzLmZpcnN0SW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpcnN0SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlSW5kZXhWYWx1ZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm56UGFnZUluZGV4ID0gcGFnZTtcbiAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgfVxuXG4gIGlzUGFnZUluZGV4VmFsaWQodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUGFnZUluZGV4KHZhbHVlKSA9PT0gdmFsdWU7XG4gIH1cblxuICBqdW1wUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ICE9PSB0aGlzLm56UGFnZUluZGV4ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHBhZ2VJbmRleCA9IHRoaXMudmFsaWRhdGVQYWdlSW5kZXgoaW5kZXgpO1xuICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VJbmRleFZhbHVlKHBhZ2VJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAganVtcERpZmYoZGlmZjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLm56UGFnZUluZGV4ICsgZGlmZik7XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlKCRldmVudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelBhZ2VTaXplID0gJGV2ZW50O1xuICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5lbWl0KCRldmVudCk7XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgICBpZiAodGhpcy5uelBhZ2VJbmRleCA+IHRoaXMubGFzdEluZGV4KSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VJbmRleFZhbHVlKHRoaXMubGFzdEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKF86IEtleWJvYXJkRXZlbnQsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBjbGVhcklucHV0VmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBpbnB1dDtcbiAgICBjb25zdCBwYWdlID0gdG9OdW1iZXIodGFyZ2V0LnZhbHVlLCB0aGlzLm56UGFnZUluZGV4KTtcbiAgICBpZiAoaXNJbnRlZ2VyKHBhZ2UpICYmIHRoaXMuaXNQYWdlSW5kZXhWYWxpZChwYWdlKSAmJiBwYWdlICE9PSB0aGlzLm56UGFnZUluZGV4KSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VJbmRleFZhbHVlKHBhZ2UpO1xuICAgIH1cbiAgICBpZiAoY2xlYXJJbnB1dFZhbHVlKSB7XG4gICAgICB0YXJnZXQudmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnZhbHVlID0gYCR7dGhpcy5uelBhZ2VJbmRleH1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBnZW5lcmF0ZSBpbmRleGVzIGxpc3QgKi9cbiAgYnVpbGRJbmRleGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xuICAgIGlmICh0aGlzLmxhc3RJbmRleCA8PSA5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSB0aGlzLmxhc3RJbmRleCAtIDE7IGkrKykge1xuICAgICAgICBwYWdlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gK3RoaXMubnpQYWdlSW5kZXg7XG4gICAgICBsZXQgbGVmdCA9IE1hdGgubWF4KDIsIGN1cnJlbnQgLSAyKTtcbiAgICAgIGxldCByaWdodCA9IE1hdGgubWluKGN1cnJlbnQgKyAyLCB0aGlzLmxhc3RJbmRleCAtIDEpO1xuICAgICAgaWYgKGN1cnJlbnQgLSAxIDw9IDIpIHtcbiAgICAgICAgcmlnaHQgPSA1O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGFzdEluZGV4IC0gY3VycmVudCA8PSAyKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmxhc3RJbmRleCAtIDQ7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucGFnZXMgPSBwYWdlcztcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBsYXN0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMubnpUb3RhbCAvIHRoaXMubnpQYWdlU2l6ZSk7XG4gIH1cblxuICBnZXQgaXNMYXN0SW5kZXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPT09IHRoaXMubGFzdEluZGV4O1xuICB9XG5cbiAgZ2V0IGlzRmlyc3RJbmRleCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VJbmRleCA9PT0gdGhpcy5maXJzdEluZGV4O1xuICB9XG5cbiAgZ2V0IHJhbmdlcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFsodGhpcy5uelBhZ2VJbmRleCAtIDEpICogdGhpcy5uelBhZ2VTaXplICsgMSwgTWF0aC5taW4odGhpcy5uelBhZ2VJbmRleCAqIHRoaXMubnpQYWdlU2l6ZSwgdGhpcy5uelRvdGFsKV07XG4gIH1cblxuICBnZXQgc2hvd0FkZE9wdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VTaXplT3B0aW9ucy5pbmRleE9mKHRoaXMubnpQYWdlU2l6ZSkgPT09IC0xO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1BhZ2luYXRpb24nKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VG90YWwgfHwgY2hhbmdlcy5uelBhZ2VTaXplIHx8IGNoYW5nZXMubnpQYWdlSW5kZXgpIHtcbiAgICAgIHRoaXMuYnVpbGRJbmRleGVzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=