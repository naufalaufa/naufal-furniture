import ChairOne from "../assets/images/chair-1.jpg";

const Jumbotron = () => {
  return (
    <>
      <img
        className="w-full h-screen object-cover min-h-[70vh]"
        src={ChairOne}
        alt={ChairOne}
      />
      <div className="w-full max-w-[60vw] sm:max-w-[70vw] absolute">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-white font-serif whitespace-nowrap">
          Naufal's Furniture
        </h1>
        <p className="text-xs sm:text-sm text-white my-2">
          "Naufal Furniture brings style and comfort into every space with our
          collection of thoughtfully crafted furniture pieces. From modern
          minimalism to timeless classics, each item is designed to blend
          quality, elegance, and durability. We believe in creating furniture
          that not only enhances your home’s aesthetic but also stands the test
          of time. Discover pieces that reflect your style and bring warmth to
          your living spaces with Naufal Furniture."
        </p>

        <div className="grid  sm:grid-cols-3 gap-2 my-9 ">
          <p className="text-xs sm:text-xl text-white font-serif whitespace-nowrap">
            "Crafted for Comfort"
          </p>
          <p className="text-xs sm:text-xl text-white font-serif whitespace-nowrap">
            "Style Meets Comfort"
          </p>
          <p className="text-xs sm:text-xl text-white font-serif whitespace-nowrap">
            "Designed for Life"
          </p>
        </div>
        <a
          href="#product"
          className="bg-white p-3 text-xs px-9 rounded-lg font-serif text-center my-3 "
        >
          See product
      </a>
      </div>
    </>
  );
};

export default Jumbotron;
