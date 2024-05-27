const express = require('express');
const app = express();

// Use the PORT environment variable, or default to 3000 if not set
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/home', (req, res) => {
    res.send({
        title: "Title",
        desc: "description"
    }); 
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 