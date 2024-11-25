import React from 'react';
import { useSelector } from 'react-redux';

const ProductPage = () => {
  const { items } = useSelector((state) => state.product);
  console.log("Product Items in product page :", items);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white max-w-6xl mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Product Details (wait to process)</h2>

        {items && items.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 py-3 px-6 text-left text-sm font-semibold">Item Description</th>
                  <th className="border border-gray-300 py-3 px-6 text-left text-sm font-semibold">Quantity</th>
                  <th className="border border-gray-300 py-3 px-6 text-left text-sm font-semibold">Unit Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="border border-gray-300 py-3 px-6 text-sm">{item.description}</td>
                    <td className="border border-gray-300 py-3 px-6 text-sm">{item.quantity}</td>
                    <td className="border border-gray-300 py-3 px-6 text-sm">${item.unitPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No product data available (wait).</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
