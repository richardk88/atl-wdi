const express = require('express');
const router = express.Router();

router.get('/:amount/:pizzaSize', (req, res) => {
	res.send(`Your order for ${req.params.amount} ${req.params.pizzaSize} pizzas will be ready in 1 minute!`);
});

module.exports = router;
