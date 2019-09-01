const express = require('express');
const router = express.Router();
let title = '';

router.get('/', (req, res) => {
    title = 'Home';
    res.render('pages/home', {title: title});
});

router.get('/about', (req, res) => {
    title = 'About';
    res.render('pages/about', {title: title});
});

router.get('/contact', (req, res) => {
    title = 'Contact us'
    res.render('pages/contact', {title: title});
});

router.post('/contact', (req, res) => {
    
});
module.exports = router;