import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSistemaVentilacionComponent } from './ruta-sistema-ventilacion.component';

describe('RutaSistemaVentilacionComponent', () => {
  let component: RutaSistemaVentilacionComponent;
  let fixture: ComponentFixture<RutaSistemaVentilacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSistemaVentilacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSistemaVentilacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
