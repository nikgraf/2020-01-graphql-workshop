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
    creator: (product: any) => {
      return getUserById(product.creatorId);
    },
  },
  Query: {
    products: () => getAllProducts() as any[],
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
