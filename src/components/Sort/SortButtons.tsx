import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilteredProducts, useFilters } from "../../hooks";

export const SortButtons = () => {
  const { setGridView, setListView } = useFilters();
  const { data } = useFilteredProducts();
  return (
    <div className="btn-container">
      <button
        className={data?.gridView ? "active" : undefined}
        type="button"
        onClick={setGridView}
      >
        <BsFillGridFill />
      </button>
      <button
        className={!data?.gridView ? "active" : undefined}
        type="button"
        onClick={setListView}
      >
        <BsList />
      </button>
    </div>
  );
};
