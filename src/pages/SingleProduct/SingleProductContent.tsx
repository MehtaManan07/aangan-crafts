import { formatPrice } from "../../utils/helpers";
import { SingleProductProps } from "./types";

export const SingleProductContent = ({ singleProduct }: SingleProductProps) => {
  const { name, price, description, stock, material } = {
    ...singleProduct,
  };
  return (
    <section className="content">
      <h2>{name}</h2>
      <h5 className="price">{price ? formatPrice(price) : null}</h5>
      <p className="desc">{description}</p>
      <p className="info">
        <span>Availability : </span>
        {stock > 0 ? "In stock" : "Out of stock"}
      </p>

      {material ? (
        <p className="info">
          <span>Material : </span>
          {material}
        </p>
      ) : undefined}
    </section>
  );
};
