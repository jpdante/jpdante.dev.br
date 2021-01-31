import { Store } from "pullstate";

interface IGlobalStore {
  isDarkMode: boolean;
}

function getDarkModeConfig() {
  var dataInStorage = localStorage.getItem("dark-mode");
  if (dataInStorage != null) {
    if (dataInStorage === "true") return true;
    else if (dataInStorage === "false") return false;
  }
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export const GlobalStore = new Store<IGlobalStore>({
  isDarkMode: getDarkModeConfig(),
});
