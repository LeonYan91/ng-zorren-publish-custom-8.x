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
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves } from './animation-consts';
/** @type {?} */
export const collapseMotion = trigger('collapseMotion', [
    state('expanded', style({ height: '*' })),
    state('collapsed', style({ height: 0, overflow: 'hidden' })),
    state('hidden', style({ height: 0, overflow: 'hidden', borderTopWidth: '0' })),
    transition('expanded => collapsed', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('expanded => hidden', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('collapsed => expanded', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('hidden => expanded', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`))
]);
/** @type {?} */
export const treeCollapseMotion = trigger('treeCollapseMotion', [
    transition(':leave', [
        style({ overflow: 'hidden' }),
        animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ height: 0 }))
    ]),
    transition(':enter', [
        style({ overflow: 'hidden', height: 0 }),
        animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ overflow: 'hidden', height: '*' }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJhbmltYXRpb24vY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBNEIsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXJELE1BQU0sT0FBTyxjQUFjLEdBQTZCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtJQUNoRixLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1RCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5RSxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLFNBQVMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDcEYsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxTQUFTLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsU0FBUyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNwRixVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLFNBQVMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Q0FDbEYsQ0FBQzs7QUFFRixNQUFNLE9BQU8sa0JBQWtCLEdBQTZCLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTtJQUN4RixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsU0FBUyxlQUFlLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDdEUsQ0FBQztJQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEMsT0FBTyxDQUFDLFNBQVMsZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDNUYsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlcyB9IGZyb20gJy4vYW5pbWF0aW9uLWNvbnN0cyc7XG5cbmV4cG9ydCBjb25zdCBjb2xsYXBzZU1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignY29sbGFwc2VNb3Rpb24nLCBbXG4gIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxuICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSksXG4gIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7IGhlaWdodDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBib3JkZXJUb3BXaWR0aDogJzAnIH0pKSxcbiAgdHJhbnNpdGlvbignZXhwYW5kZWQgPT4gY29sbGFwc2VkJywgYW5pbWF0ZShgMTUwbXMgJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVR9YCkpLFxuICB0cmFuc2l0aW9uKCdleHBhbmRlZCA9PiBoaWRkZW4nLCBhbmltYXRlKGAxNTBtcyAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVH1gKSksXG4gIHRyYW5zaXRpb24oJ2NvbGxhcHNlZCA9PiBleHBhbmRlZCcsIGFuaW1hdGUoYDE1MG1zICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUfWApKSxcbiAgdHJhbnNpdGlvbignaGlkZGVuID0+IGV4cGFuZGVkJywgYW5pbWF0ZShgMTUwbXMgJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVR9YCkpXG5dKTtcblxuZXhwb3J0IGNvbnN0IHRyZWVDb2xsYXBzZU1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigndHJlZUNvbGxhcHNlTW90aW9uJywgW1xuICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgc3R5bGUoeyBvdmVyZmxvdzogJ2hpZGRlbicgfSksXG4gICAgYW5pbWF0ZShgMTUwbXMgJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVR9YCwgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXG4gIF0pLFxuICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgc3R5bGUoeyBvdmVyZmxvdzogJ2hpZGRlbicsIGhlaWdodDogMCB9KSxcbiAgICBhbmltYXRlKGAxNTBtcyAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVH1gLCBzdHlsZSh7IG92ZXJmbG93OiAnaGlkZGVuJywgaGVpZ2h0OiAnKicgfSkpXG4gIF0pXG5dKTtcbiJdfQ==