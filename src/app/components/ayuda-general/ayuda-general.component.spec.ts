import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaGeneralComponent } from './ayuda-general.component';

describe('AyudaGeneralComponent', () => {
  let component: AyudaGeneralComponent;
  let fixture: ComponentFixture<AyudaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
