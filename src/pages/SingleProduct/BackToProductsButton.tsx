import { Link } from "react-router-dom";

export const BackToProductsButton = () => {
  return (
    <Link className="btn" to="/products">
      back to products
    </Link>
  );
};
