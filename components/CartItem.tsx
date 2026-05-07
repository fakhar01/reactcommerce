export default function CartItem() {
  return (
    <div className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex gap-5">
        <div className="h-24 w-24 rounded-2xl bg-gray-200" />

        <div>
          <h2 className="font-semibold">Product Name</h2>
          <p className="text-gray-500">$999</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="h-10 w-10 rounded-xl border">-</button>
        <span>1</span>
        <button className="h-10 w-10 rounded-xl border">+</button>
      </div>
    </div>
  );
}
