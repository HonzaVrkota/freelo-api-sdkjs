import {
  ApiResponseData,
  ApiRoute,
  FreeloInstanceType,
  Order,
  OrderByProjects,
} from "../../../types/types";

interface Owner {
  id: number;
  fullname: string;
}

interface State {
  id: number;
  state: string;
}

export type GetCollectionAllProjectsResponse = {
  total: number;
  count: number;
  page: number;
  per_page: number;
  data: {
    projects: {
      id: number;
      name: string;
      date_add: string;
      date_edited_at: string;
      owner: Owner;
      state: State;
    };
  };
};

export type GetCollectionAllProjectsProps = {
  order_by?: OrderByProjects;
  order?: Order;
  instance: FreeloInstanceType;
};

export type GetCollectionAllProjectsData =
  ApiResponseData<GetCollectionAllProjectsResponse>;

export type GetCollectionAllProjectsType<I extends boolean = false> = ApiRoute<
  GetCollectionAllProjectsProps,
  GetCollectionAllProjectsData,
  I
>;
