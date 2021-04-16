const express = require('express');
const router = express.Router();

//import db model
const Menu = require('../models/Menu');


// Menu POST route
router.post('/', (req, res) => {
    const menu = new Menu ({
        ...req.body
    });

    menu.save()
        .then(result => {
            res.status(201).json({
                status: 201,
                message: "OK",
                data: {
                    _id: menu._id,
                    name: menu.name,
                    price: menu.price
                }
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error });
        });
});


// Menu GET routes
router.get('/', (req, res) => {
    Menu.find()
        .select('_id name price ')
        .exec()
        .then(menu => {
            const response = {
                menuItem: menu.map(menu => {
                    return {
                        status: 200,
                        message: "OK",
                        data: [{
                            _id: menu._id,                        
                            name: menu.name,
                            price: menu.price,
                        }]
                    }
                })
            };
            
            res.status(200).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        });
});

module.exports = router;
