import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8cb83502768745a4a67cc5a59e3de622%2F812fafd930e649a987a31d6033f45ca6?format=webp&width=800"
                alt="Subster logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold" style={{ color: "#B68298" }}>
                Subster
              </span>
            </div>

            {/* Login Button */}
            <Link
              to="/login"
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 sm:py-28 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connecting great teachers{" "}
            <span className="block">with schools</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fast, human-first matching for flexible teaching.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Link
              to="/signup?role=teacher"
              className="w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-full text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#B68298" }}
            >
              Join as a Teacher
            </Link>

            <Link
              to="/signup?role=school"
              className="w-full sm:w-auto px-8 py-4 border-2 font-semibold rounded-full text-lg hover:bg-gray-50 transition-all transform hover:scale-105"
              style={{ borderColor: "#B68298", color: "#B68298" }}
            >
              Find a Teacher
            </Link>
          </div>

          {/* Optional feature highlights */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#B68298" }}
              >
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Matching
              </h3>
              <p className="text-gray-600">
                Get matched with the perfect teaching opportunities instantly.
              </p>
            </div>

            <div className="p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#7A8BB8" }}
              >
                <span className="text-2xl text-white">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Human-First
              </h3>
              <p className="text-gray-600">
                Personal connections and quality relationships matter most.
              </p>
            </div>

            <div className="p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#8BBBA8" }}
              >
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flexible
              </h3>
              <p className="text-gray-600">
                Find part-time, full-time, or substitute teaching roles.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8cb83502768745a4a67cc5a59e3de622%2F812fafd930e649a987a31d6033f45ca6?format=webp&width=800"
                alt="Subster logo"
                className="w-8 h-8 object-contain"
              />
              <span
                className="text-lg font-semibold"
                style={{ color: "#B68298" }}
              >
                Subster
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Subster. Connecting education, one teacher at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
