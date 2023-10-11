import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import CartPage from "./pages/CartPage/CartPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import StoragePage from "./pages/StorePage/StorePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/haku/:keyword",
    element: <SearchPage />,
  },
  {
    path: "/kori",
    element: <CartPage />,
  },
  {
    path: "/maksu",
    element: <CheckoutPage />,
  },
  {
    path: "/kategoria/:categoryId",
    element: <CategoryPage />,
  },
  {
    path: "/album/:albumId",
    element: <ProductPage />,
  },
  {
    path: "/varasto",
    element: <StoragePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
