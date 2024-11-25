const cloudinary = require('cloudinary').v2;
const fs = require('fs');
require('dotenv').config();



// Configuration of cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "raw" // Explicitly define for non-image files like PDFs
        });

        // File uploaded successfully, delete the local file
        fs.unlinkSync(localFilePath);
        return response.secure_url;

    } catch (err) {
        console.error("Cloudinary upload failed:", err);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); // Clean up temp file if the upload fails
        }
        return null;
    }
};

module.exports = {uploadOnCloudinary}