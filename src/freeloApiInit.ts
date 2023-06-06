import axios, { AxiosError } from "axios";
import { freeloProjectApi } from "./routes/project";
import { freeloTasklistApi } from "./routes/tasklists";
import { freeloTasksApi } from "./routes/tasks";

const freeloApiV1 = {
  url: "https://api.freelo.io/v1",
};

/**
 * Freelo api V1 initialization.
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

  return {
    ...freeloProjectApi(instance),
    ...freeloTasklistApi(instance),
    ...freeloTasksApi(instance),
  };
};
