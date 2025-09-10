// Imports
import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import bikeRoutes from './routes/bikeRoutes.mjs';
import componentRoutes from './routes/componentRoutes.mjs';
import fs from 'fs';
import { errorHandler } from './middleware/errorHandling.mjs';



// Env Setup
const app = express();
const PORT = 3000;


// Template Engine Def

app.engine('cycle', (filePath, options, callback)=>{
    fs.readFile(filePath, (err, content)=>{
        if(err) return callback(err);

        const rendered = content
            .toString()
            .replaceAll('#title#', options.heading)
            .replace('#content#', options.content);

        return callback(null, rendered);
    });
    
});

// Directory for templates:
app.set("views", "./views");
// Register template engine
app.set("view engine", "cycle");



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// Routes
app.use('/users', userRoutes);
app.use('/bikes', bikeRoutes);
app.use('/components', componentRoutes);
app.get("/home", (req, res)=>{
    let option = {
        heading: "Welcome to The Bike User API!!",
        content: "Fill out info to add yourself as a user to the Users Database"
    }

    res.render("home", option);
});




// Global Error Handling Middleware
app.use(errorHandler);



// Server Listener
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
});