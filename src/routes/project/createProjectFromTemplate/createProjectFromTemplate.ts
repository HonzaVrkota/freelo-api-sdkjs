import { AxiosError } from "axios";
import {
  CreateProjectFromTemplateResponse,
  CreateProjectFromTemplateType,
} from "./types";

export const createProjectFromTemplateApi: CreateProjectFromTemplateType<
  true
> = async ({ instance, name, templateId }) => {
  if (!templateId) {
    throw new Error("Missing template id.");
  }
  try {
    const response = await instance.post<CreateProjectFromTemplateResponse>(
      "/project/create-from-template/" + templateId,
      {
        name: name,
      }
    );
    return {
      data: response.data,
      success: true,
      message: "Projekt byl úspěšně vytvořen.",
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
