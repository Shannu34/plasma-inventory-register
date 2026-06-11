import { useState } from "react";
import axios from "axios";

export default function MonthlySummary() {
  const [formData, setFormData] = useState({
    summaryMonth: "",
    openingBalance: "",
    collectedVolume: "",
    distributedVolume: "",
    rejectedVolume: "",
    closingStock: "",
    qaSignoff: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/monthly-summary",
        {
          summary_month: formData.summaryMonth,
          opening_balance: formData.openingBalance,
          collected_volume: formData.collectedVolume,
          distributed_volume: formData.distributedVolume,
          rejected_volume: formData.rejectedVolume,
          closing_stock: formData.closingStock,
          qa_signoff: formData.qaSignoff,
        }
      );

      alert("Monthly Summary Saved Successfully");
    } catch (error) {
      console.error(error);
       
      alert(
        error.response?.data?.message ||
           error.message   );
    }
  };

  return (
    <div className="max-w-7xl mx-auto">

      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-8 rounded-3xl mb-8">
        <h1 className="text-3xl font-bold">
          MONTHLY CUMULATIVE ACCOUNTABILITY SUMMARY
        </h1>
      </div>

      <div className="bg-white shadow-lg rounded-3xl p-8">

        <form onSubmit={handleSubmit}>

          <div className="overflow-x-auto">

            <table className="w-full border border-gray-300">

              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3">
                    Summary Month / Year
                  </th>

                  <th className="border p-3">
                    Opening Balance Stock
                    <br />
                    (Total Bags / Volume)
                  </th>

                  <th className="border p-3">
                    Total Fresh Volume Collected
                    During Month (mL)
                  </th>

                  <th className="border p-3">
                    Total Plasma Consignments
                    Distributed / Dispatched (mL)
                  </th>

                  <th className="border p-3">
                    Total Rejected/Inactivated Volume
                    (mL)
                  </th>

                  <th className="border p-3">
                    Closing Net Stock
                    In Deep Freezers (mL)
                  </th>

                  <th className="border p-3">
                    QA Head Sign-off & Date
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>

                  <td className="border p-2">
                    <input
                      type="month"
                      name="summaryMonth"
                      value={formData.summaryMonth}
                      onChange={handleChange}
                      className="w-full border p-2"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      name="openingBalance"
                      value={formData.openingBalance}
                      onChange={handleChange}
                      className="w-full border p-2"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      name="collectedVolume"
                      value={formData.collectedVolume}
                      onChange={handleChange}
                      className="w-full border p-2"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      name="distributedVolume"
                      value={formData.distributedVolume}
                      onChange={handleChange}
                      className="w-full border p-2"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      name="rejectedVolume"
                      value={formData.rejectedVolume}
                      onChange={handleChange}
                      className="w-full border p-2"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      name="closingStock"
                      value={formData.closingStock}
                      onChange={handleChange}
                      className="w-full border p-2"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="text"
                      name="qaSignoff"
                      value={formData.qaSignoff}
                      onChange={handleChange}
                      placeholder="QA Head Name & Date"
                      className="w-full border p-2"
                    />
                  </td>

                </tr>
              </tbody>

            </table>

          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            >
              Save Summary
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}