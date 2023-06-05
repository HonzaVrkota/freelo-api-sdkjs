import {
  ApiResponseData,
  ApiRoute,
  Currency,
  FreeloApiResponse,
  FreeloInstanceType,
} from "../../../types/types";

export interface CreateProjectFromTemplateResponse {
  id: number;
  name: string;
  owner: {
    id: string;
    fullname: string;
  };
  currency_iso: Currency;
}

export type CreateProjectFromTemplateProps = {
  instance: FreeloInstanceType;
  templateId: string;
  name: string;
};

export type CreateProjectFromTemplateData =
  ApiResponseData<CreateProjectFromTemplateResponse>;

export type CreateProjectFromTemplateType<I extends boolean = false> = ApiRoute<
  CreateProjectFromTemplateProps,
  CreateProjectFromTemplateData,
  I
>;
