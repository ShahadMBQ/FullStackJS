const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});
const upload = multer({ storage: storage });
// Route to upload image
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("Image uploaded successfully!");
});

// Route to process image
app.post("/process-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  sharp(req.file.path)
    .resize(200, 200)
    .toFile(`uploads/resized-${req.file.filename}`, (err, info) => {
      if (err) {
        return res.status(500).send("Error processing image");
      }
      res.send("Image processed successfully!");
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const { add, subtract } = require('./utilities/mathUtils');

console.log("add",add(1,5))
console.log(subtract(5, 3))
//  For Uploading:
// Set the URL to http://localhost:3000/upload.
// In the Body tab, select form-data.
// Add a key named image (this should match the name used in upload.single('image')).
// Change the type from Text to File.
// Choose an image file from your computer to upload.
// Click Send.For Uploading:
// Set the URL to http://localhost:3000/upload.
// In the Body tab, select form-data.
// Add a key named image (this should match the name used in upload.single('image')).
// Change the type from Text to File.
// Choose an image file from your computer to upload.
// Click Send.
// For Processing:
// Set the URL to http://localhost:3000/process-image.
// Repeat the steps above to upload the same or a different image.
// Click Send.

// Create the server
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.listen(PORT,() => {
//     console.log(`Server is running on port ${PORT}`);
// })
// //Set Up Image Uploading
// //Use multer to handle file uploads. Set up a route to accept image uploads:
// const multer = require('multer') ;
// const upload = multer({dest : 'uploads/'});

// app.post('upload',single.upload('image'), (req,res) =>{
//  res.send('Image uploaded successfully!')
// })

// //Implement Image Processing
// //Use sharp to process the uploaded images. For example, you can resize the image:

// const sharp = require('sharp');

// app.post('/process-image',single.upload('image'), (req,res) =>{
// sharp(req.file.path).resize(200,200).toFile('uploads/resized-image.jpg' , (err, info)=>{
//     if (err) {
//         return res.status(500).send('Error processing image');
//     }
//      res.send('Image processed successfully! ')
// })
// })
