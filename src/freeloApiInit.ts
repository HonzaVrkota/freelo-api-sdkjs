import axios, { AxiosError } from "axios";
import {
  FreeloManageProject,
  FreeloManageProjectResponse,
} from "./types/project/freeloManageProject";
import {
  FreeloCreateComment,
  FreeloCreateCommentResponse,
} from "./types/tasks/freeloCommentInTaks";
import { freeloProjectApi } from "./routes/project";
import { freeloTasklistApi } from "./routes/tasklists";

const freeloApiV1 = {
  url: "https://api.freelo.io/v1",
  routes: {
    createProjectFromTemplate: "/project/create-from-template/",
    createProject: "/project/",
    getCollection: "/projects",
    getProject: "/project/",
    createTaskComment: (id: string) => `/task/${id}/comments/`,
  },
};

/**
 * Freelo
 *
 * @param username
 * @param apiKey
 * @return
 */
export const freeloApiInit = (username: string, apiKey: string) => {
  const instance = axios.create({
    baseURL: freeloApiV1.url,
    auth: {
      username,
      password: apiKey,
    },
  });

  const archiveProject: FreeloManageProject = async (projectId) => {
    if (!projectId) throw new Error("Missing project id.");
    try {
      const response = await instance.post<FreeloManageProjectResponse>(
        freeloApiV1.routes.getProject + projectId + "/archive"
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

  const activateProject: FreeloManageProject = async (projectId) => {
    if (!projectId) throw new Error("Missing project id.");
    try {
      const response = await instance.post<FreeloManageProjectResponse>(
        freeloApiV1.routes.getProject + projectId + "/activate"
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

  const deleteProject: FreeloManageProject = async (projectId) => {
    try {
      const response = await instance.delete<FreeloManageProjectResponse>(
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
        message: `Projekt se nepodařilo smazat - Chyba ${err.response?.status} ${err.response?.statusText}`,
        success: false,
        error: error,
      };
    }
  };

  const createCommentInTask: FreeloCreateComment = async (taskId, content) => {
    if (!taskId) throw new Error("Missing task id.");
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
    ...freeloProjectApi(instance),
    ...freeloTasklistApi(instance),
    archiveProject,
    activateProject,
    deleteProject,
    createCommentInTask,
  };
};
