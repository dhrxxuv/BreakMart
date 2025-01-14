const mongoose = require('mongoose');


const MONGO_URI = 'mongodb+srv://admin:Betn1cs21137@cluster0.ohkmpfo.mongodb.net/BreakMart';


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
