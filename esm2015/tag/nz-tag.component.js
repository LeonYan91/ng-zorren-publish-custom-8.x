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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { fadeMotion, warnDeprecation, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class NzTagComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} nzUpdateHostClassService
     */
    constructor(renderer, elementRef, nzUpdateHostClassService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.presetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    }
    /**
     * @private
     * @return {?}
     */
    updateClassMap() {
        this.presetColor = this.isPresetColor(this.nzColor);
        /** @type {?} */
        const prefix = 'ant-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefix}`]: true,
            [`${prefix}-has-color`]: this.nzColor && !this.presetColor,
            [`${prefix}-${this.nzColor}`]: this.presetColor,
            [`${prefix}-checkable`]: this.nzMode === 'checkable',
            [`${prefix}-checkable-checked`]: this.nzChecked
        });
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                warnDeprecation(`'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateClassMap();
    }
}
NzTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                animations: [fadeMotion],
                template: "<ng-content></ng-content>\n<i nz-icon nzType=\"close\" *ngIf=\"nzMode==='closeable'\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[@fadeMotion]': '',
                    '[@.disabled]': 'nzNoAnimation',
                    '(@fadeMotion.done)': 'afterAnimation($event)',
                    '(click)': 'updateCheckedStatus()',
                    '[style.background-color]': 'presetColor? null : nzColor'
                }
            }] }
];
/** @nocollapse */
NzTagComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzChecked: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzAfterClose: [{ type: Output }],
    nzOnClose: [{ type: Output }],
    nzCheckedChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTagComponent.prototype, "nzChecked", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTagComponent.prototype, "nzNoAnimation", void 0);
if (false) {
    /** @type {?} */
    NzTagComponent.prototype.presetColor;
    /** @type {?} */
    NzTagComponent.prototype.nzMode;
    /** @type {?} */
    NzTagComponent.prototype.nzColor;
    /** @type {?} */
    NzTagComponent.prototype.nzChecked;
    /** @type {?} */
    NzTagComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzTagComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzTagComponent.prototype.nzOnClose;
    /** @type {?} */
    NzTagComponent.prototype.nzCheckedChange;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFnLyIsInNvdXJjZXMiOlsibnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQW1CekcsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQXVEekIsWUFDVSxRQUFtQixFQUNuQixVQUFzQixFQUN0Qix3QkFBa0Q7UUFGbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUF6RDVELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1gsV0FBTSxHQUEwQyxTQUFTLENBQUM7UUFFMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBbUQ5RCxDQUFDOzs7Ozs7SUFqREksYUFBYSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLGlHQUFpRyxDQUFDLElBQUksQ0FDM0csS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJ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QWYsWUFBWSxFQUFFOztxREFBdUI7OztJQUovQyxxQ0FBb0I7O0lBQ3BCLGdDQUFtRTs7SUFDbkUsaUNBQXlCOztJQUN6QixtQ0FBMkM7O0lBQzNDLHVDQUErQzs7SUFDL0Msc0NBQTJEOztJQUMzRCxtQ0FBOEQ7O0lBQzlELHlDQUFpRTs7Ozs7SUFnRC9ELGtDQUEyQjs7Ozs7SUFDM0Isb0NBQThCOzs7OztJQUM5QixrREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZhZGVNb3Rpb24sIHdhcm5EZXByZWNhdGlvbiwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWcnLFxuICBleHBvcnRBczogJ256VGFnJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIGFuaW1hdGlvbnM6IFtmYWRlTW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRhZy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ1tAZmFkZU1vdGlvbl0nOiAnJyxcbiAgICAnW0AuZGlzYWJsZWRdJzogJ256Tm9BbmltYXRpb24nLFxuICAgICcoQGZhZGVNb3Rpb24uZG9uZSknOiAnYWZ0ZXJBbmltYXRpb24oJGV2ZW50KScsXG4gICAgJyhjbGljayknOiAndXBkYXRlQ2hlY2tlZFN0YXR1cygpJyxcbiAgICAnW3N0eWxlLmJhY2tncm91bmQtY29sb3JdJzogJ3ByZXNldENvbG9yPyBudWxsIDogbnpDb2xvcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJlc2V0Q29sb3IgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpNb2RlOiAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuekNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIGlzUHJlc2V0Q29sb3IoY29sb3I/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAvXihwaW5rfHJlZHx5ZWxsb3d8b3JhbmdlfGN5YW58Z3JlZW58Ymx1ZXxwdXJwbGV8Z2Vla2JsdWV8bWFnZW50YXx2b2xjYW5vfGdvbGR8bGltZSkoLWludmVyc2UpPyQvLnRlc3QoXG4gICAgICBjb2xvclxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLmlzUHJlc2V0Q29sb3IodGhpcy5uekNvbG9yKTtcbiAgICBjb25zdCBwcmVmaXggPSAnYW50LXRhZyc7XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBbYCR7cHJlZml4fWBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeH0taGFzLWNvbG9yYF06IHRoaXMubnpDb2xvciAmJiAhdGhpcy5wcmVzZXRDb2xvcixcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhpcy5uekNvbG9yfWBdOiB0aGlzLnByZXNldENvbG9yLFxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlYF06IHRoaXMubnpNb2RlID09PSAnY2hlY2thYmxlJyxcbiAgICAgIFtgJHtwcmVmaXh9LWNoZWNrYWJsZS1jaGVja2VkYF06IHRoaXMubnpDaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcbiAgICAgIHRoaXMubnpDaGVja2VkID0gIXRoaXMubnpDaGVja2VkO1xuICAgICAgdGhpcy5uekNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLm56Q2hlY2tlZCk7XG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VUYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoZSk7XG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFmdGVyQW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5lbWl0KCk7XG4gICAgICBpZiAodGhpcy5uekFmdGVyQ2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB3YXJuRGVwcmVjYXRpb24oYCcobnpBZnRlckNsb3NlKScgT3V0cHV0IGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJyhuek9uQ2xvc2UpJyBpbnN0ZWFkLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=