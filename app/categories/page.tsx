export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold">Category: {params.slug}</h1>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="h-48 rounded-2xl bg-gray-200" />
            <h2 className="mt-4 font-semibold">Product</h2>
            <p className="text-gray-500">$799</p>
          </div>
        ))}
      </div>
    </main>
  );
}
