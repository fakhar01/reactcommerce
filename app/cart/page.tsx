import CartSummary from "@/components/CartSummary";

export default function CartPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[1, 2].map((item) => (
              <div
                key={item}
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
                    <button className="w-10 h-10 rounded-xl border">
                      -
                    </button>

                    <span className="font-semibold">1</span>

                    <button className="w-10 h-10 rounded-xl border">
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-2xl font-bold">$1499</p>
                </div>
              </div>
            ))}
          </div>

          <CartSummary />
        </div>
      </section>
    </main>
  );
}