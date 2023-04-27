import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from './pages/ProductsPage/ProductsPage';
import BasketPage from './pages/BasketPage/BasketPage';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/React-Module",
    element: <ProductsPage />,
  },
  {
    path: "/cart",
    element: <BasketPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);