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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PlatformModule } from '@angular/cdk/platform';
import { NzAutosizeDirective } from './nz-autosize.directive';
import { NzInputGroupComponent } from './nz-input-group.component';
import { NzInputDirective } from './nz-input.directive';
var NzInputModule = /** @class */ (function () {
    function NzInputModule() {
    }
    NzInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                    exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                    imports: [CommonModule, NzIconModule, PlatformModule, NzAddOnModule]
                },] }
    ];
    return NzInputModule;
}());
export { NzInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBQUE7SUFLNEIsQ0FBQzs7Z0JBTDVCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQztvQkFDNUUsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLENBQUM7b0JBQ3ZFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQztpQkFDckU7O0lBQzJCLG9CQUFDO0NBQUEsQUFMN0IsSUFLNkI7U0FBaEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBOekF1dG9zaXplRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1hdXRvc2l6ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpJbnB1dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbnotaW5wdXQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTnpJbnB1dERpcmVjdGl2ZSwgTnpJbnB1dEdyb3VwQ29tcG9uZW50LCBOekF1dG9zaXplRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW056SW5wdXREaXJlY3RpdmUsIE56SW5wdXRHcm91cENvbXBvbmVudCwgTnpBdXRvc2l6ZURpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgUGxhdGZvcm1Nb2R1bGUsIE56QWRkT25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXRNb2R1bGUge31cbiJdfQ==