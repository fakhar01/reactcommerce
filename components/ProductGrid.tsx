"use client";

import { useEffect, useState } from "react";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";
import { products as allProducts } from "@/data/products";

export default function ProductGrid({
  search,
  category,
  brand,
  sort,
}: any) {
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      let filtered = [...allProducts];

      // SEARCH
      if (search) {
        filtered = filtered.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      // CATEGORY
      if (category && category !== "all") {
        filtered = filtered.filter((p) => p.category === category);
      }

      // BRAND
      if (brand && brand !== "all") {
        filtered = filtered.filter((p) => p.brand === brand);
      }

      // SORT
      if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
      }

      if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
      }

      setFilteredProducts(filtered);
      setLoading(false);
    }, 500);
  }, [search, category, brand, sort]);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
      {loading
        ? Array.from({ length: 12 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))
        : filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}

    </div>
  );
}