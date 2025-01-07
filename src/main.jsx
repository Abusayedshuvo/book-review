import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Book from "./pages/Book.jsx";
import BookDetails from "./component/BookDetails/BookDetails.jsx";
import Home from "./pages/Home.jsx";
import ListedBooks from "./component/ListedBooks/ListedBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book-details",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/listed-book",
        element: <ListedBooks></ListedBooks>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
