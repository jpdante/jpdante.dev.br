import * as React from "react";
import { GlobalStore } from "../../pullstate/GlobalStore";

function Home() {
  const isDarkMode = GlobalStore.useState(s => s.isDarkMode);

  return (
    <div
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}>
      <h1>Hello Pullstate</h1>
    </div>
  );
};

export default Home;