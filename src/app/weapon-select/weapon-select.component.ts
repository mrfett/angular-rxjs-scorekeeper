import { Component, Input, OnInit } from '@angular/core';
import { WeaponTypesEnum } from '../WeaponTypes.enum';

@Component({
  selector: '.app-weapon-select',
  templateUrl: './weapon-select.component.html',
  styleUrls: ['./weapon-select.component.css']
})
export class WeaponSelectComponent implements OnInit {

  @Input() currentWeapon: WeaponTypesEnum = WeaponTypesEnum.foil;
  @Input() updateWeapon: (weapon:WeaponTypesEnum) => void;

  weaponTypes = Object.values(WeaponTypesEnum);

  constructor() { }

  ngOnInit(): void {
  }

}
