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
var NzInputDirective = /** @class */ (function () {
    function NzInputDirective(renderer, elementRef) {
        this.nzSize = 'default';
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    NzInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-input]',
                    exportAs: 'nzInput',
                    host: {
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "nzSize === 'large'",
                        '[class.ant-input-sm]': "nzSize === 'small'"
                    }
                },] }
    ];
    /** @nocollapse */
    NzInputDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzInputDirective.propDecorators = {
        nzSize: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputDirective.prototype, "disabled", void 0);
    return NzInputDirective;
}());
export { NzInputDirective };
if (false) {
    /** @type {?} */
    NzInputDirective.prototype.nzSize;
    /** @type {?} */
    NzInputDirective.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFFakU7SUFhRSwwQkFBWSxRQUFtQixFQUFFLFVBQXNCO1FBSDlDLFdBQU0sR0FBa0IsU0FBUyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLElBQUksRUFBRTt3QkFDSiw0QkFBNEIsRUFBRSxVQUFVO3dCQUN4QyxzQkFBc0IsRUFBRSxvQkFBb0I7d0JBQzVDLHNCQUFzQixFQUFFLG9CQUFvQjtxQkFDN0M7aUJBQ0Y7Ozs7Z0JBWHNDLFNBQVM7Z0JBQTVCLFVBQVU7Ozt5QkFhM0IsS0FBSzsyQkFDTCxLQUFLOztJQUFtQjtRQUFmLFlBQVksRUFBRTs7c0RBQWtCO0lBSzVDLHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FQWSxnQkFBZ0I7OztJQUMzQixrQ0FBMkM7O0lBQzNDLG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1pbnB1dF0nLFxuICBleHBvcnRBczogJ256SW5wdXQnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1sZ10nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXREaXJlY3RpdmUge1xuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtaW5wdXQnKTtcbiAgfVxufVxuIl19