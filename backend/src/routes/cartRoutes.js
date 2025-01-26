const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();

// Lấy giỏ hàng của người dùng
router.get('/', cartController.getCart);

// Thêm sản phẩm vào giỏ hàng
router.post('/', cartController.addToCart);

// Cập nhật số lượng sản phẩm trong giỏ hàng
router.put('/:id', cartController.updateCartItem);
// Xóa sản phẩm trong giỏ hàng theo danh sách ID sản phẩm (mảng)
router.delete('/',  cartController.removeFromInCartId);

// Xóa tất cả sản phẩm trong giỏ hàng của người dùng
router.delete('/removeAllCart',  cartController.removeFromCartByUserId);


module.exports = router;
