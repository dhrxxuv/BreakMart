const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    images: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ['TechMart', 'DesignMart', 'SocialMart', 'MediaMart', 'InnovationMart'],
    },
    otherFields: { type: mongoose.Schema.Types.Mixed, required: false },
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
