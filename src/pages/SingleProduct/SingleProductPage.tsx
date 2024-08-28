import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { BackToProductsButton } from "./BackToProductsButton";
import { SingleProductContent } from "./SingleProductContent";
import { ProductWrapper } from "./styles";
import { PageHero } from "../../components";
import { useFetchProducts } from "../../hooks";
import ErrorPage from "../Error";
import ProductImages from "./ProductImages";

const SingleProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useFetchProducts();

  const productData = useMemo(() => {
    if (!data) return { product: null, error: false };
    const product = data.data.find((item) => item.slug === slug);
    return { product, error: !product };
  }, [data, slug]);

  if (productData.error) {
    return <ErrorPage />;
  } else {
    return (
      <ProductWrapper>
        <PageHero isSingleProduct title={productData.product?.name ?? ""} />
        <div className="section section-center page">
          <BackToProductsButton />
          <div className="product-center">
            <ProductImages images={productData.product?.images ?? []} />
            {productData.product ? (
              <SingleProductContent singleProduct={productData.product} />
            ) : null}
          </div>
        </div>
      </ProductWrapper>
    );
  }
};

export default SingleProductPage;
