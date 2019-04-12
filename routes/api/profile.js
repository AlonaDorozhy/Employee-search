const express = require('express');
const router = express.Router();

// route   get api/profile/test

router.get('/test', (req, res) => res.json({ msg: 'Look at your profile' }));

module.exports = router;
