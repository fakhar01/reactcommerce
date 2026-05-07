export default function WishlistPage() {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <section className="mx-auto max-w-7xl">
          
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900">
              Wishlist
            </h1>
  
            <p className="mt-2 text-gray-500">
              Your saved favorite products
            </p>
          </div>
  
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src="https://picsum.photos/500"
                    className="h-72 w-full object-cover"
                  />
  
                  <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-md">
                    ❤️
                  </button>
                </div>
  
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900">
                    iPhone 15 Pro
                  </h2>
  
                  <p className="mt-2 text-gray-500">
                    Premium smartphone
                  </p>
  
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                      $1499
                    </p>
  
                    <button className="rounded-xl bg-black px-5 py-3 text-white transition hover:bg-gray-800">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }