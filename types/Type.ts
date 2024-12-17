import { Card } from "./Card";

export type Type = {
  id: number;
  typeName: string;
  Card: Card[];
};

export interface TypeState {
  types: Type[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
