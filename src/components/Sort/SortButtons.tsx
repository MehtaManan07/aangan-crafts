import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilters } from "../../hooks";

export const SortButtons = () => {
  const { data } = useFilters();
  return (
    <div className="btn-container">
      <button
        className={data?.gridView ? "active" : undefined}
        type="button"
        onClick={data?.setGridView}
      >
        <BsFillGridFill />
      </button>
      <button
        className={!data?.gridView ? "active" : undefined}
        type="button"
        onClick={data?.setListView}
      >
        <BsList />
      </button>
    </div>
  );
};
