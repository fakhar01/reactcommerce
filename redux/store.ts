import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import messageReducer from "./messageSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    message: messageReducer
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;