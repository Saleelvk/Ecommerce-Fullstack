const express = require('express');
const upload = require('../utils/image-upload'); // Your multer config
const { getProducts, addProduct, editProduct, deleteProduct, getProductsById } = require('../controllers/product-controller');
const { adminOnly, authMiddleware } = require('../middlewares/auth-middleware');
const router = express.Router();

// Routes for products
router.get('/products', getProducts);
router.get('/products/:id', getProductsById);

// Admin routes with authentication and authorization
router.post('/addProduct', authMiddleware, adminOnly, upload.array('images', 5), addProduct);
router.put('/editproduct/:id', authMiddleware, adminOnly, upload.array('images', 5), editProduct);
router.delete('/deleteProduct/:id', authMiddleware, adminOnly, deleteProduct);

module.exports = router;
