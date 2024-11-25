import axios from 'axios';

export const uploadFilesAndFetchData = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('some', file);
  });

  try {
    const response = await axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.data; // Extracted data
  } catch (error) {
    throw new Error(error.response?.data || 'Failed to upload files');
  }
};
