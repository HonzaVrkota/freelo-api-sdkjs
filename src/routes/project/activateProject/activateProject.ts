import { AxiosError } from "axios";
import { ActivateProjectRresponse, ActivateProjectType } from "./types";

/**
 * Activate project
 *
 * @param {string} projectID - The order of the collection.
 * @return {Promise<ActivateProjectType>} The response from the API.
 * @see {@link https://freelo.docs.apiary.io/#reference/projects/activate-project/activate-project}
 */
export const activateProjectApi: ActivateProjectType<true> = async ({
  instance,
  projectID,
}) => {
  if (!projectID) throw new Error("Missing project id.");
  try {
    const response = await instance.post<ActivateProjectRresponse>(
      "/project/" + projectID + "/activate"
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
      message: `Projekt se nepodařilo aktivovat - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
