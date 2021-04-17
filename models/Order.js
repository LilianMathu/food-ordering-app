const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema({
   menuItemId: {
       type: Schema.Types.ObjectId,
       ref: 'Menu',
       required: true
   },
   userPhoneNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);