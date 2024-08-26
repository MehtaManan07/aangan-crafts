import { useQuery, UseQueryOptions } from "react-query";
import { fetchAllProducts } from "../api";
import QueryKeyGenerator from "../utils/QueryKeyGenerator";

type ApiReturnType = Awaited<ReturnType<typeof fetchAllProducts>>;
interface Options<TData>
  extends Omit<
    UseQueryOptions<ApiReturnType, unknown, TData, string[]>,
    "queryKey" | "queryFn" | "select"
  > {
  select?: (data: ApiReturnType) => TData;
}

const useFetchProducts = <T = ApiReturnType>({
  ...options
}: Options<T> = {}) => {
  const fetchAvailableItemsQuery = useQuery({
    queryKey: QueryKeyGenerator.RawMaterials(),
    queryFn: async () => {
      return await fetchAllProducts();
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    retry: 3,
    staleTime: Infinity,
    ...options,
  });

  return fetchAvailableItemsQuery;
};

export default useFetchProducts;
export type { ApiReturnType as ProductsQueryData };
