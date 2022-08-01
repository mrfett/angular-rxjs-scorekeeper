import { Component, OnInit } from '@angular/core';
import { WeaponTypesEnum } from '../WeaponTypes.enum';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  weaponTypes = WeaponTypesEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
