const mongoose = require('mongoose');

const wasteSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true
        },

        quantity: String,

        price: Number,

        location: String,

        availableFrom: String,

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

module.exports = mongoose.model('Waste', wasteSchema);