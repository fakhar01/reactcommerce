import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">

        {/* Image */}
        <div className="rounded-3xl bg-white shadow-sm">
          <img
            src="https://picsum.photos/800"
            className="h-[600px] w-full rounded-3xl object-cover"
          />
        </div>

        {/* Details */}
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
            {product.brand}
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-6 text-gray-600">
            Premium quality product with modern design and high performance.
          </p>

          <h2 className="mt-10 text-4xl font-bold">
            ${product.price}
          </h2>

          <button className="mt-10 w-full rounded-2xl bg-black py-4 text-white hover:bg-gray-800">
            Add To Cart
          </button>
        </div>

      </section>
    </main>
  );
}