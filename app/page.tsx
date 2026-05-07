import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="text-gray-500 mt-2">
              Discover premium modern products
            </p>
          </div>

          <button className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition">
            View All
          </button>
        </div>

        <ProductGrid />
      </section>
    </main>
  );
}