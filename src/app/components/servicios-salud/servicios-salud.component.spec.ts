import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSaludComponent } from './servicios-salud.component';

describe('ServiciosSaludComponent', () => {
  let component: ServiciosSaludComponent;
  let fixture: ComponentFixture<ServiciosSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosSaludComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
