const express = require('express');
const router = express.Router();

// route   get api/users/test

router.get('/test', (req, res) => res.json({ msg: 'Users page' }));

module.exports = router;
