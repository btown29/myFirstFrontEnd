import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRegistroComponent } from './sidebar-registro.component';

describe('SidebarRegistroComponent', () => {
  let component: SidebarRegistroComponent;
  let fixture: ComponentFixture<SidebarRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
