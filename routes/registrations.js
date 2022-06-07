const express = require('express');
const Post = require('../models/Post');
const Registration = require('../models/Registration');
const registrationRouter = express.Router();

registrationRouter.get('/', (req, res) => {
    res.send("We are on registrations");
});

registrationRouter.post('/', (req, res) => {
    console.log(req.body);
    const registration = new Registration({
        name: req.body.name,
        phone:req.body.phone,
        email:req.body.email
    });

    registration.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

module.exports = registrationRouter;

