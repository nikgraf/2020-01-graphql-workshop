import DataLoader from "dataloader";
import { Product, User } from "./generated/graphql";

export type GraphQLContext = {
  productLoader: DataLoader<string, Product, string>;
  userLoader: DataLoader<string, User, string>;
};
