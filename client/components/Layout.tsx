import {
  Menu,
  User,
  Home,
  Briefcase,
  MessageSquare,
  FileText,
  Bell,
  User as UserIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
      case "/home":
        return "";
      case "/timesheets":
        return "Timesheets";
      case "/jobs":
        return "Jobs";
      case "/messages":
        return "Messages";
      default:
        return "";
    }
  };

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="bg-gradient-to-r from-subster-purple to-subster-purple-light px-6 py-2">
        <div className="flex justify-between items-center text-white text-sm font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white/60 rounded-full"></div>
            </div>
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L8 12.4V12a8 8 0 0 1 16 0v.4l3.15.55.85-1.48.85 1.48L26 12.4V12a10 10 0 0 0-20 0v.4l-2.85.55z" />
            </svg>
            <div className="w-6 h-3 border border-white rounded-sm ml-1">
              <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-subster-purple to-subster-purple-light px-6 py-6">
        <div className="flex items-center justify-between">
          {/* User Avatar */}
          <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8cb83502768745a4a67cc5a59e3de622%2F812fafd930e649a987a31d6033f45ca6?format=webp&width=800"
              alt="Subster logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-white text-xl font-semibold">Subster</span>
          </div>

          {/* Menu */}
          <button
            className="text-white relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Page Title */}
        {!isHomePage && (
          <h1 className="text-white text-2xl font-semibold mt-6">
            {getPageTitle()}
          </h1>
        )}

        {/* Home Page Welcome */}
        {isHomePage && (
          <div className="mt-6">
            <h1 className="text-white text-xl font-medium">
              Hi Emma, welcome back! 😊
            </h1>
          </div>
        )}

        {/* Timesheets Header Extras */}
        {location.pathname === "/timesheets" && (
          <div className="mt-4">
            <select className="bg-white/20 text-white border-0 rounded-lg px-3 py-2 text-sm">
              <option>this week</option>
              <option>last week</option>
              <option>this month</option>
            </select>
          </div>
        )}
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-24 right-6 z-50 w-47 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col">
              <Link
                to="/home"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 ${
                  location.pathname === "/" || location.pathname === "/home"
                    ? "bg-gray-100"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <Home size={20} className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-900 flex-1">
                  Home
                </span>
              </Link>

              <Link
                to="/jobs"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 ${
                  location.pathname === "/jobs"
                    ? "bg-gray-100"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <Briefcase size={20} className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-900 flex-1">
                  Jobs
                </span>
              </Link>

              <Link
                to="/messages"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 ${
                  location.pathname === "/messages"
                    ? "bg-gray-100"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <MessageSquare size={20} className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-900 flex-1">
                  Messages
                </span>
              </Link>

              <Link
                to="/timesheets"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 ${
                  location.pathname === "/timesheets"
                    ? "bg-gray-100"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <FileText size={20} className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-900 flex-1">
                  Timesheets
                </span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50"
              >
                <Bell size={20} className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-900 flex-1">
                  Notifications
                </span>
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50"
              >
                <UserIcon size={20} className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-900 flex-1">
                  Account
                </span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="flex-1">{children}</div>

      {/* Bottom Home Indicator */}
      <div className="bg-white border-t border-gray-200">
        <div className="flex justify-center py-2">
          <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
