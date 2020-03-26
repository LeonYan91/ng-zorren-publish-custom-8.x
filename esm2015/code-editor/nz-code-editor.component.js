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
export class NzCodeEditorComponent {
    /**
     * @param {?} nzCodeEditorService
     * @param {?} ngZone
     * @param {?} elementRef
     */
    constructor(nzCodeEditorService, ngZone, elementRef) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzEditorOption(value) {
        this.editorOption$.next(value);
    }
    /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzCodeEditorService.requestToInit().subscribe((/**
         * @param {?} option
         * @return {?}
         */
        option => this.setup(option)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.editorInstance) {
            this.editorInstance.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.setValue();
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    onChange(_value) { }
    /**
     * @return {?}
     */
    onTouch() { }
    /**
     * @return {?}
     */
    layout() {
        this.resize$.next();
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    setup(option) {
        inNextTick().subscribe((/**
         * @return {?}
         */
        () => {
            this.editorOptionCached = option;
            this.registerOptionChanges();
            this.initMonacoEditorInstance();
            this.registerResizeChange();
            this.setValue();
            if (!this.nzFullControl) {
                this.setValueEmitter();
            }
            this.nzEditorInitialized.emit(this.editorInstance);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    registerOptionChanges() {
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([selfOpt, defaultOpt]) => {
            this.editorOptionCached = Object.assign({}, this.editorOptionCached, defaultOpt, selfOpt);
            this.updateOptionToMonaco();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initMonacoEditorInstance() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.editorInstance =
                this.nzEditorMode === 'normal'
                    ? monaco.editor.create(this.el, Object.assign({}, this.editorOptionCached))
                    : monaco.editor.createDiffEditor(this.el, Object.assign({}, ((/** @type {?} */ (this.editorOptionCached)))));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    registerResizeChange() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.layout();
            }));
            this.resize$
                .pipe(takeUntil(this.destroy$), filter((/**
             * @return {?}
             */
            () => !!this.editorInstance)), map((/**
             * @return {?}
             */
            () => ({
                width: this.el.clientWidth,
                height: this.el.clientHeight
            }))), distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.width === b.width && a.height === b.height)), debounceTime(50))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.editorInstance.layout();
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setValue() {
        if (!this.editorInstance) {
            return;
        }
        if (this.nzFullControl && this.value) {
            warn(`should not set value when you are using full control mode! It would result in ambiguous data flow!`);
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
                const model = (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel()));
                model.modified.setValue(this.value);
                model.original.setValue(this.nzOriginalText);
            }
            else {
                /** @type {?} */
                const language = ((/** @type {?} */ (this.editorOptionCached))).language;
                ((/** @type {?} */ (this.editorInstance))).setModel({
                    original: monaco.editor.createModel(this.nzOriginalText, language),
                    modified: monaco.editor.createModel(this.value, language)
                });
                this.modelSet = true;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    setValueEmitter() {
        /** @type {?} */
        const model = (/** @type {?} */ ((this.nzEditorMode === 'normal'
            ? ((/** @type {?} */ (this.editorInstance))).getModel()
            : (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel())).modified)));
        model.onDidChangeContent((/**
         * @return {?}
         */
        () => {
            this.emitValue(model.getValue());
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    emitValue(value) {
        this.value = value;
        this.onChange(value);
    }
    /**
     * @private
     * @return {?}
     */
    updateOptionToMonaco() {
        if (this.editorInstance) {
            this.editorInstance.updateOptions(Object.assign({}, this.editorOptionCached));
        }
    }
}
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
                        () => NzCodeEditorComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzCodeEditorComponent.ctorParameters = () => [
    { type: NzCodeEditorService },
    { type: NgZone },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBNEIvRCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUF1QmhDLFlBQW9CLG1CQUF3QyxFQUFVLE1BQWMsRUFBRSxVQUFzQjtRQUF4Rix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRCM0UsaUJBQVksR0FBaUIsUUFBUSxDQUFDO1FBQ3RDLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ0osY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQU81Qix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUVuRix1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QXFFOzs7OztJQUNyRSwrQ0FBOEM7Ozs7O0lBQzlDLHNDQUFtQjs7Ozs7SUFDbkIseUNBQXlCOzs7OztJQUViLG9EQUFnRDs7Ozs7SUFBRSx1Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaW5OZXh0VGljaywgd2FybiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgRGlmZkVkaXRvck9wdGlvbnMsIEVkaXRvck9wdGlvbnMsIEpvaW5lZEVkaXRvck9wdGlvbnMsIE56RWRpdG9yTW9kZSB9IGZyb20gJy4vbnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgTnpDb2RlRWRpdG9yU2VydmljZSB9IGZyb20gJy4vbnotY29kZS1lZGl0b3Iuc2VydmljZSc7XG5cbi8vIEltcG9ydCB0eXBlcyBmcm9tIG1vbmFjbyBlZGl0b3IuXG5pbXBvcnQgeyBlZGl0b3IgfSBmcm9tICdtb25hY28tZWRpdG9yJztcbmltcG9ydCBJRWRpdG9yID0gZWRpdG9yLklFZGl0b3I7XG5pbXBvcnQgSURpZmZFZGl0b3IgPSBlZGl0b3IuSURpZmZFZGl0b3I7XG5pbXBvcnQgSVRleHRNb2RlbCA9IGVkaXRvci5JVGV4dE1vZGVsO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG5kZWNsYXJlIGNvbnN0IG1vbmFjbzogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotY29kZS1lZGl0b3InLFxuICBleHBvcnRBczogJ256Q29kZUVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb2RlLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1jb2RlLWVkaXRvcl0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNvZGVFZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb2RlRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbnpFZGl0b3JNb2RlOiBOekVkaXRvck1vZGUgPSAnbm9ybWFsJztcbiAgQElucHV0KCkgbnpPcmlnaW5hbFRleHQgPSAnJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGdWxsQ29udHJvbCA9IGZhbHNlO1xuICBASW5wdXQoKSBuelRvb2xraXQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIHNldCBuekVkaXRvck9wdGlvbih2YWx1ZTogSm9pbmVkRWRpdG9yT3B0aW9ucykge1xuICAgIHRoaXMuZWRpdG9yT3B0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekVkaXRvckluaXRpYWxpemVkID0gbmV3IEV2ZW50RW1pdHRlcjxJRWRpdG9yIHwgSURpZmZFZGl0b3I+KCk7XG5cbiAgZWRpdG9yT3B0aW9uQ2FjaGVkOiBKb2luZWRFZGl0b3JPcHRpb25zID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHJlc2l6ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGVkaXRvck9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEpvaW5lZEVkaXRvck9wdGlvbnM+KHt9KTtcbiAgcHJpdmF0ZSBlZGl0b3JJbnN0YW5jZTogSUVkaXRvciB8IElEaWZmRWRpdG9yO1xuICBwcml2YXRlIHZhbHVlID0gJyc7XG4gIHByaXZhdGUgbW9kZWxTZXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56Q29kZUVkaXRvclNlcnZpY2U6IE56Q29kZUVkaXRvclNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBtb25hY28gZWRpdG9yIGluc3RhbmNlLlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpDb2RlRWRpdG9yU2VydmljZS5yZXF1ZXN0VG9Jbml0KCkuc3Vic2NyaWJlKG9wdGlvbiA9PiB0aGlzLnNldHVwKG9wdGlvbikpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldFZhbHVlKCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogYW55IHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIG9uQ2hhbmdlKF92YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIG9uVG91Y2goKTogdm9pZCB7fVxuXG4gIGxheW91dCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cChvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnMpOiB2b2lkIHtcbiAgICBpbk5leHRUaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkID0gb3B0aW9uO1xuICAgICAgdGhpcy5yZWdpc3Rlck9wdGlvbkNoYW5nZXMoKTtcbiAgICAgIHRoaXMuaW5pdE1vbmFjb0VkaXRvckluc3RhbmNlKCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyUmVzaXplQ2hhbmdlKCk7XG4gICAgICB0aGlzLnNldFZhbHVlKCk7XG5cbiAgICAgIGlmICghdGhpcy5uekZ1bGxDb250cm9sKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVFbWl0dGVyKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubnpFZGl0b3JJbml0aWFsaXplZC5lbWl0KHRoaXMuZWRpdG9ySW5zdGFuY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlck9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5lZGl0b3JPcHRpb24kLCB0aGlzLm56Q29kZUVkaXRvclNlcnZpY2Uub3B0aW9uJF0pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChbc2VsZk9wdCwgZGVmYXVsdE9wdF0pID0+IHtcbiAgICAgICAgdGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgPSB7XG4gICAgICAgICAgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQsXG4gICAgICAgICAgLi4uZGVmYXVsdE9wdCxcbiAgICAgICAgICAuLi5zZWxmT3B0XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9uVG9Nb25hY28oKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0TW9uYWNvRWRpdG9ySW5zdGFuY2UoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZSA9XG4gICAgICAgIHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJ1xuICAgICAgICAgID8gbW9uYWNvLmVkaXRvci5jcmVhdGUodGhpcy5lbCwgeyAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCB9KVxuICAgICAgICAgIDogbW9uYWNvLmVkaXRvci5jcmVhdGVEaWZmRWRpdG9yKHRoaXMuZWwsIHtcbiAgICAgICAgICAgICAgLi4uKHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIGFzIERpZmZFZGl0b3JPcHRpb25zKVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyUmVzaXplQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMzAwKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxheW91dCgpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5yZXNpemUkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmVkaXRvckluc3RhbmNlKSxcbiAgICAgICAgICBtYXAoKCkgPT4gKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmVsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsLmNsaWVudEhlaWdodFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4gYS53aWR0aCA9PT0gYi53aWR0aCAmJiBhLmhlaWdodCA9PT0gYi5oZWlnaHQpLFxuICAgICAgICAgIGRlYm91bmNlVGltZSg1MClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmxheW91dCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVkaXRvckluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnpGdWxsQ29udHJvbCAmJiB0aGlzLnZhbHVlKSB7XG4gICAgICB3YXJuKGBzaG91bGQgbm90IHNldCB2YWx1ZSB3aGVuIHlvdSBhcmUgdXNpbmcgZnVsbCBjb250cm9sIG1vZGUhIEl0IHdvdWxkIHJlc3VsdCBpbiBhbWJpZ3VvdXMgZGF0YSBmbG93IWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgIGlmICh0aGlzLm1vZGVsU2V0KSB7XG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlLmdldE1vZGVsKCkgYXMgSVRleHRNb2RlbCkuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRWRpdG9yKS5zZXRNb2RlbChcbiAgICAgICAgICBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMudmFsdWUsICh0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBFZGl0b3JPcHRpb25zKS5sYW5ndWFnZSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tb2RlbFNldCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGVsU2V0KSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSURpZmZFZGl0b3IpLmdldE1vZGVsKCkhO1xuICAgICAgICBtb2RlbC5tb2RpZmllZC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgbW9kZWwub3JpZ2luYWwuc2V0VmFsdWUodGhpcy5uek9yaWdpbmFsVGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsYW5ndWFnZSA9ICh0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBFZGl0b3JPcHRpb25zKS5sYW5ndWFnZTtcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSURpZmZFZGl0b3IpLnNldE1vZGVsKHtcbiAgICAgICAgICBvcmlnaW5hbDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLm56T3JpZ2luYWxUZXh0LCBsYW5ndWFnZSksXG4gICAgICAgICAgbW9kaWZpZWQ6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy52YWx1ZSwgbGFuZ3VhZ2UpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vZGVsU2V0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFZhbHVlRW1pdHRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RlbCA9ICh0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCdcbiAgICAgID8gKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSUVkaXRvcikuZ2V0TW9kZWwoKVxuICAgICAgOiAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuZ2V0TW9kZWwoKSEubW9kaWZpZWQpIGFzIElUZXh0TW9kZWw7XG5cbiAgICBtb2RlbC5vbkRpZENoYW5nZUNvbnRlbnQoKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0VmFsdWUobW9kZWwuZ2V0VmFsdWUoKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVPcHRpb25Ub01vbmFjbygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lZGl0b3JJbnN0YW5jZSkge1xuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS51cGRhdGVPcHRpb25zKHsgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=