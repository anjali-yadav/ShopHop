const express = require('express');
const router = express.Router()
const {
    authController,
    registerUser,
    getUserProfile,
    getUsers,
    updateUserProfile,
    deleteUser,
    getUserById,
    updateUser
} = require('../controllers/usersController.js')
const { protect, admin } = require('../middlewares/authMiddleware.js')

router.route('/')
.post(registerUser)
.get(protect, admin, getUsers)
//post email and password auth
router.post('/login', authController);

//get user profile Private Route
router.route("/profile")
.get(protect,getUserProfile)
.put(protect, updateUserProfile)

router.route("/:id")
.get(protect, admin, getUserById)
.put(protect, admin, updateUser)
.delete(protect, admin, deleteUser)

module.exports = router;