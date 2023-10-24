import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaComponent } from './folha.component';

describe('FolhaComponent', () => {
  let component: FolhaComponent;
  let fixture: ComponentFixture<FolhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolhaComponent]
    });
    fixture = TestBed.createComponent(FolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
