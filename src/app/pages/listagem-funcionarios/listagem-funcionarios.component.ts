import { Subject, debounceTime } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Employee } from 'src/app/interfaces/employee';
import { Address } from 'src/app/interfaces/adress';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.scss'],
})
export class ListagemFuncionariosComponent implements OnInit {
  employees: Employee[] = [];
  count: number = 0;

  filter = {
    search: '',
    perPage: 100,
    page: 0,
  };

  debounceSearch = new Subject();

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();

    this.debounceSearch.pipe(debounceTime(500)).subscribe({
      next: (response) => {
        this.getEmployeeListByFilter();
      },
    });
  }

  getEmployeeList() {
    // this.loadingService.openLoading();
    this.employeeService.getEmployeeList().subscribe({
      next: (response) => {
        if (response) {
          this.employees = response as Employee[];
          this.count = this.employees.length;
        }
      },
    });
  }

  getEmployeeListByFilter() {
    this.loadingService.openLoading();
    this.employeeService.getEmployeeListByFilter(this.filter).subscribe({
      next: (response: any) => {
        if (response) {
          this.employees = response.data as Employee[];
          this.count = response.count;
        }
        this.loadingService.closeLoading();
      },
    });
  }

  openModal(employee: any = null) {
    let test = this.dialog.open(CadastroComponent, {
      panelClass: 'dialog',
      data: { employee },
    });
    test.afterClosed().subscribe({
      next: (response: Employee | null) => {
        if (response) {
          let index = this.employees.findIndex(
            (item) => item.id === response.id
          );

          let text = '';

          if (index !== -1) {
            this.employees[index] = response;
            text = 'editado';
          } else {
            this.employees.push(response);
            text = 'criado';
          }

          window.alert(`Funcionário ${text} com sucesso`);
        }
      },
    });
  }

  deleteEmployee(id: number) {
    this.loadingService.openLoading();
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        let index = this.employees.findIndex((item) => item.id === id);

        if (index !== -1) this.employees.splice(index, 1);

        window.alert('Funcionário excluído com sucesso!');
        this.loadingService.closeLoading();
      },
    });
  }

  logout() {
    this.authService.logout();
  }
}
