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
import RequestBooks from "./pages/RequestBooks/RequestBooks.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

const router = createBrowserRouter(
  [
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
        {
          path: "/requestBooks",
          element: <RequestBooks></RequestBooks>,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>,
        },
      ],
    },
  ],
  // To make the warnings go away
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksDataContextProvider>
      <RouterProvider
        router={router}
        // Extra fields to make the warning go away but 1 still exists
        hydrateFallback={<Root></Root>}
        future={{ v7_startTransition: true }}
      ></RouterProvider>
    </BooksDataContextProvider>
  </StrictMode>
);
