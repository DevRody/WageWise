import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFuncionariosComponent } from './listagem-funcionarios.component';

describe('ListagemFuncionariosComponent', () => {
  let component: ListagemFuncionariosComponent;
  let fixture: ComponentFixture<ListagemFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemFuncionariosComponent]
    });
    fixture = TestBed.createComponent(ListagemFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
