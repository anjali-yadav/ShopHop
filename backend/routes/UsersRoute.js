const express = require('express');
const { authController, getUserProfile } = require('../controllers/usersController');
const {protect} = require('../middlewares/authMiddleware');
const router = express.Router();

//post email and password auth
router.post('/login', authController);

//get user profile Private Router
// router.route('/profile').get(getUserProfile);

//get user profile Private Route
router.route("/profile").get(protect,getUserProfile);
module.exports = router;