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
var NzTagComponent = /** @class */ (function () {
    function NzTagComponent(renderer, elementRef, nzUpdateHostClassService) {
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
    NzTagComponent.prototype.isPresetColor = /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    };
    /**
     * @private
     * @return {?}
     */
    NzTagComponent.prototype.updateClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.presetColor = this.isPresetColor(this.nzColor);
        /** @type {?} */
        var prefix = 'ant-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefix] = true,
            _a[prefix + "-has-color"] = this.nzColor && !this.presetColor,
            _a[prefix + "-" + this.nzColor] = this.presetColor,
            _a[prefix + "-checkable"] = this.nzMode === 'checkable',
            _a[prefix + "-checkable-checked"] = this.nzChecked,
            _a));
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateCheckedStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.closeTag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.afterAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                warnDeprecation("'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.");
            }
        }
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
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
    NzTagComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
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
    return NzTagComponent;
}());
export { NzTagComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFnLyIsInNvdXJjZXMiOlsibnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RztJQXdFRSx3QkFDVSxRQUFtQixFQUNuQixVQUFzQixFQUN0Qix3QkFBa0Q7UUFGbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUF6RDVELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1gsV0FBTSxHQUEwQyxTQUFTLENBQUM7UUFFMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBbUQ5RCxDQUFDOzs7Ozs7SUFqREksc0NBQWE7Ozs7O0lBQXJCLFVBQXNCLEtBQWM7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLGlHQUFpRyxDQUFDLElBQUksQ0FDM0csS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHVDQUFjOzs7O0lBQXRCOztRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcs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dUI7SUErRGpELHFCQUFDO0NBQUEsQUFyRkQsSUFxRkM7U0FwRVksY0FBYzs7O0lBQ3pCLHFDQUFvQjs7SUFDcEIsZ0NBQW1FOztJQUNuRSxpQ0FBeUI7O0lBQ3pCLG1DQUEyQzs7SUFDM0MsdUNBQStDOztJQUMvQyxzQ0FBMkQ7O0lBQzNELG1DQUE4RDs7SUFDOUQseUNBQWlFOzs7OztJQWdEL0Qsa0NBQTJCOzs7OztJQUMzQixvQ0FBOEI7Ozs7O0lBQzlCLGtEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZmFkZU1vdGlvbiwgd2FybkRlcHJlY2F0aW9uLCBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRhZycsXG4gIGV4cG9ydEFzOiAnbnpUYWcnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgYW5pbWF0aW9uczogW2ZhZGVNb3Rpb25dLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFnLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAnW0BmYWRlTW90aW9uXSc6ICcnLFxuICAgICdbQC5kaXNhYmxlZF0nOiAnbnpOb0FuaW1hdGlvbicsXG4gICAgJyhAZmFkZU1vdGlvbi5kb25lKSc6ICdhZnRlckFuaW1hdGlvbigkZXZlbnQpJyxcbiAgICAnKGNsaWNrKSc6ICd1cGRhdGVDaGVja2VkU3RhdHVzKCknLFxuICAgICdbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl0nOiAncHJlc2V0Q29sb3I/IG51bGwgOiBuekNvbG9yJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcmVzZXRDb2xvciA9IGZhbHNlO1xuICBASW5wdXQoKSBuek1vZGU6ICdkZWZhdWx0JyB8ICdjbG9zZWFibGUnIHwgJ2NoZWNrYWJsZScgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgaXNQcmVzZXRDb2xvcihjb2xvcj86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIC9eKHBpbmt8cmVkfHllbGxvd3xvcmFuZ2V8Y3lhbnxncmVlbnxibHVlfHB1cnBsZXxnZWVrYmx1ZXxtYWdlbnRhfHZvbGNhbm98Z29sZHxsaW1lKSgtaW52ZXJzZSk/JC8udGVzdChcbiAgICAgIGNvbG9yXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5wcmVzZXRDb2xvciA9IHRoaXMuaXNQcmVzZXRDb2xvcih0aGlzLm56Q29sb3IpO1xuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFnJztcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFtgJHtwcmVmaXh9YF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4fS1oYXMtY29sb3JgXTogdGhpcy5uekNvbG9yICYmICF0aGlzLnByZXNldENvbG9yLFxuICAgICAgW2Ake3ByZWZpeH0tJHt0aGlzLm56Q29sb3J9YF06IHRoaXMucHJlc2V0Q29sb3IsXG4gICAgICBbYCR7cHJlZml4fS1jaGVja2FibGVgXTogdGhpcy5uek1vZGUgPT09ICdjaGVja2FibGUnLFxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlLWNoZWNrZWRgXTogdGhpcy5uekNoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNoZWNrZWRTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpNb2RlID09PSAnY2hlY2thYmxlJykge1xuICAgICAgdGhpcy5uekNoZWNrZWQgPSAhdGhpcy5uekNoZWNrZWQ7XG4gICAgICB0aGlzLm56Q2hlY2tlZENoYW5nZS5lbWl0KHRoaXMubnpDaGVja2VkKTtcbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uek9uQ2xvc2UuZW1pdChlKTtcbiAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYWZ0ZXJBbmltYXRpb24oZTogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMubnpBZnRlckNsb3NlLmVtaXQoKTtcbiAgICAgIGlmICh0aGlzLm56QWZ0ZXJDbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHdhcm5EZXByZWNhdGlvbihgJyhuekFmdGVyQ2xvc2UpJyBPdXRwdXQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnKG56T25DbG9zZSknIGluc3RlYWQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==