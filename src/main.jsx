import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import ListedBooks from "./Components/ListedBooks";
import BooksDetails from "./Components/BooksDetails";
import PagesToRead from "./Components/PagesToRead";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/BooksData.json"),
      },
      {
        path: "/book/:id",
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch("/BooksData.json"),
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/BooksData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
