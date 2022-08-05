import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FencerScoresComponent } from './fencer-scores.component';

describe('FencerScoresComponent', () => {
  let component: FencerScoresComponent;
  let fixture: ComponentFixture<FencerScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FencerScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FencerScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
