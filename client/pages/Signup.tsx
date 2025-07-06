import { Link, useSearchParams } from "react-router-dom";

export default function Signup() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "teacher";
  const isTeacher = role === "teacher";

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
            {isTeacher ? "Join as a Teacher" : "Find a Teacher"}
          </h1>
          <p className="text-gray-600 mt-2">
            {isTeacher
              ? "Start your flexible teaching journey"
              : "Connect with qualified teachers"}
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
          <Link
            to="/signup?role=teacher"
            className={`flex-1 py-2 px-4 text-center text-sm font-medium rounded-md transition-colors ${
              isTeacher
                ? "text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            style={isTeacher ? { backgroundColor: "#B68298" } : {}}
          >
            Teacher
          </Link>
          <Link
            to="/signup?role=school"
            className={`flex-1 py-2 px-4 text-center text-sm font-medium rounded-md transition-colors ${
              !isTeacher
                ? "text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            style={!isTeacher ? { backgroundColor: "#B68298" } : {}}
          >
            School
          </Link>
        </div>

        {/* Signup Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ focusRingColor: "#B68298" }}
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ focusRingColor: "#B68298" }}
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ focusRingColor: "#B68298" }}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ focusRingColor: "#B68298" }}
              placeholder="Create a password"
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
            {isTeacher ? "Join as Teacher" : "Register School"}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium hover:underline"
              style={{ color: "#B68298" }}
            >
              Sign in
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
