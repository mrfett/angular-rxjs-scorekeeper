import { Fencer } from "./fencer";
import { WeaponTypesEnum } from "./WeaponTypes.enum";

export class Bout {
  weapon: WeaponTypesEnum = WeaponTypesEnum.epee;
  timeLeft: number = 3 * 60 * 1000;
  status: string = "paused";
  fencers: Fencer[] = [
    new Fencer(),
    new Fencer()
  ];
  fencerA: Fencer = new Fencer();
  fencerB: Fencer = new Fencer();
}