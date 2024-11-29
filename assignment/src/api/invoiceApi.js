import axios from 'axios';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const uploadFilesAndFetchData = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('some', file);
  });

  try {
    const response = await axios.post(`${SERVER_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.data; // Extracted data
  } catch (error) {
    throw new Error(error.response?.data || 'Failed to upload files');
  }
};
