import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Fencer } from "../fencer";

@Component({
  selector: "app-fencer",
  templateUrl: "./fencer.component.html",
  styleUrls: ["./fencer.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FencerComponent implements OnInit {
  @Input() param: "test";
  @Input() initialFencer: Fencer = {
    id: 0,
    name: "No Name",
    score: 0
  };

  fencerSubject = new BehaviorSubject<Fencer>(this.initialFencer);
  fencerAction$ = this.fencerSubject.asObservable();

  constructor() {}

  ngOnInit(): void {
    this.fencerSubject.next(this.initialFencer);
  }

  // incrementScore(fencer): void {
  //   this.fencerSubject.next({ ...fencer, score: fencer.score + 1 });
  // }
}
