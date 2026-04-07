const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
    track: {
        type: String,
        required: true
    },
    weather: {
        type: String,
        required: true
    },
    results: [{
        driver: String,
        position: Number,
        time: String
    }],
    lapTimes: [{
        lap: Number,
        time: String
    }]
}, {
    timestamps: true
});

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;