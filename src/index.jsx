import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";

import "./assets/styles/reset.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
