const express = require('express');
const cors = require('cors');
const app = express();

// Use the PORT environment variable, or default to 3000 if not set
const PORT = process.env.PORT || 3000;
app.use(express.json());    
app.use(cors());    
let info = [];  

// Define a simple route
app.get('/get', (req, res) => {
    res.send(info);
});

app.post('/post',(req,res) => { 
    const newData = req.body;  
    info.push(newData); 
    res.send("Posted Data Successfully");   
}); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 