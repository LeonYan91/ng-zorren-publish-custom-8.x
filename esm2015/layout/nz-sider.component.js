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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { toCssPixel, InputBoolean, NzDomEventService } from 'ng-zorro-antd/core';
import { NzLayoutComponent } from './nz-layout.component';
export class NzSiderComponent {
    /**
     * @param {?} nzLayoutComponent
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     * @param {?} nzDomEventService
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
        this.nzLayoutComponent = nzLayoutComponent;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.nzDomEventService = nzDomEventService;
        this.below = false;
        this.destroy$ = new Subject();
        this.dimensionMap = {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1600px'
        };
        this.nzCollapsedChange = new EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        renderer.addClass(elementRef.nativeElement, 'ant-layout-sider');
    }
    /**
     * @return {?}
     */
    get trigger() {
        return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
    }
    /**
     * @return {?}
     */
    get flexSetting() {
        return `0 0 ${this.widthSetting}`;
    }
    /**
     * @return {?}
     */
    get widthSetting() {
        if (this.nzCollapsed) {
            return `${this.nzCollapsedWidth}px`;
        }
        else {
            return toCssPixel(this.nzWidth);
        }
    }
    /**
     * @return {?}
     */
    watchMatchMedia() {
        if (this.nzBreakpoint) {
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(`(max-width: ${this.dimensionMap[this.nzBreakpoint]})`).matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    }
    /**
     * @return {?}
     */
    get isZeroTrigger() {
        return (this.nzCollapsible &&
            this.trigger &&
            this.nzCollapsedWidth === 0 &&
            ((this.nzBreakpoint && this.below) || !this.nzBreakpoint));
    }
    /**
     * @return {?}
     */
    get isSiderTrigger() {
        return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.watchMatchMedia()));
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.watchMatchMedia()));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    }
}
NzSiderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-sider',
                exportAs: 'nzSider',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<div class=\"ant-layout-sider-children\">\n  <ng-content></ng-content>\n</div>\n<span class=\"ant-layout-sider-zero-width-trigger\" *ngIf=\"isZeroTrigger\" (click)=\"toggleCollapse()\">\n  <ng-template [ngTemplateOutlet]=\"nzZeroTrigger || zeroTrigger\"></ng-template>\n</span>\n<div class=\"ant-layout-sider-trigger\"\n  *ngIf=\"isSiderTrigger\"\n  (click)=\"toggleCollapse()\"\n  [style.width]=\"widthSetting\">\n  <ng-template [ngTemplateOutlet]=\"trigger\"></ng-template>\n</div>\n<ng-template #defaultTrigger>\n  <i nz-icon [nzType]=\"nzCollapsed ? 'right' : 'left'\" *ngIf=\"!nzReverseArrow\"></i>\n  <i nz-icon [nzType]=\"nzCollapsed ? 'left' : 'right'\" *ngIf=\"nzReverseArrow\"></i>\n</ng-template>\n<ng-template #zeroTrigger>\n  <i nz-icon nzType=\"bars\"></i>\n</ng-template>",
                host: {
                    '[class.ant-layout-sider-zero-width]': 'nzCollapsed && nzCollapsedWidth === 0',
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
                    '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                    '[style.flex]': 'flexSetting',
                    '[style.max-width]': 'widthSetting',
                    '[style.min-width]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }] }
];
/** @nocollapse */
NzSiderComponent.ctorParameters = () => [
    { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef },
    { type: NzDomEventService },
    { type: Renderer2 },
    { type: ElementRef }
];
NzSiderComponent.propDecorators = {
    nzCollapsedChange: [{ type: Output }],
    nzWidth: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzCollapsedWidth: [{ type: Input }],
    nzBreakpoint: [{ type: Input }],
    nzZeroTrigger: [{ type: Input }],
    nzReverseArrow: [{ type: Input }],
    nzCollapsible: [{ type: Input }],
    nzCollapsed: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    defaultTrigger: [{ type: ViewChild, args: ['defaultTrigger', { static: true },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzReverseArrow", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsed", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.below;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.dimensionMap;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedChange;
    /** @type {?} */
    NzSiderComponent.prototype.nzWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzTheme;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzBreakpoint;
    /** @type {?} */
    NzSiderComponent.prototype.nzZeroTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.nzReverseArrow;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsible;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsed;
    /** @type {?} */
    NzSiderComponent.prototype.nzTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.defaultTrigger;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.nzLayoutComponent;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJuei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQWdCLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFtQjFELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7Ozs7O0lBc0UzQixZQUM4QixpQkFBb0MsRUFDeEQsWUFBMEIsRUFDMUIsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLEdBQXNCLEVBQ3RCLGlCQUFvQyxFQUM1QyxRQUFtQixFQUNuQixVQUFzQjtRQVBNLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDeEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7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O29CQUM3QixtQkFBbUIsRUFBRSxjQUFjO29CQUNuQyxtQkFBbUIsRUFBRSxjQUFjO29CQUNuQyxlQUFlLEVBQUUsY0FBYztpQkFDaEM7YUFDRjs7OztZQWxCUSxpQkFBaUIsdUJBMEZyQixRQUFRLFlBQUksSUFBSTtZQWpHWixZQUFZO1lBWG5CLE1BQU07WUFZQyxRQUFRO1lBbEJmLGlCQUFpQjtZQXNCOEIsaUJBQWlCO1lBWGhFLFNBQVM7WUFUVCxVQUFVOzs7Z0NBcURULE1BQU07c0JBRU4sS0FBSztzQkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7QUFKcEI7SUFBZixZQUFZLEVBQUU7O3dEQUF3QjtBQUN2QjtJQUFmLFlBQVksRUFBRTs7dURBQXVCO0FBQ3RCO0lBQWYsWUFBWSxFQUFFOztxREFBcUI7Ozs7OztJQXBCN0MsaUNBQXNCOzs7OztJQUN0QixvQ0FBaUM7Ozs7O0lBQ2pDLHdDQU9FOztJQUVGLDZDQUEwRDs7SUFFMUQsbUNBQXdDOztJQUN4QyxtQ0FBNEM7O0lBQzVDLDRDQUErQjs7SUFDL0Isd0NBQW9DOztJQUNwQyx5Q0FBMEM7O0lBQzFDLDBDQUFnRDs7SUFDaEQseUNBQStDOztJQUMvQyx1Q0FBNkM7O0lBQzdDLHFDQUFzQzs7SUFDdEMsMENBQWlGOzs7OztJQWdEL0UsNkNBQWdFOzs7OztJQUNoRSx3Q0FBa0M7Ozs7O0lBQ2xDLGtDQUFzQjs7Ozs7SUFDdEIsb0NBQTBCOzs7OztJQUMxQiwrQkFBOEI7Ozs7O0lBQzlCLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Nzc1BpeGVsLCBJbnB1dEJvb2xlYW4sIE56QnJlYWtQb2ludCwgTnpEb21FdmVudFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbnotbGF5b3V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXNpZGVyJyxcbiAgZXhwb3J0QXM6ICduelNpZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2lkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGhdJzogJ256Q29sbGFwc2VkICYmIG56Q29sbGFwc2VkV2lkdGggPT09IDAnLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci1saWdodF0nOiBgbnpUaGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZF0nOiAnbnpDb2xsYXBzZWQnLFxuICAgICdbc3R5bGUuZmxleF0nOiAnZmxleFNldHRpbmcnLFxuICAgICdbc3R5bGUubWF4LXdpZHRoXSc6ICd3aWR0aFNldHRpbmcnLFxuICAgICdbc3R5bGUubWluLXdpZHRoXSc6ICd3aWR0aFNldHRpbmcnLFxuICAgICdbc3R5bGUud2lkdGhdJzogJ3dpZHRoU2V0dGluZydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGJlbG93ID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGRpbWVuc2lvbk1hcCA9IHtcbiAgICB4czogJzQ4MHB4JyxcbiAgICBzbTogJzU3NnB4JyxcbiAgICBtZDogJzc2OHB4JyxcbiAgICBsZzogJzk5MnB4JyxcbiAgICB4bDogJzEyMDBweCcsXG4gICAgeHhsOiAnMTYwMHB4J1xuICB9O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbGxhcHNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBueldpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyMDA7XG4gIEBJbnB1dCgpIG56VGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIG56Q29sbGFwc2VkV2lkdGggPSA4MDtcbiAgQElucHV0KCkgbnpCcmVha3BvaW50OiBOekJyZWFrUG9pbnQ7XG4gIEBJbnB1dCgpIG56WmVyb1RyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSZXZlcnNlQXJyb3cgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29sbGFwc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29sbGFwc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUcmlnZ2VyJywgeyBzdGF0aWM6IHRydWUgfSkgZGVmYXVsdFRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBnZXQgdHJpZ2dlcigpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmlnZ2VyICE9PSB1bmRlZmluZWQgPyB0aGlzLm56VHJpZ2dlciA6IHRoaXMuZGVmYXVsdFRyaWdnZXI7XG4gIH1cblxuICBnZXQgZmxleFNldHRpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDAgMCAke3RoaXMud2lkdGhTZXR0aW5nfWA7XG4gIH1cblxuICBnZXQgd2lkdGhTZXR0aW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubnpDb2xsYXBzZWQpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm56Q29sbGFwc2VkV2lkdGh9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIHdhdGNoTWF0Y2hNZWRpYSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekJyZWFrcG9pbnQpIHtcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMuZGltZW5zaW9uTWFwW3RoaXMubnpCcmVha3BvaW50XX0pYCkubWF0Y2hlcztcbiAgICAgIHRoaXMuYmVsb3cgPSBtYXRjaEJlbG93O1xuICAgICAgdGhpcy5uekNvbGxhcHNlZCA9IG1hdGNoQmVsb3c7XG4gICAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQobWF0Y2hCZWxvdyk7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb2xsYXBzZWQgPSAhdGhpcy5uekNvbGxhcHNlZDtcbiAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQodGhpcy5uekNvbGxhcHNlZCk7XG4gIH1cblxuICBnZXQgaXNaZXJvVHJpZ2dlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5uekNvbGxhcHNpYmxlICYmXG4gICAgICB0aGlzLnRyaWdnZXIgJiZcbiAgICAgIHRoaXMubnpDb2xsYXBzZWRXaWR0aCA9PT0gMCAmJlxuICAgICAgKCh0aGlzLm56QnJlYWtwb2ludCAmJiB0aGlzLmJlbG93KSB8fCAhdGhpcy5uekJyZWFrcG9pbnQpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBpc1NpZGVyVHJpZ2dlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekNvbGxhcHNpYmxlICYmIHRoaXMudHJpZ2dlciAmJiB0aGlzLm56Q29sbGFwc2VkV2lkdGggIT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpMYXlvdXRDb21wb25lbnQ6IE56TGF5b3V0Q29tcG9uZW50LFxuICAgIHByaXZhdGUgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1sYXlvdXQtc2lkZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TGF5b3V0Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50LmluaXRTaWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy53YXRjaE1hdGNoTWVkaWEoKSk7XG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHRoaXMubnpMYXlvdXRDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpMYXlvdXRDb21wb25lbnQuZGVzdHJveVNpZGVyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=