'use strict';

const express = require('express');
const router = express.Router();

let events = [];

// Create a new racing event
router.post('/events', (req, res) => {
    const newEvent = req.body;
    events.push(newEvent);
    res.status(201).send(newEvent);
});

// Read all racing events
router.get('/events', (req, res) => {
    res.status(200).send(events);
});

// Update an existing racing event
router.put('/events/:id', (req, res) => {
    const eventId = req.params.id;
    const eventIndex = events.findIndex(e => e.id === eventId);
    if (eventIndex !== -1) {
        events[eventIndex] = req.body;
        res.status(200).send(events[eventIndex]);
    } else {
        res.status(404).send({'message': 'Event not found'});
    }
});

// Delete a racing event
router.delete('/events/:id', (req, res) => {
    const eventId = req.params.id;
    events = events.filter(e => e.id !== eventId);
    res.status(204).send();
});

module.exports = router;
