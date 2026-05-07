export default function OrdersPage() {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <section className="mx-auto max-w-5xl">
          
          {/* Header */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Order Details
              </h1>
  
              <p className="mt-2 text-gray-500">
                Track and manage your recent order
              </p>
            </div>
  
            <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              Paid Successfully
            </div>
          </div>
  
          {/* Order Card */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            
            {/* Order Top */}
            <div className="border-b px-8 py-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Order #10245
                  </h2>
  
                  <p className="mt-1 text-gray-500">
                    Placed on May 7, 2026
                  </p>
                </div>
  
                <button className="rounded-2xl border border-gray-300 px-5 py-3 font-medium transition hover:bg-gray-100">
                  Download Invoice
                </button>
              </div>
            </div>
  
            {/* Products */}
            <div className="space-y-6 px-8 py-8">
              
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex flex-col gap-6 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src="https://picsum.photos/200"
                      alt="Product"
                      className="h-24 w-24 rounded-2xl object-cover"
                    />
  
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        iPhone 15 Pro Max
                      </h3>
  
                      <p className="mt-1 text-gray-500">
                        Premium flagship smartphone
                      </p>
  
                      <p className="mt-2 text-sm text-gray-400">
                        Quantity: 1
                      </p>
                    </div>
                  </div>
  
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      $1499
                    </p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Summary */}
            <div className="border-t bg-gray-50 px-8 py-8">
              <div className="ml-auto max-w-md space-y-5">
                
                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$4497</span>
                </div>
  
                <div className="flex items-center justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>$40</span>
                </div>
  
                <div className="flex items-center justify-between text-gray-600">
                  <span>Tax</span>
                  <span>$80</span>
                </div>
  
                <div className="border-t pt-5">
                  <div className="flex items-center justify-between text-2xl font-bold text-gray-900">
                    <span>Total</span>
                    <span>$4617</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }