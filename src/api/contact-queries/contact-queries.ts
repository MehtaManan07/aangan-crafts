import fetcher from "../fetcher";
import { SendContactQueryPayload, SendContactQueryResponse } from "./types";

const API_ORIGIN = "/contact-queries";

const sendContactQuery = async (payload: SendContactQueryPayload) => {
  const data = await fetcher<SendContactQueryResponse>(API_ORIGIN, {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export { sendContactQuery };
