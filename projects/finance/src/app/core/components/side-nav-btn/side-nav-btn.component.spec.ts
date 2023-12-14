import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBtnComponent } from './side-nav-btn.component';

describe('SideNavBtnComponent', () => {
  let component: SideNavBtnComponent;
  let fixture: ComponentFixture<SideNavBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
