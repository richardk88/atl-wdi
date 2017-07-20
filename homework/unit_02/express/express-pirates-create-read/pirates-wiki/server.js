//your code here
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');


//controllers for /pirates resource
const pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);




const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`catch me at port ${port}`);
});