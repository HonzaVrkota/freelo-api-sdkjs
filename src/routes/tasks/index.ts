import { FreeloInstanceType } from "../../types/types";
import { createCommentInTaskApi } from "./createComment/createComment";
import { CreateCommentType } from "./createComment/types";
import { getCollectionAllTasksApi } from "./getCollectionAllTasks/getCollectionAllTasks";
import { GetCollectionAllTasksType } from "./getCollectionAllTasks/types";

export const freeloTasksApi = (instance: FreeloInstanceType) => {
  const getCollectionAllTasks: GetCollectionAllTasksType = (props) =>
    getCollectionAllTasksApi({
      instance,
      ...props,
    });

  const createCommentInTask: CreateCommentType = (props) =>
    createCommentInTaskApi({
      instance,
      ...props,
    });

  return {
    /**
     * Creates a comment in a task using the provided parameters.
     *
     * @async
     * @param {Object} options - The options for creating the comment.
     * @param {FreeloInstanceType} options.instance - The Freelo instance.
     * @param {string} options.task_id - The ID of the task to add the comment to.
     * @param {string} options.content - The content of the comment.
     * @param {string[]} options.files - An array of file URLs to attach to the comment.
     * @returns {Promise<CreateCommentResponseType>} The result of the create comment operation.
     * @throws {Error} Throws an error if the task_id parameter is missing.
     * @see {@link https://freelo.docs.apiary.io/#reference/comments/comments-collection/create-comment}
     */
    createCommentInTask,
    /**
     * Retrieves all tasks from the collection using the provided parameters.
     *
     * @async
     * @param {Object} props - The properties for retrieving all tasks.
     * @param {FreeloInstanceType} props.instance - The Freelo instance.
     * @param {DueDateRangeType} props.due_date_range - The range of due dates.
     * @param {FinishedDateRangeType} props.finished_date_range - The range of finished dates.
     * @param {...any} props.otherProps - Other properties for the request.
     * @returns {Promise<GetCollectionAllTasksResponseType>} The result of the get all tasks operation.
     * @throws {Error} Throws an error if an error occurs during the request.
     * @see {@link https://freelo.docs.apiary.io/#reference/tasks/all-tasks-collection/paginated-collection-of-all-tasks}
     */
    getCollectionAllTasks,
  };
};
