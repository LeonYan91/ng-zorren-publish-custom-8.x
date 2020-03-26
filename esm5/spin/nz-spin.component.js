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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'spin';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzSize = 'default';
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.loading = true;
        this.destroy$ = new Subject();
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
    }
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.subscribeLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.loading = data;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.unsubscribeLoading = /**
     * @return {?}
     */
    function () {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSpinning) {
            if (changes.nzSpinning.isFirstChange()) {
                this.loading = this.nzSpinning;
            }
            this.spinning$.next(this.nzSpinning);
        }
        if (changes.nzDelay) {
            this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
            this.subscribeLoading();
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    };
    NzSpinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-spin',
                    exportAs: 'nzSpin',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template #defaultIndicatorTemplate>\n  <span class=\"ant-spin-dot\" [class.ant-spin-dot-spin]=\"loading\">\n    <i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i>\n  </span>\n</ng-template>\n<div *ngIf=\"loading\">\n  <div class=\"ant-spin\"\n    [class.ant-spin-spinning]=\"loading\"\n    [class.ant-spin-lg]=\"nzSize === 'large'\"\n    [class.ant-spin-sm]=\"nzSize === 'small'\"\n    [class.ant-spin-show-text]=\"nzTip\">\n    <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultIndicatorTemplate\"></ng-template>\n    <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\n  </div>\n</div>\n<div *ngIf=\"!nzSimple\"\n  class=\"ant-spin-container\"\n  [class.ant-spin-blur]=\"loading\">\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        '[class.ant-spin-nested-loading]': '!nzSimple'
                    },
                    styles: ["\n      nz-spin {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzSpinComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
    NzSpinComponent.propDecorators = {
        nzIndicator: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTip: [{ type: Input }],
        nzDelay: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzSpinning: [{ type: Input }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        tslib_1.__metadata("design:type", TemplateRef)
    ], NzSpinComponent.prototype, "nzIndicator", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzDelay", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSimple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSpinning", void 0);
    return NzSpinComponent;
}());
export { NzSpinComponent };
if (false) {
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.nzDelay;
    /** @type {?} */
    NzSpinComponent.prototype.nzSimple;
    /** @type {?} */
    NzSpinComponent.prototype.nzSpinning;
    /** @type {?} */
    NzSpinComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.spinning$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading_;
    /** @type {?} */
    NzSpinComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NwaW4vIiwic291cmNlcyI6WyJuei1zcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUtMLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFpQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFckcsd0JBQXdCLEdBQUcsTUFBTTtBQUV2QztJQThDRSx5QkFBbUIsZUFBZ0MsRUFBVSxHQUFzQjtRQUFoRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTFCMUUsV0FBTSxHQUFrQixTQUFTLENBQUM7UUFFbkIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNYLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ1AsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxhQUFRLEdBQXdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQWtCRixDQUFDOzs7O0lBZnZGLDBDQUFnQjs7O0lBQWhCO1FBQUEsaUJBTUM7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QUF5RDs7Ozs7SUFDekQsbUNBQXdGOzs7OztJQUN4RixtQ0FBc0M7O0lBaUIxQiwwQ0FBdUM7Ozs7O0lBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOekNvbmZpZ1NlcnZpY2UsIE56U2l6ZUxEU1R5cGUsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnc3Bpbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXNwaW4nLFxuICBleHBvcnRBczogJ256U3BpbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNwaW4uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZ10nOiAnIW56U2ltcGxlJ1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1zcGluIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56U3BpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56SW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelRpcDogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuekRlbGF5ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNwaW5uaW5nID0gdHJ1ZTtcbiAgbG9hZGluZyA9IHRydWU7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHNwaW5uaW5nJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5uelNwaW5uaW5nKTtcbiAgcHJpdmF0ZSBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuc3Bpbm5pbmckLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMubnpEZWxheSkpO1xuICBwcml2YXRlIGxvYWRpbmdfOiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIHN1YnNjcmliZUxvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZUxvYWRpbmcoKTtcbiAgICB0aGlzLmxvYWRpbmdfID0gdGhpcy5sb2FkaW5nJC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBkYXRhO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICB1bnN1YnNjcmliZUxvYWRpbmcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZ18pIHtcbiAgICAgIHRoaXMubG9hZGluZ18udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMubG9hZGluZ18gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlTG9hZGluZygpO1xuXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelNwaW5uaW5nKSB7XG4gICAgICBpZiAoY2hhbmdlcy5uelNwaW5uaW5nLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0aGlzLm56U3Bpbm5pbmc7XG4gICAgICB9XG4gICAgICB0aGlzLnNwaW5uaW5nJC5uZXh0KHRoaXMubnpTcGlubmluZyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56RGVsYXkpIHtcbiAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnNwaW5uaW5nJC5waXBlKGRlYm91bmNlVGltZSh0aGlzLm56RGVsYXkpKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlTG9hZGluZygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlTG9hZGluZygpO1xuICB9XG59XG4iXX0=