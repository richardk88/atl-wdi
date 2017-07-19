const express = require('express');
const router = express.Router();

router.get('/:type', (req, res) => {
	res.send(`${req.param.type} pizza! Good choice.`);
})

module.exports = router;