import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformacoesUsuarioComponent } from './informacoes-usuario/informacoes-usuario.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  employeeId: string = '';
  employee!: Employee;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];
    this.getEmployeeById();
  }

  getEmployeeById() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (response) => {
        this.loadingService.closeLoading();

        if (response) {
          this.employee = response as Employee;
        }
      },
      error: (err) => {
        this.loadingService.closeLoading();
      },
    });
  }

  openModal() {
    let test = this.dialog.open(InformacoesUsuarioComponent, {
      panelClass: 'dialog',
    });
  }

  logout() {
    this.authService.logout();
  }
}
