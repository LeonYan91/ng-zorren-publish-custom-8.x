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
export class NzBreadCrumbComponent {
    /**
     * @param {?} injector
     * @param {?} ngZone
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(injector, ngZone, cdr, elementRef, renderer) {
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
    ngOnInit() {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    navigate(url, e) {
        e.preventDefault();
        this.ngZone
            .run((/**
         * @return {?}
         */
        () => this.injector
            .get(Router)
            .navigateByUrl(url)
            .then()))
            .then();
    }
    /**
     * @private
     * @return {?}
     */
    registerRouterChange() {
        try {
            /** @type {?} */
            const router = this.injector.get(Router);
            /** @type {?} */
            const activatedRoute = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd)), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                this.cdr.markForCheck();
            }));
        }
        catch (e) {
            throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
        }
    }
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        /** @type {?} */
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                /** @type {?} */
                const routeURL = child.snapshot.url.map((/**
                 * @param {?} segment
                 * @return {?}
                 */
                segment => segment.path)).join('/');
                /** @type {?} */
                const nextUrl = url + `/${routeURL}`;
                /** @type {?} */
                const breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                // If have data, go to generate a breadcrumb for it.
                if (routeURL && breadcrumbLabel) {
                    /** @type {?} */
                    const breadcrumb = {
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
}
NzBreadCrumbComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>\n<ng-container *ngIf=\"nzAutoGenerate\">\n  <nz-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\n    <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\n  </nz-breadcrumb-item>\n</ng-container>",
                styles: [`
      nz-breadcrumb {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzBreadCrumbComponent.ctorParameters = () => [
    { type: Injector },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
NzBreadCrumbComponent.propDecorators = {
    nzAutoGenerate: [{ type: Input }],
    nzSeparator: [{ type: Input }],
    nzRouteLabel: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJuei1icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQVUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUUxRCxzQ0FJQzs7O0lBSEMsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2YsK0JBQVk7O0FBa0JkLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBU2hDLFlBQ1UsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLEdBQXNCLEVBQzlCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBSlgsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFYUCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QyxnQkFBVyxHQUErQixHQUFHLENBQUM7UUFDOUMsaUJBQVksR0FBVyxZQUFZLENBQUM7UUFFN0MsZ0JBQVcsR0FBbUMsRUFBRSxDQUFDO1FBRXpDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FB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QUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7SUFDSCxDQUFDOzs7WUExR0YsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQix3U0FBNkM7eUJBRTNDOzs7O0tBSUM7YUFFSjs7OztZQW5DQyxRQUFRO1lBRVIsTUFBTTtZQUxOLGlCQUFpQjtZQUVqQixVQUFVO1lBTVYsU0FBUzs7OzZCQWdDUixLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7QUFGbUI7SUFBZixZQUFZLEVBQUU7OzZEQUF3Qjs7O0lBQWhELCtDQUFnRDs7SUFDaEQsNENBQXVEOztJQUN2RCw2Q0FBNkM7O0lBRTdDLDRDQUFpRDs7Ozs7SUFFakQseUNBQXVDOzs7OztJQUdyQyx5Q0FBMEI7Ozs7O0lBQzFCLHVDQUFzQjs7Ozs7SUFDdEIsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFBhcmFtcywgUFJJTUFSWV9PVVRMRVQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYk9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBhcmFtczogUGFyYW1zO1xuICB1cmw6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWJyZWFkY3J1bWInLFxuICBleHBvcnRBczogJ256QnJlYWRjcnVtYicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWJyZWFkY3J1bWIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpCcmVhZENydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvR2VuZXJhdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpTZXBhcmF0b3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJy8nO1xuICBASW5wdXQoKSBuelJvdXRlTGFiZWw6IHN0cmluZyA9ICdicmVhZGNydW1iJztcblxuICBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdIHwgdW5kZWZpbmVkID0gW107XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1icmVhZGNydW1iJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekF1dG9HZW5lcmF0ZSkge1xuICAgICAgdGhpcy5yZWdpc3RlclJvdXRlckNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5hdmlnYXRlKHVybDogc3RyaW5nLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5uZ1pvbmVcbiAgICAgIC5ydW4oKCkgPT5cbiAgICAgICAgdGhpcy5pbmplY3RvclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxuICAgICAgICAgIC5uYXZpZ2F0ZUJ5VXJsKHVybClcbiAgICAgICAgICAudGhlbigpXG4gICAgICApXG4gICAgICAudGhlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclJvdXRlckNoYW5nZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICAgIGNvbnN0IGFjdGl2YXRlZFJvdXRlID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xuICAgICAgcm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSAvLyBUcmlnZ2VyIGluaXRpYWwgcmVuZGVyLlxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLmdldEJyZWFkY3J1bWJzKGFjdGl2YXRlZFJvdXRlLnJvb3QpO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSBZb3Ugc2hvdWxkIGltcG9ydCBSb3V0ZXJNb2R1bGUgaWYgeW91IHdhbnQgdG8gdXNlICdOekF1dG9HZW5lcmF0ZScuYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRCcmVhZGNydW1icyhcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgdXJsOiBzdHJpbmcgPSAnJyxcbiAgICBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdID0gW11cbiAgKTogQnJlYWRjcnVtYk9wdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBjaGlsZHJlbjogQWN0aXZhdGVkUm91dGVbXSA9IHJvdXRlLmNoaWxkcmVuO1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gc3ViIHJvb3QsIHRoZW4gc3RvcCB0aGUgcmVjdXJzZSBhbmQgcmV0dXJucyB0aGUgZ2VuZXJhdGVkIGJyZWFkY3J1bWJzLlxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkLm91dGxldCA9PT0gUFJJTUFSWV9PVVRMRVQpIHtcbiAgICAgICAgLy8gT25seSBwYXJzZSBjb21wb25lbnRzIGluIHByaW1hcnkgcm91dGVyLW91dGxldCAoaW4gYW5vdGhlciB3b3JkLCByb3V0ZXItb3V0bGV0IHdpdGhvdXQgYSBzcGVjaWZpYyBuYW1lKS5cbiAgICAgICAgLy8gUGFyc2UgdGhpcyBsYXllciBhbmQgZ2VuZXJhdGUgYSBicmVhZGNydW1iIGl0ZW0uXG4gICAgICAgIGNvbnN0IHJvdXRlVVJMOiBzdHJpbmcgPSBjaGlsZC5zbmFwc2hvdC51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XG4gICAgICAgIGNvbnN0IG5leHRVcmwgPSB1cmwgKyBgLyR7cm91dGVVUkx9YDtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYkxhYmVsID0gY2hpbGQuc25hcHNob3QuZGF0YVt0aGlzLm56Um91dGVMYWJlbF07XG4gICAgICAgIC8vIElmIGhhdmUgZGF0YSwgZ28gdG8gZ2VuZXJhdGUgYSBicmVhZGNydW1iIGZvciBpdC5cbiAgICAgICAgaWYgKHJvdXRlVVJMICYmIGJyZWFkY3J1bWJMYWJlbCkge1xuICAgICAgICAgIGNvbnN0IGJyZWFkY3J1bWI6IEJyZWFkY3J1bWJPcHRpb24gPSB7XG4gICAgICAgICAgICBsYWJlbDogYnJlYWRjcnVtYkxhYmVsLFxuICAgICAgICAgICAgcGFyYW1zOiBjaGlsZC5zbmFwc2hvdC5wYXJhbXMsXG4gICAgICAgICAgICB1cmw6IG5leHRVcmxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnJlYWRjcnVtYnMoY2hpbGQsIG5leHRVcmwsIGJyZWFkY3J1bWJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==