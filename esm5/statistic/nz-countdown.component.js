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
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';
import { REFRESH_INTERVAL } from './nz-statistic-definitions';
import { NzStatisticComponent } from './nz-statistic.component';
var NzCountdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzCountdownComponent, _super);
    function NzCountdownComponent(cdr, ngZone, platform) {
        var _this = _super.call(this) || this;
        _this.cdr = cdr;
        _this.ngZone = ngZone;
        _this.platform = platform;
        /**
         * @override
         */
        _this.nzFormat = 'HH:mm:ss';
        _this.nzCountdownFinish = new EventEmitter();
        return _this;
    }
    /** @override */
    /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnChanges = /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.syncTimer();
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stopTimer();
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.syncTimer = /**
     * @return {?}
     */
    function () {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.startTimer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.stopTimer();
                _this.updater_ = interval(REFRESH_INTERVAL).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateValue();
                    _this.cdr.detectChanges();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.stopTimer = /**
     * @return {?}
     */
    function () {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    };
    /**
     * Update time that should be displayed on the screen.
     */
    /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    NzCountdownComponent.prototype.updateValue = /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    function () {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
            this.nzCountdownFinish.emit();
        }
    };
    NzCountdownComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-countdown',
                    exportAs: 'nzCountdown',
                    template: "<nz-statistic\n  [nzValue]=\"diff\"\n  [nzValueStyle]=\"nzValueStyle\"\n  [nzValueTemplate]=\"nzValueTemplate || countDownTpl\"\n  [nzTitle]=\"nzTitle\"\n  [nzPrefix]=\"nzPrefix\"\n  [nzSuffix]=\"nzSuffix\">\n</nz-statistic>\n\n<ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>"
                }] }
    ];
    /** @nocollapse */
    NzCountdownComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzCountdownComponent.propDecorators = {
        nzFormat: [{ type: Input }],
        nzCountdownFinish: [{ type: Output }]
    };
    return NzCountdownComponent;
}(NzStatisticComponent));
export { NzCountdownComponent };
if (false) {
    /**
     * @override
     * @type {?}
     */
    NzCountdownComponent.prototype.nzFormat;
    /** @type {?} */
    NzCountdownComponent.prototype.nzCountdownFinish;
    /** @type {?} */
    NzCountdownComponent.prototype.diff;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.updater_;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotY291bnRkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFPMEMsZ0RBQW9CO0lBVTVELDhCQUFvQixHQUFzQixFQUFVLE1BQWMsRUFBVSxRQUFrQjtRQUE5RixZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVTs7OztRQVJyRixjQUFRLEdBQVcsVUFBVSxDQUFDO1FBQ3BCLHVCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7O0lBU2hFLENBQUM7SUFFRCxnQkFBZ0I7Ozs7OztJQUNoQiwwQ0FBVzs7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsd0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFBQSxpQkFVQztRQVRDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztZQUFDO2dCQUM1QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUzs7O2dCQUFDO29CQUNuRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzNCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ08sMENBQVc7Ozs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQTVFRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDJUQUE0QztpQkFDN0M7Ozs7Z0JBdkJDLGlCQUFpQjtnQkFJakIsTUFBTTtnQkFQQyxRQUFROzs7MkJBNkJkLEtBQUs7b0NBQ0wsTUFBTTs7SUFtRVQsMkJBQUM7Q0FBQSxBQTdFRCxDQU8wQyxvQkFBb0IsR0FzRTdEO1NBdEVZLG9CQUFvQjs7Ozs7O0lBRS9CLHdDQUF1Qzs7SUFDdkMsaURBQWdFOztJQUVoRSxvQ0FBYTs7Ozs7SUFFYixzQ0FBdUI7Ozs7O0lBQ3ZCLHdDQUFzQzs7Ozs7SUFFMUIsbUNBQThCOzs7OztJQUFFLHNDQUFzQjs7Ozs7SUFBRSx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGludGVydmFsLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUkVGUkVTSF9JTlRFUlZBTCB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcbmltcG9ydCB7IE56U3RhdGlzdGljQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWNvdW50ZG93bicsXG4gIGV4cG9ydEFzOiAnbnpDb3VudGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY291bnRkb3duLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOekNvdW50ZG93bkNvbXBvbmVudCBleHRlbmRzIE56U3RhdGlzdGljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgQElucHV0KCkgbnpGb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcyc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvdW50ZG93bkZpbmlzaCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBkaWZmOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSB0YXJnZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSB1cGRhdGVyXzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VmFsdWUpIHtcbiAgICAgIHRoaXMudGFyZ2V0ID0gTnVtYmVyKGNoYW5nZXMubnpWYWx1ZS5jdXJyZW50VmFsdWUpO1xuICAgICAgaWYgKCFjaGFuZ2VzLm56VmFsdWUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgIHRoaXMuc3luY1RpbWVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zeW5jVGltZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gIH1cblxuICBzeW5jVGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFyZ2V0ID49IERhdGUubm93KCkpIHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlcl8gPSBpbnRlcnZhbChSRUZSRVNIX0lOVEVSVkFMKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RvcFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVwZGF0ZXJfKSB7XG4gICAgICB0aGlzLnVwZGF0ZXJfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVwZGF0ZXJfID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRpbWUgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW4uXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5kaWZmID0gTWF0aC5tYXgodGhpcy50YXJnZXQgLSBEYXRlLm5vdygpLCAwKTtcblxuICAgIGlmICh0aGlzLmRpZmYgPT09IDApIHtcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICB0aGlzLm56Q291bnRkb3duRmluaXNoLmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==