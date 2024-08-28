import { useMutation, UseMutationOptions } from "react-query";
import { sendContactQuery } from "../api";
type SendContactQuery = typeof sendContactQuery;
type ApiParams = Parameters<SendContactQuery>[0];
type ApiReturnType = ReturnType<SendContactQuery>;

type MutationArgs = Omit<ApiParams, "authToken">;

type Options = Omit<
  UseMutationOptions<Awaited<ApiReturnType>, unknown, MutationArgs>,
  "mutationFn"
>;
const useSendContactMutation = ({
  onError,
  onSuccess,
  ...options
}: Options) => {
  const mutation = useMutation({
    mutationFn: async (payload) => {
      return await sendContactQuery(payload);
    },
    onError(error: Error, variables, context) {
      if (onError) {
        onError(error, variables, context);
      }
    },
    onSuccess(data, variables, context) {
      if (onSuccess) {
        onSuccess(data, variables, context);
      }
    },
    retry: 2,
    retryDelay: (attempt) => attempt * 1000,
    ...options,
  });
  return mutation;
};

export default useSendContactMutation;
