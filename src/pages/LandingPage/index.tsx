import Jumbotron from "../../components/Jumbotron";
import ChairTwo from "../../assets/images/chair-2.jpg";
import ChairThree from "../../assets/images/chair-3.jpg";
import ChairFor from "../../assets/images/chair-4.jpg";
import Product from "../../components/Product";
import { useState } from "react";
import Contact from "../../components/Contact";
import Header from "../../components/Header";

const LandingPage = () => {
  const [searchProduct, setSearchProduct] = useState<string>("");
  return (
    <>
      <Header />
      <div>
        <div className="w-screen max-w-full relative grid place-items-center">
          <Jumbotron />
        </div>
        <div className="grid-cols-1 grid md:grid-cols-3 w-screen max-w-full min-h-screen h-full">
          <div className="relative">
            <img
              src={ChairTwo}
              alt="error"
              className="text-xs sm:text-sm h-screen object-cover w-full"
            />
            <p className="absolute bottom-8 w-full text-xs sm:text-sm min-w-[30vw] p-4 m-auto text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              libero unde ab sint, voluptate tempore nobis ratione facilis nulla
              illo ex consequatur aspernatur debitis tenetur assumenda
              doloremque, dolor, quam animi.
            </p>
          </div>
          <div className="relative">
            <img
              src={ChairFor}
              alt="error"
              className="text-xs sm:text-sm h-screen object-cover w-full"
            />
            <p className="absolute top-4 text-slate-800 p-4 text-xs sm:text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              non aperiam tenetur eligendi quaerat enim aspernatur, vel quasi
              repudiandae rerum dolorum odio ipsa magnam doloribus suscipit
              obcaecati harum? Iste, distinctio!
            </p>
            <div className="absolute shadow-sm shadow-slate-500 top-52 right-11 bg-white p-2 rounded-lg rotate-12">
              <p className="font-serif">let's go shopping</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={ChairThree}
              alt="error"
              className="text-xs sm:text-sm h-screen object-cover w-full"
            />
            <p className="absolute bottom-36 p-4 text-xs sm:text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              assumenda excepturi sequi ea nulla! Doloribus nobis saepe
              dignissimos, quasi, provident voluptatum maxime officiis itaque
              voluptate commodi porro nesciunt aut enim.
            </p>
          </div>
        </div>
        <Product
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
        />
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;
