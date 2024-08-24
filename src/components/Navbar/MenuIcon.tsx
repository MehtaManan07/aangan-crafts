import { FaBars } from "react-icons/fa";
// import { useProductsContext } from "../../context/products_context";

export const MenuIcon = () => {
  //   const { openSidebar } = useProductsContext();
  return (
    <button className="nav-toggle" type="button">
      <FaBars />
    </button>
  );
};
