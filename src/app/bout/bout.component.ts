import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, interval, timer, Observable, Subscription } from "rxjs";
import {tap, map, takeWhile } from "rxjs/operators";
import { Bout } from "../bout";
import { Fencer } from "../fencer";
import { WeaponTypesEnum } from "../WeaponTypes.enum";

@Component({
  selector: ".app-bout",
  templateUrl: "./bout.component.html",
  styleUrls: ["./bout.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoutComponent implements OnInit {
  @Input() defaultBout: Bout = new Bout();

  boutOptionsOpen:Boolean = false;

  boutSubject = new BehaviorSubject<Bout>(this.defaultBout);
  boutAction$ = this.boutSubject.asObservable();

  fencerNames$ = this.boutAction$.pipe(
    map(bout => bout.fencers.map(fencer => fencer.fencerName))
  );

  periodText$ = this.boutAction$.pipe(
    map((bout) => {
      if(bout.period === 1) {
        return "1st Period";
      } else if ( bout.period === 2) {
       return "2nd Period";
      } else if (bout.period === 3) {
        return "3rd Period";
      } else {
        return "Period Out-of-bounds";
      }
    })
  );

  countdown$ = timer(0, 10).pipe(
    takeWhile(() => this.boutSubject.getValue().timeLeft > 0),
    map(() => {
      const newTime = this.boutSubject.getValue().timeLeft--;
      return this.convertTime(newTime);
    })
  );

  countdownSub: Subscription;

  public weaponTypes = Object.values(WeaponTypesEnum);

  // this._Activatedroute.paramMap.subscribe(params => this.changeWeapon(this.weaponTypes[params.get('weapon')]))

  constructor(private _Activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    // const fencerOne = {...this.defaultBout.fencers[0], fencerName: "Testing One"};
    const fencerOne = this.updateFencerName(this.defaultBout.fencers[0], "John Smith");
    const fencerTwo = this.updateFencerName(this.defaultBout.fencers[1], "Dan Anderson");

    const initialWeapon = this._Activatedroute.snapshot.paramMap.get("weapon");

    this.boutSubject.next(
      {...this.defaultBout, fencers: [fencerOne, fencerTwo], weapon: WeaponTypesEnum[this._Activatedroute.snapshot.paramMap.get("weapon")]}
    );
  }

  toggleStatus = (): void => {
    const currentBout = {...this.boutSubject.getValue()};
    const newStatus = currentBout.status === "paused" ? "active" : "paused";
    if (currentBout.timeLeft === 0 && newStatus === "active") currentBout.timeLeft = 1*60*100;
    newStatus === "active" ? this.countdownSub = this.countdown$.subscribe() : this.countdownSub.unsubscribe();
    const newBout = { ...currentBout, status: newStatus };
    this.boutSubject.next(newBout);
  }

  updatePeriod = () => {
    const newBout = {...this.boutSubject.getValue()};
    newBout.period >= 3 ? newBout.period = 1 : newBout.period++;
    this.boutSubject.next(newBout);
  }

  updateFencerName(fencer: Fencer, newName: string): Fencer {
    return {...fencer, fencerName: newName};
  }

  public incrementScore = (fencerToUpdate:Fencer) => {
    let updatedBout = {...this.boutSubject.getValue()};
    updatedBout.fencers.map((fencer) => {
      fencer === fencerToUpdate ? fencer.score = fencer.score + 1 : fencer.score = fencer.score;
    });
    this.boutSubject.next(updatedBout);
  }

  doubleTouch = (): void => {
    const updatedBout = {...this.boutSubject.getValue()};
    updatedBout.fencers.map((fencer) => fencer.score++);
    this.boutSubject.next(updatedBout);
  }

  changeWeapon = (weapon:WeaponTypesEnum):void => {
    let updatedBout = {...this.boutSubject.getValue()};
    updatedBout.weapon = weapon;
    this.boutSubject.next(updatedBout);
  }

  convertTime(totalTime) {
    let minutesInt = ~~(totalTime / 100 / 60);
    let secondsInt = ~~((totalTime / 100) % 60);
    let millisecondsInt = ~~(totalTime % 100);
    let milliseconds = String(millisecondsInt).padStart(2, "0");
    let seconds = String(secondsInt).padStart(2, "0");

    if (totalTime <= 5 * 100) {
      return `${minutesInt}:${seconds}:${milliseconds}`;
    } else {
      return `${minutesInt}:${seconds}`;
    }
  }
}
