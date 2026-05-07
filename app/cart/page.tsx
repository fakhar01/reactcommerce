"use client";
import CartSummary from "@/components/CartSummary";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "@/redux/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-sm flex gap-6 items-center"
              >
                <img
                  src="https://picsum.photos/200"
                  className="w-28 h-28 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    iPhone 15 Pro
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Premium smartphone
                  </p>

                  <div className="flex items-center gap-4 mt-4">
                    <button
                    onClick={() =>
                      dispatch(decreaseQty(item.id))
                    }
                     className="w-10 h-10 rounded-xl border">
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button 
                    onClick={() =>
                      dispatch(increaseQty(item.id))
                    }
                    className="w-10 h-10 rounded-xl border">
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-2xl font-bold">$1499</p>
                </div>
              </div>
            ))}
            <h2 className="text-xl mt-6">
            Total: ${total}
          </h2>
          </div>

          <CartSummary />
        </div>
      </section>
    </main>
  );
}