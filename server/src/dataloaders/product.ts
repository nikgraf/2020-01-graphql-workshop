import DataLoader from "dataloader";
import { getProductsByIds } from "../db/product";

export function createProductLoader() {
  return new DataLoader(
    async (ids: readonly string[]) => await getProductsByIds(ids)
  );
}
