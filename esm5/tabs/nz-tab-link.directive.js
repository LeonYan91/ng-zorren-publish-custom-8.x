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
import { Directive, Optional, Self } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
/**
 * This component is for catching `routerLink` directive.
 */
var NzTabLinkDirective = /** @class */ (function () {
    function NzTabLinkDirective(routerLink, routerLinkWithHref) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
    NzTabLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[nz-tab-link]',
                    exportAs: 'nzTabLink'
                },] }
    ];
    /** @nocollapse */
    NzTabLinkDirective.ctorParameters = function () { return [
        { type: RouterLink, decorators: [{ type: Optional }, { type: Self }] },
        { type: RouterLinkWithHref, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    return NzTabLinkDirective;
}());
export { NzTabLinkDirective };
if (false) {
    /** @type {?} */
    NzTabLinkDirective.prototype.routerLink;
    /** @type {?} */
    NzTabLinkDirective.prototype.routerLinkWithHref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUtqRTtJQUtFLDRCQUM2QixVQUF1QixFQUN2QixrQkFBdUM7UUFEdkMsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO0lBQ2pFLENBQUM7O2dCQVJMLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBUlEsVUFBVSx1QkFXZCxRQUFRLFlBQUksSUFBSTtnQkFYQSxrQkFBa0IsdUJBWWxDLFFBQVEsWUFBSSxJQUFJOztJQUVyQix5QkFBQztDQUFBLEFBVEQsSUFTQztTQUxZLGtCQUFrQjs7O0lBRTNCLHdDQUFrRDs7SUFDbEQsZ0RBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgT3B0aW9uYWwsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgZm9yIGNhdGNoaW5nIGByb3V0ZXJMaW5rYCBkaXJlY3RpdmUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FbbnotdGFiLWxpbmtdJyxcbiAgZXhwb3J0QXM6ICduelRhYkxpbmsnXG59KVxuZXhwb3J0IGNsYXNzIE56VGFiTGlua0RpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIHJvdXRlckxpbms/OiBSb3V0ZXJMaW5rLFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIHJvdXRlckxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmtXaXRoSHJlZlxuICApIHt9XG59XG4iXX0=