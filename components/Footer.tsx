export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        
        <div>
          <h2 className="text-2xl font-bold">ReactCommerce</h2>
          <p className="mt-4 text-gray-400">
            Modern ecommerce built with Next.js
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Checkout</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Support</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Newsletter</h3>
          <input
            className="mt-4 w-full rounded-xl px-4 py-2 text-black"
            placeholder="Email"
          />
          <button className="mt-3 w-full rounded-xl bg-white py-2 text-black">
            Subscribe
          </button>
        </div>

      </div>
    </footer>
  );
}