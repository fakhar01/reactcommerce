import { products } from "@/data/products";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {

  // Find product by ID
  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  // If product not found
  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

        {/* Product Image */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-[600px] w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {product.brand}
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Premium modern product with excellent quality
            and beautiful design.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <h2 className="text-5xl font-black text-gray-900">
              ${product.price}
            </h2>

            <p className="text-2xl text-gray-400 line-through">
              $1999
            </p>
          </div>

          <button className="mt-10 w-full rounded-2xl bg-black py-4 text-lg font-semibold text-white transition hover:bg-gray-800">
            Add To Cart
          </button>
        </div>
      </section>
    </main>
  );
}