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
import { NzResultNotFoundComponent } from './partial/not-found';
import { NzResultServerErrorComponent } from './partial/server-error.component';
import { NzResultUnauthorizedComponent } from './partial/unauthorized';
import { NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective } from './nz-result-cells';
import { NzResultComponent } from './nz-result.component';
/** @type {?} */
const partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
/** @type {?} */
const cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
export class NzResultModule {
}
NzResultModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule],
                declarations: [NzResultComponent, ...cellDirectives, ...partial],
                exports: [NzResultComponent, ...cellDirectives]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkUsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLHlCQUF5QixFQUN6QixzQkFBc0IsRUFDdkIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7TUFFcEQsT0FBTyxHQUFHLENBQUMseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLENBQUM7O01BRWxHLGNBQWMsR0FBRztJQUNyQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsc0JBQXNCO0NBQ3ZCO0FBT0QsTUFBTSxPQUFPLGNBQWM7OztZQUwxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7Z0JBQ3BELFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsY0FBYyxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUNoRSxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLGNBQWMsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQgeyBOelJlc3VsdE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL25vdC1mb3VuZCc7XG5pbXBvcnQgeyBOelJlc3VsdFNlcnZlckVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL3NlcnZlci1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSZXN1bHRVbmF1dGhvcml6ZWRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvdW5hdXRob3JpemVkJztcblxuaW1wb3J0IHtcbiAgTnpSZXN1bHRDb250ZW50RGlyZWN0aXZlLFxuICBOelJlc3VsdEV4dHJhRGlyZWN0aXZlLFxuICBOelJlc3VsdEljb25EaXJlY3RpdmUsXG4gIE56UmVzdWx0U3VidGl0bGVEaXJlY3RpdmUsXG4gIE56UmVzdWx0VGl0bGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9uei1yZXN1bHQtY2VsbHMnO1xuaW1wb3J0IHsgTnpSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL256LXJlc3VsdC5jb21wb25lbnQnO1xuXG5jb25zdCBwYXJ0aWFsID0gW056UmVzdWx0Tm90Rm91bmRDb21wb25lbnQsIE56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQsIE56UmVzdWx0VW5hdXRob3JpemVkQ29tcG9uZW50XTtcblxuY29uc3QgY2VsbERpcmVjdGl2ZXMgPSBbXG4gIE56UmVzdWx0Q29udGVudERpcmVjdGl2ZSxcbiAgTnpSZXN1bHRFeHRyYURpcmVjdGl2ZSxcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxuICBOelJlc3VsdFN1YnRpdGxlRGlyZWN0aXZlLFxuICBOelJlc3VsdFRpdGxlRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOekljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOelJlc3VsdENvbXBvbmVudCwgLi4uY2VsbERpcmVjdGl2ZXMsIC4uLnBhcnRpYWxdLFxuICBleHBvcnRzOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzXVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc3VsdE1vZHVsZSB7fVxuIl19