(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/animations'), require('@angular/cdk/platform'), require('ng-zorro-antd/i18n'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/upload', ['exports', '@angular/cdk/keycodes', '@angular/common/http', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/animations', '@angular/cdk/platform', 'ng-zorro-antd/i18n', '@angular/common', '@angular/forms', 'ng-zorro-antd/icon', 'ng-zorro-antd/progress', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].upload = {}), global.ng.cdk.keycodes, global.ng.common.http, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.animations, global.ng.cdk.platform, global['ng-zorro-antd'].i18n, global.ng.common, global.ng.forms, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].progress, global['ng-zorro-antd'].tooltip));
}(this, (function (exports, keycodes, http, core, rxjs, operators, core$1, animations, platform, i18n, common, forms, icon, progress, tooltip) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
    /**
     * File object.
     * @record
     */
    function UploadFile() { }
    if (false) {
        /** @type {?} */
        UploadFile.prototype.uid;
        /** @type {?} */
        UploadFile.prototype.size;
        /** @type {?} */
        UploadFile.prototype.name;
        /** @type {?|undefined} */
        UploadFile.prototype.filename;
        /** @type {?|undefined} */
        UploadFile.prototype.lastModified;
        /** @type {?|undefined} */
        UploadFile.prototype.lastModifiedDate;
        /** @type {?|undefined} */
        UploadFile.prototype.url;
        /** @type {?|undefined} */
        UploadFile.prototype.status;
        /** @type {?|undefined} */
        UploadFile.prototype.originFileObj;
        /** @type {?|undefined} */
        UploadFile.prototype.percent;
        /** @type {?|undefined} */
        UploadFile.prototype.thumbUrl;
        /** @type {?|undefined} */
        UploadFile.prototype.response;
        /** @type {?|undefined} */
        UploadFile.prototype.error;
        /** @type {?|undefined} */
        UploadFile.prototype.linkProps;
        /** @type {?} */
        UploadFile.prototype.type;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function UploadChangeParam() { }
    if (false) {
        /** @type {?} */
        UploadChangeParam.prototype.file;
        /** @type {?} */
        UploadChangeParam.prototype.fileList;
        /** @type {?|undefined} */
        UploadChangeParam.prototype.event;
        /**
         * Callback type.
         * @type {?|undefined}
         */
        UploadChangeParam.prototype.type;
    }
    /**
     * @record
     */
    function ShowUploadListInterface() { }
    if (false) {
        /** @type {?|undefined} */
        ShowUploadListInterface.prototype.showRemoveIcon;
        /** @type {?|undefined} */
        ShowUploadListInterface.prototype.showPreviewIcon;
        /** @type {?|undefined} */
        ShowUploadListInterface.prototype.hidePreviewIconInNonImage;
    }
    /**
     * @record
     */
    function ZipButtonOptions() { }
    if (false) {
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.disabled;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.accept;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.action;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.directory;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.openFileDialogOnClick;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.beforeUpload;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.customRequest;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.data;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.headers;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.name;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.multiple;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.withCredentials;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.filters;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.onStart;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.onProgress;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.onSuccess;
        /** @type {?|undefined} */
        ZipButtonOptions.prototype.onError;
    }
    /**
     * @record
     */
    function UploadFilter() { }
    if (false) {
        /** @type {?} */
        UploadFilter.prototype.name;
        /** @type {?} */
        UploadFilter.prototype.fn;
    }
    /**
     * @record
     */
    function UploadXHRArgs() { }
    if (false) {
        /** @type {?|undefined} */
        UploadXHRArgs.prototype.action;
        /** @type {?|undefined} */
        UploadXHRArgs.prototype.name;
        /** @type {?|undefined} */
        UploadXHRArgs.prototype.headers;
        /** @type {?} */
        UploadXHRArgs.prototype.file;
        /** @type {?|undefined} */
        UploadXHRArgs.prototype.data;
        /** @type {?|undefined} */
        UploadXHRArgs.prototype.withCredentials;
        /** @type {?|undefined} */
        UploadXHRArgs.prototype.onProgress;
        /** @type {?|undefined} */
        UploadXHRArgs.prototype.onSuccess;
        /** @type {?|undefined} */
        UploadXHRArgs.prototype.onError;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            if (e.key === 'Enter' || e.keyCode === keycodes.ENTER) {
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
                            for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
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
                for (var _b = __values((/** @type {?} */ (files))), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            var filters$ = rxjs.of(Array.prototype.slice.call(fileList));
            if (this.options.filters) {
                this.options.filters.forEach((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) {
                    filters$ = filters$.pipe(operators.switchMap((/**
                     * @param {?} list
                     * @return {?}
                     */
                    function (list) {
                        /** @type {?} */
                        var fnRes = f.fn(list);
                        return fnRes instanceof rxjs.Observable ? fnRes : rxjs.of(fnRes);
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
                core$1.warn("Unhandled upload filter error", e);
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
            if (before instanceof rxjs.Observable) {
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
                    core$1.warn("Unhandled upload beforeUpload error", e);
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
            if (!(req$ instanceof rxjs.Subscription)) {
                core$1.warn("Must return Subscription type in '[nzCustomRequest]' property");
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
            var req = new http.HttpRequest('POST', (/** @type {?} */ (args.action)), formData, {
                reportProgress: true,
                withCredentials: args.withCredentials,
                headers: new http.HttpHeaders(args.headers)
            });
            return this.http.request(req).subscribe((
            // tslint:disable-next-line no-any
            // tslint:disable-next-line no-any
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.type === http.HttpEventType.UploadProgress) {
                    if ((/** @type {?} */ (event.total)) > 0) {
                        // tslint:disable-next-line:no-any
                        ((/** @type {?} */ (event))).percent = (event.loaded / (/** @type {?} */ (event.total))) * 100;
                    }
                    (/** @type {?} */ (args.onProgress))(event, args.file);
                }
                else if (event instanceof http.HttpResponse) {
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
            if (req$ instanceof rxjs.Subscription) {
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
            var classMap = __assign((_a = {}, _a[this.prefixCls] = true, _a[this.prefixCls + "-disabled"] = this.options.disabled, _a), this.classes);
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
            { type: core.Component, args: [{
                        selector: '[nz-upload-btn]',
                        exportAs: 'nzUploadBtn',
                        template: "<input type=\"file\" #file (change)=\"onChange($event)\"\n  [attr.accept]=\"options.accept\"\n  [attr.directory]=\"options.directory ? 'directory': null\"\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory': null\"\n  [multiple]=\"options.multiple\" style=\"display: none;\">\n<ng-content></ng-content>",
                        host: {
                            '[attr.tabindex]': '"0"',
                            '[attr.role]': '"button"'
                        },
                        providers: [core$1.NzUpdateHostClassService],
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        NzUploadBtnComponent.ctorParameters = function () { return [
            { type: http.HttpClient, decorators: [{ type: core.Optional }] },
            { type: core.ElementRef },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        NzUploadBtnComponent.propDecorators = {
            file: [{ type: core.ViewChild, args: ['file', { static: false },] }],
            classes: [{ type: core.Input }],
            options: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }],
            onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
            onFileDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }, { type: core.HostListener, args: ['dragover', ['$event'],] }]
        };
        return NzUploadBtnComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzUploadListComponent = /** @class */ (function () {
        // #endregion
        function NzUploadListComponent(el, cdr, updateHostClassService, platform) {
            this.el = el;
            this.cdr = cdr;
            this.updateHostClassService = updateHostClassService;
            this.platform = platform;
            this.imageTypes = ['image', 'webp', 'png', 'svg', 'gif', 'jpg', 'jpeg', 'bmp'];
            // #region fields
            // tslint:disable-next-line:no-any
            this.locale = {};
            // #endregion
            // #region styles
            this.prefixCls = 'ant-upload-list';
        }
        Object.defineProperty(NzUploadListComponent.prototype, "showPic", {
            get: /**
             * @return {?}
             */
            function () {
                return this.listType === 'picture' || this.listType === 'picture-card';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzUploadListComponent.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this._items;
            },
            set: /**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                list.forEach((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) {
                    file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
                }));
                this._items = list;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        NzUploadListComponent.prototype.setClassMap = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-" + this.listType] = true,
                _a);
            this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        };
        // #endregion
        // #region render
        // #endregion
        // #region render
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        NzUploadListComponent.prototype.extname = 
        // #endregion
        // #region render
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        function (url) {
            /** @type {?} */
            var temp = url.split('/');
            /** @type {?} */
            var filename = temp[temp.length - 1];
            /** @type {?} */
            var filenameWithoutSuffix = filename.split(/#|\?/)[0];
            return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
        };
        /**
         * @param {?} file
         * @return {?}
         */
        NzUploadListComponent.prototype.isImageUrl = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            if (~this.imageTypes.indexOf(file.type)) {
                return true;
            }
            /** @type {?} */
            var url = (/** @type {?} */ ((file.thumbUrl || file.url || '')));
            if (!url) {
                return false;
            }
            /** @type {?} */
            var extension = this.extname(url);
            if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|bmp)$/i.test(extension)) {
                return true;
            }
            else if (/^data:/.test(url)) {
                // other file types of base64
                return false;
            }
            else if (extension) {
                // other file types which have extension
                return false;
            }
            return true;
        };
        /**
         * @private
         * @param {?} file
         * @param {?} callback
         * @return {?}
         */
        NzUploadListComponent.prototype.previewFile = /**
         * @private
         * @param {?} file
         * @param {?} callback
         * @return {?}
         */
        function (file, callback) {
            if (file.type && this.imageTypes.indexOf(file.type) === -1) {
                callback('');
            }
            /** @type {?} */
            var reader = new FileReader();
            // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
            reader.onloadend = (/**
             * @return {?}
             */
            function () { return callback((/** @type {?} */ (reader.result))); });
            reader.readAsDataURL(file);
        };
        /**
         * @private
         * @return {?}
         */
        NzUploadListComponent.prototype.genThumb = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            // tslint:disable-next-line:no-any
            /** @type {?} */
            var win = (/** @type {?} */ (window));
            if (!this.showPic ||
                typeof document === 'undefined' ||
                typeof win === 'undefined' ||
                !win.FileReader ||
                !win.File) {
                return;
            }
            this.items
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return file.originFileObj instanceof File && file.thumbUrl === undefined; }))
                .forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                file.thumbUrl = '';
                _this.previewFile((/** @type {?} */ (file.originFileObj)), (/**
                 * @param {?} previewDataUrl
                 * @return {?}
                 */
                function (previewDataUrl) {
                    file.thumbUrl = previewDataUrl;
                    _this.detectChanges();
                }));
            }));
        };
        /**
         * @param {?} file
         * @return {?}
         */
        NzUploadListComponent.prototype.showPreview = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            var _a = this.icons, showPreviewIcon = _a.showPreviewIcon, hidePreviewIconInNonImage = _a.hidePreviewIconInNonImage;
            if (!showPreviewIcon) {
                return false;
            }
            return this.isImageUrl(file) ? true : !hidePreviewIconInNonImage;
        };
        /**
         * @param {?} file
         * @param {?} e
         * @return {?}
         */
        NzUploadListComponent.prototype.handlePreview = /**
         * @param {?} file
         * @param {?} e
         * @return {?}
         */
        function (file, e) {
            if (!this.onPreview) {
                return;
            }
            e.preventDefault();
            return this.onPreview(file);
        };
        /**
         * @param {?} file
         * @param {?} e
         * @return {?}
         */
        NzUploadListComponent.prototype.handleRemove = /**
         * @param {?} file
         * @param {?} e
         * @return {?}
         */
        function (file, e) {
            e.preventDefault();
            if (this.onRemove) {
                this.onRemove(file);
            }
            return;
        };
        /**
         * @return {?}
         */
        NzUploadListComponent.prototype.detectChanges = /**
         * @return {?}
         */
        function () {
            this.cdr.detectChanges();
        };
        /**
         * @return {?}
         */
        NzUploadListComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
            this.genThumb();
        };
        NzUploadListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-upload-list',
                        exportAs: 'nzUploadList',
                        template: "<div *ngFor=\"let file of items\" class=\"ant-upload-list-item ant-upload-list-item-{{file.status}}\" @itemState>\n  <ng-template #icon>\n    <ng-container *ngIf=\"showPic; else noPicTpl\">\n      <div *ngIf=\"listType === 'picture-card' && file.status === 'uploading'; else thumbUrlCheck\" class=\"ant-upload-list-item-uploading-text\">{{ locale.uploading }}</div>\n    </ng-container>\n    <ng-template #thumbUrlCheck>\n      <i *ngIf=\"!file.thumbUrl && !file.url; else thumbTpl\"\n        class=\"ant-upload-list-item-thumbnail\" nz-icon nzType=\"picture\" nzTheme=\"twotone\"></i>\n    </ng-template>\n    <ng-template #thumbTpl>\n      <a class=\"ant-upload-list-item-thumbnail\" target=\"_blank\" rel=\"noopener noreferrer\"\n        [href]=\"file.thumbUrl || file.url\"\n        (click)=\"handlePreview(file, $event)\">\n        <img *ngIf=\"isImageUrl(file); else noThumbTpl\" [src]=\"file.thumbUrl || file.url\" [attr.alt]=\"file.name\" />\n      </a>\n    </ng-template>\n    <ng-template #noThumbTpl><i class=\"ant-upload-list-item-icon\" nz-icon nzType=\"file\" nzTheme=\"twotone\"></i></ng-template>\n    <ng-template #noPicTpl><i nz-icon [nzType]=\"file.status === 'uploading' ? 'loading' : 'paper-clip'\"></i></ng-template>\n  </ng-template>\n  <ng-template #preview>\n    <ng-container *ngIf=\"file.url; else prevText\">\n      <a [href]=\"file.thumbUrl || file.url\" target=\"_blank\" rel=\"noopener noreferrer\" [attr.download]=\"file.linkProps && file.linkProps.download\"\n        (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</a>\n    </ng-container>\n    <ng-template #prevText>\n      <span (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</span>\n    </ng-template>\n  </ng-template>\n  <div class=\"ant-upload-list-item-info\">\n    <span *ngIf=\"file.status === 'error'\" nz-tooltip [nzTitle]=\"file.message\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n    </span>\n    <span *ngIf=\"file.status !== 'error'\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n    </span>\n  </div>\n  <ng-container *ngIf=\"listType === 'picture-card' && file.status !== 'uploading'; else close\">\n    <span class=\"ant-upload-list-item-actions\">\n      <a *ngIf=\"showPreview(file)\" [href]=\"file.thumbUrl || file.url\"\n        target=\"_blank\" rel=\"noopener noreferrer\"\n        title=\"{{ locale.previewFile }}\"\n        [ngStyle]=\"!(file.url || file.thumbUrl) && {'opacity': .5, 'pointer-events': 'none'}\"\n        (click)=\"handlePreview(file, $event)\">\n          <i nz-icon nzType=\"eye-o\"></i>\n      </a>\n      <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" nz-icon nzType=\"delete\" title=\"{{ locale.removeFile }}\"></i>\n    </span>\n  </ng-container>\n  <ng-template #close>\n    <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" nz-icon nzType=\"close\" title=\"{{ locale.removeFile }}\"></i>\n  </ng-template>\n  <div *ngIf=\"file.status === 'uploading'\" class=\"ant-upload-list-item-progress\">\n    <nz-progress [nzPercent]=\"file.percent\" [nzShowInfo]=\"false\" [nzStrokeWidth]=\"2\"></nz-progress>\n  </div>\n</div>",
                        providers: [core$1.NzUpdateHostClassService],
                        animations: [
                            animations.trigger('itemState', [
                                animations.transition(':enter', [
                                    animations.style({ height: '0', width: '0', opacity: 0 }),
                                    animations.animate(150, animations.style({ height: '*', width: '*', opacity: 1 }))
                                ]),
                                animations.transition(':leave', [animations.animate(150, animations.style({ height: '0', width: '0', opacity: 0 }))])
                            ])
                        ],
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NzUploadListComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzUpdateHostClassService },
            { type: platform.Platform }
        ]; };
        NzUploadListComponent.propDecorators = {
            locale: [{ type: core.Input }],
            listType: [{ type: core.Input }],
            items: [{ type: core.Input }],
            icons: [{ type: core.Input }],
            onPreview: [{ type: core.Input }],
            onRemove: [{ type: core.Input }]
        };
        return NzUploadListComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzUploadListComponent.prototype.imageTypes;
        /**
         * @type {?}
         * @private
         */
        NzUploadListComponent.prototype._items;
        /** @type {?} */
        NzUploadListComponent.prototype.locale;
        /** @type {?} */
        NzUploadListComponent.prototype.listType;
        /** @type {?} */
        NzUploadListComponent.prototype.icons;
        /** @type {?} */
        NzUploadListComponent.prototype.onPreview;
        /** @type {?} */
        NzUploadListComponent.prototype.onRemove;
        /**
         * @type {?}
         * @private
         */
        NzUploadListComponent.prototype.prefixCls;
        /**
         * @type {?}
         * @private
         */
        NzUploadListComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzUploadListComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzUploadListComponent.prototype.updateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzUploadListComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzUploadComponent = /** @class */ (function () {
        // #endregion
        function NzUploadComponent(cdr, i18n) {
            var _this = this;
            this.cdr = cdr;
            this.i18n = i18n;
            // tslint:disable-next-line:no-any
            this.locale = {};
            // #region fields
            this.nzType = 'select';
            this.nzLimit = 0;
            this.nzSize = 0;
            this.nzDirectory = false;
            this.nzOpenFileDialogOnClick = true;
            this.nzFilter = [];
            this.nzFileList = [];
            this.nzDisabled = false;
            this.nzListType = 'text';
            this.nzMultiple = false;
            this.nzName = 'file';
            this._showUploadList = true;
            this.nzShowButton = true;
            this.nzWithCredentials = false;
            this.nzChange = new core.EventEmitter();
            this.nzFileListChange = new core.EventEmitter();
            this.onStart = (/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                if (!_this.nzFileList) {
                    _this.nzFileList = [];
                }
                /** @type {?} */
                var targetItem = _this.fileToObject(file);
                targetItem.status = 'uploading';
                _this.nzFileList = _this.nzFileList.concat(targetItem);
                _this.nzFileListChange.emit(_this.nzFileList);
                _this.nzChange.emit({ file: targetItem, fileList: _this.nzFileList, type: 'start' });
                _this.detectChangesList();
            });
            this.onProgress = (/**
             * @param {?} e
             * @param {?} file
             * @return {?}
             */
            function (e, file) {
                /** @type {?} */
                var fileList = _this.nzFileList;
                /** @type {?} */
                var targetItem = _this.getFileItem(file, fileList);
                targetItem.percent = e.percent;
                _this.nzChange.emit({
                    event: e,
                    file: __assign({}, targetItem),
                    fileList: _this.nzFileList,
                    type: 'progress'
                });
                _this.detectChangesList();
            });
            this.onSuccess = (/**
             * @param {?} res
             * @param {?} file
             * @return {?}
             */
            function (res, file) {
                /** @type {?} */
                var fileList = _this.nzFileList;
                /** @type {?} */
                var targetItem = _this.getFileItem(file, fileList);
                targetItem.status = 'done';
                targetItem.response = res;
                _this.nzChange.emit({
                    file: __assign({}, targetItem),
                    fileList: fileList,
                    type: 'success'
                });
                _this.detectChangesList();
            });
            this.onError = (/**
             * @param {?} err
             * @param {?} file
             * @return {?}
             */
            function (err, file) {
                /** @type {?} */
                var fileList = _this.nzFileList;
                /** @type {?} */
                var targetItem = _this.getFileItem(file, fileList);
                targetItem.error = err;
                targetItem.status = 'error';
                targetItem.message = _this.genErr(targetItem);
                _this.nzChange.emit({
                    file: __assign({}, targetItem),
                    fileList: fileList,
                    type: 'error'
                });
                _this.detectChangesList();
            });
            this.onRemove = (/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.uploadComp.abort(file);
                file.status = 'removed';
                /** @type {?} */
                var fnRes = typeof _this.nzRemove === 'function' ? _this.nzRemove(file) : _this.nzRemove == null ? true : _this.nzRemove;
                (fnRes instanceof rxjs.Observable ? fnRes : rxjs.of(fnRes)).pipe(operators.filter((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return res; }))).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.nzFileList = _this.removeFileItem(file, _this.nzFileList);
                    _this.nzChange.emit({
                        file: file,
                        fileList: _this.nzFileList,
                        type: 'removed'
                    });
                    _this.nzFileListChange.emit(_this.nzFileList);
                    _this.cdr.detectChanges();
                }));
            });
            // #endregion
            // #region styles
            this.prefixCls = 'ant-upload';
            this.classList = [];
        }
        Object.defineProperty(NzUploadComponent.prototype, "nzShowUploadList", {
            get: /**
             * @return {?}
             */
            function () {
                return this._showUploadList;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._showUploadList = typeof value === 'boolean' ? core$1.toBoolean(value) : value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        NzUploadComponent.prototype.zipOptions = /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            var _this = this;
            if (typeof (/** @type {?} */ (this)).nzShowUploadList === 'boolean' && (/** @type {?} */ (this)).nzShowUploadList) {
                (/** @type {?} */ (this)).nzShowUploadList = {
                    showPreviewIcon: true,
                    showRemoveIcon: true,
                    hidePreviewIconInNonImage: false
                };
            }
            // filters
            /** @type {?} */
            var filters = (/** @type {?} */ (this)).nzFilter.slice();
            if ((/** @type {?} */ (this)).nzMultiple && (/** @type {?} */ (this)).nzLimit > 0 && filters.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.name === 'limit'; })) === -1) {
                filters.push({
                    name: 'limit',
                    fn: (/**
                     * @param {?} fileList
                     * @return {?}
                     */
                    function (fileList) { return fileList.slice(-(/** @type {?} */ (_this)).nzLimit); })
                });
            }
            if ((/** @type {?} */ (this)).nzSize > 0 && filters.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.name === 'size'; })) === -1) {
                filters.push({
                    name: 'size',
                    fn: (/**
                     * @param {?} fileList
                     * @return {?}
                     */
                    function (fileList) { return fileList.filter((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return w.size / 1024 <= (/** @type {?} */ (_this)).nzSize; })); })
                });
            }
            if ((/** @type {?} */ (this)).nzFileType && (/** @type {?} */ (this)).nzFileType.length > 0 && filters.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.name === 'type'; })) === -1) {
                /** @type {?} */
                var types_1 = (/** @type {?} */ (this)).nzFileType.split(',');
                filters.push({
                    name: 'type',
                    fn: (/**
                     * @param {?} fileList
                     * @return {?}
                     */
                    function (fileList) { return fileList.filter((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return ~types_1.indexOf(w.type); })); })
                });
            }
            (/** @type {?} */ (this))._btnOptions = {
                disabled: (/** @type {?} */ (this)).nzDisabled,
                accept: (/** @type {?} */ (this)).nzAccept,
                action: (/** @type {?} */ (this)).nzAction,
                directory: (/** @type {?} */ (this)).nzDirectory,
                openFileDialogOnClick: (/** @type {?} */ (this)).nzOpenFileDialogOnClick,
                beforeUpload: (/** @type {?} */ (this)).nzBeforeUpload,
                customRequest: (/** @type {?} */ (this)).nzCustomRequest,
                data: (/** @type {?} */ (this)).nzData,
                headers: (/** @type {?} */ (this)).nzHeaders,
                name: (/** @type {?} */ (this)).nzName,
                multiple: (/** @type {?} */ (this)).nzMultiple,
                withCredentials: (/** @type {?} */ (this)).nzWithCredentials,
                filters: filters,
                onStart: (/** @type {?} */ (this)).onStart,
                onProgress: (/** @type {?} */ (this)).onProgress,
                onSuccess: (/** @type {?} */ (this)).onSuccess,
                onError: (/** @type {?} */ (this)).onError
            };
            return (/** @type {?} */ (this));
        };
        // #region upload
        // #region upload
        /**
         * @private
         * @param {?} file
         * @return {?}
         */
        NzUploadComponent.prototype.fileToObject = 
        // #region upload
        /**
         * @private
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return {
                lastModified: file.lastModified,
                lastModifiedDate: file.lastModifiedDate,
                name: file.filename || file.name,
                size: file.size,
                type: file.type,
                uid: file.uid,
                response: file.response,
                error: file.error,
                percent: 0,
                // tslint:disable-next-line:no-any
                originFileObj: (/** @type {?} */ (file))
            };
        };
        /**
         * @private
         * @param {?} file
         * @param {?} fileList
         * @return {?}
         */
        NzUploadComponent.prototype.getFileItem = /**
         * @private
         * @param {?} file
         * @param {?} fileList
         * @return {?}
         */
        function (file, fileList) {
            return fileList.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.uid === file.uid; }))[0];
        };
        /**
         * @private
         * @param {?} file
         * @param {?} fileList
         * @return {?}
         */
        NzUploadComponent.prototype.removeFileItem = /**
         * @private
         * @param {?} file
         * @param {?} fileList
         * @return {?}
         */
        function (file, fileList) {
            return fileList.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.uid !== file.uid; }));
        };
        /**
         * @private
         * @param {?} file
         * @return {?}
         */
        NzUploadComponent.prototype.genErr = /**
         * @private
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return file.response && typeof file.response === 'string'
                ? file.response
                : (file.error && file.error.statusText) || this.locale.uploadError;
        };
        // skip safari bug
        // tslint:disable-next-line:no-any
        // skip safari bug
        // tslint:disable-next-line:no-any
        /**
         * @param {?} e
         * @return {?}
         */
        NzUploadComponent.prototype.fileDrop = 
        // skip safari bug
        // tslint:disable-next-line:no-any
        /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.type === this.dragState) {
                return;
            }
            this.dragState = e.type;
            this.setClassMap();
        };
        // #endregion
        // #region list
        // #endregion
        // #region list
        /**
         * @private
         * @return {?}
         */
        NzUploadComponent.prototype.detectChangesList = 
        // #endregion
        // #region list
        /**
         * @private
         * @return {?}
         */
        function () {
            this.cdr.detectChanges();
            this.listComp.detectChanges();
        };
        /**
         * @private
         * @return {?}
         */
        NzUploadComponent.prototype.setClassMap = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var subCls = [];
            if (this.nzType === 'drag') {
                if (this.nzFileList.some((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) { return file.status === 'uploading'; }))) {
                    subCls.push(this.prefixCls + "-drag-uploading");
                }
                if (this.dragState === 'dragover') {
                    subCls.push(this.prefixCls + "-drag-hover");
                }
            }
            else {
                subCls = [this.prefixCls + "-select-" + this.nzListType];
            }
            this.classList = __spread([
                this.prefixCls,
                this.prefixCls + "-" + this.nzType
            ], subCls, [
                (this.nzDisabled && this.prefixCls + "-disabled") || ''
            ]).filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !!item; }));
            this.cdr.detectChanges();
        };
        // #endregion
        // #endregion
        /**
         * @return {?}
         */
        NzUploadComponent.prototype.ngOnInit = 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n$ = this.i18n.localeChange.subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Upload');
                _this.detectChangesList();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzUploadComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            if (changes.nzFileList) {
                (this.nzFileList || []).forEach((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) { return (file.message = _this.genErr(file)); }));
            }
            this.zipOptions().setClassMap();
        };
        /**
         * @return {?}
         */
        NzUploadComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.i18n$.unsubscribe();
        };
        NzUploadComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-upload',
                        exportAs: 'nzUpload',
                        template: "<ng-template #list>\n  <nz-upload-list #listComp [style.display]=\"nzShowUploadList ? '' : 'none'\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList || []\"\n    [icons]=\"nzShowUploadList\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"></nz-upload-list>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\">\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            '[class.ant-upload-picture-card-wrapper]': 'nzListType === "picture-card"'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzUploadComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: i18n.NzI18nService }
        ]; };
        NzUploadComponent.propDecorators = {
            uploadComp: [{ type: core.ViewChild, args: ['uploadComp', { static: false },] }],
            listComp: [{ type: core.ViewChild, args: ['listComp', { static: false },] }],
            nzType: [{ type: core.Input }],
            nzLimit: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzFileType: [{ type: core.Input }],
            nzAccept: [{ type: core.Input }],
            nzAction: [{ type: core.Input }],
            nzDirectory: [{ type: core.Input }],
            nzOpenFileDialogOnClick: [{ type: core.Input }],
            nzBeforeUpload: [{ type: core.Input }],
            nzCustomRequest: [{ type: core.Input }],
            nzData: [{ type: core.Input }],
            nzFilter: [{ type: core.Input }],
            nzFileList: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzHeaders: [{ type: core.Input }],
            nzListType: [{ type: core.Input }],
            nzMultiple: [{ type: core.Input }],
            nzName: [{ type: core.Input }],
            nzShowUploadList: [{ type: core.Input }],
            nzShowButton: [{ type: core.Input }],
            nzWithCredentials: [{ type: core.Input }],
            nzRemove: [{ type: core.Input }],
            nzPreview: [{ type: core.Input }],
            nzChange: [{ type: core.Output }],
            nzFileListChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzLimit", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzSize", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzDirectory", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzMultiple", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzShowButton", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzWithCredentials", void 0);
        return NzUploadComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.i18n$;
        /** @type {?} */
        NzUploadComponent.prototype.uploadComp;
        /** @type {?} */
        NzUploadComponent.prototype.listComp;
        /** @type {?} */
        NzUploadComponent.prototype.locale;
        /** @type {?} */
        NzUploadComponent.prototype.nzType;
        /** @type {?} */
        NzUploadComponent.prototype.nzLimit;
        /** @type {?} */
        NzUploadComponent.prototype.nzSize;
        /** @type {?} */
        NzUploadComponent.prototype.nzFileType;
        /** @type {?} */
        NzUploadComponent.prototype.nzAccept;
        /** @type {?} */
        NzUploadComponent.prototype.nzAction;
        /** @type {?} */
        NzUploadComponent.prototype.nzDirectory;
        /** @type {?} */
        NzUploadComponent.prototype.nzOpenFileDialogOnClick;
        /** @type {?} */
        NzUploadComponent.prototype.nzBeforeUpload;
        /** @type {?} */
        NzUploadComponent.prototype.nzCustomRequest;
        /** @type {?} */
        NzUploadComponent.prototype.nzData;
        /** @type {?} */
        NzUploadComponent.prototype.nzFilter;
        /** @type {?} */
        NzUploadComponent.prototype.nzFileList;
        /** @type {?} */
        NzUploadComponent.prototype.nzDisabled;
        /** @type {?} */
        NzUploadComponent.prototype.nzHeaders;
        /** @type {?} */
        NzUploadComponent.prototype.nzListType;
        /** @type {?} */
        NzUploadComponent.prototype.nzMultiple;
        /** @type {?} */
        NzUploadComponent.prototype.nzName;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype._showUploadList;
        /** @type {?} */
        NzUploadComponent.prototype.nzShowButton;
        /** @type {?} */
        NzUploadComponent.prototype.nzWithCredentials;
        /** @type {?} */
        NzUploadComponent.prototype.nzRemove;
        /** @type {?} */
        NzUploadComponent.prototype.nzPreview;
        /** @type {?} */
        NzUploadComponent.prototype.nzChange;
        /** @type {?} */
        NzUploadComponent.prototype.nzFileListChange;
        /** @type {?} */
        NzUploadComponent.prototype._btnOptions;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.onStart;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.onProgress;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.onSuccess;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.onError;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.dragState;
        /** @type {?} */
        NzUploadComponent.prototype.onRemove;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.prefixCls;
        /** @type {?} */
        NzUploadComponent.prototype.classList;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzUploadComponent.prototype.i18n;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzUploadModule = /** @class */ (function () {
        function NzUploadModule() {
        }
        NzUploadModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, platform.PlatformModule, tooltip.NzToolTipModule, progress.NzProgressModule, i18n.NzI18nModule, icon.NzIconModule],
                        declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                        exports: [NzUploadComponent]
                    },] }
        ];
        return NzUploadModule;
    }());

    exports.NzUploadBtnComponent = NzUploadBtnComponent;
    exports.NzUploadComponent = NzUploadComponent;
    exports.NzUploadListComponent = NzUploadListComponent;
    exports.NzUploadModule = NzUploadModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-upload.umd.js.map
