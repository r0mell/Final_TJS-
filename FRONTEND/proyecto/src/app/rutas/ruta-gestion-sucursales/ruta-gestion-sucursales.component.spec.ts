import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionSucursalesComponent } from './ruta-gestion-sucursales.component';

describe('RutaGestionSucursalesComponent', () => {
  let component: RutaGestionSucursalesComponent;
  let fixture: ComponentFixture<RutaGestionSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
