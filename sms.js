const config = require('./Config');

const credentials = {
    apiKey: config.SMS_API_KEY,
    username: config.SMS_USERNAME,
  };

// initialize africastalking gateway
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage(userPhoneNumber, message) {
    // sending parameters
    const options = {
        to: userPhoneNumber,
        message
    }

    // send sms
	sms.send(options)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
         });

};

module.exports = sendMessage    ;