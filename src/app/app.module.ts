import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FolhaComponent } from './pages/folha/folha.component';
import { CadastroComponent } from './pages/listagem-funcionarios/cadastro/cadastro.component';
import { ListagemFuncionariosComponent } from './pages/listagem-funcionarios/listagem-funcionarios.component';

import { LoadingComponent } from './shared/components/loading/loading.component';
import { RequestInterceptor } from './interceptors/request.interceptor';

import { UsuarioComponent } from './pages/usuario/usuario.component';
import { InformacoesUsuarioComponent } from './pages/usuario/informacoes-usuario/informacoes-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FolhaComponent,
    CadastroComponent,
    ListagemFuncionariosComponent,
    UsuarioComponent,
    InformacoesUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoadingComponent,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
