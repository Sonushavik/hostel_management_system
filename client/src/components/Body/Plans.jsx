import React from "react";

const Plans = () => {
  return (
    <div className="bg-red-900 opacity-10 max-w-[1240px] mx-auto">
      <div className="overflow-x-auto max-w-[1000px] mx-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-slate-200">
            <tr>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">AC</th>
              <th className="border border-gray-300 p-2">Non-AC</th>
            </tr>
          </thead>
          <tbody>
            {/* Single Bed */}
            <tr className="text-center">
              <td
                rowSpan="2"
                className="border border-gray-300 p-2 font-semibold"
              >
                Single Bed
              </td>
              <td className="border border-gray-300 p-2">Daily</td>
              <td className="border border-gray-300 p-2">₹500</td>
              <td className="border border-gray-300 p-2">₹300</td>
            </tr>
            <tr className="text-center">
              <td className="border border-gray-300 p-2">Monthly</td>
              <td className="border border-gray-300 p-2">₹12,000</td>
              <td className="border border-gray-300 p-2">₹8,000</td>
            </tr>

            {/* Double Bed */}
            <tr className="text-center">
              <td
                rowSpan="2"
                className="border border-gray-300 p-2 font-semibold"
              >
                Double Bed
              </td>
              <td className="border border-gray-300 p-2">Daily</td>
              <td className="border border-gray-300 p-2">₹800</td>
              <td className="border border-gray-300 p-2">₹500</td>
            </tr>
            <tr className="text-center">
              <td className="border border-gray-300 p-2">Monthly</td>
              <td className="border border-gray-300 p-2">₹20,000</td>
              <td className="border border-gray-300 p-2">₹15,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plans;
