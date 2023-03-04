const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    username:{
        type: String, 
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    bio:String,
    avatarUrl: String,
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const User = mongoose.model('User', userSchema)

module.exports = User;