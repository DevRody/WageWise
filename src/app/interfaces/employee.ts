
import { Address, AddressForm } from './adress';
import { FormControl, FormGroup } from '@angular/forms';

export interface Employee {
    id: number;
    name: string;
    email: string;
    document: string;
    jobTitle: string;
    baseSalary: number;
    admissionDate: string;
    phone: string;
    birthDate: string;
    address: Address;
}

export interface EmployeeForm {
    id: FormControl<number | null>;
    name: FormControl<string>;
    email: FormControl<string>;
    document: FormControl<string>;
    jobTitle: FormControl<string>;
    baseSalary: FormControl<number>;
    admissionDate: FormControl<string>;
    phone: FormControl<string>;
    birthDate: FormControl<string>;
    address: FormGroup<AddressForm>;
}