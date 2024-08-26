import { BaseApiResponse } from "../types";

export type FetchProductsResponse = BaseApiResponse & {
    data: Product[];
    count: number;
};

export type Product = {
  id: number;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  serialNumber: number;
  name: string;
  size: string;
  price: number;
  stock: number;
  description: string;
  material: string;
  images: string[];
  featured: boolean;
  slug: string;
};
