import { Adress } from './adress';

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
    adress: Adress;
}