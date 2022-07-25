import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Fencer } from "../fencer";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  @Input() param: "test";
  @Input() initialFencer: Fencer = {
    id: 0,
    fencerName: "No Name",
    score: 0
  };

  fencerSubject = new BehaviorSubject<Fencer>(this.initialFencer);
  fencerAction$ = this.fencerSubject.asObservable();

  constructor() {}

  ngOnInit(): void {
    this.fencerSubject.next(this.initialFencer);
  }

  incrementScore(fencer): void {
    console.log("Updating fencer", fencer);
    this.fencerSubject.next({ ...fencer, score: fencer.score + 1 });
  }
}
