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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
export class NzTimelineItemComponent {
    /**
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzColor = 'blue';
        this.isLast = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tryUpdateCustomColor();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    tryUpdateCustomColor() {
        /** @type {?} */
        const defaultColors = ['blue', 'red', 'green', 'gray'];
        /** @type {?} */
        const circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.nzColor) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.nzColor);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    }
}
NzTimelineItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline-item, [nz-timeline-item]',
                exportAs: 'nzTimelineItem',
                template: "<li\n  class=\"ant-timeline-item\"\n  [class.ant-timeline-item-right]=\"position === 'right'\"\n  [class.ant-timeline-item-left]=\"position === 'left'\"\n  [class.ant-timeline-item-last]=\"isLast\"\n  #liTemplate>\n  <div class=\"ant-timeline-item-tail\"></div>\n  <div\n    class=\"ant-timeline-item-head\"\n    [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\n    [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\n    [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\n    [class.ant-timeline-item-head-gray]=\"nzColor === 'gray'\"\n    [class.ant-timeline-item-head-custom]=\"!!nzDot\">\n    <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\n  </div>\n  <div class=\"ant-timeline-item-content\">\n    <ng-content></ng-content>\n  </div>\n</li>\n"
            }] }
];
/** @nocollapse */
NzTimelineItemComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NzTimelineItemComponent.propDecorators = {
    liTemplate: [{ type: ViewChild, args: ['liTemplate', { static: true },] }],
    nzColor: [{ type: Input }],
    nzDot: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTimelineItemComponent.prototype.liTemplate;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzColor;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzDot;
    /** @type {?} */
    NzTimelineItemComponent.prototype.isLast;
    /** @type {?} */
    NzTimelineItemComponent.prototype.position;
    /**
     * @type {?}
     * @private
     */
    NzTimelineItemComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTimelineItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWVsaW5lLyIsInNvdXJjZXMiOlsibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQWN2QixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQVFsQyxZQUFvQixRQUFtQixFQUFVLEdBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQU45RCxZQUFPLEdBQXdCLE1BQU0sQ0FBQztRQUcvQyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRzJELENBQUM7Ozs7SUFFM0UsUUFBUTtRQUNOLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLG9CQUFvQjs7Y0FDcEIsYUFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDOztjQUNoRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ3JGLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixnekJBQWdEO2FBQ2pEOzs7O1lBbEJDLFNBQVM7WUFOVCxpQkFBaUI7Ozt5QkEwQmhCLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3NCQUN4QyxLQUFLO29CQUNMLEtBQUs7Ozs7SUFGTiw2Q0FBa0U7O0lBQ2xFLDBDQUErQzs7SUFDL0Msd0NBQTJDOztJQUUzQyx5Q0FBZTs7SUFDZiwyQ0FBcUM7Ozs7O0lBRXpCLDJDQUEyQjs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpUaW1lbGluZU1vZGUgfSBmcm9tICcuL256LXRpbWVsaW5lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE56VGltZWxpbmVJdGVtQ29sb3IgPSAncmVkJyB8ICdibHVlJyB8ICdncmVlbicgfCAnZ3JheScgfCBzdHJpbmc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotdGltZWxpbmUtaXRlbSwgW256LXRpbWVsaW5lLWl0ZW1dJyxcbiAgZXhwb3J0QXM6ICduelRpbWVsaW5lSXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnbGlUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIGxpVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56Q29sb3I6IE56VGltZWxpbmVJdGVtQ29sb3IgPSAnYmx1ZSc7XG4gIEBJbnB1dCgpIG56RG90OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBpc0xhc3QgPSBmYWxzZTtcbiAgcG9zaXRpb246IE56VGltZWxpbmVNb2RlIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekNvbG9yKSB7XG4gICAgICB0aGlzLnRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk7XG4gICAgfVxuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlZmF1bHRDb2xvcnMgPSBbJ2JsdWUnLCAncmVkJywgJ2dyZWVuJywgJ2dyYXknXTtcbiAgICBjb25zdCBjaXJjbGUgPSB0aGlzLmxpVGVtcGxhdGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRpbWVsaW5lLWl0ZW0taGVhZCcpO1xuICAgIGlmIChkZWZhdWx0Q29sb3JzLmluZGV4T2YodGhpcy5uekNvbG9yKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2lyY2xlLCAnYm9yZGVyLWNvbG9yJywgdGhpcy5uekNvbG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==