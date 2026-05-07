"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function CartSummary() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
    const subTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = 25;
    const tax =40;
    const total = subTotal + shipping + tax; 
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm h-fit sticky top-28">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h2>

      <div className="space-y-5">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>${tax}</span>
        </div>

        <div className="border-t pt-5 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <button className="w-full mt-8 bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition">
        Proceed To Checkout
      </button>
    </div>
  );
}
