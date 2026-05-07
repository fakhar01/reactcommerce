"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let data = [...products];

    // SEARCH
    if (search) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // CATEGORY
    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }

    // BRAND
    if (brand !== "all") {
      data = data.filter((p) => p.brand === brand);
    }

    // SORT
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [search, category, brand, sort]);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      
      {/* HEADER */}
      <div className="mx-auto max-w-7xl">
        
        <h1 className="text-5xl font-black text-gray-900">
          Discover Products
        </h1>

        <p className="mt-2 text-gray-500">
          Search, filter and explore premium products
        </p>

        {/* SEARCH BAR */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-2xl border bg-white px-6 py-4 outline-none focus:border-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="rounded-2xl border bg-white px-4 py-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Phones">Phones</option>
            <option value="Laptops">Laptops</option>
            <option value="Accessories">Accessories</option>
          </select>

          <select
            className="rounded-2xl border bg-white px-4 py-4"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="all">All Brands</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Dell">Dell</option>
          </select>

          <select
            className="rounded-2xl border bg-white px-4 py-4"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        {/* RESULTS INFO */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-bold">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-700">
              No Products Found
            </h2>
            <p className="mt-2 text-gray-500">
              Try changing your filters
            </p>
          </div>
        )}
      </div>
    </main>
  );
}