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
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuDividerDirective } from './nz-menu-divider.directive';
import { NzMenuGroupComponent } from './nz-menu-group.component';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzMenuDirective } from './nz-menu.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
export class NzMenuModule {
}
NzMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    PlatformModule,
                    NzButtonModule,
                    OverlayModule,
                    NzIconModule,
                    NzNoAnimationModule,
                    NzAddOnModule
                ],
                declarations: [
                    NzMenuDirective,
                    NzMenuItemDirective,
                    NzSubMenuComponent,
                    NzMenuDividerDirective,
                    NzMenuGroupComponent
                ],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQXNCNUQsTUFBTSxPQUFPLFlBQVk7OztZQXBCeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUM7YUFDbEgiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56TWVudURpdmlkZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUtZGl2aWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpNZW51R3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW1lbnUtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LXN1Ym1lbnUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBQbGF0Zm9ybU1vZHVsZSxcbiAgICBOekJ1dHRvbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOek5vQW5pbWF0aW9uTW9kdWxlLFxuICAgIE56QWRkT25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpNZW51RGlyZWN0aXZlLFxuICAgIE56TWVudUl0ZW1EaXJlY3RpdmUsXG4gICAgTnpTdWJNZW51Q29tcG9uZW50LFxuICAgIE56TWVudURpdmlkZXJEaXJlY3RpdmUsXG4gICAgTnpNZW51R3JvdXBDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW056TWVudURpcmVjdGl2ZSwgTnpNZW51SXRlbURpcmVjdGl2ZSwgTnpTdWJNZW51Q29tcG9uZW50LCBOek1lbnVEaXZpZGVyRGlyZWN0aXZlLCBOek1lbnVHcm91cENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpNZW51TW9kdWxlIHt9XG4iXX0=