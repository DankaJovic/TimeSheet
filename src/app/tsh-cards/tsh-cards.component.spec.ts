import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshCardsComponent } from './tsh-cards.component';

describe('TshCardsComponent', () => {
  let component: TshCardsComponent;
  let fixture: ComponentFixture<TshCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TshCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TshCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
