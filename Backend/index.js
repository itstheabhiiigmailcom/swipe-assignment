const express = require('express');
const path = require('path');
const cors = require('cors');
const { processInvoice } = require('./FileProcessor.js');
const { upload } = require('./middlewares/multer.middleware.js')
// const { uploadOnCloudinary } = require("./utils/cloudinary.js")

const app = express();
app.use(cors({
  origin: 'https://swipe-assignment-n7mr5l7fi-abhishek-kumars-projects-7905b109.vercel.app', // Allow this specific origin
  methods: ['GET', 'POST'], // Specify allowed HTTP methods
  credentials: true // Allow cookies or credentials to be sent
}));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});


// API endpoint to handle file uploads
app.post('/upload', 
  upload.fields([                 // middleware
    {
        name: "some",
        maxCount: 1
    },
]),
  async (req, res) => {
  try {
    if (req.files.length === 0) {
      return res.status(400).send('No files uploaded');
    }

    console.log('Uploaded files:', req.files);

    // Extract file paths
    const filePaths = req.files.some.map(file => file.path);

    // Upload files to Cloudinary and get their URLs
    // const cloudinaryResponses = [];
    // for (const filePath of filePaths) {
    //   const cloudinaryResponse = await uploadOnCloudinary(filePath);
    //   if (cloudinaryResponse) {
    //     cloudinaryResponses.push(cloudinaryResponse);
    //   }
    // }
    // // console.log(cloudinaryResponses)
    // const allData = await processInvoice(cloudinaryResponses[0]);
    
    const allData = await processInvoice(filePaths[0])
    // Send the extracted data to the frontend
    res.status(200).json({ 
      message: 'Files uploaded successfully', 
      files: req.files,
      data: allData // Include the processed data
    });

  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).send('Error processing files');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
