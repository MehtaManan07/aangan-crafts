import { useFilters } from "../../hooks";

export const SortMenu = () => {
  const { data } = useFilters();
  return (
    <form>
      <label htmlFor="sort">sort by{` `}</label>
      <select
        id="sort"
        name="sort"
        value={data?.sort}
        onChange={(e) => data?.updateSort(e)}
      >
        <option value="price-lowest">price (lowest)</option>
        <option value="price-highest">price (highest)</option>
        <option value="name-a">name (a-z)</option>
        <option value="name-z">name (z-a)</option>
      </select>
    </form>
  );
};
