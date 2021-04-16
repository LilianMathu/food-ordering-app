const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./Config');

const app = express();

const db = config.MONGODBURI;

//set db connection
mongoose.connect(
    db, 
    {
       useNewUrlParser: true, 
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false
    }
).then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.post('/', (req, res) => {
    const {id, name, price } = req.body;

    res.status(200).json({
        status: 201,
        message: "ok",
        data: {
            id,
            name,
            price
        }
        
    });
});


module.exports = app;
