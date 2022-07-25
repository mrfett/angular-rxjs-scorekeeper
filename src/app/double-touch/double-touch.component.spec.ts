import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleTouchComponent } from './double-touch.component';

describe('DoubleTouchComponent', () => {
  let component: DoubleTouchComponent;
  let fixture: ComponentFixture<DoubleTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleTouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
