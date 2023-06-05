import { AxiosError } from "axios";
import { GetTasklistResponse, GetTasklistType } from "./types";

export const getTasklistApi: GetTasklistType<true> = async ({
  tasklistID,
  instance,
}) => {
  try {
    const response = await instance.get<GetTasklistResponse>(
      "/tasklist/" + tasklistID
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
      message: `Tasklist se nepodařilo načíst - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
