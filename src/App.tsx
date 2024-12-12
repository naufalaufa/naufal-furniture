import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { calculateTotalCart } from "./redux/features/cart/CartSlice";
import { RootState } from "./redux/store/store";
import { Suspense } from "react";
import { Footer, Loading } from "./components";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const Cart = React.lazy(() => import("./pages/Cart"));
const DetailProduct = React.lazy(() => import("./pages/DetailProduct"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotalCart());
  }, [dispatch, cartItems.products]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/products/:id",
      element: <DetailProduct />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
        <Footer />
        <ToastContainer />
      </Suspense>
    </>
  );
};

export default App;
