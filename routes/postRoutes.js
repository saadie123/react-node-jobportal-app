const express = require('express');

const auth = require('../middlewares/auth');

const Post = require('../models/Post');
const router = express.Router();

router.get('/',async (req,res)=>{
    try {
        const posts = await Post.find();
        if(!posts){
            res.status(404).send({message: 'No posts found!'});
        }
        res.status(200).send({posts});
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id',async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).send({message: 'Post was not found'});
        }
        res.status(200).send({post});
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
});

router.post('/',auth,async (req,res)=>{
    try {
        const post = new Post({
            ...req.body,
            user: req.userData.id
        });
        const savedPost = await post.save();
        res.status(201).send({post:savedPost});
    } catch (error) {
        res.status(400).send({error});
        console.log(error)
    }
})

router.put('/:id',auth,async (req,res)=>{
    try {
        const post = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(!post){
            return res.status(404).send({message: 'Post was not found'});
        }
        res.status(200).send({post});
    } catch (error) {
        res.status(400).send({error});
        console.log(error);
    }
});

router.delete('/:id',auth,async (req,res)=>{
    try {
        const post = await Post.findByIdAndRemove(req.params.id);
        if(!post){
            return res.status(404).send({message: 'Post was not found'});            
        }
        res.status(200).send({post});
    } catch (error) {
        res.status(400).send({error});
        console.log(error);
    }
});


module.exports = router;