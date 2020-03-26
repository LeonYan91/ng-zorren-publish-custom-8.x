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
import { warnDeprecation } from 'ng-zorro-antd/core';
/** @type {?} */
let globalCounter = 0;
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export class NzMessageBaseService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} name
     */
    constructor(nzSingletonService, overlay, containerClass, injector, cfr, appRef, name = '') {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.name = name;
        this._container = this.withContainer();
        this.nzSingletonService.registerSingletonWithKey(this.name, this._container);
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, ((/** @type {?} */ (message))), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        warnDeprecation(`'config' of 'NzMessageService' and 'NzNotificationService' is deprecated and will be removed in 9.0.0. Please use 'set' of 'NzConfigService' instead.`);
        this._container.setConfig(config);
    }
    /**
     * @protected
     * @return {?}
     */
    _generateMessageId() {
        return `${this.name}-${globalCounter++}`;
    }
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    withContainer() {
        /** @type {?} */
        const containerInstance = this.nzSingletonService.getSingletonWithKey(this.name);
        if (containerInstance) {
            return (/** @type {?} */ (containerInstance));
        }
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        // Load view into app root
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
        return componentRef.instance;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzMessageBaseService.prototype._container;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.nzSingletonService;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.containerClass;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxlQUFlLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7O0lBTXJFLGFBQWEsR0FBRyxDQUFDOzs7O0FBRXJCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7Ozs7SUFPL0IsWUFDVSxrQkFBc0MsRUFDdEMsT0FBZ0IsRUFDaEIsY0FBb0MsRUFDcEMsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0IsRUFDdEIsT0FBZSxFQUFFO1FBTmpCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBRXpCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBb0IsRUFBRSxPQUE4Qjs7Y0FDMUQsYUFBYSxxQkFDZCxDQUFDLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxFQUMxQjtZQUNELFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLE9BQU87U0FDUixDQUNGO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBcUI7UUFDMUIsZUFBZSxDQUFDLHVKQUF1SixDQUFDLENBQUM7UUFFekssSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFUyxrQkFBa0I7UUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxFQUFFLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBSU8sYUFBYTs7Y0FDYixpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVoRixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE9BQU8sbUJBQUEsaUJBQWlCLEVBQWtCLENBQUM7U0FDNUM7O2NBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7Y0FDL0QsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyw2REFBNkQ7UUFDN0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsMEJBQTBCOzs7Y0FDbkUsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsY0FBYztRQUN4RCxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxrSEFBa0g7UUFDckosV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBQSxDQUFDLG1CQUFBLFlBQVksQ0FBQyxRQUFRLEVBQXVCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWUsQ0FBQyxDQUFDO1FBRXBHLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7Ozs7OztJQWxFQywwQ0FBcUM7Ozs7O0lBR25DLGtEQUE4Qzs7Ozs7SUFDOUMsdUNBQXdCOzs7OztJQUN4Qiw4Q0FBNEM7Ozs7O0lBQzVDLHdDQUEwQjs7Ozs7SUFDMUIsbUNBQXFDOzs7OztJQUNyQyxzQ0FBOEI7Ozs7O0lBQzlCLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBOelNpbmdsZXRvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lc3NhZ2VDb25maWdMZWdhY3kgfSBmcm9tICcuL256LW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56TWVzc2FnZURhdGEsIE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcblxubGV0IGdsb2JhbENvdW50ZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQmFzZVNlcnZpY2U8XG4gIENvbnRhaW5lckNsYXNzIGV4dGVuZHMgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxuICBNZXNzYWdlRGF0YSxcbiAgTWVzc2FnZUNvbmZpZyBleHRlbmRzIE56TWVzc2FnZUNvbmZpZ0xlZ2FjeVxuPiB7XG4gIHByb3RlY3RlZCBfY29udGFpbmVyOiBDb250YWluZXJDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG56U2luZ2xldG9uU2VydmljZTogTnpTaW5nbGV0b25TZXJ2aWNlLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGNvbnRhaW5lckNsYXNzOiBUeXBlPENvbnRhaW5lckNsYXNzPixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZyA9ICcnXG4gICkge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMud2l0aENvbnRhaW5lcigpO1xuICAgIHRoaXMubnpTaW5nbGV0b25TZXJ2aWNlLnJlZ2lzdGVyU2luZ2xldG9uV2l0aEtleSh0aGlzLm5hbWUsIHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICByZW1vdmUobWVzc2FnZUlkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG1lc3NhZ2VJZCkge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2VBbGwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2VEYXRhLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICBjb25zdCByZXN1bHRNZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkID0ge1xuICAgICAgLi4uKG1lc3NhZ2UgYXMgTnpNZXNzYWdlRGF0YSksXG4gICAgICAuLi57XG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgbWVzc2FnZUlkOiB0aGlzLl9nZW5lcmF0ZU1lc3NhZ2VJZCgpLFxuICAgICAgICBvcHRpb25zXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLl9jb250YWluZXIuY3JlYXRlTWVzc2FnZShyZXN1bHRNZXNzYWdlKTtcblxuICAgIHJldHVybiByZXN1bHRNZXNzYWdlO1xuICB9XG5cbiAgY29uZmlnKGNvbmZpZzogTWVzc2FnZUNvbmZpZyk6IHZvaWQge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ2NvbmZpZycgb2YgJ056TWVzc2FnZVNlcnZpY2UnIGFuZCAnTnpOb3RpZmljYXRpb25TZXJ2aWNlJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ3NldCcgb2YgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gKTtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5zZXRDb25maWcoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2VuZXJhdGVNZXNzYWdlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5uYW1lfS0ke2dsb2JhbENvdW50ZXIrK31gO1xuICB9XG5cbiAgLy8gTWFudWFsbHkgY3JlYXRpbmcgY29udGFpbmVyIGZvciBvdmVybGF5IHRvIGF2b2lkIG11bHRpLWNoZWNraW5nIGVycm9yLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zOTFcbiAgLy8gTk9URTogd2UgbmV2ZXIgY2xlYW4gdXAgdGhlIGNvbnRhaW5lciBjb21wb25lbnQgYW5kIGl0J3Mgb3ZlcmxheSByZXNvdXJjZXMsIGlmIHdlIHNob3VsZCwgd2UgbmVlZCB0byBkbyBpdCBieSBvdXIgb3duIGNvZGVzLlxuICBwcml2YXRlIHdpdGhDb250YWluZXIoKTogQ29udGFpbmVyQ2xhc3Mge1xuICAgIGNvbnN0IGNvbnRhaW5lckluc3RhbmNlID0gdGhpcy5uelNpbmdsZXRvblNlcnZpY2UuZ2V0U2luZ2xldG9uV2l0aEtleSh0aGlzLm5hbWUpO1xuXG4gICAgaWYgKGNvbnRhaW5lckluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVySW5zdGFuY2UgYXMgQ29udGFpbmVyQ2xhc3M7XG4gICAgfVxuXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpOyAvLyBVc2Ugcm9vdCBpbmplY3RvclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7IC8vIEltbWVkaWF0ZWx5IGNoYW5nZSBkZXRlY3Rpb24gdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3JcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7IC8vIExvYWQgdmlldyBpbnRvIGFwcCByb290XG4gICAgY29uc3Qgb3ZlcmxheVBhbmUgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCkub3ZlcmxheUVsZW1lbnQ7XG4gICAgb3ZlcmxheVBhbmUuc3R5bGUuekluZGV4ID0gJzEwMTAnOyAvLyBQYXRjaGluZzogYXNzaWduIHRoZSBzYW1lIHpJbmRleCBvZiBhbnQtbWVzc2FnZSB0byBpdCdzIHBhcmVudCBvdmVybGF5IHBhbmVsLCB0byB0aGUgYW50LW1lc3NhZ2UncyB6aW5kZXggd29yay5cbiAgICBvdmVybGF5UGFuZS5hcHBlbmRDaGlsZCgoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjx7fT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICB9XG59XG4iXX0=