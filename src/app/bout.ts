import { Fencer } from "./fencer";

export class Bout {
  weapon: string = "foil";
  timeLeft: number = 3 * 60 * 1000;
  status: string = "paused";
  fencerA: Fencer = new Fencer();
  fencerB: Fencer = new Fencer();
}
