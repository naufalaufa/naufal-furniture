import ChairYellow from "../assets/images/chair-yellow.jpg";
import CCTV from "../assets/images/cctv.jpg";
import VariableFlowers from "../assets/images/pot-bunga.jpg";
import SittingToilet from "../assets/images/wc-duduk.jpg";
import PcAllSetup from "../assets/images/pc-all-setup.jpg";
import Lamp from "../assets/images/lamp.jpg";
import Clock from "../assets/images/clock-1.jpg";

export interface Products {
  id: number;
  name: string;
  href: string;
  image: string;
  price: number;
  count?: number;
  quantity: number;
  description: string;
}

export interface CartState {
  product: Products[];
}

export interface RootState {
  cart: CartState;
}

type Footers = {
  id: number;
  name: string;
  href?: string;
};

export const products: Products[] = [
  {
    id: 1,
    name: "Chair Yellow",
    href: "/",
    image: ChairYellow,
    price: 250000,
    description:
      "Brighten up your space with the elegant Yellow Chair from Naufal Furniture. Designed with a modern touch and crafted for comfort, this chair is perfect for adding a pop of color to your living room, office, or dining area.",
    quantity: 1,
  },
  {
    id: 2,
    name: "CCTV",
    href: "/",
    image: CCTV,
    price: 150000,
    description:
      "Ensure safety and peace of mind with the cutting-edge CCTV Camera from Naufal Furnitures Security Solutions. Designed for seamless monitoring, this CCTV camera combines high-performance technology with reliability to protect your home or business",
    quantity: 1,
  },
  {
    id: 3,
    name: "Flowers Variable",
    href: "/",
    image: VariableFlowers,
    price: 50000,
    description:
      "At Naufal Furniture, we offer an elegant collection of flower-inspired furniture and decor to add a touch of natures beauty to your home. The flowers variable represents our curated range of floral-themed pieces, each designed to bring the charm of blossoms into your living spaces",
    quantity: 1,
  },
  {
    id: 4,
    name: "Sitting Toilet",
    href: "/",
    image: SittingToilet,
    price: 2350000,
    description:
      "Elevate the comfort and style of your bathroom with the Sitting Toilet from Naufal Furniture. Designed with both functionality and elegance in mind, this modern toilet provides a comfortable and practical seating experience for your daily needs.",
    quantity: 1,
  },
  {
    id: 5,
    name: "PC all setup",
    href: "/",
    image: PcAllSetup,
    price: 2350000,
    description:
      "Upgrade your workspace with the PC All Setup from Naufal Furniture, a complete and stylish computer setup designed for both work and leisure. Whether you’re a professional, gamer, or casual user, this all-in-one package combines functionality with modern design to create an efficient and comfortable environment.",
    quantity: 1,
  },
  {
    id: 6,
    name: "Lamp",
    href: "/",
    image: Lamp,
    price: 2350000,
    description:
      "Illuminate your space with the perfect blend of style and functionality with the Lamp from Naufal Furniture. Designed to enhance the ambiance of any room, our collection of lamps offers a variety of styles, from modern to classic, to match your unique home decor.",
    quantity: 1,
  },
  {
    id: 7,
    name: "Clock",
    href: "/",
    image: Clock,
    price: 150000,
    description:
      "Add a timeless touch to your home with the elegant Clock from Naufal Furniture. Combining functionality with style, our clocks are the perfect statement piece for any room, offering both precision and charm to your living spaces.",
    quantity: 1,
  },
];

export const footers: Footers[] = [
  {
    id: 1,
    name: "Mochamad Naufal Aufa Rifqi",
  },
  {
    id: 2,
    name: "Contact",
    href: "0851-5680-2452",
  },
];
