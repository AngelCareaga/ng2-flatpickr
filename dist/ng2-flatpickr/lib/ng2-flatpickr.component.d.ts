import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { FlatpickrOptions } from './flatpickr-options.interface';
import * as i0 from "@angular/core";
export declare class Ng2FlatpickrComponent implements AfterViewInit, ControlValueAccessor, OnChanges {
    flatpickr: Object | undefined;
    private _tabindex;
    onTouchedFn: Function;
    private defaultFlatpickrOptions;
    flatpickrElement: any;
    config: FlatpickrOptions | undefined;
    placeholder: string;
    addClass: string;
    setDate: string | Date | undefined;
    get tabindex(): number;
    set tabindex(ti: number);
    hideButton: boolean;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    propagateChange: (_: any) => void;
    setDateFromInput(date: any): void;
    setAltInputPlaceholder(placeholder: string): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onFocus(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2FlatpickrComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Ng2FlatpickrComponent, "ng2-flatpickr", never, { "config": { "alias": "config"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "addClass": { "alias": "addClass"; "required": false; }; "setDate": { "alias": "setDate"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "hideButton": { "alias": "hideButton"; "required": false; }; }, {}, never, ["*"], false, never>;
}
