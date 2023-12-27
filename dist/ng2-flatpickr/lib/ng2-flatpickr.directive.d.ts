import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { FlatpickrOptions } from './flatpickr-options.interface';
import { FlatpickrEvent } from './flatpickr-event.interface';
import { FlatpickrInstance } from './flatpickr-instance';
import { Subscription } from 'rxjs';
import { ControlContainer, FormControl, NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class Ng2FlatpickrDirective implements AfterViewInit, OnDestroy, OnInit, OnChanges {
    protected parent: ControlContainer;
    protected ngControl: NgControl;
    protected element: ElementRef;
    protected renderer: Renderer2;
    /**
     * The flatpickr configuration as a single object of values.
     *
     * See https://chmln.github.io/flatpickr/options/ for full list.
     */
    flatpickrOptions: FlatpickrOptions | undefined;
    /**
     * Placeholder for input field.
     *
     * Default:  null
     */
    placeholder: string | undefined;
    /**
     * Exactly the same as date format, but for the altInput field.
     *
     * Default:  "F j, Y"
     */
    flatpickrAltFormat: string | undefined;
    /**
     * Show the user a readable date (as per altFormat), but return something
     * totally different to the server.
     *
     * Default:  false
     */
    flatpickrAltInput: boolean | undefined;
    /**
     * This class will be added to the input element created by the altInput
     * option.
     *
     * Default:  ""
     */
    flatpickrAltInputClass: string | undefined;
    /**
     * Allows the user to enter a date directly input the input field. By
     * default, direct entry is disabled.
     *
     * Default:  false
     */
    flatpickrAllowInput: boolean | undefined;
    /**
     * Instead of body, appends the calendar to the specified node instead.
     *
     * Default:  null
     */
    flatpickrAppendTo: any;
    /**
     * Whether clicking on the input should open the picker.
     * You could disable this if you wish to open the calendar manually
     * with.open().
     *
     * Default:  true
     */
    flatpickrClickOpens: boolean | undefined;
    /**
     * A string of characters which are used to define how the date will be
     * displayed in the input box.
     * See https://chmln.github.io/flatpickr/formatting/ for supported tokens.
     *
     * Default:  "Y-m-d"
     */
    flatpickrDateFormat: string | undefined;
    /**
     * Sets the initial selected date(s).
     *
     * If you're using {mode: "multiple"} or a range calendar supply an Array of
     * Date objects or an Array of date strings which follow your dateFormat.
     *
     * Otherwise, you can supply a single Date object or a date string.
     *
     * Default:  null
     */
    flatpickrDefaultDate: string | Date | string[] | Date[] | undefined;
    /**
     * Disable an array of specific dates, date ranges, or functions to disable
     * dates. See https://chmln.github.io/flatpickr/examples/#disabling-specific-dates
     *
     * Default:  []
     */
    flatpickrDisable: string[] | Date[] | Function | undefined;
    /**
     * Set disableMobile to true to always use the non-native picker. By
     * default, Flatpickr utilizes native datetime widgets unless certain
     * options (e.g. disable) are used.
     *
     * Default:  false
     */
    flatpickrDisableMobile: boolean | undefined;
    /**
     * Enable an array of specific dates, date ranges, or functions to enable
     * dates. See https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few
     *
     * Default:  []
     */
    flatpickrEnable: string[] | Date[] | Function | undefined;
    /**
     * Enables time picker.
     *
     * Default:  false
     */
    flatpickrEnableTime: boolean | undefined;
    /**
     * Enables seconds in the time picker.
     *
     * Default:  false
     */
    flatpickrEnableSeconds: boolean | undefined;
    /**
     * Adjusts the step for the hour input (incl. scrolling).
     *
     * Default:  1
     */
    flatpickrHourIncrement: number | undefined;
    /**
     * Displays the calendar inline.
     *
     * Default:  false
     */
    flatpickrInline: boolean | undefined;
    /**
     * Use a specific locale for the flatpickr instance.
     *
     * Default:  null
     */
    flatpickrLocale: Object | undefined;
    /**
     * The maximum date that a user can pick to (inclusive).
     *
     * Default:  null
     */
    flatpickrMaxDate: string | Date | undefined;
    /**
     * The minimum date that a user can start picking from (inclusive).
     *
     * Default:  null
     */
    flatpickrMinDate: string | Date | undefined;
    /**
     * Adjusts the step for the minute input (incl. scrolling).
     *
     * Default:  5
     */
    flatpickrMinuteIncrement: number | undefined;
    /**
     * "single", "multiple", or "range"
     *
     * Default:  "single"
     */
    flatpickrMode: string | undefined;
    /**
     * HTML for the arrow icon, used to switch months.
     *
     * Default:  ">"
     */
    flatpickrNextArrow: string | undefined;
    /**
     * Hides the day selection in calendar. Use it along with enableTime to
     * create a time picker.
     *
     * Default:  false
     */
    flatpickrNoCalendar: boolean | undefined;
    /**
     * Function that expects a date string and must return a Date object.
     *
     * Default:  false
     */
    flatpickrParseDate: Function | undefined;
    /**
     * HTML for the left arrow icon.
     *
     * Default:  "<"
     */
    flatpickrPrevArrow: string | undefined;
    /**
     * Show the month using the shorthand version (ie, Sep instead of September).
     *
     * Default:  false
     */
    flatpickrShorthandCurrentMonth: boolean | undefined;
    /**
     * Position the calendar inside the wrapper and next to the input element
     * (Leave false unless you know what you're doing).
     *
     * Default:  false
     */
    flatpickrStatic: boolean | undefined;
    /**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     *
     * Default:  false
     */
    flatpickrTime_24hr: boolean | undefined;
    flatpickrUtc: boolean | undefined;
    /**
     * Enables display of week numbers in calendar.
     *
     * Default:  false
     */
    flatpickrWeekNumbers: boolean | undefined;
    /**
     * Custom elements and input groups.
     *
     * Default:  false
     */
    flatpickrWrap: boolean | undefined;
    /**
     * onChange gets triggered when the user selects a date, or changes the time on a selected date.
     *
     * Default:  null
     */
    flatpickrOnChange: EventEmitter<FlatpickrEvent>;
    /**
     * onClose gets triggered when the calendar is closed.
     *
     * Default:  null
     */
    flatpickrOnClose: EventEmitter<FlatpickrEvent>;
    /**
     * onOpen gets triggered when the calendar is opened.
     *
     * Default:  null
     */
    flatpickrOnOpen: EventEmitter<FlatpickrEvent>;
    /**
     * onReady gets triggered once the calendar is in a ready state.
     *
     * Default:  null
     */
    flatpickrOnReady: EventEmitter<FlatpickrEvent>;
    /** Allow double-clicking on the control to open/close it. */
    onClick(): void;
    protected globalOnChange: Function | undefined;
    protected globalOnClose: Function | undefined;
    protected globalOnOpen: Function | undefined;
    protected globalOnReady: Function | undefined;
    protected flatpickr: FlatpickrInstance | undefined;
    protected formControlListener: Subscription | undefined;
    /** Allow access properties using index notation */
    [key: string]: any;
    constructor(parent: ControlContainer, ngControl: NgControl, element: ElementRef, renderer: Renderer2);
    get control(): FormControl;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    /**
     * Fire off the event emitter for the directive element, and also for the
     * global onChange callback, if defined.
     */
    protected eventOnChange(selectedDates: Date[], dateStr: string, instance: Object): void;
    /**
     * Fire off the event emitter for the directive element, and also for the
     * global onClose callback, if defined.
     */
    protected eventOnClose(selectedDates: Date[], dateStr: string, instance: Object): void;
    /**
     * Fire off the event emitter for the directive element, and also for the
     * global onOpen callback, if defined.
     */
    protected eventOnOpen(selectedDates: Date[], dateStr: string, instance: Object): void;
    /**
     * Fire off the event emitter for the directive element, and also for the
     * global onReady callback, if defined.
     */
    protected eventOnReady(selectedDates: Date[], dateStr: string, instance: Object): void;
    /**
     * Return the configuration value for option {option}, or {defaultValue} if it
     * doesn't exist.
     */
    protected getOption(option: string, defaultValue?: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2FlatpickrDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Ng2FlatpickrDirective, "[flatpickr]", ["ng2-flatpickr"], { "flatpickrOptions": { "alias": "flatpickr"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "flatpickrAltFormat": { "alias": "altFormat"; "required": false; }; "flatpickrAltInput": { "alias": "altInput"; "required": false; }; "flatpickrAltInputClass": { "alias": "altInputClass"; "required": false; }; "flatpickrAllowInput": { "alias": "allowInput"; "required": false; }; "flatpickrAppendTo": { "alias": "appendTo"; "required": false; }; "flatpickrClickOpens": { "alias": "clickOpens"; "required": false; }; "flatpickrDateFormat": { "alias": "dateFormat"; "required": false; }; "flatpickrDefaultDate": { "alias": "defaultDate"; "required": false; }; "flatpickrDisable": { "alias": "disable"; "required": false; }; "flatpickrDisableMobile": { "alias": "disableMobile"; "required": false; }; "flatpickrEnable": { "alias": "enable"; "required": false; }; "flatpickrEnableTime": { "alias": "enableTime"; "required": false; }; "flatpickrEnableSeconds": { "alias": "enableSeconds"; "required": false; }; "flatpickrHourIncrement": { "alias": "hourIncrement"; "required": false; }; "flatpickrInline": { "alias": "inline"; "required": false; }; "flatpickrLocale": { "alias": "locale"; "required": false; }; "flatpickrMaxDate": { "alias": "maxDate"; "required": false; }; "flatpickrMinDate": { "alias": "minDate"; "required": false; }; "flatpickrMinuteIncrement": { "alias": "minuteIncrement"; "required": false; }; "flatpickrMode": { "alias": "mode"; "required": false; }; "flatpickrNextArrow": { "alias": "nextArrow"; "required": false; }; "flatpickrNoCalendar": { "alias": "noCalendar"; "required": false; }; "flatpickrParseDate": { "alias": "parseDate"; "required": false; }; "flatpickrPrevArrow": { "alias": "prevArrow"; "required": false; }; "flatpickrShorthandCurrentMonth": { "alias": "shorthandCurrentMonth"; "required": false; }; "flatpickrStatic": { "alias": "static"; "required": false; }; "flatpickrTime_24hr": { "alias": "time_24hr"; "required": false; }; "flatpickrUtc": { "alias": "utc"; "required": false; }; "flatpickrWeekNumbers": { "alias": "weekNumbers"; "required": false; }; "flatpickrWrap": { "alias": "wrap"; "required": false; }; }, { "flatpickrOnChange": "onChange"; "flatpickrOnClose": "onClose"; "flatpickrOnOpen": "onOpen"; "flatpickrOnReady": "onReady"; }, never, never, false, never>;
}
