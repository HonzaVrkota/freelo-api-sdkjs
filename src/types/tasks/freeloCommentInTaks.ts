import { FreeloApiResponse } from "../types";

export interface FreeloCreateCommentResponse {
  id: number;
  content: string;
  date_add: string;
  files: any[];
}

export type FreeloCreateComment = (
  taskId: string | null | undefined,
  content: string
) => Promise<
  FreeloApiResponse & {
    data: FreeloCreateCommentResponse | null;
  }
>;
