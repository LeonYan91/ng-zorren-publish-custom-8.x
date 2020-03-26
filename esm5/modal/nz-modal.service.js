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
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { warn } from 'ng-zorro-antd/core';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalComponent } from './nz-modal.component';
import { NzModalServiceModule } from './nz-modal.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-modal-control.service";
import * as i3 from "./nz-modal.service.module";
// A builder used for managing service creating modals
var 
// A builder used for managing service creating modals
ModalBuilderForService = /** @class */ (function () {
    function ModalBuilderForService(overlay, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.overlay = overlay;
        this.createModal();
        if (!('nzGetContainer' in options)) {
            // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
            options.nzGetContainer = undefined; // Override nzGetContainer's default value to prevent creating another overlay
        }
        this.changeProps(options);
        (/** @type {?} */ (this.modalRef)).instance.setOverlayRef(this.overlayRef);
        (/** @type {?} */ (this.modalRef)).instance.open();
        (/** @type {?} */ (this.modalRef)).instance.nzAfterClose.subscribe((/**
         * @return {?}
         */
        function () { return _this.destroyModal(); })); // [NOTE] By default, close equals destroy when using as Service
    }
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.modalRef && this.modalRef.instance;
    };
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.destroyModal = /**
     * @return {?}
     */
    function () {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    ModalBuilderForService.prototype.changeProps = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    };
    // Create component to ApplicationRef
    // Create component to ApplicationRef
    /**
     * @private
     * @return {?}
     */
    ModalBuilderForService.prototype.createModal = 
    // Create component to ApplicationRef
    /**
     * @private
     * @return {?}
     */
    function () {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(NzModalComponent));
    };
    return ModalBuilderForService;
}());
// A builder used for managing service creating modals
export { ModalBuilderForService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.overlay;
}
var NzModalService = /** @class */ (function () {
    function NzModalService(overlay, modalControl) {
        this.overlay = overlay;
        this.modalControl = modalControl;
    }
    Object.defineProperty(NzModalService.prototype, "openModals", {
        // Track of the current close modals (we assume invisible is close this time)
        get: 
        // Track of the current close modals (we assume invisible is close this time)
        /**
         * @return {?}
         */
        function () {
            return this.modalControl.openModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalService.prototype, "afterAllClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalControl.afterAllClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Closes all of the currently-open dialogs
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    NzModalService.prototype.closeAll = 
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    function () {
        this.modalControl.closeAll();
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.create = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        if (typeof options.nzOnCancel !== 'function') {
            options.nzOnCancel = (/**
             * @return {?}
             */
            function () { }); // Leave a empty function to close this modal by default
        }
        // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future
        /** @type {?} */
        var modalRef = (/** @type {?} */ (new ModalBuilderForService(this.overlay, options).getInstance()));
        return modalRef;
    };
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    NzModalService.prototype.confirm = /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        if (confirmType === void 0) { confirmType = 'confirm'; }
        if ('nzFooter' in options) {
            warn("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
        }
        if (typeof options.nzOnOk !== 'function') {
            // NOTE: only support function currently by calling confirm()
            options.nzOnOk = (/**
             * @return {?}
             */
            function () { }); // Leave a empty function to close this modal by default
        }
        options.nzModalType = 'confirm';
        options.nzClassName = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.nzClassName || '');
        return this.create(options);
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.info = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'info');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.success = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'success');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.error = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'error');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.warning = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'warning');
    };
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    NzModalService.prototype.simpleConfirm = /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
        };
        if (!('nzIconType' in options)) {
            options.nzIconType = iconMap[confirmType];
        }
        if (!('nzCancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
        }
        return this.confirm(options, confirmType);
    };
    NzModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzModalServiceModule
                },] }
    ];
    /** @nocollapse */
    NzModalService.ctorParameters = function () { return [
        { type: Overlay },
        { type: NzModalControlService }
    ]; };
    /** @nocollapse */ NzModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzModalService_Factory() { return new NzModalService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.NzModalControlService)); }, token: NzModalService, providedIn: i3.NzModalServiceModule });
    return NzModalService;
}());
export { NzModalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.modalControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJuei1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUsSUFBSSxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7QUFJakU7OztJQUlFLGdDQUFvQixPQUFnQixFQUFFLE9BQW9DO1FBQTFFLGlCQVlDO1FBWnFDLHdCQUFBLEVBQUEsWUFBb0M7UUFBdEQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLElBQUksT0FBTyxDQUFDLEVBQUU7WUFDbEMsNEZBQTRGO1lBQzVGLE9BQU8sQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLENBQUMsOEVBQThFO1NBQ25IO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixtQkFBQSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixtQkFB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UUFBakUsd0JBQUEsRUFBQSxZQUF1Qzs7WUFDeEQsT0FBTyxHQUFvQjtZQUMvQixJQUFJLEVBQUUsYUFBYTtZQUNuQixPQUFPLEVBQUUsY0FBYztZQUN2QixLQUFLLEVBQUUsY0FBYztZQUNyQixPQUFPLEVBQUUsb0JBQW9CO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLG1FQUFtRTtZQUNuRSxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBbEZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsb0JBQW9CO2lCQUNqQzs7OztnQkExRFEsT0FBTztnQkFPUCxxQkFBcUI7Ozt5QkFmOUI7Q0FtSkMsQUFuRkQsSUFtRkM7U0FoRlksY0FBYzs7Ozs7O0lBVWIsaUNBQXdCOzs7OztJQUFFLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgd2FybiwgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcbmltcG9ydCB7IE56TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL256LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotbW9kYWwuc2VydmljZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uZmlybVR5cGUsIE1vZGFsT3B0aW9ucywgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJy4vbnotbW9kYWwudHlwZSc7XG5cbi8vIEEgYnVpbGRlciB1c2VkIGZvciBtYW5hZ2luZyBzZXJ2aWNlIGNyZWF0aW5nIG1vZGFsc1xuZXhwb3J0IGNsYXNzIE1vZGFsQnVpbGRlckZvclNlcnZpY2Uge1xuICBwcml2YXRlIG1vZGFsUmVmOiBDb21wb25lbnRSZWY8TnpNb2RhbENvbXBvbmVudD4gfCBudWxsOyAvLyBNb2RhbCBDb21wb25lbnRSZWYsIFwibnVsbFwiIG1lYW5zIGl0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlID0ge30pIHtcbiAgICB0aGlzLmNyZWF0ZU1vZGFsKCk7XG5cbiAgICBpZiAoISgnbnpHZXRDb250YWluZXInIGluIG9wdGlvbnMpKSB7XG4gICAgICAvLyBBcyB3ZSB1c2UgQ0RLIHRvIGNyZWF0ZSBtb2RhbCBpbiBzZXJ2aWNlIGJ5IGZvcmNlLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVzZSBuekdldENvbnRhaW5lclxuICAgICAgb3B0aW9ucy5uekdldENvbnRhaW5lciA9IHVuZGVmaW5lZDsgLy8gT3ZlcnJpZGUgbnpHZXRDb250YWluZXIncyBkZWZhdWx0IHZhbHVlIHRvIHByZXZlbnQgY3JlYXRpbmcgYW5vdGhlciBvdmVybGF5XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VQcm9wcyhvcHRpb25zKTtcbiAgICB0aGlzLm1vZGFsUmVmIS5pbnN0YW5jZS5zZXRPdmVybGF5UmVmKHRoaXMub3ZlcmxheVJlZik7XG4gICAgdGhpcy5tb2RhbFJlZiEuaW5zdGFuY2Uub3BlbigpO1xuICAgIHRoaXMubW9kYWxSZWYhLmluc3RhbmNlLm56QWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXN0cm95TW9kYWwoKSk7IC8vIFtOT1RFXSBCeSBkZWZhdWx0LCBjbG9zZSBlcXVhbHMgZGVzdHJveSB3aGVuIHVzaW5nIGFzIFNlcnZpY2VcbiAgfVxuXG4gIGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFJlZiAmJiB0aGlzLm1vZGFsUmVmLmluc3RhbmNlO1xuICB9XG5cbiAgZGVzdHJveU1vZGFsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGFsUmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5tb2RhbFJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VQcm9wcyhvcHRpb25zOiBNb2RhbE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm1vZGFsUmVmLmluc3RhbmNlLCBvcHRpb25zKTsgLy8gREFOR0VSOiBoZXJlIG5vdCBsaW1pdCB1c2VyJ3MgaW5wdXRzIGF0IHJ1bnRpbWVcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY29tcG9uZW50IHRvIEFwcGxpY2F0aW9uUmVmXG4gIHByaXZhdGUgY3JlYXRlTW9kYWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpO1xuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTnpNb2RhbENvbXBvbmVudCkpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogTnpNb2RhbFNlcnZpY2VNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbFNlcnZpY2Uge1xuICAvLyBUcmFjayBvZiB0aGUgY3VycmVudCBjbG9zZSBtb2RhbHMgKHdlIGFzc3VtZSBpbnZpc2libGUgaXMgY2xvc2UgdGhpcyB0aW1lKVxuICBnZXQgb3Blbk1vZGFscygpOiBOek1vZGFsUmVmW10ge1xuICAgIHJldHVybiB0aGlzLm1vZGFsQ29udHJvbC5vcGVuTW9kYWxzO1xuICB9XG5cbiAgZ2V0IGFmdGVyQWxsQ2xvc2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxDb250cm9sLmFmdGVyQWxsQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgbW9kYWxDb250cm9sOiBOek1vZGFsQ29udHJvbFNlcnZpY2UpIHt9XG5cbiAgLy8gQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9nc1xuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5jbG9zZUFsbCgpO1xuICB9XG5cbiAgY3JlYXRlPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uek9uQ2FuY2VsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLm56T25DYW5jZWwgPSAoKSA9PiB7fTsgLy8gTGVhdmUgYSBlbXB0eSBmdW5jdGlvbiB0byBjbG9zZSB0aGlzIG1vZGFsIGJ5IGRlZmF1bHRcbiAgICB9XG5cbiAgICAvLyBOT1RFOiB1c2UgTnpNb2RhbENvbXBvbmVudCBhcyB0aGUgTnpNb2RhbFJlZiBieSBub3csIHdlIG1heSBuZWVkIGFyY2hpdmUgdGhlIHJlYWwgTnpNb2RhbFJlZiBvYmplY3QgaW4gdGhlIGZ1dHVyZVxuICAgIGNvbnN0IG1vZGFsUmVmID0gbmV3IE1vZGFsQnVpbGRlckZvclNlcnZpY2UodGhpcy5vdmVybGF5LCBvcHRpb25zKS5nZXRJbnN0YW5jZSgpITtcblxuICAgIHJldHVybiBtb2RhbFJlZjtcbiAgfVxuXG4gIGNvbmZpcm08VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9LCBjb25maXJtVHlwZTogQ29uZmlybVR5cGUgPSAnY29uZmlybScpOiBOek1vZGFsUmVmPFQ+IHtcbiAgICBpZiAoJ256Rm9vdGVyJyBpbiBvcHRpb25zKSB7XG4gICAgICB3YXJuKGBUaGUgQ29uZmlybS1Nb2RhbCBkb2Vzbid0IHN1cHBvcnQgXCJuekZvb3RlclwiLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZC5gKTtcbiAgICB9XG4gICAgaWYgKCEoJ256V2lkdGgnIGluIG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLm56V2lkdGggPSA0MTY7XG4gICAgfVxuICAgIGlmICghKCduek1hc2tDbG9zYWJsZScgaW4gb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMubnpNYXNrQ2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm56T25PayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gTk9URTogb25seSBzdXBwb3J0IGZ1bmN0aW9uIGN1cnJlbnRseSBieSBjYWxsaW5nIGNvbmZpcm0oKVxuICAgICAgb3B0aW9ucy5uek9uT2sgPSAoKSA9PiB7fTsgLy8gTGVhdmUgYSBlbXB0eSBmdW5jdGlvbiB0byBjbG9zZSB0aGlzIG1vZGFsIGJ5IGRlZmF1bHRcbiAgICB9XG5cbiAgICBvcHRpb25zLm56TW9kYWxUeXBlID0gJ2NvbmZpcm0nO1xuICAgIG9wdGlvbnMubnpDbGFzc05hbWUgPSBgYW50LW1vZGFsLWNvbmZpcm0gYW50LW1vZGFsLWNvbmZpcm0tJHtjb25maXJtVHlwZX0gJHtvcHRpb25zLm56Q2xhc3NOYW1lIHx8ICcnfWA7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xuICB9XG5cbiAgaW5mbzxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICdpbmZvJyk7XG4gIH1cblxuICBzdWNjZXNzPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ3N1Y2Nlc3MnKTtcbiAgfVxuXG4gIGVycm9yPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2Vycm9yJyk7XG4gIH1cblxuICB3YXJuaW5nPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ3dhcm5pbmcnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2ltcGxlQ29uZmlybTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIGNvbnN0IGljb25NYXA6IEluZGV4YWJsZU9iamVjdCA9IHtcbiAgICAgIGluZm86ICdpbmZvLWNpcmNsZScsXG4gICAgICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcbiAgICAgIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcbiAgICAgIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUnXG4gICAgfTtcbiAgICBpZiAoISgnbnpJY29uVHlwZScgaW4gb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMubnpJY29uVHlwZSA9IGljb25NYXBbY29uZmlybVR5cGVdO1xuICAgIH1cbiAgICBpZiAoISgnbnpDYW5jZWxUZXh0JyBpbiBvcHRpb25zKSkge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBDYW5jZWwgYnV0dG9uIGlmIHRoZSB1c2VyIG5vdCBzcGVjaWZ5IGEgQ2FuY2VsIGJ1dHRvblxuICAgICAgb3B0aW9ucy5uekNhbmNlbFRleHQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maXJtKG9wdGlvbnMsIGNvbmZpcm1UeXBlKTtcbiAgfVxufVxuIl19