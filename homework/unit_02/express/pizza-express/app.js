const express = require('express');
const hbs = require('hbs');

const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to Pizza Express!');
})

app.get('/topping/:type', (req, res) => {
	res.send(`${req.param.type} pizza! Good choice.`);
})

app.get('/order/:amount/:pizzaSize', (req, res) => {
	res.send(`Your order for ${req.params.amount} ${req.params.pizzaSize} pizzas will be ready in 1 minute!`);
});


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});