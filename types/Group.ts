import { Card } from "./Card";

export type Group = {
  id: number;
  groupName: string;
  Card: Card[];
};

export interface GroupState {
  groups: Group[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
