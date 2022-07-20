import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FencerComponent } from './fencer.component';

describe('FencerComponent', () => {
  let component: FencerComponent;
  let fixture: ComponentFixture<FencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
