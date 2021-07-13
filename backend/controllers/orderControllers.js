const Order = require('../models/order');
const asyncHandler = require('express-async-handler');

//Create new Order
// post /api/orders/

const addOrderItems = asyncHandler(async (req,res)=>{
    const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice} = req.body;
    // console.log(req.user._id);
    if(orderItems && orderItems.length===0)
    {
        res.status(400)
        throw new Error('No order items')
    } 
    else {
        
        const order = new Order({
            orderItems, 
            User: req.user._id,
            shippingAddress, 
            paymentMethod, 
            itemsPrice, 
            taxPrice, 
            shippingPrice, 
            totalPrice
        })
        // console.log(order.orderItems);
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      'User',
      'name email'
    )
      // console.log(order)
    if (order) {
      res.json(order)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
})

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  
  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult={
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address
    }
    const updatedOrder = await order.save();
    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})
  
module.exports = {addOrderItems,getOrderById, updateOrderToPaid}

