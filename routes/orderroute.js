
const express = require('express');
const router = express.Router();

//import db model
const Order = require('../models/Order');
const Menu = require('../models/Menu');


//Order POST route
router.post('/', (req, res) => {
    Menu.findById(req.body.menuItemId)
    .then(menu => {
        if(!menu._id) {
            return res.status(404).json({
                message: 'MenuItem not found'
            });
        }
        const order = new Order({
           ...req.body
        });
    
       return order
       .save()
       .then(order => {
           res.status(201).json({
                   menuItemId: order.menuItemId,
                   userPhoneNumber: `+${order.userPhoneNumber.toString()}`
           });
       })
       .catch(error => {
           res.status(200).json({ 
               message: 'MenuItem with that id not found',
                
            });
       });
    })
    .catch(error => {
        res.status(500).json({ 
            message: 'MenuItem with that id not found',
             
        });
    });

});

module.exports = router;