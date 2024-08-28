import fetcher from "../fetcher";
import { FetchProductsResponse } from "./types";

const API_ORIGIN = "/ready-products";

const fetchFeaturedProducts = async () => {
  const data = await fetcher<FetchProductsResponse>(`${API_ORIGIN}/featured`);
  return data;
};

const fetchAllProducts = async () => {
  console.log("fetchAllProducts");
  const data = await fetcher<FetchProductsResponse>(API_ORIGIN);
  return data;
};

export { fetchFeaturedProducts, fetchAllProducts };
