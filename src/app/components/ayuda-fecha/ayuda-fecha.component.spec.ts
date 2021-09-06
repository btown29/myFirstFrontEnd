import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaFechaComponent } from './ayuda-fecha.component';

describe('AyudaFechaComponent', () => {
  let component: AyudaFechaComponent;
  let fixture: ComponentFixture<AyudaFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
