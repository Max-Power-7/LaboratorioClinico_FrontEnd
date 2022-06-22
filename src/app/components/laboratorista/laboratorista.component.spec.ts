import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoristaComponent } from './laboratorista.component';

describe('LaboratoristaComponent', () => {
  let component: LaboratoristaComponent;
  let fixture: ComponentFixture<LaboratoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoristaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
