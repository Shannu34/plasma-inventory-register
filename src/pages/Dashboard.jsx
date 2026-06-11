import { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [monthlyRecords, setMonthlyRecords] = useState(0);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/plasma"
        );

        const records = response.data;

        setTotalRecords(records.length);

        const volume = records.reduce(
          (sum, item) =>
            sum + Number(item.volume_ml || 0),
          0
        );

        setTotalVolume(volume);

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const monthly = records.filter((item) => {
          const date = new Date(item.collection_date);

          return (
            date.getMonth() === currentMonth &&
            date.getFullYear() === currentYear
          );
        });

        setMonthlyRecords(monthly.length);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-10 rounded-3xl mb-8">
        <h1 className="text-4xl font-bold">
          Plasma Inventory Register
        </h1>

        <p className="mt-3 text-blue-100">
          Manage Plasma Inventory Efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Records"
          value={totalRecords}
          color="bg-blue-600"
          icon="📦"
        />

        <StatCard
          title="Total Volume (mL)"
          value={totalVolume}
          color="bg-green-600"
          icon="💉"
        />

        <StatCard
          title="Current Month Records"
          value={monthlyRecords}
          color="bg-orange-500"
          icon="📊"
        />

        <StatCard
          title="Reports"
          value="Ready"
          color="bg-purple-600"
          icon="📋"
        />
      </div>
    </div>
  );
}