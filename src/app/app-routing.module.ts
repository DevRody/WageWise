
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FolhaComponent } from './pages/folha/folha.component';
import { ListagemFuncionariosComponent } from './pages/listagem-funcionarios/listagem-funcionarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { InformacoesUsuarioComponent } from './pages/usuario/informacoes-usuario/informacoes-usuario.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'folha',component:FolhaComponent},
  {path:'listagem-funcionarios',component:ListagemFuncionariosComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'usuario', component:InformacoesUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
