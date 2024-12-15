import { Artist } from "./Artist";
import { EventSubGroup } from "./EventSubGroup";
import { Group } from "./Group";
import { Language } from "./Language";
import { Type } from "./Type";

export type Card = {
  languageId: number;
  name: string;
  artistId: number;
  typeId: number;
  groupId: number;
  event_sub_groupId: number;
  qrcode: string;
  scene: string;
  action: string;
  consequence_positive: string;
  consequence_negative: string;
  co2_level_number: number;
  co2_level: string;
  nature_level_number: number;
  nature_level: string;
  gdp_level_number: number;
  gdp_level: string;
  image: string;
  language: Language;
  artist: Artist;
  type: Type;
  group: Group;
  event_sub_group: EventSubGroup;
};

export interface CardState {
  card: Card[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
