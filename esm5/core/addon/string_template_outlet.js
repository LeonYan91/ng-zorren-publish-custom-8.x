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
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var NzStringTemplateOutletDirective = /** @class */ (function () {
    function NzStringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    Object.defineProperty(NzStringTemplateOutletDirective.prototype, "nzStringTemplateOutlet", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.recreateView = /**
     * @return {?}
     */
    function () {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.getType = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.shouldRecreateView = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzStringTemplateOutletContext = changes.nzStringTemplateOutletContext, nzStringTemplateOutlet = changes.nzStringTemplateOutlet;
        /** @type {?} */
        var shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                /** @type {?} */
                var previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                /** @type {?} */
                var currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        /** @type {?} */
        var shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    };
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.hasContextShapeChanged = /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    function (ctxChange) {
        var e_1, _a;
        /** @type {?} */
        var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        var currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            try {
                for (var currCtxKeys_1 = tslib_1.__values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                    var propName = currCtxKeys_1_1.value;
                    if (prevCtxKeys.indexOf(propName) === -1) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        }
        else {
            return true;
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.updateExistingContext = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                // tslint:disable-next-line:no-any
                ((/** @type {?} */ ((/** @type {?} */ (this.inputViewRef)).context)))[propName] = this.nzStringTemplateOutletContext[propName];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    };
    NzStringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzStringTemplateOutlet]',
                    exportAs: 'nzStringTemplateOutlet'
                },] }
    ];
    /** @nocollapse */
    NzStringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    NzStringTemplateOutletDirective.propDecorators = {
        nzStringTemplateOutletContext: [{ type: Input }],
        nzStringTemplateOutlet: [{ type: Input }]
    };
    return NzStringTemplateOutletDirective;
}());
export { NzStringTemplateOutletDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultViewRef;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutletContext;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi8iLCJzb3VyY2VzIjpbInN0cmluZ190ZW1wbGF0ZV9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBSUwsV0FBVyxFQUNYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQW1HRSx5Q0FBb0IsYUFBK0IsRUFBVSxlQUFrQztRQUEzRSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7O1FBNUZ2RixrQkFBYSxHQUE0QixJQUFJLENBQUM7UUFDOUMsaUJBQVksR0FBaUMsSUFBSSxDQUFDO1FBQ2xELG1CQUFjLEdBQWlDLElBQUksQ0FBQzs7UUFHbkQsa0NBQTZCLEdBQWUsSUFBSSxDQUFDO0lBdUZ3QyxDQUFDO0lBckZuRyxzQkFFSSxtRUFBc0I7Ozs7O1FBRjFCLFVBRTJCLEtBQWdDO1lBQ3pELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFFRCxzREFBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUN6RCxJQUFJLENBQUMsZUFBZSxFQUNwQixJQUFJ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LFlBQVksRUFBRTtZQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyw2QkFBNkIsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7SUFDSCxDQUFDOztnQkFuSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ25DOzs7O2dCQU5DLGdCQUFnQjtnQkFEaEIsV0FBVzs7O2dEQWdCVixLQUFLO3lDQUVMLEtBQUs7O0lBc0dSLHNDQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0FoSFksK0JBQStCOzs7Ozs7SUFDMUMscURBQTRCOzs7OztJQUU1Qix3REFBc0Q7Ozs7O0lBQ3RELHVEQUEwRDs7Ozs7SUFDMUQseURBQTREOztJQUc1RCx3RUFBMEQ7Ozs7O0lBdUY5Qyx3REFBdUM7Ozs7O0lBQUUsMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpTdHJpbmdUZW1wbGF0ZU91dGxldF0nLFxuICBleHBvcnRBczogJ256U3RyaW5nVGVtcGxhdGVPdXRsZXQnXG59KVxuZXhwb3J0IGNsYXNzIE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIGlzVGVtcGxhdGU6IGJvb2xlYW47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBpbnB1dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgaW5wdXRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWZhdWx0Vmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dDogYW55IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpTdHJpbmdUZW1wbGF0ZU91dGxldCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5pbnB1dFRlbXBsYXRlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJlY3JlYXRlVmlldygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNUZW1wbGF0ZSkge1xuICAgICAgLyoqIHVzZSBkZWZhdWx0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgc3RyaW5nICoqL1xuICAgICAgaWYgKCF0aGlzLmRlZmF1bHRWaWV3UmVmKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRUZW1wbGF0ZSkge1xuICAgICAgICAgIHRoaXMuZGVmYXVsdFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VGVtcGxhdGUsXG4gICAgICAgICAgICB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiogdXNlIGlucHV0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgdGVtcGxhdGVSZWYgKiovXG4gICAgICBpZiAoIXRoaXMuaW5wdXRWaWV3UmVmKSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0VGVtcGxhdGUpIHtcbiAgICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgICB0aGlzLmlucHV0VGVtcGxhdGUsXG4gICAgICAgICAgICB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBnZXRUeXBlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KTogJ3RlbXBsYXRlJyB8ICdzdHJpbmcnIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgcmV0dXJuICd0ZW1wbGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnc3RyaW5nJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCwgbnpTdHJpbmdUZW1wbGF0ZU91dGxldCB9ID0gY2hhbmdlcztcbiAgICBsZXQgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSBmYWxzZTtcbiAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldCkge1xuICAgICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNPdXRsZXRUeXBlID0gdGhpcy5nZXRUeXBlKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPdXRsZXRUeXBlID0gdGhpcy5nZXRUeXBlKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuY3VycmVudFZhbHVlKTtcbiAgICAgICAgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSAhKHByZXZpb3VzT3V0bGV0VHlwZSA9PT0gJ3N0cmluZycgJiYgY3VycmVudE91dGxldFR5cGUgPT09ICdzdHJpbmcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkQ29udGV4dFJlY3JlYXRlID1cbiAgICAgIG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0ICYmIHRoaXMuaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XG4gICAgcmV0dXJuIHNob3VsZENvbnRleHRSZWNyZWF0ZSB8fCBzaG91bGRPdXRsZXRSZWNyZWF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChjdHhDaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHByZXZDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLnByZXZpb3VzVmFsdWUgfHwge30pO1xuICAgIGNvbnN0IGN1cnJDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLmN1cnJlbnRWYWx1ZSB8fCB7fSk7XG5cbiAgICBpZiAocHJldkN0eEtleXMubGVuZ3RoID09PSBjdXJyQ3R4S2V5cy5sZW5ndGgpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgY3VyckN0eEtleXMpIHtcbiAgICAgICAgaWYgKHByZXZDdHhLZXlzLmluZGV4T2YocHJvcE5hbWUpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSB1cGRhdGVFeGlzdGluZ0NvbnRleHQoY3R4OiBhbnkpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKGN0eCkpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICh0aGlzLmlucHV0Vmlld1JlZiEuY29udGV4dCBhcyBhbnkpW3Byb3BOYW1lXSA9IHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBkZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCByZWNyZWF0ZVZpZXcgPSB0aGlzLnNob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzKTtcbiAgICBpZiAocmVjcmVhdGVWaWV3KSB7XG4gICAgICBpZiAodGhpcy52aWV3Q29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWNyZWF0ZVZpZXcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaW5wdXRWaWV3UmVmICYmIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFeGlzdGluZ0NvbnRleHQodGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=