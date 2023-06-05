import {
  ApiResponseData,
  ApiRoute,
  FreeloApiResponse,
  FreeloInstanceType,
  Order,
  OrderByProjects,
} from "../../../types/types";

type Cost = {
  amount: string;
  currency: string;
};

export type GetCollectionOwnActiveProjectsResponse = Array<{
  id: number;
  name: string;
  date_add: string;
  date_edited_at: string;
  minutes: number;
  cost: Cost;
  tasklists: Array<{
    id: number;
    name: string;
    minutes: number;
    cost: Cost;
  }>;
  client: {
    id: number;
    name: string;
    email: string;
    company: string;
  };
}>;

export type GetCollectionOwnActiveProjectsProps = {
  order_by?: OrderByProjects;
  order?: Order;
  instance: FreeloInstanceType;
};

export type GetCollectionOwnActiveProjectsData =
  ApiResponseData<GetCollectionOwnActiveProjectsResponse>;

export type GetCollectionOwnActiveProjectsType<I extends boolean = false> =
  ApiRoute<
    GetCollectionOwnActiveProjectsProps,
    GetCollectionOwnActiveProjectsData,
    I
  >;
