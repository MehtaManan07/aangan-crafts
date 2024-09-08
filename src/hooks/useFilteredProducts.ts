import { useQuery, UseQueryOptions } from "react-query";
import QueryKeyGenerator from "../utils/QueryKeyGenerator";
import { useQueryClient } from "../utils/QueryProvider";

export type FiltersType = {
  searchTerm: string;
  minPrice: number;
  maxPrice: number;
  price: number;
};

export const defaultFilters: FiltersType = {
  searchTerm: "",
  minPrice: 0,
  maxPrice: 0,
  price: 0,
};
type QueryData = {
  gridView: boolean;
  sort: string;
  filters: FiltersType;
  isClickFromServices: boolean;
};
const initialData: QueryData = {
  gridView: true,
  filters: defaultFilters,
  isClickFromServices: false,
  sort: "price-highest",
};
interface Options<TData>
  extends Omit<
    UseQueryOptions<QueryData, unknown, TData, string[]>,
    "queryKey" | "queryFn" | "select"
  > {
  select?: (data: QueryData) => TData;
}

const useFetchProducts = <T = QueryData>({ ...options }: Options<T> = {}) => {
  const queryCLient = useQueryClient();
  const fetchAvailableItemsQuery = useQuery({
    queryKey: QueryKeyGenerator.FilteredData(),
    queryFn: async ({ queryKey }) => {
      const data = queryCLient.getQueryData<QueryData>(queryKey);
      return data ?? initialData;
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
export type { QueryData as FilteredProductsData };
