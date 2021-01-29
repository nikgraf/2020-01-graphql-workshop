const products = [
  {
    id: "aaaaa",
    name: "Greenbook",
    description: "Zero carbon emission notebook",
    creatorId: "uuuu",
    image: {
      url: "http://example.com/1.png",
      title: "Greenbook front view",
    },
  },
  {
    id: "bbbbb",
    name: "Bluebook",
    description: "The finest notebook on the market.",
    creatorId: "uuuu",
    image: {
      url: "http://example.com/2.png",
      title: "Bluebook front view",
    },
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

export function getProductsByUserId(userId: string) {
  console.log("getProductsByUserId", userId);
  return products.filter((product) => product.creatorId === userId);
}
