export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl bg-white p-5 shadow-sm">
      <div className="h-48 w-full rounded-2xl bg-gray-200" />

      <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
      <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />

      <div className="mt-5 h-6 w-1/3 rounded bg-gray-300" />
    </div>
  );
}
