"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="background-gradient bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center relative">
      {/* Overlay effect */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="glass w-full max-w-lg p-8 space-y-6 bg-opacity-75 rounded-lg shadow-lg text-center relative z-10">
        <h1 className="text-3xl font-semibold">Welcome to Our Website</h1>
        <p className="text-gray-300">
          Discover amazing features, learn more about our services, and join our
          community.
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <Link href="/login">
            <button className="px-6 py-2 bg-blue-600 rounded-full transition-all hover:bg-blue-700">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="px-6 py-2 bg-green-600 rounded-full transition-all hover:bg-green-700">
              Register
            </button>
          </Link>
          <Link href="/beranda">
            <button className="px-6 py-2 bg-purple-600 rounded-full transition-all hover:bg-purple-700">
              Beranda
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
