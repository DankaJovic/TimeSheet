import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetOrderComponent } from './alphabet-order.component';

describe('AlphabetOrderComponent', () => {
  let component: AlphabetOrderComponent;
  let fixture: ComponentFixture<AlphabetOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
