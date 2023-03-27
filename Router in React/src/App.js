import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      {path:"/products/:productId",element:<ProductDetail />},
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
