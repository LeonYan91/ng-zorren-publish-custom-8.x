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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzCopyToClipboardService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class NzTextCopyComponent {
    /**
     * @param {?} host
     * @param {?} cdr
     * @param {?} copyToClipboard
     * @param {?} i18n
     */
    constructor(host, cdr, copyToClipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.copyToClipboard = copyToClipboard;
        this.i18n = i18n;
        this.copied = false;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.nativeElement = this.host.nativeElement;
        this.destroy$ = new Subject();
        this.textCopy = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        /** @type {?} */
        const text = this.text;
        this.textCopy.emit(text);
        this.copyToClipboard
            .copy(text)
            .then((/**
         * @return {?}
         */
        () => this.onCopied()))
            .catch((/**
         * @return {?}
         */
        () => this.onCopied()));
    }
    /**
     * @return {?}
     */
    onCopied() {
        clearTimeout(this.copyId);
        this.copyId = setTimeout((/**
         * @return {?}
         */
        () => {
            this.copied = false;
            this.cdr.detectChanges();
        }), 3000);
    }
}
NzTextCopyComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-text-copy',
                exportAs: 'nzTextCopy',
                template: "<button\n  nz-tooltip\n  nz-trans-button\n  [nzTitle]=\"copied ? locale?.copied : locale?.copy\"\n  class=\"ant-typography-copy\"\n  [class.ant-typography-copy-success]=\"copied\"\n  (click)=\"onClick()\">\n  <i nz-icon [nzType]=\"copied ? 'check' : 'copy'\"></i>\n</button>\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzTextCopyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzCopyToClipboardService },
    { type: NzI18nService }
];
NzTextCopyComponent.propDecorators = {
    text: [{ type: Input }],
    textCopy: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTextCopyComponent.prototype.copied;
    /** @type {?} */
    NzTextCopyComponent.prototype.copyId;
    /** @type {?} */
    NzTextCopyComponent.prototype.locale;
    /** @type {?} */
    NzTextCopyComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.destroy$;
    /** @type {?} */
    NzTextCopyComponent.prototype.text;
    /** @type {?} */
    NzTextCopyComponent.prototype.textCopy;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.copyToClipboard;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1jb3B5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtY29weS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVM0MsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQVc5QixZQUNVLElBQWdCLEVBQ2hCLEdBQXNCLEVBQ3RCLGVBQXlDLEVBQ3pDLElBQW1CO1FBSG5CLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBQ3pDLFNBQUksR0FBSixJQUFJLENBQWU7UUFkN0IsV0FBTSxHQUFHLEtBQUssQ0FBQzs7UUFHZixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHZCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQU90RCxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ25FLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDOztjQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWU7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLElBQUk7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQzthQUMzQixLQUFLOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsa1NBQTRDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFyQkMsVUFBVTtZQUZWLGlCQUFpQjtZQVdWLHdCQUF3QjtZQUN4QixhQUFhOzs7bUJBb0JuQixLQUFLO3VCQUNMLE1BQU07Ozs7SUFSUCxxQ0FBZTs7SUFDZixxQ0FBZTs7SUFFZixxQ0FBaUI7O0lBQ2pCLDRDQUF3Qzs7Ozs7SUFDeEMsdUNBQWlDOztJQUVqQyxtQ0FBc0I7O0lBQ3RCLHVDQUF5RDs7Ozs7SUFHdkQsbUNBQXdCOzs7OztJQUN4QixrQ0FBOEI7Ozs7O0lBQzlCLDhDQUFpRDs7Ozs7SUFDakQsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10ZXh0LWNvcHknLFxuICBleHBvcnRBczogJ256VGV4dENvcHknLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGV4dC1jb3B5LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE56VGV4dENvcHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvcGllZCA9IGZhbHNlO1xuICBjb3B5SWQ6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBuYXRpdmVFbGVtZW50ID0gdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRleHRDb3B5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNvcHlUb0NsaXBib2FyZDogTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlLFxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RleHQnKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY29weUlkKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvcGllZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvcGllZCA9IHRydWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy50ZXh0Q29weS5lbWl0KHRleHQpO1xuICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkXG4gICAgICAuY29weSh0ZXh0KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbkNvcGllZCgpKVxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMub25Db3BpZWQoKSk7XG4gIH1cblxuICBvbkNvcGllZCgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jb3B5SWQpO1xuICAgIHRoaXMuY29weUlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvcGllZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0sIDMwMDApO1xuICB9XG59XG4iXX0=