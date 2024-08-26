import { useFilters } from "../../hooks";

export const ClearFilters = () => {
  const { data } = useFilters();
  return (
    <button className="clear-btn" type="button" onClick={data?.clearFilters}>
      clear filters
    </button>
  );
};
