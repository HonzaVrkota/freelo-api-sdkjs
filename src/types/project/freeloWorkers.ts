import { FreeloApiResponse } from "../types";

export interface FreeloGetWorkersResponse {
  total: number;
  count: number;
  page: number;
  per_page: number;
  data: {
    workers: [
      {
        id: number;
        fullname: string;
      }
    ];
  };
}

export type FreeloGetWorkers = (
  project_id: number
) => Promise<
  FreeloApiResponse & {
    data: FreeloGetWorkersResponse | null;
  }
>;
