import {
  ApiResponseData,
  ApiRoute,
  FreeloApiResponse,
  FreeloInstanceType,
} from "../../../types/types";

export interface GetProjectResponse {
  id: number;
  date_add: string;
  name: string;
  tasklists: FreeloTasklist[];
  state: {
    id: number;
    state: string;
  };
  date_edited_at: string;
}

export interface FreeloTasklist {
  id: number;
  name: string;
  tasks: FreeloTask[];
  date_add: string;
}

export interface FreeloTask {
  id: number;
  name: string;
  due_date: any;
  due_date_end: any;
  worker: any;
  parent_task_id?: number;
}

export type GetProjectProps = {
  projectID: string;
  instance: FreeloInstanceType;
};

export type GetProjectData = ApiResponseData<GetProjectResponse>;

export type GetProjectType<I extends boolean = false> = ApiRoute<
  GetProjectProps,
  GetProjectData,
  I
>;
