import {
  ApiResponseData,
  ApiRoute,
  FreeloInstanceType,
} from "../../../types/types";

export interface DeleteProjectResponse {
  result: "string";
}

export type DeleteProjectProps = {
  projectID: string;
  instance: FreeloInstanceType;
};

export type DeleteProjectData = ApiResponseData<DeleteProjectResponse>;

export type DeleteProjectType<I extends boolean = false> = ApiRoute<
  DeleteProjectProps,
  DeleteProjectData,
  I
>;
