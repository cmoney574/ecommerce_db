const router = require('express').Router();

const User = require('../models/User');
const Product = require('../models/Product');

// localhost:6969/api/
router.get('/', (req, res) => {
	User.findAll().then((data) => {
		res.json(data);
	});
});

// This route will post User data to the User Table
router.post('/user', (req, res) => {
	User.create({
		name: req.body.name,
		credit_card: req.body.credit_card,
		address: req.body.address,
	}).then((newUser) => {
		res.json(newUser);
	});
});

module.exports = router;