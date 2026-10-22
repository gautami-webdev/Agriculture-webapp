const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        crop: {
            type: String,
            required: true
        },

        quantity: String,

        price: Number,

        location: String,

        description: String,

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);