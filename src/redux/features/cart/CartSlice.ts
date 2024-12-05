import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products, Products } from "../../../utils/type";
import { toast } from "react-toastify";

interface CartState {
  product: Products[];
  cartItems: {
    products: Products[];
  };
  count: number;
  detailsProducts: Products[];
  total: number;
}

const initialState: CartState = {
  product: products,
  cartItems: {
    products: [],
  },
  count: 0,
  detailsProducts: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      state.cartItems.products.push(action.payload);
      state.count += 1;
      toast.success(`Success add ${action.payload.name}  to cart`);
      console.log(state.cartItems.products);
    },
    detailProduct: (state, action: PayloadAction<Products>) => {
      state.detailsProducts.push(action.payload);
      console.log(state.detailsProducts);
    },
    deleteCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.cartItems.products = state.cartItems.products.filter(
        (product) => product.id !== id
      );
      toast.success(`Success delete product`);
    },
    deleteAllCart: (state) => {
      state.cartItems.products = [];
      toast.success("Success delete all products");
    },
    calculateTotalCart: (state) => {
      let total = 0;
      let count = 0;
      state.cartItems.products.forEach((item: Products) => {
        count += item.quantity;
        total += item.quantity * item.price;
      });
      state.total = total;
      state.count = count;
    },
    addToAllCart: (state) => {
      state.cartItems.products = [...state.product];
      toast.success("Success add all product to cart");
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const product = state.cartItems.products.find(
        (item: Products) => item.id === id
      );
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const {
  addToCart,
  deleteCart,
  deleteAllCart,
  calculateTotalCart,
  addToAllCart,
  detailProduct,
  updateQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
