const API = "https://plasma-backend-c9d8.onrender.com";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

export default function PlasmaRegister() {
  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
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

  const fetchRecords = async () => {
    try {
      const response = await axios.get(`${API}/api/plasma`);

      setRecords(response.data);
    } catch (error) {
      console.error(error);
    }
  };

 useEffect(() => {
  const loadRecords = async () => {
    try {
      const response = await axios.get(`${API}/api/plasma`);

      setRecords(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  loadRecords();
}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let response;

    const payload = {
      donation_id: formData.donationId,
      batch_id: formData.batchId,
      collection_date: formData.receiptDate,
      source_center: formData.sourceCenter,
      volume_ml: Number(formData.volume),
      storage_temp: Number(formData.temperature),
      bag_integrity_status: formData.visualIntegrity,
      viral_marker_status: formData.viralMarker,
      operator_sign: formData.operatorSign,
      qa_executive_signoff: formData.qaSignOff,
    };

    // UPDATE
    if (editId) {
      response = await axios.put(
        `${API}/api/plasma/${editId}`,
        payload
      );
    }
    // CREATE
    else {
      response = await axios.post(
        `${API}/api/plasma`,
        payload
      );
    }

    alert(response.data.message);

    setFormData({
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

    setEditId(null);
    fetchRecords();

  } catch (error) {
    console.error(error);
    alert("Failed to Save Record");
  }
};
     
const handleEdit = (item) => {
  setEditId(item.id);

  setFormData({
    donationId: item.donation_id,
    batchId: item.batch_id,
    receiptDate: item.collection_date
      ?.split("T")[0],
    sourceCenter: item.source_center,
    volume: item.volume_ml,
    temperature: item.storage_temp,
    visualIntegrity: item.bag_integrity_status,
    viralMarker: item.viral_marker_status,
    operatorSign: item.operator_sign,
    qaSignOff: item.qa_executive_signoff,
  });
};
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/api/plasma/${id}`);

      alert("Record Deleted Successfully");

      fetchRecords();
    } catch (error) {
      console.error(error);
      alert("Failed to Delete Record");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-8 rounded-3xl mb-8 shadow-lg">
        <h1 className="text-3xl font-bold">
          Plasma Inventory Register
        </h1>

        <p className="mt-2 text-blue-100">
          Manage Plasma Collection & Inventory Records
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-3xl shadow-lg border p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              name="donationId"
              value={formData.donationId}
              onChange={handleChange}
              placeholder="Donation ID"
              className="border rounded-xl p-3"
            />

            <input
              type="text"
              name="batchId"
              value={formData.batchId}
              onChange={handleChange}
              placeholder="Batch ID"
              className="border rounded-xl p-3"
            />

            <input
              type="date"
              name="receiptDate"
              value={formData.receiptDate}
              onChange={handleChange}
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              placeholder="Volume (mL)"
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="Storage Temp (°C)"
              className="border rounded-xl p-3"
            />

            <input
              type="text"
              name="operatorSign"
              value={formData.operatorSign}
              onChange={handleChange}
              placeholder="Operator Sign"
              className="border rounded-xl p-3"
            />

            <input
              type="text"
              name="qaSignOff"
              value={formData.qaSignOff}
              onChange={handleChange}
              placeholder="QA Executive"
              className="border rounded-xl p-3"
            />

            <select
              name="visualIntegrity"
              value={formData.visualIntegrity}
              onChange={handleChange}
              className="border rounded-xl p-3"
            >
              <option value="">Integrity Status</option>
              <option value="Intact">Intact</option>
              <option value="Compliant">Compliant</option>
              <option value="Leaker Check">Leaker Check</option>
            </select>

            <select
              name="viralMarker"
              value={formData.viralMarker}
              onChange={handleChange}
              className="border rounded-xl p-3"
            >
              <option value="">Viral Marker</option>
              <option value="Non-Reactive">Non-Reactive</option>
              <option value="Reactive">Reactive</option>
            </select>

          </div>

          <textarea
            rows="4"
            name="sourceCenter"
            value={formData.sourceCenter}
            onChange={handleChange}
            placeholder="Source Center / Blood Bank Details"
            className="w-full border rounded-xl p-3 mt-6"
          />

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            >
              Save Record
            </button>
          </div>
        </form>
      </div>

      {/* Records Table */}
      <div className="mt-8">
        <DataTable
          columns={[
            "ID",
            "Donation ID",
            "Batch ID",
            "Date",
            "Volume",
            "Action",
          ]}
          data={records.map((item) => ({
            ID: item.id,
            "Donation ID": item.donation_id,
            "Batch ID": item.batch_id,
            Date: new Date(
              item.collection_date
            ).toLocaleDateString(),
            Volume: item.volume_ml,
            Action: (
  <div className="flex gap-2">
    <button
      onClick={() => handleEdit(item)}
      className="bg-green-600 text-white px-3 py-1 rounded"
    >
      Edit
    </button>

    <button
      onClick={() => handleDelete(item.id)}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  </div>
),
          }))}
        />
      </div>
    </div>
  );
}