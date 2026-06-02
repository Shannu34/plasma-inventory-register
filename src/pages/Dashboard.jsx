import StatCard from "../components/StatCard";

export default function Dashboard() {
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

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Total Records"
          value="0"
          color="bg-blue-600"
          icon="📦"
        />

        <StatCard
          title="Volume (mL)"
          value="0"
          color="bg-green-600"
          icon="💉"
        />

        <StatCard
          title="Monthly Records"
          value="0"
          color="bg-orange-500"
          icon="📊"
        />

        <StatCard
          title="Reports"
          value="0"
          color="bg-purple-600"
          icon="📋"
        />

      </div>

    </div>
  );
  <div className="grid lg:grid-cols-4 gap-6">

  <StatCard
    title="Total Records"
    value="145"
    icon="📦"
    bg="bg-blue-600"
  />

  <StatCard
    title="Volume (mL)"
    value="45230"
    icon="💉"
    bg="bg-sky-500"
  />

  <StatCard
    title="This Month"
    value="24"
    icon="📊"
    bg="bg-green-500"
  />

  <StatCard
    title="Reports"
    value="12"
    icon="📋"
    bg="bg-orange-500"
  />

</div>
}