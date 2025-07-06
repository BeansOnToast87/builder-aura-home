import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#B68298" }}
    >
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8cb83502768745a4a67cc5a59e3de622%2F812fafd930e649a987a31d6033f45ca6?format=webp&width=800"
            alt="Subster logo"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold" style={{ color: "#B68298" }}>
            Welcome back to Subster
          </h1>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ focusRingColor: "#B68298" }}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ focusRingColor: "#B68298" }}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            style={{ backgroundColor: "#6E779E" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5a6688";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#6E779E";
            }}
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium hover:underline"
              style={{ color: "#B68298" }}
            >
              Sign up
            </Link>
          </p>
          <Link
            to="/landing"
            className="block text-sm text-gray-500 hover:text-gray-700"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
