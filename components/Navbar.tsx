"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          React<span className="text-blue-600">Commerce</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Cart
          </Link>

          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
          >
            Register
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 md:hidden"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="space-y-4 bg-white px-6 py-5">
          <Link
            href="/"
            className="block text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="block text-gray-700 transition hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="block text-gray-700 transition hover:text-blue-600"
          >
            Cart
          </Link>

          <Link
            href="/login"
            className="block text-gray-700 transition hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="block rounded-xl bg-blue-600 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}