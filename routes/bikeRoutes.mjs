import express from 'express';
import { bikes } from '../data/bikes.mjs';


const router = express.Router();


// routes

router.route("/")
    .get((req, res)=>{
        res.json(bikes);
    })





export default router;