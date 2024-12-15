export type User = {
  id: number;
  name: string;
};

export interface UserState {
  user: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
