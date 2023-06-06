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
import { archiveProjectApi } from "./archiveProject/archiveProject";
import { ArchiveProjectType } from "./archiveProject/types";
import { ActivateProjectType } from "./activateProject/types";
import { activateProjectApi } from "./activateProject/activateProject";
import { deleteProjectApi } from "./deleteProject/deleteProject";
import { DeleteProjectType } from "./deleteProject/types";

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

  const archiveProject: ArchiveProjectType = async (props) =>
    archiveProjectApi({
      instance,
      ...props,
    });

  const activateProject: ActivateProjectType = async (props) =>
    activateProjectApi({
      instance,
      ...props,
    });

  const getProject: GetProjectType = async (props) =>
    getProjectApi({
      instance,
      ...props,
    });

  const deleteProject: DeleteProjectType = async (props) =>
    deleteProjectApi({
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

  /**
   * TODO : missing https://freelo.docs.apiary.io/#reference/projects/users-projects-collection/paginated-collection-of-users-projects
   * https://freelo.docs.apiary.io/#reference/projects/template-projects-collection/paginated-collection-of-all-template-projects
   * https://freelo.docs.apiary.io/#reference/projects/archived-projects-collection/paginated-collection-of-all-archived-projects
   * https://freelo.docs.apiary.io/#reference/projects/invited-projects-collection/paginated-collection-of-all-invited-projects
   */

  return {
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
    /**
     * Archive project
     *
     * @param {string} projectID - The order of the collection.
     * @return {Promise<ArchiveProjectType>} The response from the API.
     * @see {@link https://freelo.docs.apiary.io/#reference/projects/archive-project/archive-project}
     */
    archiveProject,
    /**
     * Activate project
     *
     * @param {string} projectID - The order of the collection.
     * @return {Promise<ActivateProjectType>} The response from the API.
     * @see {@link https://freelo.docs.apiary.io/#reference/projects/activate-project/activate-project}
     */
    activateProject,
    /**
     * Get project from freelo by ID
     *
     * @param {GetProjectProps} props
     * @return {Promise<GetProjectData>}
     * @see {@link https://freelo.docs.apiary.io/#reference/projects/project/get-project}
     */
    getProject,
    /**
     * Delete project
     *
     * @param {string} projectID - The order of the collection.
     * @returns {Promise<DeleteProjectType>} The response from the API.
     * @see {@link https://freelo.docs.apiary.io/#reference/projects/project-workers-collection/delete-project}
     */
    deleteProject,
    /**
     * Create freeelo project from template
     *
     * @param {string} templateId - id of template from freelo
     * @param {string} name - name of the new project
     * @return {Promise<FreeloCreateProjectFromTemplateResponse>} response from freelo
     */
    createProjectFromTemplate,
  };
};
