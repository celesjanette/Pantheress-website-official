const mongoose = require('mongoose');
const express = require('express');
let router = express.Router();

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('test_users', userSchema);

router.post('/register', async (req, res) => {
    try {
        console.log("data received: ", req.body);
        const response = await User.create(req.body);
        console.log("response: ", response);
        res.status(201).send("user saved");
    } catch (error) {
        res.status(400).send("error: " + error);
    }
});

module.exports = router;