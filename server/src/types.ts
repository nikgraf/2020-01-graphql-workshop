import DataLoader from "dataloader";
import { Product } from "./generated/graphql";

export type GraphQLContext = {
  productLoader: DataLoader<string, Product, string>;
};
