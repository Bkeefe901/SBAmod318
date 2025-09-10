import express from 'express';
import { bikes } from '../data/bikes.mjs';


const router = express.Router();


// routes




router.route("/")
    .get((req, res) => {
        const brand = req.query.brand; //localhost:3000/bikes?brand=<brandname>
        // Show All Bikes of a Certain Brand 
        // @route GET /bikes/?brand=<brandname>
        // @desc Show All Bikes of a Certain Brand if the user used the ?brand query
        // @access Public
        if (brand) {
            const bikeList = bikes.filter((bike) => bike.brand.toLowerCase() == brand.toLowerCase())
            res.json(bikeList);
            // Show All Bikes 
            // @route GET /bikes/
            // @desc Show All Bikes
            // @access Public
        } else res.json(bikes);


    })
    .post((req, res) => {
        const Brand = req.body.Brand;
        const Model = req.body.Model;
        const Year = req.body.Year;
        const Id = bikes.length;

        const bike = {
            id: Id,
            brand: Brand,
            model: Model,
            year: Year
        };
        bikes.push(bike);
        res.json(bikes);

    })


router.route("/:id")
    .get((req, res, next) => {
        const id = req.params.id;
        const aBike = bikes.find((bike) => bike.id == id);
        if (aBike) {
            res.json(aBike);
        } else next();
    })









export default router;