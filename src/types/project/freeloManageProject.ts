import { FreeloApiResponse } from "../types";

export interface FreeloManageProjectResponse {
  result: FreeloApiResponse;
}

export type FreeloManageProject = (project_id: number) => Promise<
  FreeloApiResponse & {
    data: FreeloManageProjectResponse | null;
  }
>;
