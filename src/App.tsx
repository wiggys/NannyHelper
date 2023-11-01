import React from "react";
import { Menu } from "./PieMenu";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <Menu x={100} y={100} />
      </div>
    </div>
  );
}
