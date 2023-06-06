import { AxiosError } from "axios";
import queryString from "query-string";
import {
  GetCollectionAllTasksResponse,
  GetCollectionAllTasksType,
} from "./types";

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
export const getCollectionAllTasksApi: GetCollectionAllTasksType<true> = async (
  props
) => {
  const { instance, due_date_range, finished_date_range, ...otherProps } =
    props;

  try {
    const urlParams = queryString.stringify(
      {
        "due_date_range[date_from]": due_date_range?.date_from,
        "due_date_range[date_to]": due_date_range?.date_to,
        "finished_date_range[date_from]": finished_date_range?.date_from,
        "finished_date_range[date_to]": finished_date_range?.date_to,
        ...otherProps,
      },
      { arrayFormat: "bracket", encode: false }
    );

    const response = await instance.get<GetCollectionAllTasksResponse>(
      `/all-tasks?${urlParams}`
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
      message: `Úkoly se nepodařilo načíst - Chyba ${err.response?.status} ${err.response?.statusText}`,
      error: error,
    };
  }
};
