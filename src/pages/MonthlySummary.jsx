import { useState } from "react";

export default function MonthlySummary() {
  const [selectedMonth, setSelectedMonth] = useState("2026-05");

  const summaryData = {
    openingBalance: 15000,
    freshVolumeCollected: 4520,
    distributedVolume: 1200,
    rejectedVolume: 100,
    closingStock: 18220,
  };

  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}

      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-6 rounded-2xl mb-6">

        <h1 className="text-3xl font-bold">
          Monthly Inventory Summary
        </h1>

        <p className="text-green-100 mt-2">
          Plasma Inventory Accountability Report
        </p>

      </div>

      {/* Month Selection */}

      <div className="bg-white p-6 rounded-2xl shadow mb-6">

        <label className="font-semibold mr-4">
          Summary Month / Year
        </label>

        <input
          type="month"
          value={selectedMonth}
          onChange={(e) =>
            setSelectedMonth(e.target.value)
          }
          className="border rounded-lg p-2"
        />

      </div>

      {/* Report Table */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead>

            <tr className="bg-green-600 text-white">

              <th className="p-4 text-left">
                Summary Month / Year
              </th>

              <th className="p-4 text-left">
                Opening Balance Stock
              </th>

              <th className="p-4 text-left">
                Fresh Volume Collected
              </th>

              <th className="p-4 text-left">
                Distributed / Dispatched
              </th>

              <th className="p-4 text-left">
                Rejected / Inactivated
              </th>

              <th className="p-4 text-left">
                Closing Net Stock
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b hover:bg-green-50">

              <td className="p-4">
                May 2026
              </td>

              <td className="p-4">
                {summaryData.openingBalance} mL
              </td>

              <td className="p-4">
                {summaryData.freshVolumeCollected} mL
              </td>

              <td className="p-4">
                {summaryData.distributedVolume} mL
              </td>

              <td className="p-4">
                {summaryData.rejectedVolume} mL
              </td>

              <td className="p-4 font-bold text-green-700">
                {summaryData.closingStock} mL
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* QA Section */}

      <div className="bg-white rounded-2xl shadow mt-6 p-6">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block font-semibold mb-2">
              QA Head Sign-Off
            </label>

            <input
              type="text"
              placeholder="Enter QA Head Name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Date
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-3"
            />
          </div>

        </div>

      </div>

      {/* Action Buttons */}

      <div className="flex gap-4 mt-6">

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
          Generate Report
        </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Export Excel
        </button>

        <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
          Export PDF
        </button>

        <button className="bg-slate-700 text-white px-6 py-3 rounded-lg">
          Print
        </button>

      </div>

    </div>
  );
}