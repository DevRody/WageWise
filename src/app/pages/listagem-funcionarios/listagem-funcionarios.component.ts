import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Employee } from 'src/app/interfaces/employee';
import { Address } from 'src/app/interfaces/adress';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.scss'],
})
export class ListagemFuncionariosComponent {
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  openModal() {
    let test = this.dialog.open(CadastroComponent, {
      panelClass: 'dialog',
    });
    test.afterClosed().subscribe({
      next: (response: Employee) => {
        this.employees.push(response);
      },
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
      address: {
        id: 1,
        streetAddress: 'Osvaldo Dalpino',
        city: 'Batatais',
        state: 'SP',
        postalCode: '14305-242',
        neighborhood: 'Jardim São Carlos',
        houseNumber: '662',
      },
    },
    {
      id: 2,
      name: 'Ana',
      email: 'ana.smith@example.com',
      document: '123.456.789-00',
      jobTitle: 'Designer',
      baseSalary: 4000,
      admissionDate: '15/11/2023',
      phone: '(123) 456-7890',
      birthDate: '25/08/1990',
      address: {
        id: 2,
        streetAddress: 'Elm Street',
        city: 'Springfield',
        state: 'IL',
        postalCode: '62701',
        neighborhood: 'Downtown',
        houseNumber: '123',
      },
    },
    {
      id: 3,
      name: 'Maria',
      email: 'maria.johnson@example.com',
      document: '987.654.321-99',
      jobTitle: 'Contador',
      baseSalary: 4500,
      admissionDate: '20/09/2023',
      phone: '(555) 123-4567',
      birthDate: '10/02/1985',
      address: {
        id: 3,
        streetAddress: 'Maple Avenue',
        city: 'Maplewood',
        state: 'NJ',
        postalCode: '07040',
        neighborhood: 'Maple Heights',
        houseNumber: '456',
      },
    },
    {
      id: 4,
      name: 'Carlos',
      email: 'carlos.doe@example.com',
      document: '333.222.111-77',
      jobTitle: 'Engenheiro',
      baseSalary: 5500,
      admissionDate: '05/12/2023',
      phone: '(999) 888-7777',
      birthDate: '03/04/1980',
      address: {
        id: 4,
        streetAddress: 'Main Street',
        city: 'Hometown',
        state: 'CA',
        postalCode: '12345',
        neighborhood: 'Downtown',
        houseNumber: '789',
      },
    },
    {
      id: 5,
      name: 'Luisa',
      email: 'luisa.brown@example.com',
      document: '555.444.333-88',
      jobTitle: 'Médica',
      baseSalary: 6000,
      admissionDate: '10/01/2023',
      phone: '(777) 666-5555',
      birthDate: '15/07/1975',
      address: {
        id: 5,
        streetAddress: 'Oak Lane',
        city: 'Greenville',
        state: 'SC',
        postalCode: '29601',
        neighborhood: 'Greenville Heights',
        houseNumber: '101',
      },
    },
    {
      id: 6,
      name: 'Lucas',
      email: 'lucas.smith@example.com',
      document: '111.222.333-44',
      jobTitle: 'Professor',
      baseSalary: 3500,
      admissionDate: '25/03/2023',
      phone: '(888) 999-0000',
      birthDate: '12/12/1987',
      address: {
        id: 6,
        streetAddress: 'Cedar Street',
        city: 'Cedarville',
        state: 'OH',
        postalCode: '45314',
        neighborhood: 'Cedarville Heights',
        houseNumber: '222',
      },
    },
  ];

  logout() {
    this.authService.logout();
  }
}
