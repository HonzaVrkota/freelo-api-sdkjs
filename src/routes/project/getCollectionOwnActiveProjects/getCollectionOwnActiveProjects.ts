import { AxiosError } from "axios";
import {
  GetCollectionOwnActiveProjectsResponse,
  GetCollectionOwnActiveProjectsType,
} from "./types";

export const getCollectionOwnActiveProjectsApi: GetCollectionOwnActiveProjectsType<
  true
> = async ({ order, order_by, instance }) => {
  try {
    const response = await instance.get<GetCollectionOwnActiveProjectsResponse>(
      `/projects?${order_by && `order_by=${order_by}&`}${
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
      message: `Nepodařilo se načíst všechny vaše aktivní projekty - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
