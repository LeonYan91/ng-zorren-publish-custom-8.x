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
import { ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { warn, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzUploadBtnComponent = /** @class */ (function () {
    // #endregion
    function NzUploadBtnComponent(http, el, updateHostClassService) {
        this.http = http;
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.reqs = {};
        this.inited = false;
        this.destroy = false;
        // #region fields
        this.classes = {};
        // #region styles
        this.prefixCls = 'ant-upload';
        if (!http) {
            throw new Error("Not found 'HttpClient', You can import 'HttpClientModule' in your root module.");
        }
    }
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onClick = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        ((/** @type {?} */ (this.file.nativeElement))).click();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // skip safari bug
    // tslint:disable-next-line:no-any
    NzUploadBtnComponent.prototype.onFileDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree((/** @type {?} */ (e.dataTransfer)).items);
        }
        else {
            /** @type {?} */
            var files = Array.prototype.slice
                .call((/** @type {?} */ (e.dataTransfer)).files)
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return _this.attrAccept(file, _this.options.accept); }));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        var hie = (/** @type {?} */ (e.target));
        this.uploadFiles((/** @type {?} */ (hie.files)));
        hie.value = '';
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    NzUploadBtnComponent.prototype.traverseFileTree = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var e_1, _a;
        var _this = this;
        // tslint:disable-next-line:no-any
        /** @type {?} */
        var _traverseFileTree = (/**
         * @param {?} item
         * @param {?} path
         * @return {?}
         */
        function (item, path) {
            if (item.isFile) {
                item.file((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) {
                    if (_this.attrAccept(file, _this.options.accept)) {
                        _this.uploadFiles([file]);
                    }
                }));
            }
            else if (item.isDirectory) {
                /** @type {?} */
                var dirReader = item.createReader();
                // tslint:disable-next-line:no-any
                dirReader.readEntries((/**
                 * @param {?} entries
                 * @return {?}
                 */
                function (entries) {
                    var e_2, _a;
                    try {
                        for (var entries_1 = tslib_1.__values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                            var entrieItem = entries_1_1.value;
                            _traverseFileTree(entrieItem, "" + path + item.name + "/");
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }));
            }
        });
        try {
            // tslint:disable-next-line:no-any
            for (var _b = tslib_1.__values((/** @type {?} */ (files))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var file = _c.value;
                _traverseFileTree(file.webkitGetAsEntry(), '');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    NzUploadBtnComponent.prototype.attrAccept = /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    function (file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            var fileName_1 = '' + file.name;
            /** @type {?} */
            var mimeType_1 = '' + file.type;
            /** @type {?} */
            var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
            return acceptedFilesArray.some((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                /** @type {?} */
                var validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName_1
                        .toLowerCase()
                        .indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType_1 === validType.replace(/\/.*$/, '');
                }
                return mimeType_1 === validType;
            }));
        }
        return true;
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.attachUid = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    };
    /**
     * @param {?} fileList
     * @return {?}
     */
    NzUploadBtnComponent.prototype.uploadFiles = /**
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        var _this = this;
        /** @type {?} */
        var filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                filters$ = filters$.pipe(switchMap((/**
                 * @param {?} list
                 * @return {?}
                 */
                function (list) {
                    /** @type {?} */
                    var fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                })));
            }));
        }
        filters$.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            list.forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.attachUid(file);
                _this.upload(file, list);
            }));
        }), (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            warn("Unhandled upload filter error", e);
        }));
    };
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadBtnComponent.prototype.upload = /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        var _this = this;
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        var before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((/**
             * @param {?} processedFile
             * @return {?}
             */
            function (processedFile) {
                /** @type {?} */
                var processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    _this.attachUid(processedFile);
                    _this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    _this.post(file);
                }
            }), (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                warn("Unhandled upload beforeUpload error", e);
            }));
        }
        else if (before !== false) {
            return this.post(file);
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.post = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        var opt = this.options;
        var uid = file.uid;
        var data = opt.data, headers = opt.headers;
        if (typeof data === 'function') {
            data = ((/** @type {?} */ (data)))(file);
        }
        if (typeof headers === 'function') {
            headers = ((/** @type {?} */ (headers)))(file);
        }
        /** @type {?} */
        var args = {
            action: opt.action,
            name: opt.name,
            headers: headers,
            file: file,
            data: data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    (/** @type {?} */ (opt.onProgress))(e, file);
                })
                : undefined,
            onSuccess: (/**
             * @param {?} ret
             * @param {?} xhr
             * @return {?}
             */
            function (ret, xhr) {
                _this.clean(uid);
                (/** @type {?} */ (opt.onSuccess))(ret, file, xhr);
            }),
            onError: (/**
             * @param {?} xhr
             * @return {?}
             */
            function (xhr) {
                _this.clean(uid);
                (/** @type {?} */ (opt.onError))(xhr, file);
            })
        };
        /** @type {?} */
        var req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            warn("Must return Subscription type in '[nzCustomRequest]' property");
        }
        this.reqs[uid] = req$;
        (/** @type {?} */ (opt.onStart))(file);
    };
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    NzUploadBtnComponent.prototype.xhr = /**
     * @private
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        /** @type {?} */
        var formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append((/** @type {?} */ (args.name)), (/** @type {?} */ (args.file)));
        if (args.data) {
            Object.keys(args.data).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                formData.append(key, (/** @type {?} */ (args.data))[key]);
            }));
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = "XMLHttpRequest";
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        /** @type {?} */
        var req = new HttpRequest('POST', (/** @type {?} */ (args.action)), formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((
        // tslint:disable-next-line no-any
        // tslint:disable-next-line no-any
        /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.type === HttpEventType.UploadProgress) {
                if ((/** @type {?} */ (event.total)) > 0) {
                    // tslint:disable-next-line:no-any
                    ((/** @type {?} */ (event))).percent = (event.loaded / (/** @type {?} */ (event.total))) * 100;
                }
                (/** @type {?} */ (args.onProgress))(event, args.file);
            }
            else if (event instanceof HttpResponse) {
                (/** @type {?} */ (args.onSuccess))(event.body, args.file, event);
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.abort(args.file);
            (/** @type {?} */ (args.onError))(err, args.file);
        }));
    };
    /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    NzUploadBtnComponent.prototype.clean = /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    function (uid) {
        /** @type {?} */
        var req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    };
    /**
     * @param {?=} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.abort = /**
     * @param {?=} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach((/**
             * @param {?} uid
             * @return {?}
             */
            function (uid) { return _this.clean(uid); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzUploadBtnComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a[this.prefixCls] = true, _a[this.prefixCls + "-disabled"] = this.options.disabled, _a), this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inited = true;
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy = true;
        this.abort();
    };
    NzUploadBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-upload-btn]',
                    exportAs: 'nzUploadBtn',
                    template: "<input type=\"file\" #file (change)=\"onChange($event)\"\n  [attr.accept]=\"options.accept\"\n  [attr.directory]=\"options.directory ? 'directory': null\"\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory': null\"\n  [multiple]=\"options.multiple\" style=\"display: none;\">\n<ng-content></ng-content>",
                    host: {
                        '[attr.tabindex]': '"0"',
                        '[attr.role]': '"button"'
                    },
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzUploadBtnComponent.ctorParameters = function () { return [
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzUploadBtnComponent.propDecorators = {
        file: [{ type: ViewChild, args: ['file', { static: false },] }],
        classes: [{ type: Input }],
        options: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onFileDrop: [{ type: HostListener, args: ['drop', ['$event'],] }, { type: HostListener, args: ['dragover', ['$event'],] }]
    };
    return NzUploadBtnComponent;
}());
export { NzUploadBtnComponent };
if (false) {
    /** @type {?} */
    NzUploadBtnComponent.prototype.reqs;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.destroy;
    /** @type {?} */
    NzUploadBtnComponent.prototype.file;
    /** @type {?} */
    NzUploadBtnComponent.prototype.classes;
    /** @type {?} */
    NzUploadBtnComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.updateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3VwbG9hZC8iLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFhLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BILE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJcEU7SUEwU0UsYUFBYTtJQUViLDhCQUNzQixJQUFnQixFQUM1QixFQUFjLEVBQ2Qsc0JBQWdEO1FBRnBDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDNUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFsUzFELFNBQUksR0FBb0MsRUFBRSxDQUFDO1FBQ25DLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDOztRQUtmLFlBQU8sR0FBTyxFQUFFLENBQUM7O1FBMlFsQixjQUFTLEdBQUcsWUFBWSxDQUFDO1FBa0IvQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO1NB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ZCxRQUFRO2dCQTlUWCxVQUFVO2dCQWFHLHdCQUF3Qjs7O3VCQXFCcEMsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MEJBR25DLEtBQUs7MEJBQ0wsS0FBSzswQkFJTCxZQUFZLFNBQUMsT0FBTzs0QkFRcEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFVbEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMvQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXlSdEMsMkJBQUM7Q0FBQSxBQXJVRCxJQXFVQztTQXpUWSxvQkFBb0I7OztJQUMvQixvQ0FBMkM7Ozs7O0lBQzNDLHNDQUF1Qjs7Ozs7SUFDdkIsdUNBQXdCOztJQUV4QixvQ0FBdUQ7O0lBR3ZELHVDQUEwQjs7SUFDMUIsdUNBQW1DOzs7OztJQTBRbkMseUNBQWlDOzs7OztJQWMvQixvQ0FBb0M7Ozs7O0lBQ3BDLGtDQUFzQjs7Ozs7SUFDdEIsc0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEVOVEVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cEhlYWRlcnMsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB3YXJuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRYSFJBcmdzLCBaaXBCdXR0b25PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotdXBsb2FkLWJ0bl0nLFxuICBleHBvcnRBczogJ256VXBsb2FkQnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXVwbG9hZC1idG4uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdcIjBcIicsXG4gICAgJ1thdHRyLnJvbGVdJzogJ1wiYnV0dG9uXCInXG4gIH0sXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE56VXBsb2FkQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJlcXM6IHsgW2tleTogc3RyaW5nXTogU3Vic2NyaXB0aW9uIH0gPSB7fTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95ID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnZmlsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlOiBFbGVtZW50UmVmO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG4gIEBJbnB1dCgpIGNsYXNzZXM6IHt9ID0ge307XG4gIEBJbnB1dCgpIG9wdGlvbnM6IFppcEJ1dHRvbk9wdGlvbnM7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8ICF0aGlzLm9wdGlvbnMub3BlbkZpbGVEaWFsb2dPbkNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICh0aGlzLmZpbGUubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGljaygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgLy8gc2tpcCBzYWZhcmkgYnVnXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25GaWxlRHJvcChlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8IGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdG9yeSkge1xuICAgICAgdGhpcy50cmF2ZXJzZUZpbGVUcmVlKGUuZGF0YVRyYW5zZmVyIS5pdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVzOiBGaWxlW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgLmNhbGwoZS5kYXRhVHJhbnNmZXIhLmZpbGVzKVxuICAgICAgICAuZmlsdGVyKChmaWxlOiBGaWxlKSA9PiB0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpO1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbkNoYW5nZShlOiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGllID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLnVwbG9hZEZpbGVzKGhpZS5maWxlcyEpO1xuICAgIGhpZS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmF2ZXJzZUZpbGVUcmVlKGZpbGVzOiBEYXRhVHJhbnNmZXJJdGVtTGlzdCk6IHZvaWQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdCBfdHJhdmVyc2VGaWxlVHJlZSA9IChpdGVtOiBhbnksIHBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGl0ZW0uaXNGaWxlKSB7XG4gICAgICAgIGl0ZW0uZmlsZSgoZmlsZTogRmlsZSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZXMoW2ZpbGVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmlzRGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpclJlYWRlciA9IGl0ZW0uY3JlYXRlUmVhZGVyKCk7XG5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBkaXJSZWFkZXIucmVhZEVudHJpZXMoKGVudHJpZXM6IGFueSkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgZW50cmllSXRlbSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICBfdHJhdmVyc2VGaWxlVHJlZShlbnRyaWVJdGVtLCBgJHtwYXRofSR7aXRlbS5uYW1lfS9gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcyBhcyBhbnkpIHtcbiAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGZpbGUud2Via2l0R2V0QXNFbnRyeSgpLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRyQWNjZXB0KGZpbGU6IEZpbGUsIGFjY2VwdGVkRmlsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcbiAgICAgIGNvbnN0IGFjY2VwdGVkRmlsZXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWNjZXB0ZWRGaWxlcykgPyBhY2NlcHRlZEZpbGVzIDogYWNjZXB0ZWRGaWxlcy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSAnJyArIGZpbGUubmFtZTtcbiAgICAgIGNvbnN0IG1pbWVUeXBlID0gJycgKyBmaWxlLnR5cGU7XG4gICAgICBjb25zdCBiYXNlTWltZVR5cGUgPSBtaW1lVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG5cbiAgICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZSh0eXBlID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRUeXBlID0gdHlwZS50cmltKCk7XG4gICAgICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSAnLicpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZmlsZU5hbWVcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLmluZGV4T2YodmFsaWRUeXBlLnRvTG93ZXJDYXNlKCksIGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkubGVuZ3RoIC0gdmFsaWRUeXBlLnRvTG93ZXJDYXNlKCkubGVuZ3RoKSAhPT0gLTFcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKC9cXC9cXCokLy50ZXN0KHZhbGlkVHlwZSkpIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHNvbWV0aGluZyBsaWtlIGEgaW1hZ2UvKiBtaW1lIHR5cGVcbiAgICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW1lVHlwZSA9PT0gdmFsaWRUeXBlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hVaWQoZmlsZTogVXBsb2FkRmlsZSk6IFVwbG9hZEZpbGUge1xuICAgIGlmICghZmlsZS51aWQpIHtcbiAgICAgIGZpbGUudWlkID0gTWF0aC5yYW5kb20oKVxuICAgICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAgIC5zdWJzdHJpbmcoMik7XG4gICAgfVxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgdXBsb2FkRmlsZXMoZmlsZUxpc3Q6IEZpbGVMaXN0IHwgRmlsZVtdKTogdm9pZCB7XG4gICAgbGV0IGZpbHRlcnMkOiBPYnNlcnZhYmxlPFVwbG9hZEZpbGVbXT4gPSBvZihBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmaWxlTGlzdCkpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVycykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbHRlcnMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgZmlsdGVycyQgPSBmaWx0ZXJzJC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChsaXN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZuUmVzID0gZi5mbihsaXN0KTtcbiAgICAgICAgICAgIHJldHVybiBmblJlcyBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBmblJlcyA6IG9mKGZuUmVzKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRlcnMkLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICBsaXN0LmZvckVhY2goKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICAgICAgICB0aGlzLmF0dGFjaFVpZChmaWxlKTtcbiAgICAgICAgICB0aGlzLnVwbG9hZChmaWxlLCBsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZSA9PiB7XG4gICAgICAgIHdhcm4oYFVuaGFuZGxlZCB1cGxvYWQgZmlsdGVyIGVycm9yYCwgZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoZmlsZSk7XG4gICAgfVxuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3QpO1xuICAgIGlmIChiZWZvcmUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICBiZWZvcmUuc3Vic2NyaWJlKFxuICAgICAgICAocHJvY2Vzc2VkRmlsZTogVXBsb2FkRmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZEZpbGVUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3NlZEZpbGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgRmlsZV0nIHx8IHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKHByb2Nlc3NlZEZpbGUpO1xuICAgICAgICAgICAgdGhpcy5wb3N0KHByb2Nlc3NlZEZpbGUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3NlZEZpbGUgPT09ICdib29sZWFuJyAmJiBwcm9jZXNzZWRGaWxlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wb3N0KGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZSA9PiB7XG4gICAgICAgICAgd2FybihgVW5oYW5kbGVkIHVwbG9hZCBiZWZvcmVVcGxvYWQgZXJyb3JgLCBlKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGJlZm9yZSAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwb3N0KGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZXN0cm95KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdCA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCB7IHVpZCB9ID0gZmlsZTtcbiAgICBsZXQgeyBkYXRhLCBoZWFkZXJzIH0gPSBvcHQ7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkYXRhID0gKGRhdGEgYXMgKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KShmaWxlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoZWFkZXJzID0gKGhlYWRlcnMgYXMgKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KShmaWxlKTtcbiAgICB9XG4gICAgY29uc3QgYXJnczogVXBsb2FkWEhSQXJncyA9IHtcbiAgICAgIGFjdGlvbjogb3B0LmFjdGlvbixcbiAgICAgIG5hbWU6IG9wdC5uYW1lLFxuICAgICAgaGVhZGVycyxcbiAgICAgIGZpbGUsXG4gICAgICBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHQud2l0aENyZWRlbnRpYWxzLFxuICAgICAgb25Qcm9ncmVzczogb3B0Lm9uUHJvZ3Jlc3NcbiAgICAgICAgPyBlID0+IHtcbiAgICAgICAgICAgIG9wdC5vblByb2dyZXNzIShlLCBmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgb25TdWNjZXNzOiAocmV0LCB4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xuICAgICAgICBvcHQub25TdWNjZXNzIShyZXQsIGZpbGUsIHhocik7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogeGhyID0+IHtcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xuICAgICAgICBvcHQub25FcnJvciEoeGhyLCBmaWxlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHJlcSQgPSAob3B0LmN1c3RvbVJlcXVlc3QgfHwgdGhpcy54aHIpLmNhbGwodGhpcywgYXJncyk7XG4gICAgaWYgKCEocmVxJCBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcbiAgICAgIHdhcm4oYE11c3QgcmV0dXJuIFN1YnNjcmlwdGlvbiB0eXBlIGluICdbbnpDdXN0b21SZXF1ZXN0XScgcHJvcGVydHlgKTtcbiAgICB9XG4gICAgdGhpcy5yZXFzW3VpZF0gPSByZXEkO1xuICAgIG9wdC5vblN0YXJ0IShmaWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgeGhyKGFyZ3M6IFVwbG9hZFhIUkFyZ3MpOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGZvcm1EYXRhLmFwcGVuZChhcmdzLm5hbWUhLCBhcmdzLmZpbGUgYXMgYW55KTtcbiAgICBpZiAoYXJncy5kYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzLmRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBhcmdzLmRhdGEhW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghYXJncy5oZWFkZXJzKSB7XG4gICAgICBhcmdzLmhlYWRlcnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKGFyZ3MuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddICE9PSBudWxsKSB7XG4gICAgICBhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9IGBYTUxIdHRwUmVxdWVzdGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXTtcbiAgICB9XG4gICAgY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgYXJncy5hY3Rpb24hLCBmb3JtRGF0YSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGFyZ3Mud2l0aENyZWRlbnRpYWxzLFxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKGFyZ3MuaGVhZGVycylcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxKS5zdWJzY3JpYmUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgICAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRvdGFsISA+IDApIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgIChldmVudCBhcyBhbnkpLnBlcmNlbnQgPSAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwhKSAqIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJncy5vblByb2dyZXNzIShldmVudCwgYXJncy5maWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgIGFyZ3Mub25TdWNjZXNzIShldmVudC5ib2R5LCBhcmdzLmZpbGUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIHRoaXMuYWJvcnQoYXJncy5maWxlKTtcbiAgICAgICAgYXJncy5vbkVycm9yIShlcnIsIGFyZ3MuZmlsZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW4odWlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCByZXEkID0gdGhpcy5yZXFzW3VpZF07XG4gICAgaWYgKHJlcSQgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgIHJlcSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMucmVxc1t1aWRdO1xuICB9XG5cbiAgYWJvcnQoZmlsZT86IFVwbG9hZEZpbGUpOiB2b2lkIHtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgdGhpcy5jbGVhbihmaWxlICYmIGZpbGUudWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5yZXFzKS5mb3JFYWNoKHVpZCA9PiB0aGlzLmNsZWFuKHVpZCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vICNyZWdpb24gc3R5bGVzXG5cbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYF06IHRoaXMub3B0aW9ucy5kaXNhYmxlZCxcbiAgICAgIC4uLnRoaXMuY2xhc3Nlc1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxuICApIHtcbiAgICBpZiAoIWh0dHApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kICdIdHRwQ2xpZW50JywgWW91IGNhbiBpbXBvcnQgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XG4gICAgdGhpcy5hYm9ydCgpO1xuICB9XG59XG4iXX0=