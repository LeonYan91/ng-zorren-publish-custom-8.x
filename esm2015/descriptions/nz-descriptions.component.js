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
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { auditTime, finalize, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { responsiveMap, warn, InputBoolean, NzBreakpoint, NzConfigService, NzDomEventService, WithConfig } from 'ng-zorro-antd/core';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'descriptions';
/** @type {?} */
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
export class NzDescriptionsComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} mediaMatcher
     * @param {?} platform
     * @param {?} nzDomEventService
     */
    constructor(nzConfigService, cdr, mediaMatcher, platform, nzDomEventService) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.mediaMatcher = mediaMatcher;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzLayout = 'horizontal';
        this.nzTitle = '';
        this.itemMatrix = [];
        this.realColumn = 3;
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzColumn) {
            this.resize$.next();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap((/**
         * @return {?}
         */
        () => merge(...this.items.map((/**
         * @param {?} i
         * @return {?}
         */
        i => i.inputChange$))).pipe(auditTime(16))))), this.resize$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.prepareMatrix();
            this.cdr.markForCheck();
        }));
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.resize$.next()));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.resize$.complete();
    }
    /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    prepareMatrix() {
        /** @type {?} */
        let currentRow = [];
        /** @type {?} */
        let width = 0;
        /** @type {?} */
        const column = (this.realColumn = this.getColumn());
        /** @type {?} */
        const items = this.items.toArray();
        /** @type {?} */
        const length = items.length;
        /** @type {?} */
        const matrix = [];
        /** @type {?} */
        const flushRow = (/**
         * @return {?}
         */
        () => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        });
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const item = items[i];
            const { nzTitle: title, content, nzSpan: span } = item;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    warn(`"nzColumn" is ${column} but we have row length ${width}`);
                }
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title, content, span });
            }
        }
        this.itemMatrix = matrix;
    }
    /**
     * @private
     * @return {?}
     */
    matchMedia() {
        /** @type {?} */
        let bp = NzBreakpoint.md;
        Object.keys(responsiveMap).map((/**
         * @param {?} breakpoint
         * @return {?}
         */
        (breakpoint) => {
            /** @type {?} */
            const castBP = (/** @type {?} */ (breakpoint));
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                bp = castBP;
            }
        }));
        return bp;
    }
    /**
     * @private
     * @return {?}
     */
    getColumn() {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.matchMedia()];
        }
        return this.nzColumn;
    }
}
NzDescriptionsComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions',
                template: "<div *ngIf=\"nzTitle\"\n     class=\"ant-descriptions-title\">\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n</div>\n<div class=\"ant-descriptions-view\">\n  <table>\n    <tbody>\n      <ng-container *ngIf=\"nzLayout === 'horizontal'\">\n        <tr class=\"ant-descriptions-row\"\n            *ngFor=\"let row of itemMatrix; let i = index\">\n          <ng-container *ngFor=\"let item of row; let isLast = last\">\n            <!-- Horizontal & NOT Bordered -->\n            <ng-container *ngIf=\"!nzBordered\">\n              <td class=\"ant-descriptions-item\"\n                  [colSpan]=\"item.span\">\n                <span class=\"ant-descriptions-item-label\"\n                      [class.ant-descriptions-item-colon]=\"nzColon\">{{ item.title }}</span>\n                <span class=\"ant-descriptions-item-content\">\n                  <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                </span>\n              </td>\n            </ng-container>\n            <!-- Horizontal & Bordered -->\n            <ng-container *ngIf=\"nzBordered\">\n              <td class=\"ant-descriptions-item-label\"\n                  *nzStringTemplateOutlet=\"item.title\">{{ item.title }}</td>\n              <td class=\"ant-descriptions-item-content\"\n                  [colSpan]=\"item.span * 2 - 1\">\n                <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n              </td>\n            </ng-container>\n          </ng-container>\n        </tr>\n      </ng-container>\n\n      <ng-container *ngIf=\"nzLayout === 'vertical'\">\n        <!-- Vertical & NOT Bordered -->\n        <ng-container *ngIf=\"!nzBordered\">\n          <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\n            <tr class=\"ant-descriptions-row\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <td class=\"ant-descriptions-item\"\n                    [colSpan]=\"item.span\">\n                  <span class=\"ant-descriptions-item-label\"\n                        [class.ant-descriptions-item-colon]=\"nzColon\">{{ item.title }}</span>\n                </td>\n              </ng-container>\n            </tr>\n            <tr class=\"ant-descriptions-row\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <td class=\"ant-descriptions-item\"\n                    [colSpan]=\"item.span\">\n                  <span class=\"ant-descriptions-item-content\">\n                    <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                  </span>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </ng-container>\n        <!-- Vertical & Bordered -->\n        <ng-container *ngIf=\"nzBordered\">\n          <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\n            <tr class=\"ant-descriptions-row\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <td class=\"ant-descriptions-item-label\"\n                    [colSpan]=\"item.span\">\n                  {{ item.title }}\n                </td>\n              </ng-container>\n            </tr>\n            <tr class=\"ant-descriptions-row\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <td class=\"ant-descriptions-item-content\"\n                    [colSpan]=\"item.span\">\n                  <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n",
                exportAs: 'nzDescriptions',
                preserveWhitespaces: false,
                host: {
                    class: 'ant-descriptions',
                    '[class.ant-descriptions-bordered]': 'nzBordered',
                    '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                    '[class.ant-descriptions-small]': 'nzSize === "small"'
                },
                styles: [`
      nz-descriptions {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzDescriptionsComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: MediaMatcher },
    { type: Platform },
    { type: NzDomEventService }
];
NzDescriptionsComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [NzDescriptionsItemComponent,] }],
    nzBordered: [{ type: Input }],
    nzLayout: [{ type: Input }],
    nzColumn: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzColon: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    tslib_1.__metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, defaultColumnMap),
    tslib_1.__metadata("design:type", Object)
], NzDescriptionsComponent.prototype, "nzColumn", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzDescriptionsComponent.prototype, "nzSize", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzColon", void 0);
if (false) {
    /** @type {?} */
    NzDescriptionsComponent.prototype.items;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzBordered;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzLayout;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColumn;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzSize;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColon;
    /** @type {?} */
    NzDescriptionsComponent.prototype.itemMatrix;
    /** @type {?} */
    NzDescriptionsComponent.prototype.realColumn;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.resize$;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFNBQVMsRUFHVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQ0wsYUFBYSxFQUNiLElBQUksRUFDSixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O01BRXpFLHdCQUF3QixHQUFHLGNBQWM7O01BQ3pDLGdCQUFnQixHQUFzQztJQUMxRCxHQUFHLEVBQUUsQ0FBQztJQUNOLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7Q0FDTjtBQXVCRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7OztJQWlCbEMsWUFDUyxlQUFnQyxFQUMvQixHQUFzQixFQUN0QixZQUEwQixFQUMxQixRQUFrQixFQUNsQixpQkFBb0M7UUFKckMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWxCckMsYUFBUSxHQUF5QixZQUFZLENBQUM7UUFHOUMsWUFBTyxHQUErQixFQUFFLENBQUM7UUFHbEQsZUFBVSxHQUFzQyxFQUFFLENBQUM7UUFFbkQsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVQLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBUW5DLENBQUM7Ozs7O0lBRUosV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVELGtCQUFrQjs7Y0FDVixjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNyQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjtRQUVELEtBQUssQ0FDSCxjQUFjLEVBQ2QsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQ3ZHLElBQUksQ0FBQyxPQUFPLENBQ2I7YUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQjtpQkFDbkIsc0JBQXNCLEVBQUU7aUJBQ3hCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixRQUFROzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsRUFBQyxDQUNsRTtpQkFDQSxTQUFTOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUtPLGFBQWE7O1lBQ2YsVUFBVSxHQUFvQyxFQUFFOztZQUNoRCxLQUFLLEdBQUcsQ0FBQzs7Y0FFUCxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Y0FDN0MsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFOztjQUM1QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07O2NBQ3JCLE1BQU0sR0FBc0MsRUFBRTs7Y0FDOUMsUUFBUTs7O1FBQUcsR0FBRyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNoQixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFBO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ3pCLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2tCQUNmLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUk7WUFFdEQsS0FBSyxJQUFJLElBQUksQ0FBQztZQUVkLHNFQUFzRTtZQUN0RSxrRkFBa0Y7WUFDbEYsd0JBQXdCO1lBQ3hCLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDbkIsSUFBSSxLQUFLLEdBQUcsTUFBTSxFQUFFO29CQUNsQixJQUFJLENBQUMsaUJBQWlCLE1BQU0sMkJBQTJCLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ2pFO2dCQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxRQUFRLEVBQUUsQ0FBQzthQUNaO2lCQUFNLElBQUksQ0FBQyxLQUFLLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxRQUFRLEVBQUUsQ0FBQzthQUNaO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDM0M7U0FDRjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8sVUFBVTs7WUFDWixFQUFFLEdBQWlCLFlBQVksQ0FBQyxFQUFFO1FBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLENBQUMsVUFBa0IsRUFBRSxFQUFFOztrQkFDOUMsTUFBTSxHQUFHLG1CQUFBLFVBQVUsRUFBZ0I7O2tCQUNuQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTztZQUM5RSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxFQUFFLEdBQUcsTUFBTSxDQUFDO2FBQ2I7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7WUFySkYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMHJIQUErQztnQkFDL0MsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLG1DQUFtQyxFQUFFLFlBQVk7b0JBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtvQkFDeEQsZ0NBQWdDLEVBQUUsb0JBQW9CO2lCQUN2RDt5QkFFQzs7OztLQUlDO2FBRUo7Ozs7WUFyQ0MsZUFBZTtZQW5CZixpQkFBaUI7WUFMVixZQUFZO1lBQ1osUUFBUTtZQXdCZixpQkFBaUI7OztvQkFzQ2hCLGVBQWUsU0FBQywyQkFBMkI7eUJBRTNDLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLOztBQUxnRTtJQUE1RCxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDOzsyREFBcUI7QUFFekI7SUFBdkQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDOzt5REFBc0Q7QUFDNUQ7SUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7dURBQTRCO0FBRWhCO0lBQTNELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUU7O3dEQUFrQjs7O0lBUHRGLHdDQUE0Rjs7SUFFNUYsNkNBQTBGOztJQUMxRiwyQ0FBdUQ7O0lBQ3ZELDJDQUFzSDs7SUFDdEgseUNBQXFGOztJQUNyRiwwQ0FBa0Q7O0lBQ2xELDBDQUFzRjs7SUFFdEYsNkNBQW1EOztJQUVuRCw2Q0FBZTs7Ozs7SUFFZiwyQ0FBdUM7Ozs7O0lBQ3ZDLDBDQUFzQzs7SUFHcEMsa0RBQXVDOzs7OztJQUN2QyxzQ0FBOEI7Ozs7O0lBQzlCLCtDQUFrQzs7Ozs7SUFDbEMsMkNBQTBCOzs7OztJQUMxQixvREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgZmluYWxpemUsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIHJlc3BvbnNpdmVNYXAsXG4gIHdhcm4sXG4gIElucHV0Qm9vbGVhbixcbiAgTnpCcmVha3BvaW50LFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56RG9tRXZlbnRTZXJ2aWNlLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wcywgTnpEZXNjcmlwdGlvbnNMYXlvdXQsIE56RGVzY3JpcHRpb25zU2l6ZSB9IGZyb20gJy4vbnotZGVzY3JpcHRpb25zLWRlZmluaXRpb25zJztcbmltcG9ydCB7IE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Rlc2NyaXB0aW9ucyc7XG5jb25zdCBkZWZhdWx0Q29sdW1uTWFwOiB7IFtrZXkgaW4gTnpCcmVha3BvaW50XTogbnVtYmVyIH0gPSB7XG4gIHh4bDogMyxcbiAgeGw6IDMsXG4gIGxnOiAzLFxuICBtZDogMyxcbiAgc206IDIsXG4gIHhzOiAxXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotZGVzY3JpcHRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRlc2NyaXB0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbnpEZXNjcmlwdGlvbnMnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWRlc2NyaXB0aW9ucycsXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLWJvcmRlcmVkXSc6ICduekJvcmRlcmVkJyxcbiAgICAnW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtbWlkZGxlXSc6ICduelNpemUgPT09IFwibWlkZGxlXCInLFxuICAgICdbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1zbWFsbF0nOiAnbnpTaXplID09PSBcInNtYWxsXCInXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWRlc2NyaXB0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekRlc2NyaXB0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8TnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpCb3JkZXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbnpMYXlvdXQ6IE56RGVzY3JpcHRpb25zTGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGRlZmF1bHRDb2x1bW5NYXApIG56Q29sdW1uOiBudW1iZXIgfCB7IFtrZXkgaW4gTnpCcmVha3BvaW50XTogbnVtYmVyIH07XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56RGVzY3JpcHRpb25zU2l6ZTtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpDb2xvbjogYm9vbGVhbjtcblxuICBpdGVtTWF0cml4OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdW10gPSBbXTtcblxuICByZWFsQ29sdW1uID0gMztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekNvbHVtbikge1xuICAgICAgdGhpcy5yZXNpemUkLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGVudENoYW5nZSQgPSB0aGlzLml0ZW1zLmNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLml0ZW1zKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICk7XG5cbiAgICBtZXJnZShcbiAgICAgIGNvbnRlbnRDaGFuZ2UkLFxuICAgICAgY29udGVudENoYW5nZSQucGlwZShzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoLi4udGhpcy5pdGVtcy5tYXAoaSA9PiBpLmlucHV0Q2hhbmdlJCkpLnBpcGUoYXVkaXRUaW1lKDE2KSkpKSxcbiAgICAgIHRoaXMucmVzaXplJFxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnByZXBhcmVNYXRyaXgoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcblxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxuICAgICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUkLm5leHQoKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucmVzaXplJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIHJlbmRlciBtYXRyaXggYWNjb3JkaW5nIHRvIGRlc2NyaXB0aW9uIGl0ZW1zJyBzcGFucy5cbiAgICovXG4gIHByaXZhdGUgcHJlcGFyZU1hdHJpeCgpOiB2b2lkIHtcbiAgICBsZXQgY3VycmVudFJvdzogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXSA9IFtdO1xuICAgIGxldCB3aWR0aCA9IDA7XG5cbiAgICBjb25zdCBjb2x1bW4gPSAodGhpcy5yZWFsQ29sdW1uID0gdGhpcy5nZXRDb2x1bW4oKSk7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgICBjb25zdCBsZW5ndGggPSBpdGVtcy5sZW5ndGg7XG4gICAgY29uc3QgbWF0cml4OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdW10gPSBbXTtcbiAgICBjb25zdCBmbHVzaFJvdyA9ICgpID0+IHtcbiAgICAgIG1hdHJpeC5wdXNoKGN1cnJlbnRSb3cpO1xuICAgICAgY3VycmVudFJvdyA9IFtdO1xuICAgICAgd2lkdGggPSAwO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgICBjb25zdCB7IG56VGl0bGU6IHRpdGxlLCBjb250ZW50LCBuelNwYW46IHNwYW4gfSA9IGl0ZW07XG5cbiAgICAgIHdpZHRoICs9IHNwYW47XG5cbiAgICAgIC8vIElmIHRoZSBsYXN0IGl0ZW0gbWFrZSB0aGUgcm93J3MgbGVuZ3RoIGV4Y2VlZHMgYG56Q29sdW1uYCwgdGhlIGxhc3RcbiAgICAgIC8vIGl0ZW0gc2hvdWxkIHRha2UgYWxsIHRoZSBzcGFjZSBsZWZ0LiBUaGlzIGxvZ2ljIGlzIGltcGxlbWVudGVkIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICAgIC8vIFdhcm4gdXNlciBhYm91dCB0aGF0LlxuICAgICAgaWYgKHdpZHRoID49IGNvbHVtbikge1xuICAgICAgICBpZiAod2lkdGggPiBjb2x1bW4pIHtcbiAgICAgICAgICB3YXJuKGBcIm56Q29sdW1uXCIgaXMgJHtjb2x1bW59IGJ1dCB3ZSBoYXZlIHJvdyBsZW5ndGggJHt3aWR0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Um93LnB1c2goeyB0aXRsZSwgY29udGVudCwgc3BhbjogY29sdW1uIC0gKHdpZHRoIC0gc3BhbikgfSk7XG4gICAgICAgIGZsdXNoUm93KCk7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW46IGNvbHVtbiAtICh3aWR0aCAtIHNwYW4pIH0pO1xuICAgICAgICBmbHVzaFJvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW4gfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVtTWF0cml4ID0gbWF0cml4O1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaE1lZGlhKCk6IE56QnJlYWtwb2ludCB7XG4gICAgbGV0IGJwOiBOekJyZWFrcG9pbnQgPSBOekJyZWFrcG9pbnQubWQ7XG5cbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKGJyZWFrcG9pbnQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgY2FzdEJQID0gYnJlYWtwb2ludCBhcyBOekJyZWFrcG9pbnQ7XG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShyZXNwb25zaXZlTWFwW2Nhc3RCUF0pLm1hdGNoZXM7XG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xuICAgICAgICBicCA9IGNhc3RCUDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBicDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29sdW1uKCk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56Q29sdW1uICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMubnpDb2x1bW5bdGhpcy5tYXRjaE1lZGlhKCldO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm56Q29sdW1uO1xuICB9XG59XG4iXX0=