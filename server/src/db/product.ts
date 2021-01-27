const products = [
  {
    id: "aaaaa",
    name: "Greenbook",
    description: "Zero carbon emission notebook",
  },
  {
    id: "bbbbb",
    name: "Bluebook",
    description: "The finest notebook on the market.",
  },
];

export function getAllProducts() {
  return products;
}

export function getProductsByIds(ids: readonly string[]) {
  console.log("getProductsByIds", ids);
  return products.filter((product) => ids.includes(product.id));
}
