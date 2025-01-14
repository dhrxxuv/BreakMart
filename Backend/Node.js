const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const MONGO_URI = 'mongodb+srv://admin:Betn1cs21137@cluster0.ohkmpfo.mongodb.net/BreakMart'
app.use(cors());


app.get('/get', async(req,res)=>{
    res.json({
        message:"HI"
    })
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  
