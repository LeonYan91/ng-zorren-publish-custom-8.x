/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
export declare type NzResultIconType = 'success' | 'error' | 'info' | 'warning';
export declare type NzExceptionStatusType = '404' | '500' | '403';
export declare type NzResultStatusType = NzExceptionStatusType | NzResultIconType;
export declare class NzResultComponent implements OnChanges {
    private nzUpdateHostClassService;
    private elementRef;
    nzIcon?: string | TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzStatus: NzResultStatusType;
    nzSubTitle?: string | TemplateRef<void>;
    nzExtra?: string | TemplateRef<void>;
    icon?: string | TemplateRef<void>;
    isException: boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef);
    ngOnChanges(): void;
    private setStatusIcon;
    private setClassMap;
}
