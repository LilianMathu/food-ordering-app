const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema({
   menuItemId: {
       type: Schema.Types.ObjectId,
       ref: 'Menu',
       required: true
   },
   userPhoneNumber: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);