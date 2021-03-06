(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/affix'), require('ng-zorro-antd/alert'), require('ng-zorro-antd/anchor'), require('ng-zorro-antd/auto-complete'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/back-top'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/breadcrumb'), require('ng-zorro-antd/button'), require('ng-zorro-antd/calendar'), require('ng-zorro-antd/card'), require('ng-zorro-antd/carousel'), require('ng-zorro-antd/cascader'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/collapse'), require('ng-zorro-antd/comment'), require('ng-zorro-antd/core'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/descriptions'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/drawer'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/layout'), require('ng-zorro-antd/list'), require('ng-zorro-antd/mention'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/message'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/notification'), require('ng-zorro-antd/page-header'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/popconfirm'), require('ng-zorro-antd/popover'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/rate'), require('ng-zorro-antd/result'), require('ng-zorro-antd/select'), require('ng-zorro-antd/skeleton'), require('ng-zorro-antd/slider'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/statistic'), require('ng-zorro-antd/steps'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/timeline'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/transfer'), require('ng-zorro-antd/tree'), require('ng-zorro-antd/tree-select'), require('ng-zorro-antd/typography'), require('ng-zorro-antd/upload'), require('ng-zorro-antd/version')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd', ['exports', '@angular/core', 'ng-zorro-antd/affix', 'ng-zorro-antd/alert', 'ng-zorro-antd/anchor', 'ng-zorro-antd/auto-complete', 'ng-zorro-antd/avatar', 'ng-zorro-antd/back-top', 'ng-zorro-antd/badge', 'ng-zorro-antd/breadcrumb', 'ng-zorro-antd/button', 'ng-zorro-antd/calendar', 'ng-zorro-antd/card', 'ng-zorro-antd/carousel', 'ng-zorro-antd/cascader', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/collapse', 'ng-zorro-antd/comment', 'ng-zorro-antd/core', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/descriptions', 'ng-zorro-antd/divider', 'ng-zorro-antd/drawer', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/empty', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/layout', 'ng-zorro-antd/list', 'ng-zorro-antd/mention', 'ng-zorro-antd/menu', 'ng-zorro-antd/message', 'ng-zorro-antd/modal', 'ng-zorro-antd/notification', 'ng-zorro-antd/page-header', 'ng-zorro-antd/pagination', 'ng-zorro-antd/popconfirm', 'ng-zorro-antd/popover', 'ng-zorro-antd/progress', 'ng-zorro-antd/radio', 'ng-zorro-antd/rate', 'ng-zorro-antd/result', 'ng-zorro-antd/select', 'ng-zorro-antd/skeleton', 'ng-zorro-antd/slider', 'ng-zorro-antd/spin', 'ng-zorro-antd/statistic', 'ng-zorro-antd/steps', 'ng-zorro-antd/switch', 'ng-zorro-antd/table', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tag', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/timeline', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/transfer', 'ng-zorro-antd/tree', 'ng-zorro-antd/tree-select', 'ng-zorro-antd/typography', 'ng-zorro-antd/upload', 'ng-zorro-antd/version'], factory) :
    (global = global || self, factory(global['ng-zorro-antd'] = {}, global.ng.core, global['ng-zorro-antd'].affix, global['ng-zorro-antd'].alert, global['ng-zorro-antd'].anchor, global['ng-zorro-antd']['auto-complete'], global['ng-zorro-antd'].avatar, global['ng-zorro-antd']['back-top'], global['ng-zorro-antd'].badge, global['ng-zorro-antd'].breadcrumb, global['ng-zorro-antd'].button, global['ng-zorro-antd'].calendar, global['ng-zorro-antd'].card, global['ng-zorro-antd'].carousel, global['ng-zorro-antd'].cascader, global['ng-zorro-antd'].checkbox, global['ng-zorro-antd'].collapse, global['ng-zorro-antd'].comment, global['ng-zorro-antd'].core, global['ng-zorro-antd']['date-picker'], global['ng-zorro-antd'].descriptions, global['ng-zorro-antd'].divider, global['ng-zorro-antd'].drawer, global['ng-zorro-antd'].dropdown, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].form, global['ng-zorro-antd'].grid, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].input, global['ng-zorro-antd']['input-number'], global['ng-zorro-antd'].layout, global['ng-zorro-antd'].list, global['ng-zorro-antd'].mention, global['ng-zorro-antd'].menu, global['ng-zorro-antd'].message, global['ng-zorro-antd'].modal, global['ng-zorro-antd'].notification, global['ng-zorro-antd']['page-header'], global['ng-zorro-antd'].pagination, global['ng-zorro-antd'].popconfirm, global['ng-zorro-antd'].popover, global['ng-zorro-antd'].progress, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].rate, global['ng-zorro-antd'].result, global['ng-zorro-antd'].select, global['ng-zorro-antd'].skeleton, global['ng-zorro-antd'].slider, global['ng-zorro-antd'].spin, global['ng-zorro-antd'].statistic, global['ng-zorro-antd'].steps, global['ng-zorro-antd'].switch, global['ng-zorro-antd'].table, global['ng-zorro-antd'].tabs, global['ng-zorro-antd'].tag, global['ng-zorro-antd']['time-picker'], global['ng-zorro-antd'].timeline, global['ng-zorro-antd'].tooltip, global['ng-zorro-antd'].transfer, global['ng-zorro-antd'].tree, global['ng-zorro-antd']['tree-select'], global['ng-zorro-antd'].typography, global['ng-zorro-antd'].upload, global['ng-zorro-antd'].version));
}(this, (function (exports, core, affix, alert, anchor, autoComplete, avatar, backTop, badge, breadcrumb, button, calendar, card, carousel, cascader, checkbox, collapse, comment, core$1, datePicker, descriptions, divider, drawer, dropdown, empty, form, grid, i18n, icon, input, inputNumber, layout, list, mention, menu, message, modal, notification, pageHeader, pagination, popconfirm, popover, progress, radio, rate, result, select, skeleton, slider, spin, statistic, steps, _switch, table, tabs, tag, timePicker, timeline, tooltip, transfer, tree, treeSelect, typography, upload, version) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgZorroAntdModule = /** @class */ (function () {
        function NgZorroAntdModule() {
        }
        /**
         * @deprecated Use `NgZorroAntdModule` instead.
         */
        /**
         * @deprecated Use `NgZorroAntdModule` instead.
         * @return {?}
         */
        NgZorroAntdModule.forRoot = /**
         * @deprecated Use `NgZorroAntdModule` instead.
         * @return {?}
         */
        function () {
            core$1.warnDeprecation("'forRoot' is not recommended if you are using Angular 6.0.0+. This API is going to be removed in 9.0.0.");
            return {
                ngModule: NgZorroAntdModule
            };
        };
        NgZorroAntdModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [
                            affix.NzAffixModule,
                            alert.NzAlertModule,
                            anchor.NzAnchorModule,
                            autoComplete.NzAutocompleteModule,
                            avatar.NzAvatarModule,
                            backTop.NzBackTopModule,
                            badge.NzBadgeModule,
                            button.NzButtonModule,
                            breadcrumb.NzBreadCrumbModule,
                            calendar.NzCalendarModule,
                            card.NzCardModule,
                            carousel.NzCarouselModule,
                            cascader.NzCascaderModule,
                            checkbox.NzCheckboxModule,
                            collapse.NzCollapseModule,
                            comment.NzCommentModule,
                            datePicker.NzDatePickerModule,
                            descriptions.NzDescriptionsModule,
                            divider.NzDividerModule,
                            drawer.NzDrawerModule,
                            dropdown.NzDropDownModule,
                            empty.NzEmptyModule,
                            form.NzFormModule,
                            grid.NzGridModule,
                            i18n.NzI18nModule,
                            icon.NzIconModule,
                            input.NzInputModule,
                            inputNumber.NzInputNumberModule,
                            layout.NzLayoutModule,
                            list.NzListModule,
                            mention.NzMentionModule,
                            menu.NzMenuModule,
                            message.NzMessageModule,
                            modal.NzModalModule,
                            core$1.NzNoAnimationModule,
                            notification.NzNotificationModule,
                            pageHeader.NzPageHeaderModule,
                            pagination.NzPaginationModule,
                            popconfirm.NzPopconfirmModule,
                            popover.NzPopoverModule,
                            progress.NzProgressModule,
                            radio.NzRadioModule,
                            rate.NzRateModule,
                            result.NzResultModule,
                            select.NzSelectModule,
                            skeleton.NzSkeletonModule,
                            slider.NzSliderModule,
                            spin.NzSpinModule,
                            statistic.NzStatisticModule,
                            steps.NzStepsModule,
                            _switch.NzSwitchModule,
                            table.NzTableModule,
                            tabs.NzTabsModule,
                            tag.NzTagModule,
                            timePicker.NzTimePickerModule,
                            timeline.NzTimelineModule,
                            tooltip.NzToolTipModule,
                            core$1.NzTransButtonModule,
                            transfer.NzTransferModule,
                            tree.NzTreeModule,
                            treeSelect.NzTreeSelectModule,
                            typography.NzTypographyModule,
                            upload.NzUploadModule,
                            core$1.NzWaveModule
                        ]
                    },] }
        ];
        return NgZorroAntdModule;
    }());

    Object.defineProperty(exports, 'NzAffixComponent', {
        enumerable: true,
        get: function () {
            return affix.NzAffixComponent;
        }
    });
    Object.defineProperty(exports, 'NzAffixModule', {
        enumerable: true,
        get: function () {
            return affix.NzAffixModule;
        }
    });
    Object.defineProperty(exports, 'NzAlertComponent', {
        enumerable: true,
        get: function () {
            return alert.NzAlertComponent;
        }
    });
    Object.defineProperty(exports, 'NzAlertModule', {
        enumerable: true,
        get: function () {
            return alert.NzAlertModule;
        }
    });
    Object.defineProperty(exports, 'NzAnchorComponent', {
        enumerable: true,
        get: function () {
            return anchor.NzAnchorComponent;
        }
    });
    Object.defineProperty(exports, 'NzAnchorLinkComponent', {
        enumerable: true,
        get: function () {
            return anchor.NzAnchorLinkComponent;
        }
    });
    Object.defineProperty(exports, 'NzAnchorModule', {
        enumerable: true,
        get: function () {
            return anchor.NzAnchorModule;
        }
    });
    Object.defineProperty(exports, 'NZ_AUTOCOMPLETE_VALUE_ACCESSOR', {
        enumerable: true,
        get: function () {
            return autoComplete.NZ_AUTOCOMPLETE_VALUE_ACCESSOR;
        }
    });
    Object.defineProperty(exports, 'NzAutocompleteComponent', {
        enumerable: true,
        get: function () {
            return autoComplete.NzAutocompleteComponent;
        }
    });
    Object.defineProperty(exports, 'NzAutocompleteModule', {
        enumerable: true,
        get: function () {
            return autoComplete.NzAutocompleteModule;
        }
    });
    Object.defineProperty(exports, 'NzAutocompleteOptgroupComponent', {
        enumerable: true,
        get: function () {
            return autoComplete.NzAutocompleteOptgroupComponent;
        }
    });
    Object.defineProperty(exports, 'NzAutocompleteOptionComponent', {
        enumerable: true,
        get: function () {
            return autoComplete.NzAutocompleteOptionComponent;
        }
    });
    Object.defineProperty(exports, 'NzAutocompleteTriggerDirective', {
        enumerable: true,
        get: function () {
            return autoComplete.NzAutocompleteTriggerDirective;
        }
    });
    Object.defineProperty(exports, 'NzOptionSelectionChange', {
        enumerable: true,
        get: function () {
            return autoComplete.NzOptionSelectionChange;
        }
    });
    Object.defineProperty(exports, 'getNzAutocompleteMissingPanelError', {
        enumerable: true,
        get: function () {
            return autoComplete.getNzAutocompleteMissingPanelError;
        }
    });
    Object.defineProperty(exports, 'NzAvatarComponent', {
        enumerable: true,
        get: function () {
            return avatar.NzAvatarComponent;
        }
    });
    Object.defineProperty(exports, 'NzAvatarModule', {
        enumerable: true,
        get: function () {
            return avatar.NzAvatarModule;
        }
    });
    Object.defineProperty(exports, 'NzBackTopComponent', {
        enumerable: true,
        get: function () {
            return backTop.NzBackTopComponent;
        }
    });
    Object.defineProperty(exports, 'NzBackTopModule', {
        enumerable: true,
        get: function () {
            return backTop.NzBackTopModule;
        }
    });
    Object.defineProperty(exports, 'NzBadgeComponent', {
        enumerable: true,
        get: function () {
            return badge.NzBadgeComponent;
        }
    });
    Object.defineProperty(exports, 'NzBadgeModule', {
        enumerable: true,
        get: function () {
            return badge.NzBadgeModule;
        }
    });
    Object.defineProperty(exports, 'NzBreadCrumbComponent', {
        enumerable: true,
        get: function () {
            return breadcrumb.NzBreadCrumbComponent;
        }
    });
    Object.defineProperty(exports, 'NzBreadCrumbItemComponent', {
        enumerable: true,
        get: function () {
            return breadcrumb.NzBreadCrumbItemComponent;
        }
    });
    Object.defineProperty(exports, 'NzBreadCrumbModule', {
        enumerable: true,
        get: function () {
            return breadcrumb.NzBreadCrumbModule;
        }
    });
    Object.defineProperty(exports, 'NzButtonComponent', {
        enumerable: true,
        get: function () {
            return button.NzButtonComponent;
        }
    });
    Object.defineProperty(exports, 'NzButtonGroupComponent', {
        enumerable: true,
        get: function () {
            return button.NzButtonGroupComponent;
        }
    });
    Object.defineProperty(exports, 'NzButtonModule', {
        enumerable: true,
        get: function () {
            return button.NzButtonModule;
        }
    });
    Object.defineProperty(exports, 'DateTableCellComponent', {
        enumerable: true,
        get: function () {
            return calendar.DateTableCellComponent;
        }
    });
    Object.defineProperty(exports, 'DateTableComponent', {
        enumerable: true,
        get: function () {
            return calendar.DateTableComponent;
        }
    });
    Object.defineProperty(exports, 'MonthTableComponent', {
        enumerable: true,
        get: function () {
            return calendar.MonthTableComponent;
        }
    });
    Object.defineProperty(exports, 'NzCalendarComponent', {
        enumerable: true,
        get: function () {
            return calendar.NzCalendarComponent;
        }
    });
    Object.defineProperty(exports, 'NzCalendarHeaderComponent', {
        enumerable: true,
        get: function () {
            return calendar.NzCalendarHeaderComponent;
        }
    });
    Object.defineProperty(exports, 'NzCalendarModule', {
        enumerable: true,
        get: function () {
            return calendar.NzCalendarModule;
        }
    });
    Object.defineProperty(exports, 'NzDateCellDirective', {
        enumerable: true,
        get: function () {
            return calendar.NzDateCellDirective;
        }
    });
    Object.defineProperty(exports, 'NzDateFullCellDirective', {
        enumerable: true,
        get: function () {
            return calendar.NzDateFullCellDirective;
        }
    });
    Object.defineProperty(exports, 'NzMonthCellDirective', {
        enumerable: true,
        get: function () {
            return calendar.NzMonthCellDirective;
        }
    });
    Object.defineProperty(exports, 'NzMonthFullCellDirective', {
        enumerable: true,
        get: function () {
            return calendar.NzMonthFullCellDirective;
        }
    });
    Object.defineProperty(exports, 'NzCardComponent', {
        enumerable: true,
        get: function () {
            return card.NzCardComponent;
        }
    });
    Object.defineProperty(exports, 'NzCardGridDirective', {
        enumerable: true,
        get: function () {
            return card.NzCardGridDirective;
        }
    });
    Object.defineProperty(exports, 'NzCardLoadingComponent', {
        enumerable: true,
        get: function () {
            return card.NzCardLoadingComponent;
        }
    });
    Object.defineProperty(exports, 'NzCardMetaComponent', {
        enumerable: true,
        get: function () {
            return card.NzCardMetaComponent;
        }
    });
    Object.defineProperty(exports, 'NzCardModule', {
        enumerable: true,
        get: function () {
            return card.NzCardModule;
        }
    });
    Object.defineProperty(exports, 'NzCardTabComponent', {
        enumerable: true,
        get: function () {
            return card.NzCardTabComponent;
        }
    });
    Object.defineProperty(exports, 'NZ_CAROUSEL_CUSTOM_STRATEGIES', {
        enumerable: true,
        get: function () {
            return carousel.NZ_CAROUSEL_CUSTOM_STRATEGIES;
        }
    });
    Object.defineProperty(exports, 'NzCarouselBaseStrategy', {
        enumerable: true,
        get: function () {
            return carousel.NzCarouselBaseStrategy;
        }
    });
    Object.defineProperty(exports, 'NzCarouselComponent', {
        enumerable: true,
        get: function () {
            return carousel.NzCarouselComponent;
        }
    });
    Object.defineProperty(exports, 'NzCarouselContentDirective', {
        enumerable: true,
        get: function () {
            return carousel.NzCarouselContentDirective;
        }
    });
    Object.defineProperty(exports, 'NzCarouselModule', {
        enumerable: true,
        get: function () {
            return carousel.NzCarouselModule;
        }
    });
    Object.defineProperty(exports, 'NzCascaderComponent', {
        enumerable: true,
        get: function () {
            return cascader.NzCascaderComponent;
        }
    });
    Object.defineProperty(exports, 'NzCascaderModule', {
        enumerable: true,
        get: function () {
            return cascader.NzCascaderModule;
        }
    });
    Object.defineProperty(exports, 'NzCascaderOptionComponent', {
        enumerable: true,
        get: function () {
            return cascader.NzCascaderOptionComponent;
        }
    });
    Object.defineProperty(exports, 'NzCascaderService', {
        enumerable: true,
        get: function () {
            return cascader.NzCascaderService;
        }
    });
    Object.defineProperty(exports, 'isChildOption', {
        enumerable: true,
        get: function () {
            return cascader.isChildOption;
        }
    });
    Object.defineProperty(exports, 'isParentOption', {
        enumerable: true,
        get: function () {
            return cascader.isParentOption;
        }
    });
    Object.defineProperty(exports, 'isShowSearchObject', {
        enumerable: true,
        get: function () {
            return cascader.isShowSearchObject;
        }
    });
    Object.defineProperty(exports, 'NzCheckboxComponent', {
        enumerable: true,
        get: function () {
            return checkbox.NzCheckboxComponent;
        }
    });
    Object.defineProperty(exports, 'NzCheckboxGroupComponent', {
        enumerable: true,
        get: function () {
            return checkbox.NzCheckboxGroupComponent;
        }
    });
    Object.defineProperty(exports, 'NzCheckboxModule', {
        enumerable: true,
        get: function () {
            return checkbox.NzCheckboxModule;
        }
    });
    Object.defineProperty(exports, 'NzCheckboxWrapperComponent', {
        enumerable: true,
        get: function () {
            return checkbox.NzCheckboxWrapperComponent;
        }
    });
    Object.defineProperty(exports, 'NzCollapseComponent', {
        enumerable: true,
        get: function () {
            return collapse.NzCollapseComponent;
        }
    });
    Object.defineProperty(exports, 'NzCollapseModule', {
        enumerable: true,
        get: function () {
            return collapse.NzCollapseModule;
        }
    });
    Object.defineProperty(exports, 'NzCollapsePanelComponent', {
        enumerable: true,
        get: function () {
            return collapse.NzCollapsePanelComponent;
        }
    });
    Object.defineProperty(exports, 'NzCommentActionComponent', {
        enumerable: true,
        get: function () {
            return comment.NzCommentActionComponent;
        }
    });
    Object.defineProperty(exports, 'NzCommentActionHostDirective', {
        enumerable: true,
        get: function () {
            return comment.NzCommentActionHostDirective;
        }
    });
    Object.defineProperty(exports, 'NzCommentAvatarDirective', {
        enumerable: true,
        get: function () {
            return comment.NzCommentAvatarDirective;
        }
    });
    Object.defineProperty(exports, 'NzCommentComponent', {
        enumerable: true,
        get: function () {
            return comment.NzCommentComponent;
        }
    });
    Object.defineProperty(exports, 'NzCommentContentDirective', {
        enumerable: true,
        get: function () {
            return comment.NzCommentContentDirective;
        }
    });
    Object.defineProperty(exports, 'NzCommentModule', {
        enumerable: true,
        get: function () {
            return comment.NzCommentModule;
        }
    });
    Object.defineProperty(exports, 'AnimationCurves', {
        enumerable: true,
        get: function () {
            return core$1.AnimationCurves;
        }
    });
    Object.defineProperty(exports, 'AnimationDuration', {
        enumerable: true,
        get: function () {
            return core$1.AnimationDuration;
        }
    });
    Object.defineProperty(exports, 'CandyDate', {
        enumerable: true,
        get: function () {
            return core$1.CandyDate;
        }
    });
    Object.defineProperty(exports, 'DEFAULT_DROPDOWN_POSITIONS', {
        enumerable: true,
        get: function () {
            return core$1.DEFAULT_DROPDOWN_POSITIONS;
        }
    });
    Object.defineProperty(exports, 'DEFAULT_MENTION_BOTTOM_POSITIONS', {
        enumerable: true,
        get: function () {
            return core$1.DEFAULT_MENTION_BOTTOM_POSITIONS;
        }
    });
    Object.defineProperty(exports, 'DEFAULT_MENTION_TOP_POSITIONS', {
        enumerable: true,
        get: function () {
            return core$1.DEFAULT_MENTION_TOP_POSITIONS;
        }
    });
    Object.defineProperty(exports, 'DEFAULT_SUBMENU_POSITIONS', {
        enumerable: true,
        get: function () {
            return core$1.DEFAULT_SUBMENU_POSITIONS;
        }
    });
    Object.defineProperty(exports, 'DEFAULT_TOOLTIP_POSITIONS', {
        enumerable: true,
        get: function () {
            return core$1.DEFAULT_TOOLTIP_POSITIONS;
        }
    });
    Object.defineProperty(exports, 'FakeViewportRuler', {
        enumerable: true,
        get: function () {
            return core$1.FakeViewportRuler;
        }
    });
    Object.defineProperty(exports, 'InputBoolean', {
        enumerable: true,
        get: function () {
            return core$1.InputBoolean;
        }
    });
    Object.defineProperty(exports, 'InputCssPixel', {
        enumerable: true,
        get: function () {
            return core$1.InputCssPixel;
        }
    });
    Object.defineProperty(exports, 'InputNumber', {
        enumerable: true,
        get: function () {
            return core$1.InputNumber;
        }
    });
    Object.defineProperty(exports, 'MockNgZone', {
        enumerable: true,
        get: function () {
            return core$1.MockNgZone;
        }
    });
    Object.defineProperty(exports, 'NZ_CONFIG', {
        enumerable: true,
        get: function () {
            return core$1.NZ_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NZ_WAVE_GLOBAL_CONFIG', {
        enumerable: true,
        get: function () {
            return core$1.NZ_WAVE_GLOBAL_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NZ_WAVE_GLOBAL_CONFIG_FACTORY', {
        enumerable: true,
        get: function () {
            return core$1.NZ_WAVE_GLOBAL_CONFIG_FACTORY;
        }
    });
    Object.defineProperty(exports, 'NZ_WAVE_GLOBAL_DEFAULT_CONFIG', {
        enumerable: true,
        get: function () {
            return core$1.NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NzAddOnModule', {
        enumerable: true,
        get: function () {
            return core$1.NzAddOnModule;
        }
    });
    Object.defineProperty(exports, 'NzBreakpoint', {
        enumerable: true,
        get: function () {
            return core$1.NzBreakpoint;
        }
    });
    Object.defineProperty(exports, 'NzClassListAddDirective', {
        enumerable: true,
        get: function () {
            return core$1.NzClassListAddDirective;
        }
    });
    Object.defineProperty(exports, 'NzConfigService', {
        enumerable: true,
        get: function () {
            return core$1.NzConfigService;
        }
    });
    Object.defineProperty(exports, 'NzConnectedOverlayDirective', {
        enumerable: true,
        get: function () {
            return core$1.NzConnectedOverlayDirective;
        }
    });
    Object.defineProperty(exports, 'NzCopyToClipboardService', {
        enumerable: true,
        get: function () {
            return core$1.NzCopyToClipboardService;
        }
    });
    Object.defineProperty(exports, 'NzCopyToClipboardServiceModule', {
        enumerable: true,
        get: function () {
            return core$1.NzCopyToClipboardServiceModule;
        }
    });
    Object.defineProperty(exports, 'NzDomEventService', {
        enumerable: true,
        get: function () {
            return core$1.NzDomEventService;
        }
    });
    Object.defineProperty(exports, 'NzDragService', {
        enumerable: true,
        get: function () {
            return core$1.NzDragService;
        }
    });
    Object.defineProperty(exports, 'NzDropdownHigherOrderServiceToken', {
        enumerable: true,
        get: function () {
            return core$1.NzDropdownHigherOrderServiceToken;
        }
    });
    Object.defineProperty(exports, 'NzHighlightModule', {
        enumerable: true,
        get: function () {
            return core$1.NzHighlightModule;
        }
    });
    Object.defineProperty(exports, 'NzHighlightPipe', {
        enumerable: true,
        get: function () {
            return core$1.NzHighlightPipe;
        }
    });
    Object.defineProperty(exports, 'NzMenuBaseService', {
        enumerable: true,
        get: function () {
            return core$1.NzMenuBaseService;
        }
    });
    Object.defineProperty(exports, 'NzNoAnimationDirective', {
        enumerable: true,
        get: function () {
            return core$1.NzNoAnimationDirective;
        }
    });
    Object.defineProperty(exports, 'NzNoAnimationModule', {
        enumerable: true,
        get: function () {
            return core$1.NzNoAnimationModule;
        }
    });
    Object.defineProperty(exports, 'NzOverlayModule', {
        enumerable: true,
        get: function () {
            return core$1.NzOverlayModule;
        }
    });
    Object.defineProperty(exports, 'NzPipesModule', {
        enumerable: true,
        get: function () {
            return core$1.NzPipesModule;
        }
    });
    Object.defineProperty(exports, 'NzScrollService', {
        enumerable: true,
        get: function () {
            return core$1.NzScrollService;
        }
    });
    Object.defineProperty(exports, 'NzSingletonService', {
        enumerable: true,
        get: function () {
            return core$1.NzSingletonService;
        }
    });
    Object.defineProperty(exports, 'NzStringTemplateOutletDirective', {
        enumerable: true,
        get: function () {
            return core$1.NzStringTemplateOutletDirective;
        }
    });
    Object.defineProperty(exports, 'NzTimeRangePipe', {
        enumerable: true,
        get: function () {
            return core$1.NzTimeRangePipe;
        }
    });
    Object.defineProperty(exports, 'NzToCssUnitPipe', {
        enumerable: true,
        get: function () {
            return core$1.NzToCssUnitPipe;
        }
    });
    Object.defineProperty(exports, 'NzTransButtonDirective', {
        enumerable: true,
        get: function () {
            return core$1.NzTransButtonDirective;
        }
    });
    Object.defineProperty(exports, 'NzTransButtonModule', {
        enumerable: true,
        get: function () {
            return core$1.NzTransButtonModule;
        }
    });
    Object.defineProperty(exports, 'NzTreeBase', {
        enumerable: true,
        get: function () {
            return core$1.NzTreeBase;
        }
    });
    Object.defineProperty(exports, 'NzTreeBaseService', {
        enumerable: true,
        get: function () {
            return core$1.NzTreeBaseService;
        }
    });
    Object.defineProperty(exports, 'NzTreeHigherOrderServiceToken', {
        enumerable: true,
        get: function () {
            return core$1.NzTreeHigherOrderServiceToken;
        }
    });
    Object.defineProperty(exports, 'NzTreeNode', {
        enumerable: true,
        get: function () {
            return core$1.NzTreeNode;
        }
    });
    Object.defineProperty(exports, 'NzUpdateHostClassService', {
        enumerable: true,
        get: function () {
            return core$1.NzUpdateHostClassService;
        }
    });
    Object.defineProperty(exports, 'NzWaveDirective', {
        enumerable: true,
        get: function () {
            return core$1.NzWaveDirective;
        }
    });
    Object.defineProperty(exports, 'NzWaveModule', {
        enumerable: true,
        get: function () {
            return core$1.NzWaveModule;
        }
    });
    Object.defineProperty(exports, 'NzWaveRenderer', {
        enumerable: true,
        get: function () {
            return core$1.NzWaveRenderer;
        }
    });
    Object.defineProperty(exports, 'POSITION_MAP', {
        enumerable: true,
        get: function () {
            return core$1.POSITION_MAP;
        }
    });
    Object.defineProperty(exports, 'PREFIX', {
        enumerable: true,
        get: function () {
            return core$1.PREFIX;
        }
    });
    Object.defineProperty(exports, 'SCROLL_SERVICE_PROVIDER', {
        enumerable: true,
        get: function () {
            return core$1.SCROLL_SERVICE_PROVIDER;
        }
    });
    Object.defineProperty(exports, 'SCROLL_SERVICE_PROVIDER_FACTORY', {
        enumerable: true,
        get: function () {
            return core$1.SCROLL_SERVICE_PROVIDER_FACTORY;
        }
    });
    Object.defineProperty(exports, 'WithConfig', {
        enumerable: true,
        get: function () {
            return core$1.WithConfig;
        }
    });
    Object.defineProperty(exports, 'arraysEqual', {
        enumerable: true,
        get: function () {
            return core$1.arraysEqual;
        }
    });
    Object.defineProperty(exports, 'cancelRequestAnimationFrame', {
        enumerable: true,
        get: function () {
            return core$1.cancelRequestAnimationFrame;
        }
    });
    Object.defineProperty(exports, 'collapseMotion', {
        enumerable: true,
        get: function () {
            return core$1.collapseMotion;
        }
    });
    Object.defineProperty(exports, 'createDebugEle', {
        enumerable: true,
        get: function () {
            return core$1.createDebugEle;
        }
    });
    Object.defineProperty(exports, 'createFakeEvent', {
        enumerable: true,
        get: function () {
            return core$1.createFakeEvent;
        }
    });
    Object.defineProperty(exports, 'createKeyboardEvent', {
        enumerable: true,
        get: function () {
            return core$1.createKeyboardEvent;
        }
    });
    Object.defineProperty(exports, 'createMouseEvent', {
        enumerable: true,
        get: function () {
            return core$1.createMouseEvent;
        }
    });
    Object.defineProperty(exports, 'createTouchEvent', {
        enumerable: true,
        get: function () {
            return core$1.createTouchEvent;
        }
    });
    Object.defineProperty(exports, 'dispatchEvent', {
        enumerable: true,
        get: function () {
            return core$1.dispatchEvent;
        }
    });
    Object.defineProperty(exports, 'dispatchFakeEvent', {
        enumerable: true,
        get: function () {
            return core$1.dispatchFakeEvent;
        }
    });
    Object.defineProperty(exports, 'dispatchKeyboardEvent', {
        enumerable: true,
        get: function () {
            return core$1.dispatchKeyboardEvent;
        }
    });
    Object.defineProperty(exports, 'dispatchMouseEvent', {
        enumerable: true,
        get: function () {
            return core$1.dispatchMouseEvent;
        }
    });
    Object.defineProperty(exports, 'dispatchTouchEvent', {
        enumerable: true,
        get: function () {
            return core$1.dispatchTouchEvent;
        }
    });
    Object.defineProperty(exports, 'ensureInBounds', {
        enumerable: true,
        get: function () {
            return core$1.ensureInBounds;
        }
    });
    Object.defineProperty(exports, 'ensureNumberInRange', {
        enumerable: true,
        get: function () {
            return core$1.ensureNumberInRange;
        }
    });
    Object.defineProperty(exports, 'fadeMotion', {
        enumerable: true,
        get: function () {
            return core$1.fadeMotion;
        }
    });
    Object.defineProperty(exports, 'filterNotEmptyNode', {
        enumerable: true,
        get: function () {
            return core$1.filterNotEmptyNode;
        }
    });
    Object.defineProperty(exports, 'findFirstNotEmptyNode', {
        enumerable: true,
        get: function () {
            return core$1.findFirstNotEmptyNode;
        }
    });
    Object.defineProperty(exports, 'findLastNotEmptyNode', {
        enumerable: true,
        get: function () {
            return core$1.findLastNotEmptyNode;
        }
    });
    Object.defineProperty(exports, 'getCaretCoordinates', {
        enumerable: true,
        get: function () {
            return core$1.getCaretCoordinates;
        }
    });
    Object.defineProperty(exports, 'getElementOffset', {
        enumerable: true,
        get: function () {
            return core$1.getElementOffset;
        }
    });
    Object.defineProperty(exports, 'getEventPosition', {
        enumerable: true,
        get: function () {
            return core$1.getEventPosition;
        }
    });
    Object.defineProperty(exports, 'getMentions', {
        enumerable: true,
        get: function () {
            return core$1.getMentions;
        }
    });
    Object.defineProperty(exports, 'getPercent', {
        enumerable: true,
        get: function () {
            return core$1.getPercent;
        }
    });
    Object.defineProperty(exports, 'getPlacementName', {
        enumerable: true,
        get: function () {
            return core$1.getPlacementName;
        }
    });
    Object.defineProperty(exports, 'getPrecision', {
        enumerable: true,
        get: function () {
            return core$1.getPrecision;
        }
    });
    Object.defineProperty(exports, 'getRegExp', {
        enumerable: true,
        get: function () {
            return core$1.getRegExp;
        }
    });
    Object.defineProperty(exports, 'getRepeatedElement', {
        enumerable: true,
        get: function () {
            return core$1.getRepeatedElement;
        }
    });
    Object.defineProperty(exports, 'getStyleAsText', {
        enumerable: true,
        get: function () {
            return core$1.getStyleAsText;
        }
    });
    Object.defineProperty(exports, 'helpMotion', {
        enumerable: true,
        get: function () {
            return core$1.helpMotion;
        }
    });
    Object.defineProperty(exports, 'inNextTick', {
        enumerable: true,
        get: function () {
            return core$1.inNextTick;
        }
    });
    Object.defineProperty(exports, 'isComponent', {
        enumerable: true,
        get: function () {
            return core$1.isComponent;
        }
    });
    Object.defineProperty(exports, 'isEmpty', {
        enumerable: true,
        get: function () {
            return core$1.isEmpty;
        }
    });
    Object.defineProperty(exports, 'isInteger', {
        enumerable: true,
        get: function () {
            return core$1.isInteger;
        }
    });
    Object.defineProperty(exports, 'isNil', {
        enumerable: true,
        get: function () {
            return core$1.isNil;
        }
    });
    Object.defineProperty(exports, 'isNonEmptyString', {
        enumerable: true,
        get: function () {
            return core$1.isNonEmptyString;
        }
    });
    Object.defineProperty(exports, 'isNotNil', {
        enumerable: true,
        get: function () {
            return core$1.isNotNil;
        }
    });
    Object.defineProperty(exports, 'isPromise', {
        enumerable: true,
        get: function () {
            return core$1.isPromise;
        }
    });
    Object.defineProperty(exports, 'isStyleSupport', {
        enumerable: true,
        get: function () {
            return core$1.isStyleSupport;
        }
    });
    Object.defineProperty(exports, 'isTemplateRef', {
        enumerable: true,
        get: function () {
            return core$1.isTemplateRef;
        }
    });
    Object.defineProperty(exports, 'isTouchEvent', {
        enumerable: true,
        get: function () {
            return core$1.isTouchEvent;
        }
    });
    Object.defineProperty(exports, 'log', {
        enumerable: true,
        get: function () {
            return core$1.log;
        }
    });
    Object.defineProperty(exports, 'measure', {
        enumerable: true,
        get: function () {
            return core$1.measure;
        }
    });
    Object.defineProperty(exports, 'measureScrollbar', {
        enumerable: true,
        get: function () {
            return core$1.measureScrollbar;
        }
    });
    Object.defineProperty(exports, 'moveUpMotion', {
        enumerable: true,
        get: function () {
            return core$1.moveUpMotion;
        }
    });
    Object.defineProperty(exports, 'notificationMotion', {
        enumerable: true,
        get: function () {
            return core$1.notificationMotion;
        }
    });
    Object.defineProperty(exports, 'padEnd', {
        enumerable: true,
        get: function () {
            return core$1.padEnd;
        }
    });
    Object.defineProperty(exports, 'padStart', {
        enumerable: true,
        get: function () {
            return core$1.padStart;
        }
    });
    Object.defineProperty(exports, 'properties', {
        enumerable: true,
        get: function () {
            return core$1.properties;
        }
    });
    Object.defineProperty(exports, 'pxToNumber', {
        enumerable: true,
        get: function () {
            return core$1.pxToNumber;
        }
    });
    Object.defineProperty(exports, 'reqAnimFrame', {
        enumerable: true,
        get: function () {
            return core$1.reqAnimFrame;
        }
    });
    Object.defineProperty(exports, 'responsiveMap', {
        enumerable: true,
        get: function () {
            return core$1.responsiveMap;
        }
    });
    Object.defineProperty(exports, 'reverseChildNodes', {
        enumerable: true,
        get: function () {
            return core$1.reverseChildNodes;
        }
    });
    Object.defineProperty(exports, 'scrollIntoView', {
        enumerable: true,
        get: function () {
            return core$1.scrollIntoView;
        }
    });
    Object.defineProperty(exports, 'shallowCopyArray', {
        enumerable: true,
        get: function () {
            return core$1.shallowCopyArray;
        }
    });
    Object.defineProperty(exports, 'shallowEqual', {
        enumerable: true,
        get: function () {
            return core$1.shallowEqual;
        }
    });
    Object.defineProperty(exports, 'silentEvent', {
        enumerable: true,
        get: function () {
            return core$1.silentEvent;
        }
    });
    Object.defineProperty(exports, 'slideAlertMotion', {
        enumerable: true,
        get: function () {
            return core$1.slideAlertMotion;
        }
    });
    Object.defineProperty(exports, 'slideMotion', {
        enumerable: true,
        get: function () {
            return core$1.slideMotion;
        }
    });
    Object.defineProperty(exports, 'sortRangeValue', {
        enumerable: true,
        get: function () {
            return core$1.sortRangeValue;
        }
    });
    Object.defineProperty(exports, 'timeUnits', {
        enumerable: true,
        get: function () {
            return core$1.timeUnits;
        }
    });
    Object.defineProperty(exports, 'toArray', {
        enumerable: true,
        get: function () {
            return core$1.toArray;
        }
    });
    Object.defineProperty(exports, 'toBoolean', {
        enumerable: true,
        get: function () {
            return core$1.toBoolean;
        }
    });
    Object.defineProperty(exports, 'toCssPixel', {
        enumerable: true,
        get: function () {
            return core$1.toCssPixel;
        }
    });
    Object.defineProperty(exports, 'toNumber', {
        enumerable: true,
        get: function () {
            return core$1.toNumber;
        }
    });
    Object.defineProperty(exports, 'treeCollapseMotion', {
        enumerable: true,
        get: function () {
            return core$1.treeCollapseMotion;
        }
    });
    Object.defineProperty(exports, 'typeInElement', {
        enumerable: true,
        get: function () {
            return core$1.typeInElement;
        }
    });
    Object.defineProperty(exports, 'valueFunctionProp', {
        enumerable: true,
        get: function () {
            return core$1.valueFunctionProp;
        }
    });
    Object.defineProperty(exports, 'warn', {
        enumerable: true,
        get: function () {
            return core$1.warn;
        }
    });
    Object.defineProperty(exports, 'warnDeprecation', {
        enumerable: true,
        get: function () {
            return core$1.warnDeprecation;
        }
    });
    Object.defineProperty(exports, 'wrappedErrorMessage', {
        enumerable: true,
        get: function () {
            return core$1.wrappedErrorMessage;
        }
    });
    Object.defineProperty(exports, 'zoomBadgeMotion', {
        enumerable: true,
        get: function () {
            return core$1.zoomBadgeMotion;
        }
    });
    Object.defineProperty(exports, 'zoomBigMotion', {
        enumerable: true,
        get: function () {
            return core$1.zoomBigMotion;
        }
    });
    Object.defineProperty(exports, 'zoomMotion', {
        enumerable: true,
        get: function () {
            return core$1.zoomMotion;
        }
    });
    Object.defineProperty(exports, 'NzDatePickerComponent', {
        enumerable: true,
        get: function () {
            return datePicker.NzDatePickerComponent;
        }
    });
    Object.defineProperty(exports, 'NzDatePickerModule', {
        enumerable: true,
        get: function () {
            return datePicker.NzDatePickerModule;
        }
    });
    Object.defineProperty(exports, 'NzMonthPickerComponent', {
        enumerable: true,
        get: function () {
            return datePicker.NzMonthPickerComponent;
        }
    });
    Object.defineProperty(exports, 'NzRangePickerComponent', {
        enumerable: true,
        get: function () {
            return datePicker.NzRangePickerComponent;
        }
    });
    Object.defineProperty(exports, 'NzWeekPickerComponent', {
        enumerable: true,
        get: function () {
            return datePicker.NzWeekPickerComponent;
        }
    });
    Object.defineProperty(exports, 'NzYearPickerComponent', {
        enumerable: true,
        get: function () {
            return datePicker.NzYearPickerComponent;
        }
    });
    Object.defineProperty(exports, 'ɵa', {
        enumerable: true,
        get: function () {
            return datePicker.ɵa;
        }
    });
    Object.defineProperty(exports, 'ɵb', {
        enumerable: true,
        get: function () {
            return datePicker.ɵb;
        }
    });
    Object.defineProperty(exports, 'ɵc', {
        enumerable: true,
        get: function () {
            return datePicker.ɵc;
        }
    });
    Object.defineProperty(exports, 'ɵd', {
        enumerable: true,
        get: function () {
            return datePicker.ɵd;
        }
    });
    Object.defineProperty(exports, 'ɵe', {
        enumerable: true,
        get: function () {
            return datePicker.ɵe;
        }
    });
    Object.defineProperty(exports, 'ɵf', {
        enumerable: true,
        get: function () {
            return datePicker.ɵf;
        }
    });
    Object.defineProperty(exports, 'ɵg', {
        enumerable: true,
        get: function () {
            return datePicker.ɵg;
        }
    });
    Object.defineProperty(exports, 'ɵh', {
        enumerable: true,
        get: function () {
            return datePicker.ɵh;
        }
    });
    Object.defineProperty(exports, 'ɵi', {
        enumerable: true,
        get: function () {
            return datePicker.ɵi;
        }
    });
    Object.defineProperty(exports, 'ɵj', {
        enumerable: true,
        get: function () {
            return datePicker.ɵj;
        }
    });
    Object.defineProperty(exports, 'ɵk', {
        enumerable: true,
        get: function () {
            return datePicker.ɵk;
        }
    });
    Object.defineProperty(exports, 'ɵl', {
        enumerable: true,
        get: function () {
            return datePicker.ɵl;
        }
    });
    Object.defineProperty(exports, 'ɵm', {
        enumerable: true,
        get: function () {
            return datePicker.ɵm;
        }
    });
    Object.defineProperty(exports, 'ɵn', {
        enumerable: true,
        get: function () {
            return datePicker.ɵn;
        }
    });
    Object.defineProperty(exports, 'ɵo', {
        enumerable: true,
        get: function () {
            return datePicker.ɵo;
        }
    });
    Object.defineProperty(exports, 'ɵp', {
        enumerable: true,
        get: function () {
            return datePicker.ɵp;
        }
    });
    Object.defineProperty(exports, 'NzDescriptionsComponent', {
        enumerable: true,
        get: function () {
            return descriptions.NzDescriptionsComponent;
        }
    });
    Object.defineProperty(exports, 'NzDescriptionsItemComponent', {
        enumerable: true,
        get: function () {
            return descriptions.NzDescriptionsItemComponent;
        }
    });
    Object.defineProperty(exports, 'NzDescriptionsModule', {
        enumerable: true,
        get: function () {
            return descriptions.NzDescriptionsModule;
        }
    });
    Object.defineProperty(exports, 'NzDividerComponent', {
        enumerable: true,
        get: function () {
            return divider.NzDividerComponent;
        }
    });
    Object.defineProperty(exports, 'NzDividerModule', {
        enumerable: true,
        get: function () {
            return divider.NzDividerModule;
        }
    });
    Object.defineProperty(exports, 'DRAWER_ANIMATE_DURATION', {
        enumerable: true,
        get: function () {
            return drawer.DRAWER_ANIMATE_DURATION;
        }
    });
    Object.defineProperty(exports, 'DrawerBuilderForService', {
        enumerable: true,
        get: function () {
            return drawer.DrawerBuilderForService;
        }
    });
    Object.defineProperty(exports, 'NzDrawerComponent', {
        enumerable: true,
        get: function () {
            return drawer.NzDrawerComponent;
        }
    });
    Object.defineProperty(exports, 'NzDrawerModule', {
        enumerable: true,
        get: function () {
            return drawer.NzDrawerModule;
        }
    });
    Object.defineProperty(exports, 'NzDrawerRef', {
        enumerable: true,
        get: function () {
            return drawer.NzDrawerRef;
        }
    });
    Object.defineProperty(exports, 'NzDrawerService', {
        enumerable: true,
        get: function () {
            return drawer.NzDrawerService;
        }
    });
    Object.defineProperty(exports, 'NzDrawerServiceModule', {
        enumerable: true,
        get: function () {
            return drawer.NzDrawerServiceModule;
        }
    });
    Object.defineProperty(exports, 'NzContextMenuService', {
        enumerable: true,
        get: function () {
            return dropdown.NzContextMenuService;
        }
    });
    Object.defineProperty(exports, 'NzContextMenuServiceModule', {
        enumerable: true,
        get: function () {
            return dropdown.NzContextMenuServiceModule;
        }
    });
    Object.defineProperty(exports, 'NzDropDownADirective', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropDownADirective;
        }
    });
    Object.defineProperty(exports, 'NzDropDownButtonComponent', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropDownButtonComponent;
        }
    });
    Object.defineProperty(exports, 'NzDropDownComponent', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropDownComponent;
        }
    });
    Object.defineProperty(exports, 'NzDropDownDirective', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropDownDirective;
        }
    });
    Object.defineProperty(exports, 'NzDropDownModule', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropDownModule;
        }
    });
    Object.defineProperty(exports, 'NzDropdownContextComponent', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropdownContextComponent;
        }
    });
    Object.defineProperty(exports, 'NzDropdownMenuComponent', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropdownMenuComponent;
        }
    });
    Object.defineProperty(exports, 'NzDropdownService', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropdownService;
        }
    });
    Object.defineProperty(exports, 'NzDropdownServiceModule', {
        enumerable: true,
        get: function () {
            return dropdown.NzDropdownServiceModule;
        }
    });
    Object.defineProperty(exports, 'NzMenuDropdownService', {
        enumerable: true,
        get: function () {
            return dropdown.NzMenuDropdownService;
        }
    });
    Object.defineProperty(exports, 'dropdownMenuServiceFactory', {
        enumerable: true,
        get: function () {
            return dropdown.dropdownMenuServiceFactory;
        }
    });
    Object.defineProperty(exports, 'menuServiceFactory', {
        enumerable: true,
        get: function () {
            return dropdown.menuServiceFactory;
        }
    });
    Object.defineProperty(exports, 'NZ_DEFAULT_EMPTY_CONTENT', {
        enumerable: true,
        get: function () {
            return empty.NZ_DEFAULT_EMPTY_CONTENT;
        }
    });
    Object.defineProperty(exports, 'NZ_EMPTY_COMPONENT_NAME', {
        enumerable: true,
        get: function () {
            return empty.NZ_EMPTY_COMPONENT_NAME;
        }
    });
    Object.defineProperty(exports, 'NzEmbedEmptyComponent', {
        enumerable: true,
        get: function () {
            return empty.NzEmbedEmptyComponent;
        }
    });
    Object.defineProperty(exports, 'NzEmptyComponent', {
        enumerable: true,
        get: function () {
            return empty.NzEmptyComponent;
        }
    });
    Object.defineProperty(exports, 'NzEmptyModule', {
        enumerable: true,
        get: function () {
            return empty.NzEmptyModule;
        }
    });
    Object.defineProperty(exports, 'NzEmptyService', {
        enumerable: true,
        get: function () {
            return empty.NzEmptyService;
        }
    });
    Object.defineProperty(exports, 'emptyImage', {
        enumerable: true,
        get: function () {
            return empty.emptyImage;
        }
    });
    Object.defineProperty(exports, 'simpleEmptyImage', {
        enumerable: true,
        get: function () {
            return empty.simpleEmptyImage;
        }
    });
    Object.defineProperty(exports, 'NzFormControlComponent', {
        enumerable: true,
        get: function () {
            return form.NzFormControlComponent;
        }
    });
    Object.defineProperty(exports, 'NzFormDirective', {
        enumerable: true,
        get: function () {
            return form.NzFormDirective;
        }
    });
    Object.defineProperty(exports, 'NzFormExplainComponent', {
        enumerable: true,
        get: function () {
            return form.NzFormExplainComponent;
        }
    });
    Object.defineProperty(exports, 'NzFormExtraComponent', {
        enumerable: true,
        get: function () {
            return form.NzFormExtraComponent;
        }
    });
    Object.defineProperty(exports, 'NzFormItemComponent', {
        enumerable: true,
        get: function () {
            return form.NzFormItemComponent;
        }
    });
    Object.defineProperty(exports, 'NzFormLabelComponent', {
        enumerable: true,
        get: function () {
            return form.NzFormLabelComponent;
        }
    });
    Object.defineProperty(exports, 'NzFormModule', {
        enumerable: true,
        get: function () {
            return form.NzFormModule;
        }
    });
    Object.defineProperty(exports, 'NzFormSplitComponent', {
        enumerable: true,
        get: function () {
            return form.NzFormSplitComponent;
        }
    });
    Object.defineProperty(exports, 'NzFormTextComponent', {
        enumerable: true,
        get: function () {
            return form.NzFormTextComponent;
        }
    });
    Object.defineProperty(exports, 'NzColDirective', {
        enumerable: true,
        get: function () {
            return grid.NzColDirective;
        }
    });
    Object.defineProperty(exports, 'NzGridModule', {
        enumerable: true,
        get: function () {
            return grid.NzGridModule;
        }
    });
    Object.defineProperty(exports, 'NzRowDirective', {
        enumerable: true,
        get: function () {
            return grid.NzRowDirective;
        }
    });
    Object.defineProperty(exports, 'DATE_HELPER_SERVICE_FACTORY', {
        enumerable: true,
        get: function () {
            return i18n.DATE_HELPER_SERVICE_FACTORY;
        }
    });
    Object.defineProperty(exports, 'DateHelperByDateFns', {
        enumerable: true,
        get: function () {
            return i18n.DateHelperByDateFns;
        }
    });
    Object.defineProperty(exports, 'DateHelperByDatePipe', {
        enumerable: true,
        get: function () {
            return i18n.DateHelperByDatePipe;
        }
    });
    Object.defineProperty(exports, 'DateHelperService', {
        enumerable: true,
        get: function () {
            return i18n.DateHelperService;
        }
    });
    Object.defineProperty(exports, 'NZ_DATE_CONFIG', {
        enumerable: true,
        get: function () {
            return i18n.NZ_DATE_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NZ_DATE_LOCALE', {
        enumerable: true,
        get: function () {
            return i18n.NZ_DATE_LOCALE;
        }
    });
    Object.defineProperty(exports, 'NZ_I18N', {
        enumerable: true,
        get: function () {
            return i18n.NZ_I18N;
        }
    });
    Object.defineProperty(exports, 'NzI18nModule', {
        enumerable: true,
        get: function () {
            return i18n.NzI18nModule;
        }
    });
    Object.defineProperty(exports, 'NzI18nPipe', {
        enumerable: true,
        get: function () {
            return i18n.NzI18nPipe;
        }
    });
    Object.defineProperty(exports, 'NzI18nService', {
        enumerable: true,
        get: function () {
            return i18n.NzI18nService;
        }
    });
    Object.defineProperty(exports, 'ar_EG', {
        enumerable: true,
        get: function () {
            return i18n.ar_EG;
        }
    });
    Object.defineProperty(exports, 'bg_BG', {
        enumerable: true,
        get: function () {
            return i18n.bg_BG;
        }
    });
    Object.defineProperty(exports, 'ca_ES', {
        enumerable: true,
        get: function () {
            return i18n.ca_ES;
        }
    });
    Object.defineProperty(exports, 'cs_CZ', {
        enumerable: true,
        get: function () {
            return i18n.cs_CZ;
        }
    });
    Object.defineProperty(exports, 'da_DK', {
        enumerable: true,
        get: function () {
            return i18n.da_DK;
        }
    });
    Object.defineProperty(exports, 'de_DE', {
        enumerable: true,
        get: function () {
            return i18n.de_DE;
        }
    });
    Object.defineProperty(exports, 'el_GR', {
        enumerable: true,
        get: function () {
            return i18n.el_GR;
        }
    });
    Object.defineProperty(exports, 'en_GB', {
        enumerable: true,
        get: function () {
            return i18n.en_GB;
        }
    });
    Object.defineProperty(exports, 'en_US', {
        enumerable: true,
        get: function () {
            return i18n.en_US;
        }
    });
    Object.defineProperty(exports, 'es_ES', {
        enumerable: true,
        get: function () {
            return i18n.es_ES;
        }
    });
    Object.defineProperty(exports, 'et_EE', {
        enumerable: true,
        get: function () {
            return i18n.et_EE;
        }
    });
    Object.defineProperty(exports, 'fa_IR', {
        enumerable: true,
        get: function () {
            return i18n.fa_IR;
        }
    });
    Object.defineProperty(exports, 'fi_FI', {
        enumerable: true,
        get: function () {
            return i18n.fi_FI;
        }
    });
    Object.defineProperty(exports, 'fr_BE', {
        enumerable: true,
        get: function () {
            return i18n.fr_BE;
        }
    });
    Object.defineProperty(exports, 'fr_FR', {
        enumerable: true,
        get: function () {
            return i18n.fr_FR;
        }
    });
    Object.defineProperty(exports, 'he_IL', {
        enumerable: true,
        get: function () {
            return i18n.he_IL;
        }
    });
    Object.defineProperty(exports, 'hi_IN', {
        enumerable: true,
        get: function () {
            return i18n.hi_IN;
        }
    });
    Object.defineProperty(exports, 'hr_HR', {
        enumerable: true,
        get: function () {
            return i18n.hr_HR;
        }
    });
    Object.defineProperty(exports, 'hu_HU', {
        enumerable: true,
        get: function () {
            return i18n.hu_HU;
        }
    });
    Object.defineProperty(exports, 'id_ID', {
        enumerable: true,
        get: function () {
            return i18n.id_ID;
        }
    });
    Object.defineProperty(exports, 'is_IS', {
        enumerable: true,
        get: function () {
            return i18n.is_IS;
        }
    });
    Object.defineProperty(exports, 'it_IT', {
        enumerable: true,
        get: function () {
            return i18n.it_IT;
        }
    });
    Object.defineProperty(exports, 'ja_JP', {
        enumerable: true,
        get: function () {
            return i18n.ja_JP;
        }
    });
    Object.defineProperty(exports, 'kn_IN', {
        enumerable: true,
        get: function () {
            return i18n.kn_IN;
        }
    });
    Object.defineProperty(exports, 'ko_KR', {
        enumerable: true,
        get: function () {
            return i18n.ko_KR;
        }
    });
    Object.defineProperty(exports, 'ku_IQ', {
        enumerable: true,
        get: function () {
            return i18n.ku_IQ;
        }
    });
    Object.defineProperty(exports, 'lv_LV', {
        enumerable: true,
        get: function () {
            return i18n.lv_LV;
        }
    });
    Object.defineProperty(exports, 'mn_MN', {
        enumerable: true,
        get: function () {
            return i18n.mn_MN;
        }
    });
    Object.defineProperty(exports, 'ms_MY', {
        enumerable: true,
        get: function () {
            return i18n.ms_MY;
        }
    });
    Object.defineProperty(exports, 'nb_NO', {
        enumerable: true,
        get: function () {
            return i18n.nb_NO;
        }
    });
    Object.defineProperty(exports, 'ne_NP', {
        enumerable: true,
        get: function () {
            return i18n.ne_NP;
        }
    });
    Object.defineProperty(exports, 'nl_BE', {
        enumerable: true,
        get: function () {
            return i18n.nl_BE;
        }
    });
    Object.defineProperty(exports, 'nl_NL', {
        enumerable: true,
        get: function () {
            return i18n.nl_NL;
        }
    });
    Object.defineProperty(exports, 'pl_PL', {
        enumerable: true,
        get: function () {
            return i18n.pl_PL;
        }
    });
    Object.defineProperty(exports, 'pt_BR', {
        enumerable: true,
        get: function () {
            return i18n.pt_BR;
        }
    });
    Object.defineProperty(exports, 'pt_PT', {
        enumerable: true,
        get: function () {
            return i18n.pt_PT;
        }
    });
    Object.defineProperty(exports, 'ro_RO', {
        enumerable: true,
        get: function () {
            return i18n.ro_RO;
        }
    });
    Object.defineProperty(exports, 'ru_RU', {
        enumerable: true,
        get: function () {
            return i18n.ru_RU;
        }
    });
    Object.defineProperty(exports, 'sk_SK', {
        enumerable: true,
        get: function () {
            return i18n.sk_SK;
        }
    });
    Object.defineProperty(exports, 'sl_SI', {
        enumerable: true,
        get: function () {
            return i18n.sl_SI;
        }
    });
    Object.defineProperty(exports, 'sr_RS', {
        enumerable: true,
        get: function () {
            return i18n.sr_RS;
        }
    });
    Object.defineProperty(exports, 'sv_SE', {
        enumerable: true,
        get: function () {
            return i18n.sv_SE;
        }
    });
    Object.defineProperty(exports, 'ta_IN', {
        enumerable: true,
        get: function () {
            return i18n.ta_IN;
        }
    });
    Object.defineProperty(exports, 'th_TH', {
        enumerable: true,
        get: function () {
            return i18n.th_TH;
        }
    });
    Object.defineProperty(exports, 'tr_TR', {
        enumerable: true,
        get: function () {
            return i18n.tr_TR;
        }
    });
    Object.defineProperty(exports, 'uk_UA', {
        enumerable: true,
        get: function () {
            return i18n.uk_UA;
        }
    });
    Object.defineProperty(exports, 'vi_VN', {
        enumerable: true,
        get: function () {
            return i18n.vi_VN;
        }
    });
    Object.defineProperty(exports, 'zh_CN', {
        enumerable: true,
        get: function () {
            return i18n.zh_CN;
        }
    });
    Object.defineProperty(exports, 'zh_TW', {
        enumerable: true,
        get: function () {
            return i18n.zh_TW;
        }
    });
    Object.defineProperty(exports, 'DEFAULT_TWOTONE_COLOR', {
        enumerable: true,
        get: function () {
            return icon.DEFAULT_TWOTONE_COLOR;
        }
    });
    Object.defineProperty(exports, 'NZ_ICONS', {
        enumerable: true,
        get: function () {
            return icon.NZ_ICONS;
        }
    });
    Object.defineProperty(exports, 'NZ_ICONS_USED_BY_ZORRO', {
        enumerable: true,
        get: function () {
            return icon.NZ_ICONS_USED_BY_ZORRO;
        }
    });
    Object.defineProperty(exports, 'NZ_ICON_DEFAULT_TWOTONE_COLOR', {
        enumerable: true,
        get: function () {
            return icon.NZ_ICON_DEFAULT_TWOTONE_COLOR;
        }
    });
    Object.defineProperty(exports, 'NzIconDirective', {
        enumerable: true,
        get: function () {
            return icon.NzIconDirective;
        }
    });
    Object.defineProperty(exports, 'NzIconModule', {
        enumerable: true,
        get: function () {
            return icon.NzIconModule;
        }
    });
    Object.defineProperty(exports, 'NzIconService', {
        enumerable: true,
        get: function () {
            return icon.NzIconService;
        }
    });
    Object.defineProperty(exports, 'NzAutosizeDirective', {
        enumerable: true,
        get: function () {
            return input.NzAutosizeDirective;
        }
    });
    Object.defineProperty(exports, 'NzInputDirective', {
        enumerable: true,
        get: function () {
            return input.NzInputDirective;
        }
    });
    Object.defineProperty(exports, 'NzInputGroupComponent', {
        enumerable: true,
        get: function () {
            return input.NzInputGroupComponent;
        }
    });
    Object.defineProperty(exports, 'NzInputModule', {
        enumerable: true,
        get: function () {
            return input.NzInputModule;
        }
    });
    Object.defineProperty(exports, 'isAutoSizeType', {
        enumerable: true,
        get: function () {
            return input.isAutoSizeType;
        }
    });
    Object.defineProperty(exports, 'NzInputNumberComponent', {
        enumerable: true,
        get: function () {
            return inputNumber.NzInputNumberComponent;
        }
    });
    Object.defineProperty(exports, 'NzInputNumberModule', {
        enumerable: true,
        get: function () {
            return inputNumber.NzInputNumberModule;
        }
    });
    Object.defineProperty(exports, 'NzContentComponent', {
        enumerable: true,
        get: function () {
            return layout.NzContentComponent;
        }
    });
    Object.defineProperty(exports, 'NzFooterComponent', {
        enumerable: true,
        get: function () {
            return layout.NzFooterComponent;
        }
    });
    Object.defineProperty(exports, 'NzHeaderComponent', {
        enumerable: true,
        get: function () {
            return layout.NzHeaderComponent;
        }
    });
    Object.defineProperty(exports, 'NzLayoutComponent', {
        enumerable: true,
        get: function () {
            return layout.NzLayoutComponent;
        }
    });
    Object.defineProperty(exports, 'NzLayoutModule', {
        enumerable: true,
        get: function () {
            return layout.NzLayoutModule;
        }
    });
    Object.defineProperty(exports, 'NzSiderComponent', {
        enumerable: true,
        get: function () {
            return layout.NzSiderComponent;
        }
    });
    Object.defineProperty(exports, 'NzListComponent', {
        enumerable: true,
        get: function () {
            return list.NzListComponent;
        }
    });
    Object.defineProperty(exports, 'NzListItemComponent', {
        enumerable: true,
        get: function () {
            return list.NzListItemComponent;
        }
    });
    Object.defineProperty(exports, 'NzListItemMetaComponent', {
        enumerable: true,
        get: function () {
            return list.NzListItemMetaComponent;
        }
    });
    Object.defineProperty(exports, 'NzListModule', {
        enumerable: true,
        get: function () {
            return list.NzListModule;
        }
    });
    Object.defineProperty(exports, 'NZ_MENTION_TRIGGER_ACCESSOR', {
        enumerable: true,
        get: function () {
            return mention.NZ_MENTION_TRIGGER_ACCESSOR;
        }
    });
    Object.defineProperty(exports, 'NzMentionComponent', {
        enumerable: true,
        get: function () {
            return mention.NzMentionComponent;
        }
    });
    Object.defineProperty(exports, 'NzMentionModule', {
        enumerable: true,
        get: function () {
            return mention.NzMentionModule;
        }
    });
    Object.defineProperty(exports, 'NzMentionService', {
        enumerable: true,
        get: function () {
            return mention.NzMentionService;
        }
    });
    Object.defineProperty(exports, 'NzMentionSuggestionDirective', {
        enumerable: true,
        get: function () {
            return mention.NzMentionSuggestionDirective;
        }
    });
    Object.defineProperty(exports, 'NzMentionTriggerDirective', {
        enumerable: true,
        get: function () {
            return mention.NzMentionTriggerDirective;
        }
    });
    Object.defineProperty(exports, 'NzMenuDirective', {
        enumerable: true,
        get: function () {
            return menu.NzMenuDirective;
        }
    });
    Object.defineProperty(exports, 'NzMenuDividerDirective', {
        enumerable: true,
        get: function () {
            return menu.NzMenuDividerDirective;
        }
    });
    Object.defineProperty(exports, 'NzMenuGroupComponent', {
        enumerable: true,
        get: function () {
            return menu.NzMenuGroupComponent;
        }
    });
    Object.defineProperty(exports, 'NzMenuItemDirective', {
        enumerable: true,
        get: function () {
            return menu.NzMenuItemDirective;
        }
    });
    Object.defineProperty(exports, 'NzMenuModule', {
        enumerable: true,
        get: function () {
            return menu.NzMenuModule;
        }
    });
    Object.defineProperty(exports, 'NzMenuService', {
        enumerable: true,
        get: function () {
            return menu.NzMenuService;
        }
    });
    Object.defineProperty(exports, 'NzMenuServiceFactory', {
        enumerable: true,
        get: function () {
            return menu.NzMenuServiceFactory;
        }
    });
    Object.defineProperty(exports, 'NzSubMenuComponent', {
        enumerable: true,
        get: function () {
            return menu.NzSubMenuComponent;
        }
    });
    Object.defineProperty(exports, 'NzSubmenuService', {
        enumerable: true,
        get: function () {
            return menu.NzSubmenuService;
        }
    });
    Object.defineProperty(exports, 'NZ_MESSAGE_CONFIG', {
        enumerable: true,
        get: function () {
            return message.NZ_MESSAGE_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NZ_MESSAGE_DEFAULT_CONFIG', {
        enumerable: true,
        get: function () {
            return message.NZ_MESSAGE_DEFAULT_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER', {
        enumerable: true,
        get: function () {
            return message.NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER;
        }
    });
    Object.defineProperty(exports, 'NzMessageBaseService', {
        enumerable: true,
        get: function () {
            return message.NzMessageBaseService;
        }
    });
    Object.defineProperty(exports, 'NzMessageComponent', {
        enumerable: true,
        get: function () {
            return message.NzMessageComponent;
        }
    });
    Object.defineProperty(exports, 'NzMessageContainerComponent', {
        enumerable: true,
        get: function () {
            return message.NzMessageContainerComponent;
        }
    });
    Object.defineProperty(exports, 'NzMessageModule', {
        enumerable: true,
        get: function () {
            return message.NzMessageModule;
        }
    });
    Object.defineProperty(exports, 'NzMessageService', {
        enumerable: true,
        get: function () {
            return message.NzMessageService;
        }
    });
    Object.defineProperty(exports, 'NzMessageServiceModule', {
        enumerable: true,
        get: function () {
            return message.NzMessageServiceModule;
        }
    });
    Object.defineProperty(exports, 'NZ_MODAL_CONFIG', {
        enumerable: true,
        get: function () {
            return modal.NZ_MODAL_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NzModalComponent', {
        enumerable: true,
        get: function () {
            return modal.NzModalComponent;
        }
    });
    Object.defineProperty(exports, 'NzModalControlService', {
        enumerable: true,
        get: function () {
            return modal.NzModalControlService;
        }
    });
    Object.defineProperty(exports, 'NzModalControlServiceModule', {
        enumerable: true,
        get: function () {
            return modal.NzModalControlServiceModule;
        }
    });
    Object.defineProperty(exports, 'NzModalFooterDirective', {
        enumerable: true,
        get: function () {
            return modal.NzModalFooterDirective;
        }
    });
    Object.defineProperty(exports, 'NzModalModule', {
        enumerable: true,
        get: function () {
            return modal.NzModalModule;
        }
    });
    Object.defineProperty(exports, 'NzModalRef', {
        enumerable: true,
        get: function () {
            return modal.NzModalRef;
        }
    });
    Object.defineProperty(exports, 'NzModalService', {
        enumerable: true,
        get: function () {
            return modal.NzModalService;
        }
    });
    Object.defineProperty(exports, 'NzModalServiceModule', {
        enumerable: true,
        get: function () {
            return modal.NzModalServiceModule;
        }
    });
    Object.defineProperty(exports, 'NZ_NOTIFICATION_CONFIG', {
        enumerable: true,
        get: function () {
            return notification.NZ_NOTIFICATION_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NZ_NOTIFICATION_DEFAULT_CONFIG', {
        enumerable: true,
        get: function () {
            return notification.NZ_NOTIFICATION_DEFAULT_CONFIG;
        }
    });
    Object.defineProperty(exports, 'NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER', {
        enumerable: true,
        get: function () {
            return notification.NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER;
        }
    });
    Object.defineProperty(exports, 'NzNotificationComponent', {
        enumerable: true,
        get: function () {
            return notification.NzNotificationComponent;
        }
    });
    Object.defineProperty(exports, 'NzNotificationContainerComponent', {
        enumerable: true,
        get: function () {
            return notification.NzNotificationContainerComponent;
        }
    });
    Object.defineProperty(exports, 'NzNotificationModule', {
        enumerable: true,
        get: function () {
            return notification.NzNotificationModule;
        }
    });
    Object.defineProperty(exports, 'NzNotificationService', {
        enumerable: true,
        get: function () {
            return notification.NzNotificationService;
        }
    });
    Object.defineProperty(exports, 'NzNotificationServiceModule', {
        enumerable: true,
        get: function () {
            return notification.NzNotificationServiceModule;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderAvatarDirective', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderAvatarDirective;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderBreadcrumbDirective', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderBreadcrumbDirective;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderComponent', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderComponent;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderContentDirective', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderContentDirective;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderExtraDirective', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderExtraDirective;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderFooterDirective', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderFooterDirective;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderModule', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderModule;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderSubtitleDirective', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderSubtitleDirective;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderTagDirective', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderTagDirective;
        }
    });
    Object.defineProperty(exports, 'NzPageHeaderTitleDirective', {
        enumerable: true,
        get: function () {
            return pageHeader.NzPageHeaderTitleDirective;
        }
    });
    Object.defineProperty(exports, 'NzPaginationComponent', {
        enumerable: true,
        get: function () {
            return pagination.NzPaginationComponent;
        }
    });
    Object.defineProperty(exports, 'NzPaginationModule', {
        enumerable: true,
        get: function () {
            return pagination.NzPaginationModule;
        }
    });
    Object.defineProperty(exports, 'NzPopconfirmComponent', {
        enumerable: true,
        get: function () {
            return popconfirm.NzPopconfirmComponent;
        }
    });
    Object.defineProperty(exports, 'NzPopconfirmDirective', {
        enumerable: true,
        get: function () {
            return popconfirm.NzPopconfirmDirective;
        }
    });
    Object.defineProperty(exports, 'NzPopconfirmModule', {
        enumerable: true,
        get: function () {
            return popconfirm.NzPopconfirmModule;
        }
    });
    Object.defineProperty(exports, 'NzPopoverComponent', {
        enumerable: true,
        get: function () {
            return popover.NzPopoverComponent;
        }
    });
    Object.defineProperty(exports, 'NzPopoverDirective', {
        enumerable: true,
        get: function () {
            return popover.NzPopoverDirective;
        }
    });
    Object.defineProperty(exports, 'NzPopoverModule', {
        enumerable: true,
        get: function () {
            return popover.NzPopoverModule;
        }
    });
    Object.defineProperty(exports, 'NzProgressComponent', {
        enumerable: true,
        get: function () {
            return progress.NzProgressComponent;
        }
    });
    Object.defineProperty(exports, 'NzProgressModule', {
        enumerable: true,
        get: function () {
            return progress.NzProgressModule;
        }
    });
    Object.defineProperty(exports, 'NzRadioButtonComponent', {
        enumerable: true,
        get: function () {
            return radio.NzRadioButtonComponent;
        }
    });
    Object.defineProperty(exports, 'NzRadioComponent', {
        enumerable: true,
        get: function () {
            return radio.NzRadioComponent;
        }
    });
    Object.defineProperty(exports, 'NzRadioGroupComponent', {
        enumerable: true,
        get: function () {
            return radio.NzRadioGroupComponent;
        }
    });
    Object.defineProperty(exports, 'NzRadioModule', {
        enumerable: true,
        get: function () {
            return radio.NzRadioModule;
        }
    });
    Object.defineProperty(exports, 'NzRateComponent', {
        enumerable: true,
        get: function () {
            return rate.NzRateComponent;
        }
    });
    Object.defineProperty(exports, 'NzRateItemComponent', {
        enumerable: true,
        get: function () {
            return rate.NzRateItemComponent;
        }
    });
    Object.defineProperty(exports, 'NzRateModule', {
        enumerable: true,
        get: function () {
            return rate.NzRateModule;
        }
    });
    Object.defineProperty(exports, 'NzResultComponent', {
        enumerable: true,
        get: function () {
            return result.NzResultComponent;
        }
    });
    Object.defineProperty(exports, 'NzResultContentDirective', {
        enumerable: true,
        get: function () {
            return result.NzResultContentDirective;
        }
    });
    Object.defineProperty(exports, 'NzResultExtraDirective', {
        enumerable: true,
        get: function () {
            return result.NzResultExtraDirective;
        }
    });
    Object.defineProperty(exports, 'NzResultIconDirective', {
        enumerable: true,
        get: function () {
            return result.NzResultIconDirective;
        }
    });
    Object.defineProperty(exports, 'NzResultModule', {
        enumerable: true,
        get: function () {
            return result.NzResultModule;
        }
    });
    Object.defineProperty(exports, 'NzResultSubtitleDirective', {
        enumerable: true,
        get: function () {
            return result.NzResultSubtitleDirective;
        }
    });
    Object.defineProperty(exports, 'NzResultTitleDirective', {
        enumerable: true,
        get: function () {
            return result.NzResultTitleDirective;
        }
    });
    Object.defineProperty(exports, 'θNzResultNotFoundComponent', {
        enumerable: true,
        get: function () {
            return result.θNzResultNotFoundComponent;
        }
    });
    Object.defineProperty(exports, 'θNzResultServerErrorComponent', {
        enumerable: true,
        get: function () {
            return result.θNzResultServerErrorComponent;
        }
    });
    Object.defineProperty(exports, 'θNzResultUnauthorizedComponent', {
        enumerable: true,
        get: function () {
            return result.θNzResultUnauthorizedComponent;
        }
    });
    Object.defineProperty(exports, 'NzFilterGroupOptionPipe', {
        enumerable: true,
        get: function () {
            return select.NzFilterGroupOptionPipe;
        }
    });
    Object.defineProperty(exports, 'NzFilterOptionPipe', {
        enumerable: true,
        get: function () {
            return select.NzFilterOptionPipe;
        }
    });
    Object.defineProperty(exports, 'NzOptionComponent', {
        enumerable: true,
        get: function () {
            return select.NzOptionComponent;
        }
    });
    Object.defineProperty(exports, 'NzOptionContainerComponent', {
        enumerable: true,
        get: function () {
            return select.NzOptionContainerComponent;
        }
    });
    Object.defineProperty(exports, 'NzOptionGroupComponent', {
        enumerable: true,
        get: function () {
            return select.NzOptionGroupComponent;
        }
    });
    Object.defineProperty(exports, 'NzOptionLiComponent', {
        enumerable: true,
        get: function () {
            return select.NzOptionLiComponent;
        }
    });
    Object.defineProperty(exports, 'NzSelectComponent', {
        enumerable: true,
        get: function () {
            return select.NzSelectComponent;
        }
    });
    Object.defineProperty(exports, 'NzSelectModule', {
        enumerable: true,
        get: function () {
            return select.NzSelectModule;
        }
    });
    Object.defineProperty(exports, 'NzSelectService', {
        enumerable: true,
        get: function () {
            return select.NzSelectService;
        }
    });
    Object.defineProperty(exports, 'NzSelectTopControlComponent', {
        enumerable: true,
        get: function () {
            return select.NzSelectTopControlComponent;
        }
    });
    Object.defineProperty(exports, 'NzSelectUnselectableDirective', {
        enumerable: true,
        get: function () {
            return select.NzSelectUnselectableDirective;
        }
    });
    Object.defineProperty(exports, 'defaultFilterOption', {
        enumerable: true,
        get: function () {
            return select.defaultFilterOption;
        }
    });
    Object.defineProperty(exports, 'NzSkeletonComponent', {
        enumerable: true,
        get: function () {
            return skeleton.NzSkeletonComponent;
        }
    });
    Object.defineProperty(exports, 'NzSkeletonModule', {
        enumerable: true,
        get: function () {
            return skeleton.NzSkeletonModule;
        }
    });
    Object.defineProperty(exports, 'Marks', {
        enumerable: true,
        get: function () {
            return slider.Marks;
        }
    });
    Object.defineProperty(exports, 'NzSliderComponent', {
        enumerable: true,
        get: function () {
            return slider.NzSliderComponent;
        }
    });
    Object.defineProperty(exports, 'NzSliderHandleComponent', {
        enumerable: true,
        get: function () {
            return slider.NzSliderHandleComponent;
        }
    });
    Object.defineProperty(exports, 'NzSliderMarksComponent', {
        enumerable: true,
        get: function () {
            return slider.NzSliderMarksComponent;
        }
    });
    Object.defineProperty(exports, 'NzSliderModule', {
        enumerable: true,
        get: function () {
            return slider.NzSliderModule;
        }
    });
    Object.defineProperty(exports, 'NzSliderStepComponent', {
        enumerable: true,
        get: function () {
            return slider.NzSliderStepComponent;
        }
    });
    Object.defineProperty(exports, 'NzSliderTrackComponent', {
        enumerable: true,
        get: function () {
            return slider.NzSliderTrackComponent;
        }
    });
    Object.defineProperty(exports, 'isConfigAObject', {
        enumerable: true,
        get: function () {
            return slider.isConfigAObject;
        }
    });
    Object.defineProperty(exports, 'isValueARange', {
        enumerable: true,
        get: function () {
            return slider.isValueARange;
        }
    });
    Object.defineProperty(exports, 'NzSpinComponent', {
        enumerable: true,
        get: function () {
            return spin.NzSpinComponent;
        }
    });
    Object.defineProperty(exports, 'NzSpinModule', {
        enumerable: true,
        get: function () {
            return spin.NzSpinModule;
        }
    });
    Object.defineProperty(exports, 'NzCountdownComponent', {
        enumerable: true,
        get: function () {
            return statistic.NzCountdownComponent;
        }
    });
    Object.defineProperty(exports, 'NzStatisticComponent', {
        enumerable: true,
        get: function () {
            return statistic.NzStatisticComponent;
        }
    });
    Object.defineProperty(exports, 'NzStatisticModule', {
        enumerable: true,
        get: function () {
            return statistic.NzStatisticModule;
        }
    });
    Object.defineProperty(exports, 'NzStatisticNumberComponent', {
        enumerable: true,
        get: function () {
            return statistic.NzStatisticNumberComponent;
        }
    });
    Object.defineProperty(exports, 'NzStepComponent', {
        enumerable: true,
        get: function () {
            return steps.NzStepComponent;
        }
    });
    Object.defineProperty(exports, 'NzStepsComponent', {
        enumerable: true,
        get: function () {
            return steps.NzStepsComponent;
        }
    });
    Object.defineProperty(exports, 'NzStepsModule', {
        enumerable: true,
        get: function () {
            return steps.NzStepsModule;
        }
    });
    Object.defineProperty(exports, 'NzSwitchComponent', {
        enumerable: true,
        get: function () {
            return _switch.NzSwitchComponent;
        }
    });
    Object.defineProperty(exports, 'NzSwitchModule', {
        enumerable: true,
        get: function () {
            return _switch.NzSwitchModule;
        }
    });
    Object.defineProperty(exports, 'NzTableComponent', {
        enumerable: true,
        get: function () {
            return table.NzTableComponent;
        }
    });
    Object.defineProperty(exports, 'NzTableModule', {
        enumerable: true,
        get: function () {
            return table.NzTableModule;
        }
    });
    Object.defineProperty(exports, 'NzTbodyDirective', {
        enumerable: true,
        get: function () {
            return table.NzTbodyDirective;
        }
    });
    Object.defineProperty(exports, 'NzTdComponent', {
        enumerable: true,
        get: function () {
            return table.NzTdComponent;
        }
    });
    Object.defineProperty(exports, 'NzThComponent', {
        enumerable: true,
        get: function () {
            return table.NzThComponent;
        }
    });
    Object.defineProperty(exports, 'NzTheadComponent', {
        enumerable: true,
        get: function () {
            return table.NzTheadComponent;
        }
    });
    Object.defineProperty(exports, 'NzTrDirective', {
        enumerable: true,
        get: function () {
            return table.NzTrDirective;
        }
    });
    Object.defineProperty(exports, 'NzVirtualScrollDirective', {
        enumerable: true,
        get: function () {
            return table.NzVirtualScrollDirective;
        }
    });
    Object.defineProperty(exports, 'NzTabBodyComponent', {
        enumerable: true,
        get: function () {
            return tabs.NzTabBodyComponent;
        }
    });
    Object.defineProperty(exports, 'NzTabChangeEvent', {
        enumerable: true,
        get: function () {
            return tabs.NzTabChangeEvent;
        }
    });
    Object.defineProperty(exports, 'NzTabComponent', {
        enumerable: true,
        get: function () {
            return tabs.NzTabComponent;
        }
    });
    Object.defineProperty(exports, 'NzTabDirective', {
        enumerable: true,
        get: function () {
            return tabs.NzTabDirective;
        }
    });
    Object.defineProperty(exports, 'NzTabLabelDirective', {
        enumerable: true,
        get: function () {
            return tabs.NzTabLabelDirective;
        }
    });
    Object.defineProperty(exports, 'NzTabLinkDirective', {
        enumerable: true,
        get: function () {
            return tabs.NzTabLinkDirective;
        }
    });
    Object.defineProperty(exports, 'NzTabSetComponent', {
        enumerable: true,
        get: function () {
            return tabs.NzTabSetComponent;
        }
    });
    Object.defineProperty(exports, 'NzTabsInkBarDirective', {
        enumerable: true,
        get: function () {
            return tabs.NzTabsInkBarDirective;
        }
    });
    Object.defineProperty(exports, 'NzTabsModule', {
        enumerable: true,
        get: function () {
            return tabs.NzTabsModule;
        }
    });
    Object.defineProperty(exports, 'NzTabsNavComponent', {
        enumerable: true,
        get: function () {
            return tabs.NzTabsNavComponent;
        }
    });
    Object.defineProperty(exports, 'NzTagComponent', {
        enumerable: true,
        get: function () {
            return tag.NzTagComponent;
        }
    });
    Object.defineProperty(exports, 'NzTagModule', {
        enumerable: true,
        get: function () {
            return tag.NzTagModule;
        }
    });
    Object.defineProperty(exports, 'NzTimePickerComponent', {
        enumerable: true,
        get: function () {
            return timePicker.NzTimePickerComponent;
        }
    });
    Object.defineProperty(exports, 'NzTimePickerModule', {
        enumerable: true,
        get: function () {
            return timePicker.NzTimePickerModule;
        }
    });
    Object.defineProperty(exports, 'NzTimePickerPanelComponent', {
        enumerable: true,
        get: function () {
            return timePicker.NzTimePickerPanelComponent;
        }
    });
    Object.defineProperty(exports, 'NzTimeValueAccessorDirective', {
        enumerable: true,
        get: function () {
            return timePicker.NzTimeValueAccessorDirective;
        }
    });
    Object.defineProperty(exports, 'NzTimelineComponent', {
        enumerable: true,
        get: function () {
            return timeline.NzTimelineComponent;
        }
    });
    Object.defineProperty(exports, 'NzTimelineItemComponent', {
        enumerable: true,
        get: function () {
            return timeline.NzTimelineItemComponent;
        }
    });
    Object.defineProperty(exports, 'NzTimelineModule', {
        enumerable: true,
        get: function () {
            return timeline.NzTimelineModule;
        }
    });
    Object.defineProperty(exports, 'NzToolTipComponent', {
        enumerable: true,
        get: function () {
            return tooltip.NzToolTipComponent;
        }
    });
    Object.defineProperty(exports, 'NzToolTipModule', {
        enumerable: true,
        get: function () {
            return tooltip.NzToolTipModule;
        }
    });
    Object.defineProperty(exports, 'NzTooltipBaseComponent', {
        enumerable: true,
        get: function () {
            return tooltip.NzTooltipBaseComponent;
        }
    });
    Object.defineProperty(exports, 'NzTooltipBaseComponentLegacy', {
        enumerable: true,
        get: function () {
            return tooltip.NzTooltipBaseComponentLegacy;
        }
    });
    Object.defineProperty(exports, 'NzTooltipBaseDirective', {
        enumerable: true,
        get: function () {
            return tooltip.NzTooltipBaseDirective;
        }
    });
    Object.defineProperty(exports, 'NzTooltipDirective', {
        enumerable: true,
        get: function () {
            return tooltip.NzTooltipDirective;
        }
    });
    Object.defineProperty(exports, 'NzTransferComponent', {
        enumerable: true,
        get: function () {
            return transfer.NzTransferComponent;
        }
    });
    Object.defineProperty(exports, 'NzTransferListComponent', {
        enumerable: true,
        get: function () {
            return transfer.NzTransferListComponent;
        }
    });
    Object.defineProperty(exports, 'NzTransferModule', {
        enumerable: true,
        get: function () {
            return transfer.NzTransferModule;
        }
    });
    Object.defineProperty(exports, 'NzTransferSearchComponent', {
        enumerable: true,
        get: function () {
            return transfer.NzTransferSearchComponent;
        }
    });
    Object.defineProperty(exports, 'NzTreeComponent', {
        enumerable: true,
        get: function () {
            return tree.NzTreeComponent;
        }
    });
    Object.defineProperty(exports, 'NzTreeModule', {
        enumerable: true,
        get: function () {
            return tree.NzTreeModule;
        }
    });
    Object.defineProperty(exports, 'NzTreeNodeComponent', {
        enumerable: true,
        get: function () {
            return tree.NzTreeNodeComponent;
        }
    });
    Object.defineProperty(exports, 'NzTreeService', {
        enumerable: true,
        get: function () {
            return tree.NzTreeService;
        }
    });
    Object.defineProperty(exports, 'NzTreeServiceFactory', {
        enumerable: true,
        get: function () {
            return tree.NzTreeServiceFactory;
        }
    });
    Object.defineProperty(exports, 'NzTreeSelectComponent', {
        enumerable: true,
        get: function () {
            return treeSelect.NzTreeSelectComponent;
        }
    });
    Object.defineProperty(exports, 'NzTreeSelectModule', {
        enumerable: true,
        get: function () {
            return treeSelect.NzTreeSelectModule;
        }
    });
    Object.defineProperty(exports, 'NzTreeSelectService', {
        enumerable: true,
        get: function () {
            return treeSelect.NzTreeSelectService;
        }
    });
    Object.defineProperty(exports, 'higherOrderServiceFactory', {
        enumerable: true,
        get: function () {
            return treeSelect.higherOrderServiceFactory;
        }
    });
    Object.defineProperty(exports, 'NzTextCopyComponent', {
        enumerable: true,
        get: function () {
            return typography.NzTextCopyComponent;
        }
    });
    Object.defineProperty(exports, 'NzTextEditComponent', {
        enumerable: true,
        get: function () {
            return typography.NzTextEditComponent;
        }
    });
    Object.defineProperty(exports, 'NzTypographyComponent', {
        enumerable: true,
        get: function () {
            return typography.NzTypographyComponent;
        }
    });
    Object.defineProperty(exports, 'NzTypographyModule', {
        enumerable: true,
        get: function () {
            return typography.NzTypographyModule;
        }
    });
    Object.defineProperty(exports, 'NzUploadBtnComponent', {
        enumerable: true,
        get: function () {
            return upload.NzUploadBtnComponent;
        }
    });
    Object.defineProperty(exports, 'NzUploadComponent', {
        enumerable: true,
        get: function () {
            return upload.NzUploadComponent;
        }
    });
    Object.defineProperty(exports, 'NzUploadListComponent', {
        enumerable: true,
        get: function () {
            return upload.NzUploadListComponent;
        }
    });
    Object.defineProperty(exports, 'NzUploadModule', {
        enumerable: true,
        get: function () {
            return upload.NzUploadModule;
        }
    });
    Object.defineProperty(exports, 'VERSION', {
        enumerable: true,
        get: function () {
            return version.VERSION;
        }
    });
    exports.NgZorroAntdModule = NgZorroAntdModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd.umd.js.map
