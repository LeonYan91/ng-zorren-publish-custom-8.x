import { CommonModule } from '@angular/common';
import { Directive, ComponentFactoryResolver, ViewContainerRef, Input, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, ContentChildren, NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCommentAvatarDirective {
}
NzCommentAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-avatar[nz-comment-avatar]',
                exportAs: 'nzCommentAvatar'
            },] }
];
class NzCommentContentDirective {
}
NzCommentContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-comment-content, [nz-comment-content]',
                exportAs: 'nzCommentContent',
                host: { class: 'ant-comment-content-detail' }
            },] }
];
class NzCommentActionHostDirective extends CdkPortalOutlet {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} viewContainerRef
     */
    constructor(componentFactoryResolver, viewContainerRef) {
        super(componentFactoryResolver, viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.attach(this.nzCommentActionHost);
    }
}
NzCommentActionHostDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzCommentActionHost]',
                exportAs: 'nzCommentActionHost'
            },] }
];
/** @nocollapse */
NzCommentActionHostDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
NzCommentActionHostDirective.propDecorators = {
    nzCommentActionHost: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzCommentActionHostDirective.prototype.nzCommentActionHost;
}
class NzCommentActionComponent {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    /**
     * @return {?}
     */
    get content() {
        return this.contentPortal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    }
}
NzCommentActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-comment-action',
                exportAs: 'nzCommentAction',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }] }
];
/** @nocollapse */
NzCommentActionComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
NzCommentActionComponent.propDecorators = {
    implicitContent: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
};
if (false) {
    /** @type {?} */
    NzCommentActionComponent.prototype.implicitContent;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.contentPortal;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCommentComponent {
    constructor() { }
}
NzCommentComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-comment',
                exportAs: 'nzComment',
                template: "<div class=\"ant-comment-inner\">\n  <div class=\"ant-comment-avatar\">\n    <ng-content select=\"nz-avatar[nz-comment-avatar]\"></ng-content>\n  </div>\n  <div class=\"ant-comment-content\">\n    <div class=\"ant-comment-content-author\">\n      <span *ngIf=\"nzAuthor\" class=\"ant-comment-content-author-name\">\n        <ng-container *nzStringTemplateOutlet=\"nzAuthor\">{{ nzAuthor }}</ng-container>\n      </span>\n      <span *ngIf=\"nzDatetime\" class=\"ant-comment-content-author-time\">\n        <ng-container *nzStringTemplateOutlet=\"nzDatetime\">{{ nzDatetime }}</ng-container>\n      </span>\n    </div>\n    <ng-content select=\"nz-comment-content\"></ng-content>\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\n      <li *ngFor=\"let action of actions\">\n        <span><ng-template [nzCommentActionHost]=\"action.content\"></ng-template></span>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"ant-comment-nested\">\n  <ng-content></ng-content>\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-comment'
                },
                styles: [`
      nz-comment {
        display: block;
      }

      nz-comment-content {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCommentComponent.ctorParameters = () => [];
NzCommentComponent.propDecorators = {
    nzAuthor: [{ type: Input }],
    nzDatetime: [{ type: Input }],
    actions: [{ type: ContentChildren, args: [NzCommentActionComponent,] }]
};
if (false) {
    /** @type {?} */
    NzCommentComponent.prototype.nzAuthor;
    /** @type {?} */
    NzCommentComponent.prototype.nzDatetime;
    /** @type {?} */
    NzCommentComponent.prototype.actions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
class NzCommentModule {
}
NzCommentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule],
                exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
                declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentComponent, NzCommentContentDirective, NzCommentModule };
//# sourceMappingURL=ng-zorro-antd-comment.js.map
