const express = require('express');
const router = express.Router();
const multer = require('multer');
const SubCategory = require('../models/subCategories');

// Middleware for parsing request bodies (for POST requests)
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// Set up multer storage
const storage = multer.memoryStorage(); // Using memory storage to convert to Base64
const upload = multer({ storage });

// 1. GET: Fetch subcategories by category
router.get('/subcategories/:category', (req, res) => {
  const { category } = req.params;

  SubCategory.find({ category })
    .then(subCategories => {
      res.status(200).json(subCategories);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error fetching subcategories', details: err });
    });
});

// 2. POST: Create a new subcategory (with image upload)
router.post('/subcategory', upload.single('photo'), (req, res) => {
  try {
    const { name, description, category, otherFields } = req.body;

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Convert the uploaded file to Base64
    const imageBase64 = req.file.buffer.toString('base64');

    // Create a new subcategory
    const newSubCategory = new SubCategory({
      name,
      description,
      images: imageBase64, // Save Base64 string
      category,
    });

    // Save to the database
    newSubCategory.save()
      .then(savedSubCategory => {
        res.status(201).json(savedSubCategory);
      })
      .catch(err => {
        res.status(400).json({ error: 'Error saving subcategory', details: err });
      });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

module.exports = router;
