import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToAllCart,
  addToCart,
  detailProduct,
} from "../redux/features/cart/CartSlice";
import { RootState } from "../redux/store/store";

const Product = ({
  searchProduct,
  setSearchProduct,
}: {
  searchProduct: string;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { product, count } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const filteredProducts = product.filter((products) =>
    products.name.toLocaleLowerCase().includes(searchProduct)
  );

  return (
    <div id="product" className="py-12 w-screen max-w-full px-8">
      <h1 className="text-center font-serif">Furniture Product</h1>
      <h1 className="text-center text-3xl sm:text-5xl font-serif">
        Furniture Product
      </h1>

      <div className="my-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-center ">
        <Link to={"/cart"} className="relative w-8">
          <FaCartShopping
            className="text-slate-700 text-right cursor-pointer"
            size={30}
          />
          <span className="absolute -top-8 rounded-full p-2 w-8 h-8 bg-white text-black font-bold shadow-lg shadow-slate-800 grid place-content-center">
            {count}
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <input
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            placeholder="Search Product"
            className="w-full text-xs outline-none p-2 rounded-lg border-2"
            type="text"
          />
        </div>
      </div>
      <div className="sm:columns-4   my-3 mx-3 ">
        {filteredProducts.map((product) => {
          return (
            <div key={product.id} className="relative">
              <img
                className="rounded-lg rotate-3 my-5 "
                src={product.image}
                alt={product.name}
              />

              <div className="absolute w-full place-items-center top-0 left-0 right-0  grid place-content-center h-full rotate-3 bg-black/30 rounded-lg">
                <p className="text-white font-serif">{product.name}</p>
                <p className="text-xs text-white">{product.price}</p>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                    className="bg-white whitespace-nowrap p-1 rounded-lg text-xs text-black font-bold my-3"
                  >
                    Add To Cart
                  </button>
                  <Link
                    onClick={() => dispatch(detailProduct(product))}
                    className="text-xs p-1 whitespace-nowrap rounded-lg bg-black text-white"
                    to={`products/${product.id}`}
                  >
                    Detail Product
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full grid place-content-center my-2 ">
        <button
          onClick={() => dispatch(addToAllCart())}
          className="text-center font-serif border border-black rounded-lg  justify-center p-2 bg-white text-black text-xs"
        >
          Add To Cart All Product
        </button>
      </div>
    </div>
  );
};

export default Product;
