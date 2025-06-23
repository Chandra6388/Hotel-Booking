const { Schema, model } = require('mongoose'); 

const apartmentModel = Schema({
    name: {
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    capacity : {
        type: Number,
        required: true,
        trim: true
    },
    size: {
        type: Number,
        required: true,
        trim: true
    },
   
    image: {
        type: String,
        default: null,
        trim: true
    },
    location: {
        type: String,
        default: null,
        trim: true
    },
    features: {
        type: [String],
        default: []
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },    
},
    {
        timestamps: true
    },

)
const apartment_Model = model('APARTMENT', apartmentModel);



module.exports = apartment_Model;