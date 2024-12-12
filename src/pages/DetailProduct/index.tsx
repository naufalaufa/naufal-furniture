import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, detailProduct } from "../../redux/features/cart/CartSlice";
import { RootState } from "../../utils/type";
import { Cart, Header } from "../../components";

const DetaiProduct = () => {
  const { id } = useParams();
  const product = useSelector((state: RootState) =>
    state.cart.product.find(
      (item: { id: number }) => item.id === parseInt(id || "0")
    )
  );

  const dispatch = useDispatch();

  if (!detailProduct) {
    return <p>Loading.....</p>;
  }

  if (!product) {
    return <p>Product not found...</p>;
  }

  return (
    <>
      <Header />
      <Cart />
      <div className="grid w-full place-items-center place-content-center min-h-screen bg-orange-400">
        <p className="my-3 text-xs text-white">{product.name}</p>
        <img
          className="w-60 h-60 object-cover rounded-lg"
          src={product.image}
          alt={product.image}
        />
        <p className="max-w-[50vw] text-xs py-2 m-auto w-full text-center">
          {product.description}
        </p>
        <div className="flex items-center gap-5 my-4">
          <Link
            to={"/"}
            className="p-2 rounded-lg border border-black bg-white"
          >
            Back Home
          </Link>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-orange-600 p-2 rounded-lg text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default DetaiProduct;
