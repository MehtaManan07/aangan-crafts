/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import styled from "styled-components";
import { Filters, PageHero, ProductList, Sort } from "../../components";
import { useFilteredProducts, useFilters } from "../../hooks";

const ProductsPage = () => {
  const { resetIsClickFromServices, clearFilters } = useFilters();
  const { data } = useFilteredProducts();

  // useEffect(() => {
  //   if (data?.isClickFromServices) {
  //     // if this page mounts because clicking a button in Services, should not run clearFilters()
  //     // no set time out is needed to reset the variable
  //     resetIsClickFromServices();
  //   } else {
  //     // when component mounts clear the filter
  //     clearFilters();
  //   }
  // }, [clearFilters, data?.isClickFromServices, resetIsClickFromServices]);

  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
