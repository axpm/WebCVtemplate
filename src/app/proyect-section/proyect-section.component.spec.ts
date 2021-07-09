import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectSectionComponent } from './proyect-section.component';

describe('ProyectSectionComponent', () => {
  let component: ProyectSectionComponent;
  let fixture: ComponentFixture<ProyectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
