const mongoose = require('mongoose');

const marketPriceSchema = new mongoose.Schema(
    {
        crop: {
            type: String,
            required: true
        },

        market: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        unit: {
            type: String,
            default: 'quintal'
        },

        date: {
            type: String,
            default: () => new Date().toISOString().slice(0, 10)
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('MarketPrice', marketPriceSchema);