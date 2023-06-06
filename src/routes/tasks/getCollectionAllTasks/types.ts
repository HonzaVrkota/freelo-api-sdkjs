import {
  ApiResponseData,
  ApiRoute,
  FreeloInstanceType,
  Order,
} from "../../../types/types";

export type GetCollectionAllTasksResponse = {
  total: number;
  count: number;
  page: number;
  per_page: number;
  data: {
    tasks: Array<{
      id: number;
      name: string;
      date_add: string;
      date_edited_at: string;
      due_date: string;
      due_date_end: any;
      count_comments: number;
      count_subtasks: number;
      author: {
        id: number;
        fullname: string;
      };
      worker: {
        id: number;
        fullname: string;
      };
      state: {
        id: number;
        state: string;
      };
      project: {
        id: number;
        name: string;
        state: {
          id: number;
          state: string;
        };
      };
      tasklist: {
        id: number;
        name: string;
        state: {
          id: number;
          state: string;
        };
      };
      labels: Array<{
        uuid: string;
        name: string;
        color: string;
      }>;
      parent_task_id: number;
      custom_fields: Array<{
        field_uuid: string;
        custom_fields_types_uuid: string;
        project_id: number;
        name: string;
        priority: number;
        field_date_add: string;
        value_uuid: string;
        value_author_id: number;
        value: string;
        value_date_add: string;
        value_date_edited_at: any;
      }>;
    }>;
  };
};

export type OrderByAllTaks =
  | "priority"
  | "name"
  | "date_add"
  | "date_edited_at";

type DateRange = {
  date_from: string;
  date_to: string;
};

export type GetCollectionAllTasksProps = {
  projects_ids: string[];
  state_id: 1 | 2 | 3 | 5;
  tasklists_ids: string[];
  order_by: OrderByAllTaks;
  order: Order;
  with_label: string;
  without_label: string;
  no_due_date: boolean;
  due_date_range: DateRange;
  finished_overdue: boolean;
  finished_date_range: DateRange;
  worker_id: string;
};

export type GetCollectionAllTasksData =
  ApiResponseData<GetCollectionAllTasksResponse>;

export type GetCollectionAllTasksType<I extends boolean = false> = ApiRoute<
  Partial<GetCollectionAllTasksProps> & { instance: FreeloInstanceType },
  GetCollectionAllTasksData,
  I
>;
