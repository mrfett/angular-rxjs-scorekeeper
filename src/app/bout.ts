import { Fencer } from "./fencer";

export class Bout {
  timeLeft: number = 3 * 60 * 1000;
  status: string = "paused";
  fencerA: Fencer = new Fencer();
  fencerB: Fencer = new Fencer();
}
