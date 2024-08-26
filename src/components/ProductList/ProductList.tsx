import { useFetchProducts, useFilters } from "../../hooks";
import { Loading } from "../shared";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { data } = useFilters();
  const { isLoading } = useFetchProducts();

  if (isLoading) {
    return <Loading />;
  }

  if ((data?.filteredProducts.length ?? 0) < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no product matches your search...
      </h5>
    );
  }

  if (!data?.gridView) {
    return <ListView filteredProducts={data?.filteredProducts ?? []} />;
  }
  return <GridView filteredProducts={data?.filteredProducts} />;
};

export default ProductList;
