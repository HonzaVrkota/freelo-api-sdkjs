import { AxiosInstance } from "axios";

export interface FreeloApiResponse {
  success: boolean;
  message?: string;
  error?: any;
}

export type FreeloInstanceType = AxiosInstance;
