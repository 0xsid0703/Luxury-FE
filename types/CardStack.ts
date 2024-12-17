import { Artist } from "./Artist";
import { Language } from "./Language";

export type CardStack = {
  id: number;
  name: string;
  languageId: number;
  artistId: number;
  language: Language;
  artist: Artist;
};

export interface CardStackState {
  cardstacks: CardStack[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface CardStackArgs {
  name: string;
  languageId: number;
  artistId: number;
}
export interface UpdateCardStackArgs {
  id: number;
  name: string;
  languageId: number;
  artistId: number;
}
