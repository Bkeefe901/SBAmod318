// Imports
import express from 'express';

// Env Setup
const app = express();
const PORT = 3000;



// Middleware



// Routes



// Global Error Handling Middleware
app.use(function(err, req, res, next){
    res.status(500).send(err.message);
})



// Server Listener
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})