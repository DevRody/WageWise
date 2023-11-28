import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { iif } from 'rxjs';
import { AddressForm } from 'src/app/interfaces/adress';
import { Employee, EmployeeForm } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  employee!: Employee;
  form!: FormGroup<EmployeeForm>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee } | null,
    public dialogRef: MatDialogRef<CadastroComponent>,
    private employeeService: EmployeeService,
    private loadingService: LoadingService
  ) {
    if (data?.employee) this.employee = data?.employee;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup<EmployeeForm>({
      id: new FormControl(null),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      document: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      jobTitle: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      baseSalary: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      admissionDate: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      phone: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      birthDate: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      address: new FormGroup<AddressForm>({
        id: new FormControl(null),
        streetAddress: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        city: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        state: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        postalCode: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        neighborhood: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        houseNumber: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
      }),
    });

    if (this.employee) {
      this.form.patchValue(this.employee);
    }
  }

  handleForm() {
    if (this.form.valid) {
      let employee = this.form.getRawValue() as Employee;

      this.saveEmployee(employee);
    }
  }

  saveEmployee(employee: Employee) {
    this.loadingService.openLoading();

    let save$ = iif(
      () => !employee.id,
      this.employeeService.createEmployee(employee),
      this.employeeService.updateEmployee(employee)
    );

    save$.subscribe({
      next: (response) => {
        this.dialogRef.close(response ? response : employee);
        this.loadingService.closeLoading();
      },
    });
  }
}
