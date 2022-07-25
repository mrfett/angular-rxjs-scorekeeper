export class Fencer {
  id: number;
  fencerName?: string = "Fencer";
  score: number = 0;
  cards?: {
    yellow: number;
    red: number;
    black: number;
  };
  pcards?: {
    yellow: number;
    red: number;
    black: number;
  };
}
