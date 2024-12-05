import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store/store";

const Cart = () => {
  const { count } = useSelector((state: RootState) => state.cart);
  return (
    <div className="fixed top-8 right-9 z-[9999999] ">
      <Link to="/cart">
        <FaCartShopping
          size={30}
          className="text-slate-100 shadow-md shadow-slate-800 p-1"
        />
        <span className="absolute -top-3 p-2 rounded-full bg-blue-400 w-7 h-7 grid place-content-center  text-white font-bold -left-5">
          {count}
        </span>
      </Link>
    </div>
  );
};

export default Cart;
