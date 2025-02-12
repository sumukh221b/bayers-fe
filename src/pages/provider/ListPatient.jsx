import React, { useState } from "react";

const DataList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left text-gray-700">Name</th>
              <th className="py-2 px-4 text-left text-gray-700">Contact</th>
              <th className="py-2 px-4 text-left text-gray-700">Email</th>
              <th className="py-2 px-4 text-center text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.contact}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => setSelectedItem(item)}
                  >
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Item Details</h3>
            <p className="text-gray-700">Name: {selectedItem.name}</p>
            <p className="text-gray-500">Contact: {selectedItem.contact}</p>
            <p className="text-gray-500">Email: {selectedItem.email}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setSelectedItem(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SamplePage = () => {
  const sampleData = [
    { name: "Sachin", contact: "7795060424", email: "sachin.nagalikar@gmail.com" },
    { name: "Sumukh", contact: "1234567890", email: "sumukh@gmail.com" },
    { name: "Venkatesh", contact: "1234567890", email: "venkatesh@gmail.com" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <DataList items={sampleData} />
    </div>
  );
};

export default SamplePage;