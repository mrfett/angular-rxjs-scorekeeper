import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponSelectComponent } from './weapon-select.component';

describe('WeaponSelectComponent', () => {
  let component: WeaponSelectComponent;
  let fixture: ComponentFixture<WeaponSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
