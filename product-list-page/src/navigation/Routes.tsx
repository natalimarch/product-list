import { Suspense, lazy } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router";

const ProductListPage = lazy(() => import("../pages/ProductListPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));

const allRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/"></Route>
        <Route path="/products" element={<ProductListPage />}></Route>
        <Route path="/products/:prodId" element={<ProductPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default allRoutes;
