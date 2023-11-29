import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FolhaComponent } from './pages/folha/folha.component';
import { ListagemFuncionariosComponent } from './pages/listagem-funcionarios/listagem-funcionarios.component';

import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { InformacoesUsuarioComponent } from './pages/usuario/informacoes-usuario/informacoes-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listagem-funcionarios' },
  { path: 'auth', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'folha', component: FolhaComponent, canActivate: [authGuard] },
  {
    path: 'listagem-funcionarios',
    component: ListagemFuncionariosComponent,
    canActivate: [authGuard],
  },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    canActivate: [authGuard],
  },
  {
    path: 'usuario',
    component: InformacoesUsuarioComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
