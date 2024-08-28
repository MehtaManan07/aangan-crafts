import { useMemo } from "react";
import { useFetchProducts, useFilteredProducts, useFilters } from "../../hooks";
import { Loading } from "../shared";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filterAndSortProducts } = useFilters();
  const { data, isLoading } = useFetchProducts();
  const { data: filterData } = useFilteredProducts();
  
  
  const filteredProducts = useMemo(() => {
    console.log('isLoading');
    if (!data) return [];
    return filterAndSortProducts(data.data);
  }, [data, filterAndSortProducts]);

  if (isLoading) {
    return <Loading />;
  }

  if ((filteredProducts.length ?? 0) < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no product matches your search...
      </h5>
    );
  }

  if (!filterData?.gridView) {
    return <ListView filteredProducts={filteredProducts} />;
  }
  return <GridView filteredProducts={filteredProducts} />;
};

export default ProductList;
