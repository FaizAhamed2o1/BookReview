import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import ListedBooks from "./pages/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./pages/PagesToRead/PagesToRead.jsx";
import Error from "./pages/Error/Error.jsx";
import BooksDataContextProvider from "./context/BooksDataContext/BooksDataContextProvider.jsx";
import BookDetails from "./pages/BookDetails/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    loader: () => fetch("../books.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookDetails",
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksDataContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </BooksDataContextProvider>
  </StrictMode>
);
