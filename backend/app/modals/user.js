const { Schema, model } = require('mongoose'); 

const userModel = Schema({
    username: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true 
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER', 'SELLER'],
        default: 'USER',
    },
   
    profile_image: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    zip: {
        type: String,
        default: null
    },
    
},
    {
        timestamps: true
    },

)
const User_model = model('USER', userModel);



module.exports = User_model;