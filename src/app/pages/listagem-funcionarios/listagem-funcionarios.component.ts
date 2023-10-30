import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Employee } from 'src/app/interfaces/employee';
import { Adress } from 'src/app/interfaces/adress';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.scss'],
})
export class ListagemFuncionariosComponent {
  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(CadastroComponent, {
      panelClass: 'dialog',
    });
  }

  employees: Employee[] = [
    {
      id: 1,
      name: 'Rodrigo',
      email: 'rodrigobarbosa.p99@gmail.com',
      document: '475.958.528-11',
      jobTitle: 'Desenvolvedor',
      baseSalary: 3000,
      admissionDate: '30/10/2023',
      phone: '(16) 993131518',
      birthDate: '16/06/1999',
      adress: {
        id: 1,
        streetAdress: 'Osvaldo Dalpino',
        city: 'Batatais',
        state: 'SP',
        postalCode: '14305-242',
        neighborhood: 'Jardim São Carlos',
        houseNumber: '662',
      },
    },
  ];
}
