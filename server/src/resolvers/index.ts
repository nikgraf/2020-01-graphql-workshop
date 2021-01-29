/**
 * getAllProducts
 * Product.creator(product) -> loader.load()
 * Product.creator(product) -> loader.load()
 * Product.creator(product) -> loader.load()
 *
 * getUsersByIds()
 */

import { Product, Resolvers } from "../generated/graphql";
import {
  getAllProducts,
  getProductsByIds,
  getProductById,
  getProductsByUserId,
} from "../db/product";
import { getUserById } from "../db/user";

const resolvers: Resolvers = {
  User: {
    avatar: (parent: any) => parent.image,
    // @ts-ignore
    createdProducts: (user) => {
      return getProductsByUserId(user.id);
    },
  },
  Product: {
    // @ts-ignore
    creator: (product: any, args, context) => {
      // return getUserById(product.creatorId);
      return context.userLoader.load(product.creatorId);
    },
  },
  Query: {
    products: () => {
      // console.log(JSON.stringify(info, null, 2));
      return getAllProducts() as any[];
    },
    // @ts-ignore
    product: async (_parent, args, context, info) => {
      return getProductById(args.id);
    },
    // @ts-ignore
    user: async (_parent, args) => {
      console.log("user query");
      return getUserById(args.id) as any;
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
