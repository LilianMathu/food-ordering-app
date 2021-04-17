
const express = require('express');
const router = express.Router();
const sendMessage = require('../sms');

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
    const message = `Your order for ${order.menuItemId} has been received.`;
    sendMessage(order.userPhoneNumber.toString(), message);

           res.status(201).json({
                   menuItemId: order.menuItemId,
                   userPhoneNumber: order.userPhoneNumber.toString()
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

//send sms(

    //const message = `Your order for ${menuItemId} has been received.`;
    //sendMessage(order.userPhoneNumber, message);


module.exports = router;


