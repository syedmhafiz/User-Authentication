const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Chole na app Chole na ekdome chole na'));

module.exports = router;