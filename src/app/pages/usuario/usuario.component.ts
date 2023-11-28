import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformacoesUsuarioComponent } from './informacoes-usuario/informacoes-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent {
  constructor(private dialog: MatDialog) {}

  openModal() {
    let test = this.dialog.open(InformacoesUsuarioComponent, {
      panelClass: 'dialog',
    });
  }
}
