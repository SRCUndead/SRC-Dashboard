const mongoose = require('mongoose');

const championshipSchema = new mongoose.Schema({
    championshipName: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    drivers: [{
        type: String,
    }],
    races: [{
        type: String,
    }]
});

module.exports = mongoose.model('Championship', championshipSchema);