const express = require('express');
const router = express.Router();


//Login
router.get('/login', (req, res) => res.send('Welcome'));
//Register
router.get('/register', (req, res) => res.send('Register Yourself'));


module.exports = router;