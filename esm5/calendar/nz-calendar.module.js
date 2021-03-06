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
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DateTableCellComponent } from './date-table-cell.component';
import { DateTableComponent } from './date-table.component';
import { MonthTableComponent } from './month-table.component';
import { NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective } from './nz-calendar-cells';
import { NzCalendarHeaderComponent } from './nz-calendar-header.component';
import { NzCalendarComponent } from './nz-calendar.component';
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    NzCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzCalendarHeaderComponent,
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        DateTableCellComponent,
                        MonthTableComponent
                    ],
                    exports: [
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        MonthTableComponent
                    ],
                    imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]
                },] }
    ];
    return NzCalendarModule;
}());
export { NzCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3pCLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7SUFBQTtJQXVCK0IsQ0FBQzs7Z0JBdkIvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0QixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7aUJBQ2xGOztJQUM4Qix1QkFBQztDQUFBLEFBdkJoQyxJQXVCZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcblxuaW1wb3J0IHsgRGF0ZVRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVGFibGVDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBOekRhdGVDZWxsRGlyZWN0aXZlLFxuICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcbiAgTnpNb250aENlbGxEaXJlY3RpdmUsXG4gIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZVxufSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcbmltcG9ydCB7IE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FsZW5kYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxuICAgIE56RGF0ZUNlbGxEaXJlY3RpdmUsXG4gICAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXG4gICAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlLFxuICAgIERhdGVUYWJsZUNvbXBvbmVudCxcbiAgICBEYXRlVGFibGVDZWxsQ29tcG9uZW50LFxuICAgIE1vbnRoVGFibGVDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE56Q2FsZW5kYXJDb21wb25lbnQsXG4gICAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcbiAgICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcbiAgICBOek1vbnRoQ2VsbERpcmVjdGl2ZSxcbiAgICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUsXG4gICAgRGF0ZVRhYmxlQ29tcG9uZW50LFxuICAgIE1vbnRoVGFibGVDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpSYWRpb01vZHVsZSwgTnpTZWxlY3RNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJNb2R1bGUge31cbiJdfQ==