export default function Hero() {
    return (
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 py-20">
          <div>
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              New Collection 2026
            </span>
  
            <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Modern Shopping
              <span className="block text-blue-600">
                Experience
              </span>
            </h1>
  
            <p className="mt-6 text-lg text-gray-500 max-w-xl">
              Premium ecommerce UI built with Next.js,
              TailwindCSS and TypeScript.
            </p>
  
            <div className="flex gap-4 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition">
                Shop Now
              </button>
  
              <button className="border border-gray-300 px-8 py-4 rounded-2xl hover:bg-gray-100 transition">
                Explore
              </button>
            </div>
          </div>
  
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Hero"
              className="rounded-3xl shadow-2xl h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }