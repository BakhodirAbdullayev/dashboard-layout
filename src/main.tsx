import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import MantineAppProvider from "./providers/MantineAppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineAppProvider>
      <App />
    </MantineAppProvider>
  </React.StrictMode>
);
