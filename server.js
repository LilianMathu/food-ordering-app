const app = require('./app');
const config = require('./Config');

const port = config.PORT;

app.listen(port, ()=> {
    console.log(`Server is and running on port ${process.env.PORT}`);
});
;