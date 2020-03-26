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
/** get some code from https://github.com/angular/material2 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge, Subject, Subscription } from 'rxjs';
import { toNumber, InputBoolean, NzConfigService, NzUpdateHostClassService, PREFIX, WithConfig } from 'ng-zorro-antd/core';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
/**
 * @record
 */
export function NzAnimatedInterface() { }
if (false) {
    /** @type {?} */
    NzAnimatedInterface.prototype.inkBar;
    /** @type {?} */
    NzAnimatedInterface.prototype.tabPane;
}
export class NzTabChangeEvent {
}
if (false) {
    /** @type {?} */
    NzTabChangeEvent.prototype.index;
    /** @type {?} */
    NzTabChangeEvent.prototype.tab;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'tabs';
export class NzTabSetComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} router
     */
    constructor(nzConfigService, renderer, nzUpdateHostClassService, elementRef, cdr, router) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.router = router;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        /**
         * Subscription to tabs being added/removed.
         */
        this.tabsSubscription = Subscription.EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */
        this.tabLabelSubscription = Subscription.EMPTY;
        this.destroy$ = new Subject();
        this.tabPositionMode = 'horizontal';
        this.nzHideAll = false;
        this.nzTabPosition = 'top';
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectedIndex(value) {
        this.indexToSelect = value ? toNumber(value, null) : null;
    }
    /**
     * @return {?}
     */
    get nzSelectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get inkBarAnimated() {
        return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).inkBar === true;
    }
    /**
     * @return {?}
     */
    get tabPaneAnimated() {
        return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).tabPane === true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setPosition(value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`ant-tabs`]: true,
            [`ant-tabs-vertical`]: this.nzTabPosition === 'left' || this.nzTabPosition === 'right',
            [`ant-tabs-${this.nzTabPosition}`]: this.nzTabPosition,
            [`ant-tabs-no-animation`]: this.nzAnimated === false || ((/** @type {?} */ (this.nzAnimated))).tabPane === false,
            [`ant-tabs-${this.nzType}`]: this.nzType,
            [`ant-tabs-large`]: this.nzSize === 'large',
            [`ant-tabs-small`]: this.nzSize === 'small'
        });
    }
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled) {
            /** @type {?} */
            const tabs = this.listOfNzTabComponent.toArray();
            this.nzSelectedIndex = index;
            tabs[index].nzClick.emit();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    createChangeEvent(index) {
        /** @type {?} */
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            (item, i) => {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            }));
            event.tab.nzSelect.emit();
        }
        return event;
    }
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge(...this.listOfNzTabComponent.map((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.stateChanges))).subscribe((/**
         * @return {?}
         */
        () => this.cdr.markForCheck()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTabPosition) {
            if (this.nzTabPosition === 'top' || this.nzTabPosition === 'bottom') {
                this.tabPositionMode = 'horizontal';
            }
            else {
                this.tabPositionMode = 'vertical';
            }
            this.setPosition(this.nzTabPosition);
        }
        if (changes.nzType) {
            if (this.nzType === 'card') {
                this.nzAnimated = false;
            }
        }
        if (changes.nzSize || changes.nzAnimated || changes.nzTabPosition || changes.nzType) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect) {
                /** @type {?} */
                const isFirstRun = this._selectedIndex == null;
                if (!isFirstRun) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    (tab, index) => (tab.isActive = index === indexToSelect)));
                    if (!isFirstRun) {
                        this.nzSelectedIndexChange.emit(indexToSelect);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            (tab, index) => {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect) {
                this._selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this._selectedIndex) {
                /** @type {?} */
                const tabs = this.listOfNzTabComponent.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        this.indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setPosition(this.nzTabPosition);
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd)), startWith(true))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateRouterActive() {
        if (this.router.navigated) {
            /** @type {?} */
            const index = this.findShouldActiveTabIndex();
            if (index !== this._selectedIndex) {
                this.nzSelectedIndex = index;
                this.nzSelectedIndexChange.emit(index);
            }
            this.nzHideAll = index === -1;
        }
    }
    /**
     * @private
     * @return {?}
     */
    findShouldActiveTabIndex() {
        /** @type {?} */
        const tabs = this.listOfNzTabComponent.toArray();
        /** @type {?} */
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            /** @type {?} */
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        }));
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    isLinkActive(router) {
        return (/**
         * @param {?=} link
         * @return {?}
         */
        (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false));
    }
}
NzTabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                template: "<ng-container *ngIf=\"listOfNzTabComponent\">\n  <div nz-tabs-nav\n    role=\"tablist\"\n    tabindex=\"0\"\n    class=\"ant-tabs-bar\"\n    [class.ant-tabs-card-bar]=\"nzType === 'card'\"\n    [class.ant-tabs-top-bar]=\"nzTabPosition === 'top'\"\n    [class.ant-tabs-bottom-bar]=\"nzTabPosition === 'bottom'\"\n    [class.ant-tabs-left-bar]=\"nzTabPosition === 'left'\"\n    [class.ant-tabs-right-bar]=\"nzTabPosition === 'right'\"\n    [class.ant-tabs-small-bar]=\"nzSize === 'small'\"\n    [class.ant-tabs-default-bar]=\"nzSize === 'default'\"\n    [class.ant-tabs-large-bar]=\"nzSize === 'large'\"\n    [nzType]=\"nzType\"\n    [nzShowPagination]=\"nzShowPagination\"\n    [nzPositionMode]=\"tabPositionMode\"\n    [nzAnimated]=\"inkBarAnimated\"\n    [ngStyle]=\"nzTabBarStyle\"\n    [nzHideBar]=\"nzHideAll\"\n    [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\n    [selectedIndex]=\"nzSelectedIndex\"\n    (nzOnNextClick)=\"nzOnNextClick.emit()\"\n    (nzOnPrevClick)=\"nzOnPrevClick.emit()\">\n    <div nz-tab-label\n      role=\"tab\"\n      [style.margin-right.px]=\"nzTabBarGutter\"\n      [class.ant-tabs-tab-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\n      [disabled]=\"tab.nzDisabled\"\n      (click)=\"clickLabel(i,tab.nzDisabled)\"\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\n      <ng-container *nzStringTemplateOutlet=\"tab.nzTitle || tab.title\">{{ tab.nzTitle }}</ng-container>\n    </div>\n  </div>\n  <div #tabContent\n    class=\"ant-tabs-content\"\n    [class.ant-tabs-top-content]=\"nzTabPosition === 'top'\"\n    [class.ant-tabs-bottom-content]=\"nzTabPosition === 'bottom'\"\n    [class.ant-tabs-left-content]=\"nzTabPosition === 'left'\"\n    [class.ant-tabs-right-content]=\"nzTabPosition === 'right'\"\n    [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n    [class.ant-tabs-card-content]=\"nzType === 'card'\"\n    [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\n    [style.margin-left.%]=\"(tabPositionMode === 'horizontal') && tabPaneAnimated && (-(nzSelectedIndex || 0 ) * 100)\">\n    <div nz-tab-body\n      class=\"ant-tabs-tabpane\"\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\n      [active]=\"(nzSelectedIndex == i) && !nzHideAll\"\n      [forceRender]=\"tab.nzForceRender\"\n      [content]=\"tab.template || tab.content\">\n    </div>\n  </div>\n</ng-container>",
                styles: [`
      nz-tabset {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzTabSetComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Router, decorators: [{ type: Optional }] }
];
NzTabSetComponent.propDecorators = {
    listOfNzTabComponent: [{ type: ContentChildren, args: [NzTabComponent,] }],
    nzTabsNavComponent: [{ type: ViewChild, args: [NzTabsNavComponent, { static: false },] }],
    tabContent: [{ type: ViewChild, args: ['tabContent', { static: false },] }],
    nzTabBarExtraContent: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzAnimated: [{ type: Input }],
    nzHideAll: [{ type: Input }],
    nzTabPosition: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTabBarGutter: [{ type: Input }],
    nzTabBarStyle: [{ type: Input }],
    nzType: [{ type: Input }],
    nzLinkRouter: [{ type: Input }],
    nzLinkExact: [{ type: Input }],
    nzOnNextClick: [{ type: Output }],
    nzOnPrevClick: [{ type: Output }],
    nzSelectChange: [{ type: Output }],
    nzSelectedIndexChange: [{ type: Output }],
    nzSelectedIndex: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    tslib_1.__metadata("design:type", Boolean)
], NzTabSetComponent.prototype, "nzShowPagination", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    tslib_1.__metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzAnimated", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzTabSetComponent.prototype, "nzSize", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", Number)
], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'line'),
    tslib_1.__metadata("design:type", String)
], NzTabSetComponent.prototype, "nzType", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkExact", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.indexToSelect;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype._selectedIndex;
    /**
     * Subscription to tabs being added/removed.
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.tabsSubscription;
    /**
     * Subscription to changes in the tab labels.
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.tabLabelSubscription;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.destroy$;
    /** @type {?} */
    NzTabSetComponent.prototype.tabPositionMode;
    /** @type {?} */
    NzTabSetComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabsNavComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.tabContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabSetComponent.prototype.nzAnimated;
    /** @type {?} */
    NzTabSetComponent.prototype.nzHideAll;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabPosition;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSize;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarGutter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarStyle;
    /** @type {?} */
    NzTabSetComponent.prototype.nzType;
    /** @type {?} */
    NzTabSetComponent.prototype.nzLinkRouter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzLinkExact;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectedIndexChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFJTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFrQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLFlBQVksRUFDWixlQUFlLEVBR2Ysd0JBQXdCLEVBQ3hCLE1BQU0sRUFDTixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFN0QseUNBR0M7OztJQUZDLHFDQUFnQjs7SUFDaEIsc0NBQWlCOztBQUduQixNQUFNLE9BQU8sZ0JBQWdCO0NBRzVCOzs7SUFGQyxpQ0FBYzs7SUFDZCwrQkFBb0I7OztNQU9oQix3QkFBd0IsR0FBRyxNQUFNO0FBa0J2QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7Ozs7SUEySDVCLFlBQ1MsZUFBZ0MsRUFDL0IsUUFBbUIsRUFDbkIsd0JBQWtELEVB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QTJDO0FBR3JDO0lBQWhELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7O2lEQUF1QjtBQUNqQztJQUFyQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7O3lEQUF3QjtBQUVmO0lBQTdDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUM7O2lEQUFtQjtBQUVoRDtJQUFmLFlBQVksRUFBRTs7dURBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFOztzREFBb0I7Ozs7OztJQTFCNUMsMENBQXlDOzs7OztJQUN6QywrQkFBd0Q7Ozs7O0lBQ3hELDJDQUE2Qzs7Ozs7O0lBRTdDLDZDQUE4Qzs7Ozs7O0lBRTlDLGlEQUFrRDs7Ozs7SUFFbEQscUNBQXVDOztJQUV2Qyw0Q0FBa0Q7O0lBQ2xELGlEQUFpRjs7SUFDakYsK0NBQXlGOztJQUN6Rix1Q0FBbUU7O0lBRW5FLGlEQUFpRDs7SUFDakQsNkNBQStFOztJQUMvRSx1Q0FBK0Y7O0lBQy9GLHNDQUEyQjs7SUFDM0IsMENBQThDOztJQUM5QyxtQ0FBZ0Y7O0lBQ2hGLDJDQUFzRTs7SUFDdEUsMENBQWtEOztJQUNsRCxtQ0FBeUU7O0lBRXpFLHlDQUE4Qzs7SUFDOUMsd0NBQTRDOztJQUU1QywwQ0FBNEQ7O0lBQzVELDBDQUE0RDs7SUFDNUQsMkNBQTZHOztJQUM3RyxrREFBNEY7O0lBMkYxRiw0Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUEyQjs7Ozs7SUFDM0IscURBQTBEOzs7OztJQUMxRCx1Q0FBOEI7Ozs7O0lBQzlCLGdDQUE4Qjs7Ozs7SUFDOUIsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8qKiBnZXQgc29tZSBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgdG9OdW1iZXIsXG4gIElucHV0Qm9vbGVhbixcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOekZvdXJEaXJlY3Rpb25UeXBlLFxuICBOelNpemVMRFNUeXBlLFxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gIFBSRUZJWCxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpUYWJDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYWJzTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJzLW5hdi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56QW5pbWF0ZWRJbnRlcmZhY2Uge1xuICBpbmtCYXI6IGJvb2xlYW47XG4gIHRhYlBhbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBOelRhYkNoYW5nZUV2ZW50IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgdGFiOiBOelRhYkNvbXBvbmVudDtcbn1cblxuZXhwb3J0IHR5cGUgTnpUYWJQb3NpdGlvbiA9IE56Rm91ckRpcmVjdGlvblR5cGU7XG5leHBvcnQgdHlwZSBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5leHBvcnQgdHlwZSBOelRhYlR5cGUgPSAnbGluZScgfCAnY2FyZCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0YWJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFic2V0JyxcbiAgZXhwb3J0QXM6ICduelRhYnNldCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRhYnNldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LXRhYnNldCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYlNldENvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGluZGV4VG9TZWxlY3Q6IG51bWJlciB8IG51bGwgPSAwO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB0YWJzIGJlaW5nIGFkZGVkL3JlbW92ZWQuICovXG4gIHByaXZhdGUgdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBjaGFuZ2VzIGluIHRoZSB0YWIgbGFiZWxzLiAqL1xuICBwcml2YXRlIHRhYkxhYmVsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHRhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUYWJDb21wb25lbnQpIGxpc3RPZk56VGFiQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUYWJDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkKE56VGFic05hdkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIG56VGFic05hdkNvbXBvbmVudDogTnpUYWJzTmF2Q29tcG9uZW50O1xuICBAVmlld0NoaWxkKCd0YWJDb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbnpUYWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56U2hvd1BhZ2luYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpBbmltYXRlZDogTnpBbmltYXRlZEludGVyZmFjZSB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56SGlkZUFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBuelRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGU7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpUYWJCYXJHdXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgbnpUYWJCYXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnbGluZScpIG56VHlwZTogTnpUYWJUeXBlO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxpbmtSb3V0ZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TGlua0V4YWN0ID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdmFsdWUgPyB0b051bWJlcih2YWx1ZSwgbnVsbCkgOiBudWxsO1xuICB9XG5cbiAgZ2V0IG56U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIGdldCBpbmtCYXJBbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekFuaW1hdGVkID09PSB0cnVlIHx8ICh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkuaW5rQmFyID09PSB0cnVlO1xuICB9XG5cbiAgZ2V0IHRhYlBhbmVBbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekFuaW1hdGVkID09PSB0cnVlIHx8ICh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkudGFiUGFuZSA9PT0gdHJ1ZTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHZhbHVlOiBOelRhYlBvc2l0aW9uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFiQ29udGVudCkge1xuICAgICAgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShcbiAgICAgICAgICB0aGlzLmVsLFxuICAgICAgICAgIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIHRoaXMubnpUYWJzTmF2Q29tcG9uZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdGhpcy5lbCxcbiAgICAgICAgICB0aGlzLm56VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xuICAgICAgW2BhbnQtdGFic2BdOiB0cnVlLFxuICAgICAgW2BhbnQtdGFicy12ZXJ0aWNhbGBdOiB0aGlzLm56VGFiUG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLm56VGFiUG9zaXRpb24gPT09ICdyaWdodCcsXG4gICAgICBbYGFudC10YWJzLSR7dGhpcy5uelRhYlBvc2l0aW9ufWBdOiB0aGlzLm56VGFiUG9zaXRpb24sXG4gICAgICBbYGFudC10YWJzLW5vLWFuaW1hdGlvbmBdOlxuICAgICAgICB0aGlzLm56QW5pbWF0ZWQgPT09IGZhbHNlIHx8ICh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkudGFiUGFuZSA9PT0gZmFsc2UsXG4gICAgICBbYGFudC10YWJzLSR7dGhpcy5uelR5cGV9YF06IHRoaXMubnpUeXBlLFxuICAgICAgW2BhbnQtdGFicy1sYXJnZWBdOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFtgYW50LXRhYnMtc21hbGxgXTogdGhpcy5uelNpemUgPT09ICdzbWFsbCdcbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XG4gICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgdGFic1tpbmRleF0ubnpDbGljay5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE56VGFiQ2hhbmdlRXZlbnQoKTtcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XG4gICAgICBldmVudC50YWIgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKVtpbmRleF07XG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgaXRlbS5uekRlc2VsZWN0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmVudC50YWIubnpTZWxlY3QuZW1pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcbiAgICAvLyBhbmQgd2hpY2ggd291bGQgb3RoZXJ3aXNlIHRocm93IHRoZSBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wXG4gICAgLy8gKHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTikuXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1RhYkxhYmVscygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5tYXAodGFiID0+IHRhYi5zdGF0ZUNoYW5nZXMpKS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelRhYlBvc2l0aW9uKSB7XG4gICAgICBpZiAodGhpcy5uelRhYlBvc2l0aW9uID09PSAndG9wJyB8fCB0aGlzLm56VGFiUG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJQb3NpdGlvbk1vZGUgPSAndmVydGljYWwnO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLm56VGFiUG9zaXRpb24pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelR5cGUpIHtcbiAgICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2NhcmQnKSB7XG4gICAgICAgIHRoaXMubnpBbmltYXRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelNpemUgfHwgY2hhbmdlcy5uekFuaW1hdGVkIHx8IGNoYW5nZXMubnpUYWJQb3NpdGlvbiB8fCBjaGFuZ2VzLm56VHlwZSkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XG4gICAgICAvLyB0aGUgYW1vdW50IG9mIHRhYnMgY2hhbmdlcyBiZWZvcmUgdGhlIGFjdHVhbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcbiAgICAgIC8vIHRoZSBzZWxlY3RlZCBpbmRleCBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpemVkLlxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gbnVsbDtcbiAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XG4gICAgICAgICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdpbmcgdGhlc2UgdmFsdWVzIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1blxuICAgICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiAodGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpKTtcblxuICAgICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xuICAgICAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogTnpUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGFiLnBvc2l0aW9uID0gaW5kZXggLSBpbmRleFRvU2VsZWN0O1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXG4gICAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiB0YWIucG9zaXRpb24gPT09IDAgJiYgIXRhYi5vcmlnaW4pIHtcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcblxuICAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzIGluIHRoZSBhbW91bnQgb2YgdGFicywgaW4gb3JkZXIgdG8gYmVcbiAgICAvLyBhYmxlIHRvIHJlLXJlbmRlciB0aGUgY29udGVudCBhcyBuZXcgdGFicyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24gPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KTtcblxuICAgICAgLy8gTWFpbnRhaW4gdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgdGFiIGlmIGEgbmV3IHRhYiBpcyBhZGRlZCBvciByZW1vdmVkIGFuZCB0aGVyZSBpcyBub1xuICAgICAgLy8gZXhwbGljaXQgY2hhbmdlIHRoYXQgc2VsZWN0cyBhIGRpZmZlcmVudCB0YWIuXG4gICAgICBpZiAoaW5kZXhUb1NlbGVjdCA9PT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICBjb25zdCB0YWJzID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC50b0FycmF5KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRhYnNbaV0uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiBib3RoIHRvIHRoZSBgX2luZGV4VG9TZWxlY3RgIGFuZCBgX3NlbGVjdGVkSW5kZXhgIHNvIHdlIGRvbid0IGZpcmUgYSBjaGFuZ2VkXG4gICAgICAgICAgICAvLyBldmVudCwgb3RoZXJ3aXNlIHRoZSBjb25zdW1lciBtYXkgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgaW4gc29tZSBlZGdlIGNhc2VzIGxpa2VcbiAgICAgICAgICAgIC8vIGFkZGluZyBhIHRhYiB3aXRoaW4gdGhlIGBzZWxlY3RlZEluZGV4Q2hhbmdlYCBldmVudC5cbiAgICAgICAgICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWJzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubnpUYWJQb3NpdGlvbik7XG5cbiAgICBpZiAodGhpcy5uekxpbmtSb3V0ZXIpIHtcbiAgICAgIGlmICghdGhpcy5yb3V0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0geW91IHNob3VsZCBpbXBvcnQgJ1JvdXRlck1vZHVsZScgaWYgeW91IHdhbnQgdG8gdXNlICduekxpbmtSb3V0ZXInIWApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgICBzdGFydFdpdGgodHJ1ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIubmF2aWdhdGVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4KCk7XG4gICAgICBpZiAoaW5kZXggIT09IHRoaXMuX3NlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLm56SGlkZUFsbCA9IGluZGV4ID09PSAtMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuaXNMaW5rQWN0aXZlKHRoaXMucm91dGVyKTtcblxuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4ge1xuICAgICAgY29uc3QgYyA9IHRhYi5saW5rRGlyZWN0aXZlO1xuICAgICAgcmV0dXJuIGMgPyBpc0FjdGl2ZShjLnJvdXRlckxpbmspIHx8IGlzQWN0aXZlKGMucm91dGVyTGlua1dpdGhIcmVmKSA6IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xpbmtBY3RpdmUocm91dGVyOiBSb3V0ZXIpOiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IGJvb2xlYW4ge1xuICAgIHJldHVybiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IChsaW5rID8gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5uekxpbmtFeGFjdCkgOiBmYWxzZSk7XG4gIH1cbn1cbiJdfQ==