import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaTemperaturaComponent } from './ayuda-temperatura.component';

describe('AyudaTemperaturaComponent', () => {
  let component: AyudaTemperaturaComponent;
  let fixture: ComponentFixture<AyudaTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
