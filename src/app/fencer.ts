export class Fencer {
  id: number;
  name?: string;
  score: number;
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
