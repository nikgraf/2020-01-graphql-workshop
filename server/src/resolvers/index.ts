import { Resolvers } from "../generated/graphql";
import { getAllProducts, getProductsByIds } from "../db/product";

const resolvers: Resolvers = {
  Query: {
    products: () => getAllProducts(),
    product: async (_parent, args, context) => {
      const result = getProductsByIds([args.id]);
      if (result.length > 0) {
        return result[0];
      }
      return null;
      // return await context.productLoader.load(args.id);
    },
  },
};

export default resolvers;
