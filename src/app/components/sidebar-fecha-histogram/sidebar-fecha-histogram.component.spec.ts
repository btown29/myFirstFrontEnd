import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFechaHistogramComponent } from './sidebar-fecha-histogram.component';

describe('SidebarFechaHistogramComponent', () => {
  let component: SidebarFechaHistogramComponent;
  let fixture: ComponentFixture<SidebarFechaHistogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFechaHistogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFechaHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
