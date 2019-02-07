import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearEmpresaComponent } from './ruta-crear-empresa.component';

describe('RutaCrearEmpresaComponent', () => {
  let component: RutaCrearEmpresaComponent;
  let fixture: ComponentFixture<RutaCrearEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
