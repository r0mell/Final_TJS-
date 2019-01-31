import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVistaUsuarioComponent } from './ruta-vista-usuario.component';

describe('RutaVistaUsuarioComponent', () => {
  let component: RutaVistaUsuarioComponent;
  let fixture: ComponentFixture<RutaVistaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVistaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVistaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
