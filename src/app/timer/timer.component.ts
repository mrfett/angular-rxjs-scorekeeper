import { Component, Input, OnInit } from '@angular/core';
import { BoutStatusEnum } from '../BoutStatus.enum';
import { WeaponTypesEnum } from '../WeaponTypes.enum';

@Component({
  selector: '.app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() currentStatus: string = BoutStatusEnum.paused;
  @Input() currentTime: number = 3 * 60 * 60 * 1000;
  @Input() toggleStatus: () => void;

  // constructor() { }

  ngOnInit(): void {}

}
