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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'collapse';
export class NzCollapseComponent {
    /**
     * @param {?} nzConfigService
     */
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item !== collapse))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            }));
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
}
NzCollapseComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\n  <ng-content></ng-content>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      nz-collapse {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCollapseComponent.ctorParameters = () => [
    { type: NzConfigService }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: Input }],
    nzBordered: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzBordered", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCollapseComponent.prototype.listOfNzCollapsePanelComponent;
    /** @type {?} */
    NzCollapseComponent.prototype.nzAccordion;
    /** @type {?} */
    NzCollapseComponent.prototype.nzBordered;
    /** @type {?} */
    NzCollapseComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFJekUsd0JBQXdCLEdBQUcsVUFBVTtBQWdCM0MsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUs5QixZQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKM0MsbUNBQThCLEdBQStCLEVBQUUsQ0FBQztJQUlsQixDQUFDOzs7OztJQUV2RCxRQUFRLENBQUMsS0FBK0I7UUFDdEMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUErQjtRQUN6QyxJQUFJLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsUUFBa0M7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUMsOEJBQThCO2lCQUNoQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFDO2lCQUNqQyxPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUNELFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNkhBQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7eUJBRW5DOzs7O0tBSUM7YUFFSjs7OztZQW5Cc0IsZUFBZTs7OzBCQXNCbkMsS0FBSzt5QkFDTCxLQUFLOztBQURnRTtJQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOzt3REFBc0I7QUFDdEI7SUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRTs7dURBQXFCOzs7Ozs7SUFGekYsNkRBQXdFOztJQUN4RSwwQ0FBMkY7O0lBQzNGLHlDQUF5Rjs7SUFFN0UsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvbGxhcHNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY29sbGFwc2UnLFxuICBleHBvcnRBczogJ256Q29sbGFwc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotY29sbGFwc2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xsYXBzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgbGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50OiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnRbXSA9IFtdO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpBY2NvcmRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxuXG4gIGFkZFBhbmVsKHZhbHVlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZVBhbmVsKHZhbHVlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5zcGxpY2UodGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuaW5kZXhPZih2YWx1ZSksIDEpO1xuICB9XG5cbiAgY2xpY2soY29sbGFwc2U6IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QWNjb3JkaW9uICYmICFjb2xsYXBzZS5uekFjdGl2ZSkge1xuICAgICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnRcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGNvbGxhcHNlKVxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5uekFjdGl2ZSkge1xuICAgICAgICAgICAgaXRlbS5uekFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaXRlbS5uekFjdGl2ZUNoYW5nZS5lbWl0KGl0ZW0ubnpBY3RpdmUpO1xuICAgICAgICAgICAgaXRlbS5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb2xsYXBzZS5uekFjdGl2ZSA9ICFjb2xsYXBzZS5uekFjdGl2ZTtcbiAgICBjb2xsYXBzZS5uekFjdGl2ZUNoYW5nZS5lbWl0KGNvbGxhcHNlLm56QWN0aXZlKTtcbiAgfVxufVxuIl19