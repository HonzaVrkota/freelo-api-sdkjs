import { AxiosInstance } from "axios";

export interface FreeloApiResponse {
  success: boolean;
  message?: string;
  error?: any;
}

export type Currency = "CZK" | "EUR" | "USD";
export type Order = "asc" | "desc" | null;
export type OrderByProjects = "name" | "date_add" | "date_edited_at" | null;

export type FreeloInstanceType = AxiosInstance;

export type ApiRouteType<P, R> = ({
  args,
  instance,
}: {
  instance: FreeloInstanceType;
  args: P;
}) => Promise<R>;

export interface ApiResponseData<T> extends FreeloApiResponse {
  data: T | null;
}

export type ApiRoute<P, R, I> = (
  props: I extends true ? P : Omit<P, "instance">
) => Promise<R>;

// Export types from modules
export * from "../routes/project/types";
export * from "../routes/tasklists/types";
export * from "../routes/tasks/types";
