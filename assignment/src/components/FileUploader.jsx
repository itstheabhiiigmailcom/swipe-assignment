import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setInvoice } from '../redux/slices/invoiceSlice.js';
import { setCustomer } from '../redux/slices/customerSlice.js';
import { setProducts } from '../redux/slices/productSlice.js';
import { uploadFilesAndFetchData } from '../api/invoiceApi';

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
  };

  const handleUpload = async () => {
    if (!files.length) {
      alert('Please select a file to upload');
      return;
    }

    try {
      // Fetching all data
      const data = await uploadFilesAndFetchData(files);

      // Dispatch invoice data
      const invoiceData = {
        invoiceNumber: data.invoiceNumber || '',
        date: data.date || '',
        totalAmount: data.totalAmount || '',
      };
      dispatch(setInvoice(invoiceData));

      // Dispatch customer data
      const customerData = {
        name: data.customer?.name || '',
        address: data.customer?.address || '',
      };
      dispatch(setCustomer(customerData));

      // Dispatch product (items) data
      const productData = data.items || [];
      dispatch(setProducts(productData));
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  const handleNavigateToInvoice = () => {
    navigate('/invoice');
  };

  const handleNavigateToCustomer = () => {
    navigate('/customer');
  };

  const handleNavigateToProduct = () => {
    navigate('/product');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-8 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">File Upload & Invoice Management</h2>
        <p className='text-sm'>Please don't refresh the page wait to process and use button to check details</p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Choose Files</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleUpload}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Upload & Process
          </button>

          <div className="flex justify-between">
            <button
              onClick={handleNavigateToInvoice}
              className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Check Invoice Details
            </button>
            <button
              onClick={handleNavigateToCustomer}
              className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Check Customer Details
            </button>
            <button
              onClick={handleNavigateToProduct}
              className="py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
            >
              Check Product Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
