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
import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzContentComponent } from './nz-content.component';
import { NzFooterComponent } from './nz-footer.component';
import { NzHeaderComponent } from './nz-header.component';
import { NzLayoutComponent } from './nz-layout.component';
import { NzSiderComponent } from './nz-sider.component';
export class NzLayoutModule {
}
NzLayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                imports: [CommonModule, NzIconModule, LayoutModule, PlatformModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbGF5b3V0LyIsInNvdXJjZXMiOlsibnotbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT3hELE1BQU0sT0FBTyxjQUFjOzs7WUFMMUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDO2dCQUM3RyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDeEcsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2FBQ3BFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbnotY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL256LWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL256LWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2lkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTnpMYXlvdXRDb21wb25lbnQsIE56SGVhZGVyQ29tcG9uZW50LCBOekNvbnRlbnRDb21wb25lbnQsIE56Rm9vdGVyQ29tcG9uZW50LCBOelNpZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW056TGF5b3V0Q29tcG9uZW50LCBOekhlYWRlckNvbXBvbmVudCwgTnpDb250ZW50Q29tcG9uZW50LCBOekZvb3RlckNvbXBvbmVudCwgTnpTaWRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTGF5b3V0TW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpMYXlvdXRNb2R1bGUge31cbiJdfQ==