import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVistaAdministradorComponent } from './ruta-vista-administrador.component';

describe('RutaVistaAdministradorComponent', () => {
  let component: RutaVistaAdministradorComponent;
  let fixture: ComponentFixture<RutaVistaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVistaAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVistaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
