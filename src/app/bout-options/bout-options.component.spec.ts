import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutOptionsComponent } from './bout-options.component';

describe('BoutOptionsComponent', () => {
  let component: BoutOptionsComponent;
  let fixture: ComponentFixture<BoutOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
