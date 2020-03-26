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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Inject, Input, NgZone, Optional, QueryList, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { findFirstNotEmptyNode, findLastNotEmptyNode, isEmpty, InputBoolean, NzConfigService, NzUpdateHostClassService, NzWaveDirective, NZ_WAVE_GLOBAL_CONFIG, WithConfig } from 'ng-zorro-antd/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'button';
export class NzButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} contentObserver
     * @param {?} nzUpdateHostClassService
     * @param {?} ngZone
     * @param {?} nzConfigService
     * @param {?} waveConfig
     * @param {?} animationType
     */
    constructor(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.nzWave = new NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzType = 'default';
        this.nzShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.setClassMap();
            this.cdr.markForCheck();
        }));
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefixCls = 'ant-btn';
        /** @type {?} */
        const sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixCls}-${this.nzType}`]: this.nzType,
            [`${prefixCls}-${this.nzShape}`]: this.nzShape,
            [`${prefixCls}-${sizeMap[this.nzSize]}`]: sizeMap[this.nzSize],
            [`${prefixCls}-loading`]: this.nzLoading,
            [`${prefixCls}-icon-only`]: this.iconOnly && !this.nzSearch && !this.isInDropdown,
            [`${prefixCls}-background-ghost`]: this.nzGhost,
            [`${prefixCls}-block`]: this.nzBlock,
            [`ant-input-search-button`]: this.nzSearch
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    /**
     * @return {?}
     */
    checkContent() {
        /** @type {?} */
        const hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.nzLoading);
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    moveIcon() {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            /** @type {?} */
            const firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            /** @type {?} */
            const lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = (/** @type {?} */ (firstChildElement));
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.checkContent()));
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.nzWave.ngOnInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzWave.ngOnDestroy();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzBlock ||
            changes.nzGhost ||
            changes.nzSearch ||
            changes.nzType ||
            changes.nzShape ||
            changes.nzSize ||
            changes.nzLoading) {
            this.setClassMap();
        }
        if (changes.nzLoading) {
            this.updateIconDisplay(this.nzLoading);
        }
        if (changes.nzType && changes.nzType.currentValue === 'link') {
            this.nzWave.disable();
        }
        else {
            this.nzWave.enable();
        }
    }
}
NzButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-button]',
                exportAs: 'nzButton',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<i nz-icon nzType=\"loading\" *ngIf=\"nzLoading\"></i>\n<span #contentElement><ng-content></ng-content></span>"
            }] }
];
/** @nocollapse */
NzButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ContentObserver },
    { type: NzUpdateHostClassService },
    { type: NgZone },
    { type: NzConfigService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
NzButtonComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement', { static: true },] }],
    listOfIconElement: [{ type: ContentChildren, args: [NzIconDirective, { read: ElementRef },] }],
    nzWave: [{ type: HostBinding, args: ['attr.nz-wave',] }],
    nzBlock: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzSearch: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzType: [{ type: Input }],
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzBlock", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzGhost", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzButtonComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzButtonComponent.prototype.contentElement;
    /** @type {?} */
    NzButtonComponent.prototype.listOfIconElement;
    /** @type {?} */
    NzButtonComponent.prototype.nzWave;
    /** @type {?} */
    NzButtonComponent.prototype.nzBlock;
    /** @type {?} */
    NzButtonComponent.prototype.nzGhost;
    /** @type {?} */
    NzButtonComponent.prototype.nzSearch;
    /** @type {?} */
    NzButtonComponent.prototype.nzLoading;
    /** @type {?} */
    NzButtonComponent.prototype.nzType;
    /** @type {?} */
    NzButtonComponent.prototype.nzShape;
    /** @type {?} */
    NzButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzButtonComponent.prototype.el;
    /** @type {?} */
    NzButtonComponent.prototype.isInDropdown;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.iconElement;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.iconOnly;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.ngZone;
    /** @type {?} */
    NzButtonComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.waveConfig;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnV0dG9uLyIsInNvdXJjZXMiOlsibnotYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFFbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFN0UsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFlBQVksRUFDWixlQUFlLEVBR2Ysd0JBQXdCLEVBRXhCLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFLaEQsd0JBQXdCLEdBQUcsUUFBUTtBQVd6QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7Ozs7Ozs7SUFnRjVCLFlBQ1UsVUFBc0IsRUFDdEIsR0FBc0IsRUFDdEIsUUFBbUIsRUFDbkIsZUFBZ0MsRUFDaEMsd0JBQWtELEVBQ2xELE1BQWMsRUFDZixlQUFnQyxFQUNZLFVBQXdCLEVBQ3hCLGFBQXFCO1FBUmhFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ1ksZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQXRGN0MsV0FBTSxHQUFHLElBQUksZUFBZSxDQUN2RCxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO1FBRXVCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0MsV0FBTSxHQUFpQixTQUFTLENBQUM7UUFDakMsWUFBTyxHQUFrQixJQUFJLENBQUM7UUFHOUIsT0FBRSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN6RCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUViLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFxRXJDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWU7YUFDakIsZ0NBQWdDLENBQUMsd0JBQXdCLENBQUM7YUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQTFFRCxXQUFXOztjQUNILFNBQVMsR0FBRyxTQUFTOztjQUNyQixPQUFPLEdBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDdkQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3JELENBQUMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDNUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTztZQUM5QyxDQUFDLEdBQUcsU0FBUyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzlELENBQUMsR0FBRyxTQUFTLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3hDLENBQUMsR0FBRyxTQUFTLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDakYsQ0FBQyxHQUFHLFNBQVMsbUJBQW1CLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMvQyxDQUFDLEdBQUcsU0FBUyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNwQyxDQUFDLHlCQUF5QixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFjO1FBQzlCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdEY7SUFDSCxDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNO1FBQ3ZFLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEUsdURBQXVEO1FBQ3ZELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxFQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTs7a0JBQ3JELGlCQUFpQixHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDOztrQkFDNUUsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDaEYsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDekYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRixJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFBLGlCQUFpQixFQUFlLENBQUM7YUFDckQ7aUJBQU0sSUFBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDN0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3REO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBdUJELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZUFBZTthQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUM1QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2Qsd0RBQXdEO1lBQ3hELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FBQztRQUNwRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUNFLE9BQU8sQ0FBQyxPQUFPO1lBQ2YsT0FBTyxDQUFDLE9BQU87WUFDZixPQUFPLENBQUMsUUFBUTtZQUNoQixPQUFPLENBQUMsTUFBTTtZQUNkLE9BQU8sQ0FBQyxPQUFPO1lBQ2YsT0FBTyxDQUFDLE1BQU07WUFDZCxPQUFPLENBQUMsU0FBUyxFQUNqQjtZQUNBLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFBRTtZQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7O1lBMUpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLDBIQUF5QzthQUMxQzs7OztZQWpEQyxVQUFVO1lBSFYsaUJBQWlCO1lBYWpCLFNBQVM7WUFqQkYsZUFBZTtZQWlDdEIsd0JBQXdCO1lBdEJ4QixNQUFNO1lBbUJOLGVBQWU7NENBbUhaLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCO3lDQUN4QyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7OzZCQXhGMUMsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQ0FDNUMsZUFBZSxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7cUJBQ3JELFdBQVcsU0FBQyxjQUFjO3NCQU8xQixLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOztBQU5tQjtJQUFmLFlBQVksRUFBRTs7a0RBQTBCO0FBQ3pCO0lBQWYsWUFBWSxFQUFFOztrREFBMEI7QUFDekI7SUFBZixZQUFZLEVBQUU7O21EQUEyQjtBQUMxQjtJQUFmLFlBQVksRUFBRTs7b0RBQTRCO0FBR007SUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7aURBQXVCOzs7SUFmaEYsMkNBQTBFOztJQUMxRSw4Q0FBaUc7O0lBQ2pHLG1DQUtFOztJQUVGLG9DQUFrRDs7SUFDbEQsb0NBQWtEOztJQUNsRCxxQ0FBbUQ7O0lBQ25ELHNDQUFvRDs7SUFDcEQsbUNBQTBDOztJQUMxQyxvQ0FBdUM7O0lBQ3ZDLG1DQUFnRjs7SUFFaEYsK0JBQXlEOztJQUN6RCx5Q0FBcUI7Ozs7O0lBQ3JCLHdDQUFpQzs7Ozs7SUFDakMscUNBQXlCOzs7OztJQUN6QixxQ0FBdUM7Ozs7O0lBMkRyQyx1Q0FBOEI7Ozs7O0lBQzlCLGdDQUE4Qjs7Ozs7SUFDOUIscUNBQTJCOzs7OztJQUMzQiw0Q0FBd0M7Ozs7O0lBQ3hDLHFEQUEwRDs7Ozs7SUFDMUQsbUNBQXNCOztJQUN0Qiw0Q0FBdUM7Ozs7O0lBQ3ZDLHVDQUEyRTs7Ozs7SUFDM0UsMENBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbnRlbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtcbiAgZmluZEZpcnN0Tm90RW1wdHlOb2RlLFxuICBmaW5kTGFzdE5vdEVtcHR5Tm9kZSxcbiAgaXNFbXB0eSxcbiAgSW5wdXRCb29sZWFuLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56U2l6ZUxEU1R5cGUsXG4gIE56U2l6ZU1hcCxcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICBOeldhdmVDb25maWcsXG4gIE56V2F2ZURpcmVjdGl2ZSxcbiAgTlpfV0FWRV9HTE9CQUxfQ09ORklHLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekljb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIE56QnV0dG9uVHlwZSA9ICdwcmltYXJ5JyB8ICdkYXNoZWQnIHwgJ2RhbmdlcicgfCAnZGVmYXVsdCcgfCAnbGluayc7XG5leHBvcnQgdHlwZSBOekJ1dHRvblNoYXBlID0gJ2NpcmNsZScgfCAncm91bmQnIHwgbnVsbDtcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2J1dHRvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1idXR0b25dJyxcbiAgZXhwb3J0QXM6ICduekJ1dHRvbicsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihOekljb25EaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBsaXN0T2ZJY29uRWxlbWVudDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubnotd2F2ZScpIG56V2F2ZSA9IG5ldyBOeldhdmVEaXJlY3RpdmUoXG4gICAgdGhpcy5uZ1pvbmUsXG4gICAgdGhpcy5lbGVtZW50UmVmLFxuICAgIHRoaXMud2F2ZUNvbmZpZyxcbiAgICB0aGlzLmFuaW1hdGlvblR5cGVcbiAgKTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCbG9jazogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpHaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuelR5cGU6IE56QnV0dG9uVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpTaGFwZTogTnpCdXR0b25TaGFwZSA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGU7XG5cbiAgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIGlzSW5Ecm9wZG93biA9IGZhbHNlO1xuICBwcml2YXRlIGljb25FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpY29uT25seSA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSAqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAnYW50LWJ0bic7XG4gICAgY29uc3Qgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xuICAgICAgW2Ake3ByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gXTogdGhpcy5uelR5cGUsXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMubnpTaGFwZX1gXTogdGhpcy5uelNoYXBlLFxuICAgICAgW2Ake3ByZWZpeENsc30tJHtzaXplTWFwW3RoaXMubnpTaXplXX1gXTogc2l6ZU1hcFt0aGlzLm56U2l6ZV0sXG4gICAgICBbYCR7cHJlZml4Q2xzfS1sb2FkaW5nYF06IHRoaXMubnpMb2FkaW5nLFxuICAgICAgW2Ake3ByZWZpeENsc30taWNvbi1vbmx5YF06IHRoaXMuaWNvbk9ubHkgJiYgIXRoaXMubnpTZWFyY2ggJiYgIXRoaXMuaXNJbkRyb3Bkb3duLFxuICAgICAgW2Ake3ByZWZpeENsc30tYmFja2dyb3VuZC1naG9zdGBdOiB0aGlzLm56R2hvc3QsXG4gICAgICBbYCR7cHJlZml4Q2xzfS1ibG9ja2BdOiB0aGlzLm56QmxvY2ssXG4gICAgICBbYGFudC1pbnB1dC1zZWFyY2gtYnV0dG9uYF06IHRoaXMubnpTZWFyY2hcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUljb25EaXNwbGF5KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaWNvbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pY29uRWxlbWVudCwgJ2Rpc3BsYXknLCB2YWx1ZSA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XG4gICAgaWYgKGhhc0ljb24pIHtcbiAgICAgIHRoaXMubW92ZUljb24oKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwICoqL1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLmljb25Pbmx5ID0gISFoYXNJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICAgIHRoaXMuaWNvbk9ubHkgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5uekxvYWRpbmcpO1xuICAgIGlmICghKHRoaXMuY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVJY29uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZkljb25FbGVtZW50ICYmIHRoaXMubGlzdE9mSWNvbkVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgY29uc3QgbGFzdENoaWxkRWxlbWVudCA9IGZpbmRMYXN0Tm90RW1wdHlOb2RlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICBpZiAoZmlyc3RDaGlsZEVsZW1lbnQgJiYgZmlyc3RDaGlsZEVsZW1lbnQgPT09IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQuZmlyc3QubmF0aXZlRWxlbWVudCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCBmaXJzdENoaWxkRWxlbWVudCwgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5pY29uRWxlbWVudCA9IGZpcnN0Q2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChsYXN0Q2hpbGRFbGVtZW50ICYmIGxhc3RDaGlsZEVsZW1lbnQgPT09IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQubGFzdC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCwgbGFzdENoaWxkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfV0FWRV9HTE9CQUxfQ09ORklHKSBwcml2YXRlIHdhdmVDb25maWc6IE56V2F2ZUNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHJpdmF0ZSBhbmltYXRpb25UeXBlOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnRuJyk7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVudE9ic2VydmVyXG4gICAgICAub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbGVtZW50KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzMwNzlcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNoZWNrQ29udGVudCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMubnpXYXZlLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5ueldhdmUubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLm56QmxvY2sgfHxcbiAgICAgIGNoYW5nZXMubnpHaG9zdCB8fFxuICAgICAgY2hhbmdlcy5uelNlYXJjaCB8fFxuICAgICAgY2hhbmdlcy5uelR5cGUgfHxcbiAgICAgIGNoYW5nZXMubnpTaGFwZSB8fFxuICAgICAgY2hhbmdlcy5uelNpemUgfHxcbiAgICAgIGNoYW5nZXMubnpMb2FkaW5nXG4gICAgKSB7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56TG9hZGluZykge1xuICAgICAgdGhpcy51cGRhdGVJY29uRGlzcGxheSh0aGlzLm56TG9hZGluZyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56VHlwZSAmJiBjaGFuZ2VzLm56VHlwZS5jdXJyZW50VmFsdWUgPT09ICdsaW5rJykge1xuICAgICAgdGhpcy5ueldhdmUuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56V2F2ZS5lbmFibGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==