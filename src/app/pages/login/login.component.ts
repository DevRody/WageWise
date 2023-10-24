import { Component } from '@angular/core';
//import { AuthService } from './caminho-do-seu-servico-de-autenticacao';

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

  //constructor(private authService: AuthService) { } // Injete o serviço de autenticação no construtor

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onMouseOverIcon() {
    this.showPassword
      ? (this.showPasswordTooltip = 'Ocultar senha')
      : (this.showPasswordTooltip = 'Mostrar senha');
  }

  onSubmit() {
    // adicionar a lógica para enviar a solicitação de login ao servidor
    console.log('Usuário: ', this.user.username);
    console.log('Senha: ', this.user.password);
    // Exemplo de chamada a um serviço de autenticação
    // this.authService.login(this.user.username, this.user.password);
  }
}
