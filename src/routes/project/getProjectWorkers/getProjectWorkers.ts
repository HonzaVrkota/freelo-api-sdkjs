import { AxiosError } from "axios";
import { GetProjectWorkersResponse, GetProjectWorkersType } from "./types";

export const getProjectWorkersApi: GetProjectWorkersType<true> = async ({
  projectID,
  instance,
}) => {
  if (!projectID) throw new Error("Missing project id.");
  try {
    const response = await instance.get<GetProjectWorkersResponse>(
      "/project/" + projectID + "/workers"
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
      message: `Projekt se nepodařilo načíst - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
