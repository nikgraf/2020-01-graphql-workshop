import DataLoader from "dataloader";
import { getUsersByIds } from "../db/user";

export function createUserLoader() {
  return new DataLoader(
    async (ids: readonly string[]) => await getUsersByIds(ids)
  );
}
