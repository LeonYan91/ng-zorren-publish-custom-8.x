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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzSliderComponent } from './nz-slider.component';
export class NzSliderHandleComponent {
    /**
     * @param {?} sliderComponent
     * @param {?} cdr
     */
    constructor(sliderComponent, cdr) {
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOffset, nzValue, nzActive, nzTooltipVisible } = changes;
        if (nzOffset) {
            this.updateStyle();
        }
        if (nzValue) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (nzActive) {
            if (nzActive.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if (nzTooltipVisible && nzTooltipVisible.currentValue === 'always') {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.toggleTooltip(true, true)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.hovers_.unsubscribe();
    }
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    toggleTooltip(show, force = false) {
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipTitle() {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : `${this.nzValue}`;
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.tooltip.updatePosition()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateStyle() {
        this.style[this.nzVertical ? 'bottom' : 'left'] = `${this.nzOffset}%`;
        this.cdr.markForCheck();
    }
}
NzSliderHandleComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                template: "<div nz-tooltip\n     *ngIf=\"nzTipFormatter !== null && nzTooltipVisible !== 'never'\"\n     class=\"ant-slider-handle\"\n     [ngStyle]=\"style\"\n     [nzTitle]=\"tooltipTitle\"\n     [nzTrigger]=\"null\"\n     [nzPlacement]=\"nzTooltipPlacement\"></div>\n<div *ngIf=\"nzTipFormatter === null || nzTooltipVisible === 'never'\"\n     class=\"ant-slider-handle\"\n     [ngStyle]=\"style\"></div>\n",
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }] }
];
/** @nocollapse */
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderComponent },
    { type: ChangeDetectorRef }
];
NzSliderHandleComponent.propDecorators = {
    tooltip: [{ type: ViewChild, args: [NzTooltipDirective, { static: false },] }],
    nzVertical: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzTooltipVisible: [{ type: Input }],
    nzTooltipPlacement: [{ type: Input }],
    nzTipFormatter: [{ type: Input }],
    nzActive: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderHandleComponent.prototype, "nzActive", void 0);
if (false) {
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltip;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzValue;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTooltipVisible;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTooltipPlacement;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzActive;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipTitle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.style;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.hovers_;
    /** @type {?} */
    NzSliderHandleComponent.prototype.enterHandle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.leaveHandle;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.sliderComponent;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NsaWRlci8iLCJzb3VyY2VzIjpbIm56LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBSUwsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFjMUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFnQmxDLFlBQW9CLGVBQWtDLEVBQVUsR0FBc0I7UUFBbEUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFWN0UscUJBQWdCLEdBQXNCLFNBQVMsQ0FBQztRQUdoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRXJCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBOEJyQyxnQkFBVzs7O1FBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUM7UUFFRixnQkFB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b0JBQ0osY0FBYyxFQUFFLGVBQWU7b0JBQy9CLGNBQWMsRUFBRSxlQUFlO2lCQUNoQzthQUNGOzs7O1lBYlEsaUJBQWlCO1lBZnhCLGlCQUFpQjs7O3NCQThCaEIsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt5QkFFL0MsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7QUFBbUI7SUFBZixZQUFZLEVBQUU7O3lEQUFrQjs7O0lBUjFDLDBDQUE4RTs7SUFFOUUsNkNBQTRCOztJQUM1QiwyQ0FBMEI7O0lBQzFCLDBDQUF5Qjs7SUFDekIsbURBQXlEOztJQUN6RCxxREFBb0M7O0lBQ3BDLGlEQUFtRDs7SUFDbkQsMkNBQTBDOztJQUUxQywrQ0FBcUI7O0lBQ3JCLHdDQUE2Qjs7Ozs7SUFFN0IsMENBQXFDOztJQThCckMsOENBTUU7O0lBRUYsOENBS0U7Ozs7O0lBekNVLGtEQUEwQzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgU2xpZGVyU2hvd1Rvb2x0aXAgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XG5pbXBvcnQgeyBOelNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItaGFuZGxlJyxcbiAgZXhwb3J0QXM6ICduelNsaWRlckhhbmRsZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ2VudGVySGFuZGxlKCknLFxuICAgICcobW91c2VsZWF2ZSknOiAnbGVhdmVIYW5kbGUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChOelRvb2x0aXBEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSB0b29sdGlwOiBOelRvb2x0aXBEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgbnpWZXJ0aWNhbDogc3RyaW5nO1xuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoKSBuelZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56VG9vbHRpcFZpc2libGU6IFNsaWRlclNob3dUb29sdGlwID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpUaXBGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFjdGl2ZSA9IGZhbHNlO1xuXG4gIHRvb2x0aXBUaXRsZTogc3RyaW5nO1xuICBzdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xuXG4gIHByaXZhdGUgaG92ZXJzXyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNsaWRlckNvbXBvbmVudDogTnpTbGlkZXJDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek9mZnNldCwgbnpWYWx1ZSwgbnpBY3RpdmUsIG56VG9vbHRpcFZpc2libGUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpPZmZzZXQpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9XG4gICAgaWYgKG56VmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFRpdGxlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xuICAgIH1cbiAgICBpZiAobnpBY3RpdmUpIHtcbiAgICAgIGlmIChuekFjdGl2ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG56VG9vbHRpcFZpc2libGUgJiYgbnpUb29sdGlwVmlzaWJsZS5jdXJyZW50VmFsdWUgPT09ICdhbHdheXMnKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlLCB0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlcnNfLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBlbnRlckhhbmRsZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2xpZGVyQ29tcG9uZW50LmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGxlYXZlSGFuZGxlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zbGlkZXJDb21wb25lbnQuaXNEcmFnZ2luZykge1xuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSB0b2dnbGVUb29sdGlwKHNob3c6IGJvb2xlYW4sIGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoIWZvcmNlICYmICh0aGlzLm56VG9vbHRpcFZpc2libGUgIT09ICdkZWZhdWx0JyB8fCAhdGhpcy50b29sdGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcFRpdGxlKCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcFRpdGxlID0gdGhpcy5uelRpcEZvcm1hdHRlciA/IHRoaXMubnpUaXBGb3JtYXR0ZXIodGhpcy5uelZhbHVlKSA6IGAke3RoaXMubnpWYWx1ZX1gO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0eWxlW3RoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnXSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==