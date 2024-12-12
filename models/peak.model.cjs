const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peakSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Product name is required"],
        },
        county: {
            type: String,
            required: true,
            default: 'Pallars Sobirà',
        },
        altitude: {
            type: Number,
            required: true,
            default: 0,
        },
        latitude: {
            type: Number,
            required: true,
            default: 0,
        },
        length: {
            type: Number,
            required: true,
            default: 0,
        },
        UTM31TX: {
            type: Number,
            required: false,
        },
        UTM31TY: {
            type: Number,
            required: false,
        },
    },
    {
        timestamps: true
    }
);

const Peak = mongoose.model("Peak", peakSchema);
module.exports = Peak;