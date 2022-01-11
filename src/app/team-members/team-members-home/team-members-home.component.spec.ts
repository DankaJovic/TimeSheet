import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersHomeComponent } from './team-members-home.component';

describe('TeamMembersHomeComponent', () => {
  let component: TeamMembersHomeComponent;
  let fixture: ComponentFixture<TeamMembersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMembersHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
