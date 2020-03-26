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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { cancelRequestAnimationFrame, isStyleSupport, measure, reqAnimFrame, InputBoolean, InputNumber, NzConfigService, NzDomEventService, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTextCopyComponent } from './nz-text-copy.component';
import { NzTextEditComponent } from './nz-text-edit.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'typography';
export class NzTypographyComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} host
     * @param {?} cdr
     * @param {?} viewContainerRef
     * @param {?} renderer
     * @param {?} platform
     * @param {?} i18n
     * @param {?} nzDomEventService
     */
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, nzDomEventService) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.nzDomEventService = nzDomEventService;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzContentChange = new EventEmitter();
        this.nzCopy = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = false;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new Subject();
        this.windowResizeSubscription = Subscription.EMPTY;
    }
    /**
     * @return {?}
     */
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded;
    }
    /**
     * @return {?}
     */
    get copyText() {
        return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    /**
     * @return {?}
     */
    onStartEditing() {
        this.editing = true;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    }
    /**
     * @return {?}
     */
    onExpand() {
        this.expanded = true;
        this.nzExpandChange.emit();
    }
    /**
     * @return {?}
     */
    canUseCSSEllipsis() {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    }
    /**
     * @return {?}
     */
    renderOnNextFrame() {
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame((/**
         * @return {?}
         */
        () => {
            this.syncEllipsis();
        }));
    }
    /**
     * @return {?}
     */
    getOriginContentViewRef() {
        /** @type {?} */
        const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: (/**
             * @return {?}
             */
            () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            })
        };
    }
    /**
     * @return {?}
     */
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        /** @type {?} */
        const fixedNodes = [this.textCopyRef, this.textEditRef, this.expandableBtn]
            .filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e && e.nativeElement))
            .map((/**
         * @param {?} e
         * @return {?}
         */
        e => e.nativeElement));
        const { contentNodes, text, ellipsis } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr);
        removeView();
        this.ellipsisText = text;
        this.isEllipsis = ellipsis;
        /** @type {?} */
        const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        }));
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.renderOnNextFrame()));
        }
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
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzCopyable, nzEditable, nzExpandable, nzEllipsis, nzContent, nzEllipsisRows } = changes;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.windowResizeSubscription.unsubscribe();
    }
}
NzTypographyComponent.decorators = [
    { type: Component, args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                template: "<ng-template #contentTemplate let-content=\"content\">\n  <ng-content *ngIf=\"!content\"></ng-content>\n  {{content}}\n</ng-template>\n\n<ng-container *ngIf=\"!editing\">\n  <ng-container *ngIf=\"expanded || (!nzExpandable && nzEllipsisRows === 1) || canCssEllipsis\">\n    <ng-template [ngTemplateOutlet]=\"contentTemplate\" [ngTemplateOutletContext]=\"{ content: nzContent}\"></ng-template>\n  </ng-container>\n  <ng-container *ngIf=\"nzEllipsis && !expanded && (nzEllipsisRows > 1 || nzExpandable)\">\n    <span #ellipsisContainer></span>\n    <ng-container *ngIf=\"isEllipsis\">{{ellipsisStr}}</ng-container>\n    <a #expandable *ngIf=\"nzExpandable && isEllipsis\" class=\"ant-typography-expand\" (click)=\"onExpand()\">{{locale?.expand}}</a>\n  </ng-container>\n</ng-container>\n\n<nz-text-edit\n  *ngIf=\"nzEditable\"\n  [text]=\"nzContent\"\n  (endEditing)=\"onEndEditing($event)\"\n  (startEditing)=\"onStartEditing()\">\n</nz-text-edit>\n\n<nz-text-copy *ngIf=\"nzCopyable && !editing\" [text]=\"copyText\" (textCopy)=\"onTextCopy($event)\"></nz-text-copy>\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-typography]': '!editing',
                    '[class.ant-typography-edit-content]': 'editing',
                    '[class.ant-typography-secondary]': 'nzType === "secondary"',
                    '[class.ant-typography-warning]': 'nzType === "warning"',
                    '[class.ant-typography-danger]': 'nzType === "danger"',
                    '[class.ant-typography-disabled]': 'nzDisabled',
                    '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                    '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                    '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                    '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                }
            }] }
];
/** @nocollapse */
NzTypographyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Platform },
    { type: NzI18nService },
    { type: NzDomEventService }
];
NzTypographyComponent.propDecorators = {
    nzCopyable: [{ type: Input }],
    nzEditable: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzExpandable: [{ type: Input }],
    nzEllipsis: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzEllipsisRows: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCopyText: [{ type: Input }],
    nzContentChange: [{ type: Output }],
    nzCopy: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    textEditRef: [{ type: ViewChild, args: [NzTextEditComponent, { static: false },] }],
    textCopyRef: [{ type: ViewChild, args: [NzTextCopyComponent, { static: false },] }],
    ellipsisContainer: [{ type: ViewChild, args: ['ellipsisContainer', { static: false },] }],
    expandableBtn: [{ type: ViewChild, args: ['expandable', { static: false },] }],
    contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: false },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1), InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
