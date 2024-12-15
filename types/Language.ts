export type Language = {
  id: number;
  language: string;
};

export interface LanguageState {
  language: Language[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
