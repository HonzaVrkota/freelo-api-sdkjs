import { AxiosError } from "axios";
import { DeleteProjectResponse, DeleteProjectType } from "./types";

/**
 * Delete project
 *
 * @param {string} projectID - The order of the collection.
 * @returns {Promise<DeleteProjectType>} The response from the API.
 * @see {@link https://freelo.docs.apiary.io/#reference/projects/project-workers-collection/delete-project}
 */
export const deleteProjectApi: DeleteProjectType<true> = async ({
  projectID,
  instance,
}) => {
  try {
    const response = await instance.delete<DeleteProjectResponse>(
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
      message: `Projekt se nepodařilo smazat - Chyba ${err.response?.status} ${err.response?.statusText}`,
      success: false,
      error: error,
    };
  }
};
