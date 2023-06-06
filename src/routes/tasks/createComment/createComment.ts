import { AxiosError, AxiosResponse } from "axios";
import {
  CreateCommentBodyData,
  CreateCommentResponse,
  CreateCommentType,
} from "./types";

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
export const createCommentInTaskApi: CreateCommentType<true> = async ({
  instance,
  task_id,
  content,
  files,
}) => {
  if (!task_id) throw new Error("Missing task id.");
  try {
    const response = await instance.post<
      CreateCommentResponse,
      AxiosResponse<CreateCommentResponse>,
      CreateCommentBodyData
    >(`/task/${task_id}/comments/`, {
      content: content,
      files: files,
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
      message: `Komentář se nepodařilo vytvořit. - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
