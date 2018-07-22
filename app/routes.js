const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    res.render();
});

router.get('/about', (req, res) => {
    res.render();
});

router.get('/contact', (req, res) => {
    res.render();
});

router.post('/contact', (req, res) => {
    
});