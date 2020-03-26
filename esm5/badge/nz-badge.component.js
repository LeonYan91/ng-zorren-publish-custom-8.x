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
import { ContentObserver } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { isEmpty, zoomBadgeMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { startWith, take, takeUntil } from 'rxjs/operators';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBadgeComponent = /** @class */ (function () {
    function NzBadgeComponent(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.colorArray = [
            'pink',
            'red',
            'yellow',
            'orange',
            'cyan',
            'green',
            'blue',
            'purple',
            'geekblue',
            'magenta',
            'volcano',
            'gold',
            'lime'
        ];
        this.presetColor = null;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        renderer.addClass(elementRef.nativeElement, 'ant-badge');
    }
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        this.notWrapper = isEmpty(this.contentElement.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.generateMaxNumberArray = /**
     * @return {?}
     */
    function () {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateMaxNumberArray();
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.onStable.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.viewInit = true;
            _this.cdr.markForCheck();
        }));
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.checkContent();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount, nzColor = changes.nzColor;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return +item; }));
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-badge',
                    exportAs: 'nzBadge',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [zoomBadgeMotion],
                    template: "<span #contentElement><ng-content></ng-content></span>\n<span class=\"ant-badge-status-dot ant-badge-status-{{nzStatus || presetColor}}\"\n      [style.background]=\"!presetColor && nzColor\"\n      *ngIf=\"nzStatus || nzColor\"\n      [ngStyle]=\"nzStyle\"></span>\n<span class=\"ant-badge-status-text\" *ngIf=\"nzStatus || nzColor\">{{ nzText }}</span>\n<ng-container *nzStringTemplateOutlet=\"nzCount\">\n  <sup class=\"ant-scroll-number\"\n       *ngIf=\"showSup && viewInit\"\n       [@.disabled]=\"notWrapper\"\n       [@zoomBadgeMotion]\n       [ngStyle]=\"nzStyle\"\n       [attr.title]=\"nzTitle || nzCount\"\n       [style.right.px]=\"nzOffset && nzOffset[0] ? -nzOffset[0] : null\"\n       [style.marginTop.px]=\"nzOffset && nzOffset[1] ? nzOffset[1] : null\"\n       [class.ant-badge-count]=\"!nzDot\"\n       [class.ant-badge-dot]=\"nzDot\"\n       [class.ant-badge-multiple-words]=\"countArray.length>=2\">\n    <ng-container *ngFor=\"let n of maxNumberArray;let i = index;\">\n      <span class=\"ant-scroll-number-only\"\n            *ngIf=\"count <= nzOverflowCount\"\n            [style.transform]=\"'translateY(' + (-countArray[i] * 100) + '%)'\">\n          <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\n            <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p === countArray[i]\">{{ p }}</p>\n          </ng-container>\n      </span>\n    </ng-container>\n    <ng-container *ngIf=\"count > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\n  </sup>\n</ng-container>",
                    host: {
                        '[class.ant-badge-status]': 'nzStatus'
                    }
                }] }
    ];
    /** @nocollapse */
    NzBadgeComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ContentObserver },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NzBadgeComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
        nzShowZero: [{ type: Input }],
        nzShowDot: [{ type: Input }],
        nzDot: [{ type: Input }],
        nzOverflowCount: [{ type: Input }],
        nzText: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzCount: [{ type: Input }],
        nzOffset: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzBadgeComponent.prototype, "nzShowZero", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowDot", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzDot", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 99),
        tslib_1.__metadata("design:type", Number)
    ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        tslib_1.__metadata("design:type", String)
    ], NzBadgeComponent.prototype, "nzColor", void 0);
    return NzBadgeComponent;
}());
export { NzBadgeComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.destroy$;
    /** @type {?} */
    NzBadgeComponent.prototype.notWrapper;
    /** @type {?} */
    NzBadgeComponent.prototype.viewInit;
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.colorArray;
    /** @type {?} */
    NzBadgeComponent.prototype.presetColor;
    /** @type {?} */
    NzBadgeComponent.prototype.count;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzColor;
    /** @type {?} */
    NzBadgeComponent.prototype.nzTitle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype.nzCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOffset;
    /** @type {?} */
    NzBadgeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWRnZS8iLCJzb3VyY2VzIjpbIm56LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBSXRELHdCQUF3QixHQUFHLFNBQVM7QUFFMUM7SUFrRUUsMEJBQ1MsZUFBZ0MsRUFDL0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsZUFBZ0MsRUFDaEMsR0FBc0IsRUFDdEIsTUFBYztRQUxmLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUEzRGhCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYyxHQUFhLEVB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LEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzZCQUM3QyxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSztrQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBVm1CO1FBQWYsWUFBWSxFQUFFOzt3REFBNkI7SUFDNUI7UUFBZixZQUFZLEVBQUU7O3VEQUFrQjtJQUNqQjtRQUFmLFlBQVksRUFBRTs7bURBQWU7SUFDWTtRQUF6QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxDQUFDOzs2REFBeUI7SUFFNUI7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOztxREFBaUI7SUE2RWpFLHVCQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0EzR1ksZ0JBQWdCOzs7Ozs7SUFDM0Isb0NBQWlDOztJQUNqQyxzQ0FBa0I7O0lBQ2xCLG9DQUFpQjs7SUFDakIsMENBQThCOztJQUM5QixzQ0FBMEI7O0lBQzFCLDRDQUFrRDs7SUFDbEQsc0NBY0U7O0lBQ0YsdUNBQWtDOztJQUNsQyxpQ0FBYzs7SUFDZCwwQ0FBMkU7O0lBQzNFLHNDQUFxRDs7SUFDckQscUNBQTBDOztJQUMxQyxpQ0FBdUM7O0lBQ3ZDLDJDQUEyRTs7SUFDM0Usa0NBQXdCOztJQUN4QixtQ0FBK0Q7O0lBQy9ELG1DQUF5Qjs7SUFDekIsbUNBQTRDOztJQUM1QyxvQ0FBcUM7O0lBQ3JDLG1DQUE2Qzs7SUFDN0Msb0NBQW9DOztJQW9CbEMsMkNBQXVDOzs7OztJQUN2QyxvQ0FBMkI7Ozs7O0lBQzNCLHNDQUE4Qjs7Ozs7SUFDOUIsMkNBQXdDOzs7OztJQUN4QywrQkFBOEI7Ozs7O0lBQzlCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb250ZW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNFbXB0eSwgem9vbUJhZGdlTW90aW9uLCBJbnB1dEJvb2xlYW4sIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgTnpCYWRnZVN0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYmFja1RvcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWJhZGdlJyxcbiAgZXhwb3J0QXM6ICduekJhZGdlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbem9vbUJhZGdlTW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWJhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWJhZGdlLXN0YXR1c10nOiAnbnpTdGF0dXMnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgbm90V3JhcHBlciA9IHRydWU7XG4gIHZpZXdJbml0ID0gZmFsc2U7XG4gIG1heE51bWJlckFycmF5OiBzdHJpbmdbXSA9IFtdO1xuICBjb3VudEFycmF5OiBudW1iZXJbXSA9IFtdO1xuICBjb3VudFNpbmdsZUFycmF5ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICBjb2xvckFycmF5ID0gW1xuICAgICdwaW5rJyxcbiAgICAncmVkJyxcbiAgICAneWVsbG93JyxcbiAgICAnb3JhbmdlJyxcbiAgICAnY3lhbicsXG4gICAgJ2dyZWVuJyxcbiAgICAnYmx1ZScsXG4gICAgJ3B1cnBsZScsXG4gICAgJ2dlZWtibHVlJyxcbiAgICAnbWFnZW50YScsXG4gICAgJ3ZvbGNhbm8nLFxuICAgICdnb2xkJyxcbiAgICAnbGltZSdcbiAgXTtcbiAgcHJlc2V0Q29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBjb3VudDogbnVtYmVyO1xuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1plcm86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0RvdCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRvdCA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDk5KSBuek92ZXJmbG93Q291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOekJhZGdlU3RhdHVzVHlwZTtcbiAgQElucHV0KCkgbnpDb3VudDogbnVtYmVyIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdFdyYXBwZXIgPSBpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgaWYgKHRoaXMubm90V3JhcHBlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZS1ub3QtYS13cmFwcGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaG93U3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5uelNob3dEb3QgJiYgdGhpcy5uekRvdCkgfHwgdGhpcy5jb3VudCA+IDAgfHwgKHRoaXMuY291bnQgPT09IDAgJiYgdGhpcy5uelNob3daZXJvKTtcbiAgfVxuXG4gIGdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTogdm9pZCB7XG4gICAgdGhpcy5tYXhOdW1iZXJBcnJheSA9IHRoaXMubnpPdmVyZmxvd0NvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2UnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuZXJhdGVNYXhOdW1iZXJBcnJheSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRlbnRPYnNlcnZlclxuICAgICAgLm9ic2VydmUodGhpcy5jb250ZW50RWxlbWVudClcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56T3ZlcmZsb3dDb3VudCwgbnpDb3VudCwgbnpDb2xvciB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpDb3VudCAmJiAhKG56Q291bnQuY3VycmVudFZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpKSB7XG4gICAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoMCwgbnpDb3VudC5jdXJyZW50VmFsdWUpO1xuICAgICAgdGhpcy5jb3VudEFycmF5ID0gdGhpcy5jb3VudFxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoaXRlbSA9PiAraXRlbSk7XG4gICAgfVxuICAgIGlmIChuek92ZXJmbG93Q291bnQpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVNYXhOdW1iZXJBcnJheSgpO1xuICAgIH1cbiAgICBpZiAobnpDb2xvcikge1xuICAgICAgdGhpcy5wcmVzZXRDb2xvciA9IHRoaXMuY29sb3JBcnJheS5pbmRleE9mKHRoaXMubnpDb2xvcikgIT09IC0xID8gdGhpcy5uekNvbG9yIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==