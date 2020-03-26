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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel, warnDeprecation, NzConfigService } from 'ng-zorro-antd/core';
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'message';
var NzMessageContainerComponent = /** @class */ (function () {
    function NzMessageContainerComponent(cdr, nzConfigService, defaultConfig, config) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.messages = [];
        if (!!config) {
            warnDeprecation("Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
        }
        this.setConfig(tslib_1.__assign({}, defaultConfig, config));
    }
    /**
     * @return {?}
     */
    NzMessageContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeConfigChange();
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    NzMessageContainerComponent.prototype.setConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        this.config = this.mergeMessageConfig(config);
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    };
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.createMessage = /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    function (message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    };
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessage = /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    function (messageId, userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        this.messages.some((/**
         * @param {?} message
         * @param {?} index
         * @return {?}
         */
        function (message, index) {
            if (message.messageId === messageId) {
                _this.messages.splice(index, 1);
                _this.cdr.detectChanges();
                (/** @type {?} */ (message.onClose)).next(userAction);
                (/** @type {?} */ (message.onClose)).complete();
                return true;
            }
            return false;
        }));
    };
    /**
     * Remove all messages.
     */
    /**
     * Remove all messages.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessageAll = /**
     * Remove all messages.
     * @return {?}
     */
    function () {
        this.messages = [];
        this.cdr.detectChanges();
    };
    /**
     * @protected
     * @return {?}
     */
    NzMessageContainerComponent.prototype.subscribeConfigChange = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        function () { return _this.setConfig(); }));
    };
    /**
     * @protected
     * @param {?=} config
     * @return {?}
     */
    NzMessageContainerComponent.prototype.mergeMessageConfig = /**
     * @protected
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return tslib_1.__assign({}, this.config, config, this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
    };
    /**
     * Merge default options and custom message options
     * @param options
     */
    /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    NzMessageContainerComponent.prototype._mergeMessageOptions = /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return tslib_1.__assign({}, defaultOptions, options);
    };
    NzMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-message-container',
                    exportAs: 'nzMessageContainer',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-message\" [style.top]=\"top\">\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzMessageContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_CONFIG,] }] }
    ]; };
    return NzMessageContainerComponent;
}());
export { NzMessageContainerComponent };
if (false) {
    /** @type {?} */
    NzMessageContainerComponent.prototype.messages;
    /** @type {?} */
    NzMessageContainerComponent.prototype.config;
    /** @type {?} */
    NzMessageContainerComponent.prototype.top;
    /**
     * @type {?}
     * @protected
     */
    NzMessageContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzMessageContainerComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBRU4sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxGLE9BQU8sRUFBeUIsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFHcEcsd0JBQXdCLEdBQUcsU0FBUztBQUUxQztJQWFFLHFDQUNZLEdBQXNCLEVBQ3RCLGVBQWdDLEVBQ0ssYUFBb0MsRUFDNUMsTUFBNkI7UUFIMUQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTjVDLGFBQVEsR0FBMEIsRUFBRSxDQUFDO1FBVW5DLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNaLGVBQWUsQ0FDYix1SEFBdUgsQ0FDeEgsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLFNBQVMsc0JBQU0sYUFBYSxFQUFLLE1BQU0sRUFBRyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELCtDQUFTOzs7O0lBQVQsVUFBVSxNQUE4QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztR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QUFzQjtvQkFDaEMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsMExBQW9EO2lCQUNyRDs7OztnQkF2QkMsaUJBQWlCO2dCQVNtQixlQUFlO2dEQXVCaEQsUUFBUSxZQUFJLE1BQU0sU0FBQyx5QkFBeUI7Z0RBQzVDLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOztJQW9GekMsa0NBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQTdGWSwyQkFBMkI7OztJQUN0QywrQ0FBcUM7O0lBQ3JDLDZDQUF3Qzs7SUFDeEMsMENBQW1COzs7OztJQUdqQiwwQ0FBZ0M7Ozs7O0lBQ2hDLHNEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgdG9Dc3NQaXhlbCwgd2FybkRlcHJlY2F0aW9uLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lc3NhZ2VDb25maWdMZWdhY3ksIE5aX01FU1NBR0VfQ09ORklHLCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdtZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LW1lc3NhZ2UtY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICduek1lc3NhZ2VDb250YWluZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtZXNzYWdlczogTnpNZXNzYWdlRGF0YUZpbGxlZFtdID0gW107XG4gIGNvbmZpZzogUmVxdWlyZWQ8TnpNZXNzYWdlQ29uZmlnTGVnYWN5PjtcbiAgdG9wOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01FU1NBR0VfQ09ORklHKSBjb25maWc6IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeVxuICApIHtcbiAgICBpZiAoISFjb25maWcpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYEluamVjdGlvbiB0b2tlbiAnTlpfTUVTU0FHRV9DT05GSUcnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuc2V0Q29uZmlnKHsgLi4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVDb25maWdDaGFuZ2UoKTtcbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWc/OiBOek1lc3NhZ2VDb25maWdMZWdhY3kpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMubWVyZ2VNZXNzYWdlQ29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy50b3AgPSB0b0Nzc1BpeGVsKHRoaXMuY29uZmlnLm56VG9wKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgbWVzc2FnZS5cbiAgICogQHBhcmFtIG1lc3NhZ2UgUGFyc2VkIG1lc3NhZ2UgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIGNyZWF0ZU1lc3NhZ2UobWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5uek1heFN0YWNrKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCAxKTtcbiAgICB9XG4gICAgbWVzc2FnZS5vcHRpb25zID0gdGhpcy5fbWVyZ2VNZXNzYWdlT3B0aW9ucyhtZXNzYWdlLm9wdGlvbnMpO1xuICAgIG1lc3NhZ2Uub25DbG9zZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBtZXNzYWdlIGJ5IGBtZXNzYWdlSWRgLlxuICAgKiBAcGFyYW0gbWVzc2FnZUlkIElkIG9mIHRoZSBtZXNzYWdlIHRvIGJlIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB1c2VyQWN0aW9uIFdoZXRoZXIgdGhpcyBpcyBjbG9zZWQgYnkgdXNlciBpbnRlcmFjdGlvbi5cbiAgICovXG4gIHJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkOiBzdHJpbmcsIHVzZXJBY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXMuc29tZSgobWVzc2FnZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZUlkKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBtZXNzYWdlLm9uQ2xvc2UhLm5leHQodXNlckFjdGlvbik7XG4gICAgICAgIG1lc3NhZ2Uub25DbG9zZSEuY29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBtZXNzYWdlcy5cbiAgICovXG4gIHJlbW92ZU1lc3NhZ2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRDb25maWcoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbWVyZ2VNZXNzYWdlQ29uZmlnKGNvbmZpZz86IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeSk6IFJlcXVpcmVkPE56TWVzc2FnZUNvbmZpZ0xlZ2FjeT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIC4uLnRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgYW5kIGN1c3RvbSBtZXNzYWdlIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHByb3RlY3RlZCBfbWVyZ2VNZXNzYWdlT3B0aW9ucyhvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhT3B0aW9ucyB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56TWVzc2FnZURhdGFPcHRpb25zID0ge1xuICAgICAgbnpEdXJhdGlvbjogdGhpcy5jb25maWcubnpEdXJhdGlvbixcbiAgICAgIG56QW5pbWF0ZTogdGhpcy5jb25maWcubnpBbmltYXRlLFxuICAgICAgbnpQYXVzZU9uSG92ZXI6IHRoaXMuY29uZmlnLm56UGF1c2VPbkhvdmVyXG4gICAgfTtcbiAgICByZXR1cm4geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICB9XG59XG4iXX0=