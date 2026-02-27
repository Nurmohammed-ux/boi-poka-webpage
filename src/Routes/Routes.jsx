import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
import PagesToRead from "../pages/PagesToRead/PagesToRead";

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
      { path: "about", Component: About },
      {
        path: "book/:bookId",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "readList",
        loader: () => fetch("/booksData.json"),
        Component: ReadList,
      },
      {
        path: "pagesToRead",
        loader: () => fetch("/booksData.json"),
        Component: PagesToRead,
      },
    ],
  },
]);
