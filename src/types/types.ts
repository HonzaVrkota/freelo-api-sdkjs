import { AxiosInstance } from "axios";

export interface FreeloApiResponse {
  success: boolean;
  message?: string;
  error?: any;
}

export type Currency = "CZK" | "EUR" | "USD";
export type Order = "asc" | "desc" | null;
export type OrderBy = "name" | "date_add" | "date_edited_at" | null;

export type FreeloInstanceType = AxiosInstance;
