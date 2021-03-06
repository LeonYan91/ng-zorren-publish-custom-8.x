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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultNotFoundComponent } from './partial/not-found';
import { NzResultServerErrorComponent } from './partial/server-error.component';
import { NzResultUnauthorizedComponent } from './partial/unauthorized';
import { NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective } from './nz-result-cells';
import { NzResultComponent } from './nz-result.component';
/** @type {?} */
var partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
/** @type {?} */
var cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
var NzResultModule = /** @class */ (function () {
    function NzResultModule() {
    }
    NzResultModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, NzIconModule],
                    declarations: tslib_1.__spread([NzResultComponent], cellDirectives, partial),
                    exports: tslib_1.__spread([NzResultComponent], cellDirectives)
                },] }
    ];
    return NzResultModule;
}());
export { NzResultModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUNyQix5QkFBeUIsRUFDekIsc0JBQXNCLEVBQ3ZCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBRXBELE9BQU8sR0FBRyxDQUFDLHlCQUF5QixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixDQUFDOztJQUVsRyxjQUFjLEdBQUc7SUFDckIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHNCQUFzQjtDQUN2QjtBQUVEO0lBQUE7SUFLNkIsQ0FBQzs7Z0JBTDdCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztvQkFDcEQsWUFBWSxvQkFBRyxpQkFBaUIsR0FBSyxjQUFjLEVBQUssT0FBTyxDQUFDO29CQUNoRSxPQUFPLG9CQUFHLGlCQUFpQixHQUFLLGNBQWMsQ0FBQztpQkFDaEQ7O0lBQzRCLHFCQUFDO0NBQUEsQUFMOUIsSUFLOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQgeyBOelJlc3VsdE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL25vdC1mb3VuZCc7XG5pbXBvcnQgeyBOelJlc3VsdFNlcnZlckVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL3NlcnZlci1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSZXN1bHRVbmF1dGhvcml6ZWRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvdW5hdXRob3JpemVkJztcblxuaW1wb3J0IHtcbiAgTnpSZXN1bHRDb250ZW50RGlyZWN0aXZlLFxuICBOelJlc3VsdEV4dHJhRGlyZWN0aXZlLFxuICBOelJlc3VsdEljb25EaXJlY3RpdmUsXG4gIE56UmVzdWx0U3VidGl0bGVEaXJlY3RpdmUsXG4gIE56UmVzdWx0VGl0bGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9uei1yZXN1bHQtY2VsbHMnO1xuaW1wb3J0IHsgTnpSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL256LXJlc3VsdC5jb21wb25lbnQnO1xuXG5jb25zdCBwYXJ0aWFsID0gW056UmVzdWx0Tm90Rm91bmRDb21wb25lbnQsIE56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQsIE56UmVzdWx0VW5hdXRob3JpemVkQ29tcG9uZW50XTtcblxuY29uc3QgY2VsbERpcmVjdGl2ZXMgPSBbXG4gIE56UmVzdWx0Q29udGVudERpcmVjdGl2ZSxcbiAgTnpSZXN1bHRFeHRyYURpcmVjdGl2ZSxcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxuICBOelJlc3VsdFN1YnRpdGxlRGlyZWN0aXZlLFxuICBOelJlc3VsdFRpdGxlRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOekljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOelJlc3VsdENvbXBvbmVudCwgLi4uY2VsbERpcmVjdGl2ZXMsIC4uLnBhcnRpYWxdLFxuICBleHBvcnRzOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzXVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc3VsdE1vZHVsZSB7fVxuIl19