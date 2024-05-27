// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());

const port = 9000;  

// Routes
app.get('/',(req,res) => {
    res.send({
        titlte: "Stephen",
        desc : "Description of the Page"
    })  
})   


app.listen(port, () => console.log(`Listening to port ${port}`));
