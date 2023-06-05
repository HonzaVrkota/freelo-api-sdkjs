import { FreeloApiResponse, Currency, OrderBy, Order } from "../../types";

export interface FreeloCollectionResponse {
  id: number;
  name: string;
}

export type FreeloCollection = (
  order_by: OrderBy,
  order: Order
) => Promise<
  FreeloApiResponse & {
    data: FreeloCollectionResponse | null;
  }
>;
