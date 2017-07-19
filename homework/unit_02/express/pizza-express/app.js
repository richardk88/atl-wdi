const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index', {
		data:'Welcome to Pizza Express!'
	});
});

const toppingsController = require('./controllers/topping_controller');
app.use('/topping', toppingsController);

const orderController = require('./controllers/order_controller');
app.use('/order', orderController);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
