import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressForm } from 'src/app/interfaces/adress';
import { EmployeeForm } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  form!:FormGroup<EmployeeForm>;

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.form = new FormGroup<EmployeeForm>({
      id: new FormControl(null),
      name: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
      email: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.email]}),
      document: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
      jobTitle: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
      baseSalary: new FormControl(0, {nonNullable:true, validators:[Validators.required]}),
      admissionDate: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
      phone: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
      birthDate: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
      address: new FormGroup<AddressForm>({
        id: new FormControl(null),
        streetAddress: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
        city: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
        state: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
        postalCode: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
        neighborhood: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
        houseNumber: new FormControl('', {nonNullable:true, validators:[Validators.required]}),
      })
    })
  }

  handleForm() {
    console.log(this.form)
  }


}
