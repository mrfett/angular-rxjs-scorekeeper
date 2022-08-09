import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: '.app-period-display',
  templateUrl: './period-display.component.html',
  styleUrls: ['./period-display.component.scss']
})
export class PeriodDisplayComponent implements OnInit {

  @Input() periodText:string;
  @Input() updatePeriod: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
