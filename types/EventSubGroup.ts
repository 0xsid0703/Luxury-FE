import { Card } from "./Card";

export type EventSubGroup = {
  id: number;
  subGroupName: string;
  Card: Card[];
};

export interface EventSubGroupState {
  eventSubGroups: EventSubGroup[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
