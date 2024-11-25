import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const InvoicePage = () => {
  const invoiceState = useSelector((state) => state.invoice);

  useEffect(() => {
    console.log("Current Invoice State in page:", invoiceState); // Logs the entire state of the invoice slice
  }, [invoiceState]); // Logs every time the invoice state changes

  const data = invoiceState.invoice; // Access invoice array directly

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Invoice Details (wait to process)</h2>

        {data && data.length > 0 ? (
          <table className="min-w-full table-auto text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-6 text-left text-sm font-semibold">Invoice Number</th>
                <th className="py-3 px-6 text-left text-sm font-semibold">Date</th>
                <th className="py-3 px-6 text-left text-sm font-semibold">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((invoice, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-sm">{invoice.invoiceNumber}</td>
                  <td className="py-3 px-6 text-sm">{invoice.date}</td>
                  <td className="py-3 px-6 text-sm">{invoice.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No invoice data available.</p>
        )}
      </div>
    </div>
  );
};

export default InvoicePage;
