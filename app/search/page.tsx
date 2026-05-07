export default function SearchPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900">Search Products</h1>

        <input
          placeholder="Search anything..."
          className="mt-8 w-full rounded-2xl border bg-white px-6 py-4 outline-none focus:border-black"
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="h-48 rounded-2xl bg-gray-200" />
              <h2 className="mt-4 font-semibold">Product Name</h2>
              <p className="text-gray-500">$999</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
