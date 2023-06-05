import {
  ApiResponseData,
  ApiRoute,
  FreeloInstanceType,
} from "../../../types/types";

export type GetTasklistResponse = {
  id: number;
  name: string;
  date_add: string;
  date_edited_at: string;
  tasks: Array<{
    id: number;
    name: string;
    due_date: string;
    due_date_end: string;
    worker: {
      id: number;
      fullname: string;
    };
    parent_task_id: number;
  }>;
};

export type GetTasklistProps = {
  tasklistID: string;
  instance: FreeloInstanceType;
};

export type GetTasklistData = ApiResponseData<GetTasklistResponse>;

export type GetTasklistType<I extends boolean = false> = ApiRoute<
  GetTasklistProps,
  GetTasklistData,
  I
>;
