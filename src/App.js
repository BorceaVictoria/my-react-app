import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CasinoPage from "./pages/CasinoPage";
import HistoryPage from "./pages/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "casino",
    element: <CasinoPage />,
  },
  {
    path: "history",
    element: <HistoryPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
