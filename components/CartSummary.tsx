export default function CartSummary() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm h-fit sticky top-28">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h2>

      <div className="space-y-5">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>$2998</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>$40</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>$80</span>
        </div>

        <div className="border-t pt-5 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>$3118</span>
        </div>
      </div>

      <button className="w-full mt-8 bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition">
        Proceed To Checkout
      </button>
    </div>
  );
}
