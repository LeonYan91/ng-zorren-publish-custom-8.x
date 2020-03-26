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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { handleCircleGradient, handleLinearGradient } from './nz-progress-utils';
/** @type {?} */
var gradientIdSeed = 0;
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'progress';
/** @type {?} */
var statusIconNameMap = new Map([['success', 'check'], ['exception', 'close']]);
/** @type {?} */
var statusColorMap = new Map([['normal', '#108ee9'], ['exception', '#ff5500'], ['success', '#87d068']]);
/** @type {?} */
var defaultFormatter = (/**
 * @param {?} p
 * @return {?}
 */
function (p) { return p + "%"; });
var ɵ0 = defaultFormatter;
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzWidth = 132;
        this.nzPercent = 0;
        this.nzType = 'line';
        /**
         * Gradient style when `nzType` is `line`.
         */
        this.lineGradient = null;
        /**
         * If user uses gradient color.
         */
        this.isGradient = false;
        /**
         * Each progress whose `nzType` is circle or dashboard should have unique id to
         * define `<linearGradient>`.
         */
        this.gradientId = gradientIdSeed++;
        /**
         * Paths to rendered in the template.
         */
        this.progressCirclePath = [];
        this.trackByFn = (/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return "" + index; });
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    Object.defineProperty(NzProgressComponent.prototype, "formatter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzFormat || defaultFormatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStatus || this.inferredStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzStrokeColor = changes.nzStrokeColor, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && (/** @type {?} */ (this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
        }
        if (nzStatus || nzPercent || nzSuccessPercent) {
            this.updateIcon();
        }
        if (nzStrokeColor) {
            this.setStrokeColor();
        }
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor) {
            this.getCirclePaths();
        }
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateIcon();
            _this.setStrokeColor();
            _this.getCirclePaths();
        }));
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnDestroy = /**
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
    NzProgressComponent.prototype.updateIcon = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    };
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.getCirclePaths = /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isCircleStyle) {
            return;
        }
        /** @type {?} */
        var values = isNotNil(this.nzSuccessPercent) ? [(/** @type {?} */ (this.nzSuccessPercent)), this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        /** @type {?} */
        var radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        var gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        /** @type {?} */
        var gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        this.trailPathStyle = {
            strokeDasharray: len - gapDegree + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        function (value, index) {
            /** @type {?} */
            var isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: _this.isGradient && !isSuccessPercent ? "url(#gradient-" + _this.gradientId + ")" : null,
                strokePathStyle: {
                    stroke: !_this.isGradient
                        ? isSuccessPercent
                            ? statusColorMap.get('success')
                            : ((/** @type {?} */ (_this.nzStrokeColor)))
                        : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: ((value || 0) / 100) * (len - gapDegree) + "px " + len + "px",
                    strokeDashoffset: "-" + gapDegree / 2 + "px"
                }
            };
        }))
            .reverse();
    };
    /**
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.setStrokeColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var color = this.nzStrokeColor;
        /** @type {?} */
        var isGradient = (this.isGradient = !!color && typeof color !== 'string');
        if (isGradient && !this.isCircleStyle) {
            this.lineGradient = handleLinearGradient((/** @type {?} */ (color)));
        }
        else if (isGradient && this.isCircleStyle) {
            this.circleGradient = handleCircleGradient((/** @type {?} */ (this.nzStrokeColor)));
        }
        else {
            this.lineGradient = null;
            this.circleGradient = [];
        }
    };
    NzProgressComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-progress',
                    exportAs: 'nzProgress',
                    preserveWhitespaces: false,
                    template: "<ng-template #progressInfoTemplate>\n  <span class=\"ant-progress-text\"\n        *ngIf=\"nzShowInfo\">\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\n      <i nz-icon\n         [nzType]=\"icon\"></i>\n    </ng-container>\n    <ng-template #formatTemplate>\n      {{ formatter(nzPercent) }}\n    </ng-template>\n  </span>\n</ng-template>\n\n<div [ngClass]=\"'ant-progress ant-progress-status-' + status\"\n     [class.ant-progress-line]=\"nzType == 'line'\"\n     [class.ant-progress-small]=\"nzSize == 'small'\"\n     [class.ant-progress-show-info]=\"nzShowInfo\"\n     [class.ant-progress-circle]=\"isCircleStyle\">\n  <!-- line progress -->\n  <div *ngIf=\"nzType === 'line'\">\n    <div class=\"ant-progress-outer\">\n      <div class=\"ant-progress-inner\">\n        <div class=\"ant-progress-bg\"\n             [style.width.%]=\"nzPercent\"\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n             [style.background]=\"!isGradient ? nzStrokeColor : null\"\n             [style.background-image]=\"isGradient ? lineGradient : null\"\n             [style.height.px]=\"strokeWidth\"></div>\n        <div *ngIf=\"nzSuccessPercent || nzSuccessPercent === 0\"\n             class=\"ant-progress-success-bg\"\n             [style.width.%]=\"nzSuccessPercent\"\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n             [style.height.px]=\"strokeWidth\"></div>\n      </div>\n    </div>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n\n  <!-- circle / dashboard progress -->\n  <div [style.width.px]=\"this.nzWidth\"\n       [style.height.px]=\"this.nzWidth\"\n       [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\n       class=\"ant-progress-inner\"\n       [class.ant-progress-circle-gradient]=\"isGradient\"\n       *ngIf=\"isCircleStyle\">\n    <svg class=\"ant-progress-circle \"\n         viewBox=\"0 0 100 100\">\n      <defs *ngIf=\"isGradient\">\n        <linearGradient [id]=\"'gradient-' + gradientId\"\n                        x1=\"100%\"\n                        y1=\"0%\"\n                        x2=\"0%\"\n                        y2=\"0%\">\n          <stop *ngFor=\"let i of circleGradient;\"\n                [attr.offset]=\"i.offset\"\n                [attr.stop-color]=\"i.color\"></stop>\n        </linearGradient>\n      </defs>\n      <path class=\"ant-progress-circle-trail\"\n            stroke=\"#f3f3f3\"\n            fill-opacity=\"0\"\n            [attr.stroke-width]=\"strokeWidth\"\n            [attr.d]=\"pathString\"\n            [ngStyle]=\"trailPathStyle\"></path>\n      <path *ngFor=\"let p of progressCirclePath; trackBy: trackByFn\"\n            class=\"ant-progress-circle-path\"\n            fill-opacity=\"0\"\n            [attr.d]=\"pathString\"\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\n            [attr.stroke]=\"p.stroke\"\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\n            [ngStyle]=\"p.strokePathStyle\">\n      </path>\n    </svg>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    NzProgressComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    NzProgressComponent.propDecorators = {
        nzShowInfo: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzStrokeColor: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzSuccessPercent: [{ type: Input }],
        nzPercent: [{ type: Input }],
        nzStrokeWidth: [{ type: Input }],
        nzGapDegree: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzType: [{ type: Input }],
        nzGapPosition: [{ type: Input }],
        nzStrokeLinecap: [{ type: Input }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        tslib_1.__metadata("design:type", Boolean)
    ], NzProgressComponent.prototype, "nzShowInfo", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        tslib_1.__metadata("design:type", Object)
    ], NzProgressComponent.prototype, "nzStrokeColor", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzSize", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzPercent", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzGapDegree", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'top'),
        tslib_1.__metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzGapPosition", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'round'),
        tslib_1.__metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
    return NzProgressComponent;
}());
export { NzProgressComponent };
if (false) {
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
    /** @type {?} */
    NzProgressComponent.prototype.nzSize;
    /** @type {?} */
    NzProgressComponent.prototype.nzFormat;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapDegree;
    /** @type {?} */
    NzProgressComponent.prototype.nzStatus;
    /** @type {?} */
    NzProgressComponent.prototype.nzType;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapPosition;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeLinecap;
    /**
     * Gradient style when `nzType` is `line`.
     * @type {?}
     */
    NzProgressComponent.prototype.lineGradient;
    /**
     * If user uses gradient color.
     * @type {?}
     */
    NzProgressComponent.prototype.isGradient;
    /**
     * Each progress whose `nzType` is circle or dashboard should have unique id to
     * define `<linearGradient>`.
     * @type {?}
     */
    NzProgressComponent.prototype.gradientId;
    /**
     * Paths to rendered in the template.
     * @type {?}
     */
    NzProgressComponent.prototype.progressCirclePath;
    /** @type {?} */
    NzProgressComponent.prototype.circleGradient;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.cachedStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.destroy$;
    /** @type {?} */
    NzProgressComponent.prototype.nzConfigService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFvQixlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBYTdFLGNBQWMsR0FBRyxDQUFDOztJQUVoQix3QkFBd0IsR0FBRyxVQUFVOztJQUNyQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0lBQzNFLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7O0lBQ25HLGdCQUFnQjs7OztBQUF3QixVQUFDLENBQVMsSUFBYSxPQUFHLENBQUMsTUFBRyxFQUFQLENBQU8sQ0FBQTs7QUFFNUU7SUFvRUUsNkJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTFEMUMsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUtDLGNBQVMsR0FB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QUMxQjtRQUFkLFdBQVcsRUFBRTs7MERBQXVCO0lBQ2dCO1FBQXBELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7OERBQXVCO0lBQ3RCO1FBQXBELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7NERBQXFCO0lBRzVCO1FBQTVDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7OzhEQUEwQztJQUN2QztRQUE5QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDOztnRUFBOEM7SUFtTXZHLDBCQUFDO0NBQUEsQUF4TkQsSUF3TkM7U0FoTlksbUJBQW1COzs7SUFDOUIseUNBQXlFOztJQUN6RSxzQ0FBdUI7O0lBQ3ZCLDRDQUF3Rjs7SUFDeEYscUNBQXNGOztJQUN0Rix1Q0FBd0M7O0lBQ3hDLCtDQUFrRDs7SUFDbEQsd0NBQThDOztJQUM5Qyw0Q0FBb0Y7O0lBQ3BGLDBDQUFrRjs7SUFDbEYsdUNBQXdDOztJQUN4QyxxQ0FBNkM7O0lBQzdDLDRDQUErRjs7SUFDL0YsOENBQXFHOzs7OztJQUdyRywyQ0FBbUM7Ozs7O0lBR25DLHlDQUFtQjs7Ozs7O0lBTW5CLHlDQUE4Qjs7Ozs7SUFHOUIsaURBQWdEOztJQUVoRCw2Q0FBeUQ7O0lBRXpELDZDQUFpQzs7SUFFakMseUNBQW1COztJQUVuQixtQ0FBYTs7SUFFYix3Q0FBMEM7Ozs7O0lBa0IxQywyQ0FBc0Q7Ozs7O0lBQ3RELDZDQUF3RDs7Ozs7SUFDeEQsdUNBQXVDOztJQUUzQiw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXROdW1iZXIsIE5nU3R5bGVJbnRlcmZhY2UsIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGhhbmRsZUNpcmNsZUdyYWRpZW50LCBoYW5kbGVMaW5lYXJHcmFkaWVudCB9IGZyb20gJy4vbnotcHJvZ3Jlc3MtdXRpbHMnO1xuaW1wb3J0IHtcbiAgTnpQcm9ncmVzc0NpcmNsZVBhdGgsXG4gIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50LFxuICBOelByb2dyZXNzRm9ybWF0dGVyLFxuICBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlLFxuICBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyxcbiAgTnpQcm9ncmVzc1N0YXR1c1R5cGUsXG4gIE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGUsXG4gIE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSxcbiAgTnpQcm9ncmVzc1R5cGVUeXBlXG59IGZyb20gJy4vbnotcHJvZ3Jlc3MuZGVmaW5pdGlvbnMnO1xuXG5sZXQgZ3JhZGllbnRJZFNlZWQgPSAwO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncHJvZ3Jlc3MnO1xuY29uc3Qgc3RhdHVzSWNvbk5hbWVNYXAgPSBuZXcgTWFwKFtbJ3N1Y2Nlc3MnLCAnY2hlY2snXSwgWydleGNlcHRpb24nLCAnY2xvc2UnXV0pO1xuY29uc3Qgc3RhdHVzQ29sb3JNYXAgPSBuZXcgTWFwKFtbJ25vcm1hbCcsICcjMTA4ZWU5J10sIFsnZXhjZXB0aW9uJywgJyNmZjU1MDAnXSwgWydzdWNjZXNzJywgJyM4N2QwNjgnXV0pO1xuY29uc3QgZGVmYXVsdEZvcm1hdHRlcjogTnpQcm9ncmVzc0Zvcm1hdHRlciA9IChwOiBudW1iZXIpOiBzdHJpbmcgPT4gYCR7cH0lYDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXByb2dyZXNzJyxcbiAgZXhwb3J0QXM6ICduelByb2dyZXNzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56U2hvd0luZm86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56V2lkdGggPSAxMzI7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTdHJva2VDb2xvcjogTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJztcbiAgQElucHV0KCkgbnpGb3JtYXQ/OiBOelByb2dyZXNzRm9ybWF0dGVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelN1Y2Nlc3NQZXJjZW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelBlcmNlbnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0TnVtYmVyKCkgbnpTdHJva2VXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56R2FwRGVncmVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZTtcbiAgQElucHV0KCkgbnpUeXBlOiBOelByb2dyZXNzVHlwZVR5cGUgPSAnbGluZSc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ3RvcCcpIG56R2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGU7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ3JvdW5kJykgbnpTdHJva2VMaW5lY2FwOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGU7XG5cbiAgLyoqIEdyYWRpZW50IHN0eWxlIHdoZW4gYG56VHlwZWAgaXMgYGxpbmVgLiAqL1xuICBsaW5lR3JhZGllbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBJZiB1c2VyIHVzZXMgZ3JhZGllbnQgY29sb3IuICovXG4gIGlzR3JhZGllbnQgPSBmYWxzZTtcblxuICAvKipcbiAgICogRWFjaCBwcm9ncmVzcyB3aG9zZSBgbnpUeXBlYCBpcyBjaXJjbGUgb3IgZGFzaGJvYXJkIHNob3VsZCBoYXZlIHVuaXF1ZSBpZCB0b1xuICAgKiBkZWZpbmUgYDxsaW5lYXJHcmFkaWVudD5gLlxuICAgKi9cbiAgZ3JhZGllbnRJZCA9IGdyYWRpZW50SWRTZWVkKys7XG5cbiAgLyoqIFBhdGhzIHRvIHJlbmRlcmVkIGluIHRoZSB0ZW1wbGF0ZS4gKi9cbiAgcHJvZ3Jlc3NDaXJjbGVQYXRoOiBOelByb2dyZXNzQ2lyY2xlUGF0aFtdID0gW107XG5cbiAgY2lyY2xlR3JhZGllbnQ6IEFycmF5PHsgb2Zmc2V0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT47XG5cbiAgdHJhaWxQYXRoU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XG5cbiAgcGF0aFN0cmluZzogc3RyaW5nO1xuXG4gIGljb246IHN0cmluZztcblxuICB0cmFja0J5Rm4gPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7aW5kZXh9YDtcblxuICBnZXQgZm9ybWF0dGVyKCk6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIge1xuICAgIHJldHVybiB0aGlzLm56Rm9ybWF0IHx8IGRlZmF1bHRGb3JtYXR0ZXI7XG4gIH1cblxuICBnZXQgc3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmluZmVycmVkU3RhdHVzO1xuICB9XG5cbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpTdHJva2VXaWR0aCB8fCAodGhpcy5uelR5cGUgPT09ICdsaW5lJyAmJiB0aGlzLm56U2l6ZSAhPT0gJ3NtYWxsJyA/IDggOiA2KTtcbiAgfVxuXG4gIGdldCBpc0NpcmNsZVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWNoZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgaW5mZXJyZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgbnpHYXBQb3NpdGlvbixcbiAgICAgIG56U3Ryb2tlTGluZWNhcCxcbiAgICAgIG56U3Ryb2tlQ29sb3IsXG4gICAgICBuekdhcERlZ3JlZSxcbiAgICAgIG56VHlwZSxcbiAgICAgIG56U3RhdHVzLFxuICAgICAgbnpQZXJjZW50LFxuICAgICAgbnpTdWNjZXNzUGVyY2VudFxuICAgIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG56U3RhdHVzKSB7XG4gICAgICB0aGlzLmNhY2hlZFN0YXR1cyA9IHRoaXMubnpTdGF0dXMgfHwgdGhpcy5jYWNoZWRTdGF0dXM7XG4gICAgfVxuXG4gICAgaWYgKG56UGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50KSB7XG4gICAgICBjb25zdCBmaWxsQWxsID0gcGFyc2VJbnQodGhpcy5uelBlcmNlbnQudG9TdHJpbmcoKSwgMTApID49IDEwMDtcbiAgICAgIGlmIChmaWxsQWxsKSB7XG4gICAgICAgIGlmICgoaXNOb3ROaWwodGhpcy5uelN1Y2Nlc3NQZXJjZW50KSAmJiB0aGlzLm56U3VjY2Vzc1BlcmNlbnQhID49IDEwMCkgfHwgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gdGhpcy5jYWNoZWRTdGF0dXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG56U3RhdHVzIHx8IG56UGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG5cbiAgICBpZiAobnpTdHJva2VDb2xvcikge1xuICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xuICAgIH1cblxuICAgIGlmIChuekdhcFBvc2l0aW9uIHx8IG56U3Ryb2tlTGluZWNhcCB8fCBuekdhcERlZ3JlZSB8fCBuelR5cGUgfHwgbnpQZXJjZW50IHx8IG56U3Ryb2tlQ29sb3IpIHtcbiAgICAgIHRoaXMuZ2V0Q2lyY2xlUGF0aHMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xuICAgICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSWNvbigpOiB2b2lkIHtcbiAgICBjb25zdCByZXQgPSBzdGF0dXNJY29uTmFtZU1hcC5nZXQodGhpcy5zdGF0dXMpO1xuICAgIHRoaXMuaWNvbiA9IHJldCA/IHJldCArICh0aGlzLmlzQ2lyY2xlU3R5bGUgPyAnLW8nIDogJy1jaXJjbGUtZmlsbCcpIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHBhdGhzIHdoZW4gdGhlIHR5cGUgaXMgY2lyY2xlIG9yIGRhc2hib2FyZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q2lyY2xlUGF0aHMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSBpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpID8gW3RoaXMubnpTdWNjZXNzUGVyY2VudCEsIHRoaXMubnpQZXJjZW50XSA6IFt0aGlzLm56UGVyY2VudF07XG5cbiAgICAvLyBDYWxjdWxhdGUgc2hhcmVkIHN0eWxlcy5cbiAgICBjb25zdCByYWRpdXMgPSA1MCAtIHRoaXMuc3Ryb2tlV2lkdGggLyAyO1xuICAgIGNvbnN0IGdhcFBvc2l0aW9uID0gdGhpcy5uekdhcFBvc2l0aW9uIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgPyAndG9wJyA6ICdib3R0b20nKTtcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcbiAgICBjb25zdCBnYXBEZWdyZWUgPSB0aGlzLm56R2FwRGVncmVlIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgPyAwIDogNzUpO1xuXG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcblxuICAgIHN3aXRjaCAoZ2FwUG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgdGhpcy5wYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAke2VuZFBvc2l0aW9uWH0sJHstZW5kUG9zaXRpb25ZfVxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XG5cbiAgICB0aGlzLnRyYWlsUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHtsZW4gLSBnYXBEZWdyZWV9cHggJHtsZW59cHhgLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgLFxuICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzJ1xuICAgIH07XG5cbiAgICAvLyBDYWxjdWxhdGUgc3R5bGVzIGZvciBlYWNoIHBhdGguXG4gICAgdGhpcy5wcm9ncmVzc0NpcmNsZVBhdGggPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N1Y2Nlc3NQZXJjZW50ID0gdmFsdWVzLmxlbmd0aCA9PT0gMiAmJiBpbmRleCA9PT0gMDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHJva2U6IHRoaXMuaXNHcmFkaWVudCAmJiAhaXNTdWNjZXNzUGVyY2VudCA/IGB1cmwoI2dyYWRpZW50LSR7dGhpcy5ncmFkaWVudElkfSlgIDogbnVsbCxcbiAgICAgICAgICBzdHJva2VQYXRoU3R5bGU6IHtcbiAgICAgICAgICAgIHN0cm9rZTogIXRoaXMuaXNHcmFkaWVudFxuICAgICAgICAgICAgICA/IGlzU3VjY2Vzc1BlcmNlbnRcbiAgICAgICAgICAgICAgICA/IHN0YXR1c0NvbG9yTWFwLmdldCgnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgOiAodGhpcy5uelN0cm9rZUNvbG9yIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycsXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGAkeygodmFsdWUgfHwgMCkgLyAxMDApICogKGxlbiAtIGdhcERlZ3JlZSl9cHggJHtsZW59cHhgLFxuICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0cm9rZUNvbG9yKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5uelN0cm9rZUNvbG9yO1xuICAgIGNvbnN0IGlzR3JhZGllbnQgPSAodGhpcy5pc0dyYWRpZW50ID0gISFjb2xvciAmJiB0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKTtcbiAgICBpZiAoaXNHcmFkaWVudCAmJiAhdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IGhhbmRsZUxpbmVhckdyYWRpZW50KGNvbG9yIGFzIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzR3JhZGllbnQgJiYgdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICB0aGlzLmNpcmNsZUdyYWRpZW50ID0gaGFuZGxlQ2lyY2xlR3JhZGllbnQodGhpcy5uelN0cm9rZUNvbG9yIGFzIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saW5lR3JhZGllbnQgPSBudWxsO1xuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IFtdO1xuICAgIH1cbiAgfVxufVxuIl19