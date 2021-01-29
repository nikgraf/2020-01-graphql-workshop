import { Resolvers } from "../generated/graphql";
import {
  getAllProducts,
  getProductsByIds,
  getProductById,
} from "../db/product";
import { getUserById } from "../db/user";

const resolvers: Resolvers = {
  Product: {
    image: () => {
      return { url: "https://example.com/bla.png" };
    },
    creator: (product: any) => {
      return getUserById(product.creatorId);
    },
  },
  Query: {
    products: () => getAllProducts(),
    product: async (_parent, args, context, info) => {
      return getProductById(args.id);
    },
    // product: async (_parent, args, context) => {
    //   const result = getProductsByIds([args.id]);
    //   if (result.length > 0) {
    //     return result[0];
    //   }
    //   return null;
    //   // return await context.productLoader.load(args.id);
    // },
  },
};

export default resolvers;
