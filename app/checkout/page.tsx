export default function CheckoutPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-10">Checkout</h1>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold mb-8">Billing Details</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-2xl px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-2xl px-5 py-4 md:col-span-2"
              />

              <input
                type="text"
                placeholder="City"
                className="border rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Postal Code"
                className="border rounded-2xl px-5 py-4"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm h-fit">
            <h2 className="text-2xl font-bold mb-8">Payment Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$2998</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$40</span>
              </div>

              <div className="border-t pt-5 flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>$3118</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition">
              Place Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
