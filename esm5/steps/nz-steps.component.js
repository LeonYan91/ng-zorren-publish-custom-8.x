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
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { toBoolean } from 'ng-zorro-antd/core';
import { NzStepComponent } from './nz-step.component';
var NzStepsComponent = /** @class */ (function () {
    function NzStepsComponent() {
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzType = 'default';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.nzIndexChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.showProcessDot = false;
    }
    Object.defineProperty(NzStepsComponent.prototype, "nzProgressDot", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateChildrenSteps();
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps) {
            this.steps.changes
                .pipe(startWith(null), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateChildrenSteps();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzStepsComponent.prototype.updateChildrenSteps = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps) {
            /** @type {?} */
            var length_1 = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    step.outStatus = _this.nzStatus;
                    step.showProcessDot = _this.showProcessDot;
                    if (_this.customProcessDotTemplate) {
                        step.customProcessTemplate = _this.customProcessDotTemplate;
                    }
                    step.clickable = _this.nzIndexChange.observers.length > 0;
                    step.direction = _this.nzDirection;
                    step.index = index + _this.nzStartIndex;
                    step.currentIndex = _this.nzCurrent;
                    step.last = length_1 === index + 1;
                    step.markForCheck();
                }));
            }));
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = merge.apply(void 0, tslib_1.__spread(this.steps.map((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.click$; })))).subscribe((/**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                return _this.nzIndexChange.emit(index);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzStepsComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a["ant-steps-" + this.nzDirection] = true,
            _a["ant-steps-label-horizontal"] = this.nzDirection === 'horizontal',
            _a["ant-steps-label-vertical"] = (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.nzSize === 'small',
            _a['ant-steps-navigation'] = this.nzType === 'navigation',
            _a);
    };
    NzStepsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-steps',
                    exportAs: 'nzSteps',
                    template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    NzStepsComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [NzStepComponent,] }],
        nzCurrent: [{ type: Input }],
        nzDirection: [{ type: Input }],
        nzLabelPlacement: [{ type: Input }],
        nzType: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStartIndex: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzProgressDot: [{ type: Input }],
        nzIndexChange: [{ type: Output }]
    };
    return NzStepsComponent;
}());
export { NzStepsComponent };
if (false) {
    /** @type {?} */
    NzStepsComponent.prototype.steps;
    /** @type {?} */
    NzStepsComponent.prototype.nzCurrent;
    /** @type {?} */
    NzStepsComponent.prototype.nzDirection;
    /** @type {?} */
    NzStepsComponent.prototype.nzLabelPlacement;
    /** @type {?} */
    NzStepsComponent.prototype.nzType;
    /** @type {?} */
    NzStepsComponent.prototype.nzSize;
    /** @type {?} */
    NzStepsComponent.prototype.nzStartIndex;
    /** @type {?} */
    NzStepsComponent.prototype.nzStatus;
    /** @type {?} */
    NzStepsComponent.prototype.nzIndexChange;
    /**
     * @type {?}
     * @private
     */
    NzStepsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzStepsComponent.prototype.indexChangeSubscription;
    /** @type {?} */
    NzStepsComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepsComponent.prototype.customProcessDotTemplate;
    /** @type {?} */
    NzStepsComponent.prototype.classMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zdGVwcy8iLCJzb3VyY2VzIjpbIm56LXN0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdEQ7SUFBQTtRQVdXLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVyxHQUFvQixZQUFZLENBQUM7UUFDNUMscUJBQWdCLEdBQThCLFlBQVksQ0FBQztRQUMzRCxXQUFNLEdBQTZCLFNBQVMsQ0FBQztRQUM3QyxXQUFNLEdBQWlCLFNBQVMsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQWlCLFNBQVMsQ0FBQztRQWF6QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHdkMsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUE2RXpCLENBQUM7SUE3RkMsc0JBQ0ksMkNBQWE7Ozs7O1FBRGpCLFVBQ2tCLEtBQTZGO1lBQzdHLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNC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QUs7OEJBQ0wsS0FBSzttQ0FDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBRUwsS0FBSztnQ0FXTCxNQUFNOztJQWtGVCx1QkFBQztDQUFBLEFBaEhELElBZ0hDO1NBeEdZLGdCQUFnQjs7O0lBQzNCLGlDQUFvRTs7SUFFcEUscUNBQXVCOztJQUN2Qix1Q0FBcUQ7O0lBQ3JELDRDQUFvRTs7SUFDcEUsa0NBQXNEOztJQUN0RCxrQ0FBMEM7O0lBQzFDLHdDQUEwQjs7SUFDMUIsb0NBQTRDOztJQWE1Qyx5Q0FBOEQ7Ozs7O0lBRTlELG9DQUF1Qzs7Ozs7SUFDdkMsbURBQThDOztJQUU5QywwQ0FBdUI7O0lBQ3ZCLG9EQUF1Rzs7SUFDdkcsb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIE5nQ2xhc3NUeXBlLCBOelNpemVEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOelN0ZXBDb21wb25lbnQgfSBmcm9tICcuL256LXN0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIE56U3RhdHVzVHlwZSA9ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICduei1zdGVwcycsXG4gIGV4cG9ydEFzOiAnbnpTdGVwcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGVwcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTdGVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE56U3RlcENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxOelN0ZXBDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIG56Q3VycmVudCA9IDA7XG4gIEBJbnB1dCgpIG56RGlyZWN0aW9uOiBOekRpcmVjdGlvblR5cGUgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIG56TGFiZWxQbGFjZW1lbnQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIG56VHlwZTogJ2RlZmF1bHQnIHwgJ25hdmlnYXRpb24nID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZURTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpTdGFydEluZGV4ID0gMDtcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56U3RhdHVzVHlwZSA9ICdwcm9jZXNzJztcblxuICBASW5wdXQoKVxuICBzZXQgbnpQcm9ncmVzc0RvdCh2YWx1ZTogYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRydWU7XG4gICAgICB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgc2hvd1Byb2Nlc3NEb3QgPSBmYWxzZTtcbiAgY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+O1xuICBjbGFzc01hcDogTmdDbGFzc1R5cGU7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56U3RhcnRJbmRleCB8fCBjaGFuZ2VzLm56RGlyZWN0aW9uIHx8IGNoYW5nZXMubnpTdGF0dXMgfHwgY2hhbmdlcy5uekN1cnJlbnQpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekRpcmVjdGlvbiB8fCBjaGFuZ2VzLm56UHJvZ3Jlc3NEb3QgfHwgY2hhbmdlcy5uekxhYmVsUGxhY2VtZW50IHx8IGNoYW5nZXMubnpTaXplKSB7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0ZXBzKSB7XG4gICAgICB0aGlzLnN0ZXBzLmNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuU3RlcHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc3RlcC5vdXRTdGF0dXMgPSB0aGlzLm56U3RhdHVzO1xuICAgICAgICAgIHN0ZXAuc2hvd1Byb2Nlc3NEb3QgPSB0aGlzLnNob3dQcm9jZXNzRG90O1xuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSkge1xuICAgICAgICAgICAgc3RlcC5jdXN0b21Qcm9jZXNzVGVtcGxhdGUgPSB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RlcC5jbGlja2FibGUgPSB0aGlzLm56SW5kZXhDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgc3RlcC5kaXJlY3Rpb24gPSB0aGlzLm56RGlyZWN0aW9uO1xuICAgICAgICAgIHN0ZXAuaW5kZXggPSBpbmRleCArIHRoaXMubnpTdGFydEluZGV4O1xuICAgICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gdGhpcy5uekN1cnJlbnQ7XG4gICAgICAgICAgc3RlcC5sYXN0ID0gbGVuZ3RoID09PSBpbmRleCArIDE7XG4gICAgICAgICAgc3RlcC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnN0ZXBzLm1hcChzdGVwID0+IHN0ZXAuY2xpY2skKSkuc3Vic2NyaWJlKGluZGV4ID0+XG4gICAgICAgIHRoaXMubnpJbmRleENoYW5nZS5lbWl0KGluZGV4KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbYGFudC1zdGVwcy0ke3RoaXMubnpEaXJlY3Rpb259YF06IHRydWUsXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsYF06IHRoaXMubnpEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcbiAgICAgIFtgYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsYF06XG4gICAgICAgICh0aGlzLnNob3dQcm9jZXNzRG90IHx8IHRoaXMubnpMYWJlbFBsYWNlbWVudCA9PT0gJ3ZlcnRpY2FsJykgJiYgdGhpcy5uekRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgW2BhbnQtc3RlcHMtZG90YF06IHRoaXMuc2hvd1Byb2Nlc3NEb3QsXG4gICAgICBbJ2FudC1zdGVwcy1zbWFsbCddOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgIFsnYW50LXN0ZXBzLW5hdmlnYXRpb24nXTogdGhpcy5uelR5cGUgPT09ICduYXZpZ2F0aW9uJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==