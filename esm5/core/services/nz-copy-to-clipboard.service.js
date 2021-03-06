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
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NzCopyToClipboardServiceModule } from './nz-copy-to-clipboard.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./nz-copy-to-clipboard.service.module";
var NzCopyToClipboardService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzCopyToClipboardService(document) {
        this.document = document;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    NzCopyToClipboardService.prototype.copy = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = (/** @type {?} */ (_this.document.createElement('textarea')));
                (/** @type {?} */ (copyTextArea.style)).all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                (/** @type {?} */ (copyTextArea.style)).MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                _this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
                /** @type {?} */
                var successful = _this.document.execCommand('copy');
                if (!successful) {
                    reject(text);
                }
                resolve(text);
            }
            finally {
                if (copyTextArea) {
                    _this.document.body.removeChild(copyTextArea);
                }
            }
        }));
    };
    NzCopyToClipboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzCopyToClipboardServiceModule
                },] }
    ];
    /** @nocollapse */
    NzCopyToClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzCopyToClipboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCopyToClipboardService_Factory() { return new NzCopyToClipboardService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzCopyToClipboardService, providedIn: i2.NzCopyToClipboardServiceModule });
    return NzCopyToClipboardService;
}());
export { NzCopyToClipboardService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCopyToClipboardService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFFdkY7SUFJRSxrQ0FBa0M7SUFDbEMsa0NBQXNDLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQzs7Ozs7SUFFdkQsdUNBQUk7Ozs7SUFBSixVQUFLLElBQVk7UUFBakIsaUJBZ0NDO1FBL0JDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUNoQixVQUFDLE9BQU8sRUFBRSxNQUFNOztnQkFDVixZQUFZLEdBQUcsSUFBSTtZQUN2QixJQUFJO2dCQUNGLGtDQUFrQztnQkFDbEMsWUFBWSxHQUFHLG1CQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFPLENBQUM7Z0JBQzlELG1CQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2dCQUNsQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDN0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7Z0JBQzdDLG1CQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUMzQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDMUIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDOztvQkFFaEIsVUFBVSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2Q7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7b0JBQVM7Z0JBQ1IsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsOEJBQThCO2lCQUMzQzs7OztnREFHYyxNQUFNLFNBQUMsUUFBUTs7O21DQWpCOUI7Q0FvREMsQUF4Q0QsSUF3Q0M7U0FyQ1ksd0JBQXdCOzs7Ozs7SUFFdkIsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb3B5LXRvLWNsaXBib2FyZC5zZXJ2aWNlLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE56Q29weVRvQ2xpcGJvYXJkU2VydmljZSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxuXG4gIGNvcHkodGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihcbiAgICAgIChyZXNvbHZlLCByZWplY3QpOiB2b2lkID0+IHtcbiAgICAgICAgbGV0IGNvcHlUZXh0QXJlYSA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgICAgICAgIGNvcHlUZXh0QXJlYSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSBhcyBhbnk7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlIS5hbGwgPSAndW5zZXQnO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUuY2xpcCA9ICdyZWN0KDAsIDAsIDAsIDApJztcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ3RleHQnO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZSEuTW96VXNlclNlbGVjdCA9ICd0ZXh0JztcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUubXNVc2VyU2VsZWN0ID0gJ3RleHQnO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS51c2VyU2VsZWN0ID0gJ3RleHQnO1xuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgICAgIGNvcHlUZXh0QXJlYS52YWx1ZSA9IHRleHQ7XG4gICAgICAgICAgY29weVRleHRBcmVhLnNlbGVjdCgpO1xuXG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc2Z1bCA9IHRoaXMuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgIHJlamVjdCh0ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZSh0ZXh0KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoY29weVRleHRBcmVhKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=