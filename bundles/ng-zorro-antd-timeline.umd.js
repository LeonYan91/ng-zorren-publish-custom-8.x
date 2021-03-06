(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/timeline', ['exports', '@angular/core', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].timeline = {}), global.ng.core, global.ng.cdk.platform, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, platform, rxjs, operators, core$1, common, icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTimelineItemComponent = /** @class */ (function () {
        function NzTimelineItemComponent(renderer, cdr) {
            this.renderer = renderer;
            this.cdr = cdr;
            this.nzColor = 'blue';
            this.isLast = false;
        }
        /**
         * @return {?}
         */
        NzTimelineItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.tryUpdateCustomColor();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTimelineItemComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzColor) {
                this.tryUpdateCustomColor();
            }
        };
        /**
         * @return {?}
         */
        NzTimelineItemComponent.prototype.detectChanges = /**
         * @return {?}
         */
        function () {
            this.cdr.detectChanges();
        };
        /**
         * @private
         * @return {?}
         */
        NzTimelineItemComponent.prototype.tryUpdateCustomColor = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaultColors = ['blue', 'red', 'green', 'gray'];
            /** @type {?} */
            var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
            if (defaultColors.indexOf(this.nzColor) === -1) {
                this.renderer.setStyle(circle, 'border-color', this.nzColor);
            }
            else {
                this.renderer.removeStyle(circle, 'border-color');
            }
        };
        NzTimelineItemComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        selector: 'nz-timeline-item, [nz-timeline-item]',
                        exportAs: 'nzTimelineItem',
                        template: "<li\n  class=\"ant-timeline-item\"\n  [class.ant-timeline-item-right]=\"position === 'right'\"\n  [class.ant-timeline-item-left]=\"position === 'left'\"\n  [class.ant-timeline-item-last]=\"isLast\"\n  #liTemplate>\n  <div class=\"ant-timeline-item-tail\"></div>\n  <div\n    class=\"ant-timeline-item-head\"\n    [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\n    [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\n    [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\n    [class.ant-timeline-item-head-gray]=\"nzColor === 'gray'\"\n    [class.ant-timeline-item-head-custom]=\"!!nzDot\">\n    <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\n  </div>\n  <div class=\"ant-timeline-item-content\">\n    <ng-content></ng-content>\n  </div>\n</li>\n"
                    }] }
        ];
        /** @nocollapse */
        NzTimelineItemComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        NzTimelineItemComponent.propDecorators = {
            liTemplate: [{ type: core.ViewChild, args: ['liTemplate', { static: true },] }],
            nzColor: [{ type: core.Input }],
            nzDot: [{ type: core.Input }]
        };
        return NzTimelineItemComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTimelineItemComponent.prototype.liTemplate;
        /** @type {?} */
        NzTimelineItemComponent.prototype.nzColor;
        /** @type {?} */
        NzTimelineItemComponent.prototype.nzDot;
        /** @type {?} */
        NzTimelineItemComponent.prototype.isLast;
        /** @type {?} */
        NzTimelineItemComponent.prototype.position;
        /**
         * @type {?}
         * @private
         */
        NzTimelineItemComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTimelineItemComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTimelineComponent = /** @class */ (function () {
        function NzTimelineComponent(cdr, platform) {
            this.cdr = cdr;
            this.platform = platform;
            this.nzReverse = false;
            this.isPendingBoolean = false;
            this.destroy$ = new rxjs.Subject();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTimelineComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            /** @type {?} */
            var modeChanges = changes.nzMode;
            /** @type {?} */
            var reverseChanges = changes.nzReverse;
            /** @type {?} */
            var pendingChanges = changes.nzPending;
            if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
                this.updateChildren();
            }
            if (reverseChanges &&
                reverseChanges.previousValue !== reverseChanges.currentValue &&
                !reverseChanges.isFirstChange()) {
                this.reverseChildTimelineDots();
            }
            if (pendingChanges) {
                this.isPendingBoolean = pendingChanges.currentValue === true;
            }
        };
        /**
         * @return {?}
         */
        NzTimelineComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.updateChildren();
            if (this.listOfTimeLine) {
                this.listOfTimeLine.changes.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateChildren();
                }));
            }
        };
        /**
         * @return {?}
         */
        NzTimelineComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * @private
         * @return {?}
         */
        NzTimelineComponent.prototype.updateChildren = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.listOfTimeLine && this.listOfTimeLine.length) {
                /** @type {?} */
                var length_1 = this.listOfTimeLine.length;
                this.listOfTimeLine.toArray().forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */
                function (item, index) {
                    item.isLast = !_this.nzReverse ? index === length_1 - 1 : index === 0;
                    item.position =
                        _this.nzMode === 'left' || !_this.nzMode
                            ? undefined
                            : _this.nzMode === 'right'
                                ? 'right'
                                : _this.nzMode === 'alternate' && index % 2 === 0
                                    ? 'left'
                                    : 'right';
                    item.detectChanges();
                }));
                this.cdr.markForCheck();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzTimelineComponent.prototype.reverseChildTimelineDots = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.platform.isBrowser) {
                core$1.reverseChildNodes((/** @type {?} */ (this.timeline.nativeElement)));
                this.updateChildren();
            }
        };
        NzTimelineComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        selector: 'nz-timeline',
                        exportAs: 'nzTimeline',
                        template: "<ul\n  class=\"ant-timeline\"\n  [class.ant-timeline-right]=\"nzMode === 'right'\"\n  [class.ant-timeline-alternate]=\"nzMode === 'alternate'\"\n  [class.ant-timeline-pending]=\"!!nzPending\"\n  [class.ant-timeline-reverse]=\"nzReverse\"\n  #timeline>\n  <!-- User inserted timeline dots. -->\n  <ng-content></ng-content>\n  <!-- Pending dot. -->\n  <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\n    <div class=\"ant-timeline-item-tail\"></div>\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\n      <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\n        {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon nzType=\"loading\"></i>\n      </ng-container>\n    </div>\n    <div class=\"ant-timeline-item-content\">\n      <ng-container *nzStringTemplateOutlet=\"nzPending\">\n        {{ isPendingBoolean ? '' : nzPending }}\n      </ng-container>\n    </div>\n  </li>\n</ul>\n"
                    }] }
        ];
        /** @nocollapse */
        NzTimelineComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: platform.Platform }
        ]; };
        NzTimelineComponent.propDecorators = {
            timeline: [{ type: core.ViewChild, args: ['timeline', { static: false },] }],
            listOfTimeLine: [{ type: core.ContentChildren, args: [NzTimelineItemComponent,] }],
            _pendingContent: [{ type: core.ContentChild, args: ['pending', { static: false },] }],
            nzMode: [{ type: core.Input }],
            nzPending: [{ type: core.Input }],
            nzPendingDot: [{ type: core.Input }],
            nzReverse: [{ type: core.Input }]
        };
        return NzTimelineComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTimelineComponent.prototype.timeline;
        /** @type {?} */
        NzTimelineComponent.prototype.listOfTimeLine;
        /** @type {?} */
        NzTimelineComponent.prototype._pendingContent;
        /** @type {?} */
        NzTimelineComponent.prototype.nzMode;
        /** @type {?} */
        NzTimelineComponent.prototype.nzPending;
        /** @type {?} */
        NzTimelineComponent.prototype.nzPendingDot;
        /** @type {?} */
        NzTimelineComponent.prototype.nzReverse;
        /** @type {?} */
        NzTimelineComponent.prototype.isPendingBoolean;
        /**
         * @type {?}
         * @private
         */
        NzTimelineComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzTimelineComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTimelineComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTimelineModule = /** @class */ (function () {
        function NzTimelineModule() {
        }
        NzTimelineModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzTimelineItemComponent, NzTimelineComponent],
                        exports: [NzTimelineItemComponent, NzTimelineComponent],
                        imports: [common.CommonModule, platform.PlatformModule, icon.NzIconModule, core$1.NzAddOnModule]
                    },] }
        ];
        return NzTimelineModule;
    }());

    exports.NzTimelineComponent = NzTimelineComponent;
    exports.NzTimelineItemComponent = NzTimelineItemComponent;
    exports.NzTimelineModule = NzTimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-timeline.umd.js.map
