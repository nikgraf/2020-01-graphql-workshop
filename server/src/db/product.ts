export type Image = {
  url: string;
  title: string;
};

export type ProductModel = {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  image: Image;
};

const products: ProductModel[] = [
  {
    id: "aaaaa",
    name: "Greenbook",
    description: "Zero carbon emission notebook",
    creatorId: "uuuu",
    image: {
      url:
        "https://www.refurbed.at/files/pi/lenovo-tp-x240-4600u-1594969613.jpg?t=resize&h=400&w=300",
      title: "Greenbook front view",
    },
  },
  {
    id: "bbbbb",
    name: "Bluebook",
    description: "The finest notebook on the market.",
    creatorId: "uuuu",
    image: {
      url:
        "https://www.refurbed.at/files/pi/lenovo-tp-x240-4600u-1594969613.jpg?t=resize&h=400&w=300",
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
