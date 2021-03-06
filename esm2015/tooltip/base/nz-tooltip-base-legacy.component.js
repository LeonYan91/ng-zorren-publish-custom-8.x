/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { toBoolean, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
/**
 * This component overrides some properties of `NzTooltipBaseComponent` and make them
 * input properties.
 *
 * @deprecated 9.0.0 tooltip and other components deprecate the old API. This
 * would be removed in 9.0.0.
 *
 * \@example This example is what going to be removed
 *
 * ```html
 * <nz-tooltip>
 *   <a nz-tooltip></a>
 * </nz-tooltip>
 * ```
 */
export class NzTooltipBaseComponentLegacy extends NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15; // second
        // second
        this.nzMouseLeaveDelay = 0.1; // second
        this.nzVisibleChange = new EventEmitter();
    }
    // second
    // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        if (value !== this._placement) {
            this._placement = value;
            this._positions = [POSITION_MAP[this.nzPlacement], ...this._positions];
        }
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.nzVisibleChange.emit(visible);
        }
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.updatePosition();
        }));
    }
}
/** @nocollapse */
NzTooltipBaseComponentLegacy.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTooltipBaseComponentLegacy.propDecorators = {
    overlay: [{ type: ViewChild, args: ['overlay', { static: false },] }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.overlay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJiYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxTQUFTLEVBQW9CLHNCQUFzQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJyRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsc0JBQXNCOzs7OztJQThDdEUsWUFBWSxHQUFzQixFQUE2QixXQUFvQztRQUNqRyxLQUFLLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRHFDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTNDMUYsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLG1CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxTQUFTOztRQUNuQyxzQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTO1FBc0N4QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFJakUsQ0FBQzs7Ozs7OztJQXZDRCxJQUNJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBYzs7Y0FDcEIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxLQUF1QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQVFELFdBQVc7UUFDVCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUEzRU0saUJBQWlCO1lBQ1ksc0JBQXNCLHVCQWtFckIsSUFBSSxZQUFJLFFBQVE7OztzQkE3Q3BELFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2lDQUV0QyxLQUFLOzZCQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUdMLEtBQUs7d0JBWUwsS0FBSzt3QkFhTCxLQUFLOzhCQVVMLE1BQU07Ozs7SUEzQ1AsK0NBQXNFOztJQUV0RSwwREFBaUM7O0lBQ2pDLHNEQUErQzs7SUFDL0MseURBQWtDOztJQUNsQyx5REFBaUM7O0lBc0NqQyx1REFBaUU7O0lBRTdCLG1EQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT3B0aW9uYWwsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIE5nU3R5bGVJbnRlcmZhY2UsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IG92ZXJyaWRlcyBzb21lIHByb3BlcnRpZXMgb2YgYE56VG9vbHRpcEJhc2VDb21wb25lbnRgIGFuZCBtYWtlIHRoZW1cbiAqIGlucHV0IHByb3BlcnRpZXMuXG4gKlxuICogQGRlcHJlY2F0ZWQgOS4wLjAgdG9vbHRpcCBhbmQgb3RoZXIgY29tcG9uZW50cyBkZXByZWNhdGUgdGhlIG9sZCBBUEkuIFRoaXNcbiAqIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuXG4gKlxuICogQGV4YW1wbGUgVGhpcyBleGFtcGxlIGlzIHdoYXQgZ29pbmcgdG8gYmUgcmVtb3ZlZFxuICpcbiAqIGBgYGh0bWxcbiAqIDxuei10b29sdGlwPlxuICogICA8YSBuei10b29sdGlwPjwvYT5cbiAqIDwvbnotdG9vbHRpcD5cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSBleHRlbmRzIE56VG9vbHRpcEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdvdmVybGF5JywgeyBzdGF0aWM6IGZhbHNlIH0pIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5ID0gMC4xNTsgLy8gc2Vjb25kXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5ID0gMC4xOyAvLyBzZWNvbmRcblxuICAvLyBUT0RPOiBwbGFjZW1lbnQgbG9naWMgc2hvdWxkIGJlIHJlbW92ZWQgaW50byBgTnpUb29sdGlwQmFzZURpcmVjdGl2ZWAgb25jZSB0aGlzIGNvbXBvbmVudCBpcyByZW1vdmVkLlxuICBASW5wdXQoKVxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGxhY2VtZW50KSB7XG4gICAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5uelBsYWNlbWVudF0sIC4uLnRoaXMuX3Bvc2l0aW9uc107XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56UGxhY2VtZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB2aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUcmlnZ2VyKHZhbHVlOiBOelRvb2x0aXBUcmlnZ2VyKSB7XG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdGhpcy5fdHJpZ2dlciA9PT0gJ2NsaWNrJztcbiAgfVxuXG4gIGdldCBuelRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==