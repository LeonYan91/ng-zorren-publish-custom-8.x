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
export class ModalBuilderForService {
    /**
     * @param {?} overlay
     * @param {?=} options
     */
    constructor(overlay, options = {}) {
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
        () => this.destroyModal())); // [NOTE] By default, close equals destroy when using as Service
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.modalRef && this.modalRef.instance;
    }
    /**
     * @return {?}
     */
    destroyModal() {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    changeProps(options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    }
    // Create component to ApplicationRef
    /**
     * @private
     * @return {?}
     */
    createModal() {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(NzModalComponent));
    }
}
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
export class NzModalService {
    /**
     * @param {?} overlay
     * @param {?} modalControl
     */
    constructor(overlay, modalControl) {
        this.overlay = overlay;
        this.modalControl = modalControl;
    }
    // Track of the current close modals (we assume invisible is close this time)
    /**
     * @return {?}
     */
    get openModals() {
        return this.modalControl.openModals;
    }
    /**
     * @return {?}
     */
    get afterAllClose() {
        return this.modalControl.afterAllClose.asObservable();
    }
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    closeAll() {
        this.modalControl.closeAll();
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    create(options = {}) {
        if (typeof options.nzOnCancel !== 'function') {
            options.nzOnCancel = (/**
             * @return {?}
             */
            () => { }); // Leave a empty function to close this modal by default
        }
        // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future
        /** @type {?} */
        const modalRef = (/** @type {?} */ (new ModalBuilderForService(this.overlay, options).getInstance()));
        return modalRef;
    }
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    confirm(options = {}, confirmType = 'confirm') {
        if ('nzFooter' in options) {
            warn(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
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
            () => { }); // Leave a empty function to close this modal by default
        }
        options.nzModalType = 'confirm';
        options.nzClassName = `ant-modal-confirm ant-modal-confirm-${confirmType} ${options.nzClassName || ''}`;
        return this.create(options);
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    info(options = {}) {
        return this.simpleConfirm(options, 'info');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    success(options = {}) {
        return this.simpleConfirm(options, 'success');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    error(options = {}) {
        return this.simpleConfirm(options, 'error');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    warning(options = {}) {
        return this.simpleConfirm(options, 'warning');
    }
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    simpleConfirm(options = {}, confirmType) {
        /** @type {?} */
        const iconMap = {
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
    }
}
NzModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzModalServiceModule
            },] }
];
/** @nocollapse */
NzModalService.ctorParameters = () => [
    { type: Overlay },
    { type: NzModalControlService }
];
/** @nocollapse */ NzModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzModalService_Factory() { return new NzModalService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.NzModalControlService)); }, token: NzModalService, providedIn: i3.NzModalServiceModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJuei1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUsSUFBSSxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7QUFJakUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFJakMsWUFBb0IsT0FBZ0IsRUFBRSxVQUFrQyxFQUFFO1FBQXRELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLDRGQUE0RjtZQUM1RixPQUFPLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDLDhFQUE4RTtTQUNuSDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELG1CQUFBLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsbUJBQUEsSUFBSSxDQUFD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QUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFsRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxvQkFBb0I7YUFDakM7Ozs7WUExRFEsT0FBTztZQU9QLHFCQUFxQjs7Ozs7Ozs7SUE4RGhCLGlDQUF3Qjs7Ozs7SUFBRSxzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHdhcm4sIEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56TW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vbnotbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL256LW1vZGFsLXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBOek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW1vZGFsLnNlcnZpY2UubW9kdWxlJztcbmltcG9ydCB7IENvbmZpcm1UeXBlLCBNb2RhbE9wdGlvbnMsIE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLnR5cGUnO1xuXG4vLyBBIGJ1aWxkZXIgdXNlZCBmb3IgbWFuYWdpbmcgc2VydmljZSBjcmVhdGluZyBtb2RhbHNcbmV4cG9ydCBjbGFzcyBNb2RhbEJ1aWxkZXJGb3JTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtb2RhbFJlZjogQ29tcG9uZW50UmVmPE56TW9kYWxDb21wb25lbnQ+IHwgbnVsbDsgLy8gTW9kYWwgQ29tcG9uZW50UmVmLCBcIm51bGxcIiBtZWFucyBpdCBoYXMgYmVlbiBkZXN0cm95ZWRcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgb3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZSA9IHt9KSB7XG4gICAgdGhpcy5jcmVhdGVNb2RhbCgpO1xuXG4gICAgaWYgKCEoJ256R2V0Q29udGFpbmVyJyBpbiBvcHRpb25zKSkge1xuICAgICAgLy8gQXMgd2UgdXNlIENESyB0byBjcmVhdGUgbW9kYWwgaW4gc2VydmljZSBieSBmb3JjZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1c2UgbnpHZXRDb250YWluZXJcbiAgICAgIG9wdGlvbnMubnpHZXRDb250YWluZXIgPSB1bmRlZmluZWQ7IC8vIE92ZXJyaWRlIG56R2V0Q29udGFpbmVyJ3MgZGVmYXVsdCB2YWx1ZSB0byBwcmV2ZW50IGNyZWF0aW5nIGFub3RoZXIgb3ZlcmxheVxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlUHJvcHMob3B0aW9ucyk7XG4gICAgdGhpcy5tb2RhbFJlZiEuaW5zdGFuY2Uuc2V0T3ZlcmxheVJlZih0aGlzLm92ZXJsYXlSZWYpO1xuICAgIHRoaXMubW9kYWxSZWYhLmluc3RhbmNlLm9wZW4oKTtcbiAgICB0aGlzLm1vZGFsUmVmIS5pbnN0YW5jZS5uekFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGVzdHJveU1vZGFsKCkpOyAvLyBbTk9URV0gQnkgZGVmYXVsdCwgY2xvc2UgZXF1YWxzIGRlc3Ryb3kgd2hlbiB1c2luZyBhcyBTZXJ2aWNlXG4gIH1cblxuICBnZXRJbnN0YW5jZSgpOiBOek1vZGFsQ29tcG9uZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxSZWYgJiYgdGhpcy5tb2RhbFJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIGRlc3Ryb3lNb2RhbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMubW9kYWxSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlUHJvcHMob3B0aW9uczogTW9kYWxPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5tb2RhbFJlZi5pbnN0YW5jZSwgb3B0aW9ucyk7IC8vIERBTkdFUjogaGVyZSBub3QgbGltaXQgdXNlcidzIGlucHV0cyBhdCBydW50aW1lXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGNvbXBvbmVudCB0byBBcHBsaWNhdGlvblJlZlxuICBwcml2YXRlIGNyZWF0ZU1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE56TW9kYWxDb21wb25lbnQpKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IE56TW9kYWxTZXJ2aWNlTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE56TW9kYWxTZXJ2aWNlIHtcbiAgLy8gVHJhY2sgb2YgdGhlIGN1cnJlbnQgY2xvc2UgbW9kYWxzICh3ZSBhc3N1bWUgaW52aXNpYmxlIGlzIGNsb3NlIHRoaXMgdGltZSlcbiAgZ2V0IG9wZW5Nb2RhbHMoKTogTnpNb2RhbFJlZltdIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRyb2wub3Blbk1vZGFscztcbiAgfVxuXG4gIGdldCBhZnRlckFsbENsb3NlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm1vZGFsQ29udHJvbC5hZnRlckFsbENsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIG1vZGFsQ29udHJvbDogTnpNb2RhbENvbnRyb2xTZXJ2aWNlKSB7fVxuXG4gIC8vIENsb3NlcyBhbGwgb2YgdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3NcbiAgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbENvbnRyb2wuY2xvc2VBbGwoKTtcbiAgfVxuXG4gIGNyZWF0ZTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubnpPbkNhbmNlbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucy5uek9uQ2FuY2VsID0gKCkgPT4ge307IC8vIExlYXZlIGEgZW1wdHkgZnVuY3Rpb24gdG8gY2xvc2UgdGhpcyBtb2RhbCBieSBkZWZhdWx0XG4gICAgfVxuXG4gICAgLy8gTk9URTogdXNlIE56TW9kYWxDb21wb25lbnQgYXMgdGhlIE56TW9kYWxSZWYgYnkgbm93LCB3ZSBtYXkgbmVlZCBhcmNoaXZlIHRoZSByZWFsIE56TW9kYWxSZWYgb2JqZWN0IGluIHRoZSBmdXR1cmVcbiAgICBjb25zdCBtb2RhbFJlZiA9IG5ldyBNb2RhbEJ1aWxkZXJGb3JTZXJ2aWNlKHRoaXMub3ZlcmxheSwgb3B0aW9ucykuZ2V0SW5zdGFuY2UoKSE7XG5cbiAgICByZXR1cm4gbW9kYWxSZWY7XG4gIH1cblxuICBjb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSwgY29uZmlybVR5cGU6IENvbmZpcm1UeXBlID0gJ2NvbmZpcm0nKTogTnpNb2RhbFJlZjxUPiB7XG4gICAgaWYgKCduekZvb3RlcicgaW4gb3B0aW9ucykge1xuICAgICAgd2FybihgVGhlIENvbmZpcm0tTW9kYWwgZG9lc24ndCBzdXBwb3J0IFwibnpGb290ZXJcIiwgdGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGlnbm9yZWQuYCk7XG4gICAgfVxuICAgIGlmICghKCdueldpZHRoJyBpbiBvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucy5ueldpZHRoID0gNDE2O1xuICAgIH1cbiAgICBpZiAoISgnbnpNYXNrQ2xvc2FibGUnIGluIG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLm56TWFza0Nsb3NhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uek9uT2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIE5PVEU6IG9ubHkgc3VwcG9ydCBmdW5jdGlvbiBjdXJyZW50bHkgYnkgY2FsbGluZyBjb25maXJtKClcbiAgICAgIG9wdGlvbnMubnpPbk9rID0gKCkgPT4ge307IC8vIExlYXZlIGEgZW1wdHkgZnVuY3Rpb24gdG8gY2xvc2UgdGhpcyBtb2RhbCBieSBkZWZhdWx0XG4gICAgfVxuXG4gICAgb3B0aW9ucy5uek1vZGFsVHlwZSA9ICdjb25maXJtJztcbiAgICBvcHRpb25zLm56Q2xhc3NOYW1lID0gYGFudC1tb2RhbC1jb25maXJtIGFudC1tb2RhbC1jb25maXJtLSR7Y29uZmlybVR5cGV9ICR7b3B0aW9ucy5uekNsYXNzTmFtZSB8fCAnJ31gO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShvcHRpb25zKTtcbiAgfVxuXG4gIGluZm88VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnaW5mbycpO1xuICB9XG5cbiAgc3VjY2VzczxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICdzdWNjZXNzJyk7XG4gIH1cblxuICBlcnJvcjxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICdlcnJvcicpO1xuICB9XG5cbiAgd2FybmluZzxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICd3YXJuaW5nJyk7XG4gIH1cblxuICBwcml2YXRlIHNpbXBsZUNvbmZpcm08VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9LCBjb25maXJtVHlwZTogQ29uZmlybVR5cGUpOiBOek1vZGFsUmVmPFQ+IHtcbiAgICBjb25zdCBpY29uTWFwOiBJbmRleGFibGVPYmplY3QgPSB7XG4gICAgICBpbmZvOiAnaW5mby1jaXJjbGUnLFxuICAgICAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZScsXG4gICAgICBlcnJvcjogJ2Nsb3NlLWNpcmNsZScsXG4gICAgICB3YXJuaW5nOiAnZXhjbGFtYXRpb24tY2lyY2xlJ1xuICAgIH07XG4gICAgaWYgKCEoJ256SWNvblR5cGUnIGluIG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLm56SWNvblR5cGUgPSBpY29uTWFwW2NvbmZpcm1UeXBlXTtcbiAgICB9XG4gICAgaWYgKCEoJ256Q2FuY2VsVGV4dCcgaW4gb3B0aW9ucykpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgQ2FuY2VsIGJ1dHRvbiBpZiB0aGUgdXNlciBub3Qgc3BlY2lmeSBhIENhbmNlbCBidXR0b25cbiAgICAgIG9wdGlvbnMubnpDYW5jZWxUZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uZmlybShvcHRpb25zLCBjb25maXJtVHlwZSk7XG4gIH1cbn1cbiJdfQ==