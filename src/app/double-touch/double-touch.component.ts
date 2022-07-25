import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Bout } from '../bout';

@Component({
  selector: '.app-double-touch',
  templateUrl: './double-touch.component.html',
  styleUrls: ['./double-touch.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoubleTouchComponent implements OnInit {

  @Input() doubleTouch: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
