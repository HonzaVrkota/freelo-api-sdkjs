import axios, { AxiosError } from "axios";
import {
  FreeloCreateProjectFromTemplate,
  FreeloCreateProjectFromTemplateResponse,
} from "./types/project/freeloCreateProjectTemplate";
import {
  FreeloGetProject,
  FreeloGetProjectResponse,
} from "./types/project/freeloProject";
import {
  FreeloCreateProject,
  FreeloCreateProjectResponse,
} from "./types/project/freeloCreateProject";
import {
  FreeloManageProject,
  FreeloManageProjectResponse,
} from "./types/project/freeloManageProject";
import {
  FreeloCreateComment,
  FreeloCreateCommentResponse,
} from "./types/tasks/freeloCommentInTaks";
import {
  FreeloCollection,
  FreeloCollectionResponse,
} from "./types/project/collection/freeloCollection";
import {
  FreeloGetWorkers,
  FreeloGetWorkersResponse,
} from "./types/project/freeloWorkers";
import { FreeloCollectionUsers } from "./types/project/collection/freeloCollectionUsers";
import { Order, OrderBy } from "./types/types";

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

export const freeloApiInit = (username: string, apiKey: string) => {
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
    instance,
    templateId,
    name
  ) => {
    if (!templateId) {
      throw new Error("Missing template id.");
    }
    try {
      const response =
        await instance.post<FreeloCreateProjectFromTemplateResponse>(
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

  const createProject: FreeloCreateProject = async (
    name,
    currency_iso,
    project_owner_id
  ) => {
    if (!name || !currency_iso || !project_owner_id) {
      throw new Error("Missing attributes. Check Types");
    }
    try {
      const response = await instance.post<FreeloCreateProjectResponse>(
        freeloApiV1.routes.createProject,
        {
          name: name,
          currency_iso: currency_iso,
          project_owner_id: project_owner_id,
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
        message: `Projekt se nepodařilo vytvořit - Chyba ${err.response?.status} ${err.response?.statusText}`,
        error: error,
      };
    }
  };

  const getCollection: FreeloCollection = async (order_by?: OrderBy, order?: Order) => {
    try {
      const response = await instance.get<FreeloCollectionResponse>(
        "/projects?order_by=" + order_by + "&order=" + order
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
        message: `Projekty se nepodařilo načíst - Chyba ${err.response?.status} ${err.response?.statusText}`,
        error: error,
      };
    }
  };

  /* const getCollectionUsers: FreeloCollectionUsers = async ( props: FreeloCollectionUsers ) => {
    try{      

    } catch (error){
      const err = error as AxiosError;
      console.error("Error: ", err);
      return {
        data: null,
        success: false,
        message: `Projekty se nepodařilo načíst - Chyba ${err.response?.status} ${err.response?.statusText}`,
        error: error,
      };
    }
  }; */


  const getAllCollection: FreeloCollection = async (order_by?, order?) => {
    try {
      const response = await instance.get<FreeloCollectionResponse>(
        "/all-projects?order_by=" + order_by + "&order=" + order
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
        message: `Projekty se nepodařilo načíst - Chyba ${err.response?.status} ${err.response?.statusText}`,
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

  const getProjectWorkers: FreeloGetWorkers = async (projectId) => {
    if (!projectId) throw new Error("Missing project id.");
    try {
      const response = await instance.get<FreeloGetWorkersResponse>(
        freeloApiV1.routes.getProject + projectId + "/workers"
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
    createProjectFromTemplate,
    createProject,
    getProject,
    getProjectWorkers,
    getCollection,
    getAllCollection,
    archiveProject,
    activateProject,
    deleteProject,
    createCommentInTask,
  } as const;
};
