const express = require('express');
const { Error } = require('mongoose');
const router = express.Router();
const {
    getProduct, 
    getProducts,
    createProductReview,
    getTopProducts,
} = require('../controllers/productsController')
const {protect, admin}  = require('../middlewares/authMiddleware')
//GET ROUTE FOR ALL PRODUCTS
router.route('/').get(getProducts);

router.route('/:id/reviews').post(protect,createProductReview);

router.get('/top', getTopProducts)
//GET PRODUCT FOR SINGLE PRODUCT
router.route('/:id').get(getProduct);

module.exports = router;