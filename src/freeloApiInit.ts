import axios, { AxiosError } from "axios";
import {
  FreeloCreateProjectFromTemplate,
  FreeloCreateProjectFromTemplateResponse,
} from "./types/freeloCreateProjectTemplate";
import {
  FreeloGetProject,
  FreeloGetProjectResponse,
} from "./types/freeloProject";
import {
  FreeloCreateComment,
  FreeloCreateCommentResponse,
} from "./types/freeloCommentInTaks";

const freeloApiV1 = {
  url: "https://api.freelo.io/v1",
  routes: {
    createProjectFromTemplate: "/project/create-from-template/",
    getProject: "/project/",
    createTaskComment: (id: string) => `/task/${id}/comments/`,
  },
};

export const freeloApiInit = (username: string, apiKey: string) => {
  if (!username || !apiKey) {
    throw new Error("Missing username or api key for freelo api.");
  }
  const instance = axios.create({
    baseURL: freeloApiV1.url,
    auth: {
      username,
      password: apiKey,
    },
  });

  /**
   * Create freeelo project from template
   *
   * @param {string} templateId - id of template from freelo
   * @param {string} name - name of the new project
   * @return {Promise<FreeloCreateProjectFromTemplateResponse>} - response from freelo
   */
  const createProjectFromTemplate: FreeloCreateProjectFromTemplate = async (
    templateId,
    name
  ) => {
    if (!templateId) {
      throw new Error("Missing template id.");
    }
    try {
      const response =
        await instance.post<FreeloCreateProjectFromTemplateResponse>(
          freeloApiV1.routes.createProjectFromTemplate + templateId,
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

  const getProject: FreeloGetProject = async (projectId) => {
    if (!projectId) {
      throw new Error("Missing project id.");
    }
    try {
      const response = await instance.get<FreeloGetProjectResponse>(
        freeloApiV1.routes.getProject + projectId
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

  const createCommentInTask: FreeloCreateComment = async (taskId, content) => {
    if (!taskId) {
      throw new Error("Missing task id.");
    }
    try {
      const response = await instance.post<FreeloCreateCommentResponse>(
        freeloApiV1.routes.createTaskComment(taskId),
        {
          content: content,
        }
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
        message: `Komentář se nepodařilo vytvořit. - Chyba ${err.response?.status} ${err.response?.statusText}`,
        error: error,
      };
    }
  };

  return {
    createProjectFromTemplate,
    getProject,
    createCommentInTask,
  } as const;
};
