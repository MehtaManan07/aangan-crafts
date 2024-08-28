import { useFilters } from "../../hooks";

export const ClearFilters = () => {
  const { clearFilters } = useFilters();
  return (
    <button className="clear-btn" type="button" onClick={clearFilters}>
      clear filters
    </button>
  );
};
