const env = require('dotenv');

env.config();

module.exports =  {
    PORT: process.env.PORT || 5000,
    MONGODBURI: process.env.MONGODBURI ,
    SMS_USERNAME: process.env.SMS_USERNAME,
    SMS_API_KEY: process.env.SMS_API_KEY

};