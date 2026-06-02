import { Link } from "react-router-dom";
import {
  FaHome,
  FaFlask,
  FaChartBar,
  FaFileAlt
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-72 bg-gradient-to-b from-slate-900 to-blue-900 text-white min-h-screen">

      <div className="p-6 border-b border-slate-700">

        <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold">
          PIR
        </div>

        <h1 className="mt-4 text-xl font-bold">
          Plasma Inventory Register
        </h1>

      </div>

      <div className="p-4 space-y-3">

        <Link
          to="/"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-700"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/plasma-register"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-700"
        >
          <FaFlask />
          Plasma Register
        </Link>

        <Link
          to="/monthly-summary"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-700"
        >
          <FaChartBar />
          Monthly Summary
        </Link>

        <Link
          to="/reports"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-700"
        >
          <FaFileAlt />
          Reports
        </Link>

      </div>

    </div>
  );
}