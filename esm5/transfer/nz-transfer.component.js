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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, TemplateRef, ViewChildren, ViewEncapsulation } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTransferListComponent } from './nz-transfer-list.component';
var NzTransferComponent = /** @class */ (function () {
    // #endregion
    function NzTransferComponent(cdr, i18n, nzUpdateHostClassService, elementRef, renderer) {
        var _this = this;
        this.cdr = cdr;
        this.i18n = i18n;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzShowSelectAll = true;
        this.nzCanMove = (/**
         * @param {?} arg
         * @return {?}
         */
        function (arg) { return of(arg.list); });
        this.nzRenderList = [null, null];
        this.nzShowSearch = false;
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('left', checked); });
        this.handleRightSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('right', checked); });
        this.handleLeftSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('left', !!item.checked, item); });
        this.handleRightSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('right', !!item.checked, item); });
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = (/**
         * @return {?}
         */
        function () { return _this.moveTo('left'); });
        this.moveToRight = (/**
         * @return {?}
         */
        function () { return _this.moveTo('right'); });
        renderer.addClass(elementRef.nativeElement, 'ant-transfer');
    }
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.splitDataSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            if (record.direction === 'right') {
                record.direction = 'right';
                _this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                _this.leftDataSource.push(record);
            }
        }));
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.getCheckedData = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked; }));
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    NzTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    NzTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.nzSearchChange.emit(ret);
    };
    /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    NzTransferComponent.prototype.updateOperationStatus = /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; })).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked === true && !item.disabled; }));
        this.nzCanMove({ direction: direction, list: moveList }).subscribe((/**
         * @param {?} newMoveList
         * @return {?}
         */
        function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return !!i; }))); }), (/**
         * @return {?}
         */
        function () { return moveList.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = false); })); }));
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    NzTransferComponent.prototype.truthMoveTo = /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                item.hide = false;
                item.direction = direction;
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        targetDatasource.splice.apply(targetDatasource, tslib_1.__spread([0, 0], list));
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
        this.markForCheckAllList();
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-transfer';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a[prefixCls + "-disabled"] = this.nzDisabled,
            _a[prefixCls + "-customize-list"] = this.nzRenderList.some((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return !!i; })),
            _a));
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.markForCheckAllList = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.lists) {
            return;
        }
        this.lists.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.markForCheck(); }));
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Transfer');
            _this.markForCheckAllList();
        }));
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
        if (changes.nzDataSource || changes.nzTargetKeys) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTransferComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer',
                    exportAs: 'nzTransfer',
                    preserveWhitespaces: false,
                    template: "<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"left\"\n  [titleText]=\"nzTitles[0]\"\n  [showSelectAll]=\"nzShowSelectAll\"\n  [dataSource]=\"leftDataSource\"\n  [filter]=\"leftFilter\"\n  [filterOption]=\"nzFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [renderList]=\"nzRenderList[0]\"\n  [render]=\"nzRender\"\n  [disabled]=\"nzDisabled\"\n  [showSearch]=\"nzShowSearch\"\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"nzNotFoundContent\"\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\n  [footer]=\"nzFooter\"\n  (handleSelect)=\"handleLeftSelect($event)\"\n  (handleSelectAll)=\"handleLeftSelectAll($event)\">\n</nz-transfer-list>\n<div class=\"ant-transfer-operation\">\n  <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n    <i nz-icon nzType=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\n  </button>\n  <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n    <i nz-icon nzType=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\n  </button>\n</div>\n<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"right\"\n  [titleText]=\"nzTitles[1]\"\n  [showSelectAll]=\"nzShowSelectAll\"\n  [dataSource]=\"rightDataSource\"\n  [filter]=\"rightFilter\"\n  [filterOption]=\"nzFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [renderList]=\"nzRenderList[1]\"\n  [render]=\"nzRender\"\n  [disabled]=\"nzDisabled\"\n  [showSearch]=\"nzShowSearch\"\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"nzNotFoundContent\"\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\n  [footer]=\"nzFooter\"\n  (handleSelect)=\"handleRightSelect($event)\"\n  (handleSelectAll)=\"handleRightSelectAll($event)\">\n</nz-transfer-list>\n",
                    host: {
                        '[class.ant-transfer-disabled]': 'nzDisabled'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService]
                }] }
    ];
    /** @nocollapse */
    NzTransferComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService },
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzTransferComponent.propDecorators = {
        lists: [{ type: ViewChildren, args: [NzTransferListComponent,] }],
        nzDisabled: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        nzTitles: [{ type: Input }],
        nzOperations: [{ type: Input }],
        nzListStyle: [{ type: Input }],
        nzShowSelectAll: [{ type: Input }],
        nzItemUnit: [{ type: Input }],
        nzItemsUnit: [{ type: Input }],
        nzCanMove: [{ type: Input }],
        nzRenderList: [{ type: Input }],
        nzRender: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzSearchPlaceholder: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzChange: [{ type: Output }],
        nzSearchChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSearch", void 0);
    return NzTransferComponent;
}());
export { NzTransferComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.lists;
    /** @type {?} */
    NzTransferComponent.prototype.locale;
    /** @type {?} */
    NzTransferComponent.prototype.leftFilter;
    /** @type {?} */
    NzTransferComponent.prototype.rightFilter;
    /** @type {?} */
    NzTransferComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTransferComponent.prototype.nzDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.nzTitles;
    /** @type {?} */
    NzTransferComponent.prototype.nzOperations;
    /** @type {?} */
    NzTransferComponent.prototype.nzListStyle;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemsUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzCanMove;
    /** @type {?} */
    NzTransferComponent.prototype.nzRenderList;
    /** @type {?} */
    NzTransferComponent.prototype.nzRender;
    /** @type {?} */
    NzTransferComponent.prototype.nzFooter;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTransferComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchPlaceholder;
    /** @type {?} */
    NzTransferComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTransferComponent.prototype.nzChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    NzTransferComponent.prototype.leftActive;
    /** @type {?} */
    NzTransferComponent.prototype.rightActive;
    /** @type {?} */
    NzTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    NzTransferComponent.prototype.moveToRight;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmFuc2Zlci8iLCJzb3VyY2VzIjpbIm56LXRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFVbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkU7SUF3SUUsYUFBYTtJQUViLDZCQUNVLEdBQXNCLEVBQ3RCLElBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxVQUFzQixFQUM5QixRQUFtQjtRQUxyQixpQkFRQztRQVBTLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBakl4QixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7O1FBSTNDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7UUFJUSxlQUFVLEdBQUcs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Q3RFLHVDQUFxQzs7SUFDckMsdUNBQXFDOztJQUNyQywyQ0FBOEM7O0lBQzlDLDZDQUE2RTs7SUFDN0Usa0RBQXFDOztJQUNyQyxnREFBbUM7O0lBR25DLHVDQUFpRTs7SUFDakUsNkNBQTZFOztJQUM3RSw2Q0FBNkU7O0lBTzdFLDZDQUFvQzs7SUFHcEMsOENBQXFDOztJQW9CckMsa0RBQStFOztJQUMvRSxtREFBaUY7O0lBRWpGLCtDQUEyRjs7SUFDM0YsZ0RBQTZGOztJQWdCN0YseUNBQW1COztJQUNuQiwwQ0FBb0I7O0lBT3BCLHlDQUF1Qzs7SUFDdkMsMENBQXlDOzs7OztJQW9DdkMsa0NBQThCOzs7OztJQUM5QixtQ0FBMkI7Ozs7O0lBQzNCLHVEQUEwRDs7Ozs7SUFDMUQseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7XG4gIFRyYW5zZmVyQ2FuTW92ZSxcbiAgVHJhbnNmZXJDaGFuZ2UsXG4gIFRyYW5zZmVyRGlyZWN0aW9uLFxuICBUcmFuc2Zlckl0ZW0sXG4gIFRyYW5zZmVyU2VhcmNoQ2hhbmdlLFxuICBUcmFuc2ZlclNlbGVjdENoYW5nZVxufSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmFuc2ZlcicsXG4gIGV4cG9ydEFzOiAnbnpUcmFuc2ZlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJhbnNmZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE56VHJhbnNmZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAVmlld0NoaWxkcmVuKE56VHJhbnNmZXJMaXN0Q29tcG9uZW50KVxuICBwcml2YXRlIGxpc3RzITogUXVlcnlMaXN0PE56VHJhbnNmZXJMaXN0Q29tcG9uZW50PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuXG4gIGxlZnRGaWx0ZXIgPSAnJztcbiAgcmlnaHRGaWx0ZXIgPSAnJztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgbnpUaXRsZXM6IHN0cmluZ1tdID0gWycnLCAnJ107XG4gIEBJbnB1dCgpIG56T3BlcmF0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpMaXN0U3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlbGVjdEFsbCA9IHRydWU7XG4gIEBJbnB1dCgpIG56SXRlbVVuaXQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpJdGVtc1VuaXQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpDYW5Nb3ZlOiAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IE9ic2VydmFibGU8VHJhbnNmZXJJdGVtW10+ID0gKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBvZihhcmcubGlzdCk7XG4gIEBJbnB1dCgpIG56UmVuZGVyTGlzdDogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsPiA9IFtudWxsLCBudWxsXTtcbiAgQElucHV0KCkgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpTZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuXG4gIC8vIGV2ZW50c1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyQ2hhbmdlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VhcmNoQ2hhbmdlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VsZWN0Q2hhbmdlPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHByb2Nlc3MgZGF0YVxuXG4gIC8vIGxlZnRcbiAgbGVmdERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgLy8gcmlnaHRcbiAgcmlnaHREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgc3BsaXREYXRhU291cmNlKCk6IHZvaWQge1xuICAgIHRoaXMubGVmdERhdGFTb3VyY2UgPSBbXTtcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xuICAgIHRoaXMubnpEYXRhU291cmNlLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgIGlmIChyZWNvcmQuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHJlY29yZC5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZS5wdXNoKHJlY29yZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmQuZGlyZWN0aW9uID0gJ2xlZnQnO1xuICAgICAgICB0aGlzLmxlZnREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uOiBzdHJpbmcpOiBUcmFuc2Zlckl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXNbZGlyZWN0aW9uID09PSAnbGVmdCcgPyAnbGVmdERhdGFTb3VyY2UnIDogJ3JpZ2h0RGF0YVNvdXJjZSddLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gIH1cblxuICBoYW5kbGVMZWZ0U2VsZWN0QWxsID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdsZWZ0JywgY2hlY2tlZCk7XG4gIGhhbmRsZVJpZ2h0U2VsZWN0QWxsID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdyaWdodCcsIGNoZWNrZWQpO1xuXG4gIGhhbmRsZUxlZnRTZWxlY3QgPSAoaXRlbTogVHJhbnNmZXJJdGVtKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgnbGVmdCcsICEhaXRlbS5jaGVja2VkLCBpdGVtKTtcbiAgaGFuZGxlUmlnaHRTZWxlY3QgPSAoaXRlbTogVHJhbnNmZXJJdGVtKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCAhIWl0ZW0uY2hlY2tlZCwgaXRlbSk7XG5cbiAgaGFuZGxlU2VsZWN0KGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb24sIGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW0/OiBUcmFuc2Zlckl0ZW0pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5nZXRDaGVja2VkRGF0YShkaXJlY3Rpb24pO1xuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKGRpcmVjdGlvbiwgbGlzdC5sZW5ndGgpO1xuICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbiwgY2hlY2tlZCwgbGlzdCwgaXRlbSB9KTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZShyZXQ6IHsgZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbjsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5uelNlYXJjaENoYW5nZS5lbWl0KHJldCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBvcGVyYXRpb25cblxuICBsZWZ0QWN0aXZlID0gZmFsc2U7XG4gIHJpZ2h0QWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSB1cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uOiBzdHJpbmcsIGNvdW50PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpc1tkaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnbGVmdEFjdGl2ZScgOiAncmlnaHRBY3RpdmUnXSA9XG4gICAgICAodHlwZW9mIGNvdW50ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoIDogY291bnQpID4gMDtcbiAgfVxuXG4gIG1vdmVUb0xlZnQgPSAoKSA9PiB0aGlzLm1vdmVUbygnbGVmdCcpO1xuICBtb3ZlVG9SaWdodCA9ICgpID0+IHRoaXMubW92ZVRvKCdyaWdodCcpO1xuXG4gIG1vdmVUbyhkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMob3Bwb3NpdGVEaXJlY3Rpb24sIDApO1xuICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMucmlnaHREYXRhU291cmNlIDogdGhpcy5sZWZ0RGF0YVNvdXJjZTtcbiAgICBjb25zdCBtb3ZlTGlzdCA9IGRhdGFzb3VyY2UuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlICYmICFpdGVtLmRpc2FibGVkKTtcbiAgICB0aGlzLm56Q2FuTW92ZSh7IGRpcmVjdGlvbiwgbGlzdDogbW92ZUxpc3QgfSkuc3Vic2NyaWJlKFxuICAgICAgbmV3TW92ZUxpc3QgPT4gdGhpcy50cnV0aE1vdmVUbyhkaXJlY3Rpb24sIG5ld01vdmVMaXN0LmZpbHRlcihpID0+ICEhaSkpLFxuICAgICAgKCkgPT4gbW92ZUxpc3QuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ1dGhNb3ZlVG8oZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbiwgbGlzdDogVHJhbnNmZXJJdGVtW10pOiB2b2lkIHtcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgdGFyZ2V0RGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5sZWZ0RGF0YVNvdXJjZSA6IHRoaXMucmlnaHREYXRhU291cmNlO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGl0ZW0uaGlkZSA9IGZhbHNlO1xuICAgICAgaXRlbS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICBkYXRhc291cmNlLnNwbGljZShkYXRhc291cmNlLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cbiAgICB0YXJnZXREYXRhc291cmNlLnNwbGljZSgwLCAwLCAuLi5saXN0KTtcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbik7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgIGZyb206IG9wcG9zaXRlRGlyZWN0aW9uLFxuICAgICAgdG86IGRpcmVjdGlvbixcbiAgICAgIGxpc3RcbiAgICB9KTtcbiAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRyYW5zZmVyJyk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZWZpeENscyA9ICdhbnQtdHJhbnNmZXInO1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgW2Ake3ByZWZpeENsc30tZGlzYWJsZWRgXTogdGhpcy5uekRpc2FibGVkLFxuICAgICAgW2Ake3ByZWZpeENsc30tY3VzdG9taXplLWxpc3RgXTogdGhpcy5uelJlbmRlckxpc3Quc29tZShpID0+ICEhaSlcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrQWxsTGlzdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5saXN0cy5mb3JFYWNoKGkgPT4gaS5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RyYW5zZmVyJyk7XG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcbiAgICB9KTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIGlmIChjaGFuZ2VzLm56RGF0YVNvdXJjZSB8fCBjaGFuZ2VzLm56VGFyZ2V0S2V5cykge1xuICAgICAgdGhpcy5zcGxpdERhdGFTb3VyY2UoKTtcbiAgICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKCdsZWZ0Jyk7XG4gICAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cygncmlnaHQnKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=