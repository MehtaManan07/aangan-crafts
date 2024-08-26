import ProductComponent from "../../../../components/Product";
import { useFetchProducts } from "../../../../hooks";
import { useMemo } from "react";

export const FeaturedProductsCards = () => {
  const { data } = useFetchProducts();
  const featuredProducts = useMemo(() => {
    if (!data) return [];
    const featuredProds = data.data.filter((product) => product.featured);
    return featuredProds;
  }, [data]);

  return (
    <div className="section-center featured">
      {featuredProducts.map((product) => (
        <ProductComponent key={product.serialNumber} product={product} />
      ))}
    </div>
  );
};
