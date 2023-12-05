import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobleStyleComponent } from './globle-style.component';

describe('GlobleStyleComponent', () => {
  let component: GlobleStyleComponent;
  let fixture: ComponentFixture<GlobleStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobleStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobleStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
