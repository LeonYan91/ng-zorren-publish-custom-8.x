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
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
import { NzDescriptionsComponent } from './nz-descriptions.component';
var NzDescriptionsModule = /** @class */ (function () {
    function NzDescriptionsModule() {
    }
    NzDescriptionsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, PlatformModule],
                    declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                    exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
                },] }
    ];
    return NzDescriptionsModule;
}());
export { NzDescriptionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEU7SUFBQTtJQUttQyxDQUFDOztnQkFMbkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDO29CQUN0RCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQztvQkFDcEUsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7aUJBQ2hFOztJQUNrQywyQkFBQztDQUFBLEFBTHBDLElBS29DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW056RGVzY3JpcHRpb25zQ29tcG9uZW50LCBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpEZXNjcmlwdGlvbnNDb21wb25lbnQsIE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpEZXNjcmlwdGlvbnNNb2R1bGUge31cbiJdfQ==