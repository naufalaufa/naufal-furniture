import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact, DetailProduct, LandingPage, NotFound } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import { calculateTotalCart } from "./redux/features/cart/CartSlice";
import Footer from "./components/Footer";
import { RootState } from "./redux/store/store";

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
      <RouterProvider router={router} />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
