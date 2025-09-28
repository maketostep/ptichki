import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./admin/Login";
import AdminLayout from "./admin/AdminLayout";
import AfishaAdmin from "./admin/AfishaAdmin";
import PartnersAdmin from "./admin/PartnersAdmin";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "afisha", element: <AfishaAdmin /> },
      { path: "partners", element: <PartnersAdmin /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
