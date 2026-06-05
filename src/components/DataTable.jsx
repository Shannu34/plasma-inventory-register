import React from "react";

export default function DataTable({ columns, data }) {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            {columns.map((col) => (
              <th key={col} className="text-left p-4">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center p-8"
              >
                No Records Found
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index} className="border-t">
                {Object.values(row).map((cell, i) => (
                  <td key={i} className="p-4">
                    {React.isValidElement(cell)
                      ? cell
                      : String(cell)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}