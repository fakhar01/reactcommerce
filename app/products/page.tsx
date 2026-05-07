import ProductGrid from "@/components/ProductGrid";
import SearchBar from "@/components/SearchBar";

export default function ProductsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              All Products
            </h1>

            <p className="text-gray-500 mt-2">
              Browse all premium products
            </p>
          </div>

          <SearchBar />
        </div>

        <ProductGrid />
      </section>
    </main>
  );
}