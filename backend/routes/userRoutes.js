const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/create', createUser);
router.post('/login', loginUser); 

module.exports = router;
