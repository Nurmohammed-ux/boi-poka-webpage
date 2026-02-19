import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    HydrateFallback: () => (
      <div className="loading loading-spinner text-success"></div>
    ),
    children: [
      { index: true, loader: () => fetch("/booksData.json"), Component: Home },
    ],
  },
]);
