const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const auth = require('../middlewares/auth');
const User = require('../models/User');
const router = express.Router();

router.get('/current-user', auth,(req,res)=>{
    res.status(200).send(req.userData);
});

router.post('/register',async (req, res) => {
    const oldUser = await User.findOne({email: req.body.email});
    if(oldUser){
        return res.status(400).send({error:'An account is already registered with this email!'});
    }
    bcrypt.hash(req.body.password, 10,async (err, hash) => {
        if(err){
            return res.status(400).send({err});
        }
        try {
            const user = new User({
                ...req.body,
                password: hash,
            });
            const newUser = await user.save();
            res.status(201).send({newUser});
        } catch (error) {
            res.status(500).send({error});
        }
    });
});


router.post('/login',async (req,res)=>{
    try {
        let dbuser = await User.findOne({email: req.body.email});
        if(!dbuser){
            return res.status(404).send({error:'No user was found with this email!'});
        }        
        bcrypt.compare(req.body.password, dbuser.password, (err, match)=>{
            if(err){
                return res.status(400).send({err});
            }
            if(!match){
                return res.status(401).send({error:'Password is incorrect!'});
            }
            const user = {
                name: dbuser.name,
                email: dbuser.email,
                role: dbuser.role,
                birthDate: dbuser.birthDate,
                address: dbuser.address,
                companyName: dbuser.companyName,
                companyAddress: dbuser.companyAddress
            }
            const token = jwt.sign({
                id: dbuser.id,
                ...user
            },'javascriptislove',{
                expiresIn: '1h'
            });
            res.status(200).send({user,token});
        });
    } catch (error) {
        res.status(500).send({error});
    }
})


module.exports = router;