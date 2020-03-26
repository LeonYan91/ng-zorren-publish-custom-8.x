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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, NgZone, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, PREFIX } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function BreadcrumbOption() { }
if (false) {
    /** @type {?} */
    BreadcrumbOption.prototype.label;
    /** @type {?} */
    BreadcrumbOption.prototype.params;
    /** @type {?} */
    BreadcrumbOption.prototype.url;
}
var NzBreadCrumbComponent = /** @class */ (function () {
    function NzBreadCrumbComponent(injector, ngZone, cdr, elementRef, renderer) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzAutoGenerate = false;
        this.nzSeparator = '/';
        this.nzRouteLabel = 'breadcrumb';
        this.breadcrumbs = [];
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    /**
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    };
    /**
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.navigate = /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    function (url, e) {
        var _this = this;
        e.preventDefault();
        this.ngZone
            .run((/**
         * @return {?}
         */
        function () {
            return _this.injector
                .get(Router)
                .navigateByUrl(url)
                .then();
        }))
            .then();
    };
    /**
     * @private
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.registerRouterChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            /** @type {?} */
            var router = this.injector.get(Router);
            /** @type {?} */
            var activatedRoute_1 = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; })), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root);
                _this.cdr.markForCheck();
            }));
        }
        catch (e) {
            throw new Error(PREFIX + " You should import RouterModule if you want to use 'NzAutoGenerate'.");
        }
    };
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.getBreadcrumbs = /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    function (route, url, breadcrumbs) {
        var e_1, _a;
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        /** @type {?} */
        var children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        try {
            for (var children_1 = tslib_1.__values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.outlet === PRIMARY_OUTLET) {
                    // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                    // Parse this layer and generate a breadcrumb item.
                    /** @type {?} */
                    var routeURL = child.snapshot.url.map((/**
                     * @param {?} segment
                     * @return {?}
                     */
                    function (segment) { return segment.path; })).join('/');
                    /** @type {?} */
                    var nextUrl = url + ("/" + routeURL);
                    /** @type {?} */
                    var breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                    // If have data, go to generate a breadcrumb for it.
                    if (routeURL && breadcrumbLabel) {
                        /** @type {?} */
                        var breadcrumb = {
                            label: breadcrumbLabel,
                            params: child.snapshot.params,
                            url: nextUrl
                        };
                        breadcrumbs.push(breadcrumb);
                    }
                    return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    NzBreadCrumbComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-breadcrumb',
                    exportAs: 'nzBreadcrumb',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>\n<ng-container *ngIf=\"nzAutoGenerate\">\n  <nz-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\n    <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\n  </nz-breadcrumb-item>\n</ng-container>",
                    styles: ["\n      nz-breadcrumb {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzBreadCrumbComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzBreadCrumbComponent.propDecorators = {
        nzAutoGenerate: [{ type: Input }],
        nzSeparator: [{ type: Input }],
        nzRouteLabel: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
    return NzBreadCrumbComponent;
}());
export { NzBreadCrumbComponent };
if (false) {
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzAutoGenerate;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzSeparator;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzRouteLabel;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJuei1icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQVUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUUxRCxzQ0FJQzs7O0lBSEMsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2YsK0JBQVk7O0FBR2Q7SUF3QkUsK0JBQ1UsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLEdBQXNCLEVBQzlCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBSlgsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFYUCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QyxnQkFBVyxHQUErQixHQUFHLENBQUM7UUFDOUMsaUJBQVksR0FBVyxZQUFZLENBQUM7UUFFN0MsZ0JBQVcsR0FBbUMsRUFBRSxDQUFDO1FBRXpDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBU3JDLFFBQVEsQ0FBQyxRQUFRLENBQUMs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TSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTs0QkFDN0IsR0FBRyxFQUFFLE9BQU87eUJBQ2I7d0JBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDOUI7b0JBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBQ3pEO2FBQ0Y7Ozs7Ozs7OztJQUNILENBQUM7O2dCQTFHRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHdTQUE2Qzs2QkFFM0MsaUVBSUM7aUJBRUo7Ozs7Z0JBbkNDLFFBQVE7Z0JBRVIsTUFBTTtnQkFMTixpQkFBaUI7Z0JBRWpCLFVBQVU7Z0JBTVYsU0FBUzs7O2lDQWdDUixLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzs7SUFGbUI7UUFBZixZQUFZLEVBQUU7O2lFQUF3QjtJQTJGbEQsNEJBQUM7Q0FBQSxBQTNHRCxJQTJHQztTQTVGWSxxQkFBcUI7OztJQUNoQywrQ0FBZ0Q7O0lBQ2hELDRDQUF1RDs7SUFDdkQsNkNBQTZDOztJQUU3Qyw0Q0FBaUQ7Ozs7O0lBRWpELHlDQUF1Qzs7Ozs7SUFHckMseUNBQTBCOzs7OztJQUMxQix1Q0FBc0I7Ozs7O0lBQ3RCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFBSSU1BUllfT1VUTEVULCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBQUkVGSVggfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWJPcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICBwYXJhbXM6IFBhcmFtcztcbiAgdXJsOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1icmVhZGNydW1iJyxcbiAgZXhwb3J0QXM6ICduekJyZWFkY3J1bWInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1icmVhZGNydW1iIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56QnJlYWRDcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0dlbmVyYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U2VwYXJhdG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcvJztcbiAgQElucHV0KCkgbnpSb3V0ZUxhYmVsOiBzdHJpbmcgPSAnYnJlYWRjcnVtYic7XG5cbiAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSB8IHVuZGVmaW5lZCA9IFtdO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnJlYWRjcnVtYicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvR2VuZXJhdGUpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJSb3V0ZXJDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuYXZpZ2F0ZSh1cmw6IHN0cmluZywgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMubmdab25lXG4gICAgICAucnVuKCgpID0+XG4gICAgICAgIHRoaXMuaW5qZWN0b3JcbiAgICAgICAgICAuZ2V0KFJvdXRlcilcbiAgICAgICAgICAubmF2aWdhdGVCeVVybCh1cmwpXG4gICAgICAgICAgLnRoZW4oKVxuICAgICAgKVxuICAgICAgLnRoZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJSb3V0ZXJDaGFuZ2UoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgICBjb25zdCBhY3RpdmF0ZWRSb3V0ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBzdGFydFdpdGgodHJ1ZSkgLy8gVHJpZ2dlciBpbml0aWFsIHJlbmRlci5cbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icyhhY3RpdmF0ZWRSb3V0ZS5yb290KTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0gWW91IHNob3VsZCBpbXBvcnQgUm91dGVyTW9kdWxlIGlmIHlvdSB3YW50IHRvIHVzZSAnTnpBdXRvR2VuZXJhdGUnLmApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnJlYWRjcnVtYnMoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHVybDogc3RyaW5nID0gJycsXG4gICAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSA9IFtdXG4gICk6IEJyZWFkY3J1bWJPcHRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgY2hpbGRyZW46IEFjdGl2YXRlZFJvdXRlW10gPSByb3V0ZS5jaGlsZHJlbjtcbiAgICAvLyBJZiB0aGVyZSdzIG5vIHN1YiByb290LCB0aGVuIHN0b3AgdGhlIHJlY3Vyc2UgYW5kIHJldHVybnMgdGhlIGdlbmVyYXRlZCBicmVhZGNydW1icy5cbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChjaGlsZC5vdXRsZXQgPT09IFBSSU1BUllfT1VUTEVUKSB7XG4gICAgICAgIC8vIE9ubHkgcGFyc2UgY29tcG9uZW50cyBpbiBwcmltYXJ5IHJvdXRlci1vdXRsZXQgKGluIGFub3RoZXIgd29yZCwgcm91dGVyLW91dGxldCB3aXRob3V0IGEgc3BlY2lmaWMgbmFtZSkuXG4gICAgICAgIC8vIFBhcnNlIHRoaXMgbGF5ZXIgYW5kIGdlbmVyYXRlIGEgYnJlYWRjcnVtYiBpdGVtLlxuICAgICAgICBjb25zdCByb3V0ZVVSTDogc3RyaW5nID0gY2hpbGQuc25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICBjb25zdCBuZXh0VXJsID0gdXJsICsgYC8ke3JvdXRlVVJMfWA7XG4gICAgICAgIGNvbnN0IGJyZWFkY3J1bWJMYWJlbCA9IGNoaWxkLnNuYXBzaG90LmRhdGFbdGhpcy5uelJvdXRlTGFiZWxdO1xuICAgICAgICAvLyBJZiBoYXZlIGRhdGEsIGdvIHRvIGdlbmVyYXRlIGEgYnJlYWRjcnVtYiBmb3IgaXQuXG4gICAgICAgIGlmIChyb3V0ZVVSTCAmJiBicmVhZGNydW1iTGFiZWwpIHtcbiAgICAgICAgICBjb25zdCBicmVhZGNydW1iOiBCcmVhZGNydW1iT3B0aW9uID0ge1xuICAgICAgICAgICAgbGFiZWw6IGJyZWFkY3J1bWJMYWJlbCxcbiAgICAgICAgICAgIHBhcmFtczogY2hpbGQuc25hcHNob3QucGFyYW1zLFxuICAgICAgICAgICAgdXJsOiBuZXh0VXJsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyZWFkY3J1bWJzKGNoaWxkLCBuZXh0VXJsLCBicmVhZGNydW1icyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=