'use strict';

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    track: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);