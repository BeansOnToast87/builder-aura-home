import { Calendar, MapPin, Building2, ChevronRight } from "lucide-react";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "recent">("upcoming");

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Job Confirmation Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Job confirmation
              </h2>
              <p className="text-gray-600 mt-1">
                You have 1 upcoming deadline for job confirmation
              </p>
            </div>
            <button className="px-4 py-2 border border-subster-purple text-subster-purple rounded-full text-sm font-medium">
              View
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex-1 pb-3 text-center font-medium border-b-2 ${
              activeTab === "upcoming"
                ? "border-subster-purple text-gray-900"
                : "border-transparent text-gray-500"
            }`}
          >
            Upcoming jobs
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`flex-1 pb-3 text-center font-medium border-b-2 ${
              activeTab === "recent"
                ? "border-subster-purple text-gray-900"
                : "border-transparent text-gray-500"
            }`}
          >
            Recent jobs
          </button>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {/* First Job */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                ESL Teacher
              </h3>
              <ChevronRight className="text-gray-400" size={20} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4 text-subster-purple">⚡</div>
                <span className="text-sm">Advanced</span>
                <div className="w-4 h-4 text-subster-purple">💰</div>
                <span className="text-sm">$45/hour</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Building2 size={16} className="text-gray-400" />
                <span className="text-sm">English Academy</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm">
                  July 5, 2025 • 9:00 AM - 12:00 PM
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-sm">123 Main Street, Sydney, NSW</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4">📄</div>
                <span className="text-sm underline">Terms and conditions</span>
              </div>
            </div>
          </div>

          {/* Second Job */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                ESL Teacher
              </h3>
              <ChevronRight className="text-gray-400" size={20} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4 text-subster-purple">⚡</div>
                <span className="text-sm">Advanced</span>
                <div className="w-4 h-4 text-subster-purple">💰</div>
                <span className="text-sm">$45/hour</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Building2 size={16} className="text-gray-400" />
                <span className="text-sm">English Academy</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm">
                  July 6, 2025 • 9:00 AM - 12:00 PM
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-sm">123 Main Street, Sydney, NSW</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4">📄</div>
                <span className="text-sm underline">Terms and conditions</span>
              </div>
            </div>
          </div>

          {/* Third Job (Partial) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                ESL Teacher
              </h3>
              <ChevronRight className="text-gray-400" size={20} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4 text-subster-purple">⚡</div>
                <span className="text-sm">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
