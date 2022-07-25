import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { BehaviorSubject, interval, timer, Observable } from "rxjs";
import {tap, map } from "rxjs/operators";
import { Bout } from "../bout";
import { Fencer } from "../fencer";

@Component({
  selector: ".app-bout",
  templateUrl: "./bout.component.html",
  styleUrls: ["./bout.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoutComponent implements OnInit {
  @Input() defaultBout: Bout = new Bout();

  boutSubject = new BehaviorSubject<Bout>(this.defaultBout);
  boutAction$ = this.boutSubject.asObservable();

  currentBout$ = this.boutAction$.pipe(
    tap(bout => console.log("Bout", bout))
  ).subscribe();

  // timer$ = interval(1000)
  //   .pipe
  //   map((bout) => (bout.timeLeft = bout.timeLeft - 1))
  //   tap((bout: Bout) => console.log(bout))
  //   ();

  constructor() {}

  ngOnInit(): void {
    // const fencerOne = {...this.defaultBout.fencers[0], name: "Testing One"};
    const fencerOne = this.updateFencerName(this.defaultBout.fencers[0], "Fencer One");
    const fencerTwo = this.updateFencerName(this.defaultBout.fencers[1], "Second Fencer")

    this.boutSubject.next(
      {...this.defaultBout, fencers: [fencerOne, fencerTwo]}
    );
  }

  toggleStatus(currentBout: Bout): void {
    const newStatus = currentBout.status === "paused" ? "active" : "paused";
    const newBout = { ...currentBout, status: newStatus };
    this.boutSubject.next(newBout);
  }

  updateFencerName(fencer: Fencer, newName: string): Fencer {
    return {...fencer, name: newName};
  }

  public incrementScore(fencer): void {
    console.log({...this.currentBout$, timeLeft: 30});
    // this.boutSubject.next(newBout);
  }

  doubleTouch(currentBout: Bout): void {
    let newBout = {...currentBout};
    newBout.fencers.forEach((fencer) => {
      fencer.score++;
    })
    this.boutSubject.next(newBout);
  }
}
