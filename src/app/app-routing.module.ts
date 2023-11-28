import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FolhaComponent } from './pages/folha/folha.component';
import { ListagemFuncionariosComponent } from './pages/listagem-funcionarios/listagem-funcionarios.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'folha' },
  { path: 'auth', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'folha', component: FolhaComponent, canActivate: [authGuard] },
  {
    path: 'listagem-funcionarios',
    component: ListagemFuncionariosComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
