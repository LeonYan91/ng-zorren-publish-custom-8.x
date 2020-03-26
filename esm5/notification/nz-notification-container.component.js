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
import { NzMessageContainerComponent } from 'ng-zorro-antd/message';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'notification';
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(cdr, nzConfigService, defaultConfig, config) {
        var _this = _super.call(this, cdr, nzConfigService, defaultConfig, config) || this;
        /**
         * @override
         */
        _this.messages = [];
        if (!!config) {
            warnDeprecation("Injection token 'NZ_NOTIFICATION_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
        }
        return _this;
    }
    /**
     * @override
     */
    /**
     * @override
     * @param {?=} config
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.setConfig = /**
     * @override
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var newConfig = (this.config = tslib_1.__assign({}, this.config, config, this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)));
        /** @type {?} */
        var placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    };
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.createMessage = /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        /** @type {?} */
        var key = notification.options.nzKey;
        /** @type {?} */
        var notificationWithSameKey = this.messages.find((/**
         * @param {?} msg
         * @return {?}
         */
        function (msg) { return msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey; }));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, notification);
        }
        else {
            if (this.messages.length >= this.config.nzMaxStack) {
                this.messages.splice(0, 1);
            }
            this.messages.push((/** @type {?} */ (notification)));
        }
        this.cdr.detectChanges();
    };
    /**
     * @override
     */
    /**
     * @override
     * @protected
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.subscribeConfigChange = /**
     * @override
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
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.replaceNotification = /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    function (old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    };
    NzNotificationContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification-container',
                    exportAs: 'nzNotificationContainer',
                    preserveWhitespaces: false,
                    template: "<div\n  class=\"ant-notification ant-notification-{{config.nzPlacement}}\"\n  [style.top]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'topRight') ? top : null\"\n  [style.bottom]=\"(config.nzPlacement === 'bottomLeft' || config.nzPlacement === 'bottomRight') ? bottom : null\"\n  [style.right]=\"(config.nzPlacement === 'bottomRight' || config.nzPlacement === 'topRight') ? '0px' : null\"\n  [style.left]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'bottomLeft') ? '0px' : null\">\n  <nz-notification\n    *ngFor=\"let message of messages; let i = index\"\n    [nzMessage]=\"message\"\n    [nzIndex]=\"i\">\n  </nz-notification>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzNotificationContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
    ]; };
    return NzNotificationContainerComponent;
}(NzMessageContainerComponent));
export { NzNotificationContainerComponent };
if (false) {
    /** @type {?} */
    NzNotificationContainerComponent.prototype.config;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottom;
    /**
     * @override
     * @type {?}
     */
    NzNotificationContainerComponent.prototype.messages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBFLE9BQU8sRUFFTCxzQkFBc0IsRUFDdEIsOEJBQThCLEVBQy9CLE1BQU0sMEJBQTBCLENBQUM7O0lBRzVCLHdCQUF3QixHQUFHLGNBQWM7QUFFL0M7SUFRc0QsNERBQTJCO0lBUy9FLDBDQUNFLEdBQXNCLEVBQ3RCLGVBQWdDLEVBQ29CLGFBQXlDLEVBQ2pELE1BQWtDO1FBSmhGLFlBTUUsa0JBQU0sR0FBRyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLFNBTW5EOzs7O1FBZEQsY0FBUSxHQUE4QyxFQUFFLENBQUM7UUFTdkQsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ1osZUFBZSxDQUNiLDRIQUE0SCxDQUM3SCxDQUFDO1NBQ0g7O0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxvREFBUzs7Ozs7SUFBVCxVQUFVLE1BQW1DOztZQUNyQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSx3QkFDekIsSUFBSSxDQUFDLE1BQU0sRUFDWCxNQUFNLEVBQ04sSUFBSSxD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LFNBQUMsOEJBQThCO2dEQUNqRCxRQUFRLFlBQUksTUFBTSxTQUFDLHNCQUFzQjs7SUFrRTlDLHVDQUFDO0NBQUEsQUF2RkQsQ0FRc0QsMkJBQTJCLEdBK0VoRjtTQS9FWSxnQ0FBZ0M7OztJQUMzQyxrREFBNkM7O0lBQzdDLGtEQUFzQjs7Ozs7SUFLdEIsb0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgdG9Dc3NQaXhlbCwgd2FybkRlcHJlY2F0aW9uLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcblxuaW1wb3J0IHtcbiAgTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3ksXG4gIE5aX05PVElGSUNBVElPTl9DT05GSUcsXG4gIE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJR1xufSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnbm90aWZpY2F0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LW5vdGlmaWNhdGlvbi1jb250YWluZXInLFxuICBleHBvcnRBczogJ256Tm90aWZpY2F0aW9uQ29udGFpbmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIGNvbmZpZzogUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25Db25maWdMZWdhY3k+O1xuICBib3R0b206IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgbWVzc2FnZXM6IEFycmF5PFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZD4+ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3ksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9OT1RJRklDQVRJT05fQ09ORklHKSBjb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5XG4gICkge1xuICAgIHN1cGVyKGNkciwgbnpDb25maWdTZXJ2aWNlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIGlmICghIWNvbmZpZykge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgICBgSW5qZWN0aW9uIHRva2VuICdOWl9OT1RJRklDQVRJT05fQ09ORklHJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHNldENvbmZpZyhjb25maWc/OiBOek5vdGlmaWNhdGlvbkNvbmZpZ0xlZ2FjeSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9ICh0aGlzLmNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgLi4uY29uZmlnLFxuICAgICAgLi4udGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICB9KTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmNvbmZpZy5uelBsYWNlbWVudDtcblxuICAgIHRoaXMudG9wID0gcGxhY2VtZW50ID09PSAndG9wTGVmdCcgfHwgcGxhY2VtZW50ID09PSAndG9wUmlnaHQnID8gdG9Dc3NQaXhlbChuZXdDb25maWcubnpUb3ApIDogbnVsbDtcbiAgICB0aGlzLmJvdHRvbSA9IHBsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbVJpZ2h0JyA/IHRvQ3NzUGl4ZWwobmV3Q29uZmlnLm56Qm90dG9tKSA6IG51bGw7XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uLlxuICAgKiBJZiB0aGVyZSdzIGEgbm90aWZpY2F0aW9uIHdob3NlIGBuektleWAgaXMgc2FtZSB3aXRoIGBuektleWAgaW4gYE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZGAsXG4gICAqIHJlcGxhY2UgaXRzIGNvbnRlbnQgaW5zdGVhZCBvZiBjcmVhdGUgYSBuZXcgb25lLlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgY3JlYXRlTWVzc2FnZShub3RpZmljYXRpb246IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCk6IHZvaWQge1xuICAgIG5vdGlmaWNhdGlvbi5vcHRpb25zID0gdGhpcy5fbWVyZ2VNZXNzYWdlT3B0aW9ucyhub3RpZmljYXRpb24ub3B0aW9ucyk7XG4gICAgbm90aWZpY2F0aW9uLm9uQ2xvc2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIGNvbnN0IGtleSA9IG5vdGlmaWNhdGlvbi5vcHRpb25zLm56S2V5O1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5ID0gdGhpcy5tZXNzYWdlcy5maW5kKFxuICAgICAgbXNnID0+IG1zZy5vcHRpb25zLm56S2V5ID09PSAobm90aWZpY2F0aW9uLm9wdGlvbnMgYXMgUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucz4pLm56S2V5XG4gICAgKTtcblxuICAgIGlmIChrZXkgJiYgbm90aWZpY2F0aW9uV2l0aFNhbWVLZXkpIHtcbiAgICAgIHRoaXMucmVwbGFjZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25XaXRoU2FtZUtleSwgbm90aWZpY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLm56TWF4U3RhY2spIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobm90aWZpY2F0aW9uIGFzIFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZD4pO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q29uZmlnKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlTm90aWZpY2F0aW9uKG9sZDogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBfbmV3OiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcbiAgICBvbGQudGl0bGUgPSBfbmV3LnRpdGxlO1xuICAgIG9sZC5jb250ZW50ID0gX25ldy5jb250ZW50O1xuICAgIG9sZC50ZW1wbGF0ZSA9IF9uZXcudGVtcGxhdGU7XG4gICAgb2xkLnR5cGUgPSBfbmV3LnR5cGU7XG4gIH1cbn1cbiJdfQ==