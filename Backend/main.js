const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db'); 
const path = require('path');

const workRoute = require('./src/routers/workRoutes'); // Import the Work routes
const subCategoryRoute = require('./src/routers/subCategoryRoutes'); // Import the SubCategory routes

const app = express();
const port = 3000;


app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json()); 


connectDB();


app.use('/api/works', workRoute); 
app.use('/api/subcategories', subCategoryRoute); 

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
