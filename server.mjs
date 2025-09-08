// Imports
import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import bikeRoutes from './routes/bikeRoutes.mjs';
import componentRoutes from './routes/componentRoutes.mjs';

// Env Setup
const app = express();
const PORT = 3000;



// Middleware



// Routes
app.use('/users', userRoutes);
app.use('/bikes', bikeRoutes);
app.use('Components', componentRoutes);



// Global Error Handling Middleware
app.use(function(err, req, res, next){
    res.status(err.status || 500).json({msg: `🖐️ STOP! you have an Error: ${err.message}`});
});



// Server Listener
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
});