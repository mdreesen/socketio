const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Message Server is up')
});

module.exports = router;