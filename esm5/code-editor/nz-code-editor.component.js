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
import { forwardRef, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { combineLatest, fromEvent, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { inNextTick, warn, InputBoolean } from 'ng-zorro-antd/core';
import { NzCodeEditorService } from './nz-code-editor.service';
var NzCodeEditorComponent = /** @class */ (function () {
    function NzCodeEditorComponent(nzCodeEditorService, ngZone, elementRef) {
        this.nzCodeEditorService = nzCodeEditorService;
        this.ngZone = ngZone;
        this.nzEditorMode = 'normal';
        this.nzOriginalText = '';
        this.nzLoading = false;
        this.nzFullControl = false;
        this.nzEditorInitialized = new EventEmitter();
        this.editorOptionCached = {};
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
        this.editorOption$ = new BehaviorSubject({});
        this.value = '';
        this.modelSet = false;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NzCodeEditorComponent.prototype, "nzEditorOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.editorOption$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize a monaco editor instance.
     */
    /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    NzCodeEditorComponent.prototype.ngAfterViewInit = /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzCodeEditorService.requestToInit().subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return _this.setup(option); }));
    };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.setValue();
    };
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOnChange = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOnTouched = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} _value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.onChange = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.onTouch = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.layout = /**
     * @return {?}
     */
    function () {
        this.resize$.next();
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setup = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        inNextTick().subscribe((/**
         * @return {?}
         */
        function () {
            _this.editorOptionCached = option;
            _this.registerOptionChanges();
            _this.initMonacoEditorInstance();
            _this.registerResizeChange();
            _this.setValue();
            if (!_this.nzFullControl) {
                _this.setValueEmitter();
            }
            _this.nzEditorInitialized.emit(_this.editorInstance);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOptionChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), selfOpt = _b[0], defaultOpt = _b[1];
            _this.editorOptionCached = tslib_1.__assign({}, _this.editorOptionCached, defaultOpt, selfOpt);
            _this.updateOptionToMonaco();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.initMonacoEditorInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.editorInstance =
                _this.nzEditorMode === 'normal'
                    ? monaco.editor.create(_this.el, tslib_1.__assign({}, _this.editorOptionCached))
                    : monaco.editor.createDiffEditor(_this.el, tslib_1.__assign({}, ((/** @type {?} */ (_this.editorOptionCached)))));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerResizeChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.layout();
            }));
            _this.resize$
                .pipe(takeUntil(_this.destroy$), filter((/**
             * @return {?}
             */
            function () { return !!_this.editorInstance; })), map((/**
             * @return {?}
             */
            function () { return ({
                width: _this.el.clientWidth,
                height: _this.el.clientHeight
            }); })), distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.width === b.width && a.height === b.height; })), debounceTime(50))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.editorInstance.layout();
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.editorInstance) {
            return;
        }
        if (this.nzFullControl && this.value) {
            warn("should not set value when you are using full control mode! It would result in ambiguous data flow!");
            return;
        }
        if (this.nzEditorMode === 'normal') {
            if (this.modelSet) {
                ((/** @type {?} */ (this.editorInstance.getModel()))).setValue(this.value);
            }
            else {
                ((/** @type {?} */ (this.editorInstance))).setModel(monaco.editor.createModel(this.value, ((/** @type {?} */ (this.editorOptionCached))).language));
                this.modelSet = true;
            }
        }
        else {
            if (this.modelSet) {
                /** @type {?} */
                var model = (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel()));
                model.modified.setValue(this.value);
                model.original.setValue(this.nzOriginalText);
            }
            else {
                /** @type {?} */
                var language = ((/** @type {?} */ (this.editorOptionCached))).language;
                ((/** @type {?} */ (this.editorInstance))).setModel({
                    original: monaco.editor.createModel(this.nzOriginalText, language),
                    modified: monaco.editor.createModel(this.value, language)
                });
                this.modelSet = true;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setValueEmitter = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var model = (/** @type {?} */ ((this.nzEditorMode === 'normal'
            ? ((/** @type {?} */ (this.editorInstance))).getModel()
            : (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel())).modified)));
        model.onDidChangeContent((/**
         * @return {?}
         */
        function () {
            _this.emitValue(model.getValue());
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.emitValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.onChange(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.updateOptionToMonaco = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.updateOptions(tslib_1.__assign({}, this.editorOptionCached));
        }
    };
    NzCodeEditorComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-code-editor',
                    exportAs: 'nzCodeEditor',
                    template: "<div class=\"ant-code-editor-loading\" *ngIf=\"nzLoading\">\n  <nz-spin></nz-spin>\n</div>\n\n<div class=\"ant-code-editor-toolkit\" *ngIf=\"nzToolkit\">\n  <ng-template [ngTemplateOutlet]=\"nzToolkit\"></ng-template>\n</div>\n",
                    host: {
                        '[class.ant-code-editor]': 'true'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCodeEditorComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCodeEditorComponent.ctorParameters = function () { return [
        { type: NzCodeEditorService },
        { type: NgZone },
        { type: ElementRef }
    ]; };
    NzCodeEditorComponent.propDecorators = {
        nzEditorMode: [{ type: Input }],
        nzOriginalText: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzFullControl: [{ type: Input }],
        nzToolkit: [{ type: Input }],
        nzEditorOption: [{ type: Input }],
        nzEditorInitialized: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzFullControl", void 0);
    return NzCodeEditorComponent;
}());
export { NzCodeEditorComponent };
if (false) {
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzEditorMode;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzOriginalText;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzLoading;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzFullControl;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzToolkit;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzEditorInitialized;
    /** @type {?} */
    NzCodeEditorComponent.prototype.editorOptionCached;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.editorOption$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.editorInstance;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.modelSet;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.nzCodeEditorService;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVy9EO0lBd0NFLCtCQUFvQixtQkFBd0MsRUFBVSxNQUFjLEVBQUUsVUFBc0I7UUFBeEYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QjNFLGlCQUFZLEdBQWlCLFFBQVEsQ0FBQztRQUN0QyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNKLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFPNUIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFFbkYsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztR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QUFLO3NDQUlMLE1BQU07O0lBUmtCO1FBQWYsWUFBWSxFQUFFOzs0REFBbUI7SUFDbEI7UUFBZixZQUFZLEVBQUU7O2dFQUF1QjtJQXNMakQsNEJBQUM7Q0FBQSxBQTNNRCxJQTJNQztTQTFMWSxxQkFBcUI7OztJQUNoQyw2Q0FBK0M7O0lBQy9DLCtDQUE2Qjs7SUFDN0IsMENBQTJDOztJQUMzQyw4Q0FBK0M7O0lBQy9DLDBDQUFzQzs7SUFNdEMsb0RBQW1GOztJQUVuRixtREFBNkM7Ozs7O0lBRTdDLG1DQUFpQzs7Ozs7SUFDakMseUNBQXVDOzs7OztJQUN2Qyx3Q0FBc0M7Ozs7O0lBQ3RDLDhDQUFxRTs7Ozs7SUFDckUsK0NBQThDOzs7OztJQUM5QyxzQ0FBbUI7Ozs7O0lBQ25CLHlDQUF5Qjs7Ozs7SUFFYixvREFBZ0Q7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGluTmV4dFRpY2ssIHdhcm4sIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IERpZmZFZGl0b3JPcHRpb25zLCBFZGl0b3JPcHRpb25zLCBKb2luZWRFZGl0b3JPcHRpb25zLCBOekVkaXRvck1vZGUgfSBmcm9tICcuL256LWNvZGUtZWRpdG9yLmRlZmluaXRpb25zJztcbmltcG9ydCB7IE56Q29kZUVkaXRvclNlcnZpY2UgfSBmcm9tICcuL256LWNvZGUtZWRpdG9yLnNlcnZpY2UnO1xuXG4vLyBJbXBvcnQgdHlwZXMgZnJvbSBtb25hY28gZWRpdG9yLlxuaW1wb3J0IHsgZWRpdG9yIH0gZnJvbSAnbW9uYWNvLWVkaXRvcic7XG5pbXBvcnQgSUVkaXRvciA9IGVkaXRvci5JRWRpdG9yO1xuaW1wb3J0IElEaWZmRWRpdG9yID0gZWRpdG9yLklEaWZmRWRpdG9yO1xuaW1wb3J0IElUZXh0TW9kZWwgPSBlZGl0b3IuSVRleHRNb2RlbDtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuZGVjbGFyZSBjb25zdCBtb25hY286IGFueTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWNvZGUtZWRpdG9yJyxcbiAgZXhwb3J0QXM6ICduekNvZGVFZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29kZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY29kZS1lZGl0b3JdJzogJ3RydWUnXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDb2RlRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29kZUVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG56RWRpdG9yTW9kZTogTnpFZGl0b3JNb2RlID0gJ25vcm1hbCc7XG4gIEBJbnB1dCgpIG56T3JpZ2luYWxUZXh0ID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RnVsbENvbnRyb2wgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpUb29sa2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBzZXQgbnpFZGl0b3JPcHRpb24odmFsdWU6IEpvaW5lZEVkaXRvck9wdGlvbnMpIHtcbiAgICB0aGlzLmVkaXRvck9wdGlvbiQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFZGl0b3JJbml0aWFsaXplZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUVkaXRvciB8IElEaWZmRWRpdG9yPigpO1xuXG4gIGVkaXRvck9wdGlvbkNhY2hlZDogSm9pbmVkRWRpdG9yT3B0aW9ucyA9IHt9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBlZGl0b3JPcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxKb2luZWRFZGl0b3JPcHRpb25zPih7fSk7XG4gIHByaXZhdGUgZWRpdG9ySW5zdGFuY2U6IElFZGl0b3IgfCBJRGlmZkVkaXRvcjtcbiAgcHJpdmF0ZSB2YWx1ZSA9ICcnO1xuICBwcml2YXRlIG1vZGVsU2V0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekNvZGVFZGl0b3JTZXJ2aWNlOiBOekNvZGVFZGl0b3JTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbW9uYWNvIGVkaXRvciBpbnN0YW5jZS5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29kZUVkaXRvclNlcnZpY2UucmVxdWVzdFRvSW5pdCgpLnN1YnNjcmliZShvcHRpb24gPT4gdGhpcy5zZXR1cChvcHRpb24pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IGFueSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBvbkNoYW5nZShfdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICBvblRvdWNoKCk6IHZvaWQge31cblxuICBsYXlvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemUkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXAob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XG4gICAgaW5OZXh0VGljaygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCA9IG9wdGlvbjtcbiAgICAgIHRoaXMucmVnaXN0ZXJPcHRpb25DaGFuZ2VzKCk7XG4gICAgICB0aGlzLmluaXRNb25hY29FZGl0b3JJbnN0YW5jZSgpO1xuICAgICAgdGhpcy5yZWdpc3RlclJlc2l6ZUNoYW5nZSgpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSgpO1xuXG4gICAgICBpZiAoIXRoaXMubnpGdWxsQ29udHJvbCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlRW1pdHRlcigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm56RWRpdG9ySW5pdGlhbGl6ZWQuZW1pdCh0aGlzLmVkaXRvckluc3RhbmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMuZWRpdG9yT3B0aW9uJCwgdGhpcy5uekNvZGVFZGl0b3JTZXJ2aWNlLm9wdGlvbiRdKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoW3NlbGZPcHQsIGRlZmF1bHRPcHRdKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkID0ge1xuICAgICAgICAgIC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkLFxuICAgICAgICAgIC4uLmRlZmF1bHRPcHQsXG4gICAgICAgICAgLi4uc2VsZk9wdFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvblRvTW9uYWNvKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE1vbmFjb0VkaXRvckluc3RhbmNlKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UgPVxuICAgICAgICB0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCdcbiAgICAgICAgICA/IG1vbmFjby5lZGl0b3IuY3JlYXRlKHRoaXMuZWwsIHsgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgfSlcbiAgICAgICAgICA6IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLmVsLCB7XG4gICAgICAgICAgICAgIC4uLih0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBEaWZmRWRpdG9yT3B0aW9ucylcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclJlc2l6ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDMwMCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVzaXplJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5lZGl0b3JJbnN0YW5jZSksXG4gICAgICAgICAgbWFwKCgpID0+ICh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IGEud2lkdGggPT09IGIud2lkdGggJiYgYS5oZWlnaHQgPT09IGIuaGVpZ2h0KSxcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoNTApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5sYXlvdXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5lZGl0b3JJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm56RnVsbENvbnRyb2wgJiYgdGhpcy52YWx1ZSkge1xuICAgICAgd2Fybihgc2hvdWxkIG5vdCBzZXQgdmFsdWUgd2hlbiB5b3UgYXJlIHVzaW5nIGZ1bGwgY29udHJvbCBtb2RlISBJdCB3b3VsZCByZXN1bHQgaW4gYW1iaWd1b3VzIGRhdGEgZmxvdyFgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5tb2RlbFNldCkge1xuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZS5nZXRNb2RlbCgpIGFzIElUZXh0TW9kZWwpLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSUVkaXRvcikuc2V0TW9kZWwoXG4gICAgICAgICAgbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLnZhbHVlLCAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2UpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubW9kZWxTZXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlbFNldCkge1xuICAgICAgICBjb25zdCBtb2RlbCA9ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5nZXRNb2RlbCgpITtcbiAgICAgICAgbW9kZWwubW9kaWZpZWQuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIG1vZGVsLm9yaWdpbmFsLnNldFZhbHVlKHRoaXMubnpPcmlnaW5hbFRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2U7XG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5zZXRNb2RlbCh7XG4gICAgICAgICAgb3JpZ2luYWw6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5uek9yaWdpbmFsVGV4dCwgbGFuZ3VhZ2UpLFxuICAgICAgICAgIG1vZGlmaWVkOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMudmFsdWUsIGxhbmd1YWdlKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbFNldCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZUVtaXR0ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgbW9kZWwgPSAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnXG4gICAgICA/ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElFZGl0b3IpLmdldE1vZGVsKClcbiAgICAgIDogKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSURpZmZFZGl0b3IpLmdldE1vZGVsKCkhLm1vZGlmaWVkKSBhcyBJVGV4dE1vZGVsO1xuXG4gICAgbW9kZWwub25EaWRDaGFuZ2VDb250ZW50KCgpID0+IHtcbiAgICAgIHRoaXMuZW1pdFZhbHVlKG1vZGVsLmdldFZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlT3B0aW9uVG9Nb25hY28oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UudXBkYXRlT3B0aW9ucyh7IC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIH0pO1xuICAgIH1cbiAgfVxufVxuIl19