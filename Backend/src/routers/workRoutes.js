const express = require('express');
const router = express.Router();
const Work = require('../models/workSchema');

// Middleware for parsing request bodies (for POST and PUT requests)
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// 1. GET: Fetch work by ID
router.get('/work/:id', (req, res) => {
  const { id } = req.params;

  Work.findById(id)
    .then(work => {
      if (!work) {
        return res.status(404).json({ error: 'Work not found' });
      }
      res.status(200).json(work);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error fetching work', details: err });
    });
});

// 2. GET: Fetch works by subcategory
router.get('/works/by-subcategory/:subCategoryId', (req, res) => {
  const { subCategoryId } = req.params;

  Work.find({ subCategories: subCategoryId })
    .then(works => {
      res.status(200).json(works);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error fetching works by subcategory', details: err });
    });
});

// 3. GET: Fetch featured works by category
router.get('/works/featured/:category', (req, res) => {
  const { category } = req.params;

  Work.find({ category, isFeatured: true })
    .then(works => {
      res.status(200).json(works);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error fetching featured works by category', details: err });
    });
});

// 4. POST: Create a new work
router.post('/work', (req, res) => {
  const { name, description, category, featuredImage, images, isFeatured, youtubeEmbedLink, subCategories } = req.body;

  const newWork = new Work({
    name,
    description,
    category,
    featuredImage,
    images,
    isFeatured,
    youtubeEmbedLink,
    subCategories
  });

  newWork.save()
    .then(savedWork => {
      res.status(201).json(savedWork);
    })
    .catch(err => {
      res.status(400).json({ error: 'Error saving work', details: err });
    });
});

// 5. PUT: Update a work by ID
router.put('/work/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, category, featuredImage, images, isFeatured, youtubeEmbedLink, subCategories } = req.body;

  Work.findByIdAndUpdate(id, {
    name,
    description,
    category,
    featuredImage,
    images,
    isFeatured,
    youtubeEmbedLink,
    subCategories
  }, { new: true })  // The `new: true` option returns the updated document
    .then(updatedWork => {
      if (!updatedWork) {
        return res.status(404).json({ error: 'Work not found' });
      }
      res.status(200).json(updatedWork);
    })
    .catch(err => {
      res.status(400).json({ error: 'Error updating work', details: err });
    });
});

module.exports = router;
