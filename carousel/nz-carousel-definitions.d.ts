/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken, QueryList } from '@angular/core';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
import { NzCarouselBaseStrategy } from './strategies/base-strategy';
export declare type NzCarouselEffects = 'fade' | 'scrollx' | string;
export declare type NzCarouselDotPosition = 'top' | 'bottom' | 'left' | 'right' | string;
export interface NzCarouselComponentAsSource {
    carouselContents: QueryList<NzCarouselContentDirective>;
    el: HTMLElement;
    nzTransitionSpeed: number;
    vertical: boolean;
    slickListEl: HTMLElement;
    slickTrackEl: HTMLElement;
    activeIndex: number;
}
export interface NzCarouselStrategyRegistryItem {
    name: string;
    strategy: NzCarouselBaseStrategy;
}
export declare const NZ_CAROUSEL_CUSTOM_STRATEGIES: InjectionToken<NzCarouselStrategyRegistryItem[]>;
export interface PointerVector {
    x: number;
    y: number;
}
export interface FromToInterface {
    from: number;
    to: number;
}
