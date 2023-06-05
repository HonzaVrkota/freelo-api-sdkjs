import {
  ApiResponseData,
  ApiRoute,
  Currency,
  FreeloApiResponse,
  FreeloInstanceType,
} from "../../../types/types";

export interface CreateProjectResponse {
  id: number;
  name: string;
}

export type CreateProjectProps = {
  name: string;
  currency_iso: Currency;
  project_owner_id: number;
  instance: FreeloInstanceType;
};

export type CreateProjectData = ApiResponseData<CreateProjectResponse>;

export type CreateProjectType<I extends boolean = false> = ApiRoute<
  CreateProjectProps,
  CreateProjectData,
  I
>;
