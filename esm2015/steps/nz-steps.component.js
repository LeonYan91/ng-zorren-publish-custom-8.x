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
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { toBoolean } from 'ng-zorro-antd/core';
import { NzStepComponent } from './nz-step.component';
export class NzStepsComponent {
    constructor() {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzProgressDot(value) {
        if (value instanceof TemplateRef) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = toBoolean(value);
        }
        this.updateChildrenSteps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.steps) {
            this.steps.changes
                .pipe(startWith(null), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.updateChildrenSteps();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateChildrenSteps() {
        if (this.steps) {
            /** @type {?} */
            const length = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    step.outStatus = this.nzStatus;
                    step.showProcessDot = this.showProcessDot;
                    if (this.customProcessDotTemplate) {
                        step.customProcessTemplate = this.customProcessDotTemplate;
                    }
                    step.clickable = this.nzIndexChange.observers.length > 0;
                    step.direction = this.nzDirection;
                    step.index = index + this.nzStartIndex;
                    step.currentIndex = this.nzCurrent;
                    step.last = length === index + 1;
                    step.markForCheck();
                }));
            }));
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = merge(...this.steps.map((/**
             * @param {?} step
             * @return {?}
             */
            step => step.click$))).subscribe((/**
             * @param {?} index
             * @return {?}
             */
            index => this.nzIndexChange.emit(index)));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [`ant-steps-${this.nzDirection}`]: true,
            [`ant-steps-label-horizontal`]: this.nzDirection === 'horizontal',
            [`ant-steps-label-vertical`]: (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.nzSize === 'small',
            ['ant-steps-navigation']: this.nzType === 'navigation'
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zdGVwcy8iLCJzb3VyY2VzIjpbIm56LXN0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsU0FBUyxFQUE2QixNQUFNLG9CQUFvQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWF0RCxNQUFNLE9BQU8sZ0JBQWdCO0lBUjdCO1FBV1csY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFXLEdBQW9CLFlBQVksQ0FBQztRQUM1QyxxQkFBZ0IsR0FBOEIsWUFBWSxDQUFDO1FBQzNELFdBQU0sR0FBNkIsU0FBUyxDQUFDO1FBQzdDLFdBQU0sR0FBaUIsU0FBUyxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBaUIsU0FBUyxDQUFDO1FBYXpCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV0RCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUd2QyxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQTZFekIsQ0FBQzs7Ozs7SUE3RkMsSUFDSSxhQUFhLENBQUMsS0FBNkY7UUFDN0csSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFD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QUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFFTCxLQUFLOzRCQVdMLE1BQU07Ozs7SUFyQlAsaUNBQW9FOztJQUVwRSxxQ0FBdUI7O0lBQ3ZCLHVDQUFxRDs7SUFDckQsNENBQW9FOztJQUNwRSxrQ0FBc0Q7O0lBQ3RELGtDQUEwQzs7SUFDMUMsd0NBQTBCOztJQUMxQixvQ0FBNEM7O0lBYTVDLHlDQUE4RDs7Ozs7SUFFOUQsb0NBQXVDOzs7OztJQUN2QyxtREFBOEM7O0lBRTlDLDBDQUF1Qjs7SUFDdkIsb0RBQXVHOztJQUN2RyxvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56U2l6ZURTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56U3RlcENvbXBvbmVudCB9IGZyb20gJy4vbnotc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOekRpcmVjdGlvblR5cGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuZXhwb3J0IHR5cGUgTnpTdGF0dXNUeXBlID0gJ3dhaXQnIHwgJ3Byb2Nlc3MnIHwgJ2ZpbmlzaCcgfCAnZXJyb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ256LXN0ZXBzJyxcbiAgZXhwb3J0QXM6ICduelN0ZXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0ZXBzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PE56U3RlcENvbXBvbmVudD47XG5cbiAgQElucHV0KCkgbnpDdXJyZW50ID0gMDtcbiAgQElucHV0KCkgbnpEaXJlY3Rpb246IE56RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgbnpMYWJlbFBsYWNlbWVudDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgbnpUeXBlOiAnZGVmYXVsdCcgfCAnbmF2aWdhdGlvbicgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelN0YXJ0SW5kZXggPSAwO1xuICBASW5wdXQoKSBuelN0YXR1czogTnpTdGF0dXNUeXBlID0gJ3Byb2Nlc3MnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelByb2dyZXNzRG90KHZhbHVlOiBib29sZWFuIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+OyBzdGF0dXM6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xuICBjdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT47XG4gIGNsYXNzTWFwOiBOZ0NsYXNzVHlwZTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpTdGFydEluZGV4IHx8IGNoYW5nZXMubnpEaXJlY3Rpb24gfHwgY2hhbmdlcy5uelN0YXR1cyB8fCBjaGFuZ2VzLm56Q3VycmVudCkge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56RGlyZWN0aW9uIHx8IGNoYW5nZXMubnpQcm9ncmVzc0RvdCB8fCBjaGFuZ2VzLm56TGFiZWxQbGFjZW1lbnQgfHwgY2hhbmdlcy5uelNpemUpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcbiAgICAgIHRoaXMuc3RlcHMuY2hhbmdlc1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hpbGRyZW5TdGVwcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGVwcykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5zdGVwcy5sZW5ndGg7XG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKS5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzdGVwLm91dFN0YXR1cyA9IHRoaXMubnpTdGF0dXM7XG4gICAgICAgICAgc3RlcC5zaG93UHJvY2Vzc0RvdCA9IHRoaXMuc2hvd1Byb2Nlc3NEb3Q7XG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBzdGVwLmN1c3RvbVByb2Nlc3NUZW1wbGF0ZSA9IHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGVwLmNsaWNrYWJsZSA9IHRoaXMubnpJbmRleENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICBzdGVwLmRpcmVjdGlvbiA9IHRoaXMubnpEaXJlY3Rpb247XG4gICAgICAgICAgc3RlcC5pbmRleCA9IGluZGV4ICsgdGhpcy5uelN0YXJ0SW5kZXg7XG4gICAgICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSB0aGlzLm56Q3VycmVudDtcbiAgICAgICAgICBzdGVwLmxhc3QgPSBsZW5ndGggPT09IGluZGV4ICsgMTtcbiAgICAgICAgICBzdGVwLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMuc3RlcHMubWFwKHN0ZXAgPT4gc3RlcC5jbGljayQpKS5zdWJzY3JpYmUoaW5kZXggPT5cbiAgICAgICAgdGhpcy5uekluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFtgYW50LXN0ZXBzLSR7dGhpcy5uekRpcmVjdGlvbn1gXTogdHJ1ZSxcbiAgICAgIFtgYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWxgXTogdGhpcy5uekRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgW2BhbnQtc3RlcHMtbGFiZWwtdmVydGljYWxgXTpcbiAgICAgICAgKHRoaXMuc2hvd1Byb2Nlc3NEb3QgfHwgdGhpcy5uekxhYmVsUGxhY2VtZW50ID09PSAndmVydGljYWwnKSAmJiB0aGlzLm56RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXG4gICAgICBbYGFudC1zdGVwcy1kb3RgXTogdGhpcy5zaG93UHJvY2Vzc0RvdCxcbiAgICAgIFsnYW50LXN0ZXBzLXNtYWxsJ106IHRoaXMubnpTaXplID09PSAnc21hbGwnLFxuICAgICAgWydhbnQtc3RlcHMtbmF2aWdhdGlvbiddOiB0aGlzLm56VHlwZSA9PT0gJ25hdmlnYXRpb24nXG4gICAgfTtcbiAgfVxufVxuIl19