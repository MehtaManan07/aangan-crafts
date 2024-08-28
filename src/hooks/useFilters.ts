import { Product } from "../api/products/types";
import { ChangeEventHandler } from "react";
import { useQueryClient } from "../utils/QueryProvider";
import useFetchProducts from "./useFetchProducts";
import QueryKeyGenerator from "../utils/QueryKeyGenerator";
import { FilteredProductsData } from "./useFilteredProducts";

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

const useFilters = () => {
  const { data: products } = useFetchProducts();
  const queryClient = useQueryClient();

  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = queryClient.getQueryData<FilteredProductsData>(
      QueryKeyGenerator.FilteredData()
    );
    if (!data) return;
    queryClient.setQueryData(QueryKeyGenerator.FilteredData(), {
      ...data,
      sort: e.target.value,
    });
  };

  const updateFilters: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const data = queryClient.getQueryData<FilteredProductsData>(
      QueryKeyGenerator.FilteredData()
    );
    if (!data) return;
    queryClient.setQueryData(QueryKeyGenerator.FilteredData(), {
      ...data,
      filters: { ...data.filters, [name]: value },
    });
  };

  const clearFilters = () => {
    const data = queryClient.getQueryData<FilteredProductsData>(
      QueryKeyGenerator.FilteredData()
    );
    if (!data) return;
    queryClient.setQueryData(QueryKeyGenerator.FilteredData(), {
      ...data,
      filters: defaultFilters,
    });
  };

  const handleClickFromServices = () => {
    const data = queryClient.getQueryData<FilteredProductsData>(
      QueryKeyGenerator.FilteredData()
    );
    if (!data) return;
    queryClient.setQueryData(QueryKeyGenerator.FilteredData(), {
      ...data,
      isClickFromServices: true,
    });
  };

  const resetIsClickFromServices = () => {
    const data = queryClient.getQueryData<FilteredProductsData>(
      QueryKeyGenerator.FilteredData()
    );
    if (!data) return;
    queryClient.setQueryData(QueryKeyGenerator.FilteredData(), {
      ...data,
      isClickFromServices: false,
    });
  };

  const filterAndSortProducts = (products: Product[]) => {
    let filtered = products;
    const data = queryClient.getQueryData<FilteredProductsData>(
      QueryKeyGenerator.FilteredData()
    );
    if (!data) return filtered;
    const filters = data.filters;
    const sort = data.sort;

    // Apply filters
    if (filters.searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }
    if (filters.minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= filters.minPrice
      );
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= filters.maxPrice
      );
    }

    // Apply sorting
    switch (sort) {
      case "price-lowest":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-highest":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-a":
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z":
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return filtered;
  };

  const setGridView = (gridView: boolean) => {
    const data = queryClient.getQueryData<FilteredProductsData>(
      QueryKeyGenerator.FilteredData()
    );
    if (!data) return;
    queryClient.setQueryData(QueryKeyGenerator.FilteredData(), {
      ...data,
      gridView,
    });
  };

  return {
    allProducts: products?.data ?? [],
    setGridView: () => setGridView(true),
    setListView: () => setGridView(false),
    updateSort,
    updateFilters,
    clearFilters,
    handleClickFromServices,
    resetIsClickFromServices,
    filterAndSortProducts,
  };
};

export default useFilters;
