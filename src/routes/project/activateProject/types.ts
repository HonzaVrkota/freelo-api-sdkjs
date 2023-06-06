import {
  ApiResponseData,
  ApiRoute,
  FreeloInstanceType,
} from "../../../types/types";

export interface ActivateProjectRresponse {
  result: "string";
}

export type ActivateProjectProps = {
  projectID: string;
  instance: FreeloInstanceType;
};

export type ActivateProjectData = ApiResponseData<ActivateProjectRresponse>;

export type ActivateProjectType<I extends boolean = false> = ApiRoute<
  ActivateProjectProps,
  ActivateProjectData,
  I
>;
