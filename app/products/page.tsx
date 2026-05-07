import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

const mockProducts: Product[] = [
  { id: 1, name: "Laptop", price: 1200, image: "/laptop.jpg" },
  { id: 2, name: "Phone", price: 800, image: "/phone.jpg" },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
