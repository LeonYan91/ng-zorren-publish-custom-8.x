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
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';
import { NzAnchorLinkComponent } from './nz-anchor-link.component';
import { NzAnchorComponent } from './nz-anchor.component';
var NzAnchorModule = /** @class */ (function () {
    function NzAnchorModule() {
    }
    NzAnchorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzAnchorComponent, NzAnchorLinkComponent],
                    exports: [NzAnchorComponent, NzAnchorLinkComponent],
                    imports: [CommonModule, NzAffixModule, PlatformModule],
                    providers: [SCROLL_SERVICE_PROVIDER]
                },] }
    ];
    return NzAnchorModule;
}());
export { NzAnchorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUFBQTtJQU02QixDQUFDOztnQkFON0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO29CQUN4RCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztvQkFDbkQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7b0JBQ3RELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNyQzs7SUFDNEIscUJBQUM7Q0FBQSxBQU45QixJQU04QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56QWZmaXhNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2FmZml4JztcbmltcG9ydCB7IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpBbmNob3JDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOekFuY2hvckNvbXBvbmVudCwgTnpBbmNob3JMaW5rQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW056QW5jaG9yQ29tcG9uZW50LCBOekFuY2hvckxpbmtDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFmZml4TW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1NDUk9MTF9TRVJWSUNFX1BST1ZJREVSXVxufSlcbmV4cG9ydCBjbGFzcyBOekFuY2hvck1vZHVsZSB7fVxuIl19