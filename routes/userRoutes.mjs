import express from 'express';
import { users } from '../data/users.mjs';



const router = express.Router();

// routes

router.route("/")
    // @route GET /users
    // @desc Get all users
    // @access Public
    .get((req, res)=>{
        res.json(users);
    })
    // @route POST /users
    // @desc  Create one new user
    // @access Public
    .post((req, res)=>{
        const { userName, bikeId, componentId } = req.body;
        let id = users.length;

        if(userName && bikeId && componentId){
            const user = {
                id: id,
                userName: userName,
                bikeId: bikeId,
                componentId: componentId
            };
            users.push(user);
            res.json(users);
        } else{
            res.json({error: "Insufficient Data"});
        }

    })

router.route("/:id")
    .patch((req, res, next)=> {
        const id = req.params.id;
        const data = req.body;

        const user = users.find((user, i) => {
            if(user.id == id){
                for(const item in data){
                    users[i][item] = data[item];
                }
                return true;
            }
        });

        if(user){
            res.json(users);
        } else next();
        
    })
    .delete((req, res, next)=> {
        const id = req.params.id;

        const user = users.find((user, i) => {
            if(user.id == id){
                users.splice(i, 1);
                return true;
            }
        });

        if(user){
            res.json(users);
        } else next();

    })





export default router;



// {
//     id: 2,
//     userName: "BrokeSinner",
//     bikeId: '',
//     componentId: ''
// }