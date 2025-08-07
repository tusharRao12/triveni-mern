const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  loginUser
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getUsers); // protected route
router.post('/create', createUser);
router.post('/login', loginUser);

module.exports = router;
