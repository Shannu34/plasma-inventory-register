export default function Reports() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <div className="bg-blue-600 text-white p-6 rounded-2xl">
        Export Excel
      </div>

      <div className="bg-green-600 text-white p-6 rounded-2xl">
        Download PDF
      </div>

      <div className="bg-purple-600 text-white p-6 rounded-2xl">
        Print Reports
      </div>

    </div>
  );
}