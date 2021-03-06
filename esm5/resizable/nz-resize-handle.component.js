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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzResizableService } from './nz-resizable.service';
var NzResizeHandleMouseDownEvent = /** @class */ (function () {
    function NzResizeHandleMouseDownEvent(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
    return NzResizeHandleMouseDownEvent;
}());
export { NzResizeHandleMouseDownEvent };
if (false) {
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.direction;
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.mouseEvent;
}
var NzResizeHandleComponent = /** @class */ (function () {
    function NzResizeHandleComponent(nzResizableService, cdr) {
        this.nzResizableService = nzResizableService;
        this.cdr = cdr;
        this.nzDirection = 'bottomRight';
        this.nzMouseDown = new EventEmitter();
        this.entered = false;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzResizeHandleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzResizableService.mouseEntered$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} entered
         * @return {?}
         */
        function (entered) {
            _this.entered = entered;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizeHandleComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
    };
    /**
     * @return {?}
     */
    NzResizeHandleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzResizeHandleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-resize-handle, [nz-resize-handle]',
                    exportAs: 'nzResizeHandle',
                    template: "<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class]': '"nz-resizable-handle nz-resizable-handle-" + nzDirection',
                        '[class.nz-resizable-handle-box-hover]': 'entered',
                        '(mousedown)': 'onMousedown($event)',
                        '(touchstart)': 'onMousedown($event)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzResizeHandleComponent.ctorParameters = function () { return [
        { type: NzResizableService },
        { type: ChangeDetectorRef }
    ]; };
    NzResizeHandleComponent.propDecorators = {
        nzDirection: [{ type: Input }],
        nzMouseDown: [{ type: Output }]
    };
    return NzResizeHandleComponent;
}());
export { NzResizeHandleComponent };
if (false) {
    /** @type {?} */
    NzResizeHandleComponent.prototype.nzDirection;
    /** @type {?} */
    NzResizeHandleComponent.prototype.nzMouseDown;
    /** @type {?} */
    NzResizeHandleComponent.prototype.entered;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.nzResizableService;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBWTVEO0lBQ0Usc0NBQW1CLFNBQTRCLEVBQVMsVUFBbUM7UUFBeEUsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtJQUFHLENBQUM7SUFDakcsbUNBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURhLGlEQUFtQzs7SUFBRSxrREFBMEM7O0FBRzdGO0lBbUJFLGlDQUFvQixrQkFBc0MsRUFBVSxHQUFzQjtRQUF0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOakYsZ0JBQVcsR0FBc0IsYUFBYSxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFFbEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNSLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRXNELENBQUM7Ozs7SUFFOUYsMENBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNwRixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBOEI7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRyxDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIscUNBQWdEO29CQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSwwREFBMEQ7d0JBQ3JFLHVDQUF1QyxFQUFFLFNBQVM7d0JBQ2xELGFBQWEsRUFBRSxxQkFBcUI7d0JBQ3BDLGNBQWMsRUFBRSxxQkFBcUI7cUJBQ3RDO2lCQUNGOzs7O2dCQTNCUSxrQkFBa0I7Z0JBWHpCLGlCQUFpQjs7OzhCQXdDaEIsS0FBSzs4QkFDTCxNQUFNOztJQXNCVCw4QkFBQztDQUFBLEFBcENELElBb0NDO1NBeEJZLHVCQUF1Qjs7O0lBQ2xDLDhDQUF3RDs7SUFDeEQsOENBQWtGOztJQUVsRiwwQ0FBZ0I7Ozs7O0lBQ2hCLDJDQUF1Qzs7Ozs7SUFFM0IscURBQThDOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpSZXNpemFibGVTZXJ2aWNlIH0gZnJvbSAnLi9uei1yZXNpemFibGUuc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE56UmVzaXplRGlyZWN0aW9uID1cbiAgfCAndG9wJ1xuICB8ICdyaWdodCdcbiAgfCAnYm90dG9tJ1xuICB8ICdsZWZ0J1xuICB8ICd0b3BSaWdodCdcbiAgfCAnYm90dG9tUmlnaHQnXG4gIHwgJ2JvdHRvbUxlZnQnXG4gIHwgJ3RvcExlZnQnO1xuXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uLCBwdWJsaWMgbW91c2VFdmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXJlc2l6ZS1oYW5kbGUsIFtuei1yZXNpemUtaGFuZGxlXScsXG4gIGV4cG9ydEFzOiAnbnpSZXNpemVIYW5kbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnXCJuei1yZXNpemFibGUtaGFuZGxlIG56LXJlc2l6YWJsZS1oYW5kbGUtXCIgKyBuekRpcmVjdGlvbicsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlLWJveC1ob3Zlcl0nOiAnZW50ZXJlZCcsXG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknLFxuICAgICcodG91Y2hzdGFydCknOiAnb25Nb3VzZWRvd24oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZUhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpEaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uID0gJ2JvdHRvbVJpZ2h0JztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xuXG4gIGVudGVyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelJlc2l6YWJsZVNlcnZpY2U6IE56UmVzaXphYmxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShlbnRlcmVkID0+IHtcbiAgICAgIHRoaXMuZW50ZXJlZCA9IGVudGVyZWQ7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmhhbmRsZU1vdXNlRG93biQubmV4dChuZXcgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCh0aGlzLm56RGlyZWN0aW9uLCBldmVudCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=