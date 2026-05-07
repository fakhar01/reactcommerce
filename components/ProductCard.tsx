import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types/product";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Wishlist Button */}
        <button className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow-md backdrop-blur transition hover:scale-110">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>

        {/* Product Image */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={`https://picsum.photos/id/${product.id}/600/500`}
            alt={product.name}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          {/* Category */}
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
            Premium Product
          </span>

          {/* Product Name */}
          <h2 className="line-clamp-1 text-xl font-semibold text-gray-800">
            {product.name}
          </h2>

          {/* Description */}
          <p className="line-clamp-2 text-sm text-gray-500">
            High-quality product with modern design and premium materials.
          </p>

          {/* Price & Rating */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                ${product.price}
              </p>

              <p className="text-sm text-gray-400 line-through">
                ${(product.price + 20).toFixed(2)}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 rounded-lg bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-700">
              ⭐ 4.8
            </div>
          </div>

          {/* Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800">
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
