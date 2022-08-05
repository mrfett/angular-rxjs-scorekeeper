import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FencerNamesComponent } from './fencer-names.component';

describe('FencerNamesComponent', () => {
  let component: FencerNamesComponent;
  let fixture: ComponentFixture<FencerNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FencerNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FencerNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
