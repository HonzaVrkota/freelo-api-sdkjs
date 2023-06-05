import { FreeloInstanceType, Order, OrderByProjects } from "../../types/types";
import { createProjectApi } from "./createProject/createProject";
import { CreateProjectType } from "./createProject/types";
import { createProjectFromTemplateApi } from "./createProjectFromTemplate/createProjectFromTemplate";
import { CreateProjectFromTemplateType } from "./createProjectFromTemplate/types";
import { getCollectionAllProjectsApi } from "./getCollectionAllProjects/getCollectionAllProjects";
import { GetCollectionAllProjectsType } from "./getCollectionAllProjects/types";
import { getCollectionOwnActiveProjectsApi } from "./getCollectionOwnActiveProjects/getCollectionOwnActiveProjects";
import { GetCollectionOwnActiveProjectsType } from "./getCollectionOwnActiveProjects/types";
import { getProjectApi } from "./getProject/getProject";
import { GetProjectType } from "./getProject/types";
import { getProjectWorkersApi } from "./getProjectWorkers/getProjectWorkers";
import { GetProjectWorkersType } from "./getProjectWorkers/types";

/**
 *
 * @param {AxiosInstance} instance
 * @return ProjectApi routes
 */
export const freeloProjectApi = (instance: FreeloInstanceType) => {
  // Create Project
  const createProject: CreateProjectType = async (props) =>
    createProjectApi({
      instance,
      ...props,
    });

  const getCollectionOwnActiveProjects: GetCollectionOwnActiveProjectsType = (
    props
  ) => getCollectionOwnActiveProjectsApi({ instance, ...props });

  const getCollectionAllProjects: GetCollectionAllProjectsType = (props) =>
    getCollectionAllProjectsApi({ instance, ...props });

  const getProjectWorkers: GetProjectWorkersType = async (props) =>
    getProjectWorkersApi({
      instance,
      ...props,
    });

  const getProject: GetProjectType = async (props) =>
    getProjectApi({
      instance,
      ...props,
    });

  const createProjectFromTemplate: CreateProjectFromTemplateType = async (
    props
  ) =>
    createProjectFromTemplateApi({
      instance,
      ...props,
    });

  return {
    /**
     * Get project from freelo by ID
     *
     * @param {GetProjectProps} props
     * @return {Promise<GetProjectData>}
     */
    getProject,
    /**
     * Create freeelo project from template
     *
     * @param {string} templateId - id of template from freelo
     * @param {string} name - name of the new project
     * @return {Promise<FreeloCreateProjectFromTemplateResponse>} response from freelo
     */
    createProjectFromTemplate,
    /**
     * Creates a new project.
     *
     * @param {string} name - The name of the project.
     * @param {string} currency_iso - The ISO code for the currency.
     * @param {string} project_owner_id - The ID of the project owner.
     * @returns {Promise<FreeloCreateProjectResponse>} The response from the API.
     * @throws {Error} If any required attribute is missing.
     */
    createProject,
    /**
     * Collection of all own (active) projects including active tasklists
     *
     * @param {OrderByProjects} order_by - The order of the collection.
     * @param {Order} order - The order of the collection.
     * @return {Promise<GetCollectionOwnActiveProjectsData>} The response from the API.
     */
    getCollectionOwnActiveProjects,
    /**
     * Paginated collection of all (owned and invited) projects
     *
     * @param {OrderByProjects} order_by - The order of the collection.
     * @param {Order} order - The order of the collection.
     * @return {Promise<GetCollectionAllProjectsData>} The response from the API.
     */
    getCollectionAllProjects,
    /**
     * Paginated collection of all project workers
     *
     * @param {string} projectID - The order of the collection.
     * @return {Promise<GetProjectWorkersType>} The response from the API.
     * @see {@link https://freelo.docs.apiary.io/#reference/projects/project-workers-collection/paginated-collection-of-all-project-workers}
     */
    getProjectWorkers,
  };
};
