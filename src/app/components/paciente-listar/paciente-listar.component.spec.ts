import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteListarComponent } from './paciente-listar.component';

describe('PacienteListarComponent', () => {
  let component: PacienteListarComponent;
  let fixture: ComponentFixture<PacienteListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
