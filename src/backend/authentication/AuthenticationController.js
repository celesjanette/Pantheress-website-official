const express = require('express');
const puppeteer = require('puppeteer');

let router = express.Router();

router.get('/register', async function (req, res) {
    res.status(201).send("user saved")
});

module.exports = router;