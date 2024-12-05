import { Link, useLocation } from "react-router-dom";

const NotFounds = () => {
  const { pathname } = useLocation();
  return (
    <>
      <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl my-2 font-serif ">
        Page not found
      </p>
      <p>page not found {pathname}</p>
      <Link
        to={"/"}
        className="bg-white p-4 rounded-xl px-8 py-2 border border-black my-2 font-serif hover:bg-black hover:text-white transition"
      >
        Back
      </Link>
    </>
  );
};

export default NotFounds;
