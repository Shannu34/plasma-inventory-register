import { useState } from "react";
 import DataTable from "../components/DataTable";
  <DataTable
  columns={[
    "S.No",
    "Donation ID",
    "Batch ID",
    "Date",
    "Volume"
  ]}
  data={[]}
/>

export default function PlasmaRegister() {
  const [formData, setFormData] = useState({
    serialNo: "",
    donationId: "",
    batchId: "",
    receiptDate: "",
    sourceCenter: "",
    volume: "",
    temperature: "",
    visualIntegrity: "",
    viralMarker: "",
    operatorSign: "",
    qaSignOff: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Record Saved Successfully");
  };

  return (
    <div className="max-w-7xl mx-auto">

      {/* Page Header */}

      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-8 rounded-3xl mb-8 shadow-lg">
        <h1 className="text-3xl font-bold">
          Plasma Collection Register
        </h1>

        <p className="mt-2 text-blue-100">
          Manage Plasma Collection & Inventory Records
        </p>
      </div>

      {/* Form Card */}

      <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* S.No */}

            <div>
              <label className="block font-semibold mb-2">
                S.No.
              </label>

              <input
                type="number"
                name="serialNo"
                value={formData.serialNo}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Auto Number"
              />
            </div>

            {/* Donation ID */}

            <div>
              <label className="block font-semibold mb-2">
                Donation ID / Bag Barcode No.
              </label>

              <input
                type="text"
                name="donationId"
                value={formData.donationId}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Enter Donation ID"
              />
            </div>

            {/* Batch ID */}

            <div>
              <label className="block font-semibold mb-2">
                Batch ID / Lot Number
              </label>

              <input
                type="text"
                name="batchId"
                value={formData.batchId}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Enter Batch ID"
              />
            </div>

            {/* Date */}

            <div>
              <label className="block font-semibold mb-2">
                Collection / Receipt Date
              </label>

              <input
                type="date"
                name="receiptDate"
                value={formData.receiptDate}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />
            </div>

            {/* Volume */}

            <div>
              <label className="block font-semibold mb-2">
                Volume (mL)
              </label>

              <input
                type="number"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Enter Volume"
              />
            </div>

            {/* Temperature */}

            <div>
              <label className="block font-semibold mb-2">
                Storage Temperature (°C)
              </label>

              <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Enter Temperature"
              />
            </div>

            {/* Visual Integrity */}

            <div>
              <label className="block font-semibold mb-2">
                Visual Bag Integrity Status
              </label>

              <select
                name="visualIntegrity"
                value={formData.visualIntegrity}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              >
                <option value="">
                  Select Status
                </option>

                <option value="Intact">
                  Intact
                </option>

                <option value="Compliant">
                  Compliant
                </option>

                <option value="Leaker Check">
                  Leaker Check
                </option>
              </select>
            </div>

            {/* Viral Marker */}

            <div>
              <label className="block font-semibold mb-2">
                Viral Marker Status (HIV/HCV/HBV)
              </label>

              <select
                name="viralMarker"
                value={formData.viralMarker}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              >
                <option value="">
                  Select Status
                </option>

                <option value="Non-Reactive">
                  Non-Reactive
                </option>

                <option value="Reactive">
                  Reactive
                </option>

                <option value="NAT-Negative">
                  NAT-Negative
                </option>
              </select>
            </div>

            {/* Operator */}

            <div>
              <label className="block font-semibold mb-2">
                Operator Sign
              </label>

              <input
                type="text"
                name="operatorSign"
                value={formData.operatorSign}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="Operator Name"
              />
            </div>

            {/* QA */}

            <div>
              <label className="block font-semibold mb-2">
                QA Executive Sign-Off
              </label>

              <input
                type="text"
                name="qaSignOff"
                value={formData.qaSignOff}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="QA Executive"
              />
            </div>

          </div>

          {/* Source Center */}

          <div className="mt-6">
            <label className="block font-semibold mb-2">
              Source Center / Blood Bank Details
            </label>

            <textarea
              rows="4"
              name="sourceCenter"
              value={formData.sourceCenter}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              placeholder="Enter Blood Bank Details"
            />
          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Save Record
            </button>

            <button
              type="reset"
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Reset
            </button>

          </div>

        </form>

      </div>

    </div>
  );
 
}