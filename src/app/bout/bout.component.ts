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
import { WeaponTypesEnum } from "../WeaponTypes.enum";

@Component({
  selector: ".app-bout",
  templateUrl: "./bout.component.html",
  styleUrls: ["./bout.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoutComponent implements OnInit {
  @Input() defaultBout: Bout = new Bout();

  boutSubject = new BehaviorSubject<Bout>(this.defaultBout);
  boutAction$ = this.boutSubject.asObservable();

  public weaponTypes = Object.values(WeaponTypesEnum);

  constructor() {}

  ngOnInit(): void {
    // const fencerOne = {...this.defaultBout.fencers[0], fencerName: "Testing One"};
    const fencerOne = this.updateFencerName(this.defaultBout.fencers[0], "Fencer One");
    const fencerTwo = this.updateFencerName(this.defaultBout.fencers[1], "Second One")

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
    return {...fencer, fencerName: newName};
  }

  public incrementScore = (fencerToUpdate:Fencer) => {
    console.log("Increment Score Called.");
    let updatedBout = {...this.boutSubject.getValue()};
    updatedBout.fencers.map((fencer) => {
      fencer === fencerToUpdate ? fencer.score = fencer.score + 1 : fencer.score = fencer.score;
    });
    this.boutSubject.next(updatedBout);
  }

  doubleTouch = (): void => {
    console.log("Double Touch Called.");
    const updatedBout = {...this.boutSubject.getValue()};
    updatedBout.fencers.map((fencer) => fencer.score++);
    this.boutSubject.next(updatedBout);
  }

  changeWeapon = (weapon:WeaponTypesEnum):void => {
    console.log("Change Weapon Called.");
    let updatedBout = {...this.boutSubject.getValue()};
    updatedBout.weapon = weapon;
    this.boutSubject.next(updatedBout);
  }
}
