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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, EMPTY, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { slideMotion, warnDeprecation, DEFAULT_DROPDOWN_POSITIONS, InputBoolean, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function menuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
/**
 * @deprecated Use `NzDropdownDirective` instead, will remove in 9.0.0.
 */
export class NzDropDownComponent {
    /**
     * @param {?} cdr
     * @param {?} nzMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.visible$ = new Subject();
        this.destroy$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzTableFilter = false;
        this.nzVisibleChange = new EventEmitter();
        warnDeprecation(`'nz-dropdown' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en`);
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    startSubscribe(observable$) {
        /** @type {?} */
        const click$ = this.nzClickHide ? this.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        combineLatest([merge(observable$, click$), this.nzMenuDropdownService.menuOpen$])
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => value[0] || value[1])), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        visible => {
            if (!this.nzDisabled && this.nzVisible !== visible) {
                this.nzVisible = visible;
                this.nzVisibleChange.emit(this.nzVisible);
                this.triggerWidth = this.nzDropDownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        if (this.nzDropDownDirective) {
            this.nzDropDownDirective.setDisabled(this.nzDisabled);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.startSubscribe(merge(this.visible$, this.nzTrigger === 'hover' ? this.nzDropDownDirective.hover$ : this.nzDropDownDirective.$click));
        this.updateDisabledState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzVisible) {
            this.visible$.next(this.nzVisible);
        }
        if (changes.nzDisabled) {
            this.updateDisabledState();
        }
        if (changes.nzPlacement) {
            this.dropDownPosition = this.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom';
            this.positions = [POSITION_MAP[this.nzPlacement], ...this.positions];
        }
    }
}
NzDropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown',
                exportAs: 'nzDropdown',
                preserveWhitespaces: false,
                providers: [
                    NzMenuDropdownService,
                    {
                        provide: NzDropdownHigherOrderServiceToken,
                        useFactory: menuServiceFactory,
                        deps: [[new Self(), Injector]]
                    }
                ],
                animations: [slideMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content select=\"[nz-dropdown]\"></ng-content>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\"\n  (backdropClick)=\"setVisibleStateWhen(false)\"\n  (detach)=\"setVisibleStateWhen(false)\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [ngClass]=\"nzOverlayClassName\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [style.minWidth.px]=\"triggerWidth\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\n      <ng-content select=\"[nz-menu]\"></ng-content>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                styles: [`
      :root .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
NzDropDownComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDropDownComponent.propDecorators = {
    nzDropDownDirective: [{ type: ContentChild, args: [NzDropDownDirective, { static: false },] }],
    nzTrigger: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzClickHide: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzTableFilter: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownComponent.prototype, "nzClickHide", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownComponent.prototype, "nzVisible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownComponent.prototype, "nzTableFilter", void 0);
if (false) {
    /** @type {?} */
    NzDropDownComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropDownComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropDownComponent.prototype.positions;
    /** @type {?} */
    NzDropDownComponent.prototype.visible$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownComponent.prototype.destroy$;
    /** @type {?} */
    NzDropDownComponent.prototype.nzDropDownDirective;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownComponent.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownComponent.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisible;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTableFilter;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisibleChange;
    /**
     * @type {?}
     * @protected
     */
    NzDropDownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropDownComponent.prototype.nzMenuDropdownService;
    /** @type {?} */
    NzDropDownComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFFSixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0YsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsMEJBQTBCLEVBQzFCLFlBQVksRUFDWixpQ0FBaUMsRUFFakMsc0JBQXNCLEVBQ3RCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUluRSxNQUFNLFVBQVUsa0JBQWtCLENBQUMsUUFBa0I7SUFDbkQsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDN0MsQ0FBQztBQStCRDs7R0FFRztBQUNILE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQXFEOUIsWUFDWSxHQUFzQixFQUN4QixxQkFBNEMsRUFDekIsV0FBb0M7UUFGckQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDeEIsMEJBQXFC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Q29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2VsZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBFTVBUWSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBtYXBUbywgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBzbGlkZU1vdGlvbixcbiAgd2FybkRlcHJlY2F0aW9uLFxuICBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyxcbiAgSW5wdXRCb29sZWFuLFxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICBQT1NJVElPTl9NQVBcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICcuL256LWRyb3Bkb3duLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUtZHJvcGRvd24uc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56TWVudUJhc2VTZXJ2aWNlIHtcbiAgcmV0dXJuIGluamVjdG9yLmdldChOek1lbnVEcm9wZG93blNlcnZpY2UpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1kcm9wZG93bicsXG4gIGV4cG9ydEFzOiAnbnpEcm9wZG93bicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICBOek1lbnVEcm9wZG93blNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXG4gICAgfVxuICBdLFxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOnJvb3QgLmFudC1kcm9wZG93biB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE56RHJvcGRvd25EaXJlY3RpdmVgIGluc3RlYWQsIHdpbGwgcmVtb3ZlIGluIDkuMC4wLlxuICovXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgdHJpZ2dlcldpZHRoID0gMDtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TXTtcbiAgdmlzaWJsZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQENvbnRlbnRDaGlsZChOekRyb3BEb3duRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpEcm9wRG93bkRpcmVjdGl2ZTogTnpEcm9wRG93bkRpcmVjdGl2ZTtcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBASW5wdXQoKSBuelBsYWNlbWVudDogTnpQbGFjZW1lbnQgPSAnYm90dG9tTGVmdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNsaWNrSGlkZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VGFibGVGaWx0ZXIgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNldFZpc2libGVTdGF0ZVdoZW4odmlzaWJsZTogYm9vbGVhbiwgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgfCAnYWxsJyA9ICdhbGwnKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpUcmlnZ2VyID09PSB0cmlnZ2VyIHx8IHRyaWdnZXIgPT09ICdhbGwnKSB7XG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHN0YXJ0U3Vic2NyaWJlKG9ic2VydmFibGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+KTogdm9pZCB7XG4gICAgY29uc3QgY2xpY2skID0gdGhpcy5uekNsaWNrSGlkZSA/IHRoaXMubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUobWFwVG8oZmFsc2UpKSA6IEVNUFRZO1xuICAgIGNvbWJpbmVMYXRlc3QoW21lcmdlKG9ic2VydmFibGUkLCBjbGljayQpLCB0aGlzLm56TWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiRdKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVswXSB8fCB2YWx1ZVsxXSksXG4gICAgICAgIGRlYm91bmNlVGltZSg1MCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uelZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLm56RHJvcERvd25EaXJlY3RpdmUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEcm9wRG93bkRpcmVjdGl2ZSkge1xuICAgICAgdGhpcy5uekRyb3BEb3duRGlyZWN0aXZlLnNldERpc2FibGVkKHRoaXMubnpEaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuek1lbnVEcm9wZG93blNlcnZpY2U6IE56TWVudURyb3Bkb3duU2VydmljZSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgYCduei1kcm9wZG93bicgQ29tcG9uZW50IGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256LWRyb3Bkb3duLW1lbnUnIGluc3RlYWQuIFJlYWQgaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJvcGRvd24vZW5gXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKFxuICAgICAgbWVyZ2UoXG4gICAgICAgIHRoaXMudmlzaWJsZSQsXG4gICAgICAgIHRoaXMubnpUcmlnZ2VyID09PSAnaG92ZXInID8gdGhpcy5uekRyb3BEb3duRGlyZWN0aXZlLmhvdmVyJCA6IHRoaXMubnpEcm9wRG93bkRpcmVjdGl2ZS4kY2xpY2tcbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlJC5uZXh0KHRoaXMubnpWaXNpYmxlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56UGxhY2VtZW50KSB7XG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSB0aGlzLm56UGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpICE9PSAtMSA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICB0aGlzLnBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5uelBsYWNlbWVudF0sIC4uLnRoaXMucG9zaXRpb25zXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==