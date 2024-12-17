export type ImageType = {
  id: number;
  name: string;
};

export interface ImageState {
  images: ImageType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
