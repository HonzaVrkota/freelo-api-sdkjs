import { FreeloApiResponse, Currency } from "../types";

export interface FreeloCreateProjectResponse {
  id: number;
  name: string;
}

export type FreeloCreateProject = (
  name: string,
    currency_iso: Currency,
    project_owner_id: number,
) => Promise<
  FreeloApiResponse & {
    data: FreeloCreateProjectResponse | null;
  }
>;