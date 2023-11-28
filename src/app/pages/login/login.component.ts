import { LoadingService } from './../../shared/services/loading.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
//import { AuthService } from './auth.service';

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
    private router: Router
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
        this.router.navigate(['/listagem-funcionarios']);
        this.LoadingService.closeLoading();
      }, error: (err) => {
        this.LoadingService.closeLoading(); 
        window.alert("CPF ou senha incorretos!")
      },
    });
  }
}
