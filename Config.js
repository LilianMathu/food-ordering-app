const env = require('dotenv');

env.config();

module.exports =  {
    PORT: process.env.PORT || 5000,
    MONGODBURI: process.env.MONGODBURI ,
    //SMSUserName: USERNAME,
    //SMSAPIKEY: APIKEY

};