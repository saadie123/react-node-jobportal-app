const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const router = express.Router();

router.post('/register',async (req, res) => {
    const oldUser = await User.findOne({email: req.body.email});
    if(oldUser){
        return res.status(400).send({error:'An account is already registered with this email'});
    }
    bcrypt.hash(req.body.password, 10,async (err, hash) => {
        if(err){
            return res.status(500).send({err});
        }
        try {
            const user = new User({
                ...req.body,
                password: hash,
            });
            const newUser = await user.save();
            res.status(201).send({newUser});
        } catch (error) {
            res.status(400).send({error});
        }
    });
});



module.exports = router;