const express = require('express');
const { Error } = require('mongoose');
const router = express.Router();
const {getProduct, getProducts} = require('../controllers/productsController')

//GET ROUTE FOR ALL PRODUCTS
router.route('/products').get(getProducts);


//GET PRODUCT FOR SINGLE PRODUCT // another method

router.get(
    '/products/:id',
    getProduct
)

module.exports = router;