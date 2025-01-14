const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    description: { type: String, required: true }, 
    images: { type: [String], required: true }, 
    video: { type: [String], required: false }, 
    isFeatured: { type: Boolean, default: false }, 
    youtubeLinks: { type: [String], required: false }, 
    subCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: false }], 
    logo: { type: String, required: false }, 
    featuredImage : {type: String,required: true} ,
    year:{type:String, required: false}
}, {
    timestamps: true 
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;
