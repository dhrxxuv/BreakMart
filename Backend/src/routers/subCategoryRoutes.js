const express = require('express');
const router = express.Router();
const SubCategory = require('../models/SubCategory');

// Middleware for parsing request bodies (for POST requests)
const bodyParser = require('body-parser');
router.use(bodyParser.json());

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

// 2. POST: Create a new subcategory
router.post('/subcategory', (req, res) => {
  const { category, image, parentCategory } = req.body;

  const newSubCategory = new SubCategory({
    category,
    image,
    parentCategory
  });

  newSubCategory.save()
    .then(savedSubCategory => {
      res.status(201).json(savedSubCategory);
    })
    .catch(err => {
      res.status(400).json({ error: 'Error saving subcategory', details: err });
    });
});

module.exports = router;
