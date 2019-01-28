import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionEmpresasComponent } from './ruta-gestion-empresas.component';

describe('RutaGestionEmpresasComponent', () => {
  let component: RutaGestionEmpresasComponent;
  let fixture: ComponentFixture<RutaGestionEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
