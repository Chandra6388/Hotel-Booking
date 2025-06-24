const { Schema, model } = require('mongoose');

const apartmentModel = Schema({
    amenities: {
        description: {
            type: String,
            required: true,
            trim: true
        },
        subtitle: {
            type: String,
            required: true,
            trim: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        features: {
            bar: {
                title: {
                    type: String,
                    required: true,
                    trim: true
                },
                description: {
                    type: String,
                    required: true,
                    trim: true
                }
            },
            beachfront: {
                title: {
                    type: String,
                    required: true,
                    trim: true
                },
                description: {
                    type: String,
                    required: true,
                    trim: true
                }
            },
            location: {
                title: {
                    type: String,
                    required: true,
                    trim: true
                },
                description: {
                    type: String,
                    required: true,
                    trim: true
                }
            },
            pools: {
                title: {
                    type: String,
                    required: true,
                    trim: true
                },
                description: {
                    type: String,
                    required: true,
                    trim: true
                }
            },
            restaurant: {
                title: {
                    type: String,
                    required: true,
                    trim: true
                },
                description: {
                    type: String,
                    required: true,
                    trim: true
                }
            },
            wifi: {
                title: {
                    type: String,
                    required: true,
                    trim: true
                },
                description: {
                    type: String,
                    required: true,
                    trim: true
                }
            },
        },
        booking: {
            type: String,
            required: true,
            trim: true
        },
        cta: {
            type: Number,
            required: true,
            trim: true
        },
        featuredApartments: {
            type: Number,
            required: true,
            trim: true
        },
        welcome: {
            type: Number,
            required: true,
            trim: true
        },


    },
    booking:{
        benefits:{
            type: String,
            required: true,
            trim: true
        }
    }
}, {
    timestamps: true
},
)


const apartment_Model = model('APARTMENT', apartmentModel);



module.exports = apartment_Model;