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
            // @route GET /bikes
            // @desc Show All Bikes
            // @access Public
        } else res.json(bikes);


    })
    // Create a mew bike obj for bikes data
    // @route Post /bikes
    // @desc Post a new bike to the bikes data
    // @access Public
    .post((req, res) => {
        let { Brand, Model, Year, FrameMaterial, BrakeType, FrameSize } = req.body;
        // const Brand = req.body.Brand;
        // const Model = req.body.Model;
        // const Year = req.body.Year;
        // const FrameMaterial = req
        const Id = bikes.length;

        const bike = {
            id: Id,
            brand: Brand,
            model: Model,
            year: Year,
            frame_material: FrameMaterial,
            brake_type: BrakeType,
            frame_size: FrameSize,
        };
       
        bikes.push(bike);
        res.json(bikes);

    })


router.route("/:id")
    // Get a bike by id
    // @route GET /bikes/:id
    // @desc get a bike by id
    // @access Public
    .get((req, res, next) => {
        const id = req.params.id;
        const aBike = bikes.find((bike) => bike.id == id);
        if (aBike) {
            res.json(aBike);
        } else next();
    })









export default router;