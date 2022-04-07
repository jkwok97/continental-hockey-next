import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaLeaderCardComponent } from './cha-leader-card.component';

describe('ChaLeaderCardComponent', () => {
  let component: ChaLeaderCardComponent;
  let fixture: ComponentFixture<ChaLeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaLeaderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaLeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
