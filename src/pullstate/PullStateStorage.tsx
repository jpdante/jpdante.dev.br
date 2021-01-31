import { GlobalStore } from "./GlobalStore";

function PullStateStorage() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);
  if (localStorage.getItem("dark-mode") !== isDarkMode.toString()) {
    localStorage.setItem("dark-mode", isDarkMode.toString());
  }

  return (null);
}

export default PullStateStorage;