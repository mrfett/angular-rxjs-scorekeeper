import { Fencer } from "./fencer";
import { WeaponTypesEnum } from "./WeaponTypes.enum";

export class Bout {
  weapon: WeaponTypesEnum = WeaponTypesEnum.epee;
  timeLeft: number = 3 * 60 * 1000;
  period: number = 1;
  status: string = "paused";
  fencers: Fencer[] = [
    new Fencer(),
    new Fencer()
  ];
}