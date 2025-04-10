const express = require('express');
const { getAccounts } = require('../controllers/accountController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getAccounts);

module.exports = router;
