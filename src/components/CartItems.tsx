const CartItems = ({
  price,
  name,
  image,
}: {
  price: number;
  name: string;
  image: string;
}) => {
  return (
    <div className="grid grid-cols-2 gap-2 place-items-center">
      <div className="p-2 rounded-lg border border-orange-700 ">
        <img className="w-32 h-32" src={image} alt={image} />
        <p>{price}</p>
        <p>{name}</p>
        <button className="font-bold text-red-600 mt-2">REMOVE</button>
      </div>
      <div>
        <button>INCREASE</button>
        <button>DECREASE</button>
      </div>
    </div>
  );
};

export default CartItems;
