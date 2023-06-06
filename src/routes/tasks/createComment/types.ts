import {
  ApiResponseData,
  ApiRoute,
  FreeloInstanceType,
} from "../../../types/types";

export interface CreateCommentResponse {
  id: number;
  content: string;
  date_add: string;
  files: Array<{
    id: number;
    filename: string;
    size: number;
  }>;
}

export type CreateCommentBodyData = {
  content: string;
  files?: Array<{
    download_url: string;
    filename: string;
  }>;
};

export type CreateCommentProps = {
  task_id: string;
  instance: FreeloInstanceType;
} & CreateCommentBodyData;

export type CreateCommentData = ApiResponseData<CreateCommentResponse>;

export type CreateCommentType<I extends boolean = false> = ApiRoute<
  CreateCommentProps,
  CreateCommentData,
  I
>;
