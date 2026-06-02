export default function Navbar() {
  return (
    <div className="bg-white h-20 shadow flex justify-between items-center px-8">

      <div>
        <h2 className="text-2xl font-bold">
          Plasma Inventory Register
        </h2>

        <p className="text-gray-500">
          Inventory Management System
        </p>
      </div>

      <div className="bg-blue-600 text-white px-5 py-2 rounded-full">
        Admin
      </div>

    </div>
  );
}