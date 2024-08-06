import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { TranslationProvider } from "./utilities/context/TranslationProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TranslationProvider>
      <RouterProvider router={router} />
    </TranslationProvider>
  </React.StrictMode>
);
