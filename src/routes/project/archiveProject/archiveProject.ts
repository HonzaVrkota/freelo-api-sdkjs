import { AxiosError } from "axios";
import { ArchiveProjectRresponse, ArchiveProjectType } from "./types";

/**
 * Archive project
 *
 * @param {string} projectID - The order of the collection.
 * @return {Promise<ArchiveProjectType>} The response from the API.
 * @see {@link https://freelo.docs.apiary.io/#reference/projects/archive-project/archive-project}
 */
export const archiveProjectApi: ArchiveProjectType<true> = async ({
  instance,
  projectID,
}) => {
  if (!projectID) throw new Error("Missing project id.");
  try {
    const response = await instance.post<ArchiveProjectRresponse>(
      "/project/" + projectID + "/archive"
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
      message: `Projekt se nepodařilo archivovat - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
