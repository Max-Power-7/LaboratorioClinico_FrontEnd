import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenComponent } from './editar-examen.component';

describe('EditarExamenComponent', () => {
  let component: EditarExamenComponent;
  let fixture: ComponentFixture<EditarExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
