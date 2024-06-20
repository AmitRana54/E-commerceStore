
import express from "express";

import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { upload } from "../middlewares/multer.js";


const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },

//   filename: (req, file, cb) => {
//     const extname = path.extname(file.originalname);
//     cb(null, `${file.fieldname}-${Date.now()}${extname}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const filetypes = /jpe?g|png|webp/;
//   const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

//   const extname = path.extname(file.originalname).toLowerCase();
//   const mimetype = file.mimetype;

//   if (filetypes.test(extname) && mimetypes.test(mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Images only"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });
// const uploadSingleImage = upload.single("image");

// router.post("/", (req, res) => {
//   uploadSingleImage(req, res, async (err) => {
//     if (err) {
//       res.status(400).send({ message: err.message });
//     } else if (req.file) {
//       try {
//         console.log(req.file,'this is a file local path')
//         const cloudinaryUrl = await uploadOnCloudinary(req.file.path);
//         console.log(cloudinaryUrl);
        
//         // Remove the local file after uploading to Cloudinary
        
//         res.status(200).send({
//           message: "Image uploaded successfully on Cloudinary",
//           image: cloudinaryUrl?.url,
//         });
//       } catch (error) {
//         res.status(500).send({ message: "Error uploading image to Cloudinary" });
//       }
//     } else {
//       res.status(400).send({ message: "No image file provided" });
//     }
//   });
// });

// export default router;
router.route("/")
  .post(upload.single("image"), async (req, res,err) => {
    try {
      const path = req.file.path;
      const cloudinaryUrl = await uploadOnCloudinary(path);
      console.log(cloudinaryUrl);
      res.status(200).send({
        message: "Image uploaded successfully on Cloudinary",
        image: cloudinaryUrl,
      })
    } catch (error) {
      console.error("Error uploading file:", error.message);
      res.status(500).json({ message: "Error uploading file" });
    }
  });

export default router;