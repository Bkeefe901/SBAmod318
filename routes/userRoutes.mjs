import express from 'express';
import { users } from '../data/users.mjs';



const router = express.Router();

// routes

router.route("/")
    .get((req, res)=>{
        res.json(users);
    })





export default router;