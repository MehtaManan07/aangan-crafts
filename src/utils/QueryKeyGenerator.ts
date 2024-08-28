const QueryKeyGenerator = {
  RawMaterials: () => ["products", "all"],
  Filters: () => ["products", "filters"],
  FilteredData: () => ["products", "filtered data"],
} as const;

export default QueryKeyGenerator;
