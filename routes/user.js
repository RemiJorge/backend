const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/forget-password', userCtrl.forgetPassword);
router.post('/change-password', auth.verifyToken, userCtrl.changePassword);
router.get('/users', auth.verifyToken, auth.isModerator, userCtrl.getAllUsers);

module.exports = router;