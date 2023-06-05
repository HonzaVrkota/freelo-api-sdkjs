import {
  ApiResponseData,
  ApiRoute,
  FreeloInstanceType,
} from "../../../types/types";

export interface GetProjectWorkersResponse {
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

export type GetProjectWorkersProps = {
  projectID: string;
  instance: FreeloInstanceType;
};

export type GetProjectWorkersData = ApiResponseData<GetProjectWorkersResponse>;

export type GetProjectWorkersType<I extends boolean = false> = ApiRoute<
  GetProjectWorkersProps,
  GetProjectWorkersData,
  I
>;
