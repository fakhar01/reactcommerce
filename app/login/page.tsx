import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden flex-col justify-between bg-black p-12 text-white lg:flex">
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Welcome back to <br />
              ReactCommerce
            </h1>

            <p className="mt-6 text-gray-300">
              Manage your products, orders, and customers with a
              modern ecommerce experience.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm text-gray-400">
              Modern Ecommerce Platform
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 sm:p-14">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                Login
              </h2>

              <p className="mt-2 text-gray-500">
                Enter your credentials to continue
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-black focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-black focus:bg-white"
                />
              </div>

              <button className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800">
                Sign In
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-black hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}