import { FreeloApiResponse } from "./types";

export interface FreeloGetProjectResponse {
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

export type FreeloGetProject = (
  projectID: string | null | undefined
) => Promise<
  FreeloApiResponse & {
    data: FreeloGetProjectResponse | null;
  }
>;
