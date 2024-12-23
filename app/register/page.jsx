"use client";
export default function Register() {
  return (
    <div className="background-gradient bg-gray-900 text-white min-h-screen flex items-center justify-center relative">
      <div className="glass w-full max-w-md p-8 bg-opacity-75 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        <form className="space-y-4 mt-4">
          <div>
            <label className="block text-sm">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark-glass"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark-glass"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark-glass"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full py-2 bg-green-600 rounded-md hover:bg-green-700">
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Sudah punya akun?{" "}
          <a href="/login" className="font-medium text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
