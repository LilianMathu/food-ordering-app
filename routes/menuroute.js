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

module.exports = router;
