const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    shift:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    postedOn:{
        type: Date,
        default: Date.now()
    },
    experience: String,
    salary: Number,
    qualification: String,
    location: String,
    lastDate: Date,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = mongoose.model('posts',postSchema);