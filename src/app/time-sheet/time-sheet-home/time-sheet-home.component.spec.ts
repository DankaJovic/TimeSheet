import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSheetHomeComponent } from './time-sheet-home.component';

describe('TimeSheetHomeComponent', () => {
  let component: TimeSheetHomeComponent;
  let fixture: ComponentFixture<TimeSheetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSheetHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSheetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
