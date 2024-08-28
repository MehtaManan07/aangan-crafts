import { useFilteredProducts, useFilters } from "../../hooks";

export const SearchFilters = () => {
  const { updateFilters } = useFilters();
  const { data } = useFilteredProducts();

  return (
    <div className="form-control">
      <input
        className="search-input"
        name="searchTerm"
        placeholder="search"
        type="text"
        value={data?.filters?.searchTerm ?? ""}
        onChange={(e) => {
          if (updateFilters) {
            updateFilters(e);
          }
        }}
      />
    </div>
  );
};
