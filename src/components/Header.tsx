import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-[9999999] left-0 right-0 top-7 px-4 max-w-[50vw] p-1  w-full m-auto bg-orange-600 rounded-md">
      <div className="flex items-center gap-8">
        <Link to={"/"}>
          <FaHome size={22} className="text-white" />
        </Link>
        <Link to={"/cart"}>
          <FaShoppingCart size={22} className="text-white" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
