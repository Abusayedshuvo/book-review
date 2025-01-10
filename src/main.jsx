import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./component/BookDetails/BookDetails.jsx";
import Home from "./pages/Home.jsx";
import ListedBooks from "./component/ListedBooks/ListedBooks.jsx";
import NotFound from "./component/NotFound/NotFound.jsx";
import PagesRead from "./component/PagesRead/PagesRead.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../public/books.json"),
      },
      {
        path: "/listed-book",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages-to-read",
        element: <PagesRead></PagesRead>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
