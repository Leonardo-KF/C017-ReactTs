import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

import GlobalStyle, { Content } from "./styles/global";

// HOC - High Order Component

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
