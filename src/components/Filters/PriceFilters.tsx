import { useFilteredProducts, useFilters } from "../../hooks";
import { formatPrice } from "../../utils/helpers";

export const PriceFilters = () => {
  const { data } = useFilteredProducts();
  const { updateFilters } = useFilters();
  return (
    <div className="form-control">
      <h5>price</h5>
      <p className="price">{formatPrice(data?.filters?.price ?? 0)}</p>
      <input
        max={data?.filters?.maxPrice}
        min={data?.filters?.minPrice}
        name="price"
        type="range"
        value={data?.filters?.price}
        onChange={updateFilters}
      />
    </div>
  );
};
