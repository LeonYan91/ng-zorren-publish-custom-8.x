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
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
export class NzCardGridDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.nzHoverable = true;
        renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
    }
}
NzCardGridDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-card-grid]',
                exportAs: 'nzCardGrid',
                host: {
                    '[class.ant-card-hoverable]': 'nzHoverable'
                }
            },] }
];
/** @nocollapse */
NzCardGridDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzCardGridDirective.propDecorators = {
    nzHoverable: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCardGridDirective.prototype, "nzHoverable", void 0);
if (false) {
    /** @type {?} */
    NzCardGridDirective.prototype.nzHoverable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1ncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbIm56LWNhcmQtZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFTbEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFFOUIsWUFBWSxVQUFzQixFQUFFLFFBQW1CO1FBRDlCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRW5ELFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRTtvQkFDSiw0QkFBNEIsRUFBRSxhQUFhO2lCQUM1QzthQUNGOzs7O1lBVG1CLFVBQVU7WUFBUyxTQUFTOzs7MEJBVzdDLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOzt3REFBNkI7OztJQUFyRCwwQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotY2FyZC1ncmlkXScsXG4gIGV4cG9ydEFzOiAnbnpDYXJkR3JpZCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJkLWhvdmVyYWJsZV0nOiAnbnpIb3ZlcmFibGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJkR3JpZERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhvdmVyYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FyZC1ncmlkJyk7XG4gIH1cbn1cbiJdfQ==