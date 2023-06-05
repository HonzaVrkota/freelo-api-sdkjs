import { FreeloInstanceType } from "../../types/types";
import { getTasklistApi } from "./getTasklists/getTasklists";
import { GetTasklistData, GetTasklistType } from "./getTasklists/types";

export const freeloTasklistApi = (instance: FreeloInstanceType) => {
  const getTasklist: GetTasklistType = (props) =>
    getTasklistApi({
      instance,
      ...props,
    });

  return {
    /**
     * Get tasklist
     *
     * @param {string} tasklistID - The ID of tasklist.
     * @return {Promise<GetTasklistData>} The response from the API.
     * @see {@link https://freelo.docs.apiary.io/#reference/tasklists/tasklist/get-tasklist}
     */
    getTasklist,
  };
};
