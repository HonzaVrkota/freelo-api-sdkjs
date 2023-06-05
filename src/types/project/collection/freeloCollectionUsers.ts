import { FreeloApiResponse, OrderBy, Order } from "../../types";

export interface FreeloCollectionUsersResponse {
  total: number;
  count: number;
  page: number;
  per_page: number;
  data: {
    projects: [
      {
        id: number;
        name: string;
        date_add: Date;
        date_edited_at: Date;
        owner: {
          id: number;
          fullname: string;
        };
        state: {
          id: number;
          state: string;
        };
      }
    ];
  };
}

export type FreeloCollectionUsers = (
  user_id: number,
  states_ids?: number[],
  order_by?: OrderBy,
  order?: Order
) => Promise<
  FreeloApiResponse & {
    data: FreeloCollectionUsersResponse | null;
  }
>;
