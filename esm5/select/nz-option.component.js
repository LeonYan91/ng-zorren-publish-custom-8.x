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
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
var NzOptionComponent = /** @class */ (function () {
    function NzOptionComponent() {
        this.changes = new Subject();
        this.nzDisabled = false;
        this.nzHide = false;
        this.nzCustomContent = false;
    }
    /**
     * @return {?}
     */
    NzOptionComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.changes.next();
    };
    NzOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-option',
                    exportAs: 'nzOption',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
                }] }
    ];
    NzOptionComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
        nzLabel: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzHide: [{ type: Input }],
        nzCustomContent: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzHide", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzCustomContent", void 0);
    return NzOptionComponent;
}());
export { NzOptionComponent };
if (false) {
    /** @type {?} */
    NzOptionComponent.prototype.changes;
    /** @type {?} */
    NzOptionComponent.prototype.template;
    /** @type {?} */
    NzOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzOptionComponent.prototype.nzHide;
    /** @type {?} */
    NzOptionComponent.prototype.nzCustomContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFBQTtRQVFFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBS0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFLbkQsQ0FBQzs7OztJQUhDLHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0Msc0VBQXlDO2lCQUMxQzs7OzJCQUdFLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUN4QyxLQUFLOzBCQUVMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO2tDQUNMLEtBQUs7O0lBRm1CO1FBQWYsWUFBWSxFQUFFOzt5REFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7O3FEQUFnQjtJQUNmO1FBQWYsWUFBWSxFQUFFOzs4REFBeUI7SUFLbkQsd0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWJZLGlCQUFpQjs7O0lBQzVCLG9DQUF3Qjs7SUFDeEIscUNBQXVFOztJQUN2RSxvQ0FBeUI7O0lBRXpCLG9DQUFzQjs7SUFDdEIsdUNBQTRDOztJQUM1QyxtQ0FBd0M7O0lBQ3hDLDRDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotb3B0aW9uJyxcbiAgZXhwb3J0QXM6ICduek9wdGlvbicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGNoYW5nZXMgPSBuZXcgU3ViamVjdCgpO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekxhYmVsOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgbnpWYWx1ZTogYW55O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekN1c3RvbUNvbnRlbnQgPSBmYWxzZTtcblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xuICB9XG59XG4iXX0=