import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaAlturaComponent } from './ayuda-altura.component';

describe('AyudaAlturaComponent', () => {
  let component: AyudaAlturaComponent;
  let fixture: ComponentFixture<AyudaAlturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaAlturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaAlturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
