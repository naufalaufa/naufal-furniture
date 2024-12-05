import { Link } from "react-router-dom";

const ProductEmpty = () => {
  return (
    <div className="grid min-h-screen place-content-center m-auto w-full place-items-center bg-orange-400">
      <p className="text-xs ">
        Product is empty please add your product in cart
      </p>
      <Link
        className="bg-white border border-black p-2 rounded-lg px-4 my-4"
        to={"/"}
      >
        Back{" "}
      </Link>
    </div>
  );
};

export default ProductEmpty;
