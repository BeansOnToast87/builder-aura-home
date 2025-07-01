import {
  Search,
  Filter,
  ArrowUpDown,
  Calendar,
  MapPin,
  Building2,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Jobs() {
  const [activeTab, setActiveTab] = useState<"explore" | "myJobs">("myJobs");
  const [subTab, setSubTab] = useState<"upcoming" | "requested" | "past">(
    "requested",
  );

  const renderMyJobs = () => (
    <div className="space-y-6">
      {/* Sub Navigation */}
      <div className="flex gap-4 px-6">
        <button
          onClick={() => setSubTab("upcoming")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            subTab === "upcoming"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setSubTab("requested")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            subTab === "requested"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Requested
        </button>
        <button
          onClick={() => setSubTab("past")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            subTab === "past"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Past
        </button>
      </div>

      {/* Job Cards */}
      <div className="px-6 space-y-4">
        {/* First Job */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ESL Teacher
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-4 h-4 text-subster-purple">⚡</div>
              <span className="text-sm">Intermediate</span>
              <div className="w-4 h-4 text-subster-purple">💰</div>
              <span className="text-sm">$45/hour</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Building2 size={16} className="text-gray-400" />
              <span className="text-sm">Global English Centre</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-sm">July 10, 2025 • 2:00 AM - 5:00 PM</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-sm">789 Education Street, Sydney, NSW</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
              <ArrowLeft size={16} />
            </button>
            <button className="flex-1 py-3 border border-gray-300 rounded-full text-gray-700 font-medium">
              Decline
            </button>
            <button className="flex-1 py-3 bg-subster-green text-white rounded-full font-medium">
              Accept
            </button>
          </div>
        </div>

        {/* Second Job */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ESL Teacher
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-4 h-4 text-subster-purple">⚡</div>
              <span className="text-sm">Intermediate</span>
              <div className="w-4 h-4 text-subster-purple">💰</div>
              <span className="text-sm">$45/hour</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Building2 size={16} className="text-gray-400" />
              <span className="text-sm">Sydney Language Institute</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-sm">
                July 12, 2025 • 10:00 AM - 1:00 PM
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-sm">321 Learning Lane, Sydney, NSW</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
              <ArrowLeft size={16} />
            </button>
            <button className="flex-1 py-3 border border-gray-300 rounded-full text-gray-700 font-medium">
              Decline
            </button>
            <button className="flex-1 py-3 bg-subster-green text-white rounded-full font-medium">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExplore = () => (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="px-6">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search Jobs"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-subster-purple/20"
            />
          </div>
          <button className="w-12 h-12 border border-gray-200 rounded-2xl flex items-center justify-center">
            <Filter size={20} className="text-gray-600" />
          </button>
          <button className="w-12 h-12 border border-gray-200 rounded-2xl flex items-center justify-center">
            <ArrowUpDown size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Job Cards */}
      <div className="px-6 space-y-4">
        {/* First Job */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ESL Teacher
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-4 h-4 text-subster-purple">⚡</div>
              <span className="text-sm">Intermediate</span>
              <div className="w-4 h-4 text-subster-purple">💰</div>
              <span className="text-sm">$45/hour</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Building2 size={16} className="text-gray-400" />
              <span className="text-sm">English Academy</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-sm">July 8, 2025 • 9:00 AM - 12:00 PM</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-sm">123 Main Street, Sydney, NSW</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
              <ArrowLeft size={16} />
            </button>
            <button className="flex-1 py-3 bg-subster-green text-white rounded-full font-medium">
              Apply
            </button>
          </div>
        </div>

        {/* Second Job */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ESL Teacher
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-4 h-4 text-subster-purple">⚡</div>
              <span className="text-sm">Beginner</span>
              <div className="w-4 h-4 text-subster-purple">💰</div>
              <span className="text-sm">$45/hour</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Building2 size={16} className="text-gray-400" />
              <span className="text-sm">Global English Centre</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-sm">July 9, 2025 • 10:00 AM - 1:00 PM</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-sm">456 College Avenue, Sydney, NSW</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
              <ArrowLeft size={16} />
            </button>
            <button className="flex-1 py-3 bg-subster-green text-white rounded-full font-medium">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab("explore")}
              className={`flex-1 pb-4 pt-4 text-center font-medium border-b-2 ${
                activeTab === "explore"
                  ? "border-subster-purple text-gray-900"
                  : "border-transparent text-gray-500"
              }`}
            >
              Explore
            </button>
            <button
              onClick={() => setActiveTab("myJobs")}
              className={`flex-1 pb-4 pt-4 text-center font-medium border-b-2 ${
                activeTab === "myJobs"
                  ? "border-subster-purple text-gray-900"
                  : "border-transparent text-gray-500"
              }`}
            >
              My Jobs
            </button>
          </div>
        </div>

        <div className="py-6">
          {activeTab === "explore" ? renderExplore() : renderMyJobs()}
        </div>
      </div>
    </Layout>
  );
}
