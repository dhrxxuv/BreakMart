const multer = require('multer');
const path = require('path');


// Set up storage destination and filename for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Folder to store uploaded images
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Generate unique filename
    },
  });

const multiUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      // Accept only image files
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed'), false);
      }
    },
  }).array('images', 10);


module.exports = multiUpload