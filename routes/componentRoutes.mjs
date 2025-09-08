import express from 'express';
import { components } from '../data/components.mjs';


const router = express.Router();


// routes

router.route("/")
    .get((req, res)=>{
        res.json(components);
    })





export default router;