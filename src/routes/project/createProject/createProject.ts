import { AxiosError } from "axios";
import { CreateProjectResponse, CreateProjectType } from "./types";

export const createProjectApi: CreateProjectType<true> = async ({
  currency_iso,
  instance,
  name,
  project_owner_id,
}) => {
  if (!name || !currency_iso || !project_owner_id) {
    throw new Error("Missing attributes. Check Types");
  }
  try {
    const response = await instance.post<CreateProjectResponse>("/projects", {
      name: name,
      currency_iso: currency_iso,
      project_owner_id: project_owner_id,
    });
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
      message: `Projekt se nepodařilo vytvořit - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
