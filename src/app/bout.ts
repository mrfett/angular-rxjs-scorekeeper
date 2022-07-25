import { Fencer } from "./fencer";

export class Bout {
  weapon: weapon = weapon.epee;
  timeLeft: number = 3 * 60 * 1000;
  status: string = "paused";
  fencers: Fencer[] = [
    new Fencer(),
    new Fencer()
  ];
  fencerA: Fencer = new Fencer();
  fencerB: Fencer = new Fencer();
}

const enum weapon {
  foil = "foil",
  epee = "epee",
  saber = "saber"
}