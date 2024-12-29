const mongoose = require('mongoose');
const express = require('express');
const { databaseConnectionString } = require('../../../config');

let router = express.Router();

mongoose.connect(databaseConnectionString);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (error) => {
    console.log('Connection error:', error);
});

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

router.post('/register', async (req, res) => {
    try {
        console.log("data received", req.body);
        const user = new User(req.body);
        console.log("user", user);
        const response = await user.save();
        console.log("response", response);
        res.status(201).send("user saved");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;