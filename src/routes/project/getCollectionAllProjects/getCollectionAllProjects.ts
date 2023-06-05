import { AxiosError } from "axios";
import {
  GetCollectionAllProjectsResponse,
  GetCollectionAllProjectsType,
} from "./types";

export const getCollectionAllProjectsApi: GetCollectionAllProjectsType<
  true
> = async ({ order, order_by, instance }) => {
  try {
    const response = await instance.get<GetCollectionAllProjectsResponse>(
      `/all-projects?${order_by && `order_by=${order_by}&`}${
        order && `order=${order}`
      }`
    );
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    const err = error as AxiosError;
    console.error("Error: ", err);
    return {
      data: null,
      success: false,
      message: `Projekty se nepodařilo načíst - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
