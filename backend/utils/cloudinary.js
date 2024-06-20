import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name:"dyxitvjug" ,
  api_key:"783151518659683",
  api_secret:"OTDI7XJw7xDaVHKQlqRSNupa4Ng" ,
});

const uploadOnCloudinary = async (localpath) => {
  try {
    if (!localpath) {
      throw new Error("Local file path is required.");
    }

    const response = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });

    console.log(response.url, "File uploaded successfully");
    
    // Remove the file from the local filesystem (optional, adjust as needed)
    fs.unlink(localpath, (err) => {
      if (err) {
        console.error("Error deleting the file:", err.message);
      } else {
        console.log("File deleted successfully");
      }
    });
    return response?.url;
    
  } catch (error) {
    console.error("Error uploading file:", error.message);

    // Attempt to delete the file if upload fails (optional, adjust as needed)
    fs.unlink(localpath, (err) => {
      if (err) {
        console.error("Error deleting the file:", err.message);
      } else {
        console.log("File deleted successfully");
      }
    });

    return { error: error.message }; // Return more informative error object
  }
};

export { uploadOnCloudinary };