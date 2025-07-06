import {
  Clock,
  DollarSign,
  Calendar,
  MapPin,
  Building2,
  Download,
} from "lucide-react";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Timesheets() {
  const [activeSort, setActiveSort] = useState<"newest" | "oldest">("newest");

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-gray-600 text-sm">Total Hours Worked</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">15</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-gray-600 text-sm">Total Earning</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">$600</p>
          </div>
        </div>

        {/* Sort Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveSort("newest")}
            className={`flex-1 pb-3 text-center font-medium border-b-2 ${
              activeSort === "newest"
                ? "border-subster-purple text-gray-900"
                : "border-transparent text-gray-500"
            }`}
          >
            Newest First
          </button>
          <button
            onClick={() => setActiveSort("oldest")}
            className={`flex-1 pb-3 text-center font-medium border-b-2 ${
              activeSort === "oldest"
                ? "border-subster-purple text-gray-900"
                : "border-transparent text-gray-500"
            }`}
          >
            Oldest First
          </button>
        </div>

        {/* Timesheet Entries */}
        <div className="space-y-4">
          {/* First Timesheet */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-400" />
                <div>
                  <span className="text-sm text-gray-600">Hours Worked</span>
                  <p className="font-semibold">15</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-gray-400" />
                <div>
                  <span className="text-sm text-gray-600">Hourly Rate</span>
                  <p className="font-semibold">$40/hour</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross Earning</span>
                <span className="font-semibold">$120</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-semibold">-$12</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Nett Earning</span>
                <span className="font-semibold">$108</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900">ESL Teacher</h4>

              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4 text-subster-purple">⚡</div>
                <span className="text-sm">Advanced</span>
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
                <div className="w-4 h-4">🏦</div>
                <span className="text-sm">Bank Account ending in 1234</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 border border-gray-300 rounded-full text-gray-700 font-medium">
                Edit
              </button>
              <button className="flex-1 py-3 bg-subster-green text-white rounded-full font-medium hover:bg-subster-green-light transition-colors">
                Submit
              </button>
            </div>
          </div>

          {/* Second Timesheet */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-400" />
                <div>
                  <span className="text-sm text-gray-600">Hours Worked</span>
                  <p className="font-semibold">3</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-gray-400" />
                <div>
                  <span className="text-sm text-gray-600">Hourly Rate</span>
                  <p className="font-semibold">$45/hour</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross Earning</span>
                <span className="font-semibold">$135</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-semibold">-$12</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Nett Earning</span>
                <span className="font-semibold">$123</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900">ESL Teacher</h4>

              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4 text-subster-purple">⚡</div>
                <span className="text-sm">Advanced</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Building2 size={16} className="text-gray-400" />
                <span className="text-sm">Language Hub</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm">
                  July 7, 2025 • 1:00 PM - 4:00 PM
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4">🏦</div>
                <span className="text-sm">Bank Account ending in 1234</span>
              </div>
            </div>

            <div className="mb-4">
              <button className="flex items-center gap-2 text-gray-700 text-sm">
                <Download size={16} />
                Download Payslip
              </button>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 border border-gray-300 rounded-full text-gray-700 font-medium">
                Edit
              </button>
              <button className="flex-1 py-3 bg-gray-200 text-gray-600 rounded-full font-medium">
                Submitted
              </button>
            </div>
          </div>
        </div>

        {/* Create New Timesheet Button */}
        <button className="w-full py-4 bg-subster-green text-white rounded-full font-medium text-lg hover:bg-subster-green-light transition-colors shadow-sm">
          Create New Timesheet
        </button>
      </div>
    </Layout>
  );
}
