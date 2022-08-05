import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: '.app-period-display',
  templateUrl: './period-display.component.html',
  styleUrls: ['./period-display.component.scss']
})
export class PeriodDisplayComponent implements OnInit {

  @Input() period$: Observable<number> = EMPTY;

  periodText:Observable<string> = this.period$.pipe(
    map((period) => {
      console.log("Period", period)
      let output = "";
      if(period === 1) {
        output = "1st Period";
      } else if ( period === 2) {
        output === "2nd Period";
      } else if (period === 3) {
        output === "3rd Period";
      } else {
        output = "Period Out-of-bounds";
      }
      return output;
    })
  );

  constructor() { }

  ngOnInit(): void {
  }

}
