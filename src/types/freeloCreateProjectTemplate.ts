import { FreeloApiResponse } from "./types";

export interface FreeloCreateProjectFromTemplateResponse {
  id: number;
  name: string;
  owener: {
    id: string;
    fullname: string;
  };
  currency_iso: string;
}

export type FreeloCreateProjectFromTemplate = (
  templateId: string | null | undefined,
  name: string
) => Promise<
  FreeloApiResponse & {
    data: FreeloCreateProjectFromTemplateResponse | null;
  }
>;
