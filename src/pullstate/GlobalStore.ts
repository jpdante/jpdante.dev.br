import { Store } from "pullstate";

interface IGlobalStore {
  isDarkMode: boolean;
}

export const GlobalStore = new Store<IGlobalStore>({
  isDarkMode: false,
});