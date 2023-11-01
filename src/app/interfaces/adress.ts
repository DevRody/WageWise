import { FormControl } from "@angular/forms";

export interface Address {
    id: number;
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    neighborhood: string;
    houseNumber: string;
}

export interface AddressForm {
    id: FormControl<number | null>;
    streetAddress: FormControl<string>;
    city: FormControl<string>;
    state: FormControl<string>;
    postalCode: FormControl<string>;
    neighborhood: FormControl<string>;
    houseNumber: FormControl<string>;
}