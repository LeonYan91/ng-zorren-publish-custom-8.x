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
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { valueFunctionProp, CandyDate, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
/**
 * The base picker for header panels, current support: Year/Month
 */
var HeaderPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderPickerComponent, _super);
    function HeaderPickerComponent(i18n, cdr, dateHelper, noAnimation) {
        return _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
    }
    /**
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        var allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    HeaderPickerComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else {
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    };
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    HeaderPickerComponent.prototype.onChooseValue = /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    function (mode, value) {
        if (this.endPanelMode === mode) {
            _super.prototype.onValueChange.call(this, value);
            this.closeOverlay();
        }
    };
    /**
     * @param {?} open
     * @return {?}
     */
    HeaderPickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        if (!open) {
            this.cleanUp();
        }
        this.nzOnOpenChange.emit(open);
    };
    // Restore some initial props to let open as new in next time
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    HeaderPickerComponent.prototype.cleanUp = 
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    function () {
        this.panelMode = this.endPanelMode;
    };
    HeaderPickerComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                }] }
    ];
    /** @nocollapse */
    HeaderPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
    HeaderPickerComponent.propDecorators = {
        nzPlaceHolder: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzDefaultValue: [{ type: Input }],
        nzFormat: [{ type: Input }]
    };
    return HeaderPickerComponent;
}(AbstractPickerComponent));
export { HeaderPickerComponent };
if (false) {
    /** @type {?} */
    HeaderPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzDefaultValue;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzFormat;
    /** @type {?} */
    HeaderPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.panelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.extraFooter;
    /**
     * @type {?}
     * @private
     */
    HeaderPickerComponent.prototype.supportPanels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiaGVhZGVyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWdCLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBT3RFO0lBRzJDLGlEQUF1QjtJQWFoRSwrQkFDRSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUM3QixXQUFvQztlQUVwQyxrQkFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7WUFFN0IsZUFBZSxHQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Ozs7SUFFRCwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksT0FBTyxDQUFDLG1CQUFtQixFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDOzs7OztJQUVELGlEQUFpQjs7OztJQUFqQixVQUFrQixJQUFlO1FBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTTtZQUNMLHFIQUFxSDtZQUNySCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7Ozs7SUFFRCw2Q0FBYTs7Ozs7SUFBYixVQUFjLElBQXdCLEVBQUUsS0FBZ0I7UUFDdEQsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUM5QixpQkFBTSxhQUFhLFlBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsSUFBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDZEQUE2RDs7Ozs7O0lBQ3JELHVDQUFPOzs7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQVgyQixhQUFhO2dCQUhoQyxpQkFBaUI7Z0JBR2pCLGlCQUFpQjtnQkFEMkIsc0JBQXNCOzs7Z0NBY3hFLEtBQUs7c0NBRUwsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7O0lBOERSLDRCQUFDO0NBQUEsQUF0RUQsQ0FHMkMsdUJBQXVCLEdBbUVqRTtTQW5FWSxxQkFBcUI7OztJQUNoQyw4Q0FBK0I7O0lBRS9CLG9EQUF1RTs7SUFDdkUsK0NBQW1DOztJQUNuQyx5Q0FBMEI7O0lBRTFCLDZDQUFpQzs7SUFDakMsMENBQXFCOztJQUNyQiw0Q0FBd0M7Ozs7O0lBRXhDLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wLCBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBhbmVsTW9kZSB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIHBpY2tlciBmb3IgaGVhZGVyIHBhbmVscywgY3VycmVudCBzdXBwb3J0OiBZZWFyL01vbnRoXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlOiBDYW5keURhdGU7XG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmc7IC8vIFtDYW5tcGxlbWVudGVkIGJ5IHN1YiBjbGFzc10gVGhlIG91dHB1dCBmb3JtYXRcblxuICBlbmRQYW5lbE1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbDsgLy8gW0ltcGxlbWVudGVkIGJ5IHN1YiBjbGFzc10gVGhlIGZpbmFsIHBhbmVsIGZvciBwaWNraW5nIGEgZGF0ZVxuICBwYW5lbE1vZGU6IFBhbmVsTW9kZTsgLy8gQ3VycmVudCBwYW5lbCBtb2RlXG4gIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcblxuICBwcml2YXRlIHN1cHBvcnRQYW5lbHM6IFBhbmVsTW9kZVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGkxOG46IE56STE4blNlcnZpY2UsXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcbiAgICBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcblxuICAgIGNvbnN0IGFsbEhlYWRlclBhbmVsczogUGFuZWxNb2RlW10gPSBbJ2RlY2FkZScsICd5ZWFyJywgJ21vbnRoJ107XG4gICAgdGhpcy5zdXBwb3J0UGFuZWxzID0gYWxsSGVhZGVyUGFuZWxzLnNsaWNlKDAsIGFsbEhlYWRlclBhbmVscy5pbmRleE9mKHRoaXMuZW5kUGFuZWxNb2RlKSArIDEpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgaWYgKGNoYW5nZXMubnpSZW5kZXJFeHRyYUZvb3Rlcikge1xuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMubnpSZW5kZXJFeHRyYUZvb3Rlcik7XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogUGFuZWxNb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydFBhbmVscy5pbmRleE9mKG1vZGUpID4gLTEpIHtcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2luY2UgdGhlIGRlZmF1bHQgXCJjbGljayB5ZWFyXCIgbG9naWMgY2FuIGJlIFwieWVhciBwYW5lbFwiIC0+IFwiZGF0ZSBwYW5lbFwiLCB3ZSBuZWVkIGZvcmNlIHRvIHRoZSBlbmQgcGFuZWwgb3RoZXJ3aXNlXG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuZW5kUGFuZWxNb2RlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hvb3NlVmFsdWUobW9kZTogU3VwcG9ydEhlYWRlclBhbmVsLCB2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZW5kUGFuZWxNb2RlID09PSBtb2RlKSB7XG4gICAgICBzdXBlci5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghb3Blbikge1xuICAgICAgdGhpcy5jbGVhblVwKCk7XG4gICAgfVxuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcbiAgfVxuXG4gIC8vIFJlc3RvcmUgc29tZSBpbml0aWFsIHByb3BzIHRvIGxldCBvcGVuIGFzIG5ldyBpbiBuZXh0IHRpbWVcbiAgcHJpdmF0ZSBjbGVhblVwKCk6IHZvaWQge1xuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3VwcG9ydEhlYWRlclBhbmVsID0gJ3llYXInIHwgJ21vbnRoJztcbiJdfQ==