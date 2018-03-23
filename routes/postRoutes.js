const express = require('express');

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

router.post('/',async (req,res)=>{
    try {
        const post = new Post({
            ...req.body
        });
        const savedPost = await post.save();
        res.status(201).send({post:savedPost});
    } catch (error) {
        res.status(400).send({error});
        console.log(error)
    }
})


module.exports = router;