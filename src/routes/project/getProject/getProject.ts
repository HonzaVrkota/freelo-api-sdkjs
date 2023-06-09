import { AxiosError } from "axios";
import { GetProjectType, GetProjectResponse } from "./types";

/**
 * Get project from freelo by ID
 *
 * @param {GetProjectProps} props
 * @return {Promise<GetProjectData>}
 * @see {@link https://freelo.docs.apiary.io/#reference/projects/project/get-project}
 */
export const getProjectApi: GetProjectType<true> = async ({
  projectID,
  instance,
}) => {
  try {
    const response = await instance.get<GetProjectResponse>(
      "/project/" + projectID
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
