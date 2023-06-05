import { Currency, FreeloApiResponse, FreeloInstanceType } from "../types";

export interface FreeloCreateProjectFromTemplateResponse {
  id: number;
  name: string;
  owner: {
    id: string;
    fullname: string;
  };
  currency_iso: Currency;
}

export type FreeloCreateProjectFromTemplate = (
  instance: FreeloInstanceType,
  templateId: string | null | undefined,
  name: string
) => Promise<
  FreeloApiResponse & {
    data: FreeloCreateProjectFromTemplateResponse | null;
  }
>;
