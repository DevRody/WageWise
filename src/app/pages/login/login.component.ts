import { Component } from '@angular/core';
//import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  showPassword = false;
  showPasswordTooltip = 'Mostrar senha'; 

  //constructor(private authService: AuthService) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onMouseOverIcon() {
    this.showPassword
      ? (this.showPasswordTooltip = 'Ocultar senha')
      : (this.showPasswordTooltip = 'Mostrar senha');
  }

  onSubmit() {
  //  this.authService.login(this.user.username, this.user.password)
    console.log('Usuário: ', this.user.username);
    console.log('Senha: ', this.user.password);
    
  }
}
