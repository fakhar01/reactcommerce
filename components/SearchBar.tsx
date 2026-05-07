export default function SearchBar() {
    return (
      <div className="flex gap-4 w-full lg:w-auto">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full lg:w-80 rounded-2xl border border-gray-300 bg-white px-5 py-3 outline-none focus:border-black"
        />
  
        <button className="bg-black text-white px-6 rounded-2xl hover:bg-gray-800 transition">
          Search
        </button>
      </div>
    );
  }