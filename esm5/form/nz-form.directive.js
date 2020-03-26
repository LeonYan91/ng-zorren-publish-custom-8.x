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
import { ContentChildren, Directive, ElementRef, Input, QueryList, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzConfigService, NzUpdateHostClassService, WithConfig } from 'ng-zorro-antd/core';
import { NzFormLabelComponent } from './nz-form-label.component';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'form';
var NzFormDirective = /** @class */ (function () {
    function NzFormDirective(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    /**
     * @return {?}
     */
    NzFormDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-form-" + this.nzLayout] = this.nzLayout,
            _a));
    };
    /**
     * @return {?}
     */
    NzFormDirective.prototype.updateItemsDefaultColon = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzFormLabelComponent) {
            this.nzFormLabelComponent.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.setDefaultNoColon(_this.nzNoColon); }));
        }
    };
    /**
     * @return {?}
     */
    NzFormDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzFormDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('nzNoColon')) {
            this.updateItemsDefaultColon();
        }
    };
    /**
     * @return {?}
     */
    NzFormDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzFormLabelComponent.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateItemsDefaultColon();
        }));
    };
    /**
     * @return {?}
     */
    NzFormDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzFormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-form]',
                    exportAs: 'nzForm',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzFormDirective.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService }
    ]; };
    NzFormDirective.propDecorators = {
        nzLayout: [{ type: Input }],
        nzNoColon: [{ type: Input }],
        nzFormLabelComponent: [{ type: ContentChildren, args: [NzFormLabelComponent, { descendants: true },] }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzFormDirective.prototype, "nzNoColon", void 0);
    return NzFormDirective;
}());
export { NzFormDirective };
if (false) {
    /** @type {?} */
    NzFormDirective.prototype.nzLayout;
    /** @type {?} */
    NzFormDirective.prototype.nzNoColon;
    /** @type {?} */
    NzFormDirective.prototype.nzFormLabelComponent;
    /** @type {?} */
    NzFormDirective.prototype.destroy$;
    /** @type {?} */
    NzFormDirective.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQUUzRCx3QkFBd0IsR0FBRyxNQUFNO0FBRXZDO0lBeUJFLHlCQUNTLGVBQWdDLEVBQy9CLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLHdCQUFrRDtRQUhuRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUF2Qm5ELGFBQVEsR0FBRyxZQUFZLENBQUM7UUFLakMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFvQnZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQW5CRCxxQ0FBVzs7O0lBQVg7O1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDekUsR0FBQyxjQUFZLElBQUksQ0FBQyxRQUFVLElBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBQzVDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsaURBQXVCOzs7SUFBdkI7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUF0QyxDQUFzQyxFQUFDLENBQUM7U0FDbkY7SUFDSCxDQUFDOzs7O0lBV0Qsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBRUQsNENBQWtCOzs7SUFBbEI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO2FBQzlCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDOzs7O2dCQVZzQixlQUFlO2dCQVpwQyxVQUFVO2dCQU1WLFNBQVM7Z0JBTTZCLHdCQUF3Qjs7OzJCQVk3RCxLQUFLOzRCQUNMLEtBQUs7dUNBRUwsZUFBZSxTQUFDLG9CQUFvQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7SUFGVTtRQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOztzREFBb0I7SUFxRDNGLHNCQUFDO0NBQUEsQUE1REQsSUE0REM7U0F2RFksZUFBZTs7O0lBQzFCLG1DQUFpQzs7SUFDakMsb0NBQXlGOztJQUV6RiwrQ0FBb0g7O0lBRXBILG1DQUF5Qjs7SUFldkIsMENBQXVDOzs7OztJQUN2QyxxQ0FBOEI7Ozs7O0lBQzlCLG1DQUEyQjs7Ozs7SUFDM0IsbURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56Rm9ybUxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWxhYmVsLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdmb3JtJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWZvcm1dJyxcbiAgZXhwb3J0QXM6ICduekZvcm0nLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBuekxheW91dCA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56Tm9Db2xvbjogYm9vbGVhbjtcblxuICBAQ29udGVudENoaWxkcmVuKE56Rm9ybUxhYmVsQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIG56Rm9ybUxhYmVsQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpGb3JtTGFiZWxDb21wb25lbnQ+O1xuXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFtgYW50LWZvcm0tJHt0aGlzLm56TGF5b3V0fWBdOiB0aGlzLm56TGF5b3V0XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVJdGVtc0RlZmF1bHRDb2xvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekZvcm1MYWJlbENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uekZvcm1MYWJlbENvbXBvbmVudC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5zZXREZWZhdWx0Tm9Db2xvbih0aGlzLm56Tm9Db2xvbikpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybScpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpOb0NvbG9uJykpIHtcbiAgICAgIHRoaXMudXBkYXRlSXRlbXNEZWZhdWx0Q29sb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uekZvcm1MYWJlbENvbXBvbmVudC5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zRGVmYXVsdENvbG9uKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19