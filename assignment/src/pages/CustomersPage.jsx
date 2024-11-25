import React from 'react';
import { useSelector } from 'react-redux';

const CustomerPage = () => {
  const { data } = useSelector((state) => state.customer);

  console.log("Customer data in customer page :", data);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Customer Details (wait to process)</h2>

        {data ? (
          <div className="text-gray-700 space-y-4">
            <div className="flex items-center">
              <span className="font-semibold w-40">Name:</span>
              <span className="text-gray-600">{data.name}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold w-40">Address:</span>
              <span className="text-gray-600">{data.address}</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No customer data available.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerPage;
