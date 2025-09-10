import express from 'express';
import { components } from '../data/components.mjs';


const router = express.Router();


// routes

router.route("/")
    .get((req, res) => {
        res.json(components);
    })


router.route("/:id")
    .get((req, res, next) => {
        const id = req.params.id;
        const aComp = components.find((component) => component.id == id);
        if (aComp) {
            res.json(aComp);
        } else next();
    })








export default router;