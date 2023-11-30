import { LoadingService } from './../../shared/services/loading.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    document: '',
    password: '',
  };

  showPassword = false;
  showPasswordTooltip = 'Mostrar senha';

  constructor(
    private authService: AuthService,
    private LoadingService: LoadingService,
    private router: Router,
    private alertService: AlertService
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onMouseOverIcon() {
    this.showPassword
      ? (this.showPasswordTooltip = 'Ocultar senha')
      : (this.showPasswordTooltip = 'Mostrar senha');
  }

  onSubmit() {
    this.LoadingService.openLoading();
    this.authService.login(this.user).subscribe({
      next: (response) => {
        let info = this.authService.decodeToken();

        if (info?.role === Role.ADMIN) {
          this.router.navigate(['/listagem-funcionarios']);
        } else {
          this.router.navigate([`/usuario/${info.employeeId}`]);
        }

        this.LoadingService.closeLoading();
      },
      error: (err) => {
        this.LoadingService.closeLoading();
        this.alertService.openAlert('CPF ou senha incorretos!', 'success');
      },
    });
  }
}

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
