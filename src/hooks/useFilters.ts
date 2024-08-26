import { useQuery, UseQueryOptions } from "react-query";
import QueryKeyGenerator from "../utils/QueryKeyGenerator";
import { Product } from "../api/products/types";
import { ChangeEventHandler } from "react";
import { useQueryClient } from "../utils/QueryProvider";

type FiltersType = {
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

export type FilterState = {
  filteredProducts: Product[];
  allProducts: Product[];
  gridView: boolean;
  setGridView: () => void;
  setListView: () => void;
  sort: string;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filters: FiltersType;
  updateFilters: ChangeEventHandler<HTMLInputElement> | undefined;
  clearFilters: () => void;
  isClickFromServices: boolean;
  handleClickFromServices: () => void;
  resetIsClickFromServices: () => void;
};

const voidFn = () => {};

const initialState: FilterState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  setGridView: voidFn,
  setListView: voidFn,
  sort: "price-lowest",
  updateSort: voidFn,
  filters: defaultFilters,
  updateFilters: voidFn,
  clearFilters: voidFn,
  isClickFromServices: false,
  handleClickFromServices: voidFn,
  resetIsClickFromServices: voidFn,
};

interface Options<TData>
  extends Omit<
    UseQueryOptions<FilterState, unknown, TData, string[]>,
    "queryKey" | "queryFn" | "select"
  > {
  select?: (data: FilterState) => TData;
}

const useFilters = <T = FilterState>({ ...options }: Options<T> = {}) => {
  const queryClient = useQueryClient();
  const fetchAvailableItemsQuery = useQuery({
    queryKey: QueryKeyGenerator.RawMaterials(),
    queryFn: async ({ queryKey }) => {
      const oldData = queryClient.getQueryData<FilterState>(queryKey);
      if (oldData) {
        return oldData;
      }
      return initialState;
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    retry: 3,
    staleTime: Infinity,
    ...options,
  });

  return fetchAvailableItemsQuery;
};

export default useFilters;
