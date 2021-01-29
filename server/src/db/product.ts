const products = [
  {
    id: "aaaaa",
    name: "Greenbook",
    description: "Zero carbon emission notebook",
    creatorId: "uuuu",
  },
  {
    id: "bbbbb",
    name: "Bluebook",
    description: "The finest notebook on the market.",
    creatorId: "uuuu",
  },
];

export function getAllProducts() {
  return products;
}

export function getProductsByIds(ids: readonly string[]) {
  console.log("getProductsByIds", ids);
  return products.filter((product) => ids.includes(product.id));
}

export function getProductById(id: string) {
  console.log("getProductById", id);
  return products.find((product) => id === product.id) || null;
}
