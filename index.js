// Import packages
import express from 'express';

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.get('/home', (req, res) => { 
    res.send({
        title: "Stephen",   
        desc: "Description of the Page"
    });
});

// Export the Express app as a module       
module.exports = app;   