if (false) {
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEditable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContent;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsisRows;
    /** @type {?} */
    NzTypographyComponent.prototype.nzType;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyText;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContentChange;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopy;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTypographyComponent.prototype.textEditRef;
    /** @type {?} */
    NzTypographyComponent.prototype.textCopyRef;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisContainer;
    /** @type {?} */
    NzTypographyComponent.prototype.expandableBtn;
    /** @type {?} */
    NzTypographyComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTypographyComponent.prototype.locale;
    /** @type {?} */
    NzTypographyComponent.prototype.editing;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisText;
    /** @type {?} */
    NzTypographyComponent.prototype.cssEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.isEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.expanded;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisStr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewInit;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.rfaId;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.windowResizeSubscription;
    /** @type {?} */
    NzTypographyComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUNMLDJCQUEyQixFQUMzQixjQUFjLEVBQ2QsT0FBTyxFQUNQLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUV6RCx3QkFBd0IsR0FBRyxZQUFZO0FBNEI3QyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7Ozs7OztJQXlDaEMsWUFDUyxlQUFnQyxFQUMvQixJQUE2QixFQUM3QixHQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsUUFBbUIsRUFDbkIsUUFBa0IsRUFDbEIsSUFBbUIsRUFDbkIsaUJB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QzFCLHFDQUEyQjs7Ozs7SUFDM0Isa0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gIGlzU3R5bGVTdXBwb3J0LFxuICBtZWFzdXJlLFxuICByZXFBbmltRnJhbWUsXG4gIElucHV0Qm9vbGVhbixcbiAgSW5wdXROdW1iZXIsXG4gIE56Q29uZmlnU2VydmljZSxcbiAgTnpEb21FdmVudFNlcnZpY2UsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBOelRleHRDb3B5Q29tcG9uZW50IH0gZnJvbSAnLi9uei10ZXh0LWNvcHkuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGV4dEVkaXRDb21wb25lbnQgfSBmcm9tICcuL256LXRleHQtZWRpdC5jb21wb25lbnQnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHlwb2dyYXBoeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYFxuICBuei10eXBvZ3JhcGh5LFxuICBbbnotdHlwb2dyYXBoeV0sXG4gIHBbbnotcGFyYWdyYXBoXSxcbiAgc3Bhbltuei10ZXh0XSxcbiAgaDFbbnotdGl0bGVdLCBoMltuei10aXRsZV0sIGgzW256LXRpdGxlXSwgaDRbbnotdGl0bGVdXG4gIGAsXG4gIGV4cG9ydEFzOiAnbnpUeXBvZ3JhcGh5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXR5cG9ncmFwaHkuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5XSc6ICchZWRpdGluZycsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lZGl0LWNvbnRlbnRdJzogJ2VkaXRpbmcnLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktc2Vjb25kYXJ5XSc6ICduelR5cGUgPT09IFwic2Vjb25kYXJ5XCInLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktd2FybmluZ10nOiAnbnpUeXBlID09PSBcIndhcm5pbmdcIicsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1kYW5nZXJdJzogJ256VHlwZSA9PT0gXCJkYW5nZXJcIicsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lbGxpcHNpc10nOiAnbnpFbGxpcHNpcyAmJiAhZXhwYW5kZWQnLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWxsaXBzaXMtc2luZ2xlLWxpbmVdJzogJ2NhbkNzc0VsbGlwc2lzICYmIG56RWxsaXBzaXNSb3dzID09PSAxJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVsbGlwc2lzLW11bHRpcGxlLWxpbmVdJzogJ2NhbkNzc0VsbGlwc2lzICYmIG56RWxsaXBzaXNSb3dzID4gMScsXG4gICAgJ1tzdHlsZS4td2Via2l0LWxpbmUtY2xhbXBdJzogJyhjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA+IDEpID8gbnpFbGxpcHNpc1Jvd3MgOiBudWxsJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHlwb2dyYXBoeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb3B5YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFZGl0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekVsbGlwc2lzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDEpIEBJbnB1dE51bWJlcigpIG56RWxsaXBzaXNSb3dzOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56VHlwZTogJ3NlY29uZGFyeScgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbnpDb3B5VGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvcHkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoTnpUZXh0RWRpdENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRFZGl0UmVmOiBOelRleHRFZGl0Q29tcG9uZW50O1xuICBAVmlld0NoaWxkKE56VGV4dENvcHlDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0Q29weVJlZjogTnpUZXh0Q29weUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZWxsaXBzaXNDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgZWxsaXBzaXNDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnZXhwYW5kYWJsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBleHBhbmRhYmxlQnRuOiBFbGVtZW50UmVmPEhUTUxTcGFuRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRUZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgY29udGVudDogc3RyaW5nIH0+O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgZWRpdGluZyA9IGZhbHNlO1xuICBlbGxpcHNpc1RleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3NzRWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNFbGxpcHNpczogYm9vbGVhbiA9IGZhbHNlO1xuICBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBlbGxpcHNpc1N0ciA9ICcuLi4nO1xuXG4gIGdldCBjYW5Dc3NFbGxpcHNpcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekVsbGlwc2lzICYmIHRoaXMuY3NzRWxsaXBzaXMgJiYgIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICBwcml2YXRlIHZpZXdJbml0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmZhSWQ6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSB3aW5kb3dSZXNpemVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGdldCBjb3B5VGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5uekNvcHlUZXh0ID09PSAnc3RyaW5nJyA/IHRoaXMubnpDb3B5VGV4dCA6IHRoaXMubnpDb250ZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlXG4gICkge31cblxuICBvblRleHRDb3B5KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubnpDb3B5LmVtaXQodGV4dCk7XG4gIH1cblxuICBvblN0YXJ0RWRpdGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgb25FbmRFZGl0aW5nKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMubnpDb250ZW50Q2hhbmdlLmVtaXQodGV4dCk7XG4gICAgaWYgKHRoaXMubnpDb250ZW50ID09PSB0ZXh0KSB7XG4gICAgICB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCk7XG4gICAgfVxuICB9XG5cbiAgb25FeHBhbmQoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XG4gICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KCk7XG4gIH1cblxuICBjYW5Vc2VDU1NFbGxpcHNpcygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uekVkaXRhYmxlIHx8IHRoaXMubnpDb3B5YWJsZSB8fCB0aGlzLm56RXhwYW5kYWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5uekVsbGlwc2lzUm93cyA9PT0gMSkge1xuICAgICAgcmV0dXJuIGlzU3R5bGVTdXBwb3J0KCd0ZXh0T3ZlcmZsb3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzU3R5bGVTdXBwb3J0KCd3ZWJraXRMaW5lQ2xhbXAnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJPbk5leHRGcmFtZSgpOiB2b2lkIHtcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZmFJZCk7XG4gICAgaWYgKCF0aGlzLnZpZXdJbml0IHx8ICF0aGlzLm56RWxsaXBzaXMgfHwgdGhpcy5uekVsbGlwc2lzUm93cyA8IDAgfHwgdGhpcy5leHBhbmRlZCB8fCAhdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZmFJZCA9IHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnN5bmNFbGxpcHNpcygpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0T3JpZ2luQ29udGVudFZpZXdSZWYoKTogeyB2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8eyBjb250ZW50OiBzdHJpbmcgfT47IHJlbW92ZVZpZXcoKTogdm9pZCB9IHtcbiAgICBjb25zdCB2aWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldzx7IGNvbnRlbnQ6IHN0cmluZyB9Pih0aGlzLmNvbnRlbnRUZW1wbGF0ZSwge1xuICAgICAgY29udGVudDogdGhpcy5uekNvbnRlbnRcbiAgICB9KTtcbiAgICB2aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmlld1JlZixcbiAgICAgIHJlbW92ZVZpZXc6ICgpID0+IHtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLnJlbW92ZSh0aGlzLnZpZXdDb250YWluZXJSZWYuaW5kZXhPZih2aWV3UmVmKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN5bmNFbGxpcHNpcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jc3NFbGxpcHNpcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHZpZXdSZWYsIHJlbW92ZVZpZXcgfSA9IHRoaXMuZ2V0T3JpZ2luQ29udGVudFZpZXdSZWYoKTtcbiAgICBjb25zdCBmaXhlZE5vZGVzID0gW3RoaXMudGV4dENvcHlSZWYsIHRoaXMudGV4dEVkaXRSZWYsIHRoaXMuZXhwYW5kYWJsZUJ0bl1cbiAgICAgIC5maWx0ZXIoZSA9PiBlICYmIGUubmF0aXZlRWxlbWVudClcbiAgICAgIC5tYXAoZSA9PiBlLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgeyBjb250ZW50Tm9kZXMsIHRleHQsIGVsbGlwc2lzIH0gPSBtZWFzdXJlKFxuICAgICAgdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLm56RWxsaXBzaXNSb3dzLFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMsXG4gICAgICBmaXhlZE5vZGVzLFxuICAgICAgdGhpcy5lbGxpcHNpc1N0clxuICAgICk7XG5cbiAgICByZW1vdmVWaWV3KCk7XG5cbiAgICB0aGlzLmVsbGlwc2lzVGV4dCA9IHRleHQ7XG4gICAgdGhpcy5pc0VsbGlwc2lzID0gZWxsaXBzaXM7XG4gICAgY29uc3QgZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50ID0gdGhpcy5lbGxpcHNpc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIHdoaWxlIChlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQsIGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29udGVudE5vZGVzLmZvckVhY2gobiA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudCwgbi5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH0pO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJBbmRTdWJzY3JpYmVXaW5kb3dSZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jc3NFbGxpcHNpcyA9IHRoaXMuY2FuVXNlQ1NTRWxsaXBzaXMoKTtcbiAgICAgIHRoaXMucmVuZGVyT25OZXh0RnJhbWUoKTtcbiAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uID0gdGhpcy5uekRvbUV2ZW50U2VydmljZVxuICAgICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW5kZXJPbk5leHRGcmFtZSgpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGV4dCcpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XG4gICAgdGhpcy5yZW5kZXJBbmRTdWJzY3JpYmVXaW5kb3dSZXNpemUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56Q29weWFibGUsIG56RWRpdGFibGUsIG56RXhwYW5kYWJsZSwgbnpFbGxpcHNpcywgbnpDb250ZW50LCBuekVsbGlwc2lzUm93cyB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpDb3B5YWJsZSB8fCBuekVkaXRhYmxlIHx8IG56RXhwYW5kYWJsZSB8fCBuekVsbGlwc2lzIHx8IG56Q29udGVudCB8fCBuekVsbGlwc2lzUm93cykge1xuICAgICAgaWYgKHRoaXMubnpFbGxpcHNpcykge1xuICAgICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xuICAgICAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJBbmRTdWJzY3JpYmVXaW5kb3dSZXNpemUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=