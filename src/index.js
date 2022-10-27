import React from "react";
import ReactDOM from "react-dom/client";
import "macro-css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
