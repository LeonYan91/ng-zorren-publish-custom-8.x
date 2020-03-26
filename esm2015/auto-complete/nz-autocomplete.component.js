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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { defer, merge, Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { slideMotion, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
/**
 * @record
 */
export function AutocompleteDataSourceItem() { }
if (false) {
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.value;
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.label;
}
export class NzAutocompleteComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?=} noAnimation
     */
    constructor(changeDetectorRef, ngZone, noAnimation) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this.selectionChange = new EventEmitter();
        this.showPanel = true;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /**
         * Options changes listener
         */
        this.optionSelectionChanges = defer((/**
         * @return {?}
         */
        () => {
            if (this.options) {
                return merge(...this.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.selectionChange)));
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            () => this.optionSelectionChanges)));
        }));
    }
    /**
     * Options accessor, its source may be content or dataSource
     * @return {?}
     */
    get options() {
        // first dataSource
        if (this.nzDataSource) {
            return this.fromDataSourceOptions;
        }
        else {
            return this.fromContentOptions;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.nzDataSource) {
            this.optionsInit();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzDataSource) {
            this.optionsInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    setVisibility() {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        /** @type {?} */
        const activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    setNextItemActive() {
        /** @type {?} */
        const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    }
    /**
     * @return {?}
     */
    setPreviousItemActive() {
        /** @type {?} */
        const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    getOptionIndex(value) {
        return (/** @type {?} */ (this.options.reduce((/**
         * @param {?} result
         * @param {?} current
         * @param {?} index
         * @return {?}
         */
        (result, current, index) => {
            return result === -1 ? (this.compareWith(value, current.nzValue) ? index : -1) : result;
        }), -1)));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    updatePosition(position) {
        this.dropDownPosition = position;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    optionsInit() {
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (!e.dirty && this.isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.setVisibility()));
            }
            this.subscribeOptionChanges();
        }));
    }
    /**
     * Clear the status of options
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    clearSelectedOptions(skip, deselect = false) {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeOptionChanges() {
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.isUserInput)))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.source.select();
            event.source.setActiveStyles();
            this.activeItem = event.source;
            this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
            this.clearSelectedOptions(event.source, true);
            this.selectionChange.emit(event.source);
        }));
    }
}
NzAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-autocomplete',
                exportAs: 'nzAutocomplete',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template>\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\n    #panel\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@slideMotion]=\"dropDownPosition\"\n    [class.ant-select-dropdown-hidden]=\"!showPanel\"\n    [ngClass]=\"nzOverlayClassName\"\n    [ngStyle]=\"nzOverlayStyle\">\n    <div style=\"overflow: auto;\">\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n        role=\"menu\"\n        aria-activedescendant>\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\n      </ul>\n    </div>\n  </div>\n  <ng-template #contentTemplate>\n    <ng-content></ng-content>\n  </ng-template>\n  <ng-template #optionsTemplate>\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\n  </ng-template>\n</ng-template>",
                animations: [slideMotion],
                styles: [`
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
NzAutocompleteComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzAutocompleteComponent.propDecorators = {
    nzWidth: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzDefaultActiveFirstOption: [{ type: Input }],
    nzBackfill: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzDataSource: [{ type: Input }],
    selectionChange: [{ type: Output }],
    fromContentOptions: [{ type: ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
    fromDataSourceOptions: [{ type: ViewChildren, args: [NzAutocompleteOptionComponent,] }],
    template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
    panel: [{ type: ViewChild, args: ['panel', { static: false },] }],
    content: [{ type: ViewChild, args: ['content', { static: false },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
if (false) {
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzWidth;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDefaultActiveFirstOption;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzBackfill;
    /** @type {?} */
    NzAutocompleteComponent.prototype.compareWith;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDataSource;
    /** @type {?} */
    NzAutocompleteComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteComponent.prototype.showPanel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.isOpen;
    /** @type {?} */
    NzAutocompleteComponent.prototype.activeItem;
    /** @type {?} */
    NzAutocompleteComponent.prototype.dropDownPosition;
    /**
     * Provided by content
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromContentOptions;
    /**
     * Provided by dataSource
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromDataSourceOptions;
    /**
     * cdk-overlay
     * @type {?}
     */
    NzAutocompleteComponent.prototype.template;
    /** @type {?} */
    NzAutocompleteComponent.prototype.panel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.activeItemIndex;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.selectionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.dataSourceChangeSubscription;
    /**
     * Options changes listener
     * @type {?}
     */
    NzAutocompleteComponent.prototype.optionSelectionChanges;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.ngZone;
    /** @type {?} */
    NzAutocompleteComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBZSxZQUFZLEVBQXNCLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEgsT0FBTyxFQUFFLDZCQUE2QixFQUEyQixNQUFNLG9DQUFvQyxDQUFDOzs7O0FBRTVHLGdEQUdDOzs7SUFGQywyQ0FBYzs7SUFDZCwyQ0FBYzs7QUEwQmhCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQXVEbEMsWUFDVSxpQkFBb0MsRUFDcEMsTUFBYyxFQUNLLFdBQW9DO1FBRnZELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNLLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXhEeEQsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLG1CQUFjLEdBQThCLEVBQUUsQ0FBQztRQUMvQiwrQkFBMEIsR0FBRyxJQUFJLENBQUM7UUFDbEMs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b0I7OztJQUo1QywwQ0FBeUI7O0lBQ3pCLHFEQUFpQzs7SUFDakMsaURBQXdEOztJQUN4RCw2REFBMkQ7O0lBQzNELDZDQUE0Qzs7SUFDNUMsOENBQTBEOztJQUMxRCwrQ0FBOEM7O0lBQzlDLGtEQUVJOztJQUVKLDRDQUEwQjs7SUFDMUIseUNBQXdCOztJQUN4Qiw2Q0FBMEM7O0lBQzFDLG1EQUFnRDs7Ozs7SUFlaEQscURBRUU7Ozs7O0lBRUYsd0RBQTZHOzs7OztJQUc3RywyQ0FBcUU7O0lBQ3JFLHdDQUF5RDs7SUFDekQsMENBQTZEOzs7OztJQUU3RCxrREFBcUM7Ozs7O0lBQ3JDLDhEQUF5RDs7Ozs7SUFDekQsK0RBQTBEOzs7OztJQUUxRCx5REFRRzs7Ozs7SUFHRCxvREFBNEM7Ozs7O0lBQzVDLHlDQUFzQjs7SUFDdEIsOENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZlciwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHNsaWRlTW90aW9uLCBDb21wYXJlV2l0aCwgSW5wdXRCb29sZWFuLCBOekRyb3BEb3duUG9zaXRpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVEYXRhU291cmNlSXRlbSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2UgPSBBdXRvY29tcGxldGVEYXRhU291cmNlSXRlbVtdIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYXV0b2NvbXBsZXRlJyxcbiAgZXhwb3J0QXM6ICduekF1dG9jb21wbGV0ZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCYWNrZmlsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBjb21wYXJlV2l0aDogQ29tcGFyZVdpdGggPSAobzEsIG8yKSA9PiBvMSA9PT0gbzI7XG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnRcbiAgPigpO1xuXG4gIHNob3dQYW5lbDogYm9vbGVhbiA9IHRydWU7XG4gIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBhY3RpdmVJdGVtOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudDtcbiAgZHJvcERvd25Qb3NpdGlvbjogTnpEcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgYWNjZXNzb3IsIGl0cyBzb3VyY2UgbWF5IGJlIGNvbnRlbnQgb3IgZGF0YVNvdXJjZVxuICAgKi9cbiAgZ2V0IG9wdGlvbnMoKTogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiB7XG4gICAgLy8gZmlyc3QgZGF0YVNvdXJjZVxuICAgIGlmICh0aGlzLm56RGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZnJvbURhdGFTb3VyY2VPcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5mcm9tQ29udGVudE9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLyoqIFByb3ZpZGVkIGJ5IGNvbnRlbnQgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBmcm9tQ29udGVudE9wdGlvbnM6IFF1ZXJ5TGlzdDxcbiAgICBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudFxuICA+O1xuICAvKiogUHJvdmlkZWQgYnkgZGF0YVNvdXJjZSAqL1xuICBAVmlld0NoaWxkcmVuKE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSBmcm9tRGF0YVNvdXJjZU9wdGlvbnM6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD47XG5cbiAgLyoqIGNkay1vdmVybGF5ICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xuICBAVmlld0NoaWxkKCdwYW5lbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwYW5lbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgYWN0aXZlSXRlbUluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgLyoqIE9wdGlvbnMgY2hhbmdlcyBsaXN0ZW5lciAqL1xuICByZWFkb25seSBvcHRpb25TZWxlY3Rpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPiA9IGRlZmVyKCgpID0+IHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gbWVyZ2U8TnpPcHRpb25TZWxlY3Rpb25DaGFuZ2U+KC4uLnRoaXMub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5zZWxlY3Rpb25DaGFuZ2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcylcbiAgICApO1xuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMub3B0aW9uc0luaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEYXRhU291cmNlKSB7XG4gICAgICB0aGlzLm9wdGlvbnNJbml0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhU291cmNlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNldFZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGFuZWwgPSAhIXRoaXMub3B0aW9ucy5sZW5ndGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldEFjdGl2ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpW2luZGV4XTtcbiAgICBpZiAoYWN0aXZlSXRlbSAmJiAhYWN0aXZlSXRlbS5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGFjdGl2ZUl0ZW07XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGVkT3B0aW9ucyh0aGlzLmFjdGl2ZUl0ZW0pO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXROZXh0SXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIDEgPD0gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEgPyB0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIDEgOiAwO1xuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShuZXh0SW5kZXgpO1xuICB9XG5cbiAgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzSW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleCAtIDEgPCAwID8gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZUl0ZW1JbmRleCAtIDE7XG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRPcHRpb25JbmRleCh2YWx1ZTogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlZHVjZSgocmVzdWx0OiBudW1iZXIsIGN1cnJlbnQ6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSAtMSA/ICh0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLCBjdXJyZW50Lm56VmFsdWUpID8gaW5kZXggOiAtMSkgOiByZXN1bHQ7XG4gICAgfSwgLTEpITtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBOekRyb3BEb3duUG9zaXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpb25zSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcbiAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5uekRhdGFTb3VyY2UgPyB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucy5jaGFuZ2VzIDogdGhpcy5mcm9tQ29udGVudE9wdGlvbnMuY2hhbmdlcztcbiAgICAvLyBhc3luY1xuICAgIHRoaXMuZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IGNoYW5nZXMuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKCFlLmRpcnR5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRWaXNpYmlsaXR5KCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHN0YXR1cyBvZiBvcHRpb25zXG4gICAqL1xuICBjbGVhclNlbGVjdGVkT3B0aW9ucyhza2lwPzogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCBudWxsLCBkZXNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGlmIChvcHRpb24gIT09IHNraXApIHtcbiAgICAgICAgaWYgKGRlc2VsZWN0KSB7XG4gICAgICAgICAgb3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlc1xuICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2UpID0+IGV2ZW50LmlzVXNlcklucHV0KSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4ge1xuICAgICAgICBldmVudC5zb3VyY2Uuc2VsZWN0KCk7XG4gICAgICAgIGV2ZW50LnNvdXJjZS5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gZXZlbnQuc291cmNlO1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuZ2V0T3B0aW9uSW5kZXgodGhpcy5hY3RpdmVJdGVtLm56VmFsdWUpO1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKGV2ZW50LnNvdXJjZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZXZlbnQuc291cmNlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=