import {
  ApiResponseData,
  ApiRoute,
  FreeloInstanceType,
} from "../../../types/types";

export interface ArchiveProjectRresponse {
  result: "string";
}

export type ArchiveProjectProps = {
  projectID: string;
  instance: FreeloInstanceType;
};

export type ArchiveProjectData = ApiResponseData<ArchiveProjectRresponse>;

export type ArchiveProjectType<I extends boolean = false> = ApiRoute<
  ArchiveProjectProps,
  ArchiveProjectData,
  I
>;
