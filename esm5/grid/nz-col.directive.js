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
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { isNotNil, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
if (false) {
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.span;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.pull;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.push;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.offset;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.order;
}
var NzColDirective = /** @class */ (function () {
    function NzColDirective(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzColDirective.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a["" + this.prefixCls] = true, _a[this.prefixCls + "-" + this.nzSpan] = isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = isNotNil(this.nzPush), _a), this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.generateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        var listClassMap = {};
        listOfSizeInputName.forEach((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            /** @type {?} */
            var sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(_this[name])) {
                if (typeof _this[name] === 'number' || typeof _this[name] === 'string') {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                }
                else {
                    /** @type {?} */
                    var embedded_1 = (/** @type {?} */ (_this[name]));
                    /** @type {?} */
                    var prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach((/**
                     * @param {?} prefix
                     * @return {?}
                     */
                    function (prefix) {
                        /** @type {?} */
                        var prefixClass = prefix === 'span' ? '-' : "-" + prefix + "-";
                        listClassMap[_this.prefixCls + "-" + sizeName + prefixClass + embedded_1[prefix]] =
                            embedded_1 && isNotNil(embedded_1[prefix]);
                    }));
                }
            }
        }));
        return listClassMap;
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} actualGutter
             * @return {?}
             */
            function (actualGutter) {
                _this.renderer.setStyle(_this.el, 'padding-left', actualGutter / 2 + "px");
                _this.renderer.setStyle(_this.el, 'padding-right', actualGutter / 2 + "px");
            }));
        }
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzColDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-col],nz-col',
                    exportAs: 'nzCol',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzColDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 }
    ]; };
    NzColDirective.propDecorators = {
        nzSpan: [{ type: Input }],
        nzOrder: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzPush: [{ type: Input }],
        nzPull: [{ type: Input }],
        nzXs: [{ type: Input }],
        nzSm: [{ type: Input }],
        nzMd: [{ type: Input }],
        nzLg: [{ type: Input }],
        nzXl: [{ type: Input }],
        nzXXl: [{ type: Input }]
    };
    return NzColDirective;
}());
export { NzColDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.prefixCls;
    /**
     * @type {?}
     * @protected
     */
    NzColDirective.prototype.destroy$;
    /** @type {?} */
    NzColDirective.prototype.nzSpan;
    /** @type {?} */
    NzColDirective.prototype.nzOrder;
    /** @type {?} */
    NzColDirective.prototype.nzOffset;
    /** @type {?} */
    NzColDirective.prototype.nzPush;
    /** @type {?} */
    NzColDirective.prototype.nzPull;
    /** @type {?} */
    NzColDirective.prototype.nzXs;
    /** @type {?} */
    NzColDirective.prototype.nzSm;
    /** @type {?} */
    NzColDirective.prototype.nzMd;
    /** @type {?} */
    NzColDirective.prototype.nzLg;
    /** @type {?} */
    NzColDirective.prototype.nzXl;
    /** @type {?} */
    NzColDirective.prototype.nzXXl;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.elementRef;
    /** @type {?} */
    NzColDirective.prototype.nzRowDirective;
    /** @type {?} */
    NzColDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVwRCxzQ0FNQzs7O0lBTEMsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2Qsa0NBQWdCOztJQUNoQixpQ0FBZTs7QUFHakI7SUEwREUsd0JBQ1Usd0JBQWtELEVBQ2xELFVBQXNCLEVBQ0gsY0FBOEIsRUFDbEQsUUFBbUI7UUFIbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0gsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2xELGFBQVEsR0FBUixRQUFRLENBQVc7UUF4RHBCLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNwQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXVEaEMsQ0FBQztJQXpDSix1R0FBdUc7Ozs7O0lBQ3ZHLG9DQUFXOzs7O0lBQVg7OztZQUNRLFFBQVEsaUNBQ1gsS0FBRyxJQUFJLENBQUMsU0FBVyxJQUFHLElBQUksS0FDdkIsSUFB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QXVDeEMsa0RBQTBEOzs7OztJQUMxRCxvQ0FBOEI7O0lBQzlCLHdDQUF5RDs7SUFDekQsa0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCwgTmdDbGFzc0ludGVyZmFjZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkZGVkUHJvcGVydHkge1xuICBzcGFuPzogbnVtYmVyO1xuICBwdWxsPzogbnVtYmVyO1xuICBwdXNoPzogbnVtYmVyO1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIG9yZGVyPzogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotY29sXSxuei1jb2wnLFxuICBleHBvcnRBczogJ256Q29sJyxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOekNvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtY29sJztcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoKSBuelNwYW46IG51bWJlcjtcbiAgQElucHV0KCkgbnpPcmRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoKSBuelB1c2g6IG51bWJlcjtcbiAgQElucHV0KCkgbnpQdWxsOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56WHM6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56U206IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56TWQ6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56TGc6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56WGw6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56WFhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNwYW59YF06IGlzTm90TmlsKHRoaXMubnpTcGFuKSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tb3JkZXItJHt0aGlzLm56T3JkZXJ9YF06IGlzTm90TmlsKHRoaXMubnpPcmRlciksXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW9mZnNldC0ke3RoaXMubnpPZmZzZXR9YF06IGlzTm90TmlsKHRoaXMubnpPZmZzZXQpLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wdWxsLSR7dGhpcy5uelB1bGx9YF06IGlzTm90TmlsKHRoaXMubnpQdWxsKSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcHVzaC0ke3RoaXMubnpQdXNofWBdOiBpc05vdE5pbCh0aGlzLm56UHVzaCksXG4gICAgICAuLi50aGlzLmdlbmVyYXRlQ2xhc3MoKVxuICAgIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2xhc3MoKTogb2JqZWN0IHtcbiAgICBjb25zdCBsaXN0T2ZTaXplSW5wdXROYW1lOiBBcnJheTxrZXlvZiBOekNvbERpcmVjdGl2ZT4gPSBbJ256WHMnLCAnbnpTbScsICduek1kJywgJ256TGcnLCAnbnpYbCcsICduelhYbCddO1xuICAgIGNvbnN0IGxpc3RDbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xuICAgIGxpc3RPZlNpemVJbnB1dE5hbWUuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHNpemVOYW1lID0gbmFtZS5yZXBsYWNlKCdueicsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXNbbmFtZV0pKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXNbbmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbGlzdENsYXNzTWFwW2Ake3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS0ke3RoaXNbbmFtZV19YF0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVtYmVkZGVkID0gdGhpc1tuYW1lXSBhcyBFbWJlZGRlZFByb3BlcnR5O1xuICAgICAgICAgIGNvbnN0IHByZWZpeEFycmF5OiBBcnJheTxrZXlvZiBFbWJlZGRlZFByb3BlcnR5PiA9IFsnc3BhbicsICdwdWxsJywgJ3B1c2gnLCAnb2Zmc2V0JywgJ29yZGVyJ107XG4gICAgICAgICAgcHJlZml4QXJyYXkuZm9yRWFjaChwcmVmaXggPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlZml4Q2xhc3MgPSBwcmVmaXggPT09ICdzcGFuJyA/ICctJyA6IGAtJHtwcmVmaXh9LWA7XG4gICAgICAgICAgICBsaXN0Q2xhc3NNYXBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9JHtwcmVmaXhDbGFzc30ke2VtYmVkZGVkW3ByZWZpeF19YF0gPVxuICAgICAgICAgICAgICBlbWJlZGRlZCAmJiBpc05vdE5pbChlbWJlZGRlZFtwcmVmaXhdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsaXN0Q2xhc3NNYXA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelJvd0RpcmVjdGl2ZSkge1xuICAgICAgdGhpcy5uelJvd0RpcmVjdGl2ZS5hY3R1YWxHdXR0ZXIkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLm56Um93RGlyZWN0aXZlLmFjdHVhbEd1dHRlciksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShhY3R1YWxHdXR0ZXIgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcsIGAke2FjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLXJpZ2h0JywgYCR7YWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==