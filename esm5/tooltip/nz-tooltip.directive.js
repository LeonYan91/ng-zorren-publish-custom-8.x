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
import { ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from './base/nz-tooltip-base-legacy.component';
import { NzTooltipBaseDirective } from './base/nz-tooltip-base.directive';
import { NzToolTipComponent } from './nz-tooltip.component';
var NzTooltipDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzTooltipDirective, _super);
    function NzTooltipDirective(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, _tooltip, noAnimation) || this;
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzToolTipComponent);
        return _this;
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
    NzTooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzTooltipBaseComponentLegacy, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTooltipDirective.propDecorators = {
        specificTitle: [{ type: Input, args: ['nzTooltipTitle',] }],
        directiveNameTitle: [{ type: Input, args: ['nz-tooltip',] }],
        specificTrigger: [{ type: Input, args: ['nzTooltipTrigger',] }],
        specificPlacement: [{ type: Input, args: ['nzTooltipPlacement',] }]
    };
    return NzTooltipDirective;
}(NzTooltipBaseDirective));
export { NzTooltipDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUc1RDtJQU93Qyw4Q0FBc0I7SUFnQjVELDRCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsUUFBdUMsRUFDL0IsV0FBb0M7UUFOMUQsWUFRRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxTQUN2RTtRQVhELHNCQUFnQixHQUF5QyxLQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7O0lBV25ILENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixJQUFJLEVBQUU7d0JBQ0osMEJBQTBCLEVBQUUsMkJBQTJCO3FCQUN4RDtpQkFDRjs7OztnQkFyQkMsVUFBVTtnQkFLVixnQkFBZ0I7Z0JBUGhCLHdCQUF3QjtnQkFNeEIsU0FBUztnQkFNRiw0QkFBNEIsdUJBaUNoQyxRQUFRO2dCQW5DSixzQkFBc0IsdUJBb0MxQixJQUFJLFlBQUksUUFBUTs7O2dDQWxCbEIsS0FBSyxTQUFDLGdCQUFnQjtxQ0FLdEIsS0FBSyxTQUFDLFlBQVk7a0NBRWxCLEtBQUssU0FBQyxrQkFBa0I7b0NBQ3hCLEtBQUssU0FBQyxvQkFBb0I7O0lBYzdCLHlCQUFDO0NBQUEsQUFqQ0QsQ0FPd0Msc0JBQXNCLEdBMEI3RDtTQTFCWSxrQkFBa0I7Ozs7OztJQUk3QiwyQ0FBaUQ7Ozs7O0lBS2pELGdEQUF5RDs7SUFFekQsNkNBQTZEOztJQUM3RCwrQ0FBdUQ7O0lBRXZELDhDQUFtSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSB9IGZyb20gJy4vYmFzZS9uei10b29sdGlwLWJhc2UtbGVnYWN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9iYXNlL256LXRvb2x0aXAtYmFzZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICduelRvb2x0aXAnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdG9vbHRpcC1vcGVuXSc6ICdpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhlIHRpdGxlIHRoYXQgc2hvdWxkIGhhdmUgaGlnaGVzdCBwcmlvcml0eS5cbiAgICovXG4gIEBJbnB1dCgnbnpUb29sdGlwVGl0bGUnKSBzcGVjaWZpY1RpdGxlOiBOelRTVHlwZTtcblxuICAvKipcbiAgICogVXNlIHRoZSBkaXJlY3RpdmUncyBuYW1lIGFzIHRoZSB0aXRsZSB0aGF0IGhhdmUgcHJpb3JpdHkgaW4gdGhlIHNlY29uZCBwbGFjZS5cbiAgICovXG4gIEBJbnB1dCgnbnotdG9vbHRpcCcpIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xuXG4gIEBJbnB1dCgnbnpUb29sdGlwVHJpZ2dlcicpIHNwZWNpZmljVHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcbiAgQElucHV0KCduelRvb2x0aXBQbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xuXG4gIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sVGlwQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpUb29sVGlwQ29tcG9uZW50KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBfdG9vbHRpcD86IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgX3Rvb2x0aXAsIG5vQW5pbWF0aW9uKTtcbiAgfVxufVxuIl19