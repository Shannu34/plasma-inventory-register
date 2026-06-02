export default function StatCard({
  title,
  value,
  color,
  icon,
}) {
  return (
    <div
      className={`${color}
      p-6
      rounded-2xl
      text-white
      shadow-lg
      hover:scale-105
      transition`}
    >
      <div className="flex justify-between">

        <div>
          <p>{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>
    </div>
  );
}