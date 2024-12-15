import { Card } from "./Card";
import { CardStack } from "./CardStack";

export type Artist = {
  id: number;
  name: string;
  link: string;
  Card: Card[];
  CardStack: CardStack;
};

export interface ArtistState {
  artist: Artist[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface ArtistArgs {
  name: string;
  link: string;
}
