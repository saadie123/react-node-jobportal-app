const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value)=>{
                return validator.isEmail(value)
            },
            message: "{VALUE} is not a valid Email address"
        }
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    birthDate: Date,
    address: String,
    companyName: String,
    companyAddress: String
});

module.exports = mongoose.model('users', userSchema);