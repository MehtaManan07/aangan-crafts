import { BaseApiResponse } from "../types";

export type SendContactQueryPayload = {
  name: string;
  message?: string;
  contactNumber: string;
};

export type SendContactQueryResponse = BaseApiResponse
