const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        type: String,

        pricePerDay: Number,

        location: String,

        availableFrom: String,

        availableTo: String,

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

module.exports = mongoose.model('Equipment', equipmentSchema);