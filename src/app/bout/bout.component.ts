import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Bout } from "../bout";
// import { Fencer } from "../fencer";

@Component({
  selector: "app-bout",
  templateUrl: "./bout.component.html",
  styleUrls: ["./bout.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoutComponent implements OnInit {
  @Input() defaultBout: Bout = new Bout();

  boutSubject = new BehaviorSubject<Bout>(this.defaultBout);
  boutAction$ = this.boutSubject.asObservable();

  constructor() {}

  ngOnInit(): void {
    this.boutSubject.next({
      ...this.defaultBout,
      fencerA: { ...this.defaultBout.fencerA, name: "Billy" },
      fencerB: { ...this.defaultBout.fencerB, name: "Sam", id: 1 }
    });
  }

  toggleStatus(currentBout: Bout): void {
    console.log("Toggle Status...", currentBout);
    const newStatus = currentBout.status === "paused" ? "active" : "paused";
    const newBout = { ...currentBout, status: newStatus };
    this.boutSubject.next(newBout);
  }
}
