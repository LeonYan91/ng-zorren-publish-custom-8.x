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
import { ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from './base/nz-tooltip-base-legacy.component';
import { NzTooltipBaseDirective } from './base/nz-tooltip-base.directive';
import { NzToolTipComponent } from './nz-tooltip.component';
export class NzTooltipDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} _tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        super(elementRef, hostView, resolver, renderer, _tooltip, noAnimation);
        this.componentFactory = this.resolver.resolveComponentFactory(NzToolTipComponent);
    }
}
NzTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tooltip]',
                exportAs: 'nzTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
                }
            },] }
];
/** @nocollapse */
NzTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzTooltipBaseComponentLegacy, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTooltipDirective.propDecorators = {
    specificTitle: [{ type: Input, args: ['nzTooltipTitle',] }],
    directiveNameTitle: [{ type: Input, args: ['nz-tooltip',] }],
    specificTrigger: [{ type: Input, args: ['nzTooltipTrigger',] }],
    specificPlacement: [{ type: Input, args: ['nzTooltipPlacement',] }]
};
if (false) {
    /**
     * The title that should have highest priority.
     * @type {?}
     */
    NzTooltipDirective.prototype.specificTitle;
    /**
     * Use the directive's name as the title that have priority in the second place.
     * @type {?}
     */
    NzTooltipDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzTooltipDirective.prototype.specificTrigger;
    /** @type {?} */
    NzTooltipDirective.prototype.specificPlacement;
    /** @type {?} */
    NzTooltipDirective.prototype.componentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBVTVELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBc0I7Ozs7Ozs7OztJQWdCNUQsWUFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLFFBQXVDLEVBQy9CLFdBQW9DO1FBRXhELEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBVnpFLHFCQUFnQixHQUF5QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFXbkgsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSiwwQkFBMEIsRUFBRSwyQkFBMkI7aUJBQ3hEO2FBQ0Y7Ozs7WUFyQkMsVUFBVTtZQUtWLGdCQUFnQjtZQVBoQix3QkFBd0I7WUFNeEIsU0FBUztZQU1GLDRCQUE0Qix1QkFpQ2hDLFFBQVE7WUFuQ0osc0JBQXNCLHVCQW9DMUIsSUFBSSxZQUFJLFFBQVE7Ozs0QkFsQmxCLEtBQUssU0FBQyxnQkFBZ0I7aUNBS3RCLEtBQUssU0FBQyxZQUFZOzhCQUVsQixLQUFLLFNBQUMsa0JBQWtCO2dDQUN4QixLQUFLLFNBQUMsb0JBQW9COzs7Ozs7O0lBUjNCLDJDQUFpRDs7Ozs7SUFLakQsZ0RBQXlEOztJQUV6RCw2Q0FBNkQ7O0lBQzdELCtDQUF1RDs7SUFFdkQsOENBQW1IIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IH0gZnJvbSAnLi9iYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50JztcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgfSBmcm9tICcuL2Jhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotdG9vbHRpcF0nLFxuICBleHBvcnRBczogJ256VG9vbHRpcCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10b29sdGlwLW9wZW5dJzogJ2lzVG9vbHRpcENvbXBvbmVudFZpc2libGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUb29sdGlwRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgdGhhdCBzaG91bGQgaGF2ZSBoaWdoZXN0IHByaW9yaXR5LlxuICAgKi9cbiAgQElucHV0KCduelRvb2x0aXBUaXRsZScpIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGRpcmVjdGl2ZSdzIG5hbWUgYXMgdGhlIHRpdGxlIHRoYXQgaGF2ZSBwcmlvcml0eSBpbiB0aGUgc2Vjb25kIHBsYWNlLlxuICAgKi9cbiAgQElucHV0KCduei10b29sdGlwJykgZGlyZWN0aXZlTmFtZVRpdGxlOiBOelRTVHlwZSB8IG51bGw7XG5cbiAgQElucHV0KCduelRvb2x0aXBUcmlnZ2VyJykgc3BlY2lmaWNUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xuICBASW5wdXQoJ256VG9vbHRpcFBsYWNlbWVudCcpIHNwZWNpZmljUGxhY2VtZW50OiBzdHJpbmc7XG5cbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelRvb2xUaXBDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOelRvb2xUaXBDb21wb25lbnQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIF90b29sdGlwPzogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBfdG9vbHRpcCwgbm9BbmltYXRpb24pO1xuICB9XG59XG4iXX0=