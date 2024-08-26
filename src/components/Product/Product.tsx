import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { ProductWrapper } from "./styles";
import { Product } from "../../api/products/types";

const ProductComponent: React.FC<{ product: Product }> = ({ product }) => {
  const { images, name, price, slug } = product;
  const image = images[0];
  return (
    <ProductWrapper>
      <div className="container">
        <Link to={`/products/${slug}`}>
          <img alt={name} src={image} />
          <div className="link">
            <FaSearch />
          </div>
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </ProductWrapper>
  );
};

export default ProductComponent;
