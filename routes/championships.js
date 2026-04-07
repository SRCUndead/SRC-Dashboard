const express = require('express');
const router = express.Router();

// Mock data structure
let championships = [];
let driverChampionships = {};

// CREATE: Add a new championship
router.post('/', (req, res) => {
    const { name } = req.body;
    const championship = { id: championships.length + 1, name };
    championships.push(championship);
    res.status(201).json(championship);
});

// READ: Get all championships
router.get('/', (req, res) => {
    res.json(championships);
});

// UPDATE: Update a championship
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const championship = championships.find(c => c.id == id);
    if (championship) {
        championship.name = name;
        res.json(championship);
    } else {
        res.status(404).send('Championship not found');
    }
});

// ADD DRIVER TO CHAMPIONSHIP
router.post('/:id/drivers', (req, res) => {
    const { id } = req.params;
    const { driverId } = req.body;
    if (!driverChampionships[id]) {
        driverChampionships[id] = [];
    }
    driverChampionships[id].push(driverId);
    res.status(201).json(driverChampionships[id]);
});

// REMOVE DRIVER FROM CHAMPIONSHIP
router.delete('/:id/drivers/:driverId', (req, res) => {
    const { id, driverId } = req.params;
    if (driverChampionships[id]) {
        driverChampionships[id] = driverChampionships[id].filter(d => d !== driverId);
        res.status(200).json(driverChampionships[id]);
    } else {
        res.status(404).send('Championship or driver not found');
    }
});

module.exports = router;