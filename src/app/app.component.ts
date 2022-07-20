import { Component } from "@angular/core";
import { Fencer } from "./fencer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular CLI Template";
  public fencerOne: Fencer = {
    id: <number>0,
    name: <string>"Fencer One",
    score: <number>1
  };
  public fencerTwo: Fencer = {
    id: <number>1,
    name: <string>"Fencer Two",
    score: <number>3
  };
}
