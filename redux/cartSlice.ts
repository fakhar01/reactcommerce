import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  name: string;
  price: number;
  slug: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addToCart: (state, action) => {
      const item = action.payload;

      const existing = state.items.find(
        (p) => p.id === item.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (p) => p.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (p) => p.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (p) => p.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (p) => p.id !== action.payload
        );
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;