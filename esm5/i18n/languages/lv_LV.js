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
import Calendar from './calendar/lv_LV';
import DatePicker from './date-picker/lv_LV';
import Pagination from './pagination/lv_LV';
import TimePicker from './time-picker/lv_LV';
export default {
    locale: 'lv',
    Pagination: Pagination,
    DatePicker: DatePicker,
    TimePicker: TimePicker,
    Calendar: Calendar,
    Table: {
        filterTitle: 'Filtrēšanas izvēlne',
        filterConfirm: 'OK',
        filterReset: 'Atiestatīt',
        selectAll: 'Atlasiet pašreizējo lapu',
        selectInvert: 'Pārvērst pašreizējo lapu'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Atcelt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Atcelt'
    },
    Transfer: {
        searchPlaceholder: 'Meklēt šeit',
        itemUnit: 'vienumu',
        itemsUnit: 'vienumus'
    },
    Upload: {
        uploading: 'Augšupielāde...',
        removeFile: 'Noņemt failu',
        uploadError: 'Augšupielādes kļūda',
        previewFile: 'Priekšskatiet failu'
    },
    Empty: {
        description: 'Nav datu'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHZfTFYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvbHZfTFYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLFlBQUE7SUFDVixVQUFVLFlBQUE7SUFDVixVQUFVLFlBQUE7SUFDVixRQUFRLFVBQUE7SUFDUixLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFdBQVcsRUFBRSxZQUFZO1FBQ3pCLFNBQVMsRUFBRSwwQkFBMEI7UUFDckMsWUFBWSxFQUFFLDBCQUEwQjtLQUN6QztJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsaUJBQWlCLEVBQUUsYUFBYTtRQUNoQyxRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsVUFBVTtLQUN0QjtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsVUFBVSxFQUFFLGNBQWM7UUFDMUIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxXQUFXLEVBQUUscUJBQXFCO0tBQ25DO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFVBQVU7S0FDeEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL2x2X0xWJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vZGF0ZS1waWNrZXIvbHZfTFYnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uL2x2X0xWJztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvbHZfTFYnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvY2FsZTogJ2x2JyxcbiAgUGFnaW5hdGlvbixcbiAgRGF0ZVBpY2tlcixcbiAgVGltZVBpY2tlcixcbiAgQ2FsZW5kYXIsXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdGaWx0csSTxaFhbmFzIGl6dsSTbG5lJyxcbiAgICBmaWx0ZXJDb25maXJtOiAnT0snLFxuICAgIGZpbHRlclJlc2V0OiAnQXRpZXN0YXTEq3QnLFxuICAgIHNlbGVjdEFsbDogJ0F0bGFzaWV0IHBhxaFyZWl6xJNqbyBsYXB1JyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdQxIFydsSTcnN0IHBhxaFyZWl6xJNqbyBsYXB1J1xuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQXRjZWx0JyxcbiAgICBqdXN0T2tUZXh0OiAnT0snXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0F0Y2VsdCdcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ01la2zEk3QgxaFlaXQnLFxuICAgIGl0ZW1Vbml0OiAndmllbnVtdScsXG4gICAgaXRlbXNVbml0OiAndmllbnVtdXMnXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ0F1Z8WhdXBpZWzEgWRlLi4uJyxcbiAgICByZW1vdmVGaWxlOiAnTm/FhmVtdCBmYWlsdScsXG4gICAgdXBsb2FkRXJyb3I6ICdBdWfFoXVwaWVsxIFkZXMga8S8xatkYScsXG4gICAgcHJldmlld0ZpbGU6ICdQcmlla8Whc2thdGlldCBmYWlsdSdcbiAgfSxcbiAgRW1wdHk6IHtcbiAgICBkZXNjcmlwdGlvbjogJ05hdiBkYXR1J1xuICB9XG59O1xuIl19