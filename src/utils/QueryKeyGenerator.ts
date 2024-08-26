const QueryKeyGenerator = {
  RawMaterials: () => ["products", "all"],
  Filters: () => ["products", "filters"],
} as const;

export default QueryKeyGenerator;
