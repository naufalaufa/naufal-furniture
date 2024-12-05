import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import ProductEmpty from "../../components/ProductEmpty";
import {
  calculateTotalCart,
  deleteCart,
  updateQuantity,
} from "../../redux/features/cart/CartSlice";
import { RootState } from "../../redux/store/store";
import { Products } from "../../utils/type";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state: RootState) => state.cart);

  if (cartItems.products.length === 0) {
    return <ProductEmpty />;
  }

  return (
    <div className="w-full bg-orange-400 py-4 min-h-screen ">
      <Header />
      <div className="grid grid-cols-1 w-full m-auto place-content-center place-items-center sm:grid-cols-2">
        <div>
          {cartItems.products.map((item: Products) => {
            return (
              <div key={item.id} className="w-full grid grid-cols-3 ">
                <div className="w-full">
                  <img
                    className="w-40 h-40 object-cover rounded-lg"
                    src={item.image}
                    alt={item.image}
                  />
                  <p className="text-xs font-serif   text-center my-2">
                    {item.name}
                  </p>
                  <input
                    defaultValue={item.quantity}
                    placeholder="qty"
                    className="p-2 rounded-lg my-2"
                    type="number"
                    min={0}
                    onChange={(e) => {
                      const quantity = parseInt(e.target.value, 10);

                      if (quantity === 0) {
                        dispatch(deleteCart(item.id));
                      } else {
                        dispatch(updateQuantity({ id: item.id, quantity }));
                        dispatch(calculateTotalCart());
                      }
                    }}
                  />
                  <p className="text-xs font-bold text-center">{item.price}</p>
                  <button
                    onClick={() => dispatch(deleteCart(item.id))}
                    className="my-2 text-center m-auto w-full text-white rounded-lg border font-bold p-2 border-black"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" fixed right-1 bottom-0 sm:right-0 h-[100vh] w-[50vw] grid place-content-center place-items-center m-auto">
          <div className="flex items-center justify-between gap-12 w-full border-b-2 border-black">
            <p className="text-sm text-white">Total</p>
            <p className="text-xs font-bold">{total}</p>
          </div>
          <button className="bg-orange-600 w-full text-white p-3 px-6 rounded-lg my-4">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
