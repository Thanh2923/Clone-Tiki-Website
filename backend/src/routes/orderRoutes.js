const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();


router.get('/', orderController.getOrders);


router.post('/', orderController.createOrder);


router.put('/:id', orderController.updateOrder);


router.delete('/:id', orderController.deleteOrder);

module.exports = router;
