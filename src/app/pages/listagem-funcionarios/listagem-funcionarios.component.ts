import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroComponent } from './cadastro/cadastro.component';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.scss']
})
export class ListagemFuncionariosComponent {
  
  constructor(private dialog:MatDialog) {

  }
  
  openModal() {
    this.dialog.open(CadastroComponent,{
      panelClass:"dialog"
    })
    
  }

  

}
