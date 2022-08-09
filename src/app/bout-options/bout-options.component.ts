import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { reduce } from 'rxjs/operators';
import { Bout } from '../bout';
import { WeaponTypesEnum } from '../WeaponTypes.enum';

@Component({
  selector: '.app-bout-options',
  templateUrl: './bout-options.component.html',
  styleUrls: ['./bout-options.component.scss'],
  animations: [
    trigger('fadeInOut', [
      // ...
      state('void', style({
        // opacity: 0,
        position: 'absolute',
        left: '-100vw'
      })),
      transition('void <=> *', [
        animate('0.25s')
      ])
    ]),
  ],
})
export class BoutOptionsComponent implements OnInit {

  @Input() currentWeapon: WeaponTypesEnum = WeaponTypesEnum.foil;
  @Input() updateWeapon: (weapon:WeaponTypesEnum) => void;

  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu = () => {
    this.menuOpen ? this.menuOpen = false: this.menuOpen = true;
  }

}
