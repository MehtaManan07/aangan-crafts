import { productDataType, productDataTypeKey } from "./productData";

export const formatPrice = (number: number): string => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number);
};

export const getUniqueValues = <K extends productDataTypeKey>(
  data: productDataType[],
  category: K,
  noAllValue: boolean = false
): Array<productDataType[K]> => {
  const uniqueValues = data
    .map((item) => item[category])
    .flat()
    .filter(Boolean) as Array<productDataType[K]>;

  const uniqueSet = Array.from(new Set(uniqueValues));

  if (noAllValue) {
    return uniqueSet;
  }

  return ["all", ...uniqueSet] as Array<productDataType[K]>;
};

export const sortUniqueCategoriesByFirstNumber = (
  categoryArray: string[]
): string[] => {
  const copiedArray = [...categoryArray];
  return copiedArray.sort((a, b) => {
    const aMatch = a.match(/\d+/);
    const bMatch = b.match(/\d+/);

    const aNumber = aMatch ? Number(aMatch[0]) : 0;
    const bNumber = bMatch ? Number(bMatch[0]) : 0;

    return aNumber - bNumber;
  });
};
