import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import AuthProvider from "./providers/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <div className=" max-w-6xl mx-auto">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);
