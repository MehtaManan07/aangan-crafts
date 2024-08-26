import { useFilters } from "../../hooks";

export const SearchFilters = () => {
  const { data } = useFilters();

  return (
    <div className="form-control">
      <input
        className="search-input"
        name="searchTerm"
        placeholder="search"
        type="text"
        value={data?.filters.searchTerm}
        onChange={(e) => {
          if (data?.updateFilters) {
            data.updateFilters(e);
          }
        }}
      />
    </div>
  );
};
